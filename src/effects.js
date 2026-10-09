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

  levelOp(helt) {
    const søjle = new THREE.Mesh(
      new THREE.CylinderGeometry(1.1, 1.4, 7, 24, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xffd36b, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
    );
    søjle.position.set(helt.x, 3.5, helt.z);
    this.tilføj(søjle, 1.4, (t) => { søjle.position.set(helt.x, 3.5, helt.z); søjle.material.opacity = 0.6 * (1 - t); søjle.scale.set(1 + t * 0.3, 1, 1 + t * 0.3); });
    this.bølge(helt.x, helt.z, 4, 0xffd36b, 0.9);
  }

  vedEffekt(e) {
    if (e.type === 'stomp') this.bølge(e.x, e.z, e.radius, 0xffa040, 0.7);
    else if (e.type === 'spin') this.bølge(e.x, e.z, e.radius, 0xff3b2f, 0.5);
    else if (e.type === 'tungtSlag') this.bølge(e.mål.x, e.mål.z, 1.6, 0xffe08a, 0.35);
    else if (e.type === 'blodslag') this.bølge(e.helt.x, e.helt.z, 2.2, 0xff1010, 0.45);
  }

  projektil({ fra, mål, skade }) {
    const kugle = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLØD, color: 0xb36bff, blending: THREE.AdditiveBlending, depthWrite: false }));
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
      this.bølge(mål.x, mål.z, 1.4, 0xb36bff, 0.35);
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
