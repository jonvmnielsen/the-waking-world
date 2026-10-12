// Minernes måler og Deep Quarry (M10): over hver udforsket mine og stenbrud står en lille måler med fem felter
// og hvor meget der er tilbage. Deep Quarry tegnes som en stor klippeformation, der skrumper når den høstes.
// Første gang en kæmpeåre ses, fortæller krøniken om den. Tryk (med intet valgt) viser minens tal.
import * as THREE from 'three';
import { bus } from './events.js';
import { kopi } from './assets.js';
import { VERDEN } from './config.js';
import { UDSEENDE } from './kortvalg.js';
import { MINE_STR, BRUD, STADIER, stadie } from './minedata.js';

const B = 220, H = 60;
const tal = (n) => Math.round(n).toLocaleString('en-US');
const STEN = 'kaykit-hexagon/decoration/nature/rock_single_', PR = 'kaykit-hexagon/decoration/props/';

function tegnMåler(ctx, s, tekst, ikon) {
  ctx.clearRect(0, 0, B, H);
  const st = STADIER[s];
  ctx.fillStyle = 'rgba(20,14,10,0.82)'; ctx.strokeStyle = st.farve; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.roundRect(3, 3, B - 6, H - 6, 12); ctx.fill(); ctx.stroke();
  ctx.font = '700 22px system-ui, sans-serif'; ctx.textBaseline = 'middle'; ctx.fillStyle = ikon === 'sten' ? '#c8ccd2' : '#ffd36b';
  ctx.fillText(ikon === 'sten' ? '⛰' : '●', 12, H / 2);
  // Fem felter (det sjette stadie fylder dem alle og lyser)
  for (let i = 0; i < 5; i++) {
    ctx.fillStyle = i < Math.min(5, s) ? st.farve : 'rgba(255,255,255,0.15)';
    ctx.fillRect(40 + i * 15, 16, 11, 28);
  }
  ctx.fillStyle = '#f2e2b8'; ctx.font = '800 20px system-ui, sans-serif'; ctx.textAlign = 'right';
  ctx.fillText(tekst, B - 12, H / 2 + 1); ctx.textAlign = 'left';
}

export class MineVisning {
  constructor(spil) {
    this.spil = spil;
    const k = spil.base.kilder, scene = spil.verden.scene;
    this.liste = [
      ...k.miner.map((m) => ({ m, sten: false, kæmpe: m.størrelse === 'kæmpe', start: () => m.startGuld, mængde: () => m.guld, navn: MINE_STR[m.størrelse]?.navn ?? 'Gold mine' })),
      ...k.brud.map((m) => ({ m, sten: true, kæmpe: true, start: () => m.startSten, mængde: () => m.sten, navn: BRUD.navn })),
    ].map((e) => {
      const c = document.createElement('canvas'); c.width = B; c.height = H;
      const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, fog: false }));
      s.scale.set(5.2, 1.42, 1); s.position.set(e.m.x, e.kæmpe ? 13 : 9.5, e.m.z); s.visible = false; s.renderOrder = 5;
      scene.add(s);
      return { ...e, ctx: c.getContext('2d'), t, s, sidst: '', kendt: spil.taage.erUdforsket(e.m.x, e.m.z), sten3d: e.sten ? this.stenbrud(scene, e.m) : null };
    });
    this.tid = 0;
  }

  // Deep Quarry: en ring af store klipper med stiger, trillebør og hugget sten
  stenbrud(scene, m) {
    const sten = [];
    const tone = UDSEENDE.sten ? new THREE.Color(...UDSEENDE.sten) : null;
    for (let i = 0; i < 9; i++) {
      const v = (i / 8) * Math.PI * 2, r = i === 8 ? 0 : 3.4 + (i % 2) * 0.8;
      const o = kopi(STEN + ['c', 'e', 'b'][i % 3], { skygge: true });
      o.position.set(m.x + Math.cos(v) * r, -0.3, m.z + Math.sin(v) * r);
      o.rotation.y = i * 1.9;
      o.scale.setScalar(VERDEN.hexSkala * (i === 8 ? 5.2 : 3.2 + (i % 3) * 0.5));
      if (tone) o.traverse((x) => { if (x.isMesh) { x.material = x.material.clone(); x.material.color.multiply(tone); } });
      scene.add(o);
      sten.push(o);
    }
    for (const [model, v, sk] of [['ladder', 0.6, 1.2], ['wheelbarrow', 2.2, 1.2], ['resource_stone', 3.6, 1.1], ['resource_stone', 4.6, 0.9]]) {
      const o = kopi(PR + model, { skygge: true });
      o.position.set(m.x + Math.cos(v) * 6.4, 0, m.z + Math.sin(v) * 6.4); o.rotation.y = v;
      o.scale.setScalar(VERDEN.hexSkala * sk);
      scene.add(o);
    }
    return sten;
  }

  opdater(dt) {
    const nu = performance.now();   // efter uret, ikke spillets tid, så måleren også følger med på langsomme skærme
    if (nu - this.tid < 500) return;
    this.tid = nu;
    const taage = this.spil.taage;
    for (const e of this.liste) {
      e.s.visible = taage.erUdforsket(e.m.x, e.m.z);
      if (!e.s.visible) continue;
      const mængde = e.mængde(), s = stadie(mængde, e.start(), e.kæmpe), tekst = mængde > 0 ? tal(mængde) : 'Empty';
      if (tekst !== e.sidst) { e.sidst = tekst; tegnMåler(e.ctx, s, tekst, e.sten ? 'sten' : 'guld'); e.t.needsUpdate = true; }
      // Stenbruddet skrumper: én klippe mindre for hver niende del der er hugget
      if (e.sten3d) e.sten3d.forEach((o, i) => { o.visible = mængde > 0 && i < Math.ceil((mængde / e.start()) * 9); });
      if (!e.kendt && taage.erSynlig(e.m.x, e.m.z)) {
        e.kendt = true;
        if (e.kæmpe) bus.emit('krønike', e.sten
          ? { titel: BRUD.navn, tekst: `A mountain of cut stone — ${tal(mængde)} stone. Worth holding.`, x: e.m.x, z: e.m.z, farve: '#c8ccd2', varighed: 16 }
          : { titel: 'The Motherlode', tekst: `A vein so deep it may never run dry — ${tal(mængde)} gold. Whoever holds it will be hard to stop.`, x: e.m.x, z: e.m.z, farve: '#ffd36b', varighed: 18 });
      }
    }
  }

  // Tryk med intet valgt: minens navn, mængde og stadie
  tryk(px, py, skærm) {
    for (const e of this.liste) {
      if (!e.s.visible) continue;
      const p = skærm(e.m.x, 3, e.m.z);
      if (Math.hypot(p.x - px, p.y - py) > 60) continue;
      const mængde = e.mængde(), st = STADIER[stadie(mængde, e.start(), e.kæmpe)];
      bus.emit('krønike', { titel: e.navn, tekst: `${st.navn}: ${tal(mængde)} of ${tal(e.start())} ${e.sten ? 'stone' : 'gold'} left.`, x: e.m.x, z: e.m.z, farve: st.farve, varighed: 10 });
      return true;
    }
    return false;
  }
}
