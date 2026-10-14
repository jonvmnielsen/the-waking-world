// Heltens levende portræt (M14, GDD 17b søjle 5 — som WC3's portræt i hjørnet). Et lille 3D-billede af
// heltens hoved og skuldre i helteknappen: samme model, hud, holdfarve og hjelm som helten selv. Det trækker
// vejret (Idle), nikker og taler, når helten siger noget, kryber sammen, når den bliver ramt, jubler ved
// level-op og bliver gråt, når helten er faldet. Tegnes på sit eget lille lærred inde i knappen (rundt klippet).
import * as THREE from 'three';
import { kopi, animationer } from './assets.js';
import { bus } from './events.js';
import { gørOrkGrøn, holdSkær } from './orkhud.js';
import { SPILLER, HOLD_FARVE, SPILLER_FARVE } from './racer.js';
import { HeltUdstyr } from './heltudstyr.js';

export class HeltPortræt {
  constructor(spil) {
    this.spil = spil;
    const h = spil.helt, def = h.def;
    this.knap = document.getElementById('helteknap');
    this.lærred = document.createElement('canvas');
    this.lærred.className = 'portræt';
    this.knap.prepend(this.lærred);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.lærred, antialias: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.setSize(56, 56, false);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.scene = new THREE.Scene();
    this.scene.add(new THREE.HemisphereLight(0xfff2dc, 0x3a2a1a, 1.6));
    const sol = new THREE.DirectionalLight(0xffe6c0, 2.4); sol.position.set(1.5, 3, 3); this.scene.add(sol);
    const kant = new THREE.DirectionalLight(0x9fc4ff, 1.4); kant.position.set(-2, 2, -2); this.scene.add(kant);

    this.model = kopi(def.model);
    this.model.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); o.frustumCulled = false; } if (def.skjul?.includes(o.name)) o.visible = false; });
    if (SPILLER.orkhud) gørOrkGrøn(this.model);
    holdSkær(this.model, HOLD_FARVE[SPILLER_FARVE], SPILLER.orkhud ? 0.15 : 0.22);
    const kappe = new THREE.Color(HOLD_FARVE[SPILLER_FARVE]);
    this.model.traverse((o) => { if (o.isMesh && /_Cape$/.test(o.name)) o.material.color.lerp(kappe, 0.75); });
    this.model.rotation.y = -0.38;   // trekvart fra siden, som et maleri
    this.scene.add(this.model);
    this.udstyr = new HeltUdstyr({ model: this.model, inventar: h.inventar });   // samme hjelm og våben som helten

    this.mixer = new THREE.AnimationMixer(this.model);
    this.klip = new Map(animationer(def.model).map((a) => [a.name, this.mixer.clipAction(a)]));
    this.spil1('Idle');
    this.mixer.update(0.01);
    this.hoved = this.model.getObjectByName('head');
    this.model.updateMatrixWorld(true);
    const p = this.hoved ? this.hoved.getWorldPosition(new THREE.Vector3()) : new THREE.Vector3(0, 1.8, 0);
    this.kamera = new THREE.PerspectiveCamera(30, 1, 0.1, 20);
    this.kamera.position.set(p.x + 0.45, p.y + 0.55, p.z + 2.5);
    this.kamera.lookAt(p.x, p.y + 0.28, p.z);

    this.tale = 0; this.ramt = 0; this.sidstHp = h.hp; this.tid = 0;
    bus.on('replik', ({ enhed }) => { if (enhed === h) this.tale = 1.8; });
    bus.on('level_op', () => this.engang('Cheer'));
    bus.on('helt_genoplivet', () => this.engang('Cheer'));
    this.mixer.addEventListener('finished', () => this.spil1(h.død ? 'Death_A' : 'Idle'));
  }

  spil1(navn, loop = true) {
    const a = this.klip.get(navn);
    if (!a || a === this.aktiv) return a;
    a.reset(); a.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, loop ? Infinity : 1); a.clampWhenFinished = !loop; a.play();
    if (this.aktiv) a.crossFadeFrom(this.aktiv, 0.2, false);
    this.aktiv = a;
    return a;
  }

  engang(navn) { this.aktiv = null; this.spil1(navn, false); }

  // Kaldes hvert billede efter verden er tegnet
  tegn() {
    const h = this.spil.helt, nu = performance.now(), dt = Math.min(0.05, (nu - (this.sidstNu ?? nu)) / 1000);
    this.sidstNu = nu;
    this.tid += dt;
    // Ramt: kryb sammen (højst hvert andet sekund)
    if (h.hp < this.sidstHp - h.maxHp * 0.03 && this.tid - this.ramt > 2 && !h.død) { this.ramt = this.tid; this.engang('Hit_A'); }
    if (h.død && this.aktiv !== this.klip.get('Death_A')) this.engang('Death_A');
    this.sidstHp = h.hp;
    this.mixer.update(dt);
    // Tale: hovedet nikker og drejer lidt, mens replikken står
    if (this.hoved && this.tale > 0) {
      this.tale -= dt;
      this.hoved.rotation.x += Math.sin(this.tid * 17) * 0.09;
      this.hoved.rotation.y += Math.sin(this.tid * 6.5) * 0.12;
    }
    // Højst 30 billeder i sekundet — portrættet behøver ikke mere
    this.billede = (this.billede ?? 0) + dt;
    if (this.billede < 1 / 30) return;
    this.billede = 0;
    this.renderer.setClearColor(h.død ? 0x1c1c1c : 0x24331c, 1);
    this.renderer.render(this.scene, this.kamera);
  }
}
