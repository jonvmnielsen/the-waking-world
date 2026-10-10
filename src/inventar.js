// Heltens inventar: 6 pladser, samlede bonusser fra udstyr og brug af items (GDD 8.1–8.2).
import { ITEMS } from './itemdata.js';
import { bus } from './events.js';

export const PLADSER = 6;
const TOM = { skade: 0, rustning: 0, hp: 0, mana: 0, angrebsfart: 0, hpRegen: 0, manaRegen: 0, livsstjæl: 0, retur: 0, blok: 0, lynChance: 0 };

export class Inventar {
  constructor(helt) {
    this.helt = helt;
    this.pladser = new Array(PLADSER).fill(null);   // { id, ladninger }
    this.bonus = { ...TOM };
    this.permanent = { hp: 0, skade: 0 };             // fra skrifter
    this.cooldown = 0;
    this.helOverTid = null;                           // { pr, tid }
  }

  get fuld() { return this.pladser.every(Boolean); }

  // Guld deles med resten af økonomien (basen)
  get guld() { return this.helt.verden.økonomi.guld; }
  set guld(v) { this.helt.verden.økonomi.guld = v; }

  // Læg et item i inventaret. Opsamlinger bruges straks. Returnerer false hvis der ikke er plads.
  modtag(id, ladninger) {
    const d = ITEMS[id];
    if (d.type === 'opsamling') { this.virkning(d.brug, d); bus.emit('item_samlet', { id }); return true; }
    const i = this.pladser.indexOf(null);
    if (i < 0) return false;
    this.pladser[i] = { id, ladninger: ladninger ?? d.ladninger ?? null };
    this.beregn();
    bus.emit('item_samlet', { id });
    return true;
  }

  smid(i) {
    const p = this.pladser[i];
    if (!p) return null;
    this.pladser[i] = null;
    const h = this.helt;
    this.beregn();
    h.hp = Math.min(h.hp, h.maxHp);
    h.mana = Math.min(h.mana, h.manaMax);
    bus.emit('item_smidt', { id: p.id, ladninger: p.ladninger, x: h.x, z: h.z });
    return p;
  }

  // Brug et item i en plads. Returnerer en fejltekst hvis det ikke kan bruges.
  brug(i) {
    const p = this.pladser[i];
    if (!p) return null;
    const d = ITEMS[p.id];
    if (!d.brug) return 'info';
    if (this.helt.død) return 'Helten er faldet';
    if (this.cooldown > 0) return null;
    const fejl = this.virkning(d.brug, d);
    if (fejl) return fejl;
    this.cooldown = 0.6;
    if (d.type === 'opladning') { p.ladninger -= 1; if (p.ladninger <= 0) this.pladser[i] = null; }
    else this.pladser[i] = null;
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
    if (b.skrift) {
      this.permanent.hp += b.skrift.hp; this.permanent.skade += b.skrift.skade;
      h.hp += b.skrift.hp;
      bus.emit('flydetekst', { enhed: h, tekst: `+${b.skrift.hp} liv`, klasse: 'level' });
    }
    if (b.røg) {
      h.skjult = b.røg;
      for (const c of h.verden.creeps) if (!c.død && c.tilstand === 'jagt') c.gåHjem();
      bus.emit('effekt', { type: 'røg', x: h.x, z: h.z });
    }
    if (b.lyn) {
      const mål = h.verden.creeps.filter((c) => !c.død && c.rod.visible && h.afstand(c) < 16).sort((a, c) => h.afstand(a) - h.afstand(c))[0];
      if (!mål) return 'Ingen fjende inden for rækkevidde';
      bus.emit('effekt', { type: 'lyn', mål });
      mål.tagSkade(b.lyn, h);
    }
    if (b.hjem) {
      if (h.sving) return 'Helten er optaget';
      h.stop(); h.mål = null;
      h.spil('Spellcast_Raise', { loop: false, gentag: true, fart: 0.9 });
      bus.emit('effekt', { type: 'portal', x: h.x, z: h.z });
      h.sving = { tid: 0, varighed: 2.2, slagTid: 99, ramt: true, vedSlut: () => h.teleporter(h.spawn) };
    }
    return null;
  }

  tilføjGuld(n, ved) {
    this.guld += n;
    bus.emit('flydetekst', { enhed: ved ?? this.helt, tekst: `+${n} guld`, klasse: 'guld' });
  }

  // Samlede bonusser fra udstyr (kun permanent og artefakt tæller)
  beregn() {
    const b = { ...TOM };
    for (const p of this.pladser) {
      if (!p) continue;
      for (const [k, v] of Object.entries(ITEMS[p.id].bonus ?? {})) b[k] += v;
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
      bus.emit('flydetekst', { enhed: h, tekst: 'Blokeret', klasse: 'immun' });
    }
    if (b.retur && kilde && !kilde.død && h.afstand(kilde) < 4) kilde.tagSkade(Math.round(mængde * b.retur), h);
    return mængde;
  }
}
