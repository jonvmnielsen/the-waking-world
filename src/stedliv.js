// Neutrale steder der gør noget (GDD 4.3): livskilder heler, udkigstårne viser omegnen.
// Købmanden og kroen åbnes fra tryk.js (kroen hyrer lejesoldater, se kro.js).
import { bus } from './events.js';
import { STORKILDE } from './storkilde.js';

const KILDE_RADIUS = 9;
const UDKIG_RADIUS = 9;

export class StedLiv {
  constructor(steder, taage, effekter) {
    this.steder = steder.map((s) => ({ ...s, aktiv: false, puls: 0 }));
    this.taage = taage;
    this.effekter = effekter;
  }

  opdater(dt, helt, spil) {
    this.storkilde(dt, spil);
    if (helt.død) return;
    for (const s of this.steder) {
      const d = Math.hypot(helt.x - s.x, helt.z - s.z);
      if (s.type === 'kilde' && d < KILDE_RADIUS) {
        // Livskilden heler 4 % liv og 3 % mana i sekundet
        helt.hp = Math.min(helt.maxHp, helt.hp + helt.maxHp * 0.04 * dt);
        helt.mana = Math.min(helt.manaMax, helt.mana + helt.manaMax * 0.03 * dt);
        s.puls -= dt;
        if (s.puls <= 0) { s.puls = 1.2; this.effekter.bølge(helt.x, helt.z, 1.8, 0x6dff8a, 0.8); }
        if (!s.aktiv) { s.aktiv = true; bus.emit('besked', 'The fountain of life heals you'); }
      } else if (s.type === 'kilde') s.aktiv = false;

      if (s.type === 'udkig' && !s.aktiv && d < UDKIG_RADIUS) {
        s.aktiv = true;
        this.taage.tilføjKilde(s.x, s.z, 46);
        this.effekter.bølge(s.x, s.z, 10, 0xffe08a, 1.2);
        bus.emit('besked', 'The watchtower reveals the land around it');
      }
    }
  }

  // Den store kilde heler alle, der står ved den — helten, soldater, arbejdere og fjendens hær — og
  // dens vand glitrer (storkilde.js)
  storkilde(dt, spil) {
    for (const s of this.steder) {
      if (s.type !== 'storkilde' || !spil) continue;
      s.t = (s.t ?? 0) + dt;
      if (!s.vand && s.pynt?.obj) {
        s.vand = [];
        s.pynt.obj.traverse((o) => { if (o.isMesh && /_crystal$/.test(o.name)) { o.material = o.material.clone(); o.material.emissive?.setHex(0x3aa8d8); s.vand.push(o.material); } });
      }
      for (const m of s.vand ?? []) m.emissiveIntensity = 0.45 + Math.sin(s.t * 2.2) * 0.25;
      const R = STORKILDE.radius, nær = (u) => !u.død && Math.hypot(u.x - s.x, u.z - s.z) < R;
      const enheder = [spil.helt, ...spil.base.soldater, ...spil.base.arbejdere, ...(spil.modstander?.levende ?? [])].filter(nær);
      for (const u of enheder) {
        u.hp = Math.min(u.maxHp, u.hp + u.maxHp * STORKILDE.liv * dt);
        if (u.manaMax) u.mana = Math.min(u.manaMax, u.mana + u.manaMax * STORKILDE.mana * dt);
      }
      s.puls = (s.puls ?? 0) - dt;
      if (enheder.length && s.puls <= 0) { s.puls = 1.4; this.effekter.bølge(s.x, s.z, R * 0.8, 0x6dd8ff, 1.0); }
      const heltNær = nær(spil.helt);
      if (heltNær && !s.aktiv) { s.aktiv = true; bus.emit('besked', `${STORKILDE.navn} heals everyone who stands by it`); }
      else if (!heltNær) s.aktiv = false;
    }
  }
}
