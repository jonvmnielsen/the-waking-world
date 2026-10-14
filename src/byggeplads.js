// Byggepladser (Jon: bygningerne fylder for meget på den lille skærm). Bygningerne er mindre (BYG_SKALA),
// og et felt har tre små pladser, så to-tre bygninger kan stå på ét felt. Hovedbygningerne (stor: true)
// fylder hele feltet. Feltet kan stadig betrædes, så længe der er en ledig plads; figurerne går uden om
// bygningerne (hindring.js). Er alle tre pladser taget, spærrer feltet.
import { hexTilVerden } from './hexgrid.js';
import { BYGNINGER } from './bygningsdata.js';

export const BYG_SKALA = 0.6;
const RING = 2.9;   // afstand fra feltets midte til en lille plads
export const PLADSER = [0, 1, 2].map((i) => { const v = (i * 2 * Math.PI) / 3 + Math.PI / 6; return { dx: Math.cos(v) * RING, dz: Math.sin(v) * RING }; });

export const erStor = (type) => !!BYGNINGER[type]?.stor;

// Pladsens midte i verden (i = -1: hele feltet)
export function pladsPunkt(f, i) {
  const c = hexTilVerden(f.q, f.r);
  return i < 0 ? c : { x: c.x + PLADSER[i].dx, z: c.z + PLADSER[i].dz };
}

// Er feltet optaget af noget andet end vores små bygninger (mine, kro, ruin, stor bygning)?
const andet = (f) => f.optaget && !f.pladser?.some(Boolean);

// Hvilken plads på feltet passer til trykket (x, z)? -1 for store bygninger; null hvis intet er ledigt
export function vælgPlads(f, type, x, z) {
  if (erStor(type)) return -1;
  let bedst = null, bd = Infinity;
  PLADSER.forEach((_, i) => {
    if (f.pladser?.[i]) return;
    const p = pladsPunkt(f, i), d = x == null ? i : Math.hypot(p.x - x, p.z - z);
    if (d < bd) { bd = d; bedst = i; }
  });
  return bedst;
}

// Fejltekst eller null
export function pladsFejl(f, type, i) {
  if (erStor(type)) return f.optaget || !f.gåbar ? 'The spot is taken' : null;
  if (i == null || andet(f) || f.stor) return 'The spot is taken';
  return f.pladser?.[i] ? 'The spot is taken' : null;
}

export function optag(f, i, b) {
  f.optaget = true;
  if (i < 0) { f.stor = b; f.gåbar = false; return; }
  (f.pladser ??= [null, null, null])[i] = b;
  b.verden?.kort.nav?.stempel(b.x, b.z, b.fod ?? 2.3, 1);   // stifindingen går uden om (navgitter.js)
  f.gåbar = f.pladser.some((p) => !p);
}

export function frigør(f, i) {
  if (i < 0) { f.stor = null; f.optaget = false; f.gåbar = !f.blok; return; }
  const b = f.pladser?.[i];
  if (b) b.verden?.kort.nav?.stempel(b.x, b.z, b.fod ?? 2.3, -1);
  if (f.pladser) f.pladser[i] = null;
  f.optaget = !!f.pladser?.some(Boolean);
  f.gåbar = !f.blok;
}

// Punkter lige uden for en lille bygning, hvor en arbejder kan stå (nærmeste først)
export function rundtOm(kort, b, fra) {
  const ud = [];
  for (let k = 0; k < 8; k++) {
    const v = (k / 8) * Math.PI * 2, r = b.fod + 1.1, x = b.x + Math.cos(v) * r, z = b.z + Math.sin(v) * r;
    if (kort.erGåbar(x, z)) ud.push({ x, z });
  }
  return ud.sort((a, c) => Math.hypot(a.x - fra.x, a.z - fra.z) - Math.hypot(c.x - fra.x, c.z - fra.z));
}

// Små bygninger i feltet og naboerne skubber figurer ud (som frie træer og sten)
export function undgåBygninger(kort, f, u) {
  for (const g of [f, ...kort.naboer(f)]) {
    for (const b of g.pladser ?? []) {
      if (!b || b.død || u.bygning === b && u.tilstand === 'bygger') continue;
      const dx = u.x - b.x, dz = u.z - b.z, d = Math.hypot(dx, dz), min = b.fod + u.radius;
      if (d >= min || d < 1e-4) continue;
      const nx = b.x + (dx / d) * min, nz = b.z + (dz / d) * min;
      if (kort.erGåbar(nx, nz)) { u.rod.position.x = nx; u.rod.position.z = nz; }
    }
  }
}
