// Indlæsning af modeller fra public/assets (synkroniseret fra game-assets).
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { clone as klonSkelet } from 'three/examples/jsm/utils/SkeletonUtils.js';

const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
const cache = new Map();
const BASE = import.meta.env.BASE_URL + 'assets/';

// Hvis spillet er bygget som Claude-side, ligger alle modeller i én datafil (modelpakke.json)
async function hentPakke() {
  try {
    const svar = await fetch(`${BASE}modelpakke.json`);
    return svar.ok ? await svar.json() : null;
  } catch { return null; }
}

function base64TilBuffer(b64) {
  const bin = atob(b64);
  const buf = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
  return buf.buffer;
}

export async function hentAlle(stier, fremskridt) {
  let færdig = 0;
  const unikke = [...new Set(stier)];
  const pakke = await hentPakke();
  await Promise.all(unikke.map(async (sti) => {
    if (!cache.has(sti)) {
      cache.set(sti, pakke?.[sti]
        ? await loader.parseAsync(base64TilBuffer(pakke[sti]), '')
        : await loader.loadAsync(`${BASE}${sti}.glb`));
    }
    færdig++;
    fremskridt?.(færdig / unikke.length);
  }));
}

export function gltf(sti) {
  const g = cache.get(sti);
  if (!g) throw new Error(`Model ikke indlæst: ${sti}`);
  return g;
}

// Ny kopi af en model (virker også for figurer med skelet)
export function kopi(sti, { skygge = false } = {}) {
  const g = gltf(sti);
  const obj = klonSkelet(g.scene);
  obj.traverse((o) => {
    if (o.isMesh) { o.castShadow = skygge; o.receiveShadow = true; }
  });
  return obj;
}

// Samler mange kopier af samme model i InstancedMesh'er (én tegning per delmesh)
export function instanser(sti, matricer, { skygge = false, modtag = true } = {}) {
  const gruppe = new THREE.Group();
  if (!matricer.length) return gruppe;
  const g = gltf(sti);
  g.scene.updateMatrixWorld(true);
  g.scene.traverse((o) => {
    if (!o.isMesh) return;
    const im = new THREE.InstancedMesh(o.geometry, o.material, matricer.length);
    const tmp = new THREE.Matrix4();
    matricer.forEach((m, i) => im.setMatrixAt(i, tmp.multiplyMatrices(m, o.matrixWorld)));
    im.castShadow = skygge;
    im.receiveShadow = modtag;
    im.computeBoundingSphere();
    gruppe.add(im);
  });
  return gruppe;
}

export function animationer(sti) {
  return gltf(sti).animations;
}
