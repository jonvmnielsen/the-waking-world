// M7 "Fremskridt": Ascension, forskning og opgraderinger, og upkeep — sat op ét sted, så main.js forbliver kort.
import { AscensionHud } from './ascensionhud.js';
import { Udvikling } from './udvikling.js';
import { UpkeepVisning } from './udviklinghud.js';

// Kaldes før gem/gendan og før kommandopanelet bygges (forskningen skal findes, når bygningerne gendannes)
export function lavUdvikling(spil) {
  spil.udvikling = new Udvikling(spil);
  spil.verden.udvikling = spil.udvikling;
}

// Skærmdelene; opdater() kaldes hver frame
export function lavFremskridtsHud(spil) {
  const asc = new AscensionHud(spil);
  const upkeep = new UpkeepVisning(spil);
  return { opdater() { asc.opdater(); upkeep.opdater(); } };
}
