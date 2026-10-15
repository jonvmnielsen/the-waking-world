// Den store kilde (M14b, GDD 17b søjle 3 — som WC3's Fountain of Health i midten af Lost Temple).
// En stor stenkilde midt mellem baserne, vogtet af en stærk lejr og en mellemsvær. Den heler alle, der står
// ved den — også fjenden — så den bliver et sted, man kæmper om, uden at nogen ejer det.
// Placeres efter kortets pynt og med sit eget frø, så ældre gemte spil passer (træernes numre ændres ikke).
import { hexAfstand, hexTilVerden } from './hexgrid.js';
import { tilAksial } from './kortgen.js';
import { KORT } from './config.js';
import { T } from './kortvalg.js';
import { rng } from './stoej.js';
import { FAMILIE_I_REGION, SAMMENSÆTNING } from './creepdata.js';
import { lejrPynt } from './pynt.js';

export const STORKILDE = { radius: 14, liv: 0.03, mana: 0.03, navn: 'The Old Wellspring' };

export function placérStorkilde(k, steder, lejre, seed = KORT.seed) {
  const r = rng(seed * 31 + 7), H = KORT.størrelse / 2;
  const ledig = (f) => f && f.type === 'græs' && f.gåbar && !f.optaget && !f.pynt.some((p) => p.ressource)
    && k.naboer(f).filter((n) => n.gåbar).length >= 5;
  const [nx, nz] = T(0.16, -0.16);
  const mål = tilAksial(Math.round(nx * H), Math.round(nz * H));
  let f = null, bd = Infinity;
  for (const x of k.felter.values()) {
    if (!ledig(x) || k.naboer(x).filter(ledig).length < 2) continue;
    const d = hexAfstand(x, mål);
    if (d < bd) { bd = d; f = x; }
  }
  if (!f) return;
  const pynt = { model: 'forge-lowpoly/fountain_great', rot: Math.floor(r() * 8) * 45, skala: 2.6, skygge: true };
  f.pynt = [pynt]; f.optaget = true; f.gåbar = false;
  steder.push({ type: 'storkilde', navn: STORKILDE.navn, pynt, q: f.q, r: f.r, ...hexTilVerden(f.q, f.r) });
  // Vogterne: en stærk lejr og en mellemsvær på hver sin side af kilden
  k.naboer(f).filter(ledig).slice(0, 2).forEach((n, i) => {
    const niveau = i ? 3 : 4, familie = FAMILIE_I_REGION[n.region] ?? 'plyndrere', valg = SAMMENSÆTNING[familie][niveau];
    n.pynt = n.pynt.filter((p) => p.ressource); n.optaget = true;
    lejrPynt(n, familie, r, false);
    lejre.push({ id: `lejr-${n.q}-${n.r}`, q: n.q, r: n.r, niveau, familie, creeps: valg[Math.floor(r() * valg.length)], kilde: true });
  });
}
