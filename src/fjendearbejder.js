// Modstanderens arbejdere: går mellem hallen og guldminen og bærer guld hjem. Modstanderens indtægt følger,
// hvor mange af dem der lever (fjendeai.js) — så det kan betale sig at angribe dem, som i WC3.
// De slås kun, hvis de selv bliver angrebet, og løber hjem, når de er sårede.
import { Fjende } from './fjende.js';
import { Unit } from './unit.js';

export class FjendeArbejder extends Fjende {
  constructor(verden, base, x, z, mine, hal) {
    super(verden, 'm_arbejder', 2, base, x, z);
    Object.assign(this, { mine, hal, ordre: 'høst', tilMine: true, pause: Math.random() * 2 });
  }

  egne() { return this.mål ? [this.mål] : []; }   // søger ikke selv mål

  opdater(dt) {
    if (!this.død && this.mål && this.hp < this.maxHp * 0.4) { this.mål = null; this.tilMine = false; }   // såret: løb hjem
    if (this.død || this.mål) return super.opdater(dt);
    this.rod.visible = this.verden.taage.erSynlig(this.x, this.z);
    Unit.prototype.opdater.call(this, dt);
    if (this.pause > 0) { this.pause -= dt; this.spil(this.anim.idle); return; }
    const mål = this.tilMine ? this.mine : this.hal;
    if (!mål || mål.død) return this.spil(this.anim.idle);
    if (Math.hypot(mål.x - this.x, mål.z - this.z) < 7) { this.tilMine = !this.tilMine; this.pause = this.tilMine ? 0.6 : 1.8; this.stop(); return; }
    if (!this.bevæger) this.gåTil(mål.x, mål.z);
    this.opdaterBevægelse(dt);
    this.spil('Walking_A');
  }
}
