// Trådte stier mellem verdens steder (M9): fra basen til kroen og markedet, ud til brønde, tårne og miner,
// og den gamle pilgrimsvej fra Erevoss. Stierne følger stifindingen og slynger sig lidt (støj), og
// terrænet tegner dem som jord (terraen.js). styrke(x, z) siger hvor meget sti der er i et punkt.
import { støj } from './stoej.js';

const SPAND = 3;      // stien deles i stykker af denne længde, der hver får en lille sideforskydning
const MAKS_LÆNGDE = 150;   // steder længere væk end dette får ingen sti
const SPAND_FELT = 12; // størrelse på opslagsgitterets felter

export function lavStier(kort, punkter, seed = 5) {
  const forbundet = [punkter[0]];
  const stykker = [];
  const forbind = (a, b) => {
    const vej = kort.findVej(a, b);
    if (!vej.length) return;
    let forrige = a;
    for (const p of vej) {
      const d = Math.hypot(p.x - forrige.x, p.z - forrige.z), n = Math.max(1, Math.round(d / SPAND));
      const nx = -(p.z - forrige.z) / (d || 1), nz = (p.x - forrige.x) / (d || 1);
      let fx = forrige.x, fz = forrige.z;
      for (let i = 1; i <= n; i++) {
        const t = i / n;
        let x = forrige.x + (p.x - forrige.x) * t, z = forrige.z + (p.z - forrige.z) * t;
        // Slyng stien lidt, men ikke i enderne
        const sving = i === n ? 0 : (støj(x, z, seed, 18) - 0.5) * 7;
        x += nx * sving; z += nz * sving;
        stykker.push({ ax: fx, az: fz, bx: x, bz: z, bredde: 1.2 + støj(x, z, seed + 1, 10) * 0.9 });
        fx = x; fz = z;
      }
      forrige = p;
    }
  };
  // Hvert sted forbindes til det nærmeste, der allerede er forbundet (et træ af stier)
  const rest = punkter.slice(1);
  while (rest.length) {
    let bi = 0, bf = null, bd = Infinity;
    rest.forEach((p, i) => { for (const f of forbundet) { const d = Math.hypot(p.x - f.x, p.z - f.z); if (d < bd) { bd = d; bi = i; bf = f; } } });
    const p = rest.splice(bi, 1)[0];
    if (bd < MAKS_LÆNGDE) forbind(bf, p);
    forbundet.push(p);
  }

  // Opslagsgitter, så afstanden til nærmeste sti kan findes hurtigt
  const gitter = new Map();
  const nøgle = (i, j) => `${i},${j}`;
  for (const s of stykker) {
    const i0 = Math.floor((Math.min(s.ax, s.bx) - 3) / SPAND_FELT), i1 = Math.floor((Math.max(s.ax, s.bx) + 3) / SPAND_FELT);
    const j0 = Math.floor((Math.min(s.az, s.bz) - 3) / SPAND_FELT), j1 = Math.floor((Math.max(s.az, s.bz) + 3) / SPAND_FELT);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) { const k = nøgle(i, j); if (!gitter.has(k)) gitter.set(k, []); gitter.get(k).push(s); }
  }
  return {
    stykker,
    // Hvor meget sti der er i punktet (0–1)
    styrke(x, z) {
      const l = gitter.get(nøgle(Math.floor(x / SPAND_FELT), Math.floor(z / SPAND_FELT)));
      if (!l) return 0;
      let bedst = 0;
      for (const s of l) {
        const dx = s.bx - s.ax, dz = s.bz - s.az, ll = dx * dx + dz * dz || 1;
        const t = Math.max(0, Math.min(1, ((x - s.ax) * dx + (z - s.az) * dz) / ll));
        const d = Math.hypot(s.ax + dx * t - x, s.az + dz * t - z);
        const v = 1 - Math.min(1, Math.max(0, (d - s.bredde * 0.55) / (s.bredde * 0.8)));
        if (v > bedst) bedst = v;
      }
      return bedst;
    },
  };
}
