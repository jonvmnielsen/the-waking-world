// Heltens inventar (GDD 8.1–8.2, M13): seks udstyrspladser — våben, off-hand, hoved, krop, fødder, smykke —
// og en rygsæk med 6 pladser til eliksirer, stave og ekstra udstyr. Samlede bonusser, brug af items og salg.
import { ITEMS, salgsPris } from './itemdata.js';
import { PLADSER_TYPER, itemInfo, erUdstyr } from './udstyr.js';
import { bus } from './events.js';

export const PLADSER = 6;
const TOM = { str: 0, agi: 0, int: 0, skade: 0, rustning: 0, hp: 0, mana: 0, angrebsfart: 0, hpRegen: 0, manaRegen: 0, livsstjæl: 0, retur: 0, blok: 0, lynChance: 0, ekko: 0, krit: 0, kritSkade: 0, fart: 0, cdr: 0, evne: 0, guldFund: 0, xpBonus: 0 };

export class Inventar {
  constructor(helt) {
    this.helt = helt;
    this.pladser = new Array(PLADSER).fill(null);   // udrustet: { id, ladninger }
    this.rygsæk = new Array(PLADSER).fill(null);    // båret, men ikke udrustet (ingen bonusser)
    this.bonus = { ...TOM };
    this.permanent = { hp: 0, skade: 0, str: 0, agi: 0, int: 0, ofringer: 0 };   // fra bøger og ofringer ved alteret
    this.cooldown = 0;
    this.helOverTid = null;                           // { pr, tid }
  }

  get fuld() { return this.pladser.every(Boolean) && this.rygsæk.every(Boolean); }

  liste(hvor) { return hvor === 'rygsæk' ? this.rygsæk : this.pladser; }

  // Flyt et item mellem udstyrspladsen og rygsækken (udstyr fra rygsækken bytter med det, der sidder på pladsen)
  flyt(hvor, i) {
    const fra = this.liste(hvor), p = fra[i];
    if (!p) return null;
    if (hvor === 'rygsæk') {
      if (!erUdstyr(p.id)) return 'Use it from the backpack';
      const j = PLADSER_TYPER.indexOf(ITEMS[p.id].plads);
      fra[i] = this.pladser[j]; this.pladser[j] = p;
    } else {
      const j = this.rygsæk.indexOf(null);
      if (j < 0) return 'Your backpack is full';
      this.rygsæk[j] = p; fra[i] = null;
    }
    this.beregn();
    const h = this.helt;
    h.hp = Math.min(h.hp, h.maxHp); h.mana = Math.min(h.mana, h.manaMax);
    return null;
  }

  // Sælg et item (ved en butik): halv pris
  sælg(hvor, i) {
    const l = this.liste(hvor), p = l[i];
    if (!p) return 0;
    l[i] = null;
    const pris = salgsPris(p.id, p.rul);
    this.guld += pris;
    this.beregn();
    const h = this.helt;
    h.hp = Math.min(h.hp, h.maxHp); h.mana = Math.min(h.mana, h.manaMax);
    bus.emit('flydetekst', { enhed: h, tekst: `+${pris} gold`, klasse: 'guld' });
    return pris;
  }

  // Guld deles med resten af økonomien (basen)
  get guld() { return this.helt.verden.økonomi.guld; }
  set guld(v) { this.helt.verden.økonomi.guld = v; }

  // Læg et item i inventaret. Opsamlinger bruges straks. Returnerer false hvis der ikke er plads.
  modtag(id, ladninger, rul = null) {
    const d = ITEMS[id];
    if (d.type === 'opsamling') { this.virkning(d.brug, d); bus.emit('item_samlet', { id }); return true; }
    // Udstyr på sin plads, hvis den er ledig; ellers (og eliksirer og stave) i rygsækken
    const item = { id, ladninger: ladninger ?? d.ladninger ?? null, ...(rul ? { rul } : {}) };
    const i = erUdstyr(id) ? PLADSER_TYPER.indexOf(d.plads) : -1, j = this.rygsæk.indexOf(null);
    if (i >= 0 && !this.pladser[i]) this.pladser[i] = item;
    else if (j >= 0) this.rygsæk[j] = item;
    else return false;
    this.beregn();
    bus.emit('item_samlet', { id, sj: rul?.sj ?? d.sjældenhed, rul });
    return true;
  }

  smid(i, hvor = 'udstyr') {
    const l = this.liste(hvor), p = l[i];
    if (!p) return null;
    l[i] = null;
    const h = this.helt;
    this.beregn();
    h.hp = Math.min(h.hp, h.maxHp);
    h.mana = Math.min(h.mana, h.manaMax);
    bus.emit('item_smidt', { id: p.id, ladninger: p.ladninger, rul: p.rul, x: h.x, z: h.z });
    return p;
  }

  // Brug et item i en plads. Returnerer en fejltekst hvis det ikke kan bruges.
  brug(i, hvor = 'rygsæk') {
    const l = this.liste(hvor), p = l[i];
    if (!p) return null;
    const d = ITEMS[p.id];
    if (!d.brug) return 'info';
    if (this.helt.død) return 'Your hero has fallen';
    if (this.cooldown > 0) return null;
    const fejl = this.virkning(d.brug, d);
    if (fejl) return fejl;
    this.cooldown = 0.6;
    if (d.type === 'opladning') { p.ladninger -= 1; if (p.ladninger <= 0) l[i] = null; }
    else l[i] = null;
    this.beregn();
    return null;
  }

  virkning(b, d) {
    const h = this.helt;
    if (b.heal) { h.hp = Math.min(h.maxHp, h.hp + b.heal); bus.emit('effekt', { type: 'heal', mål: h, mængde: b.heal }); }
    if (b.mana) { h.mana = Math.min(h.manaMax, h.mana + b.mana); bus.emit('effekt', { type: 'mana', mål: h }); }
    if (b.helOverTid) { this.helOverTid = { pr: b.helOverTid[0], tid: b.helOverTid[1] }; bus.emit('effekt', { type: 'heal', mål: h }); }
    if (b.guld) { this.tilføjGuld(b.guld, h); }
    if (b.xp) { h.fåXp(b.xp); bus.emit('flydetekst', { enhed: h, tekst: `+${b.xp} XP`, klasse: 'xp' }); }
    if (b.bog) this.øgEgenskaber(b.bog);
    if (b.skrift) {
      this.permanent.hp += b.skrift.hp; this.permanent.skade += b.skrift.skade;
      h.hp += b.skrift.hp;
      bus.emit('flydetekst', { enhed: h, tekst: `+${b.skrift.hp} health`, klasse: 'level' });
    }
    if (b.røg) {
      h.skjult = b.røg;
      for (const c of h.verden.creeps) if (!c.død && c.tilstand === 'jagt') c.gåHjem();
      bus.emit('effekt', { type: 'røg', x: h.x, z: h.z });
    }
    if (b.lyn) {
      const mål = h.verden.creeps.filter((c) => !c.død && c.rod.visible && h.afstand(c) < 16).sort((a, c) => h.afstand(a) - h.afstand(c))[0];
      if (!mål) return 'No enemy in range';
      bus.emit('effekt', { type: 'lyn', mål });
      mål.tagSkade(b.lyn, h);
    }
    if (b.hjem) {
      if (h.sving) return 'Your hero is busy';
      h.stop(); h.mål = null;
      h.spil('Spellcast_Raise', { loop: false, gentag: true, fart: 0.9 });
      bus.emit('effekt', { type: 'portal', x: h.x, z: h.z });
      h.sving = { tid: 0, varighed: 2.2, slagTid: 99, ramt: true, vedSlut: () => h.teleporter(h.spawn) };
    }
    return null;
  }

  // Permanente egenskabspoint (bøger og ofringer ved alteret)
  øgEgenskaber(point) {
    const h = this.helt, førHp = h.maxHp, førMana = h.manaMax;
    for (const [n, v] of Object.entries(point)) this.permanent[n] += v;
    h.hp += h.maxHp - førHp;
    h.mana += h.manaMax - førMana;
    const tekst = Object.entries(point).map(([n, v]) => `+${v} ${n.toUpperCase()}`).join(' ');
    bus.emit('flydetekst', { enhed: h, tekst, klasse: 'level' });
    bus.emit('inventar_ændret', {});
  }

  tilføjGuld(n, ved) {
    n = Math.round(n * (1 + (this.bonus?.guldFund ?? 0)));   // Lucky / of Fortune
    this.guld += n;
    bus.emit('flydetekst', { enhed: ved ?? this.helt, tekst: `+${n} gold`, klasse: 'guld' });
  }

  // Samlede bonusser fra udstyr (kun permanent og artefakt tæller)
  beregn() {
    const b = { ...TOM };
    for (const p of this.pladser) {
      if (!p) continue;
      for (const [k, v] of Object.entries(itemInfo(p).bonus)) b[k] = (b[k] ?? 0) + v;
    }
    b.hp += this.permanent.hp;
    b.skade += this.permanent.skade;
    this.bonus = b;
    bus.emit('inventar_ændret', {});
  }

  opdater(dt) {
    this.cooldown = Math.max(0, this.cooldown - dt);
    const h = this.helt;
    if (this.helOverTid && !h.død) {
      h.hp = Math.min(h.maxHp, h.hp + this.helOverTid.pr * dt);
      this.helOverTid.tid -= dt;
      if (this.helOverTid.tid <= 0) this.helOverTid = null;
    }
  }

  // Kaldes når heltens slag rammer: livsstjæl og Tordenøksens lyn
  vedSlag(mål, skade) {
    const h = this.helt, b = this.bonus;
    if (b.livsstjæl) h.hp = Math.min(h.maxHp, h.hp + skade * b.livsstjæl);
    if (b.lynChance && Math.random() < b.lynChance) {
      const ofre = [mål, ...h.verden.creeps.filter((c) => c !== mål && !c.død && c.afstand(mål) < 7).slice(0, 2)];
      for (const c of ofre) { if (c.død) continue; bus.emit('effekt', { type: 'lyn', mål: c }); c.tagSkade(120, h); }
    }
  }

  // Kaldes når helten tager skade: blok og pigskjold. Returnerer den skade der skal tages.
  vedSkade(mængde, kilde) {
    const h = this.helt, b = this.bonus;
    if (b.blok && Math.random() < b.blok) {
      mængde = Math.max(0, mængde - 40);
      bus.emit('flydetekst', { enhed: h, tekst: 'Blocked', klasse: 'immun' });
    }
    if (b.retur && kilde && !kilde.død && h.afstand(kilde) < 4) kilde.tagSkade(Math.round(mængde * b.retur), h);
    return mængde;
  }
}
