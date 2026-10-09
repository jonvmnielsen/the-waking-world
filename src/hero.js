// Helten (The Tide — Orc Warrior): bevægelse, angreb, level og genoplivning.
import { Unit } from './unit.js';
import { HELT, LEVELS, reducérSkade, tilfældig } from './config.js';
import { Evner } from './abilities.js';
import { bus } from './events.js';
import { gørOrkGrøn } from './orkhud.js';

const SKJUL = ['1H_Axe', '1H_Axe_Offhand', 'Barbarian_Round_Shield', 'Mug', 'Barbarian_Hat'];
const SVING = [
  { anim: '2H_Melee_Attack_Chop', slag: 0.48 },
  { anim: '2H_Melee_Attack_Slice', slag: 0.42 },
];

export class Helt extends Unit {
  constructor(verden, spawn, essens) {
    super(verden, 'units/hero_tide', { skjul: SKJUL, radius: 0.75 });
    gørOrkGrøn(this.model);
    this.spawn = spawn;
    this.stats = { ...HELT };
    this.maxHp = this.stats.maxHp;
    this.hp = this.maxHp;
    this.mana = this.stats.mana;
    this.fart = this.stats.fart;
    this.level = 1;
    this.xp = 0;
    this.evner = new Evner(this, essens);
    this.mål = null;
    this.cooldown = 0;
    this.sving = null;        // igangværende slag { tid, slagTid, mål, ramt }
    this.sidstIKamp = -99;
    this.tid = 0;
    this.genopliv = 0;
    this.rod.position.set(spawn.x, 0, spawn.z);
    this.spil('Idle');
  }

  // Spillerens kommandoer
  kommandoGå(x, z) {
    if (this.død) return false;
    this.mål = null; this.sving = null;
    return this.gåTil(x, z);
  }

  kommandoAngrib(creep) {
    if (this.død || creep.død) return;
    this.mål = creep;
  }

  get iKamp() { return this.tid - this.sidstIKamp < 3; }

  angrebsTid() { return this.stats.angrebsTid / (1 + this.evner.angrebsBonus()); }

  slagSkade() { return tilfældig(this.stats.skadeMin, this.stats.skadeMax); }

  opdater(dt) {
    this.tid += dt;
    super.opdater(dt);
    if (this.død) {
      this.genopliv -= dt;
      if (this.genopliv <= 0) this.rejsDig();
      return;
    }
    this.evner.opdater(dt);
    this.cooldown -= dt;
    if (!this.iKamp) this.hp = Math.min(this.maxHp, this.hp + this.stats.hpRegen * dt);
    this.mana = Math.min(this.stats.mana, this.mana + this.stats.manaRegen * dt);

    if (this.mål?.død) this.mål = null;
    if (!this.mål && !this.bevæger && !this.sving) this.mål = this.findAngriber();
    if (this.sving) this.opdaterSving(dt);
    else if (this.mål) this.forfølg(dt);
    else this.opdaterBevægelse(dt);

    if (!this.sving) {
      if (this.bevæger) this.spil('Running_A', { fart: 1.1 });
      else if (!this.mål) this.spil(this.iKamp ? '2H_Melee_Idle' : 'Idle');
    }
  }

  forfølg(dt) {
    const d = this.afstand(this.mål) - this.mål.radius;
    if (d > this.stats.rækkevidde) {
      this.genberegn = (this.genberegn ?? 0) - dt;
      if (this.genberegn <= 0 || !this.bevæger) { this.gåTil(this.mål.x, this.mål.z); this.genberegn = 0.3; }
      this.opdaterBevægelse(dt);
      return;
    }
    this.stop();
    this.vend(this.mål.x, this.mål.z);
    if (this.cooldown <= 0) this.startSving();
    else this.spil('2H_Melee_Idle');
  }

  startSving() {
    const s = SVING[Math.floor(Math.random() * SVING.length)];
    const varighed = Math.min(1.1, this.angrebsTid() * 0.75);
    const klip = this.handlinger.get(s.anim).getClip().duration;
    this.spil(s.anim, { loop: false, fart: klip / varighed, gentag: true, fade: 0.08 });
    this.sving = { tid: 0, varighed, slagTid: varighed * s.slag, mål: this.mål, ramt: false };
    this.cooldown = this.angrebsTid();
    this.sidstIKamp = this.tid;
  }

  opdaterSving(dt) {
    const s = this.sving;
    s.tid += dt;
    if (s.mål && !s.mål.død) this.vend(s.mål.x, s.mål.z);
    if (!s.ramt && s.tid >= s.slagTid) {
      s.ramt = true;
      if (s.mål && !s.mål.død && this.afstand(s.mål) - s.mål.radius <= this.stats.rækkevidde * 1.5) {
        const skade = this.evner.slagMultiplikator(this.slagSkade());
        s.mål.tagSkade(reducérSkade(skade, s.mål.rustning ?? 0), this);
        bus.emit('slag', { kilde: this, mål: s.mål });
      }
    }
    if (s.tid >= s.varighed) this.sving = null;
  }

  // Creeps der angriber helten bliver automatisk mål, når helten står stille
  findAngriber() {
    let bedst = null, bd = 6;
    for (const c of this.verden.creeps) {
      if (c.død || c.mål !== this) continue;
      const d = this.afstand(c);
      if (d < bd) { bd = d; bedst = c; }
    }
    return bedst;
  }

  tagSkade(mængde, kilde) {
    if (this.evner.erUdødelig()) mængde = 0;
    this.sidstIKamp = this.tid;
    return super.tagSkade(reducérSkade(mængde, this.stats.rustning + this.evner.rustningsBonus()), kilde);
  }

  dø() {
    super.dø();
    this.mål = null; this.sving = null;
    this.spil('Death_A', { loop: false, fade: 0.1 });
    this.genopliv = this.stats.genopliv;
    bus.emit('helt_død', { helt: this });
  }

  rejsDig() {
    this.død = false;
    this.hp = this.maxHp;
    this.mana = this.stats.mana;
    this.rod.position.set(this.spawn.x, 0, this.spawn.z);
    this.spil('Cheer', { loop: false, gentag: true });
    this.sving = { tid: 0, varighed: 1.4, slagTid: 99, ramt: true };
    bus.emit('helt_genoplivet', { helt: this });
  }

  fåXp(mængde) {
    const tabel = LEVELS.xp;
    this.xp += mængde;
    while (this.level < tabel.length && this.xp >= tabel[this.level]) this.levelOp();
  }

  levelOp() {
    this.level += 1;
    const i = this.level - 1;
    this.maxHp += LEVELS.hpBonus[i];
    this.hp = Math.min(this.maxHp, this.hp + LEVELS.hpBonus[i]);
    this.stats.skadeMin += LEVELS.skadeBonus[i];
    this.stats.skadeMax += LEVELS.skadeBonus[i];
    this.stats.rustning += LEVELS.rustBonus[i];
    bus.emit('level_op', { helt: this, level: this.level });
  }

  // Fremgang mod næste level (0-1)
  xpProcent() {
    const t = LEVELS.xp;
    if (this.level >= t.length) return 1;
    return Math.min(1, (this.xp - t[this.level - 1]) / (t[this.level] - t[this.level - 1]));
  }
}
