// Balance- og verdenskonstanter. Værdier fra docs/balance/*_v1.md,
// omregnet fra Godot-pixels til verdensenheder (40 px = 1 enhed).

export const VERDEN = {
  hexSkala: 5,          // KayKit hex-fliser er 2 enheder brede — skaleres så bygninger og natur er meget større end helten
};

export const KORT = {
  størrelse: 48,        // kortet er størrelse × størrelse hex-felter
  seed: 11,
};

// Grundværdier før egenskaberne (heltstats.js) lægges oven i.
// Ved start (STR 22, AGI 14, INT 12) giver det 500 liv, 200 mana, 45–55 skade og 3 rustning.
export const HELT = {
  grundHp: 104,         // + 18 pr. Strength
  mana: 80,             // + 10 pr. Intelligence
  fart: 6,              // 20 % hurtigere end før (Jons ønske)
  rækkevidde: 2.2,
  skadeMin: 12,         // + 1,5 pr. Strength
  skadeMax: 22,
  angrebsTid: 2.3,      // sekunder mellem angreb, før Agility (+2 % angrebsfart pr. point)
  rustning: 0.9,        // + 0,15 pr. Agility
  hpRegen: 0.9,         // + 0,05 pr. Strength, kun uden for kamp
  manaRegen: 0.4,       // + 0,05 pr. Intelligence
  genopliv: 6,          // sekunder til helten rejser sig igen
};

// XP for at nå hvert level (index = level-1) + bonusser ved level-op (egenskaberne vokser også, se heltstats.js)
export const LEVELS = {
  xp:        [0, 200, 500, 900, 1400, 2100, 3000, 4200, 5600, 7500],
  hpBonus:   [0, 25, 25, 30, 30, 40, 40, 50, 50, 60],      // oven i det Strength giver
  skadeBonus:[0, 4, 4, 5, 5, 6, 6, 7, 7, 8],
  rustBonus: [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
};

export const CREEP_AI = {
  aggro: 9,         // afstand hvor creeps opdager helten
  leash: 22,        // max afstand fra lejren før de vender hjem
  respawn: null,    // creeps genopstår ikke i skirmish (GDD 7.3)
};

// Skade efter rustning: 1 rustning ≈ 3,3 % reduktion (max 75 %)
export function reducérSkade(rå, rustning) {
  const red = Math.min(0.75, Math.max(0, rustning * 0.033));
  return Math.max(1, Math.round(rå * (1 - red)));
}

export function tilfældig(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
