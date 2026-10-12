// Fugle (M8): krager der kredser over skovene (og samles hvor der har været kamp), finker der hopper i græsset
// og letter når nogen kommer for tæt på, og måger langs kysten. Vingerne er en separat mesh i modellerne
// (forge-lowpoly), som vi bøjer op og ned her (vertex-animation på CPU — få punkter pr. fugl).
import * as THREE from 'three';
import { kopi } from './assets.js';

export const FUGLE = {
  krage: { model: 'dyr/crow', skala: 1.8, antal: [4, 7], højde: [14, 20], radius: [7, 13], vinkelFart: 0.38, flap: 9, glid: 0.35 },
  finke: { model: 'dyr/finch', skala: 2.1, antal: [5, 8], højde: [0, 0], radius: [1, 3], vinkelFart: 0, flap: 17, glid: 0 },
  måge: { model: 'dyr/gull', skala: 2.3, antal: [2, 4], højde: [9, 13], radius: [8, 14], vinkelFart: 0.24, flap: 7, glid: 0.7 },
};
const til = ([a, b]) => a + Math.random() * (b - a);

class Fugl {
  constructor(scene, art) {
    const d = FUGLE[art];
    this.rod = kopi(d.model, { skygge: art !== 'finke' });
    this.rod.scale.setScalar(d.skala);
    this.rod.rotation.order = 'YXZ';
    this.rod.traverse((o) => { if (o.isMesh && o.name.endsWith('_wing')) this.vinge = o; });
    // Egen kopi af vingerne, så hver fugl kan slå med sin egen takt
    const v = this.vinge;
    v.geometry = v.geometry.clone();
    v.frustumCulled = false;
    v.updateMatrix();
    this.M = v.matrix.clone(); this.Mi = this.M.clone().invert();
    const pos = v.geometry.attributes.position, p = new THREE.Vector3();
    this.grund = [];
    for (let i = 0; i < pos.count; i++) { p.fromBufferAttribute(pos, i).applyMatrix4(this.M); this.grund.push(p.clone()); }
    this.fase = Math.random() * Math.PI * 2;
    scene.add(this.rod);
  }

  // vinkel = vingernes udslag (radianer), fold = hvor udstrakte de er (1 = helt, 0.25 = foldet)
  vinger(vinkel, fold = 1) {
    const pos = this.vinge.geometry.attributes.position, p = new THREE.Vector3();
    const c = Math.cos(vinkel), s = Math.sin(vinkel);
    for (let i = 0; i < this.grund.length; i++) {
      const g = this.grund[i], ax = Math.abs(g.x);
      if (ax < 0.05) { p.copy(g); } else {
        const l = 0.05 + (ax - 0.05) * fold;
        p.set(Math.sign(g.x) * (0.05 + (l - 0.05) * c), g.y + (l - 0.05) * s, g.z);
      }
      p.applyMatrix4(this.Mi);
      pos.setXYZ(i, p.x, p.y, p.z);
    }
    pos.needsUpdate = true;
  }
}

export class FugleFlok {
  constructor(verden, art, x, z, landPunkt) {
    this.verden = verden; this.art = art; this.d = FUGLE[art];
    this.x = x; this.z = z; this.mål = null; this.tid = 0;
    this.landPunkt = landPunkt;   // finder et nyt sted at lande / kredse
    this.højde = til(this.d.højde); this.radius = til(this.d.radius);
    this.tilstand = art === 'finke' ? 'jord' : 'kreds';
    this.flytTid = 30 + Math.random() * 50;
    const n = Math.round(til(this.d.antal));
    this.fugle = Array.from({ length: n }, (_, i) => {
      const f = new Fugl(verden.scene, art);
      f.v = (i / n) * Math.PI * 2 + Math.random() * 0.4;
      f.dr = (Math.random() - 0.5) * 3; f.dh = (Math.random() - 0.5) * 3;
      f.jx = (Math.random() - 0.5) * 5; f.jz = (Math.random() - 0.5) * 5; f.hop = Math.random();
      return f;
    });
    this.tjek = 0;
  }

  // Flyv til et nyt sted (krager: kreds der i et stykke tid)
  flyvTil(x, z, ophold = 0) {
    this.mål = { x, z }; this.ophold = ophold;
    if (this.art === 'finke') this.tilstand = 'flyv';
  }

  opdater(dt, trusler, taage) {
    this.tid += dt;
    this.flytTid -= dt;
    if (this.ophold > 0) this.ophold -= dt;
    if (this.flytTid <= 0 && !(this.ophold > 0)) { this.flytTid = 30 + Math.random() * 50; const p = this.landPunkt(this); if (p) this.flyvTil(p.x, p.z); }
    // Finker letter når noget kommer for tæt på
    if (this.tilstand === 'jord' && (this.tjek -= dt) <= 0) {
      this.tjek = 0.3;
      if (trusler.some((u) => Math.hypot(u.x - this.x, u.z - this.z) < 9)) { const p = this.landPunkt(this); if (p) this.flyvTil(p.x, p.z); }
    }
    // Flokkens midte bevæger sig mod målet
    let vx = 0, vz = 0;
    if (this.mål) {
      const dx = this.mål.x - this.x, dz = this.mål.z - this.z, d = Math.hypot(dx, dz);
      const fart = this.art === 'finke' ? 11 : 7;
      if (d < fart * dt + 0.3) { this.x = this.mål.x; this.z = this.mål.z; this.mål = null; if (this.art === 'finke') this.tilstand = 'jord'; }
      else { vx = (dx / d) * fart; vz = (dz / d) * fart; this.x += vx * dt; this.z += vz * dt; this.rest = d; }
    }
    const synlig = taage.erSynlig(this.x, this.z);
    for (const f of this.fugle) {
      f.rod.visible = synlig;
      if (this.art === 'finke') this.finke(f, dt, vx, vz);
      else this.kreds(f, dt);
      if (!synlig) continue;
      // Vingeslag med pauser hvor fuglen svæver
      f.fase += dt * this.d.flap * (this.tilstand === 'flyv' ? 1.1 : 1);
      const svæv = this.tilstand === 'jord' ? 0 : Math.sin(this.tid * 0.5 + f.v * 3) < this.d.glid * 2 - 1 ? 0.15 : 1;
      if (this.tilstand === 'jord') f.vinger(0.25, 0.3);
      else f.vinger(Math.sin(f.fase) * 0.55 * svæv + 0.08, 1);
    }
  }

  kreds(f, dt) {
    const w = this.d.vinkelFart * (this.ophold > 0 ? 1.4 : 1);
    f.v += w * dt;
    const r = Math.max(3, (this.ophold > 0 ? 7 : this.radius) + f.dr), h = (this.ophold > 0 ? 11 : this.højde) + f.dh;
    f.rod.position.set(this.x + Math.cos(f.v) * r, h + Math.sin(this.tid * 0.8 + f.v) * 0.5, this.z + Math.sin(f.v) * r);
    f.rod.rotation.y = Math.atan2(-Math.sin(f.v), Math.cos(f.v));
    f.rod.rotation.z = -0.32;
  }

  finke(f, dt, vx, vz) {
    if (this.tilstand === 'flyv') {
      const op = Math.min(5, (this.rest ?? 10) * 0.35);
      f.rod.position.set(this.x + f.jx * 0.6, op + f.dh * 0.3 + 0.4, this.z + f.jz * 0.6);
      f.rod.rotation.y = Math.atan2(vx, vz); f.rod.rotation.z = 0;
      return;
    }
    // På jorden: små hop og drej
    f.hop += dt * (0.8 + Math.random() * 0.4);
    if (f.hop > 1) { f.hop = 0; f.jx += (Math.random() - 0.5) * 0.8; f.jz += (Math.random() - 0.5) * 0.8; f.rod.rotation.y = Math.random() * Math.PI * 2; }
    const hop = f.hop < 0.25 ? Math.sin((f.hop / 0.25) * Math.PI) * 0.3 : 0;
    f.rod.position.set(this.x + f.jx, 0.08 + hop, this.z + f.jz);
    f.rod.rotation.z = 0;
  }

  fjern() { for (const f of this.fugle) this.verden.scene.remove(f.rod); this.fugle = []; }
}
