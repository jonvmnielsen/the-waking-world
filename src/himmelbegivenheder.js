// Begivenheder for hele verden (begivenheder.js): Blood Moon, Eclipse, Starfall og Gold rush.
// Tegnene kommer først: rødt lys og røde øjne, en mørk dag, en stjerne der falder, guld der springer.
import * as THREE from 'three';
import { bus } from './events.js';
import { glød } from './aand.js';
import { kopi } from './assets.js';
import { DROP, træk } from './itemdata.js';
import { TEKST, BLODMÅNE, FORMØRKELSE, STJERNE } from './begivenhedsdata.js';

const til = ([a, b]) => Math.round(a + Math.random() * (b - a));

// Lyssøjler ses langt væk (også gennem tågen — et fyrtårn for begivenheden) og toner ud opad
let toning = null;
function toningTekstur() {
  if (toning) return toning;
  const c = document.createElement('canvas'); c.width = 4; c.height = 64;
  const ctx = c.getContext('2d'), g = ctx.createLinearGradient(0, 0, 0, 64);
  g.addColorStop(0, '#000'); g.addColorStop(0.6, '#555'); g.addColorStop(1, '#fff');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 4, 64);
  return (toning = new THREE.CanvasTexture(c));
}
export function lysSøjle(scene, farve, højde = 30, radius = 0.8, opacitet = 0.28) {
  const m = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.7, radius, højde, 16, 1, true),
    new THREE.MeshBasicMaterial({ color: farve, map: toningTekstur(), transparent: true, opacity: opacitet, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }),
  );
  m.position.y = højde / 2;
  m.userData.opacitet = opacitet;
  scene.add(m);
  return m;
}

// Lyset farves gradvist ind og ud (dagnat.js læser spil.dagNat.tone)
function toneOp(spil, d, t, slutTid) {
  const ind = Math.min(1, t / 6), ud = slutTid == null ? 1 : Math.max(0, 1 - (t - slutTid) / 5);
  spil.dagNat.tone = { farve: new THREE.Color(d.farve), styrke: d.styrke * ind * ud, lys: d.lys ?? 1, lygte: d.lys ? 1 : 0 };
  return ud;
}

// Blood Moon: rødt lys hele natten; creeps slår hårdere, giver mere XP og får røde øjne
export function blodmåne(spil) {
  const v = spil.verden, mod = v.mod, øjne = new Map();
  mod.creepSkade += BLODMÅNE.creepSkade; mod.creepXp += BLODMÅNE.creepXp;
  bus.emit('krønike', { ...TEKST.blodmåne, varighed: 18 });
  let slutTid = null, tjek = 0;
  const af = bus.on('dag', () => { slutTid ??= -1; });
  return {
    opdater(dt, t) {
      if (slutTid === -1) slutTid = t;
      if (toneOp(spil, BLODMÅNE, t, slutTid) <= 0) return false;
      if ((tjek -= dt) <= 0) {
        tjek = 1;
        for (const c of v.creeps) if (!c.død && c.lejr && !c.lejr.fjende && !c.erBygning && !øjne.has(c)) { const s = glød(0xff2a14, 1.3 + 0.4 * (c.boss ? 1 : 0), 0.85); v.scene.add(s); øjne.set(c, s); }
      }
      for (const [c, s] of øjne) {
        if (c.død) { v.scene.remove(s); øjne.delete(c); continue; }
        s.visible = c.rod.visible && v.taage.erSynlig(c.x, c.z);
        s.position.set(c.x, c.højde * 0.92, c.z);
        s.material.opacity = 0.6 + 0.25 * Math.sin(t * 3 + c.x);
      }
    },
    slut() {
      af(); for (const s of øjne.values()) v.scene.remove(s);
      mod.creepSkade -= BLODMÅNE.creepSkade; mod.creepXp -= BLODMÅNE.creepXp;
      spil.dagNat.tone = null;
      bus.emit('krønike', TEKST.blodmåneSlut);
    },
  };
}

// Eclipse: midt på dagen bliver det mørkt og violet; The Memory slår hårdere, og ekkoerne vejer dobbelt
export function formørkelse(spil, ctl) {
  const mod = spil.verden.mod, varighed = 90;
  mod.memorySkade += FORMØRKELSE.memorySkade; mod.ekko *= FORMØRKELSE.ekko;
  bus.emit('krønike', { ...TEKST.formørkelse, varighed: 18 });
  return {
    varighed,
    opdater(dt, t) { toneOp(spil, FORMØRKELSE, t, t > varighed - 5 ? varighed - 5 : null); },
    slut() {
      mod.memorySkade -= FORMØRKELSE.memorySkade; mod.ekko /= FORMØRKELSE.ekko;
      spil.dagNat.tone = null;
      bus.emit('krønike', TEKST.formørkelseSlut);
    },
  };
}

// Starfall: en stjerne falder (lysende hale), slår ned med et brag og efterlader glødende krystaller
export function stjerneskud(spil, ctl) {
  const sted = ctl.findSted({ min: 80 });
  if (!sted) return null;
  const { x, z } = sted, scene = spil.verden.scene, helt = spil.helt;
  const start = new THREE.Vector3(x + 34, 55, z - 26), slutP = new THREE.Vector3(x, 0.5, z);
  const kerne = new THREE.Group();
  kerne.add(glød(0xffffff, 5, 1), glød(0x8fe0ff, 11, 0.7));
  const hale = Array.from({ length: 10 }, (_, i) => glød(0x8fe0ff, 6 - i * 0.45, 0.6 - i * 0.05));
  scene.add(kerne, ...hale);
  const spor = [];
  const ting = [], b = { steder: [] };
  let ramt = false, samlet = 0, søjle = null, syn = null, synTid = 0;
  const væk = () => { const i = spil.taage.kilder.indexOf(syn); if (i >= 0) spil.taage.kilder.splice(i, 1); };

  function nedslag() {
    ramt = true;
    scene.remove(kerne, ...hale);
    bus.emit('effekt', { type: 'stomp', x, z, radius: 12 });
    bus.emit('effekt', { type: 'ascension', x, z, farve: 0x8fe0ff });
    bus.emit('krønike', { ...TEKST.stjerneskud, x, z, varighed: 20 });
    søjle = lysSøjle(scene, 0x8fe0ff, 34, 1, 0.32);
    syn = { x, z, radius: 18 }; spil.taage.kilder.push(syn); synTid = b.tid;   // stjernen lyser landet op et øjeblik
    søjle.position.x = x; søjle.position.z = z;
    for (let i = 0; i < STJERNE.krystaller; i++) {
      const stor = i === 0, v = (i / STJERNE.krystaller) * Math.PI * 2 + 0.4, r = stor ? 0 : 4.2;
      const m = kopi(`forge-lowpoly/crystal_star_${stor ? 'a' : 'bc'[i % 2]}`, { skygge: true });
      m.traverse((o) => { if (o.isMesh && o.material.name === 'lowpoly_crystal') { o.material = o.material.clone(); o.material.emissive = new THREE.Color(0x3aa8ff); o.material.emissiveIntensity = 0.85; } });
      m.scale.setScalar(stor ? 2.6 : 2.1);
      m.rotation.y = Math.random() * 6;
      const p = { x: x + Math.cos(v) * r, z: z + Math.sin(v) * r };
      m.position.set(p.x, 0, p.z);
      const g = glød(0x8fe0ff, stor ? 9 : 6, 0.55);
      g.position.set(p.x, 2, p.z);
      scene.add(m, g);
      const s = {
        ...p, højde: 2.5, radius: 3.4, navn: 'Star-shard', tekst: 'Fallen from the sky — worth a fortune. Send your hero to gather it.', farve: '#8fe0ff',
        brug() {
          scene.remove(m, g); ting.splice(ting.indexOf(t1), 1); b.steder.splice(b.steder.indexOf(s), 1); samlet++;
          const guld = til(stor ? STJERNE.storGuld : STJERNE.guld);
          helt.inventar.tilføjGuld(guld, { x: p.x, z: p.z });
          bus.emit('effekt', { type: 'kiste', x: p.x, z: p.z });
          if (stor && Math.random() < STJERNE.itemChance) spil.genstande.læg(træk(DROP[3]), p.x + 1.5, p.z + 1.5);
        },
      };
      const t1 = { m, g, fase: Math.random() * 6 };
      ting.push(t1); b.steder.push(s);
    }
  }

  return Object.assign(b, {
    opdater(dt, t) {
      if (!ramt) {
        const u = Math.min(1, (t / 2.6) ** 1.6);
        kerne.position.lerpVectors(start, slutP, u);
        spor.unshift(kerne.position.clone()); spor.length = Math.min(spor.length, 30);
        hale.forEach((h, i) => h.position.copy(spor[Math.min(spor.length - 1, i * 3)]));
        if (u >= 1) nedslag();
        return;
      }
      const ud = Math.max(0, Math.min(1, (b.varighed - t) / 20));
      if (syn && t - synTid > 8) { væk(); syn = null; }
      const set = spil.taage.erUdforsket(x, z);
      for (const k of ting) k.m.visible = set, k.g.material.opacity = (0.4 + 0.2 * Math.sin(t * 2.5 + k.fase)) * ud;
      if (søjle) søjle.material.opacity = søjle.userData.opacitet * ud * (0.8 + 0.2 * Math.sin(t * 1.5));
      if (!b.steder.length) return false;   // alt er samlet
    },
    slut() {
      væk();
      scene.remove(kerne, ...hale);
      if (søjle) scene.remove(søjle);
      for (const k of ting) scene.remove(k.m, k.g);
      bus.emit('krønike', samlet ? { titel: 'Star-iron gathered', tekst: `Your hero carried home ${samlet} shard${samlet > 1 ? 's' : ''} of the fallen star.`, farve: '#8fe0ff' } : TEKST.stjerneSlut);
    },
  });
}

// Gold rush: guld springer op af en mine som en fontæne, og minen giver dobbelt så meget i to minutter
export function guldfeber(spil) {
  const { base, taage, verden } = spil;
  const arbejdes = new Set(base.arbejdere.map((a) => a.kilde?.kilde).filter(Boolean));
  const miner = base.kilder.miner.filter((m) => m.guld > 500 && taage.erUdforsket(m.x, m.z));
  const mine = miner.find((m) => arbejdes.has(m)) ?? miner[Math.floor(Math.random() * miner.length)];
  if (!mine) return null;
  mine.feber = true;
  const scene = verden.scene, gnister = [];
  const lys = glød(0xffd36b, 16, 0.5);
  lys.position.set(mine.x, 3, mine.z);
  const søjle = lysSøjle(scene, 0xffd36b, 30, 1.2, 0.3);
  søjle.position.x = mine.x; søjle.position.z = mine.z; scene.add(lys);
  for (let i = 0; i < 26; i++) { const g = glød(i % 3 ? 0xffd36b : 0xfff1c0, 0.9 + Math.random() * 0.8, 0.95); g.userData.v = null; scene.add(g); gnister.push(g); }
  bus.emit('krønike', { ...TEKST.guldfeber, x: mine.x, z: mine.z, varighed: 18 });
  const kast = (g) => { const a = Math.random() * Math.PI * 2, s = 2 + Math.random() * 3; g.position.set(mine.x, 4, mine.z); g.userData.v = new THREE.Vector3(Math.cos(a) * s, 9 + Math.random() * 6, Math.sin(a) * s); };
  return {
    opdater(dt, t) {
      const ud = Math.max(0, Math.min(1, (120 - t) / 8));
      lys.material.opacity = (0.35 + 0.2 * Math.sin(t * 4)) * ud;
      søjle.material.opacity = søjle.userData.opacitet * ud;
      for (const [i, g] of gnister.entries()) {
        if (!g.userData.v) { if (t > i * 0.08) kast(g); else continue; }
        g.userData.v.y -= 22 * dt;
        g.position.addScaledVector(g.userData.v, dt);
        if (g.position.y < 0.5 && ud > 0) kast(g);
        g.material.opacity = 0.95 * ud;
      }
      if (mine.guld <= 0) return false;
    },
    slut() {
      mine.feber = false;
      scene.remove(lys, søjle, ...gnister);
      bus.emit('krønike', { ...TEKST.guldfeberSlut, x: mine.x, z: mine.z });
    },
  };
}
