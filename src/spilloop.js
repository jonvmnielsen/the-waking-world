// Ét tidstrin i spillet (adskilt fra tegning, så tests kan spole frem med spil.simuler) og omrids-tegningen.
import { adskil } from './unit.js';
import { ARBEJDER_SYN } from './arbejder.js';
import { SOLDAT_SYN } from './soldat.js';
import { Røntgen } from './rontgen.js';

export function lavTrin(spil, { stedLiv, effekter, minimap, verdensObj, sejr, sætEgne }) {
  const { helt, base, taage, verden, lejre, stil, valg, rig, modstander } = spil;
  const heltSyn = { x: 0, z: 0, radius: 28 };
  const SYN_HELT = 28;
  let patchTid = 0;
  return function trin(dt) {
    spil.ur.tid += dt;
    spil.dagNat.opdater(dt);
    spil.lyd?.opdater(dt, spil.dagNat.nat);
    sætEgne([helt, ...base.arbejdere, ...base.soldater].filter((u) => !u.død && u.rod.visible && !u.skjult));
    helt.opdater(dt);
    // Om natten ser alle kortere (dagnat.js)
    const f = spil.dagNat.synsFaktor();
    heltSyn.x = helt.x; heltSyn.z = helt.z; heltSyn.radius = SYN_HELT * f;
    const syn = [
      ...base.arbejdere.filter((a) => !a.død).map((a) => ({ x: a.x, z: a.z, radius: ARBEJDER_SYN * f })),
      ...base.soldater.filter((s) => !s.død).map((s) => ({ x: s.x, z: s.z, radius: SOLDAT_SYN * f })),
    ];
    taage.opdater(dt, helt.død ? syn : [heltSyn, ...syn]);
    for (const c of verden.creeps) c.opdater(dt);
    if (verden.creeps.some((c) => c.fjernet)) verden.creeps = verden.creeps.filter((c) => !c.fjernet);
    for (const l of lejre) l.opdater(dt);
    base.opdater(dt);
    spil.udvikling.opdater(dt);
    modstander.opdater(dt);
    spil.verdenstilstand.opdater(dt);
    spil.begivenheder?.opdater(dt);
    spil.champions?.opdater(dt);   // tilfældige begivenheder (begivenheder.js)
    spil.ekkoer?.opdater(dt);
    spil.livet?.opdater(dt);
    spil.minder?.opdater(dt);
    spil.ånder.opdater(dt);
    spil.alter.opdater(dt);
    spil.træVækst.opdater(dt);
    helt.velsignelser.opdater(dt, spil);
    adskil([helt, ...verden.creeps.filter((c) => !c.død && !c.erBygning && c.rod.visible), ...base.arbejdere.filter((a) => a.rod.visible && !a.død), ...base.soldater.filter((s) => !s.død)], verden.kort);
    stil.opdater(dt, base.soldater);
    spil.veteraner.opdater();
    stedLiv.opdater(dt, helt, spil);
    spil.genstande.opdater(dt);
    effekter.opdater(dt);
    spil.kampFølelse?.opdater(dt);
    verdensObj.opdater(dt);
    valg.opdater();
    rig.opdater(dt, helt.død ? null : helt);
    minimap.opdater(dt);
    sejr.opdater(dt);
    patchTid += dt;
    if (patchTid > 1) { patchTid = 0; taage.patchScene(verden.scene); }
  };
}

// Omrids af figurer og bygninger der står bag en bygning (egne, neutrale og modstanderens)
export function lavRøntgen(spil, renderer, verdensObj) {
  const { helt, base, verden, rig, modstander } = spil;
  return new Røntgen(renderer, verden.scene, rig.kamera, {
    enheder: () => [helt, ...base.arbejdere, ...base.soldater, ...verden.creeps].filter((e) => !e.død && !e.erBygning && e.rod.visible).map((e) => ({ rod: e.rod, egen: e === helt || e.side === 'egen' })),
    bygninger: () => [
      ...base.bygninger.map((b) => ({ rod: b.rod, egen: true })),
      ...modstander.bygninger.filter((b) => !b.død).map((b) => ({ rod: b.rod, egen: false })),
      ...verdensObj.bygninger,
    ],
  });
}
