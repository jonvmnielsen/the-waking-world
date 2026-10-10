// Rigtige lydfiler (public/audio, se lyde.json og tools/lyde.mjs): Sonniss-optagelser og Kenney-lyde.
// Indlæses i baggrunden, når lyden er låst op. Indtil en lyd er klar, bruger lyd.js sine syntetiske lyde.
// Stemningen: skov om dagen, ugler om natten og svag vind, blødt blandet efter døgnet.
const BASE = import.meta.env.BASE_URL + 'audio/';
// Navnene bruges uden æ/ø/å (som filnavnene), fx 'død' → 'doed'
const ascii = (s) => s.replace(/æ/g, 'ae').replace(/ø/g, 'oe').replace(/å/g, 'aa');

export class Lydbank {
  constructor(lyd) {
    this.lyd = lyd;
    this.buffere = new Map();   // navn -> [AudioBuffer]
    this.stemning = null;
  }

  async indlæs() {
    const ctx = this.lyd.ctx;
    try {
      const manifest = await (await fetch(`${BASE}lyde.json`)).json();
      // Stemningslydene først, så de kan starte hurtigt
      const navne = Object.keys(manifest).sort((a, b) => (/^(skov|vind)/.test(b) ? 1 : 0) - (/^(skov|vind)/.test(a) ? 1 : 0));
      for (const navn of navne) {
        const liste = await Promise.all(manifest[navn].map(async (fil) => {
          try { return await ctx.decodeAudioData(await (await fetch(BASE + encodeURI(fil))).arrayBuffer()); } catch { return null; }
        }));
        this.buffere.set(ascii(navn), liste.filter(Boolean));
        if (navn === 'vind' || navn.startsWith('skov')) this.startStemning();
      }
    } catch (e) { console.warn('Lydfiler kunne ikke hentes', e); }
  }

  har(navn) { return (this.buffere.get(navn)?.length ?? 0) > 0; }

  // Afspil en tilfældig variant; let ændret tonehøjde så gentagelser ikke lyder ens
  spil(navn, vol = 1, { rate = 1, variation = 0.08, forsink = 0 } = {}) {
    const liste = this.buffere.get(navn);
    if (!liste?.length || vol <= 0) return false;
    const ctx = this.lyd.ctx;
    const s = ctx.createBufferSource(), g = ctx.createGain();
    s.buffer = liste[Math.floor(Math.random() * liste.length)];
    s.playbackRate.value = rate * (1 + (Math.random() * 2 - 1) * variation);
    g.gain.value = vol;
    s.connect(g).connect(this.lyd.master);
    s.start(ctx.currentTime + forsink);
    return true;
  }

  // Løkker for skov (dag), ugler (nat) og vind; lydstyrken følger døgnet (opdaterStemning)
  startStemning() {
    const ctx = this.lyd.ctx;
    this.stemning ??= {};
    for (const navn of ['skov_dag', 'skov_nat', 'vind']) {
      if (this.stemning[navn] || !this.har(navn)) continue;
      const s = ctx.createBufferSource(), g = ctx.createGain();
      s.buffer = this.buffere.get(navn)[0];
      s.loop = true;
      g.gain.value = 0;
      s.connect(g).connect(this.lyd.master);
      s.start(ctx.currentTime, Math.random() * s.buffer.duration);
      this.stemning[navn] = g;
    }
    if (this.stemning.vind) this.lyd.stopVind?.();
  }

  opdaterStemning(nat) {
    if (!this.stemning) return;
    const t = this.lyd.ctx.currentTime;
    this.stemning.skov_dag?.gain.setTargetAtTime(0.32 * (1 - nat), t, 1.5);
    this.stemning.skov_nat?.gain.setTargetAtTime(0.38 * nat, t, 1.5);
    this.stemning.vind?.gain.setTargetAtTime(0.14 + 0.08 * nat, t, 1.5);
  }
}
