// Hvad et tryk på spillets lærred betyder: angrib en fjende, saml et item op, åbn en kiste,
// gå til købmanden eller gå et sted hen. Det nærmeste mål på skærmen vinder.
import * as THREE from 'three';
import { bus } from './events.js';

export function lavTryk({ spil, lærred, overlay, effekter, genstande, invHud, steder }) {
  const { helt, verden, rig } = spil;
  const ray = new THREE.Raycaster();
  const jord = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const skærm = (x, y, z) => overlay.skærm(x, y, z);

  return (sx, sy) => {
    if (helt.død) return;
    const r = lærred.getBoundingClientRect();
    const px = sx - r.left, py = sy - r.top;

    // 1) Fjender
    let fjende = null, bd = 52;
    for (const c of verden.creeps) {
      if (c.død || !c.rod.visible) continue;
      const s = skærm(c.x, c.højde * 0.5, c.z);
      const d = Math.hypot(s.x - px, s.y - py);
      if (d < bd) { bd = d; fjende = c; }
    }
    // 2) Items og kister, hvis de er tættere på trykket end en fjende
    const ting = genstande.find(px, py, skærm, Math.min(bd, 46));
    if (ting?.type === 'item') {
      const g = ting.ting;
      helt.kommandoInteraktion(g.x, g.z, 1.8, () => genstande.samOp(g));
      effekter.markør(g.x, g.z, 0xffe08a);
      return;
    }
    if (ting?.type === 'kiste') {
      const k = ting.ting;
      helt.kommandoInteraktion(k.x, k.z, 3, () => genstande.åbn(k));
      effekter.markør(k.x, k.z, 0xffe08a);
      return;
    }
    if (fjende) { helt.kommandoAngrib(fjende); effekter.markør(fjende.x, fjende.z, 0xff5a4a); return; }

    // 3) Købmanden og kroen
    for (const s of steder) {
      if (s.type !== 'marked' && s.type !== 'kro') continue;
      if (!spil.taage.erUdforsket(s.x, s.z)) continue;
      const p = skærm(s.x, 3, s.z);
      if (Math.hypot(p.x - px, p.y - py) > 70) continue;
      if (s.type === 'kro') { bus.emit('besked', 'I kroen kan du snart hyre flere helte'); return; }
      helt.kommandoInteraktion(s.x, s.z, 11, () => invHud.åbnButik(s));
      effekter.markør(s.x, s.z, 0xffe08a);
      return;
    }

    // 4) Jorden
    ray.setFromCamera(new THREE.Vector2((px / r.width) * 2 - 1, -(py / r.height) * 2 + 1), rig.kamera);
    const p = new THREE.Vector3();
    if (!ray.ray.intersectPlane(jord, p)) return;
    if (helt.kommandoGå(p.x, p.z)) effekter.markør(p.x, p.z);
    else overlay.toast('Der kan helten ikke gå hen');
  };
}
