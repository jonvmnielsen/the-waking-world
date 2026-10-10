// Neutrale steder der gør noget (GDD 4.3): livskilder heler, udkigstårne viser omegnen.
// Købmanden åbnes fra tryk.js; kro og guldminer får deres funktion i senere milepæle.
import { bus } from './events.js';

const KILDE_RADIUS = 9;
const UDKIG_RADIUS = 9;

export class StedLiv {
  constructor(steder, taage, effekter) {
    this.steder = steder.map((s) => ({ ...s, aktiv: false, puls: 0 }));
    this.taage = taage;
    this.effekter = effekter;
  }

  opdater(dt, helt) {
    if (helt.død) return;
    for (const s of this.steder) {
      const d = Math.hypot(helt.x - s.x, helt.z - s.z);
      if (s.type === 'kilde' && d < KILDE_RADIUS) {
        // Livskilden heler 4 % liv og 3 % mana i sekundet
        helt.hp = Math.min(helt.maxHp, helt.hp + helt.maxHp * 0.04 * dt);
        helt.mana = Math.min(helt.manaMax, helt.mana + helt.manaMax * 0.03 * dt);
        s.puls -= dt;
        if (s.puls <= 0) { s.puls = 1.2; this.effekter.bølge(helt.x, helt.z, 1.8, 0x6dff8a, 0.8); }
        if (!s.aktiv) { s.aktiv = true; bus.emit('besked', 'Livskilden heler dig'); }
      } else if (s.type === 'kilde') s.aktiv = false;

      if (s.type === 'udkig' && !s.aktiv && d < UDKIG_RADIUS) {
        s.aktiv = true;
        this.taage.tilføjKilde(s.x, s.z, 46);
        this.effekter.bølge(s.x, s.z, 10, 0xffe08a, 1.2);
        bus.emit('besked', 'Udkigstårnet viser dig omegnen');
      }
    }
  }
}
