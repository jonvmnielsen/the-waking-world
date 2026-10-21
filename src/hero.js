// Helten (heltedata.js: tre pr. race): bevægelse, angreb (nær eller på afstand), level og genoplivning.
import { Unit } from './unit.js';
import { HELT, reducérSkade, tilfældig } from './config.js';
import { Evner } from './abilities.js';
import { bus } from './events.js';
import { gørOrkGrøn, holdSkær } from './orkhud.js';
import { SPILLER, HOLD_FARVE, SPILLER_FARVE } from './racer.js';
import { HELTE, helteFor } from './heltedata.js';
import { Inventar } from './inventar.js';
import { levelMetoder } from './heltlevel.js';
import { interaktionMetoder } from './heltinteraktion.js';
import { findTrussel, jagtMetoder } from './trussel.js';
import { egenskabsMetoder, EGENSKABER } from './heltstats.js';
import { Ascension } from './ascension.js';
import { sætHold } from './holdfarve.js';
import { heltePræg, opdaterPræg } from './helteaura.js';
import { HeltUdstyr } from './heltudstyr.js';
import { Velsignelser } from './velsignelser.js';
import { natFart } from './natpraeg.js';


export class Helt extends Unit {
  constructor(verden, spawn, essens, heltId) {
    const def = HELTE[heltId]?.race === SPILLER.id ? HELTE[heltId] : helteFor(SPILLER.id)[0];
    super(verden, def.model, { skjul: def.skjul, radius: 0.75, våben: def.kamp.projektil === 'spyd' ? { r: 'kaykit-skeletons/skeleton_arrow' } : {}, våbenSkala: 2.4 });
    this.def = def; this.type = HELTE[heltId] === def ? heltId : Object.keys(HELTE).find((k) => HELTE[k] === def);
    if (SPILLER.orkhud) gørOrkGrøn(this.model);
    holdSkær(this.model, HOLD_FARVE[SPILLER_FARVE], SPILLER.orkhud ? 0.15 : 0.22);   // holdfarve, så to ens modeller kan skelnes
    this.spawn = spawn;
    this.stats = { ...HELT, rækkevidde: def.kamp.rækkevidde, angrebsTid: def.kamp.angrebsTid ?? HELT.angrebsTid, fart: HELT.fart + (def.fart ?? 0), grundHp: HELT.grundHp + (def.hp ?? 0) };
    this.startEgenskaber(essens, def);
    this.inventar = new Inventar(this);
    this.handling = null;          // gå hen og gør noget: { x, z, radius, udfør }
    this.skjult = 0;               // sekunder hvor creeps ikke ser helten (røgbombe)
    this.maxHp = this.stats.grundHp;
    this.hp = this.maxHp;
    this.mana = this.manaMax;
    this.fart = this.stats.fart;
    this.level = 1;
    this.skillpunkter = 1;   // det første point bruges på den første evne (evnerang.js)
    this.xp = 0;
    this.evner = new Evner(this, essens);
    this.sti = new Ascension(this);   // Ascension ved level 10
    this.velsignelser = new Velsignelser(this);   // alterets velsignelser for ofrede ånder
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
    sætHold(this, 'spiller');
    heltePræg(this, HOLD_FARVE[SPILLER_FARVE]);   // runecirkel, kappe i holdfarven og vækst med level
    this.udstyrVisning = new HeltUdstyr(this);    // våben, skjold og hjelm kan ses
  }

  // Spillerens kommandoer
  kommandoGå(x, z) {
    if (this.død) return false;
    this.mål = null; this.sving = null; this.handling = null; this.jagt = null;
    this.gåOrdre = this.gåTil(x, z);
    return this.gåOrdre;
  }

  kommandoAngrib(creep) {
    if (this.død || creep.død) return;
    this.mål = creep; this.jagt = null;
    this.gåOrdre = false;
    this.handling = null;
    bus.emit('helt_ordre', { type: 'angrib', mål: creep });
  }

  // Liv og mana inkl. bonusser fra items
  get maxHp() { return (this.basisHp ?? 100) + (this.inventar?.bonus.hp ?? 0) + (this.egenskaber ? this.egenskab('str') * EGENSKABER.pr.hp : 0); }
  set maxHp(v) { this.basisHp = v; }
  get manaMax() { return this.stats.mana + this.inventar.bonus.mana + this.egenskab('int') * EGENSKABER.pr.mana; }

  get iKamp() { return this.tid - this.sidstIKamp < 3; }

  angrebsTid() { return this.stats.angrebsTid / (1 + this.evner.angrebsBonus() + this.angrebsfartBonus()); }

  slagSkade() { return Math.round((tilfældig(this.stats.skadeMin, this.stats.skadeMax) + this.egenskabsSkade() + this.inventar.bonus.skade) * (this.def.kamp.type === 'fjern' ? 0.85 : 1)); }   // afstand: lidt mindre skade

  opdater(dt) {
    this.tid += dt;
    super.opdater(dt);
    opdaterPræg(this, dt);
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
    this.autoMål(dt, () => this.findTrussel());
    if (this.sving) this.opdaterSving(dt);
    else if (this.mål) this.forfølg(dt);
    else this.opdaterBevægelse(dt);

    if (!this.sving) {
      if (this.bevæger) this.spil('Running_A', { fart: 1.1 });
      else if (!this.mål) this.spil(this.iKamp ? this.def.kamp.kampIdle : 'Idle');
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
    else this.spil(this.def.kamp.kampIdle);
  }

  startSving() {
    const sv = this.def.kamp.sving, s = sv[Math.floor(Math.random() * sv.length)];
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
        let skade = reducérSkade(this.evner.slagMultiplikator(this.slagSkade() * this.sti.skadeFaktor(), s.mål), s.mål.rustning ?? 0);
        const b = this.inventar.bonus;
        if (b.krit && Math.random() < b.krit) { skade = Math.round(skade * (1.75 + b.kritSkade)); bus.emit('flydetekst', { enhed: s.mål, tekst: 'Critical!', klasse: 'immun' }); }   // kritisk slag
        // Helte på afstand skyder (lyn, spyd, bolt); skaden lander når skuddet rammer
        if (this.def.kamp.type === 'fjern') { const p = this.def.kamp.projektil; bus.emit('projektil', { fra: this, mål: s.mål, skade, farve: p === 'spyd' ? undefined : p, model: p === 'spyd' ? 'spyd' : undefined }); }
        else s.mål.tagSkade(skade, this);
        this.inventar.vedSlag(s.mål, skade);
        this.sti.vedSlag(s.mål, skade);
        bus.emit('slag', { kilde: this, mål: s.mål });
      }
    }
    if (s.tid >= s.varighed) { this.sving = null; s.vedSlut?.(); }
  }

  // Nærmeste fjende der angriber helten eller en allieret (trussel.js)
  findTrussel() { return findTrussel(this, 18, this.angribere, this.tid); }

  tagSkade(mængde, kilde) {
    if (this.evner.erUdødelig()) mængde = 0;
    if (mængde > 0 && this.evner.undvig?.()) { bus.emit('flydetekst', { enhed: this, tekst: 'Dodged', klasse: 'immun' }); return false; }   // Moonlit Dance
    if (mængde > 0) this.evner.torne?.(mængde, kilde);   // Thornmail
    this.sidstIKamp = this.tid;
    if (kilde && kilde !== this) this.angribere.set(kilde, this.tid);
    if (mængde > 0) mængde = this.inventar.vedSkade(mængde, kilde) * this.sti.skadeTagetFaktor() * (this.evner.tMur > 0 ? 0.6 : 1);   // Shield Wall
    mængde = this.velsignelser.vedSkade(mængde);   // Spirit Shield
    return super.tagSkade(reducérSkade(mængde, this.rustning() + this.evner.rustningsBonus()), kilde);
  }

  dø() {
    super.dø();
    this.mål = null; this.sving = null; this.gåOrdre = false; this.handling = null; this.angribere.clear();
    this.sti.hop = null; this.rod.position.y = 0; this.jagt = null;
    this.spil('Death_A', { loop: false, fade: 0.1 });
    this.genopliv = Infinity;   // kun alteret kan genoplive helten (alter.js)
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
Helt.prototype.natFart = function () { return natFart(this.verden); };
Object.assign(Helt.prototype, levelMetoder, interaktionMetoder, egenskabsMetoder, jagtMetoder);
