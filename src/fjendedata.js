// The Memory — den første AI-modstander (GDD 5.5 og 11). Bygninger i rødt, hær af skeletter.
// The Memorys styrke stiger jo længere spillet varer: deres soldater får højere level med tiden.
const R = 'kaykit-hexagon/buildings/red/';

export const FJENDE_BYGNINGER = {
  hal: { navn: 'Bone Throne', model: R + 'building_castle_red', skala: 1.45, hp: 2600, rustning: 5, radius: 9, højde: 12, syn: 26 },
  krypt: { navn: 'Crypt', model: R + 'building_barracks_red', skala: 1.2, hp: 1300, rustning: 3, radius: 5.5, højde: 8, træner: true, pris: 220 },
  spir: {
    navn: 'Grave Spire', model: R + 'building_tower_a_red', skala: 1.2, hp: 950, rustning: 4, radius: 5, højde: 10, pris: 160,
    angreb: { rækkevidde: 17, skade: [20, 28], tid: 1.6 },
  },
  hytte: { navn: 'Haunt', model: R + 'building_home_b_red', skala: 2.1, hp: 700, rustning: 2, radius: 5, højde: 7, pris: 100 },
};

// Rækkefølgen bygningerne får pladserne i (fjendeplads.js). De første står fra start.
export const LAYOUT = ['spir', 'krypt', 'hytte', 'hytte', 'spir', 'krypt', 'spir', 'spir'];
export const FRA_START = 4;

// Hæren: skelettyper fra creepdata.js; pris i The Memorys guld og træningstid i sekunder
export const FJENDE_ENHEDER = {
  minion: { navn: 'Risen', pris: 70, tid: 12, vægt: 4 },
  rogue: { navn: 'Bone Stalker', pris: 90, tid: 14, vægt: 2 },
  warrior: { navn: 'Grave Knight', pris: 150, tid: 20, vægt: 2 },
  mage: { navn: 'Bone Mage', pris: 120, tid: 18, vægt: 2 },
};

// Sværhedsgrader: indtægt pr. sekund, første angreb (min), tid mellem angreb (min), start-level, hærens loft,
// hvor mange der bliver hjemme, og bølgernes størrelse (første bølge + vækst pr. bølge)
export const SVÆRHED = {
  easy: { navn: 'Easy', indtægt: 2.4, førsteAngreb: 10, mellemrum: 4.5, level: 2, loft: 12, hjemme: 1, bølge: [3, 2] },
  normal: { navn: 'Normal', indtægt: 3.4, førsteAngreb: 7, mellemrum: 3.5, level: 3, loft: 22, hjemme: 2, bølge: [5, 2] },
  hard: { navn: 'Hard', indtægt: 4.8, førsteAngreb: 5, mellemrum: 2.5, level: 4, loft: 30, hjemme: 3, bølge: [6, 3] },
};

// Senere bygninger: [minut, type]. Mod en aggressiv spiller kommer tårnene tidligere.
export const BYGGEPLAN = [[4, 'spir'], [8, 'krypt'], [12, 'spir'], [16, 'spir']];

// Soldaternes level stiger med tiden: +1 hvert 4. minut (højst level 12)
export const fjendeLevel = (sværhed, minutter) => Math.min(12, SVÆRHED[sværhed].level + Math.floor(minutter / 4));
