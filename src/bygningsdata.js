// The Tides bygninger og enheder (GDD 5.3–5.4). Navne er arbejdsnavne.
// skala = ekstra skala oven i hex-skalaen; tid = sekunder at bygge med én arbejder.
const G = 'kaykit-hexagon/buildings/green/';

export const BYGNINGER = {
  storlejr: {
    navn: 'Storlejr', model: G + 'building_castle_green', skala: 1.45, felter: 3,
    pris: { guld: 400, træ: 200, sten: 150 }, tid: 90, forsyning: 12, aflevering: ['guld', 'træ', 'sten'], syn: 34,
    tekst: 'Hovedbygningen. Træner arbejdere og modtager alle ressourcer.',
    træner: ['arbejder'], kanBygges: false,
  },
  hytte: {
    navn: 'Forsyningshytte', kort: 'Hytte', model: G + 'building_home_a_green', skala: 2.15,
    pris: { guld: 80, træ: 50 }, tid: 25, forsyning: 10, syn: 16,
    tekst: '+10 forsyning, så du kan have flere arbejdere og soldater.',
  },
  savværk: {
    navn: 'Savværk', model: G + 'building_lumbermill_green', skala: 1.3,
    pris: { guld: 120, træ: 60 }, tid: 35, aflevering: ['træ', 'sten'], syn: 18,
    tekst: 'Arbejdere kan aflevere træ og sten her. Byg det ved skoven.',
  },
  tårn: {
    navn: 'Vagttårn', model: G + 'building_tower_a_green', skala: 1.2,
    pris: { guld: 100, træ: 40, sten: 60 }, tid: 40, syn: 30,
    angreb: { rækkevidde: 18, skade: [22, 30], tid: 1.4 },
    tekst: 'Skyder fjender inden for rækkevidde.',
  },
  marked: {
    navn: 'Markedsplads', kort: 'Marked', model: G + 'building_market_green', skala: 1.15,
    pris: { guld: 150, træ: 80, sten: 40 }, tid: 45, syn: 18, butik: true,
    tekst: 'Din egen butik med eliksirer og udstyr.',
  },
  alter: {
    navn: 'Ånde-alter', kort: 'Alter', model: G + 'building_church_green', skala: 1.5,
    pris: { guld: 160, træ: 60, sten: 80 }, tid: 50, syn: 18, alter: true,
    tekst: 'Helten genopstår ved alteret og heles, når den står tæt på.',
  },
  krigerlejr: {
    navn: 'Krigerlejr', model: G + 'building_barracks_green', skala: 1.2,
    pris: { guld: 160, træ: 80, sten: 40 }, tid: 55, syn: 18,
    træner: ['grunt', 'spydkaster'],
    tekst: 'Træner grunts og spydkastere. Veteran-grunts specialiseres her.',
  },
};

// Hvad en arbejder kan bygge, i menuens rækkefølge
export const BYGGEMENU = ['hytte', 'savværk', 'tårn', 'krigerlejr', 'marked', 'alter'];

export const ENHEDER = {
  arbejder: { navn: 'Bærer', pris: { guld: 50 }, tid: 12, forsyning: 1, tekst: 'Samler guld, træ og sten og bygger basen.' },
  grunt: { navn: 'Grunt', pris: { guld: 120, træ: 20 }, tid: 18, forsyning: 2, ikon: 'enhed-grunt', tekst: 'Nærkamp. Hærens rygrad.' },
  spydkaster: { navn: 'Spydkaster', pris: { guld: 100, træ: 40 }, tid: 18, forsyning: 2, ikon: 'enhed-spydkaster', tekst: 'Kaster spyd på afstand.' },
};

// Byggestadier, der vises mens bygningen rejser sig
export const STADIER = ['kaykit-hexagon/buildings/neutral/building_stage_a', 'kaykit-hexagon/buildings/neutral/building_stage_b', 'kaykit-hexagon/buildings/neutral/building_stage_c'];
