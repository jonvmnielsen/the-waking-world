// Biomer og årstider (M10, Jons ønske: maps med forskellige biomer og årstider — valgt eller tilfældige).
// Et biom bestemmer jordens farver, træer og planter, vand (eller lava), himmel, vejr og regionernes navne.
// En årstid justerer græsset, løvet, blomsterne, sneen og vejret oven i biomet.
// Jordfarver er [farvetone, mætning, lyshed] (HSL) til de tegnede teksturer i grund.js.
const KF = 'kaykit-forest/', NAT = 'kaykit-hexagon/decoration/nature/', HAL = 'kaykit-halloween/', FL = 'forge-lowpoly/', QN = 'quaternius-nature/';

// Træsæt: [model, skala]. 'fyr' = nåletræer, 'løv' = løvtræer, 'død' = døde/nøgne træer, 'særlig' = biomets egne
const FYR = [[NAT + 'tree_single_a', 1.3], [NAT + 'tree_single_b', 1.3]];
const QFYR = [[QN + 'pine_1', 1.15], [QN + 'pine_3', 1.15], [QN + 'pine_5', 1.0]];
const LØV = [[KF + 'tree_1_b_color1', 1.25], [KF + 'tree_3_b_color1', 1.35], [KF + 'tree_1_c_color1', 0.85], [KF + 'tree_3_c_color1', 1.05]];
// Lærk/efterårsfyr fra Halloween-pakken (gule og orange)
export const EFTERÅRSFYR = [[HAL + 'tree_pine_orange_large', 1.0], [HAL + 'tree_pine_yellow_large', 1.0], [HAL + 'tree_pine_orange_medium', 1.2], [HAL + 'tree_pine_yellow_medium', 1.2]];
const NØGNE = [[KF + 'tree_bare_1_c_color1', 1.5], [KF + 'tree_bare_2_c_color1', 1.1], [KF + 'tree_bare_1_b_color1', 2.4], [KF + 'tree_bare_2_b_color1', 1.5]];
const DØDE = [[QN + 'deadtree_1', 0.85], [QN + 'deadtree_3', 0.6], [HAL + 'tree_dead_large', 1.1], [HAL + 'tree_dead_medium', 1.3]];
const PALMER = [[FL + 'palm_medium', 1.0], [FL + 'palm_tall_a', 0.75], [FL + 'palm_bent', 0.85], [FL + 'palm_tall_b', 0.75]];
const JUNGLE = [[FL + 'canopy_a', 0.6], [FL + 'canopy_b', 0.75]];
const KAKTUS = [[FL + 'cactus_saguaro_a', 2.2], [FL + 'cactus_saguaro_b', 2.6], [FL + 'cactus_saguaro_c', 1.9]];

export const BIOMER = {
  tempereret: {
    navn: 'Temperate', kort: 'Green meadows, pine woods and quiet lakes.',
    jord: { græs: [78, 38, 50], jord: [32, 30, 45], skov: [60, 28, 24], sand: [42, 48, 72], klippe: [35, 6, 52] },
    tone: [1, 1, 1], himmel: 0x9fd3ea, hemiJord: 0x5a6b3a, vand: 0x3f9ac9, sne: 0,
    træer: { fyr: FYR, løv: LØV, løvAndel: 0.3, død: DØDE }, sten: null,
  },
  vinter: {
    navn: 'Winter', kort: 'Deep snow, frozen lakes and silent pines.',
    jord: { græs: [205, 18, 90], jord: [215, 12, 60], skov: [210, 14, 74], sand: [200, 20, 84], klippe: [210, 8, 58] }, græsSne: true,
    tone: [0.97, 0.99, 1.04], himmel: 0xc7d9e8, sol: 0xf4f7ff, hemiJord: 0x8d9aa8, vand: 0x5b8cae, sne: 0.85, vejr: 'sne',
    træer: { fyr: [...FYR, ...QFYR], løv: NØGNE, løvAndel: 0.2, død: NØGNE }, sten: null,
    regioner: {
      askemarken: ['Snowfields', 'The snow remembers every footprint until the next storm forgets them.'],
      skoven: ['Frostwood', 'Pines heavy with snow. Sometimes one lets its load fall, and the whole wood listens.'],
      bjergene: ['Ice Crags', 'Blue ice in the cracks of the rock. The miners say it hums.'],
      sumpen: ['Frozen Fen', 'The bells of the drowned are frozen silent until spring.'],
    },
  },
  ørken: {
    navn: 'Desert', kort: 'Dunes, red mesas and palm oases.',
    jord: { græs: [40, 42, 64], jord: [22, 42, 50], skov: [35, 32, 42], sand: [42, 58, 76], klippe: [18, 34, 52] }, græsTør: true,
    tone: [1.06, 0.98, 0.86], himmel: 0xa9d2e6, sol: 0xfff0c8, hemiJord: 0x9a7a4a, vand: 0x2aa8b2, sne: 0, vejr: 'støv',
    træer: { fyr: PALMER, løv: KAKTUS, løvAndel: 0.45, død: DØDE }, sten: [1.15, 0.85, 0.7],
    regioner: {
      askemarken: ['Dune Sea', 'The dunes walk a little every night. Nothing here stays where it was left.'],
      skoven: ['Palm Oases', 'Water, shade and dates. Every caravan in Vaelthar knows these trees by name.'],
      gravlandet: ['Bone Flats', 'The sun has bleached the bones until they forgot whose they were.'],
      bjergene: ['Red Mesas', 'Red rock carved by a wind that once had a voice.'],
      sumpen: ['Salt Pans', 'A sea dried up here. The salt still tastes of it.'],
    },
  },
  tropisk: {
    navn: 'Tropical', kort: 'Jungle, white beaches and turquoise water.',
    jord: { græs: [100, 52, 40], jord: [22, 40, 36], skov: [85, 40, 20], sand: [46, 52, 82], klippe: [30, 10, 44] },
    tone: [0.96, 1.04, 0.96], himmel: 0x8fd6f0, hemiJord: 0x4a7a3a, vand: 0x22b8c0, sne: 0, vejr: 'regn',
    træer: { fyr: PALMER, løv: [...JUNGLE, ...LØV], løvAndel: 0.55, død: PALMER }, sten: null,
    regioner: {
      askemarken: ['Sunlit Coast', 'Warm sand and turquoise water. Too beautiful to trust.'],
      skoven: ['Deep Jungle', 'Green on green on green. Something is always watching from the leaves.'],
      gravlandet: ['Drowned Temple', 'Vines have pulled the old temple half into the earth. The carvings show five faces.'],
      bjergene: ['Green Peaks', 'Mist clings to the peaks every morning, as if they were breathing.'],
      sumpen: ['Mangroves', 'Roots like fingers in the water. Mind where you step.'],
    },
  },
  vulkansk: {
    navn: 'Volcanic', kort: 'Black rock, ash and rivers of fire.',
    jord: { græs: [28, 10, 32], jord: [12, 18, 20], skov: [20, 14, 18], sand: [0, 0, 22], klippe: [10, 8, 26] }, græsTør: true,
    tone: [1.02, 0.94, 0.9], himmel: 0x9b8f8c, sol: 0xffc49a, hemiJord: 0x4a2a1a, vand: 0x55606a, lava: true, sne: 0, vejr: 'aske',
    træer: { fyr: DØDE, løv: NØGNE, løvAndel: 0.35, død: DØDE }, sten: [0.45, 0.42, 0.42], basalt: true,
    regioner: {
      askemarken: ['Ashen Plains', 'Grey ash to the knees. Under it the ground is still warm.'],
      skoven: ['Burnt Forest', 'Black trunks still standing in rows, as if waiting for leaves that will not come.'],
      gravlandet: ['Cinder Graves', 'They buried their dead in the ash. The ash buried them again.'],
      bjergene: ['Fire Peaks', 'The mountains bleed fire. The Tide calls it the world remembering its anger.'],
      sumpen: ['Sulphur Pools', 'Yellow steam and boiling mud. The smell alone keeps most things away.'],
    },
  },
  hede: {
    navn: 'Heath', kort: 'Heather moors, peat and wind-bent pines.',
    jord: { græs: [330, 16, 42], jord: [25, 32, 26], skov: [55, 24, 22], sand: [45, 28, 64], klippe: [40, 6, 54] }, lyng: true,
    tone: [1.0, 0.96, 0.98], himmel: 0xb3c4cf, hemiJord: 0x5a4a5a, vand: 0x4d7f99, sne: 0, vejr: 'blæst',
    træer: { fyr: QFYR, løv: NØGNE, løvAndel: 0.3, død: NØGNE }, sten: null,
    regioner: {
      askemarken: ['Heather Moor', 'Purple heather to the horizon, and a wind that never quite stops.'],
      skoven: ['Windbent Pines', 'Every tree here leans the same way, pointing at something only the wind can see.'],
      bjergene: ['Grey Tors', 'Stacks of granite like the knuckles of a buried fist.'],
      sumpen: ['Peat Bog', 'The peat keeps everything it swallows. Some of it is very old.'],
    },
  },
};

// Årstider: græs = [farvetone, mætning, lyshed] lagt til; løv = farver løvtræerne trækkes mod; blomster = faktor
export const ÅRSTIDER = {
  forår: { navn: 'Spring', græs: [6, 6, 4], løv: [[0.85, 1.12, 0.8], [1.15, 0.95, 1.05]], blomster: 2, sne: 0, vejr: 'regn' },
  sommer: { navn: 'Summer', græs: [0, 0, 0], løv: [[1, 1, 1]], blomster: 1, sne: 0, vejr: null },
  efterår: { navn: 'Autumn', græs: [-26, -4, -2], løv: [[2.9, 0.75, 0.25], [3.2, 0.45, 0.2], [2.4, 1.05, 0.2], [1.8, 0.9, 0.35]], blomster: 0.25, sne: 0, vejr: 'blade' },
  vinter: { navn: 'Winter', græs: [0, -14, 8], løv: [[0.95, 0.95, 1]], blomster: 0, sne: 0.6, vejr: 'sne', nøgent: true },
};

export const BIOM_IDER = Object.keys(BIOMER);
export const ÅRSTID_IDER = Object.keys(ÅRSTIDER);

// Biom + årstid samlet: hvad resten af spillet læser (verden.js-agtigt "udseende")
export function udseende(biom, årstid) {
  const b = BIOMER[biom] ?? BIOMER.tempereret, å = ÅRSTIDER[årstid] ?? ÅRSTIDER.sommer;
  // Sne: vinterbiomet er altid hvidt; i varme biomer falder der ingen sne
  const kanSne = !['ørken', 'tropisk', 'vulkansk'].includes(biom);
  const sne = biom === 'vinter' ? (årstid === 'sommer' ? 0.6 : 0.85) : kanSne ? å.sne : 0;
  const græs = b.jord.græs.map((v, i) => v + (b.græsSne ? 0 : å.græs[i] * (biom === 'tempereret' || biom === 'hede' ? 1 : 0.5)));
  let vejr = b.vejr ?? null;
  if (!vejr || (biom === 'tempereret' && å.vejr)) vejr = kanSne ? å.vejr : å.vejr === 'sne' ? null : å.vejr;
  if (sne > 0.3) vejr = 'sne';
  return {
    biom, årstid, ...b, jord: { ...b.jord, græs }, sne, vejr,
    løv: biom === 'tropisk' || biom === 'ørken' ? [[1, 1, 1]] : å.løv,
    blomster: å.blomster * (biom === 'vulkansk' ? 0 : biom === 'vinter' ? 0.1 : 1),
    nøgent: !!å.nøgent && kanSne,
  };
}

// Regionens navn og første linje i det aktive biom (eller null → standardnavnet)
export const regionTekst = (u, region) => u?.regioner?.[region] ?? null;

