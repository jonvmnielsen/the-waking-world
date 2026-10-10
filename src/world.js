// Bygger 3D-verdenen ud fra kortdata: hex-fliser, natur, bygninger, hav, lys og himmel.
import * as THREE from 'three';
import { instanser, kopi } from './assets.js';
import { hexTilVerden } from './hexgrid.js';
import { VERDEN } from './config.js';
import { REGIONER } from './kortgen.js';

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

const BID = 12;   // kortet deles i bidder på 12×12 felter, så kun det synlige tegnes

export function bygVerden(scene, kort) {
  // Grupper fliser og instans-pynt efter model og bid
  const grupper = new Map();
  const tilføj = (sti, m, skygge, f, farve) => {
    const nøgle = `${sti}|${Math.floor(f.kol / BID)},${Math.floor(f.ræk / BID)}`;
    if (!grupper.has(nøgle)) grupper.set(nøgle, { sti, matricer: [], farver: [], skygge });
    const g = grupper.get(nøgle);
    g.matricer.push(m);
    g.farver.push(farve);
    return { nøgle, i: g.matricer.length - 1 };
  };
  const q = new THREE.Quaternion();
  const op = new THREE.Vector3(0, 1, 0);

  for (const f of kort.felter.values()) {
    const p = hexTilVerden(f.q, f.r);
    const rot = f.type === 'kyst' ? -f.rot * Math.PI / 3 : 0;
    const m = new THREE.Matrix4().compose(new THREE.Vector3(p.x, 0, p.z), q.setFromAxisAngle(op, rot), new THREE.Vector3(S, S, S));
    // Græsset får regionens farvetone
    const tone = f.type === 'vand' ? null : REGIONER[f.region].farve;
    tilføj(f.type === 'kyst' ? kystSti(f.variant) : FLISE[f.type], m, false, f, tone);

    for (const pynt of f.pynt) {
      const pos = new THREE.Vector3(p.x + (pynt.dx ?? 0), pynt.y ?? 0, p.z + (pynt.dz ?? 0));
      // Hexagon-pakken er bygget til 2-enheds fliser og skaleres med; andre pakker har figurstørrelse
      const skala = (pynt.skala ?? 1) * (pynt.model.includes('kaykit-hexagon') ? S : 1);
      const rotQ = new THREE.Quaternion().setFromAxisAngle(op, THREE.MathUtils.degToRad(pynt.rot ?? 0));
      if (pynt.instans) {
        const ref = tilføj(pynt.model, new THREE.Matrix4().compose(pos, rotQ, new THREE.Vector3(skala, skala, skala)), pynt.skygge, f, null);
        (f.instanser ??= []).push(ref);
      } else {
        const obj = kopi(pynt.model, { skygge: pynt.skygge });
        obj.position.copy(pos);
        obj.quaternion.copy(rotQ);
        obj.scale.setScalar(skala);
        scene.add(obj);
      }
    }
  }
  const meshGrupper = new Map();
  for (const [nøgle, g] of grupper) {
    const grp = instanser(g.sti, g.matricer, { skygge: g.skygge, farver: g.farver });
    meshGrupper.set(nøgle, grp);
    scene.add(grp);
  }

  // Hav ud til horisonten under de yderste vandfliser
  const hav = new THREE.Mesh(
    new THREE.CircleGeometry(700, 48).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0x3f9ac9, roughness: 0.35, metalness: 0.0 }),
  );
  hav.position.y = -0.62;
  hav.receiveShadow = true;
  scene.add(hav);

  // En tømt skov bliver til stubbe, og man kan gå over feltet
  const nul = new THREE.Matrix4().makeScale(0, 0, 0);
  function fæld(f) {
    for (const { nøgle, i } of f.instanser ?? []) {
      for (const im of meshGrupper.get(nøgle)?.children ?? []) { im.setMatrixAt(i, nul); im.instanceMatrix.needsUpdate = true; }
    }
    f.instanser = [];
    const p = hexTilVerden(f.q, f.r);
    const stub = kopi(`kaykit-hexagon/decoration/nature/trees_${Math.random() < 0.5 ? 'a' : 'b'}_cut`, { skygge: false });
    stub.position.set(p.x, 0, p.z);
    stub.rotation.y = Math.random() * Math.PI * 2;
    stub.scale.setScalar(S);
    scene.add(stub);
    f.blok = undefined; f.gåbar = true;
  }
  return { opdater() {}, fæld };
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
