// Verdensvalget på startskærmen (M10): kort, biom, årstid, størrelse og "ny verden hver gang".
// Et nyt valg gemmes og bygger verden forfra (kortvalg.js). Tilfældig trækkes ved hver indlæsning.
import { KORT_TYPER, AKTIVT_ID, AKTIVT_KORT, VERDENSVALG, STØRRELSER, gemValg } from './kortvalg.js';
import { BIOMER, ÅRSTIDER } from './biomdata.js';
import { RACER } from './racer.js';

const $ = (id) => document.getElementById(id);

export function visVerdensvalg() {
  visKort();
  const boks = $('verdensvalg');
  boks.innerHTML = '';
  const række = (titel, nøgle, valg, tilfældig = true) => {
    const r = document.createElement('div');
    r.className = 'valgrække';
    r.innerHTML = `<span>${titel}</span><div></div>`;
    const knapper = r.querySelector('div');
    const muligheder = [...(tilfældig ? [['tilfældig', '🎲 Random']] : []), ...Object.entries(valg).map(([id, v]) => [id, v.navn])];
    for (const [id, navn] of muligheder) {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = navn;
      b.classList.toggle('valgt', (VERDENSVALG[nøgle] ?? 'tilfældig') === id);
      b.onclick = () => { if (VERDENSVALG[nøgle] !== id) { visSkift(); gemValg({ [nøgle]: id }); } };
      knapper.appendChild(b);
    }
    boks.appendChild(r);
  };
  række('Your race', 'race', RACER, false);
  række('Biome', 'biom', BIOMER);
  række('Season', 'årstid', ÅRSTIDER);
  række('Size', 'størrelse', STØRRELSER, false);
  // Ny verden hver gang: et nyt frø ved hvert spil (ellers kortets faste frø)
  const ny = document.createElement('label');
  ny.className = 'valgrække skift';
  ny.innerHTML = `<span>New world every game</span><input type="checkbox" ${VERDENSVALG.nyVerden ? 'checked' : ''}>`;
  ny.querySelector('input').onchange = (e) => { visSkift(); gemValg({ nyVerden: e.target.checked }); };
  boks.appendChild(ny);
  const nu = document.createElement('p');
  nu.className = 'denne-verden';
  nu.textContent = `Your opponent: a random race · This world: ${BIOMER[AKTIVT_KORT.biom].navn} · ${ÅRSTIDER[AKTIVT_KORT.årstid].navn} · ${STØRRELSER[AKTIVT_KORT.størrelse].navn} · seed ${AKTIVT_KORT.seed}`;
  boks.appendChild(nu);
}

// Kortene: et kort pr. kort
function visKort() {
  const boks = $('kortvalg');
  boks.innerHTML = '';
  for (const [id, k] of Object.entries(KORT_TYPER)) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'kortkort' + (id === AKTIVT_ID ? ' valgt' : '');
    b.innerHTML = `<b></b><span></span><small></small>`;
    b.querySelector('b').textContent = k.navn;
    b.querySelector('span').textContent = k.kort;
    b.querySelector('small').textContent = k.træk.join(' · ');
    b.onclick = () => { if (id !== AKTIVT_ID) { visSkift(); gemValg({ kort: id }); } };
    boks.appendChild(b);
  }
  requestAnimationFrame(() => { const v = boks.querySelector('.valgt'); if (v) boks.scrollLeft = v.offsetLeft - (boks.clientWidth - v.clientWidth) / 2; });
}

export function visSkift() {
  $('lade-tekst').textContent = 'The world reshapes…';
  $('lader').style.zIndex = 60;
  $('lader').classList.remove('færdig');
}
