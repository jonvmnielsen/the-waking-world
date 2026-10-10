// Lyd (GDD M6): rigtige lydfiler fra game-assets (lydbank.js) med syntetiske WebAudio-lyde som reserve,
// mens filerne hentes.
// Lyde fra verden dæmpes efter afstanden til det sted, kameraet kigger på. Kan slås fra i menuen.
import { bus } from './events.js';
import { Lydbank } from './lydbank.js';

const NØGLE = 'tww-lyd';

export class Lyd {
  constructor() {
    this.ctx = null;
    try { this.til = localStorage.getItem(NØGLE) !== 'fra'; } catch { this.til = true; }
    this.sidst = new Map();
    this.lytter = () => null;
    // Lyden må først starte efter et tryk (browserens regel)
    const lås = () => { this.start(); window.removeEventListener('pointerdown', lås); };
    window.addEventListener('pointerdown', lås);
    document.addEventListener('click', (e) => { if (e.target.closest?.('button')) this.klik(); }, true);
  }

  start() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.til ? 0.55 : 0;
    this.master.connect(this.ctx.destination);
    // Hvid støj genbruges af alle støjlyde
    const b = this.ctx.createBuffer(1, this.ctx.sampleRate * 2, this.ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.støjBuffer = b;
    this.vind();
    this.bank = new Lydbank(this);
    this.bank.indlæs();
  }

  stopVind() { if (this.vindKilde) { this.vindKilde.stop(); this.vindKilde = null; } }

  // Spil en lydfil fra banken; false hvis den ikke er klar (så bruges den syntetiske)
  fil(navn, vol, valg) { return !!this.bank && this.til && this.bank.spil(navn, vol, valg); }

  // Kaldes hvert tidstrin: stemningen følger døgnet
  opdater(dt, nat) {
    this.stemTid = (this.stemTid ?? 0) + dt;
    if (this.stemTid < 0.5 || !this.bank) return;
    this.stemTid = 0;
    this.bank.opdaterStemning(nat);
  }

  skift() {
    this.til = !this.til;
    try { localStorage.setItem(NØGLE, this.til ? 'til' : 'fra'); } catch { /* ingen lagring */ }
    if (this.master) this.master.gain.setTargetAtTime(this.til ? 0.55 : 0, this.ctx.currentTime, 0.1);
    return this.til;
  }

  // Lydstyrke efter afstand til kameraets fokus (null = overalt)
  styrke(pos) {
    if (!pos) return 1;
    const l = this.lytter();
    if (!l) return 1;
    const d = Math.hypot(pos.x - l.x, pos.z - l.z);
    return Math.max(0, 1 - d / 70);
  }

  // Begræns hvor tit samme lyd må spille
  må(navn, ms) {
    const nu = performance.now();
    if (nu - (this.sidst.get(navn) ?? 0) < ms) return false;
    this.sidst.set(navn, nu);
    return true;
  }

  tone({ f = 440, til = null, type = 'sine', varighed = 0.15, vol = 0.3, forsink = 0, angreb = 0.005 }) {
    if (!this.ctx || !this.til) return;
    const t = this.ctx.currentTime + forsink;
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    if (til) o.frequency.exponentialRampToValueAtTime(til, t + varighed);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + angreb);
    g.gain.exponentialRampToValueAtTime(0.0001, t + varighed);
    o.connect(g).connect(this.master);
    o.start(t); o.stop(t + varighed + 0.05);
  }

  støj({ varighed = 0.1, vol = 0.3, filter = 'lowpass', f = 1200, til = null, q = 1, forsink = 0 }) {
    if (!this.ctx || !this.til) return;
    const t = this.ctx.currentTime + forsink;
    const s = this.ctx.createBufferSource(), fl = this.ctx.createBiquadFilter(), g = this.ctx.createGain();
    s.buffer = this.støjBuffer;
    fl.type = filter; fl.frequency.setValueAtTime(f, t); fl.Q.value = q;
    if (til) fl.frequency.exponentialRampToValueAtTime(til, t + varighed);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + varighed);
    s.connect(fl).connect(g).connect(this.master);
    s.start(t, Math.random()); s.stop(t + varighed + 0.05);
  }

  // Svag vind i baggrunden
  vind() {
    const s = this.ctx.createBufferSource(), fl = this.ctx.createBiquadFilter(), g = this.ctx.createGain();
    const lfo = this.ctx.createOscillator(), lfoG = this.ctx.createGain();
    s.buffer = this.støjBuffer; s.loop = true;
    fl.type = 'bandpass'; fl.frequency.value = 380; fl.Q.value = 0.6;
    g.gain.value = 0.035;
    lfo.frequency.value = 0.08; lfoG.gain.value = 0.02;
    lfo.connect(lfoG).connect(g.gain);
    s.connect(fl).connect(g).connect(this.master);
    s.start(); lfo.start();
    this.vindKilde = s;
  }

  // --- Lydeffekter ---
  klik() { if (!this.fil('klik', 0.35)) this.tone({ f: 1400, varighed: 0.04, vol: 0.08, type: 'triangle' }); }
  // art: 'slag' (spilleren rammer), 'slag_fjende' (en fjende rammer) eller 'slag_bygning'
  slag(pos, art = 'slag') {
    const v = this.styrke(pos);
    if (v <= 0 || !this.må('slag', 45)) return;
    if (this.fil(art, 0.55 * v)) return;
    const tung = art !== 'slag';
    this.støj({ varighed: 0.09, vol: 0.35 * v, f: tung ? 700 : 1500 });
    this.tone({ f: tung ? 90 : 140, til: 55, type: 'square', varighed: 0.1, vol: 0.12 * v });
  }
  kast(pos) {
    const v = this.styrke(pos);
    if (v <= 0 || !this.må('kast', 60)) return;
    this.støj({ varighed: 0.18, vol: 0.16 * v, filter: 'bandpass', f: 2500, til: 700, q: 2 });
  }
  død(pos) {
    const v = this.styrke(pos);
    if (v <= 0 || !this.må('død', 80)) return;
    if (this.fil('doed', 0.6 * v)) return;
    this.støj({ varighed: 0.35, vol: 0.25 * v, f: 600, til: 120 });
    this.tone({ f: 180, til: 60, type: 'sawtooth', varighed: 0.3, vol: 0.06 * v });
  }
  hug(pos, sten) {
    const v = this.styrke(pos);
    if (v <= 0 || !this.må('hug', 120)) return;
    if (this.fil(sten ? 'hug_sten' : 'hug_trae', 0.4 * v)) return;
    this.støj({ varighed: 0.06, vol: 0.22 * v, filter: 'bandpass', f: sten ? 3200 : 1600, q: 3 });
    this.tone({ f: sten ? 520 : 240, varighed: 0.07, vol: 0.08 * v, type: 'triangle' });
  }
  mønt(pos) {
    const v = this.styrke(pos);
    if (v <= 0 || !this.må('mønt', 250)) return;
    if (this.fil('moent', 0.45 * v)) return;
    this.tone({ f: 1318, varighed: 0.08, vol: 0.12 * v, type: 'triangle' });
    this.tone({ f: 1760, varighed: 0.12, vol: 0.1 * v, type: 'triangle', forsink: 0.06 });
  }
  akkord(toner, { type = 'triangle', vol = 0.16, varighed = 0.5, trin = 0.09 } = {}) {
    toner.forEach((f, i) => this.tone({ f, type, vol, varighed, forsink: i * trin }));
  }
  horn(dyb = false) {
    this.tone({ f: dyb ? 73 : 110, til: dyb ? 65 : 98, type: 'sawtooth', varighed: 1.4, vol: 0.12, angreb: 0.2 });
    this.tone({ f: dyb ? 110 : 165, type: 'sawtooth', varighed: 1.2, vol: 0.06, angreb: 0.25, forsink: 0.1 });
  }
  klokke() { this.tone({ f: 196, type: 'sine', varighed: 2.5, vol: 0.18 }); this.tone({ f: 392, type: 'sine', varighed: 1.8, vol: 0.06 }); }
  // Lyde der kun findes som filer
  enkelt(navn, pos, vol = 0.6, ms = 300) {
    const v = this.styrke(pos);
    if (v > 0 && this.må(navn, ms)) this.fil(navn, vol * v);
  }

  evne() { this.støj({ varighed: 0.35, vol: 0.2, filter: 'bandpass', f: 400, til: 3000, q: 1.5 }); }
}

// Kobl lydene på spillets begivenheder
export function forbindLyd(lyd, spil) {
  const { helt } = spil;
  const egen = (u) => u === helt || u?.side === 'egen';
  lyd.lytter = () => spil.rig.fokus;
  bus.on('skade', ({ mål, mængde, kilde }) => {
    if (!(mængde > 0) || !kilde) return;
    lyd.slag(mål, mål.erBygning || mål.felter ? 'slag_bygning' : egen(kilde) ? 'slag' : 'slag_fjende');
  });
  bus.on('projektil', ({ fra }) => lyd.kast(fra));
  bus.on('creep_død', ({ creep }) => lyd.død(creep));
  bus.on('soldat_død', ({ soldat }) => lyd.død(soldat));
  bus.on('høst_slag', ({ x, z, type }) => lyd.hug({ x, z }, type === 'sten'));
  bus.on('flydetekst', ({ enhed, klasse, tekst }) => {
    if (klasse === 'guld') lyd.mønt(enhed);
    if (tekst === 'Blocked') lyd.enkelt('blok', enhed, 0.6, 100);
  });
  bus.on('kilde_tom', ({ type, kilde }) => { if (type === 'træ') lyd.enkelt('trae_falder', kilde, 0.5, 600); });
  bus.on('bygning_ødelagt', ({ bygning }) => lyd.enkelt('bygning_falder', bygning, 0.8, 500));
  bus.on('fjende_bygning_ødelagt', ({ bygning }) => lyd.enkelt('bygning_falder', bygning, 0.8, 500));
  bus.on('butik_åben', () => lyd.enkelt('doer', null, 0.5, 500));
  bus.on('level_op', () => lyd.akkord([523, 659, 784, 1046]));
  bus.on('bygning_færdig', ({ bygning }) => { if (helt.tid > 2) lyd.akkord([392, 523, 659], { vol: 0.1 }); });
  bus.on('evne', () => lyd.evne());
  bus.on('fjende_angreb', () => lyd.horn());
  bus.on('verdenstilstand', ({ fase }) => { lyd.horn(true); if (fase.id === 'opvågning') lyd.enkelt('uhyggelig', null, 0.7, 1000); });
  bus.on('nat', () => lyd.klokke());
  bus.on('dag', () => { if (!lyd.fil('hane', 0.45)) lyd.akkord([659, 784], { type: 'sine', vol: 0.08, varighed: 0.4, trin: 0.15 }); });
  bus.on('spil_slut', ({ vandt }) => lyd.akkord(vandt ? [392, 494, 587, 784] : [330, 294, 247, 196], { varighed: 1.2, trin: 0.25 }));
}
