// Items (GDD afsnit 8): typer, sjældenhed, bonusser og drop-borde.
// model = sti i public/assets, farve = valgfri farvetone (gange) på modellen.

export const SJÆLDENHED = {
  almindelig: { navn: 'Common', farve: '#e9e4d8', hex: 0xe9e4d8 },
  sjælden: { navn: 'Rare', farve: '#4fa3ff', hex: 0x4fa3ff },
  episk: { navn: 'Epic', farve: '#b46bff', hex: 0xb46bff },
  legendarisk: { navn: 'Legendary', farve: '#ff9a2e', hex: 0xff9a2e },
};

export const TYPE_NAVN = { forbrug: 'Consumable', opladning: 'Charged', permanent: 'Equipment', artefakt: 'Artifact', opsamling: 'Pickup' };

const ADV = 'kaykit-adventurers/', ADV2 = 'kaykit-adventurers-2/', DUN = 'kaykit-dungeon/', SKEL = 'kaykit-skeletons/', GEAR = 'forge-lowpoly/gear_';
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
  rustenDolk: { plads: 'våben', navn: 'Rusty Dagger', type: 'permanent', sjældenhed: 'almindelig', model: ADV + 'dagger', bonus: { skade: 4, agi: 2 }, pris: 150 },
  træskjold: { plads: 'skjold', navn: 'Wooden Shield', type: 'permanent', sjældenhed: 'almindelig', model: ADV + 'shield_round', bonus: { rustning: 2, str: 1 }, pris: 150 },
  jernsværd: { plads: 'våben', navn: 'Iron Sword', type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'sword_1handed', bonus: { skade: 9, str: 2 } },
  ridderskjold: { plads: 'skjold', navn: "Knight's Shield", type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'shield_badge_color', bonus: { rustning: 4, str: 4 } },
  koggeret: { plads: 'skjold', navn: "Hunter's Quiver", type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'quiver', bonus: { angrebsfart: 0.1, agi: 5 } },
  magerensBog: { plads: 'skjold', navn: "Mage's Tome", type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'spellbook_open', bonus: { int: 6, manaRegen: 1 } },
  krigsøkse: { plads: 'våben', navn: 'War Axe', type: 'permanent', sjældenhed: 'episk', model: ADV + 'axe_2handed', bonus: { skade: 16, str: 4 } },
  pigskjold: { plads: 'skjold', navn: 'Spiked Shield', type: 'permanent', sjældenhed: 'episk', model: ADV + 'shield_spikes_color', bonus: { rustning: 6, agi: 3, retur: 0.25 }, ekstra: 'Returns 25% of melee damage to the attacker.' },
  // Flere våben og skjolde (M13)
  håndøkse: { plads: 'våben', navn: 'Hand Axe', type: 'permanent', sjældenhed: 'almindelig', model: ADV + 'axe_1handed', bonus: { skade: 6, str: 1 }, pris: 170 },
  storsværd: { plads: 'våben', navn: 'Greatsword', type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'sword_2handed', bonus: { skade: 12, krit: 0.04 } },
  jagtbue: { plads: 'våben', navn: 'Hunting Bow', type: 'permanent', sjældenhed: 'sjælden', model: ADV2 + 'bow_withstring', bonus: { skade: 7, agi: 3, angrebsfart: 0.06 } },
  armbrøst: { plads: 'våben', navn: 'Heavy Crossbow', type: 'permanent', sjældenhed: 'episk', model: ADV + 'crossbow_1handed', bonus: { skade: 14, krit: 0.06, kritSkade: 0.25 } },
  gløderod: { plads: 'våben', navn: 'Emberwand', type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'wand', farve: [1.3, 0.6, 0.3], bonus: { int: 4, evne: 0.1, mana: 40 } },
  tårnskjold: { plads: 'skjold', navn: 'Tower Shield', type: 'permanent', sjældenhed: 'sjælden', model: ADV + 'shield_square', bonus: { rustning: 5, hp: 80 } },
  rundskjold: { plads: 'skjold', navn: 'Painted Roundshield', type: 'permanent', sjældenhed: 'almindelig', model: ADV + 'shield_round_color', bonus: { rustning: 2, agi: 1 }, pris: 160 },
  // Hoved, krop, fødder og smykker (egne modeller fra forge-lowpoly)
  jernhjelm: { plads: 'hoved', navn: 'Iron Helm', type: 'permanent', sjældenhed: 'almindelig', model: GEAR + 'helm_iron', bonus: { rustning: 2, hp: 40 }, pris: 140 },
  hornhjelm: { plads: 'hoved', navn: 'Horned Helm', type: 'permanent', sjældenhed: 'sjælden', model: GEAR + 'helm_horned', bonus: { rustning: 2, str: 3, skade: 3 } },
  hætte: { plads: 'hoved', navn: "Wanderer's Hood", type: 'permanent', sjældenhed: 'almindelig', model: GEAR + 'hood', bonus: { int: 2, manaRegen: 0.5 }, pris: 140 },
  brynje: { plads: 'krop', navn: 'Plate Cuirass', type: 'permanent', sjældenhed: 'sjælden', model: GEAR + 'chest_plate', bonus: { rustning: 5, hp: 120 } },
  læderbrynje: { plads: 'krop', navn: 'Leather Jerkin', type: 'permanent', sjældenhed: 'almindelig', model: GEAR + 'chest_leather', bonus: { rustning: 2, agi: 2 }, pris: 160 },
  læderstøvler: { plads: 'fødder', navn: 'Travel Boots', type: 'permanent', sjældenhed: 'almindelig', model: GEAR + 'boots_leather', bonus: { fart: 0.08 }, pris: 150 },
  jernstøvler: { plads: 'fødder', navn: 'Iron Greaves', type: 'permanent', sjældenhed: 'sjælden', model: GEAR + 'boots_iron', bonus: { fart: 0.05, rustning: 2, hp: 50 } },
  amulet: { plads: 'smykke', navn: 'Sky Amulet', type: 'permanent', sjældenhed: 'sjælden', model: GEAR + 'amulet', bonus: { mana: 60, cdr: 0.08 } },
  ring: { plads: 'smykke', navn: 'Blood Ring', type: 'permanent', sjældenhed: 'sjælden', model: GEAR + 'ring', bonus: { livsstjæl: 0.05, krit: 0.03 } },
  stormstav: { plads: 'våben', navn: 'Storm Staff', type: 'permanent', sjældenhed: 'episk', model: ADV + 'staff', bonus: { int: 10, manaRegen: 2, hpRegen: 2 } },

  // Artefakter — unikke evner (bosser)
  tordenøksen: { plads: 'våben', navn: 'Thunder Axe', type: 'artefakt', sjældenhed: 'legendarisk', model: ADV + 'axe_1handed', farve: GULD, bonus: { skade: 14, str: 5, lynChance: 0.2 }, ekstra: '20% chance to call lightning on the target and two nearby enemies (120 damage).' },
  gravkongensSkjold: { plads: 'skjold', navn: "Grave King's Shield", type: 'artefakt', sjældenhed: 'legendarisk', model: SKEL + 'skeleton_shield_large_a', bonus: { rustning: 8, str: 8, blok: 0.25 }, ekstra: '25% chance to block 40 damage.' },
  kaptajnensKlinge: { plads: 'våben', navn: "Captain's Blade", type: 'artefakt', sjældenhed: 'legendarisk', model: ADV + 'sword_2handed_color', bonus: { skade: 24, agi: 6, livsstjæl: 0.12 }, ekstra: 'Heals the hero for 12% of the damage dealt.' },

  // De Ældgamles skatte (M8) — kun fra Ancient-lejrene
  navnebrækkeren: { plads: 'våben', navn: 'Namebreaker', type: 'artefakt', sjældenhed: 'legendarisk', model: ADV + 'sword_2handed_color', farve: [0.7, 1.15, 1.35], bonus: { skade: 26, str: 8, lynChance: 0.15 }, ekstra: 'Forged before names existed. 15% chance to call lightning on the target and two nearby enemies.' },
  førsteMur: { plads: 'skjold', navn: 'Aegis of the First Wall', type: 'artefakt', sjældenhed: 'legendarisk', model: ADV + 'shield_square_color', farve: [0.75, 1.1, 1.3], bonus: { rustning: 9, str: 6, hp: 250, retur: 0.3 }, ekstra: 'Returns 30% of melee damage to the attacker.' },
  ekkolygten: { plads: 'smykke', navn: 'Lantern of Echoes', type: 'artefakt', sjældenhed: 'legendarisk', model: 'kaykit-halloween/lantern_standing', farve: [0.7, 1.1, 1.4], bonus: { int: 12, mana: 150, manaRegen: 3, livsstjæl: 0.1, ekko: 1 }, ekstra: 'Heals 10% of damage dealt. Echoes drift to you from twice as far.' },

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
  krit: (v) => `+${Math.round(v * 100)}% critical chance`, kritSkade: (v) => `+${Math.round(v * 100)}% critical damage`, fart: (v) => `+${Math.round(v * 100)}% movement speed`,
  cdr: (v) => `${Math.round(v * 100)}% shorter cooldowns`, evne: (v) => `+${Math.round(v * 100)}% ability power`, livsstjæl: (v) => `${Math.round(v * 100)}% life steal`,
  guldFund: (v) => `+${Math.round(v * 100)}% gold`, xpBonus: (v) => `+${Math.round(v * 100)}% experience`, retur: (v) => `Returns ${Math.round(v * 100)}% of melee damage`, blok: (v) => `${Math.round(v * 100)}% chance to block 40 damage`,
};
export const bonusTekst = (k, v) => BONUS_TEKST[k]?.(v);
export function beskriv(id, bonus) {
  const d = ITEMS[id];
  const linjer = Object.entries(bonus ?? d.bonus ?? {}).filter(([k]) => BONUS_TEKST[k]).map(([k, v]) => BONUS_TEKST[k](v));
  if (d.ekstra) linjer.push(d.ekstra);
  if (d.tekst) linjer.push(d.tekst);
  return linjer;
}

// Hvad lejrens sidste creep taber, efter sværhedsgrad (vægtede borde)
export const DROP = {
  1: { livseliksir: 22, manaeliksir: 8, kroensKrus: 8, guldpose: 10, rustenDolk: 7, træskjold: 7, håndøkse: 6, rundskjold: 6, jernhjelm: 6, hætte: 6, læderbrynje: 6, læderstøvler: 6 },
  2: { storLivseliksir: 10, manaeliksir: 6, røgbombe: 7, hjemkald: 7, jernsværd: 8, ridderskjold: 7, koggeret: 6, magerensBog: 6, jagtbue: 6, gløderod: 6, hornhjelm: 6, brynje: 5, jernstøvler: 6, amulet: 5, ring: 5, læderstøvler: 4, styrkensSkrift: 3, smidighedensSkrift: 3, klogskabensSkrift: 3 },
  3: { jernsværd: 7, storsværd: 7, ridderskjold: 7, tårnskjold: 7, koggeret: 6, magerensBog: 6, jagtbue: 6, gløderod: 6, lynstav: 8, hornhjelm: 6, brynje: 7, jernstøvler: 6, amulet: 7, ring: 7, styrkensSkrift: 5, smidighedensSkrift: 5, klogskabensSkrift: 5, visdommensSkrift: 8, storLivseliksir: 6 },
  6: { navnebrækkeren: 1, førsteMur: 1, ekkolygten: 1 },
  4: { krigsøkse: 16, pigskjold: 16, stormstav: 14, armbrøst: 14, storsværd: 8, brynje: 8, amulet: 8, ring: 8, lynstav: 10, styrkensSkrift: 10, smidighedensSkrift: 10, klogskabensSkrift: 10, kraftensSkrift: 6, visdommensSkrift: 10 },
};
export const OLDTID_DROP = ['navnebrækkeren', 'førsteMur', 'ekkolygten'];
export const BOSS_DROP = { skeletter: ['gravkongensSkjold', 'tordenøksen'], plyndrere: ['kaptajnensKlinge', 'tordenøksen'] };

// Hvad købmanden sælger
export const BUTIK = ['livseliksir', 'storLivseliksir', 'manaeliksir', 'kroensKrus', 'røgbombe', 'hjemkald', 'rustenDolk', 'håndøkse', 'træskjold', 'rundskjold', 'jernhjelm', 'hætte', 'læderbrynje', 'læderstøvler', 'styrkensSkrift', 'smidighedensSkrift', 'klogskabensSkrift'];

export function træk(bord, tilf = Math.random) {
  const sum = Object.values(bord).reduce((a, b) => a + b, 0);
  let r = tilf() * sum;
  for (const [id, v] of Object.entries(bord)) { r -= v; if (r <= 0) return id; }
  return Object.keys(bord)[0];
}

export const alleItemModeller = () => [...new Set(Object.values(ITEMS).map((d) => d.model))];

// Salgspris ved en butik: halvdelen af købsprisen; items der ikke sælges i butikker efter sjældenhed
const SALG = { almindelig: 40, sjælden: 100, episk: 200, legendarisk: 400 };
export function salgsPris(id, rul) {
  const d = ITEMS[id];
  if (rul) return Math.max(d.pris ? Math.floor(d.pris / 2) : 0, SALG[rul.sj] ?? 40) + Object.keys(rul.aff ?? {}).length * 15;   // rullet udstyr
  return d.pris ? Math.floor(d.pris / 2) : SALG[d.sjældenhed] ?? 40;
}
