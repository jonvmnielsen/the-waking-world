// Træer der går (M15, GDD 5.5: The Dreamings bygninger kan gå og flytte sig). Træet og de gamle træer
// (racer.js: byg.vandrer) kan rykke rødderne op, gå et nyt sted hen og slå rod igen — som WC3's Ancients.
// Mens et træ går, virker det ikke: ingen aflevering, ingen træning, ingen forskning. Det slår rod på det
// nærmeste ledige sted, hvor bygningen må stå. Et gemt spil husker stedet, hvor det sidst stod rodfæstet.
import { bus } from './events.js';
import { SPILLER } from './racer.js';
import { frigør, optag, vælgPlads, pladsPunkt } from './byggeplads.js';
import { hexTilVerden } from './hexgrid.js';

const FART = 2.4;

export const kanVandre = (b) => !!SPILLER.byg?.vandrer?.includes(b.type) && b.færdig && !b.død;

export const vandreMetoder = {
  rykOp() {
    if (!kanVandre(this) || this.oprykket) return 'It cannot walk';
    if (this.kø.length) return 'Finish training first';
    this.rodSted = { x: this.x, z: this.z, felter: this.felter, plads: this.plads };   // til gem spil
    for (const f of this.felter) frigør(f, this.plads);
    this.oprykket = true; this.vej = [];
    bus.emit('effekt', { type: 'evne', x: this.x, z: this.z, radius: 4, farve: 0x8a7a62 });
    bus.emit('ryst', { styrke: 0.12, tid: 0.3 });
    bus.emit('besked', `The ${this.data.navn} pulls up its roots — tap the ground to send it walking`);
    return null;
  },

  vandreTil(x, z) {
    if (!this.oprykket) return;
    this.vej = this.verden.kort.findVej({ x: this.x, z: this.z }, { x, z }) ?? [];
    if (!this.vej.length) bus.emit('besked', 'It cannot walk there');
  },

  // Slå rod på det nærmeste sted, hvor bygningen må stå
  slåRod() {
    if (!this.oprykket) return null;
    const base = this.base, kort = this.verden.kort, felter = [...kort.felter.values()];
    const nær = felter.map((f) => ({ f, c: hexTilVerden(f.q, f.r) })).filter(({ c }) => Math.hypot(c.x - this.x, c.z - this.z) < 18)
      .sort((a, b) => Math.hypot(a.c.x - this.x, a.c.z - this.z) - Math.hypot(b.c.x - this.x, b.c.z - this.z));
    for (const { f } of nær) {
      const i = vælgPlads(f, this.type, this.x, this.z);
      if (i == null || base.kanPlacere(this.type, f, i)) continue;
      const p = pladsPunkt(f, i);
      this.verden.natur?.ryd(f);
      Object.assign(this, { x: p.x, z: p.z, felter: [f], plads: i, oprykket: false, vej: [] });
      optag(f, i, this);
      this.rod.position.set(p.x, 0, p.z); this.rod.rotation.z = 0;
      if (this.tågeKilde) { this.tågeKilde.x = p.x; this.tågeKilde.z = p.z; }
      bus.emit('effekt', { type: 'evne', x: p.x, z: p.z, radius: 4, farve: 0x7ab04a });
      bus.emit('besked', `The ${this.data.navn} takes root`);
      bus.emit('bygning_flyttet', { bygning: this });
      return null;
    }
    return 'There is no room to take root here';
  },

  // Et skridt på vejen (kaldes fra Bygning.opdater, mens træet går)
  vandreTrin(dt) {
    this.vandreTid = (this.vandreTid ?? 0) + dt;
    const m = this.vej?.[0];
    if (m) {
      const dx = m.x - this.x, dz = m.z - this.z, d = Math.hypot(dx, dz), skridt = FART * dt;
      if (d <= skridt) { this.x = m.x; this.z = m.z; this.vej.shift(); }
      else { this.x += (dx / d) * skridt; this.z += (dz / d) * skridt; this.rod.rotation.y = Math.atan2(dx, dz); }
    }
    const går = !!m;
    this.rod.position.set(this.x, 0.25 + (går ? Math.abs(Math.sin(this.vandreTid * 4)) * 0.35 : Math.sin(this.vandreTid * 1.5) * 0.08), this.z);
    this.rod.rotation.z = går ? Math.sin(this.vandreTid * 4) * 0.05 : 0;
    if (this.tågeKilde) { this.tågeKilde.x = this.x; this.tågeKilde.z = this.z; }
  },
};
