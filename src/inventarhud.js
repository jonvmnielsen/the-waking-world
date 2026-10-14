// Inventaret på skærmen: seks udstyrspladser (våben … smykke) og en rygsæk med 6 pladser, info-kort og butikken.
// Tryk på et item = info-kort med "Use" (eliksirer og stave i rygsækken), "Equip/Unequip", "Drop" og "Close".
// Butikken (købmanden og egen Marketplace) har fanerne Buy og Sell; kroen sender sine egne varer (kro.js).
import { ITEMS, SJÆLDENHED, TYPE_NAVN, BUTIK, beskriv, salgsPris } from './itemdata.js';
import { ikon } from './ikoner.js';
import { itemInfo, PLADSER_TYPER, PLADS_IKON, PLADS_NAVN } from './udstyr.js';
import { bus } from './events.js';

const $ = (id) => document.getElementById(id);
const HVOR = ['udstyr', 'rygsæk'];

export class InventarHud {
  constructor(spil) {
    this.spil = spil;
    this.inv = spil.helt.inventar;
    this.felter = {
      udstyr: [...document.querySelectorAll('#inv-udstyr .plads')],
      rygsæk: [...document.querySelectorAll('#inv-rygsæk .plads')],
    };
    for (const hvor of HVOR) this.felter[hvor].forEach((el, i) => this.bindPlads(el, hvor, i));
    this.pladser = [...this.felter.udstyr, ...this.felter.rygsæk];
    $('info-luk').addEventListener('click', () => this.lukInfo());
    $('info-smid').addEventListener('click', () => { const v = this.info; if (v) this.inv.smid(v.i, v.hvor); this.lukInfo(); });
    $('info-flyt').addEventListener('click', () => { const v = this.info; if (v) { const f = this.inv.flyt(v.hvor, v.i); if (f) bus.emit('besked', f); } this.lukInfo(); this.tegn(); });
    $('info-brug').addEventListener('click', () => { const v = this.info; this.lukInfo(); if (v) this.brug(v.i, v.hvor); });
    $('butik-luk').addEventListener('click', () => this.lukButik());
    for (const k of document.querySelectorAll('#butik-faner button')) k.addEventListener('click', () => this.visFane(k.dataset.fane));
    bus.on('inventar_ændret', () => this.tegn());
    bus.on('item_samlet', () => this.tegn());
    this.tegn();
  }

  // Tryk på et item åbner info-kortet; derfra bruges, flyttes eller smides det (intet bruges ved et enkelt tryk)
  bindPlads(el, hvor, i) {
    el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); });
    el.addEventListener('pointerup', (e) => {
      e.stopPropagation();
      if (!this.inv.liste(hvor)[i]) return;
      if (this.info?.hvor === hvor && this.info.i === i) this.lukInfo(); else this.visInfo(hvor, i);
    });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  brug(i, hvor) {
    const fejl = this.inv.brug(i, hvor);
    if (fejl && fejl !== 'info') bus.emit('besked', fejl);
    this.tegn();
  }

  tegn() {
    for (const hvor of HVOR) {
      this.felter[hvor].forEach((el, i) => {
        const p = this.inv.liste(hvor)[i], info = p && itemInfo(p);
        el.classList.toggle('tom', !p);
        el.style.setProperty('--sjælden', p ? info.sj.farve : 'transparent');
        el.querySelector('img').src = p ? ikon(p.id) : '';
        el.querySelector('img').alt = p ? info.navn : '';
        if (hvor === 'udstyr') el.dataset.plads = p ? '' : PLADS_IKON[PLADSER_TYPER[i]];   // tom plads viser hvad der hører til
        el.querySelector('.ladning').textContent = p?.ladninger ?? '';
      });
    }
    if (this.fane === 'sælg') this.visFane('sælg');
  }

  visInfo(hvor, i) {
    const p = this.inv.liste(hvor)[i];
    if (!p) return;
    const d = itemInfo(p), sj = d.sj;
    this.info = { hvor, i };
    $('info-ikon').src = ikon(p.id);
    $('info-navn').textContent = d.navn;
    $('info-navn').style.color = sj.farve;
    $('info-type').textContent = `${sj.navn} · ${d.plads ? PLADS_NAVN[d.plads] : TYPE_NAVN[d.type]}${d.grund ? ' · ' + d.grund : ''}${hvor === 'rygsæk' ? ' · in backpack' : ''}`;
    $('info-tekst').innerHTML = d.linjer.map((l) => `<li>${l}</li>`).join('');
    $('info-brug').hidden = !d.brug || hvor !== 'rygsæk';
    $('info-flyt').hidden = !d.plads;
    $('info-flyt').textContent = hvor === 'rygsæk' ? 'Equip' : 'Unequip';
    $('info').classList.add('vis');
  }

  lukInfo() { this.info = null; $('info').classList.remove('vis'); }

  // Butikken: liste over varer med pris. varer = [{ ikon, navn, farve, tekst, pris, kan(), køb() }];
  // uden varer vises købmandens items og fanen Sell (kroen sender sine lejesoldater, se kro.js)
  åbnButik(sted, varer = null, titel = null) {
    this.butikSted = sted;
    this.købVarer = varer ?? BUTIK.map((id) => this.itemVare(id));
    $('butik-faner').hidden = !!varer;
    $('butik-navn').textContent = titel ?? (sted.data ? sted.data.navn : 'Merchant');
    this.visFane('køb');
    $('butik').classList.add('vis');
    bus.emit('butik_åben', { sted });
  }

  visFane(fane) {
    this.fane = fane;
    for (const k of document.querySelectorAll('#butik-faner button')) k.classList.toggle('valgt', k.dataset.fane === fane);
    this.varer = fane === 'sælg' ? this.salgsVarer() : this.købVarer;
    const liste = $('butik-varer');
    liste.innerHTML = this.varer.length ? '' : '<p class="tom-liste">Your hero carries nothing to sell.</p>';
    for (const v of this.varer) {
      const r = document.createElement('div');
      r.className = 'vare';
      r.innerHTML = `<img alt="" src="${v.ikon}"><div><b style="color:${v.farve}">${v.navn}</b><span>${v.tekst}</span></div><button type="button">${v.knap ?? ''}<i class="mønt"></i>${v.pris}</button>`;
      r.querySelector('button').addEventListener('click', () => { v.køb(); if (this.fane === 'sælg') this.visFane('sælg'); this.opdaterButik(); });
      liste.appendChild(r);
    }
    this.opdaterButik();
  }

  // Alle heltens items (udrustede og i rygsækken) til halv pris
  salgsVarer() {
    const ud = [];
    for (const hvor of HVOR) {
      this.inv.liste(hvor).forEach((p, i) => {
        if (!p) return;
        const d = itemInfo(p);
        ud.push({
          ikon: ikon(p.id), navn: d.navn, farve: d.sj.farve, knap: 'Sell ',
          tekst: `${hvor === 'rygsæk' ? 'Backpack' : 'Equipped'} · ${d.linjer.slice(0, 2).join(' · ')}`, pris: salgsPris(p.id, p.rul),
          kan: () => true, køb: () => { this.inv.sælg(hvor, i); this.tegn(); },
        });
      });
    }
    return ud;
  }

  // Købmanden tager mere efter et plyndret karavanetog og mindre efter en eskorte (verden.mod.pris)
  pris(id) { return Math.round(ITEMS[id].pris * (this.butikSted?.type === 'marked' ? (this.spil.verden.mod?.pris ?? 1) : 1)); }

  itemVare(id) {
    const d = ITEMS[id];
    return {
      ikon: ikon(id), navn: d.navn, farve: SJÆLDENHED[d.sjældenhed].farve, tekst: beskriv(id)[0], pris: this.pris(id),
      kan: () => this.inv.guld >= this.pris(id) && (!this.inv.fuld || d.type === 'opsamling'),
      køb: () => this.køb(id),
    };
  }

  køb(id) {
    const d = ITEMS[id];
    const pris = this.pris(id);
    if (this.inv.guld < pris) return bus.emit('besked', 'Not enough gold');
    if (this.inv.fuld && d.type !== 'opsamling') return bus.emit('besked', 'Your inventory is full');
    this.inv.guld -= pris;
    this.inv.modtag(id);
    bus.emit('effekt', { type: 'samlet', x: this.spil.helt.x, z: this.spil.helt.z, farve: 0xffd36b });
  }

  opdaterButik() {
    [...document.querySelectorAll('#butik-varer .vare')].forEach((r, i) => {
      r.querySelector('button').disabled = !this.varer[i]?.kan();
    });
    $('butik-guld').textContent = this.inv.guld;
  }

  lukButik() { this.butikSted = null; this.fane = null; $('butik').classList.remove('vis'); }

  opdater() {
    const h = this.spil.helt;
    // Butikken lukker, når helten går væk
    if (this.butikSted) {
      if (h.død || Math.hypot(h.x - this.butikSted.x, h.z - this.butikSted.z) > 14) this.lukButik();
      else this.opdaterButik();
    }
    const cd = this.inv.cooldown > 0;
    this.felter.udstyr.forEach((el) => el.classList.toggle('vent', cd));
  }
}
