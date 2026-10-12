// Hvilke træer og sten der vokser hvor (M10): biomet bestemmer træsættene (biomdata.js), regionen blandingen,
// og årstiden løvets farve. Hvert træ får sin egen tone, så en skov aldrig er ensfarvet.
import { UDSEENDE } from './kortvalg.js';
import { EFTERÅRSFYR } from './biomdata.js';

const NAT = 'kaykit-hexagon/decoration/nature/', KF = 'kaykit-forest/', HAL = 'kaykit-halloween/', FL = 'forge-lowpoly/';
const vælg = (tilf, l) => l[Math.floor(tilf() * l.length)];
const mellem = (tilf, a, b) => a + tilf() * (b - a);
const SUMPTRÆ = [[KF + 'tree_4_b_color1', 1.2], [KF + 'tree_bare_1_c_color1', 1.4], [KF + 'tree_bare_2_c_color1', 1.1], [HAL + 'tree_dead_small', 1.3]];
const NØGNE = [[KF + 'tree_bare_1_c_color1', 1.5], [KF + 'tree_bare_2_c_color1', 1.1], [KF + 'tree_bare_2_b_color1', 1.5]];
// Hvor stor en del af træerne der er løvtræer, pr. region (ganges med biomets andel)
const LØVANDEL = { skoven: 0.75, askemarken: 1.35, bjergene: 0.35, sumpen: 0.7 };
const KUL = [0.3, 0.27, 0.26];   // forkullede træer i det vulkanske biom

const grøn = (tilf) => { const l = mellem(tilf, 0.82, 1.12); return [l, l, l]; };
// Løvets tone: årstidens farver (fx efterårets røde og gule), med lidt variation
function løv(tilf) {
  const [r, g, b] = vælg(tilf, UDSEENDE.løv), l = mellem(tilf, 0.75, 1.0);
  return [r * l, g * l, b * l];
}

// [model, skala, farvetone]
export function træModel(tilf, region) {
  const T = UDSEENDE.træer, b = UDSEENDE.biom;
  const kul = b === 'vulkansk' ? KUL : null;
  if (region === 'gravlandet') return [...vælg(tilf, T.død), kul];
  if (region === 'sumpen' && b === 'tempereret' && tilf() < 0.4) { const [m, s] = vælg(tilf, SUMPTRÆ); return [m, s * mellem(tilf, 0.85, 1.1), løv(tilf)]; }
  if (tilf() < T.løvAndel * (LØVANDEL[region] ?? 1)) {
    if (UDSEENDE.nøgent && b !== 'vinter') { const [m, s] = vælg(tilf, NØGNE); return [m, s * mellem(tilf, 0.85, 1.1), null]; }   // vinterens nøgne løvtræer
    const [m, s] = vælg(tilf, T.løv);
    const kaktus = m.includes('cactus');
    return [m, s * mellem(tilf, 0.85, 1.15), kul ?? (kaktus ? grøn(tilf) : løv(tilf).map((v) => v * 0.85))];
  }
  // Om efteråret er nogle af nåletræerne gule og orange lærketræer
  if (UDSEENDE.årstid === 'efterår' && (b === 'tempereret' || b === 'hede') && tilf() < 0.3) { const [m, s] = vælg(tilf, EFTERÅRSFYR); return [m, s * mellem(tilf, 0.9, 1.15), grøn(tilf)]; }
  const [m, s] = vælg(tilf, T.fyr);
  const str = region === 'skoven' ? [1.0, 1.25] : region === 'sumpen' ? [0.8, 1.0] : [0.85, 1.1];
  return [m, s * mellem(tilf, ...str), kul ?? (m.includes('palm') ? løv(tilf) : grøn(tilf))];
}

// Sten: KayKits klipper i biomets farve, eller sort basalt i det vulkanske biom. [model, skala, tone, hexSkala?]
export function stenModel(tilf, stor) {
  if (UDSEENDE.basalt) return stor ? [FL + 'basalt_b', mellem(tilf, 0.6, 0.85), null] : [FL + 'basalt_a', mellem(tilf, 0.55, 0.75), null];
  const navn = stor ? vælg(tilf, ['c', 'e', 'c', 'b', 'd']) : vælg(tilf, ['a', 'b', 'd', 'c', 'e']);
  return [NAT + 'rock_single_' + navn, stor ? mellem(tilf, 2.4, 3.4) : 1.3, UDSEENDE.sten ?? null];
}
