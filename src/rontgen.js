// Omrids gennem bygninger: figurer der går bag en bygning, og egne bygninger der står bag en anden bygning,
// tegnes som et lysende omrids oven på bygningen foran (grønt for egne, rødt for fjender), så intet forsvinder.
// Teknik: efter den normale tegning ryddes dybdebufferen, bygningerne foran tegnes kun i dybde,
// og figurerne tegnes igen med et materiale der kun vises dér hvor de ligger BAG den dybde.
import * as THREE from 'three';

const L_FORAN = 10, L_EGEN = 11, L_FJENDE = 12, L_TMP_FORAN = 13, L_TMP_BAG = 14;

function røntgenMat(farve, styrke = 1) {
  const m = new THREE.MeshStandardMaterial({
    color: 0x000000, emissive: farve, roughness: 1, metalness: 0,
    transparent: true, depthWrite: false, depthFunc: THREE.GreaterDepth,
  });
  // Kanterne (hvor fladen vender væk fra kameraet) lyser mest, så det ligner et omrids
  m.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <opaque_fragment>', `
      float kant = 1.0 - abs(dot(normalize(normal), normalize(vViewPosition)));
      gl_FragColor = vec4(totalEmissiveRadiance, ${(0.16 * styrke).toFixed(2)} + ${(0.75 * styrke).toFixed(2)} * pow(kant, 1.6));`);
  };
  return m;
}

const sætLag = (obj, lag, til = true) => obj.traverse((o) => { if (til) o.layers.enable(lag); else o.layers.disable(lag); });

export class Røntgen {
  // enheder(): [{ rod, egen }], bygninger(): [{ rod, egen }]
  constructor(renderer, scene, kamera, { enheder, bygninger }) {
    Object.assign(this, { renderer, scene, kamera, enheder, bygninger });
    this.dybde = new THREE.MeshBasicMaterial({ colorWrite: false });
    this.grøn = røntgenMat(0x5dff6a);
    this.rød = røntgenMat(0xff4a3a);
    this.bygGrøn = røntgenMat(0x6dff7a, 0.55);
    this.v = new THREE.Vector3();
  }

  // Skærmrektangel og afstand for en bygning (kassen gemmes til modellen skifter)
  rekt(rod) {
    if (rod.userData.boks?.rod !== rod) {
      rod.updateMatrixWorld(true);
      rod.userData.boks = { rod, b: new THREE.Box3().setFromObject(rod) };
    }
    const b = rod.userData.boks.b, v = this.v;
    let x0 = 1, x1 = -1, y0 = 1, y1 = -1;
    for (let i = 0; i < 8; i++) {
      v.set(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z).project(this.kamera);
      x0 = Math.min(x0, v.x); x1 = Math.max(x1, v.x); y0 = Math.min(y0, v.y); y1 = Math.max(y1, v.y);
    }
    b.getCenter(v);
    return { x0, x1, y0, y1, d: v.distanceTo(this.kamera.position), synlig: x1 > -1 && x0 < 1 && y1 > -1 && y0 < 1 };
  }

  pas(lag, materiale) {
    this.kamera.layers.set(lag);
    this.scene.overrideMaterial = materiale;
    this.renderer.render(this.scene, this.kamera);
  }

  tegn() {
    const { renderer, scene, kamera } = this;
    const byg = this.bygninger().filter((b) => b.rod?.visible).map((b) => ({ ...b, ...this.rekt(b.rod) })).filter((b) => b.synlig);
    if (!byg.length) return;
    const gem = { autoClear: renderer.autoClear, skygge: renderer.shadowMap.autoUpdate, baggrund: scene.background, maske: kamera.layers.mask };
    renderer.autoClear = false;
    renderer.shadowMap.autoUpdate = false;
    scene.background = null;

    // 1) Figurer bag alle bygninger
    for (const b of byg) sætLag(b.rod, L_FORAN);
    for (const e of this.enheder()) sætLag(e.rod, e.egen ? L_EGEN : L_FJENDE);
    renderer.clearDepth();
    this.pas(L_FORAN, this.dybde);
    this.pas(L_EGEN, this.grøn);
    this.pas(L_FJENDE, this.rød);

    // 2) Egne bygninger bag andre bygninger (kun de par der overlapper på skærmen)
    for (const bag of byg) {
      if (!bag.egen) continue;
      const foran = byg.filter((f) => f !== bag && f.d < bag.d - 1 && f.x0 < bag.x1 && f.x1 > bag.x0 && f.y0 < bag.y1 && f.y1 > bag.y0);
      if (!foran.length) continue;
      for (const f of foran) sætLag(f.rod, L_TMP_FORAN);
      sætLag(bag.rod, L_TMP_BAG);
      renderer.clearDepth();
      this.pas(L_TMP_FORAN, this.dybde);
      this.pas(L_TMP_BAG, this.bygGrøn);
      for (const f of foran) sætLag(f.rod, L_TMP_FORAN, false);
      sætLag(bag.rod, L_TMP_BAG, false);
    }

    scene.overrideMaterial = null;
    kamera.layers.mask = gem.maske;
    scene.background = gem.baggrund;
    renderer.shadowMap.autoUpdate = gem.skygge;
    renderer.autoClear = gem.autoClear;
  }
}
