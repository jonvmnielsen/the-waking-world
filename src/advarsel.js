// Angrebsadvarsel (Jons ønske): bliver noget af dit angrebet, blinker skærmens kant rødt,
// og minimappet viser en rød, blinkende plet der hvor det sker.
// Kanten blinker når angrebet sker uden for skærmen, rammer en bygning, eller helten er i fare.
import { ADVARSEL } from './stemmedata.js';
import { SPILLER } from './racer.js';
import { bus } from './events.js';

const LIVSTID = 8;        // sekunder en plet blinker på kortet
const SAMME_STED = 28;    // angreb tættere på end dette hører til samme plet

export class Advarsel {
  constructor(spil, overlay) {
    this.spil = spil;
    this.pletter = [];   // { x, z, tid }
    this.sidstKant = -99;
    this.el = document.getElementById('angreb');
    bus.on('skade', ({ mål, mængde, kilde }) => {
      if (!(mængde > 0) || !kilde || kilde.side === 'egen' || kilde === spil.helt) return;
      if (mål !== spil.helt && mål.side !== 'egen') return;
      this.angreb(mål, overlay);
    });
  }

  get nu() { return this.spil.ur.tid; }

  angreb(mål, overlay) {
    const nu = this.nu, h = this.spil.helt;
    const plet = this.pletter.find((p) => Math.hypot(p.x - mål.x, p.z - mål.z) < SAMME_STED);
    if (plet) { plet.tid = nu; plet.x = mål.x; plet.z = mål.z; } else this.pletter.push({ x: mål.x, z: mål.z, tid: nu });
    const s = overlay.skærm(mål.x, 1, mål.z), b = innerWidth, hh = innerHeight;
    const udenfor = !s.synlig || s.x < 0 || s.y < 0 || s.x > b || s.y > hh;
    const fare = mål === h && h.hp < h.maxHp * 0.3;
    if ((udenfor && !plet) || (mål.felter && !plet) || (fare && nu - this.sidstKant > 6)) this.blink(mål);
  }

  blink(mål) {
    this.sidstKant = this.nu;
    this.el.classList.remove('vis'); void this.el.offsetWidth; this.el.classList.add('vis');
    const st = ADVARSEL[SPILLER.id] ?? ADVARSEL.tide;   // i racens egen stemme (stemmedata.js)
    if (mål.felter) bus.emit('besked', st.bygning(mål.data.navn));
    else if (mål === this.spil.helt) bus.emit('besked', st.helt);
    else if (mål.side === 'egen') bus.emit('besked', st.enheder);
  }

  // Til minimappet: aktive pletter med blink (0–1)
  aktive() {
    const nu = this.nu;
    this.pletter = this.pletter.filter((p) => nu - p.tid < LIVSTID);
    return this.pletter.map((p) => ({ ...p, styrke: Math.floor((nu - p.tid) * 4) % 2 ? 0.35 : 1 }));
  }
}
