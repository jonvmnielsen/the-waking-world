// Balance- og verdenskonstanter. Værdier fra docs/balance/*_v1.md,
// omregnet fra Godot-pixels til verdensenheder (40 px = 1 enhed).

export const VERDEN = {
  hexSkala: 5,          // KayKit hex-fliser er 2 enheder brede — skaleres så bygninger og natur er meget større end helten
};

export const KORT = {
  størrelse: 48,        // kortet er størrelse × størrelse hex-felter
  seed: 11,
};

export const HELT = {
  maxHp: 500,
  mana: 200,
  fart: 5,
  rækkevidde: 2.2,
  skadeMin: 45,
  skadeMax: 55,
  angrebsTid: 1.8,      // sekunder mellem angreb
  rustning: 3,
  hpRegen: 2.0,         // kun uden for kamp
  manaRegen: 1.0,
  genopliv: 6,          // sekunder til helten rejser sig igen
};

// XP for at nå hvert level (index = level-1) + bonusser ved level-op
export const LEVELS = {
  xp:        [0, 200, 500, 900, 1400, 2100, 3000, 4200, 5600, 7500],
  hpBonus:   [0, 80, 80, 100, 100, 120, 120, 140, 140, 160],
  skadeBonus:[0, 8, 8, 10, 10, 12, 12, 14, 14, 16],
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
