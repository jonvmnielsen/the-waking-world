// Opgraderinger og forskning (M7, Jons ønske): bygningerne forsker i bedre våben, rustning og redskaber,
// Storlejren opgraderes i tre tiers, og vagttårne kan bygges om til Guard Towers og derefter Cannon Towers.
// Forskningens level 2 kræver Citadel og level 3 kræver Fortress (som WC3's tiers).
import { SPILLER, SPILLER_FARVE } from './racer.js';
const G = `kaykit-hexagon/buildings/${SPILLER_FARVE}/`;   // spillerens holdfarve
const P = (guld, træ, sten, tid) => ({ pris: { guld, træ, ...(sten ? { sten } : {}) }, tid });

// Storlejrens tiers (index = tier - 1)
export const HAL = [
  { navn: 'Great Hall' },
  { navn: 'Citadel', ...P(450, 250, 200, 70), hp: 800, tekst: 'Tier 2: +800 health, and second-level research.' },
  { navn: 'Fortress', ...P(700, 400, 350, 90), hp: 1200, tekst: 'Tier 3: +1200 health, and third-level research.' },
];

// Vagttårnets opgraderinger, ét trin ad gangen: Guard Tower (Citadel) → Cannon Tower (Fortress)
export const TÅRN_TRIN = [
  {
    navn: 'Guard Tower', ikon: 'udv-vagttårn', model: G + `building_tower_b_${SPILLER_FARVE}`, ...P(150, 60, 120, 35), hal: 2, hp: 500, rustning: 2,
    angreb: { rækkevidde: 22, skade: [36, 48], tid: 1.3 },
    tekst: 'Upgrade to a Guard Tower: more damage, range and health. Needs a Citadel.',
  },
  {
    navn: 'Cannon Tower', ikon: 'udv-kanontårn', model: G + `building_tower_catapult_${SPILLER_FARVE}`, ...P(250, 120, 220, 45), hal: 3, hp: 600, rustning: 2,
    angreb: { rækkevidde: 24, skade: [62, 82], tid: 2.4, område: 4.5 },
    tekst: 'Upgrade to a Cannon Tower: heavy shots that also hit every enemy close to the target. Needs a Fortress.',
  },
];
// The Dreaming: spiret vokser i stedet for at blive skiftet ud (egne modeller, racer.js), og træets trin har egne navne
if (SPILLER.modeller?.tårn?.includes('/')) {
  Object.assign(HAL[0], { navn: 'Tree of Dreams' }); Object.assign(HAL[1], { navn: 'Elder Tree' }); Object.assign(HAL[2], { navn: 'World Tree' });
  const m = `${SPILLER.modeller.tårn}_${SPILLER_FARVE}`;
  Object.assign(TÅRN_TRIN[0], { navn: 'Elder Spire', model: m, skala: 1.15, tekst: 'The spire grows into an Elder Spire: more damage, range and health. Needs an Elder Tree.' });
  Object.assign(TÅRN_TRIN[1], { navn: 'Moonfire Spire', model: m, skala: 1.3, tekst: 'The spire burns with moonfire: heavy shots that also hit every enemy close to the target. Needs the third tier.' });
}
export const VAGTTÅRN = TÅRN_TRIN[0];

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
  tårnskud: {
    navn: 'Burning Bolts', bygning: 'smedje', ikon: 'udv-vagttårn', tekst: 'All towers deal +20% damage and reach 2 further per level.',
    niveauer: [P(150, 80, 80, 40), P(250, 140, 160, 55)],
  },
  murværk: {
    navn: 'Masonry', bygning: 'savværk', ikon: 'udv-mur', tekst: 'Your buildings gain +15% health and +1 armor per level.',
    niveauer: [P(120, 80, 100, 40), P(200, 120, 175, 55), P(300, 180, 260, 70)],
  },
};

// Hvad hver bygningstype kan forske i / opgradere til ('hal' og 'vagttårn' er opgraderinger af selve bygningen)
export const UDVIKLINGER = {
  storlejr: ['hal', 'minedrift'],
  borg: ['minedrift'],
  smedje: ['våben', 'spyd', 'rustning', 'tårnskud'],
  krigerlejr: ['drill'],
  savværk: ['økser', 'hakker', 'murværk'],
  tårn: ['vagttårn'],
};

// Ikoner tegnet fra modeller (ikoner.js)
export const UDVIKLINGS_IKONER = [
  { id: 'udv-våben', sti: 'kaykit-adventurers/axe_2handed', vinkel: [0.2, -0.6, -0.6] },
  { id: 'udv-mur', sti: G + `building_tower_base_${SPILLER_FARVE}` },
  { id: 'udv-hal', sti: SPILLER.modeller?.storlejr?.includes('/') ? `${SPILLER.modeller.storlejr}_${SPILLER_FARVE}` : G + `building_castle_${SPILLER_FARVE}` },
  { id: 'udv-vagttårn', sti: TÅRN_TRIN[0].model },
  { id: 'udv-kanontårn', sti: TÅRN_TRIN[1].model },
];

// Forskningens navne følger spillerens race (racer.js)
for (const [id, navn] of Object.entries(SPILLER.forskning)) if (FORSKNING[id]) FORSKNING[id].navn = navn;
