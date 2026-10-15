// Sætter de nyere skærmdele op ét sted, så main.js forbliver kort: M7 (Ascension, forskning, upkeep),
// skærmens opbygning efter valg og indstillinger (skaerm.js) og angrebsadvarsler (advarsel.js).
import { AscensionHud } from './ascensionhud.js';
import { Udvikling } from './udvikling.js';
import { UpkeepVisning } from './udviklinghud.js';
import { Skærm } from './skaerm.js';
import { Advarsel } from './advarsel.js';
import { lavKonstruktioner } from './konstruktion.js';
import { Bedrifter } from './bedrifter.js';
import { HeltPortræt } from './heltportraet.js';
import { Ultimatum } from './ultimatum.js';
import { Ånder } from './aander.js';
import { Alter } from './alter.js';
import { TræVækst } from './traevaekst.js';
import { bus } from './events.js';
import { KampFølelse } from './kampfoelelse.js';

// Kaldes før gem/gendan og før kommandopanelet bygges (forskningen skal findes, når bygningerne gendannes)
export function lavUdvikling(spil) {
  spil.udvikling = new Udvikling(spil);
  spil.verden.udvikling = spil.udvikling;
  spil.konstruktioner = lavKonstruktioner(spil);   // ruiner og lejrtelte man kan angribe
  spil.bedrifter = new Bedrifter(spil);              // heltens bedrifter og tilnavne
  spil.ånder = new Ånder(spil);                      // ånder fra faldne fjender (M14d)
  spil.alter = new Alter(spil);                      // genoplivning og velsignelser ved alteret
  spil.træVækst = new TræVækst(spil);                // fældede træer gror igen
}

// Skærmdelene; opdater() kaldes hver frame
export function lavFremskridtsHud(spil, overlay) {
  spil.skærm = new Skærm(spil);
  spil.kampFølelse = new KampFølelse(spil);   // blink, gnister, stop og rystelser i kampen (M14f)
  bus.on('ryst', ({ styrke, tid }) => spil.rig.ryst(styrke, tid));   // kameraet ryster (store slag, evner)
  spil.advarsel = new Advarsel(spil, overlay);
  const asc = new AscensionHud(spil);
  const upkeep = new UpkeepVisning(spil);
  const portræt = new HeltPortræt(spil);
  spil.ultimatum = new Ultimatum(spil);   // level-6-øjeblikket og ultimatets kraft (M14b)
  return { opdater() { asc.opdater(); upkeep.opdater(); portræt.tegn(); } };
}
