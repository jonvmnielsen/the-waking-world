// Hjælpere til at male jordens teksturer på et lærred (grund.js): fliser der gentager sig sømløst,
// bløde pletter, småsten og sne.
import { rng } from './stoej.js';

export const S = 256;   // pixels pr. flise

export function lærred(farve) {
  const c = document.createElement('canvas'); c.width = c.height = S;
  const ctx = c.getContext('2d');
  ctx.fillStyle = farve; ctx.fillRect(0, 0, S, S);
  return { c, ctx };
}

// Tegn noget der fliser: kaldes 9 gange forskudt med en flises bredde
export function flis(x, y, r, tegn) {
  for (const dx of [-S, 0, S]) for (const dy of [-S, 0, S]) {
    const px = x + dx, py = y + dy;
    if (px + r < 0 || py + r < 0 || px - r > S || py - r > S) continue;
    tegn(px, py);
  }
}

export const hsl = (h, s, l, a = 1) => `hsla(${h},${s}%,${l}%,${a})`;

// Bløde pletter i baggrunden, så fladen ikke er ensfarvet
export function pletter(ctx, t, n, farve, rMin, rMax) {
  for (let i = 0; i < n; i++) {
    const x = t() * S, y = t() * S, r = rMin + t() * (rMax - rMin);
    flis(x, y, r, (px, py) => {
      const g = ctx.createRadialGradient(px, py, 0, px, py, r);
      g.addColorStop(0, farve(t)); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.fill();
    });
  }
}

export function småsten(ctx, t, n, h, l) {
  for (let i = 0; i < n; i++) {
    const x = t() * S, y = t() * S, r = 1.5 + t() * 4, v = t() * Math.PI;
    flis(x, y, r + 2, (px, py) => {
      ctx.fillStyle = hsl(h, 8, l - 14, 0.5); ctx.beginPath(); ctx.ellipse(px + 1, py + 1.2, r, r * 0.75, v, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = hsl(h, 10, l + (t() - 0.5) * 14); ctx.beginPath(); ctx.ellipse(px, py, r, r * 0.75, v, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = hsl(h, 10, l + 14, 0.6); ctx.beginPath(); ctx.ellipse(px - r * 0.3, py - r * 0.3, r * 0.4, r * 0.3, v, 0, Math.PI * 2); ctx.fill();
    });
  }
}

// Sne: hvid med blålige skygger, fygede driver og glimt
export function sne(seed) {
  const t = rng(seed), { c, ctx } = lærred(hsl(210, 30, 93));
  pletter(ctx, t, 30, (t) => hsl(210 + (t() - 0.5) * 20, 35, 82 + t() * 10, 0.5), 14, 46);
  ctx.lineCap = 'round';
  for (let i = 0; i < 60; i++) {
    const x = t() * S, y = t() * S, len = 14 + t() * 26;
    ctx.strokeStyle = hsl(212, 30, 84, 0.45); ctx.lineWidth = 2 + t() * 2;
    flis(x, y, len, (px, py) => { ctx.beginPath(); ctx.moveTo(px, py); ctx.quadraticCurveTo(px + len * 0.5, py - 4, px + len, py + 1); ctx.stroke(); });
  }
  for (let i = 0; i < 260; i++) {
    const x = t() * S, y = t() * S;
    ctx.fillStyle = `rgba(255,255,255,${0.6 + t() * 0.4})`;
    flis(x, y, 1, (px, py) => ctx.fillRect(px, py, 1.3, 1.3));
  }
  return c;
}

