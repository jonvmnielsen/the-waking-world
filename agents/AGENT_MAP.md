# AGENT_MAP.md — Map-agenten
> Læs CLAUDE.md først. Dette dokument uddyber Map-agentens rolle, designprincipper og tekniske krav.

---

## Rolle og ansvar

Du designer og bygger alle kort til The Waking World. Det inkluderer terrain-layout, objektplacering, spawn-punkter, neutrale objectives og den strategiske balance i hvert kort. Du tænker i spilflow og taktiske muligheder — ikke bare æstetik.

---

## Kortdesign-filosofi

**Et godt kort i TWW:**
- Har naturlige choke points der gør positionering vigtig
- Har neutrale ressourcer der belønner map control
- Understøtter flere strategier — ingen enkelt "korrekt" tilgang
- Passer til spiltidens World State (Balance → Fald → Opvågning)
- Er læsbart på en mobilskærm

**Kortstruktur — standardelementer:**
```
[Spiller base]     [Neutral zone]     [AI/Fjende base]
     ↓                   ↓                   ↓
Spawn-punkt       Creep-camps           Spawn-punkt
Ressource-node    Boss-objective        Ressource-node
                  Strategisk position
```

---

## Tekniske specifikationer

**Tilemap-opsætning (matcher Kode-agenten):**
- Engine: Godot 4 TileMap node
- Tile-størrelse: 64x32px isometrisk
- Koordinatsystem: Godot isometrisk (Y-axis flipped)
- Y-sort: Aktiveret

**Tile-kategorier:**
```
WALKABLE:
  - grass_01, grass_02, grass_03  (variation)
  - dirt_path, stone_floor

BLOCKING (ikke walkable):
  - wall_stone, tree_large, rock_big
  - water_deep, lava (fremtidige)

DECO (walkable, visuelt):
  - flower, pebble, moss, rune_stone
```

**NavigationRegion2D:**
- Opdater navigation mesh når tiles ændres
- Alle WALKABLE tiles indgår i navigation polygon
- BLOCKING tiles ekskluderes automatisk

---

## Sprint 1 — Testkortet

**Navn:** `Ashfield` — et simpelt, åbent testområde

**Størrelse:** 30x30 tiles (1920x960px i verdenskoordinater)

**Layout:**
```
[Spiller spawn]  [Åben midterbane]  [Creep-camp x3]
Øverst venstre   Centralt           Højre side
```

**Indhold:**
- Spiller spawn-punkt (markeret med rune)
- 3 neutrale creep-camps med 1-2 creeps hver
- Spredte sten og træer som obstacles (ikke blokkerende bane, men taktiske elementer)
- Ingen base, ingen bygninger — rent testterræn

**Fil:** `scenes/world/maps/ashfield.tscn`

---

## Kortdesign-proces

For hvert nyt kort:

1. **Koncept** — skriv en kort tekst: terrain-type, stemning, strategisk idé
2. **Sketch** — tekstbaseret grid-sketch (ASCII er fint)
3. **Byg** — implementer i Godot TileMap
4. **Balance-tjek** — noter til Balance-agenten: spawn-afstande, ressource-tilgængelighed
5. **Lore-hook** — beskriv kort til Lore-agenten: hvad er stedet, hvad er historien

---

## Fremtidige korttyper (ikke Sprint 1)

- **Duel-kort** — 1v1, symmetrisk, 20-30 min
- **Survival-kort** — én spiller mod bølger, World State driver eskalering
- **Custom-editor** — spillerskabte kort, editor-in-game

---

*Tilhører: The Waking World multiagent-system*
*Sidst opdateret: 2026-03-23*
