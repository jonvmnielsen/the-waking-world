// Kortene (M9, Jons ønske: forskellige maps). Hvert kort har sin form, sin placering af baserne og sin historie.
// Kortene deler grundopstillingen fra Den Askegrå Ø (steder.js), men drejes, så basernes indbyrdes
// placering bevares: spilleren og The Memory står altid i hver sin ende med kroen imellem.
// Positioner er normaliserede (-1..1). T() drejer fra grundopstillingen til kortet; formen (vand, flod,
// bjergryg) beskrives i grundopstillingens koordinater, hvor aksen base→fjende er diagonalen.
// Valget gemmes i telefonen; et nyt valg genindlæser siden, så kortet bygges forfra.

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

const NØGLE = 'tww-kort';

function læsValg() {
  try {
    const url = new URLSearchParams(location.search).get('kort');
    if (url && KORT_TYPER[url]) return url;
    const v = localStorage.getItem(NØGLE);
    return KORT_TYPER[v] ? v : 'askeø';
  } catch { return 'askeø'; }
}

export const AKTIVT_ID = læsValg();
export const AKTIVT_KORT = { id: AKTIVT_ID, ...KORT_TYPER[AKTIVT_ID] };

// Skift kort: gem valget og byg siden forfra
export function skiftKort(id, fortsæt = false) {
  try {
    localStorage.setItem(NØGLE, id);
    if (fortsæt) sessionStorage.setItem('tww-fortsæt', '1');
  } catch { /* ingen lagring */ }
  const u = new URL(location.href);
  u.searchParams.delete('kort');
  location.replace(u.toString());
}

// Skal et gemt spil fortsættes med det samme (efter et kortskift)?
export function fortsætEfterSkift() {
  try { const v = sessionStorage.getItem('tww-fortsæt'); sessionStorage.removeItem('tww-fortsæt'); return v === '1'; } catch { return false; }
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
