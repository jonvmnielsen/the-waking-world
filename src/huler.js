// Hulerne i spillet (M11): helten (og soldaterne omkring ham) går ind gennem huleåbningen og op ad trappen igen.
// Inde i hulen er der mørkt (dagnat.js), intet vejr og ingen tåge, og krøniken fortæller om hulen første gang.
// Når bossen er død, er hulen ryddet. Selve hulen bygges i hulegen.js (logik) og hulevisning.js (3D).
import { bus } from './events.js';
import { erIHule } from './hulegen.js';
import { hexTilVerden } from './hexgrid.js';

const FØLGE = 26;   // soldater inden for denne afstand følger helten ind og ud

export class Huler {
  constructor(spil, huler) {
    this.spil = spil; this.liste = huler;
    this.besøgt = new Set(); this.ryddet = new Set();
    bus.on('creep_død', ({ creep }) => {
      const h = this.liste.find((x) => x.bossId === creep.lejr?.data?.id);
      if (!h || this.ryddet.has(h.id) || creep.lejr.creeps.some((c) => !c.død)) return;
      this.ryddet.add(h.id);
      bus.emit('krønike', { titel: `${h.navn} is cleared`, tekst: 'Its master is dead. The golden chest by the throne is yours to open.', farve: '#ffd36b', varighed: 16, vigtig: true });
    });
  }

  følgere(fra) {
    const valgte = this.spil.valg.gruppe ?? [];
    return this.spil.base.soldater.filter((s) => !s.død && (valgte.includes(s) || Math.hypot(s.x - fra.x, s.z - fra.z) < FØLGE));
  }

  flyt(enheder, p) {
    enheder.forEach((s, i) => {
      const v = (i / Math.max(1, enheder.length)) * Math.PI * 2;
      s.rod.position.set(p.x + Math.cos(v) * 3.5, 0, p.z + 2 + Math.sin(v) * 3.5);
      s.stop(); s.mål = null; s.jagt = null;
    });
  }

  gåInd(h) {
    const helt = this.spil.helt;
    this.flyt(this.følgere(helt), h.start);
    helt.teleporter(h.start);
    if (!this.besøgt.has(h.id)) {
      this.besøgt.add(h.id);
      bus.emit('banner', { titel: h.navn, tekst: h.lore, lang: true });
      bus.emit('krønike', { titel: h.navn, tekst: `${h.lore} Climb the stairs to leave.`, farve: '#c8a070', varighed: 16 });
    }
  }

  gåUd(h) {
    const helt = this.spil.helt, kort = this.spil.verden.kort;
    const f = kort.nærmesteGåbare(h.indgang.x, h.indgang.z + 9);
    const p = f ? this.spil.hexTilVerden(f.q, f.r) : { x: h.indgang.x, z: h.indgang.z + 9 };
    this.flyt(this.følgere(helt), p);
    helt.teleporter(p);
  }

  // Tryk: med helten valgt går han ind/ud; med intet valgt vises hulens navn
  tryk(px, py, skærm, medHelt) {
    const { helt, taage } = this.spil;
    for (const h of this.liste) {
      for (const [p, ud] of [[h.indgang, false], [h.udgang, true]]) {
        if (!taage.erUdforsket(p.x, p.z)) continue;
        const s = skærm(p.x, 2, p.z);
        if (Math.hypot(s.x - px, s.y - py) > 60) continue;
        if (medHelt && !helt.død) {
          helt.kommandoInteraktion(p.x, p.z, ud ? 7 : 11, () => (ud ? this.gåUd(h) : this.gåInd(h)));
          return true;
        }
        const tekst = ud ? 'Stairs up — back to the surface' : this.ryddet.has(h.id) ? 'Cleared' : 'Send your hero (and nearby soldiers) inside';
        bus.emit('mærkat', { ting: { x: p.x, z: p.z, højde: 5 }, html: `<b>${ud ? 'Exit' : h.navn}</b><small>${tekst}</small>`, farve: '#e8c690' });
        return true;
      }
    }
    return false;
  }

  // Hulen helten står i (eller null), og dens grænser til kameraet, så man ikke kan panorere ud af hulen
  hvor(helt = this.spil.helt) {
    if (!erIHule(helt.x)) return null;
    return this.liste.reduce((b, h) => (!b || Math.hypot(h.start.x - helt.x, h.start.z - helt.z) < Math.hypot(b.start.x - helt.x, b.start.z - helt.z) ? h : b), null);
  }

  grænser() {
    const h = this.hvor();
    if (!h) return null;
    if (!h.grænser) {
      const ps = h.felter.map((f) => hexTilVerden(f.q, f.r));
      h.grænser = { minX: Math.min(...ps.map((p) => p.x)) - 6, maxX: Math.max(...ps.map((p) => p.x)) + 6, minZ: Math.min(...ps.map((p) => p.z)) - 6, maxZ: Math.max(...ps.map((p) => p.z)) + 6 };
    }
    return h.grænser;
  }

  gem() { return { besøgt: [...this.besøgt], ryddet: [...this.ryddet] }; }
  gendan(g) { for (const id of g?.besøgt ?? []) this.besøgt.add(id); for (const id of g?.ryddet ?? []) this.ryddet.add(id); }
}
