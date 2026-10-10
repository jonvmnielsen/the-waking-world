// Items på jorden og kister (GDD 8.4). Items får en lysstribe i sjældenhedens farve.
import * as THREE from 'three';
import { kopi } from './assets.js';
import { ITEMS, SJÆLDENHED, DROP, BOSS_DROP, træk } from './itemdata.js';
import { bus } from './events.js';

const STRÅLE_GEO = new THREE.CylinderGeometry(0.18, 0.5, 6, 12, 1, true).translate(0, 3, 0);

// Tonet kopi af en item-model, skaleret så den største side er "str" enheder
export function itemModel(id, str = 1.5) {
  const d = ITEMS[id];
  const m = kopi(d.model, { skygge: true });
  const boks = new THREE.Box3().setFromObject(m);
  const s = boks.getSize(new THREE.Vector3());
  m.scale.setScalar(str / Math.max(s.x, s.y, s.z));
  if (d.farve) m.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); o.material.color.setRGB(...d.farve); } });
  return m;
}

class GenstandPåJord {
  constructor(scene, id, x, z, ladninger) {
    this.id = id; this.ladninger = ladninger; this.x = x; this.z = z;
    this.rod = new THREE.Group();
    this.rod.position.set(x, 0, z);
    this.model = itemModel(id);
    this.rod.add(this.model);
    const farve = SJÆLDENHED[ITEMS[id].sjældenhed].hex;
    this.stråle = new THREE.Mesh(STRÅLE_GEO, new THREE.MeshBasicMaterial({ color: farve, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    this.rod.add(this.stråle);
    this.fase = Math.random() * 6;
    scene.add(this.rod);
    this.scene = scene;
  }
  opdater(dt) {
    this.fase += dt;
    this.model.rotation.y += dt * 1.2;
    this.model.position.y = 0.6 + Math.sin(this.fase * 2.2) * 0.18;
    this.stråle.material.opacity = 0.17 + Math.sin(this.fase * 3) * 0.05;
  }
  fjern() { this.scene.remove(this.rod); }
}

class Kiste {
  constructor(scene, data) {
    Object.assign(this, data);
    this.åben = false;
    this.rod = kopi(data.guld ? 'kaykit-dungeon/chest_gold' : 'kaykit-dungeon/chest', { skygge: true });
    this.rod.scale.setScalar(1.35);
    this.rod.position.set(data.x, 0, data.z);
    this.rod.rotation.y = data.rot ?? 0;
    scene.add(this.rod);
  }
}

export class Genstande {
  constructor(verden, kister, lejre, tilf) {
    this.verden = verden;
    this.liste = [];
    this.kister = kister.map((k) => new Kiste(verden.scene, k));
    this.lejre = lejre;
    this.tilf = tilf;
    this.tid = 0;

    // Creeps giver guld; lejrens sidste creep taber lejrens item
    bus.on('creep_død', ({ creep }) => {
      const helt = this.verden.helt;
      helt.inventar.tilføjGuld(Math.round(4 + creep.level * 2.2 + Math.random() * 4) * (creep.boss ? 5 : 1), creep);
      const lejr = creep.lejr;
      if (!lejr || lejr.fjende || lejr.creeps.some((c) => !c.død)) return;
      if (lejr.data.niveau === 5) {
        const [unik, ekstra] = BOSS_DROP[lejr.data.familie];
        this.læg(unik, creep.x, creep.z);
        this.læg(this.tilf() < 0.5 ? ekstra : træk(DROP[4]), creep.x + 1.5, creep.z + 1);
        bus.emit('besked', 'The boss is defeated! The chest is unlocked');
      } else this.læg(træk(DROP[lejr.data.niveau]), creep.x, creep.z);
    });
    bus.on('item_smidt', ({ id, ladninger, x, z }) => this.læg(id, x + 1.2, z + 0.8, ladninger));
  }

  læg(id, x, z, ladninger) {
    const g = new GenstandPåJord(this.verden.scene, id, x, z, ladninger);
    this.liste.push(g);
    return g;
  }

  samOp(g) {
    const inv = this.verden.helt.inventar;
    if (!this.liste.includes(g)) return;
    if (!inv.modtag(g.id, g.ladninger)) { bus.emit('besked', 'Your inventory is full'); return; }
    g.fjern();
    this.liste.splice(this.liste.indexOf(g), 1);
    bus.emit('effekt', { type: 'samlet', x: g.x, z: g.z, farve: SJÆLDENHED[ITEMS[g.id].sjældenhed].hex });
  }

  åbn(k) {
    if (k.åben) return;
    const lejr = k.lejrId && this.lejre.find((l) => l.data.id === k.lejrId);
    if (lejr && lejr.creeps.some((c) => !c.død)) { bus.emit('besked', 'The chest stays locked while its guardians live'); return; }
    k.åben = true;
    this.verden.helt.inventar.tilføjGuld(k.guld ? 150 : 45 + Math.round(this.tilf() * 30), k);
    const id = træk(DROP[k.niveau ?? 2]);
    this.læg(id, k.x + 1.6, k.z + 1.2);
    bus.emit('effekt', { type: 'kiste', x: k.x, z: k.z });
    k.rod.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); o.material.color.multiplyScalar(0.45); } });
  }

  // Det tættest på et skærmpunkt (til tryk); skærm(x,y,z) giver skærmkoordinater
  find(sx, sy, skærm, maks = 46) {
    let bedst = null, bd = maks;
    for (const g of this.liste) {
      if (!g.rod.visible) continue;
      const s = skærm(g.x, 0.8, g.z), d = Math.hypot(s.x - sx, s.y - sy);
      if (d < bd) { bd = d; bedst = { type: 'item', ting: g }; }
    }
    for (const k of this.kister) {
      if (k.åben || !k.rod.visible) continue;
      const s = skærm(k.x, 0.8, k.z), d = Math.hypot(s.x - sx, s.y - sy);
      if (d < bd + 10) { bd = d; bedst = { type: 'kiste', ting: k }; }
    }
    return bedst;
  }

  opdater(dt) {
    this.tid += dt;
    const t = this.verden.taage;
    for (const g of this.liste) { g.rod.visible = t.erSynlig(g.x, g.z); if (g.rod.visible) g.opdater(dt); }
    for (const k of this.kister) k.rod.visible = t.erUdforsket(k.x, k.z);
    // Guld og skrifter samles op, når helten går hen over dem
    const h = this.verden.helt;
    if (h.død) return;
    for (const g of [...this.liste]) {
      if (ITEMS[g.id].type === 'opsamling' && Math.hypot(g.x - h.x, g.z - h.z) < 1.6) this.samOp(g);
    }
  }
}
