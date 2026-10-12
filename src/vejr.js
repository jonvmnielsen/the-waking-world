// Vejr (M10): sne, regn, støv, aske, faldende blade eller blæst — efter biom og årstid (biomdata.js).
// Partiklerne lever i en kasse omkring det sted kameraet kigger på. Regn og blæst kommer i byger,
// der kommer og går tilfældigt; sne, aske og blade falder hele tiden.
import * as THREE from 'three';
import { glødTekstur } from './aand.js';

const KASSE = { x: 110, y: 34, z: 110 };
const ART = {
  sne: { antal: 900, farve: 0xffffff, str: 0.55, fald: [1.6, 2.8], drift: 1.2, byger: false },
  regn: { antal: 1000, farve: 0xbfd8ff, linje: 1.6, fald: [28, 36], drift: 2, byger: true },
  støv: { antal: 500, farve: 0xe8cf9a, str: 0.4, fald: [-0.3, 0.3], drift: 9, byger: true },
  aske: { antal: 700, farve: 0x9a9490, str: 0.45, fald: [1.0, 2.0], drift: 1.5, gløder: 0.12, byger: false },
  blade: { antal: 260, farver: [0xd8742a, 0xc8401e, 0xe8b43a, 0x9a6a2a], str: 0.75, fald: [1.4, 2.4], drift: 2.5, byger: false },
  blæst: { antal: 300, farve: 0xd8d0c0, str: 0.3, fald: [-0.2, 0.4], drift: 12, byger: true },
};

export class Vejr {
  constructor(scene, slags) {
    this.d = ART[slags];
    this.slags = slags;
    if (!this.d) return;
    const d = this.d, n = d.antal;
    this.fart = new Float32Array(n * 3);
    const pos = new Float32Array(n * 3 * (d.linje ? 2 : 1));
    const farver = new Float32Array(n * 3 * (d.linje ? 2 : 1));
    const c = new THREE.Color();
    for (let i = 0; i < n; i++) {
      const x = (Math.random() - 0.5) * KASSE.x, y = Math.random() * KASSE.y, z = (Math.random() - 0.5) * KASSE.z;
      this.fart.set([(Math.random() - 0.3) * d.drift, -(d.fald[0] + Math.random() * (d.fald[1] - d.fald[0])), (Math.random() - 0.5) * d.drift * 0.6], i * 3);
      c.set(d.farver ? d.farver[i % d.farver.length] : d.gløder && Math.random() < d.gløder ? 0xff7a2a : d.farve);
      if (d.linje) { pos.set([x, y, z, x, y + d.linje, z], i * 6); farver.set([c.r, c.g, c.b, c.r, c.g, c.b], i * 6); }
      else { pos.set([x, y, z], i * 3); farver.set([c.r, c.g, c.b], i * 3); }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(farver, 3));
    this.mat = d.linje
      ? new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.45, depthWrite: false, fog: false })
      : new THREE.PointsMaterial({ size: d.str, map: glødTekstur(), vertexColors: true, transparent: true, opacity: 0.85, depthWrite: false, fog: false });
    this.obj = d.linje ? new THREE.LineSegments(geo, this.mat) : new THREE.Points(geo, this.mat);
    this.obj.frustumCulled = false;
    this.obj.renderOrder = 6;
    scene.add(this.obj);
    this.styrke = d.byger ? 0 : 1;
    this.byge = d.byger ? 30 + Math.random() * 60 : 0;   // sekunder til vejret skifter
    this.mål = this.styrke;
    this.tid = 0;
  }

  // Er det en byge lige nu? (til krøniken/lyd senere)
  get aktiv() { return this.styrke > 0.3; }

  opdater(dt, fokus) {
    if (!this.d) return;
    const d = this.d;
    this.tid += dt;
    // Byger: skift mellem opholdsvejr og byge på tilfældige tidspunkter
    if (d.byger && (this.byge -= dt) <= 0) {
      this.mål = this.mål > 0.5 ? 0 : 0.6 + Math.random() * 0.4;
      this.byge = this.mål > 0 ? 40 + Math.random() * 70 : 60 + Math.random() * 120;
    }
    this.styrke += Math.sign(this.mål - this.styrke) * Math.min(Math.abs(this.mål - this.styrke), dt * 0.15);
    this.mat.opacity = (d.linje ? 0.45 : 0.85) * this.styrke;
    this.obj.visible = this.styrke > 0.01;
    if (!this.obj.visible) return;
    const pos = this.obj.geometry.attributes.position, a = pos.array, n = d.antal, trin = d.linje ? 6 : 3;
    const hx = KASSE.x / 2, hz = KASSE.z / 2;
    for (let i = 0; i < n; i++) {
      const j = i * trin, f = i * 3;
      // Blade og sne svajer lidt
      const svaj = d.linje ? 0 : Math.sin(this.tid * 1.3 + i) * 0.6;
      let x = a[j] + (this.fart[f] + svaj) * dt, y = a[j + 1] + this.fart[f + 1] * dt, z = a[j + 2] + this.fart[f + 2] * dt;
      // Hold partiklerne i kassen omkring fokus
      if (x < fokus.x - hx) x += KASSE.x; else if (x > fokus.x + hx) x -= KASSE.x;
      if (z < fokus.z - hz) z += KASSE.z; else if (z > fokus.z + hz) z -= KASSE.z;
      if (y < 0) y += KASSE.y; else if (y > KASSE.y) y -= KASSE.y;
      a[j] = x; a[j + 1] = y; a[j + 2] = z;
      if (d.linje) { a[j + 3] = x - this.fart[f] * 0.05; a[j + 4] = y + d.linje; a[j + 5] = z; }
    }
    pos.needsUpdate = true;
  }
}
