// Hvad spilleren har valgt (helten, en arbejder, en bygning eller en gruppe soldater) og byggepladsens
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
    this.ringe = [];   // én ring pr. soldat i en gruppe
    this.ringMat = this.ring.material;
    // Feltmarkering ved placering
    this.felt = new THREE.Mesh(new THREE.CircleGeometry(HEX_BREDDE / Math.sqrt(3), 6).rotateX(-Math.PI / 2).rotateY(Math.PI / 6),
      new THREE.MeshBasicMaterial({ color: 0x7dff6a, transparent: true, opacity: 0.35, depthWrite: false }));
    this.felt.visible = false;
    spil.verden.scene.add(this.felt);
  }

  // ting: helten (null), en arbejder, en bygning eller en liste af soldater (evt. med helten)
  vælg(ting) {
    this.annullérPlacering();
    if (Array.isArray(ting)) {
      ting = ting.filter((u) => !u.død);
      if (ting.length === 1 && ting[0] === this.spil.helt) ting = null;
      else if (!ting.length) ting = null;
    }
    this.valgt = ting ?? this.spil.helt;
    bus.emit('valg', this.valgt);
  }

  get erHelt() { return this.valgt === this.spil.helt; }
  get erGruppe() { return Array.isArray(this.valgt); }
  get gruppe() { return this.erGruppe ? this.valgt : []; }
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
    this.opdaterRinge();
    const v = this.valgt;
    if (this.erGruppe) {
      this.ring.visible = false;
      if (v.some((u) => u.død)) this.vælg(v);
      return;
    }
    if (v?.død) { this.vælg(null); return; }
    this.ring.visible = !!v && !this.erHelt && (v.rod?.visible ?? true);
    if (!this.ring.visible) return;
    const str = this.erBygning ? v.radius * 2.2 : 2.6;
    this.ring.scale.set(str, 1, str);
    this.ring.position.set(v.x, 0.07, v.z);
  }
}

// Ringe under alle valgte soldater (helten har sin egen ring)
Valg.prototype.opdaterRinge = function () {
  const g = this.gruppe.filter((u) => u !== this.spil.helt && !u.død);
  while (this.ringe.length < g.length) {
    const r = new THREE.Mesh(this.ring.geometry, this.ringMat);
    r.renderOrder = 3; r.scale.set(2.2, 1, 2.2);
    this.spil.verden.scene.add(r);
    this.ringe.push(r);
  }
  this.ringe.forEach((r, i) => {
    r.visible = i < g.length;
    if (r.visible) r.position.set(g[i].x, 0.07, g[i].z);
  });
};

function lavRing() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  g.strokeStyle = '#fff'; g.lineWidth = 7;
  g.setLineDash([16, 9]);
  g.beginPath(); g.arc(64, 64, 56, 0, Math.PI * 2); g.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
