// The Memory som regelbaseret modstander (GDD 11):
// - tjener guld så længe tronen står, og bygger nye bygninger efter en plan
// - træner skeletter i krypterne; de bliver stærkere jo længere spillet varer
// - forsvarer basen og angriber spilleren i bølger, der vokser; trækker sig, hvis bølgen taber
// - tilpasser sig spillestilen: mod en aggressiv spiller kommer tårnene tidligere,
//   mod en forsigtig spiller kommer angrebene tidligere
import { FjendeBygning } from './fjendebygning.js';
import { Fjende } from './fjende.js';
import { FJENDE_BYGNINGER, FJENDE_ENHEDER, LAYOUT, FRA_START, SVÆRHED, BYGGEPLAN, fjendeLevel } from './fjendedata.js';
import { hexTilVerden } from './hexgrid.js';
import { træk } from './itemdata.js';
import { bus } from './events.js';

export class Memory {
  constructor(spil, plads, sværhed = 'normal') {
    this.spil = spil; this.verden = spil.verden; this.sværhed = sværhed;
    this.s = SVÆRHED[sværhed];
    this.tid = 0; this.guld = 200; this.bølge = 0;
    this.næsteAngreb = this.s.førsteAngreb * 60;
    this.angribere = []; this.bølgeStart = 0;
    this.kø = new Map();          // krypt -> { type, tid }
    this.byggePlan = 0;
    const kort = this.verden.kort;
    this.pladser = plads.pladser;
    let s = plads.samling;
    if (!kort.erGåbar(s.x, s.z)) { const f = kort.nærmesteGåbare(s.x, s.z); s = hexTilVerden(f.q, f.r); }
    this.samling = s;
    this.bygninger = [new FjendeBygning(this.verden, 'hal', { ...plads.hal, id: 'hal' })];
    for (let i = 0; i < FRA_START && i < this.pladser.length; i++) this.byg(i, true);
    this.enheder = [];
    this.hal = this.bygninger[0];
    this.verden.creeps.push(...this.bygninger);
  }

  byg(i, færdig = false) {
    const f = this.pladser[i];
    if (!f) return null;
    const p = hexTilVerden(f.q, f.r);
    const b = new FjendeBygning(this.verden, LAYOUT[i], { x: p.x, z: p.z, felter: [f], rot: (i * Math.PI) / 3, færdig, id: `plads-${i}` });
    this.bygninger.push(b);
    if (!færdig) this.verden.creeps.push(b);
    return b;
  }

  spillerBygninger() { return this.spil.base.bygninger.filter((b) => !b.død); }
  get levende() { return this.enheder.filter((e) => !e.død); }
  get besejret() { return this.bygninger.every((b) => b.død); }
  minutter() { return this.tid / 60; }
  // Hæren må vokse med tiden (så den ikke er kæmpestor tidligt)
  loft() { return Math.min(this.s.loft, 5 + Math.floor(this.minutter() * 1.2)); }

  opdater(dt) {
    if (this.besejret) return;
    this.tid += dt;
    if (!this.hal.død) this.guld += this.s.indtægt * dt;
    this.planlæg();
    this.træn(dt);
    this.forsvar();
    this.angreb();
    if (this.enheder.some((e) => e.fjernet)) this.enheder = this.enheder.filter((e) => !e.fjernet);
  }

  // Nye bygninger efter planen; mod en aggressiv spiller kommer de 1,5 minut tidligere
  planlæg() {
    const tidlig = this.spil.stil.dominant() === 'aggression' ? 1.5 : 0;
    const næste = BYGGEPLAN[this.byggePlan];
    if (!næste || this.minutter() < næste[0] - tidlig) return;
    const type = LAYOUT[FRA_START + this.byggePlan];
    if (this.guld < FJENDE_BYGNINGER[type].pris) return;
    this.guld -= FJENDE_BYGNINGER[type].pris;
    this.byg(FRA_START + this.byggePlan);
    this.byggePlan += 1;
  }

  // Hver krypt træner én soldat ad gangen, så længe der er guld og plads i hæren
  træn(dt) {
    // Mod en kaotisk spiller flere magere, mod en forsigtig flere riddere
    const stil = this.spil.stil.dominant();
    const vægte = Object.fromEntries(Object.entries(FJENDE_ENHEDER).map(([t, d]) => [t, d.vægt + (stil === 'kaos' && t === 'mage' ? 2 : 0) + (stil === 'overlevelse' && t === 'warrior' ? 2 : 0)]));
    for (const k of this.bygninger) {
      if (k.type !== 'krypt' || k.død || !k.færdig) continue;
      let job = this.kø.get(k);
      if (!job) {
        if (this.levende.length >= this.loft()) continue;
        const type = træk(vægte);
        if (this.guld < FJENDE_ENHEDER[type].pris) continue;
        this.guld -= FJENDE_ENHEDER[type].pris;
        job = { type, tid: 0 };
        this.kø.set(k, job);
      }
      job.tid += dt;
      if (job.tid >= FJENDE_ENHEDER[job.type].tid) { this.kø.delete(k); this.nyEnhed(job.type, k); }
    }
  }

  nyEnhed(type, krypt) {
    const v = Math.random() * Math.PI * 2;
    const x = krypt.x + Math.cos(v) * (krypt.radius + 1.5), z = krypt.z + Math.sin(v) * (krypt.radius + 1.5);
    const e = new Fjende(this.verden, type, fjendeLevel(this.sværhed, this.minutter()), this, x, z);
    e.post = { x: this.samling.x + (Math.random() - 0.5) * 8, z: this.samling.z + (Math.random() - 0.5) * 8 };
    e.ordre = 'retur';
    this.enheder.push(e);
    this.verden.creeps.push(e);
    return e;
  }

  // Spillerens figurer ved basen: alle hjemme går til angreb
  forsvar() {
    for (const u of this.verden.egne()) {
      const ved = this.bygninger.some((b) => !b.død && b.afstand(u) < 22);
      if (!ved) continue;
      for (const e of this.levende) e.kommandoForsvar(u);
      return;
    }
  }

  angreb() {
    // En bølge i gang: træk den tilbage, hvis den har mistet for mange
    if (this.angribere.length) {
      const lever = this.angribere.filter((e) => !e.død);
      if (!lever.length || lever.every((e) => e.ordre !== 'angreb')) { this.angribere = []; return; }
      if (lever.length < this.bølgeStart * 0.35) {
        for (const e of lever) e.kommandoRetur();
        this.angribere = [];
        bus.emit('besked', 'The Memory pulls back its forces');
      }
      return;
    }
    // Mod en forsigtig spiller kommer angrebet et minut tidligere
    const tidlig = this.spil.stil.dominant() === 'overlevelse' ? 60 : 0;
    if (this.tid < this.næsteAngreb - tidlig) return;
    const klar = this.levende.filter((e) => e.ordre === 'vagt' && e.tilstand !== 'vågner');
    const størrelse = this.s.bølge[0] + this.bølge * this.s.bølge[1];
    if (klar.length - this.s.hjemme < Math.min(størrelse, this.loft() - this.s.hjemme)) return;
    const mål = this.spil.base.bygninger.find((b) => !b.død && b.type === 'storlejr') ?? this.spillerBygninger()[0];
    if (!mål) return;
    const sendes = klar.slice(this.s.hjemme, this.s.hjemme + størrelse);
    for (const e of sendes) e.kommandoAngreb(mål.x, mål.z);
    this.angribere = sendes; this.bølgeStart = sendes.length;
    this.bølge += 1;
    this.næsteAngreb = this.tid + this.s.mellemrum * 60;
    bus.emit('fjende_angreb', { antal: sendes.length, bølge: this.bølge });
    bus.emit('besked', `The Memory marches on your base! (${sendes.length} undead)`);
  }
}
