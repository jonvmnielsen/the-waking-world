// Sætter spillerens økonomi og base op: Storlejren, fem arbejdere og ressourcekilderne.
import { Økonomi, Kilder } from './okonomi.js';
import { Base } from './base.js';
import { bus } from './events.js';

const HELT_FORSYNING = 5;
const START_OPGAVER = ['guld', 'guld', 'guld', 'træ', 'sten'];

export function startBase(verden, { storlejr, steder, verdensObj }) {
  const økonomi = new Økonomi();
  verden.økonomi = økonomi;
  const kilder = new Kilder(verden.kort, steder);
  const base = new Base(verden, økonomi, kilder);
  const lejr = base.startBygning(storlejr);
  økonomi.forsyning = HELT_FORSYNING;

  // Fem arbejdere går straks i gang
  START_OPGAVER.forEach((opgave, i) => {
    const a = base.nyArbejder(lejr.x - 4 + i * 2, lejr.z + lejr.radius + 2, null);
    a.høstNærmeste(opgave);
  });
  økonomi.forsyning += START_OPGAVER.length;
  // Træning af nye arbejdere tæller allerede forsyning ved bestilling (bygninger.js)

  // Tømt skov bliver til stubbe
  bus.on('kilde_tom', ({ type, kilde }) => { if (type === 'træ') verdensObj.fæld(kilde); });
  return { økonomi, kilder, base };
}
