// Spillerens base: alle bygninger, hvor man må bygge, hvor ressourcer afleveres,
// og arbejdere der trænes. (GDD 5.2)
import { Bygning } from './bygninger.js';
import { BYGNINGER } from './bygningsdata.js';
import { hexTilVerden, hexAfstand } from './hexgrid.js';
import { Arbejder } from './arbejder.js';
import { Soldat } from './soldat.js';
import { bus } from './events.js';

export class Base {
  constructor(verden, økonomi, kilder) {
    this.verden = verden; this.økonomi = økonomi; this.kilder = kilder;
    this.bygninger = [];
    this.arbejdere = [];
    this.soldater = [];
    this.vedTrænet = (type, b) => {
      if (type === 'arbejder') this.nyArbejder(b.x + 3, b.z + b.radius + 1.5, 'guld');
      else this.nySoldat(type, b.x + (Math.random() - 0.5) * 4, b.z + b.radius + 2, b.samling);
    };
  }

  // Storlejren står der fra start (færdig)
  startBygning(data) {
    const b = new Bygning(this, 'storlejr', { ...data, færdig: true });
    this.bygninger.push(b);
    this.økonomi.forsyningMaks = b.data.forsyning;
    return b;
  }

  nyArbejder(x, z, opgave) {
    const a = new Arbejder(this.verden, this, x, z);
    this.arbejdere.push(a);
    if (opgave) a.høstNærmeste(opgave);
    bus.emit('arbejder_ny', { arbejder: a });
    return a;
  }

  // En ny soldat går hen til bygningens samlingspunkt, hvis der er sat et
  nySoldat(type, x, z, samling) {
    const s = new Soldat(this.verden, this, type, x, z);
    this.soldater.push(s);
    if (samling) s.kommandoGå(samling.x + (Math.random() - 0.5) * 3, samling.z + (Math.random() - 0.5) * 3);
    bus.emit('soldat_ny', { soldat: s });
    return s;
  }

  // Må bygningen stå på feltet? Returnerer en fejltekst eller null
  kanPlacere(type, f) {
    if (!f) return 'Uden for kortet';
    if (f.type !== 'græs' || f.blok) return 'Der skal være fladt græs';
    if (f.optaget || !f.gåbar) return 'Feltet er optaget';
    if (!this.verden.taage.erUdforsket(...Object.values(hexTilVerden(f.q, f.r)))) return 'Du har ikke udforsket stedet';
    if (this.verden.lejrFelter?.some((l) => hexAfstand(l, f) < 2)) return 'For tæt på en creep-lejr';
    return null;
  }

  // Betal og lav en byggeplads. Returnerer [bygning, null] eller [null, fejl]
  placér(type, f) {
    const fejl = this.kanPlacere(type, f) ?? this.økonomi.mangler(BYGNINGER[type].pris);
    if (fejl) return [null, fejl];
    this.økonomi.betal(BYGNINGER[type].pris);
    f.optaget = true; f.gåbar = false;
    this.verden.natur?.ryd(f);
    const p = hexTilVerden(f.q, f.r);
    const b = new Bygning(this, type, { x: p.x, z: p.z, felter: [f], rot: (Math.floor(Math.random() * 6) * Math.PI) / 3 });
    this.bygninger.push(b);
    return [b, null];
  }

  // Nærmeste færdige bygning, der tager imod en ressource
  afleveringssted(type, x, z) {
    let bedst = null, bd = Infinity;
    for (const b of this.bygninger) {
      if (!b.færdig || !b.data.aflevering?.includes(type)) continue;
      const d = Math.hypot(b.x - x, b.z - z);
      if (d < bd) { bd = d; bedst = b; }
    }
    return bedst;
  }

  get ledige() { return this.arbejdere.filter((a) => !a.død && a.tilstand === 'ledig'); }

  // Egen soldat, arbejder eller bygning tæt på et skærmpunkt
  find(px, py, skærm) {
    let bedst = null, bd = 44;
    for (const s of this.soldater) {
      if (s.død) continue;
      const p = skærm(s.x, 1.1, s.z), d = Math.hypot(p.x - px, p.y - py);
      if (d < bd) { bd = d; bedst = { type: 'soldat', ting: s }; }
    }
    for (const a of this.arbejdere) {
      if (a.død || !a.rod.visible) continue;
      const s = skærm(a.x, 1.1, a.z), d = Math.hypot(s.x - px, s.y - py);
      if (d < bd) { bd = d; bedst = { type: 'arbejder', ting: a }; }
    }
    if (bedst) return bedst;
    bd = Infinity;
    for (const b of this.bygninger) {
      const s = skærm(b.x, b.felter.length > 1 ? 9 : 4, b.z), d = Math.hypot(s.x - px, s.y - py);
      if (d < (b.felter.length > 1 ? 95 : 58) && d < bd) { bd = d; bedst = { type: 'bygning', ting: b }; }
    }
    return bedst;
  }

  opdater(dt) {
    for (const b of this.bygninger) b.opdater(dt);
    for (const a of this.arbejdere) a.opdater(dt);
    for (const s of this.soldater) s.opdater(dt);
    // Døde figurer der er sunket i jorden, fjernes fra listerne
    if (this.arbejdere.some((a) => a.fjernet)) this.arbejdere = this.arbejdere.filter((a) => !a.fjernet);
    if (this.soldater.some((s) => s.fjernet)) this.soldater = this.soldater.filter((s) => !s.fjernet);
  }

  get hær() { return this.soldater.filter((s) => !s.død); }
}

