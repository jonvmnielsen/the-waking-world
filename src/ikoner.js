// Tegner et ikon til hvert item ud fra dets 3D-model (GDD 8.5). Køres én gang ved opstart,
// før tåge-shaderen sættes på materialerne.
import * as THREE from 'three';
import { ITEMS } from './itemdata.js';
import { itemModel } from './genstande.js';
import { skaleretKopi } from './assets.js';

const STR = 96;
const ikoner = {};

export function ikon(id) { return ikoner[id]; }

// ekstra: [{ id, sti, vinkel }] — fx bygninger og ressourcer til kommandopanelet
export function lavIkoner(renderer, ekstra = []) {
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x445566, 2.2));
  const lys = new THREE.DirectionalLight(0xffffff, 2.4);
  lys.position.set(2, 4, 3);
  scene.add(lys);
  const kamera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
  const mål = new THREE.WebGLRenderTarget(STR, STR);
  const px = new Uint8Array(STR * STR * 4);
  const c = document.createElement('canvas');
  c.width = c.height = STR;
  const ctx = c.getContext('2d');
  const billede = ctx.createImageData(STR, STR);
  // Render-targets får ingen farvekonvertering, så lineære værdier gøres til sRGB her
  const tilSrgb = new Uint8Array(256);
  for (let i = 0; i < 256; i++) {
    const l = i / 255;
    tilSrgb[i] = Math.round(255 * (l <= 0.0031308 ? l * 12.92 : 1.055 * l ** (1 / 2.4) - 0.055));
  }
  const gammelFarve = new THREE.Color(); renderer.getClearColor(gammelFarve);
  const gammelAlfa = renderer.getClearAlpha();
  renderer.setClearColor(0x000000, 0);

  const opgaver = [
    ...Object.keys(ITEMS).map((id) => ({ id, lav: () => itemModel(id, 1.6), rot: [0.25, -0.7, ['permanent', 'artefakt'].includes(ITEMS[id].type) ? -0.5 : 0] })),
    ...ekstra.map((e) => ({ id: e.id, lav: () => skaleretKopi(e.sti, 1.75), rot: e.vinkel ?? [0.45, -0.6, 0] })),
  ];
  for (const { id, lav, rot } of opgaver) {
    const m = lav();
    m.rotation.set(...rot);
    const boks = new THREE.Box3().setFromObject(m);
    const midt = boks.getCenter(new THREE.Vector3());
    m.position.sub(midt);
    scene.add(m);
    kamera.position.set(0, 0.5, 3.6);
    kamera.lookAt(0, 0, 0);
    renderer.setRenderTarget(mål);
    renderer.clear();
    renderer.render(scene, kamera);
    renderer.readRenderTargetPixels(mål, 0, 0, STR, STR, px);
    // Pixels kommer på hovedet fra WebGL
    for (let y = 0; y < STR; y++) {
      for (let x = 0; x < STR; x++) {
        const fra = ((STR - 1 - y) * STR + x) * 4, til = (y * STR + x) * 4;
        billede.data[til] = tilSrgb[px[fra]]; billede.data[til + 1] = tilSrgb[px[fra + 1]];
        billede.data[til + 2] = tilSrgb[px[fra + 2]]; billede.data[til + 3] = px[fra + 3];
      }
    }
    ctx.putImageData(billede, 0, 0);
    ikoner[id] = c.toDataURL();
    scene.remove(m);
  }
  renderer.setRenderTarget(null);
  renderer.setClearColor(gammelFarve, gammelAlfa);
  mål.dispose();
}
