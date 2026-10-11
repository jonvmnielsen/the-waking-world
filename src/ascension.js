// Heltens Ascension (ascensiondata.js): den valgte sti, dens passive evne, de to nye evner og udseendet.
// Ligger på helten som helt.sti; Evner kalder stiens evner for slot 3 og 4.
import * as THREE from 'three';
import { bus } from './events.js';
import { kopi } from './assets.js';
import { STIER, ASCENSION_LEVEL, MOD_NATUREN, stiForStil } from './ascensiondata.js';

const AURA = 16, RÆKKE = 18;

export class Ascension {
  constructor(helt) {
    this.helt = helt;
    this.id = null;
    this.tRaseri = 0; this.tLinje = 0; this.tStorm = 0; this.stormTik = 0;
    this.hop = null;
  }

  get data() { return STIER[this.id]; }
  kanStige() { return !this.id && this.helt.level >= ASCENSION_LEVEL; }
  passer(id, stil) { return stiForStil(stil.dominant()) === id; }
  pris(id, stil) { return this.passer(id, stil) ? null : MOD_NATUREN; }

  // Vælg stien. gendan = fra et gemt spil (egenskaberne er allerede gemt, ingen fanfare)
  stig(id, gendan = false) {
    const h = this.helt, d = STIER[id];
    this.id = id;
    h.model.scale.multiplyScalar(1.12);
    h.model.traverse((o) => {
      if (!o.isMesh) return;
      o.material = o.material.clone();
      o.material.emissive = new THREE.Color(d.farve);
      o.material.emissiveIntensity = 0.1;
    });
    if (id === 'warlord') {
      const flag = kopi('kaykit-hexagon/decoration/props/flag_green', { skygge: true });
      flag.scale.setScalar(1.5);
      flag.position.set(-0.35, 0, -0.45);
      h.rod.add(flag);
    } else {
      const lys = new THREE.PointLight(d.farve, 5, 7, 1.8);
      lys.position.y = 2.2;
      h.rod.add(lys);
    }
    if (gendan) return;
    h.inventar.øgEgenskaber(d.egenskaber);
    h.hp = h.maxHp; h.mana = h.manaMax;
    bus.emit('effekt', { type: 'ascension', x: h.x, z: h.z, farve: d.farve });
    bus.emit('banner', { titel: `Ascension — ${d.navn}`, tekst: `${d.passiv.navn}: ${d.passiv.tekst}` });
    bus.emit('ascension', { helt: h, sti: id });
    h.fåXp(0);   // gemt erfaring giver de levels, der har ventet
  }

  // --- Passive virkninger (bruges af helten og soldaterne) ---
  rustning() { return this.id === 'warlord' ? 2 : this.id === 'bloodbound' ? -2 : 0; }
  hpRegenFaktor() { return this.id === 'bloodbound' ? 0.5 : 1; }
  manaRegenFaktor() { return this.id === 'avatar' ? 1.5 : 1; }
  angrebsBonus() { return this.tRaseri > 0 ? 0.6 : 0; }
  skadeTagetFaktor() { return (this.tRaseri > 0 ? 1.2 : 1) * (this.tLinje > 0 ? 0.6 : 1); }
  skadeFaktor() {
    if (this.id !== 'bloodbound') return 1;
    const h = this.helt;
    return 1 + Math.min(0.6, 0.8 * (1 - h.hp / h.maxHp));
  }

  // Warlord-auraen for en soldat tæt på helten: { skade, rustning }
  aura(s) {
    const h = this.helt;
    if (this.id !== 'warlord' || h.død || h.afstand(s) > AURA) return null;
    return h.level >= 16 ? { skade: 0.25, rustning: 3 } : { skade: 0.15, rustning: 2 };
  }

  // Når heltens slag rammer: livsstjæl og Stormcaller-lyn
  vedSlag(mål, skade) {
    const h = this.helt;
    const stjæl = (this.id === 'bloodbound' ? 0.1 : 0) + (this.tRaseri > 0 ? 0.3 : 0);
    if (stjæl) h.hp = Math.min(h.maxHp, h.hp + skade * stjæl);
    if (this.id === 'avatar' && Math.random() < 0.25) {
      const lyn = Math.round((50 + 3 * h.egenskab('int')) * h.evneStyrke());
      for (const c of [mål, ...this.fjender(7, mål).filter((c) => c !== mål).slice(0, 2)]) {
        if (c.død) continue;
        bus.emit('effekt', { type: 'lyn', mål: c });
        c.tagSkade(lyn, h);
      }
    }
  }

  fjender(r, fra = this.helt) {
    return this.helt.verden.creeps.filter((c) => !c.død && !c.neutral && Math.hypot(c.x - fra.x, c.z - fra.z) - (c.radius ?? 0) <= r)
      .sort((a, b) => Math.hypot(a.x - fra.x, a.z - fra.z) - Math.hypot(b.x - fra.x, b.z - fra.z));
  }

  soldaterNær(r) { return (this.helt.verden.egne?.() ?? []).filter((u) => u.vet && !u.død && this.helt.afstand(u) < r); }

  opdater(dt) {
    this.tRaseri = Math.max(0, this.tRaseri - dt);
    this.tLinje = Math.max(0, this.tLinje - dt);
    if (this.tStorm > 0) this.opdaterStorm(dt);
    if (this.hop) this.opdaterSpring(dt);
  }

  // --- Warlord ---
  rally() {
    const h = this.helt;
    h.hp = Math.min(h.maxHp, h.hp + h.maxHp * 0.25);
    for (const s of this.soldaterNær(RÆKKE)) {
      s.hp = Math.min(s.maxHp, s.hp + s.maxHp * 0.25);
      s.buff.rally = 8;
      bus.emit('effekt', { type: 'heal', mål: s });
    }
    bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, farve: 0xffc94a });
    h.evner.heltRåb();
  }

  holdLinjen() {
    const h = this.helt;
    this.tLinje = 8;
    for (const s of this.soldaterNær(RÆKKE)) { s.buff.linje = 8; bus.emit('effekt', { type: 'samlet', x: s.x, z: s.z, farve: 0x9fc3ff }); }
    bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, farve: 0x9fc3ff });
    h.evner.heltRåb();
  }

  // --- Avatar ---
  kædelyn() {
    const h = this.helt;
    let mål = this.fjender(14)[0];
    if (!mål) return 'No enemy close enough';
    const ramt = new Set();
    let skade = 140 * h.evneStyrke();
    for (let i = 0; i < 5 && mål; i++) {
      ramt.add(mål);
      bus.emit('effekt', { type: 'lyn', mål });
      mål.tagSkade(Math.round(skade), h);
      skade *= 0.85;
      mål = this.fjender(9, mål).find((c) => !ramt.has(c));
    }
    h.evner.heltRåb('Spellcast_Shoot');
  }

  storm() { this.tStorm = 6; this.stormTik = 0; this.helt.evner.heltRåb(); }

  opdaterStorm(dt) {
    const h = this.helt;
    this.tStorm -= dt; this.stormTik -= dt;
    if (this.stormTik > 0) return;
    this.stormTik = 0.5;
    bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, farve: 0x7cc8ff });
    const ofre = this.fjender(8);
    if (ofre.length) bus.emit('effekt', { type: 'lyn', mål: ofre[Math.floor(Math.random() * ofre.length)] });
    for (const c of ofre) c.tagSkade(Math.round(22.5 * h.evneStyrke()), h);
  }

  // --- Bloodbound ---
  spring() {
    const h = this.helt;
    const mål = h.mål && !h.mål.død && h.afstand(h.mål) < 16 ? h.mål : this.fjender(16)[0];
    if (!mål) return 'No enemy close enough';
    if (h.sving) return 'Your hero is busy';
    h.hp = Math.max(1, h.hp - Math.floor(h.maxHp * 0.12));
    const d = Math.max(0.01, h.afstand(mål)), afs = (mål.radius ?? 0.7) + 1;
    const til = { x: mål.x - ((mål.x - h.x) / d) * afs, z: mål.z - ((mål.z - h.z) / d) * afs };
    h.stop(); h.mål = mål; h.gåOrdre = false;
    h.vend(mål.x, mål.z);
    h.spil('Jump_Full_Long', { loop: false, gentag: true, fart: 1.6, fade: 0.05 });
    h.sving = { tid: 0, varighed: 0.75, slagTid: 99, ramt: true };
    this.hop = { fra: { x: h.x, z: h.z }, til, t: 0 };
  }

  opdaterSpring(dt) {
    const h = this.helt, s = this.hop;
    s.t = Math.min(1, s.t + dt / 0.55);
    h.rod.position.set(s.fra.x + (s.til.x - s.fra.x) * s.t, Math.sin(Math.PI * s.t) * 2.5, s.fra.z + (s.til.z - s.fra.z) * s.t);
    if (s.t < 1) return;
    this.hop = null;
    h.rod.position.y = 0;
    bus.emit('effekt', { type: 'spin', x: h.x, z: h.z, radius: 4 });
    for (const c of this.fjender(4)) c.tagSkade(Math.round(h.slagSkade() * 2 * this.skadeFaktor()), h);
  }

  blodraseri() {
    const h = this.helt;
    h.hp = Math.max(1, h.hp - Math.floor(h.maxHp * 0.2));
    this.tRaseri = 10;
    bus.emit('effekt', { type: 'blodslag', helt: h });
    h.evner.heltRåb();
  }
}
