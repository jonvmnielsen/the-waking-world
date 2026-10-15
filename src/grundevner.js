// Soldaternes egne evner (M14b, GDD 17b søjle 2: få enheder — hver enkelt tæller). Hver slags soldat har
// én evne, som den selv bruger, når situationen passer (autocast, som WC3's evner med autocast slået til):
// - Grunt · Brutal Swing: næste slag gør dobbelt skade og lammer målet et øjeblik.
// - Spear Thrower · Pinning Spear: et ekstra spyd, der nagler målet fast i 1,5 sek.
// - Footman · Defend: løfter skjoldet, når han er såret, og tager halv skade i 5 sek.
// - Marksman · Aimed Shot: næste skud gør 2,2 × skade.
// Grenenes evner (veteraner) kommer oven i (soldatevner.js).
import { bus } from './events.js';

export const GRUNDEVNER = {
  grunt: { navn: 'Brutal Swing', cd: 9, farve: 0xff7a3a, tekst: 'Every 9 s: a crushing blow for double damage that stuns for a moment.' },
  spydkaster: { navn: 'Pinning Spear', cd: 12, farve: 0xd8c8a0, tekst: 'Every 12 s: an extra spear that pins the target in place for 1.5 s.' },
  fodsoldat: { navn: 'Defend', cd: 14, farve: 0x7ab4ff, tekst: 'When wounded: raises the shield and takes half damage for 5 s.' },
  armbrøst: { navn: 'Aimed Shot', cd: 10, farve: 0xffe08a, tekst: 'Every 10 s: a careful shot for 2.2× damage.' },
};

export const grundMetoder = {
  // Kaldes hvert billede fra opdaterEvner
  opdaterGrundEvne(dt) {
    const d = GRUNDEVNER[this.type];
    if (!d) return;
    const g = (this.grund ??= { cd: 2 + Math.random() * 3, forsvar: 0 });
    g.cd = Math.max(0, g.cd - dt);
    g.forsvar = Math.max(0, g.forsvar - dt);
    if (g.cd > 0) return;
    const m = this.mål, iRækkevidde = m && !m.død && this.afstand(m) - (m.radius ?? 0) <= this.data.rækkevidde + 0.5;
    if (this.type === 'grunt' || this.type === 'armbrøst') {
      if (!iRækkevidde || this.kraft) return;
      this.kraft = this.type === 'grunt' ? 2 : 2.2;
      this.kraftLam = this.type === 'grunt' ? 0.7 : 0;
    } else if (this.type === 'spydkaster') {
      if (!iRækkevidde) return;
      bus.emit('projektil', { fra: this, mål: m, skade: Math.round(this.slagSkade() * 0.8), model: 'spyd' });
      m.lam?.(1.5);
      bus.emit('flydetekst', { enhed: m, tekst: 'Pinned!', klasse: 'immun' });
    } else if (this.type === 'fodsoldat') {
      if (!this.iKamp || this.hp > this.maxHp * 0.65) return;
      g.forsvar = 5;
      bus.emit('flydetekst', { enhed: this, tekst: 'Defend!', klasse: 'level' });
    }
    g.cd = d.cd;
    bus.emit('effekt', { type: 'samlet', x: this.x, z: this.z, farve: d.farve });
  },

  // Skadefaktor fra Brutal Swing / Aimed Shot (bruges én gang)
  grundKraft() {
    if (!this.kraft) return 1;
    const k = this.kraft; this.kraft = 0;
    return k;
  },

  // Defend: halv skade
  grundForsvar() { return this.grund?.forsvar > 0 ? 0.5 : 1; },
};
