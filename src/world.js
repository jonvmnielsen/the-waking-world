// Bygger 3D-verdenen ud fra kortdata: hex-fliser, natur, bygninger, hav, lys og himmel.
import * as THREE from 'three';
import { instanser, kopi } from './assets.js';
import { hexTilVerden } from './hexgrid.js';
import { VERDEN } from './config.js';

const S = VERDEN.hexSkala;
const FLISE = {
  græs: 'kaykit-hexagon/tiles/base/hex_grass',
  vand: 'kaykit-hexagon/tiles/base/hex_water',
};
const kystSti = (v) => `kaykit-hexagon/tiles/coast/hex_coast_${v}`;

// Alle modelstier kortet bruger (til forudindlæsning)
export function kortModeller(kort) {
  const s = new Set(Object.values(FLISE));
  for (const f of kort.felter.values()) {
    if (f.type === 'kyst') s.add(kystSti(f.variant));
    for (const p of f.pynt) s.add(p.model);
  }
  return [...s];
}

export function bygVerden(scene, kort) {
  // Grupper fliser og instans-pynt efter model
  const grupper = new Map();
  const tilføj = (sti, m, skygge) => {
    if (!grupper.has(sti)) grupper.set(sti, { matricer: [], skygge });
    grupper.get(sti).matricer.push(m);
  };
  const q = new THREE.Quaternion();
  const op = new THREE.Vector3(0, 1, 0);

  for (const f of kort.felter.values()) {
    const p = hexTilVerden(f.q, f.r);
    const rot = f.type === 'kyst' ? -f.rot * Math.PI / 3 : 0;
    const m = new THREE.Matrix4().compose(new THREE.Vector3(p.x, 0, p.z), q.setFromAxisAngle(op, rot), new THREE.Vector3(S, S, S));
    tilføj(f.type === 'kyst' ? kystSti(f.variant) : FLISE[f.type], m, false);

    for (const pynt of f.pynt) {
      const pos = new THREE.Vector3(p.x + (pynt.dx ?? 0), 0, p.z + (pynt.dz ?? 0));
      // Hexagon-pakken er bygget til 2-enheds fliser og skaleres med; andre pakker har figurstørrelse
      const skala = (pynt.skala ?? 1) * (pynt.model.includes('kaykit-hexagon') ? S : 1);
      const rotQ = new THREE.Quaternion().setFromAxisAngle(op, THREE.MathUtils.degToRad(pynt.rot ?? 0));
      if (pynt.instans) {
        tilføj(pynt.model, new THREE.Matrix4().compose(pos, rotQ, new THREE.Vector3(skala, skala, skala)), pynt.skygge);
      } else {
        const obj = kopi(pynt.model, { skygge: pynt.skygge });
        obj.position.copy(pos);
        obj.quaternion.copy(rotQ);
        obj.scale.setScalar(skala);
        scene.add(obj);
      }
    }
  }
  for (const [sti, g] of grupper) scene.add(instanser(sti, g.matricer, { skygge: g.skygge }));

  // Hav ud til horisonten under de yderste vandfliser
  const hav = new THREE.Mesh(
    new THREE.CircleGeometry(400, 48).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0x3f9ac9, roughness: 0.35, metalness: 0.0 }),
  );
  hav.position.y = -0.62;
  hav.receiveShadow = true;
  scene.add(hav);

  return { opdater() {} };
}

export function lavLys(scene, renderer) {
  scene.background = new THREE.Color(0x9fd3ea);
  scene.fog = new THREE.Fog(0x9fd3ea, 55, 110);
  scene.add(new THREE.HemisphereLight(0xdff4ff, 0x5a6b3a, 1.6));

  const sol = new THREE.DirectionalLight(0xfff1d6, 2.6);
  sol.castShadow = true;
  sol.shadow.mapSize.set(2048, 2048);
  const c = sol.shadow.camera;
  c.left = -24; c.right = 24; c.top = 24; c.bottom = -24; c.near = 1; c.far = 120;
  sol.shadow.bias = -0.0006;
  sol.shadow.normalBias = 0.04;
  scene.add(sol, sol.target);

  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Skyggekameraet følger det sted kameraet kigger på
  const forskydning = new THREE.Vector3(-22, 40, 18);
  return {
    følg(x, z) {
      sol.target.position.set(x, 0, z);
      sol.position.set(x + forskydning.x, forskydning.y, z + forskydning.z);
    },
  };
}
