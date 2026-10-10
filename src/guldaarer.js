// Guldårer ved guldminerne: skinnende guldklipper og glimt rundt om minen, så man ikke er i tvivl om hvad det er.
import * as THREE from 'three';
import { kopi } from './assets.js';
import { VERDEN } from './config.js';

const S = VERDEN.hexSkala;
export const GULD_MODELLER = ['kaykit-hexagon/decoration/nature/rock_single_c', 'kaykit-hexagon/decoration/nature/rock_single_e', 'kaykit-dungeon/coin_stack_large_gltf'];

export function lavGuldårer(scene, miner) {
  const guld = new THREE.MeshStandardMaterial({ color: 0xffbf24, metalness: 0.2, roughness: 0.32, emissive: 0xff9000, emissiveIntensity: 0.35, flatShading: true });
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

  for (const [mi, m] of miner.entries()) {
    // Guldårer der stikker ud af minens klippe, i flere højder
    for (let i = 0; i < 9; i++) {
      const v = (i / 9) * Math.PI * 2 + mi * 0.7;
      const r = 2.6 + (i % 3) * 0.7, y = 0.8 + ((i * 5) % 4) * 1.0;
      const k = klump(m.x + Math.cos(v) * r, y, m.z + Math.sin(v) * r, 0.5 + (i % 3) * 0.12, i);
      if (i % 2 === 0) {
        const g = new THREE.Mesh(glimtGeo, glimtMat);
        g.position.set(m.x + Math.cos(v) * (r + 0.9), y + 0.6, m.z + Math.sin(v) * (r + 0.9));
        g.userData.fase = i * 1.3 + mi;
        scene.add(g);
        glimt.push(g);
      }
      k.userData.mine = m;
    }
    // Guldklumper på jorden rundt om minen
    for (let i = 0; i < 5; i++) {
      const v = (i / 5) * Math.PI * 2 + mi + 0.3;
      klump(m.x + Math.cos(v) * 5.6, -0.1, m.z + Math.sin(v) * 5.6, 0.7 + (i % 2) * 0.25, i + 3);
    }
    // En bunke guld foran minen
    const bunke = kopi(GULD_MODELLER[2], { skygge: true });
    bunke.position.set(m.x + Math.cos(mi + 0.45) * 6.4, 0, m.z + Math.sin(mi + 0.45) * 6.4);
    bunke.scale.setScalar(1.4);
    scene.add(bunke);
  }

  let tid = 0;
  return {
    opdater(dt) {
      tid += dt;
      guld.emissiveIntensity = 0.3 + Math.sin(tid * 2.2) * 0.1;
      for (const g of glimt) {
        const s = Math.max(0, Math.sin(tid * 1.7 + g.userData.fase)) ** 6;
        g.scale.setScalar(0.15 + s * 1.8);
        g.rotation.y = tid * 2;
      }
    },
  };
}
