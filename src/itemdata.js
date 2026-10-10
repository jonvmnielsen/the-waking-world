// Items (GDD afsnit 8): typer, sjældenhed, bonusser og drop-borde.
// model = sti i public/assets, farve = valgfri farvetone (gange) på modellen.

export const SJÆLDENHED = {
  almindelig: { navn: 'Almindelig', farve: '#e9e4d8', hex: 0xe9e4d8 },
  sjælden: { navn: 'Sjælden', farve: '#4fa3ff', hex: 0x4fa3ff },
  episk: { navn: 'Episk', farve: '#b46bff', hex: 0xb46bff },
  legendarisk: { navn: 'Legendarisk', farve: '#ff9a2e', hex: 0xff9a2e },
};

export const TYPE_NAVN = { forbrug: 'Forbrug', opladning: 'Opladninger', permanent: 'Udstyr', artefakt: 'Artefakt', opsamling: 'Opsamling' };

const ADV = 'kaykit-adventurers/', DUN = 'kaykit-dungeon/', SKEL = 'kaykit-skeletons/';
const RØD = [1, 0.35, 0.3], BLÅ = [0.45, 0.6, 1.25], LILLA = [0.8, 0.45, 1.2], GULD = [1.25, 1.0, 0.45];

export const ITEMS = {
  // Forbrug — bruges op
  livseliksir: { navn: 'Livseliksir', type: 'forbrug', sjældenhed: 'almindelig', model: DUN + 'bottle_a_labeled_green_gltf', farve: RØD, tekst: 'Giver straks 250 liv.', brug: { heal: 250 }, pris: 75 },
  storLivseliksir: { navn: 'Stor livseliksir', type: 'forbrug', sjældenhed: 'sjælden', model: DUN + 'bottle_c_green_gltf', farve: RØD, tekst: 'Giver straks 500 liv.', brug: { heal: 500 }, pris: 150 },
  manaeliksir: { navn: 'Manaeliksir', type: 'forbrug', sjældenhed: 'almindelig', model: DUN + 'bottle_b_green_gltf', farve: BLÅ, tekst: 'Giver straks 150 mana.', brug: { mana: 150 }, pris: 60 },
  kroensKrus: { navn: 'Kroens krus', type: 'forbrug', sjældenhed: 'almindelig', model: ADV + 'mug_full', tekst: 'Heler 30 liv i sekundet i 8 sekunder.', brug: { helOverTid: [30, 8] }, pris: 50 },
  røgbombe: { navn: 'Røgbombe', type: 'forbrug', sjældenhed: 'sjælden', model: ADV + 'smokebomb', tekst: 'Fjender mister dig af syne og går hjem. Du er skjult i 4 sekunder.', brug: { røg: 4 }, pris: 90 },
  hjemkald: { navn: 'Hjemkaldets bog', type: 'forbrug', sjældenhed: 'sjælden', model: ADV + 'spellbook_closed', farve: LILLA, tekst: 'Efter et kort ritual vender helten hjem til lejren.', brug: { hjem: true }, pris: 120 },

  // Opladning — et antal brug
  lynstav: { navn: 'Lynstav', type: 'opladning', sjældenhed: 'sjælden', model: ADV + 'wand', farve: BLÅ, ladninger: 3, tekst: 'Slår et lyn ned i nærmeste fjende for 150 skade. 3 ladninger.', brug: { lyn: 150 } },

  // Permanent udstyr — passive bonusser
  rustenDolk: { navn: 'Rusten dolk', type: 'permanent', sjældenhed: 'almindelig', model: ADV + 'dagger', bonus: { skade: 4 }, pris: 150 },
  træskjold: { navn: 'Træskjold', type: 'permanent', sjældenhed: 'almindelig', model: ADV + 'shield_round', bonus: { rustning: 2 }, pris: 150 },
  jernsværd: { navn: 'Jernsværd', type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'sword_1handed', bonus: { skade: 9 } },
  ridderskjold: { navn: 'Ridderskjold', type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'shield_badge_color', bonus: { rustning: 4, hp: 80 } },
  koggeret: { navn: 'Jægerens kogger', type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'quiver', bonus: { angrebsfart: 0.15 } },
  magerensBog: { navn: 'Magerens bog', type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'spellbook_open', bonus: { mana: 100, manaRegen: 1.5 } },
  krigsøkse: { navn: 'Krigsøkse', type: 'permanent', sjældenhed: 'episk', model: ADV + 'axe_2handed', bonus: { skade: 16 } },
  pigskjold: { navn: 'Pigskjold', type: 'permanent', sjældenhed: 'episk', model: ADV + 'shield_spikes_color', bonus: { rustning: 6, retur: 0.25 }, ekstra: 'Sender 25 % af nærkampsskade tilbage.' },
  stormstav: { navn: 'Stormstav', type: 'permanent', sjældenhed: 'episk', model: ADV + 'staff', bonus: { mana: 200, manaRegen: 3, hpRegen: 2 } },

  // Artefakter — unikke evner (bosser)
  tordenøksen: { navn: 'Tordenøksen', type: 'artefakt', sjældenhed: 'legendarisk', model: ADV + 'axe_1handed', farve: GULD, bonus: { skade: 14, lynChance: 0.2 }, ekstra: '20 % chance for at slå et lyn ned i målet og to fjender tæt på (120 skade).' },
  gravkongensSkjold: { navn: 'Gravkongens skjold', type: 'artefakt', sjældenhed: 'legendarisk', model: SKEL + 'skeleton_shield_large_a', bonus: { rustning: 8, hp: 200, blok: 0.25 }, ekstra: '25 % chance for at blokere 40 skade.' },
  kaptajnensKlinge: { navn: 'Kaptajnens klinge', type: 'artefakt', sjældenhed: 'legendarisk', model: ADV + 'sword_2handed_color', bonus: { skade: 24, livsstjæl: 0.12 }, ekstra: 'Helten heles for 12 % af den skade, den giver.' },

  // Opsamling — bruges straks
  guldpose: { navn: 'Guldpose', type: 'opsamling', sjældenhed: 'almindelig', model: DUN + 'coin_stack_small_gltf', tekst: 'Guld.', brug: { guld: 40 } },
  styrkensSkrift: { navn: 'Styrkens skrift', type: 'opsamling', sjældenhed: 'episk', model: ADV + 'spellbook_closed', farve: RØD, tekst: 'Permanent +60 liv og +2 skade.', brug: { skrift: { hp: 60, skade: 2 } } },
  visdommensSkrift: { navn: 'Visdommens skrift', type: 'opsamling', sjældenhed: 'sjælden', model: ADV + 'spellbook_closed', farve: BLÅ, tekst: 'Giver 250 erfaring.', brug: { xp: 250 } },
};

// Beskrivelse af bonusser til info-kortet
const BONUS_TEKST = {
  skade: (v) => `+${v} skade`, rustning: (v) => `+${v} rustning`, hp: (v) => `+${v} liv`, mana: (v) => `+${v} mana`,
  angrebsfart: (v) => `+${Math.round(v * 100)} % angrebsfart`, hpRegen: (v) => `+${v} liv pr. sek.`, manaRegen: (v) => `+${v} mana pr. sek.`,
};
export function beskriv(id) {
  const d = ITEMS[id];
  const linjer = Object.entries(d.bonus ?? {}).filter(([k]) => BONUS_TEKST[k]).map(([k, v]) => BONUS_TEKST[k](v));
  if (d.ekstra) linjer.push(d.ekstra);
  if (d.tekst) linjer.push(d.tekst);
  return linjer;
}

// Hvad lejrens sidste creep taber, efter sværhedsgrad (vægtede borde)
export const DROP = {
  1: { livseliksir: 30, manaeliksir: 12, kroensKrus: 12, guldpose: 18, rustenDolk: 14, træskjold: 14 },
  2: { storLivseliksir: 12, manaeliksir: 8, røgbombe: 10, hjemkald: 10, rustenDolk: 8, træskjold: 8, jernsværd: 12, ridderskjold: 12, koggeret: 10, magerensBog: 10 },
  3: { jernsværd: 14, ridderskjold: 14, koggeret: 14, magerensBog: 12, lynstav: 16, styrkensSkrift: 10, visdommensSkrift: 12, storLivseliksir: 8 },
  4: { krigsøkse: 22, pigskjold: 22, stormstav: 20, lynstav: 12, styrkensSkrift: 14, visdommensSkrift: 10 },
};
export const BOSS_DROP = { skeletter: ['gravkongensSkjold', 'tordenøksen'], plyndrere: ['kaptajnensKlinge', 'tordenøksen'] };

// Hvad købmanden sælger
export const BUTIK = ['livseliksir', 'storLivseliksir', 'manaeliksir', 'kroensKrus', 'røgbombe', 'hjemkald', 'rustenDolk', 'træskjold'];

export function træk(bord, tilf = Math.random) {
  const sum = Object.values(bord).reduce((a, b) => a + b, 0);
  let r = tilf() * sum;
  for (const [id, v] of Object.entries(bord)) { r -= v; if (r <= 0) return id; }
  return Object.keys(bord)[0];
}

export const alleItemModeller = () => [...new Set(Object.values(ITEMS).map((d) => d.model))];
