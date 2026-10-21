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
    byg: { navn: 'Driftwood', tekst: 'A lone worker builds 25% faster, but extra workers help only half as much. Your buildings mend themselves when not under attack.', første: 1.25, ekstra: 0.5, regen: 0.01 },
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
    byg: { navn: 'Many Hands', tekst: 'Every extra peasant on a site builds at full speed and a little more. Your buildings are stone: 25% more health.', ekstra: 1.1, hp: 1.25 },
    nat: { navn: 'Lamplight', tekst: 'your towers are lit — +25% damage and +4 range.', tårnSkade: 0.25, tårnRække: 4 },
  },
  // The Dreaming (M15, Jon: egne figurer fra vores generator, game-assets D-015): skovens drømmefolk.
  // Bygningerne er levende træer og sten (forge-lowpoly/dreamb_*), og de gamle træer kan gå (racebyg.js).
  dreaming: {
    id: 'dreaming', navn: 'The Dreaming', kort: 'Folk of the dreaming wood — trees that walk and lanterns that think.',
    farve: 'purple', orkhud: false, kriger: 'tornvagt', skytte: 'lygtemand',
    arbejder: 'Sprigling', arbejderModel: 'units/dream_sprigling', arbejderVåben: null,
    bygninger: { storlejr: 'Tree of Dreams', borg: 'Tree of Waking', hytte: 'Moonwell', savværk: 'Hollow of Gathering', tårn: 'Thorn Spire', marked: 'Moonmarket', alter: 'Moon Altar', smedje: 'Ancient of Lore', krigerlejr: 'Ancient of War' },
    korte: { hytte: 'Moonwell', savværk: 'Hollow', tårn: 'Spire', marked: 'Market', alter: 'Altar', smedje: 'Lore', krigerlejr: 'War' },
    modeller: { storlejr: 'forge-lowpoly/dreamb_dream_hall', borg: 'forge-lowpoly/dreamb_dream_hall', hytte: 'forge-lowpoly/dreamb_moonwell', savværk: 'forge-lowpoly/dreamb_hollow', tårn: 'forge-lowpoly/dreamb_thorn_spire', marked: 'forge-lowpoly/dreamb_moonmarket', alter: 'forge-lowpoly/dreamb_moon_altar', smedje: 'forge-lowpoly/dreamb_ancient_lore', krigerlejr: 'forge-lowpoly/dreamb_ancient_war' },
    skalaer: { storlejr: 1.05, borg: 0.95, hytte: 1.1, savværk: 0.95, tårn: 1.0, marked: 0.9, alter: 1.1, smedje: 0.9, krigerlejr: 0.9 },
    tekster: {
      storlejr: 'Your great tree. Sings Spriglings awake and receives all resources.',
      hytte: '+10 supply. Moonlit water feeds the Dreaming.',
      krigerlejr: 'An Ancient that wakes Thornguards and Lanternkin. Veteran Thornguards are specialised here. Can uproot and walk.',
      smedje: 'An Ancient that remembers better thorns, lanterns and bark. Can uproot and walk.',
      alter: 'Your hero can only be revived here. Spirits your hero carries home are offered here for blessings.',
    },
    grene: { ironhide: 'Barkhide', ravager: 'Thornrage', berserker: 'Wildgrowth' },
    forskning: { våben: 'Sharpened Thorns', spyd: 'Brighter Lanterns', rustning: 'Ironbark' },
    byg: { navn: 'Rooted', tekst: 'Your trees and Ancients can uproot and walk to a new place. Spriglings sing wood out of the trees without felling them.', vandrer: ['storlejr', 'borg', 'krigerlejr', 'smedje'], sang: true },
    nat: { navn: 'Dreamtime', tekst: 'your hero and soldiers see as far as by day and heal 1% a second.', syn: true, regen: 0.01 },
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

