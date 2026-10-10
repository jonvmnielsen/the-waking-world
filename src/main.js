// The Waking World — opstart og spil-loop.
import * as THREE from 'three';
import './style.css';
import { hentAlle } from './assets.js';
import { lavKort } from './mapdata.js';
import { bygVerden, kortModeller, lavLys } from './world.js';
import { Helt } from './hero.js';
import { Lejr } from './creeps.js';
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
import { LEVELS } from './config.js';
import { bus } from './events.js';
import { Spillerstil } from './spillerstil.js';
import { Veteraner } from './veteran.js';
import { lavBoksValg } from './haer.js';
import { hentGem, startAutogem } from './gem.js';
import { gendanSpil } from './gendan.js';
import { lavTrin, lavRøntgen } from './spilloop.js';
import { Memory } from './fjendeai.js';
import { Sejr } from './sejr.js';
import { HelteKort } from './heltekort.js';
import { ESSENSER } from './abilities.js';

const lærred = document.getElementById('spil');
const renderer = new THREE.WebGLRenderer({ canvas: lærred, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const scene = new THREE.Scene();

async function start() {
  const { kort, heltSpawn, steder, lejre: lejrData, kister, storlejr, fjende, tilf, grænser } = lavKort();
  const bar = document.getElementById('lade-bar');
  await hentAlle([...MODELLER, ...kortModeller(kort)], (p) => { bar.style.width = `${Math.round(p * 100)}%`; });
  lavIkoner(renderer, EKSTRA_IKONER);   // før tåge-shaderen sættes på materialerne
  document.getElementById('lader').classList.add('færdig');

  const taage = new Taage(grænser);
  const verden = { scene, kort, creeps: [], helt: null, taage, lejrFelter: lejrData };
  const verdensObj = bygVerden(scene, kort, grænser, steder, fjende.hal);
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

  const gemt = hentGem();
  const valgtEssens = await vælgEssens(gemt);
  const fortsæt = valgtEssens === 'fortsæt';
  const essens = fortsæt ? gemt.helt.essens : valgtEssens.essens;
  const sværhed = fortsæt ? (gemt.memory?.sværhed ?? 'normal') : valgtEssens.sværhed;
  document.body.classList.add('i-spil');
  const helt = new Helt(verden, heltSpawn, essens);
  verden.helt = helt;
  const lejre = lejrData.map((d) => new Lejr(verden, d));
  const effekter = new Effekter(verden);
  const stedLiv = new StedLiv(steder, taage, effekter);
  const genstande = new Genstande(verden, kister, lejre, tilf);
  taage.patchScene(scene);
  taage.opdater(1, [{ x: helt.x, z: helt.z, radius: 28 }]);   // tågen beregnes med det samme, så skærmen ikke starter sort

  // Spillerens figurer som creeps kan se og angribe (beregnes én gang pr. tidstrin)
  let egne = [];
  verden.egne = () => egne;
  const stil = new Spillerstil(verden);
  stil.score[ESSENSER[essens].stil] += 6;   // essensen giver spillestilen en retning fra start

  const spil = {
    lærred, stil,
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
  const overlay = new Overlay(document.getElementById('lag'), verden, rig.kamera, () => [...base.arbejdere, ...base.soldater, ...base.bygninger.filter((b) => !b.færdig || b.skadet)]);
  const hud = new Hud(spil);
  const minimap = new Minimap(document.getElementById('minimap'), spil);
  const invHud = new InventarHud(spil);
  const valg = new Valg(spil);
  spil.valg = valg;
  spil.invHud = invHud;
  spil.veteraner = new Veteraner(spil, stil);
  const kmdHud = new KommandoHud(spil);
  const helteKort = new HelteKort(spil);
  rig.onBoks = lavBoksValg(spil, (x, y, z) => overlay.skærm(x, y, z));
  spil.memory = new Memory(spil, fjende, sværhed);
  const sejr = new Sejr(spil);
  bus.on('spil_slut', ({ vandt }) => { spil.slut = vandt ? 'sejr' : 'nederlag'; });
  bus.on('creep_død', ({ xp }) => helt.fåXp(xp));
  bus.on('teleport', () => rig.centrér());
  if (fortsæt) {
    gendanSpil(spil, gemt);
    helt.tid = gemt.spilTid;
    taage.patchScene(scene);
    taage.opdater(1, [{ x: helt.x, z: helt.z, radius: 28 }]);
    setTimeout(() => overlay.toast('Welcome back — your game continues where you left off'), 600);
  } else {
    setTimeout(() => overlay.toast('Tap a worker to build — tap the ground to move your hero'), 600);
    setTimeout(() => overlay.toast('The Memory stirs in the far north-east. Raze all of its buildings to win.'), 6000);
  }
  spil.gem = startAutogem(spil);

  tryk = lavTryk({ spil, lærred, overlay, effekter, genstande, steder });

  const trin = lavTrin(spil, { stedLiv, effekter, minimap, verdensObj, sejr, sætEgne: (l) => { egne = l; } });
  const røntgen = lavRøntgen(spil, renderer, verdensObj);

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
    helteKort.opdater(dt);
  });

  // Til test: vis hele kortet uden tåge
  spil.visHeleKortet = () => taage.tilføjKilde(0, 0, 999);
  window.spil = spil;   // til test og fejlfinding
  window.klar = true;
}

start().catch((e) => {
  console.error(e);
  document.getElementById('lade-tekst').textContent = `Error: ${e.message}`;
});
