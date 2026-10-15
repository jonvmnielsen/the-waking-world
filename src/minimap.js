import * as THREE from 'three';
// Minimap (GDD 4.5): terræn, tåge, lejre i sværhedsgradens farve, helten, kameraets udsnit og røde
// blinkende pletter hvor man bliver angrebet (advarsel.js). Tryk flytter kameraet; ⤢ åbner kortet i fuld skærm.
import { hexTilVerden, HEX_BREDDE } from './hexgrid.js';
import { NIVEAUER } from './creepdata.js';
import { REGIONER } from './kortgen.js';
import { UDSEENDE } from './kortvalg.js';
import { HOLD_FARVE, SPILLER_FARVE, FJENDE_FARVE } from './racer.js';
const FJENDE_CSS = '#' + HOLD_FARVE[FJENDE_FARVE].toString(16).padStart(6, '0');
const EGEN = '#' + HOLD_FARVE[SPILLER_FARVE].toString(16).padStart(6, '0');   // spillerens holdfarve

// Minimappets farver følger biomet (jordens HSL-farver i biomdata.js)
const hsl = ([h, s, l], dl = 0) => `hsl(${h},${s}%,${Math.max(5, Math.min(95, l + dl))}%)`;

export class Minimap {
  constructor(lærred, spil) {
    this.c = lærred; this.ctx = lærred.getContext('2d');
    this.spil = spil;
    const g = spil.grænser;
    this.g = g;
    this.skala = 400 / (g.maxX - g.minX);   // tegnes skarpt i høj opløsning og skaleres ned på skærmen
    this.k = 2.5;                           // prikkernes størrelse følger opløsningen
    lærred.width = Math.round((g.maxX - g.minX) * this.skala);
    lærred.height = Math.round((g.maxZ - g.minZ) * this.skala);
    this.terræn = this.tegnTerræn(spil.verden.kort);
    this.tåge = document.createElement('canvas');
    this.tid = 0;
    const kig = (c, e) => {
      const r = c.getBoundingClientRect();
      spil.rig.følger = false;
      spil.rig.fokus.set(g.minX + ((e.clientX - r.left) / r.width) * (g.maxX - g.minX), 0, g.minZ + ((e.clientY - r.top) / r.height) * (g.maxZ - g.minZ));
    };
    lærred.addEventListener('pointerdown', (e) => { e.stopPropagation(); kig(lærred, e); });
    // Fuld skærm: tryk et sted for at kigge der (og lukke kortet), eller luk med knappen
    this.stor = document.getElementById('kort-stort');
    this.stor.width = lærred.width; this.stor.height = lærred.height;
    const fuld = document.getElementById('kort-fuld');
    document.getElementById('kort-stor').addEventListener('click', (e) => { e.stopPropagation(); fuld.classList.add('vis'); this.tid = 1; });
    document.getElementById('kort-luk').addEventListener('click', () => fuld.classList.remove('vis'));
    this.stor.addEventListener('pointerdown', (e) => { e.stopPropagation(); kig(this.stor, e); fuld.classList.remove('vis'); });
    this.fuld = fuld;
  }

  px(x, z) { return [(x - this.g.minX) * this.skala, (z - this.g.minZ) * this.skala]; }

  tegnTerræn(kort) {
    const c = document.createElement('canvas');
    c.width = this.c.width; c.height = this.c.height;
    const ctx = c.getContext('2d');
    const u = UDSEENDE, j = u.jord;
    ctx.fillStyle = u.lava ? '#6a2008' : '#' + new THREE.Color(u.vand).multiplyScalar(0.8).getHexString(); ctx.fillRect(0, 0, c.width, c.height);
    const r = (HEX_BREDDE / 2) * this.skala * 1.18;   // hex-prikker
    for (const f of kort.felter.values()) {
      const p = hexTilVerden(f.q, f.r);
      const [x, y] = this.px(p.x, p.z);
      if (f.type === 'vand' || f.type === 'hule') continue;
      const [cr, cg] = REGIONER[f.region].farve;
      let farve = hsl(j.græs, (cg - cr) * 20 - 4);
      if (f.type === 'kyst') farve = hsl(j.sand, -4);
      if (f.blok === 'skov') farve = f.region === 'gravlandet' || u.biom === 'vulkansk' ? hsl(j.skov, -4) : u.biom === 'vinter' ? '#5f7f6a' : u.biom === 'ørken' ? '#6f8a3a' : '#2f6b2c';
      if (f.blok === 'bjerg') farve = hsl(j.klippe, 0);
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
    // Tågelærredet ligger i almindelig hukommelse (willReadFrequently): putImageData på et GPU-lærred venter på
    // grafikkortet og frøs spillet i op til flere sekunder (Jon: frys i lange spil). Opdateres to gange i sekundet.
    if (this.tåge.width !== t.b) {
      this.tåge.width = t.b; this.tåge.height = t.h;
      this.tågeCtx = this.tåge.getContext('2d', { willReadFrequently: true });
      this.tågeData = this.tågeCtx.createImageData(t.b, t.h);
    }
    this.tågeSkift = !this.tågeSkift;
    if (this.tågeSkift || this.fuld.classList.contains('vis')) {
      const d = this.tågeData.data;
      for (let i = 0; i < t.data.length; i++) { d[i * 4 + 3] = t.synlig[i] ? 0 : t.udforsket[i] ? 120 : 255; }
      this.tågeCtx.putImageData(this.tågeData, 0, 0);
    }
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(this.tåge, 0, 0, t.b * 2 * this.skala, t.h * 2 * this.skala);

    // Lejre, man har set, vises som prikker i sværhedsgradens farve
    for (const l of spil.lejre) {
      if (!l.creeps.some((cr) => !cr.død) || !t.erUdforsket(l.x, l.z)) continue;
      const [x, y] = this.px(l.x, l.z);
      ctx.fillStyle = NIVEAUER[l.data.niveau].farve;
      ctx.beginPath(); ctx.arc(x, y, (l.data.niveau >= 5 ? 4 : 2.6) * this.k, 0, Math.PI * 2); ctx.fill();
    }
    // Guldminer (guld) og Deep Quarry (grå), når de er set; kæmpeårer større med en ring
    for (const m of [...(spil.base.kilder.miner ?? []), ...(spil.base.kilder.brud ?? [])]) {
      if (!t.erUdforsket(m.x, m.z)) continue;
      const [x, y] = this.px(m.x, m.z), stor = m.størrelse === 'kæmpe' || m.type === 'brud', r = (stor ? 4.2 : 2.6) * this.k;
      const tom = m.type === 'brud' ? m.sten <= 0 : m.guld <= 0;
      ctx.fillStyle = tom ? '#6a6a6a' : m.type === 'brud' ? '#c8ccd2' : '#ffd36b';
      ctx.beginPath(); ctx.moveTo(x, y - r); ctx.lineTo(x + r, y); ctx.lineTo(x, y + r); ctx.lineTo(x - r, y); ctx.closePath(); ctx.fill();
      if (stor && !tom) { ctx.strokeStyle = ctx.fillStyle; ctx.lineWidth = this.k; ctx.beginPath(); ctx.arc(x, y, r * 1.9, 0, Math.PI * 2); ctx.stroke(); }
    }
    // Den store kilde: en lyseblå ring, når den er set (storkilde.js)
    for (const k of spil.steder ?? []) {
      if (k.type !== 'storkilde' || !t.erUdforsket(k.x, k.z)) continue;
      const [x, y] = this.px(k.x, k.z);
      ctx.fillStyle = '#6dd8ff'; ctx.beginPath(); ctx.arc(x, y, 3.2 * this.k, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#d8f6ff'; ctx.lineWidth = this.k; ctx.beginPath(); ctx.arc(x, y, 5.2 * this.k, 0, Math.PI * 2); ctx.stroke();
    }
    // Tabte ånder (aander.js): en gylden ring der pulserer
    for (const k of spil.ånder?.kugler ?? []) {
      if (!k.tabt) continue;
      const [x, y] = this.px(k.x, k.z);
      ctx.strokeStyle = '#ffe7a0'; ctx.lineWidth = 1.4 * this.k; ctx.beginPath(); ctx.arc(x, y, (4 + Math.sin(performance.now() / 250) * 1.2) * this.k, 0, Math.PI * 2); ctx.stroke();
    }
    // Bygninger og figurer: egne i grønt, The Memory i rødt (bygninger når de er set, figurer når de ses)
    const prik = (x, z, farve, r, firkant) => {
      const [px, py] = this.px(x, z);
      r *= this.k;
      ctx.fillStyle = farve;
      if (firkant) ctx.fillRect(px - r, py - r, r * 2, r * 2);
      else { ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.fill(); }
    };
    for (const b of spil.base.bygninger) prik(b.x, b.z, EGEN, b.felter.length > 1 ? 4 : 2.6, true);
    for (const s of spil.base.soldater) if (!s.død) prik(s.x, s.z, EGEN, 1.6);
    for (const b of spil.modstander?.bygninger ?? []) if (!b.død && t.erUdforsket(b.x, b.z)) prik(b.x, b.z, FJENDE_CSS, b.type === 'hal' ? 4 : 2.6, true);
    for (const e of [...(spil.modstander?.levende ?? []), ...(spil.modstander?.arbejdere ?? [])]) if (!e.død && e.rod.visible) prik(e.x, e.z, FJENDE_CSS, 1.8);
    const fh = spil.modstander?.helt; if (fh && !fh.død && fh.rod.visible) prik(fh.x, fh.z, FJENDE_CSS, 3.2);   // modstanderens helt

    // Helten og kameraets udsnit
    const h = spil.helt, hule = spil.huler?.hvor();
    const [hx, hy] = hule ? this.px(hule.indgang.x, hule.indgang.z) : this.px(h.x, h.z);   // i en hule: ved indgangen
    ctx.fillStyle = '#7dff6a'; ctx.strokeStyle = '#000';
    ctx.lineWidth = this.k;
    ctx.beginPath(); ctx.arc(hx, hy, 3.2 * this.k, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    if (hule) { ctx.strokeStyle = '#e8c690'; ctx.lineWidth = 1.4 * this.k; ctx.beginPath(); ctx.arc(hx, hy, (6 + Math.sin(performance.now() / 300) * 1.5) * this.k, 0, Math.PI * 2); ctx.stroke(); }
    const f = spil.rig.fokus, a = spil.rig.synsAfstand / 1.25;
    const [fx, fy] = this.px(f.x - a * 0.55, f.z - a * 0.7);
    ctx.strokeStyle = 'rgba(255,255,255,0.8)';
    if (f.x < 3000) ctx.strokeRect(fx, fy, a * 1.1 * this.skala, a * 1.0 * this.skala);
    // Angreb: røde blinkende pletter
    for (const p of spil.advarsel?.aktive() ?? []) {
      const [px, py] = this.px(p.x, p.z);
      ctx.globalAlpha = p.styrke;
      ctx.strokeStyle = '#ff2a1a'; ctx.fillStyle = 'rgba(255,40,20,0.45)'; ctx.lineWidth = 2 * this.k;
      ctx.beginPath(); ctx.arc(px, py, 7 * this.k, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.globalAlpha = 1;
    }
    // Krønikens steder blinker i postens farve
    for (const p of spil.krønike?.aktive() ?? []) {
      const [px, py] = this.px(p.x, p.z);
      ctx.globalAlpha = p.styrke;
      ctx.strokeStyle = p.farve; ctx.lineWidth = 2.5 * this.k;
      ctx.beginPath(); ctx.arc(px, py, 8 * this.k, 0, Math.PI * 2); ctx.stroke();
      ctx.globalAlpha = 1;
    }
    // Opdagede mindesmærker: små ruder (lilla for Navnestenene)
    for (const m of spil.minder?.liste ?? []) {
      if (!m.opdaget) continue;
      const [mx, my] = this.px(m.x, m.z), r = 3.2 * this.k;
      ctx.fillStyle = m.slags === 'navnesten' ? (m.læst ? '#c8a8ff' : '#7a5cc0') : '#f2e2b8';
      ctx.strokeStyle = '#000'; ctx.lineWidth = this.k * 0.8;
      ctx.beginPath(); ctx.moveTo(mx, my - r); ctx.lineTo(mx + r, my); ctx.lineTo(mx, my + r); ctx.lineTo(mx - r, my); ctx.closePath(); ctx.fill(); ctx.stroke();
    }
    // Erevoss (The Memorys hjem) er altid markeret, så man ved hvor de kommer fra
    const hal = spil.memory?.hal;
    if (hal && !hal.død) {
      const [ex, ey] = this.px(hal.x, hal.z);
      ctx.strokeStyle = '#bfe4ff'; ctx.lineWidth = 1.6 * this.k; ctx.setLineDash([3 * this.k, 2 * this.k]);
      ctx.beginPath(); ctx.arc(ex, ey, 11 * this.k, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = '#bfe4ff'; ctx.font = `800 ${9 * this.k}px system-ui, sans-serif`; ctx.textAlign = 'center';
      ctx.fillText('Erevoss', ex, ey - 13 * this.k);
    }
    // Begivenheder der bevæger sig (karavanen): en lille vogn-firkant
    for (const b of spil.begivenheder?.aktive ?? []) {
      if (!b.prik) continue;
      const [bx, by] = this.px(b.prik.x, b.prik.z), r = 3 * this.k;
      ctx.fillStyle = b.prik.farve; ctx.strokeStyle = '#000'; ctx.lineWidth = this.k; ctx.fillRect(bx - r, by - r * 0.7, r * 2, r * 1.4); ctx.strokeRect(bx - r, by - r * 0.7, r * 2, r * 1.4);
    }
    if (this.fuld.classList.contains('vis')) this.stor.getContext('2d').drawImage(this.c, 0, 0);
  }
}
