// Creep-familier, typer og sværhedsgrader (GDD afsnit 7).
// Grundværdier gælder level 1; lejrens niveau skalerer dem op.

const SKELET_ANIM = { idle: 'Idle', løb: 'Running_C', ramt: 'Hit_A', død: 'Death_C_Skeletons', vågn: 'Skeletons_Awaken_Standing', råb: 'Taunt' };
const MENNESKE_ANIM = { idle: 'Idle', løb: 'Running_A', ramt: 'Hit_A', død: 'Death_A', vågn: null, råb: 'Cheer' };

export const CREEP_TYPER = {
  // Skeletter — Gravlandet og Sumpen
  minion: { navn: 'Skeleton Warrior', model: 'skeleton_minion', anim: SKELET_ANIM, hp: 120, skade: [12, 18], angrebsTid: 2.0, fart: 3.4, rækkevidde: 2.0, rustning: 0, våben: { r: 'skeleton_blade' }, angreb: '1H_Melee_Attack_Chop' },
  rogue: { navn: 'Skeleton Assassin', model: 'skeleton_rogue', anim: SKELET_ANIM, hp: 140, skade: [14, 20], angrebsTid: 1.5, fart: 3.9, rækkevidde: 2.0, rustning: 0, våben: { r: 'skeleton_blade' }, angreb: '1H_Melee_Attack_Stab' },
  mage: { navn: 'Bone Mage', model: 'skeleton_mage', anim: SKELET_ANIM, hp: 140, skade: [16, 22], angrebsTid: 2.6, fart: 3.2, rækkevidde: 9, rustning: 0, våben: { r: 'skeleton_staff' }, angreb: 'Spellcast_Shoot', projektil: 0xb36bff },
  warrior: { navn: 'Grave Warden', model: 'skeleton_warrior', anim: SKELET_ANIM, hp: 280, skade: [20, 28], angrebsTid: 2.3, fart: 3.1, rækkevidde: 2.2, rustning: 2, våben: { r: 'skeleton_axe', l: 'skeleton_shield_large_a' }, angreb: '1H_Melee_Attack_Chop', skala: 1.15 },
  gravkonge: { navn: 'The Grave King', model: 'skeleton_warrior', anim: SKELET_ANIM, hp: 900, skade: [40, 55], angrebsTid: 2.4, fart: 3.0, rækkevidde: 2.8, rustning: 5, våben: { r: 'skeleton_axe', l: 'skeleton_shield_large_a' }, angreb: '1H_Melee_Attack_Chop', skala: 1.7, boss: true },

  // De Ældgamle (M8) — erindringer så gamle, at de har fået krop igen. Vogter de fjerneste hjørner af verden.
  oldkriger: { navn: 'Ancient Revenant', model: 'skeleton_warrior', anim: SKELET_ANIM, hp: 260, skade: [20, 27], angrebsTid: 2.1, fart: 3.3, rækkevidde: 2.4, rustning: 3, våben: { r: 'skeleton_axe', l: 'skeleton_shield_large_a' }, angreb: '1H_Melee_Attack_Chop', skala: 1.35, ånd: true },
  oldseer: { navn: 'Ancient Seer', model: 'skeleton_mage', anim: SKELET_ANIM, hp: 170, skade: [18, 24], angrebsTid: 2.5, fart: 3.2, rækkevidde: 10, rustning: 1, våben: { r: 'skeleton_staff' }, angreb: 'Spellcast_Shoot', projektil: 0x9fe8ff, skala: 1.25, ånd: true },
  oldvogter: { navn: 'The First Warden', model: 'skeleton_warrior', anim: SKELET_ANIM, hp: 900, skade: [40, 52], angrebsTid: 2.4, fart: 3.1, rækkevidde: 3.2, rustning: 6, våben: { r: 'skeleton_axe', l: 'skeleton_shield_large_a' }, angreb: '1H_Melee_Attack_Chop', skala: 2.1, boss: true, ånd: true },

  // Plyndrere — Askemarken, Skoven, Bjergene
  slagsbror: { navn: 'Brawler', model: 'bandit_slagsbror', anim: MENNESKE_ANIM, hp: 130, skade: [12, 17], angrebsTid: 1.6, fart: 3.6, rækkevidde: 2.0, rustning: 0, skjul: ['1H_Crossbow', '2H_Crossbow', 'Throwable'], angreb: 'Dualwield_Melee_Attack_Slice' },
  skytte: { navn: 'Crossbowman', model: 'bandit_skytte', anim: MENNESKE_ANIM, hp: 110, skade: [15, 21], angrebsTid: 2.2, fart: 3.4, rækkevidde: 10, rustning: 0, skjul: ['Knife', 'Knife_Offhand', '1H_Crossbow', 'Throwable'], angreb: '2H_Ranged_Shoot', projektil: 0xffd27a },
  lejesoldat: { navn: 'Mercenary', model: 'bandit_lejesoldat', anim: MENNESKE_ANIM, hp: 240, skade: [18, 25], angrebsTid: 2.0, fart: 3.3, rækkevidde: 2.2, rustning: 3, skjul: ['1H_Sword_Offhand', 'Badge_Shield', 'Rectangle_Shield', 'Spike_Shield', '2H_Sword', 'Knight_Helmet'], angreb: '1H_Melee_Attack_Slice_Diagonal' },
  heks: { navn: 'Hexmaster', model: 'bandit_heks', anim: MENNESKE_ANIM, hp: 150, skade: [18, 26], angrebsTid: 2.6, fart: 3.2, rækkevidde: 9, rustning: 0, skjul: ['Spellbook', 'Spellbook_open', '1H_Wand'], angreb: 'Spellcast_Shoot', projektil: 0x5ad1ff },
  kaptajn: { navn: 'The Raider Captain', model: 'bandit_kaptajn', anim: MENNESKE_ANIM, hp: 950, skade: [42, 58], angrebsTid: 2.2, fart: 3.4, rækkevidde: 2.8, rustning: 4, skjul: ['1H_Axe', '1H_Axe_Offhand', 'Barbarian_Round_Shield', 'Mug'], angreb: '2H_Melee_Attack_Chop', skala: 1.6, boss: true },
  // Modstanderens soldater og arbejdere (fjendeai.js): racernes enheder som creep-typer (orkhud = grøn ork-hud)
  m_grunt: { navn: 'Grunt', model: 'grunt', anim: MENNESKE_ANIM, hp: 150, skade: [14, 19], angrebsTid: 1.6, fart: 4.2, rækkevidde: 2.1, rustning: 1, skjul: ['1H_Axe_Offhand', 'Mug'], angreb: '1H_Melee_Attack_Chop', orkhud: true, skala: 0.92 },
  m_spydkaster: { navn: 'Spear Thrower', model: 'spydkaster', anim: MENNESKE_ANIM, hp: 105, skade: [13, 18], angrebsTid: 2.0, fart: 4.3, rækkevidde: 11, rustning: 0, skjul: ['Knife', 'Knife_Offhand', '1H_Crossbow', '2H_Crossbow', 'Throwable'], angreb: 'Throw', projektil: 0xd8c8a0, orkhud: true, skala: 0.88 },
  m_fodsoldat: { navn: 'Footman', model: 'bandit_lejesoldat', anim: MENNESKE_ANIM, hp: 155, skade: [13, 18], angrebsTid: 1.6, fart: 4.1, rækkevidde: 2.1, rustning: 2, skjul: ['1H_Sword_Offhand', 'Rectangle_Shield', 'Spike_Shield', '2H_Sword'], angreb: '1H_Melee_Attack_Slice_Diagonal', skala: 0.95 },
  m_armbrøst: { navn: 'Marksman', model: 'bandit_skytte', anim: MENNESKE_ANIM, hp: 100, skade: [14, 19], angrebsTid: 2.1, fart: 4.3, rækkevidde: 12, rustning: 0, skjul: ['Knife', 'Knife_Offhand', '1H_Crossbow', 'Throwable'], angreb: '2H_Ranged_Shoot', projektil: 0xbfe0ff, skala: 0.92 },
  m_tornvagt: { navn: 'Thornguard', model: 'dream_thornguard', anim: MENNESKE_ANIM, hp: 160, skade: [13, 18], angrebsTid: 1.6, fart: 4.1, rækkevidde: 2.1, rustning: 2, skjul: [], angreb: '1H_Melee_Attack_Chop' },
  m_lygtemand: { navn: 'Lanternkin', model: 'dream_lanternkin', anim: MENNESKE_ANIM, hp: 100, skade: [13, 18], angrebsTid: 2.0, fart: 4.3, rækkevidde: 11, rustning: 0, skjul: [], angreb: 'Spellcast_Shoot', projektil: 0xfff0b0 },
  m_arbejder: { navn: 'Worker', model: 'arbejder', anim: MENNESKE_ANIM, hp: 110, skade: [4, 6], angrebsTid: 2.0, fart: 3.8, rækkevidde: 1.8, rustning: 0, skjul: ['Knife', 'Knife_Offhand', '1H_Crossbow', '2H_Crossbow', 'Throwable'], angreb: '1H_Melee_Attack_Chop' },
};

// Fem sværhedsgrader: farve på kort/minimap og creeps' level
export const NIVEAUER = [
  null,
  { navn: 'Easy', farve: '#5fd35a', level: 2 },
  { navn: 'Medium', farve: '#f2d14a', level: 5 },
  { navn: 'Hard', farve: '#f08a35', level: 8 },
  { navn: 'Deadly', farve: '#e8473c', level: 12 },
  { navn: 'Boss', farve: '#b05cff', level: 16 },
  { navn: 'Ancient', farve: '#7fe8ff', level: 20 },
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
  oldtid: {
    6: [['oldvogter', 'oldkriger', 'oldkriger', 'oldseer', 'oldseer']],
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
