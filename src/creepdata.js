// Creep-familier, typer og sværhedsgrader (GDD afsnit 7).
// Grundværdier gælder level 1; lejrens niveau skalerer dem op.

const SKELET_ANIM = { idle: 'Idle', løb: 'Running_C', ramt: 'Hit_A', død: 'Death_C_Skeletons', vågn: 'Skeletons_Awaken_Standing', råb: 'Taunt' };
const MENNESKE_ANIM = { idle: 'Idle', løb: 'Running_A', ramt: 'Hit_A', død: 'Death_A', vågn: null, råb: 'Cheer' };

export const CREEP_TYPER = {
  // Skeletter — Gravlandet og Sumpen
  minion: { navn: 'Skeletkriger', model: 'skeleton_minion', anim: SKELET_ANIM, hp: 120, skade: [12, 18], angrebsTid: 2.0, fart: 3.4, rækkevidde: 2.0, rustning: 0, våben: { r: 'skeleton_blade' }, angreb: '1H_Melee_Attack_Chop' },
  rogue: { navn: 'Skeletsnigmorder', model: 'skeleton_rogue', anim: SKELET_ANIM, hp: 140, skade: [14, 20], angrebsTid: 1.5, fart: 3.9, rækkevidde: 2.0, rustning: 0, våben: { r: 'skeleton_blade' }, angreb: '1H_Melee_Attack_Stab' },
  mage: { navn: 'Benmager', model: 'skeleton_mage', anim: SKELET_ANIM, hp: 140, skade: [16, 22], angrebsTid: 2.6, fart: 3.2, rækkevidde: 9, rustning: 0, våben: { r: 'skeleton_staff' }, angreb: 'Spellcast_Shoot', projektil: 0xb36bff },
  warrior: { navn: 'Gravvogter', model: 'skeleton_warrior', anim: SKELET_ANIM, hp: 280, skade: [20, 28], angrebsTid: 2.3, fart: 3.1, rækkevidde: 2.2, rustning: 2, våben: { r: 'skeleton_axe', l: 'skeleton_shield_large_a' }, angreb: '1H_Melee_Attack_Chop', skala: 1.15 },
  gravkonge: { navn: 'Gravkongen', model: 'skeleton_warrior', anim: SKELET_ANIM, hp: 900, skade: [40, 55], angrebsTid: 2.4, fart: 3.0, rækkevidde: 2.8, rustning: 5, våben: { r: 'skeleton_axe', l: 'skeleton_shield_large_a' }, angreb: '1H_Melee_Attack_Chop', skala: 1.7, boss: true },

  // Plyndrere — Askemarken, Skoven, Bjergene
  slagsbror: { navn: 'Slagsbror', model: 'bandit_slagsbror', anim: MENNESKE_ANIM, hp: 130, skade: [12, 17], angrebsTid: 1.6, fart: 3.6, rækkevidde: 2.0, rustning: 0, skjul: ['1H_Crossbow', '2H_Crossbow', 'Throwable'], angreb: 'Dualwield_Melee_Attack_Slice' },
  skytte: { navn: 'Armbrøstskytte', model: 'bandit_skytte', anim: MENNESKE_ANIM, hp: 110, skade: [15, 21], angrebsTid: 2.2, fart: 3.4, rækkevidde: 10, rustning: 0, skjul: ['Knife', 'Knife_Offhand', '1H_Crossbow', 'Throwable'], angreb: '2H_Ranged_Shoot', projektil: 0xffd27a },
  lejesoldat: { navn: 'Lejesoldat', model: 'bandit_lejesoldat', anim: MENNESKE_ANIM, hp: 240, skade: [18, 25], angrebsTid: 2.0, fart: 3.3, rækkevidde: 2.2, rustning: 3, skjul: ['1H_Sword_Offhand', 'Badge_Shield', 'Rectangle_Shield', 'Spike_Shield', '2H_Sword', 'Knight_Helmet'], angreb: '1H_Melee_Attack_Slice_Diagonal' },
  heks: { navn: 'Heksemester', model: 'bandit_heks', anim: MENNESKE_ANIM, hp: 150, skade: [18, 26], angrebsTid: 2.6, fart: 3.2, rækkevidde: 9, rustning: 0, skjul: ['Spellbook', 'Spellbook_open', '1H_Wand'], angreb: 'Spellcast_Shoot', projektil: 0x5ad1ff },
  kaptajn: { navn: 'Plyndrerkaptajnen', model: 'bandit_kaptajn', anim: MENNESKE_ANIM, hp: 950, skade: [42, 58], angrebsTid: 2.2, fart: 3.4, rækkevidde: 2.8, rustning: 4, skjul: ['1H_Axe', '1H_Axe_Offhand', 'Barbarian_Round_Shield', 'Mug'], angreb: '2H_Melee_Attack_Chop', skala: 1.6, boss: true },
};

// Fem sværhedsgrader: farve på kort/minimap og creeps' level
export const NIVEAUER = [
  null,
  { navn: 'Let', farve: '#5fd35a', level: 2 },
  { navn: 'Middel', farve: '#f2d14a', level: 5 },
  { navn: 'Svær', farve: '#f08a35', level: 8 },
  { navn: 'Farlig', farve: '#e8473c', level: 12 },
  { navn: 'Boss', farve: '#b05cff', level: 16 },
];

// Lejrsammensætning pr. familie og niveau (der vælges tilfældigt blandt mulighederne)
export const SAMMENSÆTNING = {
  skeletter: {
    1: [['minion', 'minion'], ['minion', 'rogue']],
    2: [['minion', 'rogue', 'minion'], ['rogue', 'mage']],
    3: [['warrior', 'mage', 'minion'], ['warrior', 'rogue', 'rogue']],
    4: [['warrior', 'warrior', 'mage', 'mage'], ['warrior', 'mage', 'rogue', 'rogue']],
    5: [['gravkonge', 'warrior', 'mage', 'mage']],
  },
  plyndrere: {
    1: [['slagsbror', 'slagsbror'], ['slagsbror', 'skytte']],
    2: [['slagsbror', 'skytte', 'slagsbror'], ['lejesoldat', 'skytte']],
    3: [['lejesoldat', 'skytte', 'heks'], ['lejesoldat', 'slagsbror', 'slagsbror']],
    4: [['lejesoldat', 'lejesoldat', 'heks', 'skytte'], ['lejesoldat', 'heks', 'heks', 'slagsbror']],
    5: [['kaptajn', 'lejesoldat', 'heks', 'skytte']],
  },
};

export const FAMILIE_I_REGION = {
  askemarken: 'plyndrere', skoven: 'plyndrere', bjergene: 'plyndrere',
  gravlandet: 'skeletter', sumpen: 'skeletter',
};

// Færdige stats for en creep-type på et givent level
export function creepStats(type, level) {
  const d = CREEP_TYPER[type];
  const hpF = 1 + 0.3 * (level - 1), skF = 1 + 0.18 * (level - 1);
  return {
    ...d,
    level,
    hp: Math.round(d.hp * hpF),
    skade: [Math.round(d.skade[0] * skF), Math.round(d.skade[1] * skF)],
    rustning: d.rustning + Math.floor(level / 4),
    xp: Math.round((15 + level * level * 2.5) * (d.boss ? 3 : 1)),
  };
}
