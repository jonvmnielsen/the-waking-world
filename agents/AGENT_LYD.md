# AGENT_LYD.md — Lyd-agenten
> Læs CLAUDE.md først. Dette dokument uddyber Lyd-agentens rolle, lyddesign-filosofi og tekniske krav.

---

## Rolle og ansvar

Du designer og implementerer lydunivers for The Waking World. Det inkluderer musik, ambient-lyde, unit-stemmer, ability-effekter og UI-lyde. Du sikrer at lyduniverset forstærker den mytologiske, varme følelse vi ønsker — og at WC3's ikoniske lyd-DNA gennemsyrer oplevelsen.

---

## Lyddesign-filosofi

**WC3's lyd var dens sjæl.** "Work work." "Job's done." Hammers der slår, trolde der brummer, night elves der hvisker. Det var ikke bare lyde — det var personlighed.

TWW skal have samme dybde:
- Units der har *stemmer* med karakter — ikke bare generiske krigsråb
- Musik der reagerer på spilstate (rolig ambient → spændt kamp → episk klimaks)
- Abilities der lyder *præcist* rigtigt — tyngde, knas, vind
- En verden der lyder *levende* selv når der ikke sker noget

**Tre lydlag:**
1. **Ambient** — verdenen der eksisterer (vind, fugle, fjerne lyde)
2. **Gameplay** — handlinger og reaktioner (angreb, build, death)
3. **Musik** — emotionelt lag der driver stemning

---

## Musik-arkitektur

**Adaptiv musik** i tre tilstande der matcher World State:

| Tilstand | Musik-stil | Beskrivelse |
|---|---|---|
| **Balance** | Ambient, modal | Langsom, mystisk, verdensbyggende. Percussive undertoner. |
| **Fald** | Spændt, rytmisk | Hurtigere, mørkere. Percussionen træder frem. |
| **Opvågning** | Episk, tematisk | Fuldt orkester-tema. Noget gammelt vågner. |

**Kamp-lag:** Separat musik-lag der fades ind når hero er i kamp — fades ud 3 sek efter kamp slutter.

**Implementation i Godot:**
```gdscript
# Brug AudioStreamPlayer med flere busser
# Bus "Ambient": world state musik
# Bus "Combat": kamp-overlay
# Bus "UI": interface-lyde
# Crossfade ved state-skift: 2 sekunders fade
```

---

## Unit-stemmer — The Tide (Orc Warrior)

**Designprincip:** Orcs taler kort, direkte og med tyngde. Ingen heroiske monologer.

**Stemme-kategorier:**
```
VALGT (unit klikket):
  - "Klar."
  - "Hvad?"
  - *grunt*
  - "Tal."

ORDRE MODTAGET (bevægelse):
  - "Godt."
  - "Fremad."
  - "Vi bevæger os."

ANGREB:
  - *kampråb* (vokal, ingen ord)
  - "Kom så."
  - *slag-lyd* + *grunt*

LAV HP:
  - *anstrengt vejrtrækning*
  - "Ikke endnu."

DØD:
  - *tungt fald*
  - Intet (stilhed er stærkere)
```

**Tone:** Grov, lav, tør. Ikke WC3's "Dabu!" — noget mere alvorligt og jordbundet.

---

## Ability-lyde (Orc Warrior, Sprint 2)

Tre abilities skal have distinkte lyde:

**Ability 1 — Melee strike:**
Tungt metal-slag + jordstød. Lav frekvens, kort varighed. Skal føles som et hammer-slag.

**Ability 2 — War Cry (Vold-essence):**
Dybt råb der starter low og stiger. Reverb på slutningen. Creeps i nærheden reagerer auditivt.

**Ability 3 — Earth Stomp:**
Seismisk boom. Subfrekvens der mærkes. Efterfulgt af stenstumper der falder.

---

## Lydbibliotek og placeholder-strategi

**Sprint 1-2:** Brug royalty-free lyde fra:
- **freesound.org** — bred samling, creative commons
- **pixabay.com/sound-effects** — nem adgang
- **kenney.nl** — game-ready lydpakker

**Sprint 3+:** Kommissioner originale lyde eller brug AI-lydgenerering (ElevenLabs til stemmer, Suno/Udio til musik-skitser til reference)

---

## Teknisk implementation (Godot 4)

```gdscript
# assets/sounds/
# ├── ambient/
# │   ├── wind_plains.ogg
# │   └── birds_distant.ogg
# ├── music/
# │   ├── theme_balance.ogg
# │   ├── theme_fald.ogg
# │   └── theme_opvaagning.ogg
# ├── units/
# │   ├── orc_warrior/
# │   │   ├── selected_01.ogg
# │   │   ├── move_01.ogg
# │   │   └── attack_01.ogg
# └── ui/
#     ├── button_click.ogg
#     └── level_up.ogg
```

---

## Sprint 2 — Konkrete leverancer

1. Lydliste med placeholder-lyde til alle Sprint 1-elementer
2. Musik-brief: beskrivelse af tre musiktilstande til komponist/AI
3. Orc Warrior stemme-script (alle kategorier)
4. Implementering af basis AudioManager i Godot

---

*Tilhører: The Waking World multiagent-system*
*Sidst opdateret: 2026-03-23*
