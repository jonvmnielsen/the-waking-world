// Ascension på skærmen: knappen der lyser op ved level 10, valget mellem de tre stier,
// stiens evneknapper (slot 3 og 4) og heltens titel.
import { heltTitel } from './bedrifter.js';
import { STIER, STI_EVNER, STI_OPLÅS, ASCENSION_LEVEL, stiData } from './ascensiondata.js';
import { RES_NAVN } from './okonomi.js';
import { bus } from './events.js';

const $ = (id) => document.getElementById(id);
const prisTekst = (p) => Object.entries(p).map(([r, v]) => `${v} ${RES_NAVN[r]}`).join(', ');

export class AscensionHud {
  constructor(spil) {
    this.spil = spil;
    this.valgt = null;
    this.vist = undefined;
    $('ascend').addEventListener('click', (e) => { e.stopPropagation(); this.åbn(); });
    $('asc-luk').addEventListener('click', () => this.luk());
    $('asc-stig').addEventListener('click', () => this.stig());
    bus.on('level_op', ({ level }) => {
      if (level === ASCENSION_LEVEL && !spil.helt.sti.id) setTimeout(() => bus.emit('besked', 'Your hero can Ascend — tap "Ascend" to choose a path'), 2500);
    });
  }

  titel() {
    $('hk-titel').textContent = heltTitel(this.spil);
    $('sti-evner').hidden = !this.spil.helt.sti.id;
  }

  opdater() {
    const sti = this.spil.helt.sti;
    $('ascend').hidden = !sti.kanStige();
    if (this.vist !== sti.id) { this.vist = sti.id; this.titel(); }
  }

  åbn() {
    const { helt, stil } = this.spil, sti = helt.sti;
    if (!sti.kanStige()) return;
    this.valgt = null;
    $('asc-stier').innerHTML = Object.keys(STIER).map((id) => {
      const d = stiData(helt.type, id);   // heltens egen udgave af stien
      const pris = sti.pris(id, stil);
      const evner = d.evner.map((e, i) => `<li><i>${STI_EVNER[e].ikon}</i><div><b>${STI_EVNER[e].navn}</b> <small>level ${STI_OPLÅS[i]}</small><span>${STI_EVNER[e].tekst}</span></div></li>`).join('');
      const egenskaber = Object.entries(d.egenskaber).map(([n, v]) => `+${v} ${n.toUpperCase()}`).join(' ');
      return `<button type="button" class="asc-sti ${id} ${pris ? 'mod' : 'passer'}" data-id="${id}">
        <div class="asc-navn"><i>${d.ikon}</i><b>${d.navn}</b><em>${d.motto}</em></div>
        <p>${d.tekst} <span class="asc-eg">${egenskaber}</span></p>
        <div class="asc-mere">
          <h3>${d.passiv.navn} <small>always on</small></h3><p>${d.passiv.tekst}</p>
          <h3>New abilities</h3><ul class="evneliste">${evner}</ul>
          <p class="asc-hint">${d.passer}</p>
        </div>
        <p class="asc-pris">${pris ? `Goes against your nature — costs ${prisTekst(pris)}` : '✓ Suits the way you fight — free'}</p>
      </button>`;
    }).join('');
    for (const k of $('asc-stier').children) k.addEventListener('click', () => this.vælg(k.dataset.id));
    $('asc-stig').disabled = true;
    $('asc-stig').textContent = 'Choose a path';
    $('ascension').classList.add('vis');
  }

  vælg(id) {
    this.valgt = id;
    for (const k of $('asc-stier').children) k.classList.toggle('valgt', k.dataset.id === id);
    const pris = this.spil.helt.sti.pris(id, this.spil.stil);
    $('asc-stig').disabled = false;
    $('asc-stig').textContent = `Ascend as ${stiData(this.spil.helt.type, id).navn}${pris ? ` · ${prisTekst(pris)}` : ''}`;
  }

  stig() {
    const { helt, stil, økonomi } = this.spil, id = this.valgt;
    if (!id || !helt.sti.kanStige()) return;
    const pris = helt.sti.pris(id, stil);
    if (pris) {
      const mangler = økonomi.mangler(pris);
      if (mangler) return bus.emit('besked', mangler);
      økonomi.betal(pris);
    }
    this.luk();
    helt.sti.stig(id);
  }

  luk() { $('ascension').classList.remove('vis'); }
}
