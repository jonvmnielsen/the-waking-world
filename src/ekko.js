// Ekkoer (M8, M14d): The Memory er ånder, der ikke kan glemme. Når noget dør, stiger dets ekko op som en
// sølvblå lysplet og driver mod Erevoss. Hvert ekko gør The Memory rigere og stærkere — og fordi hvert minde
// rummer en stump af Den Unavngivnes navn, kommer Opvågningen tættere.
// Ekkoerne ER ånderne (Jon): helten fanger dem ved at komme tæt på, før de når Erevoss, og bærer dem hjem
// til alteret (aander.js). Et fanget ekko giver ånder, lidt mana og erfaring — og The Memory får det ikke.
// Dør helten, falder de ånder, den bærer, som ét gyldent ekko, der bliver hængende, hvor helten faldt.
// Fjendens soldater, der kommer forbi, æder det; efter tre minutter driver det også mod Erevoss.
// Uden Erevoss (eller under jorden) svæver ekkoerne, hvor de opstod, og blegner efter et minut.
import * as THREE from 'three';
import { bus } from './events.js';
import { glød } from './aand.js';
import { erIHule } from './hulegen.js';
import { EKKO_STUMPER } from './verdenslore.js';

const FART = 4.5, FANG = 5, KREDS_MAKS = 24, STIG = 2.5, SVÆV = 60, TABT_TID = 180, ÆD = 3.2;

export class Ekkoer {
  constructor(spil) {
    this.spil = spil;
    this.liste = [];
    this.fanget = 0; this.stump = 0; this.sidstStump = -99; this.tid = 0;
    this.kreds = [];   // ekkoer der kredser om Erevoss' trone
    bus.on('creep_død', ({ creep }) => { if (!creep.erBygning) this.ny(creep.x, creep.z, creep.boss ? 3 : 1, spil.ånder?.antal(creep) ?? 1); });
    bus.on('soldat_død', ({ soldat }) => this.ny(soldat.x, soldat.z, 1, 1));
    bus.on('helt_død', ({ helt }) => {
      const båret = spil.ånder?.tabAlt(helt) ?? 0;   // det helten bar, falder med den
      this.ny(helt.x, helt.z, 3, båret, båret > 0);
    });
  }

  get hal() { const m = this.spil.memory; return m && !m.hal.død ? m.hal : null; }

  // vægt = hvor meget det betyder for The Memory; ånder = hvad helten får ved at fange det
  ny(x, z, vægt, ånder, tabt = false) {
    vægt *= this.spil.verden.mod?.ekko ?? 1;   // dobbelt så stærke under en formørkelse
    const rod = new THREE.Group();
    const str = Math.min(2.4, Math.sqrt(Math.max(1, ånder)) * 0.35);
    const farve = tabt ? 0xffd98a : 0x8fc8ff;
    rod.add(glød(farve, 1.1 + vægt * 0.3 + str, 0.85), glød(tabt ? 0xfff2cc : 0xe8f4ff, 0.45 + vægt * 0.1 + str * 0.4));
    rod.position.set(x, 1.2, z);
    this.spil.verden.scene.add(rod);
    this.liste.push({ rod, x, z, tid: 0, vægt, ånder, tabt, fase: Math.random() * 6, hule: erIHule(x) });
  }

  opdater(dt) {
    this.tid += dt;
    const hal = this.hal, helt = this.spil.helt, taage = this.spil.taage;
    const fang = FANG * (1 + (helt.inventar?.bonus.ekko ?? 0));
    const fjender = this.spil.modstander?.levende ?? [];
    for (const e of this.liste) {
      e.tid += dt;
      const svæver = e.tabt ? e.tid < TABT_TID : (!hal || e.hule);
      if (e.tid < STIG) e.rod.position.y = 1.2 + (e.tid / STIG) * 2.4;
      else if (svæver) {
        e.rod.position.set(e.x, 3.6 + Math.sin(e.tid * 2.3 + e.fase) * 0.35, e.z);
        if (!e.tabt && e.tid > SVÆV) { e.væk = true; continue; }   // uden Erevoss blegner det
      } else if (hal) {
        const dx = hal.x - e.x, dz = hal.z - e.z, d = Math.hypot(dx, dz);
        if (d < 6) { e.væk = true; this.ankom(e); continue; }
        // Driver mod tronen i en blød bølge
        const b = Math.sin(e.tid * 1.7 + e.fase) * 0.9;
        e.x += ((dx / d) * FART + (-dz / d) * b) * dt; e.z += ((dz / d) * FART + (dx / d) * b) * dt;
        e.rod.position.set(e.x, 3.6 + Math.sin(e.tid * 2.3 + e.fase) * 0.35, e.z);
      } else if (e.tid > TABT_TID + SVÆV) { e.væk = true; continue; }
      e.rod.visible = taage.erSynlig(e.x, e.z);
      if (e.tid > 0.6 && !helt.død && Math.hypot(helt.x - e.x, helt.z - e.z) < fang) { e.væk = true; this.fang(e); continue; }
      // Fjendens soldater æder de ånder, helten tabte
      if (e.tabt && fjender.some((f) => !f.død && Math.hypot(f.x - e.x, f.z - e.z) < ÆD)) {
        e.væk = true;
        bus.emit('effekt', { type: 'samlet', x: e.x, z: e.z, farve: 0xff3a2a });
        bus.emit('besked', 'The enemy has devoured the spirits your hero lost');
      }
    }
    for (const e of this.liste) if (e.væk) this.spil.verden.scene.remove(e.rod);
    this.liste = this.liste.filter((e) => !e.væk);
    this.opdaterKreds(dt, hal);
  }

  get tabte() { return this.liste.filter((e) => e.tabt); }

  // The Memory modtager ekkoet: guld, og verden kommer tættere på Opvågningen
  ankom(e) {
    this.spil.memory.modtagEkko?.(e.vægt);
    this.spil.verdenstilstand?.ekko(e.vægt);
  }

  fang(e) {
    const h = this.spil.helt;
    h.mana = Math.min(h.manaMax, h.mana + 12 * e.vægt);
    h.fåXp(5 * e.vægt);
    this.fanget += e.vægt;
    this.spil.ånder?.saml(e.ånder);
    bus.emit('flydetekst', { enhed: h, tekst: e.tabt ? `${e.ånder} spirits recovered` : 'Echo caught', klasse: 'ekko' });
    if (e.ånder) bus.emit('flydetekst', { enhed: h, tekst: `+${e.ånder} spirit${e.ånder === 1 ? '' : 's'}`, klasse: 'ekko' });
    bus.emit('effekt', { type: 'samlet', x: e.x, z: e.z, farve: e.tabt ? 0xffd98a : 0xbfe4ff });
    if (!e.tabt && this.tid - this.sidstStump > 25) {
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
