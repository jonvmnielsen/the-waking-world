// Kroen (neutral bygning midt på kortet, GDD 4.3): her kan man hyre lejesoldater for guld.
// De kommer straks og kæmper for spilleren som andre soldater (og kan blive veteraner).
import { ENHEDER } from './bygningsdata.js';
import { ikon } from './ikoner.js';
import { bus } from './events.js';

const LEJESOLDATER = ['slagsbror', 'skytte', 'lejesoldat'];

export function kroVarer(spil, sted) {
  const øko = spil.økonomi;
  return LEJESOLDATER.map((type) => {
    const e = ENHEDER[type];
    return {
      ikon: ikon(e.ikon), navn: e.navn, farve: '#e9d6a8', tekst: `${e.tekst} Supply ${e.forsyning}.`, pris: e.pris.guld,
      kan: () => !øko.mangler(e.pris, e.forsyning),
      køb: () => {
        const fejl = øko.mangler(e.pris, e.forsyning);
        if (fejl) return bus.emit('besked', fejl);
        øko.betal(e.pris);
        øko.forsyning += e.forsyning;
        const v = Math.random() * Math.PI * 2;
        spil.base.nySoldat(type, sted.x + Math.cos(v) * 8, sted.z + Math.sin(v) * 8, null);
        bus.emit('besked', `A ${e.navn} joins your army`);
      },
    };
  });
}
