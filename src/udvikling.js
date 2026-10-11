// Forskning og opgraderinger (udviklingdata.js). Én udvikling ad gangen pr. bygning (b.udv = { id, tid }).
// Virkningerne læses løbende af soldater, arbejdere og bygninger (skade, rustning, bæring, liv).
import * as THREE from 'three';
import { bus } from './events.js';
import { kopi } from './assets.js';
import { FORSKNING, HAL, TÅRN_TRIN, UDVIKLINGER } from './udviklingdata.js';

const PROPS = 'kaykit-hexagon/decoration/props/';
const G = 'kaykit-hexagon/buildings/green/';

export class Udvikling {
  constructor(spil) {
    this.spil = spil;
    this.niveau = Object.fromEntries(Object.keys(FORSKNING).map((id) => [id, 0]));
    this.hal = 1;
  }

  // Næste trin af en udvikling i en bygning: { navn, ikon, tekst, pris, tid, niveau, maks } eller null når den er færdig
  info(b, id) {
    if (id === 'hal') {
      const n = HAL[this.hal];
      return n && { navn: n.navn, ikon: 'udv-hal', tekst: n.tekst, pris: n.pris, tid: n.tid, niveau: this.hal + 1, kræver: 1 };
    }
    if (id === 'vagttårn') { const t = TÅRN_TRIN[b.opg ?? 0]; return t && { navn: t.navn, ikon: t.ikon, tekst: t.tekst, pris: t.pris, tid: t.tid, kræver: t.hal }; }
    const f = FORSKNING[id], n = this.niveau[id];
    if (n >= f.niveauer.length) return null;
    return { navn: f.niveauer.length > 1 ? `${f.navn} ${n + 1}` : f.navn, ikon: f.ikon, tekst: f.tekst, ...f.niveauer[n], niveau: n + 1, kræver: n + 1 };
  }

  muligheder(b) { return b.færdig && !b.død ? (UDVIKLINGER[b.type] ?? []) : []; }

  // Hvorfor kan den ikke startes? (tekst) eller null
  fejl(b, id) {
    const i = this.info(b, id);
    if (!i) return 'Already complete';
    if (b.udv) return 'This building is already busy with an upgrade';
    if (this.spil.base.bygninger.some((x) => x.udv?.id === id && id !== 'vagttårn')) return 'Already being researched';
    if (i.kræver > this.hal) return `Needs ${HAL[i.kræver - 1].navn} (upgrade your Great Hall)`;
    return this.spil.økonomi.mangler(i.pris);
  }

  start(b, id) {
    const f = this.fejl(b, id);
    if (f) return f;
    const i = this.info(b, id);
    this.spil.økonomi.betal(i.pris);
    b.udv = { id, tid: 0, varighed: i.tid, navn: i.navn, pris: i.pris };
    return null;
  }

  annullér(b) {
    if (!b.udv) return;
    this.spil.økonomi.refunder(b.udv.pris);
    b.udv = null;
  }

  opdater(dt) {
    for (const b of this.spil.base.bygninger) {
      if (!b.udv || !b.færdig || b.død) continue;
      b.udv.tid += dt;
      if (b.udv.tid >= b.udv.varighed) { const { id, navn } = b.udv; b.udv = null; this.anvend(b, id); bus.emit('besked', `${navn} complete`); bus.emit('effekt', { type: 'kiste', x: b.x, z: b.z }); }
    }
  }

  // Giv virkningen (stille = når et gemt spil gendannes)
  anvend(b, id) {
    const førHp = b.maxHp;
    if (id === 'hal') {
      const n = HAL[this.hal];
      this.hal += 1;
      b.ekstraHp += n.hp;
      b.data = { ...b.data, navn: n.navn };
      this.pynt(b);
    } else if (id === 'vagttårn') {
      const t = TÅRN_TRIN[b.opg ?? 0];
      b.opg = (b.opg ?? 0) + 1;
      b.data = { ...b.data, navn: t.navn, model: t.model, angreb: t.angreb };
      b.ekstraHp += t.hp; b.grundRustning += t.rustning;
      b.visModel(b.data.model, b.data.skala);
    } else {
      const før = id === 'murværk' ? this.spil.base.bygninger.map((x) => x.maxHp) : null;
      this.niveau[id] += 1;
      // Masonry: bygningerne får det ekstra liv med det samme
      if (før) this.spil.base.bygninger.forEach((x, i) => { if (!x.død) x.hp += x.maxHp - før[i]; });
    }
    if (id === 'hal' || id === 'vagttårn') b.hp += b.maxHp - førHp;
    bus.emit('udvikling', { id, bygning: b });
  }

  // --- Virkninger ---
  skade(s) { return 3 * this.niveau[s.data.projektil ? 'spyd' : 'våben']; }
  rustning() { return this.niveau.rustning; }
  bær(type) { return 2 * (type === 'guld' ? this.niveau.minedrift : type === 'træ' ? this.niveau.økser : this.niveau.hakker); }
  bygHp() { return 0.15 * this.niveau.murværk; }
  bygRustning() { return this.niveau.murværk; }
  tårnSkade() { return 1 + 0.2 * this.niveau.tårnskud; }
  tårnRækkevidde() { return 2 * this.niveau.tårnskud; }
  vetFaktor() { return this.niveau.drill ? 1.5 : 1; }
  helingFaktor() { return this.niveau.drill ? 2 : 1; }

  // Storlejrens tier vises med flag (Stronghold) og små tårne (Fortress)
  pynt(b) {
    if (b.type !== 'storlejr' || this.hal < 2 || !b.rod) return;
    b.rod.getObjectByName('tier-pynt')?.removeFromParent();
    const g = new THREE.Group();
    g.name = 'tier-pynt';
    const læg = (sti, x, z, skala, rot = 0) => { const m = kopi(sti, { skygge: true }); m.position.set(x, 0, z); m.scale.setScalar(skala); m.rotation.y = rot; g.add(m); };
    læg(PROPS + 'flag_green', 0.95, 0.75, 0.75); læg(PROPS + 'flag_green', -0.95, 0.75, 0.75);
    læg(PROPS + 'weaponrack', 0.4, 1.05, 0.6, Math.PI);
    if (this.hal >= 3) {
      læg(G + 'building_tower_a_green', 1.15, -0.55, 0.32); læg(G + 'building_tower_a_green', -1.15, -0.55, 0.32);
      læg(PROPS + 'flag_green', 0, -1.1, 0.8);
    }
    b.rod.add(g);
  }

  gem() {
    return { niveau: this.niveau, hal: this.hal };
  }

  // Gendan forskning; bygningernes opgraderinger og igangværende arbejde gendannes i gendan.js
  gendan(g, bygninger) {
    if (!g) return;
    Object.assign(this.niveau, g.niveau);
    const hal = bygninger.find((b) => b.type === 'storlejr');
    const mål = g.hal; this.hal = 1;
    while (this.hal < mål) { if (hal) this.anvend(hal, 'hal'); else this.hal += 1; }
  }
}
