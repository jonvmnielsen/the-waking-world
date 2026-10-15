// Natten pr. race (M14g, GDD 17b søjle 8): hver race har sin egen måde at møde natten på.
// The Tide — Children of the Storm: helten og soldaterne ser lige så langt som om dagen og løber 10 % hurtigere.
// The Architects — Lamplight: tårnene tændes: +25 % skade og +4 rækkevidde.
// Kun spillerens race (AI-modstanderen har endnu ikke sine egne nætter).
import { SPILLER } from './racer.js';

const N = () => SPILLER.nat ?? {};

// Fart for spillerens helt og soldater
export function natFart(verden) { return 1 + (N().fart ?? 0) * (verden.nat ?? 0); }
// Ser spillerens figurer lige så langt om natten?
export const natSyn = () => !!N().syn;
// Tårnenes skade og rækkevidde om natten
export function natTårn(verden) { const n = verden.nat ?? 0; return { skade: 1 + (N().tårnSkade ?? 0) * n, rk: (N().tårnRække ?? 0) * n }; }

// Beskeden når natten falder: første nat med forklaring, siden kun navnet
let første = true;
export function natBesked() {
  const d = N();
  if (!d.navn) return 'Night falls. Creeps sleep deeper, but The Memory grows bolder.';
  const t = første ? `Night falls — ${d.navn}: ${d.tekst} Creeps sleep deeper, but The Memory grows bolder.` : `Night falls — ${d.navn}.`;
  første = false;
  return t;
}
