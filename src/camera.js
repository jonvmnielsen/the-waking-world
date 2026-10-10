// Kamera i fast skrå vinkel (som WC3) + touch-styring:
// tryk = kommando, træk med én finger = panorer, knib = zoom. Mus: klik, træk, scroll.
import * as THREE from 'three';

const HÆLDNING = THREE.MathUtils.degToRad(52);

export class KameraRig {
  constructor(lærred, onTryk) {
    this.kamera = new THREE.PerspectiveCamera(38, 1, 0.5, 300);
    this.fokus = new THREE.Vector3();
    this.afstand = 28;
    this.følger = true;
    this.onTryk = onTryk;
    this.pegere = new Map();
    this.lærred = lærred;
    this.grænser = { minX: -40, maxX: 40, minZ: -40, maxZ: 40 };

    lærred.addEventListener('pointerdown', (e) => this.ned(e));
    lærred.addEventListener('pointermove', (e) => this.bevæg(e));
    lærred.addEventListener('pointerup', (e) => this.op(e));
    lærred.addEventListener('pointercancel', (e) => this.pegere.delete(e.pointerId));
    lærred.addEventListener('wheel', (e) => { e.preventDefault(); this.zoom(e.deltaY > 0 ? 1.1 : 0.9); }, { passive: false });
  }

  ned(e) {
    this.lærred.setPointerCapture?.(e.pointerId);
    this.pegere.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: performance.now(), trukket: false });
    if (this.pegere.size === 2) this.knibStart = this.knibAfstand();
  }

  bevæg(e) {
    const p = this.pegere.get(e.pointerId);
    if (!p) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y;
    p.x = e.clientX; p.y = e.clientY;
    if (Math.hypot(p.x - p.sx, p.y - p.sy) > 12) p.trukket = true;
    if (this.pegere.size === 2) {
      const d = this.knibAfstand();
      if (this.knibStart) this.zoom(this.knibStart / d);
      this.knibStart = d;
      for (const q of this.pegere.values()) q.trukket = true;
    } else if (p.trukket) {
      // Panorer: træk flytter kortet med fingeren
      const k = this.afstand / this.lærred.clientHeight * 1.15;
      this.fokus.x -= dx * k;
      this.fokus.z -= dy * k / Math.sin(HÆLDNING);
      this.følger = false;
      this.begræns();
    }
  }

  op(e) {
    const p = this.pegere.get(e.pointerId);
    this.pegere.delete(e.pointerId);
    if (this.pegere.size < 2) this.knibStart = null;
    if (p && !p.trukket && this.pegere.size === 0 && performance.now() - p.t < 450) this.onTryk(e.clientX, e.clientY);
  }

  knibAfstand() {
    const [a, b] = [...this.pegere.values()];
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  zoom(f) { this.afstand = THREE.MathUtils.clamp(this.afstand * f, 12, 56); }

  begræns() {
    const g = this.grænser;
    this.fokus.x = THREE.MathUtils.clamp(this.fokus.x, g.minX, g.maxX);
    this.fokus.z = THREE.MathUtils.clamp(this.fokus.z, g.minZ, g.maxZ);
  }

  centrér() { this.følger = true; }

  størrelse(b, h) {
    this.kamera.aspect = b / h;
    // Smal skærm (portræt) får lidt mere afstand så man ser nok af kortet
    this.portrætFaktor = b < h ? 1.25 : 1;
    this.kamera.updateProjectionMatrix();
  }

  opdater(dt, mål) {
    if (this.følger && mål) {
      const k = 1 - Math.exp(-dt * 6);
      this.fokus.x += (mål.x - this.fokus.x) * k;
      this.fokus.z += (mål.z - this.fokus.z) * k;
    }
    const a = this.afstand * (this.portrætFaktor ?? 1);
    this.kamera.position.set(this.fokus.x, Math.sin(HÆLDNING) * a, this.fokus.z + Math.cos(HÆLDNING) * a);
    this.kamera.lookAt(this.fokus.x, 0.8, this.fokus.z);
  }
}
