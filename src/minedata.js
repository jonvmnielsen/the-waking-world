// Miner og stenbrud (M10, Jons ønske): minerne er forskellige store, man kan se hvor meget der er tilbage,
// og et sted på kortet ligger en kæmpe åre, som er værd at kæmpe om.
//   Guld: lille 10.000, mellem 15.000, stor 20.000, kæmpe (Motherlode) 30.000–50.000
//   Sten: almindelige stenbrud er klippeblokke (pynt.js); Deep Quarry er et kæmpe stenbrud på 8.000–14.000
// Store kort har flere store miner og to kæmpeårer; små kort flere små miner.

export const MINE_STR = {
  lille: { navn: 'Small gold mine', guld: 10000, skala: 0.95 },
  mellem: { navn: 'Gold mine', guld: 15000, skala: 1.1 },
  stor: { navn: 'Rich gold mine', guld: 20000, skala: 1.25 },
  kæmpe: { navn: 'The Motherlode', guld: [30000, 50000], skala: 1.55 },
};
export const BRUD = { navn: 'Deep Quarry', sten: [8000, 14000] };

// Hvor mange af hver slags ekspansionsminer, pr. kortstørrelse (vægte)
const FORDELING = {
  lille: { lille: 5, mellem: 4, stor: 1 },
  normal: { lille: 3, mellem: 4.5, stor: 2.5 },
  stor: { lille: 1.5, mellem: 4, stor: 4.5 },
};
export const KÆMPEÅRER = { lille: 1, normal: 1, stor: 2 };

export function trækMine(tilf, kortStr) {
  const v = FORDELING[kortStr] ?? FORDELING.normal;
  let r = tilf() * Object.values(v).reduce((a, b) => a + b, 0);
  for (const [id, w] of Object.entries(v)) { r -= w; if (r <= 0) return id; }
  return 'mellem';
}

export function mineMængde(størrelse, tilf) {
  const g = MINE_STR[størrelse]?.guld ?? 15000;
  return Array.isArray(g) ? Math.round((g[0] + tilf() * (g[1] - g[0])) / 1000) * 1000 : g;
}
export const brudMængde = (tilf) => Math.round((BRUD.sten[0] + tilf() * (BRUD.sten[1] - BRUD.sten[0])) / 500) * 500;

// Fem stadier efter hvor meget der er tilbage, og et sjette for kæmpeårerne, mens de stadig er rige
export const STADIER = [
  { navn: 'Empty', farve: '#7a7a7a' },
  { navn: 'Running low', farve: '#e8473c' },
  { navn: 'Half empty', farve: '#f08a35' },
  { navn: 'Half full', farve: '#f2d14a' },
  { navn: 'Full', farve: '#9fe05a' },
  { navn: 'Overflowing', farve: '#ffd36b' },
];
// 0–5: tom, ~25 %, ~50 %, ~75 %, fuld; 5 = kæmpeåre med mere end 25.000 tilbage
export function stadie(mængde, start, kæmpe = false) {
  if (mængde <= 0) return 0;
  if (kæmpe && mængde > 25000) return 5;
  const f = mængde / start;
  return f > 0.75 ? 4 : f > 0.5 ? 3 : f > 0.25 ? 2 : 1;
}
