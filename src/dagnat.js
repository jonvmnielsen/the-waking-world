// Dag og nat (GDD 4.6): et døgn varer 8 minutter (5 min dag, 3 min nat med skumring og daggry).
// Om natten falder udsynet, creeps sover tungere (de opdager dig senere), og The Memory slår hårdere.
import * as THREE from 'three';
import { bus } from './events.js';

export const DØGN = 480;
const SKUMRING = 300, NAT = 330, DAGGRY = 450;   // sekunder inde i døgnet
const glat = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

const DAG = { himmel: new THREE.Color(0x9fd3ea), sol: new THREE.Color(0xfff1d6), hemi: new THREE.Color(0xdff4ff) };
const NATF = { himmel: new THREE.Color(0x141c33), sol: new THREE.Color(0x8fa8ff), hemi: new THREE.Color(0x6f86c8) };
const MØRKE = new THREE.Color(0xff9a5a);   // skumringens varme skær

export class DagNat {
  constructor(spil, lys) {
    this.spil = spil; this.lys = lys;
    this.nat = 0;                 // 0 = dag, 1 = dyb nat
    this.varNat = false;
    this.c = new THREE.Color();
    // En varm lygte følger helten om natten, så man kan se omkring sig
    this.lygte = new THREE.PointLight(0xffc27a, 0, 26, 1.6);
    spil.verden.scene.add(this.lygte);
    this.urEl = document.getElementById('ur');
  }

  get døgnTid() { return this.spil.ur.tid % DØGN; }
  get døgn() { return Math.floor(this.spil.ur.tid / DØGN) + 1; }

  // Udsyn ganges med denne faktor (75 % om natten)
  synsFaktor() { return 1 - 0.25 * this.nat; }

  opdater(dt) {
    const t = this.døgnTid;
    this.nat = t < SKUMRING ? 0 : t < NAT ? glat(SKUMRING, NAT, t) : t < DAGGRY ? 1 : 1 - glat(DAGGRY, DØGN, t);
    this.spil.verden.nat = this.nat;
    const { scene, sol, hemi, renderer } = this.lys;
    const n = this.nat;
    this.c.copy(DAG.himmel).lerp(NATF.himmel, n);
    scene.background.copy(this.c);
    scene.fog?.color.copy(this.c);
    // Skumring og daggry får et varmt skær
    const skær = Math.sin(Math.PI * n) * 0.5;
    sol.color.copy(DAG.sol).lerp(NATF.sol, n).lerp(MØRKE, skær * 0.6);
    sol.intensity = 2.6 - 2.0 * n;
    hemi.color.copy(DAG.hemi).lerp(NATF.hemi, n);
    hemi.intensity = 1.6 - 0.95 * n;
    renderer.toneMappingExposure = 1.05 - 0.1 * n;
    const h = this.spil.helt;
    this.lygte.intensity = 40 * n;
    this.lygte.position.set(h.x, 5, h.z);

    const erNat = n > 0.5;
    if (erNat !== this.varNat) {
      this.varNat = erNat;
      bus.emit(erNat ? 'nat' : 'dag', { døgn: this.døgn });
      bus.emit('besked', erNat ? 'Night falls. Creeps sleep deeper, but The Memory grows bolder.' : `Dawn breaks — day ${this.døgn}`);
    }
    this.tegnUr(t);
  }

  tegnUr(t) {
    if (!this.urEl) return;
    const nat = t >= NAT - 15 && t < DAGGRY + 15;
    const tilbage = nat ? (t < DAGGRY ? DAGGRY - t : DØGN - t + 0) : (t < SKUMRING ? SKUMRING - t : 0);
    const min = Math.floor(tilbage / 60), sek = Math.floor(tilbage % 60);
    this.urEl.innerHTML = `<i>${nat ? '☾' : '☀'}</i><b>${nat ? 'Night' : 'Day'} ${this.døgn}</b><small>${tilbage > 0 ? `${min}:${String(sek).padStart(2, '0')}` : ''}</small>`;
    this.urEl.classList.toggle('nat', nat);
  }
}
