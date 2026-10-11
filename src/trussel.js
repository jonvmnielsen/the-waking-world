// Fælles regel for automatisk angreb (GDD 10): en helt eller unit uden gå-ordre angriber selv
// den nærmeste fjende, der angriber den eller en af dens allierede (også fjender der skyder på afstand).
export const erEgen = (u, verden) => !!u && (u === verden.helt || u.side === 'egen');

export function findTrussel(enhed, radius, angribere, tid) {
  const verden = enhed.verden;
  let bedst = null, bd = radius;
  for (const c of verden.creeps) {
    if (c.død || c.tilstand === 'hjem' || !c.rod.visible) continue;
    const truer = (c.tilstand === 'jagt' && erEgen(c.mål, verden)) || tid - (angribere.get(c) ?? -99) < 4;
    if (!truer) continue;
    const d = enhed.afstand(c);
    if (d < bd) { bd = d; bedst = c; }
  }
  return bedst;
}

// Automatisk angreb med tilbagevenden (Jons regel): finder en helt eller soldat selv en fjende, husker den,
// hvor den stod. Når fjenden er død eller stukket af, eller jagten har varet over 10 sekunder, tager den
// en ny trussel tæt på, hvis der er en — ellers går den tilbage til sin plads.
// Spillerens egne angrebsordrer er ikke en jagt og vender ikke hjem. Blandes ind i Helt og Soldat.
export const jagtMetoder = {
  autoMål(dt, find) {
    const j = this.jagt;
    if (!j) {
      if (this.mål || this.gåOrdre || this.sving) return;
      const m = find();
      if (m) { this.mål = m; this.jagt = { x: this.x, z: this.z, tid: 0 }; }
      return;
    }
    const m = this.mål, lever = !!m && !m.død;
    const rækkevidde = (this.data?.rækkevidde ?? this.stats?.rækkevidde ?? 2) + (m?.radius ?? 0) + 0.5;
    if (lever && this.afstand(m) > rækkevidde) j.tid += dt;   // tiden tæller kun mens den løber efter
    const flygtet = lever && (m.tilstand === 'hjem' || !m.rod.visible || Math.hypot(m.x - j.x, m.z - j.z) > 28);
    if (lever && !flygtet && j.tid <= 10) return;
    this.mål = lever && !flygtet ? null : j.tid <= 10 ? find() : null;
    if (this.mål) return;
    this.jagt = null;
    if (Math.hypot(this.x - j.x, this.z - j.z) > 2.5) this.gåOrdre = this.gåTil(j.x, j.z);
  },
};
