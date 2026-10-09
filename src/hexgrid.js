// Hex-gitter (pointy-top, aksiale koordinater q,r) + A*-stifinding.
// Kant-indeks k svarer til retningen 60°·k målt fra +x mod +z (Ø, SØ, SV, V, NV, NØ).
import { VERDEN } from './config.js';

const S = VERDEN.hexSkala;
export const HEX_BREDDE = 2 * S;                 // afstand mellem naboer
const R = (2 / Math.sqrt(3)) * S;                // hex-radius (centrum til hjørne)

export const RETNINGER = [[1, 0], [0, 1], [-1, 1], [-1, 0], [0, -1], [1, -1]];

export const nøgle = (q, r) => `${q},${r}`;

export function hexTilVerden(q, r) {
  return { x: S * 2 * (q + r / 2), z: R * 1.5 * r };
}

export function verdenTilHex(x, z) {
  const r = z / (R * 1.5);
  const q = x / (S * 2) - r / 2;
  return afrund(q, r);
}

function afrund(q, r) {
  const s = -q - r;
  let rq = Math.round(q), rr = Math.round(r), rs = Math.round(s);
  const dq = Math.abs(rq - q), dr = Math.abs(rr - r), ds = Math.abs(rs - s);
  if (dq > dr && dq > ds) rq = -rr - rs;
  else if (dr > ds) rr = -rq - rs;
  return { q: rq, r: rr };
}

export function hexAfstand(a, b) {
  return (Math.abs(a.q - b.q) + Math.abs(a.r - b.r) + Math.abs(a.q + a.r - b.q - b.r)) / 2;
}

export class HexKort {
  constructor() {
    this.felter = new Map(); // nøgle -> { q, r, type, gåbar, pynt: [] }
  }

  sæt(q, r, data) {
    const f = { q, r, gåbar: true, pynt: [], ...data };
    this.felter.set(nøgle(q, r), f);
    return f;
  }

  hent(q, r) { return this.felter.get(nøgle(q, r)); }

  felt(x, z) { const h = verdenTilHex(x, z); return this.hent(h.q, h.r); }

  erGåbar(x, z) { const f = this.felt(x, z); return !!(f && f.gåbar); }

  naboer(f) {
    return RETNINGER.map(([dq, dr]) => this.hent(f.q + dq, f.r + dr)).filter(Boolean);
  }

  // Fri sigtelinje mellem to punkter (kun gåbare felter)
  friLinje(ax, az, bx, bz) {
    const dist = Math.hypot(bx - ax, bz - az);
    const trin = Math.max(1, Math.ceil(dist / 0.6));
    for (let i = 1; i <= trin; i++) {
      const t = i / trin;
      if (!this.erGåbar(ax + (bx - ax) * t, az + (bz - az) * t)) return false;
    }
    return true;
  }

  // A* fra punkt til punkt. Returnerer liste af waypoints {x,z} (glattet).
  findVej(fra, til) {
    if (this.friLinje(fra.x, fra.z, til.x, til.z)) return [{ x: til.x, z: til.z }];
    const start = this.felt(fra.x, fra.z);
    let mål = this.felt(til.x, til.z);
    if (!start) return [];
    if (!mål || !mål.gåbar) mål = this.nærmesteGåbare(til.x, til.z);
    if (!mål) return [];

    const åben = [start];
    const kom = new Map();
    const g = new Map([[start, 0]]);
    const f = new Map([[start, hexAfstand(start, mål)]]);
    const lukket = new Set();
    let fundet = false;
    while (åben.length) {
      åben.sort((a, b) => f.get(a) - f.get(b));
      const nu = åben.shift();
      if (nu === mål) { fundet = true; break; }
      lukket.add(nu);
      for (const n of this.naboer(nu)) {
        if (!n.gåbar || lukket.has(n)) continue;
        const ng = g.get(nu) + 1;
        if (ng < (g.get(n) ?? Infinity)) {
          kom.set(n, nu); g.set(n, ng); f.set(n, ng + hexAfstand(n, mål));
          if (!åben.includes(n)) åben.push(n);
        }
      }
      if (lukket.size > 800) break;
    }
    if (!fundet) return [];

    const kæde = [];
    for (let c = mål; c && c !== start; c = kom.get(c)) kæde.unshift(hexTilVerden(c.q, c.r));
    const slut = this.erGåbar(til.x, til.z) ? { x: til.x, z: til.z } : hexTilVerden(mål.q, mål.r);
    kæde[kæde.length - 1] = slut;
    return this.glat(fra, kæde);
  }

  // Spring waypoints over når der er fri linje (undgår zigzag på hex-centre)
  glat(fra, punkter) {
    const ud = [];
    let ank = fra, i = 0;
    while (i < punkter.length) {
      let længst = i;
      for (let j = punkter.length - 1; j > i; j--) {
        if (this.friLinje(ank.x, ank.z, punkter[j].x, punkter[j].z)) { længst = j; break; }
      }
      ud.push(punkter[længst]);
      ank = punkter[længst];
      i = længst + 1;
    }
    return ud;
  }

  nærmesteGåbare(x, z) {
    let bedst = null, bd = Infinity;
    for (const f of this.felter.values()) {
      if (!f.gåbar) continue;
      const p = hexTilVerden(f.q, f.r);
      const d = (p.x - x) ** 2 + (p.z - z) ** 2;
      if (d < bd) { bd = d; bedst = f; }
    }
    return bedst;
  }
}
