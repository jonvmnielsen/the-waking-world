// AI-modstanderens helt (Jon: AI'en får en af sin races tre helte, heltedata.js). En stærk figur med en ring
// og et skær i holdfarven, der følger hæren i bølgerne, bruger sin signatur-evne og rejser sig i hallen igen,
// når den falder. Hvilken helt det bliver, følger verdens frø (så gemte spil passer).
import { Fjende } from './fjende.js';
import { CREEP_TYPER } from './creepdata.js';
import { HELTE, helteFor } from './heltedata.js';
import { FJENDE, FJENDE_FARVE, HOLD_FARVE } from './racer.js';
import { KORT } from './config.js';
import { glød } from './aand.js';
import { bus } from './events.js';
import { heltePræg, opdaterPræg } from './helteaura.js';

const ANIM = { idle: 'Idle', løb: 'Running_A', ramt: 'Hit_A', død: 'Death_A', vågn: null, råb: 'Cheer' };

// Heltene som creep-typer (mh_<id>)
for (const h of helteFor(FJENDE.id)) {
  const fjern = h.kamp.type === 'fjern';
  CREEP_TYPER[`mh_${h.id}`] = {
    navn: h.navn, model: h.model.replace('units/', ''), anim: ANIM, hp: fjern ? 340 : 440, skade: fjern ? [22, 30] : [26, 34],
    angrebsTid: h.kamp.angrebsTid ?? 2.1, fart: 4.8 + (h.fart ?? 0), rækkevidde: h.kamp.rækkevidde, rustning: fjern ? 2 : 4,
    skjul: h.skjul, angreb: h.kamp.sving[0].anim, projektil: fjern ? (h.kamp.projektil === 'spyd' ? 0xd8c8a0 : h.kamp.projektil) : undefined,
    skala: 1.12, orkhud: FJENDE.orkhud,
  };
}

export const fjendeHeltId = () => { const l = helteFor(FJENDE.id); return l[Math.abs(KORT.seed ?? 0) % l.length].id; };

export class FjendeHelt extends Fjende {
  constructor(verden, base, id, level, x, z) {
    super(verden, `mh_${id}`, level, base, x, z);
    this.heltId = id; this.def = HELTE[id]; this.erHelt = true; this.evneCd = 6;
    this.data = { ...this.data, xp: this.data.xp * 4 };   // en helt giver meget erfaring
    const farve = HOLD_FARVE[FJENDE_FARVE];
    heltePræg(this, farve);   // runecirkel og kappe i modstanderens farve (helteaura.js)
    const skær = glød(farve, 2.2, 0.6); skær.position.y = this.højde + 0.9;
    this.rod.add(skær);
  }

  opdater(dt) {
    super.opdater(dt);
    opdaterPræg(this, dt);
    if (this.død) return;
    if (!this.set && this.rod.visible) {
      this.set = true;
      bus.emit('krønike', { titel: `The enemy hero: ${this.def.navn}`, tekst: `${FJENDE.navn} are led by a ${this.def.titel.toLowerCase()}. Bring it down for a great deal of experience.`, x: this.x, z: this.z, farve: '#ff7a6a', vigtig: true });
    }
    this.evneCd -= dt;
    const m = this.mål;
    if (this.evneCd > 0 || !m || m.død || this.afstand(m) - (m.radius ?? 0) > this.data.rækkevidde + 1) return;
    this.evneCd = 12;
    this.signatur(m);
  }

  // En forenklet udgave af heltens signatur-evne
  signatur(m) {
    const s = this.def.signatur, grund = Math.round((this.data.skade[0] + this.data.skade[1]) / 2);
    this.spil(this.def.kamp.type === 'fjern' ? 'Spellcast_Shoot' : '2H_Melee_Attack_Chop', { loop: false, gentag: true, fade: 0.08 });
    if (s === 'mendingLight') {
      for (const e of [this, ...this.fjendeBase.levende]) if (!e.død && this.afstand(e) < 9) { e.hp = Math.min(e.maxHp, e.hp + 150); bus.emit('effekt', { type: 'heal', mål: e }); }
      return;
    }
    m.tagSkade(Math.round(grund * (s === 'stormlash' || s === 'piercingBolt' ? 1.6 : 1.8)), this);
    if (s === 'stormlash' || s === 'piercingBolt') bus.emit('effekt', { type: 'lyn', mål: m });
    else bus.emit('effekt', { type: 'tungtSlag', mål: m });
    if (s === 'shieldBash') m.lam?.(1.2);
  }
}
