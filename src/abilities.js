// Heltens tre evner. Slot 0 for alle, slot 1 og 2 afhænger af valgt essens.
// Værdier fra docs/balance/ability_values_v1.md
import { bus } from './events.js';

// Essenserne (GDD 6): hvordan helten kæmper nu, hvilken egenskab der vokser mest, og et vink om hvad valget
// kan betyde senere (Ascension ved level 10 og hærens veteran-grene) — uden at afsløre det hele.
export const ESSENSER = {
  vold: {
    navn: 'Violence', motto: 'Strike first. Strike hard.', stil: 'aggression',
    tekst: 'Raw aggression. High burst and area damage, but little to keep you alive.',
    ekko: ['Your warriors will learn to charge with you.', 'At level 10, a path paved in blood may open.'],
  },
  tålmodighed: {
    navn: 'Patience', motto: 'Outlast everything.', stil: 'overlevelse',
    tekst: 'Defensive. You survive long fights and protect what is yours, but your burst is low.',
    ekko: ['Your warriors will learn to hold the line.', 'At level 10, those who endure may come to lead.'],
  },
  ofring: {
    navn: 'Sacrifice', motto: 'Pay in blood. Win anyway.', stil: 'kaos',
    tekst: 'Risk and reward. Spend your own health for devastating strikes.',
    ekko: ['Chaos will follow in your wake.', 'At level 10, something older may answer your offering.'],
  },
};

export const EVNER = {
  bruteStrike: { navn: 'Brute Strike', mana: 40, cd: 8, ikon: '🪓', tekst: 'A heavy blow for 1.8× damage on the nearest enemy.' },
  warCry: { navn: 'War Cry', mana: 60, cd: 20, ikon: '📯', tekst: '+30% attack speed for 5 seconds.' },
  ironSkin: { navn: 'Iron Skin', mana: 50, cd: 25, ikon: '🛡️', tekst: '+50% armor for 8 seconds.' },
  bloodPrice: { navn: 'Blood Price', mana: 0, cd: 15, ikon: '🩸', tekst: 'Lose 15% health; your next blow deals 3× damage.' },
  earthStomp: { navn: 'Earth Stomp', mana: 100, cd: 30, ikon: '💥', tekst: '120 damage and a 1-second stun around you.' },
  endure: { navn: 'Endure', mana: 80, cd: 60, ikon: '⛰️', tekst: 'Cannot die for 2 seconds.' },
  martyr: { navn: "Martyr's Strike", mana: 0, cd: 25, ikon: '⚔️', tekst: 'Hit every enemy around you. Costs 30% health.' },
};

export const SLOTS = {
  vold: ['bruteStrike', 'warCry', 'earthStomp'],
  tålmodighed: ['bruteStrike', 'ironSkin', 'endure'],
  ofring: ['bruteStrike', 'bloodPrice', 'martyr'],
};
export const OPLÅS = [1, 3, 6];

export class Evner {
  constructor(helt, essens) {
    this.helt = helt;
    this.essens = essens;
    this.cooldowns = [0, 0, 0];
    this.tWarCry = 0; this.tIronSkin = 0; this.tUdødelig = 0; this.blodAktiv = false;
  }

  info(slot) {
    const id = SLOTS[this.essens][slot];
    return { id, ...EVNER[id], oplåsLevel: OPLÅS[slot], oplåst: this.helt.level >= OPLÅS[slot], cd: this.cooldowns[slot], cdMax: EVNER[id].cd };
  }

  opdater(dt) {
    for (let i = 0; i < 3; i++) this.cooldowns[i] = Math.max(0, this.cooldowns[i] - dt);
    this.tWarCry = Math.max(0, this.tWarCry - dt);
    this.tIronSkin = Math.max(0, this.tIronSkin - dt);
    this.tUdødelig = Math.max(0, this.tUdødelig - dt);
  }

  angrebsBonus() { return this.tWarCry > 0 ? 0.3 : 0; }
  rustningsBonus() { return this.tIronSkin > 0 ? Math.round(this.helt.rustning() * 5) / 10 : 0; }
  erUdødelig() { return this.tUdødelig > 0; }

  slagMultiplikator(skade) {
    if (!this.blodAktiv) return skade;
    this.blodAktiv = false;
    bus.emit('effekt', { type: 'blodslag', helt: this.helt });
    return skade * 3;
  }

  // Forsøg at bruge en evne. Returnerer en fejltekst hvis det ikke kan lade sig gøre.
  brug(slot) {
    const h = this.helt;
    const e = this.info(slot);
    if (h.død) return 'Your hero has fallen';
    if (!e.oplåst) return `Unlocks at level ${e.oplåsLevel}`;
    if (e.cd > 0) return `${e.navn} is ready in ${Math.ceil(e.cd)}s`;
    if (h.mana < e.mana) return 'Not enough mana';
    const fejl = this[e.id]();
    if (fejl) return fejl;
    h.mana -= e.mana;
    this.cooldowns[slot] = e.cdMax;
    h.sidstIKamp = h.tid;
    bus.emit('evne', { helt: h, id: e.id, navn: e.navn });
    return null;
  }

  fjenderInden(r) {
    return this.helt.verden.creeps.filter((c) => !c.død && this.helt.afstand(c) - c.radius <= r);
  }

  bruteStrike() {
    const h = this.helt;
    const mål = (h.mål && !h.mål.død && h.afstand(h.mål) - h.mål.radius <= h.stats.rækkevidde * 1.3)
      ? h.mål : this.fjenderInden(h.stats.rækkevidde * 1.3).sort((a, b) => h.afstand(a) - h.afstand(b))[0];
    if (!mål) return 'No enemy close enough';
    h.mål = mål;
    h.vend(mål.x, mål.z);
    h.spil('2H_Melee_Attack_Chop', { loop: false, fart: 1.8, gentag: true, fade: 0.05 });
    h.sving = { tid: 0, varighed: 0.9, slagTid: 0.4, mål, ramt: true };
    setTimeout(() => {
      if (mål.død) return;
      mål.tagSkade(Math.round(h.slagSkade() * 1.8 * h.evneStyrke()), h);
      bus.emit('effekt', { type: 'tungtSlag', mål });
    }, 400);
    h.cooldown = h.angrebsTid();
  }

  warCry() { this.tWarCry = 5; this.heltRåb(); }
  ironSkin() { this.tIronSkin = 8; this.heltRåb(); }
  endure() { this.tUdødelig = 2; this.heltRåb(); }

  bloodPrice() {
    const h = this.helt;
    h.hp = Math.max(1, h.hp - Math.floor(h.hp * 0.15));
    this.blodAktiv = true;
    this.heltRåb();
  }

  earthStomp() {
    const h = this.helt;
    h.spil('2H_Melee_Attack_Chop', { loop: false, fart: 1.6, gentag: true, fade: 0.05 });
    h.sving = { tid: 0, varighed: 1.0, slagTid: 99, ramt: true };
    setTimeout(() => {
      bus.emit('effekt', { type: 'stomp', x: h.x, z: h.z, radius: 5 });
      for (const c of this.fjenderInden(5)) { c.tagSkade(Math.round(120 * h.evneStyrke()), h); c.lam?.(1); }
    }, 450);
  }

  martyr() {
    const h = this.helt;
    const fjender = this.fjenderInden(h.stats.rækkevidde + 0.8);
    if (!fjender.length) return 'No enemies in range';
    h.hp = Math.max(1, h.hp - Math.floor(h.hp * 0.3));
    h.spil('2H_Melee_Attack_Spin', { loop: false, fart: 2, gentag: true, fade: 0.05 });
    h.sving = { tid: 0, varighed: 1.2, slagTid: 99, ramt: true };
    setTimeout(() => {
      bus.emit('effekt', { type: 'spin', x: h.x, z: h.z, radius: h.stats.rækkevidde + 0.8 });
      for (const c of fjender) if (!c.død) c.tagSkade(Math.round(h.slagSkade() * h.evneStyrke()), h);
    }, 500);
  }

  heltRåb() {
    const h = this.helt;
    if (h.sving) return;
    h.spil('Spellcast_Raise', { loop: false, fart: 1.6, gentag: true, fade: 0.1 });
    h.sving = { tid: 0, varighed: 1.0, slagTid: 99, ramt: true };
  }
}
