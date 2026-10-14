// Udstyr med rul (Jon: helten i centrum — items skal være meget mere varierede). Hvert stykke udstyr, der
// falder, får en sjældenhed og et antal tilfældige egenskaber (affikser) oven i grundtingens bonus, og et navn
// efter dem: "Savage Iron Sword of the Bear". Jo sværere kilden er (lejrens niveau), jo bedre rul.
// Et item i inventaret er { id, ladninger, rul: { sj, aff: { stat: værdi }, navn } }.
import { ITEMS, SJÆLDENHED, beskriv } from './itemdata.js';

// Heltens seks udstyrspladser (forbrug og stave bæres i rygsækken)
export const PLADSER_TYPER = ['våben', 'skjold', 'hoved', 'krop', 'fødder', 'smykke'];
export const PLADS_NAVN = { våben: 'Weapon', skjold: 'Off-hand', hoved: 'Head', krop: 'Body', fødder: 'Feet', smykke: 'Trinket' };
export const PLADS_IKON = { våben: '⚔️', skjold: '🛡️', hoved: '⛑️', krop: '🥋', fødder: '🥾', smykke: '💍' };

// Affikser: [min, max] ved niveau 1 (vokser med niveauet), forstavelse og efterstavelse
const AFF = {
  str: { v: [2, 4], hel: true, for: 'Mighty', efter: 'of the Bear' },
  agi: { v: [2, 4], hel: true, for: 'Swift', efter: 'of the Fox' },
  int: { v: [2, 4], hel: true, for: 'Wise', efter: 'of the Owl' },
  skade: { v: [3, 6], hel: true, for: 'Savage', efter: 'of Slaughter' },
  rustning: { v: [1, 3], hel: true, for: 'Sturdy', efter: 'of the Wall' },
  hp: { v: [40, 80], hel: true, for: 'Hale', efter: 'of the Oak' },
  mana: { v: [30, 60], hel: true, for: 'Arcane', efter: 'of the Deep' },
  angrebsfart: { v: [0.04, 0.08], for: 'Quick', efter: 'of Fury' },
  krit: { v: [0.03, 0.06], for: 'Keen', efter: 'of Precision' },
  kritSkade: { v: [0.15, 0.3], for: 'Cruel', efter: 'of Ruin' },
  fart: { v: [0.03, 0.06], for: 'Fleet', efter: 'of the Wind' },
  livsstjæl: { v: [0.03, 0.05], for: 'Thirsting', efter: 'of the Leech' },
  hpRegen: { v: [0.8, 1.6], for: 'Living', efter: 'of Mending' },
  manaRegen: { v: [0.4, 0.9], for: 'Humming', efter: 'of the Spring' },
  cdr: { v: [0.04, 0.08], for: 'Restless', efter: 'of Haste' },
  evne: { v: [0.06, 0.12], for: 'Runed', efter: 'of Sorcery' },
  guldFund: { v: [0.1, 0.2], for: 'Lucky', efter: 'of Fortune' },
  xpBonus: { v: [0.08, 0.15], for: 'Learned', efter: 'of the Sage' },
  retur: { v: [0.1, 0.2], for: 'Thorned', efter: 'of Thorns' },
};
// Hvilke affikser der passer til hver plads
const POOL = {
  våben: ['skade', 'str', 'agi', 'int', 'angrebsfart', 'krit', 'kritSkade', 'livsstjæl', 'evne'],
  skjold: ['rustning', 'hp', 'str', 'agi', 'int', 'retur', 'hpRegen', 'mana', 'evne'],
  hoved: ['rustning', 'hp', 'int', 'mana', 'manaRegen', 'cdr', 'xpBonus', 'str'],
  krop: ['rustning', 'hp', 'str', 'agi', 'hpRegen', 'retur', 'mana'],
  fødder: ['fart', 'agi', 'hp', 'rustning', 'angrebsfart', 'guldFund'],
  smykke: ['str', 'agi', 'int', 'krit', 'cdr', 'livsstjæl', 'evne', 'guldFund', 'xpBonus', 'manaRegen'],
};
const ORDEN = ['almindelig', 'sjælden', 'episk', 'legendarisk'];
const ANTAL = { almindelig: 1, sjælden: 2, episk: 3, legendarisk: 4 };
// Sjældenhed efter kildens niveau (1–6)
const SJ_VÆGT = { 1: [70, 26, 4, 0], 2: [48, 38, 12, 2], 3: [25, 45, 25, 5], 4: [10, 35, 40, 15], 5: [0, 20, 50, 30], 6: [0, 0, 40, 60] };
const LEGENDE = ['Dawnbreaker', 'Stormheart', 'Whisper of Erevoss', 'The Last Oath', 'Grief', 'Kingsbane', 'Ashen Crown', 'Tidecaller'];

export const erUdstyr = (id) => !!ITEMS[id]?.plads;

// Rul et nyt stykke udstyr (id = grundtingen) fra en kilde på 'niveau'
export function rulUdstyr(id, niveau = 2, tilf = Math.random) {
  const d = ITEMS[id];
  if (!d?.plads || d.type === 'artefakt') return null;   // artefakter er unikke og ruller ikke
  const vægt = SJ_VÆGT[Math.max(1, Math.min(6, niveau))];
  let r = tilf() * vægt.reduce((a, b) => a + b, 0), i = 0;
  while (r > vægt[i]) { r -= vægt[i]; i++; }
  const sj = ORDEN[Math.max(ORDEN.indexOf(d.sjældenhed) - 1, i)] ?? 'almindelig';
  const pulje = [...POOL[d.plads]], aff = {}, n = ANTAL[sj], skala = 0.7 + 0.25 * niveau;
  for (let k = 0; k < n && pulje.length; k++) {
    const stat = pulje.splice(Math.floor(tilf() * pulje.length), 1)[0], a = AFF[stat];
    let v = (a.v[0] + tilf() * (a.v[1] - a.v[0])) * skala;
    v = a.hel ? Math.max(1, Math.round(v)) : Math.round(v * 100) / 100;
    aff[stat] = v;
  }
  const s = Object.keys(aff);
  const navn = sj === 'legendarisk' ? `${LEGENDE[Math.floor(tilf() * LEGENDE.length)]}` : sj === 'almindelig' ? d.navn : `${AFF[s[0]].for} ${d.navn}${s[1] ? ' ' + AFF[s[1]].efter : ''}`;
  return { sj, aff, navn };
}

// Alt hvad man skal vide om et item i inventaret eller på jorden: navn, sjældenhed, samlet bonus, plads
export function itemInfo(p) {
  const d = ITEMS[p.id], r = p.rul;
  const bonus = { ...(d.bonus ?? {}) };
  for (const [k, v] of Object.entries(r?.aff ?? {})) bonus[k] = Math.round(((bonus[k] ?? 0) + v) * 100) / 100;
  const sjældenhed = r?.sj ?? d.sjældenhed;
  return { ...d, navn: r?.navn ?? d.navn, grund: r?.navn && r.sj === 'legendarisk' ? d.navn : null, sjældenhed, sj: SJÆLDENHED[sjældenhed], bonus, linjer: beskriv(p.id, bonus) };
}
