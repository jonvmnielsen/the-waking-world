// Figurer går uden om træer og sten, der står frit (dem i skove og stenbrud spærrer hele feltet i stedet).
// Kaldes efter hvert skridt: står figuren inde i en sten eller en stamme, skubbes den ud til kanten,
// så den glider rundt om tingen i stedet for at gå igennem.
export function undgåTing(kort, u) {
  const f = kort.felt(u.x, u.z);
  if (!f) return;
  for (const g of [f, ...kort.naboer(f)]) {
    for (const r of g.ressourcer ?? []) {
      if (r.blokerer || !(r[r.type] > 0)) continue;
      const dx = u.x - r.x, dz = u.z - r.z, d = Math.hypot(dx, dz), min = r.r * 0.75 + u.radius;
      if (d >= min || d < 1e-4) continue;
      // Er vi på vej hen til netop denne ting (høst), må vi gerne stå helt op ad den
      if (u.kilde?.kilde === r) continue;
      const nx = u.x + (dx / d) * min, nz = u.z + (dz / d) * min;
      if (kort.erGåbar(nx, nz)) { u.rod.position.x = nx; u.rod.position.z = nz; }
    }
  }
}
