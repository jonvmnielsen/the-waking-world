// Spillerens indstillinger (gemmes i browseren): udsyn/zoom og hvad der altid vises på skærmen.
import { bus } from './events.js';

const NØGLE = 'tww-indstillinger';
const STANDARD = { zoom: 1.3, evner: true, rygsæk: false };

export const indstillinger = { ...STANDARD };
try { Object.assign(indstillinger, JSON.parse(localStorage.getItem(NØGLE)) ?? {}); } catch { /* ingen lagring */ }

export function sætIndstilling(navn, værdi) {
  indstillinger[navn] = værdi;
  try { localStorage.setItem(NØGLE, JSON.stringify(indstillinger)); } catch { /* ingen lagring */ }
  bus.emit('indstillinger', indstillinger);
}
