// The Memorys soldater (GDD 11). Bygger på creeps (model, slag, projektiler), men har sin egen opførsel:
//   vagt   — står ved samlingsstedet og forsvarer basen
//   angreb — marcherer mod spillerens base og angriber alt på vejen (figurer før bygninger)
//   retur  — trækker sig tilbage til basen
// Mens en soldat har et mål, er dens tilstand 'jagt', så spillerens figurer forsvarer sig og hinanden.
import { Creep } from './creeps.js';
import { Unit } from './unit.js';
import { FJENDE_ENHEDER } from './fjendedata.js';

const SE_UNITS = 11, SE_BYGNINGER = 14;

export class Fjende extends Creep {
  constructor(verden, type, level, base, x, z) {
    const lejr = { fjende: true, data: { niveau: 2, id: 'memory' }, creeps: [], x, z };
    super(verden, type, level, lejr, { x, z });
    lejr.creeps.push(this);
    this.fjendeBase = base;
    this.navn = FJENDE_ENHEDER[type]?.navn ?? this.navn;
    this.side = 'fjende';
    this.ordre = 'vagt';
    this.post = { x, z };
    this.marchMål = null;
    this.søgTid = Math.random() * 0.5;
  }

  // Spillerens figurer og bygninger der kan angribes
  egneBygninger() { return this.fjendeBase.spillerBygninger(); }

  gyldigt(m) { return m && !m.død && (m.felter || m.side === 'vågen' || (m.rod.visible !== false && !m.skjult)); }

  // Find det nærmeste mål: figurer først, ellers bygninger
  søgMål(rFig, rByg) {
    let bedst = null, bd = rFig;
    for (const u of this.egne()) { const d = this.afstand(u); if (d < bd) { bd = d; bedst = u; } }
    if (bedst) return bedst;
    bd = rByg;
    for (const b of this.egneBygninger()) { const d = this.afstand(b) - b.radius; if (d < bd) { bd = d; bedst = b; } }
    return bedst;
  }

  skadeFaktor() { return 1 + 0.2 * (this.verden.nat ?? 0); }   // stærkere om natten (GDD 4.6)

  kommandoAngreb(x, z) { this.ordre = 'angreb'; this.marchMål = { x, z }; this.mål = null; this.stop(); }
  kommandoRetur() { this.ordre = 'retur'; this.mål = null; this.gåTil(this.post.x, this.post.z); }
  kommandoForsvar(mål) { if (this.ordre === 'vagt' && !this.gyldigt(this.mål)) this.mål = mål; }
  gåHjem() { this.kommandoRetur(); }   // røgbomben får dem til at trække sig

  opdater(dt) {
    this.rod.visible = this.verden.taage.erSynlig(this.x, this.z);
    Unit.prototype.opdater.call(this, dt);
    if (this.død) return this.opdaterDød(dt);
    if (this.tilstand === 'vågner') {
      this.vågenTid -= dt;
      if (this.vågenTid <= 0) { this.tilstand = 'march'; this.spil(this.anim.idle); }
      return;
    }
    if (this.lammet > 0) { this.lammet -= dt; return; }
    this.cooldown -= dt;
    if (this.sving) return this.opdaterSving(dt);

    // Find mål et par gange i sekundet (skift fra en bygning til en figur, der dukker op)
    this.søgTid -= dt;
    if (this.søgTid <= 0 && this.ordre !== 'retur') {
      this.søgTid = 0.5;
      if (!this.gyldigt(this.mål) || this.mål.felter) {
        const ny = this.søgMål(SE_UNITS, this.ordre === 'angreb' ? SE_BYGNINGER : 0);
        if (ny) this.mål = ny;
      }
    }
    if (!this.gyldigt(this.mål)) this.mål = null;
    this.tilstand = this.mål ? 'jagt' : 'march';

    if (this.mål) return this.forfølg(dt);
    if (this.ordre === 'angreb' && this.marchMål) return this.march(dt, this.marchMål, () => {
      // Fremme: gå videre mod den nærmeste af spillerens bygninger
      const b = this.søgMål(0, 400);
      this.marchMål = b ? { x: b.x, z: b.z } : null;
    });
    if (this.ordre === 'retur') return this.march(dt, this.post, () => { this.ordre = 'vagt'; });
    this.spil(this.anim.idle);
  }

  march(dt, mål, vedAnkomst) {
    if (Math.hypot(mål.x - this.x, mål.z - this.z) < 4) { this.stop(); vedAnkomst(); return; }
    this.genberegn = (this.genberegn ?? 0) - dt;
    if (!this.bevæger || this.genberegn <= 0) { this.gåTil(mål.x, mål.z); this.genberegn = 2; }
    if (!this.bevæger) { vedAnkomst(); return; }
    this.opdaterBevægelse(dt);
    this.spil(this.anim.løb);
  }

  forfølg(dt) {
    const m = this.mål, d = this.afstand(m) - m.radius;
    if (d > this.data.rækkevidde) {
      this.genberegn = (this.genberegn ?? 0) - dt;
      if (this.genberegn <= 0 || !this.bevæger) { this.gåTil(m.x, m.z); this.genberegn = 0.4; }
      this.opdaterBevægelse(dt);
      this.spil(this.anim.løb);
    } else {
      this.stop(); this.vend(m.x, m.z);
      if (this.cooldown <= 0) this.startSving(m); else this.spil(this.anim.idle);
    }
  }

  tagSkade(mængde, kilde) {
    if (kilde && !this.gyldigt(this.mål) && this.ordre !== 'retur' && !kilde.felter && kilde.rod) this.mål = kilde;
    return Unit.prototype.tagSkade.call(this, mængde, kilde);
  }
}
