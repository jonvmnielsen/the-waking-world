// Heldige fund (M10, RNG): når en arbejder kommer op af en mine eller hugger i et stenbrud, er der en lille
// chance for at finde noget — en guldklump, et item eller en sjælden ting. Kæmpeårerne giver oftere fund.
// Fundet lægges ved arbejderen, og krøniken fortæller om det.
import { bus } from './events.js';
import { træk, DROP, ITEMS } from './itemdata.js';

const CHANCE = { guld: 0.006, kæmpe: 0.018, sten: 0.004 };
const FUND = {
  guld: [['guldpose', 6], ['DROP2', 3], ['DROP3', 1]],
  sten: [['DROP2', 4], ['styrkensSkrift', 1], ['DROP3', 1]],
};

function vægtet(liste) {
  let r = Math.random() * liste.reduce((s, [, v]) => s + v, 0);
  for (const [id, v] of liste) { r -= v; if (r <= 0) return id; }
  return liste[0][0];
}

export function lavFund(spil) {
  bus.on('høstet', ({ type, kilde, arbejder }) => {
    if (type === 'træ') return;
    const chance = kilde.størrelse === 'kæmpe' ? CHANCE.kæmpe : CHANCE[type] ?? 0;
    if (Math.random() > chance) return;
    let id = vægtet(FUND[type] ?? FUND.guld);
    if (id === 'DROP2') id = træk(DROP[2]); else if (id === 'DROP3') id = træk(DROP[3]);
    spil.genstande.læg(id, arbejder.x + 1.2, arbejder.z + 0.8);
    const sted = type === 'guld' ? 'deep in the mine' : 'in the quarry';
    bus.emit('krønike', { titel: 'A lucky find!', tekst: `A worker found ${ITEMS[id]?.navn ?? 'something'} ${sted}. It lies by the worker — send your hero to pick it up.`, x: arbejder.x, z: arbejder.z, farve: '#ffd36b', varighed: 14 });
  });
}
