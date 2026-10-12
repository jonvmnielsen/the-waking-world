// Dyr i verden (M8, Jons ønske: verden må ikke føles tom). Flokke af hjorte og hinder der græsser,
// vandrer og flygter fra alt der kommer for tæt på, og ræve der lusker alene rundt.
// Dyrene er pynt: de kan ikke angribes og gemmes ikke. De ses kun hvor man har udsyn.
import * as THREE from 'three';
import { kopi, animationer } from './assets.js';

// skala = modellens skala i verden (pakken har ens enheder; helten er 2,4 høj), flugt = hvor tæt noget må komme
export const ARTER = {
  hind: { model: 'dyr/doe', skala: 1.45, gå: 1.6, løb: 8.5, flugt: 11 },
  hjort: { model: 'dyr/stag', skala: 1.6, gå: 1.6, løb: 8.5, flugt: 12 },
  ræv: { model: 'dyr/fox', skala: 1.5, gå: 2.2, løb: 9, flugt: 8 },
};

function lavModel(art) {
  const m = kopi(ARTER[art].model, { skygge: true });
  m.scale.multiplyScalar(ARTER[art].skala);
  return m;
}

export class Dyr {
  constructor(verden, art, flok, x, z) {
    this.verden = verden; this.art = art; this.d = ARTER[art]; this.flok = flok;
    this.rod = new THREE.Group();
    this.rod.add(lavModel(art));
    this.rod.position.set(x, 0, z);
    this.rod.rotation.y = Math.random() * Math.PI * 2;
    verden.scene.add(this.rod);
    this.mixer = new THREE.AnimationMixer(this.rod.children[0]);
    this.klip = new Map(animationer(this.d.model).map((a) => [a.name, this.mixer.clipAction(a)]));
    this.aktiv = null;
    this.tilstand = 'græs'; this.timer = Math.random() * 6; this.mål = null; this.fart = 0;
    this.spil('eat');
    this.mixer.update(Math.random() * 3);
  }

  get x() { return this.rod.position.x; }
  get z() { return this.rod.position.z; }

  spil(navn, fart = 1) {
    const a = this.klip.get(navn);
    if (!a || a === this.aktiv) { if (a) a.timeScale = fart; return; }
    a.reset().play(); a.timeScale = fart;
    if (this.aktiv) a.crossFadeFrom(this.aktiv, 0.25, false);
    this.aktiv = a;
  }

  // Et frit punkt omkring (cx, cz), som dyret kan gå lige hen til
  findPunkt(cx, cz, r) {
    const kort = this.verden.kort;
    for (let i = 0; i < 8; i++) {
      const v = Math.random() * Math.PI * 2, rr = r * (0.3 + Math.random() * 0.7);
      const x = cx + Math.cos(v) * rr, z = cz + Math.sin(v) * rr;
      if (kort.erGåbar(x, z) && kort.friLinje(this.x, this.z, x, z)) return { x, z };
    }
    return null;
  }

  // Flygt væk fra en trussel (og flokken følger med)
  flygt(fra) {
    const dx = this.x - fra.x, dz = this.z - fra.z, d = Math.hypot(dx, dz) || 1;
    const kort = this.verden.kort;
    for (const vink of [0, 0.6, -0.6, 1.2, -1.2, 2]) {
      const v = Math.atan2(dz, dx) + vink, r = 16 + Math.random() * 8;
      const x = this.x + Math.cos(v) * r, z = this.z + Math.sin(v) * r;
      if (kort.erGåbar(x, z) && kort.friLinje(this.x, this.z, x, z)) {
        this.mål = { x, z }; this.tilstand = 'flygt'; this.fart = this.d.løb; this.spil('run');
        return { x, z };
      }
    }
    return null;
  }

  opdater(dt, synlig) {
    this.rod.visible = synlig;
    if (synlig) this.mixer.update(dt);
    if (this.mål) {
      const dx = this.mål.x - this.x, dz = this.mål.z - this.z, d = Math.hypot(dx, dz);
      const skridt = this.fart * dt;
      if (d <= skridt + 0.2 || !this.verden.kort.erGåbar(this.x + (dx / d) * 1.5, this.z + (dz / d) * 1.5)) {
        this.mål = null; this.tilstand = 'stå'; this.timer = 1 + Math.random() * 3; this.spil('idle');
      } else {
        this.rod.position.x += (dx / d) * skridt; this.rod.position.z += (dz / d) * skridt;
        let diff = Math.atan2(dx, dz) - this.rod.rotation.y;
        diff = Math.atan2(Math.sin(diff), Math.cos(diff));
        this.rod.rotation.y += diff * Math.min(1, dt * 6);
      }
      return;
    }
    this.timer -= dt;
    if (this.timer > 0) return;
    // Skift mellem at græsse, stå og gå lidt rundt om flokkens hjem
    const r = Math.random();
    if (r < 0.45) { this.tilstand = 'græs'; this.timer = 4 + Math.random() * 7; this.spil('eat'); }
    else if (r < 0.65) { this.tilstand = 'stå'; this.timer = 2 + Math.random() * 3; this.spil('idle'); }
    else {
      const p = this.findPunkt(this.flok.hjem.x, this.flok.hjem.z, this.flok.radius);
      if (p) { this.mål = p; this.tilstand = 'gå'; this.fart = this.d.gå; this.spil('walk'); } else this.timer = 2;
    }
  }

  fjern() { this.verden.scene.remove(this.rod); this.mixer.stopAllAction(); }
}

// En flok: dyr med et fælles hjem, der flytter sig af og til, og som flygter sammen
export class Flok {
  constructor(verden, arter, hjem) {
    this.verden = verden; this.hjem = { ...hjem }; this.radius = arter.length > 1 ? 9 : 14;
    this.flytTid = 40 + Math.random() * 50;
    this.dyr = arter.map((a) => {
      const v = Math.random() * Math.PI * 2, r = Math.random() * 5;
      const x = hjem.x + Math.cos(v) * r, z = hjem.z + Math.sin(v) * r;
      return new Dyr(verden, a, this, verden.kort.erGåbar(x, z) ? x : hjem.x, verden.kort.erGåbar(x, z) ? z : hjem.z);
    });
    this.tjek = Math.random() * 0.3;
    this.forlader = null;   // sekunder til flokken er draget bort (Faldet)
  }

  get x() { return this.hjem.x; }
  get z() { return this.hjem.z; }

  opdater(dt, trusler, taage, skræk = 1) {
    this.tjek -= dt;
    if (this.tjek <= 0) {
      this.tjek = 0.3;
      // Kommer noget for tæt på et af dyrene, flygter hele flokken samme vej
      for (const d of this.dyr) {
        if (d.tilstand === 'flygt') continue;
        const t = trusler.find((u) => Math.hypot(u.x - d.x, u.z - d.z) < d.d.flugt * skræk);
        if (!t) continue;
        const p = d.flygt(t);
        if (p) { this.hjem = p; for (const a of this.dyr) if (a !== d && a.tilstand !== 'flygt') a.flygt(t); }
        break;
      }
    }
    // Af og til vandrer flokken videre til et nyt sted
    this.flytTid -= dt;
    if (this.flytTid <= 0) {
      this.flytTid = 40 + Math.random() * 50;
      const p = this.dyr[0]?.findPunkt(this.hjem.x, this.hjem.z, 30);
      if (p) this.hjem = p;
    }
    for (const d of this.dyr) d.opdater(dt, taage.erSynlig(d.x, d.z));
  }

  fjern() { for (const d of this.dyr) d.fjern(); this.dyr = []; }
}
