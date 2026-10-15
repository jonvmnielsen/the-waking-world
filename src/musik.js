// Musik (M14c): racens tema spillet af syntetiske instrumenter med WebAudio (ingen filer at hente).
// Følger døgnet (nat = stille, ingen krigstrommer) og kampen (flere trommer, når helten eller hæren slås).
// Temaet spiller 16 takter og holder så en pause, så det ikke trætter. Kan slås fra i menuen ("Music").
// Spillet af en planlægger, der lægger toner ind et øjeblik ude i fremtiden (lookahead), så rytmen holder.
import { TEMAER, GRUNDTONE, FORLØB } from './musikdata.js';
import { SPILLER } from './racer.js';

const NØGLE = 'tww-musik';
const frek = (n) => 440 * 2 ** ((GRUNDTONE + n - 69) / 12);

export class Musik {
  constructor(spil) {
    this.spil = spil;
    this.tema = TEMAER[SPILLER.id] ?? TEMAER.tide;
    try { this.til = localStorage.getItem(NØGLE) !== 'fra'; } catch { this.til = true; }
    this.takt = 0; this.trin = 0; this.pause = 0; this.kamp = 0;
    setInterval(() => this.planlæg(), 100);
  }

  // Lydbanen bygges, når lyden er startet (efter første tryk)
  klar() {
    const ctx = this.lyd.ctx;
    if (!ctx || !this.lyd.master) return false;
    if (this.ud) return true;
    this.ud = ctx.createGain(); this.ud.gain.value = this.til ? 0.36 : 0; this.ud.connect(this.lyd.master);
    // Rumklang: en impuls af aftagende støj
    const len = ctx.sampleRate * 2.6, ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 3; }
    this.rum = ctx.createConvolver(); this.rum.buffer = ir;
    const våd = ctx.createGain(); våd.gain.value = 0.55; this.rum.connect(våd); våd.connect(this.ud);
    this.næste = ctx.currentTime + 0.2;
    return true;
  }

  skift() {
    this.til = !this.til;
    try { localStorage.setItem(NØGLE, this.til ? 'til' : 'fra'); } catch { /* ingen lagring */ }
    if (this.ud) this.ud.gain.setTargetAtTime(this.til ? 0.36 : 0, this.lyd.ctx.currentTime, 0.3);
    return this.til;
  }

  get lyd() { return this.spil.lyd ?? {}; }
  get nat() { return !!this.spil.dagNat?.nat; }

  // Kamp: helten eller en soldat har slået eller er blevet slået for nylig
  opdaterKamp() {
    const s = this.spil, i = s.helt?.iKamp || s.base?.soldater.some((u) => !u.død && u.iKamp);
    this.kamp += ((i ? 1 : 0) - this.kamp) * 0.08;
  }

  planlæg() {
    if (!this.til || !this.klar()) return;
    const ctx = this.lyd.ctx, sek16 = 60 / this.tema.tempo / 4;
    this.opdaterKamp();
    while (this.næste < ctx.currentTime + 0.35) { this.spilTrin(this.næste, sek16); this.næste += sek16; }
  }

  spilTrin(t, sek16) {
    const T = this.tema, nat = this.nat, trin = this.trin;
    if (trin === 0) {   // ny takt
      if (this.pause > 0) { this.pause -= 1; }
      else {
        this.takt += 1;
        if (this.takt > FORLØB.takter) { this.takt = 0; this.pause = FORLØB.pause[0] + Math.floor(Math.random() * (FORLØB.pause[1] - FORLØB.pause[0])); }
      }
    }
    this.trin = (trin + 1) % 16;
    if (this.pause > 0 && this.kamp < 0.5) return;   // stilhed mellem temaerne (men aldrig midt i en kamp)
    const takt = Math.max(0, this.takt - 1), akkord = T.akkorder[Math.floor(takt / 2) % T.akkorder.length];
    // Flade: en akkord hver anden takt
    if (trin === 0 && takt % 2 === 0) this.flade(akkord, t, sek16 * 32, nat ? 0.05 : 0.07, T.flade);
    // Trommer
    const tr = nat ? T.natTrommer : T.trommer;
    if (tr.stor.includes(trin)) this.tromme(t, 62, nat ? 0.22 : 0.42);
    if (tr.lille.includes(trin)) this.tromme(t, 150, 0.2);
    if (this.kamp > 0.4 && tr.ekstra.includes(trin)) this.tromme(t, T.flade === 'strygere' ? 0 : 110, 0.24 * this.kamp);
    // Harpe: arpeggio over akkorden
    if (T.harpe && trin % 2 === 0 && (!nat || trin % 4 === 0)) this.harpe(frek(akkord[(trin / 2) % akkord.length] + 12), t, 0.08);
    // Melodi: et motiv hver fjerde takt
    if (takt % 4 === 1 && trin === 0) this.melodi(akkord, t, sek16, nat ? T.natMelodi : T.melodi);
  }

  melodi(akkord, t, sek16, instrument) {
    const T = this.tema, m = T.motiver[Math.floor(Math.random() * T.motiver.length)];
    let tid = t;
    m.forEach((i, k) => {
      const lang = (k === m.length - 1 ? 6 : Math.random() < 0.3 ? 3 : 2) * sek16;
      const tone = frek(T.skala[Math.min(T.skala.length - 1, i)] + 12);
      if (instrument === 'harpe') this.harpe(tone * 2, tid, 0.1); else if (instrument === 'fløjte') this.fløjte(tone * 2, tid, lang); else this.horn(tone, tid, lang);
      tid += lang;
    });
  }

  // --- Instrumenter ---
  env(g, t, a, top, slut) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(top, t + a); g.gain.exponentialRampToValueAtTime(0.0001, slut); }
  send(node, våd = 0.6) { node.connect(this.ud); const s = this.lyd.ctx.createGain(); s.gain.value = våd; node.connect(s); s.connect(this.rum); }

  flade(akkord, t, dur, vol, slags) {
    const ctx = this.lyd.ctx, f = ctx.createBiquadFilter(), g = ctx.createGain();
    f.type = 'lowpass'; f.frequency.value = slags === 'drone' ? 520 : 1100;
    f.connect(g); this.send(g, 0.8);
    this.env(g, t, 1.6, vol, t + dur + 1.5);
    const toner = slags === 'drone' ? akkord.slice(0, 2).map((n) => n - 12).concat(akkord.slice(0, 2)) : akkord;
    for (const n of toner) for (const fin of [-6, 6]) {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = frek(n); o.detune.value = fin;
      o.connect(f); o.start(t); o.stop(t + dur + 1.6);
    }
  }

  horn(fr, t, dur) {
    const ctx = this.lyd.ctx, o = ctx.createOscillator(), o2 = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain(), lfo = ctx.createOscillator(), lg = ctx.createGain();
    o.type = 'sawtooth'; o2.type = 'square'; o.frequency.value = fr; o2.frequency.value = fr / 2;
    lfo.frequency.value = 5; lg.gain.value = fr * 0.012; lfo.connect(lg); lg.connect(o.frequency);
    f.type = 'lowpass'; f.frequency.setValueAtTime(500, t); f.frequency.linearRampToValueAtTime(1300, t + 0.15); f.Q.value = 2;
    const o2g = ctx.createGain(); o2g.gain.value = 0.3;
    o.connect(f); o2.connect(o2g); o2g.connect(f); f.connect(g); this.send(g, 0.7);
    this.env(g, t, 0.09, 0.11, t + dur + 0.35);
    for (const x of [o, o2, lfo]) { x.start(t); x.stop(t + dur + 0.4); }
  }

  fløjte(fr, t, dur) {
    const ctx = this.lyd.ctx, o = ctx.createOscillator(), g = ctx.createGain(), lfo = ctx.createOscillator(), lg = ctx.createGain();
    o.type = 'sine'; o.frequency.value = fr; lfo.frequency.value = 5.5; lg.gain.value = fr * 0.008; lfo.connect(lg); lg.connect(o.frequency);
    o.connect(g); this.send(g, 0.9);
    this.env(g, t, 0.12, 0.07, t + dur + 0.3);
    for (const x of [o, lfo]) { x.start(t); x.stop(t + dur + 0.35); }
  }

  harpe(fr, t, vol) {
    const ctx = this.lyd.ctx, o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'triangle'; o2.type = 'sine'; o.frequency.value = fr; o2.frequency.value = fr * 2;
    o.connect(g); o2.connect(g); this.send(g, 0.6);
    this.env(g, t, 0.005, vol, t + 1.4);
    for (const x of [o, o2]) { x.start(t); x.stop(t + 1.5); }
  }

  // Tromme: tonehøjde 0 = en kort støjtromme (march), ellers en stor/lille tromme med faldende tone
  tromme(t, tone, vol) {
    const ctx = this.lyd.ctx, g = ctx.createGain();
    g.connect(this.ud);
    if (tone === 0) {
      const s = ctx.createBufferSource(), f = ctx.createBiquadFilter();
      s.buffer = this.lyd.støjBuffer; f.type = 'bandpass'; f.frequency.value = 1800; f.Q.value = 0.8;
      s.connect(f); f.connect(g); this.env(g, t, 0.002, vol * 0.6, t + 0.12); s.start(t, Math.random()); s.stop(t + 0.15);
      return;
    }
    const o = ctx.createOscillator();
    o.type = 'sine'; o.frequency.setValueAtTime(tone * 2.2, t); o.frequency.exponentialRampToValueAtTime(tone * 0.8, t + 0.25);
    o.connect(g); this.env(g, t, 0.004, vol, t + (tone < 100 ? 0.6 : 0.3));
    o.start(t); o.stop(t + 0.65);
  }
}
