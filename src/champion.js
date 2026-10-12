// Champion-creeps (GDD 17a punkt 8): omkring hver syvende lejr (sværhedsgrad 1–4) føres af en champion med en
// egenskab — Fiery, Swift, Vampiric eller Shielded. Man ser det før man læser det: championen er større,
// har en glødende ring om fødderne i egenskabens farve og et skær over sig; lejrens skilt får to ruder.
// Championen giver mere XP, mere guld og et ekstra item. Trækkes med lejrens eget frø, så gemte spil passer.
import * as THREE from 'three';
import { bus } from './events.js';
import { glød } from './aand.js';
import { rng } from './stoej.js';
import { KORT } from './config.js';
import { DROP, træk } from './itemdata.js';

export const CHANCE = 0.15;
export const AFFIKSER = {
  brændende: { navn: 'Fiery', farve: 0xff6a1a, css: '#ff8a3a', tekst: 'burns everything close to it' },
  hurtig: { navn: 'Swift', farve: 0x9fe8ff, css: '#9fe8ff', tekst: 'is fast on its feet and quick to strike' },
  vampyr: { navn: 'Vampiric', farve: 0xe0103a, css: '#ff4a6a', tekst: 'heals from the wounds it deals' },
  skjold: { navn: 'Shielded', farve: 0xffd36b, css: '#ffd36b', tekst: 'wears armor that turns most blows aside' },
};

// Har lejren en champion, og hvilken egenskab? (eget frø pr. lejr, så resten af kortet ikke ændres)
export function trækChampion(data) {
  if (!(data.niveau >= 1 && data.niveau <= 4)) return null;
  let h = 7;
  for (const ch of String(data.id)) h = (h * 31 + ch.charCodeAt(0)) | 0;
  const t = rng(((KORT.seed ?? 1) * 7919) ^ h);
  t();
  if (t() > CHANCE) return null;
  const nøgler = Object.keys(AFFIKSER);
  return nøgler[Math.floor(t() * nøgler.length)];
}

let ringen = null;
function ringTekstur() {
  if (ringen) return ringen;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 30, 64, 64, 62);
  g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.55, 'rgba(255,255,255,0.9)'); g.addColorStop(0.75, 'rgba(255,255,255,0.35)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  // Små takker rundt i ringen, så man kan se den dreje
  ctx.fillStyle = 'rgba(255,255,255,0.95)';
  for (let i = 0; i < 8; i++) { const v = (i / 8) * Math.PI * 2; ctx.beginPath(); ctx.arc(64 + Math.cos(v) * 47, 64 + Math.sin(v) * 47, 4, 0, Math.PI * 2); ctx.fill(); }
  return (ringen = new THREE.CanvasTexture(c));
}

// Gør en creep til champion: større, stærkere, ring og skær i egenskabens farve
function gørTilChampion(c, affix) {
  const A = AFFIKSER[affix];
  c.champion = affix;
  c.navn = `${A.navn} ${c.navn}`;
  c.maxHp = c.hp = Math.round(c.maxHp * 1.8);
  c.data = { ...c.data, skade: c.data.skade.map((s) => Math.round(s * 1.25)), xp: Math.round(c.data.xp * 2.5) };
  c.model.scale.multiplyScalar(1.2); c.højde *= 1.2; c.radius *= 1.15;
  if (affix === 'hurtig') { c.fart *= 1.45; c.data.fart = c.fart; c.data.angrebsTid *= 0.65; }
  if (affix === 'skjold') c.rustning += 5;
  if (affix === 'vampyr') c.vampyr = 0.45;
  c.model.traverse((o) => {
    if (!o.isMesh) return;
    o.material = o.material.clone();
    o.material.emissive = new THREE.Color(A.farve); o.material.emissiveIntensity = 0.28;
  });
  const ring = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: ringTekstur(), color: A.farve, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.12; ring.scale.setScalar(4.2 * c.radius / 0.75);
  const skær = glød(A.farve, 3.6, 0.55);
  skær.position.y = c.højde * 0.85;
  c.rod.add(ring, skær);
  c.championVis = { ring, skær, flammer: affix === 'brændende' ? [0, 1, 2].map(() => { const f = glød(0xff8a2a, 1.6, 0.8); c.rod.add(f); return f; }) : [] };
}

export class Champions {
  constructor(spil) {
    this.spil = spil;
    this.liste = [];
    this.tid = 0; this.brand = 0;
    for (const l of spil.lejre) {
      const affix = trækChampion(l.data);
      if (!affix) continue;
      const c = l.creeps.reduce((a, b) => (b.maxHp > a.maxHp ? b : a));
      gørTilChampion(c, affix);
      c.hjem = { x: l.x, z: l.z + 4 }; c.rod.position.set(l.x, 0, l.z + 4);   // forrest i lejren, så den ses (ikke under teltet)
      l.champion = affix;
      this.liste.push(c);
    }
    bus.on('creep_død', ({ creep }) => {
      if (!creep.champion) return;
      const A = AFFIKSER[creep.champion], g = spil.genstande;
      g.læg(træk(DROP[Math.min(4, (creep.lejr?.data?.niveau ?? 1) + 1)]), creep.x - 1.4, creep.z + 1.2);
      spil.helt.inventar.tilføjGuld(Math.round(30 + creep.level * 6), creep);
      bus.emit('effekt', { type: 'ascension', x: creep.x, z: creep.z, farve: A.farve });
      bus.emit('krønike', { titel: `${A.navn} champion slain`, tekst: `It ${A.tekst} — no longer. It dropped something worth having.`, x: creep.x, z: creep.z, farve: A.css });
    });
  }

  opdater(dt) {
    this.tid += dt; this.brand -= dt;
    const brænd = this.brand <= 0;
    if (brænd) this.brand = 1;
    this.liste = this.liste.filter((c) => {
      const v = c.championVis;
      if (c.død) { v.ring.visible = v.skær.visible = false; v.flammer.forEach((f) => (f.visible = false)); return false; }
      if (!c.rod.visible) return true;
      v.ring.rotation.z += dt * (c.champion === 'hurtig' ? 2.4 : 0.8);
      v.skær.material.opacity = 0.4 + 0.2 * Math.sin(this.tid * 3 + c.x);
      v.flammer.forEach((f, i) => { const a = this.tid * 2.2 + i * 2.1; f.position.set(Math.cos(a) * 1.1, 0.6 + ((this.tid * 1.3 + i * 0.33) % 1) * c.højde * 0.8, Math.sin(a) * 1.1); f.material.opacity = 0.5 + 0.3 * Math.sin(this.tid * 11 + i); });
      // Fiery: brænder spillerens figurer tæt på, mens den kæmper
      if (brænd && c.champion === 'brændende' && c.tilstand === 'jagt') {
        const skade = Math.round(5 + c.level * 0.9);
        for (const u of this.spil.verden.egne?.() ?? []) if (Math.hypot(u.x - c.x, u.z - c.z) < 4.5) u.tagSkade(skade, c);
      }
      return true;
    });
  }
}
