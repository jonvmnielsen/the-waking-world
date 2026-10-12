// Placering af mindesmærkerne (M9): syv Navnesten og fire andre minder (en gammel mur, en grav, en forladt
// lejr) på hvert kort, langt fra hinanden, fra baserne og fra lejrene. Kaldes fra steder.js før naturen
// lægges ud, så felterne er reserverede. Selve opdagelsen og læsningen sker i mindesmaerker.js.
import { hexAfstand, hexTilVerden } from './hexgrid.js';
import { MINDER, NAVNESTEN } from './stedlore.js';

const HAL = 'kaykit-halloween/', NEU = 'kaykit-hexagon/buildings/neutral/', PROPS = 'kaykit-hexagon/decoration/props/';
const NAT = 'kaykit-hexagon/decoration/nature/';

// Pynten for hver slags: [model, dx, dz, skala, rotation]
const PYNT = {
  navnesten: [[HAL + 'pillar', 0, 0, 2.6, 0], [HAL + 'candle_triple', 2.2, 1.6, 1.8, 0], [HAL + 'plaque_candles', -2.3, 1.4, 1.5, 200], [NAT + 'rock_single_a', 1.8, -2.2, 0.9, 40]],
  mur: [[NEU + 'wall_straight', 0, 0, 0.55, 0], [NEU + 'wall_corner_a_outside', 2.5, 2.2, 0.55, 120], [NAT + 'rock_single_b', -2.6, 1.5, 1.0, 10], [NAT + 'rock_single_d', 1.2, -2.6, 0.8, 70]],
  grav: [[HAL + 'grave_a', 0, 0, 1.1, 0], [HAL + 'gravestone', -2.2, -1.2, 1.1, 20], [HAL + 'shrine_candles', 2.0, -1.6, 1.3, 200], [HAL + 'skull', 1.2, 2.0, 0.8, 0], [HAL + 'bone_a', -1.3, 2.2, 0.8, 60]],
  lejr: [[PROPS + 'wheelbarrow', -1.6, 0.4, 1.2, 30], [PROPS + 'crate_open', 1.8, -0.8, 1.2, 0], [PROPS + 'barrel', 1.4, 1.9, 1.3, 0], [PROPS + 'sack', -0.4, -2.2, 1.4, 50], [PROPS + 'ladder', -2.4, -1.6, 1.1, 80]],
};
const BLOKERER = { navnesten: true, mur: true };

export function placérMinder(k, tilf, { optag, fri, steder, lejre, base, fjende }) {
  const minder = [];
  const ledig = (f) => fri(f) && hexAfstand(f, base) > 7 && hexAfstand(f, fjende) > 8
    && steder.every((s) => hexAfstand(s, f) > 2) && lejre.every((l) => hexAfstand(l, f) > 3) && minder.every((m) => hexAfstand(m, f) > 5);
  const kandidater = [...k.felter.values()].sort(() => tilf() - 0.5);
  const læg = (slags, navn, tekst, ekstra = {}, region = null) => {
    // Er der trangt (fx på Marskens kort med mange søer), må mindesmærkerne ligge tættere
    const løs = (f) => fri(f) && hexAfstand(f, base) > 6 && hexAfstand(f, fjende) > 7 && lejre.every((l) => hexAfstand(l, f) > 2) && minder.every((m) => hexAfstand(m, f) > 3);
    const f = kandidater.find((f) => ledig(f) && (!region || region.includes(f.region))) ?? kandidater.find(ledig) ?? kandidater.find(løs);
    if (!f) return;
    const pynt = PYNT[slags].map(([model, dx, dz, skala, rot]) => ({ model, dx, dz, skala, rot: rot + tilf() * 40, skygge: true }));
    optag(f, null, !!BLOKERER[slags]);
    f.pynt.push(...pynt);
    minder.push({ id: `minde-${f.q}-${f.r}`, slags, navn, tekst, q: f.q, r: f.r, ...hexTilVerden(f.q, f.r), ...ekstra });
  };
  NAVNESTEN.forEach((tekst, i) => læg('navnesten', 'Name-stone', tekst, { stump: i }));
  const træk = (liste) => liste[Math.floor(tilf() * liste.length)];
  læg('mur', ...træk(MINDER.mur), {}, ['askemarken', 'bjergene']);
  læg('grav', ...træk(MINDER.grav), {}, ['gravlandet', 'skoven', 'sumpen']);
  const lejrNavne = [...MINDER.lejr].sort(() => tilf() - 0.5);
  læg('lejr', ...lejrNavne[0]);
  læg('lejr', ...lejrNavne[1]);
  return minder;
}
