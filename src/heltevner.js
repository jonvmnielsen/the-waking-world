// Heltenes signatur-evner (slot 0, heltedata.js). Blandes ind i Evner (abilities.js).
// Warchief: Brute Strike (abilities.js) · Stormsinger: Stormlash · Wildtrack: Hunter's Mark
// Knight Commander: Shield Bash · Lorewarden: Mending Light · Ranger Captain: Piercing Bolt
import { bus } from './events.js';
import { glød } from './aand.js';
import { TIDE_EVNER, tideMetoder } from './evnertide.js';
import { ARK_EVNER, arkMetoder } from './evnerark.js';

export const HELT_EVNER = {
  stormlash: { navn: 'Stormlash', mana: 55, cd: 9, ikon: '⚡', tekst: 'Lightning strikes an enemy for 90 damage and leaps to two more.' },
  huntersMark: { navn: "Hunter's Mark", mana: 45, cd: 14, ikon: '🎯', tekst: 'Mark an enemy: it takes 50% more damage from everyone for 8 seconds.' },
  shieldBash: { navn: 'Shield Bash', mana: 45, cd: 10, ikon: '🛡️', tekst: 'A crushing blow for 1.5× damage that stuns for 1.5 seconds.' },
  mendingLight: { navn: 'Mending Light', mana: 70, cd: 18, ikon: '✨', tekst: 'Heals your hero and soldiers nearby for 180.' },
  piercingBolt: { navn: 'Piercing Bolt', mana: 60, cd: 12, ikon: '➶', tekst: 'A bolt that goes through every enemy in a line for 2× damage.' },
  ...TIDE_EVNER, ...ARK_EVNER,
};

export const heltEvneMetoder = {
  ...tideMetoder, ...arkMetoder,

  // Spillerens soldater tæt på helten
  soldaterNær(r) { const h = this.helt; return (h.verden.egne?.() ?? []).filter((u) => u !== h && u.buff && !u.død && Math.hypot(u.x - h.x, u.z - h.z) < r); },

  // En virkning over tid: gør() hvert 'hver' sekund i 'varighed' sekunder
  virkning(v) { v.start?.(); (this.virkninger ??= []).push({ ...v, t: 0, næste: 0 }); },

  // Tidsstyrede evner (kaldes fra Evner.opdater): mærker, virkninger og midlertidige bonusser
  opdaterHelteEvner(dt) {
    this.opdaterMærker(dt);
    for (const k of ['tRovdyr', 'tMur', 'tSkydning']) this[k] = Math.max(0, (this[k] ?? 0) - dt);
    if (this.helt.ultimaTid > 0) this.helt.ultimaTid -= dt;   // ultimatets ekstra kraft (ultimatum.js)
    this.virkninger = (this.virkninger ?? []).filter((v) => {
      v.t += dt; v.næste -= dt;
      if (v.næste <= 0) { v.næste = v.hver; v.gør(); }
      return v.t < v.varighed;
    });
    const h = this.helt;
    h.fart = h.stats.fart * (this.tRovdyr > 0 ? 1.3 : 1) * (1 + (h.inventar?.bonus.fart ?? 0));
  },

  // Det nuværende mål eller den nærmeste fjende inden for r
  sigte(r) {
    const h = this.helt, m = h.mål;
    if (m && !m.død && !m.neutral && h.afstand(m) - (m.radius ?? 0) <= r) return m;
    return this.fjenderInden(r).sort((a, b) => h.afstand(a) - h.afstand(b))[0] ?? null;
  },

  stormlash() {
    const h = this.helt, mål = this.sigte(13);
    if (!mål) return 'No enemy close enough';
    h.vend(mål.x, mål.z); this.heltRåb('Spellcast_Shoot');
    const ramt = [mål];
    let skade = Math.round(90 * h.evneStyrke()), forrige = mål;
    for (let i = 0; i < 3 && forrige; i++) {
      const m = forrige;
      setTimeout(() => { if (!m.død) { m.tagSkade(skade, h); bus.emit('effekt', { type: 'lyn', mål: m }); } }, 250 + i * 160);
      skade = Math.round(skade * 0.75);
      forrige = this.fjenderInden(40).filter((c) => !ramt.includes(c) && Math.hypot(c.x - m.x, c.z - m.z) < 7).sort((a, b) => Math.hypot(a.x - m.x, a.z - m.z) - Math.hypot(b.x - m.x, b.z - m.z))[0];
      if (forrige) ramt.push(forrige);
    }
  },

  huntersMark() {
    const h = this.helt, mål = this.sigte(15);
    if (!mål) return 'No enemy close enough';
    h.vend(mål.x, mål.z); this.heltRåb('Spellcast_Shoot');
    mål.mærket = 8;
    if (!mål.mærkeGlød) { mål.mærkeGlød = glød(0xff4a3a, 1.6, 0.9); mål.mærkeGlød.position.y = (mål.højde ?? 2.4) + 0.9; mål.rod.add(mål.mærkeGlød); }
    (this.mærkede ??= new Set()).add(mål);
  },

  // Mærker tæller ned (kaldes fra Evner.opdater)
  opdaterMærker(dt) {
    for (const m of this.mærkede ?? []) {
      m.mærket -= dt;
      if (m.mærket > 0 && !m.død) continue;
      m.mærket = 0; m.mærkeGlød?.removeFromParent(); m.mærkeGlød = null; this.mærkede.delete(m);
    }
  },

  shieldBash() {
    const h = this.helt, mål = this.sigte(h.stats.rækkevidde * 1.3);
    if (!mål) return 'No enemy close enough';
    h.mål = mål; h.vend(mål.x, mål.z);
    h.spil('2H_Melee_Attack_Chop', { loop: false, fart: 1.8, gentag: true, fade: 0.05 });
    h.sving = { tid: 0, varighed: 0.9, slagTid: 0.4, mål, ramt: true };
    setTimeout(() => {
      if (mål.død) return;
      mål.tagSkade(Math.round(h.slagSkade() * 1.5 * h.evneStyrke()), h);
      mål.lam?.(1.5);
      bus.emit('effekt', { type: 'tungtSlag', mål });
    }, 400);
    h.cooldown = h.angrebsTid();
  },

  mendingLight() {
    const h = this.helt, mængde = Math.round(180 * h.evneStyrke());
    this.heltRåb('Spellcast_Raise');
    for (const u of [h, ...(h.verden.egne?.() ?? [])]) {
      if (u.død || u.felter || Math.hypot(u.x - h.x, u.z - h.z) > 9 || u.hp >= u.maxHp) continue;
      u.hp = Math.min(u.maxHp, u.hp + mængde);
      bus.emit('effekt', { type: 'heal', mål: u });
    }
    bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, farve: 0xffe7a0 });
  },

  piercingBolt() {
    const h = this.helt, mål = this.sigte(16);
    if (!mål) return 'No enemy close enough';
    h.vend(mål.x, mål.z); this.heltRåb('Spellcast_Shoot');
    const dx = mål.x - h.x, dz = mål.z - h.z, l = Math.hypot(dx, dz) || 1, ux = dx / l, uz = dz / l;
    const skade = Math.round(h.slagSkade() * 2 * h.evneStyrke());
    const iLinje = this.fjenderInden(18).filter((c) => { const px = c.x - h.x, pz = c.z - h.z, t = px * ux + pz * uz; return t > 0 && Math.abs(px * uz - pz * ux) < 1.6 + (c.radius ?? 0.6); });
    for (const c of iLinje) bus.emit('projektil', { fra: h, mål: c, skade, farve: 0xbfe0ff });
  },
};
