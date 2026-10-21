// AI-modstanderen (GDD 11, Jon: en af standardracerne, trukket tilfældigt — racer.js). Den bygger, træner,
// samler guld med sine arbejdere og angriber i bølger. Bygningerne er racens egne i modstanderens holdfarve.
import { bygningerFor } from './bygningsdata.js';
import { FJENDE, FJENDE_FARVE } from './racer.js';
import { CREEP_TYPER } from './creepdata.js';

const R = bygningerFor(FJENDE, FJENDE_FARVE);
const byg = (rolle, ekstra) => ({ navn: R[rolle].navn, model: R[rolle].model, skala: R[rolle].skala, ...ekstra });

// Rollerne: hal (hovedbygning), krypt (træner soldater), spir (tårn der skyder), hytte (forsyning)
export const FJENDE_BYGNINGER = {
  hal: byg('storlejr', { hp: 2600, rustning: 5, radius: 5.5, højde: 8, syn: 26, stor: true }),
  krypt: byg('krigerlejr', { hp: 1300, rustning: 3, radius: 3.2, højde: 4, træner: true, pris: 220 }),
  spir: byg('tårn', { hp: 950, rustning: 4, radius: 3, højde: 6, pris: 160, angreb: { rækkevidde: 17, skade: [20, 28], tid: 1.6 } }),
  hytte: byg('hytte', { hp: 700, rustning: 2, radius: 3, højde: 4, pris: 100 }),
};

// Rækkefølgen bygningerne får pladserne i (fjendeplads.js). De første står fra start.
export const LAYOUT = ['krypt', 'spir', 'hytte', 'hytte', 'spir', 'krypt', 'spir', 'spir'];
export const FRA_START = 4;

// Hæren: racens nærkæmper og skytte (creepdata.js: m_<type>); pris i modstanderens guld og træningstid i sekunder
export const FJENDE_ENHEDER = {
  [`m_${FJENDE.kriger}`]: { pris: 90, tid: 14, vægt: 3 },
  [`m_${FJENDE.skytte}`]: { pris: 90, tid: 15, vægt: 2 },
};
export const FJENDE_ARBEJDER = 'm_arbejder';
// Modstanderens arbejder er racens egen (The Dreaming: en Sprigling uden økse)
if (FJENDE.arbejderModel) Object.assign(CREEP_TYPER.m_arbejder, { navn: FJENDE.arbejder, model: FJENDE.arbejderModel.replace('units/', ''), skjul: [] });
export const ARBEJDERE = 5;   // indtægten følger hvor mange arbejdere der lever

// Sværhedsgrader: indtægt pr. sekund (med alle arbejdere), første angreb (min), tid mellem angreb (min), start-level,
// hærens loft, hvor mange der bliver hjemme, og bølgernes størrelse (første bølge + vækst pr. bølge)
export const SVÆRHED = {
  easy: { navn: 'Easy', indtægt: 2.4, førsteAngreb: 10, mellemrum: 4.5, level: 2, loft: 12, hjemme: 1, bølge: [3, 2] },
  normal: { navn: 'Normal', indtægt: 3.4, førsteAngreb: 7, mellemrum: 3.5, level: 3, loft: 22, hjemme: 2, bølge: [5, 2] },
  hard: { navn: 'Hard', indtægt: 4.8, førsteAngreb: 5, mellemrum: 2.5, level: 4, loft: 30, hjemme: 3, bølge: [6, 3] },
};

// Senere bygninger: [minut, type]. Mod en aggressiv spiller kommer tårnene tidligere.
export const BYGGEPLAN = [[4, 'spir'], [8, 'krypt'], [12, 'spir'], [16, 'spir']];

// Soldaternes level stiger med tiden: +1 hvert 4. minut (højst level 12)
export const fjendeLevel = (sværhed, minutter) => Math.min(12, SVÆRHED[sværhed].level + Math.floor(minutter / 4));
