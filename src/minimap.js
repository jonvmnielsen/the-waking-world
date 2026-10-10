// Minimap (GDD 4.5): terræn, tåge, lejre i sværhedsgradens farve, helten og kameraets udsnit.
// Tryk på minimappet flytter kameraet.
import { hexTilVerden, HEX_BREDDE } from './hexgrid.js';
import { NIVEAUER } from './creepdata.js';
import { REGIONER } from './kortgen.js';

export class Minimap {
  constructor(lærred, spil) {
    this.c = lærred; this.ctx = lærred.getContext('2d');
    this.spil = spil;
    const g = spil.grænser;
    this.g = g;
    this.skala = 160 / (g.maxX - g.minX);
    lærred.width = Math.round((g.maxX - g.minX) * this.skala);
    lærred.height = Math.round((g.maxZ - g.minZ) * this.skala);
    this.terræn = this.tegnTerræn(spil.verden.kort);
    this.tåge = document.createElement('canvas');
    this.tid = 0;
    lærred.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      const r = lærred.getBoundingClientRect();
      const x = g.minX + ((e.clientX - r.left) / r.width) * (g.maxX - g.minX);
      const z = g.minZ + ((e.clientY - r.top) / r.height) * (g.maxZ - g.minZ);
      spil.rig.følger = false;
      spil.rig.fokus.set(x, 0, z);
    });
  }

  px(x, z) { return [(x - this.g.minX) * this.skala, (z - this.g.minZ) * this.skala]; }

  tegnTerræn(kort) {
    const c = document.createElement('canvas');
    c.width = this.c.width; c.height = this.c.height;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#2f6f99'; ctx.fillRect(0, 0, c.width, c.height);
    const r = (HEX_BREDDE / 2) * this.skala * 1.18;
    for (const f of kort.felter.values()) {
      const p = hexTilVerden(f.q, f.r);
      const [x, y] = this.px(p.x, p.z);
      if (f.type === 'vand') continue;
      const [cr, cg, cb] = REGIONER[f.region].farve;
      let farve = `rgb(${Math.round(150 * cr)},${Math.round(170 * cg)},${Math.round(80 * cb)})`;
      if (f.type === 'kyst') farve = '#cdb57f';
      if (f.blok === 'skov') farve = f.region === 'gravlandet' ? '#4a463c' : '#2f6b2c';
      if (f.blok === 'bjerg') farve = '#7d7a72';
      if (f.optaget && !f.gåbar && !f.blok) farve = '#d9c27a';
      ctx.fillStyle = farve;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
    return c;
  }

  opdater(dt) {
    this.tid += dt;
    if (this.tid < 0.25) return;
    this.tid = 0;
    const { ctx, spil } = this;
    const t = spil.taage;
    ctx.drawImage(this.terræn, 0, 0);

    // Tåge: mørk hvor man ikke har været, halvmørk hvor man har været
    if (this.tåge.width !== t.b) { this.tåge.width = t.b; this.tåge.height = t.h; this.tågeData = this.tåge.getContext('2d').createImageData(t.b, t.h); }
    const d = this.tågeData.data;
    for (let i = 0; i < t.data.length; i++) { d[i * 4 + 3] = t.synlig[i] ? 0 : t.udforsket[i] ? 120 : 255; }
    this.tåge.getContext('2d').putImageData(this.tågeData, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(this.tåge, 0, 0, t.b * 2 * this.skala, t.h * 2 * this.skala);

    // Lejre, man har set, vises som prikker i sværhedsgradens farve
    for (const l of spil.lejre) {
      if (!l.creeps.some((cr) => !cr.død) || !t.erUdforsket(l.x, l.z)) continue;
      const [x, y] = this.px(l.x, l.z);
      ctx.fillStyle = NIVEAUER[l.data.niveau].farve;
      ctx.beginPath(); ctx.arc(x, y, l.data.niveau === 5 ? 4 : 2.6, 0, Math.PI * 2); ctx.fill();
    }
    // Bygninger og figurer: egne i grønt, The Memory i rødt (bygninger når de er set, figurer når de ses)
    const prik = (x, z, farve, r, firkant) => {
      const [px, py] = this.px(x, z);
      ctx.fillStyle = farve;
      if (firkant) ctx.fillRect(px - r, py - r, r * 2, r * 2);
      else { ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.fill(); }
    };
    for (const b of spil.base.bygninger) prik(b.x, b.z, '#5dff6a', b.felter.length > 1 ? 4 : 2.6, true);
    for (const s of spil.base.soldater) if (!s.død) prik(s.x, s.z, '#9dff8a', 1.6);
    for (const b of spil.memory?.bygninger ?? []) if (!b.død && t.erUdforsket(b.x, b.z)) prik(b.x, b.z, '#ff4a3a', b.type === 'hal' ? 4 : 2.6, true);
    for (const e of spil.memory?.levende ?? []) if (e.rod.visible) prik(e.x, e.z, '#ff7a6a', 1.8);

    // Helten og kameraets udsnit
    const h = spil.helt;
    const [hx, hy] = this.px(h.x, h.z);
    ctx.fillStyle = '#7dff6a'; ctx.strokeStyle = '#000';
    ctx.beginPath(); ctx.arc(hx, hy, 3.2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    const f = spil.rig.fokus, a = spil.rig.afstand;
    const [fx, fy] = this.px(f.x - a * 0.55, f.z - a * 0.7);
    ctx.strokeStyle = 'rgba(255,255,255,0.8)';
    ctx.strokeRect(fx, fy, a * 1.1 * this.skala, a * 1.0 * this.skala);
  }
}
