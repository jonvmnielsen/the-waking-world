// Racernes bygninger og enheder (GDD 5.3–5.4). Skabelonen er The Tides; de andre racer får egne navne,
// modeller og farve (racer.js). BYGNINGER er spillerens race; bygningerFor() giver en anden races.
import { SPILLER, SPILLER_FARVE, iFarve } from './racer.js';

// skala = ekstra skala oven i hex-skalaen (og BYG_SKALA, byggeplads.js); stor = fylder hele feltet; tid = sekunder at bygge med én arbejder.
const G = 'kaykit-hexagon/buildings/green/';

const SKABELON = {
  storlejr: {
    hp: 2400,
    navn: 'Great Hall', model: G + 'building_castle_green', skala: 1.25, stor: true,
    pris: { guld: 400, træ: 200, sten: 150 }, tid: 90, forsyning: 12, aflevering: ['guld', 'træ', 'sten'], syn: 34,
    tekst: 'Your main building. Trains workers and receives all resources.',
    træner: ['arbejder'], kanBygges: false,
  },
  borg: {
    hp: 1800,
    navn: 'Stronghold', model: G + 'building_castle_green', skala: 1.3, stor: true,
    pris: { guld: 380, træ: 200, sten: 120 }, tid: 75, forsyning: 8, aflevering: ['guld', 'træ', 'sten'], syn: 26,
    tekst: 'A second main hall: trains workers and receives gold, wood and stone. Build it near a new gold mine.',
    træner: ['arbejder'],
  },
  hytte: {
    hp: 600,
    navn: 'Supply Hut', kort: 'Hut', model: G + 'building_home_a_green', skala: 1.4,
    pris: { guld: 80, træ: 50 }, tid: 25, forsyning: 10, syn: 16,
    tekst: '+10 supply, so you can have more workers and soldiers.',
  },
  savværk: {
    hp: 800,
    navn: 'Lumber Mill', model: G + 'building_lumbermill_green', skala: 1.05,
    pris: { guld: 120, træ: 60 }, tid: 35, aflevering: ['træ', 'sten'], syn: 18,
    tekst: 'Workers can drop off wood and stone here. Build it near the forest.',
  },
  tårn: {
    hp: 900,
    navn: 'Watch Tower', kort: 'Tower', model: G + 'building_tower_a_green', skala: 1.25,
    pris: { guld: 100, træ: 40, sten: 60 }, tid: 40, syn: 30,
    angreb: { rækkevidde: 18, skade: [22, 30], tid: 1.4 },
    tekst: 'Shoots enemies in range.',
  },
  marked: {
    hp: 900,
    navn: 'Marketplace', kort: 'Market', model: G + 'building_market_green', skala: 0.8,
    pris: { guld: 150, træ: 80, sten: 40 }, tid: 45, syn: 18, butik: true,
    tekst: 'Your own shop with potions, equipment and tomes.',
  },
  alter: {
    hp: 1000,
    navn: 'Spirit Altar', kort: 'Altar', model: G + 'building_church_green', skala: 1.35,
    pris: { guld: 160, træ: 60, sten: 80 }, tid: 50, syn: 18, alter: true,
    tekst: 'Your hero is revived here and healed nearby. Make offerings to raise your hero\'s attributes.',
  },
  smedje: {
    hp: 900,
    navn: 'Forge', model: G + 'building_blacksmith_green', skala: 1.15,
    pris: { guld: 140, træ: 100, sten: 60 }, tid: 45, syn: 18,
    tekst: 'Researches better axes, spears and armor for your soldiers.',
  },
  krigerlejr: {
    hp: 1100,
    navn: 'War Camp', model: G + 'building_barracks_green', skala: 0.8,
    pris: { guld: 160, træ: 80, sten: 40 }, tid: 55, syn: 18,
    træner: ['grunt', 'spydkaster'],
    tekst: 'Trains grunts and spear throwers. Veteran grunts are specialised here.',
  },
};

export function bygningerFor(race, farve) {
  const ud = {};
  for (const [type, d] of Object.entries(SKABELON)) {
    const model = race.modeller?.[type] ? `kaykit-hexagon/buildings/green/${race.modeller[type]}_green` : d.model;
    ud[type] = { ...d, model: iFarve(model, farve), navn: race.bygninger?.[type] ?? d.navn, kort: race.korte?.[type] ?? (race.bygninger?.[type] ? undefined : d.kort), tekst: race.tekster?.[type] ?? d.tekst };
    if (d.træner?.includes('grunt')) ud[type].træner = [race.kriger, race.skytte];
  }
  return ud;
}
export const BYGNINGER = bygningerFor(SPILLER, SPILLER_FARVE);

// Hvad en arbejder kan bygge, i menuens rækkefølge
export const BYGGEMENU = ['hytte', 'savværk', 'tårn', 'krigerlejr', 'smedje', 'marked', 'alter', 'borg'];

export const ENHEDER = {
  arbejder: { navn: SPILLER.arbejder, pris: { guld: 50 }, tid: 12, forsyning: 1, tekst: 'Gathers gold, wood and stone and builds your base.' },
  grunt: { navn: 'Grunt', pris: { guld: 120, træ: 20 }, tid: 18, forsyning: 2, ikon: 'enhed-grunt', tekst: 'Melee. The backbone of your army.' },
  slagsbror: { navn: 'Brawler', pris: { guld: 130 }, tid: 0, forsyning: 2, kro: true, ikon: 'rustenDolk', tekst: 'A tough brawler for hire. Fights up close.' },
  skytte: { navn: 'Crossbowman', pris: { guld: 150 }, tid: 0, forsyning: 2, kro: true, ikon: 'lynstav', tekst: 'Shoots from range. Fragile up close.' },
  lejesoldat: { navn: 'Sellsword', pris: { guld: 220 }, tid: 0, forsyning: 3, kro: true, ikon: 'ridderskjold', tekst: 'Heavy armor and a long sword. Holds the line.' },
  fodsoldat: { navn: 'Footman', pris: { guld: 120, træ: 20 }, tid: 18, forsyning: 2, ikon: 'enhed-fodsoldat', tekst: 'Melee. Shield and sword — the backbone of your army.' },
  armbrøst: { navn: 'Marksman', pris: { guld: 110, træ: 40 }, tid: 18, forsyning: 2, ikon: 'enhed-armbrøst', tekst: 'Shoots crossbow bolts from range.' },
  spydkaster: { navn: 'Spear Thrower', pris: { guld: 100, træ: 40 }, tid: 18, forsyning: 2, ikon: 'enhed-spydkaster', tekst: 'Throws spears from range.' },
};

// Byggestadier, der vises mens bygningen rejser sig
export const STADIER = ['kaykit-hexagon/buildings/neutral/building_stage_a', 'kaykit-hexagon/buildings/neutral/building_stage_b', 'kaykit-hexagon/buildings/neutral/building_stage_c'];
