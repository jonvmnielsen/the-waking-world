// Kortene (M9, Jons ønske: forskellige maps). Hvert kort har sin form, sin placering af baserne og sin historie.
// Kortene deler grundopstillingen fra Den Askegrå Ø (steder.js), men drejes, så basernes indbyrdes
// placering bevares: spilleren og The Memory står altid i hver sin ende med kroen imellem.
// Positioner er normaliserede (-1..1). T() drejer fra grundopstillingen til kortet; formen (vand, flod,
// bjergryg) beskrives i grundopstillingens koordinater, hvor aksen base→fjende er diagonalen.
// Valget gemmes i telefonen; et nyt valg genindlæser siden, så kortet bygges forfra.

import { BIOM_IDER, ÅRSTID_IDER, udseende } from './biomdata.js';

// Kortets størrelse: flere felter, flere lejre og mere guld i minerne (okonomi.js)
export const STØRRELSER = {
  lille: { navn: 'Small', felter: 40, guld: 0.8 },
  normal: { navn: 'Normal', felter: 48, guld: 1 },
  stor: { navn: 'Large', felter: 58, guld: 1.25 },
};

export const KORT_TYPER = {
  askeø: {
    navn: 'The Ashen Isle', seed: 11, drej: 0, form: 'ø',
    kort: 'An island of ash and green, where the Tide first made landfall.',
    lore: 'They say the Ashfields burned the night The Unnamed was forgotten — every hearth on the isle went out at once, and no one could remember why they had lit them.',
    træk: ['Island', 'Balanced', 'Classic'],
  },
  dal: {
    navn: 'The Sundered Vale', seed: 23, drej: Math.PI / 4, form: 'flod',
    kort: 'A great river splits the land. Three fords — and the tavern guards the middle one.',
    lore: 'The river Aun once had a name for every bend. When the names were lost, the water forgot its way and cut the vale in two. The Ford Inn still charges a toll to cross.',
    træk: ['River', 'Three crossings', 'Choke points'],
  },
  ryg: {
    navn: "The Spine of Khal'dur", seed: 37, drej: -Math.PI / 4, form: 'ryg',
    kort: 'A wall of mountains runs across the plains. Only three passes cut through it.',
    lore: "The Tide's own homeland. The elders say the Spine is the backbone of something enormous that lay down to sleep — and that it has been breathing more deeply of late.",
    træk: ['Mountain wall', 'Three passes', 'Rich in stone'],
    regioner: { bjergene: [[0.0, 0.0], [0.6, -0.2], [-0.25, 0.65]] },
  },
  sump: {
    navn: 'The Drowned Marches', seed: 51, drej: -Math.PI / 2, form: 'søer',
    kort: 'Lakes, reeds and slow water everywhere. Paths wind between the meres.',
    lore: 'The Marches were farmland once. Then the rain came and did not remember to stop. The drowned villages still ring their bells under the water at night.',
    træk: ['Many lakes', 'Winding paths', 'Marsh'],
    regioner: { sumpen: [[0.52, 0.62], [0.0, 0.0], [-0.5, -0.2]], skoven: [[-0.62, -0.25]] },
  },
};

const NØGLE = 'tww-kort', VALG = 'tww-verden';

// Verdensvalget (M10): kort, biom, årstid, størrelse og om verden skal være ny hver gang.
// 'tilfældig' trækkes, når siden indlæses (så baggrunden bag menuen allerede viser det trukne).
export const VALG_STD = { kort: 'askeø', biom: 'tilfældig', årstid: 'tilfældig', størrelse: 'normal', nyVerden: true, race: 'tide' };
const RACER_IDER = ['tide', 'arkitekter', 'dreaming'];   // racer.js

function læsValg() {
  let v = { ...VALG_STD };
  try {
    const gl = localStorage.getItem(NØGLE);
    if (KORT_TYPER[gl]) v.kort = gl;
    Object.assign(v, JSON.parse(localStorage.getItem(VALG) ?? '{}'));
    const url = new URLSearchParams(location.search);
    for (const k of ['kort', 'biom', 'årstid', 'størrelse', 'race', 'fjende']) if (url.get(k)) v[k] = url.get(k);
    if (url.get('seed')) { v.nyVerden = false; v.seed = +url.get('seed'); }
  } catch { /* ingen lagring */ }
  if (!KORT_TYPER[v.kort]) v.kort = 'askeø';
  return v;
}

// Et gemt spil der skal fortsættes, bestemmer verden helt (inkl. frøet)
function læsTvang() {
  try { const t = JSON.parse(sessionStorage.getItem('tww-tving') ?? 'null'); sessionStorage.removeItem('tww-tving'); return t; } catch { return null; }
}

const træk = (l) => l[Math.floor(Math.random() * l.length)];
export const VERDENSVALG = læsValg();
const TVANG = læsTvang();
export const FORTSÆT_NU = !!TVANG;
const v = TVANG ?? VERDENSVALG;
export const AKTIVT_ID = KORT_TYPER[v.kort] ? v.kort : 'askeø';
export const AKTIVT_KORT = {
  id: AKTIVT_ID, ...KORT_TYPER[AKTIVT_ID],
  biom: v.biom && v.biom !== 'tilfældig' ? v.biom : træk(BIOM_IDER),
  årstid: v.årstid && v.årstid !== 'tilfældig' ? v.årstid : træk(ÅRSTID_IDER),
  størrelse: STØRRELSER[v.størrelse] ? v.størrelse : 'normal',
  seed: TVANG?.seed ?? (v.seed || (VERDENSVALG.nyVerden ? 1 + Math.floor(Math.random() * 99999) : KORT_TYPER[AKTIVT_ID].seed)),
};
AKTIVT_KORT.felter = STØRRELSER[AKTIVT_KORT.størrelse].felter;
// Racerne: spilleren vælger selv; modstanderen trækkes (eller kommer fra det gemte spil)
AKTIVT_KORT.race = RACER_IDER.includes(v.race) ? v.race : 'tide';
AKTIVT_KORT.fjendeRace = RACER_IDER.includes(TVANG?.fjendeRace ?? v.fjende) ? (TVANG?.fjendeRace ?? v.fjende) : træk(RACER_IDER);
// Biom + årstid: jordens farver, træer, vand, himmel og vejr (biomdata.js)
export const UDSEENDE = udseende(AKTIVT_KORT.biom, AKTIVT_KORT.årstid);

// Gem et nyt valg og byg verden forfra
export function gemValg(ændring) {
  try { localStorage.setItem(VALG, JSON.stringify({ ...VERDENSVALG, ...ændring, seed: undefined })); if (ændring.kort) localStorage.setItem(NØGLE, ændring.kort); } catch { /* ingen lagring */ }
  genindlæs();
}
export const skiftKort = (id) => gemValg({ kort: id });

// Fortsæt et gemt spil: byg præcis dets verden og fortsæt med det samme
export function fortsætGem(g) {
  try { sessionStorage.setItem('tww-tving', JSON.stringify({ kort: g.kort ?? 'askeø', biom: g.biom ?? 'tempereret', årstid: g.årstid ?? 'sommer', størrelse: g.størrelse ?? 'normal', seed: g.seed, race: g.race ?? 'tide', fjendeRace: g.fjendeRace ?? 'tide' })); } catch { /* ingen lagring */ }
  genindlæs();
}
// Er det gemte spil fra præcis den verden, der er bygget nu?
export const sammeVerden = (g) => g && g.seed === AKTIVT_KORT.seed && (g.kort ?? 'askeø') === AKTIVT_ID && (g.biom ?? 'tempereret') === AKTIVT_KORT.biom
  && (g.årstid ?? 'sommer') === AKTIVT_KORT.årstid && (g.størrelse ?? 'normal') === AKTIVT_KORT.størrelse
  && (g.race ?? 'tide') === AKTIVT_KORT.race && (g.fjendeRace ?? 'tide') === AKTIVT_KORT.fjendeRace;

function genindlæs() {
  const u = new URL(location.href);
  for (const k of ['kort', 'biom', 'årstid', 'størrelse', 'seed', 'race', 'fjende']) u.searchParams.delete(k);
  location.replace(u.toString());
}

// Drej et punkt fra grundopstillingen til det aktive kort (og tilbage)
const c = Math.cos(AKTIVT_KORT.drej), s = Math.sin(AKTIVT_KORT.drej);
export const T = (x, z) => [x * c - z * s, x * s + z * c];
export const TInv = (x, z) => [x * c + z * s, -x * s + z * c];

// Formen i grundopstillingens koordinater: 'vand' eller 'bjerg' eller null (land)
// u = afstand langs tværlinjen (den der skærer aksen base→fjende), v = afstand fra den
export function formFelt(nx, nz, støjFn) {
  const [x, z] = TInv(nx, nz);
  const u = (x + z) / Math.SQRT2, v = (x - z) / Math.SQRT2;
  const bugt = (støjFn(u * 9, 0, 41) - 0.5) * 0.22;
  const nærVadested = (punkter, r) => punkter.some((p) => Math.abs(u - p) < r);
  switch (AKTIVT_KORT.form) {
    case 'flod': {
      const bredde = 0.055 + støjFn(u * 14, 3, 43) * 0.04;
      if (Math.abs(v - bugt) < bredde && !nærVadested([-0.55, 0, 0.5], 0.07)) return 'vand';
      return null;
    }
    case 'ryg': {
      const bredde = 0.07 + støjFn(u * 11, 5, 44) * 0.05;
      if (Math.abs(v - bugt * 0.6) < bredde && !nærVadested([-0.5, 0, 0.55], 0.075)) return 'bjerg';
      return null;
    }
    default: return null;
  }
}

// Ekstra søer på Marskens kort
export const SØ_FAKTOR = AKTIVT_KORT.form === 'søer' ? 0.82 : 1;
