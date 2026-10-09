# CLAUDE.md — The Waking World
> Primær kontekst for Arkitekt-agenten og alle subagenter.
> Læs dette dokument i sin helhed ved starten af hver session.
> Opdater løbende når arkitektur, beslutninger eller vision ændres.

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
│   ├── mapdata.js            # Kortet "Askemarken": ø, lejr, skove, creep-lejre
│   ├── world.js              # 3D-verden: fliser (instancing), pynt, hav, lys
│   ├── hexgrid.js            # Hex-koordinater og A*-stifinding
│   ├── unit.js               # Grundklasse: model, animation, bevægelse, liv
│   ├── hero.js / abilities.js / orkhud.js   # Helten, evner, grøn ork-hud
│   ├── creeps.js             # Skeletter og lejre (aggro, leash, respawn)
│   ├── camera.js             # Kamera + touch (tryk, træk, knib)
│   ├── effects.js / overlay.js / hud.js     # Effekter, livsbjælker, brugerflade
│   └── style.css
├── tools/
│   ├── smoke-test.mjs        # Headless test i mobilstørrelse med skærmbilleder
│   └── byg-artefakt.mjs      # Bygger spillet som privat Claude-side
├── agents/                   # Agent-beskrivelser (skrevet til Godot-versionen — delvist forældede)
└── docs/                     # Design og balance
```

## Udvikling

- `npm install` og klon `game-assets` ved siden af dette repo (`../game-assets`).
- `npm run assets` synkroniserer modellerne i `assets.json` (kun de valgte animationer kommer med).
- `npm run dev` starter en lokal server. `npm test` bygger og kører røgtesten (skærmbilleder i `test-output/`).
- `node tools/byg-artefakt.mjs` bygger til `dist-artefakt/`, som publiceres som privat Claude-side, så Jon kan teste på mobilen. Claude-sider kan ikke servere `.glb`, så modellerne pakkes i `modelpakke.json`.
- Skala: KayKit-hexfliser skaleres ×2 (`VERDEN.hexSkala`). Hexagon-pakkens pynt skaleres med; Halloween- og figurpakker er allerede i figurstørrelse.

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
| **The Memory** | Undead | Akkumulerede erindringer | Styrke stiger jo længere spillet varer |
| **The Dreaming** | Night Elves | Halvt i verden, halvt udenfor | Indirekte påvirkning, høj kompleksitet |
| **The Unmade** | *(ny)* | Spillerdefineret faction | Saml fragmenter fra faldne — udskydes |

**Fokus nu:** The Tide (Orc Warrior). Indtil der findes en rigtig orkmodel bruges KayKits barbar med grøn hud og uden hjelm.

---

## 6. Hero-systemet

- Starter altid level 1, samme base stats — ingen cross-session magt-fordel
- Cross-session: titler, battle scars, passive traits (kosmetisk + narrativt)
- Essence-valg ved gamestart: *Vold*, *Tålmodighed* eller *Ofring*

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

### 📋 Sprint 5 — "Følelsen"
- Lyd: slag, træffere, evner, ambient
- Bedre ramt-feedback (hit-stop, blink, støv)
- Minimap
- Ægte ork-model (Quaternius eller egen)

### 📋 Sprint 6 — "Armé"
- Barracks producerer grunts, gruppevalg og kommandoer
- Veteranstatus og specialiseringsgrene (se `docs/DESIGN_PROGRESSION.md`)
- Ressourcer (guld og træ)

### 📋 Sprint 7 — "Modstanderen"
- Regelbaseret AI-modstander med egen base
- Adfærdsmålere (aggression, overlevelse, kaos)
- World State: Balance → Fald → Opvågning

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

*Sidst opdateret: 2026-10-09*
