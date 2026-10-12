// Prospektering (Jons ønske: arbejdere kan lede efter nye miner). En arbejder går til foden af et udforsket
// bjerg og hakker i det en stund (gnister og støv). Måske finder den en skjult guldåre — så står der en ny
// lille mine, hvor den stod — eller løse sten, eller ingenting. Hvert bjerg kan kun undersøges én gang;
// en lille stenvarde viser, hvor der er ledt.
import { kopi } from './assets.js';
import { hexTilVerden, nøgle } from './hexgrid.js';
import { VERDEN } from './config.js';
import { bus } from './events.js';

export const PROSPEKT = { pris: { guld: 40 }, tid: 16, guldChance: 0.35, stenChance: 0.25, guld: 6000, sten: [120, 180] };
const VARDE = 'kaykit-hexagon/decoration/props/resource_stone', MINE = 'kaykit-hexagon/buildings/yellow/building_mine_yellow';

export class Prospektering {
  constructor(spil) { this.spil = spil; this.fundne = []; this.søgt = new Set(); }

  // Send en arbejder ud for at lede. Returnerer en fejltekst eller null
  led(a) {
    const { verden, økonomi } = this.spil, kort = verden.kort;
    let bedst = null, bd = 160;
    for (const f of kort.felter.values()) {
      if (f.type !== 'græs' || !f.gåbar || f.optaget || !verden.taage.erUdforsket(...Object.values(hexTilVerden(f.q, f.r)))) continue;
      const bjerg = kort.naboer(f).find((n) => n.blok === 'bjerg' && !this.søgt.has(nøgle(n.q, n.r)));
      if (!bjerg) continue;
      const p = hexTilVerden(f.q, f.r), d = Math.hypot(p.x - a.x, p.z - a.z);
      if (d < bd) { bd = d; bedst = { f, bjerg }; }
    }
    if (!bedst) return 'No unsearched mountains nearby';
    const mangler = økonomi.mangler(PROSPEKT.pris);
    if (mangler) return mangler;
    økonomi.betal(PROSPEKT.pris);
    const c = hexTilVerden(bedst.f.q, bedst.f.r), b = hexTilVerden(bedst.bjerg.q, bedst.bjerg.r);
    const punkt = { x: c.x + (b.x - c.x) * 0.45, z: c.z + (b.z - c.z) * 0.45 };
    this.søgt.add(nøgle(bedst.bjerg.q, bedst.bjerg.r));   // reserveret, så to arbejdere ikke leder samme sted
    a.nulstil();
    a.prospekt = { ...bedst, punkt, mod: b, tid: PROSPEKT.tid, gnist: 0, styr: this };
    a.tilstand = 'tilLeder';
    a.gåTil(punkt.x, punkt.z);
    return null;
  }

  // Kaldes fra arbejderens opdatering (arbejder.js)
  opdater(a, dt) {
    const p = a.prospekt;
    if (a.tilstand === 'tilLeder') {
      a.opdaterBevægelse(dt);
      if (!a.bevæger) { a.tilstand = 'leder'; a.vend(p.mod.x, p.mod.z); a.spil('1H_Melee_Attack_Chop', { fart: 0.9 }); }
      return;
    }
    p.tid -= dt;
    if ((p.gnist -= dt) <= 0) { p.gnist = 1.05; bus.emit('effekt', { type: 'samlet', x: a.x + (p.mod.x - a.x) * 0.15, z: a.z + (p.mod.z - a.z) * 0.15, farve: Math.random() < 0.5 ? 0xffd36b : 0xb8b0a0 }); bus.emit('høst_slag', { x: a.x, z: a.z, type: 'sten' }); }
    if (p.tid <= 0) this.resultat(a);
  }

  resultat(a) {
    const p = a.prospekt, { verden, base } = this.spil;
    a.prospekt = null; a.tilstand = 'ledig'; a.timer = 1.5;
    const varde = kopi(VARDE, { skygge: true });
    varde.scale.setScalar(VERDEN.hexSkala * 0.35); varde.position.set(p.punkt.x, 0, p.punkt.z);
    verden.scene.add(varde);
    const r = Math.random();
    if (r < PROSPEKT.guldChance && !p.f.optaget) {
      const mine = this.lavMine(p.f.q, p.f.r, PROSPEKT.guld);
      bus.emit('effekt', { type: 'ascension', x: mine.x, z: mine.z, farve: 0xffd36b });
      bus.emit('krønike', { titel: 'A hidden vein!', tekst: `Your worker struck gold at the foot of the mountain — a new mine with ${PROSPEKT.guld.toLocaleString('en')} gold.`, x: mine.x, z: mine.z, farve: '#ffd36b', vigtig: true });
      a.kommandoHøst(base.kilder.som(mine));
    } else if (r < PROSPEKT.guldChance + PROSPEKT.stenChance) {
      const sten = PROSPEKT.sten[0] + Math.round(Math.random() * (PROSPEKT.sten[1] - PROSPEKT.sten[0]));
      base.økonomi.aflever('sten', sten);
      bus.emit('flydetekst', { enhed: a, tekst: `+${sten} stone`, klasse: 'ressource' });
      bus.emit('besked', 'Loose stone — no gold here, but the stone is yours');
    } else {
      bus.emit('effekt', { type: 'røg', x: p.punkt.x, z: p.punkt.z });
      bus.emit('besked', 'Nothing here. The mountain keeps its secrets');
    }
  }

  lavMine(q, r, guld) {
    const { verden, base } = this.spil, f = verden.kort.hent(q, r), p = hexTilVerden(q, r);
    verden.natur?.ryd(f);
    f.optaget = true; f.gåbar = false;
    const m = kopi(MINE, { skygge: true });
    m.scale.setScalar(VERDEN.hexSkala * 0.9); m.position.set(p.x, 0, p.z); m.rotation.y = Math.random() * 6;
    verden.scene.add(m);
    const mine = { type: 'mine', størrelse: 'lille', fundet: true, guld, startGuld: guld, q, r, x: p.x, z: p.z };
    base.kilder.miner.push(mine);
    this.fundne.push(mine);
    return mine;
  }

  gem() { return { miner: this.fundne.map((m) => [m.q, m.r, m.startGuld]), søgt: [...this.søgt] }; }
  gendan(g) {
    for (const k of g?.søgt ?? []) this.søgt.add(k);
    for (const [q, r, guld] of g?.miner ?? []) this.lavMine(q, r, guld);
  }
}
