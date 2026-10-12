// Tilfældige begivenheder (GDD 17a punkt 6–7): tal og tekster. Logikken står i begivenheder.js,
// himmelbegivenheder.js og stedbegivenheder.js. Synlige tegn først — krøniken fortæller bagefter.

export const PLAN = {
  først: [150, 210],   // sekunder før den første begivenhed
  mellem: [140, 230],  // sekunder mellem begivenhederne
  blodmåneChance: 0.3, // chance for at en nat bliver en Blood Moon (fra anden nat)
};

// vægt = hvor ofte den trækkes; verden = gælder hele kortet (kun én ad gangen)
export const BEGIVENHEDER = {
  stjerneskud: { vægt: 3, verden: true, varighed: 240 },
  formørkelse: { vægt: 2, verden: true, varighed: 90, kunDag: true },
  guldfeber: { vægt: 3, verden: true, varighed: 120 },
  helligdom: { vægt: 3, varighed: 180 },
  lejesvende: { vægt: 3, varighed: 200 },
  baghold: { vægt: 2, varighed: 240 },
};

export const BLODMÅNE = { creepSkade: 0.25, creepXp: 0.5, farve: 0xff2a14, styrke: 0.5 };
export const FORMØRKELSE = { memorySkade: 0.25, ekko: 2, farve: 0x4a3a88, styrke: 0.8, lys: 0.25 };
export const STJERNE = { krystaller: 4, guld: [90, 130], storGuld: [160, 220], itemChance: 0.5 };
export const RABAT = 0.7;   // lejesvende tager 70 % af kroens pris

export const TEKST = {
  blodmåne: { titel: 'Blood Moon', tekst: 'The moon rises red. Creeps hit harder tonight — and give half again as much experience.', farve: '#ff5a3a' },
  blodmåneSlut: { titel: 'The Blood Moon sets', tekst: 'The red light fades with the dawn.', farve: '#ff8a6a' },
  formørkelse: { titel: 'Eclipse', tekst: 'Something passes before the sun. The Memory grows bold, and every echo weighs twice as much.', farve: '#a08aff' },
  formørkelseSlut: { titel: 'The sun returns', tekst: 'The shadow slides away from the sun.', farve: '#d8c8ff' },
  stjerneskud: { titel: 'Starfall', tekst: 'A star fell from the sky and broke on the land. Its glowing shards are worth a fortune — for a while.', farve: '#8fe0ff' },
  stjerneSlut: { titel: 'The star-shards fade', tekst: 'What was left of the fallen star has gone dark.', farve: '#8fe0ff' },
  guldfeber: { titel: 'Gold rush', tekst: 'A rich seam has opened. For two minutes every trip from this mine brings back twice the gold.', farve: '#ffd36b' },
  guldfeberSlut: { titel: 'The rich seam runs thin', tekst: 'The gold rush is over.', farve: '#ffd36b' },
  helligdom: { titel: 'A hidden shrine', tekst: 'Light rises from a shrine no one remembers building. It will not wait long.', farve: '#ffe7a0' },
  lejesvende: { titel: 'Wandering sellswords', tekst: 'A band of sellswords has made camp by a fire. They fight for coin — cheaper than at the tavern.', farve: '#e9d6a8' },
  lejesvendeSlut: { titel: 'The sellswords move on', tekst: 'The fire is out and the band has gone.', farve: '#e9d6a8' },
  baghold: { titel: 'Crows gather', tekst: 'Crows circle low over one spot and will not settle. Something waits beneath them.', farve: '#c0b0a0' },
  bagholdUd: { titel: 'Ambush!', tekst: 'Raiders burst out of hiding.', farve: '#ff7a6a' },
};

export const VELSIGNELSER = [
  { id: 'kraft', navn: 'Blessing of Vigor', tekst: 'Health and mana restored', farve: 0x6dff8a },
  { id: 'indsigt', navn: 'Blessing of Insight', tekst: 'Experience', farve: 0xb48aff },
  { id: 'lykke', navn: 'Blessing of Fortune', tekst: 'Gold', farve: 0xffd36b },
];
