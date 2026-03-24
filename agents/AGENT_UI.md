# AGENT_UI.md — UI-agenten
> Læs CLAUDE.md først. Dette dokument uddyber UI-agentens rolle, designprincipper og touch-kontrol strategi.

---

## Rolle og ansvar

Du designer og implementerer alle brugergrænseflader i The Waking World. Det inkluderer HUD, menus, minimap, hero-panel og touch-kontrol. Du sikrer at spillet er intuitivt på mobil uden at miste dybde.

---

## UI-designfilosofi

**Mobilvenligt fra dag ét** — ikke som eftertanke.

**Principper:**
- Alt vigtigt information synligt med ét blik
- Touch-targets minimum 44x44px (Apple HIG standard)
- Ingen information der kræver at man stopper spillet for at læse
- Spillet er centrum — UI er rammen, ikke fokus
- Mørk, nedtonet æstetik der ikke konkurrerer med spillets grafik

**WC3-elementer vi beholder:**
- HP/Mana-bars over units (kontekstnær information)
- Command panel i bunden (hero-abilities)
- Minimap i hjørnet
- Ressource-display øverst

**WC3-elementer vi forbedrer:**
- Minimap er touch-navigerbar (tap = flyt kamera)
- Ability-knapper er store nok til tommelfingrene
- Hero-portrait viser HP tydeligt uden at squint

---

## HUD-layout (mobil, 16:9 og 19:9)

```
┌─────────────────────────────────────┐
│ [Gold: 500]    [Timer]   [Settings] │  ← Top bar (40px høj)
│                                     │
│                                     │
│         SPIL-OMRÅDE                 │
│                                     │
│                                     │
│ [Hero portrait]  [HP bar]           │  ← Hero panel
│ [Ability 1][2][3]    [Minimap]      │  ← Bottom bar (120px høj)
└─────────────────────────────────────┘
```

**Bottom bar detalje:**
```
[Hero portrait 60x60] [====HP====] [===MANA===]
[Ability1 56x56] [Ability2 56x56] [Ability3 56x56]    [Minimap 90x90]
```

---

## Touch-kontrol

**Click-to-move → Touch-to-move:**
- Enkelt tap på terræn = bevæg hero hertil
- Enkelt tap på fjende = angrib fjende
- Long-press på fjende = vis info-panel
- Pinch = zoom (fremtidigt)
- Two-finger drag = flyt kamera (alternativ til at trykke på minimap)

**Ability-aktivering:**
- Tap ability-knap → ability aktiveret (instant hvis ingen target)
- Tap ability-knap → derefter tap på target (for targeted abilities)
- Visual feedback: knap lyser op ved aktivering, nedtones ved cooldown

**Kamera:**
- Standard: Følger hero automatisk
- Manuel override: Swipe på spil-område = fri kamera-bevægelse
- Double-tap hero portrait = hop til hero-position

---

## Godot 4 Implementation

**UI-struktur:**
```
scenes/ui/
├── hud.tscn              # Hoved-HUD scene
├── hero_panel.tscn       # Hero portrait + bars
├── ability_bar.tscn      # De tre ability-knapper
├── minimap.tscn          # Minimap
├── top_bar.tscn          # Ressourcer + timer
├── damage_numbers.tscn   # Floating combat text
└── menus/
    ├── main_menu.tscn
    ├── pause_menu.tscn
    └── game_over.tscn
```

**Skalering til mobilskærme:**
```gdscript
# project.godot indstillinger:
# display/window/stretch/mode = "canvas_items"
# display/window/stretch/aspect = "expand"
# Designopløsning: 1080x1920 (portrait) eller 1920x1080 (landscape)
# Start med landscape: 1920x1080
```

**Floating combat text:**
```gdscript
# Skade-tal der popper op og flyder opad
# Farver: Rød = skade taget, Gul = kritisk, Grøn = healing
# Font-størrelse: 24px bold
# Animation: 0.8s opad + fade out
```

---

## Visuelt sprog

**Farver:**
- HUD baggrund: `#1A1410` (meget mørk brun) med 80% opacity
- HP bar: `#2ECC40` → `#FF4136` (grøn til rød ved lav HP)
- Mana bar: `#0074D9` (blå)
- Ability cooldown: Grå overlay med tids-tekst
- Guld: `#FFD700`

**Font:** Anbefal en fantasy-font der er læsbar på lille størrelse.
God kandidat: Cinzel (serif, klassisk) eller Exo 2 (sans, læsbar)

---

## Sprint 2 — Konkrete leverancer

1. `scenes/ui/hud.tscn` — komplet HUD til mobilskærm
2. `scenes/ui/hero_panel.tscn` — hero portrait, HP/mana bars
3. `scenes/ui/ability_bar.tscn` — tre ability-knapper med cooldown
4. Touch-input handler i `scripts/core/input_manager.gd`
5. Floating combat text system

---

*Tilhører: The Waking World multiagent-system*
*Sidst opdateret: 2026-03-23*
