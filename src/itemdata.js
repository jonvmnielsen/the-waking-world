// Items (GDD afsnit 8): typer, sjældenhed, bonusser og drop-borde.
// model = sti i public/assets, farve = valgfri farvetone (gange) på modellen.

export const SJÆLDENHED = {
  almindelig: { navn: 'Common', farve: '#e9e4d8', hex: 0xe9e4d8 },
  sjælden: { navn: 'Rare', farve: '#4fa3ff', hex: 0x4fa3ff },
  episk: { navn: 'Epic', farve: '#b46bff', hex: 0xb46bff },
  legendarisk: { navn: 'Legendary', farve: '#ff9a2e', hex: 0xff9a2e },
};

export const TYPE_NAVN = { forbrug: 'Consumable', opladning: 'Charged', permanent: 'Equipment', artefakt: 'Artifact', opsamling: 'Pickup' };

const ADV = 'kaykit-adventurers/', DUN = 'kaykit-dungeon/', SKEL = 'kaykit-skeletons/';
const RØD = [1, 0.35, 0.3], BLÅ = [0.45, 0.6, 1.25], LILLA = [0.8, 0.45, 1.2], GULD = [1.25, 1.0, 0.45], GRØN = [0.45, 1.2, 0.45];

export const ITEMS = {
  // Forbrug — bruges op
  livseliksir: { navn: 'Healing Potion', type: 'forbrug', sjældenhed: 'almindelig', model: DUN + 'bottle_a_labeled_green_gltf', farve: RØD, tekst: 'Instantly restores 250 health.', brug: { heal: 250 }, pris: 75 },
  storLivseliksir: { navn: 'Greater Healing Potion', type: 'forbrug', sjældenhed: 'sjælden', model: DUN + 'bottle_c_green_gltf', farve: RØD, tekst: 'Instantly restores 500 health.', brug: { heal: 500 }, pris: 150 },
  manaeliksir: { navn: 'Mana Potion', type: 'forbrug', sjældenhed: 'almindelig', model: DUN + 'bottle_b_green_gltf', farve: BLÅ, tekst: 'Instantly restores 150 mana.', brug: { mana: 150 }, pris: 60 },
  kroensKrus: { navn: 'Tavern Mug', type: 'forbrug', sjældenhed: 'almindelig', model: ADV + 'mug_full', tekst: 'Heals 30 health per second for 8 seconds.', brug: { helOverTid: [30, 8] }, pris: 50 },
  røgbombe: { navn: 'Smoke Bomb', type: 'forbrug', sjældenhed: 'sjælden', model: ADV + 'smokebomb', tekst: 'Enemies lose sight of you and return home. You stay hidden for 4 seconds.', brug: { røg: 4 }, pris: 90 },
  hjemkald: { navn: 'Tome of Homecoming', type: 'forbrug', sjældenhed: 'sjælden', model: ADV + 'spellbook_closed', farve: LILLA, tekst: 'After a short ritual your hero returns home.', brug: { hjem: true }, pris: 120 },

  // Opladning — et antal brug
  lynstav: { navn: 'Lightning Wand', type: 'opladning', sjældenhed: 'sjælden', model: ADV + 'wand', farve: BLÅ, ladninger: 3, tekst: 'Strikes the nearest enemy with lightning for 150 damage. 3 charges.', brug: { lyn: 150 } },

  // Permanent udstyr — passive bonusser
  rustenDolk: { navn: 'Rusty Dagger', type: 'permanent', sjældenhed: 'almindelig', model: ADV + 'dagger', bonus: { skade: 4, agi: 2 }, pris: 150 },
  træskjold: { navn: 'Wooden Shield', type: 'permanent', sjældenhed: 'almindelig', model: ADV + 'shield_round', bonus: { rustning: 2, str: 1 }, pris: 150 },
  jernsværd: { navn: 'Iron Sword', type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'sword_1handed', bonus: { skade: 9, str: 2 } },
  ridderskjold: { navn: "Knight's Shield", type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'shield_badge_color', bonus: { rustning: 4, str: 4 } },
  koggeret: { navn: "Hunter's Quiver", type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'quiver', bonus: { angrebsfart: 0.1, agi: 5 } },
  magerensBog: { navn: "Mage's Tome", type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'spellbook_open', bonus: { int: 6, manaRegen: 1 } },
  krigsøkse: { navn: 'War Axe', type: 'permanent', sjældenhed: 'episk', model: ADV + 'axe_2handed', bonus: { skade: 16, str: 4 } },
  pigskjold: { navn: 'Spiked Shield', type: 'permanent', sjældenhed: 'episk', model: ADV + 'shield_spikes_color', bonus: { rustning: 6, agi: 3, retur: 0.25 }, ekstra: 'Returns 25% of melee damage to the attacker.' },
  stormstav: { navn: 'Storm Staff', type: 'permanent', sjældenhed: 'episk', model: ADV + 'staff', bonus: { int: 10, manaRegen: 2, hpRegen: 2 } },

  // Artefakter — unikke evner (bosser)
  tordenøksen: { navn: 'Thunder Axe', type: 'artefakt', sjældenhed: 'legendarisk', model: ADV + 'axe_1handed', farve: GULD, bonus: { skade: 14, str: 5, lynChance: 0.2 }, ekstra: '20% chance to call lightning on the target and two nearby enemies (120 damage).' },
  gravkongensSkjold: { navn: "Grave King's Shield", type: 'artefakt', sjældenhed: 'legendarisk', model: SKEL + 'skeleton_shield_large_a', bonus: { rustning: 8, str: 8, blok: 0.25 }, ekstra: '25% chance to block 40 damage.' },
  kaptajnensKlinge: { navn: "Captain's Blade", type: 'artefakt', sjældenhed: 'legendarisk', model: ADV + 'sword_2handed_color', bonus: { skade: 24, agi: 6, livsstjæl: 0.12 }, ekstra: 'Heals the hero for 12% of the damage dealt.' },

  // Opsamling — bruges straks. Bøgerne øger egenskaberne permanent.
  guldpose: { navn: 'Pouch of Gold', type: 'opsamling', sjældenhed: 'almindelig', model: DUN + 'coin_stack_small_gltf', tekst: 'Gold.', brug: { guld: 40 } },
  styrkensSkrift: { navn: 'Tome of Strength', type: 'opsamling', sjældenhed: 'episk', model: ADV + 'spellbook_closed', farve: RØD, tekst: 'Permanently +2 Strength.', brug: { bog: { str: 2 } }, pris: 350 },
  smidighedensSkrift: { navn: 'Tome of Agility', type: 'opsamling', sjældenhed: 'episk', model: ADV + 'spellbook_closed', farve: GRØN, tekst: 'Permanently +2 Agility.', brug: { bog: { agi: 2 } }, pris: 350 },
  klogskabensSkrift: { navn: 'Tome of Intelligence', type: 'opsamling', sjældenhed: 'episk', model: ADV + 'spellbook_closed', farve: BLÅ, tekst: 'Permanently +2 Intelligence.', brug: { bog: { int: 2 } }, pris: 350 },
  kraftensSkrift: { navn: 'Tome of Power', type: 'opsamling', sjældenhed: 'legendarisk', model: ADV + 'spellbook_closed', farve: GULD, tekst: 'Permanently +2 to all attributes.', brug: { bog: { str: 2, agi: 2, int: 2 } } },
  visdommensSkrift: { navn: 'Tome of Experience', type: 'opsamling', sjældenhed: 'sjælden', model: ADV + 'spellbook_closed', farve: LILLA, tekst: 'Grants 250 experience.', brug: { xp: 250 } },
};

// Beskrivelse af bonusser til info-kortet
const BONUS_TEKST = {
  str: (v) => `+${v} Strength`, agi: (v) => `+${v} Agility`, int: (v) => `+${v} Intelligence`,
  skade: (v) => `+${v} damage`, rustning: (v) => `+${v} armor`, hp: (v) => `+${v} health`, mana: (v) => `+${v} mana`,
  angrebsfart: (v) => `+${Math.round(v * 100)}% attack speed`, hpRegen: (v) => `+${v} health per second`, manaRegen: (v) => `+${v} mana per second`,
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
  2: { storLivseliksir: 12, manaeliksir: 8, røgbombe: 10, hjemkald: 10, rustenDolk: 8, træskjold: 8, jernsværd: 12, ridderskjold: 12, koggeret: 10, magerensBog: 10, styrkensSkrift: 4, smidighedensSkrift: 4, klogskabensSkrift: 4 },
  3: { jernsværd: 14, ridderskjold: 14, koggeret: 14, magerensBog: 12, lynstav: 16, styrkensSkrift: 8, smidighedensSkrift: 8, klogskabensSkrift: 8, visdommensSkrift: 12, storLivseliksir: 8 },
  4: { krigsøkse: 22, pigskjold: 22, stormstav: 20, lynstav: 12, styrkensSkrift: 10, smidighedensSkrift: 10, klogskabensSkrift: 10, kraftensSkrift: 6, visdommensSkrift: 10 },
};
export const BOSS_DROP = { skeletter: ['gravkongensSkjold', 'tordenøksen'], plyndrere: ['kaptajnensKlinge', 'tordenøksen'] };

// Hvad købmanden sælger
export const BUTIK = ['livseliksir', 'storLivseliksir', 'manaeliksir', 'kroensKrus', 'røgbombe', 'hjemkald', 'rustenDolk', 'træskjold', 'styrkensSkrift', 'smidighedensSkrift', 'klogskabensSkrift'];

export function træk(bord, tilf = Math.random) {
  const sum = Object.values(bord).reduce((a, b) => a + b, 0);
  let r = tilf() * sum;
  for (const [id, v] of Object.entries(bord)) { r -= v; if (r <= 0) return id; }
  return Object.keys(bord)[0];
}

export const alleItemModeller = () => [...new Set(Object.values(ITEMS).map((d) => d.model))];
