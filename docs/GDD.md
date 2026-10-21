# The Waking World — Spildesign (GDD)

> Samlet beskrivelse af hele spillet. Hvor intet er besluttet endnu, står der **Forslag**, og de åbne valg er samlet i afsnit 17.
> Detaljer om helte- og unit-progression står i `DESIGN_PROGRESSION.md`. Verdenens lore står i `agents/AGENT_LORE.md`.
> Sidst opdateret: 2026-10-14

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
Start: Storlejr + helten + 3 bærere (2 på guld, 1 på træ) + guldmine, skov og stenbjerg tæt ved
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

### 4.2.1 Kortene (M9)

Spilleren vælger verden på startskærmen (*Choose your world*). Alle kort er 48×48, med spilleren og The Memory i hver sin ende og kroen imellem; hvert kort har sit eget frø, sin form og sin historie (vises som første intro-kort). Valget huskes i telefonen. Et gemt spil fra et andet kort skifter kortet, når man trykker *Continue*.

| Kort | Form | Historie |
|---|---|---|
| **The Ashen Isle** | Ø, balanceret (det klassiske kort) | Askemarken brændte den nat The Unnamed blev glemt |
| **The Sundered Vale** | En flod skærer landet over; tre vadesteder, kroen ved det midterste | Floden Aun glemte sin vej, da navnene gik tabt |
| **The Spine of Khal'dur** | En bjergryg på tværs; tre pas; meget sten | The Tides hjemland; ryggen er noget enormt, der sover |
| **The Drowned Marches** | Søer, siv og snoede stier | Regnen glemte at holde op; druknede klokker ringer om natten |

Alt land hænger sammen: ø-stykker man ikke kan nå bliver skov, og lommer som bygninger lukker inde, åbnes gennem den nærmeste skov eller det nærmeste stenbrud.

### 4.2.1b Verdensvalget: biom, årstid, størrelse og nye verdener (M10)

På startskærmen vælger man ud over kortet:
- **Biom** (eller 🎲 tilfældig): *Temperate*, *Winter* (sne, frosne søer, kun nåletræer og nøgne træer), *Desert* (klitter, røde mesaer, saguaro-kaktusser og palmeoaser, støvstorme), *Tropical* (jungle, palmer, turkis vand, regnbyger), *Volcanic* (sort klippe, aske, forkullede træer, askegråt hav, lavasøer inde i landet med glødende revner, askeregn) og *Heath* (lilla lyng, tørv, vindskæve fyrretræer, blæst). Biomet maler jordens teksturer, vælger træer, planter og sten, farver vand, himmel og sol og omdøber regionerne (fx *Dune Sea*, *Frostwood*, *Fire Peaks*) med deres egen linje i krøniken.
- **Årstid** (eller 🎲): *Spring* (friskt grønt, flere blomster, regnbyger), *Summer*, *Autumn* (gult græs, røde og gule løvtræer, gule og orange lærketræer, faldende blade), *Winter* (sne på jorden, på træer, sten og tage; nøgne løvtræer; snefald). I varme biomer falder der ikke sne.
- **Størrelse**: *Small* (40×40), *Normal* (48×48), *Large* (58×58). Store kort har flere lejre, flere store miner og to Motherlodes.
- **New world every game**: et nyt frø ved hvert spil, så skove, søer, lejre, miner og minder ligger nye steder (kortets form bevares). Slået til som standard.

Et gemt spil husker hele verden (kort, biom, årstid, størrelse, frø) og bygger den igen, når man fortsætter.

### 4.2.1c Miner og stenbrud (M10)

| Mine | Guld | Hvor |
|---|---|---|
| Small gold mine | 10.000 | Ekspansioner (flest på små kort) |
| Gold mine | 15.000 | Startminen og ekspansioner |
| Rich gold mine | 20.000 | Ekspansioner (flest på store kort) |
| **The Motherlode** | 30.000–50.000 | 1 (2 på store kort) midt mellem baserne, vogtet af en dødbringende lejr |
| **Deep Quarry** (sten) | 8.000–14.000 | På den anden side af midten, også vogtet |

Man ser på selve minen hvor meget der er tilbage (Jon: visuelle tegn frem for tekst): *Full* (>75 %) har store guldkrystaller på toppen, mange årer i klippen, en stor guldbunke og to trillebøre fulde af guld; *Half full* og *Half empty* har færre årer, en mindre bunke og én trillebør; *Running low* (≤25 %) har kun få årer og en væltet, tom trillebør; *Empty* er grå med brædder for indgangen. Et sjette stadie, *Overflowing*, er for en Motherlode med mere end 25.000: krystaller rundt om, en ekstra bunke og en lysstribe mod himlen. Deep Quarry er en klippeformation, der skrumper. Tryk på en mine (med intet valgt) for et lille skilt med det præcise tal. Når man arbejder i en mine eller et stenbrud, er der en lille chance for et *heldigt fund* (en guldpose eller et item), oftere i Motherloden.

### 4.2.1d Huler, begivenheder og championer (M11)

**Huler.** Hvert kort har en huleindgang (to på store kort): en klippeåbning med fakler i bjergene eller gravlandet. Helten går ind med de soldater, der står tæt på eller er valgt. Hulen er 5–7 rum forbundet af gange (KayKit Dungeon: jord- og flisegulv, klippevægge, fakler, tønder, søjler, knogler), med lejre der bliver sværere jo længere ind man kommer, en skattekiste undervejs og en boss med en låst guldkiste i det inderste rum. Derinde er der mørkt (helten bærer en lygte), intet vejr og ingen tåge; minimappet viser en pulserende ring ved indgangen, og kameraet kan ikke panorere ud af hulen. Trappen ved indgangsrummet fører op igen. Når bossen er død, er hulen *cleared*.

**Begivenheder.** Én ad gangen (Jon, M12: der skal være tid til at afvikle hver): den første efter 7–9 minutter, og 7–10 minutter fra en er slut til den næste begynder — aldrig det samme to gange i træk. Tegnet kommer først; kun vigtige ting vises på skærmen, resten står i krøniken i menuen:

| Begivenhed | Tegn | Virkning |
|---|---|---|
| *Blood Moon* (en tilfældig nat fra nat 2, 30 %) | Rødt lys, creeps får røde øjne | Creeps slår 25 % hårdere og giver 50 % mere XP resten af natten |
| *Eclipse* (kun om dagen) | Verden bliver mørk og violet i 90 s | Ekkoerne vejer dobbelt i Erevoss |
| *Starfall* | En stjerne falder med en lysende hale, brag, lyssøjle, landet lyses op | Fire glødende stjernekrystaller (90–220 guld hver, den store kan give et item) i 4 min |
| *Gold rush* | Guld springer op af en mine, gylden lyssøjle | Minen giver dobbelt guld i 2 min |
| *Hidden shrine* | Gylden lyssøjle over en glemt helligdom | Helten får en velsignelse: liv og mana, XP eller guld (3 min) |
| *Wandering sellswords* | Et bål med tre lejesvende | Hyr dem for 70 % af kroens pris (3½ min) |
| *Ambush* | Krager kredser lavt over et sted | Plyndrere springer frem, når nogen kommer tæt på |
| *Merchant caravan* (M12) | En overdækket vogn med to bærere og tre vagter, støv bag hjulene, vogn-prik på minimappet | Følg den forbi kroen til den anden kant: guld, et item og 10 % lavere priser hos købmanden og kroen. Angrib vagterne: lasten er din, men priserne stiger 25 %. Halvvejs angriber røvere en eskorteret karavane |

Lyssøjler og bål ses også gennem tågen; selve tingene ses først, når stedet er udforsket. Tryk på et begivenhedssted med helten valgt, og han går derhen.

**Championer.** Omkring hver syvende lejr (sværhedsgrad 2–4; de lette lejre aldrig, så en helt i level 1 kan klare dem) føres af en champion: større, 80 % mere liv, 25 % mere skade og en egenskab — *Fiery* (brænder figurer tæt på), *Swift* (hurtig og slår ofte), *Vampiric* (heler af den skade den gør) eller *Shielded* (+5 rustning). Den har en drejende ring om fødderne og et skær i egenskabens farve, og lejrens skilt får to ruder i samme farve. En champion giver 2½ gange XP, ekstra guld og et ekstra item én sværhedsgrad højere.

### 4.2.2 Jorden og detaljerne (M9)

- **Jorden** har håndtegnede teksturer (græsstrå, jord med småsten, skovbund, sand, klippe), der blandes efter region, med store lyse og mørke pletter. Trådte stier forbinder basen, kroen, købmanden, brøndene, tårnene og minerne, og jorden er trådt omkring basen, stederne og lejrene.
- **Bunddække**: græstotter, blomster, bregner, svampe, buske, småsten og trædesten efter region (pynt, man går igennem; forsvinder under nye bygninger).
- **Træer**: fyrretræer blandes med løvtræer og knudrede sumptræer, og hvert træ har sin egen grønne tone (gyldne efterårstoner i Askemarken).
- **Vand** med bølger der glider og glimter, og skum langs kysten.
- **Liv omkring stederne**: kærrer, tønder, sække, bænke, hegn og flag ved kroen, markedet, brøndene, tårnene og minerne.

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

**Arbejdere** går hen til minen eller skoven, arbejder et øjeblik og bærer ressourcerne hjem til hovedhallen. Det er ikke øjeblikkelig indsamling. **Upkeep (M7, Jons tal fra M14b):** hæren kan højst fylde **100 forsyning**, og helten tæller med (5). Fra 40 brugt forsyning giver minerne 30 % mindre guld (*Low upkeep*), fra 80 giver de 60 % mindre (*High upkeep*). Forsyningen følger styrken: lette soldater (Spear Thrower, Marksman, Crossbowman) koster 1, almindelige (Grunt, Footman, Brawler) 2, og de stærkeste (Sellsword) 3; arbejdere 1. AI-modstanderens hær har loft 12/22/30 efter sværhedsgrad. Forsyningstælleren skifter farve og viser fradraget, og et tryk på den forklarer det. Det belønner en lille hær med stærke helte og veteraner.

**Startressourcer:** 300 guld, 150 træ, 80 sten. En tur giver 10 guld, 10 træ eller 8 sten. En guldmine rummer 8.000 guld (startminen 12.000). Et træ i skoven giver 40 træ, et frit træ 30, en klippeblok i et stenbrud 150 sten og en lille sten 25. Når alle træer i et skovfelt er fældet, kan man gå igennem. Guldminer har lysende guldårer og glimt, så de er lette at kende. Storlejren giver 12 forsyning, en hytte 10, helten koster 5 og en bærer 1.

**Styring af bærere (M3):** Tryk på en bærer for at vælge den. Tryk derefter på en mine, et træ eller en sten for at hente, eller på en byggeplads for at bygge videre. Panelet har knapper til at hente den nærmeste ressource og til at bygge. Knappen "ledige" vælger den næste bærer, der ikke laver noget. Nye bærere går selv i guldminen.

### 5.2 Byggesystem på hex

- **Mindre bygninger (Jon, M12):** et felt har tre små *byggepladser*, så to-tre bygninger kan stå på ét felt. Hovedhallen og Stronghold fylder et helt felt. Feltet kan betrædes, så længe der er en ledig plads, og figurer går uden om bygningerne. Skyggen hopper til den plads, der er nærmest fingeren.
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

- **The Architects** (spilbar fra M12): mennesker i blåt. *Town Hall*, *Farm* (vindmølle), *Lumber Yard* (vandmølle), *Scout Tower*, *Market Square*, *Chapel of Kings*, *Blacksmith*, *Barracks* og *Keep*. Soldater: *Footman* (sværd og skjold) og *Marksman* (armbrøst); arbejderen er en *Peasant*. Veteran-grenene hedder *Bulwark*, *Lancer* og *Zealot*. Senere: mure og opgraderinger på stedet.
- **The Dreaming** (spilbar fra M15): skovens drømmefolk, alle figurer og bygninger fra vores egen generator (game-assets D-015). *Tree of Dreams* (hal, trin *Elder Tree* og *World Tree*), *Tree of Waking* (ekstra hal), *Moonwell* (forsyning), *Hollow of Gathering* (aflevering), *Thorn Spire* (tårn → *Elder Spire* → *Moonfire Spire*), *Moonmarket*, *Moon Altar*, *Ancient of Lore* (forskning) og *Ancient of War* (kaserne). Arbejderen er en *Sprigling* med en syngende stav; soldaterne er *Thornguard* (nærkamp, autocast *Thornlash*: torne pisker alle fjender tæt på) og *Lanternkin* (lygtehoved, kaster lys, autocast *Mending Wisp*: heler den mest sårede). Grenene hedder *Barkhide*, *Thornrage* og *Wildgrowth*.
  - **Rooted (byggemåde):** træet, den ekstra hal og de to Ancients kan *Uproot* — gå et nyt sted hen (tryk på jorden) og *Take root* på nærmeste ledige plads. Mens de går, virker de ikke (ingen aflevering, træning eller forskning). Spriglings synger træ ud af træerne uden at fælde dem (træerne tømmes ikke).
  - **Dreamtime (nat):** helten og soldaterne ser lige så langt som om dagen og heler 1 % i sekundet.
  - Musik: lydisk harpe og fløjte over en svævende flade; brugerfladen i mørk violet og måneskinssølv.
- **The Unmade:** samler stumper fra de faldne. (Designet)

Man vælger selv sin race på startskærmen. Modstanderen er en tilfældig race og bygger i sin egen farve — eller rødt, hvis den er samme race som spilleren. **The Memory og The Unnamed er ikke racer**, men entiteter på kortet (afsnit 12).

---

## 6. Helte

- **Op til 3 helte** pr. spiller. Den første er gratis fra alteret, de næste koster mere.
- Helte fra **kroen** er neutrale, og alle racer kan hyre dem.
- **Død (M14d):** Helten genopstår *kun* ved Spirit Altar — for guld (100 + 30 × level) og tid (12 + 2,5 × level s). Uden alter må det bygges først. Ånderne, helten bærer, falder til jorden, hvor den faldt (afsnit 6.6).
- Level 1–10 med tre evner (rang 1 ved level 1, 3 og 6; se skill points i 6.6), og ved level 10 kommer **Ascension** (afsnit 6.4). Level 11–20 kræver Ascension; erfaringen gemmes imens.
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
- **Skill point på "Attributes":** +2 til alle egenskaber (højst 10 gange), se 6.6.
- **Velsignelser ved Spirit Altar** (Tempered, Vigor, Clarity), se 6.6. Den gamle ofring for guld og sten er fjernet.

### 6.4 Ascension (M7)

Ved level 10 lyser knappen **Ascend** op. Spilleren vælger én af tre stier; valget kan ikke fortrydes. Stien der passer til spillestilen er gratis, de andre koster 300 guld og 150 sten ("goes against your nature"). Overlevelse → Warlord, aggression → Bloodbound, kaos eller blandet → Avatar. Helten bliver lidt større, får et skær i stiens farve og en ny titel.

| Sti | Passiv | Level 10 | Level 14 |
|---|---|---|---|
| **Warlord** (+5 STR, +3 AGI) | Soldater tæt på: +15 % skade og +2 rustning (+25 % / +3 fra level 16); helten +2 rustning. Bærer et flag | **Rally:** heler 25 %, soldater angriber 35 % hurtigere i 8 s | **Hold the Line:** 40 % mindre skade i 8 s for helten og soldaterne |
| **Avatar** (+6 INT, +2 AGI) | 25 % chance for lyn på målet og to nære fjender; +50 % mana-regeneration | **Chain Lightning:** 140 skade, springer til fire mere | **Tempest:** storm om helten i 6 s, 45 skade pr. sekund |
| **Bloodbound** (+6 STR, +2 AGI) | Op til +60 % skade jo lavere liv, 10 % livsstjæl; −2 rustning, halv heling | **Crimson Leap:** koster 12 % liv, spring på en fjende, 2× skade hvor den lander | **Bloodrage:** koster 20 % liv, +60 % angrebsfart og +30 % livsstjæl i 10 s, men 20 % mere skade |

Stiens to evner ligger i en ekstra række over de tre essens-evner. Tabellen viser grundstien (Warchief).

**Hver helt sin Ascension (M14e).** Stierne er de samme tre slags og følger spillestilen som før, men hver helt har sit eget navn, sin titel, sin udgave af den passive evne og sine egne to evner (`stiheltdata.js`, `stievnedata.js`). Egenskaberne følger heltens hovedegenskab (Warlord +5/+3, Avatar +4/+4, Bloodbound +6/+2). Evnerne bygges af otte motorer (`stievner.js`): hær, kæde, zone, linje, nova, spring, raseri og mærk.

| Helt | Warlord-slags | Avatar-slags (proc) | Bloodbound-slags |
|---|---|---|---|
| **Warchief** | Warlord: Rally, Hold the Line | Earthshaker (skælv om målet): Fissure, Aftershock | Bloodbound: Crimson Leap, Bloodrage |
| **Stormsinger** | Tidecaller: Healing Rain, Tidal Ward | Storm Avatar (lyn): Chain Lightning, Tempest | Thunderborn: Ball Lightning, Overload |
| **Wildtrack** | Packmaster: Call of the Pack, Pack Hunt (alle nær er bytte) | Wild Spirit (åndespyd): Spirit Spears, Thornstorm | Apex Predator: Pounce, Frenzy |
| **Knight Commander** | Lord Marshal: Banner of Kings, Shield of the Realm | Paladin (helligt lys, heler): Judgement, Sanctuary | Crusader: Charge (lammer), Zeal |
| **Lorewarden** | High Archivist: Word of Courage, Ward of Ages | Sunscribe (solild): Sunfire, Solar Flare (på målet) | Burning Scholar: Blink of Fire, Ink of Blood |
| **Ranger Captain** | Captain of the Watch: Volley Command, Drill Formation | Windrunner (vindstød): Ricochet, Gale (skubber) | Deadeye: Tumble Shot (rul væk og skyd 3×), Bloodsight |
| **Thornwarden** | Grove Warden: Call of the Grove, Barkwall | Wildheart (rødder om målet): Rootquake, Bramblestorm | Thornrage: Trample, Sapfire |
| **Moonblade** | Night Captain: Moonsong, Veil of Night | Moonfall (måneskin): Moonbeam, Starfall | Shadowstalker: Shadowstep, Blood Moon |
| **Dreamweaver** | Dreamshepherd: Lullaby of Rest, Dream Ward | Dreamstorm (drømmegnister): Mindspark, Dream Nova | Nightmare Weaver: Night Terror, Bad Dream |

### 6.3 Heltene — tre pr. race

Man vælger sin race og én af racens tre helte ved start (sammen med essensen). AI-modstanderen får en tilfældig af sin races helte. Hver helt har sin egen model, hovedegenskab, kampform og **tre egne evner** (level 1, 3 og 6 — Jon, M13: alle evner er heltens egne). Essensen giver ikke længere evner, kun egenskab, spillestil og retning. Ascension ved level 10 gælder alle helte (stiernes evner er endnu fælles). Hovedegenskaben giver skaden (Strength, Agility eller Intelligence) og vokser mest pr. level.

| Race | Helt | Rolle | Signatur |
|---|---|---|---|
| **The Tide** | **Warchief** (ork-kriger) | Nærkamp · Strength · tohåndsøkse | *Brute Strike* — 1,8× skade |
| | **Stormsinger** (ork-shaman) | Afstand · Intelligence · lyn | *Stormlash* — lyn der springer til to fjender mere |
| | **Wildtrack** (ork-jæger) | Afstand · Agility · spyd | *Hunter's Mark* — målet tager 50 % mere skade i 8 s |
| **The Architects** | **Knight Commander** (ridder) | Nærkamp · Strength · tohåndssværd | *Shield Bash* — 1,5× skade og 1,5 s lammelse |
| | **Lorewarden** (magiker) | Afstand · Intelligence · lys | *Mending Light* — heler helten og soldaterne omkring |
| | **Ranger Captain** (skytte) | Afstand · Agility · armbrøst | *Piercing Bolt* — en bolt gennem alle fjender på en linje |

**Heltenes evner (M13):**

| Helt | Level 1 | Level 3 | Level 6 |
|---|---|---|---|
| Warchief | Brute Strike | War Cry (helten og soldaterne omkring) | Earth Stomp |
| Stormsinger | Stormlash | Squall — 70 skade og 1,5 s lammelse om helten | Eye of the Storm — lyn på fjender omkring helten i 6 s |
| Wildtrack | Hunter's Mark | Spear Volley — spyd mod op til fem fjender (1,3×) | Predator — 8 s: +60 % angrebsfart, +30 % fart, dobbelt skade på mærket bytte |
| Knight Commander | Shield Bash | Shield Wall — 40 % mindre skade i 8 s, også soldaterne | Consecration — helliget jord i 6 s: skader fjender, heler egne |
| Lorewarden | Mending Light | Binding Word — 80 skade og 2,5 s lammelse | Old Light — lyssøjle, 240 skade i et område |
| Ranger Captain | Piercing Bolt | Rapid Fire — 80 % hurtigere skud i 6 s | Rain of Bolts — tre salver, 70 skade hver i et område |
| Thornwarden | Entangling Roots — 60 skade, alle inden for 3 holdes fast 2 s | Thornmail — 8 s: +5 rustning, halvdelen af nærkampsskaden tilbage | Wrath of the Wood — 160 skade og 2,5 s fastholdt inden for 8 |
| Moonblade | Blink Strike — træder ind bag et mål og slår 2× | Moonlit Dance — 6 s: +50 % angrebsfart, 35 % undvigelse | Eclipse — forsvinder og rammer op til fem fjender 2,5× |
| Dreamweaver | Sleep — målet og alle inden for 4 sover 3,5 s | Dreamsong — 5 s: 30 liv/s til helten og soldaterne | Nightmare — 6 s: 45 skade/s inden for 7 af målet, lammelse ved start |

| Race | Helt | Rolle | Signatur |
|---|---|---|---|
| **The Dreaming** (M15) | **Thornwarden** | Nærkamp · Strength | *Entangling Roots* — rødder holder fjenderne fast |
| | **Moonblade** | Nærkamp · Agility | *Blink Strike* — træder ud af måneskinnet bag målet |
| | **Dreamweaver** | Afstand · Intelligence | *Sleep* — synger fjender i søvn |
| **The Unmade** *(designet)* | **Patchwork Champion** | Nærkamp · Strength | *Graft* — tager en stump af hver fjende den dræber |
| | **Fragment Seer** | Afstand · Intelligence | *Echo Shards* — kaster fangede ekkoer |
| | **Stitched Stalker** | Nærkamp · Agility | *Unseen* — usynlig, næste slag gør dobbelt skade |

The Memory og The Unnamed er ikke racer, men entiteter på kortet (afsnit 12), og har ingen helte.

### 6.5 Heltens personlighed og plads (M13)

Jon: *heltene skal fylde meget mere, og spillet skal centreres om at bygge dem op.*

- **Kan kendes på afstand:** helten er større end soldaterne og vokser lidt for hvert level (1,18 → 1,4 ved level 20), har en langsomt drejende **runecirkel** om fødderne og en **kappe i holdets farve**. Modstanderens helt har det samme i rødt.
- **Udstyret kan ses:** våbnet i højre hånd, skjold/bog i venstre (koggeret på ryggen) og hjelmen på hovedet. Episk og legendarisk udstyr gløder svagt.
- **Egen stemme:** hver helt har sine egne replikker (`heltreplikdata.js`) — når man trykker på den (højst hvert 20. s), ved angrebsordrer, lavt liv, bosser, modstanderens helt, legendariske fund, Ascension og nye tilnavne. Almindelige replikker højst hvert 12. sekund.
- **Bedrifter og tilnavne:** helten tæller drab, bosser, faldne fjendehelte, skatte (episk/legendarisk), genoplivninger og ekkoer. Store bedrifter giver et tilnavn og en varig bonus: *the Bloodied* (25 drab, +3 hovedegenskab), *the Giantslayer* (2 bosser, +150 liv), *the Treasure-Seeker* (3 skatte, +3), *the Kingslayer* (fjendens helt, +3 til alle), *the Returned* (genoplivet 3 gange, +200 liv), *the Echo-Keeper* (10 ekkoer, +4 INT), *the Bonebreaker* (100 drab, +5). Det nyeste tilnavn står i titlen ("Warchief the Giantslayer"); heltekortet viser bedrifterne og det næste tilnavn.
- **Heltekortet** viser titel, egenskaber, afledte værdier (inkl. kritisk, livsstjæl, kortere cooldowns, torne, guldfund, ekstra XP), udstyret, evnerne og bedrifterne.

---

### 6.6 Skill points, ånder og alteret (M14d)

Jon: *normal leveling skal køre, hvor helten stiger i levels, får lidt stats og et enkelt skill point, som man frit fordeler på sine skills. Ofringen skal være noget ekstra, en udvidelse af helten.*

**Skill points (`evnerang.js`).** Hvert level giver lidt egenskaber og ét skill point. Hver af heltens tre evner har rang 1–3: rang n kræver level 1/3/5, ultimatet level 6/11/16. Højere rang: evnestyrke ×1 / ×1,35 / ×1,7 og ventetid ×1 / ×0,88 / ×0,76. Et point kan også gå til **Attributes** (+2 til alle egenskaber, højst 10 gange). "+" på evneknappen lærer; et tryk på en ulært evne lærer den også. Helteknappen lyser, når der er et point. Gamle gemte spil får rang 1 i de evner, helten havde, og resten som frie point.

**Ånder = ekkoerne (Jon, `aander.js` + `ekko.js`).** Ånderne er de samme ekkoer, der ellers driver til Erevoss (12.1). Hvert ekko bærer ånder: 1 pr. level for det faldne væsen, boss 12, fjendens helt 15, champion ×2 (egne soldater 1). Helten fanger et ekko ved at komme inden for 5 (fra 0,6 s efter faldet, mens det stiger op), og så *bærer* den ånderne — tælleren under helteknappen viser dem. Kommer helten tæt på et færdigt alter (11), ofres de dér. Ekkoer, helten ikke når, driver videre og styrker The Memory og Opvågningen. Dør helten, falder alt, den bærer, som ét gyldent ekko (gylden ring på minimappet, en post i krøniken), der hænger, hvor helten faldt, i 3 minutter: fjendens soldater, der kommer forbi, æder det, og derefter driver det mod Erevoss. Uden Erevoss og i hulerne svæver ekkoerne, hvor de opstod, i et minut.

**Velsignelser (`velsignelser.js`, `velsignelsedata.js`).** Alteret byder på tre (helst af forskellig slags); tryk = læs, tryk igen = vælg. Pris 8 + 4 × antal købte; "New offers" koster 3.
- *Auraer* (højst to forskellige, rang 1–3, inden for 14 af helten): Command +12 % skade, Haste +10 % angrebsfart, Warding +2 rustning og 1 % liv/s — pr. rang.
- *Træk:* Thick Hide +3 rustning (×3), Vampiric Soul 7 % livsstjæl (×2), Bloodthirst (+8 % angrebsfart pr. drab i 6 s, op til 5), Second Wind (heler 35 % under 25 % liv, hvert minut), Spirit Hunger +50 % ånder (×2).
- *Åndegaver* (én ad gangen, plads 5, tast G): Spirit Shield (absorberer 250 i 8 s), Spirit Step (hop til nærmeste fjend inden for 14, 2 × slag), Spirits' Wrath (160 til alle inden for 7).
- *Egenskaber* (×5): Tempered +4 hovedegenskab, Vigor +180 liv, Clarity +100 mana og +1 mana/s.

Alt gemmes med (gem-version 8 som før; gamle spil fortsætter med 0 ånder). En død helt forbliver død, når spillet fortsættes.

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
| 6 | Isblå (Ancient) | 20 | Helt i tier 2 + stor, opgraderet hær | To af De Ældgamles skatte + Tome of Power |

**Skilte (M8):** Over hver udforsket lejr står et skilt i sværhedsgradens farve: 1–4 dødningehoveder (Easy–Deadly), en krone for bosser og en stjerne for De Ældgamle, plus creeps' level.

**De Ældgamle (M8):** To lejre i verdens fjerneste hjørner (nordvest og sydøst) med *The First Warden*, *Ancient Revenants* og *Ancient Seers* — erindringer så gamle at de har fået krop igen, med en bleg, isblå glød. De står i en ring af søjler. Skattene: *Namebreaker* (+26 skade, +8 STR, lyn), *Aegis of the First Wall* (+9 rustning, +250 liv, returnerer 30 % nærkampsskade) og *Lantern of Echoes* (+12 INT, +150 mana, livsstjæl, fanger ekkoer på dobbelt afstand). En gylden kiste ved lejren låses op når de er faldet.

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

### 8.1 Inventar (M13)
- **Seks udstyrspladser:** *Weapon, Off-hand, Head, Body, Feet, Trinket*. Kun udstyr på en plads giver bonusser. Tomme pladser viser et lille ikon for, hvad der hører til.
- **Rygsæk med 6 pladser** til eliksirer, stave og ekstra udstyr. Eliksirer bruges fra rygsækken; udstyr fra rygsækken bytter med det, der sidder på pladsen.
- Tryk på et item på jorden, så går helten hen og samler det op. Udstyr lægger sig selv på en ledig plads.

### 8.2 Typer

| Type | Eksempel | Virkning |
|---|---|---|
| **Forbrug** | Livseliksir, manaeliksir, portalrulle | Bruges op |
| **Opladning** | Lynstav (3 ladninger) | Et antal brug |
| **Permanent** | Ulvetandskæde (+3 skade) | Passiv bonus |
| **Artefakt** | Tordenhammer (5 % chance for lyn) | Unik evne |
| **Opsamling** | Tome of Strength, guldpose | Bruges straks |

### 8.3 Sjældenhed og rul (M13)
**Almindelig** (hvid) · **Sjælden** (blå) · **Episk** (lilla) · **Legendarisk** (orange). Farven vises som en lysstribe over item'et på jorden.

Jon: *items skal være meget mere varierede.* Hvert stykke udstyr, der falder, **rulles** (`udstyr.js`): det får en sjældenhed efter kildens niveau (lejrens sværhedsgrad, kister +1 for guldkister) og 1–4 tilfældige **affikser** oven i grundtingens bonus (almindelig 1, sjælden 2, episk 3, legendarisk 4). Affikserne passer til pladsen og vokser med niveauet. Navnet følger affikserne: *Swift Iron Sword of Fury*, *Thorned Plate Cuirass of the Fox*; legendariske får et eget navn (*Dawnbreaker*, *Kingsbane* …). Artefakter rulles ikke.

**Stats på udstyr:** Strength, Agility, Intelligence, skade, rustning, liv, mana, angrebsfart, liv/mana-regeneration, **kritisk chance** og **kritisk skade** (grund 175 %), **fart**, **livsstjæl**, **kortere cooldowns**, **evnestyrke**, **torne** (returneret skade), **guldfund** og **ekstra XP**.

**Grundting (M13):** våben (dolk, håndøkse, sværd, storsværd, krigsøkse, jagtbue, armbrøst, gløderod, stormstav), off-hand (træskjold, rundskjold, ridderskjold, tårnskjold, pigskjold, kogger, magerens bog), hoved (jernhjelm, hornhjelm, hætte), krop (læderbrynje, pladebrynje), fødder (læderstøvler, jernstøvler), smykke (amulet, ring) — plus artefakterne. Hjelme, brynjer, støvler og smykker er egne modeller fra vores generator (forge-lowpoly). Salgsprisen stiger med rullets sjældenhed.

### 8.4 Drop
- Alle creeps giver **guld**, når de dør (mere for højere level og 5× for bosser).
- Hver lejr har et **drop-bord** efter sit niveau (se 7.1). Den sidste creep, der dør, taber lejrens item.
- Guldposer og skrifter samles op, når helten går hen over dem.
- Bosser taber altid et item fra et særligt legendarisk bord.
- Kister og ruiner har deres egne borde. Kisten ved en boss er låst, så længe bossens lejr lever.
- **Butikker:** Markedspladsen (egen, M3) og Købmanden (neutral) sælger forbrug og simple permanente items. Tryk på købmanden, så går helten derhen, og butikken åbner.

Alle grundting står i `src/itemdata.js`; rul, affikser og navne i `src/udstyr.js`. Gemte spil husker hvert items rul (gem-version 8).

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

**Høst (Jons regel):** Arbejderen fortsætter med samme ressource, så længe der er mere inden for 2 hex af den forrige kilde; ellers bliver den ledig (med en besked). Knapperne "Get gold/wood/stone" sender til den nærmeste skov, stenbrud eller mine, man kan nå. Højst to arbejdere deler et træ eller en sten, og en kilde der ikke kan nås, opgives i stedet for at prøve igen og igen. Figurer går uden om frie træer og sten, og en figur der ikke kommer nærmere i 1,5 sek., springer punktet over.

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

**Sådan er det bygget (M5, ændret i M12):**
- Modstanderen er en af standardracerne (tilfældig) med basen i det modsatte hjørne: racens hal, kaserne, tårne og forsyningshytter i holdfarve, tæt om hallen som spillerens. Nye bygninger rejser sig efter en plan (4, 8, 12 og 16 min).
- Fem arbejdere går mellem minen og hallen; indtægten følger hvor mange der lever, og nye trænes for guld. Den træner racens nærkæmpere og skytter, og soldaternes level stiger hvert 4. minut.
- **Modstanderens helt** er en af racens tre (følger verdens frø). Den har en runecirkel, kappe og et skær i holdfarven (rød), går med i bølgerne, bruger sin signatur-evne og rejser sig i hallen 35 sekunder efter at være faldet. Den giver meget erfaring.
- Hæren vokser med tiden. Første angreb: Easy 10 min, Normal 7 min, Hard 5 min; derefter med 4,5 / 3,5 / 2,5 minutters mellemrum, og bølgerne bliver større. En bølge trækker sig, hvis den mister to tredjedele.
- Den forsvarer basen med alle hjemme, når spillerens figurer kommer tæt på.
- Tilpasning: mod en aggressiv spiller kommer tårnene 1,5 min tidligere; mod en forsigtig spiller kommer angrebene 1 min tidligere og der trænes flere nærkæmpere; mod en kaotisk flere skytter.
- **Sejr:** alle modstanderens bygninger er ødelagt. **Nederlag:** man har ingen bygninger tilbage (gemmet slettes). Slutskærmen viser statistik.
- Spillerens bygninger har liv, kan ødelægges (ruin) og repareres af en arbejder (vælg arbejder, tryk på bygningen).

---

## 12. Verdenstilstand i skirmish

| Fase | Hvornår | Hvad sker der |
|---|---|---|
| **Balance** | 0–12 min | Normalt spil |
| **Fald** | 12–25 min, eller tidligere hvis ingen kæmper | Guldminer giver mindre, creeps vandrer og angriber baser |
| **Opvågning** | Fra ca. 25 min | The Unnamed's tjenere dukker op ved De Vågnende Sten og vogter dem. De går ikke efter nogen, men den der besejrer dem, får de bedste items |

**The Memory og The Unnamed (Jon, M12):** entiteter på kortet, ikke fjender der går efter spilleren. The Memory bor i *Erevoss*, en bleg hal på stedet længst fra begge baser, vogtet af ånder der kun forsvarer sig selv. Ekkoerne fra alle der falder (begge spillere), driver dertil; for hver 15 vågner en ny vogter, og Opvågningen kommer tidligere. Hvad det præcist betyder, at verden vågner, er åbent — det behøver ikke være ondsindet.

Det forhindrer, at spillet går i stå, og giver et klimaks.

### 12.1 Ekkoer og fortællingen (M8)

**The Memory og The Unnamed.** The Memory er ét af de fire folk: ånder der ikke kan glemme. The Unnamed er den femte kraft, der holdt de fire i balance — den døde ikke, den blev *glemt*, og noget uden navn har ingen kanter. The Memory samler ekkoer, fordi hvert minde rummer en stump af det glemte navn: de tror, at hvis de husker det helt, bliver verden hel igen. Men jo mere de husker, jo nærmere kommer Opvågningen — og det der vågner, har været navnløst i tusind år (hule riddere og tomhedens hekse).

**Ekkoer.** Når noget dør (creeps, The Memorys og spillerens soldater, helten), stiger et sølvblåt lys op og driver mod Erevoss. Når det når frem, får The Memory 10 guld, dens nye soldater stiger et level for hver 20 ekkoer, og Opvågningen rykker 4 sekunder nærmere (højst 6 minutter). Lysene kredser om tronen, så man kan se hvor meget de har samlet. Helten kan fange ekkoer (fra 0,6 sekunder, inden for 5): ånderne i ekkoet (afsnit 6.6), +12 mana og +5 XP pr. ekko, og hvert 25. sekund en stump af hvad ekkoet husker. The Memory får så ikke ekkoet.

**De Vågnende Sten.** En ring af fem søjler om kroen midt på kortet. De gløder svagt lilla efterhånden som verden husker, og brænder når Opvågningen kommer; tjenerne rejser sig ved dem. Tryk på en sten (med intet valgt) for at høre hvor længe der er.

**Krøniken.** Det vigtige der sker i verden (faser, plyndringer, The Memorys bølger, Opvågningen, ekkoernes stumper, pilgrimme, De Ældgamle) vises som poster under uret i ca. 15 sekunder. Posten fortæller hvorfor og hvad man kan gøre; minimappet blinker stedet i postens farve, og tryk på posten flytter kameraet derhen. Menuen viser de seneste 30 poster (*Chronicle*) og en side om verden (*The World*). Under uret viser et fase-mærke hvor længe der er til næste fase.

**Plyndringer forklaret.** I Faldet er de vilde lejre sultne: en lejr nær basen sender sine creeps mod spillerens bygninger. Krøniken siger det og viser lejren; hver plyndrer bærer en pose stjålet guld.

**Mindesmærker (M9).** Hvert kort har syv *Name-stones* og fire andre minder (en gammel mur, en grav, to forladte lejre). Når et minde kommer inden for synsvidde, fortæller krøniken dets historie, det får et navneskilt og en markering på minimappet (+25 XP). Navnestenene skal helten gå hen til og læse: +40 XP og en stump af navnet — men verden husker lidt mere (Opvågningen 20 s tidligere). Alle syv giver 300 guld og en Tome of Power. Første gang helten går ind i en region, fortæller krøniken om den. Tryk på et minde (med intet valgt) for at læse det igen.

**Navngivne lejre (M9).** Hver lejr har et navn på skiltet (fx *Ashfang Raiders*, *The Sleepless Watch*, *The Grave King's Hall*), og første gang man ser den, fortæller krøniken hvad det er for en lejr.

**Heltens replikker (M9).** Korte ork-sætninger over helten ved level op, en dræbt boss, det første fangede ekko, ved Erevoss, ved Opvågningen og når han rejser sig igen.

**Intro.** Et nyt spil begynder med kortets egen historie og tre korte kort: Vaelthar og den glemte femte kraft, The Memory og ekkoerne, og hvad The Tide skal gøre.

### 12.2 Liv i verden (M8)

- **Dyr:** flokke af hjorte og hinder (Quaternius, CC0) der græsser, vandrer og flygter samlet fra alt der kommer tæt på; ræve der lusker alene. Kan ikke angribes.
- **Fugle** (egne low-poly-modeller med vinger der slår): krager der kredser over skovene og samles hvor der har været kamp, finker der hopper i græsset og letter når nogen nærmer sig, måger langs kysten.
- **Pilgrimme** i grå kutter vandrer mellem kroen, købmanden, brøndene, udkigstårnene og stenene. Tryk på en (med intet valgt), og de siger noget om verden.
- **Livet følger verdenstilstanden:** i Faldet drager tre flokke bort, kragerne bliver flere, og to pilgrimme søger ly ved spillerens hal og giver 60 guld og 40 træ. I Opvågningen samles pilgrimmene ved stenene, og kragerne kredser over dem; når tjenerne er faldet, jubler de.

**Sådan er det bygget (M6):** Faserne skifter med et banner og et dybt horn. I *Fald* giver guldminerne 25 % mindre, og hvert ~2. minut sender en vågen creep-lejr nær basen sine creeps ud for at plyndre (de giver ikke op ved leash og går efter bygninger). I *Opvågning* dukker Den Unavngivnes tjenere op ved De Vågnende Sten om kroen midt på kortet: en *Herald of the Unnamed*, *Hollow Knights* og *Void Witches* med lilla glød. Halvdelen marcherer mod spilleren, halvdelen mod The Memory, og de angriber alle. Når de alle er faldet, efterlader de en Tome of Power, et stærkt item og et legendarisk artefakt.

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
- **Stifinding (M13):** A* i 8 retninger på et fint navigationsgitter (2 × 2 enheder) uden for hulerne (`navgitter.js`). Bygninger, frie træer og sten stemples ind og ud, når de bygges, fældes eller ryddes; ruten strammes til lige linjer. Hex-gitteret bruges stadig til byggeriet og i hulerne. Grupper og formationer får fællesruter.
- **Højde:** figurerne følger terrænets højde (`terraen.js` højdeVed), så ingen forsvinder under sne eller bakker.
- **Holdfarver (M13):** man spiller altid **blå**, modstanderen er altid **rød**. Vildmarkens creeps er **rav**, The Memory **sølv**, The Unnamed **violet** og neutrale (karavanen, lejesvende) **lyse**. Hver figur har en tynd ring i sin farve; helte en runecirkel (afsnit 6.5). Livsbjælkerne har kant i samme farve (`holdfarve.js`).
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
| **M8 ✅** | **En levende verden** | Dyr, fugle og pilgrimme; ekkoer og The Memory som ånder; De Vågnende Sten; krøniken, fase-mærket, intro og verdenssiden; skilte over lejrene og De Ældgamle med nye legendariske items |
| **M9 ✅** | **Verdener og detaljer** | Fire kort med hver sin form og historie; teksturer og stier i jorden, bunddække, blandede træer, bølgende vand med kystskum, liv omkring stederne; Navnesten, mindesmærker, navngivne lejre, regionernes historie og heltens replikker |
| **M10 ✅** | **Biomer, årstider og miner** | Seks biomer, fire årstider, tre størrelser og nye verdener hver gang; miner i fire størrelser med fem (seks) stadier, Motherlode og Deep Quarry; heldige fund; vejr |
| **M11 ✅** | **Huler, begivenheder og championer** | Huler med rum, lejre, boss og kister; syv tilfældige begivenheder med synlige tegn; champion-creeps med fire egenskaber. Desuden: kaktusser fra vores generator, lavasøer inde i landet, minernes stadier kun som synlige tegn |
| **M12 ✅** | **Racer, modstander og helte** | Ro på skærmen (én begivenhed ad gangen, færre tekster); karavanen; mindre bygninger med tre pladser pr. felt; racevalg og The Architects spilbar; AI-modstander med tilfældig race, arbejdere og helt; The Memory og The Unnamed neutrale; tre helte pr. race; prospektering |
| **M13 ✅** | **Helten i centrum** | Figurerne følger terrænet (ingen arbejdere under sneen); ordentlig stifinding på et fint gitter rundt om bygninger, træer og sten; holdfarver (blå spiller, rød modstander, rav vildmark, sølv The Memory, violet The Unnamed, lyse neutrale); alle evner er heltens egne; udstyrspladser og rullet udstyr med affikser og mange nye stats; helte med egen stemme, synligt udstyr, runecirkel, kappe i holdfarve, vækst med level, bedrifter og tilnavne |
| M15+ | Hvad Opvågningen betyder, The Unmade, kampagne | |

---

## 17a. Tilfældighed og genspilning (forslag, M10)

Hvor RNG kan gøre hvert spil anderledes. ✅ = bygget i M10.

1. ✅ **Ny verden hver gang** — nyt frø: skove, søer, lejre, miner og minder flytter sig.
2. ✅ **Biom og årstid** kan trækkes tilfældigt.
3. ✅ **Minernes størrelse** trækkes; Motherloden har 30–50.000 guld og ligger på en tilfældig side.
4. ✅ **Heldige fund** i miner og stenbrud.
5. ✅ **Vejret** kommer i byger på tilfældige tidspunkter (regn, støv, blæst).
6. ✅ (M11; karavanen M12) **Verdensbegivenheder** (hele kortet): *Blood Moon* (creeps stærkere, mere XP), *Starfall* (en meteor slår ned og efterlader en midlertidig åre af stjernemalm), *Eclipse* (dobbelte ekkoer), *Gold Rush* (en mine giver mere i to minutter), en *karavane* der krydser kortet (beskyt den eller plyndr den).
7. ✅ (M11) **Områdebegivenheder**: en lejr får en *champion*, en vandrende lejesoldatflok kan hyres, et skjult alter dukker op i tre minutter, en flok krager varsler et baghold.
8. ✅ (M11) **Champion-creeps**: 10 % af lejrene har en elite med en egenskab (*Fiery*, *Swift*, *Vampiric*, *Shielded*) og et bedre drop.
9. **Items med rul**: tal i et spænd (fx Iron Sword +8–11 skade) og sjældne navngivne varianter.
10. ✅ (M11) **Huler / dungeons**: 1–2 huleindgange pr. kort, der fører til et lille kort under jorden sat sammen af tilfældige rum (KayKit Dungeon), med en boss og en kiste — kun for helten og en lille gruppe.
11. **Kroens og købmandens udvalg** skifter fra spil til spil.
12. ✅ (M12) **Prospektering**: arbejdere kan lede efter nye guld- og stenårer i bjergene (chance for at finde en skjult mine).

**Gro igen?** Fordele: lange spil løber ikke tør for træ, verden ser levende ud. Ulemper: mindre grund til at ekspandere, ryddede veje lukker til igen. Forslag: kun træer gror igen, langsomt, fra stubbe ved siden af levende skov (og hurtigere om foråret); sten gror ikke — ny sten kommer fra prospektering og Deep Quarry.

## 17b. Hvad gjorde WC3 til WC3? (analyse, M14)

Jon: *"Undersøg i dybden hvad der gjorde WC3 til det det var … Det er dét vi skal fange."* Kilderne står nederst. Pointen er ikke at kopiere, men at forstå *hvorfor* det virkede, og bygge vores egen udgave af hver søjle.

### Hvorfor det føltes, som det gjorde — ni søjler

**1. Et rollespil gemt inde i et strategispil.** WC3 begyndte som *Warcraft Legends* — tæt kamera, få enheder, ingen base. Det "føltes aldrig strategisk", så holdet vendte tilbage til RTS, men **heltene overlevede fra første skitse** (Rob Pardo). Målet var "et sjovt Warcraft-RTS plus helte, quests, items og en mere levende verden". Resultatet: helten er "omdrejningspunktet" — den vinder eller taber kampen. Helten får kun erfaring af at kæmpe, så starten af hvert spil er en lille rollespilsrejse: man vælger en rute gennem lejrene, får levels og items, og ultimatet ved level 6 er et vendepunkt man mærker.

**2. Få enheder — hver enkelt tæller.** Upkeep (70 % guld ved 50+ forsyning, 40 % ved 80+) gjorde, at hære typisk var 6–24 enheder. Det var delvist et teknisk valg (3D i 2002), men holdet beholdt det, fordi "det gjorde WC3 så anderledes end StarCraft" (Rob McNaughton). Makro er enkel, så opmærksomheden går til mikro: trække en såret enhed tilbage, fokusere ild, time en evne. Man lærer sine enheder at kende.

**3. Creeping — det neutrale land er spillets puls.** Lejre vogter miner, butikker og kilder. Deres farve (grøn/orange/rød) siger, hvor farlige de er; deres drop følger sværhedsgraden; stærke vogtere "kræver en helt". Kortene er bygget om det: *Lost Temple* har en helende kilde i midten, ringet af guldminer, vogtet af kortets stærkeste lejr. Det giver steder, man kæmper om, uden at nogen ejer dem. Neutrale bygninger kan ikke erobres — man holder dem ved at stå der.

**4. Personlighed i hver eneste enhed.** Hver enhed svarer, når man vælger den, sender den af sted eller angriber — og bliver irriteret, hvis man bliver ved med at trykke ("piss lines", en Blizzard-tradition fra WC2). Bønder brokker sig, krigere praler, helte har attitude. GameSpot: stemmerne "formidler hver personlighed tydeligt og levende". Selv dyrene har en vits: tryk nok gange på et får, og det eksploderer. Det er småting, men det er dem, folk husker 20 år efter.

**5. Animerede portrætter.** Øverst/nederst sidder et levende 3D-portræt af den valgte enhed, som bevæger sig og taler. Helten har altid sit portræt i hjørnet. Man ser hele tiden sin helts ansigt — det binder én til figuren.

**6. Læsbarhed: store former, overdrevne proportioner.** Samwise Didier: man ser alt skråt ovenfra, så holdet fokuserede på silhuetten fra den vinkel — "større former, ikke så mange små prikker, møtrikker og bolte", og figurerne er "lidt større og overproportionerede", fordi vinklen "kræver det lille ekstra". Holdfarver, tydelige effekter (gylden søjle ved level-op, glød om helten) og et ur, der viser døgnet.

**7. Dag og nat som taktik.** 8 minutters døgn. Om natten sover de fleste creeps, udsynet er kortere, og designerne forventede "flere bagholdsangreb og snigangreb om natten". Racerne mærker natten forskelligt (natelvere heler og gemmer sig om natten). Rytmen giver beslutninger: creep om natten, angrib om dagen — eller omvendt.

**8. Racer der føles forskellige hele vejen igennem.** Ikke kun tal: hver race har egen musik, egen brugerflade, egne stemmer, egen måde at bygge på og egne fordele (natelvere om natten, de udøde på deres smittede jord). Man *er* orkerne, når man spiller dem.

**9. Fortælling i spillet — og en editor, der gav spillet videre.** Historien blev fortalt inde i missionerne med motorens egne mellemsekvenser (ingen briefing-skærme), med figurer med en bue (Arthas, Thrall). Og World Editor var stærk nok til at bygge helt nye spil: DotA (og dermed hele MOBA-genren), tower defense og tusindvis af kort. Det er nok hovedgrunden til, at WC3 stadig nævnes: spillerne fik værktøjet til at gøre det til deres eget.

### Hvorfor det stadig er skelsættende

Det var det sidste store RTS, der lagde **en person** midt i en hær. Den kombination — en helt du bygger op, en lille hær du kender, et levende neutralt land og figurer med stemme og humor — blev aldrig gjort bedre i genren, og den levede videre i World of Warcraft, MOBA'erne og Hearthstone. Editoren gjorde det til en platform. Følelsen kommer ikke fra én mekanik, men fra at *alt* har personlighed: hver enhed, hvert sted, hver race.

### Hvor står The Waking World?

| Søjle | Har vi | Mangler / næste |
|---|---|---|
| 1. Helten bærer spillet | ✅ Tre helte pr. race med egne evner, items med rul, bedrifter, Ascension; ultimatet ved level 6 er et øjeblik (M14b) | ✅ Ascension pr. helt (M14e) |
| 2. Få enheder | ✅ Højst 100 forsyning inkl. helten (5), upkeep fra 40/80, soldater koster 1–2 efter styrke; veteraner og grene; hver soldat har sin egen evne med autocast (M14b) | Slå autocast til/fra |
| 3. Creeping | ✅ Lejre i 5 farver, drops, vogtede miner, kilder, butikker, kro; **The Old Wellspring** midt mellem baserne, vogtet af to lejre (M14b) | Flere neutrale steder der altid er vogtet |
| 4. Personlighed i enheder | ✅ Heltene og alle enheder svarer med egne ord (valg, gå, angrib, høst, byg, færdig, klar) og bliver irriterede ved fire tryk i træk; dyr snøfter og sprænges ved femte prik (M14a) | Lyd til stemmerne |
| 5. Portrætter | ✅ Levende 3D-portræt af helten i helteknappen: trækker vejret, nikker når den taler, kryber sammen når den rammes, jubler ved level-op, gråt når den er faldet; bærer sin hjelm (M14a) | Portræt af den valgte enhed |
| 6. Læsbarhed | ✅ Alle figurer er overdrevent store (×1,6, helte endnu større), holdfarver, runecirkel, synligt udstyr (M14b) | Tydeligere slag og effekter ("juice") |
| 7. Dag og nat | Ja, creeps sover, kortere udsyn | Racer der mærker natten forskelligt |
| 8. Racer | ✅ Tre racer med egne modeller, farver, stemmer, advarsler, **musik**, brugerflade-tone, nat og byggemåde; The Dreaming med egne figurer (M15) | The Unmade |
| 9. Fortælling og editor | Krønike, lore, Navnesten, verden der vågner | Kampagne med mellemsekvenser; kort-editor i spillet (visionen) |

### Plan

- **M14a ✅:** enhedernes stemmer (alle racer og typer, egne ord), irriterede svar ved mange tryk, dyr der sprænges, levende helteportræt, racens egen advarsel ved angreb.
- **M14b ✅:** store, overdrevne figurer; forsyning efter styrke (100 i alt, upkeep 40/80); ultimatet ved level 6 som et øjeblik; soldaterevner med autocast; The Old Wellspring midt på kortet.
- **M14c ✅ (del 1):** musik pr. race og døgn. Næste: racernes egen brugerflade-tone; natten pr. race.
- **Rettelse (M15):** et slag på modstanderens bygninger fik spillet til at gå i stå (kampfølelsens blink); lette lejre har ingen championer; heltens grundheling 1,5 liv/s.
- **M15 ✅:** The Dreaming spilbar — egne figurer og bygninger fra generatoren på KayKits skelet (game-assets D-015), tre helte med egne evner og Ascension, træer der går, høst uden fældning, Dreamtime, stemmer, musik og brugerflade; AI-modstanderen kan også være The Dreaming.
- **M14h ✅:** racens måde at bygge på — The Tide *Driftwood*: én arbejder bygger 25 % hurtigere, flere hjælper kun halvt, og bygningerne heler 1 %/s, når de ikke er angrebet i 8 s; The Architects *Many Hands*: hver ekstra bonde bygger fuldt med +10 %, og bygningerne har 25 % mere liv. AI-modstanderen har sin races nat. Startskærmen viser racens byggemåde og nat.
- **M14g ✅:** racens brugerflade-tone (Tide: drivtømmer og ben; Architects: blå sten og guld) og racens nat (Tide *Children of the Storm*: fuldt udsyn og +10 % fart om natten; Architects *Lamplight*: tårnene +25 % skade og +4 rækkevidde); ånderne er ekkoerne; træer gror igen (stub 7–10 min, så en spire, der vokser på 1,5 min; ikke hvor der er bygget eller nogen står); modstanderens helt gemmes.
- **M14f ✅:** kampfølelse — den, der rammes, blinker (hvid fjende, rød egen); blod, knoglestøv eller støv sprøjter væk fra slaget; heltens store slag giver et kort stop i animationen og et ryk i kameraet; store tal popper med "!"; støvsky når nogen falder, og bosser og helte ryster kameraet (`kampfoelelse.js`).
- **M14e ✅:** Ascension pr. helt (navn, titel, passiv og to evner for hver af de seks helte).
- **M14d ✅:** helten og tre arbejdere ved start; genoplivning kun ved alteret; skill points; ånder og alterets velsignelser (afsnit 6.6).

### M14b–c i detaljer

- **Store figurer:** alle figurer skaleres ×1,6 og fylder ×1,25 mere, når de står tæt (`VERDEN.enhedSkala`, `enhedRadius`). Helte er 1,18–1,4 × det igen (vokser med level, ×1,12 ved Ascension). Bygninger og natur er uændrede.
- **Ultimatet (`ultimatum.js`):** heltens tredje evne er dens ultimatum. Level 6: gylden søjle, banneret "ULTIMATE UNLOCKED!", et banner med evnens navn og heltens egen replik. Knappen har en gylden ramme, der pulserer, når den er klar. Når det bruges: gyldent blink, kameraet ryster, helten råber, og evnestyrken er ×1,6 i 11 sekunder. Ventetid 70–80 s, mana 120–170. Tallene: Earth Stomp 190 + 1,5 s lammelse; Eye of the Storm 72 pr. halve sekund; Predator 10 s; Consecration 64/s og heling 40/s; Old Light 385; Rain of Bolts 3 × 112.
- **Soldaternes evner (`grundevner.js`, autocast):** Grunt *Brutal Swing* (hvert 9. s dobbelt skade og kort lammelse), Spear Thrower *Pinning Spear* (hvert 12. s et ekstra spyd, der nagler målet 1,5 s), Footman *Defend* (når såret: halv skade i 5 s), Marksman *Aimed Shot* (hvert 10. s 2,2 × skade). Veteranernes grene kommer oven i.
- **The Old Wellspring (`storkilde.js`):** en stor stenkilde fra vores generator midt mellem baserne, vogtet af en stærk (orange) og en mellemsvær lejr. Heler alle inden for 14 — også fjenden — 3 % liv og mana i sekundet, og vandet glitrer. Lyseblå ring på minimappet. Placeres efter kortets pynt med sit eget frø, så gemte spil stadig passer.
- **Musik (`musik.js`, `musikdata.js`):** syntetiseret med WebAudio, ingen filer. The Tide: krigstrommer, drone og horn i mol-pentatonik; om natten fløjte og hjerteslag. The Architects: strygere (Dm–Bb–F–C), harpe og horn; en march, når der kæmpes. Flere trommer under kamp. 16 takter, så 6–10 takters stilhed. "Music" kan slås fra i menuen. Kan senere skiftes til rigtige CC0-numre.
- **Senere:** kampagne med mellemsekvenser i motoren; kort-editor i spillet.

**Kilder:** [Wikipedia: Warcraft III](https://en.wikipedia.org/wiki/Warcraft_III:_Reign_of_Chaos) · [Corerunner: Warcraft III Review](https://corerunner.substack.com/p/warcraft-iii-review) · [PCGamesN: upkeep (Rob McNaughton)](https://www.pcgamesn.com/warcraft-3/upkeep) · [Game Informer: Warcraft Legends (Rob Pardo)](https://gameinformer.com/b/news/archive/2014/11/03/warcraft-iii-was-almost-a-non-traditional-rts-called-warcraft-legends) · [Blue's News: Warcraft III Revisited](https://www.bluesnews.com/s/10992/warcraft-iii-revisited) · [Strategy Planet-preview (creeps, neutrale bygninger, nat)](https://gamespy-archives.quaddicted.com/sites/www.strategyplanet.com/features/previews/warcraft3/index3.shtml.html) · [Eurogamer/Blizzplanet: Samwise Didier](https://www.blizzplanet.com/blog/comments/eurogamer_interviews_samwise_didier) · [Liquipedia: Daytime](https://liquipedia.net/warcraft/Daytime) · [Giant Bomb: Piss Lines](https://giantbomb.com/wiki/Concepts/Piss_Lines) · [Warcraft Wiki: Critters](https://warcraft.wiki.gg/wiki/Critters) · [Warcraft Wiki: Lost Temple](https://warcraft.wiki.gg/wiki/Lost_Temple_(Warcraft_III)) · [GamesBeat: mod-værktøjer](https://gamesbeat.com/warcraft-iii-reforged-reminds-us-why-mod-toolsets-should-matter/) · [Den of Geek: Warcraft's influence](https://www.denofgeek.com/games/warcraft-the-most-influential-game-franchise-of-all-time) · [Wayward Strategy: iconic characters](https://waywardstrategy.com/2015/08/12/rts-games-need-more-iconic-characters/)

## 17. Åbne beslutninger (Jon)

1. **Arbejdsnavnene** på The Tides bygninger, units og helte — beholde, ændre?
2. ~~Dag og nat~~ — besluttet: med (M6).
3. ~~XP-loft fra creeps~~ — besluttet: intet loft, XP skaleres efter level-forskel (M7).
4. ~~Underhold~~ — besluttet: med (M7).
5. ~~Første AI-race~~ — besluttet: The Memory (M5).
6. ~~Spillængde~~ — besluttet: 20–35 minutter er ok for nu.
7. **Rækkefølgen:** M1 Stor verden → M2 Items → M3 Base, eller base før items?
