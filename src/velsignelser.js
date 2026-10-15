// Velsignelser (Jon, M14d): det helten får for de ånder, der er ofret ved Spirit Altar (aander.js).
// Alteret byder på tre (velsignelsedata.js); man vælger én for prisen i ånder eller betaler for tre nye.
// Auraer løfter soldaterne omkring helten, træk og egenskaber gør helten selv stærkere, og en åndegave
// giver en ekstra aktiv evne på plads 5. Blandes ikke i heltens egne evner — de stiger med skill points.
import { bus } from './events.js';
import { glød } from './aand.js';
import { VELSIGNELSER as V, GAVE_EVNER, OFFER_PRIS, OMVALG_PRIS, MAKS_AURAER } from './velsignelsedata.js';

const AURA = 14;

export class Velsignelser {
  constructor(helt) {
    this.helt = helt;
    this.r = {};            // id -> rang
    this.antal = 0;         // købte velsignelser (prisen stiger)
    this.gave = null;       // åndegaven på plads 5
    this.tilbud = null;     // de tre, alteret byder på lige nu
    this.blod = { stak: 0, tid: 0 };
    this.vindCd = 0; this.skjold = 0; this.skjoldTid = 0;
    bus.on('creep_død', ({ kilde }) => {
      if (kilde !== helt || !this.r.blodtørst) return;
      this.blod.stak = Math.min(5, this.blod.stak + 1); this.blod.tid = 6;
    });
  }

  rang(id) { return this.r[id] ?? 0; }
  get pris() { return OFFER_PRIS(this.antal); }
  get auraer() { return Object.keys(this.r).filter((id) => V[id].type === 'aura'); }

  // Kan denne velsignelse tages (igen)?
  kan(id) {
    const d = V[id], r = this.rang(id);
    if (r >= d.maks) return false;
    if (d.type === 'aura' && !r && this.auraer.length >= MAKS_AURAER) return false;
    if (d.type === 'gave' && this.gave === id) return false;
    return true;
  }

  // Tre forskellige at vælge imellem — helst af forskellig type
  lavTilbud() {
    const mulige = Object.keys(V).filter((id) => this.kan(id)).sort(() => Math.random() - 0.5);
    const valgt = [];
    for (const id of mulige) if (valgt.length < 3 && !valgt.some((v) => V[v].type === V[id].type)) valgt.push(id);
    for (const id of mulige) if (valgt.length < 3 && !valgt.includes(id)) valgt.push(id);
    this.tilbud = valgt;
    return valgt;
  }

  hentTilbud() { return this.tilbud?.filter((id) => this.kan(id)).length ? this.tilbud : this.lavTilbud(); }

  // Beskrivelse af et tilbud: næste rang og hvad den giver
  beskriv(id) {
    const d = V[id], r = this.rang(id) + 1;
    let tekst = d.tekst(r);
    if (d.type === 'gave' && this.gave) tekst += ` Replaces ${V[this.gave].navn}.`;
    return { id, navn: d.navn, ikon: d.ikon, type: d.type, rang: r, maks: d.maks, tekst };
  }

  køb(id, ånder) {
    if (!this.hentTilbud().includes(id) || !this.kan(id)) return 'That blessing is not offered';
    if (ånder.ofret < this.pris) return `Needs ${this.pris} spirits — ${ånder.ofret} offered`;
    const h = this.helt, førHp = h.maxHp, førMana = h.manaMax;
    ånder.ofret -= this.pris;
    this.antal += 1;
    if (V[id].type === 'gave') { if (this.gave) delete this.r[this.gave]; this.gave = id; h.evner.cooldowns[5] = 0; }
    this.r[id] = this.rang(id) + 1;
    h.inventar.beregn();
    h.hp = Math.min(h.maxHp, h.hp + Math.max(0, h.maxHp - førHp));
    h.mana = Math.min(h.manaMax, h.mana + Math.max(0, h.manaMax - førMana));
    this.tilbud = null;
    bus.emit('effekt', { type: 'ascension', x: h.x, z: h.z, farve: 0x9fe8ff });
    bus.emit('velsignelse', { helt: h, id, rang: this.r[id] });
    bus.emit('besked', `The spirits bless your hero: ${V[id].navn}${this.r[id] > 1 ? ` ${this.r[id]}` : ''}`);
    return null;
  }

  omvalg(ånder) {
    if (ånder.ofret < OMVALG_PRIS) return `Needs ${OMVALG_PRIS} spirits`;
    ånder.ofret -= OMVALG_PRIS;
    this.lavTilbud();
    return null;
  }

  // Bonusser til inventarets samlede bonus (inventar.beregn)
  bonus() {
    const b = {};
    for (const [id, r] of Object.entries(this.r)) {
      if (!V[id].bonus) continue;
      for (const [k, v] of Object.entries(V[id].bonus(r, this.helt))) b[k] = (b[k] ?? 0) + v;
    }
    return b;
  }

  // Auraen for en soldat tæt på helten: { skade, hast, rustning, regen } eller null
  aura(u) {
    const h = this.helt;
    if (!this.auraer.length || h.død || h.afstand(u) > AURA) return null;
    return { skade: 0.12 * this.rang('auraKommando'), hast: 0.1 * this.rang('auraHast'), rustning: 2 * this.rang('auraVærn'), regen: 0.01 * this.rang('auraVærn') };
  }

  angrebsBonus() { return this.blod.tid > 0 ? 0.08 * this.blod.stak : 0; }

  // Åndeskjoldet tager skaden først
  vedSkade(mængde) {
    if (this.skjold <= 0 || mængde <= 0) return mængde;
    const tag = Math.min(this.skjold, mængde);
    this.skjold -= tag;
    if (this.skjold <= 0) this.slukSkjold();
    return mængde - tag;
  }

  slukSkjold() { this.skjold = 0; this.skjoldTid = 0; if (this.skjoldGlød) this.skjoldGlød.visible = false; }

  opdater(dt, spil) {
    const h = this.helt;
    if (this.blod.tid > 0 && (this.blod.tid -= dt) <= 0) this.blod.stak = 0;
    this.vindCd = Math.max(0, this.vindCd - dt);
    if (this.skjoldTid > 0 && (this.skjoldTid -= dt) <= 0) this.slukSkjold();
    if (this.skjoldGlød?.visible) this.skjoldGlød.material.opacity = 0.35 + 0.15 * Math.sin(h.tid * 6);
    if (h.død) return;
    // Second Wind
    if (this.r.andenVind && this.vindCd <= 0 && h.hp < h.maxHp * 0.25) {
      this.vindCd = 60;
      h.hp = Math.min(h.maxHp, h.hp + h.maxHp * 0.35);
      bus.emit('effekt', { type: 'heal', mål: h, mængde: Math.round(h.maxHp * 0.35) });
      bus.emit('flydetekst', { enhed: h, tekst: 'Second Wind!', klasse: 'level' });
    }
    // Aura of Warding heler soldaterne
    const r = this.rang('auraVærn');
    if (r) for (const s of spil.base.soldater) if (!s.død && h.afstand(s) <= AURA) s.hp = Math.min(s.maxHp, s.hp + s.maxHp * 0.01 * r * dt);
  }

  // Plads 5 i evnebjælken
  gaveInfo(cd) {
    if (!this.gave) return null;
    const g = GAVE_EVNER[this.gave];
    return { id: this.gave, ...g, gave: true, oplåst: true, rang: 1, cd, cdMax: g.cd };
  }

  gem() { return { r: this.r, antal: this.antal, gave: this.gave, tilbud: this.tilbud }; }
  gendan(g) {
    if (!g) return;
    this.r = { ...g.r }; this.antal = g.antal ?? 0; this.gave = g.gave ?? null; this.tilbud = g.tilbud ?? null;
    this.helt.inventar.beregn();
  }
}

// Åndegaverne som evner (kaldes fra Evner.brug med plads 5)
export const gaveMetoder = {
  åndeskjold() {
    const h = this.helt, v = h.velsignelser;
    v.skjold = Math.round(250 * h.evneStyrke()); v.skjoldTid = 8;
    if (!v.skjoldGlød) { v.skjoldGlød = glød(0x9fe8ff, 3.2, 0.45); v.skjoldGlød.position.y = 1.2; h.rod.add(v.skjoldGlød); }
    v.skjoldGlød.visible = true;
    bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, farve: 0x9fe8ff });
    this.heltRåb();
  },

  åndespring() {
    const h = this.helt;
    const mål = this.fjenderInden(14).filter((c) => !c.erBygning).sort((a, b) => h.afstand(a) - h.afstand(b))[0];
    if (!mål) return 'No enemy within reach';
    bus.emit('effekt', { type: 'portal', x: h.x, z: h.z });
    const v = Math.atan2(h.x - mål.x, h.z - mål.z), d = mål.radius + 1.2;
    h.teleporter({ x: mål.x + Math.sin(v) * d, z: mål.z + Math.cos(v) * d });
    h.vend(mål.x, mål.z); h.mål = mål;
    mål.tagSkade(Math.round(h.slagSkade() * 2 * h.evneStyrke()), h);
    bus.emit('effekt', { type: 'tungtSlag', mål });
    bus.emit('effekt', { type: 'portal', x: h.x, z: h.z });
    h.cooldown = h.angrebsTid();
  },

  åndevrede() {
    const h = this.helt, fjender = this.fjenderInden(7);
    if (!fjender.length) return 'No enemies in range';
    this.heltRåb();
    bus.emit('effekt', { type: 'evne', x: h.x, z: h.z, farve: 0x9fe8ff });
    bus.emit('effekt', { type: 'stomp', x: h.x, z: h.z, radius: 7 });
    for (const c of fjender) c.tagSkade(Math.round(160 * h.evneStyrke()), h);
  },
};
