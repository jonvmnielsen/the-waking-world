// Spillerens økonomi (GDD 5.1): guld, træ, sten og forsyning, og kortets ressourcekilder.
// Guld kommer fra guldminer, træ fra hvert eneste træ og sten fra hver eneste sten på kortet.
import { bus } from './events.js';

export const START = { guld: 300, træ: 150, sten: 80 };
export const MÆNGDE = { mine: 15000 };   // reserve; minerne har hver sin mængde (minedata.js)   // træer og sten: se RESSOURCE i pynt.js
export const BÆR = { guld: 10, træ: 10, sten: 8 };          // pr. tur
export const HØST_TID = { guld: 1.6, træ: 4.5, sten: 5.5 }; // sekunder pr. tur
export const MAKS_FORSYNING = 100;
// Upkeep (Jons ønske): en stor hær koster. Jo mere forsyning der er brugt, jo mindre af minernes guld når frem.
export const UPKEEP = [
  { fra: 0, navn: 'No upkeep', faktor: 1 },
  { fra: 41, navn: 'Low upkeep', faktor: 0.7 },
  { fra: 71, navn: 'High upkeep', faktor: 0.4 },
];
// Ressourcernes navne på skærmen
export const RES_NAVN = { guld: 'gold', træ: 'wood', sten: 'stone' };

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
    if ((pris.guld ?? 0) > this.guld) m.push(`${pris.guld - this.guld} gold`);
    if ((pris.træ ?? 0) > this.træ) m.push(`${pris.træ - this.træ} wood`);
    if ((pris.sten ?? 0) > this.sten) m.push(`${pris.sten - this.sten} stone`);
    if (m.length) return `Not enough: ${m.join(', ')}`;
    if (forsyning && this.forsyning + forsyning > Math.min(this.forsyningMaks, MAKS_FORSYNING)) return 'Build a Supply Hut to get more supply';
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

  upkeep() { return UPKEEP.findLast((u) => this.forsyning >= u.fra); }

  // Guld fra minerne trækkes for upkeep
  aflever(type, mængde) {
    if (type === 'guld') mængde = Math.round(mængde * this.upkeep().faktor);
    this[type] += mængde;
    bus.emit('økonomi', this);
  }
}

// Ressourcekilder på kortet: guldminer og alle træer og sten (fra natur.js)
// En kilde gives videre som { type, kilde, x, z, r } — kilde er minen eller ressourcen selv.
export class Kilder {
  constructor(steder, ressourcer) {
    this.ressourcer = ressourcer;
    // Hver mine har sin egen størrelse og mængde (minedata.js); start = mængden fra begyndelsen
    this.miner = steder.filter((s) => s.type === 'mine').map((s) => { const guld = s.guld ?? MÆNGDE.mine; return Object.assign(s, { guld, startGuld: guld }); });
    // Deep Quarry: et kæmpe stenbrud, der høstes som sten
    this.brud = steder.filter((s) => s.type === 'brud').map((s) => Object.assign(s, { sten: s.sten, startSten: s.sten }));
  }

  // (miner har hex-koordinaten r, så deres radius sættes fast)
  som(o) { const mine = o.type === 'mine'; return { type: mine ? 'guld' : o.type === 'brud' ? 'sten' : o.type, kilde: o, x: o.x, z: o.z, r: mine ? 5 : o.type === 'brud' ? 6 : o.r }; }

  // Nærmeste kilde af en type (når den gamle er brugt op)
  nærmeste(type, x, z, maks = 60, filter = null) {
    let bedst = null, bd = maks;
    const liste = type === 'guld' ? this.miner : type === 'sten' ? [...this.ressourcer, ...this.brud] : this.ressourcer;
    for (const o of liste) {
      if (!(o[type] > 0) || (filter && !filter(o))) continue;
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
