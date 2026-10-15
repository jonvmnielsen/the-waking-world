// Skærmens opbygning efter hvad der er valgt (Jons ønsker):
// - Heltens evner og rygsæk vises kun, når helten er valgt.
// - Indstillinger bestemmer om evner og rygsæk altid vises; ellers åbner én knap i højre side dem.
// - "Deselect" fravælger alt, så man kan se sig omkring uden at flytte nogen.
// - Menuen lægger sig over alt andet (undtagen ressourcerne øverst) og rummer indstillingerne.
import { bus } from './events.js';
import { indstillinger, sætIndstilling } from './indstillinger.js';

const $ = (id) => document.getElementById(id);
const krop = document.body.classList;

export class Skærm {
  constructor(spil) {
    this.spil = spil;
    bus.on('valg', () => this.valgÆndret());
    bus.on('indstillinger', () => this.anvend());
    bus.on('luk_menu', () => this.menu(false));

    $('fravælg').addEventListener('click', (e) => { e.stopPropagation(); spil.valg.fravælg(); $('heltekort').classList.remove('vis'); $('helteknap').classList.remove('åben'); });
    $('rygsæk-knap').addEventListener('click', (e) => { e.stopPropagation(); krop.toggle('rygsæk-åben'); });
    $('handling-knap').addEventListener('click', (e) => { e.stopPropagation(); krop.toggle('handling-åben'); });
    $('menuknap').addEventListener('click', (e) => { e.stopPropagation(); this.menu(!krop.contains('menu-åben')); });
    $('menu-luk').addEventListener('click', () => this.menu(false));
    $('menu-bag').addEventListener('click', () => this.menu(false));
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') { this.menu(false); spil.valg.fravælg(); } });

    // Indstillinger
    const zoom = $('ind-zoom');
    zoom.value = indstillinger.zoom;
    zoom.addEventListener('input', () => sætIndstilling('zoom', Number(zoom.value)));
    for (const [id, navn] of [['ind-evner', 'evner'], ['ind-rygsæk', 'rygsæk']]) {
      $(id).checked = indstillinger[navn];
      $(id).addEventListener('change', () => sætIndstilling(navn, $(id).checked));
    }
    $('ind-lyd').addEventListener('change', () => { if ((spil.lyd?.til ?? true) !== $('ind-lyd').checked) spil.lyd?.skift(); });
    $('ind-musik').addEventListener('change', () => { if ((spil.musik?.til ?? true) !== $('ind-musik').checked) spil.musik?.skift(); });

    this.anvend();
    this.valgÆndret();
  }

  anvend() {
    krop.toggle('altid-evner', indstillinger.evner);
    krop.toggle('altid-rygsæk', indstillinger.rygsæk);
    $('zoom-tal').textContent = `${Math.round(indstillinger.zoom * 100)}%`;
  }

  valgÆndret() {
    const v = this.spil.valg;
    krop.toggle('valg-helt', v.erHelt);
    krop.toggle('valg-ingen', v.ingen);
    krop.toggle('valg-andet', !v.erHelt && !v.ingen);
    if (!v.erHelt) krop.remove('rygsæk-åben', 'handling-åben');
    $('fravælg').hidden = v.ingen;
  }

  menu(åben) {
    krop.toggle('menu-åben', åben);
    if (åben) { $('ind-lyd').checked = this.spil.lyd?.til ?? true; $('ind-musik').checked = this.spil.musik?.til ?? true; }
    if (åben) { $('heltekort').classList.remove('vis'); $('helteknap').classList.remove('åben'); }
  }
}
