// Træer gror igen (M14g): et fældet træ står som stub i 7–10 minutter, så skyder en spire op, og træet
// vokser til fuld størrelse på halvandet minut. Først da kan det fældes igen. Der gror ikke træer, hvor der
// er bygget, og ikke mens nogen står på stubben. Stubbene huskes ikke i gemte spil, så efter "fortsæt"
// begynder ventetiden forfra (de fældede træer er gemt som tomme).
const VENT = [420, 600], VOKS = 90, TJEK = 5;

export class TræVækst {
  constructor(spil) {
    this.spil = spil;
    this.natur = spil.verden.natur;
    this.ventende = new Map();   // ressource -> sekunder til spiren kommer
    this.vokser = new Map();     // ressource -> sekunder den har vokset
    this.tjek = 0;
  }

  opdater(dt) {
    if (!this.natur?.vækst) return;
    if ((this.tjek -= dt) <= 0) { this.tjek = TJEK; this.find(); this.spirer(TJEK); }
    for (const [r, t] of this.vokser) {
      const ny = t + dt;
      const k = Math.min(1, 0.2 + 0.8 * (ny / VOKS));
      if (Math.floor(ny * 4) !== Math.floor(t * 4) || k >= 1) this.natur.vækst(r, k);   // fire gange i sekundet er nok
      if (k >= 1) this.vokser.delete(r); else this.vokser.set(r, ny);
    }
  }

  // Nye stubbe
  find() {
    for (const r of this.natur.ressourcer) {
      if (r.type !== 'træ' || r.træ > 0 || r.ryddet || !r.pynt.gemtRef || this.ventende.has(r) || this.vokser.has(r)) continue;
      this.ventende.set(r, VENT[0] + ((r.id * 7919) % (VENT[1] - VENT[0])));
    }
  }

  spirer(dt) {
    for (const [r, t] of this.ventende) {
      if (r.ryddet) { this.ventende.delete(r); continue; }
      if (t - dt > 0) { this.ventende.set(r, t - dt); continue; }
      if (this.optaget(r)) continue;   // prøv igen om lidt
      this.ventende.delete(r);
      this.vokser.set(r, 0);
      this.natur.vækst(r, 0.2);
    }
  }

  // Står nogen på stubben, eller er der bygget?
  optaget(r) {
    if (r.f.optaget && r.f.pladser?.some(Boolean)) return true;
    const s = this.spil, nær = (u) => u && !u.død && Math.hypot(u.x - r.x, u.z - r.z) < r.r + 1.5;
    return nær(s.helt) || s.base.arbejdere.some(nær) || s.base.soldater.some(nær) || s.verden.creeps.some((c) => !c.erBygning && nær(c));
  }
}
