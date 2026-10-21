// Alle modeller der skal indlæses før spillet starter (ud over kortets egne)
// og de ekstra ikoner til ressourcebjælken og kommandopanelet.
import { CREEP_TYPER } from './creepdata.js';
import { alleItemModeller } from './itemdata.js';
import { BYGNINGER, STADIER } from './bygningsdata.js';
import { SOLDATER, SPYD_MODEL } from './soldatdata.js';
import { FJENDE_BYGNINGER } from './fjendedata.js';
import { TÅRN_TRIN, UDVIKLINGS_IKONER } from './udviklingdata.js';
import { SPILLER, FJENDE, SPILLER_FARVE } from './racer.js';
import { helteFor } from './heltedata.js';

export const MODELLER = [...new Set([
  ...helteFor(SPILLER.id).map((h) => h.model), ...helteFor(FJENDE.id).map((h) => h.model), 'units/arbejder', SPILLER.arbejderModel, FJENDE.arbejderModel, ...Object.values(SOLDATER).map((s) => s.model), SPYD_MODEL,
  'kaykit-adventurers/shield_round_barbarian', 'kaykit-adventurers/axe_2handed', 'kaykit-adventurers/shield_badge', 'kaykit-adventurers/crossbow_2handed',
  ...Object.values(CREEP_TYPER).map((t) => `units/${t.model}`),
  ...Object.values(CREEP_TYPER).flatMap((t) => Object.values(t.våben ?? {}).map((v) => `kaykit-skeletons/${v}`)),
  ...alleItemModeller(), 'kaykit-dungeon/chest', 'kaykit-dungeon/chest_gold',
  ...Object.values(BYGNINGER).map((b) => b.model), ...STADIER,
  ...Object.values(FJENDE_BYGNINGER).map((b) => b.model), 'kaykit-hexagon/buildings/neutral/building_destroyed',
  'kaykit-hexagon/decoration/props/resource_lumber', 'kaykit-hexagon/decoration/props/resource_stone',
  'kaykit-hexagon/decoration/nature/trees_a_cut', 'kaykit-hexagon/decoration/nature/trees_b_cut',
  ...TÅRN_TRIN.map((t) => t.model), `kaykit-hexagon/decoration/props/flag_${SPILLER_FARVE}`, 'kaykit-hexagon/decoration/props/weaponrack',
  `kaykit-hexagon/buildings/${SPILLER_FARVE}/building_tower_a_${SPILLER_FARVE}`, `kaykit-hexagon/buildings/${SPILLER_FARVE}/building_tower_base_${SPILLER_FARVE}`,
  // Livet i verden (M8)
  'dyr/doe', 'dyr/stag', 'dyr/fox', 'dyr/crow', 'dyr/finch', 'dyr/gull', 'units/pilgrim', 'kaykit-halloween/pillar',
  // Begivenheder (M11)
  'forge-lowpoly/crystal_star_a', 'forge-lowpoly/crystal_star_b', 'forge-lowpoly/crystal_star_c', 'forge-lowpoly/campfire', 'forge-lowpoly/fountain_great', 'kaykit-halloween/shrine', 'forge-lowpoly/wagon_covered', 'kaykit-hexagon/buildings/yellow/building_castle_yellow',
].filter(Boolean))];

export const EKSTRA_IKONER = [
  { id: 'res-guld', sti: 'kaykit-dungeon/coin_stack_small_gltf' },
  { id: 'res-træ', sti: 'kaykit-hexagon/decoration/props/resource_lumber' },
  { id: 'res-sten', sti: 'kaykit-hexagon/decoration/props/resource_stone' },
  { id: 'res-forsyning', sti: BYGNINGER.hytte.model },
  { id: 'økse', sti: 'kaykit-adventurers/axe_1handed', vinkel: [0.2, -0.6, -0.6] },
  { id: 'enhed-grunt', sti: 'kaykit-adventurers/shield_round_barbarian' },
  { id: 'enhed-spydkaster', sti: SPYD_MODEL, vinkel: [0.5, 0, 0.8] },
  { id: 'enhed-fodsoldat', sti: 'kaykit-adventurers/shield_badge' },
  { id: 'enhed-armbrøst', sti: 'kaykit-adventurers/crossbow_2handed', vinkel: [0.3, -0.6, 0] },
  ...(SPILLER.arbejderModel ? [{ id: 'enhed-arbejder', sti: SPILLER.arbejderModel, vinkel: [0.1, 0.3, 0] }] : []),
  { id: 'enhed-tornvagt', sti: 'units/dream_thornguard', vinkel: [0.1, 0.3, 0] },
  { id: 'enhed-lygtemand', sti: 'units/dream_lanternkin', vinkel: [0.1, 0.3, 0] },
  { id: 'hær', sti: 'kaykit-adventurers/axe_2handed', vinkel: [0.2, -0.6, -0.6] },
  ...Object.entries(BYGNINGER).map(([type, b]) => ({ id: 'byg-' + type, sti: b.model })),
  ...UDVIKLINGS_IKONER,
];
