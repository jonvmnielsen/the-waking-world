// Bygninger og konstruktioner rundt om på kortet, som man kan angribe (Jons ønske): ruiner og creep-lejrenes
// telte, våbenstativer og lygter. De ligger i verden.creeps som neutrale mål (neutral = true), så helten og
// soldaterne kan angribe dem på ordre, men ingen angriber dem af sig selv. Ødelagt giver de lidt guld og træ,
// og en ruin frigør sit felt. Kroen, købmanden, kilderne, udkigstårnene og minerne kan ikke ødelægges.
import { reducérSkade } from './config.js';
import { bus } from './events.js';

const TYPER = {
  ruin: { navn: 'Ruin', hp: 520, rustning: 3, radius: 5, højde: 6, guld: [50, 110], træ: 30 },
  telt: { navn: 'Camp Tent', hp: 180, rustning: 0, radius: 2.2, højde: 3, guld: [12, 30], træ: 10 },
  lille: { navn: 'Camp Gear', hp: 90, rustning: 0, radius: 1.2, højde: 2, guld: [5, 14], træ: 0 },
};
const type = (model) => (/building_/.test(model) ? 'ruin' : /tent/.test(model) ? 'telt' : 'lille');

export class Konstruktion {
  constructor(verden, { obj, f, model }, id) {
    const d = TYPER[type(model)];
    Object.assign(this, { verden, id, data: d, navn: d.navn, rod: obj, felt: f });
    this.x = obj.position.x; this.z = obj.position.z;
    this.maxHp = this.hp = d.hp; this.rustning = d.rustning; this.radius = d.radius; this.højde = d.højde;
    this.erBygning = true; this.neutral = true; this.side = 'neutral'; this.tilstand = 'bygning';
    this.død = false;
    this.felter = d === TYPER.ruin && f ? [f] : [];
  }

  opdater() {}

  tagSkade(mængde, kilde) {
    if (this.død) return false;
    const skade = reducérSkade(mængde, this.rustning);
    this.hp = Math.max(0, this.hp - skade);
    bus.emit('skade', { mål: this, mængde: skade, kilde });
    if (this.hp <= 0) { this.ødelæg(kilde); return true; }
    return false;
  }

  // stille = fra et gemt spil
  ødelæg(kilde, stille = false) {
    this.død = true;
    this.verden.scene.remove(this.rod);
    for (const f of this.felter) { f.optaget = false; f.gåbar = !f.blok; }
    if (stille) return;
    const d = this.data, helt = this.verden.helt;
    bus.emit('effekt', { type: 'stomp', x: this.x, z: this.z, radius: this.radius + 1.5 });
    bus.emit('konstruktion_ødelagt', { bygning: this });
    const guld = d.guld[0] + Math.round(Math.random() * (d.guld[1] - d.guld[0]));
    helt.inventar.tilføjGuld(guld, this);
    if (d.træ) { this.verden.økonomi?.aflever('træ', d.træ); bus.emit('flydetekst', { enhed: this, tekst: `+${d.træ} wood`, klasse: 'ressource' }); }
    if (kilde === helt || kilde?.side === 'egen') bus.emit('besked', `${d.navn} destroyed`);
  }
}

// Opret alle og læg dem i verden.creeps
export function lavKonstruktioner(spil) {
  const verden = spil.verden;
  const liste = (verden.natur.konstruktioner ?? []).map((k, i) => new Konstruktion(verden, k, i));
  verden.creeps.push(...liste);
  return liste;
}
