// Knapper og status for forskning og opgraderinger i kommandopanelet, ofringer ved alteret,
// og upkeep i ressourcebjælken.
import { EGENSKABER, ofringsPris, OFRINGS_IKON } from './heltstats.js';
import { ikon } from './ikoner.js';
import { bus } from './events.js';

const $ = (id) => document.getElementById(id);
const RES = ['guld', 'træ', 'sten'];
export const prisHtml = (pris = {}) => RES.filter((r) => pris[r]).map((r) => `<span><img alt="${r}" src="${ikon('res-' + r)}">${pris[r]}</span>`).join('');

// Forskning og opgraderinger for en færdig bygning
export function udviklingsKnapper(hud, b, knapper) {
  const udv = hud.spil.udvikling;
  for (const id of udv.muligheder(b)) {
    const i = udv.info(b, id);
    if (!i) continue;
    const k = hud.knap(knapper, ikon(i.ikon), i.navn, prisHtml(i.pris), () => {
      const fejl = udv.start(b, id);
      bus.emit('besked', fejl ?? `${i.navn} started`);
      hud.byg();
    }, `udv-${id}`);
    k.title = i.tekst;
  }
  if (b.udv) hud.knap(knapper, ikon('res-guld'), 'Cancel upgrade', '', () => { udv.annullér(b); hud.byg(); }, 'udv-annuller');
}

// Statuslinje mens en bygning forsker, ellers null
export function udviklingsStatus(b) {
  if (!b.udv) return null;
  return `${b.udv.navn} ${Math.floor((b.udv.tid / b.udv.varighed) * 100)}%`;
}

// Gør knapperne mørke når de ikke kan bruges lige nu
export function markérUdvikling(spil, b) {
  for (const k of document.querySelectorAll('#kmd-knapper [data-id^="udv-"]')) {
    const id = k.dataset.id.slice(4);
    if (id === 'annuller') continue;
    k.classList.toggle('dyr', !!spil.udvikling.fejl(b, id));
  }
}

// Ånde-alteret: ofr ressourcer for +1 i en af heltens egenskaber
export function ofringsKnapper(hud, knapper) {
  const spil = hud.spil, inv = spil.helt.inventar;
  for (const n of ['str', 'agi', 'int']) {
    hud.knap(knapper, ikon(OFRINGS_IKON[n]), `+1 ${EGENSKABER.kort[n]}`, prisHtml(ofringsPris(inv.permanent.ofringer)), () => {
      const pris = ofringsPris(inv.permanent.ofringer), øko = spil.økonomi;
      const mangler = øko.mangler(pris);
      if (mangler) return bus.emit('besked', mangler);
      øko.betal(pris);
      inv.permanent.ofringer += 1;
      inv.øgEgenskaber({ [n]: 1 });
      bus.emit('effekt', { type: 'veteran', x: spil.helt.x, z: spil.helt.z });
      bus.emit('besked', `Your offering is accepted: +1 ${EGENSKABER.navn[n]}`);
      hud.byg();
    }, `ofr-${n}`);
  }
}

// Upkeep: forsyningen farves, og et skilt viser hvor meget guld der trækkes. Tryk forklarer.
export class UpkeepVisning {
  constructor(spil) {
    this.spil = spil;
    this.sidst = null;
    const chip = $('res-forsyning').parentElement;
    chip.insertAdjacentHTML('beforeend', '<small id="upkeep"></small>');
    chip.addEventListener('click', (e) => { e.stopPropagation(); this.forklar(); });
  }

  forklar() {
    const u = this.spil.økonomi.upkeep();
    bus.emit('besked', `Supply ${this.spil.økonomi.forsyning}: ${u.navn}${u.faktor < 1 ? ` — mines give ${Math.round((1 - u.faktor) * 100)}% less gold` : ''}. Upkeep starts at 41 supply and grows at 71.`);
  }

  opdater() {
    const u = this.spil.økonomi.upkeep();
    if (u === this.sidst) return;
    const første = this.sidst === null;
    this.sidst = u;
    const el = $('upkeep');
    el.textContent = u.faktor < 1 ? `−${Math.round((1 - u.faktor) * 100)}%` : '';
    el.parentElement.classList.toggle('upkeep-lav', u.faktor < 1 && u.faktor > 0.5);
    el.parentElement.classList.toggle('upkeep-høj', u.faktor <= 0.5);
    if (!første) bus.emit('besked', u.faktor < 1 ? `${u.navn}: your mines now give ${Math.round((1 - u.faktor) * 100)}% less gold` : 'No upkeep: your mines give full gold again');
  }
}
