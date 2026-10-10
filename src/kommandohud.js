// Ressourcebjælke, "ledige arbejdere"-knap, kommandopanel for arbejdere og bygninger,
// og bjælken der vises mens en bygning placeres.
import { BYGNINGER, BYGGEMENU, ENHEDER } from './bygningsdata.js';
import { ikon } from './ikoner.js';
import { bus } from './events.js';

const $ = (id) => document.getElementById(id);
const RES = ['guld', 'træ', 'sten'];
const STATUS = {
  ledig: () => 'Ledig', gå: () => 'Går', tilKilde: (a) => `Går efter ${a.kilde?.type}`, høster: (a) => `Henter ${a.kilde?.type}`,
  iMine: () => 'Henter guld i minen', tilAflevering: (a) => `Bærer ${a.bærer?.type} hjem`,
  tilByg: (a) => `Går hen for at bygge ${a.bygning?.data.navn}`, bygger: (a) => `Bygger ${a.bygning?.data.navn}`,
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
      $('kmd-navn').textContent = 'Bærer';
      for (const r of RES) this.knap(knapper, ikon('res-' + r), `Hent ${r}`, '', () => v.høstNærmeste(r));
      for (const type of BYGGEMENU) {
        const d = BYGNINGER[type];
        this.knap(knapper, ikon('byg-' + type), d.kort ?? d.navn, prisHtml(d.pris), () => {
          const mangler = this.spil.økonomi.mangler(d.pris);
          if (mangler) return bus.emit('besked', mangler);
          this.valg.startPlacering(type);
        }, `byg-${type}`);
      }
    } else if (this.valg.erBygning) {
      $('kmd-ikon').src = ikon('byg-' + v.type);
      $('kmd-navn').textContent = v.data.navn;
      for (const type of v.data.træner ?? []) {
        const e = ENHEDER[type];
        this.knap(knapper, ikon(type === 'arbejder' ? 'økse' : 'jernsværd'), `Træn ${e.navn.toLowerCase()}`, e.låst ? 'M4' : prisHtml(e.pris), () => {
          const fejl = v.træn(type);
          if (fejl) bus.emit('besked', fejl);
        }, `træn-${type}`);
      }
      if (v.data.butik) this.knap(knapper, ikon('livseliksir'), 'Handl', '', () => this.spil.handlVed(v));
    }
    this.opdater(1);
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
    $('plac-tekst').textContent = p.fejl ?? `Byg ${BYGNINGER[p.type].navn} her?`;
    $('plac-byg').disabled = !!p.fejl;
  }

  opdater(dt) {
    const øko = this.spil.økonomi;
    $('res-guld').textContent = øko.guld;
    $('res-træ').textContent = øko.træ;
    $('res-sten').textContent = øko.sten;
    $('res-forsyning').textContent = `${øko.forsyning}/${Math.min(øko.forsyningMaks, 100)}`;
    $('res-forsyning').parentElement.classList.toggle('fuld', øko.forsyning >= øko.forsyningMaks);
    const ledige = this.spil.base.ledige.length;
    $('ledige').classList.toggle('skjult', !ledige);
    $('ledige-tal').textContent = ledige;

    this.tid += dt;
    if (this.tid < 0.2) return;
    this.tid = 0;
    const v = this.valg.valgt;
    if (this.valg.erArbejder) {
      $('kmd-status').textContent = STATUS[v.tilstand]?.(v) ?? '';
      for (const b of document.querySelectorAll('#kmd-knapper [data-id^="byg-"]')) b.classList.toggle('dyr', !øko.harRåd(BYGNINGER[b.dataset.id.slice(4)].pris));
    } else if (this.valg.erBygning) {
      let s = v.data.tekst;
      if (!v.færdig) {
        const bygges = this.spil.base.arbejdere.some((a) => a.bygning === v && a.tilstand === 'bygger');
        s = `Bygges ${Math.floor(v.fremskridt * 100)} %${bygges ? '' : ' · Vælg en bærer og tryk på byggepladsen for at bygge videre'}`;
      } else if (v.kø.length) {
        const k = v.kø[0];
        s = `Træner ${ENHEDER[k.type].navn.toLowerCase()} ${Math.floor((k.tid / ENHEDER[k.type].tid) * 100)} % · ${v.kø.length} i kø`;
      }
      $('kmd-status').textContent = s;
      for (const b of document.querySelectorAll('#kmd-knapper [data-id^="træn-"]')) {
        const e = ENHEDER[b.dataset.id.slice(5)];
        b.classList.toggle('dyr', !!e.låst || !!øko.mangler(e.pris, e.forsyning) || !v.færdig);
      }
    }
  }
}
