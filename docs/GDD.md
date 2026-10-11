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
Start: Storlejr + 5 bærere (3 på guld, 1 på træ, 1 på sten) + guldmine, skov og stenbjerg tæt ved
  ↓
Bærere samler guld, træ og sten  →  byg hytter, savværk og tårne
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
| Hovedhal (Storlejr) | 3,3× | **10–12× højere og fylder 3 hex-felter**, så porten er højere end helten |
| Almindelig bygning (kaserne, smedje) | 1,4× | **3–4×**, dørene højere end helten |
| Lille bygning (hytte, brønd) | under 1× | **3×**, dørene højere end helten |
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

- **Tåge:** Uudforsket land er helt sort, så man ikke kan se, hvad der gemmer sig. Udforsket land uden dine units er dæmpet, og der ser du terræn og bygninger men ikke fjender eller items.
- **Minimap** i et hjørne. Tryk på det for at flytte kameraet. Det viser creep-lejre efter sværhedsgrad som farvede prikker.

### 4.6 Dag og nat (M6)

Et døgn varer 8 minutter: 5 min dag, 3 min nat med skumring og daggry. Om natten bliver himlen mørkeblå, en lygte lyser omkring helten, udsynet falder 25 %, creeps opdager dig først tættere på (de sover tungere), og The Memorys soldater slår 20 % hårdere. Et ur øverst til højre viser dag/nat og tid til næste skift.

---

## 5. Økonomi og basebygning

### 5.1 Ressourcer

| Ressource | Kilde | Bruges til |
|---|---|---|
| **Guld** | Guldminer (begrænset mængde, løber tør) | Alt |
| **Træ** | Hvert eneste træ på kortet (fældes og bliver til en stub) | Bygninger, avancerede units |
| **Sten** | Hver eneste sten: små sten i landskabet og store grå klippeblokke i stenbrud | Tårne, større bygninger, opgraderinger |
| **Forsyning** | Forsyningsbygninger (max 100) | Loft over hærens størrelse |

**Arbejdere** går hen til minen eller skoven, arbejder et øjeblik og bærer ressourcerne hjem til hovedhallen. Det er ikke øjeblikkelig indsamling. **Upkeep (M7, Jons beslutning):** en stor hær koster. Op til 40 brugt forsyning er der intet upkeep; fra 41 giver minerne 30 % mindre guld (*Low upkeep*), fra 71 giver de 60 % mindre (*High upkeep*). Forsyningstælleren skifter farve og viser fradraget, og et tryk på den forklarer det. Det belønner en lille hær med stærke helte og veteraner.

**Startressourcer:** 300 guld, 150 træ, 80 sten. En tur giver 10 guld, 10 træ eller 8 sten. En guldmine rummer 8.000 guld (startminen 12.000). Et træ i skoven giver 40 træ, et frit træ 30, en klippeblok i et stenbrud 150 sten og en lille sten 25. Når alle træer i et skovfelt er fældet, kan man gå igennem. Guldminer har lysende guldårer og glimt, så de er lette at kende. Storlejren giver 12 forsyning, en hytte 10, helten koster 5 og en bærer 1.

**Styring af bærere (M3):** Tryk på en bærer for at vælge den. Tryk derefter på en mine, et træ eller en sten for at hente, eller på en byggeplads for at bygge videre. Panelet har knapper til at hente den nærmeste ressource og til at bygge. Knappen "ledige" vælger den næste bærer, der ikke laver noget. Nye bærere går selv i guldminen.

### 5.2 Byggesystem på hex

- En bygning fylder **ét hex-felt**. Store bygninger som hovedhallen fylder tre felter i en trekant.
- **Byg:** Vælg en bærer → tryk på en bygning i panelet → tryk på et felt (grøn = muligt, rød = ikke muligt, og bjælken siger hvorfor) → *Byg her*. Bæreren går derhen, og bygningen rejser sig gennem tre byggestadier. Den bygger kun, mens en bærer arbejder på den.
- Bygninger kan **opgraderes**, **repareres** og **rives ned** (halvdelen af prisen tilbage).

### 5.3 The Tide — bygninger (tech-træ)

Navnene er arbejdsnavne. Modellerne er KayKit Hexagon i holdfarve.

| Bygning | Tier | Funktion | Model (nu) |
|---|---|---|---|
| **Storlejr** → **Stormhal** → **Tidevandets Hal** | 1 → 2 → 3 | Hovedbygning, bærere, modtager alle ressourcer, låser tiers op | castle |
| **Ånde-alter** | 1 | Helten genopstår her og heles tæt ved (vælg nye helte kommer senere) | church |
| **Krigerlejr** | 1 | Grunts, spydkastere | barracks |
| **Forsyningshytte** | 1 | +10 forsyning | home_a / home_b |
| **Vagttårn** | 1 | Forsvar | tower_a / tower_catapult |
| **Smedje** (*Forge*) | 1 | Våben- og rustningsopgraderinger | blacksmith |
| **Savværk** | 1 | Modtager træ og sten (byg det ved skoven), opgraderinger senere | lumbermill |
| **Markedsplads** | 1 (M3) | Egen butik: forbrugsitems og simpelt udstyr | market |
| **Ulvekennel** | 2 | Ryttere | stable* |
| **Åndehytte** | 2 | Stormkaldere (magikere) | tower_b |
| **Stormværksted** | 3 | Belejringsmaskiner | windmill / watermill |

\* Mangler en passende model.

**Opgraderinger og forskning (M7):** Vælg en færdig bygning, og panelet viser hvad den kan forske i. Én ting ad gangen pr. bygning; den kan annulleres med fuld refusion. Level 2 af en forskning kræver *Citadel*, level 3 kræver *Fortress*.

| Bygning | Udvikling | Levels | Virkning |
|---|---|---|---|
| Great Hall | → **Citadel** → **Fortress** | 2 | +800 / +1200 liv, låser forskningens level 2 og 3 op; flag og små tårne på hallen |
| Great Hall | Deep Mining | 2 | +2 guld pr. tur pr. level |
| Forge | Forged Axes / Barbed Spears | 3 | Nærkamp- / afstandssoldater +3 skade pr. level |
| Forge | Hardened Hides | 3 | Alle soldater +1 rustning pr. level |
| War Camp | Battle Drills | 1 | Veteraner 50 % hurtigere, dobbelt heling uden for kamp |
| Lumber Mill | Sharper Axes / Stone Picks | 2 | +2 træ / sten pr. tur pr. level |
| Lumber Mill | Masonry | 3 | Bygninger +15 % liv og +1 rustning pr. level |
| Watch Tower | → **Guard Tower** (Citadel) → **Cannon Tower** (Fortress) | 2 | Ny model hver gang, mere skade, rækkevidde, liv og rustning; Cannon Tower rammer også alle fjender tæt på målet (60 %) |
| Forge | Burning Bolts | 2 | Alle tårne +20 % skade og +2 rækkevidde pr. level |

Priser og tider står i `src/udviklingdata.js`.

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
- Level 1–10 med tre evner (låst op ved level 1, 3 og 6), og ved level 10 kommer **Ascension** (afsnit 6.4). Level 11–20 kræver Ascension; erfaringen gemmes imens.
- **XP efter level-forskel (Jons beslutning, intet loft):** man kan altid få XP, men fjender under heltens level giver 15 % mindre pr. level (mindst 10 %), og fjender over giver 10 % mere pr. level (højst 150 %).

### 6.1 Essens — valget ved start

Spillet er på **engelsk**. Essenserne hedder *Violence* (Vold), *Patience* (Tålmodighed) og *Sacrifice* (Ofring). Ved start trykker man på en essens og ser:
- hvordan helten kæmper (kort beskrivelse),
- hvilken egenskab der vokser mest (Violence → Strength, Patience → Agility, Sacrifice → Intelligence),
- de tre evner og hvornår de låses op,
- to antydninger af hvad valget kan føre til (hærens veteran-grene og Ascension ved level 10) og "…and more, revealed as you play". Resten afsløres ikke.

Essensen giver også spillestilsmålerne en retning fra start (Violence → aggression, Patience → overlevelse, Sacrifice → kaos), så den matchende veteran-gren er billig i begyndelsen. Derefter er det spillerens faktiske adfærd, der flytter målerne. Heltekortet (tryk på STR/AGI/INT) viser en blød beskrivelse af ens spillestil — aldrig tal.

### 6.2 Egenskaber (Strength, Agility, Intelligence)

| Egenskab | Pr. point | Start (Ork-kriger) | Pr. level |
|---|---|---|---|
| **Strength** (hovedegenskab) | +18 liv, +0,05 liv/s, +1,5 skade | 22 | +3 |
| **Agility** | +0,15 rustning, +2 % angrebsfart | 14 | +1,5 |
| **Intelligence** | +10 mana, +0,05 mana/s, +1 % evnestyrke | 12 | +1,5 |

Essensens egenskab starter 2 højere og vokser +1 ekstra pr. level. Helten løber 20 % hurtigere end før (fart 6).

**Flere egenskaber ud over levels:**
- **Bøger** (Tome of Strength/Agility/Intelligence +2, Tome of Power +2 til alle): fra kister og stærke lejre, og købmanden sælger de tre første.
- **Udstyr** med egenskaber (fx Iron Sword +2 STR, Hunter's Quiver +5 AGI, Mage's Tome +6 INT).
- **Ofringer ved Spirit Altar** (Ånde-alteret): +1 i en valgfri egenskab for guld og sten; prisen stiger for hver ofring.

### 6.4 Ascension (M7)

Ved level 10 lyser knappen **Ascend** op. Spilleren vælger én af tre stier; valget kan ikke fortrydes. Stien der passer til spillestilen er gratis, de andre koster 300 guld og 150 sten ("goes against your nature"). Overlevelse → Warlord, aggression → Bloodbound, kaos eller blandet → Avatar. Helten bliver lidt større, får et skær i stiens farve og en ny titel.

| Sti | Passiv | Level 10 | Level 14 |
|---|---|---|---|
| **Warlord** (+5 STR, +3 AGI) | Soldater tæt på: +15 % skade og +2 rustning (+25 % / +3 fra level 16); helten +2 rustning. Bærer et flag | **Rally:** heler 25 %, soldater angriber 35 % hurtigere i 8 s | **Hold the Line:** 40 % mindre skade i 8 s for helten og soldaterne |
| **Avatar** (+6 INT, +2 AGI) | 25 % chance for lyn på målet og to nære fjender; +50 % mana-regeneration | **Chain Lightning:** 140 skade, springer til fire mere | **Tempest:** storm om helten i 6 s, 45 skade pr. sekund |
| **Bloodbound** (+6 STR, +2 AGI) | Op til +60 % skade jo lavere liv, 10 % livsstjæl; −2 rustning, halv heling | **Crimson Leap:** koster 12 % liv, spring på en fjende, 2× skade hvor den lander | **Bloodrage:** koster 20 % liv, +60 % angrebsfart og +30 % livsstjæl i 10 s, men 20 % mere skade |

Stiens to evner ligger i en ekstra række over de tre essens-evner.

### 6.3 The Tide — helte (Forslag)

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
- Alle creeps giver **guld**, når de dør (mere for højere level og 5× for bosser).
- Hver lejr har et **drop-bord** efter sit niveau (se 7.1). Den sidste creep, der dør, taber lejrens item.
- Guldposer og skrifter samles op, når helten går hen over dem.
- Bosser taber altid et item fra et særligt legendarisk bord.
- Kister og ruiner har deres egne borde. Kisten ved en boss er låst, så længe bossens lejr lever.
- **Butikker:** Markedspladsen (egen, M3) og Købmanden (neutral) sælger forbrug og simple permanente items. Tryk på købmanden, så går helten derhen, og butikken åbner.

Alle items i spillet står i `src/itemdata.js` (22 items fordelt på fem typer og fire sjældenheder).

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
| **Tryk** på jorden, fjende, item, kiste eller ressource (med noget valgt) | Kommando: gå, angrib, saml op, åbn, høst |
| **Hold og træk** | Markér et område (vælg flere) |
| **To fingre træk** | Flyt kameraet |
| **Knib** | Zoom |
| **Helteknappen** (øverst til venstre) | Vælg helten og åbn/luk heltens overblik |
| **✕ Deselect** (nederst til venstre) | Intet valgt — tryk på jorden flytter ingen |
| **Hærknap** | Vælg alle kamp-units |
| **Gruppeknapper 1–3** | Gem og vælg grupper |
| **Kommandopanel** (nederst til højre) | Evner, byg, træn, opgrader for det valgte |

En grøn markering viser, hvor units skal gå hen. Rød markerer et angrebsmål, og gul markerer høst, items og kister.

**Kameraet** bliver, hvor spilleren har kigget hen. Kommandoer flytter det ikke. Det følger kun helten, indtil spilleren selv trækker i kortet, og ◎-knappen sætter det til at følge igen. Kun hjemkald flytter kameraet automatisk.

**Automatisk angreb:** En helt eller unit, der ikke har fået en gå-ordre, angriber selv den nærmeste fjende, der angriber den, også fjender der skyder på afstand. Når målet dør, går den videre til den næste trussel. Under en gå-ordre går den færdig først, som i WC3.

**Hæren (M4):** Tryk på en soldat = vælg den. Dobbelttryk = alle af samme slags på skærmen. Hold fingeren stille et øjeblik og træk = vælg alle i firkanten. Hær-knappen vælger alle soldater. Med en gruppe valgt: tryk på en fjende = angrib sammen, tryk på jorden = gå i formation (nærkamp forrest, spydkastere bagerst). Med Krigerlejren valgt sætter et tryk på jorden samlingsstedet for nye soldater.

**Omrids:** Figurer der går bag en bygning, og egne bygninger der står bag en anden bygning, vises med et lysende omrids (grønt for egne, rødt for fjender).

**Skærmen (Jons feedback, oktober 2026):**
- **Øverst:** ressourcerne (guld, træ, sten, forsyning), uret og menuknappen står altid øverst, også når menuen er åben.
- **Helten:** en lille rund helteknap med level og en livsring. Den åbner heltens overblik (liv, mana, erfaring, egenskaber, afledte værdier, Ascension, spillestil). Liv, mana, erfaring og level står altid lige over helten i verden.
- **Kun når helten er valgt** vises evnerne og rygsækken. Rygsækken åbnes med en *Backpack*-knap.
- **Indstillinger** (i menuen): *View distance* (100–200 %, standard 130 %; tåge og skygger følger med), lyd, *Always show abilities* og *Always show backpack*. Er evnerne slået fra, åbner én *Hero*-knap i højre side både evner og rygsæk. Indstillingerne gemmes i browseren.
- **Menuen** lægger sig over resten af skærmen (som er dæmpet og sløret) og rummer gem, hovedmenu, indstillinger og "How to play".
- **Kortet:** ⤢ åbner minimappet i fuld skærm; tryk et sted for at kigge der, eller luk.
- **Angreb:** skærmens kant blinker rødt, og en rød plet blinker på kortet, når noget af dit bliver angrebet uden for skærmen, når en bygning angribes, eller når helten er under 30 % liv.

**Arbejdere og bygninger:** Arbejdere går til et frit felt tæt op ad bygningen (eller minen), spredt over de nærmeste sider, og vælger en anden side, hvis vejen er spærret. De kan aflevere, så snart de står op ad bygningen, også i en trængsel, og et mellempunkt på ruten tæller som nået på et par skridts afstand, så en flok ikke kredser om det. Arbejdere går igennem hinanden (som i WC3), så de aldrig kører fast i flok ved miner og bygninger. Andre figurer der mødes, glider ud til hver deres højre side, og en der står stille, skubbes til side. Ruter holder lidt afstand til blokerede felter, så de ikke skærer hjørner gennem bygninger.

**Høst (Jons regel):** Arbejderen fortsætter med samme ressource, så længe der er mere inden for 1,5 hex af den forrige kilde; ellers bliver den ledig (med en besked). Knapperne "Get gold/wood/stone" sender til den nærmeste skov, stenbrud eller mine, man kan nå. Højst to arbejdere deler et træ eller en sten, og en kilde der ikke kan nås, opgives i stedet for at prøve igen og igen. Figurer går uden om frie træer og sten, og en figur der ikke kommer nærmere i 1,5 sek., springer punktet over.

**Jagt og tilbagevenden:** Finder en helt eller soldat selv en fjende, husker den sin plads. Når fjenden er død eller stukket af, eller jagten har varet over 10 sekunder, tager den en ny trussel tæt på, ellers går den tilbage. Spillerens egne angrebsordrer vender ikke hjem.

**Byggeri:** En arbejder viser først *Get gold/wood/stone* og *Build*. *Build* åbner listen over bygninger; et valg lukker listen og viser bygningen som en grøn (kan bygges) eller rød (kan ikke) skygge, der kan trækkes eller flyttes med et tryk. *Build* bygger, *Stop* fortryder.

**Helteknappen:** første tryk hopper til helten og vælger den, næste tryk åbner overblikket; dobbelttryk åbner det med det samme. **Items på jorden:** et tryk viser navnet i sjældenhedens farve. **Top-bjælken** viser hele tallene og upkeep; uret står under den.

**Valg er låst (Jons ønske):** Når noget er valgt, vælger et tryk på en anden figur eller bygning ikke den; trykket bliver en ordre (gå derhen). Man fravælger med *Deselect* for at vælge noget nyt. Knapperne (Hero, idle, army) og vælg-firkanten virker stadig. Dobbelttryk på en af de valgte soldater vælger alle af samme slags. **Soldater til helten:** med soldater valgt sender Hero-knappen dem hen til helten.

**Inventory:** 6 udrustede pladser (giver bonusser og kan bruges) og en rygsæk med 6 pladser. Nye items udrustes, hvis der er plads, ellers lægges de i rygsækken. Info-kortet har *Equip/Unequip*. Ved købmanden og egen Marketplace har butikken fanerne *Buy* og *Sell*; *Sell* viser alle heltens items (udrustede og i rygsækken) til halv pris.

**Ting på kortet man kan angribe:** ruiner (giver 50–110 guld og 30 træ og frigør feltet), lejrenes telte og udstyr (lidt guld). Ingen angriber dem af sig selv. Kro, købmand, kilder, udkigstårne og miner kan ikke ødelægges. Åbnede kister forsvinder, og et stenbrud uden klippeblokke kan man gå igennem.

**Stronghold:** arbejdere kan bygge flere Strongholds (ét felt): ekstra hovedhaller, der træner arbejdere, modtager guld, træ og sten og giver 8 forsyning. Storlejrens tier 2 hedder nu *Citadel*.

**Gem spil:** Spillet gemmes automatisk hvert minut og når appen lægges væk, og kan gemmes fra menuen. Ved start vises "Fortsæt spillet", hvis der er et gemt spil. Gemmet ligger i telefonens browser (ét gemt spil ad gangen).

---

## 11. AI-modstander

Regelbaseret, ingen sprogmodel.

- **Byggeordrer** pr. race (åbninger), med lidt variation.
- **Creeper** med sin helt ligesom en spiller og ekspanderer.
- **Angriber** i bølger, når hæren når en vis styrke. Trækker sig, hvis den taber.
- **Sværhedsgrad:** Let / Normal / Svær styrer hastighed, fejl og snyd (ingen snyd på Normal).
- **Tilpasser sig** ud fra spillerens adfærdsmålere. Mod en aggressiv spiller bygger den flere tårne, og mod en, der creeper meget, angriber den tidligt.

**Sådan er det bygget (M5):**
- The Memory har basen i det modsatte hjørne (Gravelands, nordøst), og jorden omkring den er grå og død. Bygninger i rødt: *Bone Throne* (hal), *Crypt* (træner), *Grave Spire* (skyder), *Haunt*. Nye bygninger rejser sig efter en plan (4, 8, 12 og 16 min).
- Den tjener guld så længe tronen står, og træner *Risen*, *Bone Stalker*, *Grave Knight* og *Bone Mage*. Soldaternes level stiger hvert 4. minut — The Memory bliver stærkere jo længere spillet varer.
- Hæren vokser med tiden. Første angreb: Easy 10 min, Normal 7 min, Hard 5 min; derefter med 4,5 / 3,5 / 2,5 minutters mellemrum, og bølgerne bliver større. En bølge trækker sig, hvis den mister to tredjedele.
- Den forsvarer basen med alle hjemme, når spillerens figurer kommer tæt på.
- Tilpasning: mod en aggressiv spiller kommer tårnene 1,5 min tidligere; mod en forsigtig spiller kommer angrebene 1 min tidligere og der trænes flere Grave Knights; mod en kaotisk flere Bone Mages.
- **Sejr:** alle The Memorys bygninger er ødelagt. **Nederlag:** man har ingen bygninger tilbage (gemmet slettes). Slutskærmen viser statistik.
- Spillerens bygninger har liv, kan ødelægges (ruin) og repareres af en arbejder (vælg arbejder, tryk på bygningen).

---

## 12. Verdenstilstand i skirmish

| Fase | Hvornår | Hvad sker der |
|---|---|---|
| **Balance** | 0–12 min | Normalt spil |
| **Fald** | 12–25 min, eller tidligere hvis ingen kæmper | Guldminer giver mindre, creeps vandrer og angriber baser |
| **Opvågning** | Fra ca. 25 min | En tredje kraft (The Unnamed's tjenere) dukker op midt på kortet og angriber alle. Den giver de bedste items, hvis den besejres |

Det forhindrer, at spillet går i stå, og giver et klimaks.

**Sådan er det bygget (M6):** Faserne skifter med et banner og et dybt horn. I *Fald* giver guldminerne 25 % mindre, og hvert ~2. minut sender en vågen creep-lejr nær basen sine creeps ud for at plyndre (de giver ikke op ved leash og går efter bygninger). I *Opvågning* dukker Den Unavngivnes tjenere op ved kroen midt på kortet: en *Herald of the Unnamed*, *Hollow Knights* og *Void Witches* med lilla glød. Halvdelen marcherer mod spilleren, halvdelen mod The Memory, og de angriber alle. Når de alle er faldet, efterlader de en Tome of Power, et stærkt item og et legendarisk artefakt.

**Kroen (M6):** Helten kan gå til kroen og hyre lejesoldater for guld: *Brawler* (nærkamp), *Crossbowman* (afstand) og *Sellsword* (tung). De kræver forsyning og kæmper som spillerens egne soldater.

**Lyd (M6):** Rigtige lydfiler fra game-assets: Sonniss GDC-optagelser (økseslag, skjoldblok, træ der falder, sammenstyrtning, hanegal ved daggry, uhyggelig metal ved Opvågning, skovstemning om dagen, ugler om natten og vind) og Kenney-lyde (CC0: slag, hug i træ og sten, mønter, klik). Stemningslydene blandes efter døgnet. Kast, level op, evner, horn, natklokke og sejr/nederlag er stadig syntetiske (WebAudio), og de syntetiske lyde bruges også, mens filerne hentes. Lyde dæmpes efter afstand til kameraet og kan slås fra i menuen. `lyde.json` bestemmer hvilke lyde spillet bruger; `node tools/lyde.mjs` henter dem fra game-assets til `public/audio/`. Musik mangler stadig.

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
| Terræn (eget sammenhængende mesh), bjerge, skov, sten | ✅ Terræn i kode, natur fra KayKit Hexagon |
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
| **M1 ✅** | **Stor verden** | Verden skaleret op omkring helten (afsnit 4.1), kort på ca. 48×48 med regioner, krigens tåge, minimap, flere creep-familier og fem sværhedsgrader |
| **M2 ✅** | **Items** | Drop, opsamling, inventar med 6 pladser, eliksirer, permanente items og kister |
| **M3 ✅** | **Økonomi og base** | Bærere, guld, træ og sten, byggesystem på hex, Storlejr, hytte, savværk, tårn, krigerlejr, marked, alter |
| **M4 ✅** | **Hær** | Grunts og spydkastere fra Krigerlejren, vælg flere (firkant, dobbelttryk, Hær-knap), formation, fælles angreb, samlingspunkt, veteranstatus, grunt-grenene Ironhide/Ravager/Berserker og spillestilsmålere. Desuden: sammenhængende terræn uden synlige hexagoner, omrids gennem bygninger og gem spil |
| **M5 ✅** | **Modstander** | The Memory som regelbaseret AI: base i nordøst med ødeland, krypter der træner skeletter, spir der skyder, bølger mod spillerens base, sejr og nederlag, tre sværhedsgrader. Bygninger har liv og kan repareres |
| **M6 ✅** | **Liv i verden** | Dag og nat, verdenstilstand (Balance/Fald/Opvågning), kroen hyrer lejesoldater, syntetisk lyd |
| **M7 ✅** | **Fremskridt** | Ascension ved level 10 med tre stier og level 11–20, XP efter level-forskel, upkeep, forskning (Forge, Lumber Mill, War Camp, Great Hall) og opgraderinger (Stronghold/Fortress, Guard Tower) |
| M8+ | Flere helte, en helt til The Memory, flere racer, udforskning, kampagne | |

---

## 17. Åbne beslutninger (Jon)

1. **Arbejdsnavnene** på The Tides bygninger, units og helte — beholde, ændre?
2. ~~Dag og nat~~ — besluttet: med (M6).
3. ~~XP-loft fra creeps~~ — besluttet: intet loft, XP skaleres efter level-forskel (M7).
4. ~~Underhold~~ — besluttet: med (M7).
5. ~~Første AI-race~~ — besluttet: The Memory (M5).
6. ~~Spillængde~~ — besluttet: 20–35 minutter er ok for nu.
7. **Rækkefølgen:** M1 Stor verden → M2 Items → M3 Base, eller base før items?
