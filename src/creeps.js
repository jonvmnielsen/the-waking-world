// Neutrale creeps i lejre: vågner, jager spillerens figurer, giver op ved leash-grænsen. Guld og drop: genstande.js.
// Typer, familier og sværhedsgrader står i creepdata.js.
import { Unit } from './unit.js';
import { CREEP_AI, tilfældig } from './config.js';
import { creepStats, NIVEAUER } from './creepdata.js';
import { hexTilVerden } from './hexgrid.js';
import { bus } from './events.js';

export class Creep extends Unit {
  constructor(verden, type, level, lejr, hjem) {
    const d = creepStats(type, level);
    super(verden, `units/${d.model}`, { skala: d.skala ?? 1, våben: d.våben ?? {}, skjul: d.skjul ?? [], radius: 0.65 * (d.skala ?? 1) });
    this.anim = d.anim; this.level = level; this.boss = !!d.boss;
    this.type = type; this.data = d; this.lejr = lejr; this.hjem = hjem;
    this.navn = d.navn;
    this.maxHp = d.hp; this.hp = d.hp; this.fart = d.fart; this.rustning = d.rustning;
    this.tilstand = 'vågner';
    this.mål = null; this.cooldown = 0; this.sving = null; this.lammet = 0; this.forsvind = 0;
    this.rod.position.set(hjem.x, 0, hjem.z);
    this.rod.rotation.y = this.vinkelMål = Math.random() * Math.PI * 2;
    this.vågenTid = (this.anim.vågn && this.spil(this.anim.vågn, { loop: false })) || (this.spil(this.anim.idle), 0.3);
  }

  lam(sek) { if (!this.død) { this.lammet = Math.max(this.lammet, sek); this.sving = null; this.spil(this.anim.ramt, { loop: false, gentag: true }); } }

  vækLejr(mål) { for (const c of this.lejr.creeps) if (!c.død && c.tilstand === 'hvile') { c.tilstand = 'jagt'; c.mål = mål; } }

  // Spillerens figurer der kan ses og angribes (helt, arbejdere, soldater)
  egne() { return this.verden.egne?.() ?? [this.verden.helt].filter((h) => !h.død && !h.skjult); }

  gyldigt(m) { return m && !m.død && m.rod.visible !== false && !m.skjult; }

  // Hold fast i målet; skift til den nærmeste der står og slår, hvis målet er langt væk (spot fra Ironhide låser målet)
  vælgMål(dt) {
    this.spot = Math.max(0, (this.spot ?? 0) - dt);
    this.vælgTid = (this.vælgTid ?? 0) - dt;
    if (this.spot > 0 && this.gyldigt(this.mål)) return this.mål;
    if (!this.gyldigt(this.mål) || this.vælgTid <= 0) {
      this.vælgTid = 1;
      const nu = this.gyldigt(this.mål) ? this.afstand(this.mål) : Infinity;
      if (nu > this.data.rækkevidde + 4) {
        let bedst = null, bd = nu === Infinity ? CREEP_AI.aggro * 1.6 : this.data.rækkevidde + 3;
        for (const u of this.egne()) { const d = this.afstand(u); if (d < bd) { bd = d; bedst = u; } }
        if (bedst) this.mål = bedst;
        else if (nu === Infinity) this.mål = null;
      }
    }
    return this.mål;
  }

  opdater(dt) {
    // Creeps i tågen tegnes og animeres ikke (sparer kræfter på telefonen)
    const synlig = this.verden.taage.erSynlig(this.x, this.z);
    this.rod.visible = synlig;
    if (synlig || this.tilstand !== 'hvile') super.opdater(dt);
    if (this.død) return this.opdaterDød(dt);
    if (this.tilstand === 'vågner') {
      this.vågenTid -= dt;
      if (this.vågenTid <= 0) { this.tilstand = 'hvile'; this.spil(this.anim.idle); }
      return;
    }
    if (this.lammet > 0) { this.lammet -= dt; return; }
    this.cooldown -= dt;

    // Vågner når en af spillerens figurer kommer for tæt på lejren
    if (this.tilstand === 'hvile') {
      const ind = this.egne().find((u) => this.afstand(u) < CREEP_AI.aggro || Math.hypot(u.x - this.lejr.x, u.z - this.lejr.z) < CREEP_AI.aggro * 0.7);
      if (ind) {
        this.vækLejr(ind);
        this.spil(this.anim.råb, { loop: false, gentag: true });
        this.sving = { tid: 0, varighed: 0.6, slagTid: 99, ramt: true };
      }
    }
    if (this.sving) return this.opdaterSving(dt);

    if (this.tilstand === 'jagt') {
      const forLangt = Math.hypot(this.x - this.lejr.x, this.z - this.lejr.z) > CREEP_AI.leash;
      const m = this.vælgMål(dt);
      if (!m || forLangt) return this.gåHjem();
      const d = this.afstand(m) - m.radius;
      if (d > this.data.rækkevidde) {
        this.genberegn = (this.genberegn ?? 0) - dt;
        if (this.genberegn <= 0 || !this.bevæger) { this.gåTil(m.x, m.z); this.genberegn = 0.35; }
        this.opdaterBevægelse(dt);
        this.spil(this.anim.løb);
      } else {
        this.stop(); this.vend(m.x, m.z);
        if (this.cooldown <= 0) this.startSving(m); else this.spil(this.anim.idle);
      }
    } else if (this.tilstand === 'hjem') {
      this.hp = Math.min(this.maxHp, this.hp + this.maxHp * 0.4 * dt);
      this.opdaterBevægelse(dt);
      if (!this.bevæger) { this.tilstand = 'hvile'; this.hp = this.maxHp; this.spil(this.anim.idle); }
    }
  }

  gåHjem() {
    this.tilstand = 'hjem'; this.mål = null;
    this.gåTil(this.hjem.x, this.hjem.z);
    this.spil(this.anim.løb);
  }

  startSving(helt) {
    const klip = this.handlinger.get(this.data.angreb)?.getClip().duration ?? 1;
    const varighed = Math.min(klip, this.data.angrebsTid * 0.7);
    this.spil(this.data.angreb, { loop: false, fart: klip / varighed, gentag: true, fade: 0.08 });
    this.sving = { tid: 0, varighed, slagTid: varighed * 0.5, mål: helt, ramt: false };
    this.cooldown = this.data.angrebsTid;
  }

  opdaterSving(dt) {
    const s = this.sving;
    s.tid += dt;
    if (!s.ramt && s.tid >= s.slagTid) {
      s.ramt = true;
      const m = s.mål;
      if (m && !m.død) {
        const skade = tilfældig(...this.data.skade);
        if (this.data.projektil) bus.emit('projektil', { fra: this, mål: m, skade, farve: this.data.projektil });
        else if (this.afstand(m) - m.radius <= this.data.rækkevidde * 1.4) m.tagSkade(skade, this);
      }
    }
    if (s.tid >= s.varighed) this.sving = null;
  }

  tagSkade(mængde, kilde) {
    if (this.tilstand === 'hjem') return false;   // udødelige mens de løber hjem (som i WC3)
    if (this.tilstand === 'hvile' && kilde) this.vækLejr(kilde);
    if (this.tilstand === 'vågner' && kilde) { this.tilstand = 'jagt'; this.mål = kilde; }
    if (this.tilstand === 'jagt' && kilde && !this.gyldigt(this.mål)) this.mål = kilde;
    return super.tagSkade(mængde, kilde);
  }

  dø(kilde) {
    super.dø(kilde);
    this.sving = null;
    this.spil(this.anim.død, { loop: false, fade: 0.08 });
    this.forsvind = 5;
    bus.emit('creep_død', { creep: this, xp: this.data.xp, kilde });
  }

  opdaterDød(dt) {
    this.forsvind -= dt;
    if (this.forsvind < 1.5) this.rod.position.y -= dt * 0.8;   // synk ned i jorden
    if (this.forsvind <= 0 && !this.fjernet) { this.fjernet = true; this.fjern(); }
  }
}

export class Lejr {
  constructor(verden, data) {
    this.verden = verden; this.data = data;
    this.level = NIVEAUER[data.niveau].level;
    const p = hexTilVerden(data.q, data.r);
    this.x = p.x; this.z = p.z;
    this.creeps = [];
    this.tomTid = 0;
    this.spawn();
  }

  spawn() {
    const n = this.data.creeps.length;
    this.creeps = this.data.creeps.map((type, i) => {
      const v = (i / n) * Math.PI * 2 + 0.6;
      const hjem = { x: this.x + Math.cos(v) * 2.6 * (n > 1), z: this.z + Math.sin(v) * 2.6 * (n > 1) };
      return new Creep(this.verden, type, this.level, this, hjem);
    });
    this.verden.creeps.push(...this.creeps);
  }

  opdater(dt) {
    if (CREEP_AI.respawn == null || this.creeps.some((c) => !c.død)) return;
    this.tomTid += dt;
    if (this.tomTid >= CREEP_AI.respawn && this.creeps.every((c) => c.fjernet)) {
      this.tomTid = 0;
      this.verden.creeps = this.verden.creeps.filter((c) => !this.creeps.includes(c));
      this.spawn();
      bus.emit('lejr_vågner', { lejr: this });
    }
  }
}

