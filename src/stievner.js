// Motorerne bag Ascension-evnerne (stievnedata.js). Blandes ind i Ascension (ascension.js), som kalder
// brugEvne(id) for plads 3 og 4. Hver motor læser sine tal fra evnens data; heltens evnestyrke ganges på.
import { bus } from './events.js';
import { STI_EVNER } from './stievnedata.js';
import { glød } from './aand.js';

const RÆKKE = 18;

const MOTOR = {
  // Helten og soldaterne omkring: heling, rally (angrebsfart) og linje (mindre skade)
  hær(e) {
    const h = this.helt;
    if (e.heal) h.hp = Math.min(h.maxHp, h.hp + h.maxHp * e.heal);
    if (e.linje) this.tLinje = e.linje;
    for (const s of this.soldaterNær(RÆKKE)) {
      if (e.heal) { s.hp = Math.min(s.maxHp, s.hp + s.maxHp * e.heal); bus.emit('effekt', { type: 'heal', mål: s }); }
      if (e.rally) s.buff.rally = e.rally;
      if (e.linje) { s.buff.linje = e.linje; bus.emit('effekt', { type: 'samlet', x: s.x, z: s.z, farve: e.farve }); }
    }
    bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, farve: e.farve });
    h.evner.heltRåb();
  },

  // Slå den nærmeste og spring videre
  kæde(e) {
    const h = this.helt;
    let mål = this.fjender(14)[0];
    if (!mål) return 'No enemy close enough';
    const ramt = new Set();
    let skade = e.skade * h.evneStyrke();
    for (let i = 0; i < e.hop && mål; i++) {
      ramt.add(mål);
      bus.emit('effekt', { type: 'lyn', mål, farve: e.farve });
      mål.tagSkade(Math.round(skade), h);
      skade *= 0.85;
      mål = this.fjender(9, mål).find((c) => !ramt.has(c));
    }
    h.evner.heltRåb('Spellcast_Shoot');
  },

  // Et område i nogle sekunder (om helten eller om målet)
  zone(e) {
    const h = this.helt;
    let sted = null;
    if (e.påMål) {
      const m = this.fjender(16)[0];
      if (!m) return 'No enemy close enough';
      sted = { x: m.x, z: m.z };
      bus.emit('effekt', { type: 'søjle', x: m.x, z: m.z, farve: e.farve, højde: 14 });
    }
    (this.zoner ??= []).push({ e, tid: e.tid, tik: 0, sted });
    h.evner.heltRåb(e.påMål ? 'Spellcast_Shoot' : 'Spellcast_Raise');
  },

  // En stribe ud mod den nærmeste fjende
  linje(e) {
    const h = this.helt, m = this.fjender(e.længde)[0];
    if (!m) return 'No enemy close enough';
    const d = Math.max(0.01, h.afstand(m)), dx = (m.x - h.x) / d, dz = (m.z - h.z) / d, kort = h.verden.kort;
    h.vend(m.x, m.z);
    for (let t = 1.5; t <= e.længde; t += 2) bus.emit('effekt', { type: 'evne', x: h.x + dx * t, z: h.z + dz * t, radius: e.bredde * 0.7, farve: e.farve });
    for (const c of this.fjender(e.længde + 2)) {
      const px = c.x - h.x, pz = c.z - h.z, t = px * dx + pz * dz, side = Math.abs(px * dz - pz * dx);
      if (t < 0 || t > e.længde + 1 || side > e.bredde / 2 + (c.radius ?? 0.6)) continue;
      c.tagSkade(Math.round(e.skade * h.evneStyrke()), h);
      if (e.lam) c.lam?.(e.lam);
      if (e.skub && !c.erBygning && !c.død) {
        const nx = c.x + dx * e.skub, nz = c.z + dz * e.skub;
        if (kort.erGåbar(nx, nz)) c.rod.position.set(nx, c.rod.position.y, nz);
      }
    }
    h.evner.heltRåb(h.def.kamp.type === 'fjern' ? 'Spellcast_Shoot' : '2H_Melee_Attack_Chop');
  },

  // Et slag om helten
  nova(e) {
    const h = this.helt, ofre = this.fjender(e.radius);
    if (!ofre.length) return 'No enemies in range';
    bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, radius: e.radius, farve: e.farve });
    bus.emit('effekt', { type: 'søjle', x: h.x, z: h.z, farve: e.farve, højde: 10 });
    for (const c of ofre) { c.tagSkade(Math.round(e.skade * h.evneStyrke()), h); if (e.lam) c.lam?.(e.lam); }
    if (e.helSelv) { const n = h.maxHp * e.helSelv; h.hp = Math.min(h.maxHp, h.hp + n); bus.emit('effekt', { type: 'heal', mål: h, mængde: Math.round(n) }); }
    h.evner.heltRåb();
  },

  // Hop hen til en fjende (eller væk fra den, bagud) og slå
  spring(e) {
    const h = this.helt;
    const mål = h.mål && !h.mål.død && h.afstand(h.mål) < 16 ? h.mål : this.fjender(16)[0];
    if (!mål) return 'No enemy close enough';
    if (h.sving) return 'Your hero is busy';
    const d = Math.max(0.01, h.afstand(mål)), dx = (mål.x - h.x) / d, dz = (mål.z - h.z) / d;
    let til;
    if (e.bagud) {
      til = [7, 5, 3].map((a) => ({ x: h.x - dx * a, z: h.z - dz * a })).find((p) => h.verden.kort.erGåbar(p.x, p.z)) ?? { x: h.x, z: h.z };
    } else {
      const afs = (mål.radius ?? 0.7) + 1;
      til = { x: mål.x - dx * afs, z: mål.z - dz * afs };
    }
    h.hp = Math.max(1, h.hp - Math.floor(h.maxHp * e.hpPris));
    h.stop(); h.mål = mål; h.gåOrdre = false;
    h.vend(mål.x, mål.z);
    h.spil('Jump_Full_Long', { loop: false, gentag: true, fart: 1.6, fade: 0.05 });
    h.sving = { tid: 0, varighed: 0.75, slagTid: 99, ramt: true };
    if (!e.bagud) bus.emit('effekt', { type: 'samlet', x: h.x, z: h.z, farve: e.farve });
    this.hop = { fra: { x: h.x, z: h.z }, til, t: 0, e, mål, højde: e.bagud ? 1.2 : 2.5 };
  },

  // Betal liv for angrebsfart og livsstjæl
  raseri(e) {
    const h = this.helt;
    h.hp = Math.max(1, h.hp - Math.floor(h.maxHp * e.hpPris));
    this.tRaseri = e.tid; this.raseri = e;
    bus.emit('effekt', { type: 'blodslag', helt: h });
    h.evner.heltRåb();
  },

  // Alle fjender omkring bliver bytte (tager 50 % mere skade, unit.js)
  mærk(e) {
    const h = this.helt, ofre = this.fjender(e.radius).filter((c) => !c.erBygning);
    if (!ofre.length) return 'No enemies in range';
    const ev = h.evner;
    for (const m of ofre) {
      m.mærket = e.tid;
      if (!m.mærkeGlød) { m.mærkeGlød = glød(0xff4a3a, 1.6, 0.9); m.mærkeGlød.position.y = (m.højde ?? 2.4) + 0.9; m.rod.add(m.mærkeGlød); }
      (ev.mærkede ??= new Set()).add(m);
    }
    bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, radius: e.radius, farve: e.farve });
    ev.heltRåb('Spellcast_Shoot');
  },
};

export const motorMetoder = {
  brugEvne(id) { const e = STI_EVNER[id]; return MOTOR[e.motor].call(this, e); },

  opdaterZoner(dt) {
    const h = this.helt;
    for (const z of [...(this.zoner ?? [])]) {
      z.tid -= dt; z.tik -= dt;
      if (z.tid <= 0 || h.død) { this.zoner.splice(this.zoner.indexOf(z), 1); continue; }
      if (z.tik > 0) continue;
      z.tik = 0.5;
      const e = z.e, c = z.sted ?? h;
      bus.emit('effekt', { type: 'evne', x: c.x, z: c.z, radius: e.radius, farve: e.farve });
      const ofre = this.fjender(e.radius, c);
      if (ofre.length && (e.lyn || e.påMål)) bus.emit('effekt', { type: 'lyn', mål: ofre[Math.floor(Math.random() * ofre.length)], farve: e.farve });
      for (const o of ofre) { o.tagSkade(Math.round(e.dps * 0.5 * h.evneStyrke()), h); if (e.lam) o.lam?.(e.lam); }
      if (e.heling) {
        const egne = [h, ...this.soldaterNær(RÆKKE)].filter((u) => Math.hypot(u.x - c.x, u.z - c.z) <= e.radius);
        for (const u of egne) u.hp = Math.min(u.maxHp, u.hp + u.maxHp * e.heling * 0.5 * (u === h ? h.evneStyrke() : 1));
      }
    }
  },

  opdaterSpring(dt) {
    const h = this.helt, s = this.hop, e = s.e;
    s.t = Math.min(1, s.t + dt / 0.55);
    h.rod.position.set(s.fra.x + (s.til.x - s.fra.x) * s.t, Math.sin(Math.PI * s.t) * s.højde, s.fra.z + (s.til.z - s.fra.z) * s.t);
    if (s.t < 1) return;
    this.hop = null;
    h.rod.position.y = 0;
    if (e.bagud) {   // rul væk og skyd
      if (!s.mål.død) { h.vend(s.mål.x, s.mål.z); bus.emit('projektil', { fra: h, mål: s.mål, skade: Math.round(h.slagSkade() * e.mult * this.skadeFaktor() * h.evneStyrke()), farve: e.farve }); }
      return;
    }
    bus.emit('effekt', { type: 'spin', x: h.x, z: h.z, radius: e.radius });
    if (e.farve) bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, radius: e.radius, farve: e.farve });
    const skade = e.skade ? e.skade * h.evneStyrke() : h.slagSkade() * e.mult * this.skadeFaktor();
    for (const c of this.fjender(e.radius)) { c.tagSkade(Math.round(skade), h); if (e.lam) c.lam?.(e.lam); }
    bus.emit('ryst', { styrke: 0.35, tid: 0.25 });
  },
};
