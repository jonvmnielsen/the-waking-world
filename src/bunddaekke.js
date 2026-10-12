// Bunddække (M9, Jons ønske: mere spil og personlighed i jorden): græstotter, blomster, bregner,
// svampe, buske, småsten og trædesten spredt over landet, valgt efter region. Det er ren pynt —
// man går igennem det, og det forsvinder under nye bygninger. Tegnes som instanser i bidder,
// så kun det synlige tegnes.
import * as THREE from 'three';
import { instanser } from './assets.js';
import { hexTilVerden, HEX_BREDDE } from './hexgrid.js';
import { terrænHøjde } from './terraen.js';
import { støj, rng } from './stoej.js';
import { bus } from './events.js';

const KF = 'kaykit-forest/', QN = 'quaternius-nature/';
const BID = 90;   // bidder på 90×90 enheder
// [model, skala, vægt]
const G = { græs1: [KF + 'grass_1_c_singlesided_color1', 1.7, 6], græs2: [KF + 'grass_2_c_singlesided_color1', 1.6, 5], græs3: [KF + 'grass_1_b_singlesided_color1', 1.8, 4], græs4: [KF + 'grass_2_b_singlesided_color1', 1.7, 3] };
const BLOMST = { rød: [QN + 'flower_3_group', 0.55, 2], gul: [QN + 'flower_4_group', 0.5, 2], enkelt: [QN + 'flower_3_single', 0.55, 1], kløver: [QN + 'clover_2', 0.65, 1] };
const TØR = { kort: [QN + 'grass_wispy_short', 1.1, 5], høj: [QN + 'grass_wispy_tall', 0.9, 1] };
const SMÅ = { sten1: [KF + 'rock_1_a_color1', 1.1, 2], sten2: [KF + 'rock_3_a_color1', 0.8, 1], pebble1: [QN + 'pebble_round_1', 1.6, 2], pebble2: [QN + 'pebble_round_3', 1.6, 2] };
const SKOV = { bregne: [QN + 'fern_1', 0.85, 4], svamp: [QN + 'mushroom_common', 1.5, 2], busk1: [KF + 'bush_1_e_color1', 1.3, 2], busk2: [KF + 'bush_3_a_color1', 1.5, 2], plante: [QN + 'plant_7', 1.6, 1] };
const BUSK = { busk1: [KF + 'bush_1_e_color1', 1.4, 2], busk2: [KF + 'bush_3_a_color1', 1.6, 1] };

// Hvad hver region har: lister af grupper og hvor mange ting pr. felt
const REGION = {
  askemarken: { antal: 9, grupper: [[G, 5], [TØR, 3], [BLOMST, 1.2], [SMÅ, 1.2], [BUSK, 0.5]] },
  skoven: { antal: 12, grupper: [[G, 6], [BLOMST, 2.2], [SKOV, 1.5], [BUSK, 0.8], [SMÅ, 0.4]] },
  gravlandet: { antal: 7, grupper: [[TØR, 5], [SMÅ, 2], [G, 1]] },
  bjergene: { antal: 7, grupper: [[G, 3], [SMÅ, 4], [TØR, 2], [BLOMST, 0.5]] },
  sumpen: { antal: 10, grupper: [[G, 4], [TØR, 3], [SKOV, 1.5], [SMÅ, 0.6]] },
};
const TRÆDESTEN = [QN + 'rockpath_round_small_1', QN + 'rockpath_round_small_2'];

// Biomernes egne planter (M10)
const FL = 'forge-lowpoly/';
const JUNGLE = { banan: [FL + 'banana_a', 0.9, 1], monstera: [FL + 'monstera', 1.3, 2], heliconia: [FL + 'heliconia', 1.3, 1], bregne: [FL + 'fern_a', 2, 2], hibiscus: [FL + 'bush_hibiscus', 1.5, 1] };
const LYNG = { lilla: [FL + 'flowers_purple', 2.2, 5], hvid: [FL + 'flowers_white', 2.0, 1] };
const KAKTUS = { tønde: [FL + 'cactus_barrel', 1.6, 3], blomst: [FL + 'cactus_barrel_flower', 1.7, 2], lille: [FL + 'cactus_saguaro_b', 0.9, 1] };
const ØRKENSTEN = { sandsten: [FL + 'rock_sand', 0.9, 1], sten: [KF + 'rock_1_a_color1', 1.1, 1] };
const BASALT = { basalt: [FL + 'basalt_a', 0.32, 3], sten: [KF + 'rock_3_a_color1', 0.8, 1] };
const HØJT = { højt: [FL + 'grass_tall', 1.4, 2] };
// Pr. biom: grupper for frit land og for skovbund (tempereret bruger REGION nedenfor)
const BIOM = {
  vinter: { antal: 4, grupper: [[TØR, 2], [SMÅ, 3]], skov: SMÅ },
  ørken: { antal: 5, grupper: [[TØR, 4], [ØRKENSTEN, 2], [KAKTUS, 1.4]], skov: TØR, skovRegion: { antal: 9, grupper: [[G, 3], [JUNGLE, 2], [TØR, 2]] } },
  tropisk: { antal: 12, grupper: [[G, 5], [JUNGLE, 3], [HØJT, 1.5], [BLOMST, 1], [SMÅ, 0.4]], skov: JUNGLE },
  vulkansk: { antal: 5, grupper: [[TØR, 2], [BASALT, 3]], skov: BASALT },
  hede: { antal: 11, grupper: [[LYNG, 5], [TØR, 3], [G, 2], [SMÅ, 1], [BUSK, 0.8]], skov: BUSK },
};
export const BUNDDÆKKE_MODELLER = [...new Set([G, BLOMST, TØR, SMÅ, SKOV, BUSK, JUNGLE, LYNG, KAKTUS, ØRKENSTEN, BASALT, HØJT].flatMap((g) => Object.values(g).map((v) => v[0]))), ...TRÆDESTEN];
// Græssets farve efter årstid (efterårets gule, vinterens blege)
const GRÆSTONE = { forår: [0.95, 1.08, 0.9], sommer: null, efterår: [1.3, 1.02, 0.55], vinter: [0.92, 0.94, 0.86] };

function træk(t, liste) {
  const sum = liste.reduce((s, [, v]) => s + v, 0);
  let r = t() * sum;
  for (const [x, v] of liste) { r -= v; if (r <= 0) return x; }
  return liste[0][0];
}

export function lavBunddække(scene, kort, { stier, pletter = [], seed = 17, u = null }) {
  const B = BIOM[u?.biom] ?? null, blomst = u?.blomster ?? 1, græsTone = GRÆSTONE[u?.årstid] ?? null;
  const græsModeller = new Set(Object.values(G).map((v) => v[0]));
  const t = rng(seed);
  const grupper = new Map();   // "model|bid" -> { sti, matricer, punkter }
  const op = new THREE.Vector3(0, 1, 0), q = new THREE.Quaternion();
  const læg = (sti, skala, x, z, skygge = false) => {
    const nøgle = `${sti}|${Math.floor(x / BID)},${Math.floor(z / BID)}`;
    if (!grupper.has(nøgle)) grupper.set(nøgle, { sti, matricer: [], punkter: [], farver: [], skygge });
    const g = grupper.get(nøgle);
    g.farver.push(græsTone && græsModeller.has(sti) ? græsTone : null);
    q.setFromAxisAngle(op, t() * Math.PI * 2);
    const s = skala * (0.75 + t() * 0.5);
    g.matricer.push(new THREE.Matrix4().compose(new THREE.Vector3(x, terrænHøjde(kort, x, z) - 0.05, z), q, new THREE.Vector3(s, s, s)));
    g.punkter.push(x, z);
  };
  const optaget = (x, z) => pletter.some((p) => Math.hypot(p.x - x, p.z - z) < p.r * 0.7);

  for (const f of kort.felter.values()) {
    if (f.type !== 'græs' && f.blok !== 'skov') continue;
    if (f.optaget && !f.gåbar) continue;
    const c = hexTilVerden(f.q, f.r);
    const reg = B ? (f.region === 'skoven' && B.skovRegion) || B : REGION[f.region] ?? REGION.askemarken;
    // Tætheden svinger over kortet: nogle steder enge, andre steder næsten bart
    const tæt = 0.35 + støj(c.x, c.z, seed + 3, 30) * 1.1;
    const n = f.blok === 'skov' ? 4 : Math.round(reg.antal * tæt);
    // Blomster vokser i klynger
    const blomsterEng = blomst > 0 && !B && støj(c.x, c.z, seed + 5, 14) > 0.75 - blomst * 0.15;
    for (let i = 0; i < n; i++) {
      const x = c.x + (t() - 0.5) * HEX_BREDDE * 1.1, z = c.z + (t() - 0.5) * HEX_BREDDE * 1.1;
      if (!kort.erGåbar(x, z) && f.blok !== 'skov') continue;
      if (optaget(x, z)) continue;
      const sti = stier?.styrke(x, z) ?? 0;
      if (sti > 0.35) {
        if (t() < 0.12) læg(TRÆDESTEN[t() < 0.5 ? 0 : 1], 1.4, x, z);   // trædesten hist og her på stierne
        continue;
      }
      const gruppe = f.blok === 'skov' ? (B?.skov ?? SKOV) : blomsterEng && t() < 0.5 ? BLOMST : træk(t, reg.grupper);
      if (gruppe === BLOMST && t() > blomst) continue;   // færre blomster om efteråret, ingen om vinteren
      const [model, skala] = træk(t, Object.values(gruppe).map((v) => [v, v[2]]));
      læg(model, skala, x, z, gruppe === BUSK);
    }
  }

  const rod = new THREE.Group();
  rod.name = 'bunddække';
  const meshes = [];
  for (const g of grupper.values()) {
    const gr = instanser(g.sti, g.matricer, { skygge: g.skygge, modtag: true, farver: g.farver });
    for (const m of gr.children) meshes.push({ m, g });
    rod.add(gr);
  }
  scene.add(rod);

  // Nye bygninger: fjern bunddækket under dem
  const tom = new THREE.Matrix4().makeScale(0, 0, 0);
  const ryd = (x, z, r) => {
    for (const { m, g } of meshes) {
      let ændret = false;
      for (let i = 0; i < g.punkter.length / 2; i++) {
        if (Math.hypot(g.punkter[i * 2] - x, g.punkter[i * 2 + 1] - z) < r) { m.setMatrixAt(i, tom); ændret = true; }
      }
      if (ændret) m.instanceMatrix.needsUpdate = true;
    }
  };
  bus.on('bygning_ny', ({ bygning: b }) => ryd(b.x, b.z, b.radius + 1));
  return { rod, ryd };
}
