// Skilte over creep-lejrene (Jons ønske: sværhedsgraden skal kunne ses): en lille plade i sværhedsgradens
// farve med dødningehoveder (1–4), en krone for bosser og en stjerne for De Ældgamle, plus creeps' level.
// Vises når lejren er udforsket og nogen af dens creeps lever.
import * as THREE from 'three';
import { NIVEAUER } from './creepdata.js';
import { bus } from './events.js';
import { LEJR_LORE, BOSS_NAVNE } from './stedlore.js';

const B = 256, H = 64, NH = 30;   // NH: plads til lejrens navn over pladen
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

function tekstur(niveau, navn) {
  const nøgle = `${niveau}|${navn}`;
  if (teksturer.has(nøgle)) return teksturer.get(nøgle);
  const n = NIVEAUER[niveau];
  const c = document.createElement('canvas'); c.width = B; c.height = H + NH;
  const ctx = c.getContext('2d');
  // Lejrens navn over pladen
  ctx.font = '700 21px Georgia, serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.lineWidth = 5; ctx.strokeStyle = 'rgba(15,10,6,0.9)'; ctx.strokeText(navn, B / 2, NH / 2);
  ctx.fillStyle = '#f2e2b8'; ctx.fillText(navn, B / 2, NH / 2);
  ctx.translate(0, NH);
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
  teksturer.set(nøgle, t);
  return t;
}

export class LejrSkilte {
  constructor(spil) {
    this.spil = spil;
    this.tid = 0;
    const tæl = {};
    this.skilte = spil.lejre.map((l) => {
      // Lejrens navn og linje (stedlore.js): bosser har deres eget navn
      const fam = l.data.familie, lore = LEJR_LORE[fam] ?? LEJR_LORE.plyndrere, i = (tæl[fam] = (tæl[fam] ?? -1) + 1);
      const navn = l.data.niveau === 5 ? BOSS_NAVNE[fam] : lore.navne[i % lore.navne.length];
      const linje = l.data.niveau === 5 ? 'A boss guards a locked golden chest here.' : lore.linjer[i % lore.linjer.length];
      l.navn = navn;
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tekstur(l.data.niveau, navn), transparent: true, depthWrite: false, fog: false }));
      const stor = l.data.niveau >= 5, k = (H + NH) / H;
      s.scale.set(stor ? 8.4 : 7, (stor ? 2.1 : 1.75) * k, 1);
      s.position.set(l.x, stor ? 9.5 : 7, l.z);
      s.renderOrder = 5;
      s.visible = false;
      spil.verden.scene.add(s);
      return { s, l, linje, kendt: spil.taage.erUdforsket(l.x, l.z) };
    });
  }

  opdater(dt) {
    this.tid -= dt;
    if (this.tid > 0) return;
    this.tid = 0.4;
    const t = this.spil.taage;
    for (const sk of this.skilte) {
      const { s, l } = sk;
      s.visible = t.erUdforsket(l.x, l.z) && l.creeps.some((c) => !c.død);
      // Første gang lejren ses: fortæl om den
      if (s.visible && !sk.kendt && t.erSynlig(l.x, l.z)) {
        sk.kendt = true;
        const n = NIVEAUER[l.data.niveau];
        bus.emit('krønike', { titel: l.navn, tekst: `${n.navn} camp, level ${n.level}. ${sk.linje}`, x: l.x, z: l.z, farve: n.farve, varighed: 12 });
      }
    }
  }
}
