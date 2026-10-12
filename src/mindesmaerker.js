// Mindesmærker (M9, Jons ønske: mere lore i verden). Når et mindesmærke kommer inden for synsvidde,
// skrives det i krøniken med sin historie, får et navneskilt og en markering på kortet.
// Navnestenene skal helten gå hen og læse: hver giver erfaring og en stump af Den Unavngivnes navn —
// men hver læsning får også verden til at huske lidt mere (Opvågningen kommer 20 s tidligere).
// Har man læst alle syv, får man en Tome of Power og 300 guld. Første gang helten går ind i en region,
// fortæller krøniken om den.
import * as THREE from 'three';
import { bus } from './events.js';
import { glød } from './aand.js';
import { NAVN_FÆRDIG, REGION_LORE } from './stedlore.js';
import { REGIONER } from './kortgen.js';
import { UDSEENDE } from './kortvalg.js';
import { regionTekst } from './biomdata.js';

const LÆS = 13;   // så tæt skal helten på en Navnesten

function navneskilt(tekst, farve) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 72;
  const ctx = c.getContext('2d');
  ctx.font = '700 38px Georgia, serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.lineWidth = 7; ctx.strokeStyle = 'rgba(15,10,6,0.85)'; ctx.strokeText(tekst, 256, 38);
  ctx.fillStyle = farve; ctx.fillText(tekst, 256, 38);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, fog: false }));
  s.scale.set(11, 1.55, 1);
  return s;
}

export class Mindesmærker {
  constructor(spil, minder) {
    this.spil = spil;
    this.tid = 0;
    const scene = spil.verden.scene;
    this.liste = minder.map((m) => {
      const sten = m.slags === 'navnesten';
      const skilt = navneskilt(sten ? 'Name-stone' : m.navn, sten ? '#d8c8ff' : '#f2e2b8');
      skilt.position.set(m.x, sten ? 11.5 : 7.5, m.z);
      skilt.visible = false;
      scene.add(skilt);
      let lys = null;
      if (sten) { lys = glød(0xa070ff, 3.2, 0); lys.position.set(m.x, 8.6, m.z); scene.add(lys); }
      return { ...m, opdaget: false, læst: false, skilt, lys };
    });
    this.regioner = new Set();
  }

  get læste() { return this.liste.filter((m) => m.læst).length; }

  opdater(dt) {
    this.tid += dt;
    for (const m of this.liste) if (m.lys) m.lys.material.opacity = m.opdaget ? (m.læst ? 0.85 : 0.3 + Math.sin(this.tid * 2 + m.stump) * 0.12) : 0;
    if ((this.tjek = (this.tjek ?? 0) - dt) > 0) return;
    this.tjek = 0.5;
    const { taage, helt, verden } = this.spil;
    for (const m of this.liste) {
      if (!m.opdaget && taage.erSynlig(m.x, m.z)) this.opdag(m);
      if (m.opdaget && !m.læst && m.slags === 'navnesten' && !helt.død && Math.hypot(helt.x - m.x, helt.z - m.z) < LÆS) this.læs(m);
    }
    // Første gang helten går ind i en region
    const f = verden.kort.felt(helt.x, helt.z);
    if (f?.region && !this.regioner.has(f.region)) {
      const første = this.regioner.size === 0;
      this.regioner.add(f.region);
      const [navn, linje] = regionTekst(UDSEENDE, f.region) ?? [REGIONER[f.region].navn, REGION_LORE[f.region]];
      if (!første) bus.emit('krønike', { titel: navn, tekst: linje, farve: '#9fd08a', varighed: 12 });
    }
  }

  opdag(m, stille = false) {
    m.opdaget = true;
    m.skilt.visible = true;
    if (stille) return;
    const sten = m.slags === 'navnesten';
    bus.emit('krønike', sten
      ? { titel: 'A Name-stone', tekst: 'Old letters, half worn away. Bring your hero close to read it.', x: m.x, z: m.z, farve: '#c8a8ff' }
      : { titel: m.navn, tekst: m.tekst, x: m.x, z: m.z, farve: '#f2e2b8', varighed: 18 });
    if (!sten) this.spil.helt.fåXp(25);
  }

  læs(m, stille = false) {
    m.læst = true;
    m.skilt.material.map.dispose();
    const nyt = navneskilt(`Name-stone ${['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][m.stump]}`, '#c8a8ff');
    m.skilt.material = nyt.material;
    if (stille) return;
    const h = this.spil.helt, n = this.læste;
    h.fåXp(40);
    this.spil.verdenstilstand?.ekko(5);   // verden husker lidt mere: Opvågningen 20 s tidligere
    bus.emit('effekt', { type: 'samlet', x: m.x, z: m.z, farve: 0xa070ff });
    bus.emit('krønike', { titel: `Name-stone ${n} of 7`, tekst: `${m.tekst} The world remembers a little more.`, x: m.x, z: m.z, farve: '#c8a8ff', varighed: 18 });
    if (n === this.liste.filter((x) => x.slags === 'navnesten').length) {
      this.spil.genstande.læg('kraftensSkrift', h.x + 1.5, h.z + 1);
      h.inventar.tilføjGuld(300, h);
      bus.emit('banner', { titel: 'The Name', tekst: NAVN_FÆRDIG, lang: true });
      bus.emit('krønike', { titel: 'All seven stones read', tekst: `${NAVN_FÆRDIG} (+300 gold, Tome of Power)`, farve: '#c8a8ff', varighed: 22 });
    }
  }

  // Tryk med intet valgt: læs mindesmærkets historie igen
  tryk(px, py, skærm) {
    for (const m of this.liste) {
      if (!m.opdaget) continue;
      const s = skærm(m.x, 3, m.z);
      if (Math.hypot(s.x - px, s.y - py) > 50) continue;
      const sten = m.slags === 'navnesten';
      bus.emit('krønike', { titel: sten ? `Name-stone${m.læst ? ` ${m.stump + 1}` : ''}` : m.navn, tekst: sten && !m.læst ? 'Bring your hero close to read it.' : m.tekst, x: m.x, z: m.z, farve: sten ? '#c8a8ff' : '#f2e2b8', varighed: 14 });
      return true;
    }
    return false;
  }

  gem() { return { opdaget: this.liste.filter((m) => m.opdaget).map((m) => m.id), læst: this.liste.filter((m) => m.læst).map((m) => m.id), regioner: [...this.regioner] }; }
  gendan(g) {
    if (!g) return;
    for (const m of this.liste) { if (g.opdaget?.includes(m.id)) this.opdag(m, true); if (g.læst?.includes(m.id)) this.læs(m, true); }
    for (const r of g.regioner ?? []) this.regioner.add(r);
  }
}
