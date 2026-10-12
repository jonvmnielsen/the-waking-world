// Livet i verden (M8): dyr, fugle, pilgrimme, De Vågnende Sten og tågen over Erevoss.
// Livet følger verdenstilstanden: i Faldet drager nogle flokke bort, kragerne bliver flere, og flygtninge
// søger ly ved spillerens hal. I Opvågningen samles pilgrimmene ved stenene. Kragerne samles hvor der er kamp.
import { bus } from './events.js';
import { hexTilVerden } from './hexgrid.js';
import { Flok } from './dyr.js';
import { FugleFlok } from './fugle.js';
import { Pilgrim } from './pilgrimme.js';
import { VågnendeSten } from './vaekkesten.js';
import { ÅndeTåge } from './aand.js';
import { GAVE_ORD } from './verdenslore.js';
import { Ekkoer } from './ekko.js';
import { Fortælling } from './fortaelling.js';
import { LejrSkilte } from './lejrskilt.js';
import { Mindesmærker } from './mindesmaerker.js';
import { HeltReplikker } from './heltreplik.js';
import { Vejr } from './vejr.js';
import { MineVisning } from './minevisning.js';
import { lavFund } from './fund.js';
import { Huler } from './huler.js';
import { Begivenheder } from './begivenheder.js';
import { UDSEENDE } from './kortvalg.js';

// Sætter M8-systemerne op: ekkoer, livet, fortællingen og lejrenes skilte. opdater() kører med tegningen.
export function lavVerdensliv(spil, steder, minder = []) {
  spil.ekkoer = new Ekkoer(spil);
  spil.minder = new Mindesmærker(spil, minder);
  spil.livet = new Livet(spil, steder);
  const fortælling = new Fortælling(spil), skilte = new LejrSkilte(spil), replikker = new HeltReplikker(spil);
  const vejr = new Vejr(spil.verden.scene, UDSEENDE.vejr);
  spil.vejr = vejr;
  spil.minevisning = new MineVisning(spil);
  lavFund(spil);
  spil.huler = new Huler(spil, spil.verden.kort.huler ?? []);
  spil.rig.særGrænser = () => spil.huler.grænser();
  spil.begivenheder = new Begivenheder(spil);
  return { opdater(dt) { fortælling.opdater(dt); skilte.opdater(dt); replikker.opdater(); vejr.opdater(dt, spil.rig.fokus); spil.minevisning.opdater(dt); } };
}

// Gendan ekkoer og mindesmærker fra et gemt spil
export function gendanVerdensliv(spil, v) {
  spil.ekkoer.gendan(v?.ekko);
  spil.minder.gendan(v?.minder);
  spil.huler.gendan(v?.huler);
}

const FLOKKE = [['hjort', 'hind', 'hind'], ['hind', 'hind'], ['hjort', 'hind', 'hind', 'hind'], ['hind', 'hind', 'hind']];
const vælg = (l) => l[Math.floor(Math.random() * l.length)];

export class Livet {
  constructor(spil, steder) {
    this.spil = spil; this.verden = spil.verden; this.steder = steder;
    const kort = this.verden.kort, hal = spil.base.bygninger[0], mem = spil.memory.hal;
    const langtFra = (p, a, d) => !a || Math.hypot(p.x - a.x, p.z - a.z) > d;
    const felter = [...kort.felter.values()].map((f) => ({ f, ...hexTilVerden(f.q, f.r) }));
    this.eng = felter.filter(({ f, x, z }) => f.type === 'græs' && f.gåbar && !f.optaget && langtFra({ x, z }, hal, 40) && langtFra({ x, z }, mem, 48)
      && spil.lejre.every((l) => Math.hypot(l.x - x, l.z - z) > 18));
    this.skov = felter.filter(({ f }) => f.blok === 'skov');
    this.kyst = felter.filter(({ f }) => f.type === 'kyst');
    this.midte = steder.find((s) => s.type === 'kro') ?? { x: 0, z: 0 };

    this.flokke = [];
    for (let i = 0; i < 9 && this.eng.length; i++) this.flokke.push(new Flok(this.verden, FLOKKE[i % FLOKKE.length], vælg(this.eng)));
    for (let i = 0; i < 6 && this.eng.length; i++) this.flokke.push(new Flok(this.verden, ['ræv'], vælg(this.eng)));
    this.fugle = [];
    for (let i = 0; i < 5; i++) this.nyeKrager();
    for (let i = 0; i < 6 && this.eng.length; i++) { const p = vælg(this.eng); this.fugle.push(new FugleFlok(this.verden, 'finke', p.x, p.z, (fl) => this.engNær(fl, 45))); }
    for (let i = 0; i < 3 && this.kyst.length; i++) { const p = vælg(this.kyst); this.fugle.push(new FugleFlok(this.verden, 'måge', p.x, p.z, (fl) => this.nær(this.kyst, fl, 70))); }
    this.sten = new VågnendeSten(this.verden, this.midte);
    this.pilgrimme = [0, 1, 2, 3, 4].map((i) => { const s = vælg(steder.filter((t) => t.type !== 'mine')); return new Pilgrim(this.verden, i, s.x + 6, s.z + 6); });
    this.tåge = mem ? new ÅndeTåge(this.verden, mem) : null;

    bus.on('verdenstilstand', ({ fase }) => this.nyFase(fase.id));
    // Kragerne samles hvor der har været kamp
    const kamp = ({ x, z }) => this.kragerTil(x, z);
    bus.on('creep_død', ({ creep }) => kamp(creep));
    bus.on('soldat_død', ({ soldat }) => kamp(soldat));
  }

  nær(liste, fl, maks) {
    const k = liste.filter((p) => { const d = Math.hypot(p.x - fl.x, p.z - fl.z); return d > 12 && d < maks; });
    return k.length ? vælg(k) : null;
  }
  engNær(fl, maks) { return this.nær(this.eng, fl, maks); }

  nyeKrager() {
    const kilde = this.skov.length ? this.skov : this.eng;
    if (!kilde.length) return;
    const p = vælg(kilde);
    this.fugle.push(new FugleFlok(this.verden, 'krage', p.x, p.z, (fl) => this.nær(kilde, fl, 80)));
  }

  kragerTil(x, z) {
    let bedst = null, bd = 160;
    for (const f of this.fugle) if (f.art === 'krage' && !(f.ophold > 0)) { const d = Math.hypot(f.x - x, f.z - z); if (d < bd) { bd = d; bedst = f; } }
    bedst?.flyvTil(x, z, 45);
  }

  // Steder pilgrimmene går mellem (spillerens hal kun i Faldet, stenene altid)
  stopSteder() {
    const l = this.steder.filter((s) => s.type !== 'mine').map((s) => ({ type: s.type, x: s.x, z: s.z }));
    l.push({ type: 'sten', x: this.midte.x, z: this.midte.z });
    return l;
  }

  get opvågnet() { return this.spil.verdenstilstand.opvågnet && !this.spil.verdenstilstand.belønnet; }

  nyFase(id) {
    if (id === 'fald') {
      // Tre flokke drager bort; kragerne bliver flere; to pilgrimme søger ly ved spillerens hal
      for (const f of this.flokke.filter((f) => f.dyr.length > 1).slice(0, 3)) f.forlader = 90;
      for (let i = 0; i < 3; i++) this.nyeKrager();
      const hal = this.spil.base.bygninger.find((b) => !b.død);
      if (hal) for (const p of this.pilgrimme.slice(0, 2)) p.gåMod({ type: 'hal', x: hal.x, z: hal.z });
    }
    if (id === 'opvågning') {
      for (const p of this.pilgrimme) p.gåMod({ type: 'sten', x: this.midte.x, z: this.midte.z });
      const m = this.midte, d = (f) => Math.hypot(f.x - m.x, f.z - m.z);
      for (const f of this.fugle.filter((f) => f.art === 'krage').sort((a, b) => d(a) - d(b)).slice(0, 2)) f.flyvTil(m.x, m.z, 60);
    }
  }

  // En flygtning når spillerens hal og giver det lidt den har
  gave(p) {
    this.spil.økonomi.refunder({ guld: 60, træ: 40 });
    bus.emit('krønike', { titel: `${p.navn} reached your hall`, tekst: `“${GAVE_ORD[Math.floor(Math.random() * GAVE_ORD.length)]}” (+60 gold, +40 wood)`, x: p.x, z: p.z, farve: '#d8d0c0' });
  }

  // Tryk når intet er valgt: en pilgrim taler, stenene forklarer sig
  tryk(px, py, skærm) {
    for (const p of this.pilgrimme) {
      if (!p.rod.visible) continue;
      const s = skærm(p.x, 1.2, p.z);
      if (Math.hypot(s.x - px, s.y - py) < 40) { p.tal(); return true; }
    }
    for (const s of this.sten.sten) {
      if (!this.spil.taage.erUdforsket(s.x, s.z)) continue;
      const sk = skærm(s.x, 3, s.z);
      if (Math.hypot(sk.x - px, sk.y - py) < 45) {
        const v = this.spil.verdenstilstand, rest = v.tilNæste();
        const om = v.opvågnet ? 'They burn. The Unnamed is awake.' : v.fase === 1 && rest != null ? `They will burn in about ${Math.ceil(rest / 60)} minutes — sooner if more echoes reach Erevoss.` : 'They glow faintly as the world remembers.';
        bus.emit('krønike', { titel: 'The Waking Stones', tekst: `Old pillars older than names. ${om}`, x: s.x, z: s.z, farve: '#a070ff', varighed: 12 });
        return true;
      }
    }
    return false;
  }

  opdater(dt) {
    const v = this.spil.verdenstilstand, taage = this.spil.taage;
    const trusler = [...(this.verden.egne?.() ?? []), ...this.pilgrimme, ...this.verden.creeps.filter((c) => !c.død && !c.erBygning && c.tilstand !== 'hvile')];
    const skræk = this.opvågnet ? 1.5 : 1;
    for (const f of this.flokke) {
      if (f.forlader != null) {
        f.forlader -= dt;
        if (f.forlader < 60 && f.dyr.every((d) => !d.rod.visible)) { f.fjern(); continue; }
      }
      f.opdater(dt, trusler, taage, skræk);
    }
    this.flokke = this.flokke.filter((f) => f.dyr.length);
    for (const f of this.fugle) f.opdater(dt, trusler, taage);
    for (const p of this.pilgrimme) p.opdater(dt, this);
    if (v.belønnet && !this.sovet) {
      this.sovet = true;
      for (const p of this.pilgrimme) { p.tilstand = 'hvil'; p.timer = 6; p.spil('Cheer'); }
    }
    this.sten.opdater(dt, v.styrke(), this.opvågnet);
    this.tåge?.opdater(dt, taage);
  }
}
