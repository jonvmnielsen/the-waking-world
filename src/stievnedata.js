// Ascension-evnerne (M14e): hver helt har sine egne to evner pr. sti (stiheltdata.js). Evnerne bygges af
// nogle få motorer (stievner.js) med hver sine tal, farver og navne:
//   hær    — helten og soldaterne omkring: heling, angrebsfart (rally) og/eller mindre skade (linje)
//   kæde   — slår den nærmeste fjende og springer videre
//   zone   — et område om helten (eller om målet) i nogle sekunder: skade, lammelse og/eller heling af egne
//   linje  — en stribe ud mod den nærmeste fjende: skade, lammelse og/eller skub
//   nova   — et slag om helten: skade, lammelse, heling af helten
//   spring — hop hen til en fjende (eller væk fra den) og slå
//   raseri — betal liv for angrebsfart og livsstjæl, men tag mere skade
//   mærk   — alle fjender omkring tager 50 % mere skade (som Hunter's Mark)
// Tal er grundværdier; heltens evnestyrke ganges på skade og heling.

export const STI_EVNER = {
  // --- Warchief ---
  rally: { navn: 'Rally', mana: 75, cd: 35, ikon: '🚩', motor: 'hær', heal: 0.25, rally: 8, farve: 0xffc94a, tekst: 'You and soldiers near you heal 25% health; soldiers attack 35% faster for 8 seconds.' },
  holdLinjen: { navn: 'Hold the Line', mana: 110, cd: 50, ikon: '🛡️', motor: 'hær', linje: 8, farve: 0x9fc3ff, tekst: 'You and soldiers near you take 40% less damage for 8 seconds.' },
  fissure: { navn: 'Fissure', mana: 90, cd: 14, ikon: '⛰️', motor: 'linje', skade: 170, længde: 13, bredde: 2.6, lam: 1.2, farve: 0xd9a35a, tekst: 'The ground splits toward the nearest enemy: 170 damage and 1.2 seconds stun along the crack.' },
  aftershock: { navn: 'Aftershock', mana: 150, cd: 45, ikon: '🌋', motor: 'zone', dps: 50, radius: 7, tid: 5, lam: 0.4, farve: 0xd9a35a, tekst: 'For 5 seconds the earth shakes around you: 50 damage a second, and enemies keep stumbling.' },
  spring: { navn: 'Crimson Leap', mana: 0, cd: 12, ikon: '🩸', motor: 'spring', hpPris: 0.12, mult: 2, radius: 4, farve: 0xff3b30, tekst: 'Costs 12% health. Leap onto an enemy and strike everything where you land for 2× damage.' },
  blodraseri: { navn: 'Bloodrage', mana: 0, cd: 40, ikon: '🔥', motor: 'raseri', hpPris: 0.2, tid: 10, fart: 0.6, stjæl: 0.3, taget: 1.2, tekst: 'Costs 20% health. For 10 seconds: +60% attack speed and +30% life steal, but you take 20% more damage.' },
  // --- Stormsinger ---
  healingRain: { navn: 'Healing Rain', mana: 110, cd: 30, ikon: '🌧️', motor: 'zone', dps: 15, heling: 0.04, radius: 9, tid: 8, farve: 0x6fd0ff, tekst: 'Rain falls around you for 8 seconds: you and your soldiers heal 4% a second, enemies take 15 damage a second.' },
  tidalWard: { navn: 'Tidal Ward', mana: 100, cd: 45, ikon: '🌊', motor: 'hær', heal: 0.1, linje: 8, farve: 0x6fd0ff, tekst: 'A wall of sea-spray: you and soldiers near you heal 10% and take 40% less damage for 8 seconds.' },
  kædelyn: { navn: 'Chain Lightning', mana: 80, cd: 10, ikon: '⚡', motor: 'kæde', skade: 140, hop: 5, farve: 0xbfe4ff, tekst: '140 damage to the nearest enemy, jumping to four more.' },
  storm: { navn: 'Tempest', mana: 150, cd: 45, ikon: '🌪️', motor: 'zone', dps: 45, radius: 8, tid: 6, lyn: true, farve: 0x7cc8ff, tekst: 'A storm rages around you for 6 seconds: 45 damage per second to every enemy close by.' },
  ballLightning: { navn: 'Ball Lightning', mana: 60, cd: 14, ikon: '🔵', motor: 'spring', hpPris: 0.1, skade: 200, radius: 5, lam: 0.8, farve: 0x9fd8ff, tekst: 'Costs 10% health. Become lightning, strike down beside an enemy: 200 damage and a short stun around you.' },
  overload: { navn: 'Overload', mana: 0, cd: 40, ikon: '💥', motor: 'raseri', hpPris: 0.15, tid: 10, fart: 0.8, stjæl: 0.2, taget: 1.2, tekst: 'Costs 15% health. For 10 seconds: +80% attack speed and +20% life steal, but you take 20% more damage.' },
  // --- Wildtrack ---
  callOfThePack: { navn: 'Call of the Pack', mana: 80, cd: 35, ikon: '🐺', motor: 'hær', heal: 0.2, rally: 10, farve: 0x8fd06a, tekst: 'You and soldiers near you heal 20%; soldiers attack 35% faster for 10 seconds.' },
  packHunt: { navn: 'Pack Hunt', mana: 100, cd: 40, ikon: '🎯', motor: 'mærk', radius: 12, tid: 8, farve: 0xff4a3a, tekst: 'Marks every enemy near you as prey for 8 seconds: they take 50% more damage.' },
  spiritSpears: { navn: 'Spirit Spears', mana: 80, cd: 10, ikon: '🍃', motor: 'kæde', skade: 130, hop: 5, farve: 0x7fe08a, tekst: 'A spear of green spirit-light: 130 damage, jumping to four more enemies.' },
  thornstorm: { navn: 'Thornstorm', mana: 140, cd: 40, ikon: '🌿', motor: 'zone', dps: 42, radius: 7, tid: 6, farve: 0x7fe08a, tekst: 'Thorns whirl around you for 6 seconds: 42 damage per second to every enemy close by.' },
  pounce: { navn: 'Pounce', mana: 0, cd: 10, ikon: '🐾', motor: 'spring', hpPris: 0.1, mult: 2.4, radius: 3.5, farve: 0xff6a3a, tekst: 'Costs 10% health. Pounce onto an enemy and strike everything there for 2.4× damage.' },
  frenzy: { navn: 'Frenzy', mana: 0, cd: 40, ikon: '😤', motor: 'raseri', hpPris: 0.15, tid: 10, fart: 0.7, stjæl: 0.25, taget: 1.2, tekst: 'Costs 15% health. For 10 seconds: +70% attack speed and +25% life steal, but you take 20% more damage.' },
  // --- Knight Commander ---
  bannerOfKings: { navn: 'Banner of Kings', mana: 75, cd: 35, ikon: '🏰', motor: 'hær', heal: 0.25, rally: 8, farve: 0x8fb8ff, tekst: 'You and soldiers near you heal 25%; soldiers attack 35% faster for 8 seconds.' },
  shieldOfTheRealm: { navn: 'Shield of the Realm', mana: 110, cd: 50, ikon: '🛡️', motor: 'hær', linje: 10, farve: 0x9fc3ff, tekst: 'You and soldiers near you take 40% less damage for 10 seconds.' },
  judgement: { navn: 'Judgement', mana: 90, cd: 16, ikon: '⚖️', motor: 'nova', skade: 220, radius: 6, lam: 1, helSelv: 0.15, farve: 0xffe39a, tekst: 'Holy light bursts from you: 220 damage and a 1 second stun to every enemy within 6, and you heal 15%.' },
  sanctuary: { navn: 'Sanctuary', mana: 150, cd: 45, ikon: '✨', motor: 'zone', dps: 35, heling: 0.03, radius: 8, tid: 8, farve: 0xffe39a, tekst: 'Hallowed ground for 8 seconds: 35 damage a second to enemies, 3% healing a second to you and your soldiers.' },
  charge: { navn: 'Charge', mana: 0, cd: 12, ikon: '🐎', motor: 'spring', hpPris: 0.08, mult: 2, radius: 4, lam: 1.5, farve: 0xffd27a, tekst: 'Costs 8% health. Charge onto an enemy: 2× damage and a 1.5 second stun where you land.' },
  zeal: { navn: 'Zeal', mana: 0, cd: 40, ikon: '🔥', motor: 'raseri', hpPris: 0.15, tid: 10, fart: 0.6, stjæl: 0.3, taget: 1.2, tekst: 'Costs 15% health. For 10 seconds: +60% attack speed and +30% life steal, but you take 20% more damage.' },
  // --- Lorewarden ---
  wordOfCourage: { navn: 'Word of Courage', mana: 90, cd: 35, ikon: '📜', motor: 'hær', heal: 0.4, rally: 6, farve: 0xffe7a0, tekst: 'You and soldiers near you heal 40%; soldiers attack 35% faster for 6 seconds.' },
  wardOfAges: { navn: 'Ward of Ages', mana: 120, cd: 50, ikon: '📖', motor: 'hær', linje: 10, farve: 0xffe7a0, tekst: 'Old names guard you: you and soldiers near you take 40% less damage for 10 seconds.' },
  sunChain: { navn: 'Sunfire', mana: 80, cd: 10, ikon: '☀️', motor: 'kæde', skade: 150, hop: 4, farve: 0xffd36b, tekst: 'A ray of sunfire: 150 damage to the nearest enemy, leaping to three more.' },
  solarFlare: { navn: 'Solar Flare', mana: 150, cd: 40, ikon: '🌞', motor: 'zone', påMål: true, dps: 60, radius: 6, tid: 4, farve: 0xffb347, tekst: 'The sun burns down on the nearest enemy for 4 seconds: 60 damage a second to everything around it.' },
  blinkFire: { navn: 'Blink of Fire', mana: 60, cd: 12, ikon: '🔥', motor: 'spring', hpPris: 0.1, skade: 200, radius: 4.5, farve: 0xff7a2a, tekst: 'Costs 10% health. Vanish in flame and appear beside an enemy: 200 damage around you.' },
  inkOfBlood: { navn: 'Ink of Blood', mana: 0, cd: 40, ikon: '🩸', motor: 'raseri', hpPris: 0.2, tid: 10, fart: 0.6, stjæl: 0.3, taget: 1.2, tekst: 'Costs 20% health. For 10 seconds: +60% attack speed and +30% life steal, but you take 20% more damage.' },
  // --- Ranger Captain ---
  volleyCommand: { navn: 'Volley Command', mana: 75, cd: 35, ikon: '📯', motor: 'hær', heal: 0.15, rally: 10, farve: 0xbfe0ff, tekst: 'You and soldiers near you heal 15%; soldiers attack 35% faster for 10 seconds.' },
  drillFormation: { navn: 'Drill Formation', mana: 110, cd: 50, ikon: '🛡️', motor: 'hær', linje: 8, farve: 0x9fc3ff, tekst: 'You and soldiers near you take 40% less damage for 8 seconds.' },
  ricochet: { navn: 'Ricochet', mana: 80, cd: 10, ikon: '↩️', motor: 'kæde', skade: 140, hop: 5, farve: 0xd8f0ff, tekst: 'A bolt that bounces: 140 damage to the nearest enemy and four more.' },
  gale: { navn: 'Gale', mana: 110, cd: 18, ikon: '🌬️', motor: 'linje', skade: 150, længde: 16, bredde: 3, skub: 4, farve: 0xd8f0ff, tekst: 'A howling wind toward the nearest enemy: 150 damage and everything in its path is thrown back.' },
  tumbleShot: { navn: 'Tumble Shot', mana: 0, cd: 10, ikon: '🏹', motor: 'spring', bagud: true, hpPris: 0.06, mult: 3, farve: 0xbfe0ff, tekst: 'Costs 6% health. Roll away from the nearest enemy and shoot it for 3× damage.' },
  // --- The Dreaming: Thornwarden ---
  callOfTheGrove: { navn: 'Call of the Grove', mana: 80, cd: 35, ikon: '🌳', motor: 'hær', heal: 0.25, rally: 8, farve: 0x8fd06a, tekst: 'You and soldiers near you heal 25%; soldiers attack 35% faster for 8 seconds.' },
  barkwall: { navn: 'Barkwall', mana: 110, cd: 50, ikon: '🪵', motor: 'hær', linje: 10, farve: 0x9a7a4a, tekst: 'Bark grows over you and your soldiers: 40% less damage for 10 seconds.' },
  rootquake: { navn: 'Rootquake', mana: 90, cd: 14, ikon: '🌱', motor: 'linje', skade: 170, længde: 13, bredde: 2.8, lam: 1.4, farve: 0x7ab04a, tekst: 'Roots tear up the ground toward the nearest enemy: 170 damage and 1.4 seconds held fast along the way.' },
  bramblestorm: { navn: 'Bramblestorm', mana: 150, cd: 45, ikon: '🌿', motor: 'zone', dps: 48, radius: 7, tid: 5, lam: 0.3, farve: 0x7ab04a, tekst: 'Brambles whip around you for 5 seconds: 48 damage a second, and enemies keep stumbling.' },
  trample: { navn: 'Trample', mana: 0, cd: 12, ikon: '🦌', motor: 'spring', hpPris: 0.1, mult: 2.2, radius: 4, lam: 1, farve: 0x9a7a4a, tekst: 'Costs 10% health. Charge onto an enemy like a great stag: 2.2× damage and a short stun where you land.' },
  sapfire: { navn: 'Sapfire', mana: 0, cd: 40, ikon: '🔥', motor: 'raseri', hpPris: 0.2, tid: 10, fart: 0.6, stjæl: 0.3, taget: 1.2, tekst: 'Costs 20% health. For 10 seconds: +60% attack speed and +30% life steal, but you take 20% more damage.' },
  // --- Moonblade ---
  moonsong: { navn: 'Moonsong', mana: 75, cd: 35, ikon: '🌙', motor: 'hær', heal: 0.2, rally: 10, farve: 0xd8b8ff, tekst: 'You and soldiers near you heal 20%; soldiers attack 35% faster for 10 seconds.' },
  veilOfNight: { navn: 'Veil of Night', mana: 110, cd: 50, ikon: '🌫️', motor: 'hær', linje: 8, farve: 0x6a52a0, tekst: 'Night hides you and your soldiers: 40% less damage for 8 seconds.' },
  moonbeam: { navn: 'Moonbeam', mana: 80, cd: 10, ikon: '✨', motor: 'kæde', skade: 140, hop: 5, farve: 0xd8b8ff, tekst: 'A beam of moonlight: 140 damage to the nearest enemy, leaping to four more.' },
  starfall: { navn: 'Starfall', mana: 150, cd: 40, ikon: '🌠', motor: 'zone', påMål: true, dps: 58, radius: 6, tid: 4, farve: 0xd8e4ff, tekst: 'Stars fall on the nearest enemy for 4 seconds: 58 damage a second to everything around it.' },
  shadowstep: { navn: 'Shadowstep', mana: 0, cd: 10, ikon: '🗡️', motor: 'spring', hpPris: 0.08, mult: 2.6, radius: 3, farve: 0x6a52a0, tekst: 'Costs 8% health. Leap through the shadows onto an enemy for 2.6× damage.' },
  bloodmoon: { navn: 'Blood Moon', mana: 0, cd: 40, ikon: '🔴', motor: 'raseri', hpPris: 0.15, tid: 10, fart: 0.8, stjæl: 0.25, taget: 1.2, tekst: 'Costs 15% health. For 10 seconds: +80% attack speed and +25% life steal, but you take 20% more damage.' },
  // --- Dreamweaver ---
  lullaby: { navn: 'Lullaby of Rest', mana: 110, cd: 30, ikon: '🎵', motor: 'zone', dps: 12, heling: 0.045, radius: 9, tid: 8, farve: 0xd8b8ff, tekst: 'A lullaby for 8 seconds: you and your soldiers heal 4.5% a second, enemies take 12 damage a second.' },
  dreamWard: { navn: 'Dream Ward', mana: 100, cd: 45, ikon: '🛡️', motor: 'hær', heal: 0.1, linje: 8, farve: 0xb8a8ff, tekst: 'A ward of dreams: you and soldiers near you heal 10% and take 40% less damage for 8 seconds.' },
  mindspark: { navn: 'Mindspark', mana: 80, cd: 10, ikon: '💫', motor: 'kæde', skade: 145, hop: 5, farve: 0xf0d8ff, tekst: 'A spark of thought: 145 damage to the nearest enemy, leaping to four more.' },
  dreamNova: { navn: 'Dream Nova', mana: 110, cd: 18, ikon: '🌀', motor: 'nova', skade: 200, radius: 6.5, lam: 1.5, helSelv: 0.1, farve: 0xb8a8ff, tekst: 'The dream bursts out of you: 200 damage and 1.5 seconds asleep for every enemy within 6.5, and you heal 10%.' },
  nightTerror: { navn: 'Night Terror', mana: 60, cd: 12, ikon: '😱', motor: 'spring', hpPris: 0.1, skade: 210, radius: 4.5, lam: 0.8, farve: 0x6a4aa0, tekst: 'Costs 10% health. Step out of a bad dream beside an enemy: 210 damage and a short stun around you.' },
  badDream: { navn: 'Bad Dream', mana: 0, cd: 40, ikon: '🩸', motor: 'raseri', hpPris: 0.2, tid: 10, fart: 0.6, stjæl: 0.3, taget: 1.2, tekst: 'Costs 20% health. For 10 seconds: +60% attack speed and +30% life steal, but you take 20% more damage.' },
  bloodsight: { navn: 'Bloodsight', mana: 0, cd: 40, ikon: '👁️', motor: 'raseri', hpPris: 0.15, tid: 10, fart: 0.8, stjæl: 0.2, taget: 1.2, tekst: 'Costs 15% health. For 10 seconds: +80% attack speed and +20% life steal, but you take 20% more damage.' },
};
