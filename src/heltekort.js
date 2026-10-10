// Heltens egenskaber i heltepanelet (STR/AGI/INT) og heltekortet med forklaring,
// afledte værdier og en blød antydning af spillestilen (uden tal).
import { EGENSKABER } from './heltstats.js';
import { ESSENSER } from './abilities.js';

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
    $('egenskaber').addEventListener('click', (e) => { e.stopPropagation(); this.skift(); });
    $('hk-luk').addEventListener('click', () => this.skift(false));
    const e = ESSENSER[spil.helt.evner.essens];
    $('hk-essens').textContent = `Essence of ${e.navn} — ${e.motto}`;
  }

  skift(vis = !$('heltekort').classList.contains('vis')) {
    $('heltekort').classList.toggle('vis', vis);
    if (vis) this.tegnKort();
  }

  opdater(dt) {
    this.tid += dt;
    if (this.tid < 0.25) return;
    this.tid = 0;
    const h = this.spil.helt;
    for (const n of ['str', 'agi', 'int']) {
      const el = $(`eg-${n}`);
      el.textContent = h.egenskab(n);
      el.classList.toggle('bonus', h.egenskabBonus(n) > 0);
    }
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
    $('hk-stil').textContent = `${STIL[this.spil.stil.dominant()]} The way you fight shapes the training your veterans take to.`;
  }
}
