// De Vågnende Sten (M8): en ring af ældgamle søjler midt i verden. De lyser svagt lilla, efterhånden som
// verden husker det, den glemte — og brænder, når Opvågningen kommer. Så kan man se det komme.
import * as THREE from 'three';
import { kopi } from './assets.js';
import { glød } from './aand.js';

const LILLA = new THREE.Color(0x8a4dff);

export class VågnendeSten {
  constructor(verden, midte) {
    this.verden = verden; this.midte = midte;
    this.sten = [];
    this.tid = 0;
    const kort = verden.kort;
    for (let i = 0; i < 5; i++) {
      // Find et frit sted på ringen (lidt ind eller ud, hvis der står noget)
      let p = null;
      for (const r of [22, 18, 26, 15, 30]) {
        const v = (i / 5) * Math.PI * 2 + 0.3;
        const x = midte.x + Math.cos(v) * r, z = midte.z + Math.sin(v) * r;
        if (kort.erGåbar(x, z)) { p = { x, z }; break; }
      }
      if (!p) continue;
      const m = kopi('kaykit-halloween/pillar', { skygge: true });
      m.scale.setScalar(2.2);
      m.position.set(p.x, 0, p.z);
      m.rotation.y = Math.random() * Math.PI;
      const mats = [];
      m.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); o.material.emissive = LILLA.clone(); o.material.emissiveIntensity = 0; mats.push(o.material); } });
      const h = new THREE.Box3().setFromObject(m).max.y;
      const g = glød(0xa070ff, 5, 0);
      g.position.set(p.x, h + 1.2, p.z);
      verden.scene.add(m, g);
      this.sten.push({ m, g, mats, x: p.x, z: p.z, fase: i * 1.3 });
    }
  }

  // styrke 0–1: hvor tæt verden er på at vågne. vågen = Opvågningen er i gang
  opdater(dt, styrke, vågen) {
    this.tid += dt;
    const synlig = this.verden.taage;
    for (const s of this.sten) {
      const puls = vågen ? 0.75 + Math.sin(this.tid * 3 + s.fase) * 0.25 : 1;
      const lys = Math.min(1, styrke) * puls;
      for (const m of s.mats) m.emissiveIntensity = lys * 0.9;
      s.g.material.opacity = synlig.erUdforsket(s.x, s.z) ? lys * (vågen ? 1 : 0.7) : 0;
      s.g.scale.setScalar(4 + lys * 4);
    }
  }
}
