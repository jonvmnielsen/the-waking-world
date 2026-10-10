// Natur og småting på kortets felter, valgt efter region (GDD 4.4).
// Hvert træ og hver sten er sin egen ressource (GDD 5.1): træer giver træ, sten giver sten.
// Skov-felter er tætte klynger af enkelte træer; stenbrud er store grå klippeblokke på en høj.
import { HEX_BREDDE } from './hexgrid.js';

const RI = HEX_BREDDE / 2;           // afstand fra hex-centrum til kant
const NAT = 'kaykit-hexagon/decoration/nature/';
const HAL = 'kaykit-halloween/';
const vælg = (tilf, liste) => liste[Math.floor(tilf() * liste.length)];
const spred = (tilf, r = 0.55) => ({ dx: (tilf() - 0.5) * 2 * RI * r, dz: (tilf() - 0.5) * 2 * RI * r });
const mellem = (tilf, a, b) => a + tilf() * (b - a);

// Hvor meget hver slags giver, og hvor stor den er (radius til at gå hen til den, højde til tryk)
export const RESSOURCE = {
  træ: { mængde: 40, r: 1.4, h: 6 },
  træFrit: { mængde: 30, r: 1.3, h: 5 },
  blok: { mængde: 150, r: 3, h: 4 },
  sten: { mængde: 25, r: 1.3, h: 1.5 },
};

// Træer pr. region: [model, skala]
function træModel(tilf, region) {
  if (region === 'gravlandet') return vælg(tilf, [[HAL + 'tree_dead_large', 1.1], [HAL + 'tree_dead_medium', 1.3], [HAL + 'tree_dead_small', 1.5]]);
  if (region === 'sumpen' && tilf() < 0.35) return [HAL + 'tree_dead_small', 1.3];
  const str = { skoven: [1.25, 1.6], sumpen: [1.0, 1.3] }[region] ?? [1.1, 1.4];
  return [NAT + vælg(tilf, ['tree_single_a', 'tree_single_b']), mellem(tilf, ...str)];
}

// Blokerede felter: skov og stenbrud
export function blokPynt(f, tilf) {
  if (f.blok === 'bjerg') {
    // 3-4 store klippeblokke tæt sammen + et par små sten
    const n = 3 + Math.floor(tilf() * 2);
    for (let i = 0; i < n; i++) {
      const v = (i / n) * Math.PI * 2 + tilf() * 0.8, r = RI * mellem(tilf, 0.15, 0.42);
      f.pynt.push({ model: NAT + 'rock_single_' + vælg(tilf, ['c', 'e', 'c', 'b', 'd']), dx: Math.cos(v) * r, dz: Math.sin(v) * r,
        rot: tilf() * 360, skala: mellem(tilf, 2.4, 3.4), y: -0.25, instans: true, skygge: true, ressource: 'blok' });
    }
    for (let i = 0; i < 2; i++) {
      f.pynt.push({ model: NAT + 'rock_single_' + vælg(tilf, ['a', 'b', 'd']), ...spred(tilf, 0.7), rot: tilf() * 360, skala: 1.3, instans: true, skygge: true, ressource: 'sten' });
    }
    return;
  }
  // Skov: 5-6 enkelte træer spredt over feltet
  const n = 5 + Math.floor(tilf() * 2);
  for (let i = 0; i < n; i++) {
    const v = (i / n) * Math.PI * 2 + tilf() * 0.6, r = i === 0 ? RI * 0.1 : RI * mellem(tilf, 0.45, 0.7);
    const [model, skala] = træModel(tilf, f.region);
    f.pynt.push({ model, dx: Math.cos(v) * r, dz: Math.sin(v) * r, rot: tilf() * 360, skala, instans: true, skygge: true, ressource: 'træ' });
  }
}

// Frie græsfelter: lidt natur man kan gå forbi — træer og sten kan stadig høstes
export function friPynt(f, tilf) {
  const x = tilf();
  const p = (model, skala = 1, ressource = null, skygge = true) => f.pynt.push({ model, ...spred(tilf), rot: tilf() * 360, skala, instans: true, skygge, ressource });
  const træ = (sk = 1) => { const [m, s] = træModel(tilf, f.region); p(m, s * 0.75 * sk, 'træFrit'); };
  const sten = (sk = 1) => p(NAT + 'rock_single_' + vælg(tilf, ['b', 'c', 'e']), 1.25 * sk, 'sten');
  switch (f.region) {
    case 'skoven':
      if (x < 0.45) træ();
      if (x > 0.3 && x < 0.6) træ(0.9);
      else if (x > 0.85) sten();
      break;
    case 'gravlandet':
      if (x < 0.22) p(HAL + vælg(tilf, ['gravestone', 'gravemarker_a', 'gravemarker_b']), 0.7);
      else if (x < 0.36) træ(0.9);
      else if (x < 0.46) p(HAL + vælg(tilf, ['bone_a', 'bone_b', 'skull']), 0.6, null, false);
      else if (x < 0.52) sten();
      break;
    case 'bjergene':
      if (x < 0.32) sten(1.15);
      else if (x < 0.4) træ();
      break;
    case 'sumpen':
      if (x < 0.22) træ(0.9);
      else if (x < 0.32) sten(0.9);
      break;
    default:
      if (x < 0.2) træ();
      else if (x < 0.36) sten();
  }
}

// Åkander og vandplanter på søer i sumpen
export function vandPynt(f, tilf) {
  if (f.region !== 'sumpen' || tilf() > 0.45) return;
  f.pynt.push({ model: NAT + vælg(tilf, ['waterlily_a', 'waterlily_b', 'waterplant_a', 'waterplant_b']), ...spred(tilf), rot: tilf() * 360, skala: 1.2, instans: true, y: -0.75, absolut: true });
}

// Lejrens udseende afhænger af familien
export function lejrPynt(f, familie, tilf, boss) {
  const ring = (i, n, r) => { const v = (i / n) * Math.PI * 2 + tilf() * 0.5; return { dx: Math.cos(v) * r, dz: Math.sin(v) * r, v }; };
  if (familie === 'skeletter') {
    const grave = [['grave_a', 0.6], ['gravestone', 0.75], ['gravemarker_a', 0.9], ['grave_b', 0.6], ['gravemarker_b', 0.9], ['ribcage', 0.8], ['skull', 0.6]];
    for (let i = 0; i < 6; i++) {
      const { dx, dz, v } = ring(i, 6, RI * 0.85);
      const [navn, sk] = vælg(tilf, grave);
      f.pynt.push({ model: HAL + navn, dx, dz, rot: (-v * 180) / Math.PI + 90, skala: sk, instans: true, skygge: true });
    }
    f.pynt.push({ model: HAL + 'lantern_standing', dx: RI * 0.6, dz: -RI * 0.55, rot: 0, skala: 1.4, skygge: true });
    if (boss) f.pynt.push({ model: HAL + 'post_skull', dx: -RI * 0.7, dz: -RI * 0.45, rot: 0, skala: 0.9, skygge: true });
  } else {
    const PROP = 'kaykit-hexagon/decoration/props/';
    const ting = [['crate_a_big', 1.3], ['barrel', 1.4], ['sack', 1.4], ['crate_long_a', 1.2], ['resource_lumber', 1.2]];
    f.pynt.push({ model: PROP + 'tent', ...ring(0, 1, RI * 0.7), rot: tilf() * 360, skala: 2.0, skygge: true });
    for (let i = 1; i < 5; i++) {
      const { dx, dz } = ring(i, 5, RI * 0.8);
      const [navn, sk] = vælg(tilf, ting);
      f.pynt.push({ model: PROP + navn, dx, dz, rot: tilf() * 360, skala: sk, instans: true, skygge: true });
    }
    f.pynt.push({ model: PROP + 'weaponrack', dx: -RI * 0.3, dz: RI * 0.75, rot: 20, skala: 2.2, skygge: true });
  }
}
