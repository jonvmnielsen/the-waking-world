// Skill points (Jon: normal leveling — helten stiger i level, får lidt stats og ét skill point, der frit kan
// fordeles på evnerne). Hver af heltens tre evner har rang 1–3. Rang n kræver level 2n−1 (1, 3, 5);
// ultimatet kræver level 6, 11 og 16. Ét point kan også bruges på "Attributes": +2 til alle egenskaber
// (højst 10 gange). Højere rang giver mere kraft og kortere ventetid. Blandes ind i Evner (abilities.js).
import { bus } from './events.js';

export const RANG_MAKS = 3;
export const RANG_KRAV = [[1, 3, 5], [1, 3, 5], [6, 11, 16]];   // level for rang 1, 2 og 3 pr. evne-plads
export const RANG_STYRKE = [0, 1, 1.35, 1.7];                     // evnestyrke pr. rang
export const RANG_VENTETID = [1, 1, 0.88, 0.76];                  // ventetid pr. rang
export const EGENSKAB_MAKS = 10;

export const rangMetoder = {
  rangAf(slot) { return (this.rang ??= [0, 0, 0])[slot] ?? 0; },

  // Kan der lægges et point i denne plads nu? Returnerer en fejltekst eller null
  kanLære(slot) {
    const h = this.helt, r = this.rangAf(slot);
    if (!(h.skillpunkter > 0)) return 'No skill points left';
    if (r >= RANG_MAKS) return 'Already at the highest rank';
    const krav = RANG_KRAV[slot][r];
    if (h.level < krav) return `Rank ${r + 1} needs level ${krav}`;
    return null;
  },

  lær(slot) {
    const fejl = this.kanLære(slot);
    if (fejl) return fejl;
    const h = this.helt;
    this.rang[slot] += 1; h.skillpunkter -= 1;
    const e = this.info(slot);
    bus.emit('effekt', { type: 'samlet', x: h.x, z: h.z, farve: 0xffd36b });
    bus.emit('evne_lært', { helt: h, slot, rang: this.rang[slot], id: e.id });
    bus.emit('besked', this.rang[slot] === 1 ? `${e.navn} learned` : `${e.navn} — rank ${this.rang[slot]}`);
    return null;
  },

  // Attributes: +2 til alle egenskaber for ét point
  lærEgenskaber() {
    const h = this.helt;
    if (!(h.skillpunkter > 0)) return 'No skill points left';
    if ((this.egenskabsRang ?? 0) >= EGENSKAB_MAKS) return 'Attributes are at the highest rank';
    this.egenskabsRang = (this.egenskabsRang ?? 0) + 1; h.skillpunkter -= 1;
    h.inventar.øgEgenskaber({ str: 2, agi: 2, int: 2 });
    return null;
  },

  // Gamle gemte spil (før skill points): evnerne får rang 1 som før, resten bliver frie point
  rangFraLevel() {
    const h = this.helt;
    this.rang = [0, 1, 2].map((s) => (h.level >= RANG_KRAV[s][0] ? 1 : 0));
    h.skillpunkter = Math.max(0, h.level - this.rang.reduce((a, b) => a + b, 0));
  },

  gemRang() { return { rang: this.rang ?? [0, 0, 0], egenskaber: this.egenskabsRang ?? 0, punkter: this.helt.skillpunkter ?? 0 }; },
  gendanRang(g) {
    if (!g) return this.rangFraLevel();
    this.rang = [...g.rang]; this.egenskabsRang = g.egenskaber ?? 0; this.helt.skillpunkter = g.punkter ?? 0;
  },
};
