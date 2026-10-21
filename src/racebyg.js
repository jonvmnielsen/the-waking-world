// Racens egen måde at bygge på (M14h, GDD 17b søjle 8):
// The Tide — Driftwood: én arbejder bygger 25 % hurtigere, men flere hjælper kun halvt (hurtige, rå hytter).
//   Færdige bygninger heler sig selv 1 % i sekundet, når de ikke er blevet angrebet i 8 sekunder.
// The Architects — Many Hands: hver ekstra bonde bygger fuldt med og lidt til (+10 %), og bygningerne er af
//   sten: 25 % mere liv.
import { SPILLER } from './racer.js';

const B = () => SPILLER.byg ?? {};

// Hvor hurtigt hver af de arbejdere, der bygger lige nu, bygger (ganges på dt)
export function byggeFart(b) {
  const n = Math.max(1, b.base.arbejdere.filter((a) => a.bygning === b && a.tilstand === 'bygger').length);
  const d = B(), samlet = (d.første ?? 1) + (d.ekstra ?? 1) * (n - 1);
  return samlet / n;
}

export const bygHpFaktor = () => B().hp ?? 1;

// Selvheling (The Tide)
export function racePleje(b, dt) {
  const r = B().regen;
  if (!r || !b.færdig || b.død || !b.skadet) return;
  if (b.verden.ur?.tid - (b.sidstAngrebet ?? -99) < 8) return;
  b.hp = Math.min(b.maxHp, b.hp + b.maxHp * r * dt);
}
