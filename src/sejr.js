// Sejr og nederlag (GDD 11): man vinder, når alle The Memorys bygninger er ødelagt,
// og taber, når man ikke har flere bygninger. Slutskærmen viser lidt statistik.
import { bus } from './events.js';
import { sletGem } from './gem.js';

const $ = (id) => document.getElementById(id);

export class Sejr {
  constructor(spil) {
    this.spil = spil;
    this.tal = { dræbt: 0, faldne: 0, ødelagt: 0, tabt: 0, trænet: 0 };
    this.slut = null;
    this.tid = 0;
    bus.on('creep_død', ({ creep }) => { if (creep.lejr?.fjende) this.tal.dræbt++; });
    bus.on('soldat_død', () => this.tal.faldne++);
    bus.on('fjende_bygning_ødelagt', () => this.tal.ødelagt++);
    bus.on('bygning_ødelagt', () => this.tal.tabt++);
    bus.on('soldat_ny', () => this.tal.trænet++);
    $('slut-fortsaet').addEventListener('click', () => $('slutskærm').classList.remove('vis'));
    $('slut-menu').addEventListener('click', () => location.reload());
  }

  opdater(dt) {
    this.tid += dt;
    if (this.slut || this.tid < 1) return;
    this.tid = 0;
    if (this.spil.memory.besejret) this.afslut(true);
    else if (!this.spil.base.bygninger.length) this.afslut(false);
  }

  afslut(vandt) {
    this.slut = vandt ? 'sejr' : 'nederlag';
    if (!vandt) sletGem();   // et tabt spil kan ikke fortsættes
    const min = Math.floor(this.spil.helt.tid / 60), t = this.tal;
    $('slut-titel').textContent = vandt ? 'Victory' : 'Defeat';
    $('slut-under').textContent = vandt
      ? 'The Memory crumbles to dust. The Tide endures.'
      : 'Your last building has fallen. The Memory remembers your name.';
    $('slut-tal').innerHTML = [
      ['Time', `${min} min`], ['Hero level', this.spil.helt.level], ['Undead slain', t.dræbt],
      ['Enemy buildings razed', t.ødelagt], ['Soldiers trained', t.trænet], ['Soldiers lost', t.faldne],
    ].map(([k, v]) => `<span>${k}</span><b>${v}</b>`).join('');
    $('slut-fortsaet').hidden = !vandt;
    $('slutskærm').className = `vis ${this.slut}`;
    bus.emit('spil_slut', { vandt });
  }
}
