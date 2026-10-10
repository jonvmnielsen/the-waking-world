// Visuelle effekter: markeringsringe, chokbølger, level-op-lys og magiske projektiler.
import * as THREE from 'three';
import { bus } from './events.js';

// Blød radial glød-tekstur (genbruges af alle effekter)
function glødTekstur(ring) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  if (ring) { grad.addColorStop(0.66, 'rgba(255,255,255,0)'); grad.addColorStop(0.82, 'rgba(255,255,255,1)'); grad.addColorStop(0.97, 'rgba(255,255,255,0)'); }
  else { grad.addColorStop(0, 'rgba(255,255,255,1)'); grad.addColorStop(0.4, 'rgba(255,255,255,0.5)'); grad.addColorStop(1, 'rgba(255,255,255,0)'); }
  g.fillStyle = grad; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const RING = glødTekstur(true);
const GLØD = glødTekstur(false);

function gulvplade(tekstur, farve, størrelse, opacitet = 1, additiv = false) {
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(størrelse, størrelse).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ map: tekstur, color: farve, transparent: true, opacity: opacitet, depthWrite: false, blending: additiv ? THREE.AdditiveBlending : THREE.NormalBlending }),
  );
  m.renderOrder = 2;
  return m;
}

export class Effekter {
  constructor(verden) {
    this.verden = verden;
    this.scene = verden.scene;
    this.aktive = [];   // { obj, tid, varighed, opdater(t) }
    this.heltRing = gulvplade(RING, 0x3dff4a, 2.2, 0.85);
    this.målRing = gulvplade(RING, 0xff2a1a, 2.2, 0.95);
    this.aura = gulvplade(GLØD, 0xff3b2f, 4, 0, true);
    this.scene.add(this.heltRing, this.målRing, this.aura);

    bus.on('effekt', (e) => this.vedEffekt(e));
    bus.on('projektil', (p) => this.projektil(p));
    bus.on('level_op', ({ helt }) => this.levelOp(helt));
  }

  // Grøn ring der trækker sig sammen der hvor spilleren trykkede
  markør(x, z, farve = 0x9dff7a) {
    const m = gulvplade(RING, farve, 2.6);
    m.position.set(x, 0.06, z);
    this.tilføj(m, 0.6, (t) => { m.scale.setScalar(1.3 - t * 0.9); m.material.opacity = 1 - t; });
  }

  bølge(x, z, radius, farve, varighed = 0.6) {
    const m = gulvplade(RING, farve, 2);
    m.position.set(x, 0.08, z);
    this.tilføj(m, varighed, (t) => { m.scale.setScalar(0.5 + t * radius); m.material.opacity = (1 - t) * 1.2; });
    const g = gulvplade(GLØD, farve, radius * 2, 1, true);
    g.position.set(x, 0.07, z);
    this.tilføj(g, varighed * 0.8, (t) => { g.material.opacity = (1 - t) * 0.8; });
  }

  // Lysende søjle (level-op, hjemkald)
  søjle(følg, farve, varighed = 1.4, højde = 7) {
    const m = new THREE.Mesh(
      new THREE.CylinderGeometry(1.1, 1.4, højde, 24, 1, true),
      new THREE.MeshBasicMaterial({ color: farve, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
    );
    this.tilføj(m, varighed, (t) => { m.position.set(følg.x, højde / 2, følg.z); m.material.opacity = 0.6 * (1 - t); m.scale.set(1 + t * 0.3, 1, 1 + t * 0.3); });
  }

  levelOp(helt) {
    this.søjle(helt, 0xffd36b);
    this.bølge(helt.x, helt.z, 4, 0xffd36b, 0.9);
  }

  // Lyn fra himlen ned i et mål
  lyn(mål) {
    const g = new THREE.Group();
    let y = 16, x = 0, z = 0;
    while (y > 0.6) {
      const ny = Math.max(0.6, y - 2 - Math.random() * 2), nx = (Math.random() - 0.5) * 1.6, nz = (Math.random() - 0.5) * 1.6;
      const a = new THREE.Vector3(x, y, z), b = new THREE.Vector3(nx, ny, nz);
      const led = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, a.distanceTo(b), 5),
        new THREE.MeshBasicMaterial({ color: 0xbfe4ff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      led.position.copy(a).add(b).multiplyScalar(0.5);
      led.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
      g.add(led);
      y = ny; x = nx; z = nz;
    }
    g.position.set(mål.x, 0, mål.z);
    this.tilføj(g, 0.3, (t) => g.children.forEach((c) => { c.material.opacity = 1 - t; }), () => g.children.forEach((c) => { c.geometry.dispose(); c.material.dispose(); }));
    this.bølge(mål.x, mål.z, 2.2, 0x9fd4ff, 0.4);
  }

  vedEffekt(e) {
    if (e.type === 'stomp') this.bølge(e.x, e.z, e.radius, 0xffa040, 0.7);
    else if (e.type === 'spin') this.bølge(e.x, e.z, e.radius, 0xff3b2f, 0.5);
    else if (e.type === 'tungtSlag') this.bølge(e.mål.x, e.mål.z, 1.6, 0xffe08a, 0.35);
    else if (e.type === 'blodslag') this.bølge(e.helt.x, e.helt.z, 2.2, 0xff1010, 0.45);
    else if (e.type === 'heal') this.bølge(e.mål.x, e.mål.z, 2.4, 0x6dff8a, 0.7);
    else if (e.type === 'mana') this.bølge(e.mål.x, e.mål.z, 2.4, 0x5aa2ff, 0.7);
    else if (e.type === 'lyn') this.lyn(e.mål);
    else if (e.type === 'portal') this.søjle({ x: e.x, z: e.z }, 0xb46bff, 2.2, 9);
    else if (e.type === 'samlet') this.bølge(e.x, e.z, 1.6, e.farve ?? 0xffe08a, 0.4);
    else if (e.type === 'kiste') { this.bølge(e.x, e.z, 3.5, 0xffd36b, 0.8); this.søjle({ x: e.x, z: e.z }, 0xffd36b, 0.9, 5); }
    else if (e.type === 'røg') { this.bølge(e.x, e.z, 6, 0x9a9a9a, 1.4); this.søjle({ x: e.x, z: e.z }, 0x777777, 1.6, 4); }
  }

  projektil({ fra, mål, skade, farve = 0xb36bff }) {
    const kugle = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLØD, color: farve, blending: THREE.AdditiveBlending, depthWrite: false }));
    kugle.scale.setScalar(1.1);
    const start = new THREE.Vector3(fra.x, 1.8, fra.z);
    kugle.position.copy(start);
    const længde = Math.max(0.3, fra.afstand(mål) / 14);
    this.tilføj(kugle, længde, (t) => {
      const slut = new THREE.Vector3(mål.x, 1.3, mål.z);
      kugle.position.lerpVectors(start, slut, t);
      kugle.position.y += Math.sin(t * Math.PI) * 1.2;
    }, () => {
      if (!mål.død) mål.tagSkade(skade, fra);
      this.bølge(mål.x, mål.z, 1.4, farve, 0.35);
    });
  }

  tilføj(obj, varighed, opdater, slut) {
    this.scene.add(obj);
    this.aktive.push({ obj, tid: 0, varighed, opdater, slut });
  }

  opdater(dt) {
    const helt = this.verden.helt;
    this.heltRing.visible = !helt.død;
    this.heltRing.position.set(helt.x, 0.05, helt.z);
    const mål = helt.mål;
    this.målRing.visible = !!(mål && !mål.død);
    if (this.målRing.visible) this.målRing.position.set(mål.x, 0.05, mål.z);

    // Aura for aktive buffs
    const ev = helt.evner;
    const buff = ev.tWarCry > 0 ? 0xff3b2f : ev.tIronSkin > 0 ? 0x5ab4ff : ev.tUdødelig > 0 ? 0xffe27a : null;
    this.aura.material.opacity = buff ? 0.55 + Math.sin(performance.now() / 150) * 0.15 : 0;
    if (buff) this.aura.material.color.setHex(buff);
    this.aura.position.set(helt.x, 0.06, helt.z);

    for (let i = this.aktive.length - 1; i >= 0; i--) {
      const a = this.aktive[i];
      a.tid += dt;
      const t = Math.min(1, a.tid / a.varighed);
      a.opdater(t);
      if (t >= 1) {
        a.slut?.();
        this.scene.remove(a.obj);
        a.obj.geometry?.dispose(); a.obj.material?.dispose();
        this.aktive.splice(i, 1);
      }
    }
  }
}
