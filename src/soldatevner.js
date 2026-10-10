// Grunt-grenenes evner (DESIGN_PROGRESSION del 2). De bruges automatisk, når situationen passer:
// - Ironhide · Spot: fjender tæt på skal angribe ironhiden i 2,5 sek.
// - Ravager · Storm: spurter mod målet, og første slag gør 1,5× skade.
// - Berserker · Raseri: hvert slag rammer alle fjender tæt på i 4 sek. (adlyder ikke ordrer imens).
// Blandes ind i Soldat-klassen.
import { bus } from './events.js';
import { reducérSkade } from './config.js';

const CD = { ironhide: 12, ravager: 10, berserker: 14 };

const fjenderNær = (u, r) => u.verden.creeps.filter((c) => !c.død && c.tilstand === 'jagt' && u.afstand(c) < r);

export const evneMetoder = {
  opdaterEvner(dt) {
    const e = this.evne, gren = this.vet.gren?.id;
    e.cd = Math.max(0, e.cd - dt);
    if (e.storm > 0) { e.storm -= dt; if (e.storm <= 0) this.fart = this.basisFart; }
    if (e.raseri > 0) e.raseri -= dt;
    if (!gren || e.cd > 0) return;

    if (gren === 'ironhide') {
      const nær = fjenderNær(this, 7);
      if (nær.length < 2) return;
      for (const c of nær) { c.mål = this; c.spot = 2.5; }
      this.brugEvne(0xff5a4a);
    } else if (gren === 'ravager') {
      if (!this.mål || this.afstand(this.mål) < 4.5 || this.gåOrdre) return;
      e.storm = 3; this.basisFart = this.fart; this.fart *= 2; this.stormSlag = true;
      this.brugEvne(0xff9a5a);
    } else if (gren === 'berserker') {
      if (fjenderNær(this, 4.5).length < 2) return;
      e.raseri = 4; this.gåOrdre = false; this.hen = null;
      this.brugEvne(0xffc23a);
    }
  },

  brugEvne(farve) {
    this.evne.cd = CD[this.vet.gren.id];
    bus.emit('effekt', { type: 'evne', x: this.x, z: this.z, farve });
    bus.emit('flydetekst', { enhed: this, tekst: this.vet.gren.evne, klasse: 'level' });
  },

  // Skadefaktor på næste slag
  slagFaktor() {
    if (this.stormSlag) { this.stormSlag = false; return 1.5; }
    return 1;
  },

  // Raseri: slaget rammer også de andre fjender tæt på
  vedSlag(mål, skade) {
    if (!(this.evne.raseri > 0)) return;
    for (const c of fjenderNær(this, this.data.rækkevidde + 1.6)) {
      if (c !== mål) c.tagSkade(reducérSkade(Math.round(skade * 0.8), 0), this);
    }
  },
};
