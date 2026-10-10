// Genererer terrænet: land, hav, søer, kyst, regioner, bjerge og skove.
// Kortet er et rektangel af hex-felter (odd-r offset), centreret om 0,0.
import { HexKort, RETNINGER, hexTilVerden, hexAfstand } from './hexgrid.js';
import { støj } from './stoej.js';
import { KORT } from './config.js';

// Kystfliser: hvilke kanter er vand ved rotation 0 (målt i probe)
const KYST = { 1: ['a', 1], 2: ['b', 1], 3: ['c', 0], 4: ['d', 5] };

export const REGIONER = {
  askemarken: { navn: 'Ashfields', frø: [[-0.55, 0.55], [0.05, 0.15]], farve: [1.0, 0.97, 0.88] },
  skoven: { navn: 'Greenwood', frø: [[-0.62, -0.25], [-0.18, -0.6]], farve: [0.86, 1.0, 0.86] },
  gravlandet: { navn: 'Gravelands', frø: [[0.6, -0.55]], farve: [0.72, 0.74, 0.66] },
  bjergene: { navn: 'Highlands', frø: [[0.18, -0.72], [0.78, 0.02]], farve: [0.93, 0.93, 0.86] },
  sumpen: { navn: 'The Marsh', frø: [[0.52, 0.62]], farve: [0.74, 0.86, 0.7] },
};

// Hvor ofte hver region har skov og bjerge (tærskel for støj; lavere = mere)
const TÆTHED = {
  askemarken: { skov: 0.74, bjerg: 0.86, sø: 0.8 },
  skoven: { skov: 0.44, bjerg: 0.9, sø: 0.8 },
  gravlandet: { skov: 0.7, bjerg: 0.8, sø: 0.84 },
  bjergene: { skov: 0.78, bjerg: 0.5, sø: 0.86 },
  sumpen: { skov: 0.66, bjerg: 0.92, sø: 0.56 },
};

export const tilAksial = (kol, ræk) => ({ q: kol - Math.floor(ræk / 2), r: ræk });

export function lavTerræn(seed) {
  const k = new HexKort();
  const N = KORT.størrelse, H = N / 2;
  const base = tilAksial(Math.round(-0.55 * H), Math.round(0.55 * H));
  k.base = base;
  // The Memory (AI-modstanderen) har sin base i det modsatte hjørne
  const fjende = tilAksial(Math.round(0.55 * H), Math.round(-0.55 * H));
  k.fjendeBase = fjende;

  for (let ræk = -H; ræk < H; ræk++) {
    for (let kol = -H; kol < H; kol++) {
      const { q, r } = tilAksial(kol, ræk);
      const nx = kol / H, nz = ræk / H;
      const region = nærmesteRegion(nx, nz, seed);
      const kant = Math.min(kol + H, H - 1 - kol, ræk + H, H - 1 - ræk);
      const land = kant + (støj(kol, ræk, seed + 1, 5) - 0.5) * 5 > 2.6;
      const f = k.sæt(q, r, { kol, ræk, region, type: land ? 'græs' : 'vand', gåbar: land });
      if (!land) continue;
      const tæt = TÆTHED[region];
      const dEgen = hexAfstand(f, base), dFjende = hexAfstand(f, fjende);
      const dBase = Math.min(dEgen, dFjende);
      const vedBase = dBase <= 6;
      if (!vedBase && støj(kol, ræk, seed + 2, 4) > tæt.sø) { f.type = 'vand'; f.gåbar = false; continue; }
      if (vedBase) { baseOmegn(f, dEgen <= 6 ? base : fjende, dBase); continue; }
      if (støj(kol, ræk, seed + 3, 4.5) > tæt.bjerg) blokér(f, 'bjerg');
      else if (støj(kol, ræk, seed + 4, 3.5) > tæt.skov) blokér(f, 'skov');
    }
  }
  lavKyst(k);
  sikrSammenhæng(k);
  return k;
}

// Omkring basen: frit land til bygninger, en skov mod nordvest og et stenbjerg mod nordøst,
// så arbejderne har træ og sten tæt på (guldminen sættes i steder.js)
function baseOmegn(f, base, d) {
  if (d < 4) return;
  const p = hexTilVerden(f.q, f.r), b = hexTilVerden(base.q, base.r);
  const v = (Math.atan2(p.z - b.z, p.x - b.x) * 180) / Math.PI;   // 0 = øst, -90 = nord
  if (v < -105 || v > 165) blokér(f, 'skov');
  else if (v > -62 && v < -28 && d <= 5) blokér(f, 'bjerg');
}

function nærmesteRegion(nx, nz, seed) {
  // Lidt støj på grænserne så regionerne ikke bliver lige linjer
  const jx = (støj(nx * 20, nz * 20, seed + 9, 6) - 0.5) * 0.35;
  const jz = (støj(nz * 20, nx * 20, seed + 10, 6) - 0.5) * 0.35;
  let bedst = null, bd = Infinity;
  for (const [id, reg] of Object.entries(REGIONER)) {
    for (const [sx, sz] of reg.frø) {
      const d = (nx + jx - sx) ** 2 + (nz + jz - sz) ** 2;
      if (d < bd) { bd = d; bedst = id; }
    }
  }
  return bedst;
}

function blokér(f, hvad) { f.blok = hvad; f.gåbar = false; }

// Land med vand på 1-4 sammenhængende kanter bliver kystfliser; resten bliver vand
function lavKyst(k) {
  for (let runde = 0; runde < 8; runde++) {
    let ændret = false;
    for (const f of k.felter.values()) {
      if (f.type === 'vand') continue;
      const vand = RETNINGER.map(([dq, dr]) => {
        const n = k.hent(f.q + dq, f.r + dr);
        return !n || n.type === 'vand';
      });
      const antal = vand.filter(Boolean).length;
      if (antal === 0) { f.type = 'græs'; continue; }
      const start = vand.findIndex((v, i) => v && !vand[(i + 5) % 6]);
      const ok = start >= 0 && antal <= 4 && vand.every((v, i) => v === (((i - start + 6) % 6) < antal));
      if (!ok) { f.type = 'vand'; f.gåbar = false; f.blok = undefined; ændret = true; continue; }
      const [variant, b] = KYST[antal];
      f.type = 'kyst'; f.variant = variant; f.rot = (start - b + 6) % 6;
      f.blok = undefined; f.gåbar = true;
    }
    if (!ændret) break;
  }
}

// Felter man ikke kan nå fra basen bliver til skov, så alt gåbart hænger sammen
function sikrSammenhæng(k) {
  const start = k.hent(k.base.q, k.base.r);
  const set = new Set([start]);
  const kø = [start];
  while (kø.length) {
    const f = kø.pop();
    for (const n of k.naboer(f)) if (n.gåbar && !set.has(n)) { set.add(n); kø.push(n); }
  }
  for (const f of k.felter.values()) {
    if (!f.gåbar || set.has(f)) continue;
    if (f.type === 'græs') blokér(f, 'skov'); else f.gåbar = false;
  }
}

export function kortGrænser() {
  const H = KORT.størrelse / 2;
  const x = hexTilVerden(H, 0).x, z = hexTilVerden(0, H).z;
  return { minX: -x - 4, maxX: x + 4, minZ: -z - 4, maxZ: z + 4 };
}
