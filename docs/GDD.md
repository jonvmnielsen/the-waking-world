# The Waking World — Spildesign (GDD)

> Samlet beskrivelse af hele spillet. Hvor intet er besluttet endnu, står der **Forslag**, og de åbne valg er samlet i afsnit 17.
> Detaljer om helte- og unit-progression står i `DESIGN_PROGRESSION.md`. Verdenens lore står i `agents/AGENT_LORE.md`.
> Sidst opdateret: 2026-10-09

---

## 1. Spillet på én side

The Waking World er et RTS/RPG i Warcraft 3's ånd, lavet til telefonen. Du bygger en base, samler guld og træ, træner en hær og fører en helt, der bliver stærkere af at rydde creep-lejre og finde items. Verden er stor og fuld af steder at udforske: guldminer med vogtere, ruiner, kroer, butikker, bosser og skjulte skatte.

Tre ting adskiller spillet fra WC3:
- **Dine units husker.** Veteraner, der overlever, får en specialisering, som afhænger af din spillestil.
- **Verden ændrer sig.** Kortet går fra Balance til Fald til Opvågning, og til sidst rejser en tredje kraft sig mod alle.
- **Lavet til touch.** Styringen kræver ikke mus og tastatur, og et spil varer 20–35 minutter.

---

## 2. Spilformer

| Form | Hvad | Hvornår |
|---|---|---|
| **Skirmish** | Dig mod 1–3 AI-modstandere på et stort kort. Byg base, creep, ekspandér og knus fjenden. | **Først — det er kernen** |
| **Udforskning** | Et meget stort kort uden fjendebase fra start. Du bygger en base og udforsker regioner, dungeons og bosser. Fjenden vågner med verdenstilstanden. | Når skirmish fungerer |
| **Kampagne** | Missioner med historie og hver sit mål (forsvar, flugt, boss, eskorte). Bygger på samme systemer. | Til sidst |

**Sejr i skirmish:** Ødelæg alle fjendens bygninger. **Nederlag:** Mist alle dine bygninger.

---

## 3. Kerneloop (skirmish)

```
Start: Hovedhal + 5 arbejdere + guldmine ved siden af
  ↓
Arbejdere samler guld og træ  →  byg Ånde-alter  →  vælg helt
  ↓
Byg kaserne, forsyning og tårne  →  træn de første units
  ↓
Helt + små hær rydder creep-lejre  →  XP, guld og items
  ↓
Ekspandér til ny guldmine  ·  opgradér hovedhallen (tier 2 og 3)
  ↓
Veteraner specialiserer sig  ·  verden går fra Balance mod Fald
  ↓
Angrib fjendens base  ·  Opvågning: en tredje kraft truer begge parter
```

**Tempo:** De første creep-lejre ryddes efter 2–3 minutter. Første kamp mod fjenden sker omkring 8–10 minutter. Et spil varer 20–35 minutter.

---

## 4. Verden og kort

### 4.1 Skala — de store forhold

Helten har den rigtige størrelse på skærmen. Det er **verden omkring helten**, der er for lille: et hus må ikke være lige så stort som helten. Derfor skaleres bygninger, natur og kort op i forhold til figurerne, mens figurerne og kameraets zoom bliver, hvor de er.

| Forhold til heltens højde | Nu | Mål |
|---|---|---|
| Hovedhal (Storlejr) | 3,3× | **5–6× højere og 4–5 helte bred** |
| Almindelig bygning (kaserne, smedje) | 1,4× | **2,5–3×** |
| Lille bygning (hytte, brønd) | under 1× | **1,5–2×** |
| Træer | 1× | **1,5–2×** |
| Sten, kasser og grave | — | Op til knæ eller hofte, så de ikke dækker figurerne |
| Tid for helten at krydse kortet | ca. 15 sek. | **60–90 sek.** (skirmish) |

Hver bygningsmodel får sin egen skalafaktor, fordi KayKit-modellerne ikke har ens størrelsesforhold indbyrdes.

### 4.2 Kortstørrelser

| Kort | Størrelse (hex-felter) | Spillere |
|---|---|---|
| Skirmish lille | ca. 48 × 48 | 1 mod 1 |
| Skirmish stor | ca. 72 × 72 | 2–4 |
| Udforskning | ca. 160 × 160, indlæses i bidder | 1 + fjender der vågner |

### 4.3 Hvad findes på kortet

- **Startbaser** med egen guldmine og skov tæt på.
- **Ekspansioner:** ekstra guldminer, der vogtes af creeps.
- **Creep-lejre** i fem sværhedsgrader (se afsnit 7), spredt så sværhedsgraden stiger væk fra baserne.
- **Neutrale bygninger:**
  - *Købmand* (goblin-agtig): sælger forbrugsitems.
  - *Kro*: hyr ekstra helte.
  - *Lejesoldater*: køb neutrale units.
  - *Livskilde og manakilde*: hel dig ved at stå tæt på.
  - *Udkigstårn*: giver udsyn over et område, når du står der.
- **Skatte og hemmeligheder:** kister, skrinekapeller med en buff, ruiner med en minibos, skjulte stier.
- **Bosser:** én eller to store lejre med legendariske items.

### 4.4 Regioner (biomer)

Hvert kort sættes sammen af regioner med hver sit udseende og egne creeps:

| Region | Udseende | Creeps |
|---|---|---|
| Askemarken | græs, grus, ruiner | plyndrere, skeletter |
| Skoven | tæt skov, lysninger | dyr (ulve, bjørne), skovånder |
| Gravlandet | døde træer, grave, krypter | skeletter, lig-magere |
| Kysten | strande, vrag, klipper | krabber, sørøvere |
| Bjergene | klipper, miner, passer | golems, trolde |
| Sumpen | vand, siv, tåge | slanger, edderkopper |

### 4.5 Krigens tåge og minimap

- **Tåge:** Uudforsket land er sort. Udforsket land uden dine units er gråt, og der ser du bygninger men ikke fjender.
- **Minimap** i et hjørne. Tryk på det for at flytte kameraet. Det viser creep-lejre efter sværhedsgrad som farvede prikker.

### 4.6 Dag og nat (Forslag)

Et døgn varer ca. 8 minutter. Om natten falder udsynet, creeps sover (det er lettere at snige sig forbi), og The Memory bliver stærkere. Det giver rytme og taktiske valg.

---

## 5. Økonomi og basebygning

### 5.1 Ressourcer

| Ressource | Kilde | Bruges til |
|---|---|---|
| **Guld** | Guldminer (begrænset mængde, løber tør) | Alt |
| **Træ** | Skov (træer fældes og forsvinder) | Bygninger, avancerede units |
| **Forsyning** | Forsyningsbygninger (max 100) | Loft over hærens størrelse |

**Arbejdere** går hen til minen eller skoven, arbejder et øjeblik og bærer ressourcerne hjem til hovedhallen. Det er ikke øjeblikkelig indsamling. Ved større hær stiger "underhold", så du får mindre guld pr. tur. Det belønner en lille hær med mange helte-items.

### 5.2 Byggesystem på hex

- En bygning fylder **ét hex-felt**. Store bygninger som hovedhallen fylder tre felter i en trekant.
- **Byg:** Vælg en arbejder → tryk *Byg* → vælg bygning → en grøn eller rød skygge viser, hvor den kan stå → tryk for at placere. Arbejderen går derhen, og bygningen vokser frem med stilladser (KayKit har stillads- og byggestadie-modeller).
- Bygninger kan **opgraderes**, **repareres** og **rives ned** (halvdelen af prisen tilbage).

### 5.3 The Tide — bygninger (tech-træ)

Navnene er arbejdsnavne. Modellerne er KayKit Hexagon i holdfarve.

| Bygning | Tier | Funktion | Model (nu) |
|---|---|---|---|
| **Storlejr** → **Stormhal** → **Tidevandets Hal** | 1 → 2 → 3 | Hovedbygning, arbejdere, afleverer ressourcer, låser tiers op | castle |
| **Ånde-alter** | 1 | Vælg og genopliv helte | church |
| **Krigerlejr** | 1 | Grunts, spydkastere | barracks |
| **Forsyningshytte** | 1 | +10 forsyning | home_a / home_b |
| **Vagttårn** | 1 | Forsvar | tower_a / tower_catapult |
| **Smedje** | 1 | Våben- og rustningsopgraderinger | blacksmith |
| **Savværk** | 1 | Bedre træhugst, flere opgraderinger | lumbermill |
| **Markedsplads** | 2 | Butik: forbrugsitems og simple artefakter | market |
| **Ulvekennel** | 2 | Ryttere | stable* |
| **Åndehytte** | 2 | Stormkaldere (magikere) | tower_b |
| **Stormværksted** | 3 | Belejringsmaskiner | windmill / watermill |

\* Mangler en passende model.

### 5.4 The Tide — units

| Unit | Rolle | Tier | Veteran-grene |
|---|---|---|---|
| **Bærer** (arbejder) | Guld, træ, byg | 1 | — |
| **Grunt** | Nærkamp, ryggrad | 1 | Ironhide / Ravager / Berserker |
| **Spydkaster** | Afstand | 1 | (skrives senere) |
| **Stormkalder** | Magiker: heal, lyn, buff | 2 | (skrives senere) |
| **Vindrytter** | Hurtig, overfald, forstyrrer | 2 | (skrives senere) |
| **Stormbuk** | Belejring mod bygninger | 3 | — |

**Modeller:** Der findes ingen ork-modeller i biblioteket endnu. Indtil da bruger vi grønne KayKit-figurer (barbar = grunt, rogue = spydkaster, mage = stormkalder). En rigtig orkpakke er det vigtigste manglende asset (se afsnit 15).

### 5.5 De andre racer

Hver race får sin egen økonomiske særhed, når de bygges:

- **The Architects:** Stærke mure og tårne, bygninger kan opgraderes på stedet.
- **The Memory:** Ødelagt land spreder sig om deres base, og de høster ånder fra faldne units.
- **The Dreaming:** Bygninger kan gå og flytte sig, og de høster uden at fælde skoven.

Den første AI-modstander er **The Memory**. Vi har allerede skeletmodellerne.

---

## 6. Helte

- **Op til 3 helte** pr. spiller. Den første er gratis fra alteret, de næste koster mere.
- Helte fra **kroen** er neutrale, og alle racer kan hyre dem.
- **Død:** Helten kan genoplives ved alteret for guld og tid. Items bliver liggende, hvor helten døde, i 60 sekunder.
- Level 1–10 med tre evner (låst op ved level 1, 3 og 6), og ved level 10 kommer **Ascension** (se `DESIGN_PROGRESSION.md`).
- XP fra creeps stopper ved level 5 (som i WC3). Derefter skal XP komme fra kamp mod fjenden. Det skubber spillet mod konfrontation.

### 6.1 The Tide — helte (Forslag)

| Helt | Rolle | Status |
|---|---|---|
| **Ork-kriger** | Nærkamp, essens Vold/Tålmodighed/Ofring | Spilbar |
| **Stormsanger** | Magiker, kædelyn, heling | Skrives |
| **Vildspor** | Jæger med dyreledsager | Skrives |

---

## 7. Creeps

### 7.1 Sværhedsgrader

Farverne vises på minimap og over lejren:

| Niveau | Farve | Creep-level | Tænkt til | Belønning |
|---|---|---|---|---|
| 1 | Grøn | 1–3 | Helt alene, level 1–2 | Lidt guld, forbrugsitem |
| 2 | Gul | 4–6 | Helt + 2–3 units | Almindeligt item |
| 3 | Orange | 7–10 | Helt + lille hær | Sjældent item |
| 4 | Rød | 11–15 | 2 helte + hær | Episk item |
| 5 | Lilla (boss) | 16–20 | Stor hær, flere helte | Legendarisk item |

### 7.2 Creep-familier

| Familie | Region | Typer | Model |
|---|---|---|---|
| Skeletter | Gravlandet | kriger, snigmorder, mager, gravvogter | ✅ KayKit Skeletons |
| Plyndrere | Askemarken | slagsbror, bueskytte, kaptajn | ✅ KayKit Adventurers (rød farve) |
| Dyr | Skoven | ulv, bjørn, vildsvin | ❌ Quaternius Animals |
| Golems | Bjergene | stengolem, krystalgolem | ❌ mangler |
| Edderkopper | Sumpen | edderkop, dronning | ❌ mangler |
| Sørøvere | Kysten | sømand, kaptajn | ❌ mangler |

### 7.3 Opførsel

- Creeps vogter en lejr og angriber som én gruppe (det virker allerede).
- De følger efter dig op til en grænse og løber derefter hjem og heler (virker allerede).
- Nogle lejre vogter noget: en guldmine, en kiste eller en butik.
- Om natten sover de, og du får et overraskelsesangreb, hvis du starter kampen (Forslag).
- **Genopstår ikke** i skirmish, som i WC3. I udforskning genopstår de langsomt.

---

## 8. Items

### 8.1 Inventar
- Hver helt har **6 pladser**. Andre units har ingen.
- Tryk på et item på jorden, så går helten hen og samler det op. Tryk i inventaret for at bruge, smide eller give et item videre.

### 8.2 Typer

| Type | Eksempel | Virkning |
|---|---|---|
| **Forbrug** | Livseliksir, manaeliksir, portalrulle | Bruges op |
| **Opladning** | Lynstav (3 ladninger) | Et antal brug |
| **Permanent** | Ulvetandskæde (+3 skade) | Passiv bonus |
| **Artefakt** | Tordenhammer (5 % chance for lyn) | Unik evne |
| **Opsamling** | Tome of Strength, guldpose | Bruges straks |

### 8.3 Sjældenhed
**Almindelig** (hvid) · **Sjælden** (blå) · **Episk** (lilla) · **Legendarisk** (orange). Farven vises som en lysstribe over item'et på jorden.

### 8.4 Drop
- Hver lejr har et **drop-bord** efter sit niveau (se 7.1). Den sidste creep, der dør, taber lejrens item.
- Bosser taber altid et item fra et særligt legendarisk bord.
- Kister og ruiner har deres egne borde.
- **Butikker:** Markedspladsen (egen) og Købmanden (neutral) sælger forbrug og simple permanente items.

### 8.5 Modeller
KayKit har våben, skjolde, flasker, kister, mønter og bøger, der kan ligge på jorden. Ikonerne i inventaret tegnes ud fra de samme modeller.

---

## 9. Kamp

- **Angrebstyper og rustningstyper** i en simpel 3×3-tabel: *Skarp / Stump / Magi* mod *Let / Tung / Befæstet*. Bonus og straf er højst ±25 %, så man ikke er hjælpeløs. Specialiserede veteraner er stadig levedygtige (se `DESIGN_PROGRESSION.md`).
- Helte gør fuld skade mod alt og tager 25 % mindre fra evner.
- **Feedback:** skadetal, et kort blink ved træf, små hit-stops på tunge slag, støv og gnister. Lyd kommer i en senere runde.

---

## 10. Styring på telefonen

Erfaringen fra dit tidligere RTS-forsøg er, at tryk-gestus skal holdes helt adskilt. Planen er:

| Gestus | Handling |
|---|---|
| **Tryk** på egen unit eller bygning | Vælg |
| **Dobbelttryk** på en unit | Vælg alle af den type på skærmen |
| **Tryk** på jorden, fjende eller ressource (med noget valgt) | Kommando: gå, angrib, høst |
| **Hold og træk** | Markér et område (vælg flere) |
| **To fingre træk** | Flyt kameraet |
| **Knib** | Zoom |
| **Heltens portræt** (venstre hjørne) | Vælg helten. Dobbelttryk = kameraet hopper til helten |
| **Hærknap** | Vælg alle kamp-units |
| **Gruppeknapper 1–3** | Gem og vælg grupper |
| **Kommandopanel** (nederst til højre) | Evner, byg, træn, opgrader for det valgte |

En grøn markering viser, hvor units skal gå hen. Rød markerer et angrebsmål, og gul markerer høst.

---

## 11. AI-modstander

Regelbaseret, ingen sprogmodel.

- **Byggeordrer** pr. race (åbninger), med lidt variation.
- **Creeper** med sin helt ligesom en spiller og ekspanderer.
- **Angriber** i bølger, når hæren når en vis styrke. Trækker sig, hvis den taber.
- **Sværhedsgrad:** Let / Normal / Svær styrer hastighed, fejl og snyd (ingen snyd på Normal).
- **Tilpasser sig** ud fra spillerens adfærdsmålere. Mod en aggressiv spiller bygger den flere tårne, og mod en, der creeper meget, angriber den tidligt.

---

## 12. Verdenstilstand i skirmish

| Fase | Hvornår | Hvad sker der |
|---|---|---|
| **Balance** | 0–12 min | Normalt spil |
| **Fald** | 12–25 min, eller tidligere hvis ingen kæmper | Guldminer giver mindre, creeps vandrer og angriber baser |
| **Opvågning** | Fra ca. 25 min | En tredje kraft (The Unnamed's tjenere) dukker op midt på kortet og angriber alle. Den giver de bedste items, hvis den besejres |

Det forhindrer, at spillet går i stå, og giver et klimaks.

---

## 13. Udforskning og kampagne (senere)

- **Udforskning:** Kortet består af regioner, der låses op. Dungeons er særlige indendørs kort (KayKit Dungeon-pakken). Der kommer quests fra neutrale figurer, og fjendens base vågner i Fald-fasen.
- **Kampagne:** 5–7 missioner pr. race, der fortæller historien om Vaelthar og The Waking. Der er mellemsekvenser i spillets egen grafik.

---

## 14. Teknik og ydelse

- **Kort i bidder:** Fliser og natur tegnes med instancing og deles op i bidder på 16×16 hex, der kun tegnes, når de er tæt på kameraet.
- **Units:** mål på højst 150 animerede figurer samtidig på en mellemklasse-telefon.
- **Stifinding:** A* på hex-gitteret med fællesruter for grupper og formationer.
- **Gem spil:** I udforskning og kampagne gemmes spillet lokalt på telefonen.

---

## 15. Assets — hvad har vi, hvad mangler

| Behov | Status |
|---|---|
| Hex-fliser, kyst, floder, veje, bjerge, skov | ✅ KayKit Hexagon |
| Bygninger i 4 holdfarver + neutrale + byggestadier | ✅ KayKit Hexagon |
| Mennesker (plyndrere, Architects-units) | ✅ KayKit Adventurers |
| Skeletter (The Memory, creeps) | ✅ KayKit Skeletons |
| Gravpladser, krypter, døde træer | ✅ KayKit Halloween |
| Dungeons, kister, items på jorden | ✅ KayKit Dungeon + Adventurers |
| **Orker til The Tide** | ❌ Vigtigst |
| Dyr | ❌ Quaternius Animals (Jon lægger zip i `game-assets/incoming/`) |
| Monstre (golems, edderkopper osv.) | ❌ Quaternius Monsters |
| Lyd og musik | ❌ |

---

## 16. Byggeplan

Hver milepæl ender med en spilbar version på GitHub Pages.

| # | Milepæl | Indhold |
|---|---|---|
| **M1** | **Stor verden** | Verden skaleret op omkring helten (afsnit 4.1), kort på ca. 48×48 med regioner, krigens tåge, minimap, flere creep-familier og fem sværhedsgrader |
| **M2** | **Items** | Drop, opsamling, inventar med 6 pladser, eliksirer, permanente items og kister |
| **M3** | **Økonomi og base** | Arbejdere, guld og træ, byggesystem på hex, Storlejr, kaserne, forsyning, alter |
| **M4** | **Hær** | Vælg og styr flere units, grunts og spydkastere, grupper, veteranstatus |
| **M5** | **Modstander** | The Memory som regelbaseret AI med base, sejr og nederlag |
| **M6** | **Liv i verden** | Dag og nat, verdenstilstand, neutrale bygninger, lyd |
| M7+ | Tier 2–3, flere helte, flere racer, udforskning, kampagne | |

---

## 17. Åbne beslutninger (Jon)

1. **Arbejdsnavnene** på The Tides bygninger, units og helte — beholde, ændre?
2. **Dag og nat** — med eller uden?
3. **XP-loft fra creeps ved level 5** som i WC3, eller fri leveling?
4. **Underhold** (mindre guld ved stor hær) — med eller uden?
5. **Første AI-race:** The Memory (vi har skeletterne) eller The Architects (vi har menneskerne)?
6. **Spillængde:** passer 20–35 minutter?
7. **Rækkefølgen:** M1 Stor verden → M2 Items → M3 Base, eller base før items?
