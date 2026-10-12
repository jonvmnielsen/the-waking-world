// Fortællingen på skærmen (M8): introen ved et nyt spil, verdenssiden og krøniken i menuen,
// og fase-mærket under uret, der viser hvor verden er, og hvor længe til den næste fase.
import { bus } from './events.js';
import { FASER } from './verdenstilstand.js';
import { INTRO, VERDEN_HTML } from './verdenslore.js';

const $ = (id) => document.getElementById(id);
const tid = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

// Introen: tre kort før spillet begynder. Løses når spilleren trykker Begin (eller Skip).
export function visIntro() {
  const el = $('intro');
  let i = 0;
  return new Promise((færdig) => {
    const vis = () => {
      const k = INTRO[i];
      el.querySelector('h2').textContent = k.titel;
      el.querySelector('p').textContent = k.tekst;
      el.querySelector('.prikker').innerHTML = INTRO.map((_, j) => `<i class="${j === i ? 'aktiv' : ''}"></i>`).join('');
      $('intro-næste').textContent = i === INTRO.length - 1 ? 'Begin' : 'Next';
    };
    const slut = () => { el.classList.remove('vis'); færdig(); };
    $('intro-næste').onclick = () => { if (++i >= INTRO.length) slut(); else vis(); };
    $('intro-spring').onclick = slut;
    vis();
    el.classList.add('vis');
  });
}

export class Fortælling {
  constructor(spil) {
    this.spil = spil;
    this.el = $('fase');
    this.tid = 0;
    $('verden-tekst').innerHTML = VERDEN_HTML;
    this.el.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      const v = spil.verdenstilstand, f = FASER[v.fase];
      const tekst = v.belønnet ? 'The servants are beaten. The Unnamed sleeps again — for now.'
        : f.id === 'balance' ? 'The world is calm. In the Fall, mines yield less and the wilds raid your base. Echoes reaching Erevoss bring the Awakening sooner.'
          : f.tekst;
      bus.emit('krønike', { titel: f.navn, tekst, farve: '#a070ff', varighed: 12 });
    });
  }

  opdater(dt) {
    this.tid -= dt;
    if (this.tid > 0) return;
    this.tid = 0.5;
    const v = this.spil.verdenstilstand;
    const f = FASER[v.fase], næste = FASER[v.fase + 1], rest = v.tilNæste();
    let tekst = f.navn;
    if (v.belønnet) tekst = 'The Unnamed sleeps';
    else if (næste && rest != null) tekst = `${f.navn} · ${næste.id === 'opvågning' ? 'Awakening' : næste.navn} in ${tid(rest)}`;
    if (this.el.textContent !== tekst) this.el.textContent = tekst;
    this.el.dataset.fase = v.belønnet ? 'sover' : f.id;
  }
}
