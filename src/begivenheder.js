// Tilfældige begivenheder (GDD 17a punkt 6–7, Jons ønske: RNG og visuelle tegn frem for tekst).
// Med jævne mellemrum trækkes en begivenhed: for hele verden (Starfall, Eclipse, Gold rush — én ad gangen,
// og Blood Moon på en tilfældig nat) eller et sted på kortet (helligdom, lejesvende, baghold).
// Hver begivenhed viser sig først med lys, farver og figurer; krøniken fortæller bagefter.
// En begivenhed er et objekt { opdater(dt) → false når den er slut, slut(), steder: [...] }.
// steder er ting man kan trykke på: { x, z, højde, radius, navn, tekst, brug() } (uden brug går helten derhen).
import { bus } from './events.js';
import { PLAN, BEGIVENHEDER } from './begivenhedsdata.js';
import { hexTilVerden } from './hexgrid.js';
import { blodmåne, formørkelse, stjerneskud, guldfeber } from './himmelbegivenheder.js';
import { helligdom, lejesvende, baghold } from './stedbegivenheder.js';
import { karavane } from './karavane.js';

const til = ([a, b]) => a + Math.random() * (b - a);
const LAV = { blodmåne, formørkelse, stjerneskud, guldfeber, helligdom, lejesvende, baghold, karavane };

export class Begivenheder {
  constructor(spil) {
    this.spil = spil;
    this.aktive = [];
    this.nedtælling = til(PLAN.først);
    spil.verden.mod = { creepSkade: 0, creepXp: 0, memorySkade: 0, ekko: 1, pris: 1 };   // pris: købmanden og kroen (karavanen)
    bus.on('nat', ({ døgn }) => {
      if (døgn >= 2 && !this.aktive.length && Math.random() < PLAN.blodmåneChance) this.start('blodmåne');
    });
  }

  opdater(dt) {
    if (this.spil.slut) return;
    if (!this.aktive.length) this.nedtælling -= dt;   // én begivenhed ad gangen; pausen tæller først, når den forrige er slut
    if (this.nedtælling <= 0) { this.nedtælling = til(PLAN.mellem); this.træk(); }
    this.aktive = this.aktive.filter((b) => {
      b.tid += dt;
      const videre = b.opdater(dt, b.tid) !== false && b.tid < b.varighed;
      if (!videre) b.slut();
      return videre;
    });
  }

  // Træk en tilfældig begivenhed blandt dem der kan ske lige nu (efter vægt)
  træk() {
    const verden = this.aktive.some((b) => b.verden), steder = this.aktive.filter((b) => !b.verden).length;
    const dag = (this.spil.dagNat?.nat ?? 0) < 0.2;
    let mulige = Object.entries(BEGIVENHEDER).filter(([navn, d]) =>
      (d.verden ? !verden : steder < 2) && (!d.kunDag || dag) && navn !== this.forrige && !this.aktive.some((b) => b.navn === navn));
    while (mulige.length) {
      let r = Math.random() * mulige.reduce((s, [, d]) => s + d.vægt, 0);
      const valgt = mulige.find(([, d]) => (r -= d.vægt) < 0) ?? mulige[0];
      if (this.start(valgt[0])) return (this.forrige = valgt[0]);
      mulige = mulige.filter((m) => m !== valgt);
    }
    return null;
  }

  start(navn) {
    const b = LAV[navn]?.(this.spil, this);
    if (!b) return false;
    const d = BEGIVENHEDER[navn] ?? { verden: true, varighed: Infinity };
    Object.assign(b, { navn, verden: !!d.verden, varighed: b.varighed ?? d.varighed, tid: 0, steder: b.steder ?? [] });
    this.aktive.push(b);
    return true;
  }

  // Et frit sted i vildmarken: græs, langt fra baserne og lidt fra lejrene
  findSted({ min = 70, maks = 300, lejrAfstand = 16 } = {}) {
    const { verden, helt, lejre, memory } = this.spil;
    const base = helt.spawn, hal = memory?.hal;
    const kand = [];
    for (const f of verden.kort.felter.values()) {
      if (f.type !== 'græs' || !f.gåbar || f.optaget || f.blok) continue;
      const p = hexTilVerden(f.q, f.r), db = Math.hypot(p.x - base.x, p.z - base.z);
      if (db < min || db > maks || (hal && Math.hypot(p.x - hal.x, p.z - hal.z) < 60)) continue;
      if (lejre.some((l) => Math.hypot(l.x - p.x, l.z - p.z) < lejrAfstand)) continue;
      if (this.aktive.some((b) => b.steder.some((s) => Math.hypot(s.x - p.x, s.z - p.z) < 30))) continue;
      kand.push({ f, x: p.x, z: p.z });
    }
    return kand.length ? kand[Math.floor(Math.random() * kand.length)] : null;
  }

  // Karavanens rute: fra kanten af verden forbi kroen til den modsatte kant (langt fra baserne)
  findRute(kro) {
    const { verden, helt, memory } = this.spil, kort = verden.kort, base = helt.spawn, hal = memory?.hal;
    const kant = [];
    for (const f of kort.felter.values()) {
      if (!f.gåbar || f.optaget || f.type === 'hule' || f.type === 'vand') continue;
      const p = hexTilVerden(f.q, f.r);
      if (Math.hypot(p.x - base.x, p.z - base.z) < 80 || (hal && Math.hypot(p.x - hal.x, p.z - hal.z) < 80)) continue;
      if (this.spil.lejre.some((l) => Math.hypot(l.x - p.x, l.z - p.z) < (l.data.niveau >= 5 ? 60 : 22))) continue;   // ikke ved bosser og De Ældgamle
      kant.push({ x: p.x, z: p.z, r: Math.hypot(p.x, p.z) });
    }
    kant.sort((a, b) => b.r - a.r);
    const yderst = kant.slice(0, Math.max(12, Math.floor(kant.length * 0.15)));
    const start = yderst[Math.floor(Math.random() * yderst.length)];
    const modsat = yderst.filter((p) => p.x * start.x + p.z * start.z < 0);
    if (!start || !modsat.length) return null;
    const slut = modsat[Math.floor(Math.random() * Math.min(6, modsat.length))];
    const mf = kro && kort.nærmesteGåbare(kro.x, kro.z + 14), midt = mf ? hexTilVerden(mf.q, mf.r) : { x: 0, z: 0 };
    const a = kort.findVej(start, midt), b = kort.findVej(midt, slut);
    return a.length && b.length ? [start, ...a, ...b] : null;
  }

  gem() { return { pris: this.spil.verden.mod.pris }; }
  gendan(g) { if (g?.pris) this.spil.verden.mod.pris = g.pris; }

  // Tryk på et begivenhedssted: med helten valgt går han derhen (og bruger det); ellers vises en mærkat
  tryk(px, py, skærm, medHelt) {
    const helt = this.spil.helt;
    for (const b of this.aktive) for (const s of b.steder) {
      const q = skærm(s.x, s.højde ?? 2, s.z);
      if (Math.hypot(q.x - px, q.y - py) > 60) continue;
      if (medHelt && !helt.død) {
        if (s.brug) helt.kommandoInteraktion(s.x, s.z, s.radius ?? 3, () => s.brug());
        else helt.kommandoGå(s.x, s.z);
        bus.emit('effekt', { type: 'samlet', x: s.x, z: s.z, farve: 0xffe08a });
        return true;
      }
      bus.emit('mærkat', { ting: { x: s.x, z: s.z, højde: s.højde ?? 2 }, html: `<b>${s.navn}</b><small>${s.tekst}</small>`, farve: s.farve ?? '#e8c690' });
      return true;
    }
    return false;
  }
}
