// Dyrene har også en vits (M14, GDD 17b søjle 4 — som fårene i WC3): prik til en hjort, hind eller ræv,
// og den svarer med et snøft. Bliver man ved, sprænges den i en byge af blod og pels (Jon: blod er ok).
// Resten af flokken flygter. Kun dyr man kan se, og kun når man rammer lige på dem.
import * as THREE from 'three';
import { bus } from './events.js';
import { DYRELYDE } from './stemmedata.js';

const GRÆNSE = 5;      // det femte prik i træk
const PAUSE = 2.2;     // sekunder mellem prik der stadig tæller (spillets tid)
const STYKKE = new THREE.IcosahedronGeometry(0.16, 0);

export function prikDyr(spil, px, py, skærm) {
  let bedst = null, bd = 38;
  for (const f of spil.livet?.flokke ?? []) for (const d of f.dyr) {
    if (!d.rod.visible) continue;
    const s = skærm(d.x, 0.9, d.z), a = Math.hypot(s.x - px, s.y - py);
    if (a < bd) { bd = a; bedst = d; }
  }
  if (!bedst) return false;
  const d = bedst, nu = spil.ur?.tid ?? 0;
  d.prik = nu - (d.prikTid ?? -99) < PAUSE ? (d.prik ?? 0) + 1 : 1;
  d.prikTid = nu;
  if (d.prik >= GRÆNSE) { spræng(spil, d); return true; }
  const l = DYRELYDE[d.art] ?? ['*?*'];
  bus.emit('replik', { enhed: d, tekst: d.prik === GRÆNSE - 1 ? '*looks like it might burst*' : l[(d.prik - 1) % l.length] });
  d.rod.position.y = 0.35;   // et lille hop
  setTimeout(() => { d.rod.position.y = 0; }, 160);
  return true;
}

function spræng(spil, d) {
  const x = d.x, z = d.z, f = d.flok;
  f.dyr.splice(f.dyr.indexOf(d), 1);
  d.fjern();
  for (const a of f.dyr) a.flygt({ x, z });
  bus.emit('effekt', { type: 'sprængt', x, z });
  bus.emit('replik', { enhed: { x, z, højde: 0 }, tekst: '*SPLAT*' });
}

// Effekten: en byge af stykker der falder til jorden, og en plet blod der blegner (kaldes fra effects.js)
export function sprængEffekt(eff, { x, z }) {
  const mat = [0x8a0a0a, 0x5c0606, 0xb0703a].map((c) => new THREE.MeshLambertMaterial({ color: c }));
  const g = new THREE.Group();
  const stykker = [];
  for (let i = 0; i < 22; i++) {
    const m = new THREE.Mesh(STYKKE, mat[i % 3]);
    const v = Math.random() * Math.PI * 2, fart = 2 + Math.random() * 5;
    m.position.set(x, 0.8, z);
    const st = 0.5 + Math.random();
    m.scale.setScalar(st);
    stykker.push({ m, s: st, vx: Math.cos(v) * fart, vz: Math.sin(v) * fart, vy: 4 + Math.random() * 6 });
    g.add(m);
  }
  let sidst = 0;
  eff.tilføj(g, 3, (t) => {
    const dt = (t - sidst) * 3; sidst = t;
    for (const s of stykker) {
      if (t > 0.75) s.m.scale.setScalar(Math.max(0.01, (1 - t) * 4) * s.s);
      if (s.m.position.y <= 0.05) { s.m.position.y = 0.05; continue; }
      s.vy -= 22 * dt;
      s.m.position.x += s.vx * dt; s.m.position.y += s.vy * dt; s.m.position.z += s.vz * dt;
    }
  }, () => mat.forEach((m) => m.dispose()));
  eff.bølge(x, z, 1.4, 0x9a0b0b, 0.35);
  // Pletter af blod i en uregelmæssig klat, der blegner langsomt
  const pmat = new THREE.MeshBasicMaterial({ color: 0x5a0303, transparent: true, opacity: 0.8, depthWrite: false });
  const klat = new THREE.Group();
  for (let i = 0; i < 7; i++) {
    const r = 0.25 + Math.random() * (i === 0 ? 0.6 : 0.4), v = Math.random() * Math.PI * 2, a = i === 0 ? 0 : 0.5 + Math.random() * 1.3;
    const p = new THREE.Mesh(new THREE.CircleGeometry(r, 12).rotateX(-Math.PI / 2), pmat);
    p.position.set(x + Math.cos(v) * a, 0.06 + i * 0.001, z + Math.sin(v) * a); p.renderOrder = 2;
    klat.add(p);
  }
  eff.tilføj(klat, 14, (t) => { pmat.opacity = 0.8 * (1 - t * t); }, () => { pmat.dispose(); klat.children.forEach((c) => c.geometry.dispose()); });
}
