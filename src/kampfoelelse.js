// Kampfølelse (M14f): det, der gør et slag mærkbart — uden at fylde skærmen.
// - Den, der rammes, blinker kort (hvid for fjender, rød for egne)
// - Gnister ved slaget (blod for levende, støv og knoglesplinter for skeletter og ånder)
// - Store slag (kritiske og evner) giver et lille stop i heltens bevægelse og et ryk i kameraet
// - Fald: en støvsky og en kort ring på jorden; bosser og helte ryster kameraet
import * as THREE from 'three';
import { bus } from './events.js';
import { glødTekstur } from './aand.js';

const MAKS_GNISTER = 160;
const BLINK_TID = 0.13;

export class KampFølelse {
  constructor(spil) {
    this.spil = spil;
    this.blinker = new Map();   // unit -> { tid, mats: [[materiale, farve, styrke]] }
    this.gnister = [];
    this.mat = new Map();       // farve -> fælles materiale
    bus.on('skade', (e) => this.vedSkade(e));
    bus.on('creep_død', ({ creep }) => this.fald(creep, creep.boss || creep.erHelt));
    bus.on('soldat_død', ({ soldat }) => this.fald(soldat, false));
    bus.on('helt_død', ({ helt }) => this.fald(helt, true));
  }

  synlig(u) { return u?.rod?.visible !== false && this.spil.taage?.erSynlig?.(u.x, u.z) !== false; }

  vedSkade({ mål, mængde, kilde }) {
    if (!(mængde > 0) || !(mål?.model?.traverse || mål?.rod?.traverse) || !this.synlig(mål)) return;
    const h = this.spil.helt, egen = mål === h || mål.side === 'egen';
    this.blink(mål, egen ? 0xff3020 : 0xffffff);
    const andel = mængde / Math.max(1, mål.maxHp ?? 100);
    const n = Math.min(10, 3 + Math.round(andel * 20));
    this.sprøjt(mål, n, this.slags(mål), kilde);
    // Helten slår stort: et lille stop i bevægelsen og et ryk i kameraet
    if (kilde === h && (mængde > h.stats.skadeMax * 1.6 || andel > 0.25)) {
      h.hitstop = 0.07;
      if (mængde > h.stats.skadeMax * 2.5 || andel > 0.4) bus.emit('ryst', { styrke: 0.16, tid: 0.16 });
    }
    // Helten tager et hårdt slag
    if (mål === h && andel > 0.12) bus.emit('ryst', { styrke: 0.12, tid: 0.14 });
  }

  // Hvad sprøjter ud: blod, knoglestøv eller åndelys
  slags(u) {
    if (u.erBygning) return 0xb59b7a;
    if (/skeleton/.test(u.data?.model ?? '')) return 0xe8e2d0;   // knoglestøv (også The Memorys ånder)
    return 0xb3121a;
  }

  blink(u, farve) {
    let b = this.blinker.get(u);
    if (!b || b.tid <= 0) {   // materialerne samles hver gang (helten kan have fået nye ved Ascension)
      const mats = [];
      (u.model?.traverse ? u.model : u.rod).traverse((o) => {   // bygninger har kun rod (model er en sti)
        if (!o.isMesh || !o.material?.emissive) return;
        if (!o.material.userData.blink) { o.material = o.material.clone(); o.material.userData.blink = true; }
        mats.push([o.material, o.material.emissive.clone(), o.material.emissiveIntensity]);
      });
      b = { tid: 0, mats };
      this.blinker.set(u, b);
    }
    b.tid = BLINK_TID; b.farve = farve;
  }

  materiale(farve) {
    if (!this.mat.has(farve)) this.mat.set(farve, new THREE.SpriteMaterial({ map: glødTekstur(), color: farve, transparent: true, depthWrite: false, fog: false }));
    return this.mat.get(farve);
  }

  sprøjt(u, n, farve, kilde) {
    const scene = this.spil.verden.scene, y = (u.højde ?? 1.6) * 0.6 + (u.rod.position.y ?? 0);
    const dx = kilde ? u.x - kilde.x : 0, dz = kilde ? u.z - kilde.z : 0, d = Math.hypot(dx, dz) || 1;
    for (let i = 0; i < n && this.gnister.length < MAKS_GNISTER; i++) {
      const s = new THREE.Sprite(this.materiale(farve));
      s.scale.setScalar(0.22 + Math.random() * 0.2);
      s.position.set(u.x, y, u.z);
      const fart = 3 + Math.random() * 4;
      const v = new THREE.Vector3((dx / d) * fart * 0.7 + (Math.random() - 0.5) * 4, 2 + Math.random() * 4, (dz / d) * fart * 0.7 + (Math.random() - 0.5) * 4);
      scene.add(s);
      this.gnister.push({ s, v, tid: 0, liv: 0.35 + Math.random() * 0.25 });
    }
  }

  fald(u, stor) {
    if (!u || !this.synlig(u)) return;
    bus.emit('effekt', { type: 'evne', x: u.x, z: u.z, radius: stor ? 6 : 2.6, farve: 0x8a7a62 });
    this.sprøjt(u, stor ? 14 : 6, 0x9a8a72, null);
    if (stor) bus.emit('ryst', { styrke: 0.3, tid: 0.35 });
  }

  opdater(dt) {
    for (const [u, b] of this.blinker) {
      if (b.tid <= 0) { if (u.død || u.fjernet) this.blinker.delete(u); continue; }
      b.tid -= dt;
      const k = Math.max(0, b.tid / BLINK_TID);
      for (const [m, farve, styrke] of b.mats) {
        if (k > 0) { m.emissive.setHex(b.farve); m.emissiveIntensity = 0.9 * k; }
        else { m.emissive.copy(farve); m.emissiveIntensity = styrke; }
      }
    }
    for (let i = this.gnister.length - 1; i >= 0; i--) {
      const g = this.gnister[i];
      g.tid += dt;
      g.v.y -= 18 * dt;
      g.s.position.addScaledVector(g.v, dt);
      if (g.s.position.y < 0.05) { g.s.position.y = 0.05; g.v.set(0, 0, 0); }
      g.s.material.opacity = 1;   // fælles materiale; størrelsen bærer udtoningen
      g.s.scale.multiplyScalar(1 - dt * 2.2);
      if (g.tid >= g.liv) { g.s.removeFromParent(); this.gnister.splice(i, 1); }
    }
  }
}
