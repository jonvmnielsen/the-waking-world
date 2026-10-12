// Jordens teksturer (Jons ønske: "meget mere spil i jorden"). Tegnes ved start på et lærred, så de
// passer til den håndlavede lav-poly stil: græsstrå i mange grønne toner, jord med småsten, skovbund
// med blade, sand med korn og klippe med revner. Alle fliser sømløst (det der går ud over kanten,
// tegnes igen i den modsatte side). Bruges af terrænets shader (terraen.js).
import * as THREE from 'three';
import { rng } from './stoej.js';
import { S, lærred, flis, hsl, pletter, småsten, sne } from './malehjaelp.js';

function græs(seed, [h, s, l] = [78, 38, 50], { tør = false, lyng = false } = {}) {
  const t = rng(seed), { c, ctx } = lærred(hsl(h, s, l));
  pletter(ctx, t, 26, (t) => hsl(h + (t() - 0.5) * 24, s + 5, l + (t() - 0.5) * 16, 0.55), 16, 46);
  ctx.lineCap = 'round';
  // Græsstrå: korte, let bøjede streger
  for (let i = 0; i < (tør ? 900 : 2600); i++) {
    const x = t() * S, y = t() * S, len = 4 + t() * 7, v = -Math.PI / 2 + (t() - 0.5) * 1.1;
    const lys = l + (t() - 0.45) * 26;
    ctx.strokeStyle = hsl(h + (t() - 0.5) * 30, s + (t() - 0.5) * 20, Math.max(12, Math.min(80, lys)), 0.9);
    ctx.lineWidth = 1 + t() * 1.4;
    const ex = Math.cos(v) * len, ey = Math.sin(v) * len, bx = (t() - 0.5) * 3;
    flis(x, y, len, (px, py) => { ctx.beginPath(); ctx.moveTo(px, py); ctx.quadraticCurveTo(px + bx, py + ey * 0.5, px + ex, py + ey); ctx.stroke(); });
  }
  // Små kløverblade og en sjælden blomst
  for (let i = 0; i < 40; i++) {
    const x = t() * S, y = t() * S;
    ctx.fillStyle = hsl(h + 10, s + 10, l - 8, 0.8);
    flis(x, y, 4, (px, py) => { for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(px + Math.cos(k * 2.1) * 2, py + Math.sin(k * 2.1) * 2, 2, 0, Math.PI * 2); ctx.fill(); } });
  }
  // Lyng: tætte klynger af små lilla og rosa prikker
  if (lyng) for (let i = 0; i < 900; i++) {
    const x = t() * S, y = t() * S;
    ctx.fillStyle = hsl(290 + t() * 40, 35 + t() * 25, 40 + t() * 22, 0.85);
    flis(x, y, 2, (px, py) => { ctx.beginPath(); ctx.arc(px, py, 1 + t() * 1.3, 0, Math.PI * 2); ctx.fill(); });
  }
  for (let i = 0; i < (tør ? 0 : 6); i++) {
    const x = t() * S, y = t() * S;
    ctx.fillStyle = ['#f2e2a0', '#ffd75a', '#d9a0f0'][Math.floor(t() * 3)];
    flis(x, y, 3, (px, py) => { ctx.beginPath(); ctx.arc(px, py, 1.6, 0, Math.PI * 2); ctx.fill(); });
  }
  return c;
}

function jord(seed, [h, s, l] = [32, 30, 45]) {
  const t = rng(seed), { c, ctx } = lærred(hsl(h, s, l));
  pletter(ctx, t, 30, (t) => hsl(h - 2 + (t() - 0.5) * 14, s - 2, l - 3 + (t() - 0.5) * 12, 0.4), 12, 40);
  for (let i = 0; i < 1800; i++) {
    const x = t() * S, y = t() * S;
    ctx.fillStyle = hsl(h - 2, s - 5, l - 15 + t() * 30, 0.5);
    flis(x, y, 2, (px, py) => ctx.fillRect(px, py, 1.5, 1.5));
  }
  småsten(ctx, t, 70, h, Math.min(80, l + 11));
  // Tørre strå der stikker op her og der
  ctx.lineCap = 'round';
  for (let i = 0; i < 120; i++) {
    const x = t() * S, y = t() * S, len = 3 + t() * 5;
    ctx.strokeStyle = hsl(60 + t() * 30, 30, 40 + t() * 15, 0.8); ctx.lineWidth = 1.2;
    flis(x, y, len, (px, py) => { ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + (t() - 0.5) * 3, py - len); ctx.stroke(); });
  }
  return c;
}

function skovbund(seed, [h, s, l] = [60, 28, 24]) {
  const t = rng(seed), { c, ctx } = lærred(hsl(h, s, l));
  pletter(ctx, t, 30, (t) => hsl(h - 10 + (t() - 0.5) * 40, s + 7, l - 2 + (t() - 0.5) * 12, 0.6), 14, 40);
  // Visne blade og nåle
  for (let i = 0; i < 900; i++) {
    const x = t() * S, y = t() * S, r = 2 + t() * 3, v = t() * Math.PI;
    ctx.fillStyle = hsl([25, 35, 45, 70, 90][Math.floor(t() * 5)] + (h - 60) * 0.5, 40 + t() * 25 - (28 - s), l - 2 + t() * 22, 0.9);
    flis(x, y, r, (px, py) => { ctx.beginPath(); ctx.ellipse(px, py, r, r * 0.45, v, 0, Math.PI * 2); ctx.fill(); });
  }
  ctx.lineCap = 'round';
  for (let i = 0; i < 70; i++) {
    const x = t() * S, y = t() * S, len = 6 + t() * 10, v = t() * Math.PI * 2;
    ctx.strokeStyle = hsl(28, 30, 22, 0.9); ctx.lineWidth = 1.3;
    flis(x, y, len, (px, py) => { ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + Math.cos(v) * len, py + Math.sin(v) * len); ctx.stroke(); });
  }
  // Mos
  pletter(ctx, t, 18, () => hsl(95, 45, 32, 0.55), 6, 16);
  return c;
}

function sand(seed, [h, s, l] = [42, 48, 72]) {
  const t = rng(seed), { c, ctx } = lærred(hsl(h, s, l));
  pletter(ctx, t, 24, (t) => hsl(h - 2 + (t() - 0.5) * 10, s - 3, l - 2 + (t() - 0.5) * 12, 0.6), 14, 44);
  // Bølgeriller fra vinden
  ctx.lineWidth = 1.4;
  for (let y = 0; y < S; y += 9) {
    ctx.strokeStyle = hsl(h - 2, s - 8, l - 10, 0.35);
    ctx.beginPath();
    for (let x = 0; x <= S; x += 8) ctx.lineTo(x, y + Math.sin((x / S) * Math.PI * 4 + y) * 2.5);
    ctx.stroke();
  }
  for (let i = 0; i < 2200; i++) {
    const x = t() * S, y = t() * S;
    ctx.fillStyle = hsl(h - 4, s - 18, l - 22 + t() * 40, 0.55);
    flis(x, y, 1, (px, py) => ctx.fillRect(px, py, 1.2, 1.2));
  }
  småsten(ctx, t, 14, h - 7, l - 2);
  return c;
}

function klippe(seed, [h, s, l] = [35, 6, 52]) {
  const t = rng(seed), { c, ctx } = lærred(hsl(h, s, l));
  // Facetter: skrå flader i forskellige grå toner
  for (let i = 0; i < 70; i++) {
    const x = t() * S, y = t() * S, r = 10 + t() * 22, n = 5 + Math.floor(t() * 3), v0 = t() * 6;
    const ll = l - 10 + t() * 22;
    flis(x, y, r, (px, py) => {
      ctx.fillStyle = hsl(h, s, ll, 0.85);
      ctx.beginPath();
      for (let k = 0; k < n; k++) { const v = v0 + (k / n) * Math.PI * 2, rr = r * (0.7 + 0.3 * Math.sin(k * 7 + x)); ctx[k ? 'lineTo' : 'moveTo'](px + Math.cos(v) * rr, py + Math.sin(v) * rr); }
      ctx.closePath(); ctx.fill();
      ctx.strokeStyle = hsl(h, s + 2, l - 22, 0.5); ctx.lineWidth = 1; ctx.stroke();
    });
  }
  småsten(ctx, t, 40, h - 5, l - 2);
  if (l > 35) pletter(ctx, t, 10, () => hsl(90, 30, 38, 0.45), 6, 14);   // lav og mos (ikke på sort lava-klippe)
  return c;
}

// Støj til at gøre overgangene mellem jordtyperne uregelmæssige
function støjBillede(seed) {
  const t = rng(seed), { c, ctx } = lærred('#808080');
  pletter(ctx, t, 90, (t) => (t() < 0.5 ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'), 8, 34);
  return c;
}

const tekst = (c) => {
  const tx = new THREE.CanvasTexture(c);
  tx.wrapS = tx.wrapT = THREE.RepeatWrapping;
  tx.colorSpace = THREE.SRGBColorSpace;
  tx.anisotropy = 4;
  return tx;
};

// Alle jordens teksturer, malet i biomets farver (biomdata.js). sne bruges af vinter og snedække.
export function lavGrund(seed = 11, u = null) {
  const j = u?.jord ?? {};
  const s = tekst(støjBillede(seed + 9)); s.colorSpace = THREE.NoColorSpace;
  return {
    græs: tekst(u?.græsSne ? sne(seed) : græs(seed, j.græs, { tør: !!u?.græsTør, lyng: !!u?.lyng })),
    jord: tekst(jord(seed + 1, j.jord)),
    skov: tekst(skovbund(seed + 2, j.skov)),
    sand: tekst(sand(seed + 3, j.sand)),
    klippe: tekst(klippe(seed + 4, j.klippe)),
    sne: tekst(sne(seed + 5)),
    støj: s,
  };
}
