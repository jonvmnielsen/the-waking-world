// The Memory (Jon: en entitet på kortet, ikke en fjende der går efter dig). De dødes ånder holder til i Erevoss,
// en bleg hal på et stille sted langt fra begge baser. Åndevogterne forsvarer kun deres eget land.
// Ekkoerne fra alle der falder (begge spilleres), driver dertil (ekko.js). For hver 15 ekkoer vågner en ny vogter
// (højst 8), og Opvågningen kommer tidligere. Hvad det betyder, når verden vågner, er endnu åbent (GDD 12).
import { kopi } from './assets.js';
import { åndeLook } from './aand.js';
import { Lejr } from './creeps.js';
import { hexTilVerden } from './hexgrid.js';
import { VERDEN } from './config.js';
import { BYG_SKALA } from './byggeplads.js';
import { bus } from './events.js';

const VOGTERE = ['warrior', 'mage', 'warrior'], EKSTRA = ['minion', 'rogue', 'warrior', 'mage', 'minion'], PR_VOGTER = 15;

// Det sted der er længst fra begge baser (og ikke ved midten, De Ældgamle eller en lejr)
function findErevoss(spil, modstanderHal, midte) {
  const { verden, helt, lejre } = spil;
  let bedst = null, bv = -1;
  for (const f of verden.kort.felter.values()) {
    if (f.type !== 'græs' || !f.gåbar || f.optaget || f.blok) continue;
    const p = hexTilVerden(f.q, f.r);
    if (Math.hypot(p.x - midte.x, p.z - midte.z) < 45 || lejre.some((l) => Math.hypot(l.x - p.x, l.z - p.z) < (l.data.niveau >= 5 ? 45 : 18))) continue;
    const v = Math.min(Math.hypot(p.x - helt.spawn.x, p.z - helt.spawn.z), Math.hypot(p.x - modstanderHal.x, p.z - modstanderHal.z));
    if (v > bv) { bv = v; bedst = f; }
  }
  return bedst;
}

export class Memory {
  constructor(spil, modstanderHal, midte) {
    this.spil = spil; this.ekkoer = 0; this.vækket = 0;
    const f = findErevoss(spil, modstanderHal, midte) ?? spil.verden.kort.felt(midte.x + 60, midte.z);
    const p = hexTilVerden(f.q, f.r);
    f.optaget = true; f.gåbar = false;
    // Hallen: en bleg, gennemsigtig borg (Bone Throne)
    const m = kopi('kaykit-hexagon/buildings/yellow/building_castle_yellow', { skygge: true });
    m.scale.setScalar(VERDEN.hexSkala * 1.25 * BYG_SKALA);
    m.position.set(p.x, 0, p.z);
    åndeLook(m, { farve: 0xbfe4ff, styrke: 0.45, gennemsigtig: 0.8 });
    spil.verden.scene.add(m);
    this.hal = { x: p.x, z: p.z, død: false, navn: 'Erevoss', rod: m };
    // Vogterne: en lejr af ånder lige ved hallen (sover, forsvarer kun sig selv)
    const nabo = spil.verden.kort.naboer(f).find((n) => n.gåbar) ?? f;
    this.lejr = new Lejr(spil.verden, { id: 'erevoss', navn: 'Erevoss', q: nabo.q, r: nabo.r, niveau: 4, familie: 'skeletter', creeps: [...VOGTERE] });
    for (const c of this.lejr.creeps) åndeLook(c.model, { farve: 0x7fe8ff, styrke: 0.5, gennemsigtig: 0.85 });
    spil.lejre.push(this.lejr);
  }

  // Ekkoer fra de faldne (ekko.js): for hver 15 vågner en ny vogter
  modtagEkko(n) {
    this.ekkoer += n;
    while (this.vækket < Math.min(EKSTRA.length, Math.floor(this.ekkoer / PR_VOGTER))) this.nyVogter(false);
  }

  nyVogter(stille) {
    const l = this.lejr, v = this.vækket * 1.3;
    const c = l.lavCreep?.(EKSTRA[this.vækket], { x: l.x + Math.cos(v) * 4, z: l.z + Math.sin(v) * 4 });
    this.vækket += 1;
    if (!c) return;
    åndeLook(c.model, { farve: 0x7fe8ff, styrke: 0.5, gennemsigtig: 0.85 });
    if (!stille) bus.emit('krønike', { titel: 'Erevoss grows', tekst: `${this.ekkoer} echoes have reached The Memory. Another spirit wakes to guard it.`, x: this.hal.x, z: this.hal.z, farve: '#bfe4ff' });
  }

  get levende() { return this.lejr.creeps.filter((c) => !c.død); }
  gem() { return { ekkoer: this.ekkoer }; }
  gendan(g) { this.ekkoer = g?.ekkoer ?? 0; while (this.vækket < Math.min(EKSTRA.length, Math.floor(this.ekkoer / PR_VOGTER))) this.nyVogter(true); }
}
