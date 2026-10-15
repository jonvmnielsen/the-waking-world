// Heltens Ascension (ascensiondata.js + stiheltdata.js): den valgte sti i heltens egen udgave, dens passive
// evne, de to nye evner (motorer i stievner.js) og udseendet. Ligger på helten som helt.sti; Evner kalder
// brugEvne for slot 3 og 4.
import * as THREE from 'three';
import { bus } from './events.js';
import { kopi } from './assets.js';
import { ASCENSION_LEVEL, MOD_NATUREN, stiForStil, stiData } from './ascensiondata.js';
import { motorMetoder } from './stievner.js';
import { SPILLER_FARVE } from './racer.js';

const AURA = 16, RÆKKE = 18;

export class Ascension {
  constructor(helt) {
    this.helt = helt;
    this.id = null;
    this.tRaseri = 0; this.raseri = null; this.tLinje = 0;
    this.zoner = []; this.hop = null;
  }

  get data() { return this.id ? stiData(this.helt.type, this.id) : undefined; }
  stiFor(id) { return stiData(this.helt.type, id); }
  get evner() { return this.data?.evner ?? []; }
  kanStige() { return !this.id && this.helt.level >= ASCENSION_LEVEL; }
  passer(id, stil) { return stiForStil(stil.dominant()) === id; }
  pris(id, stil) { return this.passer(id, stil) ? null : MOD_NATUREN; }

  // Vælg stien. gendan = fra et gemt spil (egenskaberne er allerede gemt, ingen fanfare)
  stig(id, gendan = false) {
    const h = this.helt, d = stiData(h.type, id);
    this.id = id;
    h.vækst = 1.12;   // helten vokser (helteaura.js sætter størrelsen)
    h.model.traverse((o) => {
      if (!o.isMesh) return;
      o.material = o.material.clone();
      o.material.emissive = new THREE.Color(d.farve);
      o.material.emissiveIntensity = 0.1;
    });
    if (id === 'warlord') {
      const flag = kopi(`kaykit-hexagon/decoration/props/flag_${SPILLER_FARVE}`, { skygge: true });
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
  angrebsBonus() { return this.tRaseri > 0 ? this.raseri.fart : 0; }
  skadeTagetFaktor() { return (this.tRaseri > 0 ? this.raseri.taget : 1) * (this.tLinje > 0 ? 0.6 : 1); }
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

  // Når heltens slag rammer: livsstjæl og avatar-stiens proc (heltens egen: lyn, skælv eller lys)
  vedSlag(mål, skade) {
    const h = this.helt;
    const stjæl = (this.id === 'bloodbound' ? 0.1 : 0) + (this.tRaseri > 0 ? this.raseri.stjæl : 0);
    if (stjæl) h.hp = Math.min(h.maxHp, h.hp + skade * stjæl);
    if (this.id !== 'avatar' || Math.random() >= 0.25) return;
    const p = (this.procData ??= this.data.proc), kraft = Math.round((50 + 3 * h.egenskab(h.primær ?? 'int')) * h.evneStyrke());
    if (p.form === 'skælv') {
      bus.emit('effekt', { type: 'evne', x: mål.x, z: mål.z, radius: 3.5, farve: p.farve });
      for (const c of this.fjender(3.5, mål)) { c.tagSkade(kraft, h); c.lam?.(0.5); }
      return;
    }
    const ofre = p.form === 'lys' ? [mål] : [mål, ...this.fjender(7, mål).filter((c) => c !== mål).slice(0, 2)];
    for (const c of ofre) {
      if (c.død) continue;
      bus.emit('effekt', { type: 'lyn', mål: c, farve: p.farve });
      c.tagSkade(kraft, h);
    }
    if (p.form === 'lys') h.hp = Math.min(h.maxHp, h.hp + kraft * 0.5);
  }

  fjender(r, fra = this.helt) {
    return this.helt.verden.creeps.filter((c) => !c.død && !c.neutral && Math.hypot(c.x - fra.x, c.z - fra.z) - (c.radius ?? 0) <= r)
      .sort((a, b) => Math.hypot(a.x - fra.x, a.z - fra.z) - Math.hypot(b.x - fra.x, b.z - fra.z));
  }

  soldaterNær(r) { return (this.helt.verden.egne?.() ?? []).filter((u) => u.vet && !u.død && this.helt.afstand(u) < r); }

  opdater(dt) {
    this.tRaseri = Math.max(0, this.tRaseri - dt);
    this.tLinje = Math.max(0, this.tLinje - dt);
    if (this.zoner.length) this.opdaterZoner(dt);
    if (this.hop) this.opdaterSpring(dt);
  }
}

// Evnerne bygges af motorerne i stievner.js
Object.assign(Ascension.prototype, motorMetoder);
