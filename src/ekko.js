// Ekkoer (M8): The Memory er ånder, der ikke kan glemme. Når noget dør, stiger dets ekko op som en sølvblå
// lysplet og driver mod Erevoss. Hvert ekko gør The Memory rigere og stærkere — og fordi hvert minde rummer
// en stump af Den Unavngivnes navn, kommer Opvågningen tættere. Helten kan fange ekkoer undervejs:
// så får han mana og erfaring, hører hvad ekkoet husker, og The Memory får det ikke.
import * as THREE from 'three';
import { bus } from './events.js';
import { glød } from './aand.js';
import { EKKO_STUMPER } from './verdenslore.js';

const FART = 4.5, FANG = 3.8, KREDS_MAKS = 24;   // fanges først når ekkoet er på vej (efter 3 s), så det kræver at gå efter det

export class Ekkoer {
  constructor(spil) {
    this.spil = spil;
    this.liste = [];
    this.fanget = 0; this.stump = 0; this.sidstStump = -99; this.tid = 0;
    this.kreds = [];   // ekkoer der kredser om Erevoss' trone
    bus.on('creep_død', ({ creep }) => this.ny(creep.x, creep.z, creep.boss ? 3 : 1));
    bus.on('soldat_død', ({ soldat }) => this.ny(soldat.x, soldat.z, 1));
    bus.on('helt_død', ({ helt }) => this.ny(helt.x, helt.z, 3));
  }

  get hal() { const m = this.spil.memory; return m && !m.hal.død ? m.hal : null; }

  ny(x, z, vægt) {
    if (!this.hal) return;
    const rod = new THREE.Group();
    rod.add(glød(0x8fc8ff, 1.1 + vægt * 0.35, 0.85), glød(0xe8f4ff, 0.45 + vægt * 0.12));
    rod.position.set(x, 1.2, z);
    this.spil.verden.scene.add(rod);
    this.liste.push({ rod, x, z, tid: 0, vægt, fase: Math.random() * 6 });
  }

  opdater(dt) {
    this.tid += dt;
    const hal = this.hal, helt = this.spil.helt, taage = this.spil.taage;
    const fang = FANG * (1 + (helt.inventar?.bonus.ekko ?? 0));
    for (const e of this.liste) {
      e.tid += dt;
      if (!hal) { e.væk = true; continue; }
      if (e.tid < 2) e.rod.position.y += dt * 1.4;
      else {
        const dx = hal.x - e.x, dz = hal.z - e.z, d = Math.hypot(dx, dz);
        if (d < 6) { e.væk = true; this.ankom(e); continue; }
        // Driver mod tronen i en blød bølge
        const b = Math.sin(e.tid * 1.7 + e.fase) * 0.9;
        e.x += ((dx / d) * FART + (-dz / d) * b) * dt; e.z += ((dz / d) * FART + (dx / d) * b) * dt;
        e.rod.position.set(e.x, 3.6 + Math.sin(e.tid * 2.3 + e.fase) * 0.35, e.z);
      }
      e.rod.visible = taage.erSynlig(e.x, e.z);
      if (e.tid > 3 && !helt.død && Math.hypot(helt.x - e.x, helt.z - e.z) < fang) { e.væk = true; this.fang(e); }
    }
    for (const e of this.liste) if (e.væk) this.spil.verden.scene.remove(e.rod);
    this.liste = this.liste.filter((e) => !e.væk);
    this.opdaterKreds(dt, hal);
  }

  // The Memory modtager ekkoet: guld, og verden kommer tættere på Opvågningen
  ankom(e) {
    this.spil.memory.modtagEkko?.(e.vægt);
    this.spil.verdenstilstand?.ekko(e.vægt);
  }

  fang(e) {
    const h = this.spil.helt;
    h.mana = Math.min(h.manaMax, h.mana + 18 * e.vægt);
    h.fåXp(8 * e.vægt);
    this.fanget += e.vægt;
    bus.emit('flydetekst', { enhed: h, tekst: 'Echo caught', klasse: 'ekko' });
    bus.emit('effekt', { type: 'samlet', x: e.x, z: e.z, farve: 0xbfe4ff });
    if (this.tid - this.sidstStump > 25) {
      this.sidstStump = this.tid;
      bus.emit('krønike', { titel: 'An echo remembers…', tekst: EKKO_STUMPER[this.stump++ % EKKO_STUMPER.length], x: e.x, z: e.z, farve: '#bfe4ff', varighed: 14 });
    }
  }

  // Jo flere ekkoer The Memory har samlet, jo flere lys kredser om tronen
  opdaterKreds(dt, hal) {
    const ønsket = hal ? Math.min(KREDS_MAKS, Math.ceil((this.spil.memory.ekkoer ?? 0) / 2)) : 0;
    while (this.kreds.length < ønsket) { const g = glød(0xbfe4ff, 1.6, 0.8); this.spil.verden.scene.add(g); this.kreds.push({ g, v: Math.random() * 6, r: 6 + Math.random() * 5, h: 4 + Math.random() * 5 }); }
    while (this.kreds.length > ønsket) this.spil.verden.scene.remove(this.kreds.pop().g);
    if (!hal) return;
    const vis = this.spil.taage.erSynlig(hal.x, hal.z);
    for (const k of this.kreds) {
      k.v += dt * 0.5;
      k.g.position.set(hal.x + Math.cos(k.v) * k.r, k.h + Math.sin(this.tid + k.v) * 0.6, hal.z + Math.sin(k.v) * k.r);
      k.g.visible = vis;
    }
  }

  gem() { return { fanget: this.fanget, stump: this.stump }; }
  gendan(g) { if (g) { this.fanget = g.fanget ?? 0; this.stump = g.stump ?? 0; } }
}
