// Heltens replikker (Jon: meget mere personlighed). Hver helt har sin egen stemme (heltreplikdata.js):
// når man trykker på helten, giver en angrebsordre, er tæt på at dø, fælder en boss eller modstanderens helt,
// finder noget legendarisk eller får et nyt tilnavn. Almindelige replikker højst hvert 12. sekund og
// trykke-replikker sjældnere, så skærmen ikke fyldes (Jon: for meget tekst).
import { bus } from './events.js';
import { STEMMER, RACE_STEMMER } from './heltreplikdata.js';
import { SPILLER } from './racer.js';

export class HeltReplikker {
  constructor(spil) {
    this.spil = spil;
    this.sidst = -99;
    this.sidstValgt = -99;
    this.sidstLavt = -99;
    this.brugt = new Set();
    this.forrige = {};
    const h = () => spil.helt;
    bus.on('valg', (v) => { if (v === h()) this.valgt(); });
    bus.on('helt_ordre', ({ type }) => { if (type === 'angrib' && Math.random() < 0.35) this.sig('angrib'); });
    bus.on('level_op', ({ level }) => { if (level > 2 && level !== 6) this.sig('level'); });   // level 6: ultimatets replik (ultimatum.js)
    bus.on('creep_død', ({ creep, kilde }) => {
      const egen = kilde === h() || kilde?.side === 'egen';
      if (creep.erHelt && egen) this.sig('fjendehelt', true);
      else if (creep.boss && egen) this.sig('boss', true);
    });
    bus.on('helt_genoplivet', () => this.sig('genopliv', true));
    bus.on('verdenstilstand', ({ fase }) => { if (fase.id === 'opvågning') this.sig('opvågning', true); });
    bus.on('ascension', () => this.sig('ascension', true));
    bus.on('item_samlet', ({ sj }) => { if (sj === 'legendarisk') this.sig('legendarisk', true); });
    bus.on('epitet', () => setTimeout(() => this.sig('epitet', true), 1200));
    bus.on('flydetekst', ({ tekst }) => { if (tekst === 'Echo caught' && !this.brugt.has('ekko')) { this.brugt.add('ekko'); setTimeout(() => this.sig('ekko', true), 900); } });
  }

  get nu() { return this.spil.ur?.tid ?? 0; }

  linjer(slags) {
    return STEMMER[this.spil.helt.type]?.[slags] ?? RACE_STEMMER[SPILLER.id]?.[slags] ?? RACE_STEMMER.tide[slags];
  }

  // Trykker man på helten, svarer den (højst hvert 20. sekund)
  valgt() {
    if (this.nu - this.sidstValgt < 20) return;
    this.sidstValgt = this.nu;
    this.sig('valgt');
  }

  sig(slags, vigtig = false) {
    const h = this.spil.helt, l = this.linjer(slags);
    if (!l?.length || h.død || (!vigtig && this.nu - this.sidst < 12)) return;
    this.sidst = this.nu;
    // Aldrig den samme replik to gange i træk
    let i = Math.floor(Math.random() * l.length);
    if (l.length > 1 && i === this.forrige[slags]) i = (i + 1) % l.length;
    this.forrige[slags] = i;
    bus.emit('replik', { enhed: h, tekst: l[i] });
  }

  // Kaldes jævnligt: første gang helten nærmer sig Erevoss, og når livet er lavt midt i kampen
  opdater() {
    const m = this.spil.memory?.hal, h = this.spil.helt;
    if (!h.død && h.iKamp && h.hp < h.maxHp * 0.25 && this.nu - this.sidstLavt > 45) { this.sidstLavt = this.nu; this.sig('lavt', true); }
    if (!m || this.brugt.has('erevoss') || Math.hypot(m.x - h.x, m.z - h.z) > 50) return;
    this.brugt.add('erevoss');
    this.sig('erevoss', true);
  }
}
