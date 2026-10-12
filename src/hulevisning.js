// Hulernes 3D (M11): en mørk bund, gulvfliser og jord fra KayKits dungeon-pakke, klippevægge langs kanten,
// fakler med glød, tønder, søjler og knogler i rummene, en trappe op ved udgangen — og på kortet en
// huleåbning af store klipper med fakler og hulens navn.
import * as THREE from 'three';
import { instanser, kopi } from './assets.js';
import { hexTilVerden } from './hexgrid.js';
import { VERDEN } from './config.js';
import { glød } from './aand.js';
import { rng } from './stoej.js';

const D = 'kaykit-dungeon/', NAT = 'kaykit-hexagon/decoration/nature/', HAL = 'kaykit-halloween/';
const S = VERDEN.hexSkala, TRIN = 8;   // gulvfliserne er 4×4 og skaleres ×2
const GULV = [D + 'floor_dirt_large_gltf', D + 'floor_dirt_large_rocky_gltf', D + 'floor_dirt_large_gltf', D + 'floor_tile_large_rocks_gltf'];
const RUMGULV = [D + 'floor_tile_large_gltf', D + 'floor_tile_large_rocks_gltf'];
const TING = [[D + 'barrel_large_gltf', 1.3], [D + 'crates_stacked_gltf', 1.3], [D + 'pillar_decorated_gltf', 1.6], [D + 'column_gltf', 2], [HAL + 'skull', 1.2], [HAL + 'bone_a', 1.2], [D + 'rubble_half_gltf', 1.2], [D + 'candle_lit_gltf', 2]];
export const HULE_MODELLER = [...GULV, ...RUMGULV, ...TING.map((t) => t[0]), D + 'torch_lit_gltf', D + 'stairs_gltf', D + 'rubble_large_gltf', NAT + 'rock_single_c', NAT + 'rock_single_e'];

export function lavHulevisning(scene, kort, huler) {
  const fakler = [];
  for (const h of huler) {
    const t = rng(97 + h.nr);
    const i = (sti) => (t() * sti.length) | 0;
    const ind = (x, z) => kort.felt(x, z)?.type === 'hule';
    const grupper = new Map();
    const læg = (sti, x, z, skala, rot = 0, y = 0) => {
      if (!grupper.has(sti)) grupper.set(sti, []);
      grupper.get(sti).push(new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rot), new THREE.Vector3(skala, skala, skala)));
    };
    // Gulv og vægge på et firkantet gitter over hulens felter
    const xs = h.felter.map((f) => hexTilVerden(f.q, f.r).x), zs = h.felter.map((f) => hexTilVerden(f.q, f.r).z);
    const x0 = Math.min(...xs) - 16, x1 = Math.max(...xs) + 16, z0 = Math.min(...zs) - 16, z1 = Math.max(...zs) + 16;
    const rumCentre = h.rum.map((m) => hexTilVerden(m.q, m.r));
    for (let x = x0; x <= x1; x += TRIN) for (let z = z0; z <= z1; z += TRIN) {
      const rot = ((t() * 4) | 0) * Math.PI / 2;
      if (ind(x, z)) {
        const iRum = rumCentre.some((c) => Math.hypot(c.x - x, c.z - z) < 9);
        const liste = iRum && t() < 0.5 ? RUMGULV : GULV;
        læg(liste[i(liste)], x, z, 2, rot);
      } else if (ind(x + TRIN, z) || ind(x - TRIN, z) || ind(x, z + TRIN) || ind(x, z - TRIN) || ind(x + TRIN, z + TRIN) || ind(x - TRIN, z - TRIN)) {
        // Klippevæg: store klipper og nedfaldne sten
        læg(NAT + (t() < 0.5 ? 'rock_single_c' : 'rock_single_e'), x + (t() - 0.5) * 3, z + (t() - 0.5) * 3, S * (3 + t() * 1.6), t() * 6, -0.4);
        if (t() < 0.25) læg(D + 'rubble_large_gltf', x, z, 1.4, t() * 6);
      }
    }
    // Ting i rummene og fakler langs kanten
    h.rum.forEach((m, j) => {
      const c = rumCentre[j], r = (m.ρ + 0.6) * 10;
      for (let k = 0; k < 2 + m.ρ; k++) {
        const v = t() * Math.PI * 2, [sti, sk] = TING[i(TING)];
        const x = c.x + Math.cos(v) * r * 0.75, z = c.z + Math.sin(v) * r * 0.75;
        if (ind(x, z)) læg(sti, x, z, sk, t() * 6);
      }
      for (let k = 0; k < 3; k++) {
        const v = (k / 3) * Math.PI * 2 + t(), x = c.x + Math.cos(v) * r * 0.85, z = c.z + Math.sin(v) * r * 0.85;
        if (!ind(x, z)) continue;
        læg(D + 'torch_lit_gltf', x, z, 2.4);
        const g = glød(0xff9a3a, 7, 0.55); g.position.set(x, 3.2, z); scene.add(g); fakler.push(g);
      }
    });
    for (const [sti, m] of grupper) scene.add(instanser(sti, m, { skygge: false }));
    // Mørk bund under og omkring hulen
    const bund = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0 + 400, z1 - z0 + 400).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x0c0907, roughness: 1 }));
    bund.position.set((x0 + x1) / 2, -0.35, (z0 + z1) / 2);
    scene.add(bund);
    // Udgangen: en trappe op mod lyset
    const trappe = kopi(D + 'stairs_gltf', { skygge: true });
    trappe.position.set(h.udgang.x, 0, h.udgang.z - 2); trappe.scale.setScalar(1.6); trappe.rotation.y = Math.PI;
    scene.add(trappe);
    const lys = glød(0xcfe6ff, 10, 0.5); lys.position.set(h.udgang.x, 5, h.udgang.z - 4); lys.scale.set(8, 14, 1); scene.add(lys);
    // Huleåbningen på kortet: en mund af store klipper, mørke indeni, med to fakler
    const a = h.indgang;
    for (const [v, sk, y] of [[-0.9, 3.6, -0.3], [0.9, 3.6, -0.3], [0, 4.2, 1.6], [Math.PI, 3.2, -0.3]]) {
      const o = kopi(NAT + 'rock_single_c', { skygge: true });
      o.position.set(a.x + Math.sin(v) * 4.2, y, a.z - Math.cos(v) * 2.2 - 1.5); o.scale.setScalar(S * sk); o.rotation.y = v * 2;
      scene.add(o);
    }
    const mund = new THREE.Mesh(new THREE.CircleGeometry(3.2, 12), new THREE.MeshBasicMaterial({ color: 0x050403 }));
    mund.rotation.x = -Math.PI / 2; mund.scale.set(1, 0.7, 1); mund.position.set(a.x, 0.06, a.z + 1.4);
    scene.add(mund);
    for (const dx of [-3.6, 3.6]) {
      const f = kopi(D + 'torch_lit_gltf', { skygge: false }); f.position.set(a.x + dx, 0, a.z + 2.6); f.scale.setScalar(2.4); scene.add(f);
      const g = glød(0xff9a3a, 6, 0.55); g.position.set(a.x + dx, 3, a.z + 2.6); scene.add(g); fakler.push(g);
    }
  }
  let tid = 0;
  return { opdater(dt) { tid += dt; fakler.forEach((g, k) => { g.material.opacity = 0.45 + Math.sin(tid * 9 + k * 2.3) * 0.08 + Math.sin(tid * 23 + k) * 0.05; }); } };
}
