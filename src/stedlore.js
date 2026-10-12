// Lore i verden (M9): mindesmærker man opdager ved at udforske, Navnestenene og regionernes historie.
// Teksten er engelsk (spillets sprog); kommentarer er danske. Kanon: agents/AGENT_LORE.md.

// Navnestenene: syv sten med hver sin stump af Den Unavngivnes navn. Helten skal gå hen og læse dem.
export const NAVNESTEN = [
  'The first stone remembers a sound like wind over ash.',
  'Carved, scratched out, carved again, scratched out again. Someone kept trying.',
  'The Architects wrote it here in iron letters. The iron has rusted to nothing, but the holes remain.',
  'A Tide song is cut into the base: “it did not ask — it did not need to.”',
  'Seven hands are pressed into the stone. One of them is not a hand.',
  'The Dreaming left only a shadow here, on the side where the stone casts none.',
  'The last stone is warm. Something on the other side is reading too.',
];
export const NAVN_FÆRDIG = 'You have read every stone. The name is almost on your tongue — and in the heart of the world, something turns over in its sleep.';

// Andre mindesmærker: [navn, tekst] pr. slags. Hvert kort trækker sine egne.
export const MINDER = {
  mur: [
    ['The First Wall', 'The Architects built this to keep the forgetting out. It kept nothing out.'],
    ['Valcrest Watch', 'A border post of the Architects. The duty roster is carved by the door; every name on it has been scratched away.'],
    ['The Broken Bulwark', 'Arrow slits face inward. Whatever they were guarding against was already inside.'],
  ],
  grav: [
    ['Barrow of Ruhk the Unbowed', 'A Tide chieftain who walked into the storm to ask it its name. They found only his axe.'],
    ['The Quiet Graves', 'No names on these stones either. The Memory come here sometimes, just to stand.'],
    ['Tomb of the Last Singer', 'She knew all four hundred verses of the old song. The last verse is missing from every copy.'],
  ],
  lejr: [
    ["Pilgrims' Rest", 'Cold ashes and a bedroll. Whoever slept here left in a hurry, toward the stones.'],
    ['The Toll Camp', 'Someone charged travellers to pass. The cashbox is empty but for a carved coin with no face.'],
    ["Hunters' Hollow", 'Antlers on a post, and a warning scratched below: “the deer are listening too.”'],
  ],
};

// Hvad man ser, når helten første gang går ind i en region
export const REGION_LORE = {
  hule: 'Cold stone and old air. The world above feels very far away.',
  askemarken: 'Grey soil that still remembers fire. Good land, if you do not dig too deep.',
  skoven: 'The trees grow close here, as if to keep a secret between them.',
  gravlandet: 'No names on any stone. The Memory walk here and disturb nothing.',
  bjergene: 'The oldest rock in Vaelthar. The miners say it hums at night.',
  sumpen: 'Slow water and drowned bells. Do not follow the lights.',
};

// Creep-lejrenes navne og en linje om dem (vises på skiltet og i krøniken, når lejren opdages)
export const LEJR_LORE = {
  plyndrere: {
    navne: ['Ashfang Raiders', 'The Red Ledger Band', 'Crowtooth Camp', "Gallow's Crew", 'The Toll-takers', 'Smokehill Bandits', 'The Last Coin Company', 'Brokenwheel Camp', 'The Hungry Banners', 'Saltmarsh Cutthroats'],
    linjer: ['They rob whoever passes, and keep a ledger of every coin.', 'Deserters from three different wars, all of them forgotten.', 'They say they are saving up to buy a name.', 'Their fires never go out. They are afraid of what comes in the dark.'],
  },
  skeletter: {
    navne: ['The Restless Barrow', 'Bonefield', 'The Unquiet Dead', 'Hollow of Old Bones', 'The Sleepless Watch', 'Ribcage Hill', 'The Forgotten Garrison', 'Mourners’ Rise'],
    linjer: ['Bones that remember nothing but their posts.', 'Not The Memory — just the dead who forgot to lie down.', 'They guard a grave whose name has worn away.', 'Old soldiers, still waiting for an order that will never come.'],
  },
  oldtid: {
    navne: ['The First Ring', 'The Ring Before Names'],
    linjer: ['The oldest memories in Vaelthar, grown so heavy they took bodies. Do not come here weak.'],
  },
};
export const BOSS_NAVNE = { skeletter: "The Grave King's Hall", plyndrere: "The Raider Captain's Hold" };
