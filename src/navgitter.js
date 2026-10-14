// Stifinding på et fint gitter (Jon: figurer sad fast ved bygninger). Hex-felterne er for grove: en lille
// bygning fylder kun en del af et felt. Gitteret har celler på 2×2 enheder over hele kortet. En celle er
// spærret, hvis dens hex-felt er spærret, eller hvis en forhindring (lille bygning, frit træ eller sten)
// dækker den — forhindringerne gøres lidt større end de er, så figurer holder afstand til hjørnerne.
// A* i otte retninger med en binær hob; ruten strammes bagefter med fri sigtelinje.
// Hulerne (x > 3000) og mål uden for gitteret bruger hex-stifindingen (hexgrid.js).
import { verdenTilHex } from './hexgrid.js';

const C = 2, AGENT = 0.6, MAKS = 45000, S2 = Math.SQRT2;
const DX = [1, -1, 0, 0, 1, 1, -1, -1], DZ = [0, 0, 1, -1, 1, -1, 1, -1], PRIS = [1, 1, 1, 1, S2, S2, S2, S2];

export class NavGitter {
  constructor(kort, g) {
    this.kort = kort;
    this.x0 = g.minX; this.z0 = g.minZ;
    this.b = Math.ceil((g.maxX - g.minX) / C); this.h = Math.ceil((g.maxZ - g.minZ) / C);
    const n = this.b * this.h;
    this.felt = new Array(n);          // cellens hex-felt (læses direkte, så ændringer slår igennem med det samme)
    this.forhindring = new Uint16Array(n);
    for (let i = 0; i < n; i++) { const p = this.midt(i), h = verdenTilHex(p.x, p.z); this.felt[i] = kort.hent(h.q, h.r) ?? null; }
    this.g = new Float32Array(n); this.kom = new Int32Array(n); this.stamp = new Uint32Array(n); this.lukket = new Uint32Array(n); this.gen = 1;
  }

  celle(x, z) { const cx = Math.floor((x - this.x0) / C), cz = Math.floor((z - this.z0) / C); return cx < 0 || cz < 0 || cx >= this.b || cz >= this.h ? -1 : cz * this.b + cx; }
  midt(i) { return { x: this.x0 + ((i % this.b) + 0.5) * C, z: this.z0 + (Math.floor(i / this.b) + 0.5) * C }; }
  fri(i) { return i >= 0 && this.forhindring[i] === 0 && !!this.felt[i]?.gåbar; }
  friPunkt(x, z) { return this.fri(this.celle(x, z)); }

  // En rund forhindring (radius r) stemples ind (+1) eller ud (-1)
  stempel(x, z, r, d) {
    const R = r + AGENT;
    for (let cz = Math.floor((z - R - this.z0) / C); cz <= Math.floor((z + R - this.z0) / C); cz++) {
      for (let cx = Math.floor((x - R - this.x0) / C); cx <= Math.floor((x + R - this.x0) / C); cx++) {
        if (cx < 0 || cz < 0 || cx >= this.b || cz >= this.h) continue;
        const px = this.x0 + (cx + 0.5) * C, pz = this.z0 + (cz + 0.5) * C;
        if (Math.hypot(px - x, pz - z) > R + C * 0.35) continue;
        const i = cz * this.b + cx;
        this.forhindring[i] = Math.max(0, this.forhindring[i] + d);
      }
    }
  }

  // Fri sigtelinje (med lidt bredde, så ruten ikke skærer hjørner)
  friLinje(ax, az, bx, bz) {
    const dist = Math.hypot(bx - ax, bz - az), trin = Math.max(1, Math.ceil(dist / 0.7));
    const px = -(bz - az) / (dist || 1) * 0.55, pz = (bx - ax) / (dist || 1) * 0.55;
    for (let k = 1; k <= trin; k++) {
      const t = k / trin, x = ax + (bx - ax) * t, z = az + (bz - az) * t;
      if (!this.friPunkt(x, z) || !this.friPunkt(x + px, z + pz) || !this.friPunkt(x - px, z - pz)) return false;
    }
    return true;
  }

  // Nærmeste frie celle (ringvis udad), helst mod 'mod'
  nærmesteFri(x, z, mod, maks = 10) {
    const c = this.celle(x, z);
    if (c < 0) return -1;
    if (this.fri(c)) return c;
    const cx = c % this.b, cz = Math.floor(c / this.b);
    for (let r = 1; r <= maks; r++) {
      let bedst = -1, bd = Infinity;
      for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue;
        const nx = cx + dx, nz = cz + dz;
        if (nx < 0 || nz < 0 || nx >= this.b || nz >= this.h) continue;
        const i = nz * this.b + nx;
        if (!this.fri(i)) continue;
        const p = this.midt(i), d = Math.hypot(p.x - x, p.z - z) + (mod ? Math.hypot(p.x - mod.x, p.z - mod.z) * 0.15 : 0);
        if (d < bd) { bd = d; bedst = i; }
      }
      if (bedst >= 0) return bedst;
    }
    return -1;
  }

  // Ruten fra 'fra' til 'til' som en liste af punkter, eller null hvis gitteret ikke kan finde en
  findVej(fra, til) {
    let s = this.celle(fra.x, fra.z), m = this.celle(til.x, til.z);
    if (s < 0 || m < 0) return null;
    const målFri = this.fri(m);
    if (!målFri) m = this.nærmesteFri(til.x, til.z, fra, 12);
    if (!this.fri(s)) s = this.nærmesteFri(fra.x, fra.z, null, 4);
    if (s < 0 || m < 0) return null;
    const slut = målFri ? { x: til.x, z: til.z } : this.midt(m);
    if (s === m || this.friLinje(fra.x, fra.z, slut.x, slut.z)) return [slut];
    const kæde = this.aStjerne(s, m);
    if (!kæde) return null;
    kæde[kæde.length - 1] = slut;
    return this.stram(fra, kæde);
  }

  aStjerne(s, m) {
    const gen = ++this.gen, b = this.b, mx = m % b, mz = Math.floor(m / b);
    const hob = new IntHob(), h = (i) => { const dx = Math.abs((i % b) - mx), dz = Math.abs(Math.floor(i / b) - mz); return (dx + dz + (S2 - 2) * Math.min(dx, dz)) * 1.02; };
    this.g[s] = 0; this.stamp[s] = gen; this.kom[s] = -1;
    hob.læg(s, h(s));
    let n = 0;
    while (hob.størrelse) {
      const nu = hob.tag();
      if (nu === m) break;
      if (this.lukket[nu] === gen) continue;
      this.lukket[nu] = gen;
      if (++n > MAKS) return null;
      const cx = nu % b, cz = Math.floor(nu / b);
      for (let k = 0; k < 8; k++) {
        const nx = cx + DX[k], nz = cz + DZ[k];
        if (nx < 0 || nz < 0 || nx >= b || nz >= this.h) continue;
        const i = nz * b + nx;
        if (!this.fri(i) || this.lukket[i] === gen) continue;
        if (k >= 4 && (!this.fri(cz * b + nx) || !this.fri(nz * b + cx))) continue;   // ingen skrå genvej forbi et hjørne
        const ng = this.g[nu] + PRIS[k];
        if (this.stamp[i] !== gen || ng < this.g[i]) { this.stamp[i] = gen; this.g[i] = ng; this.kom[i] = nu; hob.læg(i, ng + h(i)); }
      }
    }
    if (this.stamp[m] !== gen) return null;
    const ud = [];
    for (let c = m; c !== s && c >= 0; c = this.kom[c]) ud.push(this.midt(c));
    return ud.reverse();
  }

  // Spring punkter over, når der er fri linje
  stram(fra, punkter) {
    const ud = [];
    let ank = fra, i = 0;
    while (i < punkter.length) {
      let længst = i;
      for (let j = Math.min(punkter.length - 1, i + 40); j > i; j--) if (this.friLinje(ank.x, ank.z, punkter[j].x, punkter[j].z)) { længst = j; break; }
      ud.push(punkter[længst]); ank = punkter[længst]; i = længst + 1;
    }
    return ud;
  }
}

// Min-hob af celle-numre med prioritet (typede arrays, ingen objekter)
class IntHob {
  constructor() { this.v = new Int32Array(4096); this.p = new Float32Array(4096); this.størrelse = 0; }
  læg(v, p) {
    if (this.størrelse === this.v.length) { const nv = new Int32Array(this.v.length * 2), np = new Float32Array(this.v.length * 2); nv.set(this.v); np.set(this.p); this.v = nv; this.p = np; }
    let i = this.størrelse++;
    while (i > 0) { const f = (i - 1) >> 1; if (this.p[f] <= p) break; this.v[i] = this.v[f]; this.p[i] = this.p[f]; i = f; }
    this.v[i] = v; this.p[i] = p;
  }
  tag() {
    const top = this.v[0], n = --this.størrelse, v = this.v[n], p = this.p[n];
    let i = 0;
    for (;;) {
      const l = 2 * i + 1, r = l + 1;
      if (l >= n) break;
      const m = r < n && this.p[r] < this.p[l] ? r : l;
      if (this.p[m] >= p) break;
      this.v[i] = this.v[m]; this.p[i] = this.p[m]; i = m;
    }
    this.v[i] = v; this.p[i] = p;
    return top;
  }
}
