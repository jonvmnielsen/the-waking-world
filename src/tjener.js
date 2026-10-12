// Den Unavngivnes tjenere (GDD 12, Opvågning): en tredje kraft der dukker op midt på kortet
// og angriber alle, der kommer for tæt på De Vågnende Sten (begge spillere). Mørke riddere og hekse med en lilla glød.
import * as THREE from 'three';
import { Fjende } from './fjende.js';

export const TJENERE = {
  lejesoldat: { navn: 'Hollow Knight', level: 9 },
  heks: { navn: 'Void Witch', level: 9 },
  kaptajn: { navn: 'Herald of the Unnamed', level: 8 },
};

export class Tjener extends Fjende {
  constructor(verden, type, base, x, z, mål) {
    super(verden, type, TJENERE[type].level, base, x, z, { skær: false });
    this.navn = TJENERE[type].navn;
    this.lejr.vågen = true;
    this.side = 'vågen';
    this.ordre = 'angreb';
    this.marchMål = mål;
    // Mørk, lilla glød
    this.model.traverse((o) => {
      if (!o.isMesh) return;
      o.material = o.material.clone();
      o.material.color.multiplyScalar(0.55);
      o.material.emissive = new THREE.Color(0x6a2cff);
      o.material.emissiveIntensity = 0.12;
      o.material.transparent = false; o.material.opacity = 1;
    });
  }

  // Tjenerne angriber alle: spillerens figurer og The Memorys soldater
  egne() {
    return [...(this.verden.egne?.() ?? []), ...this.fjendeBase.spil.modstander.levende];
  }

  egneBygninger() {
    return [...this.fjendeBase.spillerBygninger(), ...this.fjendeBase.spil.modstander.bygninger.filter((b) => !b.død)];
  }

  gyldigt(m) { return m && !m.død && !m.skjult; }
  skadeFaktor() { return 1; }
}
