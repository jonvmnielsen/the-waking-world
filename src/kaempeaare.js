// Kæmpeårer (M10, Jons ønske): en eller to Motherlodes og et Deep Quarry midt mellem baserne — så
// rige, at de næsten aldrig løber tør, og derfor steder man må kæmpe om. Hver vogtes af en dødbringende lejr.
// Positionerne er i grundopstillingen (kortvalg.js drejer dem med kortet): på tværaksen mellem baserne,
// så begge spillere har lige langt.
import { hexTilVerden } from './hexgrid.js';
import { KORT } from './config.js';
import { FAMILIE_I_REGION } from './creepdata.js';
import { KÆMPEÅRER, mineMængde, brudMængde, MINE_STR } from './minedata.js';

const BYG = 'kaykit-hexagon/buildings/';
const STEDER = [[0.36, 0.36], [-0.36, -0.36], [0.05, 0.42], [-0.42, -0.05]];

export function placérKæmpeårer(k, tilf, { optag, fri, nærmesteFri, steder, lejre, lavLejr }) {
  const antal = KÆMPEÅRER[KORT.str] ?? 1;
  // Hvilken side der får Motherloden, er tilfældigt; Deep Quarry ligger på den anden side
  const pladser = tilf() < 0.5 ? [...STEDER] : [STEDER[1], STEDER[0], STEDER[3], STEDER[2]];
  const vogt = (f) => {
    const n = k.naboer(f).filter(fri).sort(() => tilf() - 0.5)[0];
    if (n) lejre.push(lavLejr(n, 4, FAMILIE_I_REGION[n.region] ?? 'plyndrere'));
  };
  for (let i = 0; i < antal; i++) {
    const [x, z] = pladser[i === 0 ? 0 : 2];
    const f = nærmesteFri(x, z);
    if (!f) continue;
    optag(f, { model: BYG + 'yellow/building_mine_yellow', rot: Math.floor(tilf() * 6) * 60, skala: MINE_STR.kæmpe.skala, skygge: true });
    steder.push({ type: 'mine', størrelse: 'kæmpe', guld: mineMængde('kæmpe', tilf), q: f.q, r: f.r, ...hexTilVerden(f.q, f.r) });
    vogt(f);
  }
  const [bx, bz] = pladser[1];
  const f = nærmesteFri(bx, bz);
  if (f) {
    optag(f, null);
    steder.push({ type: 'brud', sten: brudMængde(tilf), q: f.q, r: f.r, ...hexTilVerden(f.q, f.r) });
    vogt(f);
  }
}
