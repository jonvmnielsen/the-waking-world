// The Memorys bygninger. De ligger i verden.creeps, så helten, soldaterne og evnerne kan angribe dem
// som alle andre fjender. Spiret skyder spillerens figurer; en ødelagt bygning efterlader en ruin.
import { kopi } from './assets.js';
import { FJENDE_BYGNINGER } from './fjendedata.js';
import { STADIER } from './bygningsdata.js';
import { VERDEN, reducérSkade, tilfældig } from './config.js';
import { bus } from './events.js';

const S = VERDEN.hexSkala;
const RUIN = 'kaykit-hexagon/buildings/neutral/building_destroyed';
const BYGGETID = 35;

export class FjendeBygning {
  constructor(verden, type, { x, z, felter, rot = 0, færdig = true, id }) {
    Object.assign(this, { verden, type, x, z, felter, rot, id });
    this.data = FJENDE_BYGNINGER[type];
    this.navn = this.data.navn;
    this.erBygning = true; this.side = 'fjende'; this.tilstand = 'bygning';
    this.radius = this.data.radius; this.højde = this.data.højde;
    this.maxHp = this.data.hp; this.rustning = this.data.rustning;
    this.fremskridt = færdig ? 1 : 0;
    this.hp = færdig ? this.maxHp : this.maxHp * 0.1;
    this.død = false; this.cooldown = 0;
    for (const f of felter) { f.optaget = true; f.gåbar = false; }
    this.vis(færdig ? this.data.model : STADIER[0], færdig ? this.data.skala : 1);
  }

  get færdig() { return this.fremskridt >= 1; }

  vis(sti, skala) {
    if (this.rod) this.verden.scene.remove(this.rod);
    this.rod = kopi(sti, { skygge: true });
    this.rod.position.set(this.x, 0, this.z);
    this.rod.rotation.y = this.rot;
    this.rod.scale.setScalar(S * skala);
    this.rod.visible = this.verden.taage.erUdforsket(this.x, this.z);
    this.verden.scene.add(this.rod);
    this.model = sti;
  }

  afstand(u) { return Math.hypot(u.x - this.x, u.z - this.z); }

  opdater(dt) {
    if (this.død) return;
    // Bygninger man har set, bliver stående på kortet (dæmpet i tågen)
    if (!this.rod.visible) this.rod.visible = this.verden.taage.erUdforsket(this.x, this.z);
    if (!this.færdig) {
      this.fremskridt = Math.min(1, this.fremskridt + dt / BYGGETID);
      this.hp = Math.min(this.maxHp, this.hp + (this.maxHp * 0.9 * dt) / BYGGETID);
      const stadie = this.færdig ? this.data.model : STADIER[Math.min(2, Math.floor(this.fremskridt * 3))];
      if (stadie !== this.model) this.vis(stadie, this.færdig ? this.data.skala : 1);
      return;
    }
    const a = this.data.angreb;
    if (!a) return;
    this.cooldown -= dt;
    if (this.cooldown > 0) return;
    const mål = this.verden.egne().filter((u) => this.afstand(u) < a.rækkevidde).sort((p, q) => this.afstand(p) - this.afstand(q))[0];
    if (!mål) return;
    this.cooldown = a.tid;
    bus.emit('projektil', { fra: this, mål, skade: tilfældig(...a.skade), farve: 0xb36bff });
  }

  tagSkade(mængde, kilde) {
    if (this.død) return false;
    const skade = reducérSkade(mængde, this.rustning);
    this.hp = Math.max(0, this.hp - skade);
    bus.emit('skade', { mål: this, mængde: skade, kilde });
    if (this.hp <= 0) { this.ødelæg(kilde); return true; }
    return false;
  }

  ødelæg(kilde, stille = false) {
    this.død = true;
    for (const f of this.felter) { f.optaget = false; f.gåbar = true; }
    this.vis(RUIN, this.felter.length > 1 ? 1.8 : 1.15);
    this.rod.visible = true;
    if (stille) return;
    bus.emit('effekt', { type: 'stomp', x: this.x, z: this.z, radius: this.radius + 2 });
    bus.emit('fjende_bygning_ødelagt', { bygning: this, kilde });
    bus.emit('besked', `${this.navn} destroyed!`);
  }
}
