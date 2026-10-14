// Ét sammenhængende terræn over hele kortet (ingen synlige hexagoner).
// Hex-gitteret bruges stadig i logikken; her blødes felternes egenskaber ud til et lav-poly landskab:
// bløde kyster ned i vandet, klippehøje under stenbrud, regionsfarver der glider over i hinanden.
import * as THREE from 'three';
import { hexTilVerden, verdenTilHex, HEX_BREDDE } from './hexgrid.js';
import { REGIONER } from './kortgen.js';
import { støj } from './stoej.js';

const TRIN = 2.5;                 // afstand mellem terrænets punkter
const R = HEX_BREDDE;             // hvor langt et felt "smitter" af på naboerne
export const VAND_Y = -0.55;

const glat = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// Felternes egenskaber blødt fordelt omkring et punkt
function prøve(kort, x, z) {
  const c = verdenTilHex(x, z);
  let vægt = 0, land = 0, klippe = 0, skov = 0;
  const tone = [0, 0, 0];
  for (let dq = -2; dq <= 2; dq++) {
    for (let dr = Math.max(-2, -dq - 2); dr <= Math.min(2, -dq + 2); dr++) {
      const q = c.q + dq, r = c.r + dr;
      const p = hexTilVerden(q, r);
      const d = Math.hypot(p.x - x, p.z - z);
      if (d >= R) continue;
      const w = (1 - d / R) ** 2;
      const f = kort.hent(q, r);
      vægt += w;
      if (!f || f.type === 'vand') continue;
      land += w;
      if (f.blok === 'bjerg') klippe += w;
      if (f.blok === 'skov') skov += w;
      const t = REGIONER[f.region].farve;
      tone[0] += t[0] * w; tone[1] += t[1] * w; tone[2] += t[2] * w;
    }
  }
  const L = vægt ? land / vægt : 0;
  return { L, K: vægt ? klippe / vægt : 0, F: vægt ? skov / vægt : 0, tone: land ? tone.map((v) => v / land) : [1, 1, 1] };
}

// Terrænets højde i et punkt (bruges også til at sætte træer og sten på jorden)
function højdeOgPrøve(kort, x, z, seed) {
  const pr = prøve(kort, x, z);
  const L = pr.L + (støj(x, z, seed + 20, 5) - 0.5) * 0.18;
  const land = glat(0.12, 0.5, L);
  let y = -2.4 * (1 - land);
  y += 2.6 * glat(0.35, 0.9, pr.K) * (0.75 + 0.5 * støj(x, z, seed + 23, 6));
  y += (støj(x, z, seed + 24, 4) - 0.5) * 0.22 * land;
  return { y, ...pr, L };
}
export const terrænHøjde = (kort, x, z, seed = 3) => højdeOgPrøve(kort, x, z, seed).y;

// Højden under figurerne: et gitter af terrænets punkter (sat, når terrænet bygges), læst blødt mellem punkterne
let HG = null;
export function højdeVed(x, z) {
  if (!HG) return 0;
  const fx = (x - HG.x0) / TRIN, fz = (z - HG.z0) / TRIN, ix = Math.floor(fx), iz = Math.floor(fz);
  if (ix < 0 || iz < 0 || ix >= HG.b || iz >= HG.h) return 0;
  const tx = fx - ix, tz = fz - iz, n = HG.b + 1, y = HG.y, i = iz * n + ix;
  return (y[i] * (1 - tx) + y[i + 1] * tx) * (1 - tz) + (y[i + n] * (1 - tx) + y[i + n + 1] * tx) * tz;
}

// Hvor meget bar jord og tørt græs hver region har (M9: hver region sin karakter)
const REGION_GRUND = {
  askemarken: { jord: 0.5, tør: 0.55 },
  skoven: { jord: 0.15, tør: 0 },
  gravlandet: { jord: 0.55, tør: 0.85 },
  bjergene: { jord: 0.45, tør: 0.35, klippe: 0.25 },
  sumpen: { jord: 0.6, tør: 0, mudder: 1 },
};
const TØR = new THREE.Color(1.18, 1.04, 0.62), MUDDER = new THREE.Color(0.62, 0.66, 0.5), HVID = new THREE.Color(1, 1, 1);

// Terrænet: højde fra felterne, jordtyper (splat) og en farvetone pr. punkt. Teksturerne kommer fra grund.js.
// stier = lavStier(...) (eller null), pletter = [{ x, z, r }] trådt jord omkring lejre, steder og basen
export function lavTerrænMesh(kort, grænser, { miner = [], ødeland = null, stier = null, pletter = [], grund, u = null, seed = 3 } = {}) {
  const bTone = u?.tone ?? [1, 1, 1], neutral = u?.græsSne ? 0.75 : u?.lava ? 0.5 : 0, tørOk = !u?.græsSne && !u?.lava;
  const b = Math.ceil((grænser.maxX - grænser.minX) / TRIN), h = Math.ceil((grænser.maxZ - grænser.minZ) / TRIN);
  const geo = new THREE.PlaneGeometry(b * TRIN, h * TRIN, b, h).rotateX(-Math.PI / 2);
  geo.translate((grænser.minX + grænser.maxX) / 2, 0, (grænser.minZ + grænser.maxZ) / 2);
  const pos = geo.attributes.position;
  const farver = new Float32Array(pos.count * 3), splat = new Float32Array(pos.count * 4), ekstra = new Float32Array(pos.count * 2);
  const c = new THREE.Color();
  HG = { x0: (grænser.minX + grænser.maxX) / 2 - (b * TRIN) / 2, z0: (grænser.minZ + grænser.maxZ) / 2 - (h * TRIN) / 2, b, h, y: new Float32Array(pos.count) };
  for (let i = 0; i < pos.count; i++) {
    // Lidt forskydning af punkterne giver et håndlavet lav-poly udtryk
    let x = pos.getX(i), z = pos.getZ(i);
    x += (støj(x, z, seed + 21, 3) - 0.5) * TRIN * 0.6;
    z += (støj(z, x, seed + 22, 3) - 0.5) * TRIN * 0.6;
    const { y, L, K, F, tone } = højdeOgPrøve(kort, x, z, seed);
    pos.setXYZ(i, x, y, z);
    HG.y[i] = y;
    const f = kort.felt(x, z), rg = REGION_GRUND[f?.region] ?? REGION_GRUND.askemarken;

    // Jordtyper: jord (pletter, stier, trådt jord), skovbund, klippe, sand
    let jord = glat(0.6, 0.75, støj(x, z, seed + 30, 6) * (0.75 + rg.jord * 0.5));
    jord = Math.max(jord, (stier?.styrke(x, z) ?? 0) * 0.95);
    for (const p of pletter) {
      const d = Math.hypot(p.x - x, p.z - z) + (støj(x, z, seed + 31, 3) - 0.5) * 3;
      if (d < p.r) jord = Math.max(jord, glat(p.r, p.r * 0.45, d) * (p.styrke ?? 0.85));
    }
    let guld = 0;
    for (const m of miner) {
      const d = Math.hypot(m.x - x, m.z - z);
      if (d < 11) { jord = Math.max(jord, glat(11, 5, d)); guld = Math.max(guld, glat(11, 3, d) * 0.6); }
    }
    const sand = 1 - glat(0.6, 0.88, L);
    const klippe = Math.max(glat(0.3, 0.8, K), (rg.klippe ?? 0) * glat(0.62, 0.8, støj(x, z, seed + 32, 7)));
    const skov = glat(0.25, 0.8, F) * 0.95;
    splat.set([jord * (1 - sand), skov * (1 - sand), klippe, sand], i * 4);

    // Farvetone: regionens tone, tørt græs, mudder i sumpen og lidt lys/skygge
    // Regionens tone (dæmpet i sne og aske) gange biomets tone (biomdata.js)
    c.setRGB(tone[0], tone[1], tone[2]).lerp(HVID, neutral).multiply(new THREE.Color(...bTone));
    if (tørOk) c.lerp(TØR, rg.tør * glat(0.3, 0.7, støj(x, z, seed + 33, 16)) * 0.6);
    if (rg.mudder) c.lerp(MUDDER, jord * 0.7);
    c.multiplyScalar(0.92 + støj(x, z, seed + 25, 9) * 0.16);
    farver.set([c.r, c.g, c.b], i * 3);

    // Erevoss: The Memorys land er stille og sølvblegt omkring deres trone (ånder, ikke død jord)
    let sølv = 0;
    if (ødeland) {
      const d = Math.hypot(ødeland.x - x, ødeland.z - z) + (støj(x, z, seed + 28, 5) - 0.5) * 14;
      sølv = (1 - glat(20, 42, d)) * 0.75;
    }
    ekstra.set([sølv, guld], i * 2);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(farver, 3));
  geo.setAttribute('splat', new THREE.BufferAttribute(splat, 4));
  geo.setAttribute('ekstra', new THREE.BufferAttribute(ekstra, 2));
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95, metalness: 0 });
  const tid = { value: 0 };   // til kystskummet og vandets bølger (world.js tæller den op)
  if (grund) grundShader(mat, grund, tid, u?.sne ?? 0, u?.lava ? '0.3, 0.28, 0.26' : '0.95, 0.97, 0.95');   // askegråt skum i det vulkanske biom
  mat.userData.sne = false;   // jorden har sin egen sne (shaderen), ikke den fælles
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  // Vandoverflade over hele verden: lyse og mørke bølgepletter der glider, og glimt i solen.
  // I det vulkanske biom er havet mørkt askevand; lavaen ligger kun i søerne inde i landet (lava.js)
  const vandMat = new THREE.MeshStandardMaterial({ color: u?.vand ?? 0x3f9ac9, roughness: 0.25, metalness: 0, transparent: true, opacity: u?.lava ? 0.92 : 0.8 });
  vandMat.userData.sne = false;
  if (grund) vandShader(vandMat, grund, tid);
  const vand = new THREE.Mesh(new THREE.CircleGeometry(800, 64).rotateX(-Math.PI / 2), vandMat);
  vand.position.y = VAND_Y;
  vand.receiveShadow = true;

  // Havbund uden for kortet
  const bund = new THREE.Mesh(new THREE.CircleGeometry(800, 32).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0x2f6f8f, roughness: 1 }));
  bund.position.y = -2.5;
  const dele = [bund, mesh, vand];
  dele.tid = tid;
  return dele;
}

// Vandets shader: to lag støj der glider hver sin vej giver bølger; de lyseste toppe glimter
export function vandShader(mat, g, tid, lava = false) {
  const u = { tStoej: { value: g.støj }, uTid: tid };
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, u);
    shader.vertexShader = 'varying vec2 vVandXZ;\n' + shader.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
        vVandXZ = ( modelMatrix * vec4( transformed, 1.0 ) ).xz;`);
    shader.fragmentShader = 'uniform sampler2D tStoej;\nuniform float uTid;\nvarying vec2 vVandXZ;\n' + shader.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
        float b1 = texture2D( tStoej, vVandXZ / 23.0 + vec2( uTid * 0.012, uTid * 0.007 ) ).r;
        float b2 = texture2D( tStoej, vVandXZ / 13.0 - vec2( uTid * 0.009, -uTid * 0.011 ) ).r;
        float bolge = b1 * 0.6 + b2 * 0.4;
        diffuseColor.rgb *= 0.82 + bolge * 0.36;
        diffuseColor.rgb += vec3( ${lava ? '1.0, 0.75, 0.2' : '0.9, 0.95, 1.0'} ) * smoothstep( 0.74, 0.86, b1 * b2 * 1.45 ) * ${lava ? '0.9' : '0.35'};`);
    // Lava: en mørk skorpe med glødende revner, der langsomt flytter sig
    if (lava) shader.fragmentShader = shader.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance *= 0.05 + ( 1.0 - smoothstep( 0.0, 0.04, abs( b1 - 0.5 ) ) ) * 1.5 + ( 1.0 - smoothstep( 0.0, 0.025, abs( b2 - 0.55 ) ) ) * 0.9 + smoothstep( 0.8, 0.92, bolge ) * 0.5;`);
  };
  mat.customProgramCacheKey = () => (lava ? 'lava' : 'vand');
}

// Shaderen blander jordens teksturer efter splat-vægtene, med uregelmæssige kanter og store lyse/mørke pletter
function grundShader(mat, g, tid, sne = 0, skumFarve = '0.95, 0.97, 0.95') {
  const u = { tGraes: { value: g.græs }, tJord: { value: g.jord }, tSkov: { value: g.skov }, tKlippe: { value: g.klippe }, tSand: { value: g.sand }, tStoej: { value: g.støj }, tSne: { value: g.sne }, uSne: { value: sne }, uTid: tid };
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, u);
    shader.vertexShader = 'attribute vec4 splat;\nattribute vec2 ekstra;\nvarying vec4 vSplat;\nvarying vec2 vEkstra;\nvarying vec2 vGrundXZ;\nvarying float vGrundY;\n'
      + shader.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
        vSplat = splat; vEkstra = ekstra; vGrundXZ = ( modelMatrix * vec4( transformed, 1.0 ) ).xz; vGrundY = ( modelMatrix * vec4( transformed, 1.0 ) ).y;`);
    shader.fragmentShader = 'uniform sampler2D tGraes, tJord, tSkov, tKlippe, tSand, tStoej, tSne;\nuniform float uTid, uSne;\nvarying vec4 vSplat;\nvarying vec2 vEkstra;\nvarying vec2 vGrundXZ;\nvarying float vGrundY;\n'
      + shader.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
        vec2 uvG = vGrundXZ / 6.5;
        float nStor = texture2D( tStoej, vGrundXZ / 41.0 ).r;
        float nKant = texture2D( tStoej, vGrundXZ / 9.0 + 0.37 ).r;
        vec3 cG = mix( texture2D( tGraes, uvG ).rgb, texture2D( tGraes, uvG * 0.41 + vec2( 0.37, 0.11 ) ).rgb, 0.4 );
        vec3 cJ = texture2D( tJord, uvG * 1.15 ).rgb;
        vec3 cS = texture2D( tSkov, uvG ).rgb;
        vec3 cK = texture2D( tKlippe, uvG * 0.8 ).rgb;
        vec3 cA = texture2D( tSand, uvG ).rgb;
        vec4 w = smoothstep( 0.3, 0.7, vSplat * ( 0.6 + nKant * 0.8 ) );
        float wG = max( 0.0, 1.0 - w.x - w.y - w.z - w.w );
        vec3 alb = ( cG * wG + cJ * w.x + cS * w.y + cK * w.z + cA * w.w ) / max( 0.001, wG + w.x + w.y + w.z + w.w );
        alb *= 0.86 + nStor * 0.28;
        float lum = dot( alb, vec3( 0.3, 0.55, 0.15 ) );
        alb = mix( alb, vec3( lum ) * vec3( 0.9, 1.0, 1.1 ) * 1.1, vEkstra.x * 0.75 );
        alb = mix( alb, alb * vec3( 1.4, 1.1, 0.5 ), vEkstra.y );
        // Kystskum (lys stribe ved vandkanten, der boelger frem og tilbage)
        float kant = ${VAND_Y.toFixed(2)} + 0.12 + sin( uTid * 1.3 + nKant * 9.0 ) * 0.1;
        float skum = smoothstep( 0.32, 0.0, abs( vGrundY - kant ) ) * smoothstep( 0.25, 0.6, texture2D( tStoej, vGrundXZ / 3.0 + uTid * 0.02 ).r );
        alb = mix( alb, vec3( ${skumFarve} ), skum * 0.75 );
        // Snedaekke (vinter): pletter af sne, mindst paa stier og ved vandet
        float sneM = uSne * smoothstep( 0.35, 0.65, nStor * 0.55 + nKant * 0.45 + uSne * 0.55 - w.x * 0.35 - w.w * 0.4 );
        alb = mix( alb, texture2D( tSne, uvG ).rgb, clamp( sneM * 1.4, 0.0, 1.0 ) );
        diffuseColor.rgb *= alb;`);
  };
  mat.customProgramCacheKey = () => 'grund';
}
