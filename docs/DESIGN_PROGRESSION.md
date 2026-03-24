# DESIGN_PROGRESSION.md — Progressionssystemet
> Detaljeret designdokument for hero-progression og unit-evolution i The Waking World.
> Dette er et levende dokument — opdater når idéer konkretiseres eller ændres.
> Implementeres gradvist fra Sprint 3 og frem.

---

## Oversigt

TWW's progressionssystem er designet til at løse et fundamentalt problem i WC3-genren:

**WC3's problem:** Specialisering blev straffet. Counter-systemet betød at svaret på en dårlig matchup altid var "byg noget andet fra bunden." Det gjorde spil ensformige og afstraffede spillere der ville specialisere sig.

**TWW's svar:** To sammenhængende systemer der belønner konsistens og giver spillere redskaber til at *tilpasse* frem for at *erstatte*:

1. **Hero Ascension** — hero-progression i to tiers med et meningsfuldt vendepunkt
2. **Unit Veteran + Specialisering** — units udvikler sig baseret på spillerens overordnede adfærd

Begge systemer deler et kerneprin: **spillerens valg og spillestil former hvad der bliver tilgængeligt** — ikke omvendt.

---

## Del 1: Hero Ascension

### Tier 1 — Level 1-10

Hero starter på level 1 med faste base stats og tre abilities der låses op ved level 1, 3 og 6.

Tier 1 handler om at lære sin helt at kende. Abilities er relativt forudsigelige. Spilfølelsen er tæt på WC3.

### Ascension — Level 10-vendepunktet

Level 10 er ikke et loft. Det er et **vendepunkt**.

Når helten rammer level 10 sker der noget narrativt markant — en transformation der afspejler heltens rejse i det pågældende spil. Tre Ascension-stier er tilgængelige per hero. Hvilke der er *umiddelbart* tilgængelige afhænger af spillerens adfærdsmønster (se nedenfor).

Valget er **uigenkaldeligt** inden for spillet. Det er bevidst — det skaber et meningsfuldt beslutningsøjeblik og giver replay-value fordi man vil prøve andre stier.

### Spillestil påvirker Ascension-adgang

Systemet tracker løbende spillerens adfærd via **Hero Behavior Score (HBS)**:

```
AGGRESSION:   angreb tidligt, burst-damage, direktekonfrontation
TÅLMODIGHED:  overlevelse, retreat-og-return, defensiv positionering  
OFRING:       bevidste HP-tab for gevinst, units ofret for hero
```

Ved level 10 mappes HBS til Ascension-stier:

```
Høj AGGRESSION  →  Bloodbound tilgængelig (risk/reward)
Høj TÅLMODIGHED →  Warlord tilgængelig (kommando/støtte)
Høj OFRING      →  Avatar tilgængelig (elementær magt)
Blandet         →  Alle tre tilgængelige, men dyrere
```

En Ascension-sti man *ikke* har spillet sig til er stadig valgbar — men aktiveringstiden er 2x længere. Det er ikke en straf, det er en fortælling: helten er ved at gå en vej der ikke er naturlig for den.

### Tier 2 — Level 11-20

Ny identitet. Nye eller modificerede abilities. Fundamentalt anderledes spilstil.

**Orc Warrior — Ascension-stier:**

| Sti | Narrativ | Tier 2-spilstil | Signatur-ability |
|---|---|---|---|
| **Warlord** | Helten stopper med at kæmpe alene — bliver en kraft der løfter alt omkring sig | Units i radius får aura-buff, nye kommando-abilities | *Rally* — alle nearby units angriber samme mål simultant |
| **Avatar** | Helten åbner sig for Vaelthars råkræfter — verden strømmer igennem | Elementære abilities, terrain-interaktion | *Earthbind* — fastlåser fjender til terrænet i 3 sek |
| **Bloodbound** | Helten accepterer en pagt med krigens pris — magt koster blod | Ekstremt høj burst, alle abilities koster HP i stedet for mana | *Death's Edge* — næste angreb gør skade svarende til 50% af heltens manglende HP |

---

## Del 2: Unit Veteran + Specialisering

### Kerneproblemet vi løser

Units handler kollektivt og tilfældigt i kamp — individuel adfærds-tracking ville blive støjfuld og meningsløs. En grunt der tilfældigvis tager meget skade fordi AI'en fokuserede den, skal ikke automatisk blive Ironhide.

**Løsningen:** To adskilte tracker-lag.

- **Unit-niveau:** Tracker overlevelse (neutralt, præcist målbart)
- **Spillerniveau:** Tracker overordnet adfærdsmønster (meningsfuldt, din identitet som spiller)

De to lag kombineres kun i det øjeblik en unit når veteranstatus.

### Lag 1: Veteranstatus

En unit optjener **Veteran XP** ved at overleve kampe. Ikke ved at gøre skade, ikke ved at tage skade — ved at *overleve*.

```
Overlevede kamp mod creep:     +10 Veteran XP
Overlevede kamp mod AI-units:  +25 Veteran XP
Overlevede hero-duel:          +50 Veteran XP
Veteran-tærskel:               200 Veteran XP
```

En veteran markeres visuelt subtilt — en lille detalje på spriten, ikke en stor UI-ting. Spilleren *mærker* at denne unit er særlig uden at blive fortalt det direkte.

**Emotionelt mål:** Spilleren begynder at passe på sine veterans. De healer dem. De trækker dem tilbage. De *husker* dem. Det er en følelse WC3 aldrig gav for normale units.

### Lag 2: Spillerens Adfærds-Score (SAS)

Parallelt med veteran-tracking kører et **Spillerens Adfærds-Score (SAS)** system der observerer spillerens overordnede spillestil løbende.

**Tre dimensioner:**

```
AGGRESSION-SCORE:
  + Angreb inden for første 3 minutter af spil
  + Angreb på AI-base (ikke bare creeps)
  + Units sendt frem som første i kamp
  + Hurtige, korte engagementer

OVERLEVELSE-SCORE:
  + Gennemsnitlig unit-levetid over 2 minutter
  + Antal retreats udført
  + Healing-ressourcer brugt
  + Units trukket tilbage fra kamp med lav HP

KAOS-SCORE:
  + Antal simultane engagementer (kæmper flere steder på én gang)
  + Angreb på mange forskellige mål inden for kort tid
  + Overraskelsesangreb (angreb fra uventet position)
  + Høj bevægelsesfrekvens for units
```

Scorer er ikke eksklusive — man kan have høj aggression OG høj overlevelse (aggressiv men forsigtig spiller). Systemet er ikke binært.

**Scorer forskydes langsomt, nulstilles ikke.** Man kan skifte strategi, men systemet husker ens historie. Det giver kontinuitet og identitet.

### Kombinationen: Veteran møder SAS

Når en unit rammer veteranstatus, låses et specialiseringsvalg op i barracks. Hvad der er tilgængeligt afhænger af SAS på det tidspunkt:

```
Høj AGGRESSION-SCORE:
  → Ravager-gren umiddelbart tilgængelig (normal pris)
  → Andre grene tilgængelige til dobbelt pris

Høj OVERLEVELSE-SCORE:
  → Ironhide-gren umiddelbart tilgængelig (normal pris)

Høj KAOS-SCORE:
  → Berserker-gren umiddelbart tilgængelig (normal pris)

Ingen dominant score:
  → Alle grene tilgængelige til normal pris
```

Spilleren betaler stadig ressourcer og tid i barracks. Adgang er spillet til — investeringen er stadig aktiv og bevidst.

### Unit-grene — The Tide Grunt

**Basis Grunt** — standard melee unit, ingen specialisering

| Stat | Værdi |
|---|---|
| HP | 240 |
| Damage | 18-24 |
| Armor | 2 |
| Speed | 150 |

---

**Ironhide Grunt** (Overlevelse-gren)

*"De der har overlevet længst, ved hvornår man skal stå fast."*

| Stat | Ændring |
|---|---|
| HP | +120 (360 total) |
| Damage | -4 (14-20) |
| Armor | +4 (6 total) |
| Ny ability | *Taunt* — tvinger nearby fjender til at angribe denne unit i 2 sek |

Rolle: Menneskeskjold. Beskytter andre units og heroes. Essentiel i formationer.

---

**Ravager Grunt** (Aggression-gren)

*"De der har angrebet mest, ved præcis hvornår fjenden er sårbar."*

| Stat | Ændring |
|---|---|
| HP | -40 (200 total) |
| Damage | +16 (34-40) |
| Armor | +0 |
| Ny ability | *Charge* — 3 sekunders sprint mod mål, første angreb gør 1.5x skade |

Rolle: Burst-damage dealer. Farlig mod svage mål. Skrøbelig mod kontrollerede modstandere.

---

**Berserker Grunt** (Kaos-gren)

*"De der har kæmpet overalt på én gang, har lært at kaos er en resurse."*

| Stat | Ændring |
|---|---|
| HP | +20 (260 total) |
| Damage | +8 (26-32), men tilfældig variation ±30% |
| Armor | -1 (1 total) |
| Ny ability | *Frenzy* — angriber alle fjender inden for melee-range simultant i 4 sek |
| Bivirkning | Kan ikke modtage direkte ordrer under Frenzy |

Rolle: AoE-skade, uforudsigelig, effektiv mod grupper. Svær at kontrollere præcist.

---

### Visuel kommunikation af progression

Veteraner og specialiserede units skal se anderledes ud — men subtilt. Spilleren skal *mærke* forskel, ikke *læse* sig til det.

**Veteran:** Lille rune eller ar på skulderpladen. Mørkere farvetone.
**Ironhide:** Ekstra rustningsplader. Bredere stance.
**Ravager:** Blottede arme, synlige muskler. Aggressive pose.
**Berserker:** Revet rustning, kampbemaling. Rastløs idle-animation.

---

## Del 3: AI-modstanderens reaktion

Dette system giver AI-agenten præcis den information den har brug for til intelligent modspil.

AI'en har adgang til spillerens SAS og kan:
- Se at spillerens grunts er på vej mod Ravager-grenen *inden* de er specialiseret
- Begynde at bygge Ironhide-modparter der modstår burst-damage
- Tilpasse sin strategi til spillerens *fremtidige* armé, ikke kun den nuværende

Det er virkelig intelligent modspil — AI'en reagerer på spillerens *identitet*, ikke bare nuværende stat.

---

## Implementeringsplan

| Sprint | Feature | Ansvarlig agent |
|---|---|---|
| Sprint 1-2 | Ingenting — basis hero og kamp etableres | Kode |
| Sprint 3 | SAS tracking framework (usynlig, logges kun) | Kode + AI |
| Sprint 4 | Veteranstatus — units akkumulerer XP ved overlevelse | Kode + Balance |
| Sprint 5 | Specialiseringsgrene — første gren implementeret (Ravager) | Kode + Balance + Grafik |
| Sprint 6 | Alle tre grene + barracks UI | Kode + UI + Balance |
| Sprint 7 | Hero Ascension ved level 10 | Kode + Lore + Balance |
| Sprint 8 | AI reagerer på SAS og veteran-status | AI-agent |

---

## Åbne designspørgsmål

- Skal veteran-status nulstilles hvis unit dør og respawner? (Anbefaling: nej — det gør tab for kostbart)
- Kan en unit skifte specialiseringsgren? (Anbefaling: nej — valget er permanent for den unit)
- Skal SAS vises for spilleren? (Anbefaling: delvist — vis en enkel indikator, ikke tal)
- Hvad sker der med veterans hvis man mister sin barracks? (Åbent)

---

*Tilhører: The Waking World designdokumentation*
*Sidst opdateret: 2026-03-23*
