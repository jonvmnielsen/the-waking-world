// Guldårer ved guldminerne: skinnende guldklipper og glimt rundt om minen, så man ikke er i tvivl om hvad det er.
// M10: årerne svinder, efterhånden som minen tømmes (fem stadier, minedata.js), og en kæmpeåre (Motherlode)
// har ekstra store klumper, en guldbunke og en lysstribe mod himlen, så længe den er rig.
import * as THREE from 'three';
import { kopi } from './assets.js';
import { VERDEN } from './config.js';
import { stadie } from './minedata.js';
import { glød } from './aand.js';

const S = VERDEN.hexSkala;
export const GULD_MODELLER = ['kaykit-hexagon/decoration/nature/rock_single_c', 'kaykit-hexagon/decoration/nature/rock_single_e', 'kaykit-dungeon/coin_stack_large_gltf'];

export function lavGuldårer(scene, miner) {
  const guld = new THREE.MeshStandardMaterial({ color: 0xffbf24, metalness: 0.2, roughness: 0.32, emissive: 0xff9000, emissiveIntensity: 0.35, flatShading: true });
  guld.userData.sne = false;
  const glimtMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2b0, emissiveIntensity: 3 });
  const glimtGeo = new THREE.OctahedronGeometry(0.3, 0);
  const glimt = [];
  const klump = (x, y, z, skala, i) => {
    const k = kopi(GULD_MODELLER[i % 2], { skygge: true });
    k.traverse((o) => { if (o.isMesh) o.material = guld; });
    k.position.set(x, y, z);
    k.rotation.set(i * 0.7, i * 2.3, i * 1.1);
    k.scale.setScalar(S * skala);
    scene.add(k);
    return k;
  };

  const visninger = miner.map((m, mi) => {
    const kæmpe = m.størrelse === 'kæmpe', st = kæmpe ? 1.35 : m.størrelse === 'stor' ? 1.12 : m.størrelse === 'lille' ? 0.85 : 1;
    const dele = [];   // [objekt, fra hvilket stadie det vises]
    // Guldårer der stikker ud af minens klippe, i flere højder
    const n = kæmpe ? 14 : 9;
    for (let i = 0; i < n; i++) {
      const v = (i / n) * Math.PI * 2 + mi * 0.7;
      const r = (2.6 + (i % 3) * 0.7) * st, y = 0.8 + ((i * 5) % 4) * 1.0;
      dele.push([klump(m.x + Math.cos(v) * r, y, m.z + Math.sin(v) * r, (0.5 + (i % 3) * 0.12) * st, i), 1 + (i % 4)]);
      if (i % 2 === 0) {
        const g = new THREE.Mesh(glimtGeo, glimtMat);
        g.position.set(m.x + Math.cos(v) * (r + 0.9), y + 0.6, m.z + Math.sin(v) * (r + 0.9));
        g.userData.fase = i * 1.3 + mi;
        scene.add(g);
        glimt.push(g);
        dele.push([g, 2 + (i % 3)]);
      }
    }
    // Guldklumper på jorden rundt om minen
    for (let i = 0; i < (kæmpe ? 9 : 5); i++) {
      const v = (i / 5) * Math.PI * 2 + mi + 0.3;
      dele.push([klump(m.x + Math.cos(v) * 5.6 * st, -0.1, m.z + Math.sin(v) * 5.6 * st, (0.7 + (i % 2) * 0.25) * st, i + 3), 2 + (i % 3)]);
    }
    // En bunke guld foran minen (kun mens den er fuld)
    const bunke = kopi(GULD_MODELLER[2], { skygge: true });
    bunke.position.set(m.x + Math.cos(mi + 0.45) * 6.4 * st, 0, m.z + Math.sin(mi + 0.45) * 6.4 * st);
    bunke.scale.setScalar(1.4 * st);
    scene.add(bunke);
    dele.push([bunke, 4]);
    // Kæmpeåren: lysstribe og store krystaller, så længe den er rig (stadie 5)
    if (kæmpe) {
      const lys = glød(0xffd36b, 9, 0.55);
      lys.position.set(m.x, 9, m.z); lys.scale.set(5, 22, 1);
      scene.add(lys);
      dele.push([lys, 5]);
      for (let i = 0; i < 4; i++) {
        const v = (i / 4) * Math.PI * 2 + 0.4;
        dele.push([klump(m.x + Math.cos(v) * 7.5, 0.4, m.z + Math.sin(v) * 7.5, 1.3, i + 1), 5]);
      }
    }
    return { m, dele, kæmpe, stadie: -1 };
  });

  // Vis kun de dele, der passer til minens stadie
  const opdaterStadier = () => {
    for (const v of visninger) {
      const s = stadie(v.m.guld, v.m.startGuld ?? v.m.guld, v.kæmpe);
      if (s === v.stadie) continue;
      v.stadie = s;
      for (const [obj, fra] of v.dele) obj.visible = s >= fra;
    }
  };

  let tid = 0, tjek = 0;
  return {
    opdater(dt) {
      tid += dt;
      guld.emissiveIntensity = 0.3 + Math.sin(tid * 2.2) * 0.1;
      for (const g of glimt) {
        const s = Math.max(0, Math.sin(tid * 1.7 + g.userData.fase)) ** 6;
        g.scale.setScalar(0.15 + s * 1.8);
        g.rotation.y = tid * 2;
      }
      if ((tjek -= dt) <= 0) { tjek = 1; opdaterStadier(); }
    },
  };
}
