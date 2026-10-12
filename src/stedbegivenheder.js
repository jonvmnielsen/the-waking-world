// Begivenheder et sted på kortet (begivenheder.js): en skjult helligdom med en lyssøjle, en flok lejesvende
// ved et bål, og krager der kredser over et baghold. Man ser tegnet først — lyset, røgen, kragerne.
import * as THREE from 'three';
import { bus } from './events.js';
import { glød } from './aand.js';
import { kopi } from './assets.js';
import { Unit } from './unit.js';
import { Lejr } from './creeps.js';
import { FugleFlok } from './fugle.js';
import { ENHEDER } from './bygningsdata.js';
import { SOLDATER } from './soldatdata.js';
import { SAMMENSÆTNING } from './creepdata.js';
import { ikon } from './ikoner.js';
import { LEVELS } from './config.js';
import { lysSøjle } from './himmelbegivenheder.js';
import { TEKST, VELSIGNELSER, RABAT } from './begivenhedsdata.js';

const vælg = (l) => l[Math.floor(Math.random() * l.length)];

// En glemt helligdom med en gylden lyssøjle; helten får en tilfældig velsignelse, og så smuldrer den
export function helligdom(spil, ctl) {
  const sted = ctl.findSted({ min: 60, maks: 220 });
  if (!sted) return null;
  const { x, z } = sted, scene = spil.verden.scene, helt = spil.helt;
  const m = kopi('kaykit-halloween/shrine', { skygge: true });
  m.scale.setScalar(2.4); m.position.set(x, 0, z); m.rotation.y = Math.random() * 6;
  const søjle = lysSøjle(scene, 0xffe7a0, 32, 1.1, 0.36);
  søjle.position.x = x; søjle.position.z = z;
  const lys = glød(0xffe7a0, 8, 0.7), bund = glød(0xffd36b, 14, 0.35);
  lys.position.set(x, 3.2, z); bund.position.set(x, 0.4, z);
  scene.add(m, lys, bund);
  bus.emit('krønike', { ...TEKST.helligdom, x, z, varighed: 18 });
  let brugt = null;
  const b = { steder: [] };
  b.steder.push({
    x, z, højde: 4, radius: 4, navn: 'Hidden shrine', tekst: 'A blessing waits for the first hero who kneels here.', farve: '#ffe7a0',
    brug() {
      const v = vælg(VELSIGNELSER);
      if (v.id === 'kraft') { helt.hp = helt.maxHp; helt.mana = helt.manaMax; bus.emit('effekt', { type: 'heal', mål: helt }); }
      if (v.id === 'indsigt') { const xp = Math.round(((LEVELS.xp[helt.level] ?? 3000) - (LEVELS.xp[helt.level - 1] ?? 0)) * 0.4); helt.fåXp(xp); bus.emit('flydetekst', { enhed: helt, tekst: `+${xp} XP`, klasse: 'xp' }); }
      if (v.id === 'lykke') helt.inventar.tilføjGuld(120 + Math.round(Math.random() * 130));
      bus.emit('effekt', { type: 'ascension', x, z, farve: v.farve });
      bus.emit('krønike', { titel: v.navn, tekst: `${v.tekst} — the shrine crumbles to dust behind your hero.`, farve: '#ffe7a0' });
      b.steder.length = 0; brugt = b.tid;
    },
  });
  return Object.assign(b, {
    opdater(dt, t) {
      const ud = brugt != null ? Math.max(0, 1 - (t - brugt) / 2) : Math.max(0, Math.min(1, (b.varighed - t) / 10));
      søjle.material.opacity = søjle.userData.opacitet * ud * (0.8 + 0.2 * Math.sin(t * 2));
      lys.material.opacity = (0.55 + 0.2 * Math.sin(t * 3)) * ud; bund.material.opacity = 0.35 * ud;
      if (brugt != null) m.position.y = -(t - brugt) * 1.4;   // synker i jorden
      m.visible = bund.visible = spil.taage.erUdforsket(x, z);   // i tågen ses kun lyset
      if (brugt != null && ud <= 0) return false;
    },
    slut() { scene.remove(m, søjle, lys, bund); },
  });
}

// Lejesvende ved et bål: helten går derhen og hyrer dem billigere end på kroen
export function lejesvende(spil, ctl) {
  const sted = ctl.findSted({ min: 50, maks: 200 });
  if (!sted) return null;
  const { x, z } = sted, verden = spil.verden, scene = verden.scene;
  const bål = kopi('forge-lowpoly/campfire', { skygge: true });
  bål.scale.setScalar(2.2); bål.position.set(x, 0, z);
  const flammer = [glød(0xff8a2a, 4.5, 0.9), glød(0xffc060, 2.6, 1), glød(0xff5a1a, 7, 0.4)];
  const røg = Array.from({ length: 6 }, () => { const s = glød(0x9a948c, 3, 0.25); s.material.blending = THREE.NormalBlending; return s; });
  scene.add(bål, ...flammer, ...røg);
  const typer = [vælg(['slagsbror', 'lejesoldat']), 'skytte', vælg(['slagsbror', 'lejesoldat', 'skytte'])];
  const figurer = typer.map((type, i) => {
    const d = SOLDATER[type], v = (i / typer.length) * Math.PI * 2 + 0.5;
    const u = new Unit(verden, d.model, { skjul: d.skjul ?? [] });
    u.rod.position.set(x + Math.cos(v) * 3.4, 0, z + Math.sin(v) * 3.4);
    u.rod.rotation.y = u.vinkelMål = Math.atan2(x - u.x, z - u.z);
    u.spil('Idle'); u.type = type;
    return u;
  });
  bus.emit('krønike', { ...TEKST.lejesvende, x, z, varighed: 18 });
  const varer = () => figurer.map((u) => {
    const e = ENHEDER[u.type], pris = { guld: Math.round(e.pris.guld * RABAT) };
    return {
      ikon: ikon(e.ikon), navn: e.navn, farve: '#e9d6a8', tekst: `${e.tekst} Supply ${e.forsyning}. (Tavern price ${e.pris.guld})`, pris: pris.guld,
      kan: () => !spil.økonomi.mangler(pris, e.forsyning),
      køb: () => {
        const fejl = spil.økonomi.mangler(pris, e.forsyning);
        if (fejl) return bus.emit('besked', fejl);
        spil.økonomi.betal(pris); spil.økonomi.forsyning += e.forsyning;
        u.fjern(); figurer.splice(figurer.indexOf(u), 1);
        spil.base.nySoldat(u.type, u.x, u.z, null);
        bus.emit('besked', `A ${e.navn} joins your army`);
        if (figurer.length) spil.butik(b.steder[0], varer(), 'Sellswords by the fire'); else spil.butik(null);
      },
    };
  });
  const b = { steder: [] };
  b.steder.push({ x, z, højde: 3, radius: 9, navn: 'Wandering sellswords', tekst: 'They will fight for you — for less than the tavern asks.', farve: '#e9d6a8', brug: () => spil.butik(b.steder[0], varer(), 'Sellswords by the fire') });
  return Object.assign(b, {
    opdater(dt, t) {
      const set = spil.taage.erUdforsket(x, z);   // i tågen ses kun bålets skær
      bål.visible = set;
      for (const u of figurer) { u.rod.visible = set; u.opdater(dt); }
      flammer.forEach((f, i) => { f.position.set(x, 1 + i * 0.4 + Math.sin(t * 9 + i) * 0.15, z); f.material.opacity = (i === 2 ? 0.4 : 0.85) * (0.8 + 0.2 * Math.sin(t * 13 + i * 2)); });
      røg.forEach((s, i) => { const u = (t * 0.25 + i / røg.length) % 1; s.position.set(x + Math.sin(u * 5 + i) * 0.8, 2.5 + u * 9, z + u * 2); s.scale.setScalar(2 + u * 5); s.material.opacity = 0.25 * (1 - u); });
      if (!figurer.length) return false;
    },
    slut() {
      for (const u of figurer) u.fjern();
      scene.remove(bål, ...flammer, ...røg);
      bus.emit('effekt', { type: 'røg', x, z });
      if (figurer.length) bus.emit('krønike', TEKST.lejesvendeSlut);
    },
  });
}

// Krager kredser lavt over et sted; når nogen kommer for tæt på, springer plyndrere frem
export function baghold(spil, ctl) {
  const sted = ctl.findSted({ min: 50, maks: 180 });
  if (!sted) return null;
  const { x, z, f } = sted, verden = spil.verden, helt = spil.helt;
  const flok = new FugleFlok(verden, 'krage', x, z, () => null);
  const udforsket = { erSynlig: (a, c) => verden.taage.erUdforsket(a, c) };   // kragerne ses over udforsket land
  flok.radius = 6; flok.højde = 9; flok.flytTid = Infinity;
  bus.emit('krønike', { ...TEKST.baghold, x, z, varighed: 16 });
  let lejr = null, væk = null;
  const b = { steder: [] };
  b.steder.push({ x, z, højde: 3, navn: 'Circling crows', tekst: 'They will not settle. Something is hiding here.', farve: '#c0b0a0' });
  return Object.assign(b, {
    opdater(dt, t) {
      flok.opdater(dt, [], udforsket);
      if (væk != null && t - væk > 10) return false;
      if (lejr) { if (væk == null && lejr.creeps.every((c) => c.død)) væk = t; return; }
      const nær = (verden.egne?.() ?? [helt]).find((u) => !u.død && Math.hypot(u.x - x, u.z - z) < 11);
      if (!nær) return;
      const niveau = helt.level <= 4 ? 1 : helt.level <= 8 ? 2 : 3;
      lejr = new Lejr(verden, { id: `baghold-${Math.round(t)}`, q: f.q, r: f.r, niveau, familie: 'plyndrere', creeps: vælg(SAMMENSÆTNING.plyndrere[niveau]) });
      for (const c of lejr.creeps) { c.angrebEfterVågn = true; c.mål = nær; }
      b.steder.length = 0;
      flok.flyvTil(x + 60, z - 40);
      bus.emit('effekt', { type: 'røg', x, z });
      bus.emit('krønike', { ...TEKST.bagholdUd, x, z });
    },
    slut() { flok.fjern(); },
  });
}
