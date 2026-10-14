// Holdfarver (Jon: man skal kunne se hvem der er hvem). Man spiller altid blå; modstanderen — den anden
// spiller — er altid rød. Alle andre har en farve efter deres tilhørsforhold: vildmarkens creeps rav,
// The Memory sølv, The Unnamed violet, og neutrale (karavanen, lejesvende, pilgrimme) lyse.
// Hver figur har en tynd ring om fødderne i sin farve; minimappet og livsbjælkerne bruger samme farver.
import * as THREE from 'three';

export const HOLD = {
  spiller: { farve: 0x3a8cff, css: '#3a8cff', navn: 'You' },
  fjende: { farve: 0xff3a2a, css: '#ff3a2a', navn: 'Enemy' },
  vild: { farve: 0xffa030, css: '#ffa030', navn: 'Wild' },
  memory: { farve: 0xcfe6ff, css: '#cfe6ff', navn: 'The Memory' },
  unnamed: { farve: 0xa060ff, css: '#a060ff', navn: 'The Unnamed' },
  neutral: { farve: 0xf2ead2, css: '#f2ead2', navn: 'Neutral' },
};

let tekstur = null, geo = null;
const materialer = new Map();
function ringMateriale(hold) {
  if (!tekstur) {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 18, 32, 32, 31);
    g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.55, 'rgba(255,255,255,0.95)'); g.addColorStop(0.8, 'rgba(255,255,255,0.5)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
    tekstur = new THREE.CanvasTexture(c);
    geo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
  }
  if (!materialer.has(hold)) materialer.set(hold, new THREE.MeshBasicMaterial({ map: tekstur, color: HOLD[hold].farve, transparent: true, opacity: 0.95, depthWrite: false, fog: false }));
  return materialer.get(hold);
}

// Giv en figur sin holdring (skifter farve, hvis den allerede har en)
export function sætHold(u, hold) {
  u.hold = hold;
  if (!u.rod) return;
  if (!u.holdRing) {
    u.holdRing = new THREE.Mesh(geo ?? (ringMateriale(hold), geo), ringMateriale(hold));
    u.holdRing.position.y = 0.06; u.holdRing.renderOrder = 2;
    u.holdRing.scale.setScalar(Math.max(1.9, (u.radius ?? 0.7) * 3.1));
    u.rod.add(u.holdRing);
  }
  u.holdRing.material = ringMateriale(hold);
}
