// Kortet til skirmish: terræn + base + neutrale steder + creep-lejre + pynt.
// Bygger et HexKort med felttyper, pynt og gåbarhed. Selve 3D-modellerne laves i world.js.
import { lavTerræn, kortGrænser } from './kortgen.js';
import { placérSteder } from './steder.js';
import { blokPynt, friPynt, vandPynt } from './pynt.js';
import { rng } from './stoej.js';
import { KORT } from './config.js';

export function lavKort(seed = KORT.seed) {
  const tilf = rng(seed);
  const kort = lavTerræn(seed);
  const { heltSpawn, steder, lejre } = placérSteder(kort, tilf);

  for (const f of kort.felter.values()) {
    if (f.type === 'vand') vandPynt(f, tilf);
    else if (f.blok) blokPynt(f, tilf);
    else if (f.type === 'græs' && !f.optaget) friPynt(f, tilf);
  }
  return { kort, heltSpawn, steder, lejre, grænser: kortGrænser() };
}
