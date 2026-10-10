// Bygger 3D-verdenen ud fra kortdata: sammenhængende terræn, natur, guldårer, hav, lys og himmel.
import { lavTerrænMesh } from './terraen.js';
import { lavNatur, STUBBE } from './natur.js';
import { lavGuldårer, GULD_MODELLER } from './guldaarer.js';
import * as THREE from 'three';

// Alle modelstier kortet bruger (til forudindlæsning)
export function kortModeller(kort) {
  const s = new Set([...STUBBE, ...GULD_MODELLER]);
  for (const f of kort.felter.values()) for (const p of f.pynt) s.add(p.model);
  return [...s];
}

export function bygVerden(scene, kort, grænser, steder, ødeland) {
  const miner = steder.filter((s) => s.type === 'mine');
  for (const m of lavTerrænMesh(kort, grænser, miner, ødeland)) scene.add(m);
  const natur = lavNatur(scene, kort);
  const guld = lavGuldårer(scene, miner);
  return { ...natur, opdater: (dt) => guld.opdater(dt) };
}

export function lavLys(scene, renderer) {
  scene.background = new THREE.Color(0x9fd3ea);
  scene.fog = new THREE.Fog(0x9fd3ea, 85, 190);
  scene.add(new THREE.HemisphereLight(0xdff4ff, 0x5a6b3a, 1.6));

  const sol = new THREE.DirectionalLight(0xfff1d6, 2.6);
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
    følg(x, z) {
      sol.target.position.set(x, 0, z);
      sol.position.set(x + forskydning.x, forskydning.y, z + forskydning.z);
    },
  };
}
