// Hvad spilleren har valgt (helten, en arbejder eller en bygning) og byggepladsens
// forhåndsvisning, når en bygning skal placeres (GDD 10).
import * as THREE from 'three';
import { kopi } from './assets.js';
import { BYGNINGER } from './bygningsdata.js';
import { hexTilVerden, HEX_BREDDE } from './hexgrid.js';
import { VERDEN } from './config.js';
import { bus } from './events.js';
import { Arbejder } from './arbejder.js';

export class Valg {
  constructor(spil) {
    this.spil = spil;
    this.valgt = spil.helt;
    this.placering = null;      // { type, felt, spøgelse, fejl }
    // Ring under det valgte
    const ringTekstur = lavRing();
    this.ring = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ map: ringTekstur, color: 0xb8ff7a, transparent: true, depthWrite: false }));
    this.ring.renderOrder = 3;
    spil.verden.scene.add(this.ring);
    // Feltmarkering ved placering
    this.felt = new THREE.Mesh(new THREE.CircleGeometry(HEX_BREDDE / Math.sqrt(3), 6).rotateX(-Math.PI / 2).rotateY(Math.PI / 6),
      new THREE.MeshBasicMaterial({ color: 0x7dff6a, transparent: true, opacity: 0.35, depthWrite: false }));
    this.felt.visible = false;
    spil.verden.scene.add(this.felt);
  }

  vælg(ting) {
    this.annullérPlacering();
    this.valgt = ting ?? this.spil.helt;
    bus.emit('valg', this.valgt);
  }

  get erHelt() { return this.valgt === this.spil.helt; }
  get erArbejder() { return this.valgt instanceof Arbejder; }
  get erBygning() { return !!this.valgt?.felter; }

  // --- Placering af en ny bygning ---
  startPlacering(type) {
    this.annullérPlacering();
    const spøgelse = kopi(BYGNINGER[type].model);
    spøgelse.scale.setScalar(VERDEN.hexSkala * BYGNINGER[type].skala);
    spøgelse.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); o.material.transparent = true; o.material.opacity = 0.6; } });
    spøgelse.visible = false;
    this.spil.verden.scene.add(spøgelse);
    this.placering = { type, felt: null, spøgelse, fejl: 'Tryk på et felt' };
    bus.emit('placering', this.placering);
  }

  vælgFelt(f) {
    const p = this.placering;
    if (!p || !f) return;
    p.felt = f;
    p.fejl = this.spil.base.kanPlacere(p.type, f);
    const pos = hexTilVerden(f.q, f.r);
    p.spøgelse.position.set(pos.x, 0, pos.z);
    p.spøgelse.visible = true;
    const farve = p.fejl ? 0xff5040 : 0x7dff6a;
    p.spøgelse.traverse((o) => { if (o.isMesh) o.material.color.setHex(p.fejl ? 0xff8a80 : 0xffffff); });
    this.felt.position.set(pos.x, 0.06, pos.z);
    this.felt.material.color.setHex(farve);
    this.felt.visible = true;
    bus.emit('placering', p);
  }

  // Byg på det valgte felt med den valgte arbejder
  bekræftPlacering() {
    const p = this.placering;
    if (!p?.felt) return 'Tryk på et felt';
    const [b, fejl] = this.spil.base.placér(p.type, p.felt);
    if (fejl) return fejl;
    const arbejder = this.erArbejder ? this.valgt : null;
    this.annullérPlacering();
    arbejder?.kommandoByg(b);
    bus.emit('besked', `${b.data.navn} bygges`);
    return null;
  }

  annullérPlacering() {
    if (!this.placering) return;
    this.spil.verden.scene.remove(this.placering.spøgelse);
    this.placering = null;
    this.felt.visible = false;
    bus.emit('placering', null);
  }

  opdater() {
    const v = this.valgt;
    if (v?.død) { this.vælg(null); return; }
    this.ring.visible = !!v && !this.erHelt && (v.rod?.visible ?? true);
    if (!this.ring.visible) return;
    const str = this.erBygning ? v.radius * 2.2 : 2.6;
    this.ring.scale.set(str, 1, str);
    this.ring.position.set(v.x, 0.07, v.z);
  }
}

function lavRing() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  g.strokeStyle = '#fff'; g.lineWidth = 7;
  g.setLineDash([16, 9]);
  g.beginPath(); g.arc(64, 64, 56, 0, Math.PI * 2); g.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
