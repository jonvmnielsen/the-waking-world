// Hvad et tryk på spillets lærred betyder (GDD 10):
// - mens en bygning placeres: vælg feltet
// - på egen helt, arbejder eller bygning: vælg den
// - med en arbejder valgt: høst (mine, træ, sten), byg videre, aflever eller gå
// - med en gruppe valgt: angrib sammen, gå i formation (arbejdere: høst)
// - med en krigerlejr valgt: sæt samlingspunkt for nye soldater
// - med helten valgt: angrib, saml op, åbn kiste, handl eller gå
import * as THREE from 'three';
import { bus } from './events.js';
import { gruppeGå, gruppeAngrib, kanKæmpe, sammeTypePåSkærm } from './haer.js';

export function lavTryk({ spil, lærred, overlay, effekter, genstande, steder }) {
  const { helt, verden, rig, valg, base } = spil;
  const ray = new THREE.Raycaster();
  const jord = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const skærm = (x, y, z) => overlay.skærm(x, y, z);
  const r = () => lærred.getBoundingClientRect();

  function jordpunkt(px, py) {
    const b = r();
    ray.setFromCamera(new THREE.Vector2((px / b.width) * 2 - 1, -(py / b.height) * 2 + 1), rig.kamera);
    const p = new THREE.Vector3();
    return ray.ray.intersectPlane(jord, p) ? p : null;
  }

  // Ressourcekilde nær trykket: miner, træer og sten efter afstand på skærmen
  function kildeVed(px, py, p) {
    for (const m of base.kilder.miner) {
      const s = skærm(m.x, 3, m.z);
      if (m.guld > 0 && Math.hypot(s.x - px, s.y - py) < 70) return base.kilder.som(m);
    }
    if (!p) return null;
    let bedst = null, bd = 56;
    for (const o of base.kilder.ressourcer) {
      if (!(o[o.type] > 0) || Math.abs(o.x - p.x) > 16 || Math.abs(o.z - p.z) > 16) continue;
      const s = skærm(o.x, o.y + o.h * 0.4, o.z), d = Math.hypot(s.x - px, s.y - py);
      if (d < bd && verden.taage.erUdforsket(o.x, o.z)) { bd = d; bedst = o; }
    }
    return bedst && base.kilder.som(bedst);
  }

  function arbejderTryk(a, px, py) {
    const p = jordpunkt(px, py);
    const k = kildeVed(px, py, p);
    if (k) { a.kommandoHøst(k); effekter.markør(k.x, k.z, 0xffd36b); return; }
    if (p && a.kommandoGå(p.x, p.z)) effekter.markør(p.x, p.z);
    else bus.emit('besked', 'Der kan bæreren ikke gå hen');
  }

  // Nærmeste synlige fjende ved trykket
  function fjendeVed(px, py) {
    let fjende = null, bd = 52;
    for (const c of verden.creeps) {
      if (c.død || !c.rod.visible) continue;
      const s = skærm(c.x, c.højde * 0.5, c.z), d = Math.hypot(s.x - px, s.y - py);
      if (d < bd) { bd = d; fjende = c; }
    }
    return [fjende, bd];
  }

  function gruppeTryk(gruppe, px, py) {
    const kæmpere = gruppe.filter(kanKæmpe);
    const [fjende] = fjendeVed(px, py);
    if (fjende && kæmpere.length) { gruppeAngrib(kæmpere, fjende); return effekter.markør(fjende.x, fjende.z, 0xff5a4a); }
    const p = jordpunkt(px, py);
    if (kæmpere.length < gruppe.length) {
      const k = kildeVed(px, py, p);
      if (k) { for (const a of gruppe) if (!kanKæmpe(a)) a.kommandoHøst(k); return effekter.markør(k.x, k.z, 0xffd36b); }
    }
    if (p && gruppeGå(gruppe, p.x, p.z, verden.kort)) effekter.markør(p.x, p.z);
    else bus.emit('besked', 'Der kan de ikke gå hen');
  }

  function heltTryk(px, py) {
    if (helt.død) return;
    const [fjende, bd] = fjendeVed(px, py);
    const ting = genstande.find(px, py, skærm, Math.min(bd, 46));
    if (ting?.type === 'item') {
      const g = ting.ting;
      helt.kommandoInteraktion(g.x, g.z, 1.8, () => genstande.samOp(g));
      return effekter.markør(g.x, g.z, 0xffe08a);
    }
    if (ting?.type === 'kiste') {
      const k = ting.ting;
      helt.kommandoInteraktion(k.x, k.z, 3, () => genstande.åbn(k));
      return effekter.markør(k.x, k.z, 0xffe08a);
    }
    if (fjende) { helt.kommandoAngrib(fjende); return effekter.markør(fjende.x, fjende.z, 0xff5a4a); }
    for (const s of steder) {
      if ((s.type !== 'marked' && s.type !== 'kro') || !verden.taage.erUdforsket(s.x, s.z)) continue;
      const q = skærm(s.x, 3, s.z);
      if (Math.hypot(q.x - px, q.y - py) > 70) continue;
      if (s.type === 'kro') return bus.emit('besked', 'I kroen kan du snart hyre flere helte');
      return spil.handlVed(s);
    }
    const p = jordpunkt(px, py);
    if (p && helt.kommandoGå(p.x, p.z)) effekter.markør(p.x, p.z);
    else overlay.toast('Der kan helten ikke gå hen');
  }

  const forrige = { s: null, t: 0 };
  return (sx, sy) => {
    const b = r(), px = sx - b.left, py = sy - b.top;

    // Placering af en ny bygning: trykket vælger feltet
    if (valg.placering) {
      const p = jordpunkt(px, py);
      valg.vælgFelt(p && verden.kort.felt(p.x, p.z));
      return;
    }
    // Egen helt, arbejder eller bygning
    if (!helt.død && !valg.erHelt) {
      const s = skærm(helt.x, 1.2, helt.z);
      if (Math.hypot(s.x - px, s.y - py) < 40) return valg.vælg(null);
    }
    const egen = base.find(px, py, skærm);
    // Soldat: vælg den; dobbelttryk vælger alle af samme slags på skærmen
    if (egen?.type === 'soldat') {
      const s = egen.ting, nu = performance.now();
      valg.vælg(forrige.s === s && nu - forrige.t < 420 ? sammeTypePåSkærm(spil, s, skærm) : [s]);
      forrige.s = s; forrige.t = nu;
      return;
    }
    if (egen && valg.erArbejder && egen.type === 'bygning') {
      const a = valg.valgt, byg = egen.ting;
      if (!byg.færdig) { a.kommandoByg(byg); return effekter.markør(byg.x, byg.z, 0x7dff6a); }
      if (a.bærer && byg.data.aflevering?.includes(a.bærer.type)) return a.gåHjem();
    }
    if (egen && egen.ting !== valg.valgt) return valg.vælg(egen.ting);
    if (egen) return;

    if (valg.erGruppe) return gruppeTryk(valg.gruppe, px, py);
    if (valg.erArbejder) return arbejderTryk(valg.valgt, px, py);
    if (valg.erBygning) {
      const b = valg.valgt, p = jordpunkt(px, py);
      // Krigerlejren: tryk på jorden sætter samlingspunktet for nye soldater
      if (b.færdig && b.data.træner?.some((t) => t !== 'arbejder') && p && verden.kort.erGåbar(p.x, p.z)) {
        b.samling = { x: p.x, z: p.z };
        bus.emit('besked', 'Nye soldater samles her');
        return effekter.markør(p.x, p.z);
      }
      return valg.vælg(null);
    }
    heltTryk(px, py);
  };
}
