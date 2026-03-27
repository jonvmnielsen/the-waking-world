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
| Game engine | **Godot 4** | Open source, ingen royalties, GDScript ligner Python, god mobil-eksport |
| Primært sprog | **GDScript** | Pythonlignende, CC-venligt, native til Godot |
| 3D assets | **Blender** (Python API) | Programmatisk asset-pipeline, CC kan scripte det direkte |
| AI modstander | **Ollama** (llama3.2, lokalt) | Gratis, offline, ingen API-nøgle — kører på spillerens maskine |
| Perspektiv | **Isometrisk** | Nærmest WC3-følelsen, god på mobil, lavere kompleksitet end fuld 3D |
| Versionsstyring | **Git / GitHub** | Modulær udvikling, nem at rulle tilbage |

---

## 3. Projektstruktur

```
the_waking_world/
├── CLAUDE.md                        # Dette dokument
├── agents/
│   ├── AGENT_ARKITEKT.md
│   ├── AGENT_KODE.md
│   ├── AGENT_GRAFIK.md
│   ├── AGENT_MAP.md
│   ├── AGENT_LORE.md
│   ├── AGENT_AI.md
│   ├── AGENT_LYD.md
│   ├── AGENT_UI.md
│   ├── AGENT_BALANCE.md
│   └── AGENT_TEST.md
├── project.godot
├── scenes/
│   ├── world/
│   ├── heroes/
│   ├── units/
│   ├── buildings/
│   ├── ui/
│   └── effects/
├── scripts/
│   ├── core/
│   ├── ai/
│   ├── combat/
│   ├── world/
│   └── utils/
├── assets/
│   ├── sprites/
│   ├── models/
│   ├── sounds/
│   └── ui/
├── lore/
├── docs/
└── tests/
```

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
| **Kode** | AGENT_KODE.md | Godot 4, GDScript, alle spilsystemer |
| **Grafik** | AGENT_GRAFIK.md | Blender pipeline, units, visuel stil, isometrisk sprite-regler |
| **Map** | AGENT_MAP.md | Kortdesign, terrain, tilemap, objectives |
| **Lore** | AGENT_LORE.md | Verdenshistorie, narrativ, racer, dialoger, tone of voice |
| **AI** | AGENT_AI.md | Claude API integration, AI-modstander, spilstate-format |
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

**Sprint 1 fokus:** The Tide (Orc Warrior).

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

### ✅ Sprint 0 — Fundament
- [x] Vision og design dokumenteret
- [x] Tech stack valgt
- [x] CLAUDE.md + agent-filer oprettet
- [ ] Godot 4 installeret
- [ ] Git + GitHub sat op

### 🔄 Sprint 1 — "Den første helt"
- [ ] Isometrisk tilemap, lille testområde
- [ ] Orc Warrior hero med click-to-move
- [ ] Y-sorting og dybde-illusion
- [ ] Tre neutrale creeps med basis aggro
- [ ] Melee attack + damage
- [ ] HP-bar over hero og creeps
- [ ] Kamera følger hero

**Succeskriterium:** Man kan styre helten, angribe creeps, og det føles som WC3.

### 📋 Sprint 2 — "Kamp og karakter"
- Orc Warrior abilities (3 stk, Essence-variation)
- XP og leveling
- Hero death + respawn
- Forbedret creep AI
- Basis HUD

### 📋 Sprint 3 — "AI-modstanderen"
- Claude API integration
- GameStateSnapshot system
- AI observerer spillerens patterns
- Dynamisk sværhedsgrad

### 📋 Sprint 4 — "Verden lever"
- World State system
- Ressourcesystem
- Neutrale objectives
- Minimap

### 📋 Sprint 5 — "Mobilklar"
- Touch-kontrol
- UI-skalering til mobil
- Performance optimering
- Android eksport og test

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
| 2026-03-23 | Hero progression: 2 tiers + Ascension ved level 10 | Level 10 er vendepunkt ikke loft — giver dybde og replay-value |
| 2026-03-23 | Unit-progression: Veteranstatus + spillerstil-tracking | Løser WC3's counter-problem — specialisering er levedygtig strategi |

---

## 10. Kodestandarder

- Kommentarer på **dansk**
- Scripts max 200 linjer — opdel ellers
- Brug Godot signals fremfor direkte referencer
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

*Sidst opdateret: 2026-03-27*
