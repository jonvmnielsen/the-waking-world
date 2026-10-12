// Skilte over creep-lejrene (Jons ønske: sværhedsgraden skal kunne ses): en lille plade i sværhedsgradens
// farve med dødningehoveder (1–4), en krone for bosser og en stjerne for De Ældgamle, plus creeps' level.
// Vises når lejren er udforsket og nogen af dens creeps lever.
import * as THREE from 'three';
import { NIVEAUER } from './creepdata.js';

const B = 256, H = 64;
const teksturer = new Map();

function dødningehoved(ctx, x, y, r, farve) {
  ctx.fillStyle = farve;
  ctx.beginPath(); ctx.arc(x, y - r * 0.15, r, 0, Math.PI * 2); ctx.fill();
  ctx.fillRect(x - r * 0.55, y + r * 0.45, r * 1.1, r * 0.6);
  ctx.fillStyle = '#140e0a';
  ctx.beginPath(); ctx.arc(x - r * 0.38, y - r * 0.1, r * 0.27, 0, Math.PI * 2); ctx.arc(x + r * 0.38, y - r * 0.1, r * 0.27, 0, Math.PI * 2); ctx.fill();
}

function krone(ctx, x, y, r, farve) {
  ctx.fillStyle = farve;
  ctx.beginPath();
  ctx.moveTo(x - r, y + r * 0.7); ctx.lineTo(x - r, y - r * 0.5); ctx.lineTo(x - r * 0.5, y); ctx.lineTo(x, y - r * 0.9);
  ctx.lineTo(x + r * 0.5, y); ctx.lineTo(x + r, y - r * 0.5); ctx.lineTo(x + r, y + r * 0.7); ctx.closePath(); ctx.fill();
}

function stjerne(ctx, x, y, r, farve) {
  ctx.fillStyle = farve;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) { const v = (i / 8) * Math.PI * 2 - Math.PI / 2, rr = i % 2 ? r * 0.38 : r; ctx[i ? 'lineTo' : 'moveTo'](x + Math.cos(v) * rr, y + Math.sin(v) * rr); }
  ctx.closePath(); ctx.fill();
}

function tekstur(niveau) {
  if (teksturer.has(niveau)) return teksturer.get(niveau);
  const n = NIVEAUER[niveau];
  const c = document.createElement('canvas'); c.width = B; c.height = H;
  const ctx = c.getContext('2d');
  ctx.fillStyle = 'rgba(20, 14, 10, 0.82)'; ctx.strokeStyle = n.farve; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.roundRect(4, 6, B - 8, H - 12, 16); ctx.fill(); ctx.stroke();
  // Ikoner til venstre, navn og level til højre
  const antal = niveau <= 4 ? niveau : 1;
  for (let i = 0; i < antal; i++) {
    const x = 28 + i * 24, y = H / 2;
    if (niveau === 5) krone(ctx, x, y, 14, n.farve);
    else if (niveau === 6) stjerne(ctx, x, y, 17, n.farve);
    else dødningehoved(ctx, x, y, 9.5, n.farve);
  }
  ctx.fillStyle = n.farve; ctx.font = '800 25px system-ui, sans-serif'; ctx.textBaseline = 'middle'; ctx.textAlign = 'right';
  ctx.fillText(`${n.navn} · Lv ${n.level}`, B - 18, H / 2 + 1);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  teksturer.set(niveau, t);
  return t;
}

export class LejrSkilte {
  constructor(spil) {
    this.spil = spil;
    this.tid = 0;
    this.skilte = spil.lejre.map((l) => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tekstur(l.data.niveau), transparent: true, depthWrite: false, fog: false }));
      const stor = l.data.niveau >= 5;
      s.scale.set(stor ? 8.4 : 7, stor ? 2.1 : 1.75, 1);
      s.position.set(l.x, stor ? 9.5 : 7, l.z);
      s.renderOrder = 5;
      s.visible = false;
      spil.verden.scene.add(s);
      return { s, l };
    });
  }

  opdater(dt) {
    this.tid -= dt;
    if (this.tid > 0) return;
    this.tid = 0.4;
    const t = this.spil.taage;
    for (const { s, l } of this.skilte) s.visible = t.erUdforsket(l.x, l.z) && l.creeps.some((c) => !c.død);
  }
}
