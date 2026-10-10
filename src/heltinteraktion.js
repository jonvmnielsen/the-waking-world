// Helten går hen til noget og gør noget, når den er tæt nok på (saml op, åbn kiste, handl),
// og kan teleporteres (hjemkald). Blandes ind i Helt-klassen.
import { bus } from './events.js';

export const interaktionMetoder = {
  // Interaktion: gå hen til et sted og gør noget, når helten er tæt nok på (saml op, åbn kiste, handl)
  kommandoInteraktion(x, z, radius, udfør) {
    if (this.død) return;
    this.mål = null; this.sving = null;
    this.handling = { x, z, radius, udfør };
    this.gåOrdre = Math.hypot(x - this.x, z - this.z) <= radius ? false : this.gåTil(x, z);
  },

  teleporter(p) {
    this.rod.position.set(p.x, 0, p.z);
    this.stop(); this.mål = null; this.handling = null;
    bus.emit('teleport', { helt: this });
  },

  opdaterHandling() {
    const h = this.handling;
    if (!h) return;
    if (Math.hypot(h.x - this.x, h.z - this.z) <= h.radius) {
      this.handling = null; this.stop(); this.gåOrdre = false;
      h.udfør();
    } else if (!this.bevæger) this.handling = null;   // kunne ikke nå frem
  },
};
