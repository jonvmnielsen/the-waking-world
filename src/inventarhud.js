// Inventar på skærmen (6 pladser), info-kort for et item og købmandens butik.
// Tryk på et item = info-kort med "Brug" (eliksirer, stave), "Smid" og "Luk".
import { ITEMS, SJÆLDENHED, TYPE_NAVN, BUTIK, beskriv } from './itemdata.js';
import { ikon } from './ikoner.js';
import { bus } from './events.js';

const $ = (id) => document.getElementById(id);

export class InventarHud {
  constructor(spil) {
    this.spil = spil;
    this.inv = spil.helt.inventar;
    this.pladser = [...document.querySelectorAll('#inventar .plads')];
    this.pladser.forEach((el, i) => this.bindPlads(el, i));
    $('info-luk').addEventListener('click', () => this.lukInfo());
    $('info-smid').addEventListener('click', () => { if (this.infoPlads != null) this.inv.smid(this.infoPlads); this.lukInfo(); });
    $('info-brug').addEventListener('click', () => { const i = this.infoPlads; this.lukInfo(); this.brug(i); });
    $('butik-luk').addEventListener('click', () => this.lukButik());
    bus.on('inventar_ændret', () => this.tegn());
    bus.on('item_samlet', () => this.tegn());
    this.tegn();
  }

  // Tryk på et item åbner info-kortet; derfra bruges eller smides det (intet bruges ved et enkelt tryk)
  bindPlads(el, i) {
    el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); });
    el.addEventListener('pointerup', (e) => {
      e.stopPropagation();
      if (!this.inv.pladser[i]) return;
      if (this.infoPlads === i) this.lukInfo(); else this.visInfo(i);
    });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  brug(i) {
    const fejl = this.inv.brug(i);
    if (fejl && fejl !== 'info') bus.emit('besked', fejl);
    this.tegn();
  }

  tegn() {
    this.pladser.forEach((el, i) => {
      const p = this.inv.pladser[i];
      el.classList.toggle('tom', !p);
      el.style.setProperty('--sjælden', p ? SJÆLDENHED[ITEMS[p.id].sjældenhed].farve : 'transparent');
      el.querySelector('img').src = p ? ikon(p.id) : '';
      el.querySelector('img').alt = p ? ITEMS[p.id].navn : '';
      el.querySelector('.ladning').textContent = p?.ladninger ?? '';
    });
  }

  visInfo(i) {
    const p = this.inv.pladser[i];
    if (!p) return;
    const d = ITEMS[p.id], sj = SJÆLDENHED[d.sjældenhed];
    this.infoPlads = i;
    $('info-ikon').src = ikon(p.id);
    $('info-navn').textContent = d.navn;
    $('info-navn').style.color = sj.farve;
    $('info-type').textContent = `${sj.navn} · ${TYPE_NAVN[d.type]}`;
    $('info-tekst').innerHTML = beskriv(p.id).map((l) => `<li>${l}</li>`).join('');
    $('info-brug').hidden = !d.brug;
    $('info').classList.add('vis');
  }

  lukInfo() { this.infoPlads = null; $('info').classList.remove('vis'); }

  // Butikken: liste over varer med pris. varer = [{ ikon, navn, farve, tekst, pris, kan(), køb() }];
  // uden varer vises købmandens items (kroen sender sine lejesoldater, se kro.js)
  åbnButik(sted, varer = null, titel = null) {
    this.butikSted = sted;
    this.varer = varer ?? BUTIK.map((id) => this.itemVare(id));
    $('butik-navn').textContent = titel ?? (sted.data ? sted.data.navn : 'Merchant');
    const liste = $('butik-varer');
    liste.innerHTML = '';
    for (const v of this.varer) {
      const r = document.createElement('div');
      r.className = 'vare';
      r.innerHTML = `<img alt="" src="${v.ikon}"><div><b style="color:${v.farve}">${v.navn}</b><span>${v.tekst}</span></div><button type="button"><i class="mønt"></i>${v.pris}</button>`;
      r.querySelector('button').addEventListener('click', () => { v.køb(); this.opdaterButik(); });
      liste.appendChild(r);
    }
    this.opdaterButik();
    $('butik').classList.add('vis');
    bus.emit('butik_åben', { sted });
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

  lukButik() { this.butikSted = null; $('butik').classList.remove('vis'); }

  opdater() {
    const h = this.spil.helt;
    // Butikken lukker, når helten går væk
    if (this.butikSted) {
      if (h.død || Math.hypot(h.x - this.butikSted.x, h.z - this.butikSted.z) > 14) this.lukButik();
      else this.opdaterButik();
    }
    const cd = this.inv.cooldown > 0;
    this.pladser.forEach((el) => el.classList.toggle('vent', cd));
  }
}
