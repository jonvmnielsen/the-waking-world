// Gem spil: hele spillets tilstand gemmes i telefonens browser (localStorage).
// Kortet bygges altid ens ud fra frøet, så kun det der har ændret sig gemmes:
// helten, økonomien, basen, hæren, høstede træer og sten, døde creeps, items, kister og udforsket land.
// Spillet gemmes automatisk hvert minut og når appen lægges væk. Gendannelse: gendan.js.
import { KORT } from './config.js';
import { nøgle } from './hexgrid.js';

const NØGLE = 'tww-gem-1';
export const GEM_VERSION = 1;
const r1 = (v) => Math.round(v * 10) / 10;

export function hentGem() {
  try {
    const g = JSON.parse(localStorage.getItem(NØGLE));
    return g && g.version === GEM_VERSION && g.seed === KORT.seed ? g : null;
  } catch { return null; }
}

export function gemSpil(spil) {
  try {
    localStorage.setItem(NØGLE, JSON.stringify(lavGem(spil)));
    return true;
  } catch (e) {
    console.warn('Could not save', e);
    return false;
  }
}

function lavGem(spil) {
  const { helt, økonomi: ø, base, verden, lejre, genstande, taage, rig, stil } = spil;
  const inv = helt.inventar;
  return {
    version: GEM_VERSION, seed: KORT.seed, tidspunkt: Date.now(), spilTid: Math.round(helt.tid),
    økonomi: { guld: ø.guld, træ: ø.træ, sten: ø.sten, forsyning: ø.forsyning, forsyningMaks: ø.forsyningMaks },
    helt: {
      essens: helt.evner.essens, x: r1(helt.x), z: r1(helt.z), hp: Math.ceil(helt.død ? helt.maxHp : helt.hp), mana: Math.floor(helt.mana),
      level: helt.level, xp: helt.xp, spawn: helt.spawn, pladser: inv.pladser, permanent: inv.permanent,
    },
    bygninger: base.bygninger.map((b) => ({
      type: b.type, felter: b.felter.map((f) => nøgle(f.q, f.r)), x: r1(b.x), z: r1(b.z), rot: b.rot,
      fremskridt: b.fremskridt, færdig: b.færdig, kø: b.kø, samling: b.samling ?? null,
    })),
    arbejdere: base.arbejdere.filter((a) => !a.død).map((a) => ({
      x: r1(a.x), z: r1(a.z), opgave: a.kilde?.type ?? a.bærer?.type ?? null,
      byg: a.bygning ? base.bygninger.indexOf(a.bygning) : -1,
    })),
    soldater: base.soldater.filter((s) => !s.død).map((s) => ({
      type: s.type, x: r1(s.x), z: r1(s.z), hp: Math.ceil(s.hp), xp: s.vet.xp, veteran: s.vet.veteran, gren: s.vet.gren?.id ?? null,
    })),
    ressourcer: base.kilder.ressourcer.filter((r) => r[r.type] < r.start).map((r) => [r.id, r[r.type]]),
    miner: base.kilder.miner.map((m) => m.guld),
    lejre: lejre.map((l) => l.creeps.map((c) => (c.død ? -1 : Math.ceil(c.hp)))),
    items: genstande.liste.map((g) => ({ id: g.id, x: r1(g.x), z: r1(g.z), ladninger: g.ladninger ?? null })),
    kister: genstande.kister.map((k) => (k.åben ? 1 : 0)),
    udforsket: pak(taage.udforsket),
    stil: stil.score,
    kamera: { x: r1(rig.fokus.x), z: r1(rig.fokus.z), afstand: rig.afstand },
  };
}

// Udforsket land som længder af skiftevis 0 og 1 (fylder lidt)
function pak(bytes) {
  const ud = [];
  let v = 0, n = 0;
  for (const b of bytes) {
    if (b === v) n++;
    else { ud.push(n); v = b; n = 1; }
  }
  ud.push(n);
  return ud.join(',');
}

export function pakUd(tekst, bytes) {
  let i = 0, v = 0;
  for (const n of tekst.split(',').map(Number)) { bytes.fill(v, i, i + n); i += n; v = 1 - v; }
}

// Autogem: hvert minut og når appen lægges væk / lukkes
export function startAutogem(spil, vedGem) {
  const gem = () => { if (!spil.helt) return; if (gemSpil(spil)) vedGem?.(); };
  setInterval(gem, 60000);
  document.addEventListener('visibilitychange', () => { if (document.hidden) gem(); });
  window.addEventListener('pagehide', gem);
  return gem;
}

export function beskrivGem(g) {
  const min = Math.floor(g.spilTid / 60);
  const siden = Math.round((Date.now() - g.tidspunkt) / 60000);
  const hvornår = siden < 1 ? 'saved just now' : siden < 60 ? `saved ${siden} min ago` : siden < 1440 ? `saved ${Math.round(siden / 60)} h ago` : `saved ${Math.round(siden / 1440)} days ago`;
  return `Level ${g.helt.level} · ${g.soldater.length} ${g.soldater.length === 1 ? 'soldier' : 'soldiers'} · ${min} min played · ${hvornår}`;
}
