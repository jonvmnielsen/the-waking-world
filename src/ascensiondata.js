// Ascension ved level 10 (GDD 6.3, CLAUDE.md afsnit 6): tre stier for Orc Warrior.
// Den sti der passer til spillestilen (spillerstil.js) er gratis; de andre koster ressourcer,
// fordi de går imod heltens hidtidige udvikling. Valget kan ikke fortrydes.
// Efter Ascension kan helten stige til level 20, og stien giver en passiv evne og to nye evner (level 10 og 14).

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

// Stiernes evner (bruges via Evner, slot 3 og 4)
export const STI_EVNER = {
  rally: { navn: 'Rally', mana: 75, cd: 35, ikon: '🚩', tekst: 'You and soldiers near you heal 25% health; soldiers attack 35% faster for 8 seconds.' },
  holdLinjen: { navn: 'Hold the Line', mana: 110, cd: 50, ikon: '🛡️', tekst: 'You and soldiers near you take 40% less damage for 8 seconds.' },
  kædelyn: { navn: 'Chain Lightning', mana: 80, cd: 10, ikon: '⚡', tekst: '140 damage to the nearest enemy, jumping to four more.' },
  storm: { navn: 'Tempest', mana: 150, cd: 45, ikon: '🌪️', tekst: 'A storm rages around you for 6 seconds: 45 damage per second to every enemy close by.' },
  spring: { navn: 'Crimson Leap', mana: 0, cd: 12, ikon: '🩸', tekst: 'Costs 12% health. Leap onto an enemy and strike everything where you land for 2× damage.' },
  blodraseri: { navn: 'Bloodrage', mana: 0, cd: 40, ikon: '🔥', tekst: 'Costs 20% health. For 10 seconds: +60% attack speed and +30% life steal, but you take 20% more damage.' },
};

// Hvilken sti passer til spillestilen? Blandet stil passer til Avatar.
export function stiForStil(dominant) {
  if (dominant === 'overlevelse') return 'warlord';
  if (dominant === 'aggression') return 'bloodbound';
  return 'avatar';
}
