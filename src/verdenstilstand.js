// Verdenstilstand i skirmish (GDD 12):
//   Balance   (0–12 min)  normalt spil
//   Fald      (12–25 min) guldminerne giver mindre, og creeps fra vildmarken plyndrer spillerens base
//   Opvågning (fra 25 min) Den Unavngivnes tjenere dukker op ved De Vågnende Sten midt på kortet og angriber alle.
//                          Besejres de, efterlader de de bedste items. Ekkoer der når Erevoss (ekko.js),
//                          får Opvågningen til at komme tidligere (højst 6 min).
// Alt vigtigt skrives i krøniken (kroenike.js), så spilleren kan se hvad der sker og hvor.
import { bus } from './events.js';
import { Tjener } from './tjener.js';
import { DROP, træk } from './itemdata.js';

export const FASER = [
  { id: 'balance', navn: 'Balance', fra: 0 },
  { id: 'fald', navn: 'The Fall', fra: 12 * 60, tekst: 'The land grows weary. Mines yield less, and hungry creeps from camps near your base will raid it.' },
  { id: 'opvågning', navn: 'The Awakening', fra: 25 * 60, tekst: 'The world remembers enough. The Unnamed wakes at the stones in the heart of the land — and its servants hunt everyone.' },
];
const PLYNDRING = 240;   // sekunder mellem plyndringer i Fald
const MAKS_VÆKNING = 360; // ekkoer kan højst fremskynde Opvågningen 6 minutter

export class Verdenstilstand {
  constructor(spil, midte) {
    this.spil = spil; this.verden = spil.verden; this.midte = midte;
    this.fase = 0;
    this.plyndring = 60;
    this.tjenere = [];
    this.opvågnet = false; this.belønnet = false;
    this.vækning = 0;
    // Plyndrere bærer stjålet guld: dræb dem og få det tilbage
    bus.on('creep_død', ({ creep }) => { if (creep.plyndrer) spil.genstande.læg('guldpose', creep.x, creep.z); });
  }

  // Hvornår en fase begynder (Opvågningen kommer tidligere jo flere ekkoer The Memory har fået)
  fra(i) { return i === 2 ? Math.max(FASER[1].fra + 240, FASER[2].fra - this.vækning) : FASER[i].fra; }
  ekko(n) { this.vækning = Math.min(MAKS_VÆKNING, this.vækning + 4 * n); }
  // Sekunder til næste fase, eller null
  tilNæste() { return this.fase < FASER.length - 1 ? Math.max(0, this.fra(this.fase + 1) - this.spil.ur.tid) : null; }
  // Hvor tæt verden er på at vågne (0–1) — De Vågnende Sten lyser efter det
  styrke() { return this.belønnet ? 0.15 : this.opvågnet ? 1 : Math.min(1, (this.spil.ur.tid / this.fra(2)) ** 1.6); }

  // Ved indlæsning: fasen sættes ud fra tiden uden fanfare, og tjenerne genskabes
  gendan(d) {
    this.vækning = d?.vækning ?? 0;
    while (this.fase < FASER.length - 1 && this.spil.ur.tid >= this.fra(this.fase + 1)) this.fase += 1;
    if (!d) return;
    this.belønnet = d.belønnet;
    if (d.opvågnet) {
      this.opvågnet = true;
      if (d.tjenere?.length) this.vågn(d.tjenere.map((t, i) => ({ ...t, i })));
    }
  }

  gem() {
    return { vækning: Math.round(this.vækning), opvågnet: this.opvågnet, belønnet: this.belønnet, tjenere: this.tjenere.filter((t) => !t.død).map((t) => ({ type: t.type, x: Math.round(t.x), z: Math.round(t.z), hp: Math.ceil(t.hp) })) };
  }

  get guldFaktor() { return this.fase >= 1 ? 0.75 : 1; }
  get memory() { return this.spil.memory; }
  spillerBygninger() { return this.spil.base.bygninger.filter((b) => !b.død); }

  opdater(dt) {
    const tid = this.spil.ur.tid;
    this.verden.guldFaktor = this.guldFaktor;
    while (this.fase < FASER.length - 1 && tid >= this.fra(this.fase + 1)) {
      this.fase += 1;
      const f = FASER[this.fase];
      bus.emit('verdenstilstand', { fase: f });
      bus.emit('banner', { titel: f.navn, tekst: f.tekst, lang: true });
      bus.emit('krønike', { titel: f.navn, tekst: f.tekst, farve: f.id === 'fald' ? '#e8a05a' : '#a070ff', varighed: 22, vigtig: true, ...(f.id === 'opvågning' ? { x: this.midte.x, z: this.midte.z } : {}) });
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
    bus.emit('krønike', { titel: 'Raiders from the wilds!', tekst: `The Fall has made the camps hungry. ${lejr.creeps.filter((c) => !c.død).length} creeps are coming for your base — kill them to win back the gold they carry.`, x: lejr.x, z: lejr.z, farve: '#f08a35', varighed: 18, vigtig: true });
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
    if (!gendan) bus.emit('krønike', { titel: 'The servants of The Unnamed', tekst: 'Hollow Knights and Void Witches march from the stones — half toward you, half toward Erevoss. Defeat them all for the greatest treasures.', x: m.x, z: m.z, farve: '#a070ff', varighed: 22 });
  }

  beløn() {
    this.belønnet = true;
    const t = this.tjenere[this.tjenere.length - 1];
    const g = this.spil.genstande;
    g.læg('kraftensSkrift', t.x, t.z);
    g.læg(træk(DROP[4]), t.x + 1.6, t.z + 0.8);
    g.læg(træk({ tordenøksen: 1, gravkongensSkjold: 1, kaptajnensKlinge: 1 }), t.x - 1.4, t.z + 1.2);
    bus.emit('banner', { titel: 'The servants fall', tekst: 'The Unnamed stirs no more — for now. Its treasures lie where its herald fell.', lang: true });
    bus.emit('krønike', { titel: 'The servants fall', tekst: 'The Unnamed sleeps again. Its treasures lie where the last servant fell.', x: t.x, z: t.z, farve: '#ffd36b', varighed: 20 });
  }
}
