// Heltenes stemmer (Jon: meget mere personlighed). Hver helt har sin egen måde at tale på; orkerne taler
// kort og hårdt, menneskene mere formelt (AGENT_LORE.md). Teksten er engelsk. Bruges af heltreplik.js.
// Slags: valgt (helten trykkes), angrib (ordre), level, boss, lavt (lavt liv), genopliv, fjendehelt
// (modstanderens helt dør), legendarisk (fund), ascension, epitet (nyt tilnavn).

export const STEMMER = {
  warchief: {
    valgt: ['Speak.', 'My axe is thirsty.', 'Point me at something.', 'Who needs breaking?', 'I am listening. Barely.'],
    angrib: ['Blood and thunder!', 'Crush them!', 'For the Tide!', 'Come here!'],
    level: ['Stronger.', 'More. Always more.', 'Good. Again.'],
    boss: ['It fell. They all fall.', 'Big. Not big enough.'],
    lavt: ['Only a scratch!', 'Not today!'],
    genopliv: ['Not yet.', 'The Tide returns.'],
    fjendehelt: ['Your champion is dust.', 'Who leads you now?'],
    legendarisk: ['This one sings in my hand.', 'Worthy. Finally.'],
    ascension: ['I am more than I was.'],
    epitet: ['A name to fear. Good.'],
  },
  stormsinger: {
    valgt: ['The wind hears you.', 'Speak, and the sky answers.', 'I hear thunder far off.', 'The waves are restless.'],
    angrib: ['Feel the storm!', 'Lightning finds you.', 'Drown!'],
    level: ['The storm grows.', 'The sea remembers me.', 'Louder now.'],
    boss: ['Even mountains fall to rain.', 'The sky has spoken.'],
    lavt: ['The tide pulls back…', 'Shelter me, storm!'],
    genopliv: ['The sea gives back what it takes.', 'I return with the rain.'],
    fjendehelt: ['Your leader is driftwood.'],
    legendarisk: ['It hums like a coming storm.'],
    ascension: ['I am the storm now.'],
    epitet: ['The wind carries my name.'],
  },
  wildtrack: {
    valgt: ['Tracks everywhere.', 'Quiet. I hear prey.', 'Where to, chief?', 'My spears are ready.'],
    angrib: ['Marked.', 'No escape.', 'Run. It makes it fun.'],
    level: ['Sharper eyes.', 'The hunt teaches.'],
    boss: ['Biggest trophy yet.', 'A pelt for the hall.'],
    lavt: ['Wounded… not caught.', 'Back off, back off!'],
    genopliv: ['Back on the trail.'],
    fjendehelt: ['The great prey falls.'],
    legendarisk: ['Now that is a find.'],
    ascension: ['The hunt has changed me.'],
    epitet: ['They will tell stories of this hunt.'],
  },
  knightCommander: {
    valgt: ['At your command.', 'Orders?', 'Steel and resolve.', 'The line holds.'],
    angrib: ['Hold the line!', 'For the Architects!', 'Forward!'],
    level: ['Discipline rewarded.', 'I grow surer.'],
    boss: ['Order is restored.', 'Let it be written.'],
    lavt: ['I will not yield!', 'Shields… up!'],
    genopliv: ['I stand again.', 'Duty does not end.'],
    fjendehelt: ['Their banner falls.'],
    legendarisk: ['A blade from the old forges.'],
    ascension: ['I am sworn anew.'],
    epitet: ['I will bear the name with honour.'],
  },
  lorewarden: {
    valgt: ['Every name is a story.', 'I was reading. Yes?', 'Knowledge is a lamp.', 'Quickly, please.'],
    angrib: ['By the old law!', 'Burn in the old light.', 'Be unwritten.'],
    level: ['A new page.', 'I understand more.'],
    boss: ['Let that be recorded.', 'A footnote now.'],
    lavt: ['The ink runs thin…', 'Not the last chapter!'],
    genopliv: ['The book reopens.'],
    fjendehelt: ['Their story ends here.'],
    legendarisk: ['Ancient. Remarkable. Mine.'],
    ascension: ['I read the final page — and turned it.'],
    epitet: ['Write it down. Carefully.'],
  },
  rangerCaptain: {
    valgt: ['Eyes open.', 'I see it.', 'Name the target.', 'Bolts loaded.'],
    angrib: ['In range.', 'One shot.', 'Loose!'],
    level: ['Steadier hands.', 'Cleaner shots.'],
    boss: ['Clean kill.', 'Through the heart.'],
    lavt: ['Too close!', 'Falling back!'],
    genopliv: ['Back on watch.'],
    fjendehelt: ['Their captain is down.'],
    legendarisk: ['Perfect balance.'],
    ascension: ['I see further now.'],
    epitet: ['Fine. Just keep it short.'],
  },
};

// Fælles for racen (steder og verden)
export const RACE_STEMMER = {
  tide: {
    ekko: ['It whispers… a name?', 'Cold. Like a memory.'],
    erevoss: ['Quiet here. Too quiet.', 'Grey grass. Grey sky. Grey ghosts.'],
    opvågning: ['Something wakes. Let it come.', 'The stones burn. Good.'],
  },
  arkitekter: {
    ekko: ['A voice… from the records?', 'Someone remembered this.'],
    erevoss: ['The hall of the dead. Tread softly.', 'So many names, and none written.'],
    opvågning: ['The stones are waking. Stay alert.', 'Something older than our walls.'],
  },
};
