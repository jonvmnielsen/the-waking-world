// Helteknappen (øverst til venstre) og heltens overblik: liv, mana og erfaring, egenskaber (STR/AGI/INT)
// med forklaring, afledte værdier, Ascension og en blød antydning af spillestilen (uden tal).
import { EGENSKABER } from './heltstats.js';
import { ESSENSER } from './abilities.js';
import { ASCENSION_LEVEL } from './ascensiondata.js';
import { gruppeGå } from './haer.js';
import { bus } from './events.js';
import { itemInfo, PLADSER_TYPER, PLADS_NAVN, PLADS_IKON } from './udstyr.js';
import { EVNER } from './abilities.js';
import { heltTitel, EPITETER, BEDRIFT_NAVN } from './bedrifter.js';
import { RANG_KRAV, RANG_MAKS, EGENSKAB_MAKS } from './evnerang.js';
import { VELSIGNELSER } from './velsignelsedata.js';

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
    // Helteknappen: første tryk hopper til helten (og vælger den), næste tryk åbner overblikket.
    // Dobbelttryk åbner overblikket med det samme. Tryk mens det er åbent lukker det.
    $('helteknap').addEventListener('click', (e) => {
      e.stopPropagation();
      if ($('heltekort').classList.contains('vis')) return this.skift(false);
      if (spil.helt.død) return spil.alter.vis();   // en død helt venter ved alteret
      // Med soldater valgt: send dem hen til helten
      const kæmpere = spil.valg.gruppe.filter((u) => u.vet && !u.død);
      if (kæmpere.length && !spil.helt.død) {
        gruppeGå(kæmpere, spil.helt.x, spil.helt.z, spil.verden.kort);
        return bus.emit('besked', `${kæmpere.length} ${kæmpere.length === 1 ? 'soldier heads' : 'soldiers head'} to your hero`);
      }
      const nu = performance.now(), dobbelt = nu - (this.sidstTryk ?? -1e9) < 400;
      this.sidstTryk = nu;
      const fremme = spil.valg.erHelt && spil.rig.følger;   // allerede valgt og kameraet følger helten
      spil.valg.vælg(null); spil.rig.centrér();
      if (dobbelt || fremme) this.skift(true);
    });
    $('hk-luk').addEventListener('click', () => this.skift(false));
    // "+2 all": et skill point på egenskaberne (evnerang.js); kortet tegnes om hvert kvarte sekund, så tryk fanges på beholderen
    $('hk-evner').addEventListener('pointerdown', (e) => {
      if (!e.target.closest('#hk-egenskabspoint')) return;
      e.stopPropagation();
      const f = spil.helt.evner.lærEgenskaber();
      if (f) bus.emit('besked', f);
      this.tegnKort();
    });
    const e = ESSENSER[spil.helt.evner.essens];
    $('hk-essens').textContent = `Essence of ${e.navn} — ${e.motto}`;
    $('hk-titel').textContent = heltTitel(spil);
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
    const b = h.inventar.bonus, pct = (x) => `${Math.round(x * 100)}%`;
    for (const [k, n, f] of [['krit', 'Critical chance', pct], ['kritSkade', 'Critical damage', (x) => pct(1.75 + x)], ['livsstjæl', 'Life steal', pct], ['cdr', 'Shorter cooldowns', pct], ['retur', 'Thorns', pct], ['guldFund', 'Gold find', pct], ['xpBonus', 'Extra experience', pct]]) {
      if (b[k] || (k === 'kritSkade' && b.krit)) v.push([n, f(b[k] ?? 0)]);
    }
    // Udstyret: seks pladser med navne i sjældenhedens farve
    $('hk-udstyr').innerHTML = '<h4>Equipment</h4>' + PLADSER_TYPER.map((t, i) => {
      const p = h.inventar.pladser[i], d = p && itemInfo(p);
      return `<div class="hk-plads"><i>${PLADS_IKON[t]}</i><span>${PLADS_NAVN[t]}</span><b style="color:${d ? d.sj.farve : '#7a6e5c'}">${d ? d.navn : 'empty'}</b></div>`;
    }).join('');
    // Evner med rang og skill points
    const ev = h.evner, punkter = h.skillpunkter ?? 0, egR = ev.egenskabsRang ?? 0;
    $('hk-evner').innerHTML = '<h4>Abilities</h4>' + (h.def?.evner ?? []).map((id, i) => {
      const r = ev.rangAf(i), næste = r < RANG_MAKS ? `next at Lv ${RANG_KRAV[i][r]}` : 'max';
      return `<div class="hk-plads"><i>${EVNER[id].ikon}</i><span>${r ? `<em>${'●'.repeat(r)}${'○'.repeat(RANG_MAKS - r)}</em>` : 'not learned'}</span><b>${EVNER[id].navn} <small style="display:inline;color:var(--dæmpet)">${næste}</small></b></div>`;
    }).join('') + `<div class="hk-point">Skill points: <b>${punkter}</b> · Attributes ${egR}/${EGENSKAB_MAKS}<button id="hk-egenskabspoint" type="button" ${punkter > 0 && egR < EGENSKAB_MAKS ? '' : 'disabled'}>+2 all attributes</button></div>`;
    // Alterets velsignelser
    const vs = h.velsignelser, å = this.spil.ånder, ids = Object.keys(vs.r);
    $('hk-velsignelser').innerHTML = `<h4>Blessings</h4><div class="hk-vel">Spirits: <b>${å.båret}</b> carried, <b>${å.ofret}</b> offered — next blessing costs <b>${vs.pris}</b>.</div>`
      + (ids.length ? ids.map((id) => { const d = VELSIGNELSER[id], r = vs.r[id]; return `<div class="hk-plads"><i>${d.ikon}</i><span>${d.maks > 1 ? `<em>${'●'.repeat(r)}${'○'.repeat(d.maks - r)}</em>` : d.type === 'gave' ? 'gift' : 'trait'}</span><b>${d.navn} <small style="display:inline;color:var(--dæmpet)">${d.tekst(r)}</small></b></div>`; }).join('')
        : '<div class="hk-vel">Slay foes and carry their spirits home to your Spirit Altar.</div>');
    // Bedrifter og tilnavne
    const bd = this.spil.bedrifter;
    if (bd) {
      const tal = Object.entries(bd.tal).filter(([k, n]) => n || k === 'drab').map(([k, n]) => `<span>${BEDRIFT_NAVN[k]}</span><b>${n}</b>`).join('');
      const navne = bd.epiteter.map((id) => EPITETER.find((e) => e.id === id)).map((e) => `<div class="hk-epitet"><b>${e.navn}</b> — ${e.tekst}</div>`).join('');
      const næste = EPITETER.find((e) => !bd.epiteter.includes(e.id));
      $('hk-bedrifter').innerHTML = `<h4>Deeds</h4><div class="hk-tal">${tal}</div>${navne}${næste ? `<div class="hk-epitet næste">Next name: <b>${næste.navn}</b> — ${bd.tal[næste.tal]} / ${næste.krav}</div>` : ''}`;
      $('hk-titel').textContent = heltTitel(this.spil);
    }
    $('hk-afledt').innerHTML = v.map(([k, t]) => `<span>${k}</span><b>${t}</b>`).join('');
    const sti = h.sti.data;
    $('hk-sti').innerHTML = sti ? `<b>${sti.navn}</b> — ${sti.passiv.navn}: ${sti.passiv.tekst}`
      : h.level >= ASCENSION_LEVEL ? '<b>Ascension awaits.</b> Your hero will not grow past level 10 until you choose a path.'
        : `At level ${ASCENSION_LEVEL} your hero will <b>Ascend</b> and choose one of three paths. The way you fight decides which path comes easiest.`;
    $('hk-stil').textContent = `${STIL[this.spil.stil.dominant()]} The way you fight shapes the training your veterans take to.`;
  }
}
