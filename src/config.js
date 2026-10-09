// Balance- og verdenskonstanter. Værdier fra docs/balance/*_v1.md,
// omregnet fra Godot-pixels til verdensenheder (40 px = 1 enhed).

export const VERDEN = {
  hexSkala: 2,          // KayKit hex-fliser er 2 enheder brede — skaleres op så figurerne passer
  øRadius: 8,           // øens radius i hex-felter
  havRadius: 13,        // hvor langt havet tegnes ud
};

export const HELT = {
  maxHp: 500,
  mana: 200,
  fart: 4.5,
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

// Neutrale creeps. Model = filnavn i public/assets/units
export const CREEPS = {
  minion:  { navn: 'Skeletkriger',   model: 'skeleton_minion',  hp: 120, skade: [12, 18], angrebsTid: 2.2, fart: 3.2, rækkevidde: 1.9, rustning: 0, xp: 20, våben: { r: 'skeleton_blade' }, angreb: '1H_Melee_Attack_Chop' },
  rogue:   { navn: 'Skeletsnigmorder', model: 'skeleton_rogue', hp: 150, skade: [14, 20], angrebsTid: 1.6, fart: 3.8, rækkevidde: 1.9, rustning: 0, xp: 30, våben: { r: 'skeleton_blade' }, angreb: '1H_Melee_Attack_Stab' },
  warrior: { navn: 'Gravvogter',     model: 'skeleton_warrior', hp: 320, skade: [22, 30], angrebsTid: 2.4, fart: 3.0, rækkevidde: 2.0, rustning: 2, xp: 50, våben: { r: 'skeleton_axe', l: 'skeleton_shield_large_a' }, angreb: '1H_Melee_Attack_Chop', skala: 1.15 },
  mage:    { navn: 'Benmager',       model: 'skeleton_mage',    hp: 160, skade: [18, 24], angrebsTid: 2.6, fart: 3.0, rækkevidde: 8,   rustning: 0, xp: 40, våben: { r: 'skeleton_staff' }, angreb: 'Spellcast_Shoot', projektil: true },
};

export const CREEP_AI = {
  aggro: 6,         // afstand hvor creeps opdager helten
  leash: 12,        // max afstand fra lejren før de vender hjem
  respawn: 45,      // sekunder før en ryddet lejr vågner igen
};

// Skade efter rustning: 1 rustning ≈ 3,3 % reduktion (max 75 %)
export function reducérSkade(rå, rustning) {
  const red = Math.min(0.75, Math.max(0, rustning * 0.033));
  return Math.max(1, Math.round(rå * (1 - red)));
}

export function tilfældig(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
