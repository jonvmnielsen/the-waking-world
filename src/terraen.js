// Ét sammenhængende terræn over hele kortet (ingen synlige hexagoner).
// Hex-gitteret bruges stadig i logikken; her blødes felternes egenskaber ud til et lav-poly landskab:
// bløde kyster ned i vandet, klippehøje under stenbrud, regionsfarver der glider over i hinanden.
import * as THREE from 'three';
import { hexTilVerden, verdenTilHex, HEX_BREDDE } from './hexgrid.js';
import { REGIONER } from './kortgen.js';
import { støj } from './stoej.js';

const TRIN = 2.5;                 // afstand mellem terrænets punkter
const R = HEX_BREDDE;             // hvor langt et felt "smitter" af på naboerne
export const VAND_Y = -0.55;

const SRGB = THREE.SRGBColorSpace;
const FARVE = {
  græs: new THREE.Color().setRGB(0.70, 0.75, 0.33, SRGB),
  sand: new THREE.Color().setRGB(0.86, 0.77, 0.55, SRGB),
  bund: new THREE.Color().setRGB(0.55, 0.49, 0.36, SRGB),
  klippe: new THREE.Color().setRGB(0.56, 0.53, 0.47, SRGB),
  guld: new THREE.Color().setRGB(0.80, 0.62, 0.30, SRGB),
  mørk: new THREE.Color().setRGB(0.45, 0.62, 0.26, SRGB),
  øde: new THREE.Color().setRGB(0.33, 0.30, 0.36, SRGB),
  lys: new THREE.Color().setRGB(0.82, 0.80, 0.42, SRGB),
};
const glat = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// Felternes egenskaber blødt fordelt omkring et punkt
function prøve(kort, x, z) {
  const c = verdenTilHex(x, z);
  let vægt = 0, land = 0, klippe = 0, skov = 0;
  const tone = [0, 0, 0];
  for (let dq = -2; dq <= 2; dq++) {
    for (let dr = Math.max(-2, -dq - 2); dr <= Math.min(2, -dq + 2); dr++) {
      const q = c.q + dq, r = c.r + dr;
      const p = hexTilVerden(q, r);
      const d = Math.hypot(p.x - x, p.z - z);
      if (d >= R) continue;
      const w = (1 - d / R) ** 2;
      const f = kort.hent(q, r);
      vægt += w;
      if (!f || f.type === 'vand') continue;
      land += w;
      if (f.blok === 'bjerg') klippe += w;
      if (f.blok === 'skov') skov += w;
      const t = REGIONER[f.region].farve;
      tone[0] += t[0] * w; tone[1] += t[1] * w; tone[2] += t[2] * w;
    }
  }
  const L = vægt ? land / vægt : 0;
  return { L, K: vægt ? klippe / vægt : 0, F: vægt ? skov / vægt : 0, tone: land ? tone.map((v) => v / land) : [1, 1, 1] };
}

// Terrænets højde i et punkt (bruges også til at sætte træer og sten på jorden)
function højdeOgPrøve(kort, x, z, seed) {
  const pr = prøve(kort, x, z);
  const L = pr.L + (støj(x, z, seed + 20, 5) - 0.5) * 0.18;
  const land = glat(0.12, 0.5, L);
  let y = -2.4 * (1 - land);
  y += 2.6 * glat(0.35, 0.9, pr.K) * (0.75 + 0.5 * støj(x, z, seed + 23, 6));
  y += (støj(x, z, seed + 24, 4) - 0.5) * 0.22 * land;
  return { y, ...pr, L };
}
export const terrænHøjde = (kort, x, z, seed = 3) => højdeOgPrøve(kort, x, z, seed).y;

export function lavTerrænMesh(kort, grænser, miner = [], ødeland = null, seed = 3) {
  const b = Math.ceil((grænser.maxX - grænser.minX) / TRIN), h = Math.ceil((grænser.maxZ - grænser.minZ) / TRIN);
  const geo = new THREE.PlaneGeometry(b * TRIN, h * TRIN, b, h).rotateX(-Math.PI / 2);
  geo.translate((grænser.minX + grænser.maxX) / 2, 0, (grænser.minZ + grænser.maxZ) / 2);
  const pos = geo.attributes.position;
  const farver = new Float32Array(pos.count * 3);
  const c = new THREE.Color(), t = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    // Lidt forskydning af punkterne giver et håndlavet lav-poly udtryk
    let x = pos.getX(i), z = pos.getZ(i);
    x += (støj(x, z, seed + 21, 3) - 0.5) * TRIN * 0.6;
    z += (støj(z, x, seed + 22, 3) - 0.5) * TRIN * 0.6;
    const { y, L, K, F, tone } = højdeOgPrøve(kort, x, z, seed);
    pos.setXYZ(i, x, y, z);

    // Farve: græs i regionens tone, sand ved kysten, mørk skovbund, grå jord under klipper, gylden jord ved miner
    c.copy(FARVE.græs).multiply(t.setRGB(tone[0], tone[1], tone[2]));
    const plet = støj(x, z, seed + 27, 14);
    c.lerp(plet > 0.5 ? FARVE.mørk : FARVE.lys, Math.abs(plet - 0.5) * 0.9);
    c.lerp(FARVE.bund, glat(0.3, 0.9, F) * 0.35);
    c.lerp(FARVE.klippe, glat(0.3, 0.8, K));
    for (const m of miner) {
      const d = Math.hypot(m.x - x, m.z - z);
      if (d < 10) c.lerp(FARVE.guld, (1 - d / 10) ** 1.2 * 0.75);
    }
    // The Memorys ødelagte land breder sig om deres base (GDD 5.5)
    if (ødeland) {
      const d = Math.hypot(ødeland.x - x, ødeland.z - z) + (støj(x, z, seed + 28, 5) - 0.5) * 14;
      c.lerp(FARVE.øde, (1 - glat(22, 44, d)) * 0.8);
    }
    c.lerp(FARVE.sand, (1 - glat(0.6, 0.88, L)) * 0.9);
    const lys = 0.92 + støj(x, z, seed + 25, 9) * 0.14 + (støj(x * 3, z * 3, seed + 26, 2) - 0.5) * 0.05;
    c.multiplyScalar(lys);
    farver[i * 3] = c.r; farver[i * 3 + 1] = c.g; farver[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(farver, 3));
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95, metalness: 0 }));
  mesh.receiveShadow = true;

  // Vandoverflade over hele verden
  const vand = new THREE.Mesh(new THREE.CircleGeometry(800, 64).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0x3f9ac9, roughness: 0.3, metalness: 0, transparent: true, opacity: 0.86 }));
  vand.position.y = VAND_Y;
  vand.receiveShadow = true;

  // Havbund uden for kortet
  const bund = new THREE.Mesh(new THREE.CircleGeometry(800, 32).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0x2f6f8f, roughness: 1 }));
  bund.position.y = -2.5;
  return [bund, mesh, vand];
}
