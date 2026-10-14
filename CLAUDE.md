# CLAUDE.md — The Waking World
> Primær kontekst for Arkitekt-agenten og alle subagenter.
> Læs dette dokument i sin helhed ved starten af hver session.
> Opdater løbende når arkitektur, beslutninger eller vision ændres.
> **Den samlede spilbeskrivelse står i `docs/GDD.md`** — læs den før du bygger nye systemer.

---

## 1. Projektvision

**The Waking World** er et isometrisk RTS/RPG inspireret af Warcraft 3, bygget til mobilgenerationen med AI-drevne modstandere og et stærkt hero-fokus.

Målet er ikke en kopi af WC3 — det er en genre-revival der fanger *essensen og følelsen*, men udvider med moderne lag:
- En AI-modstander der lærer og tilpasser sig den individuelle spiller
- En levende verden der reagerer på det der sker i spillet
- Et hero-RPG lag med dybde og personlighed
- Custom map editor tilgængeligt direkte i spillet
- Mobilvenligt design fra første dag

**Kerncitat:** *"Et spil der føles mytologisk og personligt på samme tid."*

---

## 2. Tech Stack

| Komponent | Valg | Begrundelse |
|---|---|---|
| Motor | **three.js** (r170) + **Vite** | Kører direkte i mobilbrowseren, små filer, hurtig opstart. Jon udvikler og tester fra telefonen |
| Sprog | **JavaScript** (ES-moduler) | Ingen byggetrin ud over Vite |
| 3D-modeller | **KayKit** (+ senere Quaternius) via [jonvmnielsen/game-assets](https://github.com/jonvmnielsen/game-assets) | CC0, ensartet low-poly stil med rigtige animationer. **Aldrig klodsgrafik af grundformer** |
| Perspektiv | **3D med fast skråt kamera** | Som WC3: ægte 3D-figurer, kameraet drejer ikke |
| Kort | **Hex-gitter** (KayKit Medieval Hexagon) | Fliser, kyster, bygninger i holdfarver, A*-stifinding |
| AI-modstander | **Regelbaseret** (kommer i senere sprint) | Ingen sprogmodel / Ollama |
| App senere | **Capacitor** | Pakker web-spillet som iOS/Android-app |
| Versionsstyring | **Git / GitHub** | Godot-versionen ligger urørt på grenen `godot-arkiv` |

---

## 3. Projektstruktur

```
the-waking-world/
├── CLAUDE.md                 # Dette dokument
├── index.html                # Spillets side (HUD-markup)
├── assets.json               # Hvilke modeller spillet henter fra game-assets
├── public/assets/            # Synkroniserede modeller (.glb) — genereres, rediger ikke
├── src/
│   ├── main.js               # Opstart og spil-loop
│   ├── config.js             # Balance-tal (fra docs/balance)
│   ├── mapdata.js            # Samler kortet: terræn + steder + pynt
│   ├── kortgen.js            # Terræn 48×48 hex: regioner, hav, søer, kyst, skov, bjerge
│   ├── steder.js / pynt.js   # Base, neutrale steder, creep-lejre / natur pr. region
│   ├── stoej.js              # Seedet tilfældighed og støj
│   ├── creepdata.js          # Creep-familier, typer og 5 sværhedsgrader
│   ├── taage.js / minimap.js # Krigens tåge (shader) og minimap
│   ├── stedliv.js            # Livskilder og udkigstårne
│   ├── world.js              # 3D-verden: samler terræn, natur og guldårer; lys og himmel
│   ├── terraen.js            # Ét sammenhængende terræn-mesh (ingen synlige hexagoner) + vand
│   ├── natur.js              # Træer, sten og steder som instanser; hvert træ/sten er en ressource
│   ├── guldaarer.js          # Lysende guldårer og glimt ved guldminerne
│   ├── rontgen.js            # Omrids af figurer/bygninger der står bag en bygning
│   ├── soldat.js / soldatdata.js / soldatevner.js  # Grunts og spydkastere, deres tal og grenenes evner
│   ├── haer.js               # Formation, gruppeordrer, vælg-firkant, dobbelttryk
│   ├── trussel.js            # Fælles regel for automatisk angreb
│   ├── veteran.js / spillerstil.js # Veteranstatus, specialisering og spillestilsmålerne (SAS)
│   ├── gem.js / gendan.js    # Gem spil i localStorage og gendan det
│   ├── racer.js              # Racerne (The Tide, The Architects): navne, farver, soldater; spillerens og modstanderens race
│   ├── fjendeai.js / fjende.js / fjendebygning.js / fjendedata.js / fjendeplads.js  # AI-modstanderen (tilfældig race): AI, soldater, bygninger, tal, basens pladser
│   ├── fjendearbejder.js / fjendehelt.js # Modstanderens arbejdere og helt
│   ├── erevoss.js            # The Memory (neutral): hallen i Erevoss, åndevogtere, ekkoer
│   ├── sejr.js / spilloop.js # Sejr/nederlag + slutskærm; ét tidstrin i spillet og omrids-tegningen
│   ├── dagnat.js             # Dag og nat: lys, himmel, udsyn, ur
│   ├── verdenstilstand.js / tjener.js # Balance → Fald → Opvågning; Den Unavngivnes tjenere
│   ├── livet.js              # Livet i verden: sætter dyr, fugle, pilgrimme, sten og ekkoer op og følger faserne
│   ├── dyr.js / fugle.js / pilgrimme.js # Hjorte, hinder og ræve; krager, finker og måger (vingeslag); pilgrimme
│   ├── vaekkesten.js / aand.js # De Vågnende Sten; ånde-udseende, glød og tågen over Erevoss
│   ├── ekko.js               # Ekkoer fra de faldne driver til Erevoss (helten kan fange dem)
│   ├── kroenike.js / fortaelling.js / verdenslore.js # Krøniken; intro, fase-mærke og verdenssiden; al lore-tekst
│   ├── lejrskilt.js          # Skilte over lejrene (navn, sværhedsgrad og level); krøniken fortæller om nye lejre
│   ├── kortvalg.js           # De fire kort (form, frø, historie), valget og skift af kort
│   ├── grund.js / stier.js / bunddaekke.js # Jordens teksturer; trådte stier; græs, blomster og småting
│   ├── mindested.js / mindesmaerker.js / stedlore.js # Navnesten og minder: placering; opdagelse og læsning; tekst
│   ├── heltreplik.js         # Heltens korte replikker ved vigtige øjeblikke
│   ├── biomdata.js / traevalg.js / vejr.js # Biomer og årstider; træer og sten pr. biom; sne, regn, støv, aske, blade
│   ├── malehjaelp.js         # Hjælpere til at male jordens teksturer (og sne)
│   ├── verdensvalgui.js      # Startskærmens valg af kort, biom, årstid, størrelse og ny verden
│   ├── minedata.js / kaempeaare.js / minevisning.js # Minernes størrelser og stadier; Motherlode og Deep Quarry; målere
│   ├── fund.js               # Heldige fund i miner og stenbrud
│   ├── kro.js                # Kroen hyrer lejesoldater
│   ├── hulegen.js / hulevisning.js / huler.js # Huler: rum, lejre og boss (logik); gulv, vægge og fakler (3D); ind og ud, ryddet
│   ├── begivenheder.js / begivenhedsdata.js # Tilfældige begivenheder: planlægning, steder, tryk; tal og tekster
│   ├── himmelbegivenheder.js / stedbegivenheder.js # Blood Moon, Eclipse, Starfall, Gold rush; helligdom, lejesvende, baghold
│   ├── champion.js           # Champion-creeps: egenskaber, ring og skær, ekstra drop
│   ├── karavane.js           # Karavanen: vogn, bærere og vagter; eskorte eller plyndring, priser
│   ├── prospekt.js           # Arbejdere leder efter skjulte guldårer ved bjergene
│   ├── byggeplads.js         # Mindre bygninger: tre pladser pr. felt, figurer går uden om
│   ├── lyd.js / lydbank.js   # Lydeffekter (filer fra game-assets, syntetisk reserve) og stemning efter døgnet
│   ├── hexgrid.js            # Hex-koordinater og A*-stifinding (hex bruges kun i logikken, tegnes ikke)
│   ├── navgitter.js          # Fint navigationsgitter (2×2) med A* rundt om bygninger, træer og sten
│   ├── holdfarve.js          # Holdfarver og ringene om fødderne (blå spiller, rød modstander, rav, sølv, violet, lys)
│   ├── unit.js               # Grundklasse: model, animation, bevægelse, liv
│   ├── hero.js / abilities.js / orkhud.js   # Helten, essenser og evner, grøn ork-hud og holdfarve
│   ├── heltedata.js / heltevner.js # Tre helte pr. race (model, egenskab, kampform, tre evner); signatur-evnerne
│   ├── evnertide.js / evnerark.js  # Heltenes anden og tredje evne (The Tide / The Architects)
│   ├── helteaura.js / heltudstyr.js # Runecirkel, kappe i holdfarve og vækst med level; synligt våben, skjold og hjelm
│   ├── heltreplik.js / heltreplikdata.js # Heltenes egne stemmer (replikker) og hvornår de siges
│   ├── bedrifter.js          # Heltens bedrifter og tilnavne ("the Giantslayer") med varige bonusser
│   ├── stemmer.js / stemmedata.js # Alle enheders stemmer: valg, ordrer, klar, færdig, irriterede svar; racens advarsler
│   ├── dyreprik.js           # Prik til dyrene — det femte prik sprænger dem (blod og pels)
│   ├── heltportraet.js       # Heltens levende 3D-portræt i helteknappen (eget lille lærred)
│   ├── ascension.js / ascensiondata.js / ascensionhud.js # Ascension ved level 10: stier, passiver, evner, valget
│   ├── udvikling.js / udviklingdata.js / udviklinghud.js # Forskning, bygningsopgraderinger, upkeep-visning
│   ├── fremskridt.js         # Sætter M7-systemerne, skærmen og advarslerne op
│   ├── skaerm.js / indstillinger.js # Skærmens opbygning efter valg; menu og indstillinger (zoom, altid-vis)
│   ├── advarsel.js           # Rød kant og rød plet på kortet ved angreb
│   ├── heltstats.js / heltekort.js # Heltens egenskaber (STR/AGI/INT), ofringer; heltekortet på skærmen
│   ├── essensvalg.js         # Essensvalget ved start med forklaring og vink
│   ├── heltlevel.js / heltinteraktion.js    # Heltens level-op og gå-hen-og-gør-noget
│   ├── itemdata.js           # Alle grundting, sjældenhed, drop-borde, butikkens varer
│   ├── udstyr.js             # Udstyrspladser, rul (sjældenhed, affikser, navn) og itemInfo
│   ├── inventar.js           # Heltens 6 udstyrspladser + rygsæk, bonusser, brug af items, guld
│   ├── genstande.js          # Items på jorden, kister, guld og drop fra creeps
│   ├── ikoner.js             # Tegner item-ikoner ud fra 3D-modellerne
│   ├── inventarhud.js        # Inventar, info-kort og købmandens butik på skærmen
│   ├── tryk.js               # Hvad et tryk betyder (vælg, høst, byg, angrib, saml op, handl, gå)
│   ├── okonomi.js            # Guld/træ/sten/forsyning og ressourcekilder (miner + hvert træ og hver sten)
│   ├── bygningsdata.js       # The Tides bygninger og enheder (pris, tid, funktion)
│   ├── bygninger.js / base.js # Byggepladser → færdige bygninger; basen (placering, aflevering, træning)
│   ├── arbejder.js / hoest.js # Bæreren: bærer hjem, bygger; høst (kilde man kan nå, 2 hex-område, ellers ledig)
│   ├── hindring.js           # Figurer går uden om frie træer og sten
│   ├── konstruktion.js       # Ruiner og lejrtelte på kortet, som kan angribes
│   ├── basestart.js          # Storlejr + 5 bærere ved start
│   ├── valg.js               # Hvad er valgt + placering af nye bygninger
│   ├── kommandohud.js        # Ressourcebjælke, ledige bærere, kommandopanel, placeringsbjælke
│   ├── modelliste.js         # Modeller der indlæses ved start + ekstra ikoner
│   ├── creeps.js             # Skeletter og lejre (aggro, leash, respawn)
│   ├── camera.js             # Kamera + touch (tryk, træk, knib)
│   ├── effects.js / overlay.js / hud.js     # Effekter, livsbjælker, brugerflade
│   └── style.css
├── tools/
│   ├── lyde.mjs              # Henter lydene i lyde.json fra game-assets til public/audio (OGG → MP3)
│   ├── smoke-test.mjs        # Headless test i mobilstørrelse med skærmbilleder
│   ├── visning.mjs           # Skærmbilleder fra bestemte steder på kortet (SKUD='[...]')
│   └── byg-artefakt.mjs      # Bygger spillet som privat Claude-side
├── docs/GDD.md               # Samlet spildesign
├── agents/                   # Agent-beskrivelser (skrevet til Godot-versionen — delvist forældede)
└── docs/                     # Design og balance
```

## Udvikling

- `npm install` og klon `game-assets` ved siden af dette repo (`../game-assets`).
- `npm run assets` synkroniserer modellerne i `assets.json` (kun de valgte animationer kommer med).
- `node tools/lyde.mjs` henter lydene i `lyde.json` fra game-assets til `public/audio/`.
- `npm run dev` starter en lokal server. `npm test` bygger og kører røgtesten (skærmbilleder i `test-output/`).
- **Jon tester på https://jonvmnielsen.github.io/the-waking-world/** (GitHub Pages fra grenen `gh-pages`, repoet er offentligt). Efter hver ændring: `npx vite build`, læg `dist/` + en tom `.nojekyll` på `gh-pages` og push. Claude-sider (artefakter) virker ikke i Jons app, så brug Pages.
- `node tools/byg-artefakt.mjs` bygger stadig en Claude-side-version (modeller pakket i `modelpakke.json`), men den bruges ikke lige nu.
- Skala: KayKit-hexfliser skaleres ×5 (`VERDEN.hexSkala`), så bygninger og natur er meget større end helten, og dørene er højere end helten (GDD 4.1). Storlejren fylder 3 felter. Hexagon-pakkens pynt skaleres med (pynt.skala er en ekstra faktor); Halloween-, dungeon- og figurpakker er i figurstørrelse.
- Test: `spil.visHeleKortet()` fjerner tågen, `spil.simuler(sek)` spoler tiden frem.

---

## 4. Agent-arkitektur

Projektet drives af 9 specialiserede agenter organiseret i to lag:

### Lag 1 — Koordinering
| Agent | Fil | Ansvar |
|---|---|---|
| **Arkitekt** | AGENT_ARKITEKT.md | Overordnet koordinering, sprint-planlægning, beslutninger, kommunikation med Jon |

### Lag 2 — Specialister
| Agent | Fil | Ansvar |
|---|---|---|
| **Kode** | AGENT_KODE.md | three.js, JavaScript, alle spilsystemer |
| **Grafik** | AGENT_GRAFIK.md | Modeller fra game-assets (KayKit/Quaternius), visuel stil, skala |
| **Map** | AGENT_MAP.md | Kortdesign, terrain, tilemap, objectives |
| **Lore** | AGENT_LORE.md | Verdenshistorie, narrativ, racer, dialoger, tone of voice |
| **AI** | AGENT_AI.md | AI-modstander (regelbaseret), spilstate-format |
| **Lyd** | AGENT_LYD.md | Lyddesign, musik, ambient, ability-lyde, stemmer |
| **UI** | AGENT_UI.md | HUD, menus, touch-kontrol, mobiloptimering |
| **Balance** | AGENT_BALANCE.md | Stats, formler, XP-kurver, unit-costs, spilfølelse |
| **Test** | AGENT_TEST.md | QA, testscenarier, edge cases, regressionstest |

### Arbejdsflow
```
Jon ↔ Arkitekt-agent
         ↓ delegerer opgaver med præcis kontekst
    Specialist-agenter
         ↓ producerer output
    Filer i projektet
         ↓ samles til
    The Waking World
```

I praksis åbnes separate CC-sessioner per agent. Arkitekt-agenten producerer præcise instrukser der kopieres til den relevante specialist.

---

## 5. Racerne

| Race | WC3-oprindelse | TWW-identitet | Kernemekanik |
|---|---|---|---|
| **The Architects** | Humans | Bygmestre af orden | Stærke strukturer, stive men ubrydelige |
| **The Tide** | Orcs | Naturkraft med intelligens | Tilpasningsdygtige, vokser med kaos |
| **The Memory** | *(neutral entitet)* | De dødes ånder i Erevoss | Ikke en race: samler ekkoer, forsvarer kun sig selv (M12) |
| **The Dreaming** | Night Elves | Halvt i verden, halvt udenfor | Indirekte påvirkning, høj kompleksitet |
| **The Unmade** | *(ny)* | Spillerdefineret faction | Saml fragmenter fra faldne — udskydes |

**Spilbare nu:** The Tide og The Architects (M12). Man vælger race og helt ved start; AI-modstanderen får en tilfældig race. **The Memory og The Unnamed er ikke racer, men neutrale entiteter på kortet** (Jon, M12). Orkerne er KayKit-figurer med grøn hud.

---

## 6. Hero-systemet

- Starter altid level 1, samme base stats — ingen cross-session magt-fordel
- Cross-session: titler, battle scars, passive traits (kosmetisk + narrativt)
- Essence-valg ved gamestart: *Violence* (Vold), *Patience* (Tålmodighed) eller *Sacrifice* (Ofring) — se GDD 6.1
- Egenskaber: Strength, Agility, Intelligence (GDD 6.2)

### Progression i to tiers

**Tier 1 — Level 1-10:** Grundlæggende magt og identitet. Spilleren lærer sin helt at kende. Tre abilities låses op ved level 1, 3 og 6.

**Ascension ved level 10:** Helten gennemgår en transformation — narrativt markant, mekanisk betydningsfuldt. Tre Ascension-stier per hero. Hvilke stier der er *tilgængelige* påvirkes af spillerens adfærd gennem spillet (se nedenfor). Spilleren vælger stadig aktivt.

**Tier 2 — Level 11-20:** Ny identitet, nye abilities, fundamentalt anderledes spilstil afhængig af valgt Ascension-sti. Giver replay-value fordi valget er uigenkaldeligt.

### Ascension-stier — Orc Warrior (eksempel)
| Sti | Identitet | Krav | Spilstilsændring |
|---|---|---|---|
| **Warlord** | Kommanderer units | Defensiv/støttende adfærd | Auraer, unit-buff, kommando-abilities |
| **Avatar** | Kanal for naturkræfter | Balanceret adfærd | Nye elementære spells |
| **Bloodbound** | Binder sig til krigens pris | Aggressiv/risk-reward adfærd | Høj risiko, ekstremt høj belønning |

### Spillestil påvirker Ascension-adgang
Systemet tracker spillerens overordnede adfærdsmønster løbende. Ved level 10 er de stier der matcher spillerens faktiske spillestil *umiddelbart tilgængelige*. Andre stier kan stadig vælges men koster mere eller tager længere tid at aktivere — fordi det går imod heltens hidtidige udvikling.

---

## 7. Unit-progressionssystemet

Dette er et af TWW's mest originale designelementer. Se `docs/DESIGN_PROGRESSION.md` for fuld dokumentation.

### Kerneprincip: Veteranstatus + Spillerstil

Unit-progression sker i to lag:

**Lag 1 — Veteranstatus (unit-niveau)**
Individuelle units akkumulerer erfaring ved at *overleve* kampe. En grunt der overlever X slag bliver en *veteran*. Dette er neutralt — ingen retning endnu, bare erfaring. Spilleren investerer emotionelt i at holde veterans i live.

**Lag 2 — Specialiseringsgren (spillerstil-niveau)**
Systemet tracker *spillerens* overordnede adfærdsmønster løbende — ikke den individuelle units kamp-statistik. Når en unit når veteranstatus, låses et valg op. Hvad der er tilgængeligt at vælge afhænger af spillerens mønster:

```
Spilleren har denne session:
  Angrebet tidligt og aggressivt  →  Ravager-gren tilgængelig
  Holdt units i live, defensivt   →  Ironhide-gren tilgængelig
  Hurtige angreb på mange mål     →  Berserker-gren tilgængelig
  Blandet adfærd                  →  Alle grene tilgængelige
```

Spilleren vælger stadig aktivt og betaler ressourcer via barracks — men adgangen er *spillet til*, ikke bare købt.

### Adfærdsmålere (usynlige for spilleren)
Systemet tracker løbende:
- **Aggression-score:** Tidlige angreb, antal fjender angrebet, skade udøvet
- **Overlevelse-score:** Gennemsnitlig unit-levetid, retreats, healing brugt
- **Kaos-score:** Antal forskellige mål angrebet, bevægelsesmønster, overraskelsesangreb

Målerne *forskydes* langsomt — de nulstilles ikke. Spilleren kan skifte strategi men det tager tid. Det giver kontinuitet og identitet til ens armé på tværs af spillet.

### Unit-grene — The Tide Grunt (eksempel)
| Gren | Identitet | Kræver | Styrke | Svaghed |
|---|---|---|---|---|
| **Ironhide** | Forsvarsorienteret | Høj overlevelse-score | Tanker, taunt, beskytter andre | Lav skade |
| **Ravager** | Angrebsorienteret | Høj aggression-score | Burst-damage, charge | Skrøbelig |
| **Berserker** | Kaos-orienteret | Høj kaos-score | Uforudsigelig, hurtig, AoE | Ingen kontrol |

### Hvad dette løser (vs. WC3)
WC3's problem: counter-systemet betød at specialisering altid blev straffet. Svaret på en dårlig matchup var altid "byg noget andet."

TWW's svar: specialiserede veterans kan *tilpasses* i stedet for at erstattes. En Ironhide-grunt er ikke svaret på alt — men den er ikke hjælpeløs mod sin counter heller. Spilleren der har investeret i sin armé har redskaber til at håndtere modspil.

---

## 7. Verdens-tilstand

| Tilstand | Trigger | Effekt |
|---|---|---|
| **Balance** | Spilstart | Normalt gameplay |
| **Fald** | Tid + inaktivitet | Ressourcer svinder, creeps aggressive |
| **Opvågning** | Sen spil | Tredje kraft — fælles trussel |

---

## 8. Sprint-plan

### ✅ Sprint 0–3 (Godot, marts 2026)
Helt, creeps, kamp, abilities, leveling og en Ollama-AI blev bygget i Godot. Arkiveret på grenen `godot-arkiv`.

### ✅ Sprint 4 — "Ny motor" (oktober 2026)
- [x] Skift til three.js + Vite, spilbart i mobilbrowseren
- [x] Hex-ø "Askemarken" med kyst, skove, bjerge og The Tides lejr (KayKit-modeller)
- [x] Ork-helt med tryk-for-at-gå, A*-stifinding og kamera der følger
- [x] Touch: tryk = gå/angrib, træk = panorer, knib = zoom
- [x] Fire skeletlejre med aggro, leash og genopstandelse
- [x] Nærkamp, HP-bjælker, skadetal, XP og level 1–10
- [x] Essensvalg og alle 7 evner fra balance v1
- [x] Død og genoplivning ved lejren

### ✅ M1 — "Stor verden" (oktober 2026)
- [x] Verden skaleret op omkring helten (hexSkala 5, Storlejr på 3 felter, træer ~2×)
- [x] Procedurelt kort 48×48 hex med 5 regioner, søer, kyst, skove og bjerge
- [x] 26 creep-lejre (73 creeps): skeletter og plyndrere i 5 sværhedsgrader inkl. 2 bosser, ingen genopstandelse
- [x] Krigens tåge, minimap med lejre i farver, tryk på minimap flytter kameraet
- [x] Neutrale steder: livskilder (heler), udkigstårne (viser omegnen), kro, købmand, guldminer, ruiner
- [x] Jons feedback: større bygninger (døre højere end helten), kameraet bliver hvor man kigger, uudforsket land helt sort, automatisk angreb

### ✅ M2 — "Items" (oktober 2026)
- [x] 22 items i fem typer (forbrug, opladning, udstyr, artefakt, opsamling) og fire sjældenheder
- [x] Inventar med 6 pladser og ikoner tegnet fra modellerne; tryk = brug, hold = info-kort med "Smid"
- [x] Guld fra alle creeps; lejrens sidste creep taber et item efter sværhedsgrad; bosser taber legendariske items
- [x] Items på jorden med lysstribe i sjældenhedens farve; guldposer og skrifter samles op automatisk
- [x] 10 kister (ved ruiner, i vildmarken og ved bosserne — låst til bossen er død)
- [x] Købmanden sælger eliksirer, røgbombe, hjemkald og simpelt udstyr
- [x] Artefakter: lyn (Tordenøksen), blok (Gravkongens skjold), livsstjæl (Kaptajnens klinge), pigskjold

### ✅ M3 — "Økonomi og base" (oktober 2026)
- [x] Tre ressourcer: guld (miner), træ (skov, fældes til stubbe) og sten (bjerge) + forsyning
- [x] Bærere med grøn hud og økse: høster, bærer hjem til Storlejr/Savværk, bygger; 5 ved start, trænes i Storlejren
- [x] Byggesystem på hex: vælg bærer → bygning → felt (grøn/rød) → Byg her; tre byggestadier
- [x] Bygninger: Storlejr, Forsyningshytte, Savværk, Vagttårn (skyder), Markedsplads (butik), Ånde-alter (genopstandelse + heling), Krigerlejr (klar til M4)
- [x] Valg: tryk på helt/bærer/bygning; kommandopanel skifter; knap til ledige bærere
- [x] Startbase med guldmine, skov og stenbjerg tæt ved

### ✅ M4 — "Hær" + Jons feedback (oktober 2026)
- [x] Sammenhængende terræn uden synlige hexagoner (hex bruges kun i logikken)
- [x] Hvert træ og hver sten kan høstes; stenbrud er grå klippeblokke; guldminer har guldårer
- [x] Omrids gennem bygninger (figurer og egne bygninger bag en bygning)
- [x] Items: tryk åbner info-kortet, brug derfra
- [x] Grunts og spydkastere, gruppevalg (firkant, dobbelttryk, Hær-knap), formation, samlingspunkt
- [x] Creeps angriber alle spillerens figurer; units angriber det der truer dem eller allierede
- [x] Veteranstatus, spillestilsmålere og grunt-grenene Ironhide/Ravager/Berserker med evner
- [x] Gem spil: autogem, "Gem spillet" i menuen, "Fortsæt spillet" ved start

### ✅ Engelsk, egenskaber og essensvalg (oktober 2026)
- [x] Hele spillet på engelsk (kode og kommentarer forbliver danske)
- [x] Essensvalg med forklaring: kampstil, egenskab, evner og vink om hvad valget kan føre til
- [x] Heltens egenskaber Strength/Agility/Intelligence; bøger, udstyr og ofringer ved alteret øger dem
- [x] Helten løber 20 % hurtigere

### ✅ M5 — "Modstander" (oktober 2026)
- [x] The Memory: base i nordøst med ødeland, Bone Throne, Crypt, Grave Spire, Haunt; bygger efter plan
- [x] Skeletthær der bliver stærkere med tiden; forsvar, bølger mod spillerens base, tilbagetog
- [x] Tilpasser sig spillestilen; tre sværhedsgrader (vælges ved start)
- [x] Spillerens bygninger har liv, kan ødelægges og repareres
- [x] Sejr/nederlag med slutskærm; The Memory gemmes med i gem spil

### ✅ M6 — "Liv i verden" (oktober 2026)
- [x] Dag og nat (8 min døgn): mørk himmel, lygte om helten, kortere udsyn, creeps sover tungere, The Memory stærkere om natten
- [x] Verdenstilstand: Fald (mindre guld, creep-plyndringer) og Opvågning (Den Unavngivnes tjenere angriber alle; belønning)
- [x] Kroen hyrer lejesoldater (Brawler, Crossbowman, Sellsword)
- [x] Syntetisk lyd og vind, lyd til/fra i menuen; alt gemmes med

### ✅ M7 — "Fremskridt" (oktober 2026)
- [x] Ascension ved level 10: Warlord, Avatar, Bloodbound med passiv evne og to nye evner; adgang efter spillestil; level 11–20
- [x] XP skaleres efter level-forskel (intet loft)
- [x] Upkeep: mindre guld fra minerne fra 41 og 71 forsyning
- [x] Forskning: Forge (våben, spyd, rustning), Lumber Mill (økser, hakker, murværk), War Camp (drills), Great Hall (minedrift)
- [x] Opgraderinger: Great Hall → Stronghold → Fortress (låser forskningslevels op), Watch Tower → Guard Tower
- [x] Alt gemmes med

### ✅ Jons feedback: skærm og kollision (oktober 2026)
- [x] Arbejdere går uden om bygninger (frit felt ved bygningen, vig til siden, afstand til hjørner)
- [x] Ressourcer altid øverst; lille helteknap med overblik; liv/mana/xp/level over helten
- [x] Evner og rygsæk kun når helten er valgt; Backpack-knap; Deselect-knap
- [x] Menu som lag over alt med indstillinger: udsyn/zoom, lyd, altid vis evner/rygsæk (ellers én Hero-knap)
- [x] Kortet i fuld skærm; rød kant og rød blinkende plet ved angreb

### ✅ Jons feedback 3 (oktober 2026)
- [x] Arbejdere sidder ikke fast ved træ/sten; fortsætter inden for 2 hex, ellers ledige; går uden om ting
- [x] Helt og soldater vender tilbage efter en jagt (død/flygtet/10 s)
- [x] Cannon Tower og forskningen Burning Bolts
- [x] Top-bjælke med hele tal og upkeep, ur under; helteknap (hop → info, dobbelttryk); itemnavne på jorden
- [x] Byggemenu bag Build-knap; grøn/rød skygge der kan trækkes; Build/Stop

### ✅ Jons feedback 4 (oktober 2026)
- [x] Inventory: udrustet + rygsæk; sælg items i butikkens Sell-fane
- [x] Valg låst indtil Deselect; Hero-knappen sender valgte soldater til helten
- [x] Ruiner og lejrtelte kan angribes; åbnede kister forsvinder; ryddede stenbrud kan betrædes
- [x] Byg flere Strongholds (ekstra haller); tier 2 hedder Citadel
- [x] Kompakte bjælker over helten; heltens knapper tættere sammen

### ✅ M8 — "En levende verden" (oktober 2026)
- [x] Dyr (hjorte, hinder, ræve — Quaternius CC0) der græsser, vandrer og flygter; krager, finker og måger med vingeslag; pilgrimme der taler
- [x] The Memory er ånder (ingen død jord): sølvblege soldater, Erevoss med tåge; ekkoer fra de faldne driver dertil og fremskynder Opvågningen — helten kan fange dem
- [x] De Vågnende Sten midt i verden lyser efterhånden som verden vågner
- [x] Krøniken: verdens begivenheder med årsag, sted (tryk = kig) og minimap-blink; fase-mærke med nedtælling; intro; "The World" og "Chronicle" i menuen
- [x] Skilte over lejrene; De Ældgamle (level 20) i to hjørner med tre nye legendariske items
- [x] Plyndrere bærer stjålet guld; bannere og beskeder står længere

### ✅ M9 — "Verdener og detaljer" (oktober 2026)
- [x] Fire kort: The Ashen Isle, The Sundered Vale (flod), The Spine of Khal'dur (bjergryg), The Drowned Marches (søer) — valg på startskærmen, egen historie i introen
- [x] Jorden: håndtegnede teksturer pr. region, trådte stier og pletter, bunddække (græs, blomster, bregner, småsten)
- [x] Blandede træer med egne farvetoner; bølgende vand med kystskum; ting omkring kro, marked, brønde, tårne og miner
- [x] Navnesten (7 pr. kort), mindesmærker, regionernes historie, navngivne lejre, heltens replikker
- [x] Alt kan nås fra basen (lommer åbnes); gem-version 3

### ✅ M10 — "Biomer, årstider og miner" (oktober 2026)
- [x] Seks biomer (Temperate, Winter, Desert, Tropical, Volcanic, Heath) og fire årstider — valgt eller tilfældige; Small/Normal/Large; ny verden hver gang (nyt frø)
- [x] Sne på jord, træer, sten og tage; lavahav; vejr (sne, regn, støv, aske, blade, blæst); egne kaktusser fra generatoren
- [x] Miner på 10/15/20 tusind guld; Motherlode 30–50 tusind og Deep Quarry (sten), vogtet; måler med fem (seks) stadier; årerne svinder; heldige fund
- [x] Forslag til RNG, huler, begivenheder og WC3-følelsen i GDD 17a–b; gem-version 4

### ✅ M11 — "Huler, begivenheder og championer" (oktober 2026)
- [x] Rettelser: kaktusser fra vores egen generator (ingen potter), lavasøer inde i landet og askehav, minernes stadier kun som synlige tegn (tryk = tal)
- [x] Huler: indgang i bjergene, 5–7 rum med lejre, skattekiste, boss og låst guldkiste; mørke, lygte, kamera- og minimapgrænser; gem-version 5
- [x] Begivenheder: Blood Moon, Eclipse, Starfall (stjernekrystaller), Gold rush, Hidden shrine, Wandering sellswords, Ambush (krager) — tegn først, krønike bagefter
- [x] Championer: Fiery, Swift, Vampiric, Shielded med ring, skær, skiltets ruder og ekstra drop
- [x] game-assets: krystaller og lejrbål i vores generator

### ✅ M12 — "Racer, modstander og helte" (oktober 2026)
- [x] Ro på skærmen (Jon): én begivenhed ad gangen med 7–10 min imellem; kun vigtige krønikeposter på skærmen; færre plyndringer
- [x] Karavanen: eskortér (belønning, lavere priser) eller plyndr (loot, højere priser); vogn fra generatoren
- [x] Mindre bygninger: tre byggepladser pr. felt, hallen fylder ét felt; gem-version 6
- [x] Racer som data; The Architects spilbar (blå bygninger, Footman, Marksman, Peasant); racevalg på startskærmen
- [x] AI-modstander med tilfældig race (rød ved samme race): arbejdere, kaserner, tårne, bølger, egen helt; sejr = udryd modstanderen; gem-version 7
- [x] The Memory neutral i Erevoss (vogtere, ekkoer); The Unnamed vogter stenene i stedet for at angribe
- [x] Tre helte pr. race med heltevalg; designet tre til The Dreaming og The Unmade (GDD 6.3)
- [x] Prospektering: arbejdere finder skjulte guldårer

### ✅ M13 — "Helten i centrum" (oktober 2026)
- [x] Figurerne følger terrænets højde (ingen arbejdere under sneen)
- [x] Ordentlig stifinding: fint navigationsgitter med A* rundt om bygninger, træer og sten
- [x] Holdfarver: man er blå, modstanderen rød, vildmarken rav, The Memory sølv, The Unnamed violet, neutrale lyse
- [x] Alle evner er heltens egne (tre pr. helt); essensen giver egenskab og retning
- [x] Items: seks udstyrspladser + rygsæk, rullet udstyr med affikser og navne, mange nye stats (krit, fart, livsstjæl, cdr, evnestyrke, torne, guldfund, XP), nye våben, hjelme, brynjer, støvler og smykker; gem-version 8
- [x] Helte med personlighed: egne stemmer, synligt udstyr, runecirkel og kappe i holdfarve, vokser med level, bedrifter og tilnavne; heltekort med udstyr, evner og bedrifter

### ✅ M14a — "WC3-følelsen: personlighed" (oktober 2026)
- [x] Analyse af hvad der gjorde WC3 til WC3 (GDD 17b, ni søjler, kilder) og plan
- [x] Alle enheder svarer med egne ord (valg, gå, angrib, høst, byg, færdig, klar); irriterede svar fra fjerde tryk i træk; heltene har egne gå- og irriterede replikker
- [x] Dyrene snøfter, når man prikker til dem, og sprænges ved femte prik
- [x] Levende 3D-portræt af helten i helteknappen; level som mærke
- [x] Advarsler i racens egen stemme

### 📋 Næste: M14b+
The Dreaming som race, Ascension-evner pr. helt (stierne er stadig fælles), hvad Opvågningen betyder (Jon: ikke nødvendigvis ondt), træer der gror igen, musik. AI-heltens og karavanens tilstand gemmes ikke endnu. Se `docs/GDD.md` afsnit 16–17.

---

## 9. Decision Log

| Dato | Beslutning | Begrundelse |
|---|---|---|
| 2026-03-23 | Godot 4 valgt | Open source, CC-venligt, ingen royalties |
| 2026-03-23 | Isometrisk perspektiv | Nærmest WC3-feel, god mobil-UX |
| 2026-03-23 | PC-first til test, mobil-minded fra start | Touch tænkes ind fra dag 1 |
| 2026-03-23 | Orc/Warrior som første hero | Simpel mekanik, god til at etablere kampfølelse |
| 2026-03-23 | Claude API til AI-modstander | Dynamisk frem for scripted behaviour trees |
| 2026-03-27 | Claude API fravalgt — Ollama valgt | Claude API er uacceptabel omkostningsmodel for slutbrugere. Ollama er gratis, kører lokalt, kræver ingen internet under spil. Model: llama3.2. Endpoint: http://localhost:11434/api/generate |
| 2026-03-23 | 9-agent multiagent arkitektur | Specialisering, parallelitet, skalerbarhed |
| 2026-10-09 | Godot fravalgt — three.js + Vite valgt | Jon udvikler og tester fra mobilen. Godots styrke er editoren, som ikke bruges. Web-build er få MB mod ~40 MB, og Claude kan selv teste i headless browser |
| 2026-10-09 | Ollama droppet helt | Kan ikke køre i browseren og skal ikke bruges. AI-modstanderen bliver regelbaseret |
| 2026-10-10 | Sten som tredje ressource | Jons ønske: arbejdere samler guld, træ og sten. Sten hugges i bjergene og bruges til tårne og større bygninger |
| 2026-10-10 | Terrænet tegnes som ét mesh, hex kun i logikken | Jon: hexagonerne så brætspilsagtige ud |
| 2026-10-10 | Hvert træ og hver sten er en ressource | Jons ønske: alt der ligner træ eller sten skal kunne høstes |
| 2026-10-10 | Spillet er på engelsk | Jons ønske. Koden, kommentarer og docs forbliver på dansk |
| 2026-10-10 | Helte har Strength/Agility/Intelligence | Jons ønske; klassisk WC3-model. Kan øges med bøger, udstyr og ofringer ved alteret |
| 2026-10-11 | Intet XP-loft fra creeps; XP skaleres efter level-forskel | Jons ønske: man skal altid kunne få XP, men lave fjender giver mindre og høje mere |
| 2026-10-11 | Upkeep for stor hær | Jons ønske: 41+ forsyning = 30 % mindre guld, 71+ = 60 % |
| 2026-10-11 | Spillængde 20–35 min | Jon: ok for nu |
| 2026-10-11 | Opgraderinger og forskning til bygninger og units | Jons ønske; WC3-tiers (Stronghold/Fortress) låser forskningslevels op |
| 2026-10-11 | Ascension: stien der passer er gratis, andre koster ressourcer; level 11–20 kræver Ascension | Valget skal føles spillet til, ikke bare købt |
| 2026-10-11 | Ny skærm: helteknap i stedet for heltepanel, HUD efter valg, indstillinger | Jon: for meget UI på skærmen og for tæt zoom; heltens ting kun når helten er valgt |
| 2026-10-11 | Høst inden for 2 hex (først 1,5), ellers ledig; tilbagevenden efter jagt (10 s) | Jons regler |
| 2026-10-11 | Valg låst indtil Deselect; Strongholds kan bygges; tier 2 omdøbt til Citadel | Jons ønsker; Citadel undgår to ting med samme navn |
| 2026-10-12 | The Memory er ånder, ikke død jord | Jon. Ekkoer fra de faldne driver til Erevoss og fremskynder Opvågningen; helten kan fange dem |
| 2026-10-12 | Lore: The Unnamed blev glemt, og hvert minde rummer en stump af navnet | Jon: "lad os bare gå med det, jeg vil gerne overraskes" |
| 2026-10-12 | Dyr fra Quaternius (CC0) via en offentlig kopi med Quaternius' egen licensfil | Den officielle zip ligger på Google Drive; game-assets D-013 |
| 2026-10-12 | Fire kort med hver sin form og historie, valgt på startskærmen | Jons ønske: forskellige maps. Alle 48×48 med baserne i hver sin ende |
| 2026-10-12 | Jorden får håndtegnede teksturer, stier og bunddække; træer blandes | Jon: jorden var for simpel og ensfarvet, grafikken manglede personlighed |
| 2026-10-12 | Biom, årstid og størrelse vælges eller trækkes; ny verden (frø) hver gang som standard | Jons ønske: genspilning og RNG |
| 2026-10-12 | Minestørrelser 10/15/20 tusind, Motherlode 30–50 tusind, Deep Quarry for sten | Jons tal; kæmpeårerne ligger midt mellem baserne og bliver kampområder |
| 2026-10-12 | Huler ligger langt øst i hex-gitteret (q ≥ 400, x > 3000) | Stifinding virker derinde uden at blande sig med kortet; ingen tåge og intet vejr derinde. Gem-version 5 |
| 2026-10-12 | Begivenheder gemmes ikke | De varer få minutter; efter "fortsæt" starter nedtællingen forfra |
| 2026-10-12 | Championer trækkes med lejrens eget frø | Kortet ændres ikke, og gemte spil får de samme championer |
| 2026-10-13 | Man spiller mod en AI-modstander af en standardrace; den der udrydder den anden, vinder | Jon: som WC3. Spilleren vælger race, AI'en får en tilfældig (rød ved samme race) |
| 2026-10-13 | The Memory og The Unnamed er neutrale entiteter på kortet | Jon: ikke fjender der går efter spilleren; de bliver mere aktive, når verden vågner. Hvad opvågningen betyder, er åbent |
| 2026-10-13 | Mindre bygninger, tre pladser pr. felt | Jon: lidt plads på mobilskærmen; en bygning skal ikke fylde et helt felt |
| 2026-10-13 | Én begivenhed ad gangen, 7–10 min imellem; kun vigtige tekster på skærmen | Jon: for meget tekst og for mange begivenheder |
| 2026-10-13 | Tre helte pr. race, én vælges ved start | Jons valg; The Dreaming og The Unmade er designet, men ikke spilbare endnu |
| 2026-10-14 | Stifinding på et fint navigationsgitter (2×2) uden for hulerne | Jon: units sad fast ved bygninger. Hex-gitteret er for groft til mindre bygninger og træer |
| 2026-10-14 | Faste holdfarver: spilleren blå, modstanderen rød, andre efter tilhørsforhold | Jon: tydeligt hvem der er hvem. Modstanderen er "den anden spiller" (senere kampagne/person) |
| 2026-10-14 | Alle evner er heltens egne; essensen giver ikke evner | Jon: alle skills skal være hero specific |
| 2026-10-14 | Udstyrspladser og rullet udstyr med affikser; gem-version 8 | Jon: heltene skal bygges op med items og stats; items var for simple |
| 2026-10-14 | Helte vokser med level, viser deres udstyr og får tilnavne for bedrifter | Jon: heltene skal fylde meget mere og have personlighed |
| 2026-10-14 | Lærreder der læses/skrives pixelvis (minimappets tåge, orkehud) bruger `willReadFrequently` | putImageData/getImageData på et GPU-lærred ventede på grafikkortet i op til 4 s — Jons frys i lange spil |
| 2026-10-14 | Gem-version 7 kan stadig fortsættes; items lægges om på de nye pladser | Jons lange spil skal ikke gå tabt |
| 2026-10-14 | WC3-følelsen kommer fra personlighed i alt: enheder svarer, portræt, dyr med vits (GDD 17b) | Jon: "Undersøg i dybden hvad der gjorde WC3 til det det var … Det er dét vi skal fange" |
| 2026-10-14 | Stemmer vises som korte bobler kun når spilleren selv gør noget | Personlighed uden at fylde skærmen (Jon: for meget tekst) |
| 2026-10-13 | Gem-version 7 | Modstanderen har race, arbejdere og helt; Erevoss flytter |
| 2026-10-12 | Gem-version 4 (M10) | Gemmet husker biom, årstid, størrelse og frø |
| 2026-10-12 | Gem-version 3 (M9) | Kortene og mindesmærkerne ændrer placeringen af lejre og kister |
| 2026-10-12 | Gem-version 2 | De Ældgamles lejre ændrer kortet, så gemte spil fra før M8 kan ikke fortsættes |
| 2026-10-10 | Første AI-modstander er The Memory | Skeletmodellerne findes; regelbaseret AI med bølger, tilpasning og tre sværhedsgrader |
| 2026-10-10 | Dag og nat med | Rytme og taktik (GDD 4.6) |
| 2026-10-10 | Lyd syntetiseres med WebAudio indtil videre | Ingen lydfiler i asset-biblioteket endnu; virker uden downloads |
| 2026-10-10 | Rigtige lyde: Sonniss GDC-klip + Kenney (CC0) | Jons lydpakker; Sonniss-licensen tillader brug i spil (ikke salg af lydene som de er, ingen AI-træning). Kun bearbejdede klip ligger i repoerne (game-assets D-011) |
| 2026-10-10 | Gem spil i browserens localStorage | Virker på telefonen uden server; ét gemt spil ad gangen |
| 2026-10-09 | 3D low-poly (KayKit) frem for 2D-sprites | Delt assetbibliotek med Tideborn, rigtige animationer. Klodsgrafik af grundformer er udelukket |
| 2026-03-23 | Hero progression: 2 tiers + Ascension ved level 10 | Level 10 er vendepunkt ikke loft — giver dybde og replay-value |
| 2026-03-23 | Unit-progression: Veteranstatus + spillerstil-tracking | Løser WC3's counter-problem — specialisering er levedygtig strategi |

---

## 10. Kodestandarder

- Kommentarer og variabelnavne på **dansk**
- Scripts max 200 linjer — opdel ellers
- Brug begivenhedsbussen (`src/events.js`) frem for direkte referencer mellem systemer
- Commit-format: `feat:`, `fix:`, `docs:`, `balance:`, `lore:`

---

## 11. Sikkerhedsregler for filhåndtering

Disse regler gælder altid — men er særligt vigtige hvis CC køres med `--dangerously-skip-permissions`.

### Regel 1: Ingen sletning — kun flytning
CC må **aldrig** bruge `rm`, `rmdir`, `os.remove()`, `fs.unlink()` eller tilsvarende kommandoer til at slette filer eller mapper.

Hvis CC vil fjerne en fil, skal den i stedet flyttes til:
```
the-waking-world/_trash/YYYY-MM-DD_HH-MM/[original-sti]/filnavn
```

Eksempel — CC vil slette `scripts/core/old_system.gd`:
```
→ flyttes til _trash/2026-03-23_14-32/scripts/core/old_system.gd
```

Timestamp-mappen sikrer at intet overskrives ved flere flytninger samme dag.

### Regel 2: _trash/ er hellig
- `_trash/` må **aldrig** selv slettes eller tømmes af CC
- `_trash/` er tilføjet til `.gitignore` — den synkroniseres ikke til GitHub
- Kun Jon tømmer `_trash/` manuelt når han er sikker på indholdet ikke skal bruges

### Regel 3: Forsigtig med filer udenfor projektmappen
Hvis CC køres med `--dangerously-skip-permissions`, gælder:
- CC må **kun** oprette, redigere og flytte filer inden for `the-waking-world/`
- CC må **aldrig** røre filer udenfor projektmappen — hverken læse, skrive eller flytte
- Hvis en opgave kræver adgang udenfor projektmappen, skal CC **spørge Jon først**

### Regel 4: Bekræft før store operationer
Selv med `--dangerously-skip-permissions` skal CC **altid** bekræfte med Jon før:
- Omdøbning af mere end 3 filer på én gang
- Flytning af hele mapper
- Ændringer i projektets rodmappe (ikke undermapper)

### Gendannelse af fejlflyttede filer
Hvis noget er flyttet til `_trash/` ved en fejl:
1. Find filen i `_trash/[timestamp]/`
2. Flyt den manuelt tilbage til original-stien
3. Eller bed CC om at gendanne den — den ved hvor den kom fra

---

*Sidst opdateret: 2026-10-14*
