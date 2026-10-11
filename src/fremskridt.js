// Sætter de nyere skærmdele op ét sted, så main.js forbliver kort: M7 (Ascension, forskning, upkeep),
// skærmens opbygning efter valg og indstillinger (skaerm.js) og angrebsadvarsler (advarsel.js).
import { AscensionHud } from './ascensionhud.js';
import { Udvikling } from './udvikling.js';
import { UpkeepVisning } from './udviklinghud.js';
import { Skærm } from './skaerm.js';
import { Advarsel } from './advarsel.js';

// Kaldes før gem/gendan og før kommandopanelet bygges (forskningen skal findes, når bygningerne gendannes)
export function lavUdvikling(spil) {
  spil.udvikling = new Udvikling(spil);
  spil.verden.udvikling = spil.udvikling;
}

// Skærmdelene; opdater() kaldes hver frame
export function lavFremskridtsHud(spil, overlay) {
  spil.skærm = new Skærm(spil);
  spil.advarsel = new Advarsel(spil, overlay);
  const asc = new AscensionHud(spil);
  const upkeep = new UpkeepVisning(spil);
  return { opdater() { asc.opdater(); upkeep.opdater(); } };
}
