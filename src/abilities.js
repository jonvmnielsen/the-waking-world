// Heltens tre evner. Slot 0 for alle, slot 1 og 2 afhænger af valgt essens.
// Værdier fra docs/balance/ability_values_v1.md
import { bus } from './events.js';

export const ESSENSER = {
  vold: { navn: 'Vold', tekst: 'Aggressiv skade. Høj burst og områdeskade, ingen overlevelse.' },
  tålmodighed: { navn: 'Tålmodighed', tekst: 'Defensiv. Overlever længe, men lav burst-skade.' },
  ofring: { navn: 'Ofring', tekst: 'Risiko og belønning. Betal med liv for ekstrem skade.' },
};

const EVNER = {
  bruteStrike: { navn: 'Brute Strike', mana: 40, cd: 8, ikon: '🪓', tekst: '1,8× skade på nærmeste fjende' },
  warCry: { navn: 'War Cry', mana: 60, cd: 20, ikon: '📯', tekst: '+30 % angrebshastighed i 5 s' },
  ironSkin: { navn: 'Iron Skin', mana: 50, cd: 25, ikon: '🛡️', tekst: '+50 % rustning i 8 s' },
  bloodPrice: { navn: 'Blood Price', mana: 0, cd: 15, ikon: '🩸', tekst: 'Mist 15 % liv, næste slag 3× skade' },
  earthStomp: { navn: 'Earth Stomp', mana: 100, cd: 30, ikon: '💥', tekst: '120 skade og 1 s lammelse omkring dig' },
  endure: { navn: 'Endure', mana: 80, cd: 60, ikon: '⛰️', tekst: 'Udødelig i 2 s' },
  martyr: { navn: "Martyr's Strike", mana: 0, cd: 25, ikon: '⚔️', tekst: 'Ram alle tæt på, koster 30 % liv' },
};

const SLOTS = {
  vold: ['bruteStrike', 'warCry', 'earthStomp'],
  tålmodighed: ['bruteStrike', 'ironSkin', 'endure'],
  ofring: ['bruteStrike', 'bloodPrice', 'martyr'],
};
const OPLÅS = [1, 3, 6];

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
  rustningsBonus() { return this.tIronSkin > 0 ? Math.floor(this.helt.stats.rustning * 0.5) : 0; }
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
    if (h.død) return 'Helten er faldet';
    if (!e.oplåst) return `Låses op ved level ${e.oplåsLevel}`;
    if (e.cd > 0) return `${e.navn} er klar om ${Math.ceil(e.cd)} s`;
    if (h.mana < e.mana) return 'Ikke nok mana';
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
    if (!mål) return 'Ingen fjende tæt nok på';
    h.mål = mål;
    h.vend(mål.x, mål.z);
    h.spil('2H_Melee_Attack_Chop', { loop: false, fart: 1.8, gentag: true, fade: 0.05 });
    h.sving = { tid: 0, varighed: 0.9, slagTid: 0.4, mål, ramt: true };
    setTimeout(() => {
      if (mål.død) return;
      mål.tagSkade(Math.round(h.slagSkade() * 1.8), h);
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
      for (const c of this.fjenderInden(5)) { c.tagSkade(120, h); c.lam?.(1); }
    }, 450);
  }

  martyr() {
    const h = this.helt;
    const fjender = this.fjenderInden(h.stats.rækkevidde + 0.8);
    if (!fjender.length) return 'Ingen fjender inden for rækkevidde';
    h.hp = Math.max(1, h.hp - Math.floor(h.hp * 0.3));
    h.spil('2H_Melee_Attack_Spin', { loop: false, fart: 2, gentag: true, fade: 0.05 });
    h.sving = { tid: 0, varighed: 1.2, slagTid: 99, ramt: true };
    setTimeout(() => {
      bus.emit('effekt', { type: 'spin', x: h.x, z: h.z, radius: h.stats.rækkevidde + 0.8 });
      for (const c of fjender) if (!c.død) c.tagSkade(h.slagSkade(), h);
    }, 500);
  }

  heltRåb() {
    const h = this.helt;
    if (h.sving) return;
    h.spil('Spellcast_Raise', { loop: false, fart: 1.6, gentag: true, fade: 0.1 });
    h.sving = { tid: 0, varighed: 1.0, slagTid: 99, ramt: true };
  }
}
