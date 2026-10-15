// Alterets velsignelser (Jon, M14d): det man får for de ånder, man ofrer ved Spirit Altar. Ikke heltens
// egne evner — en udvidelse af helten. Alteret byder hver gang på tre, man vælger én:
// - Auraer: helten løfter soldaterne omkring sig (højst to forskellige auraer).
// - Træk: varige egenskaber ved helten selv.
// - Åndegaver: en ekstra aktiv evne fra åndeverdenen (højst én ad gangen; en ny erstatter den gamle).
// - Egenskaber: mere styrke, liv eller mana.
// Hver velsignelse kan tages flere gange (rang) op til sit maks. Prisen stiger for hver velsignelse.

export const VELSIGNELSER = {
  auraKommando: { type: 'aura', navn: 'Aura of Command', ikon: '🚩', maks: 3, tekst: (r) => `Your soldiers near the hero deal ${12 * r}% more damage.` },
  auraHast: { type: 'aura', navn: 'Aura of Haste', ikon: '💨', maks: 3, tekst: (r) => `Your soldiers near the hero attack ${10 * r}% faster.` },
  auraVærn: { type: 'aura', navn: 'Aura of Warding', ikon: '🛡️', maks: 3, tekst: (r) => `Your soldiers near the hero gain ${2 * r} armor and heal ${r}% of their health a second.` },
  tykHud: { type: 'træk', navn: 'Thick Hide', ikon: '🪨', maks: 3, bonus: (r) => ({ rustning: 3 * r }), tekst: (r) => `+${3 * r} armor.` },
  vampyr: { type: 'træk', navn: 'Vampiric Soul', ikon: '🩸', maks: 2, bonus: (r) => ({ livsstjæl: 0.07 * r }), tekst: (r) => `Heals ${7 * r}% of the damage your hero deals.` },
  blodtørst: { type: 'træk', navn: 'Bloodthirst', ikon: '🔥', maks: 1, tekst: () => 'Every foe your hero slays: +8% attack speed for 6 seconds, up to five times.' },
  andenVind: { type: 'træk', navn: 'Second Wind', ikon: '🌬️', maks: 1, tekst: () => 'Once a minute, when your hero falls below 25% health, it heals 35% at once.' },
  åndesult: { type: 'træk', navn: 'Spirit Hunger', ikon: '👻', maks: 2, tekst: (r) => `Fallen foes leave ${50 * r}% more spirits.` },
  åndeskjold: { type: 'gave', navn: 'Spirit Shield', ikon: '🔮', maks: 1, tekst: () => 'Spirit gift (active): a shield of spirits absorbs 250 damage for 8 seconds.' },
  åndespring: { type: 'gave', navn: 'Spirit Step', ikon: '🌀', maks: 1, tekst: () => 'Spirit gift (active): step through the spirit world to the nearest enemy and strike it for 2× damage.' },
  åndevrede: { type: 'gave', navn: "Spirits' Wrath", ikon: '💫', maks: 1, tekst: () => 'Spirit gift (active): the spirits burst out — 160 damage to every enemy around your hero.' },
  hærdet: { type: 'egenskab', navn: 'Tempered', ikon: '⚒️', maks: 5, bonus: (r, h) => ({ [h?.primær ?? 'str']: 4 * r }), tekst: (r) => `+${4 * r} to your hero's main attribute.` },
  kraft: { type: 'egenskab', navn: 'Vigor', ikon: '❤️', maks: 5, bonus: (r) => ({ hp: 180 * r }), tekst: (r) => `+${180 * r} health.` },
  klarhed: { type: 'egenskab', navn: 'Clarity', ikon: '💧', maks: 5, bonus: (r) => ({ mana: 100 * r, manaRegen: r }), tekst: (r) => `+${100 * r} mana and +${r} mana a second.` },
};

// Åndegaverne som evner (plads 5)
export const GAVE_EVNER = {
  åndeskjold: { navn: 'Spirit Shield', mana: 60, cd: 30, ikon: '🔮', tekst: 'Absorbs 250 damage for 8 seconds.' },
  åndespring: { navn: 'Spirit Step', mana: 40, cd: 16, ikon: '🌀', tekst: 'Step to the nearest enemy within 14 and strike it for 2× damage.' },
  åndevrede: { navn: "Spirits' Wrath", mana: 90, cd: 28, ikon: '💫', tekst: '160 damage to every enemy within 7.' },
};

export const TYPE_NAVN = { aura: 'Aura', træk: 'Trait', gave: 'Spirit gift', egenskab: 'Attribute' };
export const OFFER_PRIS = (n) => 8 + 4 * n;   // ånder for den n'te velsignelse
export const OMVALG_PRIS = 3;                 // tre nye valg
export const MAKS_AURAER = 2;
