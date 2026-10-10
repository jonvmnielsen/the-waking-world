// Veteranstatus og specialisering (DESIGN_PROGRESSION del 2).
// Soldater får veteran-XP ved at overleve kampe; ved 200 bliver de veteraner (lidt mere liv, mørkere tone,
// en stjerne ved livsbjælken). En veteran-grunt kan specialiseres i Krigerlejren: grenen der passer til
// spillestilen (spillerstil.js) koster normal pris, de andre dobbelt.
import * as THREE from 'three';
import { VETERAN, GRENE } from './soldatdata.js';
import { bus } from './events.js';

export class Veteraner {
  constructor(spil, stil) {
    this.spil = spil; this.stil = stil;
    bus.on('creep_død', ({ creep }) => {
      const xp = VETERAN.prCreep(creep.lejr?.data.niveau ?? 1);
      for (const s of spil.base.soldater) {
        if (!s.død && s.iKamp && s.afstand(creep) < 18) this.givXp(s, xp);
      }
    });
  }

  givXp(s, n) {
    s.vet.xp += n;
    if (!s.vet.veteran && s.vet.xp >= VETERAN.tærskel) this.blivVeteran(s);
  }

  blivVeteran(s, stille = false) {
    s.vet.veteran = true;
    const ekstra = Math.round(s.maxHp * VETERAN.bonusHp);
    s.maxHp += ekstra; s.hp += ekstra;
    farv(s, null, 0.82);
    if (stille) return;
    bus.emit('effekt', { type: 'veteran', x: s.x, z: s.z });
    bus.emit('flydetekst', { enhed: s, tekst: 'Veteran!', klasse: 'level' });
    bus.emit('besked', s.type === 'grunt' ? 'En grunt er blevet veteran — vælg den for at specialisere den' : `En ${s.navn.toLowerCase()} er blevet veteran`);
  }

  // Grenen er billig, hvis den passer til spillestilen (eller stilen er blandet)
  pris(id) {
    const g = GRENE[id], d = this.stil.dominant();
    const faktor = !d || d === g.stil ? 1 : 2;
    return Object.fromEntries(Object.entries(g.pris).map(([r, v]) => [r, v * faktor]));
  }

  passer(id) { const d = this.stil.dominant(); return !d || d === GRENE[id].stil; }

  kanSpecialiseres(s) { return s.type === 'grunt' && s.vet.veteran && !s.vet.gren && !s.vet.påVej; }

  // Betal og send grunten hen til Krigerlejren, hvor den bliver specialiseret
  specialisér(s, id) {
    if (!this.kanSpecialiseres(s)) return 'Kun veteran-grunts kan specialiseres';
    const lejr = this.spil.base.bygninger.filter((b) => b.type === 'krigerlejr' && b.færdig).sort((a, b) => s.afstand(a) - s.afstand(b))[0];
    if (!lejr) return 'Byg en Krigerlejr først';
    const pris = this.pris(id), øko = this.spil.økonomi;
    const mangler = øko.mangler(pris);
    if (mangler) return mangler;
    øko.betal(pris);
    s.vet.påVej = id; s.vet.betalt = pris;
    const ok = s.kommandoHen(lejr.x, lejr.z, lejr.radius + 4, () => this.anvend(s, id));
    if (!ok) { s.vet.påVej = null; øko.refunder(pris); return 'Grunten kan ikke komme hen til Krigerlejren'; }
    return null;
  }

  anvend(s, id, stille = false) {
    const g = GRENE[id];
    s.vet.gren = { id, ...g }; s.vet.påVej = null;
    s.maxHp += g.hp; s.hp = Math.max(1, Math.min(s.maxHp, s.hp + Math.max(0, g.hp)));
    s.skadeBonus += g.skade; s.rustning += g.rustning; s.fart += g.fart;
    s.model.scale.multiplyScalar(g.skala);
    s.navn = `${g.navn}-grunt`;
    farv(s, g.farve);
    if (stille) return;
    bus.emit('effekt', { type: 'veteran', x: s.x, z: s.z });
    bus.emit('besked', `Grunten er blevet ${g.navn}: ${g.evneTekst}`);
  }

  // Hvis grunten blev afbrudt på vej til Krigerlejren, får spilleren pengene tilbage
  opdater() {
    for (const s of this.spil.base.soldater) {
      if (s.vet.påVej && (!s.hen || s.død)) { this.spil.økonomi.refunder(s.vet.betalt); s.vet.påVej = null; }
    }
  }
}

// Giv figuren en farvetone (egne kopier af materialerne, så andre figurer ikke ændres)
function farv(s, farve, lys = 1) {
  const c = farve != null ? new THREE.Color(farve) : null;
  s.model.traverse((o) => {
    if (!o.isMesh) return;
    o.material = o.material.clone();
    if (c) o.material.color.lerp(c, 0.3);
    o.material.color.multiplyScalar(lys);
  });
}
