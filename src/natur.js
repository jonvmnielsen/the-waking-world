// Kortets pynt i 3D: træer, sten, lejrpynt og steder. Det meste tegnes som instanser pr. model og bid.
// Træer og sten bliver til ressourcer, som arbejderne kan høste (GDD 5.1); en tom ressource forsvinder
// (træer efterlader en stub), og en skov der er fældet helt, kan man gå igennem.
import * as THREE from 'three';
import { instanser, kopi } from './assets.js';
import { hexTilVerden } from './hexgrid.js';
import { VERDEN } from './config.js';
import { RESSOURCE } from './pynt.js';
import { terrænHøjde } from './terraen.js';

const S = VERDEN.hexSkala;
const BID = 12;   // kortet deles i bidder på 12×12 felter, så kun det synlige tegnes
export const STUBBE = ['kaykit-hexagon/decoration/nature/tree_single_a_cut', 'kaykit-hexagon/decoration/nature/tree_single_b_cut'];

// Hexagon-pakken er bygget til 2-enheds fliser og skaleres med; andre pakker har figurstørrelse
const modelSkala = (pynt) => (pynt.skala ?? 1) * (pynt.model.includes('kaykit-hexagon') ? S : 1);

export function lavNatur(scene, kort) {
  const grupper = new Map();
  const op = new THREE.Vector3(0, 1, 0);
  const ressourcer = [];
  const bygninger = [];   // neutrale bygninger (til omrids gennem bygninger)

  for (const f of kort.felter.values()) {
    const c = hexTilVerden(f.q, f.r);
    for (const pynt of f.pynt) {
      const x = c.x + (pynt.dx ?? 0), z = c.z + (pynt.dz ?? 0);
      const y = pynt.absolut ? pynt.y : terrænHøjde(kort, x, z) + (pynt.y ?? 0);
      const skala = modelSkala(pynt);
      const rotQ = new THREE.Quaternion().setFromAxisAngle(op, THREE.MathUtils.degToRad(pynt.rot ?? 0));
      const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), rotQ, new THREE.Vector3(skala, skala, skala));
      Object.assign(pynt, { x, y, z });
      if (pynt.instans) {
        const nøgle = `${pynt.model}|${Math.floor(f.kol / BID)},${Math.floor(f.ræk / BID)}`;
        if (!grupper.has(nøgle)) grupper.set(nøgle, { sti: pynt.model, matricer: [], skygge: pynt.skygge });
        const g = grupper.get(nøgle);
        g.matricer.push(m);
        pynt.ref = { nøgle, i: g.matricer.length - 1 };
      } else {
        const obj = kopi(pynt.model, { skygge: pynt.skygge });
        m.decompose(obj.position, obj.quaternion, obj.scale);
        scene.add(obj);
        if (pynt.model.includes('/buildings/')) bygninger.push({ rod: obj, egen: false });
      }
      // Træer og sten er ressourcer
      if (pynt.ressource) {
        const d = RESSOURCE[pynt.ressource];
        const type = pynt.ressource.startsWith('træ') ? 'træ' : 'sten';
        const r = { id: ressourcer.length, type, [type]: d.mængde, start: d.mængde, x, z, y, r: d.r, h: d.h, f, pynt, blokerer: !!f.blok };
        ressourcer.push(r);
        (f.ressourcer ??= []).push(r);
      }
    }
  }
  const meshGrupper = new Map();
  for (const [nøgle, g] of grupper) {
    const grp = instanser(g.sti, g.matricer, { skygge: g.skygge });
    meshGrupper.set(nøgle, grp);
    scene.add(grp);
  }

  const nul = new THREE.Matrix4().makeScale(0, 0, 0);
  function skjul(pynt) {
    if (!pynt.ref) return;
    for (const im of meshGrupper.get(pynt.ref.nøgle)?.children ?? []) { im.setMatrixAt(pynt.ref.i, nul); im.instanceMatrix.needsUpdate = true; }
    pynt.ref = null;
  }

  // En tom ressource forsvinder; et træ efterlader en stub
  function fjern(r, { stub = true } = {}) {
    r[r.type] = 0;
    if (!r.pynt.ref) return;
    skjul(r.pynt);
    if (stub && r.type === 'træ') {
      const s = kopi(STUBBE[r.id % 2], { skygge: false });
      s.position.set(r.x, r.y, r.z);
      s.rotation.y = r.id * 1.7;
      s.scale.setScalar(S * 1.2);
      scene.add(s);
    }
    // En skov uden træer kan man gå igennem (stenbrud forbliver klipper)
    const f = r.f;
    if (f.blok === 'skov' && f.ressourcer.every((o) => o.træ <= 0 || !o.blokerer)) { f.blok = undefined; f.gåbar = !f.optaget; }
  }

  // Ryd et felt for natur (når der bygges på det)
  function ryd(f) {
    for (const p of f.pynt) skjul(p);
    for (const r of f.ressourcer ?? []) r[r.type] = 0;
  }

  return { ressourcer, bygninger, fjern, ryd };
}
