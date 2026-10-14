// Heltens bedrifter og tilnavne (Jon: spillet skal centreres om at bygge helten op). Helten tæller sine
// drab, bosser, faldne fjendehelte, skatte, genoplivninger og ekkoer. Når en bedrift er stor nok, får helten
// et tilnavn ("Warchief the Giantslayer") og en varig bonus. Tilnavnet står på heltekortet; det nyeste bruges.
import { bus } from './events.js';

export const EPITETER = [
  { id: 'blodig', navn: 'the Bloodied', tal: 'drab', krav: 25, tekst: '25 foes slain by your hero.', bonus: (h) => ({ [h.primær ?? 'str']: 3 }) },
  { id: 'kæmpe', navn: 'the Giantslayer', tal: 'bosser', krav: 2, tekst: 'Two great bosses brought down.', bonus: () => ({ hp: 150 }) },
  { id: 'skat', navn: 'the Treasure-Seeker', tal: 'skatte', krav: 3, tekst: 'Three epic or legendary treasures found.', bonus: (h) => ({ [h.primær ?? 'str']: 3 }) },
  { id: 'konge', navn: 'the Kingslayer', tal: 'heltedrab', krav: 1, tekst: 'The enemy hero has fallen before you.', bonus: () => ({ str: 3, agi: 3, int: 3 }) },
  { id: 'genkommen', navn: 'the Returned', tal: 'genoplivet', krav: 3, tekst: 'Fell three times, and rose again.', bonus: () => ({ hp: 200 }) },
  { id: 'ekko', navn: 'the Echo-Keeper', tal: 'ekkoer', krav: 10, tekst: 'Ten echoes of the fallen caught.', bonus: () => ({ int: 4 }) },
  { id: 'knogle', navn: 'the Bonebreaker', tal: 'drab', krav: 100, tekst: '100 foes slain by your hero.', bonus: (h) => ({ [h.primær ?? 'str']: 5 }) },
];
// Heltens fulde titel: navn, tilnavn og rolle (Ascension-stiens titel efter level 10)
export function heltTitel(spil) {
  const h = spil.helt, ep = spil.bedrifter?.epitet;
  return `${h.def?.navn ?? 'Hero'}${ep ? ` ${ep}` : ''} · ${h.sti?.data?.titel ?? h.def?.titel ?? ''}`;
}
export const BEDRIFT_NAVN = { drab: 'Foes slain', bosser: 'Bosses', heltedrab: 'Enemy heroes', skatte: 'Treasures', genoplivet: 'Returned', ekkoer: 'Echoes' };

export class Bedrifter {
  constructor(spil) {
    this.spil = spil;
    this.tal = { drab: 0, bosser: 0, heltedrab: 0, skatte: 0, genoplivet: 0, ekkoer: 0 };
    this.epiteter = [];   // id'er i den rækkefølge de blev vundet
    const h = () => spil.helt;
    bus.on('creep_død', ({ creep, kilde }) => {
      if (kilde !== h()) return;
      this.tal.drab++;
      if (creep.boss) this.tal.bosser++;
      if (creep.erHelt) this.tal.heltedrab++;
      this.tjek();
    });
    bus.on('item_samlet', ({ sj }) => { if (sj === 'episk' || sj === 'legendarisk') { this.tal.skatte++; this.tjek(); } });
    bus.on('helt_genoplivet', () => { this.tal.genoplivet++; this.tjek(); });
    bus.on('flydetekst', ({ tekst }) => { if (tekst === 'Echo caught') { this.tal.ekkoer++; this.tjek(); } });
  }

  // Heltens nyeste tilnavn (eller null)
  get epitet() { const id = this.epiteter.at(-1); return id ? EPITETER.find((e) => e.id === id).navn : null; }

  tjek() {
    const h = this.spil.helt;
    for (const e of EPITETER) {
      if (this.epiteter.includes(e.id) || this.tal[e.tal] < e.krav) continue;
      this.epiteter.push(e.id);
      h.inventar.øgEgenskaber(e.bonus(h));
      const bonus = Object.entries(e.bonus(h)).map(([k, v]) => `+${v} ${k === 'hp' ? 'health' : k.toUpperCase()}`).join(', ');
      bus.emit('banner', { titel: `${h.def.navn} ${e.navn}`, tekst: `${e.tekst} ${bonus}` });
      bus.emit('krønike', { titel: `A new name: ${h.def.navn} ${e.navn}`, tekst: `${e.tekst} The world remembers it (${bonus}).`, x: h.x, z: h.z, farve: '#ffd27a', vigtig: true });
      bus.emit('epitet', { id: e.id });
    }
  }

  gem() { return { tal: this.tal, epiteter: this.epiteter }; }
  // Gendan uden at give bonusserne igen (de ligger allerede i heltens permanente egenskaber)
  gendan(g) { if (!g) return; Object.assign(this.tal, g.tal); this.epiteter = [...(g.epiteter ?? [])]; }
}
