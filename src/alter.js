// Spirit Altar (Jon, M14d): det eneste sted, helten kan genoplives — for guld og tid, som i WC3 — og stedet,
// hvor ånderne ofres (aander.js) og bliver til velsignelser (velsignelser.js). Panelet ved alteret viser
// genoplivning, de tre velsignelser alteret byder på (tryk = læs, tryk igen = vælg) og "New offers".
import { bus } from './events.js';
import { prisHtml } from './udviklinghud.js';
import { OMVALG_PRIS, TYPE_NAVN } from './velsignelsedata.js';

const emojiIkon = new Map();
export function emoji(tegn) {
  if (emojiIkon.has(tegn)) return emojiIkon.get(tegn);
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const ctx = c.getContext('2d');
  ctx.font = '44px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(tegn, 32, 36);
  const url = c.toDataURL();
  emojiIkon.set(tegn, url);
  return url;
}

export class Alter {
  constructor(spil) {
    this.spil = spil;
    this.genopliv = null;   // { bygning, tid, varighed }
    this.valgt = null;      // velsignelsen, der er trykket én gang på
    bus.on('helt_død', () => { this.valgt = null; if (this.valgtAlter()) this.spil.kommandoHud?.byg(); });
    document.getElementById('ånder-knap')?.addEventListener('click', (e) => { e.stopPropagation(); this.vis(); });
    this.tælTid = 0;
  }

  // Tælleren under helteknappen: ånder helten bærer (og hvor mange der er ofret)
  tæl() {
    const å = this.spil.ånder, v = this.spil.helt.velsignelser, k = document.getElementById('ånder-knap');
    if (!k) return;
    const nøgle = `${å.båret}/${å.ofret}/${v.pris}`;
    if (nøgle === this.sidstTal) return;
    this.sidstTal = nøgle;
    k.classList.toggle('skjult', !å.båret && !å.ofret);
    k.classList.toggle('kan', å.ofret >= v.pris);
    document.getElementById('ånder-tal').textContent = å.båret || å.ofret;
    document.getElementById('ånder-tekst').textContent = å.båret ? (å.ofret ? `carried · ${å.ofret} offered` : 'carried') : 'offered';
  }

  get altre() { return this.spil.base.bygninger.filter((b) => b.data.alter && b.færdig && !b.død); }
  valgtAlter() { const v = this.spil.valg.valgt; return v?.data?.alter ? v : null; }
  pris() { return { guld: 100 + 30 * this.spil.helt.level }; }
  varighed() { return 12 + 2.5 * this.spil.helt.level; }

  // Tekst på dødsskærmen og i panelet
  status() {
    if (this.genopliv) return `Your hero is returning at the Spirit Altar… ${Math.floor((this.genopliv.tid / this.genopliv.varighed) * 100)}%`;
    if (!this.altre.length) return 'Build a Spirit Altar — only there can your hero be revived';
    return `Revive your hero at your Spirit Altar for ${this.pris().guld} gold`;
  }

  start(b) {
    const h = this.spil.helt;
    if (!h.død) return 'Your hero is alive';
    if (this.genopliv) return 'Your hero is already returning';
    const pris = this.pris(), øko = this.spil.økonomi, mangler = øko.mangler(pris);
    if (mangler) return mangler;
    øko.betal(pris);
    this.genopliv = { bygning: b, tid: 0, varighed: this.varighed(), pris };
    bus.emit('effekt', { type: 'kiste', x: b.x, z: b.z });
    bus.emit('besked', `The altar calls your hero back — ${Math.round(this.genopliv.varighed)} seconds`);
    return null;
  }

  opdater(dt) {
    if ((this.tælTid += dt) > 0.25) { this.tælTid = 0; this.tæl(); }
    const g = this.genopliv;
    if (!g) return;
    const b = g.bygning;
    if (b.død) { this.spil.økonomi.guld += g.pris.guld; this.genopliv = null; return bus.emit('besked', 'The altar has fallen — your hero cannot return there'); }
    g.tid += dt;
    if (g.tid < g.varighed) return;
    this.genopliv = null;
    const h = this.spil.helt;
    h.spawn = { x: b.x + 4, z: b.z + 6 };
    h.rejsDig();
    bus.emit('effekt', { type: 'ascension', x: h.x, z: h.z, farve: 0x9fe8ff });
  }

  // Helteknappen, mens helten er død: vis alteret
  vis() {
    const a = this.genopliv?.bygning ?? this.altre[0];
    if (!a) return bus.emit('besked', this.status());
    this.spil.valg.vælg(a);
    this.spil.rig.følger = false;
    this.spil.rig.fokus.set(a.x, 0, a.z);
  }

  // Knapperne i alterets panel (kommandohud.js)
  knapper(hud, rod, b) {
    const s = this.spil, h = s.helt, v = h.velsignelser, ånder = s.ånder;
    if (h.død && !this.genopliv) hud.knap(rod, emoji('✨'), 'Revive hero', prisHtml(this.pris()), () => { const f = this.start(b); if (f) bus.emit('besked', f); hud.byg(); }, 'alter-genopliv');
    for (const id of v.hentTilbud()) {
      const d = v.beskriv(id);
      const k = hud.knap(rod, emoji(d.ikon), d.navn + (d.maks > 1 ? ` ${d.rang}` : ''), `<span class="ånd-pris">👻 ${v.pris}</span>`, () => {
        if (this.valgt !== id) { this.valgt = id; bus.emit('besked', `${TYPE_NAVN[d.type]}: ${d.tekst} Tap again to choose it.`); return hud.byg(); }
        const f = v.køb(id, ånder);
        if (f) return bus.emit('besked', f);
        this.valgt = null; hud.byg();
      }, `vel-${id}`);
      k.classList.add('velsignelse', `vel-${d.type}`);
      if (this.valgt === id) k.classList.add('valgt');
      if (ånder.ofret < v.pris) k.classList.add('dyr');
    }
    const ny = hud.knap(rod, emoji('🎲'), 'New offers', `<span class="ånd-pris">👻 ${OMVALG_PRIS}</span>`, () => { const f = v.omvalg(ånder); if (f) bus.emit('besked', f); this.valgt = null; hud.byg(); }, 'vel-ny');
    if (ånder.ofret < OMVALG_PRIS) ny.classList.add('dyr');
  }

  // Statuslinjen under alterets navn
  panelStatus() {
    const s = this.spil, v = s.helt.velsignelser, å = s.ånder;
    if (s.helt.død) return this.status();
    const bæres = å.båret ? ` · ${å.båret} carried by your hero` : '';
    return `Spirits offered: ${å.ofret}${bæres} · next blessing ${v.pris}. Slay foes, carry their spirits home — they are offered here.`;
  }

  gem() {
    const g = this.genopliv;
    return { død: this.spil.helt.død, genopliv: g ? { tid: g.tid, varighed: g.varighed, pris: g.pris, b: this.spil.base.bygninger.indexOf(g.bygning) } : null };
  }

  // En død helt forbliver død, når spillet fortsættes
  gendan(g) {
    if (!g?.død) return;
    this.spil.helt.dø();
    const d = g.genopliv, b = d && this.spil.base.bygninger[d.b];
    if (b) this.genopliv = { bygning: b, tid: d.tid, varighed: d.varighed, pris: d.pris };
  }
}
