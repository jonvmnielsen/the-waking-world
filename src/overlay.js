// HTML-lag oven på 3D: livsbjælker over enheder, flyvende skadetal og korte beskeder.
import * as THREE from 'three';
import { bus } from './events.js';

const v = new THREE.Vector3();

export class Overlay {
  constructor(rod, verden, kamera) {
    this.rod = rod; this.verden = verden; this.kamera = kamera;
    this.bjælker = new Map();   // unit -> element
    this.toastEl = document.getElementById('toast');

    bus.on('skade', ({ mål, mængde, kilde }) => {
      if (mængde <= 0) return this.tal(mål, 'Immun', 'immun');
      const fraHelt = kilde === this.verden.helt;
      this.tal(mål, mængde, fraHelt ? (mængde > this.verden.helt.stats.skadeMax * 1.2 ? 'krit' : 'helt') : 'fjende');
    });
    bus.on('creep_død', ({ creep, xp }) => this.tal(creep, `+${xp} XP`, 'xp', 0.6));
    bus.on('level_op', ({ helt, level }) => this.tal(helt, `Level ${level}!`, 'level', 1.2));
    bus.on('besked', (tekst) => this.toast(tekst));
    bus.on('flydetekst', ({ enhed, tekst, klasse }) => this.tal(enhed, tekst, klasse, 0.4));
  }

  skærm(x, y, z) {
    v.set(x, y, z).project(this.kamera);
    return { x: (v.x * 0.5 + 0.5) * this.rod.clientWidth, y: (-v.y * 0.5 + 0.5) * this.rod.clientHeight, synlig: v.z < 1 };
  }

  tal(enhed, tekst, klasse, ekstraHøjde = 0) {
    const s = this.skærm(enhed.x, (enhed.højde ?? 1.4) + 0.6 + ekstraHøjde, enhed.z);
    const el = document.createElement('div');
    el.className = `tal ${klasse}`;
    el.textContent = tekst;
    el.style.left = `${s.x + (Math.random() - 0.5) * 24}px`;
    el.style.top = `${s.y}px`;
    this.rod.appendChild(el);
    setTimeout(() => el.remove(), 1100);
  }

  toast(tekst) {
    this.toastEl.textContent = tekst;
    this.toastEl.classList.remove('vis');
    void this.toastEl.offsetWidth;
    this.toastEl.classList.add('vis');
  }

  opdater() {
    const enheder = [this.verden.helt, ...this.verden.creeps];
    for (const u of enheder) {
      let el = this.bjælker.get(u);
      const vis = !u.død && !u.fjernet && u.rod.visible && (u === this.verden.helt || u.tilstand !== 'vågner');
      if (!vis) { if (el) { el.remove(); this.bjælker.delete(u); } continue; }
      if (!el) {
        el = document.createElement('div');
        el.className = `bjælke ${u === this.verden.helt ? 'helt' : 'fjende'}`;
        el.innerHTML = '<i></i>';
        this.rod.appendChild(el);
        this.bjælker.set(u, el);
      }
      const s = this.skærm(u.x, u.højde + 0.35, u.z);
      el.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, -50%)`;
      el.style.display = s.synlig ? '' : 'none';
      el.firstChild.style.width = `${(u.hp / u.maxHp) * 100}%`;
    }
    for (const [u, el] of this.bjælker) if (!enheder.includes(u)) { el.remove(); this.bjælker.delete(u); }
  }
}
