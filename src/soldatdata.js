// The Tides hær i M4 (GDD 5.4) og grunt-grenene fra DESIGN_PROGRESSION.md.
// Tallene kommer fra balance-dokumentet; fart er i verdensenheder pr. sekund (helten løber 5).

const SKJUL_BARBAR = ['1H_Axe_Offhand', 'Mug'];
const SKJUL_ROGUE = ['Knife', 'Knife_Offhand', '1H_Crossbow', '2H_Crossbow', 'Throwable'];

export const SOLDATER = {
  grunt: {
    navn: 'Grunt', model: 'units/grunt', skala: 0.92, skjul: SKJUL_BARBAR, radius: 0.7,
    hp: 240, skade: [18, 24], rustning: 2, fart: 4.4, rækkevidde: 2.1, angrebsTid: 1.6,
    angreb: ['1H_Melee_Attack_Chop', '1H_Melee_Attack_Slice_Diagonal'], slag: 0.45, idle: 'Idle', løb: 'Running_A',
  },
  spydkaster: {
    navn: 'Spear Thrower', model: 'units/spydkaster', skala: 0.88, skjul: SKJUL_ROGUE, radius: 0.6,
    våben: { r: 'kaykit-skeletons/skeleton_arrow' }, våbenSkala: 2.4,
    hp: 170, skade: [16, 22], rustning: 0, fart: 4.6, rækkevidde: 11, angrebsTid: 2.0,
    angreb: ['Throw'], slag: 0.42, idle: 'Idle', løb: 'Running_A', projektil: 'spyd',
  },
};

export const SPYD_MODEL = 'kaykit-skeletons/skeleton_arrow';

// Veteranstatus: optjenes ved at overleve kampe (DESIGN_PROGRESSION del 2)
export const VETERAN = { tærskel: 200, prCreep: (niveau) => 5 + niveau * 5, bonusHp: 0.1 };

// Grunt-grene. pris betales i Krigerlejren; dobbelt pris hvis grenen ikke passer til spillestilen.
export const GRENE = {
  ironhide: {
    navn: 'Ironhide', stil: 'overlevelse', farve: 0x8fb0c8, pris: { guld: 100, træ: 40, sten: 40 },
    hp: 120, skade: -4, rustning: 4, fart: -0.2, skala: 1.08,
    evne: 'Taunt', evneTekst: 'Forces nearby enemies to attack it for 2.5 seconds.',
    tekst: 'Defender. Lots of health and armor, less damage.',
  },
  ravager: {
    navn: 'Ravager', stil: 'aggression', farve: 0xff6a4a, pris: { guld: 120, træ: 40 },
    hp: -40, skade: 16, rustning: 0, fart: 0.3, skala: 1.0,
    evne: 'Charge', evneTekst: 'Sprints at the target; the first blow deals 1.5× damage.',
    tekst: 'Attacker. Big damage, but fragile.',
  },
  berserker: {
    navn: 'Berserker', stil: 'kaos', farve: 0xffb02e, pris: { guld: 110, træ: 50 },
    hp: 20, skade: 8, rustning: -1, fart: 0.2, skala: 1.03, variation: 0.3,
    evne: 'Frenzy', evneTekst: 'Hits every nearby enemy for 4 seconds and ignores orders meanwhile.',
    tekst: 'Chaos. Damage in every direction, unpredictable.',
  },
};
