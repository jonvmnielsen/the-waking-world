// Arbejderens høst (Jons regler): gå hen til en kilde man faktisk kan nå, høst, bær hjem og fortsæt
// med samme slags ressource inden for 2 hex af den forrige kilde. Er der ikke mere i området,
// stopper arbejderen og bliver ledig. En kilde der ikke kan nås, opgives i stedet for at prøve igen og igen.
// Blandes ind i Arbejder-klassen.
import { bus } from './events.js';
import { RES_NAVN, BÆR, HØST_TID } from './okonomi.js';
import { HEX_BREDDE } from './hexgrid.js';

const OMRÅDE = 2 * HEX_BREDDE;     // hvor langt fra den forrige kilde arbejderen leder efter den næste (Jon: 2 hex)
let sidstBesked = -1e9;

// Hvor mange andre kilder af samme slags der er inden for området (til at finde skove og stenbrud)
function tætte(kort, r) {
  let n = 0;
  if (!r.f) return 0;
  for (const g of [r.f, ...kort.naboer(r.f)]) for (const o of g?.ressourcer ?? []) if (o !== r && o.type === r.type && o[o.type] > 0 && Math.hypot(o.x - r.x, o.z - r.z) < OMRÅDE) n++;
  return n;
}   // hvor langt fra den forrige kilde arbejderen leder efter den næste

export const høstMetoder = {
  // Spillerens ordre: høst netop denne kilde
  kommandoHøst(k) {
    this.nulstil();
    this.opgivne = new Set();
    this.sætKilde(k);
  },

  // Knappen "Get ...": den nærmeste kilde man kan nå, uanset hvor langt væk
  høstNærmeste(type) {
    this.opgivne = new Set();
    const k = this.find(type, this.x, this.z, 200, true);
    if (k) { this.nulstil(); this.sætKilde(k); } else this.bliverLedig(`There is no more ${RES_NAVN[type]} nearby`);
  },

  sætKilde(k) {
    this.kilde = k;
    this.område = { x: k.x, z: k.z };
    // Bærer arbejderen allerede noget, afleveres det først; derefter går den til kilden
    if (this.bærer?.mængde > 0) this.gåHjem();
    else this.gåTilKilde();
  },

  // Den næste kilde af samme slags tæt på den forrige; ellers ledig
  fortsætHøst(type) {
    const o = this.område ?? { x: this.x, z: this.z };
    const k = this.find(type, o.x, o.z, OMRÅDE);
    if (k) this.sætKilde(k);
    else this.bliverLedig(`A worker is idle — no more ${RES_NAVN[type]} close by`);
  },

  // Nærmeste kilde man kan nå. Træer og sten deles: helst ikke flere end to arbejdere om samme,
  // så en flok fordeler sig i skoven i stedet for at stå om ét træ
  // klynge = knappen "Get ...": helst en skov eller et stenbrud (flere kilder tæt sammen), så arbejderen kan blive der
  find(type, x, z, maks, klynge = false) {
    const kilder = this.base.kilder;
    const ok = (r) => !this.opgivne?.has(r) && this.kanNå(r) && (!klynge || type === 'guld' || tætte(this.verden.kort, r) >= 3);
    if (type === 'guld') return kilder.nærmeste(type, x, z, maks, ok);
    const antal = new Map();
    for (const a of this.base.arbejdere) if (a !== this && a.kilde) antal.set(a.kilde.kilde, (antal.get(a.kilde.kilde) ?? 0) + 1);
    return kilder.nærmeste(type, x, z, maks, (r) => ok(r) && (antal.get(r) ?? 0) < 2) ?? kilder.nærmeste(type, x, z, maks, ok)
      ?? (klynge ? this.find(type, x, z, maks) : null);
  },

  bliverLedig(besked) {
    this.nulstil();
    this.tilstand = 'ledig';
    const nu = performance.now();
    if (besked && nu - sidstBesked > 5000) { sidstBesked = nu; bus.emit('besked', besked); }
  },

  // Kan kilden nås? Står den i et blokeret felt (inde i skoven eller i et stenbrud), skal et nabofelt være frit
  kanNå(o) {
    if (!o.f) return true;
    const kort = this.verden.kort;
    return o.f.gåbar || kort.naboer(o.f).some((n) => n.gåbar);
  },

  gåTilKilde() {
    this.tilstand = 'tilKilde';
    const k = this.kilde, kort = this.verden.kort;
    const felt = k.type === 'guld' ? null : (!k.kilde.f?.gåbar && k.kilde.f);
    let ok;
    if (k.type === 'guld') ok = this.gåTilBygning(k, [kort.hent(k.kilde.q, k.kilde.r)].filter(Boolean));
    else if (felt) {
      // En fri plads op ad feltet, nærmest kilden selv
      this.målPunkt = null;
      for (const p of kort.kantPunkter([felt], k).slice(0, 4)) if (this.gåTil(p.x, p.z)) { this.målPunkt = p; ok = true; break; }
    } else {
      this.målPunkt = null;
      const dx = this.x - k.x, dz = this.z - k.z, d = Math.hypot(dx, dz) || 1, r = k.r + 1.2;
      ok = this.gåTil(k.x + (dx / d) * r, k.z + (dz / d) * r) || d < r + 1;
    }
    if (!ok) this.opgivKilde();
  },

  // Fremme ved kilden: tæt på den, eller stået stille på den plads vi gik efter
  vedKilde() {
    const k = this.kilde, d = Math.hypot(k.x - this.x, k.z - this.z);
    if (d <= (k.type === 'guld' ? 9.5 : k.r + 2.6)) return true;
    if (this.bevæger) return false;
    if (this.målPunkt) return Math.hypot(this.målPunkt.x - this.x, this.målPunkt.z - this.z) < 3;
    return d <= k.r + 4;
  },

  opgivKilde() {
    const type = this.kilde.type;
    (this.opgivne ??= new Set()).add(this.kilde.kilde);
    this.fortsætHøst(type);
  },

  opdaterTilKilde(dt) {
    this.opdaterBevægelse(dt);
    if (!(this.kilde.kilde[this.kilde.type] > 0)) return this.fortsætHøst(this.kilde.type);   // en anden tog det sidste
    if (this.vedKilde()) this.startHøst();
    else if (!this.bevæger) this.opgivKilde();
  },

  startHøst() {
    const k = this.kilde;
    this.stop();
    this.vend(k.x, k.z);
    this.timer = HØST_TID[k.type];
    if (k.type === 'guld') { this.tilstand = 'iMine'; this.rod.visible = false; }
    else { this.tilstand = 'høster'; this.spil('1H_Melee_Attack_Chop', { fart: k.type === 'sten' ? 0.8 : 1 }); }
  },

  færdigHøst() {
    const k = this.kilde;
    // I verdenstilstanden Fald giver minerne mindre (GDD 12); forskning giver mere (udvikling.js)
    const bær = (k.type === 'guld' ? Math.round(BÆR.guld * (this.verden.guldFaktor ?? 1)) : BÆR[k.type]) + (this.verden.udvikling?.bær(k.type) ?? 0);
    const m = this.base.kilder.høst(k, k.type, bær);
    this.rod.visible = true;
    if (m <= 0) return this.fortsætHøst(k.type);
    this.sætByrde({ type: k.type, mængde: m });
    this.spil('PickUp', { loop: false, gentag: true, fart: 1.6 });
    this.gåHjem();
  },

  // Efter aflevering: tilbage til samme kilde, eller den næste i området
  efterAflevering(type) {
    const k = this.kilde;
    if (k && (k.kilde[k.type] ?? 0) > 0) this.gåTilKilde();
    else this.fortsætHøst(k?.type ?? type);
  },
};
