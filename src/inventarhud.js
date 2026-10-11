// Inventaret på skærmen: 6 udrustede pladser og en rygsæk med 6 pladser, info-kort for et item og butikken.
// Tryk på et item = info-kort med "Use" (udrustede eliksirer og stave), "Equip/Unequip", "Drop" og "Close".
// Butikken (købmanden og egen Marketplace) har fanerne Buy og Sell; kroen sender sine egne varer (kro.js).
import { ITEMS, SJÆLDENHED, TYPE_NAVN, BUTIK, beskriv, salgsPris } from './itemdata.js';
import { ikon } from './ikoner.js';
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
    $('info-brug').addEventListener('click', () => { const v = this.info; this.lukInfo(); if (v) this.brug(v.i); });
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

  brug(i) {
    const fejl = this.inv.brug(i);
    if (fejl && fejl !== 'info') bus.emit('besked', fejl);
    this.tegn();
  }

  tegn() {
    for (const hvor of HVOR) {
      this.felter[hvor].forEach((el, i) => {
        const p = this.inv.liste(hvor)[i];
        el.classList.toggle('tom', !p);
        el.style.setProperty('--sjælden', p ? SJÆLDENHED[ITEMS[p.id].sjældenhed].farve : 'transparent');
        el.querySelector('img').src = p ? ikon(p.id) : '';
        el.querySelector('img').alt = p ? ITEMS[p.id].navn : '';
        el.querySelector('.ladning').textContent = p?.ladninger ?? '';
      });
    }
    if (this.fane === 'sælg') this.visFane('sælg');
  }

  visInfo(hvor, i) {
    const p = this.inv.liste(hvor)[i];
    if (!p) return;
    const d = ITEMS[p.id], sj = SJÆLDENHED[d.sjældenhed];
    this.info = { hvor, i };
    $('info-ikon').src = ikon(p.id);
    $('info-navn').textContent = d.navn;
    $('info-navn').style.color = sj.farve;
    $('info-type').textContent = `${sj.navn} · ${TYPE_NAVN[d.type]}${hvor === 'rygsæk' ? ' · in backpack' : ''}`;
    $('info-tekst').innerHTML = beskriv(p.id).map((l) => `<li>${l}</li>`).join('');
    $('info-brug').hidden = !d.brug || hvor === 'rygsæk';
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
        const d = ITEMS[p.id];
        ud.push({
          ikon: ikon(p.id), navn: d.navn, farve: SJÆLDENHED[d.sjældenhed].farve, knap: 'Sell ',
          tekst: `${hvor === 'rygsæk' ? 'Backpack' : 'Equipped'} · ${beskriv(p.id)[0] ?? ''}`, pris: salgsPris(p.id),
          kan: () => true, køb: () => { this.inv.sælg(hvor, i); this.tegn(); },
        });
      });
    }
    return ud;
  }

  itemVare(id) {
    const d = ITEMS[id];
    return {
      ikon: ikon(id), navn: d.navn, farve: SJÆLDENHED[d.sjældenhed].farve, tekst: beskriv(id)[0], pris: d.pris,
      kan: () => this.inv.guld >= d.pris && (!this.inv.fuld || d.type === 'opsamling'),
      køb: () => this.køb(id),
    };
  }

  køb(id) {
    const d = ITEMS[id];
    if (this.inv.guld < d.pris) return bus.emit('besked', 'Not enough gold');
    if (this.inv.fuld && d.type !== 'opsamling') return bus.emit('besked', 'Your inventory is full');
    this.inv.guld -= d.pris;
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
