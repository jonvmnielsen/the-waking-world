// The Tides helte — deres anden og tredje evne (level 3 og 6). Første evne: heltevner.js.
// Warchief: War Cry, Earth Stomp (abilities.js, War Cry gælder nu også soldaterne)
// Stormsinger: Squall, Eye of the Storm · Wildtrack: Spear Volley, Predator
import { bus } from './events.js';

export const TIDE_EVNER = {
  squall: { navn: 'Squall', mana: 70, cd: 16, ikon: '🌀', tekst: 'A burst of storm wind: 70 damage and a 1.5-second stun to every enemy around you.' },
  eyeOfStorm: { navn: 'Eye of the Storm', mana: 120, cd: 40, ikon: '🌩️', tekst: 'For 6 seconds lightning strikes enemies near you — 45 damage every half second.' },
  spearVolley: { navn: 'Spear Volley', mana: 60, cd: 12, ikon: '🔱', tekst: 'Throw spears at up to five enemies at once, each for 1.3× damage.' },
  predator: { navn: 'Predator', mana: 80, cd: 30, ikon: '🐺', tekst: 'For 8 seconds: +60% attack speed, +30% speed, and double damage to marked prey.' },
};

export const tideMetoder = {
  squall() {
    const h = this.helt, fjender = this.fjenderInden(6);
    this.heltRåb('Spellcast_Raise');
    bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, farve: 0x9fd8ff });
    bus.emit('effekt', { type: 'stomp', x: h.x, z: h.z, radius: 6 });
    for (const c of fjender) { c.tagSkade(Math.round(70 * h.evneStyrke()), h); c.lam?.(1.5); }
  },

  eyeOfStorm() {
    const h = this.helt;
    this.heltRåb('Spellcast_Raise');
    this.virkning({ varighed: 6, hver: 0.5, gør: () => {
      const m = this.fjenderInden(8).sort(() => Math.random() - 0.5)[0];
      if (!m) return;
      m.tagSkade(Math.round(45 * h.evneStyrke()), h);
      bus.emit('effekt', { type: 'lyn', mål: m });
    } });
  },

  spearVolley() {
    const h = this.helt, mål = this.fjenderInden(13).sort((a, b) => h.afstand(a) - h.afstand(b)).slice(0, 5);
    if (!mål.length) return 'No enemy close enough';
    h.vend(mål[0].x, mål[0].z);
    h.spil('Throw', { loop: false, fart: 1.4, gentag: true, fade: 0.05 });
    h.sving = { tid: 0, varighed: 0.7, slagTid: 99, ramt: true };
    const skade = Math.round(h.slagSkade() * 1.3 * h.evneStyrke());
    mål.forEach((m, i) => setTimeout(() => !m.død && bus.emit('projektil', { fra: h, mål: m, skade, model: 'spyd' }), 150 + i * 90));
  },

  predator() {
    this.heltRåb('Spellcast_Raise');
    this.tRovdyr = 10;
    bus.emit('effekt', { type: 'evne', x: this.helt.x, z: this.helt.z, farve: 0xff9a4a });
  },
};
