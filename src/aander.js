// Ånder (Jon, M14d): fjender, der falder for spillerens side, efterlader en lysende ånd. Helten samler den op
// ved at gå hen over den og bærer den — men bærer den kun. Når helten kommer hjem til et Spirit Altar,
// ofres ånderne dér (alter.js) og kan bruges på velsignelser. Dør helten undervejs, falder alt, den bærer,
// til jorden der, hvor den faldt. Man kan hente det igen, men fjendens soldater, der kommer forbi, æder det,
// og efter et stykke tid forsvinder det. Bring din høst hjem.
import { bus } from './events.js';
import { glød } from './aand.js';

const SAML = 5.5, ÆD = 3.2, LEVETID = 90, TABT_LEVETID = 180, ALTER_AFSTAND = 11;

export class Ånder {
  constructor(spil) {
    this.spil = spil;
    this.båret = 0;   // på helten
    this.ofret = 0;   // ofret ved alteret, kan bruges på velsignelser
    this.kugler = [];
    bus.on('creep_død', ({ creep, kilde }) => this.vedDød(creep, kilde));
    bus.on('helt_død', ({ helt }) => this.tab(helt));
  }

  get egen() { const h = this.spil.helt; return (k) => k && (k === h || k.side === 'egen'); }

  vedDød(c, kilde) {
    if (!this.egen(kilde) || c.side === 'egen') return;
    const sult = 1 + 0.5 * (this.spil.helt.velsignelser?.rang('åndesult') ?? 0);
    if (c.erBygning) return;
    let n = c.erHelt ? 15 : c.boss ? 12 : Math.max(1, c.level ?? 1);
    if (c.champion) n *= 2;
    this.læg(c.x, c.z, Math.round(n * sult), false);
  }

  // Læg ånd på jorden (lægges sammen med en kugle tæt på)
  læg(x, z, n, tabt) {
    const nær = !tabt && this.kugler.find((k) => !k.tabt && Math.hypot(k.x - x, k.z - z) < 3);
    if (nær) { nær.n += n; nær.tid = 0; this.størrelse(nær); return; }
    const g = glød(tabt ? 0xffe7a0 : 0x9fe8ff, 1, 0.95);
    this.spil.verden.scene.add(g);
    const k = { x, z, n, tid: 0, tabt, g, fase: Math.random() * 6 };
    this.størrelse(k);
    this.kugler.push(k);
  }

  størrelse(k) { k.g.scale.setScalar((k.tabt ? 2.6 : 1.4) + Math.min(2.5, Math.sqrt(k.n) * 0.35)); }

  fjernKugle(k) { this.spil.verden.scene.remove(k.g); k.g.material.dispose(); this.kugler.splice(this.kugler.indexOf(k), 1); }

  tab(h) {
    if (this.båret <= 0) return;
    this.læg(h.x, h.z, this.båret, true);
    bus.emit('krønike', { titel: 'Spirits scattered', tekst: `${this.båret} spirits fell with your hero. Take them back before the enemy does.`, x: h.x, z: h.z, farve: '#ffe7a0', vigtig: true });
    this.båret = 0;
  }

  opdater(dt) {
    const s = this.spil, h = s.helt, fjender = s.modstander?.levende ?? [];
    for (const k of [...this.kugler]) {
      k.tid += dt; k.fase += dt * 2.2;
      k.g.position.set(k.x, 1.3 + Math.sin(k.fase) * 0.35, k.z);
      k.g.visible = s.taage?.erUdforsket?.(k.x, k.z) ?? true;
      const levetid = k.tabt ? TABT_LEVETID : LEVETID;
      if (k.tid > levetid - 10) k.g.material.opacity = Math.max(0, (levetid - k.tid) / 10);
      if (k.tid >= levetid) { this.fjernKugle(k); continue; }
      if (!h.død && Math.hypot(h.x - k.x, h.z - k.z) < SAML) {
        this.båret += k.n;
        bus.emit('flydetekst', { enhed: h, tekst: `+${k.n} spirit${k.n === 1 ? '' : 's'}`, klasse: 'ekko' });
        bus.emit('effekt', { type: 'samlet', x: k.x, z: k.z, farve: 0x9fe8ff });
        this.fjernKugle(k);
        continue;
      }
      // Fjendens soldater æder ånder, de kommer forbi
      const æder = fjender.find((e) => !e.død && Math.hypot(e.x - k.x, e.z - k.z) < ÆD);
      if (æder) {
        if (k.tabt) bus.emit('besked', 'The enemy has devoured your lost spirits');
        bus.emit('effekt', { type: 'samlet', x: k.x, z: k.z, farve: 0xff3a2a });
        this.fjernKugle(k);
      }
    }
    // Ved alteret ofres det, helten bærer
    if (!h.død && this.båret > 0) {
      const a = s.base.bygninger.find((b) => b.data.alter && b.færdig && !b.død && Math.hypot(b.x - h.x, b.z - h.z) < ALTER_AFSTAND);
      if (a) {
        this.ofret += this.båret;
        bus.emit('flydetekst', { enhed: h, tekst: `${this.båret} spirits offered`, klasse: 'level' });
        bus.emit('effekt', { type: 'kiste', x: a.x, z: a.z });
        this.båret = 0;
      }
    }
  }

  gem() { return { båret: this.båret, ofret: this.ofret }; }
  gendan(g) { if (g) { this.båret = g.båret ?? 0; this.ofret = g.ofret ?? 0; } }
}
