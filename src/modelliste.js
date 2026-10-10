// Alle modeller der skal indlæses før spillet starter (ud over kortets egne)
// og de ekstra ikoner til ressourcebjælken og kommandopanelet.
import { CREEP_TYPER } from './creepdata.js';
import { alleItemModeller } from './itemdata.js';
import { BYGNINGER, STADIER } from './bygningsdata.js';

export const MODELLER = [...new Set([
  'units/hero_tide', 'units/arbejder',
  ...Object.values(CREEP_TYPER).map((t) => `units/${t.model}`),
  ...Object.values(CREEP_TYPER).flatMap((t) => Object.values(t.våben ?? {}).map((v) => `kaykit-skeletons/${v}`)),
  ...alleItemModeller(), 'kaykit-dungeon/chest', 'kaykit-dungeon/chest_gold',
  ...Object.values(BYGNINGER).map((b) => b.model), ...STADIER,
  'kaykit-hexagon/decoration/props/resource_lumber', 'kaykit-hexagon/decoration/props/resource_stone',
  'kaykit-hexagon/decoration/nature/trees_a_cut', 'kaykit-hexagon/decoration/nature/trees_b_cut',
])];

export const EKSTRA_IKONER = [
  { id: 'res-guld', sti: 'kaykit-dungeon/coin_stack_small_gltf' },
  { id: 'res-træ', sti: 'kaykit-hexagon/decoration/props/resource_lumber' },
  { id: 'res-sten', sti: 'kaykit-hexagon/decoration/props/resource_stone' },
  { id: 'res-forsyning', sti: 'kaykit-hexagon/buildings/green/building_home_a_green' },
  { id: 'økse', sti: 'kaykit-adventurers/axe_1handed', vinkel: [0.2, -0.6, -0.6] },
  ...Object.entries(BYGNINGER).map(([type, b]) => ({ id: 'byg-' + type, sti: b.model })),
];
