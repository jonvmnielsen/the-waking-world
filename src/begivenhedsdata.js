// Tilfældige begivenheder (GDD 17a punkt 6–7): tal og tekster. Logikken står i begivenheder.js,
// himmelbegivenheder.js og stedbegivenheder.js. Synlige tegn først — krøniken fortæller bagefter.

export const PLAN = {
  først: [420, 540],   // sekunder før den første begivenhed (Jon: færre begivenheder, tid til at afvikle hver)
  mellem: [420, 600],  // sekunder fra en begivenhed er slut til den næste
  blodmåneChance: 0.2, // chance for at en nat bliver en Blood Moon (fra anden nat)
};

// vægt = hvor ofte den trækkes; verden = gælder hele kortet (kun én ad gangen)
export const BEGIVENHEDER = {
  stjerneskud: { vægt: 3, verden: true, varighed: 240 },
  formørkelse: { vægt: 2, verden: true, varighed: 90, kunDag: true },
  guldfeber: { vægt: 3, verden: true, varighed: 120 },
  helligdom: { vægt: 3, varighed: 180 },
  lejesvende: { vægt: 3, varighed: 200 },
  baghold: { vægt: 2, varighed: 240 },
  karavane: { vægt: 3 },
};

// Karavanen: fart, liv, belønning for eskorte og loot ved plyndring; priserne hos købmanden og kroen
export const KARAVANE = { fart: 3.2, hp: 1400, eskorteAfstand: 16, eskorteTid: 30, løn: [300, 450], loot: [500, 700], prisNed: 0.9, prisOp: 1.25, prisMin: 0.75, prisMaks: 1.6 };

export const BLODMÅNE = { creepSkade: 0.25, creepXp: 0.5, farve: 0xff2a14, styrke: 0.5 };
export const FORMØRKELSE = { memorySkade: 0, ekko: 2, farve: 0x4a3a88, styrke: 0.8, lys: 0.25 };
export const STJERNE = { krystaller: 4, guld: [90, 130], storGuld: [160, 220], itemChance: 0.5 };
export const RABAT = 0.7;   // lejesvende tager 70 % af kroens pris

export const TEKST = {
  blodmåne: { vigtig: true, titel: 'Blood Moon', tekst: 'The moon rises red. Creeps hit harder tonight — and give half again as much experience.', farve: '#ff5a3a' },
  blodmåneSlut: { titel: 'The Blood Moon sets', tekst: 'The red light fades with the dawn.', farve: '#ff8a6a' },
  formørkelse: { vigtig: true, titel: 'Eclipse', tekst: 'Something passes before the sun. The dead stir: every echo that reaches Erevoss weighs twice as much.', farve: '#a08aff' },
  formørkelseSlut: { titel: 'The sun returns', tekst: 'The shadow slides away from the sun.', farve: '#d8c8ff' },
  stjerneskud: { vigtig: true, titel: 'Starfall', tekst: 'A star fell from the sky and broke on the land. Its glowing shards are worth a fortune — for a while.', farve: '#8fe0ff' },
  stjerneSlut: { titel: 'The star-shards fade', tekst: 'What was left of the fallen star has gone dark.', farve: '#8fe0ff' },
  guldfeber: { vigtig: true, titel: 'Gold rush', tekst: 'A rich seam has opened. For two minutes every trip from this mine brings back twice the gold.', farve: '#ffd36b' },
  guldfeberSlut: { titel: 'The rich seam runs thin', tekst: 'The gold rush is over.', farve: '#ffd36b' },
  helligdom: { vigtig: true, titel: 'A hidden shrine', tekst: 'Light rises from a shrine no one remembers building. It will not wait long.', farve: '#ffe7a0' },
  lejesvende: { vigtig: true, titel: 'Wandering sellswords', tekst: 'A band of sellswords has made camp by a fire. They fight for coin — cheaper than at the tavern.', farve: '#e9d6a8' },
  lejesvendeSlut: { titel: 'The sellswords move on', tekst: 'The fire is out and the band has gone.', farve: '#e9d6a8' },
  karavane: { vigtig: true, titel: 'A merchant caravan', tekst: 'A covered wagon rolls in from the edge of the world, bound past the tavern for the far side. Walk with it and the merchants will be grateful — or take its cargo.', farve: '#e8c690' },
  karavaneOverfald: { titel: 'The caravan is attacked!', tekst: 'Its guards draw steel.', farve: '#ff7a6a' },
  karavanePlyndret: { vigtig: true, titel: 'The caravan is plundered', tekst: 'Its cargo is yours. Word travels fast: the merchant and the tavern raise their prices.', farve: '#ff8a5a' },
  karavaneRøvere: { vigtig: true, titel: 'Raiders strike the caravan!', tekst: 'They want the cargo — and your hero is in the way.', farve: '#ff7a6a' },
  karavaneFremme: { vigtig: true, titel: 'The caravan arrives safely', tekst: 'The merchants pay well for the escort — and lower their prices for a friend.', farve: '#ffd36b' },
  karavaneVidere: { titel: 'The caravan has passed', tekst: 'It rolled on over the edge of the world.', farve: '#e8c690' },
  baghold: { vigtig: true, titel: 'Crows gather', tekst: 'Crows circle low over one spot and will not settle. Something waits beneath them.', farve: '#c0b0a0' },
  bagholdUd: { vigtig: true, titel: 'Ambush!', tekst: 'Raiders burst out of hiding.', farve: '#ff7a6a' },
};

export const VELSIGNELSER = [
  { id: 'kraft', navn: 'Blessing of Vigor', tekst: 'Health and mana restored', farve: 0x6dff8a },
  { id: 'indsigt', navn: 'Blessing of Insight', tekst: 'Experience', farve: 0xb48aff },
  { id: 'lykke', navn: 'Blessing of Fortune', tekst: 'Gold', farve: 0xffd36b },
];
