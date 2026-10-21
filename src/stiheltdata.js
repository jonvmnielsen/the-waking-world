// Ascension pr. helt (M14e, Jon: alle evner er heltens egne). Stierne er de samme tre slags (ascensiondata.js:
// warlord = fører hæren, avatar = naturkræfter, bloodbound = blod og risiko) og følger spillestilen som før,
// men hver helt har sit eget navn og sin titel for stien, sin egen udgave af den passive evne (avatar: hvad
// slagene kalder på) og sine egne to evner (stievnedata.js).
//   proc.form: 'kæde' = målet og to fjender nær det rammes, 'skælv' = alt om målet rystes (kort lammelse),
//              'lys' = målet rammes, og helten heles for halvdelen

const KÆDE = (navn, farve, hvad) => ({ navn, form: 'kæde', farve, tekst: `Each blow has a 25% chance to call ${hvad} on the target and two enemies near it. +50% mana regeneration.` });

export const HELT_STIER = {
  warchief: {
    warlord: { evner: ['rally', 'holdLinjen'] },
    avatar: { navn: 'Earthshaker', titel: 'Orc Earthshaker', ikon: '⛰️', farve: 0xd9a35a, motto: 'The mountain remembers every step.', tekst: 'The ground itself fights for you. Your blows shake the earth.',
      proc: { navn: 'Quaking Blows', form: 'skælv', farve: 0xd9a35a, tekst: 'Each blow has a 25% chance to quake the ground around the target: damage and a short stumble. +50% mana regeneration.' }, evner: ['fissure', 'aftershock'] },
    bloodbound: { evner: ['spring', 'blodraseri'] },
  },
  stormsinger: {
    warlord: { navn: 'Tidecaller', passivNavn: "Tide's Embrace", titel: 'Orc Tidecaller', ikon: '🌊', farve: 0x6fd0ff, motto: 'The sea returns what it takes.', tekst: 'A healer of the warband. Rain and sea-spray keep your warriors standing.', evner: ['healingRain', 'tidalWard'] },
    avatar: { evner: ['kædelyn', 'storm'] },
    bloodbound: { navn: 'Thunderborn', titel: 'Thunderborn Shaman', ikon: '🔵', motto: 'Become the storm.', tekst: 'You throw yourself into the lightning — and into the fight.', evner: ['ballLightning', 'overload'] },
  },
  wildtrack: {
    warlord: { navn: 'Packmaster', passivNavn: "Pack Leader", titel: 'Orc Packmaster', ikon: '🐺', farve: 0x8fd06a, motto: 'No hunter hunts alone.', tekst: 'You lead the hunt. Your warband runs faster and strikes harder at your marked prey.', evner: ['callOfThePack', 'packHunt'] },
    avatar: { navn: 'Wild Spirit', titel: 'Spirit of the Wild', ikon: '🍃', farve: 0x7fe08a, motto: 'The forest throws its spears with you.', tekst: 'The wild answers your call. Thorns and spirit-light follow your spears.',
      proc: KÆDE('Spirit of the Hunt', 0x7fe08a, 'spirit-spears'), evner: ['spiritSpears', 'thornstorm'] },
    bloodbound: { navn: 'Apex Predator', titel: 'Apex Predator', ikon: '🐾', motto: 'Nothing above me.', tekst: 'You leave the spear behind and pounce. The closer to death, the deadlier you are.', evner: ['pounce', 'frenzy'] },
  },
  knightCommander: {
    warlord: { navn: 'Lord Marshal', passivNavn: "Marshal's Presence", titel: 'Lord Marshal', ikon: '🏰', motto: 'The realm stands where I stand.', tekst: 'A commander of men. Your soldiers fight harder and longer at your side.', evner: ['bannerOfKings', 'shieldOfTheRealm'] },
    avatar: { navn: 'Paladin', titel: 'Human Paladin', ikon: '⚖️', farve: 0xffe39a, motto: 'Light is a weapon too.', tekst: 'Holy light in every blow. It burns the enemy and mends you.',
      proc: { navn: 'Holy Blows', form: 'lys', farve: 0xffe39a, tekst: 'Each blow has a 25% chance to call holy light on the target, and you heal half the damage. +50% mana regeneration.' }, evner: ['judgement', 'sanctuary'] },
    bloodbound: { navn: 'Crusader', titel: 'Crusader', ikon: '🐎', motto: 'Forward, whatever the cost.', tekst: 'You charge first and count the wounds later. The closer to death, the deadlier you are.', evner: ['charge', 'zeal'] },
  },
  lorewarden: {
    warlord: { navn: 'High Archivist', passivNavn: "Keeper's Presence", titel: 'High Archivist', ikon: '📜', farve: 0xffe7a0, motto: 'Every name I keep, I keep alive.', tekst: 'Your words hold the army together. Great healing and wards.', evner: ['wordOfCourage', 'wardOfAges'] },
    avatar: { navn: 'Sunscribe', titel: 'Sunscribe', ikon: '☀️', farve: 0xffd36b, motto: 'Written in fire, read by the sun.', tekst: 'The old light grows hot. Sunfire leaps from foe to foe.',
      proc: KÆDE('Sunsparks', 0xffd36b, 'sunfire'), evner: ['sunChain', 'solarFlare'] },
    bloodbound: { navn: 'Burning Scholar', titel: 'Burning Scholar', ikon: '🔥', motto: 'Some pages must be burned.', tekst: 'Knowledge turned to fire and blood. You blink into the fight.', evner: ['blinkFire', 'inkOfBlood'] },
  },
  rangerCaptain: {
    warlord: { navn: 'Captain of the Watch', passivNavn: "Captain's Presence", titel: 'Captain of the Watch', ikon: '📯', motto: 'Hold. Aim. Loose.', tekst: 'You drill your soldiers into one weapon.', evner: ['volleyCommand', 'drillFormation'] },
    avatar: { navn: 'Windrunner', titel: 'Windrunner', ikon: '🌬️', farve: 0xd8f0ff, motto: 'The wind carries my bolts.', tekst: 'The wind fights at your side. Bolts bounce and gales hurl your enemies back.',
      proc: KÆDE('Riding the Wind', 0xd8f0ff, 'a gust of bolts'), evner: ['ricochet', 'gale'] },
    bloodbound: { navn: 'Deadeye', titel: 'Deadeye', ikon: '👁️', motto: 'One shot. Make it bleed.', tekst: 'You fight close, roll away and never miss. The closer to death, the deadlier you are.', evner: ['tumbleShot', 'bloodsight'] },
  },
  // --- The Dreaming (M15) ---
  thornwarden: {
    warlord: { navn: 'Grove Warden', passivNavn: "Warden's Presence", titel: 'Grove Warden', ikon: '🌳', farve: 0x8fd06a, motto: 'The grove stands where I stand.', tekst: 'A keeper of the wood. Your warriors grow strong in your shade.', evner: ['callOfTheGrove', 'barkwall'] },
    avatar: { navn: 'Wildheart', titel: 'Wildheart', ikon: '🌿', farve: 0x7ab04a, motto: 'The roots answer.', tekst: 'The forest fights with you. Roots break the ground under every blow.',
      proc: { navn: 'Rooted Blows', form: 'skælv', farve: 0x7ab04a, tekst: 'Each blow has a 25% chance to burst roots around the target: damage and a short stumble. +50% mana regeneration.' }, evner: ['rootquake', 'bramblestorm'] },
    bloodbound: { navn: 'Thornrage', titel: 'Thornrage', ikon: '🦌', motto: 'Even an oak can charge.', tekst: 'The tree remembers it was once a stag. The closer to death, the deadlier you are.', evner: ['trample', 'sapfire'] },
  },
  moonblade: {
    warlord: { navn: 'Night Captain', passivNavn: "Captain of the Night", titel: 'Night Captain', ikon: '🌙', farve: 0xd8b8ff, motto: 'In the dark we are many.', tekst: 'You lead the night-hunt. Your soldiers fight harder at your side.', evner: ['moonsong', 'veilOfNight'] },
    avatar: { navn: 'Moonfall', titel: 'Moonfall', ikon: '🌠', farve: 0xd8e4ff, motto: 'The moon falls with my blades.', tekst: 'Moonlight follows your blades and leaps from foe to foe.',
      proc: KÆDE('Moonlit Blades', 0xd8b8ff, 'moonlight'), evner: ['moonbeam', 'starfall'] },
    bloodbound: { navn: 'Shadowstalker', titel: 'Shadowstalker', ikon: '🗡️', motto: 'Blood looks black by moonlight.', tekst: 'You hunt from the shadows. The closer to death, the deadlier you are.', evner: ['shadowstep', 'bloodmoon'] },
  },
  dreamweaver: {
    warlord: { navn: 'Dreamshepherd', passivNavn: "Shepherd's Presence", titel: 'Dreamshepherd', ikon: '🎵', farve: 0xd8b8ff, motto: 'Sleep, and be whole.', tekst: 'You keep the army in a good dream. Healing songs and wards.', evner: ['lullaby', 'dreamWard'] },
    avatar: { navn: 'Dreamstorm', titel: 'Dreamstorm', ikon: '🌀', farve: 0xb8a8ff, motto: 'Every thought a storm.', tekst: 'The dream breaks loose. Sparks of thought leap from foe to foe.',
      proc: KÆDE('Dreaming Sparks', 0xf0d8ff, 'sparks of dream'), evner: ['mindspark', 'dreamNova'] },
    bloodbound: { navn: 'Nightmare Weaver', titel: 'Nightmare Weaver', ikon: '😱', motto: 'Every dream turns.', tekst: 'You weave nightmares and walk in them. The closer to death, the deadlier you are.', evner: ['nightTerror', 'badDream'] },
  },
};
