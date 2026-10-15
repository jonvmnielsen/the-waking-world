// Ascension ved level 10 (GDD 6.3, CLAUDE.md afsnit 6): tre slags stier. Hver helt har sin egen udgave
// af dem (stiheltdata.js: navn, titel, passiv og to evner); her står grundstien (Orc Warrior).
// Den sti der passer til spillestilen (spillerstil.js) er gratis; de andre koster ressourcer,
// fordi de går imod heltens hidtidige udvikling. Valget kan ikke fortrydes.
// Efter Ascension kan helten stige til level 20, og stien giver en passiv evne og to nye evner (level 10 og 14).

import { HELT_STIER } from './stiheltdata.js';
import { HELTE } from './heltedata.js';

export const ASCENSION_LEVEL = 10;
export const STI_OPLÅS = [10, 14];
export const MOD_NATUREN = { guld: 300, sten: 150 };   // pris for en sti der ikke passer

export const STIER = {
  warlord: {
    navn: 'Warlord', titel: 'Orc Warlord', ikon: '🚩', stil: 'overlevelse', farve: 0xffc94a,
    motto: 'Those who endure come to lead.',
    tekst: 'A commander. Your warriors fight harder and longer at your side.',
    passer: 'Fits those who keep their warriors alive.',
    egenskaber: { str: 5, agi: 3 },
    passiv: { navn: "Warlord's Presence", tekst: 'Soldiers near you deal +15% damage and gain +2 armor (+25% / +3 from level 16). You gain +2 armor.' },
    evner: ['rally', 'holdLinjen'],
  },
  avatar: {
    navn: 'Avatar', titel: 'Storm Avatar', ikon: '⚡', stil: 'kaos', farve: 0x7cc8ff,
    motto: 'The land itself answers.',
    tekst: 'A channel for the storm. Lightning follows every blow.',
    passer: 'Fits those who fight everywhere at once — or keep every path open.',
    egenskaber: { int: 6, agi: 2 },
    passiv: { navn: 'Stormcaller', tekst: 'Each blow has a 25% chance to call lightning on the target and two enemies near it. +50% mana regeneration.' },
    evner: ['kædelyn', 'storm'],
  },
  bloodbound: {
    navn: 'Bloodbound', titel: 'Bloodbound Orc', ikon: '🩸', stil: 'aggression', farve: 0xff3b30,
    motto: 'Every wound is a weapon.',
    tekst: 'High risk, high reward. The closer to death, the deadlier you are.',
    passer: 'Fits those who always press forward.',
    egenskaber: { str: 6, agi: 2 },
    passiv: { navn: 'Blood Pact', tekst: 'Up to +60% damage as your health drops, and 10% life steal. −2 armor and half health regeneration.' },
    evner: ['spring', 'blodraseri'],
  },
};

// Stiernes evner og heltenes egne udgaver af stierne (M14e)
export { STI_EVNER } from './stievnedata.js';

// Stien som den ser ud for en bestemt helt: grundstien med heltens navn, titel, proc og evner lagt ovenpå
export function stiData(heltType, id) {
  const grund = STIER[id], egen = HELT_STIER[heltType]?.[id] ?? {};
  const d = { ...grund, ...egen };
  if (egen.proc) d.passiv = { navn: egen.proc.navn, tekst: egen.proc.tekst };
  // Egenskaber: stiens egen + heltens hovedegenskab (en Paladin får ikke mest INT, fordi grundstien gør)
  const p = HELTE[heltType]?.primær ?? 'str', ekstra = { warlord: ['str', 3, 5], avatar: ['int', 4, 4], bloodbound: ['str', 2, 6] }[id];
  d.egenskaber = { [ekstra[0]]: ekstra[1] };
  d.egenskaber[p] = (d.egenskaber[p] ?? 0) + ekstra[2];
  if (egen.passivNavn) d.passiv = { ...grund.passiv, navn: egen.passivNavn };
  d.proc = egen.proc ?? (id === 'avatar' ? { form: 'kæde', farve: 0xbfe4ff } : null);
  return d;
}

// Hvilken sti passer til spillestilen? Blandet stil passer til Avatar.
export function stiForStil(dominant) {
  if (dominant === 'overlevelse') return 'warlord';
  if (dominant === 'aggression') return 'bloodbound';
  return 'avatar';
}
