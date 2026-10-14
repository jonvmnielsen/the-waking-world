// Heltens udstyr kan ses (Jon: helten skal bygges op). Våbnet i højre hånd, skjold/bog/kogger i venstre
// (koggeret på ryggen) og hjelmen på hovedet. Modellens eget standardvåben og hat skjules, når der sidder
// noget på pladsen. Episk og legendarisk udstyr gløder svagt i sjældenhedens farve.
// KayKits løse våben har samme mål som dem i figurerne; højrehåndens våben er blot drejet (se DREJ).
import * as THREE from 'three';
import { kopi } from './assets.js';
import { ITEMS } from './itemdata.js';
import { itemInfo } from './udstyr.js';
import { bus } from './events.js';

const STD_VÅBEN = ['1H_Axe', '2H_Axe', '1H_Sword', '2H_Sword', '2H_Staff', '1H_Wand', '2H_Crossbow', '1H_Crossbow', 'Knife', 'Throwable'];
const STD_VENSTRE = ['1H_Axe_Offhand', '1H_Sword_Offhand', 'Barbarian_Round_Shield', 'Badge_Shield', 'Rectangle_Shield', 'Round_Shield', 'Spike_Shield', 'Spellbook', 'Spellbook_open', 'Knife_Offhand'];
const STD_HAT = ['Barbarian_Hat', 'Mage_Hat', 'Knight_Helmet'];
const GLØD = { episk: 0.08, legendarisk: 0.16 };

// Drejning af løse modeller, så de sidder som figurernes egne (y-rotation; bog og bue særskilt)
function placér(id, m) {
  const sti = ITEMS[id].model;
  if (/crossbow/.test(sti)) m.rotation.y = Math.PI / 2;
  else if (/bow_withstring/.test(sti)) { m.rotation.set(0, Math.PI / 2, Math.PI / 2); m.position.set(0, 0.1, 0); }
  else if (/spellbook/.test(sti)) m.quaternion.set(0, Math.SQRT1_2, Math.SQRT1_2, 0);
  else if (/quiver/.test(sti)) { m.rotation.set(0.35, 0, 0); m.position.set(0.15, 0.25, -0.5); }
  else if (/lantern/.test(sti)) m.scale.setScalar(0.5);
  return m;
}

export class HeltUdstyr {
  constructor(helt) {
    this.helt = helt;
    this.vist = {};   // plads -> { nøgle, model }
    const knogle = (n) => helt.model.getObjectByName(n);
    this.knogler = { r: knogle('handslotr'), l: knogle('handslotl'), hoved: knogle('head'), ryg: knogle('chest') };
    // Det modellen selv viser fra start (så det kan vises igen, når pladsen tømmes)
    this.std = { våben: [], skjold: [], hoved: [] };
    helt.model.traverse((o) => {
      if (!o.visible) return;
      if (STD_VÅBEN.includes(o.name)) this.std.våben.push(o);
      else if (STD_VENSTRE.includes(o.name)) this.std.skjold.push(o);
      else if (STD_HAT.includes(o.name)) this.std.hoved.push(o);
    });
    // Ekstra våben sat på af Unit (fx jægerens spyd) hører også til standardvåbnet
    for (const c of this.knogler.r?.children ?? []) if (!STD_VÅBEN.includes(c.name) && c.isObject3D && !c.isBone) this.std.våben.push(c);
    this.af = bus.on('inventar_ændret', () => this.opdater());
    this.opdater();
  }

  opdater() {
    const inv = this.helt.inventar;
    this.vis('våben', inv.pladser[0], this.knogler.r);
    this.vis('skjold', inv.pladser[1], this.knogler.l);
    this.vis('hoved', inv.pladser[2], this.knogler.hoved);
  }

  vis(plads, p, knogle) {
    if (!knogle) return;
    const nøgle = p ? `${p.id}:${p.rul?.navn ?? ''}` : '';
    if (this.vist[plads]?.nøgle === nøgle) return;
    this.vist[plads]?.model?.removeFromParent();
    let model = null;
    if (p && ITEMS[p.id]?.model) {
      try { model = this.lav(p, plads); } catch (e) { console.warn('Kan ikke vise udstyr', p.id, e.message); }
    }
    let mål = knogle;
    if (model && /quiver/.test(ITEMS[p.id].model) && this.knogler.ryg) mål = this.knogler.ryg;
    if (model) mål.add(model);
    for (const o of this.std[plads]) o.visible = !model;
    this.vist[plads] = { nøgle, model };
  }

  lav(p, plads) {
    const d = ITEMS[p.id], info = itemInfo(p);
    const m = kopi(d.model, { skygge: true });
    const glød = GLØD[info.sjældenhed];
    m.traverse((o) => {
      if (!o.isMesh) return;
      o.material = o.material.clone();
      o.material.userData.sne = false;
      if (d.farve) o.material.color.setRGB(...d.farve);
      if (glød && o.material.emissive) { o.material.emissive.setHex(info.sj.hex); o.material.emissiveIntensity = glød; }
    });
    const g = new THREE.Group();
    g.add(m);
    if (plads === 'våben') m.rotation.y = Math.PI;   // højrehåndens våben vender som figurernes egne
    placér(p.id, m);
    if (plads === 'hoved') {   // vores egne hjelme (forge-lowpoly): på hovedet, i figurernes hatstørrelse
      g.position.set(0, 0.6, 0.02);
      g.scale.setScalar(1.05);
    }
    return g;
  }
}
