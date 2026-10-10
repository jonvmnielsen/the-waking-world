// Spillerens adfærds-score (DESIGN_PROGRESSION del 2, "SAS"): tre usynlige målere der langsomt
// forskydes efter hvordan spilleren kæmper. De bestemmer hvilke veteran-grene der er billige.
//   aggression: skade på fjender (dobbelt i de første 3 minutter), angrebsordrer
//   overlevelse: figurer trukket ud af kamp med lavt liv, soldater der lever længe
//   kaos: mange forskellige mål på kort tid, kampe flere steder på én gang
import { bus } from './events.js';
import { erEgen } from './trussel.js';

const HALVERING = 600;   // sekunder før gammel adfærd vejer halvt så meget

export class Spillerstil {
  constructor(verden) {
    this.verden = verden;
    this.score = { aggression: 1, overlevelse: 1, kaos: 1 };
    this.tid = 0;
    this.mål = new Map();      // creep -> sidste gang den blev ramt af os
    this.timer = 0;

    bus.on('skade', ({ mål, mængde, kilde }) => {
      if (!erEgen(kilde, verden) || erEgen(mål, verden) || !(mængde > 0)) return;
      this.score.aggression += mængde * 0.01 * (this.tid < 180 ? 2 : 1);
      if (!this.mål.has(mål) || this.tid - this.mål.get(mål) > 20) this.score.kaos += this.nyligeMål() >= 2 ? 0.6 : 0.1;
      this.mål.set(mål, this.tid);
    });
    bus.on('soldat_ordre', ({ soldat, type }) => {
      if (type === 'angrib') this.score.aggression += 0.3;
      // At trække en såret soldat ud af kampen er forsigtig spillestil
      if (type === 'gå' && soldat.iKamp && soldat.hp < soldat.maxHp * 0.4) this.score.overlevelse += 2;
    });
  }

  nyligeMål() { let n = 0; for (const t of this.mål.values()) if (this.tid - t < 20) n++; return n; }

  opdater(dt, soldater) {
    this.tid += dt;
    const k = Math.pow(0.5, dt / HALVERING);
    for (const n in this.score) this.score[n] *= k;
    this.timer += dt;
    if (this.timer < 5) return;
    this.timer = 0;
    // Soldater der har levet længe tæller som overlevelse
    for (const s of soldater) if (!s.død && s.tid > 120) this.score.overlevelse += 0.25;
    // Kampe flere steder på én gang
    const lejre = new Set();
    for (const [c, t] of this.mål) { if (this.tid - t < 8 && c.lejr) lejre.add(c.lejr); if (this.tid - t > 60) this.mål.delete(c); }
    if (lejre.size >= 2) this.score.kaos += 1.5;
  }

  andele() {
    const s = this.score, sum = s.aggression + s.overlevelse + s.kaos;
    return { aggression: s.aggression / sum, overlevelse: s.overlevelse / sum, kaos: s.kaos / sum };
  }

  // Den stil der fylder mest (over 45 %), ellers null = blandet
  dominant() {
    const a = this.andele();
    const [navn, v] = Object.entries(a).sort((p, q) => q[1] - p[1])[0];
    return v > 0.45 ? navn : null;
  }
}
