// Helte skal kunne kendes på lang afstand (Jon: heltene skal fylde meget mere). En helt er større end
// soldaterne og vokser lidt for hvert level, bærer en kappe i holdets farve og har en langsomt drejende
// runecirkel om fødderne. Gælder både spillerens helt og modstanderens.
import * as THREE from 'three';

let tekstur = null;
function runeTekstur() {
  if (tekstur) return tekstur;
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const x = c.getContext('2d'), m = 128;
  x.strokeStyle = 'rgba(255,255,255,0.95)';
  x.lineWidth = 7; x.beginPath(); x.arc(m, m, 118, 0, Math.PI * 2); x.stroke();
  x.lineWidth = 3; x.beginPath(); x.arc(m, m, 96, 0, Math.PI * 2); x.stroke();
  // Runer mellem de to cirkler: små streger og vinkler, skiftevis
  x.lineWidth = 4; x.lineCap = 'round';
  for (let i = 0; i < 16; i++) {
    const v = (i / 16) * Math.PI * 2;
    x.save(); x.translate(m + Math.cos(v) * 107, m + Math.sin(v) * 107); x.rotate(v + Math.PI / 2);
    x.beginPath();
    if (i % 3 === 0) { x.moveTo(-5, -5); x.lineTo(0, 5); x.lineTo(5, -5); }
    else if (i % 3 === 1) { x.moveTo(0, -6); x.lineTo(0, 6); x.moveTo(-4, 0); x.lineTo(4, 0); }
    else { x.moveTo(-5, 5); x.lineTo(5, -5); }
    x.stroke(); x.restore();
  }
  tekstur = new THREE.CanvasTexture(c);
  return tekstur;
}

// Giv en helt sit præg: runecirkel og kappe i holdets farve
export function heltePræg(u, farve) {
  const ring = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ map: runeTekstur(), color: farve, transparent: true, opacity: 0.85, depthWrite: false, fog: false, blending: THREE.AdditiveBlending }),
  );
  ring.position.y = 0.08; ring.renderOrder = 3;
  ring.scale.setScalar(3.3);
  u.rod.add(ring);
  u.runeRing = ring;
  // Kappen i holdets farve (KayKit-figurerne har en *_Cape)
  const c = new THREE.Color(farve);
  u.model.traverse((o) => {
    if (o.isMesh && /_Cape$/.test(o.name)) { o.material = o.material.clone(); o.material.color.lerp(c, 0.75); }
  });
  if (u.holdRing) u.holdRing.visible = false;   // runecirklen erstatter den lille holdring
}

// Hvert billede: cirklen drejer; helten vokser med sit level (1,18 ved level 1 → 1,4 ved level 20)
export function opdaterPræg(u, dt) {
  if (!u.runeRing) return;
  u.runeRing.rotation.y += dt * 0.35;
  u.runeRing.visible = !u.død;
  const s = 1.18 + Math.min(19, (u.level ?? 1) - 1) * 0.0115;
  if (Math.abs(u.model.scale.x - s) > 0.001) { u.model.scale.setScalar(s); u.højde = 2.4 * s; }
}
