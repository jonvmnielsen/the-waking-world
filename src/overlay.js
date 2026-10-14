// HTML-lag oven på 3D: livsbjælker over enheder, flyvende skadetal og korte beskeder.
import * as THREE from 'three';
import { bus } from './events.js';

const v = new THREE.Vector3();

export class Overlay {
  constructor(rod, verden, kamera, ekstra = () => []) {
    this.rod = rod; this.verden = verden; this.kamera = kamera;
    this.ekstra = ekstra;   // egne arbejdere, soldater og byggepladser
    this.bjælker = new Map();   // unit -> element
    this.toastEl = document.getElementById('toast');

    bus.on('skade', ({ mål, mængde, kilde }) => {
      if (mængde <= 0) return this.tal(mål, 'Immune', 'immun');
      const fraHelt = kilde === this.verden.helt;
      this.tal(mål, mængde, fraHelt ? (mængde > this.verden.helt.stats.skadeMax * 1.2 ? 'krit' : 'helt') : 'fjende');
    });
    bus.on('creep_død', ({ creep, xp }) => this.tal(creep, `+${xp} XP`, 'xp', 0.6));
    bus.on('level_op', ({ helt, level }) => this.tal(helt, `Level ${level}!`, 'level', 1.2));
    bus.on('besked', (tekst) => this.toast(tekst));
    bus.on('flydetekst', ({ enhed, tekst, klasse }) => this.tal(enhed, tekst, klasse, 0.4));
    bus.on('mærkat', ({ ting, html, farve }) => this.mærkat(ting, html, farve, 3600));
    bus.on('replik', ({ enhed, tekst }) => this.mærkat(enhed, `<i class="replik">“${tekst}”</i>`, '#f2e2b8', 3400));
  }

  skærm(x, y, z) {
    v.set(x, y, z).project(this.kamera);
    return { x: (v.x * 0.5 + 0.5) * this.rod.clientWidth, y: (-v.y * 0.5 + 0.5) * this.rod.clientHeight, synlig: v.z < 1 };
  }

  tal(enhed, tekst, klasse, ekstraHøjde = 0) {
    const s = this.skærm(enhed.x, (enhed.højde ?? 1.4) + 0.6 + ekstraHøjde + (enhed.rod?.position.y ?? 0), enhed.z);
    const el = document.createElement('div');
    el.className = `tal ${klasse}`;
    el.textContent = tekst;
    el.style.left = `${s.x + (Math.random() - 0.5) * 24}px`;
    el.style.top = `${s.y}px`;
    this.rod.appendChild(el);
    setTimeout(() => el.remove(), 1100);
  }

  // Et lille navneskilt over noget i verden (fx et item på jorden), der følger med i et par sekunder
  mærkat(ting, html, farve, ms = 2600) {
    this.mærkatEl?.remove();
    const el = document.createElement('div');
    el.className = 'mærkat';
    el.style.color = farve;
    el.innerHTML = html;
    this.rod.appendChild(el);
    this.mærkatEl = el; this.mærkatTing = ting;
    clearTimeout(this.mærkatTimer);
    this.mærkatTimer = setTimeout(() => { el.remove(); if (this.mærkatEl === el) this.mærkatEl = null; }, ms);
  }

  toast(tekst) {
    this.toastEl.textContent = tekst;
    this.toastEl.classList.remove('vis');
    void this.toastEl.offsetWidth;
    this.toastEl.classList.add('vis');
  }

  opdater() {
    if (this.mærkatEl) {
      const s = this.skærm(this.mærkatTing.x, (this.mærkatTing.højde ?? 0.2) + 1.4, this.mærkatTing.z);   // over helten (replikker) eller over et item
      this.mærkatEl.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, -100%)`;
    }
    const enheder = [this.verden.helt, ...this.verden.creeps, ...this.ekstra()];
    for (const u of enheder) {
      let el = this.bjælker.get(u);
      const vis = !u.død && !u.fjernet && u.rod.visible && (u === this.verden.helt || u.tilstand !== 'vågner') && (!u.erBygning || u.hp < u.maxHp);
      if (!vis) { if (el) { el.remove(); this.bjælker.delete(u); } continue; }
      if (!el) {
        el = document.createElement('div');
        const helt = u === this.verden.helt;
        el.className = `bjælke ${helt ? 'helt' : u.side === 'egen' ? 'egen' : 'fjende'}`;
        // Helten har også mana, erfaring og level over hovedet
        el.innerHTML = helt ? '<em class="liv"><u></u></em><em class="mana"><u></u></em><em class="xp"><u></u></em><span class="lv"></span>' : '<i></i>';
        this.rod.appendChild(el);
        this.bjælker.set(u, el);
      }
      // Heltens bjælker står over hovedet (bunden af bjælkerne ved toppen af helten), så de ikke dækker den
      const helt = u === this.verden.helt;
      const s = this.skærm(u.x, u.højde + (helt ? 0.55 : 0.35) + (u.rod?.position.y ?? 0), u.z);
      el.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, ${helt ? '-100%' : '-50%'})`;
      el.style.display = s.synlig ? '' : 'none';
      (el.firstChild.firstChild ?? el.firstChild).style.width = `${(u.hp / u.maxHp) * 100}%`;
      if (u === this.verden.helt) {
        el.children[1].firstChild.style.width = `${(u.mana / u.manaMax) * 100}%`;
        el.children[2].firstChild.style.width = `${u.xpProcent() * 100}%`;
        if (el.lastChild.textContent !== String(u.level)) el.lastChild.textContent = u.level;
      }
      // Veteraner får en stjerne i grenens farve
      if (u.vet && el.dataset.vet !== `${u.vet.veteran}${u.vet.gren?.id}`) {
        el.dataset.vet = `${u.vet.veteran}${u.vet.gren?.id}`;
        el.classList.toggle('vet', u.vet.veteran);
        if (u.vet.gren) el.style.setProperty('--gren', `#${u.vet.gren.farve.toString(16).padStart(6, '0')}`);
      }
    }
    for (const [u, el] of this.bjælker) if (!enheder.includes(u)) { el.remove(); this.bjælker.delete(u); }
  }
}
