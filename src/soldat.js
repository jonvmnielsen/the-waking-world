// The Tides soldater (M4): grunts og spydkastere. Går, angriber, angriber selv det der truer dem
// eller deres allierede, og bliver veteraner ved at overleve (veteran.js). Grenenes evner: soldatevner.js.
import { Unit } from './unit.js';
import { gørOrkGrøn } from './orkhud.js';
import { SOLDATER } from './soldatdata.js';
import { ENHEDER } from './bygningsdata.js';
import { reducérSkade, tilfældig } from './config.js';
import { findTrussel } from './trussel.js';
import { evneMetoder } from './soldatevner.js';
import { bus } from './events.js';

export class Soldat extends Unit {
  constructor(verden, base, type, x, z) {
    const d = SOLDATER[type];
    super(verden, d.model, { skala: d.skala, skjul: d.skjul, våben: d.våben ?? {}, våbenSkala: d.våbenSkala ?? 1, radius: d.radius });
    gørOrkGrøn(this.model);
    Object.assign(this, { base, type, data: d, navn: d.navn, side: 'egen' });
    this.maxHp = this.hp = d.hp;
    this.fart = d.fart; this.rustning = d.rustning; this.skadeBonus = 0;
    this.mål = null; this.sving = null; this.cooldown = 0; this.gåOrdre = false; this.angrebsOrdre = false;
    this.tid = 0; this.sidstIKamp = -99; this.angribere = new Map();
    this.vet = { xp: 0, veteran: false, gren: null };
    this.evne = { cd: 0, storm: 0, raseri: 0 };
    this.rod.position.set(x, 0, z);
    this.spil('Cheer', { loop: false });
    this.timer = 1.2;
  }

  get iKamp() { return this.tid - this.sidstIKamp < 5; }

  // --- Kommandoer ---
  kommandoGå(x, z) {
    if (this.død || this.evne.raseri > 0) return false;
    this.mål = null; this.angrebsOrdre = false; this.hen = null;
    this.gåOrdre = this.gåTil(x, z);
    bus.emit('soldat_ordre', { soldat: this, type: 'gå' });
    return this.gåOrdre;
  }

  kommandoAngrib(c) {
    if (this.død || c.død || this.evne.raseri > 0) return;
    this.mål = c; this.angrebsOrdre = true; this.gåOrdre = false; this.hen = null;
    bus.emit('soldat_ordre', { soldat: this, type: 'angrib', mål: c });
  }

  // Gå hen til et sted og gør noget (fx specialisering i Krigerlejren)
  kommandoHen(x, z, radius, udfør) {
    if (!this.kommandoGå(x, z) && Math.hypot(x - this.x, z - this.z) > radius) return false;
    this.hen = { x, z, radius, udfør };
    return true;
  }

  stopOrdre() { this.stop(); this.mål = null; this.gåOrdre = false; this.angrebsOrdre = false; this.hen = null; }

  // --- Opdatering ---
  opdater(dt) {
    this.tid += dt;
    super.opdater(dt);
    if (this.død) return this.opdaterDød(dt);
    this.cooldown -= dt;
    this.opdaterEvner(dt);
    if (!this.iKamp) this.hp = Math.min(this.maxHp, this.hp + this.maxHp * 0.004 * dt);
    if (this.mål?.død || this.mål?.tilstand === 'hjem') { this.mål = null; this.angrebsOrdre = false; }
    if (this.hen && Math.hypot(this.hen.x - this.x, this.hen.z - this.z) <= this.hen.radius) {
      const h = this.hen; this.hen = null; this.stop(); this.gåOrdre = false; h.udfør();
    }
    if (this.gåOrdre && !this.bevæger) { this.gåOrdre = false; this.hen = null; }
    if (!this.mål && !this.gåOrdre && !this.sving) this.mål = findTrussel(this, 15, this.angribere, this.tid) ?? this.nærFjende();

    if (this.sving) this.opdaterSving(dt);
    else if (this.mål && !this.gåOrdre) this.forfølg(dt);
    else this.opdaterBevægelse(dt);

    this.timer -= dt;
    if (!this.sving && this.timer <= 0) {
      if (this.bevæger) this.spil(this.data.løb, { fart: this.fart / 4.4 });
      else this.spil(this.data.idle);
    }
  }

  // Vågne fjender helt tæt på angribes også (sovende lejre lades i fred)
  nærFjende() {
    let bedst = null, bd = this.data.rækkevidde + 3;
    for (const c of this.verden.creeps) {
      if (c.død || !c.rod.visible || (c.tilstand !== 'jagt' && !c.erBygning)) continue;
      const d = this.afstand(c) - (c.erBygning ? c.radius : 0);
      if (d < bd) { bd = d; bedst = c; }
    }
    return bedst;
  }

  forfølg(dt) {
    const m = this.mål, d = this.afstand(m) - m.radius;
    if (d > this.data.rækkevidde) {
      this.genberegn = (this.genberegn ?? 0) - dt;
      if (this.genberegn <= 0 || !this.bevæger) { this.gåTil(m.x, m.z); this.genberegn = 0.35; }
      this.opdaterBevægelse(dt);
      return;
    }
    this.stop();
    this.vend(m.x, m.z);
    if (this.cooldown <= 0) this.startSving();
  }

  startSving() {
    const anim = this.data.angreb[Math.floor(Math.random() * this.data.angreb.length)];
    const varighed = Math.min(1.0, this.data.angrebsTid * 0.7);
    const klip = this.handlinger.get(anim)?.getClip().duration ?? 1;
    this.spil(anim, { loop: false, fart: klip / varighed, gentag: true, fade: 0.08 });
    this.sving = { tid: 0, varighed, slagTid: varighed * this.data.slag, mål: this.mål, ramt: false };
    this.cooldown = this.data.angrebsTid;
    this.sidstIKamp = this.tid;
  }

  slagSkade() {
    let s = tilfældig(...this.data.skade) + this.skadeBonus;
    const v = this.vet.gren?.variation;
    if (v) s *= 1 + (Math.random() * 2 - 1) * v;
    return Math.max(1, Math.round(s * this.slagFaktor()));
  }

  opdaterSving(dt) {
    const s = this.sving;
    s.tid += dt;
    if (s.mål && !s.mål.død) this.vend(s.mål.x, s.mål.z);
    if (!s.ramt && s.tid >= s.slagTid) {
      s.ramt = true;
      const m = s.mål;
      if (m && !m.død) {
        const skade = reducérSkade(this.slagSkade(), m.rustning ?? 0);
        if (this.data.projektil) bus.emit('projektil', { fra: this, mål: m, skade, model: 'spyd' });
        else if (this.afstand(m) - m.radius <= this.data.rækkevidde * 1.5) { m.tagSkade(skade, this); this.vedSlag(m, skade); }
      }
    }
    if (s.tid >= s.varighed) this.sving = null;
  }

  tagSkade(mængde, kilde) {
    this.sidstIKamp = this.tid;
    if (kilde && kilde !== this) this.angribere.set(kilde, this.tid);
    return super.tagSkade(reducérSkade(mængde, this.rustning), kilde);
  }

  dø(kilde) {
    super.dø(kilde);
    this.mål = null; this.sving = null; this.gåOrdre = false;
    this.spil('Death_A', { loop: false, fade: 0.08 });
    this.forsvind = 5;
    this.base.økonomi.forsyning -= ENHEDER[this.type].forsyning;
    bus.emit('soldat_død', { soldat: this, kilde });
  }

  opdaterDød(dt) {
    this.forsvind -= dt;
    if (this.forsvind < 1.5) this.rod.position.y -= dt * 0.8;
    if (this.forsvind <= 0 && !this.fjernet) { this.fjernet = true; this.fjern(); }
  }
}

Object.assign(Soldat.prototype, evneMetoder);

// Hvor langt en soldat kan se (krigens tåge)
export const SOLDAT_SYN = 16;
