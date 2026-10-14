// Enhedernes stemmer (M14, GDD 17b søjle 4). Lytter til valg, ordrer, prik, nye enheder og færdige
// bygninger og lader den rigtige enhed sige noget med sine egne ord (stemmedata.js). Alt sker kun, når
// spilleren selv gør noget, så skærmen ikke fyldes (Jon: for meget tekst). Prikker man til den samme enhed
// mange gange i træk, bliver den irriteret — og siger noget nyt hver gang (som i WC3).
import { bus } from './events.js';
import { STEMMER } from './stemmedata.js';
import { STEMMER as HELTE_STEMMER } from './heltreplikdata.js';
import { SPILLER } from './racer.js';

const PRIK_PAUSE = 1.6;   // sekunder mellem tryk, der stadig tæller som "i træk"
const IRRITERET_FRA = 4;  // det fjerde tryk i træk giver et irriteret svar

export class Stemmer {
  constructor(spil) {
    this.spil = spil;
    this.prik = { enhed: null, n: 0, t: -99 };
    this.sidst = {};   // slags -> tid
    this.næste = new Map();   // stemmesæt -> indeks i rækken af irriterede svar
    bus.on('valg', (v) => this.vedValg(v));
    bus.on('prik', ({ enhed }) => this.prikket(enhed));
    bus.on('ordre', ({ enheder, type }) => this.vedOrdre(enheder, type));
    bus.on('soldat_ny', ({ soldat }) => this.sig(soldat, 'klar', 6));
    bus.on('arbejder_ny', ({ arbejder }) => this.sig(arbejder, 'klar', 6));
    bus.on('bygning_færdig', ({ bygning }) => this.færdig(bygning));
  }

  get nu() { return this.spil.ur?.tid ?? 0; }

  // Stemmesættet for en enhed (helten har sit eget i heltreplikdata.js)
  sæt(u) {
    if (!u || u.død) return null;
    if (u === this.spil.helt) return HELTE_STEMMER[u.type] ?? null;
    const race = STEMMER[SPILLER.id] ?? STEMMER.tide;
    if (u.vet) return race[u.type] ?? STEMMER.lejesvende[u.type] ?? null;   // soldater og lejesvende
    if (u.kommandoHøst) return race.arbejder;
    return null;
  }

  vedValg(v) {
    const u = Array.isArray(v) ? v[0] : v;
    if (!u?.rod || u === this.spil.helt) { if (u === this.spil.helt) this.tæl(u); return; }   // heltens valg-replik: heltreplik.js
    if (this.tæl(u)) return;
    this.sig(u, 'valgt');
  }

  prikket(u) {
    if (this.tæl(u)) return;
    this.sig(u, 'valgt', u === this.spil.helt ? 2.5 : 1.2);
  }

  // Tæller tryk i træk på samme enhed; giver et irriteret svar og returnerer true fra det fjerde
  tæl(u) {
    const p = this.prik, nu = this.nu;
    p.n = p.enhed === u && nu - p.t < PRIK_PAUSE ? p.n + 1 : 1;
    p.enhed = u; p.t = nu;
    if (p.n < IRRITERET_FRA) return false;
    const st = this.sæt(u), l = st?.irriteret;
    if (!l?.length) return false;
    const i = this.næste.get(l) ?? 0;
    this.næste.set(l, i + 1);
    bus.emit('replik', { enhed: u, tekst: l[i % l.length] });
    return true;
  }

  vedOrdre(enheder, type) {
    const u = enheder?.find((e) => !e.død && (e !== this.spil.helt || type === 'gå'));   // heltens angrebsreplik: heltreplik.js
    if (!u) return;
    const helt = u === this.spil.helt;
    if (Math.random() < (helt ? 0.25 : type === 'angrib' ? 0.7 : 0.45)) this.sig(u, type, helt ? 6 : 2.5);
  }

  // Når en bygning står færdig, siger den nærmeste arbejder det
  færdig(b) {
    const a = this.spil.base.arbejdere.filter((x) => !x.død).sort((p, q) => Math.hypot(p.x - b.x, p.z - b.z) - Math.hypot(q.x - b.x, q.z - b.z))[0];
    if (a && Math.hypot(a.x - b.x, a.z - b.z) < 16) this.sig(a, 'færdig', 3);
  }

  // Sig en linje af en slags — højst hver 'pause' sekunder for samme slags
  sig(u, slags, pause = 0) {
    const l = this.sæt(u)?.[slags];
    if (!l?.length || this.nu - (this.sidst[slags] ?? -99) < pause) return;
    this.sidst[slags] = this.nu;
    bus.emit('replik', { enhed: u, tekst: l[Math.floor(Math.random() * l.length)] });
  }
}
