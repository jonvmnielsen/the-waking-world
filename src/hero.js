// Helten (The Tide — Orc Warrior): bevægelse, angreb, level og genoplivning.
import { Unit } from './unit.js';
import { HELT, reducérSkade, tilfældig } from './config.js';
import { Evner } from './abilities.js';
import { bus } from './events.js';
import { gørOrkGrøn } from './orkhud.js';
import { Inventar } from './inventar.js';
import { levelMetoder } from './heltlevel.js';
import { interaktionMetoder } from './heltinteraktion.js';
import { findTrussel } from './trussel.js';
import { egenskabsMetoder, EGENSKABER } from './heltstats.js';

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
    this.startEgenskaber(essens);
    this.inventar = new Inventar(this);
    this.handling = null;          // gå hen og gør noget: { x, z, radius, udfør }
    this.skjult = 0;               // sekunder hvor creeps ikke ser helten (røgbombe)
    this.maxHp = this.stats.grundHp;
    this.hp = this.maxHp;
    this.mana = this.manaMax;
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
    this.angribere = new Map();   // fjende -> tidspunkt den sidst ramte helten
    this.gåOrdre = false;         // spilleren har sendt helten et sted hen (ingen auto-angreb undervejs)
    this.rod.position.set(spawn.x, 0, spawn.z);
    this.spil('Idle');
  }

  // Spillerens kommandoer
  kommandoGå(x, z) {
    if (this.død) return false;
    this.mål = null; this.sving = null; this.handling = null;
    this.gåOrdre = this.gåTil(x, z);
    return this.gåOrdre;
  }

  kommandoAngrib(creep) {
    if (this.død || creep.død) return;
    this.mål = creep;
    this.gåOrdre = false;
    this.handling = null;
  }

  // Liv og mana inkl. bonusser fra items
  get maxHp() { return (this.basisHp ?? 100) + (this.inventar?.bonus.hp ?? 0) + (this.egenskaber ? this.egenskab('str') * EGENSKABER.pr.hp : 0); }
  set maxHp(v) { this.basisHp = v; }
  get manaMax() { return this.stats.mana + this.inventar.bonus.mana + this.egenskab('int') * EGENSKABER.pr.mana; }

  get iKamp() { return this.tid - this.sidstIKamp < 3; }

  angrebsTid() { return this.stats.angrebsTid / (1 + this.evner.angrebsBonus() + this.angrebsfartBonus()); }

  slagSkade() { return tilfældig(this.stats.skadeMin, this.stats.skadeMax) + this.egenskabsSkade() + this.inventar.bonus.skade; }

  opdater(dt) {
    this.tid += dt;
    super.opdater(dt);
    if (this.død) {
      this.genopliv -= dt;
      if (this.genopliv <= 0) this.rejsDig();
      return;
    }
    this.evner.opdater(dt);
    this.inventar.opdater(dt);
    this.cooldown -= dt;
    this.skjult = Math.max(0, this.skjult - dt);
    if (!this.iKamp) this.hp = Math.min(this.maxHp, this.hp + this.hpRegen() * dt);
    this.mana = Math.min(this.manaMax, this.mana + this.manaRegen() * dt);
    this.opdaterHandling();

    if (this.mål?.død) this.mål = null;
    if (this.gåOrdre && !this.bevæger) this.gåOrdre = false;
    // Auto-angreb: står helten frit, går den efter den nærmeste fjende der angriber den
    if (!this.mål && !this.gåOrdre && !this.sving) this.mål = this.findTrussel();
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
        const skade = reducérSkade(this.evner.slagMultiplikator(this.slagSkade()), s.mål.rustning ?? 0);
        s.mål.tagSkade(skade, this);
        this.inventar.vedSlag(s.mål, skade);
        bus.emit('slag', { kilde: this, mål: s.mål });
      }
    }
    if (s.tid >= s.varighed) { this.sving = null; s.vedSlut?.(); }
  }

  // Nærmeste fjende der angriber helten eller en allieret (trussel.js)
  findTrussel() { return findTrussel(this, 18, this.angribere, this.tid); }

  tagSkade(mængde, kilde) {
    if (this.evner.erUdødelig()) mængde = 0;
    this.sidstIKamp = this.tid;
    if (kilde && kilde !== this) this.angribere.set(kilde, this.tid);
    if (mængde > 0) mængde = this.inventar.vedSkade(mængde, kilde);
    return super.tagSkade(reducérSkade(mængde, this.rustning() + this.evner.rustningsBonus()), kilde);
  }

  dø() {
    super.dø();
    this.mål = null; this.sving = null; this.gåOrdre = false; this.handling = null; this.angribere.clear();
    this.spil('Death_A', { loop: false, fade: 0.1 });
    this.genopliv = this.stats.genopliv;
    bus.emit('helt_død', { helt: this });
  }

  rejsDig() {
    this.død = false;
    this.hp = this.maxHp;
    this.mana = this.manaMax;
    this.rod.position.set(this.spawn.x, 0, this.spawn.z);
    this.spil('Cheer', { loop: false, gentag: true });
    this.sving = { tid: 0, varighed: 1.4, slagTid: 99, ramt: true };
    bus.emit('helt_genoplivet', { helt: this });
  }
}

// Erfaring og level ligger i heltlevel.js; gå-hen-og-gør-noget i heltinteraktion.js
Object.assign(Helt.prototype, levelMetoder, interaktionMetoder, egenskabsMetoder);
