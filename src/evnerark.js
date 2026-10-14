// The Architects' helte — deres anden og tredje evne (level 3 og 6). Første evne: heltevner.js.
// Knight Commander: Shield Wall, Consecration · Lorewarden: Binding Word, Old Light · Ranger Captain: Rapid Fire, Rain of Bolts
import { bus } from './events.js';

export const ARK_EVNER = {
  shieldWall: { navn: 'Shield Wall', mana: 60, cd: 24, ikon: '🧱', tekst: 'For 8 seconds your hero and soldiers nearby take 40% less damage.' },
  consecration: { navn: 'Consecration', mana: 110, cd: 35, ikon: '☀️', tekst: 'Hallowed ground for 6 seconds: enemies on it take 40 damage a second, your units heal 25 a second.' },
  bindingWord: { navn: 'Binding Word', mana: 55, cd: 12, ikon: '📜', tekst: 'Speak a word of the old law: 80 damage, and the target cannot move or fight for 2.5 seconds.' },
  oldLight: { navn: 'Old Light', mana: 130, cd: 36, ikon: '🔆', tekst: 'A pillar of ancient light falls where the enemy stands: 240 damage to all nearby.' },
  rapidFire: { navn: 'Rapid Fire', mana: 55, cd: 20, ikon: '🏹', tekst: 'For 6 seconds your hero shoots 80% faster.' },
  rainOfBolts: { navn: 'Rain of Bolts', mana: 120, cd: 34, ikon: '🌧️', tekst: 'Three volleys rain on the enemy: 70 damage each to all within 6.' },
};

export const arkMetoder = {
  shieldWall() {
    const h = this.helt;
    this.heltRåb('Block');
    this.tMur = 8;
    for (const s of this.soldaterNær(12)) { s.buff.linje = 8; bus.emit('effekt', { type: 'samlet', x: s.x, z: s.z, farve: 0x9fc3ff }); }
    bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, farve: 0x9fc3ff });
  },

  consecration() {
    const h = this.helt, x = h.x, z = h.z;
    this.heltRåb('Spellcast_Raise');
    this.virkning({ varighed: 6, hver: 0.5, start: () => bus.emit('effekt', { type: 'portal', x, z }), gør: () => {
      bus.emit('effekt', { type: 'evne', x, z, farve: 0xffe7a0 });
      for (const c of this.fjenderInden(40)) if (Math.hypot(c.x - x, c.z - z) < 6) c.tagSkade(Math.round(20 * h.evneStyrke()), h);
      for (const u of [h, ...this.soldaterNær(40)]) if (!u.død && Math.hypot(u.x - x, u.z - z) < 6) u.hp = Math.min(u.maxHp, u.hp + 12.5);
    } });
  },

  bindingWord() {
    const h = this.helt, mål = this.sigte(12);
    if (!mål) return 'No enemy close enough';
    h.vend(mål.x, mål.z); this.heltRåb('Spellcast_Shoot');
    setTimeout(() => { if (mål.død) return; mål.tagSkade(Math.round(80 * h.evneStyrke()), h); mål.lam?.(2.5); bus.emit('effekt', { type: 'samlet', x: mål.x, z: mål.z, farve: 0xffe7a0 }); }, 300);
  },

  oldLight() {
    const h = this.helt, mål = this.sigte(14);
    if (!mål) return 'No enemy close enough';
    const x = mål.x, z = mål.z;
    h.vend(x, z); this.heltRåb('Spellcast_Raise');
    bus.emit('effekt', { type: 'portal', x, z });
    setTimeout(() => {
      bus.emit('effekt', { type: 'ascension', x, z, farve: 0xffe7a0 });
      for (const c of this.fjenderInden(40)) if (Math.hypot(c.x - x, c.z - z) < 5.5) c.tagSkade(Math.round(240 * h.evneStyrke()), h);
    }, 900);
  },

  rapidFire() {
    this.heltRåb('Spellcast_Raise');
    this.tSkydning = 6;
  },

  rainOfBolts() {
    const h = this.helt, mål = this.sigte(16);
    if (!mål) return 'No enemy close enough';
    const x = mål.x, z = mål.z;
    h.vend(x, z); h.spil('2H_Ranged_Shoot', { loop: false, fart: 1.2, gentag: true, fade: 0.05 });
    h.sving = { tid: 0, varighed: 0.8, slagTid: 99, ramt: true };
    this.virkning({ varighed: 1.6, hver: 0.6, gør: () => {
      bus.emit('effekt', { type: 'stomp', x, z, radius: 6 });
      for (const c of this.fjenderInden(40)) if (Math.hypot(c.x - x, c.z - z) < 6) c.tagSkade(Math.round(70 * h.evneStyrke()), h);
    } });
  },
};
