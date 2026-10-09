// Natur og småting på kortets felter, valgt efter region (GDD 4.4).
import { HEX_BREDDE } from './hexgrid.js';

const RI = HEX_BREDDE / 2;           // afstand fra hex-centrum til kant
const NAT = 'kaykit-hexagon/decoration/nature/';
const HAL = 'kaykit-halloween/';
const vælg = (tilf, liste) => liste[Math.floor(tilf() * liste.length)];
const spred = (tilf, r = 0.55) => ({ dx: (tilf() - 0.5) * 2 * RI * r, dz: (tilf() - 0.5) * 2 * RI * r });

// Blokerede felter: skov og bjerge
export function blokPynt(f, tilf) {
  const rot = Math.floor(tilf() * 6) * 60;
  if (f.blok === 'bjerg') {
    const liste = f.region === 'bjergene'
      ? ['mountain_a_grass_trees', 'mountain_b_grass_trees', 'mountain_c_grass_trees', 'mountain_a_grass', 'mountain_b_grass']
      : f.region === 'gravlandet' ? ['mountain_a', 'mountain_b', 'mountain_c', 'hills_c']
        : ['hills_a_trees', 'hills_b_trees', 'hills_c_trees', 'mountain_c_grass'];
    f.pynt.push({ model: NAT + vælg(tilf, liste), rot, instans: true, skygge: true, skala: 1.05 });
    return;
  }
  // Skov
  if (f.region === 'gravlandet') {
    for (let i = 0; i < 3; i++) {
      const [navn, sk] = vælg(tilf, [['tree_dead_large', 1.05], ['tree_dead_medium', 1.2], ['tree_dead_small', 1.35]]);
      f.pynt.push({ model: HAL + navn, ...spred(tilf, 0.6), rot: tilf() * 360, skala: sk, instans: true, skygge: true });
    }
    return;
  }
  const liste = {
    skoven: ['trees_a_large', 'trees_b_large', 'trees_a_large', 'trees_b_medium'],
    sumpen: ['trees_b_small', 'trees_b_medium', 'trees_a_small'],
  }[f.region] ?? ['trees_a_medium', 'trees_b_medium', 'trees_a_small'];
  f.pynt.push({ model: NAT + vælg(tilf, liste), rot, instans: true, skygge: true, skala: 1.4 });
}

// Frie græsfelter: lidt natur man kan gå forbi
export function friPynt(f, tilf) {
  const x = tilf();
  const p = (model, skala = 1, skygge = true) => f.pynt.push({ model, ...spred(tilf), rot: tilf() * 360, skala, instans: true, skygge });
  switch (f.region) {
    case 'skoven':
      if (x < 0.45) p(NAT + vælg(tilf, ['tree_single_a', 'tree_single_b']), 1.1);
      if (x > 0.3 && x < 0.6) p(NAT + vælg(tilf, ['tree_single_a', 'tree_single_b']), 0.95);
      else if (x > 0.85) p(NAT + 'rock_single_' + vælg(tilf, ['a', 'b', 'c']), 0.7, false);
      break;
    case 'gravlandet':
      if (x < 0.22) p(HAL + vælg(tilf, ['gravestone', 'gravemarker_a', 'gravemarker_b']), 0.7);
      else if (x < 0.36) p(HAL + vælg(tilf, ['tree_dead_small', 'tree_dead_medium']), 1.1);
      else if (x < 0.46) p(HAL + vælg(tilf, ['bone_a', 'bone_b', 'skull']), 0.6, false);
      break;
    case 'bjergene':
      if (x < 0.25) p(NAT + 'rock_single_' + vælg(tilf, ['a', 'b', 'c', 'd', 'e']), 0.9, false);
      else if (x < 0.36) p(NAT + vælg(tilf, ['hill_single_a', 'hill_single_b', 'hill_single_c']), 0.9);
      else if (x < 0.44) p(NAT + 'tree_single_a', 1.0);
      break;
    case 'sumpen':
      if (x < 0.2) p(NAT + vælg(tilf, ['trees_b_small', 'tree_single_b']), 0.8);
      else if (x < 0.32) p(HAL + 'tree_dead_small', 1.0);
      else if (x < 0.42) p(NAT + 'rock_single_' + vælg(tilf, ['a', 'b']), 0.7, false);
      break;
    default:
      if (x < 0.2) p(NAT + vælg(tilf, ['tree_single_a', 'tree_single_b']), 1.05);
      else if (x < 0.4) p(NAT + 'rock_single_' + vælg(tilf, ['a', 'b', 'c', 'd', 'e']), 0.75, false);
      if (tilf() < 0.25) p(NAT + 'rock_single_' + vælg(tilf, ['a', 'c', 'e']), 0.5, false);
  }
}

// Åkander og vandplanter på søer i sumpen
export function vandPynt(f, tilf) {
  if (f.region !== 'sumpen' || tilf() > 0.45) return;
  f.pynt.push({ model: NAT + vælg(tilf, ['waterlily_a', 'waterlily_b', 'waterplant_a', 'waterplant_b']), ...spred(tilf), rot: tilf() * 360, skala: 1.2, instans: true, y: -0.2 });
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
  if (boss) f.pynt.push({ model: 'kaykit-dungeon/chest_gold', dx: RI * 0.35, dz: -RI * 0.35, rot: -25, skala: 0.7, skygge: true });
}
