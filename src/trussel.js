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
