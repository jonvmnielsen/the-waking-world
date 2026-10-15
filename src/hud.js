// Skærmens faste brugerflade: helteknap og heltens bjælker, evneknapper, kamera-knap og essensvalg.
import { bus } from './events.js';
import { gemSpil } from './gem.js';

const $ = (id) => document.getElementById(id);

export class Hud {
  constructor(spil) {
    this.spil = spil;
    this.knapper = [0, 1, 2, 3, 4, 5].map((i) => $(`evne${i}`));
    this.knapper.forEach((k, i) => k.addEventListener('pointerdown', (e) => { e.preventDefault(); spil.brugEvne(i); }));
    // "+" på en evne: læg et skill point i den (evnerang.js)
    for (const l of document.querySelectorAll('.evne .lær')) l.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); const f = spil.helt.evner.lær(+l.dataset.slot); if (f) bus.emit('besked', f); });
    $('centrer').addEventListener('click', () => spil.rig.centrér());
    $('test-level').addEventListener('click', () => { spil.helt.fåXp(Math.max(1, spil.nødvendigXp())); });
    $('genstart').addEventListener('click', () => location.reload());
    $('gem').addEventListener('click', () => { bus.emit('besked', gemSpil(spil) ? 'Game saved' : 'The game could not be saved'); bus.emit('luk_menu'); });
    window.addEventListener('keydown', (e) => {
      const i = ['q', 'w', 'e', 'r', 't', 'g'].indexOf(e.key.toLowerCase());
      if (i >= 0) spil.brugEvne(i);
      if (e.key === ' ') spil.rig.centrér();
    });
    bus.on('helt_død', () => { $('dødsskærm').classList.add('vis'); clearTimeout(this.dødTimer); this.dødTimer = setTimeout(() => $('dødsskærm').classList.remove('vis'), 6000); });
    bus.on('helt_genoplivet', () => $('dødsskærm').classList.remove('vis'));
    bus.on('banner', ({ titel, tekst, lang }) => this.banner(titel, tekst, lang));
    bus.on('level_op', ({ level }) => this.banner(`Level ${level}`, level === 6 ? 'Your ULTIMATE can be learned!' : level === 10 && !spil.helt.sti.id ? 'Ascension awaits · +1 skill point' : '+1 skill point — tap + on an ability'));
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
    kn.classList.toggle('point', h.skillpunkter > 0 && !h.død);
    if (h.død) $('genopliv-tekst').textContent = this.spil.alter?.status() ?? 'Revive your hero at your Spirit Altar';

    this.knapper.forEach((k, i) => {
      const e = h.evner.info(i);
      if (!e) { if (i === 5) k.hidden = true; return; }
      k.hidden = false;
      k.querySelector('.ikon').textContent = e.ikon;
      k.classList.toggle('kan-lære', !!e.kanLære);
      const rang = k.querySelector('.rang');
      if (rang) rang.textContent = e.rang > 0 ? '●'.repeat(e.rang) + '○'.repeat(3 - e.rang) : '';
      k.querySelector('.navn').textContent = e.navn;
      k.classList.toggle('låst', !e.oplåst);
      k.classList.toggle('tom', e.oplåst && h.mana < e.mana);
      k.classList.toggle('ultimate', !!e.ultimatum);
      k.classList.toggle('klar', !!e.ultimatum && e.oplåst && e.cd <= 0 && h.mana >= e.mana);
      k.querySelector('.lås').textContent = e.oplåst ? '' : e.kanLære ? 'Learn' : `Lvl ${e.oplåsLevel}`;
      const cd = e.cd > 0 ? e.cd / e.cdMax : 0;
      k.style.setProperty('--cd', `${cd * 360}deg`);
      k.querySelector('.cd').textContent = e.cd > 0 ? Math.ceil(e.cd) : '';
    });
  }
}

export { vælgEssens } from './essensvalg.js';
