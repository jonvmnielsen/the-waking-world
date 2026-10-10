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
    const trin = Math.max(1, Math.ceil(dist / 0.8));
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
    if (!start) return [];
    // Er målet blokeret (fx et træ inde i skoven), går man til det første frie punkt på vejen derhen
    if (!this.erGåbar(til.x, til.z)) {
      const p = this.frieKant(til, fra);
      if (p) { til = p; if (this.friLinje(fra.x, fra.z, til.x, til.z)) return [{ x: til.x, z: til.z }]; }
    }
    let mål = this.felt(til.x, til.z);
    if (!mål || !mål.gåbar) mål = this.nærmesteGåbare(til.x, til.z);
    if (!mål) return [];

    // A* med en binær hob, så lange ruter på det store kort er hurtige
    const hob = new Hob();
    const kom = new Map();
    const g = new Map([[start, 0]]);
    const lukket = new Set();
    hob.læg(start, hexAfstand(start, mål));
    let fundet = false;
    while (hob.størrelse) {
      const nu = hob.tag();
      if (nu === mål) { fundet = true; break; }
      if (lukket.has(nu)) continue;
      lukket.add(nu);
      for (const n of this.naboer(nu)) {
        if (!n.gåbar || lukket.has(n)) continue;
        const ng = g.get(nu) + 1;
        if (ng < (g.get(n) ?? Infinity)) {
          kom.set(n, nu); g.set(n, ng);
          hob.læg(n, ng + hexAfstand(n, mål) * 1.001);
        }
      }
      if (lukket.size > 6000) break;
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

  // Første gåbare punkt fra et blokeret mål mod et andet punkt
  frieKant(til, fra) {
    const d = Math.hypot(fra.x - til.x, fra.z - til.z);
    for (let t = 0.6; t < Math.min(d, 30); t += 0.6) {
      const x = til.x + ((fra.x - til.x) / d) * t, z = til.z + ((fra.z - til.z) / d) * t;
      if (this.erGåbar(x, z)) return { x: x + ((fra.x - til.x) / d) * 0.5, z: z + ((fra.z - til.z) / d) * 0.5 };
    }
    return null;
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

// Lille min-hob til A*
class Hob {
  constructor() { this.a = []; }
  get størrelse() { return this.a.length; }
  læg(v, p) {
    const a = this.a; a.push([p, v]);
    let i = a.length - 1;
    while (i > 0) { const f = (i - 1) >> 1; if (a[f][0] <= a[i][0]) break; [a[f], a[i]] = [a[i], a[f]]; i = f; }
  }
  tag() {
    const a = this.a, top = a[0][1], sidst = a.pop();
    if (a.length) {
      a[0] = sidst;
      let i = 0;
      for (;;) {
        const l = 2 * i + 1, r = l + 1;
        let m = i;
        if (l < a.length && a[l][0] < a[m][0]) m = l;
        if (r < a.length && a[r][0] < a[m][0]) m = r;
        if (m === i) break;
        [a[m], a[i]] = [a[i], a[m]]; i = m;
      }
    }
    return top;
  }
}
