// The Dreaming's helte (M15) — alle tre evner pr. helt (level 1, 3 og 6). Blandes ind i Evner via heltevner.js.
// Thornwarden: Entangling Roots, Thornmail, Wrath of the Wood
// Moonblade: Blink Strike, Moonlit Dance, Eclipse
// Dreamweaver: Sleep, Dreamsong, Nightmare
import { bus } from './events.js';

export const DREAM_EVNER = {
  entanglingRoots: { navn: 'Entangling Roots', mana: 55, cd: 12, ikon: '🌱', tekst: 'Roots burst up around the target: 60 damage, and every enemy within 3 is held fast for 2 seconds.' },
  thornmail: { navn: 'Thornmail', mana: 60, cd: 22, ikon: '🌵', tekst: 'For 8 seconds: +5 armor, and half of the melee damage your hero takes is thrown back at the attacker.' },
  wrathOfTheWood: { navn: 'Wrath of the Wood', mana: 120, cd: 40, ikon: '🌳', tekst: 'The forest wakes around you: 160 damage and 2.5 seconds held fast for every enemy within 8.' },
  blinkStrike: { navn: 'Blink Strike', mana: 45, cd: 9, ikon: '🌙', tekst: 'Step out of the moonlight behind an enemy within 12 and strike it for 2× damage.' },
  moonlitDance: { navn: 'Moonlit Dance', mana: 55, cd: 20, ikon: '💃', tekst: 'For 6 seconds: +50% attack speed and a 35% chance to dodge every blow.' },
  eclipse: { navn: 'Eclipse', mana: 120, cd: 40, ikon: '🌑', tekst: 'Vanish into the dark and strike up to five enemies within 8, each for 2.5× damage.' },
  sleep: { navn: 'Sleep', mana: 60, cd: 14, ikon: '💤', tekst: 'Sing the target and every enemy within 4 of it to sleep for 3.5 seconds.' },
  dreamsong: { navn: 'Dreamsong', mana: 75, cd: 22, ikon: '🎶', tekst: 'For 5 seconds your hero and soldiers within 10 heal 30 health a second.' },
  nightmare: { navn: 'Nightmare', mana: 130, cd: 40, ikon: '👁️', tekst: 'A nightmare falls on the enemy: for 6 seconds every enemy within 7 of it takes 45 damage a second and is stunned at the start.' },
};

export const dreamMetoder = {
  entanglingRoots() {
    const h = this.helt, mål = this.sigte(12);
    if (!mål) return 'No enemy close enough';
    h.vend(mål.x, mål.z); this.heltRåb('Spellcast_Raise');
    const x = mål.x, z = mål.z;
    bus.emit('effekt', { type: 'evne', x, z, radius: 3, farve: 0x7ab04a });
    mål.tagSkade(Math.round(60 * h.evneStyrke()), h);
    for (const c of this.fjenderInden(40)) if (!c.erBygning && Math.hypot(c.x - x, c.z - z) < 3) { c.lam?.(2); bus.emit('effekt', { type: 'samlet', x: c.x, z: c.z, farve: 0x7ab04a }); }
  },

  thornmail() { this.tTorn = 8; this.heltRåb('Block'); bus.emit('effekt', { type: 'evne', x: this.helt.x, z: this.helt.z, farve: 0x9a7a4a }); },

  wrathOfTheWood() {
    const h = this.helt, ofre = this.fjenderInden(8);
    this.heltRåb('Spellcast_Raise');
    bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, radius: 8, farve: 0x7ab04a });
    bus.emit('effekt', { type: 'søjle', x: h.x, z: h.z, farve: 0x9ad06a, højde: 10 });
    bus.emit('ryst', { styrke: 0.3, tid: 0.4 });
    for (const c of ofre) { c.tagSkade(Math.round(160 * h.evneStyrke()), h); if (!c.erBygning) c.lam?.(2.5); }
  },

  blinkStrike() {
    const h = this.helt, mål = this.sigte(12);
    if (!mål || mål.erBygning) return 'No enemy close enough';
    bus.emit('effekt', { type: 'portal', x: h.x, z: h.z });
    const v = Math.atan2(h.x - mål.x, h.z - mål.z) + Math.PI, d = (mål.radius ?? 0.7) + 1;   // bag målet
    h.teleporter({ x: mål.x + Math.sin(v) * d, z: mål.z + Math.cos(v) * d });
    h.vend(mål.x, mål.z); h.mål = mål;
    h.spil('Dualwield_Melee_Attack_Chop', { loop: false, gentag: true, fart: 1.6, fade: 0.05 });
    h.sving = { tid: 0, varighed: 0.7, slagTid: 99, ramt: true };
    mål.tagSkade(Math.round(h.slagSkade() * 2 * h.evneStyrke()), h);
    bus.emit('effekt', { type: 'tungtSlag', mål });
    h.cooldown = h.angrebsTid();
  },

  moonlitDance() { this.tDans = 6; this.heltRåb('Spellcast_Raise'); bus.emit('effekt', { type: 'evne', x: this.helt.x, z: this.helt.z, farve: 0xd8b8ff }); },

  eclipse() {
    const h = this.helt, ofre = this.fjenderInden(8).filter((c) => !c.erBygning).slice(0, 5);
    if (!ofre.length) return 'No enemies in range';
    h.skjult = Math.max(h.skjult, 1.5);
    bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, radius: 8, farve: 0x3a2e58 });
    ofre.forEach((c, i) => setTimeout(() => {
      if (c.død || h.død) return;
      bus.emit('effekt', { type: 'lyn', mål: c, farve: 0xd8b8ff });
      c.tagSkade(Math.round(h.slagSkade() * 2.5 * h.evneStyrke()), h);
    }, 150 + i * 220));
    this.heltRåb('Dualwield_Melee_Attack_Slice');
  },

  sleep() {
    const h = this.helt, mål = this.sigte(13);
    if (!mål) return 'No enemy close enough';
    h.vend(mål.x, mål.z); this.heltRåb('Spellcast_Shoot');
    const x = mål.x, z = mål.z;
    bus.emit('effekt', { type: 'evne', x, z, radius: 4, farve: 0xb8a8ff });
    for (const c of this.fjenderInden(40)) if (!c.erBygning && Math.hypot(c.x - x, c.z - z) < 4) { c.lam?.(3.5); bus.emit('flydetekst', { enhed: c, tekst: 'Zzz', klasse: 'immun' }); }
  },

  dreamsong() {
    const h = this.helt;
    this.heltRåb('Spellcast_Raise');
    this.virkning({ varighed: 5, hver: 0.5, gør: () => {
      bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, radius: 10, farve: 0xd8b8ff });
      for (const u of [h, ...this.soldaterNær(10)]) if (!u.død) u.hp = Math.min(u.maxHp, u.hp + 15 * h.evneStyrke());
    } });
  },

  nightmare() {
    const h = this.helt, mål = this.sigte(14);
    if (!mål) return 'No enemy close enough';
    const x = mål.x, z = mål.z;
    h.vend(x, z); this.heltRåb('Spellcast_Raise');
    for (const c of this.fjenderInden(40)) if (!c.erBygning && Math.hypot(c.x - x, c.z - z) < 7) c.lam?.(1.5);
    this.virkning({ varighed: 6, hver: 0.5, start: () => bus.emit('effekt', { type: 'søjle', x, z, farve: 0x6a4aa0, højde: 9 }), gør: () => {
      bus.emit('effekt', { type: 'evne', x, z, radius: 7, farve: 0x6a4aa0 });
      for (const c of this.fjenderInden(40)) if (Math.hypot(c.x - x, c.z - z) < 7) c.tagSkade(Math.round(22.5 * h.evneStyrke()), h);
    } });
  },

  // --- Kaldes fra helten (hero.js) og Evner ---
  dreamRustning() { return this.tTorn > 0 ? 5 : 0; },
  dreamAngreb() { return this.tDans > 0 ? 0.5 : 0; },
  // Moonlit Dance: undvig et slag (true = slaget gik forbi)
  undvig() { return this.tDans > 0 && Math.random() < 0.35; },
  // Thornmail: halvdelen af nærkampsskaden tilbage
  torne(mængde, kilde) {
    if (!(this.tTorn > 0) || !kilde || kilde.død || !kilde.tagSkade || this.helt.afstand(kilde) > 4) return;
    kilde.tagSkade(Math.round(mængde * 0.5), this.helt);
  },
};
