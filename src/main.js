// The Waking World — opstart og spil-loop.
import * as THREE from 'three';
import './style.css';
import { hentAlle } from './assets.js';
import { lavKort } from './mapdata.js';
import { bygVerden, kortModeller, lavLys } from './world.js';
import { Helt } from './hero.js';
import { Lejr } from './creeps.js';
import { CREEP_TYPER } from './creepdata.js';
import { adskil } from './unit.js';
import { Effekter } from './effects.js';
import { KameraRig } from './camera.js';
import { Overlay } from './overlay.js';
import { Hud, vælgEssens } from './hud.js';
import { Taage } from './taage.js';
import { Minimap } from './minimap.js';
import { StedLiv } from './stedliv.js';
import { hexTilVerden } from './hexgrid.js';
import { Genstande } from './genstande.js';
import { InventarHud } from './inventarhud.js';
import { lavIkoner } from './ikoner.js';
import { alleItemModeller } from './itemdata.js';
import { lavTryk } from './tryk.js';
import { LEVELS } from './config.js';
import { bus } from './events.js';

const lærred = document.getElementById('spil');
const renderer = new THREE.WebGLRenderer({ canvas: lærred, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const scene = new THREE.Scene();

// Alle figurer og våben creeps og helten bruger
const ENHEDER = [...new Set(['units/hero_tide', ...Object.values(CREEP_TYPER).map((t) => `units/${t.model}`),
  ...Object.values(CREEP_TYPER).flatMap((t) => Object.values(t.våben ?? {}).map((v) => `kaykit-skeletons/${v}`)),
  ...alleItemModeller(), 'kaykit-dungeon/chest', 'kaykit-dungeon/chest_gold'])];

async function start() {
  const { kort, heltSpawn, steder, lejre: lejrData, kister, tilf, grænser } = lavKort();
  const bar = document.getElementById('lade-bar');
  await hentAlle([...ENHEDER, ...kortModeller(kort)], (p) => { bar.style.width = `${Math.round(p * 100)}%`; });
  lavIkoner(renderer);   // før tåge-shaderen sættes på materialerne
  document.getElementById('lader').classList.add('færdig');

  const taage = new Taage(grænser);
  const verden = { scene, kort, creeps: [], helt: null, taage };
  bygVerden(scene, kort);
  const lys = lavLys(scene, renderer);

  // Kameraet og forhåndsvisningen kører allerede bag essensvalget (uden tåge)
  let tryk = () => {};
  const rig = new KameraRig(lærred, (sx, sy) => tryk(sx, sy));
  rig.grænser = grænser;
  const størrelse = () => { renderer.setSize(window.innerWidth, window.innerHeight, false); rig.størrelse(window.innerWidth, window.innerHeight); };
  window.addEventListener('resize', størrelse);
  størrelse();
  rig.følger = false;
  rig.afstand = 52;
  let vinkel = 0;
  renderer.setAnimationLoop(() => {
    vinkel += 0.0012;
    rig.fokus.set(heltSpawn.x + 28 + Math.sin(vinkel) * 32, 0, heltSpawn.z - 28 + Math.cos(vinkel) * 20);
    rig.opdater(0.016, null);
    lys.følg(rig.fokus.x, rig.fokus.z);
    renderer.render(scene, rig.kamera);
  });

  const essens = await vælgEssens();
  document.body.classList.add('i-spil');
  const helt = new Helt(verden, heltSpawn, essens);
  verden.helt = helt;
  const lejre = lejrData.map((d) => new Lejr(verden, d));
  const effekter = new Effekter(verden);
  const stedLiv = new StedLiv(steder, taage, effekter);
  const genstande = new Genstande(verden, kister, lejre, tilf);
  const base = hexTilVerden(kort.base.q, kort.base.r);
  taage.tilføjKilde(base.x, base.z, 34);
  taage.patchScene(scene);

  const spil = {
    helt, verden, rig, lejre, taage, grænser, hexTilVerden,
    nødvendigXp: () => (LEVELS.xp[helt.level] ?? helt.xp) - helt.xp,
    brugEvne(i) {
      const fejl = helt.evner.brug(i);
      if (fejl) overlay.toast(fejl);
    },
  };
  rig.fokus.set(heltSpawn.x, 0, heltSpawn.z);
  rig.afstand = 30;
  rig.centrér();
  const overlay = new Overlay(document.getElementById('lag'), verden, rig.kamera);
  const hud = new Hud(spil);
  const minimap = new Minimap(document.getElementById('minimap'), spil);
  const invHud = new InventarHud(spil);
  bus.on('creep_død', ({ xp }) => helt.fåXp(xp));
  bus.on('teleport', () => rig.centrér());
  setTimeout(() => overlay.toast('Tryk på jorden for at gå — tryk på en fjende for at angribe'), 600);

  tryk = lavTryk({ spil, lærred, overlay, effekter, genstande, invHud, steder });

  // Ét tidstrin i spillet (adskilt fra tegning så tests kan spole frem)
  const heltSyn = { x: 0, z: 0, radius: 28 };
  let patchTid = 0;
  function trin(dt) {
    helt.opdater(dt);
    heltSyn.x = helt.x; heltSyn.z = helt.z;
    taage.opdater(dt, helt.død ? [] : [heltSyn]);
    for (const c of verden.creeps) c.opdater(dt);
    for (const l of lejre) l.opdater(dt);
    adskil([helt, ...verden.creeps.filter((c) => !c.død && c.rod.visible)], kort);
    stedLiv.opdater(dt, helt);
    genstande.opdater(dt);
    effekter.opdater(dt);
    rig.opdater(dt, helt.død ? null : helt);
    minimap.opdater(dt);
    patchTid += dt;
    if (patchTid > 1) { patchTid = 0; taage.patchScene(scene); }
  }
  spil.simuler = (sek) => { for (let t = 0; t < sek; t += 1 / 30) trin(1 / 30); };

  const ur = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    trin(Math.min(ur.getDelta(), 0.05));
    lys.følg(rig.fokus.x, rig.fokus.z);
    renderer.render(scene, rig.kamera);
    overlay.opdater();
    hud.opdater();
    invHud.opdater();
  });

  // Til test: vis hele kortet uden tåge
  spil.visHeleKortet = () => taage.tilføjKilde(0, 0, 999);
  spil.genstande = genstande;
  spil.invHud = invHud;
  spil.steder = steder;
  window.spil = spil;   // til test og fejlfinding
  window.klar = true;
}

start().catch((e) => {
  console.error(e);
  document.getElementById('lade-tekst').textContent = `Fejl: ${e.message}`;
});
