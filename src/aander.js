// Ånder (Jon, M14d): ånderne er ekkoerne fra de faldne — de samme, der ellers driver til Erevoss (ekko.js).
// Helten fanger dem og bærer dem, men bærer dem kun. Når helten kommer hjem til et Spirit Altar, ofres de dér
// (alter.js) og kan bruges på velsignelser. Dør helten undervejs, falder alt, den bærer (ekko.js laver et
// gyldent ekko af det). Bring din høst hjem.
import { bus } from './events.js';

const ALTER_AFSTAND = 11;

export class Ånder {
  constructor(spil) {
    this.spil = spil;
    this.båret = 0;   // på helten
    this.ofret = 0;   // ofret ved alteret, kan bruges på velsignelser
  }

  // Hvor mange ånder et faldent væsen efterlader i sit ekko
  antal(c) {
    const sult = 1 + 0.5 * (this.spil.helt.velsignelser?.rang('åndesult') ?? 0);
    let n = c.erHelt ? 15 : c.boss ? 12 : Math.max(1, c.level ?? 1);
    if (c.champion) n *= 2;
    return Math.round(n * sult);
  }

  saml(n) { this.båret += n; }

  // Helten falder: alt, den bar, tabes (returnerer hvor meget)
  tabAlt(h) {
    const n = this.båret;
    if (n <= 0) return 0;
    this.båret = 0;
    bus.emit('krønike', { titel: 'Spirits scattered', tekst: `${n} spirits fell with your hero. Take them back before the enemy does — or before they drift to Erevoss.`, x: h.x, z: h.z, farve: '#ffe7a0', vigtig: true });
    return n;
  }

  // Ved alteret ofres det, helten bærer
  opdater() {
    const s = this.spil, h = s.helt;
    if (h.død || this.båret <= 0) return;
    const a = s.base.bygninger.find((b) => b.data.alter && b.færdig && !b.død && Math.hypot(b.x - h.x, b.z - h.z) < ALTER_AFSTAND);
    if (!a) return;
    this.ofret += this.båret;
    bus.emit('flydetekst', { enhed: h, tekst: `${this.båret} spirits offered`, klasse: 'level' });
    bus.emit('effekt', { type: 'kiste', x: a.x, z: a.z });
    this.båret = 0;
  }

  gem() { return { båret: this.båret, ofret: this.ofret }; }
  gendan(g) { if (g) { this.båret = g.båret ?? 0; this.ofret = g.ofret ?? 0; } }
}
