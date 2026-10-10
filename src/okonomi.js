// Spillerens økonomi (GDD 5.1): guld, træ, sten og forsyning, og kortets ressourcekilder.
// Guld kommer fra guldminer, træ fra hvert eneste træ og sten fra hver eneste sten på kortet.
import { bus } from './events.js';

export const START = { guld: 300, træ: 150, sten: 80 };
export const MÆNGDE = { mine: 8000 };   // træer og sten: se RESSOURCE i pynt.js
export const BÆR = { guld: 10, træ: 10, sten: 8 };          // pr. tur
export const HØST_TID = { guld: 1.6, træ: 4.5, sten: 5.5 }; // sekunder pr. tur
export const MAKS_FORSYNING = 100;

export class Økonomi {
  constructor() {
    Object.assign(this, START);
    this.forsyning = 0;        // brugt
    this.forsyningMaks = 0;    // fra Storlejr og hytter
  }

  harRåd(pris = {}) {
    return (pris.guld ?? 0) <= this.guld && (pris.træ ?? 0) <= this.træ && (pris.sten ?? 0) <= this.sten;
  }

  // Hvad mangler der? Returnerer en tekst til spilleren eller null
  mangler(pris = {}, forsyning = 0) {
    const m = [];
    if ((pris.guld ?? 0) > this.guld) m.push(`${pris.guld - this.guld} guld`);
    if ((pris.træ ?? 0) > this.træ) m.push(`${pris.træ - this.træ} træ`);
    if ((pris.sten ?? 0) > this.sten) m.push(`${pris.sten - this.sten} sten`);
    if (m.length) return `Mangler ${m.join(', ')}`;
    if (forsyning && this.forsyning + forsyning > Math.min(this.forsyningMaks, MAKS_FORSYNING)) return 'Byg en forsyningshytte for at få mere forsyning';
    return null;
  }

  betal(pris = {}) {
    this.guld -= pris.guld ?? 0; this.træ -= pris.træ ?? 0; this.sten -= pris.sten ?? 0;
    bus.emit('økonomi', this);
  }

  refunder(pris = {}, andel = 1) {
    this.guld += Math.floor((pris.guld ?? 0) * andel);
    this.træ += Math.floor((pris.træ ?? 0) * andel);
    this.sten += Math.floor((pris.sten ?? 0) * andel);
    bus.emit('økonomi', this);
  }

  aflever(type, mængde) {
    this[type] += mængde;
    bus.emit('økonomi', this);
  }
}

// Ressourcekilder på kortet: guldminer og alle træer og sten (fra natur.js)
// En kilde gives videre som { type, kilde, x, z, r } — kilde er minen eller ressourcen selv.
export class Kilder {
  constructor(steder, ressourcer) {
    this.ressourcer = ressourcer;
    this.miner = steder.filter((s) => s.type === 'mine').map((s) => ({ ...s, guld: s.start ? MÆNGDE.mine * 1.5 : MÆNGDE.mine }));
  }

  // (miner har hex-koordinaten r, så deres radius sættes fast)
  som(o) { const mine = o.type === 'mine'; return { type: mine ? 'guld' : o.type, kilde: o, x: o.x, z: o.z, r: mine ? 5 : o.r }; }

  // Nærmeste kilde af en type (når den gamle er brugt op)
  nærmeste(type, x, z, maks = 60) {
    let bedst = null, bd = maks;
    const liste = type === 'guld' ? this.miner : this.ressourcer;
    for (const o of liste) {
      if (!(o[type] > 0)) continue;
      // Ressourcer inde i en skov tæller lidt længere væk, så kanten fældes først
      const d = Math.hypot(o.x - x, o.z - z) + (o.blokerer && type === 'træ' ? 3 : 0);
      if (d < bd) { bd = d; bedst = o; }
    }
    return bedst && this.som(bedst);
  }

  // Tag en tur fra kilden. Returnerer hvor meget der blev taget.
  høst(k, type, ønsket) {
    const m = Math.min(ønsket, k.kilde[type] ?? 0);
    k.kilde[type] -= m;
    if (m > 0 && k.kilde[type] <= 0) bus.emit('kilde_tom', { type, kilde: k.kilde });
    return m;
  }
}
