// Pladserne til modstanderens base (GDD 11): hallen på ét felt i det modsatte hjørne af kortet,
// en guldmine og pladser til de andre bygninger. Pladserne nærmest kortets midte (mod spilleren) kommer først.
import { hexAfstand, hexTilVerden } from './hexgrid.js';

const HAL_FELTER = [[0, 0]];
const BYG = 'kaykit-hexagon/buildings/';

export function fjendeBase(k, optag, fri, steder) {
  const E = k.fjendeBase;
  const felter = HAL_FELTER.map(([dq, dr]) => k.hent(E.q + dq, E.r + dr)).filter(Boolean);
  for (const f of felter) optag(f, null);
  const midt = (fs) => ({ x: fs.reduce((s, f) => s + hexTilVerden(f.q, f.r).x, 0) / fs.length, z: fs.reduce((s, f) => s + hexTilVerden(f.q, f.r).z, 0) / fs.length });
  const hal = { felter, ...midt(felter) };

  // Guldmine tre skridt væk (væk fra kortets midte)
  const væk = (f) => { const p = hexTilVerden(f.q, f.r); return -Math.hypot(p.x, p.z); };
  const mine = [...k.felter.values()].filter((f) => hexAfstand(f, E) === 3 && fri(f)).sort((a, b) => væk(a) - væk(b))[0];
  if (mine) {
    optag(mine, { model: BYG + 'yellow/building_mine_yellow', rot: 60, skala: 1.1, skygge: true });
    steder.push({ type: 'mine', størrelse: 'mellem', guld: 15000, q: mine.q, r: mine.r, ...hexTilVerden(mine.q, mine.r) });
  }

  // Byggepladser: frie felter 2–4 skridt fra hallen, ikke ved siden af hinanden
  // Tæt om hallen som spillerens base: først nabofelterne, dem mod kortets midte først
  const nærMidte = (f) => { const p = hexTilVerden(f.q, f.r); return Math.hypot(p.x, p.z) * 0.02 + hexAfstand(f, E); };
  const kandidater = [...k.felter.values()].filter((f) => { const d = hexAfstand(f, E); return d >= 1 && d <= 3 && fri(f) && f !== mine; }).sort((a, b) => nærMidte(a) - nærMidte(b));
  // To små bygninger pr. felt (byggeplads.js), som spillerens
  const pladser = [];
  for (const f of kandidater) {
    if (pladser.length >= 8) break;
    if (pladser.some((p) => p.f === f)) continue;
    f.optaget = true;   // reserveret til modstanderens bygninger
    pladser.push({ f, i: 0 }, { f, i: 2 });
  }
  // Samlingssted for hæren: foran hallen mod kortets midte
  const retning = Math.atan2(-hal.z, -hal.x);
  const samling = { x: hal.x + Math.cos(retning) * 16, z: hal.z + Math.sin(retning) * 16 };
  return { hal, pladser, samling, mine: mine ? hexTilVerden(mine.q, mine.r) : { x: hal.x + 12, z: hal.z } };
}
