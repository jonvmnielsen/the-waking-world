// Pilgrimme (M8): vandrere i grå kutter (KayKits rogue med hætte, farvet bleg), der går mellem kroen, købmanden, brøndene, udkigstårnene og
// De Vågnende Sten midt i verden. Tryk på en, og de siger noget om verden. I Faldet søger nogle ly ved
// spillerens hal og bringer en gave; i Opvågningen samles de alle ved stenene for at se det vågne.
import * as THREE from 'three';
import { Unit } from './unit.js';
import { bus } from './events.js';
import { PILGRIM_ORD, PILGRIM_NAVNE } from './verdenslore.js';

const TONER = [[0.82, 0.78, 0.7], [0.7, 0.72, 0.78], [0.78, 0.7, 0.62], [0.9, 0.88, 0.84]];

export class Pilgrim extends Unit {
  constructor(verden, i, x, z) {
    super(verden, 'units/pilgrim', { skjul: ['Knife', 'Knife_Offhand', '1H_Crossbow', '2H_Crossbow', 'Throwable'] });
    this.navn = PILGRIM_NAVNE[i % PILGRIM_NAVNE.length];
    this.rod.position.set(x, 0, z);
    this.fart = 2.1;
    this.model.traverse((o) => {
      if (!o.isMesh) return;
      o.material = o.material.clone();
      o.material.color.lerp(new THREE.Color(...TONER[i % TONER.length]), 0.65);
    });
    this.tilstand = 'hvil'; this.timer = 2 + Math.random() * 8;
    this.spil('Idle');
    this.ord = Math.floor(Math.random() * PILGRIM_ORD.length);
    this.besøgtHal = false;
  }

  // Næste sted: et tilfældigt af de nærmeste
  vælgSted(steder) {
    const kandidater = steder.filter((s) => Math.hypot(s.x - this.x, s.z - this.z) > 12)
      .sort((a, b) => Math.hypot(a.x - this.x, a.z - this.z) - Math.hypot(b.x - this.x, b.z - this.z)).slice(0, 4);
    return kandidater[Math.floor(Math.random() * kandidater.length)];
  }

  gåMod(s, løb = false) {
    const v = Math.random() * Math.PI * 2;
    this.sted = s;
    if (!this.gåTil(s.x + Math.cos(v) * 8, s.z + Math.sin(v) * 8)) return false;
    this.tilstand = 'går'; this.fart = løb ? 5 : 2.1;
    this.spil(løb ? 'Running_A' : 'Walking_A');
    return true;
  }

  // Tryk: pilgrimmen siger noget
  tal() {
    const linje = PILGRIM_ORD[this.ord++ % PILGRIM_ORD.length];
    bus.emit('krønike', { titel: `${this.navn}, pilgrim`, tekst: `“${linje}”`, x: this.x, z: this.z, farve: '#d8d0c0', varighed: 12 });
    this.vend(this.verden.helt.x, this.verden.helt.z);
  }

  opdater(dt, liv) {
    this.rod.visible = this.verden.taage.erSynlig(this.x, this.z);
    super.opdater(dt);
    if (this.tilstand === 'går') {
      this.opdaterBevægelse(dt);
      if (!this.bevæger) this.ankom(liv);
      return;
    }
    if (this.tilstand === 'samlet') return;   // ved stenene i Opvågningen
    this.timer -= dt;
    if (this.timer > 0) return;
    const s = this.vælgSted(liv.stopSteder());
    if (!s || !this.gåMod(s)) this.timer = 4;
  }

  ankom(liv) {
    this.tilstand = 'hvil'; this.timer = 10 + Math.random() * 14;
    if (this.sted?.type === 'hal' && !this.besøgtHal) {
      // En flygtning fra Faldet når frem til spillerens hal
      this.besøgtHal = true;
      liv.gave(this);
    }
    if (this.sted?.type === 'sten' && liv.opvågnet) {
      this.tilstand = 'samlet'; this.vend(this.sted.x, this.sted.z); this.spil('Sit_Floor_Idle');
      return;
    }
    this.spil(Math.random() < 0.5 ? 'Sit_Floor_Idle' : 'Interact', 1);
    if (this.aktiv?.getClip().name === 'Interact') setTimeout(() => this.tilstand === 'hvil' && this.spil('Idle'), 2500);
  }

  fjern() { super.fjern(); }
}
