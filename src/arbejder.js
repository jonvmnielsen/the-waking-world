// Bærer (The Tides arbejder): høster guld i miner, fælder træer og hugger sten,
// bærer det hjem til Storlejren/Savværket og bygger nye bygninger (GDD 5.1–5.2).
import { Unit } from './unit.js';
import { skaleretKopi } from './assets.js';
import { gørOrkGrøn } from './orkhud.js';
import { RES_NAVN } from './okonomi.js';
import { høstMetoder } from './hoest.js';
import { bus } from './events.js';
import { rundtOm } from './byggeplads.js';

const SKJUL = ['Knife_Offhand', '1H_Crossbow', '2H_Crossbow', 'Knife', 'Throwable'];
const BÆRE_MODEL = {
  guld: 'kaykit-dungeon/coin_stack_small_gltf',
  træ: 'kaykit-hexagon/decoration/props/resource_lumber',
  sten: 'kaykit-hexagon/decoration/props/resource_stone',
};

export class Arbejder extends Unit {
  constructor(verden, base, x, z) {
    super(verden, 'units/arbejder', { skala: 0.85, skjul: SKJUL, våben: { r: 'kaykit-adventurers/axe_1handed' }, radius: 0.55 });
    gørOrkGrøn(this.model);
    this.base = base;
    this.maxHp = 220; this.hp = 220; this.fart = 4.4;
    this.side = 'egen';
    this.tilstand = 'ledig';
    this.kilde = null; this.bærer = null; this.bygning = null; this.timer = 0;
    this.rod.position.set(x, 0, z);
    // Det arbejderen bærer, sidder på ryggen
    this.byrder = {};
    for (const [type, sti] of Object.entries(BÆRE_MODEL)) {
      const m = skaleretKopi(sti, 0.75);
      m.position.set(0, 1.35, -0.42);
      m.visible = false;
      this.rod.add(m);
      this.byrder[type] = m;
    }
    this.spil('Idle');
  }

  // --- Kommandoer ---
  kommandoGå(x, z) { this.nulstil(); this.tilstand = this.gåTil(x, z) ? 'gå' : 'ledig'; return this.tilstand === 'gå'; }

  kommandoByg(b) { this.nulstil(); this.bygning = b; this.tilstand = 'tilByg'; this.gåTilBygning(b); }

  nulstil() { this.kilde = null; this.bygning = null; this.rod.visible = true; this.stop(); }

  // --- Hjælpere ---
  sætByrde(b) {
    this.bærer = b;
    for (const [type, m] of Object.entries(this.byrder)) m.visible = b?.type === type;
  }

  // Gå til en fri plads tæt op ad bygningen (eller minen). Pladsen vælges blandt de nærmeste, så mange
  // arbejdere spredes rundt om bygningen i stedet for at stå i kø samme sted; spærret vej → en anden side.
  gåTilBygning(b, felter = b.felter) {
    const punkter = (b.stor === false ? rundtOm(this.verden.kort, b, this) : this.verden.kort.kantPunkter(felter, this)).slice(0, 6);
    if (punkter.length > 1) punkter.unshift(punkter.splice(Math.floor(Math.random() * Math.min(3, punkter.length)), 1)[0]);
    for (const p of punkter) if (this.gåTil(p.x, p.z)) { this.målPunkt = p; return true; }
    this.målPunkt = null;
    return this.gåTil(b.x, b.z);
  }

  // Fremme ved bygningen: helt op ad et af dens felter (også når andre arbejdere skubber), eller ved pladsen
  vedBygning(b) {
    const k = this.verden.kort;
    if (b.stor === false) return Math.hypot(b.x - this.x, b.z - this.z) < b.fod + 2.4 || (!!this.målPunkt && Math.hypot(this.målPunkt.x - this.x, this.målPunkt.z - this.z) < 1.5);
    if (b.felter.some((f) => { const c = k.centrum(f); return Math.hypot(c.x - this.x, c.z - this.z) < 9.5; })) return true;
    return !!this.målPunkt && Math.hypot(this.målPunkt.x - this.x, this.målPunkt.z - this.z) < (this.bevæger ? 1.5 : 3);
  }

  gåHjem() {
    const b = this.base.afleveringssted(this.bærer.type, this.x, this.z);
    if (!b) { this.tilstand = 'ledig'; bus.emit('besked', 'No building can take it'); return; }
    this.hjem = b;
    this.tilstand = 'tilAflevering';
    // Kan bygningen slet ikke nås, giver arbejderen op i stedet for at prøve igen og igen
    this.forsøg = (this.forsøg ?? 0) + 1;
    if (!this.gåTilBygning(b) && this.forsøg > 3) { this.forsøg = 0; this.tilstand = 'ledig'; bus.emit('besked', `A worker cannot reach the ${b.data.navn}`); }
  }


  // --- Opdatering ---
  opdater(dt) {
    if (this.død) return this.opdaterDød(dt);
    this.rod.visible = this.tilstand !== 'iMine';
    super.opdater(dt);
    const k = this.kilde;
    switch (this.tilstand) {
      case 'gå':
        this.opdaterBevægelse(dt);
        if (!this.bevæger) this.tilstand = 'ledig';
        break;
      case 'tilKilde':
        this.opdaterTilKilde(dt);
        break;
      case 'høster':
      case 'iMine':
        // Et hug i takt med animationen (til lyden)
        if (this.tilstand === 'høster' && (this.hugTid = (this.hugTid ?? 0) - dt) <= 0) { this.hugTid = 1.05; bus.emit('høst_slag', { x: this.x, z: this.z, type: k.type }); }
        this.timer -= dt;
        if (this.timer <= 0) this.færdigHøst();
        break;
      case 'tilAflevering':
        this.opdaterBevægelse(dt);
        if (this.vedBygning(this.hjem)) { this.forsøg = 0; this.aflever(); }
        else if (!this.bevæger) this.gåHjem();
        break;
      case 'tilByg': {
        const b = this.bygning;
        this.opdaterBevægelse(dt);
        if (b.død || (b.færdig && !b.skadet)) { this.tilstand = 'ledig'; break; }
        if (!this.bevæger && !this.vedBygning(b)) this.gåTilBygning(b);
        if (this.vedBygning(b)) { this.stop(); this.tilstand = 'bygger'; this.vend(b.x, b.z); this.spil('1H_Melee_Attack_Chop', { fart: 0.9 }); }
        break;
      }
      case 'bygger':
        this.bygning.byg(dt);
        if (this.bygning.død || (this.bygning.færdig && !this.bygning.skadet)) { this.tilstand = 'ledig'; this.bygning = null; this.spil('Cheer', { loop: false, gentag: true }); this.timer = 1.5; }
        break;
    }
    // Animation efter tilstand
    if (this.bevæger) this.spil('Running_A', { fart: 0.95 });
    else if (this.tilstand === 'ledig' || this.tilstand === 'gå') { this.timer -= dt; if (this.timer <= 0) this.spil('Idle'); }
  }

  dø(kilde) {
    super.dø(kilde);
    this.nulstil(); this.sætByrde(null); this.tilstand = 'død';
    this.spil('Death_A', { loop: false, fade: 0.08 });
    this.forsvind = 5;
    this.base.økonomi.forsyning -= 1;
    bus.emit('besked', 'A worker has died');
  }

  opdaterDød(dt) {
    super.opdater(dt);
    this.forsvind -= dt;
    if (this.forsvind < 1.5) this.rod.position.y -= dt * 0.8;
    if (this.forsvind <= 0 && !this.fjernet) { this.fjernet = true; this.fjern(); }
  }

  aflever() {
    this.stop();
    this.base.økonomi.aflever(this.bærer.type, this.bærer.mængde);
    bus.emit('flydetekst', { enhed: this, tekst: `+${this.bærer.mængde} ${RES_NAVN[this.bærer.type]}`, klasse: this.bærer.type === 'guld' ? 'guld' : 'ressource' });
    const type = this.bærer.type;
    this.sætByrde(null);
    this.efterAflevering(type);
  }
}

Object.assign(Arbejder.prototype, høstMetoder);   // høst: hoest.js

// Hvor langt en arbejder kan se (krigens tåge)
export const ARBEJDER_SYN = 14;
