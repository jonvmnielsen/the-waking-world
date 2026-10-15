// Heltens erfaring og level-op (level 1–10, og 11–20 efter Ascension, GDD 6). Blandes ind i Helt-klassen.
import { LEVELS } from './config.js';
import { ASCENSION_LEVEL } from './ascensiondata.js';
import { bus } from './events.js';

export const levelMetoder = {
  fåXp(mængde) {
    mængde = Math.round(mængde * (1 + (this.inventar?.bonus.xpBonus ?? 0)));   // Learned / of the Sage
    const tabel = LEVELS.xp;
    this.xp += mængde;
    const loft = this.sti?.id ? tabel.length : ASCENSION_LEVEL;
    while (this.level < loft && this.xp >= tabel[this.level]) this.levelOp();
  },

  // stille = uden fanfare (når et gemt spil gendannes)
  levelOp(stille = false) {
    this.level += 1;
    const i = this.level - 1;
    const førHp = this.maxHp;
    this.basisHp += LEVELS.hpBonus[i];
    this.stats.skadeMin += LEVELS.skadeBonus[i];
    this.stats.skadeMax += LEVELS.skadeBonus[i];
    this.stats.rustning += LEVELS.rustBonus[i];
    this.vækstEgenskaber();
    this.skillpunkter = (this.skillpunkter ?? 0) + 1;   // ét frit skill point pr. level (evnerang.js)
    this.hp = Math.min(this.maxHp, this.hp + this.maxHp - førHp);
    if (!stille) bus.emit('level_op', { helt: this, level: this.level });
  },

  // Fremgang mod næste level (0-1)
  xpProcent() {
    const t = LEVELS.xp;
    if (this.level >= t.length || (this.level >= ASCENSION_LEVEL && !this.sti?.id)) return 1;
    return Math.min(1, (this.xp - t[this.level - 1]) / (t[this.level] - t[this.level - 1]));
  },
};
