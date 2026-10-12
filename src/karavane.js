// Karavanen (begivenhed, GDD 17a punkt 6): en overdækket vogn trukket af to bærere og fulgt af tre vagter
// krydser kortet forbi kroen. Gå ved siden af den hele vejen (eskorte) og få en belønning — købmændene
// sætter priserne ned. Eller angrib vagterne og tag lasten — så hæver købmanden og kroen priserne.
// Halvvejs prøver røvere at plyndre en eskorteret karavane.
import * as THREE from 'three';
import { bus } from './events.js';
import { glød } from './aand.js';
import { kopi } from './assets.js';
import { Unit } from './unit.js';
import { Lejr } from './creeps.js';
import { SAMMENSÆTNING } from './creepdata.js';
import { DROP, træk } from './itemdata.js';
import { reducérSkade } from './config.js';
import { erEgen } from './trussel.js';
import { KARAVANE as K, TEKST } from './begivenhedsdata.js';

const vælg = (l) => l[Math.floor(Math.random() * l.length)];

// Vognen kan først angribes, når man er gået i kamp med vagterne (så et tryk på den ikke er et overfald ved en fejl)
class Vogn {
  constructor(verden, p) {
    Object.assign(this, { verden, navn: 'Merchant caravan', data: { navn: 'Merchant caravan' }, neutral: true, side: 'neutral', erBygning: true, tilstand: 'bygning', død: false });
    this.maxHp = this.hp = K.hp; this.rustning = 2; this.radius = 2.4; this.højde = 3.4;
    this.rod = new THREE.Group();
    const m = kopi('forge-lowpoly/wagon_covered', { skygge: true });
    m.scale.setScalar(1.45);
    this.lygte = glød(0xffcf6a, 2.4, 0.8); this.lygte.position.set(0.35, 1.9, 2.1);
    this.rod.add(m, this.lygte);
    this.rod.position.set(p.x, 0, p.z);
    verden.scene.add(this.rod);
  }
  get x() { return this.rod.position.x; }
  get z() { return this.rod.position.z; }
  opdater() {}
  tagSkade(mængde, kilde) {
    if (this.død) return false;
    const s = reducérSkade(mængde, this.rustning);
    this.hp = Math.max(0, this.hp - s);
    bus.emit('skade', { mål: this, mængde: s, kilde });
    if (this.hp <= 0) { this.død = true; this.vedDød?.(kilde); return true; }
    return false;
  }
}

export function karavane(spil, ctl) {
  const { verden, helt } = spil, kort = verden.kort;
  const kro = spil.steder.find((s) => s.type === 'kro');
  const rute = ctl.findRute?.(kro);
  if (!rute) return null;
  const vogn = new Vogn(verden, rute[0]);
  const f0 = kort.felt(rute[0].x, rute[0].z);
  const lejr = new Lejr(verden, { id: `karavane-${Math.round(spil.ur.tid)}`, q: f0.q, r: f0.r, niveau: 2, familie: 'plyndrere', creeps: ['lejesoldat', 'skytte', 'slagsbror'] });
  for (const c of lejr.creeps) { c.fredelig = true; c.tilstand = 'hvile'; c.spil(c.anim.idle); c.fart = K.fart * 1.4; }
  const bærere = [0, 1].map((i) => {
    const u = new Unit(verden, 'units/pilgrim', { skjul: ['Knife', 'Knife_Offhand', '1H_Crossbow', '2H_Crossbow', 'Throwable'] });
    u.model.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); o.material.color.lerp(new THREE.Color(0.62, 0.45, 0.3), 0.85); } });
    u.spil('Walking_A'); u.side = i ? 1 : -1;
    return u;
  });
  const støv = Array.from({ length: 8 }, () => { const s = glød(0xb8a78a, 2, 0.3); s.material.blending = THREE.NormalBlending; verden.scene.add(s); return s; });
  bus.emit('krønike', { ...TEKST.karavane, x: vogn.x, z: vogn.z, varighed: 20 });

  let i = 1, retning = 0, eskorte = 0, plyndret = false, slut = null, overfald = false, længde = 0, kørt = 0;
  for (let k = 1; k < rute.length; k++) længde += Math.hypot(rute[k].x - rute[k - 1].x, rute[k].z - rute[k - 1].z);
  const b = { steder: [], prik: { x: vogn.x, z: vogn.z, farve: '#e8c690' } };
  b.steder.push({
    get x() { return vogn.x; }, get z() { return vogn.z; }, højde: 3, navn: 'Merchant caravan', farve: '#e8c690',
    get tekst() { return plyndret ? 'Under attack!' : 'Walk beside it to the far side for a reward — or attack its guards and take the cargo.'; },
  });

  const egne = () => verden.egne?.() ?? [helt];
  function plyndr(kilde) {
    if (plyndret) return;
    plyndret = true;
    verden.creeps.push(vogn);   // nu kan vognen angribes
    for (const c of lejr.creeps) if (!c.død) { c.fredelig = false; c.tilstand = 'jagt'; c.mål = kilde; }
    bus.emit('krønike', { ...TEKST.karavaneOverfald, x: vogn.x, z: vogn.z });
  }
  const af = bus.on('skade', ({ mål, kilde }) => { if ((mål === vogn || lejr.creeps.includes(mål)) && erEgen(kilde, verden)) plyndr(kilde); });
  vogn.vedDød = () => {
    helt.inventar.tilføjGuld(K.loot[0] + Math.round(Math.random() * (K.loot[1] - K.loot[0])), vogn);
    spil.genstande.læg(træk(DROP[3]), vogn.x + 1.5, vogn.z); spil.genstande.læg(træk(DROP[3]), vogn.x - 1.5, vogn.z + 1);
    verden.mod.pris = Math.min(K.prisMaks, verden.mod.pris * K.prisOp);
    bus.emit('effekt', { type: 'røg', x: vogn.x, z: vogn.z });
    bus.emit('krønike', { ...TEKST.karavanePlyndret, x: vogn.x, z: vogn.z, varighed: 18 });
    verden.scene.remove(vogn.rod); vogn.fjernet = true; slut = 'plyndret';
  };

  return Object.assign(b, {
    varighed: Infinity,
    opdater(dt, t) {
      if (slut) return false;
      const ude = !plyndret && i < rute.length;
      if (ude) {
        // Vognen kører langs ruten (langsomt), drejer blødt og ryster lidt
        const m = rute[i], dx = m.x - vogn.x, dz = m.z - vogn.z, d = Math.hypot(dx, dz), s = K.fart * dt;
        if (d <= s) { vogn.rod.position.set(m.x, 0, m.z); i++; } else { vogn.rod.position.x += (dx / d) * s; vogn.rod.position.z += (dz / d) * s; kørt += s; }
        const mål = Math.atan2(dx, dz); retning += Math.atan2(Math.sin(mål - retning), Math.cos(mål - retning)) * Math.min(1, dt * 3);
        vogn.rod.rotation.y = retning; vogn.rod.rotation.z = Math.sin(t * 7) * 0.012;
        // Eskorte: helten eller soldater tæt på
        if (egne().some((u) => Math.hypot(u.x - vogn.x, u.z - vogn.z) < K.eskorteAfstand)) eskorte += dt;
        // Halvvejs: røvere angriber en eskorteret karavane
        if (!overfald && kørt > længde * 0.45 && eskorte > 15) {
          overfald = true;
          const niveau = helt.level <= 4 ? 1 : helt.level <= 8 ? 2 : 3, f = kort.felt(vogn.x + 9, vogn.z + 9) ?? f0;
          const røvere = new Lejr(verden, { id: `karavanerøvere-${Math.round(t)}`, q: f.q, r: f.r, niveau, familie: 'plyndrere', creeps: vælg(SAMMENSÆTNING.plyndrere[niveau]) });
          const nær = egne().find((u) => Math.hypot(u.x - vogn.x, u.z - vogn.z) < K.eskorteAfstand) ?? helt;
          for (const c of røvere.creeps) { c.angrebEfterVågn = true; c.mål = nær; }
          bus.emit('krønike', { ...TEKST.karavaneRøvere, x: vogn.x, z: vogn.z });
        }
      }
      // Bærerne går foran ved skaglerne; vagterne følger med (så længe de ikke kæmper)
      const fx = Math.sin(retning), fz = Math.cos(retning);
      for (const u of bærere) {
        u.rod.position.set(vogn.x + fx * 5.2 + fz * u.side * 0.7, 0, vogn.z + fz * 5.2 - fx * u.side * 0.7);
        u.rod.rotation.y = u.vinkelMål = retning; u.rod.visible = vogn.rod.visible;
        u.opdater(ude ? dt : 0);
      }
      lejr.x = vogn.x; lejr.z = vogn.z;
      lejr.creeps.forEach((c, k) => {
        const v = retning + Math.PI + (k - 1) * 0.9, hjem = { x: vogn.x + Math.sin(v) * 5, z: vogn.z + Math.cos(v) * 5 };
        c.hjem = hjem;
        if (c.død || c.tilstand !== 'hvile') return;
        if (Math.hypot(hjem.x - c.x, hjem.z - c.z) > 1.6) {
          if (!c.vej.length || (c.følgTid = (c.følgTid ?? 0) - dt) <= 0) { c.gåTil(hjem.x, hjem.z); c.følgTid = 0.6; }
          c.opdaterBevægelse(dt); c.spil('Walking_A');
        } else c.spil(c.anim.idle);
      });
      const synlig = verden.taage.erSynlig(vogn.x, vogn.z);
      vogn.rod.visible = synlig;
      vogn.lygte.material.opacity = 0.4 + 0.5 * (verden.nat ?? 0);
      støv.forEach((s, k) => { const u = (t * 0.6 + k / støv.length) % 1; s.position.set(vogn.x - fx * (2 + u * 3) + Math.sin(k * 3) * 1.2, 0.5 + u * 1.5, vogn.z - fz * (2 + u * 3)); s.material.opacity = ude && synlig ? 0.28 * (1 - u) : 0; s.scale.setScalar(1.5 + u * 2.5); });
      b.prik.x = vogn.x; b.prik.z = vogn.z;
      // Fremme: belønning hvis den blev eskorteret, ellers kører den bare videre
      if (!plyndret && i >= rute.length) {
        const nær = egne().some((u) => Math.hypot(u.x - vogn.x, u.z - vogn.z) < K.eskorteAfstand + 6);
        if (nær && eskorte > K.eskorteTid) {
          helt.inventar.tilføjGuld(K.løn[0] + Math.round(Math.random() * (K.løn[1] - K.løn[0])), vogn);
          spil.genstande.læg(træk(DROP[3]), vogn.x + 2, vogn.z + 1);
          verden.mod.pris = Math.max(K.prisMin, verden.mod.pris * K.prisNed);
          bus.emit('effekt', { type: 'kiste', x: vogn.x, z: vogn.z });
          bus.emit('krønike', { ...TEKST.karavaneFremme, x: vogn.x, z: vogn.z, varighed: 18 });
          slut = 'eskorteret';
        } else slut = 'kørt';
        return false;
      }
      if (plyndret && lejr.creeps.every((c) => c.død) && vogn.død) return false;
    },
    slut() {
      af();
      for (const u of bærere) u.fjern();
      for (const s of støv) verden.scene.remove(s);
      if (!vogn.død) { verden.scene.remove(vogn.rod); vogn.død = vogn.fjernet = true; }
      for (const c of lejr.creeps) if (!c.død && c.tilstand === 'hvile') { c.død = true; c.fjernet = true; c.fjern(); }   // vagterne følger vognen væk
      if (slut === 'kørt') bus.emit('krønike', TEKST.karavaneVidere);
    },
  });
}
