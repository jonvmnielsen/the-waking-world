// Essensvalget før spillet starter (GDD 6): tryk på en essens for at se hvad den betyder,
// og start derefter. Kortet viser hvordan helten kæmper, hvilken egenskab der vokser,
// hvilke evner der låses op — og et vink om hvad valget kan betyde senere.
import { ESSENSER, EVNER, SLOTS, OPLÅS } from './abilities.js';
import { EGENSKABER } from './heltstats.js';
import { beskrivGem } from './gem.js';

const $ = (id) => document.getElementById(id);
const VOKSER = {
  str: 'Strength — more health and damage',
  agi: 'Agility — more armor and attack speed',
  int: 'Intelligence — more mana and stronger abilities',
};

// Returnerer { essens, sværhed }, eller 'fortsæt' hvis spilleren fortsætter et gemt spil
export function vælgEssens(gemt) {
  return new Promise((løs) => {
    const luk = (svar) => { $('essensvalg').classList.remove('vis'); løs(svar); };
    if (gemt) {
      $('fortsaet').hidden = false;
      $('fortsaet-tekst').textContent = beskrivGem(gemt);
      $('fortsaet').onclick = () => luk('fortsæt');
    }
    let valgt = null, sværhed = 'normal';
    for (const k of document.querySelectorAll('#svaerhed button')) {
      k.onclick = () => { sværhed = k.dataset.s; for (const x of document.querySelectorAll('#svaerhed button')) x.classList.toggle('valgt', x === k); };
    }
    const boks = $('essenser');
    boks.innerHTML = '';
    for (const [id, e] of Object.entries(ESSENSER)) {
      const kort = document.createElement('button');
      kort.type = 'button';
      kort.className = `essens ${id}`;
      kort.innerHTML = `<b>${e.navn}</b><span>${e.motto}</span>`;
      kort.addEventListener('click', () => {
        valgt = id;
        for (const k of boks.children) k.classList.toggle('valgt', k === kort);
        visDetaljer(id);
      });
      boks.appendChild(kort);
    }
    $('essens-start').onclick = () => { if (valgt) luk({ essens: valgt, sværhed }); };
    $('essensvalg').classList.add('vis');
  });
}

function visDetaljer(id) {
  const e = ESSENSER[id], eg = EGENSKABER.essens[id];
  const evner = SLOTS[id].map((ev, i) => `<li><i>${EVNER[ev].ikon}</i><div><b>${EVNER[ev].navn}</b> <small>level ${OPLÅS[i]}</small><span>${EVNER[ev].tekst}</span></div></li>`).join('');
  const d = $('essens-detalje');
  d.className = `vis ${id}`;
  d.innerHTML = `
    <p class="kamp">${e.tekst}</p>
    <h3>Grows in</h3><p class="egenskab ${eg}">${VOKSER[eg]}</p><p class="kamp">Starts higher and grows fastest of your three attributes.</p>
    <h3>Abilities</h3><ul class="evneliste">${evner}</ul>
    <h3>What it may lead to</h3>
    <ul class="ekko">${e.ekko.map((t) => `<li>${t}</li>`).join('')}<li class="skjult">…and more, revealed as you play.</li></ul>`;
  $('essens-start').hidden = false;
  $('essens-start').textContent = `Begin as ${e.navn}`;
  d.scrollIntoView?.({ block: 'nearest', behavior: 'smooth' });
}
