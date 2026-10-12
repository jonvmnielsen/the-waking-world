// Skærmens faste brugerflade: helteknap og heltens bjælker, evneknapper, kamera-knap og essensvalg.
import { bus } from './events.js';
import { gemSpil } from './gem.js';

const $ = (id) => document.getElementById(id);

export class Hud {
  constructor(spil) {
    this.spil = spil;
    this.knapper = [0, 1, 2, 3, 4].map((i) => $(`evne${i}`));
    this.knapper.forEach((k, i) => k.addEventListener('pointerdown', (e) => { e.preventDefault(); spil.brugEvne(i); }));
    $('centrer').addEventListener('click', () => spil.rig.centrér());
    $('test-level').addEventListener('click', () => { spil.helt.fåXp(Math.max(1, spil.nødvendigXp())); });
    $('genstart').addEventListener('click', () => location.reload());
    $('gem').addEventListener('click', () => { bus.emit('besked', gemSpil(spil) ? 'Game saved' : 'The game could not be saved'); bus.emit('luk_menu'); });
    window.addEventListener('keydown', (e) => {
      const i = ['q', 'w', 'e', 'r', 't'].indexOf(e.key.toLowerCase());
      if (i >= 0) spil.brugEvne(i);
      if (e.key === ' ') spil.rig.centrér();
    });
    bus.on('helt_død', () => $('dødsskærm').classList.add('vis'));
    bus.on('helt_genoplivet', () => $('dødsskærm').classList.remove('vis'));
    bus.on('banner', ({ titel, tekst, lang }) => this.banner(titel, tekst, lang));
    bus.on('level_op', ({ level }) => this.banner(`Level ${level}`, [3, 6, 14].includes(level) ? 'New ability unlocked!' : level === 10 && !spil.helt.sti.id ? 'Ascension awaits' : 'Your hero grows stronger'));
  }

  banner(titel, under, meget = false) {
    const b = $('banner');
    b.innerHTML = `<b>${titel}</b><span>${under}</span>`;
    b.classList.toggle('lang', under.length > 40);
    b.classList.toggle('meget', !!meget);
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
    $('xp-tal').textContent = h.level >= 20 ? 'Max level' : `Level ${h.level} · ${Math.round(h.xpProcent() * 100)}% to ${h.level + 1}`;
    const kn = $('helteknap');
    kn.style.setProperty('--liv', `${(h.hp / h.maxHp) * 360}deg`);
    kn.classList.toggle('død', h.død);
    $('centrer').classList.toggle('skjult', this.spil.rig.følger);
    if (h.død) $('genopliv-tid').textContent = Math.ceil(h.genopliv);

    this.knapper.forEach((k, i) => {
      const e = h.evner.info(i);
      if (!e) return;
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

export { vælgEssens } from './essensvalg.js';
