// Heltene (Jon: 3 pr. race; man vælger én ved start, og AI-modstanderen får en af sin races). GDD 6.3.
// Hver helt har sin model, sin hovedegenskab, sin kampform (nær eller på afstand) og sin egen første evne
// (signatur, slot 0) og to mere (evner: level 1, 3 og 6 — Jon: alle evner er heltens egne). The Dreaming og The Unmade
// er designet, men endnu ikke spilbare (ingen racer i spillet endnu).

const ORK_KRIGER = ['1H_Axe', '1H_Axe_Offhand', 'Barbarian_Round_Shield', 'Mug', 'Barbarian_Hat'];
const RIDDER = ['1H_Sword', '1H_Sword_Offhand', 'Badge_Shield', 'Rectangle_Shield', 'Spike_Shield'];
const MAGER = ['Spellbook', 'Spellbook_open', '1H_Wand'];
const SKYTTE = ['Knife', 'Knife_Offhand', '1H_Crossbow', 'Throwable'];
const KASTER = ['Knife', 'Knife_Offhand', '1H_Crossbow', '2H_Crossbow'];

// Kampformer: animationer og rækkevidde
const NÆR_2H = { type: 'nær', rækkevidde: 2.2, sving: [{ anim: '2H_Melee_Attack_Chop', slag: 0.48 }, { anim: '2H_Melee_Attack_Slice', slag: 0.42 }], kampIdle: '2H_Melee_Idle' };
const NÆR_DUAL = { type: 'nær', rækkevidde: 2.0, sving: [{ anim: 'Dualwield_Melee_Attack_Slice', slag: 0.4 }, { anim: 'Dualwield_Melee_Attack_Chop', slag: 0.45 }], kampIdle: 'Idle', angrebsTid: 1.8 };
const MAGI = (farve) => ({ type: 'fjern', rækkevidde: 11, sving: [{ anim: 'Spellcast_Shoot', slag: 0.5 }], kampIdle: 'Idle', projektil: farve, angrebsTid: 2.2 });
const SKUD = (farve) => ({ type: 'fjern', rækkevidde: 12, sving: [{ anim: '2H_Ranged_Shoot', slag: 0.4 }], kampIdle: 'Idle', projektil: farve, angrebsTid: 2.0 });
const KAST = { type: 'fjern', rækkevidde: 11, sving: [{ anim: 'Throw', slag: 0.42 }], kampIdle: 'Idle', projektil: 'spyd', angrebsTid: 1.9 };

const STR = { str: 22, agi: 14, int: 12 }, AGI = { str: 16, agi: 22, int: 12 }, INT = { str: 15, agi: 13, int: 22 };

export const HELTE = {
  // --- The Tide ---
  warchief: {
    race: 'tide', navn: 'Warchief', titel: 'Orc Warrior', rolle: 'Melee · Strength', primær: 'str', start: STR,
    model: 'units/hero_tide', skjul: ORK_KRIGER, kamp: NÆR_2H, signatur: 'bruteStrike', evner: ['bruteStrike', 'warCry', 'earthStomp'],
    tekst: 'A wall of muscle with a two-handed axe. Leads from the front and hits hardest of all.',
  },
  stormsinger: {
    race: 'tide', navn: 'Stormsinger', titel: 'Orc Shaman', rolle: 'Ranged · Intelligence', primær: 'int', start: INT,
    model: 'units/hero_tide_shaman', skjul: MAGER, kamp: MAGI(0x7fc8ff), signatur: 'stormlash', evner: ['stormlash', 'squall', 'eyeOfStorm'], hp: -25,
    tekst: 'Sings the sea-storm into lightning. Fragile up close, deadly from afar.',
  },
  wildtrack: {
    race: 'tide', navn: 'Wildtrack', titel: 'Orc Hunter', rolle: 'Ranged · Agility', primær: 'agi', start: AGI,
    model: 'units/hero_tide_hunter', skjul: KASTER, kamp: KAST, signatur: 'huntersMark', evner: ['huntersMark', 'spearVolley', 'predator'], hp: -10, fart: 0.3,
    tekst: 'Throws spears and marks the prey for the whole warband. Quick on her feet.',
  },
  // --- The Architects ---
  knightCommander: {
    race: 'arkitekter', navn: 'Knight Commander', titel: 'Human Knight', rolle: 'Melee · Strength', primær: 'str', start: STR,
    model: 'units/hero_arkitekt', skjul: RIDDER, kamp: NÆR_2H, signatur: 'shieldBash', evner: ['shieldBash', 'shieldWall', 'consecration'],
    tekst: 'Plate, a greatsword and an unbending will. Stuns what it cannot kill.',
  },
  lorewarden: {
    race: 'arkitekter', navn: 'Lorewarden', titel: 'Human Mage', rolle: 'Ranged · Intelligence', primær: 'int', start: INT,
    model: 'units/hero_ark_mage', skjul: MAGER, kamp: MAGI(0xffe7a0), signatur: 'mendingLight', evner: ['mendingLight', 'bindingWord', 'oldLight'], hp: -25,
    tekst: 'Keeper of the written names. Heals the army and burns its enemies with old light.',
  },
  rangerCaptain: {
    race: 'arkitekter', navn: 'Ranger Captain', titel: 'Human Marksman', rolle: 'Ranged · Agility', primær: 'agi', start: AGI,
    model: 'units/hero_ark_ranger', skjul: SKYTTE, kamp: SKUD(0xbfe0ff), signatur: 'piercingBolt', evner: ['piercingBolt', 'rapidFire', 'rainOfBolts'], hp: -10, fart: 0.3,
    tekst: 'A heavy crossbow and a cold eye. Her bolts go through one enemy and into the next.',
  },
  // --- The Dreaming (M15: vores egne figurer, game-assets D-015) ---
  thornwarden: {
    race: 'dreaming', navn: 'Thornwarden', titel: 'Dream-Keeper', rolle: 'Melee · Strength', primær: 'str', start: STR,
    model: 'units/dream_thornwarden', skjul: [], egetUdstyr: true, kamp: NÆR_2H, signatur: 'entanglingRoots', evner: ['entanglingRoots', 'thornmail', 'wrathOfTheWood'], hp: 20,
    tekst: 'Half tree, half dream. Roots hold the enemy while the forest closes in.',
  },
  moonblade: {
    race: 'dreaming', navn: 'Moonblade', titel: 'Night Dancer', rolle: 'Melee · Agility', primær: 'agi', start: AGI,
    model: 'units/dream_moonblade', skjul: [], egetUdstyr: true, kamp: NÆR_DUAL, signatur: 'blinkStrike', evner: ['blinkStrike', 'moonlitDance', 'eclipse'], fart: 0.3,
    tekst: 'Steps out of the moonlight behind her target — and back again.',
  },
  dreamweaver: {
    race: 'dreaming', navn: 'Dreamweaver', titel: 'Sleep-Singer', rolle: 'Ranged · Intelligence', primær: 'int', start: INT,
    model: 'units/dream_dreamweaver', skjul: [], egetUdstyr: true, kamp: MAGI(0xd8b8ff), signatur: 'sleep', evner: ['sleep', 'dreamsong', 'nightmare'], hp: -25,
    tekst: 'Sings enemies to sleep and walks through their dreams.',
  },
  // --- The Unmade (designet, ikke spilbar endnu) ---
  patchwork: { race: 'unmade', navn: 'Patchwork Champion', titel: 'The Stitched', rolle: 'Melee · Strength', primær: 'str', signatur: 'graft', spilbar: false, tekst: 'Sewn from the fallen. Takes a piece of every enemy it kills.' },
  fragmentSeer: { race: 'unmade', navn: 'Fragment Seer', titel: 'Echo-Eater', rolle: 'Ranged · Intelligence', primær: 'int', signatur: 'echoShards', spilbar: false, tekst: 'Throws caught echoes as shards of memory.' },
  stitchedStalker: { race: 'unmade', navn: 'Stitched Stalker', titel: 'The Unseen', rolle: 'Melee · Agility', primær: 'agi', signatur: 'unseen', spilbar: false, tekst: 'Fades from sight and strikes twice as hard from nowhere.' },
};

export const helteFor = (race) => Object.entries(HELTE).filter(([, h]) => h.race === race && h.spilbar !== false).map(([id, h]) => ({ id, ...h }));
