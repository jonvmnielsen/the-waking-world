// Gendan et gemt spil (se gem.js) oven på et nyt spil bygget med samme frø.
import { Bygning } from './bygninger.js';
import { STADIER, ENHEDER } from './bygningsdata.js';
import { HELT_FORSYNING } from './basestart.js';
import { pakUd } from './gem.js';
import { optag } from './byggeplads.js';
import { PLADSER_TYPER, erUdstyr } from './udstyr.js';
import { ITEMS } from './itemdata.js';

export function gendanSpil(spil, g) {
  const { helt, base, verden, lejre, genstande, taage, rig, økonomi: ø } = spil;
  const kort = verden.kort;

  // Helten: level-bonusser lægges på uden fanfare
  while (helt.level < g.helt.level) helt.levelOp(true);
  helt.evner.gendanRang(g.helt.rang);   // skill points (evnerang.js); ældre spil får rang efter level
  helt.xp = g.helt.xp;
  const inv = helt.inventar;
  if (g.version >= 8) {
    inv.pladser = g.helt.pladser.map((p) => (p ? { ...p } : null));
    if (g.helt.rygsæk) inv.rygsæk = g.helt.rygsæk.map((p) => (p ? { ...p } : null));
  } else flytGamleItems(spil, g.helt);
  Object.assign(inv.permanent, g.helt.permanent);
  inv.beregn();
  helt.velsignelser.gendan(g.helt.velsignelser);   // alterets velsignelser (M14d)
  spil.bedrifter?.gendan(g.helt.bedrifter);
  if (g.helt.sti) helt.sti.stig(g.helt.sti, true);
  helt.rod.position.set(g.helt.x, 0, g.helt.z);
  helt.hp = Math.min(helt.maxHp, g.helt.hp);
  helt.mana = Math.min(helt.manaMax, g.helt.mana);

  // Bygninger: Storlejren findes allerede (medmindre den var faldet i det gemte spil)
  const start = base.bygninger[0], gemtStart = g.bygninger[0]?.type === 'storlejr' ? g.bygninger[0] : null;
  spil.udvikling.gendan(g.udvikling, gemtStart ? [start] : []);   // forskning og Storlejrens tier
  if (gemtStart) {
    start.udv = gemtStart.udv ?? null;
    start.kø = gemtStart.kø ?? [];
    start.samling = gemtStart.samling ?? null;
    start.hp = Math.min(start.maxHp, gemtStart.hp ?? start.maxHp);
  } else { start.ødelæg(true); base.bygninger.shift(); }
  for (const d of g.bygninger.slice(gemtStart ? 1 : 0)) {
    const felter = d.felter.map((n) => kort.felter.get(n)).filter(Boolean);
    for (const f of felter) verden.natur.ryd(f);
    const b = new Bygning(base, d.type, { x: d.x, z: d.z, felter, plads: d.plads ?? -1, rot: d.rot, færdig: d.færdig });
    for (const f of felter) optag(f, b.plads, b);
    if (!d.færdig) { b.fremskridt = d.fremskridt; b.visModel(STADIER[Math.min(2, Math.floor(d.fremskridt * 3))], b.pladsSkala); }
    b.kø = d.kø ?? [];
    b.samling = d.samling;
    for (let i = 0; i < (d.opg ?? 0); i++) spil.udvikling.anvend(b, 'vagttårn');
    b.udv = d.udv ?? null;
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
  spil.prospekt?.gendan(g.prospekt);   // fundne miner først, så minernes guld passer
  g.miner.forEach((guld, i) => { if (base.kilder.miner[i]) base.kilder.miner[i].guld = guld; });
  (g.brud ?? []).forEach((sten, i) => { if (base.kilder.brud[i]) base.kilder.brud[i].sten = sten; });

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
  for (const d of g.items) genstande.læg(d.id, d.x, d.z, d.ladninger ?? undefined, d.rul ?? null);
  g.kister.forEach((åben, i) => {
    const k = genstande.kister[i];
    if (!åben || !k) return;
    k.åben = true;
    verden.scene.remove(k.rod);   // åbnede kister er væk
  });

  // Modstanderen: bygninger (samme pladser hver gang), guld, bølger, arbejdere og hæren
  const m = spil.modstander, gm = g.modstander;
  if (gm) {
    Object.assign(m, { tid: gm.tid, guld: gm.guld, bølge: gm.bølge, næsteAngreb: gm.næsteAngreb });
    m.arbejdere.slice(gm.arbejdere ?? m.arbejdere.length).forEach((a) => { a.død = true; a.fjernet = true; a.fjern(); });
    while (m.byggePlan < gm.byggePlan) { m.byg(4 + m.byggePlan); m.byggePlan += 1; }
    for (const d of gm.bygninger) {
      const b = m.bygninger.find((x) => x.id === d.id);
      if (!b) continue;
      if (d.død) { b.ødelæg(null, true); continue; }
      b.fremskridt = d.fremskridt; b.hp = d.hp;
      // Vis den rigtige model: færdige bygninger må ikke beholde byggepladsens udseende
      b.vis(b.færdig ? b.data.model : STADIER[Math.min(2, Math.floor(b.fremskridt * 3))], b.færdig ? b.data.skala : b.pladsSkala);
    }
    for (const d of gm.enheder) {
      const e = m.nyEnhed(d.type, { x: d.x, z: d.z, radius: -1.5 });
      e.level = d.level; e.hp = Math.min(e.maxHp, d.hp);
      e.tilstand = 'march'; e.spil(e.anim.idle);
    }
    gendanFjendeHelt(m, gm.helt);
  }

  spil.memory?.gendan(g.erevoss);   // The Memorys ekkoer og vogtere
  for (const id of g.ødelagte ?? []) spil.konstruktioner?.[id]?.ødelæg(null, true);

  // Udforsket land, spillestil, økonomi og kamera
  pakUd(g.udforsket, taage.udforsket);
  Object.assign(spil.stil.score, g.stil);
  Object.assign(ø, g.økonomi);
  // Forsyningen tælles op igen (enhedernes pris i forsyning kan have ændret sig siden spillet blev gemt)
  ø.forsyning = HELT_FORSYNING + base.arbejdere.filter((a) => !a.død).length + base.soldater.filter((s) => !s.død).reduce((n, s) => n + (ENHEDER[s.type]?.forsyning ?? 1), 0)
    + base.bygninger.flatMap((b) => b.kø ?? []).reduce((n, k) => n + (ENHEDER[k.type]?.forsyning ?? 0), 0);
  // Død helt og genoplivning ved alteret, så ånderne (død først: den bærer intet, når den falder)
  spil.alter.gendan(g.alter);
  spil.ånder.gendan(g.ånder);
  rig.følger = false;
  rig.fokus.set(g.kamera.x, 0, g.kamera.z);
  rig.afstand = g.kamera.afstand;
}

// Gem-version 7 havde seks ens pladser: udstyr lægges på sin nye plads, resten i rygsækken;
// hvad der ikke er plads til, lægges ved heltens fødder
function flytGamleItems(spil, gh) {
  const inv = spil.helt.inventar;
  for (const p of [...(gh.pladser ?? []), ...(gh.rygsæk ?? [])]) {
    if (!p || !ITEMS[p.id]) continue;
    const item = { ...p }, i = erUdstyr(p.id) ? PLADSER_TYPER.indexOf(ITEMS[p.id].plads) : -1, j = inv.rygsæk.indexOf(null);
    if (i >= 0 && !inv.pladser[i]) inv.pladser[i] = item;
    else if (j >= 0) inv.rygsæk[j] = item;
    else spil.genstande.læg(p.id, gh.x + 2, gh.z + 1, p.ladninger ?? undefined, null);
  }
}

// Modstanderens helt: level, liv og sted — eller død, med den tid der er gået, til den rejser sig igen
function gendanFjendeHelt(m, d) {
  if (!d) return;
  const gl = m.helt;
  gl.død = true; gl.fjernet = true; gl.fjern();
  m.verden.creeps = m.verden.creeps.filter((c) => c !== gl);
  if (d.død) { m.helt = gl; m.heltTid = d.tid ?? 0; return; }
  m.nyHelt(d.level);
  const h = m.helt;
  h.rod.position.set(d.x, 0, d.z);
  h.hp = Math.min(h.maxHp, d.hp);
}
