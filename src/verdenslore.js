// Verdens fortælling (M8): introen, verdenssiden i menuen, ekkoernes stumper og pilgrimmenes ord.
// Kanon: agents/AGENT_LORE.md. Spillets tekst er engelsk; kommentarer er danske.

// Introen efter essensvalget (nyt spil)
export const INTRO = [
  { titel: 'Vaelthar', tekst: 'The word means “that which is waking”. Once, a fifth power held the four peoples in balance. Then it was forgotten — so completely that no one alive can say its name. They call it The Unnamed.' },
  { titel: 'The Memory', tekst: 'In the quiet hall of Erevoss live The Memory: spirits who cannot forget. They fight no one. But when anything dies, its echo drifts to them as a silver light — and every echo holds a sliver of the forgotten name.' },
  { titel: 'Two peoples', tekst: 'At the far end of this land another people has built its halls. Only one of you will remain. Grow strong, destroy every one of their buildings — and watch the stones at the heart of the land: they glow as the world wakes.' },
];

// Verdenssiden i menuen (HTML)
export const VERDEN_HTML = `
<p><b>The Unnamed.</b> A fifth power that once kept the four peoples in balance. It did not die — it was forgotten, and a thing without a name has no edges. When enough of its name is remembered, it wakes. That is The Awakening.</p>
<p><b>Your enemy</b> is one of the four peoples, chosen at random, at the far end of the world. You win when all of their buildings are destroyed — and lose when all of yours are.</p>
<p><b>The Memory.</b> Not undead, not an enemy — spirits who cannot forget. Their home is Erevoss, a pale hall far from both peoples, guarded by spirits who defend only themselves. Every echo that reaches them wakes another guardian and brings The Awakening closer. They believe that remembering the name will heal the world.</p>
<p><b>Echoes.</b> Silver lights that rise from the fallen and drift to Erevoss. Walk your hero through one to catch it: you gain mana and experience, and hear what it remembers. Erevoss does not get it.</p>
<p><b>The world's three ages.</b> <i>Balance</i> at first. <i>The Fall</i> after 12 minutes: mines yield less, and hungry creeps from camps near your base raid it — kill the raiders to win back what they carry. <i>The Awakening</i> (about 25 minutes, sooner the more echoes reach Erevoss): the servants of The Unnamed rise at the Waking Stones in the middle of the world and guard them. They hunt no one — but whoever defeats them claims the best treasures.</p>
<p><b>The Waking Stones.</b> A ring of old pillars around the tavern. They glow faintly as the world remembers, and burn violet when it wakes.</p>
<p><b>Name-stones and landmarks.</b> Seven Name-stones lie scattered across every map, each holding a sliver of the forgotten name. Walk your hero close to read one: you learn more, and gain experience — but the world remembers a little more, and The Awakening comes a little sooner. Read all seven for a reward. Old walls, graves and abandoned camps tell their own stories when you find them. Tap a landmark (with nothing selected) to read it again.</p>
<p><b>Creep camps.</b> Signs show how dangerous a camp is: skulls from Easy (1) to Deadly (4), a crown for bosses, and a star for the Ancients — the oldest memories in the world, at its far corners, guarding its rarest treasures.</p>
<p><b>The four peoples.</b> The Architects build walls against forgetting. The Tide remember The Unnamed as a storm that never asked. The Memory hold every echo. The Dreaming walk between worlds and say it is only sleeping.</p>`;

// Hvad ekkoerne husker (én stump pr. fanget ekko, højst hvert 25. sekund)
export const EKKO_STUMPER = [
  '“…a field of barley, and someone calling a child home…”',
  '“…we built the first wall here. It was not enough…”',
  '“…the storm had a name once. We sang it at the shore…”',
  '“…it left like a door closing in every house at once…”',
  '“…four peoples, four pieces of one word…”',
  '“…we did not lose it. We let it go…”',
  '“…Erevoss was green, before we started remembering everything…”',
  '“…the Dreaming said it was only sleeping. We laughed…”',
  '“…a name is a leash. Who held it?…”',
  '“…the first sound of it is like wind over ash…”',
  '“…if we remember it whole, it comes back whole…”',
  '“…if we remember it wrong, something else comes back…”',
  '“…my brother fell at the ford. He is still falling, in me…”',
  '“…the stones in the middle of the world are listening…”',
  '“…it has no name, so it has no edges…”',
  '“…we are not dead. We simply cannot stop…”',
];

export const PILGRIM_NAVNE = ['Ysra', 'Old Tamm', 'Brother Hollin', 'Neve', 'Orrin', 'Sister Ael'];

export const PILGRIM_ORD = [
  'We walk to the stones. Something there is listening.',
  'The Memory are not cruel. They are only full.',
  'Every soul that falls drifts north-east. Haven’t you seen the lights?',
  'Catch a falling echo and you’ll hear what it remembers.',
  'In the Fall, the hungry wilds come for whoever has full storehouses.',
  'My grandmother said the world had five voices once.',
  'When the stones burn violet, run — or stand very still.',
  'The far corners hold things older than names. Leave them be, unless you are very strong.',
  'The crows always know where the fighting was.',
];

// Gaver fra flygtninge i Faldet
export const GAVE_ORD = [
  'We fled the Fall. Take this — it is all we carried.',
  'The wilds are hungry now. Your walls are the only ones still standing.',
];
