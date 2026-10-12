// Lavasøer (M10, Jon: "hvad er det orange på jorden?"): i det vulkanske biom er havet mørkt askevand,
// og kun søerne inde i landet er glødende lava — en mørk skorpe med revner, der lyser og flytter sig.
// Søerne er de vandfelter, der ikke hænger sammen med havet ved kortets kant.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { hexTilVerden, HEX_BREDDE } from './hexgrid.js';
import { VAND_Y, vandShader } from './terraen.js';

export function lavLavasøer(scene, kort, grund, tid) {
  // Hav: vandfelter der kan nås fra kanten
  const vand = [...kort.felter.values()].filter((f) => f.type === 'vand');
  const hav = new Set(), kø = vand.filter((f) => kort.naboer(f).length < 6);
  kø.forEach((f) => hav.add(f));
  while (kø.length) { const f = kø.pop(); for (const n of kort.naboer(f)) if (n.type === 'vand' && !hav.has(n)) { hav.add(n); kø.push(n); } }
  const søer = vand.filter((f) => !hav.has(f));
  if (!søer.length) return null;
  const geo = mergeGeometries(søer.map((f) => {
    const p = hexTilVerden(f.q, f.r);
    return new THREE.CircleGeometry(HEX_BREDDE * 0.8, 9).rotateX(-Math.PI / 2).translate(p.x, VAND_Y + 0.03, p.z);
  }));
  const mat = new THREE.MeshStandardMaterial({ color: 0x2a140a, roughness: 0.85, metalness: 0, emissive: 0xff5a14, emissiveIntensity: 1.6 });
  mat.userData.sne = false;
  vandShader(mat, grund, tid, true);
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);
  return mesh;
}
