// Opgraderinger og forskning (M7, Jons ønske): bygningerne forsker i bedre våben, rustning og redskaber,
// Storlejren opgraderes i tre tiers, og vagttårne kan bygges om til Guard Towers.
// Forskningens level 2 kræver Stronghold og level 3 kræver Fortress (som WC3's tiers).
const G = 'kaykit-hexagon/buildings/green/';
const P = (guld, træ, sten, tid) => ({ pris: { guld, træ, ...(sten ? { sten } : {}) }, tid });

// Storlejrens tiers (index = tier - 1)
export const HAL = [
  { navn: 'Great Hall' },
  { navn: 'Stronghold', ...P(450, 250, 200, 70), hp: 800, tekst: 'Tier 2: +800 health, and second-level research.' },
  { navn: 'Fortress', ...P(700, 400, 350, 90), hp: 1200, tekst: 'Tier 3: +1200 health, and third-level research.' },
];

export const VAGTTÅRN = {
  navn: 'Guard Tower', model: G + 'building_tower_b_green', ...P(150, 60, 120, 35), hal: 2, hp: 500, rustning: 2,
  angreb: { rækkevidde: 22, skade: [36, 48], tid: 1.3 },
  tekst: 'Upgrade to a Guard Tower: more damage, range and health. Needs a Stronghold.',
};

// Forskning: hvor den foregår, hvad hvert level koster, og hvad det giver
export const FORSKNING = {
  våben: {
    navn: 'Forged Axes', bygning: 'smedje', ikon: 'udv-våben', tekst: 'Melee soldiers deal +3 damage per level.',
    niveauer: [P(125, 75, 0, 40), P(225, 150, 50, 55), P(325, 225, 125, 70)],
  },
  spyd: {
    navn: 'Barbed Spears', bygning: 'smedje', ikon: 'enhed-spydkaster', tekst: 'Ranged soldiers deal +3 damage per level.',
    niveauer: [P(125, 75, 0, 40), P(225, 150, 50, 55), P(325, 225, 125, 70)],
  },
  rustning: {
    navn: 'Hardened Hides', bygning: 'smedje', ikon: 'enhed-grunt', tekst: 'All soldiers gain +1 armor per level.',
    niveauer: [P(125, 50, 75, 40), P(225, 100, 150, 55), P(325, 150, 250, 70)],
  },
  drill: {
    navn: 'Battle Drills', bygning: 'krigerlejr', ikon: 'hær', tekst: 'Soldiers become veterans 50% faster and heal twice as fast out of combat.',
    niveauer: [P(150, 100, 0, 45)],
  },
  minedrift: {
    navn: 'Deep Mining', bygning: 'storlejr', ikon: 'res-guld', tekst: 'Workers carry +2 gold per trip per level.',
    niveauer: [P(150, 100, 0, 40), P(250, 150, 100, 55)],
  },
  økser: {
    navn: 'Sharper Axes', bygning: 'savværk', ikon: 'res-træ', tekst: 'Workers carry +2 wood per trip per level.',
    niveauer: [P(100, 60, 0, 30), P(200, 120, 40, 45)],
  },
  hakker: {
    navn: 'Stone Picks', bygning: 'savværk', ikon: 'res-sten', tekst: 'Workers carry +2 stone per trip per level.',
    niveauer: [P(100, 60, 0, 30), P(200, 120, 40, 45)],
  },
  murværk: {
    navn: 'Masonry', bygning: 'savværk', ikon: 'udv-mur', tekst: 'Your buildings gain +15% health and +1 armor per level.',
    niveauer: [P(120, 80, 100, 40), P(200, 120, 175, 55), P(300, 180, 260, 70)],
  },
};

// Hvad hver bygningstype kan forske i / opgradere til ('hal' og 'vagttårn' er opgraderinger af selve bygningen)
export const UDVIKLINGER = {
  storlejr: ['hal', 'minedrift'],
  smedje: ['våben', 'spyd', 'rustning'],
  krigerlejr: ['drill'],
  savværk: ['økser', 'hakker', 'murværk'],
  tårn: ['vagttårn'],
};

// Ikoner tegnet fra modeller (ikoner.js)
export const UDVIKLINGS_IKONER = [
  { id: 'udv-våben', sti: 'kaykit-adventurers/axe_2handed', vinkel: [0.2, -0.6, -0.6] },
  { id: 'udv-mur', sti: G + 'building_tower_base_green' },
  { id: 'udv-hal', sti: G + 'building_castle_green' },
  { id: 'udv-vagttårn', sti: VAGTTÅRN.model },
];
