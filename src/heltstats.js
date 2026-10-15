// Heltens egenskaber (GDD 6.2): Strength, Agility og Intelligence — som i WC3.
//   Strength:     liv, livsregeneration og skade (orkkrigerens hovedegenskab)
//   Agility:      rustning og angrebsfart
//   Intelligence: mana, manaregeneration og evnestyrke
// Egenskaberne vokser med hvert level (mest i essensens egenskab) og kan øges med bøger,
// udstyr og ofringer ved Ånde-alteret. Blandes ind i Helt-klassen.
import { HELT } from './config.js';

export const EGENSKABER = {
  navn: { str: 'Strength', agi: 'Agility', int: 'Intelligence' },
  kort: { str: 'STR', agi: 'AGI', int: 'INT' },
  start: { str: 22, agi: 14, int: 12 },
  prLevel: { str: 3, agi: 1.5, int: 1.5 },
  // Essensens egenskab: +2 fra start og +1 ekstra pr. level
  essens: { vold: 'str', tålmodighed: 'agi', ofring: 'int' },
  // Hvad ét point giver
  pr: { hp: 18, hpRegen: 0.05, skade: 1.5, rustning: 0.15, angrebsfart: 0.02, mana: 10, manaRegen: 0.05, evne: 0.01 },
};
const P = EGENSKABER.pr;


export const egenskabsMetoder = {
  // Heltens egne startværdier og hovedegenskab (heltedata.js); hovedegenskaben giver skaden og vokser mest
  startEgenskaber(essens, def) {
    this.egenskaber = { ...(def?.start ?? EGENSKABER.start) };
    this.primær = def?.primær ?? 'str';
    this.essensEgenskab = EGENSKABER.essens[essens];
    this.egenskaber[this.essensEgenskab] += 2;
  },

  // Samlet værdi: grundværdi + udstyr + permanente bonusser (bøger og alteret)
  egenskab(n) {
    const inv = this.inventar;
    return Math.floor(this.egenskaber[n]) + (inv?.bonus[n] ?? 0) + (inv?.permanent[n] ?? 0);
  },
  // Kun bonusdelen (til visning i grønt)
  egenskabBonus(n) { const inv = this.inventar; return (inv?.bonus[n] ?? 0) + (inv?.permanent[n] ?? 0); },

  vækstEgenskaber() {
    for (const n of ['str', 'agi', 'int']) this.egenskaber[n] += (n === this.primær ? 3 : 1.5) + (n === this.essensEgenskab ? 1 : 0);
  },

  // Afledte værdier
  rustning() { return HELT.rustning + this.egenskab('agi') * P.rustning + (this.inventar?.bonus.rustning ?? 0) + (this.sti?.rustning() ?? 0); },
  hpRegen() { return (HELT.hpRegen + this.egenskab('str') * P.hpRegen + this.inventar.bonus.hpRegen) * (this.sti?.hpRegenFaktor() ?? 1); },
  manaRegen() { return (HELT.manaRegen + this.egenskab('int') * P.manaRegen + this.inventar.bonus.manaRegen) * (this.sti?.manaRegenFaktor() ?? 1); },
  egenskabsSkade() { return Math.round(this.egenskab(this.primær ?? 'str') * P.skade); },
  evneStyrke() { return (1 + this.egenskab('int') * P.evne + (this.inventar?.bonus.evne ?? 0)) * (this.ultimaTid > 0 ? 1.6 : 1) * (this.rangTid > 0 ? this.rangFaktor : 1); },   // ultimatum.js; evnens rang (evnerang.js)
  angrebsfartBonus() { return this.egenskab('agi') * P.angrebsfart + this.inventar.bonus.angrebsfart; },
};
