// The Waking World — opstart og spil-loop.
import * as THREE from 'three';
import './style.css';
import { hentAlle } from './assets.js';
import { lavKort, LEJRE } from './mapdata.js';
import { bygVerden, kortModeller, lavLys } from './world.js';
import { Helt } from './hero.js';
import { Lejr } from './creeps.js';
import { adskil } from './unit.js';
import { Effekter } from './effects.js';
import { KameraRig } from './camera.js';
import { Overlay } from './overlay.js';
import { Hud, vælgEssens } from './hud.js';
import { LEVELS } from './config.js';
import { bus } from './events.js';

const lærred = document.getElementById('spil');
const renderer = new THREE.WebGLRenderer({ canvas: lærred, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const scene = new THREE.Scene();

const ENHEDER = ['units/hero_tide', 'units/skeleton_minion', 'units/skeleton_warrior', 'units/skeleton_rogue', 'units/skeleton_mage',
  'kaykit-skeletons/skeleton_axe', 'kaykit-skeletons/skeleton_blade', 'kaykit-skeletons/skeleton_staff', 'kaykit-skeletons/skeleton_shield_large_a'];

async function start() {
  const { kort, heltSpawn } = lavKort();
  const bar = document.getElementById('lade-bar');
  await hentAlle([...ENHEDER, ...kortModeller(kort)], (p) => { bar.style.width = `${Math.round(p * 100)}%`; });
  document.getElementById('lader').classList.add('færdig');

  const verden = { scene, kort, creeps: [], helt: null };
  bygVerden(scene, kort);
  const lys = lavLys(scene, renderer);

  // Kameraet og forhåndsvisningen kører allerede bag essensvalget
  let tryk = () => {};
  const rig = new KameraRig(lærred, (sx, sy) => tryk(sx, sy));
  function størrelse() {
    const b = window.innerWidth, h = window.innerHeight;
    renderer.setSize(b, h, false);
    rig.størrelse(b, h);
  }
  window.addEventListener('resize', størrelse);
  størrelse();
  rig.følger = false;
  rig.afstand = 40;
  let vinkel = 0;
  renderer.setAnimationLoop(() => {
    vinkel += 0.0015;
    rig.fokus.set(Math.sin(vinkel) * 10, 0, Math.cos(vinkel) * 6);
    rig.opdater(0.016, null);
    lys.følg(rig.fokus.x, rig.fokus.z);
    renderer.render(scene, rig.kamera);
  });

  const essens = await vælgEssens();
  document.body.classList.add('i-spil');
  const helt = new Helt(verden, heltSpawn, essens);
  verden.helt = helt;
  const lejre = LEJRE.map((d) => new Lejr(verden, d));
  const effekter = new Effekter(verden);

  const spil = {
    helt, verden, rig,
    nødvendigXp: () => (LEVELS.xp[helt.level] ?? helt.xp) - helt.xp,
    brugEvne(i) {
      const fejl = helt.evner.brug(i);
      if (fejl) overlay.toast(fejl);
    },
  };
  rig.fokus.set(heltSpawn.x, 0, heltSpawn.z);
  rig.afstand = 28;
  rig.centrér();
  const overlay = new Overlay(document.getElementById('lag'), verden, rig.kamera);
  const hud = new Hud(spil);
  setTimeout(() => overlay.toast('Tryk på jorden for at gå — tryk på et skelet for at angribe'), 600);
  bus.on('creep_død', ({ xp }) => helt.fåXp(xp));

  // Tryk på skærmen: fjende = angrib, ellers gå derhen
  const ray = new THREE.Raycaster();
  const jord = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  tryk = (sx, sy) => {
    if (helt.død) return;
    const r = lærred.getBoundingClientRect();
    let bedst = null, bd = 52;
    for (const c of verden.creeps) {
      if (c.død) continue;
      const s = overlay.skærm(c.x, c.højde * 0.5, c.z);
      const d = Math.hypot(s.x - (sx - r.left), s.y - (sy - r.top));
      if (d < bd) { bd = d; bedst = c; }
    }
    if (bedst) { helt.kommandoAngrib(bedst); effekter.markør(bedst.x, bedst.z, 0xff5a4a); rig.centrér(); return; }
    ray.setFromCamera(new THREE.Vector2(((sx - r.left) / r.width) * 2 - 1, -((sy - r.top) / r.height) * 2 + 1), rig.kamera);
    const p = new THREE.Vector3();
    if (!ray.ray.intersectPlane(jord, p)) return;
    if (helt.kommandoGå(p.x, p.z)) { effekter.markør(p.x, p.z); rig.centrér(); }
    else overlay.toast('Der kan helten ikke gå hen');
  };

  // Ét tidstrin i spillet (adskilt fra tegning så tests kan spole frem)
  function trin(dt) {
    helt.opdater(dt);
    for (const c of verden.creeps) c.opdater(dt);
    for (const l of lejre) l.opdater(dt);
    adskil([helt, ...verden.creeps.filter((c) => !c.død)], kort);
    effekter.opdater(dt);
    rig.opdater(dt, helt.død ? null : helt);
  }
  spil.simuler = (sek) => { for (let t = 0; t < sek; t += 1 / 30) trin(1 / 30); };

  const ur = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    trin(Math.min(ur.getDelta(), 0.05));
    lys.følg(rig.fokus.x, rig.fokus.z);
    renderer.render(scene, rig.kamera);
    overlay.opdater();
    hud.opdater();
  });

  window.spil = spil;   // til test og fejlfinding
  window.klar = true;
}

start().catch((e) => {
  console.error(e);
  document.getElementById('lade-tekst').textContent = `Fejl: ${e.message}`;
});
