// Heltens erfaring og level-op (level 1–10, GDD 6). Blandes ind i Helt-klassen.
import { LEVELS } from './config.js';
import { bus } from './events.js';

export const levelMetoder = {
  fåXp(mængde) {
    const tabel = LEVELS.xp;
    this.xp += mængde;
    while (this.level < tabel.length && this.xp >= tabel[this.level]) this.levelOp();
  },

  levelOp() {
    this.level += 1;
    const i = this.level - 1;
    this.basisHp += LEVELS.hpBonus[i];
    this.hp = Math.min(this.maxHp, this.hp + LEVELS.hpBonus[i]);
    this.stats.skadeMin += LEVELS.skadeBonus[i];
    this.stats.skadeMax += LEVELS.skadeBonus[i];
    this.stats.rustning += LEVELS.rustBonus[i];
    bus.emit('level_op', { helt: this, level: this.level });
  },

  // Fremgang mod næste level (0-1)
  xpProcent() {
    const t = LEVELS.xp;
    if (this.level >= t.length) return 1;
    return Math.min(1, (this.xp - t[this.level - 1]) / (t[this.level] - t[this.level - 1]));
  },
};
