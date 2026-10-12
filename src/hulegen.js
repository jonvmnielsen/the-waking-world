// Huler (M11, Jons ønske: dungeons): 1–2 huleindgange pr. kort (2 på store kort). Hver hule er et lille kort
// under jorden, sat tilfældigt sammen af rum og gange: et startrum med udgangen, rum med creeps der bliver
// sværere jo dybere man kommer, et skatterum og til sidst en boss med en låst guldkiste.
// Hulerne ligger langt væk i hex-gitteret (q ≥ 400), så stifindingen virker derinde uden at blande sig med kortet.
import { hexAfstand, hexTilVerden } from './hexgrid.js';
import { KORT } from './config.js';
import { FAMILIE_I_REGION } from './creepdata.js';

export const HULE_Q = 400, HULE_X = 3000;   // hulerne ligger øst for x = 3000
export const erIHule = (x) => x > HULE_X;
const RUM_AFSTAND = 5;
const NAVNE = {
  skeletter: [['The Sunless Barrow', 'Old bones sleep down here, far from the light — and they do not like to be woken.'], ['The Echoing Deep', 'Every footstep comes back twice. The second one is not yours.']],
  plyndrere: [["Smugglers' Delve", 'A raiders’ hideout dug into the rock. Whatever they stole is still down here.'], ['The Old Mine', 'The miners left in a hurry. Someone else moved in.']],
};

// Hex-skive med radius ρ omkring (q, r)
const skive = (q, r, ρ) => { const ud = []; for (let dq = -ρ; dq <= ρ; dq++) for (let dr = Math.max(-ρ, -dq - ρ); dr <= Math.min(ρ, -dq + ρ); dr++) ud.push([q + dq, r + dr]); return ud; };
// Felterne på en lige linje mellem to hex
function linje(a, b) {
  const n = hexAfstand(a, b), ud = [];
  for (let i = 0; i <= n; i++) {
    const t = n ? i / n : 0, q = a.q + (b.q - a.q) * t, r = a.r + (b.r - a.r) * t, s = -q - r;
    let rq = Math.round(q), rr = Math.round(r); const rs = Math.round(s);
    const dq = Math.abs(rq - q), dr = Math.abs(rr - r), ds = Math.abs(rs - s);
    if (dq > dr && dq > ds) rq = -rr - rs; else if (dr > ds) rr = -rq - rs;
    ud.push([rq, rr]);
  }
  return ud;
}

export function lavHuler(k, tilf, { optag, fri, steder, lejre, kister, lavLejr }) {
  const antal = KORT.str === 'stor' ? 2 : 1, huler = [];
  const base = k.base, fjende = k.fjendeBase;
  // Indgange: frie felter langt fra baserne, stederne og lejrene — helst i bjergene eller gravlandet
  const kandidater = [...k.felter.values()].filter((f) => fri(f) && hexAfstand(f, base) > 12 && hexAfstand(f, fjende) > 12
    && steder.every((s) => hexAfstand(s, f) > 3) && lejre.every((l) => hexAfstand(l, f) > 4))
    .sort((a, b) => (['bjergene', 'gravlandet'].includes(b.region) ? 1 : 0) - (['bjergene', 'gravlandet'].includes(a.region) ? 1 : 0) || tilf() - 0.5);
  for (let i = 0; i < antal; i++) {
    const ind = kandidater.find((f) => huler.every((h) => hexAfstand(h.indgang, f) > 14));
    if (!ind) break;
    optag(ind, null);
    const familie = tilf() < 0.5 ? 'skeletter' : 'plyndrere';
    const [navn, lore] = NAVNE[familie][Math.floor(tilf() * 2)];
    // Rum: en tilfældig vandring på et groft gitter
    const q0 = HULE_Q + i * 60, r0 = 0, n = 5 + Math.floor(tilf() * 3);
    const celler = [[0, 0]], forælder = [-1];
    while (celler.length < n) {
      const fra = tilf() < 0.7 ? celler.length - 1 : Math.floor(tilf() * celler.length);
      const [cx, cy] = celler[fra], ret = [[1, 0], [0, 1], [-1, 1], [1, -1], [0, -1], [-1, 0]][Math.floor(tilf() * 6)];
      const ny = [cx + ret[0], cy + ret[1]];
      if (celler.some(([x, y]) => x === ny[0] && y === ny[1])) continue;
      celler.push(ny); forælder.push(fra);
    }
    const rum = celler.map(([cx, cy], j) => ({ q: q0 + cx * RUM_AFSTAND, r: r0 + cy * RUM_AFSTAND, ρ: j === 0 || j === n - 1 ? 2 : 1 + Math.floor(tilf() * 2) }));
    const felter = new Map();
    const sæt = ([q, r]) => { if (!felter.has(`${q},${r}`)) felter.set(`${q},${r}`, k.sæt(q, r, { type: 'hule', region: 'hule', gåbar: true, hule: i, kol: q - q0, ræk: r })); };
    rum.forEach((m) => skive(m.q, m.r, m.ρ).forEach(sæt));
    rum.forEach((m, j) => { if (forælder[j] >= 0) linje(rum[forælder[j]], m).forEach(sæt); });
    // Lejre: sværere jo længere inde; det sidste rum er bossens
    const dybde = rum.map((_, j) => { let d = 0; for (let x = j; forælder[x] >= 0; x = forælder[x]) d++; return d; });
    const bossRum = dybde.indexOf(Math.max(...dybde));
    let bossId = null;
    rum.forEach((m, j) => {
      if (j === 0) return;
      const f = k.hent(m.q, m.r);
      const niveau = j === bossRum ? 5 : Math.min(4, 2 + Math.floor(dybde[j] / 2));
      const l = lavLejr(f, niveau, familie);
      lejre.push(l);
      if (j === bossRum) bossId = l.id;
    });
    const bp = hexTilVerden(rum[bossRum].q, rum[bossRum].r);
    kister.push({ x: bp.x + 4, z: bp.z - 3.5, rot: -0.4, niveau: 4, guld: true, lejrId: bossId });
    // Et skatterum: en ulåst kiste i et af de andre rum
    const skat = rum.findIndex((_, j) => j > 0 && j !== bossRum && dybde[j] >= 2) ;
    if (skat > 0) { const sp = hexTilVerden(rum[skat].q, rum[skat].r); kister.push({ x: sp.x - 3.5, z: sp.z + 3, rot: 0.8, niveau: 3 }); }
    const sp = hexTilVerden(rum[0].q, rum[0].r), ip = hexTilVerden(ind.q, ind.r);
    huler.push({ id: `hule-${i}`, nr: i, navn, lore, familie, indgang: { q: ind.q, r: ind.r, x: ip.x, z: ip.z }, udgang: { x: sp.x, z: sp.z - 6 }, start: { x: sp.x, z: sp.z + 4 }, rum, felter: [...felter.values()], bossId });
  }
  k.huler = huler;
  return huler;
}
