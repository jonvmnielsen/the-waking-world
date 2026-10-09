// Kortet "Askemarken": en ø med The Tides lejr mod sydvest og skeletlejre rundt om.
// Bygger et HexKort med felttyper, pynt og gåbarhed. Selve 3D-modellerne laves i world.js.
import { HexKort, RETNINGER, hexAfstand, hexTilVerden } from './hexgrid.js';
import { VERDEN } from './config.js';

// Seedet tilfældighed så kortet er det samme hver gang
function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Kystfliser: hvilke kanter er vand ved rotation 0 (målt i probe)
const F = VERDEN.hexSkala / 3;   // pynt-afstande er skrevet til skala 3

const KYST = { 1: ['a', 1], 2: ['b', 1], 3: ['c', 0], 4: ['d', 5] };

// Bygninger i spillerens lejr (q, r, model, rotation i 60°-trin)
const LEJR = [
  [-3, 4, 'building_castle_green', 0],
  [-1, 4, 'building_barracks_green', 5],
  [-4, 6, 'building_home_a_green', 1],
  [-2, 6, 'building_home_b_green', 0],
  [-5, 5, 'building_windmill_green', 1],
  [-4, 3, 'building_blacksmith_green', 2],
  [0, 5, 'building_tower_a_green', 0],
  [-2, 2, 'building_tower_b_green', 3],
  [-3, 7, 'building_lumbermill_green', 0],
];

// Creep-lejre: centrum (q,r), hvilke creeps og pynt
export const LEJRE = [
  { id: 'gravhøj', q: 2, r: 1, creeps: ['minion', 'minion'] },
  { id: 'vestmarken', q: -4, r: -1, creeps: ['minion', 'rogue'] },
  { id: 'østkløften', q: 5, r: -2, creeps: ['rogue', 'mage'] },
  { id: 'krypten', q: 1, r: -5, creeps: ['warrior', 'mage', 'minion'], kiste: true },
];

const SKOVE = [[-6, 2], [-6, 3], [-5, 1], [4, 2], [5, 1], [3, 4], [4, 4], [-1, -2], [6, -4], [-3, -4], [-2, -5]];
const BJERGE = [[-1, -6], [0, -6], [3, -6], [4, -6], [-4, -3], [6, -5], [7, -3]];

export function lavKort() {
  const k = new HexKort();
  const tilf = rng(7);
  const R = VERDEN.øRadius;

  // 1) Land eller hav ud fra afstand + lidt støj langs kysten
  for (let q = -VERDEN.havRadius; q <= VERDEN.havRadius; q++) {
    for (let r = -VERDEN.havRadius; r <= VERDEN.havRadius; r++) {
      const d = hexAfstand({ q, r }, { q: 0, r: 0 });
      if (d > VERDEN.havRadius) continue;
      const vinkel = Math.atan2(r, q + r / 2);
      const kant = R + Math.sin(vinkel * 3 + 1) * 0.8 + Math.sin(vinkel * 5) * 0.5;
      k.sæt(q, r, { type: d <= kant ? 'græs' : 'vand', gåbar: d <= kant });
    }
  }

  // 2) Kystfliser: vandkanter skal være én sammenhængende række på 1-4 kanter
  for (let runde = 0; runde < 6; runde++) {
    let ændret = false;
    for (const f of k.felter.values()) {
      if (f.type === 'vand') continue;
      const vand = RETNINGER.map(([dq, dr]) => {
        const n = k.hent(f.q + dq, f.r + dr);
        return !n || n.type === 'vand';
      });
      const antal = vand.filter(Boolean).length;
      if (antal === 0) { f.type = 'græs'; continue; }
      const start = vand.findIndex((v, i) => v && !vand[(i + 5) % 6]);
      const sammenhængende = start >= 0 && vand.every((v, i) => v === (((i - start + 6) % 6) < antal));
      if (!sammenhængende || antal > 4) { f.type = 'vand'; f.gåbar = false; ændret = true; continue; }
      const [variant, base] = KYST[antal];
      f.type = 'kyst'; f.variant = variant; f.rot = (start - base + 6) % 6;
    }
    if (!ændret) break;
  }

  const græs = (q, r) => { const f = k.hent(q, r); return f && f.type === 'græs' ? f : null; };
  const blokér = (f, pynt) => { f.gåbar = false; f.pynt.push(pynt); f.optaget = true; };

  // 3) Lejren, skove og bjerge
  for (const [q, r, model, rot] of LEJR) {
    const f = græs(q, r); if (f) blokér(f, { model: `kaykit-hexagon/buildings/green/${model}`, rot: rot * 60, skygge: true });
  }
  for (const [q, r] of SKOVE) {
    const f = græs(q, r); if (!f) continue;
    const valg = ['trees_a_large', 'trees_b_large', 'trees_a_medium', 'trees_b_medium'][Math.floor(tilf() * 4)];
    blokér(f, { model: `kaykit-hexagon/decoration/nature/${valg}`, rot: Math.floor(tilf() * 6) * 60, instans: true, skygge: true });
  }
  for (const [q, r] of BJERGE) {
    const f = k.hent(q, r); if (!f || f.type !== 'græs') continue;
    const valg = ['mountain_a_grass_trees', 'mountain_b_grass_trees', 'mountain_c_grass', 'hills_a_trees'][Math.floor(tilf() * 4)];
    blokér(f, { model: `kaykit-hexagon/decoration/nature/${valg}`, rot: Math.floor(tilf() * 6) * 60, instans: true, skygge: true });
  }

  // 4) Creep-lejre: gravpladser med pynt i kanten af feltet
  for (const lejr of LEJRE) {
    const f = græs(lejr.q, lejr.r); if (!f) continue;
    f.optaget = true;
    // Halloween-pakken er i figurstørrelse — skalaer så gravene ikke rager op over skeletterne
    const gravpynt = [['grave_a', 0.6], ['gravestone', 0.75], ['gravemarker_a', 0.9], ['grave_b', 0.6], ['gravemarker_b', 0.9], ['bone_a', 0.9], ['skull', 0.6], ['ribcage', 0.8]];
    for (let i = 0; i < 6; i++) {
      const v = (i / 6) * Math.PI * 2 + tilf() * 0.6;
      const [navn, sk] = gravpynt[Math.floor(tilf() * gravpynt.length)];
      f.pynt.push({ model: `kaykit-halloween/${navn}`, dx: Math.cos(v) * 3.9 * F, dz: Math.sin(v) * 3.9 * F, rot: (-v * 180) / Math.PI + 90, skala: sk, instans: true, skygge: true });
    }
    f.pynt.push({ model: 'kaykit-halloween/lantern_standing', dx: 2.6 * F, dz: -2.4 * F, rot: 0, skala: 1.3, skygge: true });
    for (const n of k.naboer(f)) {
      if (n.type !== 'græs' || n.optaget || tilf() > 0.45) continue;
      const [navn, sk] = [['tree_dead_large', 0.75], ['tree_dead_medium', 0.85], ['tree_dead_small', 1]][Math.floor(tilf() * 3)];
      n.pynt.push({ model: `kaykit-halloween/${navn}`, dx: (tilf() - 0.5) * 3 * F, dz: (tilf() - 0.5) * 3 * F, rot: tilf() * 360, skala: sk, instans: true, skygge: true });
    }
    if (lejr.kiste) {
      // Krypten står på sit eget (blokerede) felt bag lejren
      const bag = k.hent(lejr.q, lejr.r - 1);
      if (bag && bag.type === 'græs') blokér(bag, { model: 'kaykit-halloween/crypt', rot: 180, skala: 0.55, skygge: true });
    }
    if (lejr.kiste) f.pynt.push({ model: 'kaykit-dungeon/chest_gold', dx: 1.6 * F, dz: -1.8 * F, rot: -20, skala: 0.6, skygge: true });
  }

  // 5) Spredt natur på frie græsfelter (gåbar pynt)
  for (const f of k.felter.values()) {
    if (f.type !== 'græs' || f.optaget) continue;
    const x = tilf();
    if (x < 0.18) f.pynt.push({ model: `kaykit-hexagon/decoration/nature/tree_single_${tilf() < 0.5 ? 'a' : 'b'}`, dx: (tilf() - 0.5) * 3.5 * F, dz: (tilf() - 0.5) * 3.5 * F, rot: tilf() * 360, instans: true, skygge: true });
    else if (x < 0.3) f.pynt.push({ model: `kaykit-hexagon/decoration/nature/rock_single_${'abcde'[Math.floor(tilf() * 5)]}`, dx: (tilf() - 0.5) * 3.5 * F, dz: (tilf() - 0.5) * 3.5 * F, rot: tilf() * 360, instans: true });
  }

  const flag = græs(-1, 3); if (flag) flag.pynt.push({ model: 'kaykit-hexagon/decoration/props/flag_green', dx: 2.2 * F, dz: 1.5 * F, rot: 0, skala: 1.5 });
  const telt = græs(-1, 6); if (telt) telt.pynt.push({ model: 'kaykit-hexagon/decoration/props/tent', dx: 0, dz: 0, rot: 30, skala: 2.2, skygge: true }, { model: 'kaykit-hexagon/decoration/props/weaponrack', dx: 2.2 * F, dz: -1 * F, rot: 60, skala: 3.5, skygge: true });

  const spawn = hexTilVerden(-1, 3);
  return { kort: k, heltSpawn: { x: spawn.x, z: spawn.z - 0.6 } };
}
