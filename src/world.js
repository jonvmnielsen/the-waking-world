// Bygger 3D-verdenen ud fra kortdata: sammenhængende terræn, natur, guldårer, hav, lys og himmel.
import { lavTerrænMesh } from './terraen.js';
import { lavNatur, STUBBE } from './natur.js';
import { lavGuldårer, GULD_MODELLER } from './guldaarer.js';
import * as THREE from 'three';
import { hexTilVerden } from './hexgrid.js';
import { lavStier } from './stier.js';
import { lavGrund } from './grund.js';
import { lavLavasøer } from './lava.js';
import { lavHulevisning, HULE_MODELLER } from './hulevisning.js';
import { UDSEENDE } from './kortvalg.js';
import { lavBunddække, BUNDDÆKKE_MODELLER } from './bunddaekke.js';
import { NavGitter } from './navgitter.js';

// Alle modelstier kortet bruger (til forudindlæsning)
export function kortModeller(kort) {
  const s = new Set([...STUBBE, ...GULD_MODELLER, ...BUNDDÆKKE_MODELLER, ...(kort.huler?.length ? HULE_MODELLER : [])]);
  for (const f of kort.felter.values()) for (const p of f.pynt) s.add(p.model);
  return [...s];
}

export function bygVerden(scene, kort, grænser, steder, ødeland, lejre = []) {
  const miner = steder.filter((s) => s.type === 'mine');
  // Stier mellem stederne og trådt jord omkring basen, stederne og lejrene
  const base = hexTilVerden(kort.base.q, kort.base.r);
  const mål = ['kro', 'marked', 'kilde', 'udkig', 'mine'];
  const stier = lavStier(kort, [base, ...steder.filter((s) => mål.includes(s.type)), ...(ødeland ? [ødeland] : [])]);
  const pletter = [{ ...base, r: 16 }, ...steder.filter((s) => s.type !== 'mine').map((s) => ({ x: s.x, z: s.z, r: 9 })),
    ...lejre.map((l) => ({ ...hexTilVerden(l.q, l.r), r: 7 + l.niveau, styrke: 0.7 }))];
  const grund = lavGrund(11, UDSEENDE);
  const terræn = lavTerrænMesh(kort, grænser, { miner, ødeland, stier, pletter, grund, u: UDSEENDE });
  for (const m of terræn) scene.add(m);
  if (UDSEENDE.lava) lavLavasøer(scene, kort, grund, terræn.tid);
  lavBunddække(scene, kort, { stier, pletter, u: UDSEENDE });
  const natur = lavNatur(scene, kort);
  // Det fine stifindingsgitter (navgitter.js): frie træer og sten er forhindringer, til de er høstet
  kort.nav = new NavGitter(kort, grænser);
  for (const r of natur.ressourcer) if (!r.blokerer && r[r.type] > 0) { r.navStempel = true; kort.nav.stempel(r.x, r.z, r.r * 0.75, 1); }
  const guld = lavGuldårer(scene, miner, natur.bygninger);
  const huler = lavHulevisning(scene, kort, kort.huler ?? []);
  return { ...natur, opdater: (dt) => { guld.opdater(dt); huler.opdater(dt); terræn.tid.value += dt; } };
}

export function lavLys(scene, renderer) {
  scene.background = new THREE.Color(UDSEENDE.himmel);
  scene.fog = new THREE.Fog(UDSEENDE.himmel, 85, 190);
  const hemi = new THREE.HemisphereLight(0xdff4ff, UDSEENDE.hemiJord ?? 0x5a6b3a, 1.6);
  scene.add(hemi);

  const sol = new THREE.DirectionalLight(UDSEENDE.sol ?? 0xfff1d6, 2.6);
  sol.castShadow = true;
  sol.shadow.mapSize.set(2048, 2048);
  const c = sol.shadow.camera;
  c.left = -46; c.right = 46; c.top = 46; c.bottom = -46; c.near = 1; c.far = 180;
  sol.shadow.bias = -0.0006;
  sol.shadow.normalBias = 0.04;
  scene.add(sol, sol.target);

  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Skyggekameraet følger det sted kameraet kigger på
  const forskydning = new THREE.Vector3(-30, 60, 26);
  return {
    scene, sol, hemi, renderer,
    // a = kameraets afstand: tåge og skygger følger med, når man ser længere ud
    følg(x, z, a = 50) {
      const r = Math.max(46, a * 0.72);
      if (Math.abs(c.right - r) > 1) { c.left = -r; c.right = r; c.top = r; c.bottom = -r; c.updateProjectionMatrix(); }
      if (scene.fog) { scene.fog.near = Math.max(85, a * 1.2); scene.fog.far = Math.max(190, a * 2.4); }
      sol.target.position.set(x, 0, z);
      sol.position.set(x + forskydning.x, forskydning.y, z + forskydning.z);
    },
  };
}
