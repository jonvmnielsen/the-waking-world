// Sætter de nyere skærmdele op ét sted, så main.js forbliver kort: M7 (Ascension, forskning, upkeep),
// skærmens opbygning efter valg og indstillinger (skaerm.js) og angrebsadvarsler (advarsel.js).
import { AscensionHud } from './ascensionhud.js';
import { Udvikling } from './udvikling.js';
import { UpkeepVisning } from './udviklinghud.js';
import { Skærm } from './skaerm.js';
import { Advarsel } from './advarsel.js';
import { lavKonstruktioner } from './konstruktion.js';
import { Bedrifter } from './bedrifter.js';

// Kaldes før gem/gendan og før kommandopanelet bygges (forskningen skal findes, når bygningerne gendannes)
export function lavUdvikling(spil) {
  spil.udvikling = new Udvikling(spil);
  spil.verden.udvikling = spil.udvikling;
  spil.konstruktioner = lavKonstruktioner(spil);   // ruiner og lejrtelte man kan angribe
  spil.bedrifter = new Bedrifter(spil);              // heltens bedrifter og tilnavne
}

// Skærmdelene; opdater() kaldes hver frame
export function lavFremskridtsHud(spil, overlay) {
  spil.skærm = new Skærm(spil);
  spil.advarsel = new Advarsel(spil, overlay);
  const asc = new AscensionHud(spil);
  const upkeep = new UpkeepVisning(spil);
  return { opdater() { asc.opdater(); upkeep.opdater(); } };
}
