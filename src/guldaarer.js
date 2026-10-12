// Guldårer ved guldminerne: skinnende guldklipper og glimt rundt om minen, så man ikke er i tvivl om hvad det er.
// M10 (Jon: man skal kunne se hvor meget guld der er, bare ved at kigge): jo mere guld der er tilbage, jo flere
// årer i klippen, jo større guldbunke og jo flere trillebøre fulde af guld. Næsten tom: en væltet tom trillebør.
// Tom: brædder for indgangen og en grå, forladt mine. En kæmpeåre har krystaller og en lysstribe, så længe den er rig.
import * as THREE from 'three';
import { kopi } from './assets.js';
import { VERDEN } from './config.js';
import { stadie } from './minedata.js';
import { glød } from './aand.js';

const S = VERDEN.hexSkala, PR = 'kaykit-hexagon/decoration/props/';
export const GULD_MODELLER = ['kaykit-hexagon/decoration/nature/rock_single_c', 'kaykit-hexagon/decoration/nature/rock_single_e', 'kaykit-dungeon/coin_stack_large_gltf',
  ...['wheelbarrow', 'resource_lumber', 'crate_long_empty', 'ladder', 'resource_stone'].map((n) => 'kaykit-hexagon/decoration/props/' + n)];

export function lavGuldårer(scene, miner, bygninger = []) {
  const guld = new THREE.MeshStandardMaterial({ color: 0xffbf24, metalness: 0.2, roughness: 0.32, emissive: 0xff9000, emissiveIntensity: 0.45, flatShading: true });
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

  const prop = (navn, x, z, skala, rot = 0, y = 0) => {
    const o = kopi(PR + navn, { skygge: true });
    o.position.set(x, y, z); o.rotation.y = rot; o.scale.setScalar(S * skala);
    scene.add(o);
    return o;
  };
  const mønter = (x, z, skala, y = 0) => { const o = kopi(GULD_MODELLER[2], { skygge: true }); o.position.set(x, y, z); o.scale.setScalar(skala); scene.add(o); return o; };

  const visninger = miner.map((m, mi) => {
    const kæmpe = m.størrelse === 'kæmpe', st = kæmpe ? 1.35 : m.størrelse === 'stor' ? 1.12 : m.størrelse === 'lille' ? 0.85 : 1;
    const dele = [];   // [objekt, vises fra stadie, vises til og med stadie]
    const ud = (v, r) => [m.x + Math.cos(v) * r * st, m.z + Math.sin(v) * r * st];
    // Guldårer i minens klippe: jo mere guld, jo flere årer (3 pr. stadie)
    // Årerne sidder spredt over hele klippen (så hvert stadie fjerner årer alle steder, ikke kun på én side)
    const n = kæmpe ? 20 : 16;
    for (let i = 0; i < n; i++) {
      const v = i * 2.39996 + mi * 0.7, r = 1.6 + (i % 4) * 0.55, y = 1.2 + ((i * 7) % 5) * 0.95;
      const fra = 1 + (i % 4);
      const [x, z] = ud(v, r);
      dele.push([klump(x, y, z, (0.75 + (i % 3) * 0.2) * st, i), fra]);
      if (i % 2 === 0) {
        const g = new THREE.Mesh(glimtGeo, glimtMat);
        const [gx, gz] = ud(v, r + 0.9);
        g.position.set(gx, y + 0.6, gz); g.userData.fase = i * 1.3 + mi;
        scene.add(g); glimt.push(g);
        dele.push([g, Math.max(2, fra)]);
      }
    }
    // Store guldkrystaller på toppen, mens minen er fuld eller halvfuld
    for (let i = 0; i < 3; i++) {
      const [x, z] = ud(i * 2.1 + mi, 0.9);
      dele.push([klump(x, 4.6 + i * 0.4, z, 1.15 * st, i + 5), i === 0 ? 3 : 4]);
    }
    // Guldklumper på jorden rundt om minen
    for (let i = 0; i < (kæmpe ? 9 : 6); i++) {
      const [x, z] = ud((i / 6) * Math.PI * 2 + mi + 0.3, 5.6);
      dele.push([klump(x, -0.1, z, (0.7 + (i % 2) * 0.25) * st, i + 3), 2 + (i % 3)]);
    }
    // Foran minen: en guldbunke der vokser med mængden, og trillebøre fulde af guld
    const v0 = mi + 0.45;
    let [x, z] = ud(v0, 6.4);
    dele.push([mønter(x, z, 1.9 * st), 4], [mønter(x, z, 1.3 * st), 3, 3], [mønter(x, z, 0.8 * st), 2, 2]);
    for (const [dv, fra] of [[0.55, 3], [-0.5, 4]]) {
      [x, z] = ud(v0 + dv, 6.8);
      dele.push([prop('wheelbarrow', x, z, 1.15, -(v0 + dv)), fra], [mønter(x, z, 0.75, 0.9), fra]);
    }
    // Næsten tom: en væltet, tom trillebør; tom: brædder for indgangen
    [x, z] = ud(v0 + 0.3, 6.6);
    const væltet = prop('wheelbarrow', x, z, 1.1, v0 + 1.2); væltet.rotation.z = 1.2; væltet.position.y = 0.6;
    dele.push([væltet, 0, 1]);
    [x, z] = ud(v0, 5.2);
    dele.push([prop('resource_lumber', x, z, 1.0, -v0), 0, 0], [prop('crate_long_empty', ...ud(v0 - 0.6, 6), 1.0, v0), 0, 0]);
    // Kæmpeåren: lysstribe og store krystaller, så længe den er rig (stadie 5)
    if (kæmpe) {
      const lys = glød(0xffd36b, 9, 0.55);
      lys.position.set(m.x, 9, m.z); lys.scale.set(5, 22, 1);
      scene.add(lys);
      dele.push([lys, 5]);
      for (let i = 0; i < 4; i++) {
        const [kx, kz] = ud((i / 4) * Math.PI * 2 + 0.4, 7.5);
        dele.push([klump(kx, 0.4, kz, 1.3, i + 1), 5]);
      }
      [x, z] = ud(v0 - 0.4, 8);
      dele.push([mønter(x, z, 2.4), 5]);
    }
    // Minebygningen bliver grå og forladt, når den er tom
    const hus = bygninger.map((b) => b.rod).find((r) => Math.hypot(r.position.x - m.x, r.position.z - m.z) < 3);
    const husMat = [];
    hus?.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); husMat.push([o.material, o.material.color.clone()]); } });
    return { m, dele, kæmpe, stadie: -1, husMat };
  });

  // Vis kun de dele, der passer til minens stadie
  const opdaterStadier = () => {
    for (const v of visninger) {
      const s = stadie(v.m.guld, v.m.startGuld ?? v.m.guld, v.kæmpe);
      if (s === v.stadie) continue;
      v.stadie = s;
      for (const [obj, fra, til = 5] of v.dele) obj.visible = s >= fra && s <= til;
      for (const [mat, farve] of v.husMat) mat.color.copy(farve).multiplyScalar(s === 0 ? 0.5 : 1);
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
