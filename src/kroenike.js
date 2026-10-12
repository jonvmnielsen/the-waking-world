// Krøniken (M8, Jons ønske: det der sker i verden skal stå længere og kunne forstås).
// bus.emit('krønike', { titel, tekst, x, z, farve, varighed }) viser en post under uret i højre side
// i ca. 15 sekunder. Har posten et sted, blinker minimappet der i postens farve, og et tryk på posten
// flytter kameraet derhen. Menuen viser de seneste 30 poster.
// Jon: for meget tekst på den lille skærm — kun vigtige poster (vigtig: true) vises på skærmen, én ad gangen;
// resten står kun i krøniken i menuen og blinker på minimappet.
import { bus } from './events.js';

const MAKS_SYNLIGE = 1, MAKS_LOG = 30, PING_TID = 12;

export class Krønike {
  constructor(spil) {
    this.spil = spil;
    this.el = document.getElementById('krønike');
    this.logEl = document.getElementById('krønike-log');
    this.log = [];
    this.pings = [];
    bus.on('krønike', (p) => this.ny(p));
  }

  ny({ titel, tekst = '', x = null, z = null, farve = '#e8c66a', varighed = 15, vigtig = false }) {
    const nu = this.spil.ur?.tid ?? 0;
    if (!vigtig) { if (x != null) this.pings.push({ x, z, farve, tid: nu }); return this.tilLog(nu, titel, tekst, farve); }
    const post = document.createElement('div');
    post.className = 'post' + (x != null ? ' sted' : '');
    post.style.setProperty('--f', farve);
    post.innerHTML = `<b></b><span></span>`;
    post.querySelector('b').textContent = titel;
    post.querySelector('span').textContent = tekst;
    if (x != null) {
      post.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        this.spil.rig.følger = false;
        this.spil.rig.fokus.set(x, 0, z);
        post.remove();
      });
      this.pings.push({ x, z, farve, tid: nu });
    }
    this.el.prepend(post);
    while (this.el.children.length > MAKS_SYNLIGE) this.el.lastChild.remove();
    setTimeout(() => { post.classList.add('væk'); setTimeout(() => post.remove(), 600); }, Math.max(varighed, 18) * 1000);
    this.tilLog(nu, titel, tekst, farve);
  }

  // Til menuen
  tilLog(nu, titel, tekst, farve) {
    const min = Math.floor(nu / 60), sek = String(Math.floor(nu % 60)).padStart(2, '0');
    this.log.unshift({ tid: `${min}:${sek}`, titel, tekst, farve });
    this.log.length = Math.min(this.log.length, MAKS_LOG);
    this.tegnLog();
  }

  tegnLog() {
    if (!this.logEl) return;
    this.logEl.replaceChildren(...this.log.map((l) => {
      const p = document.createElement('p');
      p.style.setProperty('--f', l.farve);
      p.innerHTML = '<i></i><b></b> <span></span>';
      p.querySelector('i').textContent = l.tid;
      p.querySelector('b').textContent = l.titel;
      p.querySelector('span').textContent = l.tekst;
      return p;
    }));
  }

  // Til minimappet: steder der blinker i postens farve
  aktive() {
    const nu = this.spil.ur.tid;
    this.pings = this.pings.filter((p) => nu - p.tid < PING_TID);
    return this.pings.map((p) => ({ ...p, styrke: Math.floor((nu - p.tid) * 3) % 2 ? 0.4 : 1 }));
  }
}
