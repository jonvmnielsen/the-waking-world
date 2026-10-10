// Ressourcebjælke, "ledige arbejdere"-knap, kommandopanel for arbejdere og bygninger,
// og bjælken der vises mens en bygning placeres.
import { BYGNINGER, BYGGEMENU, ENHEDER } from './bygningsdata.js';
import { GRENE, VETERAN } from './soldatdata.js';
import { kanKæmpe } from './haer.js';
import { RES_NAVN } from './okonomi.js';
import { EGENSKABER, ofringsPris, OFRINGS_IKON } from './heltstats.js';
import { ikon } from './ikoner.js';
import { bus } from './events.js';

const $ = (id) => document.getElementById(id);
const RES = ['guld', 'træ', 'sten'];
const STATUS = {
  ledig: () => 'Idle', gå: () => 'Walking', tilKilde: (a) => `Heading for ${RES_NAVN[a.kilde?.type]}`, høster: (a) => `Gathering ${RES_NAVN[a.kilde?.type]}`,
  iMine: () => 'Mining gold', tilAflevering: (a) => `Carrying ${RES_NAVN[a.bærer?.type]} home`,
  tilByg: (a) => `On the way to build ${a.bygning?.data.navn}`, bygger: (a) => `Building ${a.bygning?.data.navn}`,
};

const prisHtml = (pris = {}) => RES.filter((r) => pris[r]).map((r) => `<span><img alt="${r}" src="${ikon('res-' + r)}">${pris[r]}</span>`).join('');

export class KommandoHud {
  constructor(spil) {
    this.spil = spil;
    this.valg = spil.valg;
    for (const r of RES) $(`res-${r}-ikon`).src = ikon('res-' + r);
    $('res-forsyning-ikon').src = ikon('res-forsyning');
    $('ledige-ikon').src = ikon('økse');
    $('ledige').addEventListener('click', () => this.næsteLedige());
    $('hær-ikon').src = ikon('hær');
    $('hær').addEventListener('click', () => this.valg.vælg(spil.base.hær));
    $('kmd-helt').addEventListener('click', () => { this.valg.vælg(null); });
    $('heltepanel').addEventListener('click', () => { this.valg.vælg(null); spil.rig.centrér(); });
    $('plac-byg').addEventListener('click', () => { const f = this.valg.bekræftPlacering(); if (f) bus.emit('besked', f); });
    $('plac-annuller').addEventListener('click', () => this.valg.annullérPlacering());
    bus.on('valg', () => this.byg());
    bus.on('placering', (p) => this.visPlacering(p));
    this.tid = 0;
    this.byg();
  }

  næsteLedige() {
    const l = this.spil.base.ledige;
    if (!l.length) return;
    this.i = ((this.i ?? -1) + 1) % l.length;
    const a = l[this.i];
    this.valg.vælg(a);
    this.spil.rig.følger = false;
    this.spil.rig.fokus.set(a.x, 0, a.z);
  }

  // Byg panelet op for det valgte
  byg() {
    const v = this.valg.valgt, helt = this.valg.erHelt;
    document.body.classList.toggle('valgt-andet', !helt);
    $('kommando').hidden = helt;
    if (helt) return;
    const knapper = $('kmd-knapper');
    knapper.innerHTML = '';
    if (this.valg.erArbejder) {
      $('kmd-ikon').src = ikon('økse');
      $('kmd-navn').textContent = 'Worker';
      for (const r of RES) this.knap(knapper, ikon('res-' + r), `Get ${RES_NAVN[r]}`, '', () => v.høstNærmeste(r));
      for (const type of BYGGEMENU) {
        const d = BYGNINGER[type];
        this.knap(knapper, ikon('byg-' + type), d.kort ?? d.navn, prisHtml(d.pris), () => {
          const mangler = this.spil.økonomi.mangler(d.pris);
          if (mangler) return bus.emit('besked', mangler);
          this.valg.startPlacering(type);
        }, `byg-${type}`);
      }
    } else if (this.valg.erGruppe) {
      this.bygGruppe(v, knapper);
    } else if (this.valg.erBygning) {
      $('kmd-ikon').src = ikon('byg-' + v.type);
      $('kmd-navn').textContent = v.data.navn;
      for (const type of v.data.træner ?? []) {
        const e = ENHEDER[type];
        this.knap(knapper, ikon(e.ikon ?? 'økse'), `Train ${e.navn}`, prisHtml(e.pris), () => {
          const fejl = v.træn(type);
          if (fejl) bus.emit('besked', fejl);
        }, `træn-${type}`);
      }
      if (v.data.butik) this.knap(knapper, ikon('livseliksir'), 'Shop', '', () => this.spil.handlVed(v));
      if (v.data.alter && v.færdig) this.ofringer(knapper);
    }
    this.opdater(1);
  }

  // Ånde-alteret: ofr ressourcer for +1 i en af heltens egenskaber
  ofringer(knapper) {
    const inv = this.spil.helt.inventar;
    for (const n of ['str', 'agi', 'int']) {
      this.knap(knapper, ikon(OFRINGS_IKON[n]), `+1 ${EGENSKABER.kort[n]}`, prisHtml(ofringsPris(inv.permanent.ofringer)), () => {
        const pris = ofringsPris(inv.permanent.ofringer), øko = this.spil.økonomi;
        const mangler = øko.mangler(pris);
        if (mangler) return bus.emit('besked', mangler);
        øko.betal(pris);
        inv.permanent.ofringer += 1;
        inv.øgEgenskaber({ [n]: 1 });
        bus.emit('effekt', { type: 'veteran', x: this.spil.helt.x, z: this.spil.helt.z });
        bus.emit('besked', `Your offering is accepted: +1 ${EGENSKABER.navn[n]}`);
        this.byg();
      }, `ofr-${n}`);
    }
  }

  // Panel for en gruppe: stop, høst (arbejdere) og specialisering af en enkelt veteran-grunt
  bygGruppe(g, knapper) {
    const en = g.length === 1 ? g[0] : null;
    $('kmd-ikon').src = ikon(en?.type ? 'enhed-' + en.type : 'hær');
    $('kmd-navn').textContent = en ? en.navn : `Army · ${g.length}`;
    if (g.every((u) => !kanKæmpe(u))) {
      for (const r of RES) this.knap(knapper, ikon('res-' + r), `Get ${RES_NAVN[r]}`, '', () => g.forEach((a) => a.høstNærmeste(r)));
      return;
    }
    this.knap(knapper, ikon('hær'), 'Stop', '', () => g.forEach((u) => (u.stopOrdre ? u.stopOrdre() : u.kommandoGå(u.x, u.z))));
    const vet = this.spil.veteraner;
    if (en && vet.kanSpecialiseres(en)) {
      for (const id of Object.keys(GRENE)) {
        const b = this.knap(knapper, ikon('enhed-grunt'), GRENE[id].navn, prisHtml(vet.pris(id)), () => {
          const fejl = vet.specialisér(en, id);
          bus.emit('besked', fejl ?? `The grunt heads to the War Camp for ${GRENE[id].navn} training`);
          this.byg();
        }, `gren-${id}`);
        b.classList.add(vet.passer(id) ? 'passer' : 'dobbelt');
        b.title = GRENE[id].tekst;
      }
    }
  }

  knap(rod, billede, navn, pris, vedTryk, id) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'kmd';
    if (id) b.dataset.id = id;
    b.innerHTML = `<img alt="" src="${billede}"><b>${navn}</b><span class="pris">${pris}</span>`;
    b.addEventListener('click', (e) => { e.stopPropagation(); vedTryk(); this.opdater(1); });
    rod.appendChild(b);
    return b;
  }

  visPlacering(p) {
    $('placering').hidden = !p;
    if (!p) return;
    $('plac-tekst').textContent = p.fejl ?? `Build ${BYGNINGER[p.type].navn} here?`;
    $('plac-byg').disabled = !!p.fejl;
  }

  opdater(dt) {
    const øko = this.spil.økonomi;
    $('res-guld').textContent = øko.guld;
    $('res-træ').textContent = øko.træ;
    $('res-sten').textContent = øko.sten;
    $('res-forsyning').textContent = `${øko.forsyning}/${Math.min(øko.forsyningMaks, 100)}`;
    $('res-forsyning').parentElement.classList.toggle('fuld', øko.forsyning >= øko.forsyningMaks);
    const hær = this.spil.base.hær.length;
    $('hær').classList.toggle('skjult', !hær);
    $('hær-tal').textContent = hær;
    const ledige = this.spil.base.ledige.length;
    $('ledige').classList.toggle('skjult', !ledige);
    $('ledige-tal').textContent = ledige;

    this.tid += dt;
    if (this.tid < 0.2) return;
    this.tid = 0;
    const v = this.valg.valgt;
    if (this.valg.erGruppe) $('kmd-status').textContent = gruppeStatus(v);
    else if (this.valg.erArbejder) {
      $('kmd-status').textContent = STATUS[v.tilstand]?.(v) ?? '';
      for (const b of document.querySelectorAll('#kmd-knapper [data-id^="byg-"]')) b.classList.toggle('dyr', !øko.harRåd(BYGNINGER[b.dataset.id.slice(4)].pris));
    } else if (this.valg.erBygning) {
      let s = v.data.tekst;
      if (!v.færdig) {
        const bygges = this.spil.base.arbejdere.some((a) => a.bygning === v && a.tilstand === 'bygger');
        s = `Under construction ${Math.floor(v.fremskridt * 100)}%${bygges ? '' : ' · Select a worker and tap the site to keep building'}`;
      } else if (v.kø.length) {
        const k = v.kø[0];
        s = `Training ${ENHEDER[k.type].navn} ${Math.floor((k.tid / ENHEDER[k.type].tid) * 100)}% · ${v.kø.length} queued`;
      }
      $('kmd-status').textContent = s;
      for (const b of document.querySelectorAll('#kmd-knapper [data-id^="træn-"]')) {
        const e = ENHEDER[b.dataset.id.slice(5)];
        b.classList.toggle('dyr', !!e.låst || !!øko.mangler(e.pris, e.forsyning) || !v.færdig);
      }
    }
  }
}

function gruppeStatus(g) {
  if (g.length === 1 && g[0].vet) {
    const s = g[0], liv = `${Math.ceil(s.hp)}/${s.maxHp} health`;
    if (s.vet.gren) return `${liv} · ${s.vet.gren.evne}: ${s.vet.gren.evneTekst}`;
    if (s.vet.påVej) return `${liv} · On the way to the War Camp for ${GRENE[s.vet.påVej].navn} training`;
    if (s.vet.veteran) return s.type === 'grunt' ? `${liv} · Veteran — choose a path (green edge = suits your way of fighting)` : `${liv} · Veteran`;
    return `${liv} · Veteran XP ${s.vet.xp}/${VETERAN.tærskel} (survive battles)`;
  }
  const antal = {};
  for (const u of g) { const n = u.navn ?? (u.stats ? 'Hero' : 'Worker'); antal[n] = (antal[n] ?? 0) + 1; }
  return Object.entries(antal).map(([n, k]) => `${k} × ${n}`).join(' · ');
}
