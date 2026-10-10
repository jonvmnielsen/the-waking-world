// Verdenstilstand i skirmish (GDD 12):
//   Balance   (0–12 min)  normalt spil
//   Fald      (12–25 min) guldminerne giver mindre, og creeps fra vildmarken plyndrer spillerens base
//   Opvågning (fra 25 min) Den Unavngivnes tjenere dukker op midt på kortet og angriber alle.
//                          Besejres de, efterlader de de bedste items.
import { bus } from './events.js';
import { Tjener } from './tjener.js';
import { DROP, træk } from './itemdata.js';

export const FASER = [
  { id: 'balance', navn: 'Balance', fra: 0 },
  { id: 'fald', navn: 'The Fall', fra: 12 * 60, tekst: 'The land grows weary. Mines yield less, and the wilds turn on your base.' },
  { id: 'opvågning', navn: 'The Awakening', fra: 25 * 60, tekst: 'Something nameless wakes at the heart of the world. Its servants hunt everyone.' },
];
const PLYNDRING = 110;   // sekunder mellem plyndringer i Fald

export class Verdenstilstand {
  constructor(spil, midte) {
    this.spil = spil; this.verden = spil.verden; this.midte = midte;
    this.fase = 0;
    this.plyndring = 60;
    this.tjenere = [];
    this.opvågnet = false; this.belønnet = false;
  }

  // Ved indlæsning: fasen sættes ud fra tiden uden fanfare, og tjenerne genskabes
  gendan(d) {
    while (this.fase < FASER.length - 1 && this.spil.ur.tid >= FASER[this.fase + 1].fra) this.fase += 1;
    if (!d) return;
    this.belønnet = d.belønnet;
    if (d.opvågnet) {
      this.opvågnet = true;
      if (d.tjenere?.length) this.vågn(d.tjenere.map((t, i) => ({ ...t, i })));
    }
  }

  gem() {
    return { opvågnet: this.opvågnet, belønnet: this.belønnet, tjenere: this.tjenere.filter((t) => !t.død).map((t) => ({ type: t.type, x: Math.round(t.x), z: Math.round(t.z), hp: Math.ceil(t.hp) })) };
  }

  get guldFaktor() { return this.fase >= 1 ? 0.75 : 1; }
  get memory() { return this.spil.memory; }
  spillerBygninger() { return this.spil.base.bygninger.filter((b) => !b.død); }

  opdater(dt) {
    const tid = this.spil.ur.tid;
    this.verden.guldFaktor = this.guldFaktor;
    while (this.fase < FASER.length - 1 && tid >= FASER[this.fase + 1].fra) {
      this.fase += 1;
      const f = FASER[this.fase];
      bus.emit('verdenstilstand', { fase: f });
      bus.emit('banner', { titel: f.navn, tekst: f.tekst });
      if (f.id === 'opvågning' && !this.opvågnet) this.vågn();
    }
    if (FASER[this.fase].id !== 'balance') {
      this.plyndring -= dt;
      if (this.plyndring <= 0) { this.plyndring = PLYNDRING; this.plyndr(); }
    }
    if (this.opvågnet && !this.belønnet && this.tjenere.length && this.tjenere.every((t) => t.død)) this.beløn();
  }

  // En vågen lejr i nærheden af basen sender sine creeps ud for at plyndre
  plyndr() {
    const bygninger = this.spillerBygninger();
    if (!bygninger.length) return;
    const nær = (l) => Math.min(...bygninger.map((b) => Math.hypot(b.x - l.x, b.z - l.z)));
    const lejr = this.spil.lejre
      .filter((l) => l.data.niveau <= 3 && l.creeps.some((c) => !c.død) && l.creeps.every((c) => !c.plyndrer) && nær(l) < 160)
      .sort((a, b) => nær(a) - nær(b))[Math.floor(Math.random() * 2)];
    if (!lejr) return;
    for (const c of lejr.creeps) {
      if (c.død) continue;
      c.plyndrer = true;
      c.tilstand = 'jagt';
      c.mål = c.nærmesteBygning();
    }
    bus.emit('besked', 'Creeps from the wilds are raiding your base!');
  }

  vågn(gendan = null) {
    this.opvågnet = true;
    const m = this.midte, spillerHal = this.spillerBygninger()[0], memoryHal = this.memory.hal;
    const typer = gendan ?? [['kaptajn'], ['lejesoldat'], ['lejesoldat'], ['heks'], ['lejesoldat'], ['heks'], ['lejesoldat']].map(([t], i) => ({ type: t, i }));
    for (const d of typer) {
      const v = (d.i ?? 0) * 0.9;
      const x = d.x ?? m.x + Math.cos(v) * 10, z = d.z ?? m.z + Math.sin(v) * 10;
      // Halvdelen går mod spilleren, halvdelen mod The Memory
      const mod = (d.i ?? 0) % 2 === 0 ? (spillerHal ?? memoryHal) : (memoryHal.død ? spillerHal : memoryHal);
      const t = new Tjener(this.verden, d.type, this, x, z, mod ? { x: mod.x, z: mod.z } : null);
      if (d.hp) t.hp = Math.min(t.maxHp, d.hp);
      this.tjenere.push(t);
      this.verden.creeps.push(t);
    }
    if (!gendan) bus.emit('effekt', { type: 'portal', x: m.x, z: m.z });
  }

  beløn() {
    this.belønnet = true;
    const t = this.tjenere[this.tjenere.length - 1];
    const g = this.spil.genstande;
    g.læg('kraftensSkrift', t.x, t.z);
    g.læg(træk(DROP[4]), t.x + 1.6, t.z + 0.8);
    g.læg(træk({ tordenøksen: 1, gravkongensSkjold: 1, kaptajnensKlinge: 1 }), t.x - 1.4, t.z + 1.2);
    bus.emit('banner', { titel: 'The servants fall', tekst: 'The Unnamed stirs no more — for now. Its treasures lie where its herald fell.' });
  }
}
