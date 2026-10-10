// Skærmens faste brugerflade: heltepanel, evneknapper, kamera-knap, menu og essensvalg.
import { ESSENSER } from './abilities.js';
import { bus } from './events.js';

const $ = (id) => document.getElementById(id);

export class Hud {
  constructor(spil) {
    this.spil = spil;
    this.knapper = [0, 1, 2].map((i) => $(`evne${i}`));
    this.knapper.forEach((k, i) => k.addEventListener('pointerdown', (e) => { e.preventDefault(); spil.brugEvne(i); }));
    $('centrer').addEventListener('click', () => spil.rig.centrér());
    $('menuknap').addEventListener('click', () => $('menu').classList.toggle('åben'));
    $('test-level').addEventListener('click', () => { spil.helt.fåXp(Math.max(1, spil.nødvendigXp())); });
    $('genstart').addEventListener('click', () => location.reload());
    window.addEventListener('keydown', (e) => {
      const i = ['q', 'w', 'e'].indexOf(e.key.toLowerCase());
      if (i >= 0) spil.brugEvne(i);
      if (e.key === ' ') spil.rig.centrér();
    });
    bus.on('helt_død', () => $('dødsskærm').classList.add('vis'));
    bus.on('helt_genoplivet', () => $('dødsskærm').classList.remove('vis'));
    bus.on('level_op', ({ level }) => this.banner(`Level ${level}`, level === 3 || level === 6 ? 'Ny evne låst op!' : 'Din helt bliver stærkere'));
  }

  banner(titel, under) {
    const b = $('banner');
    b.innerHTML = `<b>${titel}</b><span>${under}</span>`;
    b.classList.remove('vis'); void b.offsetWidth; b.classList.add('vis');
  }

  opdater() {
    const h = this.spil.helt;
    $('level').textContent = h.level;
    $('hp').style.width = `${(h.hp / h.maxHp) * 100}%`;
    $('hp-tal').textContent = `${Math.ceil(h.hp)} / ${Math.round(h.maxHp)}`;
    $('mana').style.width = `${(h.mana / h.manaMax) * 100}%`;
    $('mana-tal').textContent = `${Math.floor(h.mana)} / ${h.manaMax}`;
    $('xp').style.width = `${h.xpProcent() * 100}%`;
    $('centrer').classList.toggle('skjult', this.spil.rig.følger);
    if (h.død) $('genopliv-tid').textContent = Math.ceil(h.genopliv);

    this.knapper.forEach((k, i) => {
      const e = h.evner.info(i);
      k.querySelector('.ikon').textContent = e.ikon;
      k.querySelector('.navn').textContent = e.navn;
      k.classList.toggle('låst', !e.oplåst);
      k.classList.toggle('tom', e.oplåst && h.mana < e.mana);
      k.querySelector('.lås').textContent = e.oplåst ? '' : `Lvl ${e.oplåsLevel}`;
      const cd = e.cd > 0 ? e.cd / e.cdMax : 0;
      k.style.setProperty('--cd', `${cd * 360}deg`);
      k.querySelector('.cd').textContent = e.cd > 0 ? Math.ceil(e.cd) : '';
    });
  }
}

// Essensvalget før spillet starter. Returnerer et Promise med valgt essens.
export function vælgEssens() {
  return new Promise((løs) => {
    const boks = $('essenser');
    boks.innerHTML = '';
    for (const [id, e] of Object.entries(ESSENSER)) {
      const kort = document.createElement('button');
      kort.className = `essens ${id}`;
      kort.innerHTML = `<b>${e.navn}</b><span>${e.tekst}</span>`;
      kort.addEventListener('click', () => { $('essensvalg').classList.remove('vis'); løs(id); });
      boks.appendChild(kort);
    }
    $('essensvalg').classList.add('vis');
  });
}
