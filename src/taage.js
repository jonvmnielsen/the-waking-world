// Krigens tåge (GDD 4.5): uudforsket land er mørkt, udforsket land er dæmpet,
// og kun det dine figurer og bygninger kan se, står i fuldt lys.
// Tågen er en tekstur over kortet, som alle materialer læser i deres shader.
import * as THREE from 'three';

const OPL = 2;                 // verdensenheder pr. tågecelle
const UDFORSKET = 110, SYNLIG = 255;

export class Taage {
  constructor(grænser) {
    this.minX = grænser.minX; this.minZ = grænser.minZ;
    this.b = Math.ceil((grænser.maxX - grænser.minX) / OPL);
    this.h = Math.ceil((grænser.maxZ - grænser.minZ) / OPL);
    this.udforsket = new Uint8Array(this.b * this.h);
    this.synlig = new Uint8Array(this.b * this.h);
    this.data = new Uint8Array(this.b * this.h);
    this.tekstur = new THREE.DataTexture(this.data, this.b, this.h, THREE.RedFormat);
    this.tekstur.magFilter = this.tekstur.minFilter = THREE.LinearFilter;
    this.tekstur.needsUpdate = true;
    this.uniforms = {
      uTaage: { value: this.tekstur },
      uTaageMin: { value: new THREE.Vector2(this.minX, this.minZ) },
      uTaageStr: { value: new THREE.Vector2(this.b * OPL, this.h * OPL) },
    };
    this.kilder = [];          // faste udsynskilder (bygninger, udkigstårne)
    this.patchet = new WeakSet();
    this.tid = 0;
  }

  tilføjKilde(x, z, radius) { this.kilder.push({ x, z, radius }); }

  // Er et punkt i fuldt udsyn lige nu?
  erSynlig(x, z) { return this.synlig[this.celle(x, z)] === 1; }
  erUdforsket(x, z) { return this.udforsket[this.celle(x, z)] === 1; }

  celle(x, z) {
    const cx = Math.min(this.b - 1, Math.max(0, Math.floor((x - this.minX) / OPL)));
    const cz = Math.min(this.h - 1, Math.max(0, Math.floor((z - this.minZ) / OPL)));
    return cz * this.b + cx;
  }

  // Beregn udsyn ca. 6 gange i sekundet ud fra bevægelige kilder (helten) og faste kilder
  opdater(dt, bevægelige) {
    this.tid += dt;
    if (this.tid < 0.16) return;
    this.tid = 0;
    this.synlig.fill(0);
    for (const k of [...this.kilder, ...bevægelige]) this.cirkel(k.x, k.z, k.radius);
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = this.synlig[i] ? SYNLIG : this.udforsket[i] ? UDFORSKET : 0;
    }
    this.tekstur.needsUpdate = true;
  }

  cirkel(x, z, radius) {
    const r = radius / OPL;
    const cx = (x - this.minX) / OPL, cz = (z - this.minZ) / OPL;
    for (let j = Math.max(0, Math.floor(cz - r)); j <= Math.min(this.h - 1, Math.ceil(cz + r)); j++) {
      for (let i = Math.max(0, Math.floor(cx - r)); i <= Math.min(this.b - 1, Math.ceil(cx + r)); i++) {
        if ((i + 0.5 - cx) ** 2 + (j + 0.5 - cz) ** 2 > r * r) continue;
        const n = j * this.b + i;
        this.synlig[n] = 1; this.udforsket[n] = 1;
      }
    }
  }

  // Giv alle materialer i scenen tåge-shaderen (kører også for nye figurer)
  patchScene(scene) {
    scene.traverse((o) => {
      if (!o.material) return;
      for (const m of Array.isArray(o.material) ? o.material : [o.material]) this.patch(m);
    });
  }

  patch(m) {
    if (this.patchet.has(m) || !m.isMeshStandardMaterial) return;
    this.patchet.add(m);
    const u = this.uniforms;
    m.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, u);
      shader.vertexShader = 'varying vec2 vTaageXZ;\n' + shader.vertexShader.replace('#include <project_vertex>', `#include <project_vertex>
        vec4 taagePos = vec4( transformed, 1.0 );
        #ifdef USE_INSTANCING
          taagePos = instanceMatrix * taagePos;
        #endif
        vTaageXZ = ( modelMatrix * taagePos ).xz;`);
      shader.fragmentShader = 'varying vec2 vTaageXZ;\nuniform sampler2D uTaage;\nuniform vec2 uTaageMin;\nuniform vec2 uTaageStr;\n'
        + shader.fragmentShader.replace('#include <dithering_fragment>', `#include <dithering_fragment>
        float taage = texture2D( uTaage, ( vTaageXZ - uTaageMin ) / uTaageStr ).r;
        gl_FragColor.rgb *= taage;`);
    };
    m.customProgramCacheKey = () => 'taage';
    m.needsUpdate = true;
  }
}
