// Hæren som gruppe (GDD 10): formation når en gruppe går, fælles angreb, og at vælge flere på én gang
// (hold fingeren stille et øjeblik og træk en firkant, dobbelttryk på en soldat, eller Hær-knappen).
import { Arbejder } from './arbejder.js';
import { GRENE, VETERAN } from './soldatdata.js';

const AFSTAND = 2.5;   // mellem soldaterne i formationen

// Pladser i en formation vinkelret på gå-retningen: nærkamp forrest, afstandsangribere bagerst
export function formation(enheder, x, z, kort) {
  const n = enheder.length;
  const cx = enheder.reduce((s, u) => s + u.x, 0) / n, cz = enheder.reduce((s, u) => s + u.z, 0) / n;
  let dx = x - cx, dz = z - cz;
  const d = Math.hypot(dx, dz) || 1;
  dx /= d; dz /= d;
  const px = -dz, pz = dx;
  const orden = [...enheder].sort((a, b) => række(a) - række(b));
  const kol = Math.max(1, Math.ceil(Math.sqrt(n * 1.6)));
  return orden.map((u, i) => {
    const r = Math.floor(i / kol), k = i % kol, iRække = Math.min(kol, n - r * kol);
    const side = (k - (iRække - 1) / 2) * AFSTAND, bag = r * AFSTAND;
    const p = { x: x + px * side - dx * bag, z: z + pz * side - dz * bag };
    return { u, ...(kort.erGåbar(p.x, p.z) ? p : { x, z }) };
  });
}
const række = (u) => (u.data?.projektil ? 2 : u.side === 'egen' && !u.data ? 1 : 0);

export function gruppeGå(gruppe, x, z, kort) {
  let ok = false;
  for (const { u, x: px, z: pz } of formation(gruppe, x, z, kort)) ok = (u.kommandoGå(px, pz) || u.kommandoGå(x, z)) || ok;
  return ok;
}

export function gruppeAngrib(gruppe, mål) {
  let ok = false;
  for (const u of gruppe) if (u.kommandoAngrib) { u.kommandoAngrib(mål); ok = true; }
  return ok;
}

export const kanKæmpe = (u) => !(u instanceof Arbejder);

// Vælg-firkant: tegnes mens fingeren trækker, og vælger figurerne indenfor når den slippes
export function lavBoksValg(spil, skærm) {
  const el = document.createElement('div');
  el.id = 'boks';
  document.body.appendChild(el);
  return (x0, y0, x1, y1, slut) => {
    const l = Math.min(x0, x1), t = Math.min(y0, y1), b = Math.abs(x1 - x0), h = Math.abs(y1 - y0);
    Object.assign(el.style, { left: `${l}px`, top: `${t}px`, width: `${b}px`, height: `${h}px`, display: slut ? 'none' : 'block' });
    if (!slut) return;
    const r = spil.lærred.getBoundingClientRect();
    const inde = (u) => {
      if (u.død || !u.rod.visible) return false;
      const s = skærm(u.x, 1, u.z), sx = s.x + r.left, sy = s.y + r.top;
      return sx >= l - 14 && sx <= l + b + 14 && sy >= t - 14 && sy <= t + h + 14;
    };
    const kæmpere = [spil.helt, ...spil.base.soldater].filter(inde);
    const valgte = kæmpere.length ? kæmpere : spil.base.arbejdere.filter(inde);
    if (valgte.length) spil.valg.vælg(valgte);
  };
}

// Alle soldater af samme type, der kan ses på skærmen (dobbelttryk)
export function sammeTypePåSkærm(spil, s, skærm) {
  const r = spil.lærred.getBoundingClientRect();
  return spil.base.soldater.filter((u) => {
    if (u.død || u.type !== s.type) return false;
    const p = skærm(u.x, 1, u.z);
    return p.synlig && p.x >= 0 && p.y >= 0 && p.x <= r.width && p.y <= r.height;
  });
}

// Statuslinje i kommandopanelet for en valgt gruppe (eller én soldat)
export function gruppeStatus(g) {
  if (g.length === 1 && g[0].vet) {
    const s = g[0], liv = `${Math.ceil(s.hp)}/${s.maxHp} health`;
    if (s.vet.gren) return `${liv} · ${s.vet.gren.evne}: ${s.vet.gren.evneTekst}`;
    if (s.vet.påVej) return `${liv} · On the way to the War Camp for ${GRENE[s.vet.påVej].navn} training`;
    if (s.vet.veteran) return s.type === 'grunt' ? `${liv} · Veteran — choose a path (green edge = suits your way of fighting)` : `${liv} · Veteran`;
    return `${liv} · Veteran XP ${s.vet.xp}/${VETERAN.tærskel} (survive battles)`;
  }
  const antal = {};
  for (const u of g) { const n = u.navn ?? (u.stats ? 'Hero' : 'Worker'); antal[n] = (antal[n] ?? 0) + 1; }
  return Object.entries(antal).map(([n, k]) => `${k} × ${n}`).join(' · ');
}
