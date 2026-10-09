// Farver barbarens hudtoner grønne, så helten ligner en ork fra The Tide.
// KayKit-figurer bruger en farvepalet-tekstur (8×4 felter); hudfarven er feltet øverst til venstre.
import * as THREE from 'three';

const SRGB = THREE.SRGBColorSpace;
let grønTekstur = null;

export function gørOrkGrøn(model) {
  model.traverse((o) => {
    if (!o.isMesh || !o.material?.map) return;
    if (!grønTekstur) grønTekstur = lavGrøn(o.material.map);
    o.material = o.material.clone();
    o.material.map = grønTekstur;
  });
}

function lavGrøn(kilde) {
  const img = kilde.image;
  const c = document.createElement('canvas');
  c.width = img.width; c.height = img.height;
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, c.width, c.height);
  const p = data.data;
  const hsl = { h: 0, s: 0, l: 0 };
  const farve = new THREE.Color();
  const rgb = { r: 0, g: 0, b: 0 };
  const fb = c.width / 8, fh = c.height / 4;
  for (let y = 0; y < fh; y++) {
    for (let x = 0; x < fb; x++) {
      const i = (y * c.width + x) * 4;
      farve.setRGB(p[i] / 255, p[i + 1] / 255, p[i + 2] / 255, SRGB);
      farve.getHSL(hsl, SRGB);
      // Hudfeltet: skift til en dyb orkegrøn, behold gradientens lyshed
      farve.setHSL(0.24, 0.36, 0.17 + hsl.l * 0.27, SRGB).getRGB(rgb, SRGB);
      p[i] = rgb.r * 255; p[i + 1] = rgb.g * 255; p[i + 2] = rgb.b * 255;
    }
  }
  ctx.putImageData(data, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.flipY = kilde.flipY;
  t.colorSpace = kilde.colorSpace;
  t.wrapS = kilde.wrapS; t.wrapT = kilde.wrapT;
  t.magFilter = kilde.magFilter; t.minFilter = kilde.minFilter;
  return t;
}
