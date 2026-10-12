// Ånder (M8): The Memory er ikke døde, men ånder der ikke kan glemme. Deres figurer får en bleg,
// sølvblå glød og bliver en smule gennemsigtige. De Ældgamle lyser stærkere.
import * as THREE from 'three';

const LYS = new THREE.Color(0xdfeeff);

export function åndeLook(model, { farve = 0x9fd8ff, styrke = 0.3, gennemsigtig = 0.85 } = {}) {
  model.traverse((o) => {
    if (!o.isMesh) return;
    o.material = o.material.clone();
    const m = o.material;
    m.color.lerp(LYS, 0.35);
    m.emissive = new THREE.Color(farve);
    m.emissiveIntensity = styrke;
    if (gennemsigtig < 1) { m.transparent = true; m.opacity = gennemsigtig; }
  });
}

// Blød, hvid glød (tones med materialets farve) til ekkoer, tåge og stenenes lys
let gløden = null;
export function glødTekstur() {
  if (gløden) return gløden;
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,0.7)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  gløden = new THREE.CanvasTexture(c);
  return gløden;
}

export function glød(farve, str, opacitet = 1) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glødTekstur(), color: farve, transparent: true, opacity: opacitet, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  s.scale.setScalar(str);
  return s;
}

// Sølvblå tåge der driver lavt over Erevoss — The Memorys stille land (i stedet for død jord)
export class ÅndeTåge {
  constructor(verden, hal) {
    this.hal = hal; this.tid = 0;
    this.skyer = Array.from({ length: 14 }, () => {
      const s = glød(0xdce8ff, 18 + Math.random() * 14, 0.2 + Math.random() * 0.1);
      s.material.blending = THREE.NormalBlending;
      verden.scene.add(s);
      return { s, v: Math.random() * Math.PI * 2, r: 8 + Math.random() * 34, fart: (Math.random() - 0.5) * 0.06, h: 0.8 + Math.random() * 1.5 };
    });
  }

  opdater(dt, taage) {
    this.tid += dt;
    for (const k of this.skyer) {
      k.v += k.fart * dt;
      const x = this.hal.x + Math.cos(k.v) * k.r, z = this.hal.z + Math.sin(k.v) * k.r;
      k.s.position.set(x, k.h + Math.sin(this.tid * 0.3 + k.v) * 0.3, z);
      k.s.visible = taage.erUdforsket(x, z);
    }
  }
}
