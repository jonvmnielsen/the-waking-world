// Enhedernes stemmer (M14, GDD 17b søjle 4: personlighed i hver eneste enhed). Hver slags enhed svarer
// med sine egne ord, når man vælger den, giver den en ordre, når den er klar, og når den er færdig med et
// byggeri — og bliver irriteret, hvis man bliver ved med at trykke på den. Egne ord, engelsk tekst.
// Orkerne taler kort og hårdt; menneskene høfligt og lidt tørt; lejesvendene tænker på penge.
// Slags: valgt, gå, angrib, høst, byg, færdig (byggeri færdigt), klar (lige trænet), irriteret (i rækkefølge).

const LEJESVEND = {
  valgt: ['Paid in full?', "What's the job?", 'Coin first, questions later.'],
  gå: ['For the right price.', 'Moving.', 'Fine, fine.'],
  angrib: ["That one's worth a bonus.", 'Nothing personal.', 'Earning my pay!'],
  klar: ['Contract signed.'],
  irriteret: ['Poking costs extra.', "I'm adding this to the bill.", 'Keep that up and I switch sides.', 'Ten gold per poke. I am counting.'],
};

export const STEMMER = {
  tide: {
    arbejder: {
      valgt: ['Yes, boss?', 'More work?', 'What now?', 'Ready, ready.'],
      gå: ['Going.', 'Fine.', 'If I must.', 'On it, boss.'],
      høst: ['Chop chop.', 'Rocks again…', 'Shiny gold. Mine? No? Fine.'],
      byg: ['Build, build.', 'Hammer time.'],
      færdig: ['Done. Can I sit now?', 'Built. Strong. Ugly.', 'Finished! Nap?'],
      klar: ['Ready to sweat.', 'Work, work, always work.'],
      irriteret: ['Stop poking!', "I'm working, I'm working!", 'You want I quit?', 'Poke me again. Go on.', 'Boss, my back hurts.', 'I dream of a nap. A long nap.'],
    },
    grunt: {
      valgt: ['Ready.', 'Speak.', 'Point and I smash.', 'Grunt here.'],
      gå: ['Moving.', 'Hah!', 'For the Tide.'],
      angrib: ['Smash!', 'Blood!', 'Rrraagh!'],
      klar: ['Grunt ready for blood.'],
      irriteret: ["I'm not a drum.", 'Poke the enemy, not me!', 'My axe is bored. Like me.', 'One more and I bite.', 'You are lucky I like you.'],
    },
    spydkaster: {
      valgt: ['Spears sharp.', 'Eyes open.', 'Who to hit?'],
      gå: ['Right.', 'Quick, quick.', 'Moving light.'],
      angrib: ['Catch this!', 'Spear in the eye!', 'Throw!'],
      klar: ['Spears ready.'],
      irriteret: ['Ow. Rude.', 'I count spears. You count pokes.', 'Keep that up and I throw at you.'],
    },
  },
  arkitekter: {
    arbejder: {
      valgt: ["Yes, m'lord?", 'More work?', 'At your service.', 'Aye?'],
      gå: ['Right away.', 'On my way.', 'Off I go.'],
      høst: ['Timber!', 'Back to the quarry.', 'Gold, aye.'],
      byg: ['To the scaffolds!', 'Measure twice…'],
      færdig: ['Work complete!', "That's done, then.", 'Built to last.'],
      klar: ['Ready for work.', 'Tools and all.'],
      irriteret: ["I've a family, you know.", 'Do they pay you to poke me?', 'Is this a test?', "I'll complain to the guild.", "Fine. I'll just stand here, then."],
    },
    fodsoldat: {
      valgt: ['Sir?', 'Ready for orders.', 'For the realm.'],
      gå: ['Moving out.', 'As you command.', 'Yes, sir.'],
      angrib: ['For the Architects!', 'Hold the line!', 'Charge!'],
      klar: ['Reporting for duty.'],
      irriteret: ["Sir, I'm on duty.", 'My armour chafes enough already.', 'Is that an order, sir?', 'Please stop, the others are watching.'],
    },
    armbrøst: {
      valgt: ['Bolt loaded.', 'I see you.', 'Aim true.'],
      gå: ['Repositioning.', 'Understood.'],
      angrib: ['Loose!', 'Target sighted.', 'Right between the eyes.'],
      klar: ['Marksman ready.'],
      irriteret: ["You're blocking my shot.", 'I could hit you from here, you know.', 'One more poke and I miss on purpose.'],
    },
  },
  lejesvende: { slagsbror: LEJESVEND, skytte: LEJESVEND, lejesoldat: LEJESVEND },
};

// Advarsler i racens egen stemme (søjle 8: racer hele vejen igennem)
export const ADVARSEL = {
  tide: { bygning: (navn) => `The ${navn} is under attack! Defend it!`, enheder: 'Our warriors are under attack!', helt: 'The chief is in danger!' },
  arkitekter: { bygning: (navn) => `Our ${navn} is under attack!`, enheder: 'Our forces are under attack!', helt: 'Our champion is in danger!' },
};

// Dyrene (søjle 4: selv dyrene har en vits) — hvad de "siger", når man prikker til dem
export const DYRELYDE = {
  hjort: ['*snort*', '*stamps*', '*glares*'],
  hind: ['*flicks ear*', '*backs away*', '*very nervous*'],
  ræv: ['*yip!*', '*hisses*', '*bares teeth*'],
};
