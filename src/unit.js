// Fælles grundklasse for helte og creeps: model, animationer, bevægelse, liv.
import * as THREE from 'three';
import { kopi, animationer } from './assets.js';
import { bus } from './events.js';

export class Unit {
  constructor(verden, model, { skala = 1, skjul = [], våben = {}, våbenSkala = 1, radius = 0.7 } = {}) {
    this.verden = verden;
    this.rod = new THREE.Group();
    this.model = kopi(model, { skygge: true });
    this.model.scale.setScalar(skala);
    this.rod.add(this.model);
    verden.scene.add(this.rod);
    this.radius = radius;
    this.højde = 2.4 * skala;

    // Skjul ekstra udstyr modellen har med (fx skjold og krus)
    this.model.traverse((o) => { if (skjul.includes(o.name)) o.visible = false; });
    // Sæt våben i hænderne (KayKit-skeletter har knoglerne handslotr / handslotl)
    for (const [side, sti] of Object.entries(våben)) {
      const knogle = this.model.getObjectByName(side === 'r' ? 'handslotr' : 'handslotl');
      if (!knogle) continue;
      const v = kopi(sti.includes('/') ? sti : `kaykit-skeletons/${sti}`, { skygge: true });
      v.scale.setScalar(våbenSkala);
      knogle.add(v);
    }

    this.mixer = new THREE.AnimationMixer(this.model);
    this.handlinger = new Map(animationer(model).map((a) => [a.name, this.mixer.clipAction(a)]));
    this.aktiv = null;
    this.mixer.addEventListener('finished', (e) => this.vedAnimSlut?.(e.action));

    this.maxHp = 100;
    this.hp = 100;
    this.død = false;
    this.vej = [];
    this.fart = 3;
    this.vinkelMål = 0;
  }

  get x() { return this.rod.position.x; }
  get z() { return this.rod.position.z; }

  afstand(a) { return Math.hypot(a.x - this.x, a.z - this.z); }

  // Afspil animation med blød overgang. Returnerer klippets længde i sekunder.
  spil(navn, { loop = true, fade = 0.15, fart = 1, gentag = false } = {}) {
    const h = this.handlinger.get(navn);
    if (!h) return 0;
    if (h === this.aktiv && !gentag) { h.timeScale = fart; return h.getClip().duration; }
    h.reset();
    h.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, Infinity);
    h.clampWhenFinished = !loop;
    h.timeScale = fart;
    h.play();
    if (this.aktiv && this.aktiv !== h) h.crossFadeFrom(this.aktiv, fade, false);
    this.aktiv = h;
    return h.getClip().duration / fart;
  }

  vend(x, z) {
    this.vinkelMål = Math.atan2(x - this.x, z - this.z);
  }

  gåTil(x, z) {
    this.vej = this.verden.kort.findVej({ x: this.x, z: this.z }, { x, z });
    return this.vej.length > 0;
  }

  stop() { this.vej = []; }

  get bevæger() { return this.vej.length > 0; }

  opdaterBevægelse(dt) {
    if (!this.vej.length) return;
    const mål = this.vej[0];
    const dx = mål.x - this.x, dz = mål.z - this.z;
    const d = Math.hypot(dx, dz);
    const skridt = this.fart * dt;
    if (d <= skridt) {
      this.rod.position.x = mål.x; this.rod.position.z = mål.z;
      this.vej.shift();
    } else {
      this.rod.position.x += (dx / d) * skridt;
      this.rod.position.z += (dz / d) * skridt;
      this.vinkelMål = Math.atan2(dx, dz);
    }
  }

  opdater(dt) {
    this.mixer.update(dt);
    // Drej blødt mod den ønskede retning
    let diff = this.vinkelMål - this.rod.rotation.y;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    this.rod.rotation.y += diff * Math.min(1, dt * 12);
  }

  // Påfør skade. Returnerer true hvis enheden døde.
  tagSkade(mængde, kilde) {
    if (this.død) return false;
    this.hp = Math.max(0, this.hp - mængde);
    bus.emit('skade', { mål: this, mængde, kilde });
    if (this.hp <= 0) { this.dø(kilde); return true; }
    return false;
  }

  dø() { this.død = true; this.vej = []; }

  fjern() {
    this.verden.scene.remove(this.rod);
    this.mixer.stopAllAction();
  }
}

// Skub enheder fra hinanden så de ikke står inde i hinanden
export function adskil(enheder, kort) {
  for (let i = 0; i < enheder.length; i++) {
    const a = enheder[i]; if (a.død) continue;
    for (let j = i + 1; j < enheder.length; j++) {
      const b = enheder[j]; if (b.død) continue;
      const dx = b.x - a.x, dz = b.z - a.z;
      const d = Math.hypot(dx, dz), min = a.radius + b.radius;
      if (d >= min || d < 1e-4) continue;
      const skub = (min - d) / 2, nx = dx / d, nz = dz / d;
      flyt(a, -nx * skub, -nz * skub, kort);
      flyt(b, nx * skub, nz * skub, kort);
    }
  }
}

function flyt(u, dx, dz, kort) {
  if (kort.erGåbar(u.x + dx, u.z + dz)) { u.rod.position.x += dx; u.rod.position.z += dz; }
}

