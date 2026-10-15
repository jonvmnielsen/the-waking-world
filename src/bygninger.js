// Spillerens bygninger: byggeplads med stadier → færdig bygning med sin funktion
// (forsyning, aflevering, træning, tårn, alter, butik). Se bygningsdata.js.
import { kopi } from './assets.js';
import { BYGNINGER, ENHEDER, STADIER } from './bygningsdata.js';
import { VERDEN, tilfældig, reducérSkade } from './config.js';
import { bus } from './events.js';
import { BYG_SKALA, frigør } from './byggeplads.js';

const S = VERDEN.hexSkala;

export class Bygning {
  constructor(base, type, { x, z, felter, plads = -1, rot = 0, færdig = false }) {
    this.base = base; this.verden = base.verden;
    this.type = type; this.data = BYGNINGER[type];
    this.x = x; this.z = z; this.felter = felter; this.plads = plads; this.rot = rot;
    this.stor = plads < 0;
    this.radius = this.stor ? 5.5 : 3.2;   // til rækkevidde og valg
    this.fod = this.stor ? 5 : 2.3;        // hvor meget den fylder (figurer går uden om)
    this.højde = this.stor ? 6 : 4;
    this.pladsSkala = this.stor ? 1.6 : 0.75;   // byggepladsens stadier og ruinen
    this.side = 'egen';
    this.fremskridt = færdig ? 1 : 0;
    this.færdig = false;
    this.kø = [];                  // træning: [{ type, tid }]
    this.cooldown = 0;
    this.død = false;
    bus.emit('bygning_ny', { bygning: this });   // fx fjerner bunddækket under den
    // Liv: en byggeplads starter med 10 % og vokser mens den bygges (som i WC3)
    this.grundHp = this.data.hp ?? 900; this.ekstraHp = 0;
    this.grundRustning = this.type === 'storlejr' || this.type === 'borg' ? 5 : this.type === 'tårn' ? 4 : 3;
    this.hp = færdig ? this.maxHp : this.maxHp * 0.1;
    this.rod = null;
    this.visModel(færdig ? this.data.model : STADIER[0], færdig ? this.data.skala : this.pladsSkala);
    if (færdig) this.bliverFærdig(true);
  }

  // Liv og rustning inkl. opgraderinger og Masonry (udvikling.js)
  get maxHp() { return Math.round((this.grundHp + this.ekstraHp) * (1 + (this.verden.udvikling?.bygHp() ?? 0))); }
  get rustning() { return this.grundRustning + (this.verden.udvikling?.bygRustning() ?? 0); }

  get skadet() { return this.hp < this.maxHp - 0.5; }

  visModel(sti, skala) {
    if (this.rod) this.verden.scene.remove(this.rod);
    this.rod = kopi(sti, { skygge: true });
    this.rod.position.set(this.x, 0, this.z);
    this.rod.rotation.y = this.rot;
    this.rod.scale.setScalar(S * skala * BYG_SKALA);
    this.verden.scene.add(this.rod);
    this.stadie = sti;
    if (sti === this.data.model) this.verden.udvikling?.pynt(this);   // flag og tårne på opgraderede bygninger
  }

  // En arbejder bygger (eller reparerer) i dt sekunder
  byg(dt) {
    if (this.død) return;
    if (this.færdig) { this.hp = Math.min(this.maxHp, this.hp + (this.maxHp * dt) / (this.data.tid * 1.5)); return; }
    this.fremskridt = Math.min(1, this.fremskridt + dt / this.data.tid);
    this.hp = Math.min(this.maxHp, this.hp + (this.maxHp * 0.9 * dt) / this.data.tid);
    const stadie = STADIER[Math.min(2, Math.floor(this.fremskridt * 3))];
    if (this.fremskridt < 1 && stadie !== this.stadie) this.visModel(stadie, this.pladsSkala);
    if (this.fremskridt >= 1) this.bliverFærdig(false);
  }

  bliverFærdig(stille) {
    this.færdig = true;
    this.visModel(this.data.model, this.data.skala);
    const øko = this.base.økonomi;
    if (this.data.forsyning) øko.forsyningMaks += this.data.forsyning;
    this.verden.taage.tilføjKilde(this.x, this.z, this.data.syn ?? 16);
    this.tågeKilde = this.verden.taage.kilder[this.verden.taage.kilder.length - 1];
    if (this.data.alter) this.verden.helt.spawn = { x: this.x + 4, z: this.z + 6 };
    if (!stille) {
      bus.emit('effekt', { type: 'kiste', x: this.x, z: this.z });
      bus.emit('besked', `${this.data.navn} is complete`);
    }
    bus.emit('bygning_færdig', { bygning: this });
  }

  // Skade fra The Memory. Ved 0 liv falder bygningen og efterlader en ruin.
  tagSkade(mængde, kilde) {
    if (this.død) return false;
    const skade = reducérSkade(mængde, this.rustning);
    this.hp = Math.max(0, this.hp - skade);
    bus.emit('skade', { mål: this, mængde: skade, kilde });
    bus.emit('bygning_angrebet', { bygning: this, kilde });
    if (this.hp <= 0) { this.ødelæg(); return true; }
    return false;
  }

  ødelæg(stille = false) {
    this.død = true;
    const øko = this.base.økonomi;
    if (this.færdig && this.data.forsyning) øko.forsyningMaks -= this.data.forsyning;
    for (const k of this.kø) { øko.refunder(ENHEDER[k.type].pris, 0.5); øko.forsyning -= ENHEDER[k.type].forsyning; }
    this.kø = [];
    for (const f of this.felter) frigør(f, this.plads);
    const kilder = this.verden.taage.kilder;
    if (kilder.includes(this.tågeKilde)) kilder.splice(kilder.indexOf(this.tågeKilde), 1);
    this.visModel('kaykit-hexagon/buildings/neutral/building_destroyed', this.pladsSkala);
    if (stille) return;
    bus.emit('effekt', { type: 'stomp', x: this.x, z: this.z, radius: this.radius + 2 });
    bus.emit('bygning_ødelagt', { bygning: this });
    bus.emit('besked', `Your ${this.data.navn} has been destroyed!`);
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
    if (!this.færdig || this.død) return;
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
        const u = this.verden.udvikling, rk = a.rækkevidde + (u?.tårnRækkevidde() ?? 0);
        const mål = this.verden.creeps.filter((c) => !c.død && !c.erBygning && c.rod.visible && Math.hypot(c.x - this.x, c.z - this.z) < rk)
          .sort((p, q) => Math.hypot(p.x - this.x, p.z - this.z) - Math.hypot(q.x - this.x, q.z - this.z))[0];
        if (mål) {
          this.cooldown = a.tid;
          bus.emit('projektil', { fra: this.skytte(), mål, skade: Math.round(tilfældig(...a.skade) * (u?.tårnSkade() ?? 1)), farve: a.område ? 0xff8a3a : 0xffd27a, område: a.område });
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
    return { x: b.x, z: b.z, højde: 5.5, side: 'egen', afstand: (m) => Math.hypot(m.x - b.x, m.z - b.z) };
  }
}
