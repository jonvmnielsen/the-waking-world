// Heltens replikker (M9: mere lore og personlighed). Korte ork-sætninger over helten, når noget vigtigt
// sker. Højst én hvert 15. sekund, så de ikke drukner. Teksten er engelsk; orker taler kort (AGENT_LORE.md).
import { bus } from './events.js';

const REPLIKKER = {
  level: ['Stronger.', 'The storm grows.', 'More. Always more.', 'Good. Again.'],
  boss: ['It fell. They all fall.', 'A name for the songs.', 'Big. Not big enough.'],
  ekko: ['It whispers… a name?', 'Cold. Like a memory.', 'You do not belong to them.'],
  erevoss: ['Quiet here. Too quiet.', 'Grey grass. Grey sky. Grey ghosts.'],
  opvågning: ['Something wakes. Let it come.', 'The stones burn. Good.'],
  genopliv: ['Not yet.', 'The Tide returns.'],
  ascension: ['I am more than I was.'],
};

export class HeltReplikker {
  constructor(spil) {
    this.spil = spil;
    this.sidst = -99;
    this.brugt = new Set();
    const h = () => spil.helt;
    bus.on('level_op', ({ level }) => { if (level > 2) this.sig('level'); });
    bus.on('creep_død', ({ creep, kilde }) => { if (creep.boss && (kilde === h() || kilde?.side === 'egen')) this.sig('boss', true); });
    bus.on('helt_genoplivet', () => this.sig('genopliv', true));
    bus.on('verdenstilstand', ({ fase }) => { if (fase.id === 'opvågning') this.sig('opvågning', true); });
    bus.on('ascension', () => this.sig('ascension', true));
    bus.on('flydetekst', ({ tekst }) => { if (tekst === 'Echo caught' && !this.brugt.has('ekko')) { this.brugt.add('ekko'); setTimeout(() => this.sig('ekko', true), 900); } });
  }

  sig(slags, vigtig = false) {
    const nu = this.spil.ur?.tid ?? 0, h = this.spil.helt;
    if (h.død || (!vigtig && nu - this.sidst < 15)) return;
    this.sidst = nu;
    const l = REPLIKKER[slags];
    bus.emit('replik', { enhed: h, tekst: l[Math.floor(Math.random() * l.length)] });
  }

  // Kaldes jævnligt: første gang helten nærmer sig Erevoss
  opdater() {
    const m = this.spil.memory?.hal, h = this.spil.helt;
    if (!m || this.brugt.has('erevoss') || Math.hypot(m.x - h.x, m.z - h.z) > 50) return;
    this.brugt.add('erevoss');
    this.sig('erevoss', true);
  }
}
