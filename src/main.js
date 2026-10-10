// The Waking World — opstart og spil-loop.
import * as THREE from 'three';
import './style.css';
import { hentAlle } from './assets.js';
import { lavKort } from './mapdata.js';
import { bygVerden, kortModeller, lavLys } from './world.js';
import { Helt } from './hero.js';
import { Lejr } from './creeps.js';
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
import { lavTryk } from './tryk.js';
import { MODELLER, EKSTRA_IKONER } from './modelliste.js';
import { startBase } from './basestart.js';
import { Valg } from './valg.js';
import { KommandoHud } from './kommandohud.js';
import { ARBEJDER_SYN } from './arbejder.js';
import { LEVELS } from './config.js';
import { bus } from './events.js';
import { Røntgen } from './rontgen.js';

const lærred = document.getElementById('spil');
const renderer = new THREE.WebGLRenderer({ canvas: lærred, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const scene = new THREE.Scene();

async function start() {
  const { kort, heltSpawn, steder, lejre: lejrData, kister, storlejr, tilf, grænser } = lavKort();
  const bar = document.getElementById('lade-bar');
  await hentAlle([...MODELLER, ...kortModeller(kort)], (p) => { bar.style.width = `${Math.round(p * 100)}%`; });
  lavIkoner(renderer, EKSTRA_IKONER);   // før tåge-shaderen sættes på materialerne
  document.getElementById('lader').classList.add('færdig');

  const taage = new Taage(grænser);
  const verden = { scene, kort, creeps: [], helt: null, taage, lejrFelter: lejrData };
  const verdensObj = bygVerden(scene, kort, grænser, steder);
  verden.natur = verdensObj;
  const lys = lavLys(scene, renderer);
  const { økonomi, base } = startBase(verden, { storlejr, steder, verdensObj });

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
  taage.patchScene(scene);
  taage.opdater(1, [{ x: helt.x, z: helt.z, radius: 28 }]);   // tågen beregnes med det samme, så skærmen ikke starter sort

  const spil = {
    helt, verden, rig, lejre, taage, grænser, hexTilVerden, økonomi, base, steder, genstande,
    nødvendigXp: () => (LEVELS.xp[helt.level] ?? helt.xp) - helt.xp,
    brugEvne(i) {
      const fejl = helt.evner.brug(i);
      if (fejl) overlay.toast(fejl);
    },
    // Send helten hen til en butik (købmanden eller egen markedsplads)
    handlVed(s) {
      if (helt.død) return;
      valg.vælg(null);
      helt.kommandoInteraktion(s.x, s.z, 13, () => invHud.åbnButik(s));
      effekter.markør(s.x, s.z, 0xffe08a);
    },
  };
  rig.fokus.set(heltSpawn.x, 0, heltSpawn.z);
  rig.afstand = 40;   // start lidt ude, så basen og arbejderne er i billedet
  rig.centrér();
  const overlay = new Overlay(document.getElementById('lag'), verden, rig.kamera, () => [...base.arbejdere, ...base.bygninger.filter((b) => !b.færdig)]);
  const hud = new Hud(spil);
  const minimap = new Minimap(document.getElementById('minimap'), spil);
  const invHud = new InventarHud(spil);
  const valg = new Valg(spil);
  spil.valg = valg;
  spil.invHud = invHud;
  const kmdHud = new KommandoHud(spil);
  bus.on('creep_død', ({ xp }) => helt.fåXp(xp));
  bus.on('teleport', () => rig.centrér());
  setTimeout(() => overlay.toast('Tryk på en bærer for at bygge — tryk på jorden for at gå med helten'), 600);

  tryk = lavTryk({ spil, lærred, overlay, effekter, genstande, steder });

  // Ét tidstrin i spillet (adskilt fra tegning så tests kan spole frem)
  const heltSyn = { x: 0, z: 0, radius: 28 };
  let patchTid = 0;
  function trin(dt) {
    helt.opdater(dt);
    heltSyn.x = helt.x; heltSyn.z = helt.z;
    const syn = base.arbejdere.filter((a) => !a.død).map((a) => ({ x: a.x, z: a.z, radius: ARBEJDER_SYN }));
    taage.opdater(dt, helt.død ? syn : [heltSyn, ...syn]);
    for (const c of verden.creeps) c.opdater(dt);
    for (const l of lejre) l.opdater(dt);
    base.opdater(dt);
    adskil([helt, ...verden.creeps.filter((c) => !c.død && c.rod.visible), ...base.arbejdere.filter((a) => a.rod.visible && !a.død)], kort);
    stedLiv.opdater(dt, helt);
    genstande.opdater(dt);
    effekter.opdater(dt);
    verdensObj.opdater(dt);
    valg.opdater();
    rig.opdater(dt, helt.død ? null : helt);
    minimap.opdater(dt);
    patchTid += dt;
    if (patchTid > 1) { patchTid = 0; taage.patchScene(scene); }
  }
  // Omrids af figurer og bygninger der står bag en bygning
  const røntgen = new Røntgen(renderer, scene, rig.kamera, {
    enheder: () => [helt, ...base.arbejdere, ...verden.creeps].filter((e) => !e.død && e.rod.visible).map((e) => ({ rod: e.rod, egen: e === helt || e.side === 'egen' })),
    bygninger: () => [...base.bygninger.map((b) => ({ rod: b.rod, egen: true })), ...verdensObj.bygninger],
  });

  spil.simuler = (sek) => { for (let t = 0; t < sek; t += 1 / 30) trin(1 / 30); };

  const ur = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    const dt = Math.min(ur.getDelta(), 0.05);
    trin(dt);
    lys.følg(rig.fokus.x, rig.fokus.z);
    renderer.render(scene, rig.kamera);
    røntgen.tegn();
    overlay.opdater();
    hud.opdater();
    invHud.opdater();
    kmdHud.opdater(dt);
  });

  // Til test: vis hele kortet uden tåge
  spil.visHeleKortet = () => taage.tilføjKilde(0, 0, 999);
  window.spil = spil;   // til test og fejlfinding
  window.klar = true;
}

start().catch((e) => {
  console.error(e);
  document.getElementById('lade-tekst').textContent = `Fejl: ${e.message}`;
});
