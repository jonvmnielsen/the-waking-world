// Spillerens bygninger: byggeplads med stadier → færdig bygning med sin funktion
// (forsyning, aflevering, træning, tårn, alter, butik). Se bygningsdata.js.
import { kopi } from './assets.js';
import { BYGNINGER, ENHEDER, STADIER } from './bygningsdata.js';
import { VERDEN, tilfældig } from './config.js';
import { bus } from './events.js';

const S = VERDEN.hexSkala;

export class Bygning {
  constructor(base, type, { x, z, felter, rot = 0, færdig = false }) {
    this.base = base; this.verden = base.verden;
    this.type = type; this.data = BYGNINGER[type];
    this.x = x; this.z = z; this.felter = felter; this.rot = rot;
    this.radius = felter.length > 1 ? 9 : 5.5;
    this.højde = 7;
    this.side = 'egen';
    this.fremskridt = færdig ? 1 : 0;
    this.færdig = false;
    this.kø = [];                  // træning: [{ type, tid }]
    this.cooldown = 0;
    this.død = false;
    this.rod = null;
    this.visModel(færdig ? this.data.model : STADIER[0], færdig ? this.data.skala : 1);
    if (færdig) this.bliverFærdig(true);
  }

  // Til livsbjælken over byggepladsen
  get hp() { return this.fremskridt; }
  get maxHp() { return 1; }

  visModel(sti, skala) {
    if (this.rod) this.verden.scene.remove(this.rod);
    this.rod = kopi(sti, { skygge: true });
    this.rod.position.set(this.x, 0, this.z);
    this.rod.rotation.y = this.rot;
    this.rod.scale.setScalar(S * skala);
    this.verden.scene.add(this.rod);
    this.stadie = sti;
  }

  // En arbejder bygger i dt sekunder
  byg(dt) {
    if (this.færdig) return;
    this.fremskridt = Math.min(1, this.fremskridt + dt / this.data.tid);
    const stadie = STADIER[Math.min(2, Math.floor(this.fremskridt * 3))];
    if (this.fremskridt < 1 && stadie !== this.stadie) this.visModel(stadie, 1);
    if (this.fremskridt >= 1) this.bliverFærdig(false);
  }

  bliverFærdig(stille) {
    this.færdig = true;
    this.visModel(this.data.model, this.data.skala);
    const øko = this.base.økonomi;
    if (this.data.forsyning) øko.forsyningMaks += this.data.forsyning;
    this.verden.taage.tilføjKilde(this.x, this.z, this.data.syn ?? 16);
    if (this.data.alter) this.verden.helt.spawn = { x: this.x + 4, z: this.z + 6 };
    if (!stille) {
      bus.emit('effekt', { type: 'kiste', x: this.x, z: this.z });
      bus.emit('besked', `${this.data.navn} is complete`);
    }
    bus.emit('bygning_færdig', { bygning: this });
  }

  // Sæt en enhed i træningskøen (højst 5)
  træn(type) {
    const e = ENHEDER[type], øko = this.base.økonomi;
    if (e.låst) return e.låst;
    if (!this.færdig) return 'The building is not finished';
    if (this.kø.length >= 5) return 'The queue is full';
    const mangler = øko.mangler(e.pris, e.forsyning);
    if (mangler) return mangler;
    øko.betal(e.pris);
    øko.forsyning += e.forsyning;
    this.kø.push({ type, tid: 0 });
    return null;
  }

  annullérTræning(i) {
    const k = this.kø[i];
    if (!k) return;
    const e = ENHEDER[k.type];
    this.kø.splice(i, 1);
    this.base.økonomi.refunder(e.pris);
    this.base.økonomi.forsyning -= e.forsyning;
  }

  opdater(dt) {
    if (!this.færdig) return;
    // Træning
    const k = this.kø[0];
    if (k) {
      k.tid += dt;
      if (k.tid >= ENHEDER[k.type].tid) { this.kø.shift(); this.base.vedTrænet?.(k.type, this); }
    }
    // Vagttårn skyder den nærmeste synlige fjende
    const a = this.data.angreb;
    if (a) {
      this.cooldown -= dt;
      if (this.cooldown <= 0) {
        const mål = this.verden.creeps.filter((c) => !c.død && c.rod.visible && Math.hypot(c.x - this.x, c.z - this.z) < a.rækkevidde)
          .sort((p, q) => Math.hypot(p.x - this.x, p.z - this.z) - Math.hypot(q.x - this.x, q.z - this.z))[0];
        if (mål) {
          this.cooldown = a.tid;
          bus.emit('projektil', { fra: this.skytte(), mål, skade: tilfældig(...a.skade), farve: 0xffd27a });
        }
      }
    }
    // Alteret heler helten
    const h = this.verden.helt;
    if (this.data.alter && !h.død && Math.hypot(h.x - this.x, h.z - this.z) < 12) h.hp = Math.min(h.maxHp, h.hp + h.maxHp * 0.03 * dt);
  }

  // Projektiler fra tårnet starter oppe i tårnet
  skytte() {
    const b = this;
    return { x: b.x, z: b.z, højde: 9, afstand: (m) => Math.hypot(m.x - b.x, m.z - b.z) };
  }
}
