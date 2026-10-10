// Placerer basen, neutrale steder og creep-lejre på det genererede terræn.
import { hexAfstand, hexTilVerden } from './hexgrid.js';
import { tilAksial } from './kortgen.js';
import { KORT } from './config.js';
import { FAMILIE_I_REGION, SAMMENSÆTNING } from './creepdata.js';
import { lejrPynt } from './pynt.js';

const BYG = 'kaykit-hexagon/buildings/';

// Spilleren starter kun med Storlejren (M3), der fylder tre felter; resten bygger arbejderne.
const STORLEJR_FELTER = [[0, 0], [1, -1], [0, -1]];

export function placérSteder(k, tilf) {
  const H = KORT.størrelse / 2;
  const optag = (f, pynt, blokér = true) => { f.optaget = true; if (blokér) f.gåbar = false; if (pynt) f.pynt.push(pynt); return f; };
  const fri = (f) => f && f.type === 'græs' && f.gåbar && !f.optaget && k.naboer(f).filter((n) => n.gåbar).length >= 5;
  const nærmesteFri = (nx, nz) => {
    const mål = tilAksial(Math.round(nx * H), Math.round(nz * H));
    let bedst = null, bd = Infinity;
    for (const f of k.felter.values()) {
      if (!fri(f)) continue;
      const d = hexAfstand(f, mål);
      if (d < bd) { bd = d; bedst = f; }
    }
    return bedst;
  };

  // 1) Basen
  const b = k.base;
  // Storlejren står i midten af sine felter (selve bygningen laves i base.js)
  const felter = STORLEJR_FELTER.map(([dq, dr]) => k.hent(b.q + dq, b.r + dr)).filter(Boolean);
  for (const f of felter) optag(f, null);
  const storlejr = {
    felter,
    x: felter.reduce((s, f) => s + hexTilVerden(f.q, f.r).x, 0) / felter.length,
    z: felter.reduce((s, f) => s + hexTilVerden(f.q, f.r).z, 0) / felter.length,
  };
  const spawnFelt = k.hent(b.q + 1, b.r + 1);
  spawnFelt.optaget = true;
  spawnFelt.pynt.push({ model: 'kaykit-hexagon/decoration/props/flag_green', dx: 1.6, dz: 1.2, rot: 0, skala: 1.4 });

  // Startminen: et frit felt tre skridt mod øst/sydøst for basen
  const c0 = hexTilVerden(b.q, b.r);
  const vinkelTil = (f) => { const p = hexTilVerden(f.q, f.r); return Math.abs(Math.atan2(p.z - c0.z, p.x - c0.x) - 0.3); };
  const minefelt = [...k.felter.values()].filter((f) => hexAfstand(f, b) === 3 && fri(f)).sort((p, q) => vinkelTil(p) - vinkelTil(q))[0];

  // 2) Neutrale steder (gul = neutral)
  const steder = [];
  if (minefelt) {
    optag(minefelt, { model: BYG + 'yellow/building_mine_yellow', rot: 240, skala: 1.1, skygge: true });
    steder.push({ type: 'mine', start: true, q: minefelt.q, r: minefelt.r, ...hexTilVerden(minefelt.q, minefelt.r) });
  }
  const sted = (type, nx, nz, model, skala = 1, blokér = true) => {
    const f = nærmesteFri(nx, nz);
    if (!f) return;
    optag(f, { model: BYG + model, rot: Math.floor(tilf() * 6) * 60, skala, skygge: true }, blokér);
    steder.push({ type, q: f.q, r: f.r, ...hexTilVerden(f.q, f.r) });
  };
  sted('kro', 0.0, 0.0, 'yellow/building_tavern_yellow', 1.5);
  sted('marked', 0.42, 0.22, 'yellow/building_market_yellow', 1.15);
  for (const [x, z] of [[-0.12, 0.42], [0.32, -0.18], [-0.45, -0.42], [0.62, 0.55]]) sted('kilde', x, z, 'yellow/building_well_yellow', 1.5);
  for (const [x, z] of [[-0.05, -0.15], [-0.7, -0.7], [0.68, 0.28], [0.15, 0.72]]) sted('udkig', x, z, 'yellow/building_tower_base_yellow', 1.4);
  sted('mine', -0.32, 0.6, 'yellow/building_mine_yellow', 1.1);
  // Kister (GDD 8.4): ved ruiner og spredt i de vilde regioner; sværere jo længere væk
  const kister = [];
  const kiste = (f, niveau, ekstra = {}) => {
    const p = hexTilVerden(f.q, f.r);
    kister.push({ x: p.x + (tilf() - 0.5) * 3, z: p.z + (tilf() - 0.5) * 3, rot: tilf() * Math.PI * 2, niveau, ...ekstra });
    f.optaget = true;
  };
  for (let i = 0; i < 4; i++) {
    const ruin = nærmesteFri(-0.3 + tilf() * 0.6, -0.1 + tilf() * 0.5);
    if (!ruin || ruin.region !== 'askemarken') continue;
    optag(ruin, { model: BYG + 'neutral/' + (i % 2 ? 'building_destroyed' : 'building_scaffolding'), rot: tilf() * 360, skala: 1.2, skygge: true });
    const ved = k.naboer(ruin).find(fri);
    if (ved) kiste(ved, 2);
  }
  for (const [x, z, niv] of [[-0.75, -0.1, 2], [0.1, -0.45, 3], [0.45, 0.78, 3], [0.88, -0.38, 4]]) {
    const f = nærmesteFri(x, z);
    if (f) kiste(f, niv);
  }

  // 3) Creep-lejre spredt over kortet; sværere jo længere fra basen
  const lejre = [];
  const boss = (nx, nz, familie) => {
    const f = nærmesteFri(nx, nz);
    if (!f) return;
    const l = lavLejr(f, 5, familie);
    lejre.push(l);
    const p = hexTilVerden(f.q, f.r);
    kister.push({ x: p.x + 3.2, z: p.z - 2.6, rot: -0.5, niveau: 4, guld: true, lejrId: l.id });
  };
  const lavLejr = (f, niveau, familie) => {
    const valg = SAMMENSÆTNING[familie][niveau];
    optag(f, null, false);
    lejrPynt(f, familie, tilf, niveau === 5);
    return { id: `lejr-${f.q}-${f.r}`, q: f.q, r: f.r, niveau, familie, creeps: valg[Math.floor(tilf() * valg.length)] };
  };
  boss(0.72, -0.72, 'skeletter');
  boss(0.82, -0.05, 'plyndrere');

  const maxAfstand = Math.max(...[...k.felter.values()].filter((f) => f.gåbar).map((f) => hexAfstand(f, b)));
  const kandidater = [...k.felter.values()].filter(fri).sort(() => tilf() - 0.5);
  for (const f of kandidater) {
    if (lejre.length >= 26) break;
    const d = hexAfstand(f, b);
    if (d < 6) continue;
    if (lejre.some((l) => hexAfstand(l, f) < 6) || steder.some((s) => hexAfstand(s, f) < 3)) continue;
    const t = d / maxAfstand;
    const niveau = t < 0.3 ? 1 : t < 0.48 ? 2 : t < 0.68 ? 3 : 4;
    lejre.push(lavLejr(f, niveau, FAMILIE_I_REGION[f.region]));
  }

  // 4) Guldminer ved nogle af de mellemsvære lejre (ekspansioner)
  for (const l of lejre.filter((l) => l.niveau === 2 || l.niveau === 3).slice(0, 5)) {
    const n = k.naboer(k.hent(l.q, l.r)).find(fri);
    if (n) { optag(n, { model: BYG + 'yellow/building_mine_yellow', rot: Math.floor(tilf() * 6) * 60, skala: 1.1, skygge: true }); steder.push({ type: 'mine', q: n.q, r: n.r, ...hexTilVerden(n.q, n.r) }); }
  }

  const p = hexTilVerden(spawnFelt.q, spawnFelt.r);
  return { heltSpawn: { x: p.x, z: p.z }, steder, lejre, kister, storlejr };
}
