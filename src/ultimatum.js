// Ultimatet (M14b, GDD 17b søjle 1 — WC3's level-6-øjeblik). Heltens tredje evne er dens ultimatum:
// - Når ultimatet læres (et skill point fra level 6), er det et øjeblik: gylden søjle, banner, heltens replik.
// - Knappen har en gylden ramme, der pulserer, når ultimatet er klar.
// - Når det bruges: lyset blinker, kameraet ryster, helten råber, og evnen er 60 % stærkere end en
//   almindelig evne (heltens evnestyrke løftes, mens ultimatet virker — tælles ned i heltevner.js).
//   Til gengæld er ventetiden lang.
import { bus } from './events.js';
import { EVNER } from './abilities.js';
import { STEMMER } from './heltreplikdata.js';

export const ULT_SLOT = 2;
export const ULT_LEVEL = 6;
const ULT_VIRKER = 11;    // sekunder med 1,6 × evnestyrke (heltstats.js); det længste ultimatum varer 10

// Ultimaternes egne tal: længere ventetid og mere mana end før
export const ULT_TAL = {
  earthStomp: { mana: 140, cd: 75, tekst: 'ULTIMATE. The earth breaks around you: 190 damage and a 1.5-second stun to every enemy near you.' },
  eyeOfStorm: { mana: 160, cd: 80, tekst: 'ULTIMATE. For 6 seconds lightning strikes enemies near you — 72 damage every half second.' },
  predator: { mana: 120, cd: 70, tekst: 'ULTIMATE. For 10 seconds: +60% attack speed, +30% speed, and double damage to marked prey.' },
  consecration: { mana: 150, cd: 75, tekst: 'ULTIMATE. Hallowed ground for 6 seconds: enemies on it take 64 damage a second, your units heal 40 a second.' },
  oldLight: { mana: 170, cd: 80, tekst: 'ULTIMATE. A pillar of ancient light falls where the enemy stands: 385 damage to all nearby.' },
  rainOfBolts: { mana: 160, cd: 75, tekst: 'ULTIMATE. Three volleys rain on the enemy: 112 damage each to all within 6.' },
};
for (const [id, t] of Object.entries(ULT_TAL)) if (EVNER[id]) Object.assign(EVNER[id], t, { ultimatum: true });


export class Ultimatum {
  constructor(spil) {
    this.spil = spil;
    this.flash = document.getElementById('ult-blink');
    bus.on('evne_lært', ({ helt, slot, rang }) => { if (slot === ULT_SLOT && rang === 1 && helt === spil.helt) this.oplåst(); });   // ultimatet læres med et skill point fra level 6
    bus.on('evne', ({ helt, id }) => { if (helt === spil.helt && EVNER[id]?.ultimatum) this.brugt(helt, id); });
  }

  linje(slags) {
    const l = STEMMER[this.spil.helt.type]?.[slags];
    return l?.[Math.floor(Math.random() * l.length)];
  }

  oplåst() {
    const h = this.spil.helt, id = h.def?.evner?.[ULT_SLOT], e = EVNER[id];
    if (!e) return;
    bus.emit('effekt', { type: 'ascension', x: h.x, z: h.z, farve: 0xffc94a });
    bus.emit('banner', { titel: `Ultimate: ${e.navn}`, tekst: e.tekst.replace('ULTIMATE. ', ''), lang: true });
    const r = this.linje('ultimatum');
    if (r) bus.emit('replik', { enhed: h, tekst: r });
  }

  brugt(h, id) {
    h.ultimaTid = ULT_VIRKER;
    this.blink();
    this.spil.rig.ryst?.(0.45, 0.6);
    bus.emit('effekt', { type: 'ascension', x: h.x, z: h.z, farve: 0xffc94a });
    const r = this.linje('ult');
    if (r) bus.emit('replik', { enhed: h, tekst: r });
  }

  blink() {
    const el = this.flash;
    if (!el) return;
    el.classList.remove('vis'); void el.offsetWidth; el.classList.add('vis');
  }
}
