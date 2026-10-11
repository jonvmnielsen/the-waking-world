// Helteknappen (øverst til venstre) og heltens overblik: liv, mana og erfaring, egenskaber (STR/AGI/INT)
// med forklaring, afledte værdier, Ascension og en blød antydning af spillestilen (uden tal).
import { EGENSKABER } from './heltstats.js';
import { ESSENSER } from './abilities.js';
import { ASCENSION_LEVEL } from './ascensiondata.js';

const $ = (id) => document.getElementById(id);
const FORKLARING = {
  str: 'Health, health regeneration and damage',
  agi: 'Armor and attack speed',
  int: 'Mana, mana regeneration and ability power',
};
const STIL = {
  aggression: 'Lately you have fought aggressively, always pressing forward.',
  overlevelse: 'Lately you have fought with care, keeping your warriors alive.',
  kaos: 'Lately you have fought everywhere at once.',
  null: 'Your way of fighting is balanced — every path is still open.',
};

export class HelteKort {
  constructor(spil) {
    this.spil = spil;
    this.tid = 0;
    // Helteknappen vælger helten og åbner/lukker overblikket
    $('helteknap').addEventListener('click', (e) => {
      e.stopPropagation();
      const åben = $('heltekort').classList.contains('vis');
      if (!åben) { spil.valg.vælg(null); spil.rig.centrér(); }
      this.skift(!åben);
    });
    $('hk-luk').addEventListener('click', () => this.skift(false));
    const e = ESSENSER[spil.helt.evner.essens];
    $('hk-essens').textContent = `Essence of ${e.navn} — ${e.motto}`;
  }

  skift(vis = !$('heltekort').classList.contains('vis')) {
    $('heltekort').classList.toggle('vis', vis);
    $('helteknap').classList.toggle('åben', vis);
    if (vis) this.tegnKort();
  }

  opdater(dt) {
    this.tid += dt;
    if (this.tid < 0.25) return;
    this.tid = 0;
    if ($('heltekort').classList.contains('vis')) this.tegnKort();
  }

  tegnKort() {
    const h = this.spil.helt;
    $('hk-egenskaber').innerHTML = ['str', 'agi', 'int'].map((n) => {
      const bonus = h.egenskabBonus(n);
      return `<div class="hk-eg ${n}${n === h.essensEgenskab ? ' primær' : ''}"><b>${EGENSKABER.navn[n]}</b><em>${h.egenskab(n)}${bonus ? ` <small style="display:inline;color:#8fd06a">(+${bonus})</small>` : ''}</em><small>${FORKLARING[n]}</small></div>`;
    }).join('');
    const sek = h.angrebsTid();
    const v = [
      ['Health', `${Math.ceil(h.hp)} / ${Math.round(h.maxHp)}`], ['Mana', `${Math.floor(h.mana)} / ${Math.round(h.manaMax)}`],
      ['Damage', `${h.stats.skadeMin + h.egenskabsSkade() + h.inventar.bonus.skade}–${h.stats.skadeMax + h.egenskabsSkade() + h.inventar.bonus.skade}`],
      ['Armor', h.rustning().toFixed(1)], ['Attack speed', `${(1 / sek).toFixed(2)} / s`],
      ['Ability power', `${Math.round(h.evneStyrke() * 100)}%`], ['Speed', h.fart.toFixed(1)], ['Level', h.level],
    ];
    $('hk-afledt').innerHTML = v.map(([k, t]) => `<span>${k}</span><b>${t}</b>`).join('');
    const sti = h.sti.data;
    $('hk-sti').innerHTML = sti ? `<b>${sti.navn}</b> — ${sti.passiv.navn}: ${sti.passiv.tekst}`
      : h.level >= ASCENSION_LEVEL ? '<b>Ascension awaits.</b> Your hero will not grow past level 10 until you choose a path.'
        : `At level ${ASCENSION_LEVEL} your hero will <b>Ascend</b> and choose one of three paths. The way you fight decides which path comes easiest.`;
    $('hk-stil').textContent = `${STIL[this.spil.stil.dominant()]} The way you fight shapes the training your veterans take to.`;
  }
}
