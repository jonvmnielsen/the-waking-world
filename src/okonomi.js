// Spillerens økonomi (GDD 5.1): guld, træ, sten og forsyning, og kortets ressourcekilder.
// Guld kommer fra guldminer, træ fra skov-felter og sten fra bjerg-felter.
import { hexTilVerden } from './hexgrid.js';
import { bus } from './events.js';

export const START = { guld: 300, træ: 150, sten: 80 };
export const MÆNGDE = { mine: 8000, skov: 250, bjerg: 400 };
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

// Ressourcekilder på kortet: skov- og bjerg-felter og guldminer
export class Kilder {
  constructor(kort, steder) {
    this.kort = kort;
    for (const f of kort.felter.values()) {
      if (f.blok === 'skov') f.træ = MÆNGDE.skov;
      if (f.blok === 'bjerg') f.sten = MÆNGDE.bjerg;
    }
    this.miner = steder.filter((s) => s.type === 'mine').map((s) => ({ ...s, guld: s.start ? MÆNGDE.mine * 1.5 : MÆNGDE.mine }));
  }

  // Kilden ved et felt eller en mine (til tryk)
  vedFelt(f) {
    if (!f) return null;
    const mine = this.miner.find((m) => m.q === f.q && m.r === f.r);
    if (mine) return mine.guld > 0 ? { type: 'guld', kilde: mine, x: mine.x, z: mine.z } : null;
    if (f.træ > 0) return { type: 'træ', kilde: f, ...hexTilVerden(f.q, f.r) };
    if (f.sten > 0) return { type: 'sten', kilde: f, ...hexTilVerden(f.q, f.r) };
    return null;
  }

  // Nærmeste kilde af en type (når den gamle er brugt op)
  nærmeste(type, x, z, maks = 60) {
    let bedst = null, bd = maks;
    const tjek = (kilde, p) => { const d = Math.hypot(p.x - x, p.z - z); if (d < bd) { bd = d; bedst = { type, kilde, x: p.x, z: p.z }; } };
    if (type === 'guld') for (const m of this.miner) { if (m.guld > 0) tjek(m, m); }
    else for (const f of this.kort.felter.values()) { if ((f[type] ?? 0) > 0) tjek(f, hexTilVerden(f.q, f.r)); }
    return bedst;
  }

  // Tag en tur fra kilden. Returnerer hvor meget der blev taget.
  høst(k, type, ønsket) {
    const m = Math.min(ønsket, k.kilde[type] ?? 0);
    k.kilde[type] -= m;
    if (k.kilde[type] <= 0) bus.emit('kilde_tom', { type, kilde: k.kilde });
    return m;
  }
}
