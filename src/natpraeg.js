// Natten pr. race (M14g, GDD 17b søjle 8): hver race har sin egen måde at møde natten på.
// The Tide — Children of the Storm: helten og soldaterne ser lige så langt som om dagen og løber 10 % hurtigere.
// The Architects — Lamplight: tårnene tændes: +25 % skade og +4 rækkevidde.
// The Dreaming — Dreamtime: helten og soldaterne ser fuldt og heler 1 % i sekundet.
// Modstanderen har sin egen races nat: Tide-soldater løber hurtigere, Architects-tårne er tændt.
import { SPILLER, FJENDE } from './racer.js';

const N = () => SPILLER.nat ?? {};

// Fart for spillerens helt og soldater
export function natFart(verden) { return 1 + (N().fart ?? 0) * (verden.nat ?? 0); }
// Ser spillerens figurer lige så langt om natten?
export const natSyn = () => !!N().syn;
// Tårnenes skade og rækkevidde om natten
export function natTårn(verden) { const n = verden.nat ?? 0; return { skade: 1 + (N().tårnSkade ?? 0) * n, rk: (N().tårnRække ?? 0) * n }; }

// Dreamtime (The Dreaming): helten og soldaterne heler om natten
export function natPleje(spil, dt) {
  const r = N().regen, n = spil.verden.nat ?? 0;
  if (!r || n < 0.3) return;
  for (const u of [spil.helt, ...spil.base.soldater]) if (!u.død && u.hp < u.maxHp) u.hp = Math.min(u.maxHp, u.hp + u.maxHp * r * n * dt);
}

// Modstanderens nat (fjende.js, fjendebygning.js)
const F = () => FJENDE.nat ?? {};
export function fjendeNatFart(verden) { return 1 + (F().fart ?? 0) * (verden.nat ?? 0); }
export function fjendeNatTårn(verden) { const n = verden.nat ?? 0; return { skade: 1 + (F().tårnSkade ?? 0) * n, rk: (F().tårnRække ?? 0) * n }; }

// Beskeden når natten falder: første nat med forklaring, siden kun navnet
let første = true;
export function natBesked() {
  const d = N();
  if (!d.navn) return 'Night falls. Creeps sleep deeper, but The Memory grows bolder.';
  const t = første ? `Night falls — ${d.navn}: ${d.tekst} Creeps sleep deeper, but The Memory grows bolder.` : `Night falls — ${d.navn}.`;
  første = false;
  return t;
}
