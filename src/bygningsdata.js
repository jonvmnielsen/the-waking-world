// The Tides bygninger og enheder (GDD 5.3–5.4). Navne er arbejdsnavne.
// skala = ekstra skala oven i hex-skalaen; tid = sekunder at bygge med én arbejder.
const G = 'kaykit-hexagon/buildings/green/';

export const BYGNINGER = {
  storlejr: {
    hp: 2400,
    navn: 'Great Hall', model: G + 'building_castle_green', skala: 1.45, felter: 3,
    pris: { guld: 400, træ: 200, sten: 150 }, tid: 90, forsyning: 12, aflevering: ['guld', 'træ', 'sten'], syn: 34,
    tekst: 'Your main building. Trains workers and receives all resources.',
    træner: ['arbejder'], kanBygges: false,
  },
  hytte: {
    hp: 600,
    navn: 'Supply Hut', kort: 'Hut', model: G + 'building_home_a_green', skala: 2.15,
    pris: { guld: 80, træ: 50 }, tid: 25, forsyning: 10, syn: 16,
    tekst: '+10 supply, so you can have more workers and soldiers.',
  },
  savværk: {
    hp: 800,
    navn: 'Lumber Mill', model: G + 'building_lumbermill_green', skala: 1.3,
    pris: { guld: 120, træ: 60 }, tid: 35, aflevering: ['træ', 'sten'], syn: 18,
    tekst: 'Workers can drop off wood and stone here. Build it near the forest.',
  },
  tårn: {
    hp: 900,
    navn: 'Watch Tower', kort: 'Tower', model: G + 'building_tower_a_green', skala: 1.2,
    pris: { guld: 100, træ: 40, sten: 60 }, tid: 40, syn: 30,
    angreb: { rækkevidde: 18, skade: [22, 30], tid: 1.4 },
    tekst: 'Shoots enemies in range.',
  },
  marked: {
    hp: 900,
    navn: 'Marketplace', kort: 'Market', model: G + 'building_market_green', skala: 1.15,
    pris: { guld: 150, træ: 80, sten: 40 }, tid: 45, syn: 18, butik: true,
    tekst: 'Your own shop with potions, equipment and tomes.',
  },
  alter: {
    hp: 1000,
    navn: 'Spirit Altar', kort: 'Altar', model: G + 'building_church_green', skala: 1.5,
    pris: { guld: 160, træ: 60, sten: 80 }, tid: 50, syn: 18, alter: true,
    tekst: 'Your hero is revived here and healed nearby. Make offerings to raise your hero\'s attributes.',
  },
  krigerlejr: {
    hp: 1100,
    navn: 'War Camp', model: G + 'building_barracks_green', skala: 1.2,
    pris: { guld: 160, træ: 80, sten: 40 }, tid: 55, syn: 18,
    træner: ['grunt', 'spydkaster'],
    tekst: 'Trains grunts and spear throwers. Veteran grunts are specialised here.',
  },
};

// Hvad en arbejder kan bygge, i menuens rækkefølge
export const BYGGEMENU = ['hytte', 'savværk', 'tårn', 'krigerlejr', 'marked', 'alter'];

export const ENHEDER = {
  arbejder: { navn: 'Worker', pris: { guld: 50 }, tid: 12, forsyning: 1, tekst: 'Gathers gold, wood and stone and builds your base.' },
  grunt: { navn: 'Grunt', pris: { guld: 120, træ: 20 }, tid: 18, forsyning: 2, ikon: 'enhed-grunt', tekst: 'Melee. The backbone of your army.' },
  slagsbror: { navn: 'Brawler', pris: { guld: 130 }, tid: 0, forsyning: 2, kro: true, ikon: 'rustenDolk', tekst: 'A tough brawler for hire. Fights up close.' },
  skytte: { navn: 'Crossbowman', pris: { guld: 150 }, tid: 0, forsyning: 2, kro: true, ikon: 'lynstav', tekst: 'Shoots from range. Fragile up close.' },
  lejesoldat: { navn: 'Sellsword', pris: { guld: 220 }, tid: 0, forsyning: 3, kro: true, ikon: 'ridderskjold', tekst: 'Heavy armor and a long sword. Holds the line.' },
  spydkaster: { navn: 'Spear Thrower', pris: { guld: 100, træ: 40 }, tid: 18, forsyning: 2, ikon: 'enhed-spydkaster', tekst: 'Throws spears from range.' },
};

// Byggestadier, der vises mens bygningen rejser sig
export const STADIER = ['kaykit-hexagon/buildings/neutral/building_stage_a', 'kaykit-hexagon/buildings/neutral/building_stage_b', 'kaykit-hexagon/buildings/neutral/building_stage_c'];
