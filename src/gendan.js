// Gendan et gemt spil (se gem.js) oven på et nyt spil bygget med samme frø.
import { Bygning } from './bygninger.js';
import { STADIER } from './bygningsdata.js';
import { pakUd } from './gem.js';

export function gendanSpil(spil, g) {
  const { helt, base, verden, lejre, genstande, taage, rig, økonomi: ø } = spil;
  const kort = verden.kort;

  // Helten: level-bonusser lægges på uden fanfare
  while (helt.level < g.helt.level) helt.levelOp(true);
  helt.xp = g.helt.xp;
  const inv = helt.inventar;
  inv.pladser = g.helt.pladser.map((p) => (p ? { ...p } : null));
  Object.assign(inv.permanent, g.helt.permanent);
  inv.beregn();
  helt.rod.position.set(g.helt.x, 0, g.helt.z);
  helt.hp = Math.min(helt.maxHp, g.helt.hp);
  helt.mana = Math.min(helt.manaMax, g.helt.mana);

  // Bygninger: Storlejren findes allerede (medmindre den var faldet i det gemte spil)
  const start = base.bygninger[0], gemtStart = g.bygninger[0]?.type === 'storlejr' ? g.bygninger[0] : null;
  if (gemtStart) {
    start.kø = gemtStart.kø ?? [];
    start.samling = gemtStart.samling ?? null;
    start.hp = Math.min(start.maxHp, gemtStart.hp ?? start.maxHp);
  } else { start.ødelæg(true); base.bygninger.shift(); }
  for (const d of g.bygninger.slice(gemtStart ? 1 : 0)) {
    const felter = d.felter.map((n) => kort.felter.get(n)).filter(Boolean);
    for (const f of felter) { f.optaget = true; f.gåbar = false; verden.natur.ryd(f); }
    const b = new Bygning(base, d.type, { x: d.x, z: d.z, felter, rot: d.rot, færdig: d.færdig });
    if (!d.færdig) { b.fremskridt = d.fremskridt; b.visModel(STADIER[Math.min(2, Math.floor(d.fremskridt * 3))], 1); }
    b.kø = d.kø ?? [];
    b.samling = d.samling;
    b.hp = Math.min(b.maxHp, d.hp ?? b.maxHp);
    base.bygninger.push(b);
  }
  if (g.helt.spawn) helt.spawn = g.helt.spawn;

  // Arbejdere: de fem fra starten erstattes af de gemte
  for (const a of base.arbejdere) a.fjern();
  base.arbejdere = [];
  for (const d of g.arbejdere) {
    const a = base.nyArbejder(d.x, d.z, null);
    if (d.byg >= 0 && base.bygninger[d.byg] && !base.bygninger[d.byg].færdig) a.kommandoByg(base.bygninger[d.byg]);
    else if (d.opgave) a.høstNærmeste(d.opgave);
  }

  // Hæren
  for (const d of g.soldater) {
    const s = base.nySoldat(d.type, d.x, d.z, null);
    s.vet.xp = d.xp;
    if (d.veteran) spil.veteraner.blivVeteran(s, true);
    if (d.gren) spil.veteraner.anvend(s, d.gren, true);
    s.hp = Math.min(s.maxHp, d.hp);
    s.timer = 0;
  }

  // Høstede træer og sten, tømte miner
  const ressourcer = base.kilder.ressourcer;
  for (const [id, mængde] of g.ressourcer) {
    const r = ressourcer[id];
    if (!r) continue;
    if (mængde <= 0) verden.natur.fjern(r); else r[r.type] = mængde;
  }
  g.miner.forEach((guld, i) => { if (base.kilder.miner[i]) base.kilder.miner[i].guld = guld; });

  // Creeps: døde forsvinder, sårede beholder deres liv
  g.lejre.forEach((liste, i) => {
    const l = lejre[i];
    if (!l) return;
    liste.forEach((hp, j) => {
      const c = l.creeps[j];
      if (!c) return;
      if (hp < 0) { c.død = true; c.fjernet = true; c.fjern(); } else c.hp = Math.min(c.maxHp, hp);
    });
  });

  // Items på jorden og åbne kister
  for (const d of g.items) genstande.læg(d.id, d.x, d.z, d.ladninger ?? undefined);
  g.kister.forEach((åben, i) => {
    const k = genstande.kister[i];
    if (!åben || !k) return;
    k.åben = true;
    k.rod.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); o.material.color.multiplyScalar(0.45); } });
  });

  // The Memory: bygninger (samme pladser hver gang), guld, bølger og hæren
  const m = spil.memory, gm = g.memory;
  if (gm) {
    Object.assign(m, { tid: gm.tid, guld: gm.guld, bølge: gm.bølge, næsteAngreb: gm.næsteAngreb });
    while (m.byggePlan < gm.byggePlan) { m.byg(4 + m.byggePlan); m.byggePlan += 1; }
    for (const d of gm.bygninger) {
      const b = m.bygninger.find((x) => x.id === d.id);
      if (!b) continue;
      if (d.død) { b.ødelæg(null, true); continue; }
      b.fremskridt = d.fremskridt; b.hp = d.hp;
    }
    for (const d of gm.enheder) {
      const e = m.nyEnhed(d.type, { x: d.x, z: d.z, radius: -1.5 });
      e.level = d.level; e.hp = Math.min(e.maxHp, d.hp);
      e.tilstand = 'march'; e.spil(e.anim.idle);
    }
  }

  // Udforsket land, spillestil, økonomi og kamera
  pakUd(g.udforsket, taage.udforsket);
  Object.assign(spil.stil.score, g.stil);
  Object.assign(ø, g.økonomi);
  rig.følger = false;
  rig.fokus.set(g.kamera.x, 0, g.kamera.z);
  rig.afstand = g.kamera.afstand;
}
