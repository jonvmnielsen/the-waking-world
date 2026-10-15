// Racerne (Jon: man vælger selv sin race; AI-modstanderen får en tilfældig). Hver race har sine navne,
// sin hovedfarve, sine soldater, sin arbejder og sin helt. Bygningerne er KayKits hex-bygninger i racens
// farve (bygningsdata.js); The Architects har egne valg (vindmølle som gård osv.).
// Er begge spillere samme race, får modstanderen rødt.
import { AKTIVT_KORT } from './kortvalg.js';

export const RACER = {
  tide: {
    id: 'tide', navn: 'The Tide', kort: 'Orcs of the storm coast — tough, wild and hard to stop.',
    farve: 'green', orkhud: true, kriger: 'grunt', skytte: 'spydkaster',
    arbejder: 'Worker', bygninger: {}, modeller: {}, grene: {}, forskning: {},
    nat: { navn: 'Children of the Storm', tekst: 'your hero and soldiers see as far as by day and move 10% faster.', syn: true, fart: 0.1 },
  },
  arkitekter: {
    id: 'arkitekter', navn: 'The Architects', kort: 'Builders of order — stone halls, knights and crossbows.',
    farve: 'blue', orkhud: false, kriger: 'fodsoldat', skytte: 'armbrøst',
    arbejder: 'Peasant',
    bygninger: { storlejr: 'Town Hall', borg: 'Keep', hytte: 'Farm', savværk: 'Lumber Yard', tårn: 'Scout Tower', marked: 'Market Square', alter: 'Chapel of Kings', smedje: 'Blacksmith', krigerlejr: 'Barracks' },
    korte: { hytte: 'Farm', tårn: 'Tower', marked: 'Market', alter: 'Chapel' },
    modeller: { hytte: 'building_windmill', savværk: 'building_watermill' },
    tekster: { hytte: '+10 supply, so you can feed more peasants and soldiers.', krigerlejr: 'Trains footmen and crossbowmen. Veteran footmen are specialised here.', alter: 'Your hero can only be revived here. Spirits your hero carries home are offered here for blessings.' },
    grene: { ironhide: 'Bulwark', ravager: 'Lancer', berserker: 'Zealot' },
    forskning: { våben: 'Tempered Blades', spyd: 'Steel Bolts', rustning: 'Plate Armor' },
    nat: { navn: 'Lamplight', tekst: 'your towers are lit — +25% damage and +4 range.', tårnSkade: 0.25, tårnRække: 4 },
  },
};
export const RACE_IDER = Object.keys(RACER);

export const SPILLER = RACER[AKTIVT_KORT.race] ?? RACER.tide;
export const FJENDE = RACER[AKTIVT_KORT.fjendeRace] ?? RACER.tide;
// Jon: man spiller altid blå, og modstanderen (den anden spiller) er altid rød (holdfarve.js)
export const SPILLER_FARVE = 'blue';
export const FJENDE_FARVE = 'red';

// En KayKit-sti i en anden holdfarve (…/green/building_x_green → …/blue/building_x_blue)
export const iFarve = (sti, farve) => sti.replace('/green/', `/${farve}/`).replace(/_green$/, `_${farve}`);
export const HOLD_FARVE = { green: 0x5dff6a, blue: 0x3a8cff, red: 0xff3a2a };

