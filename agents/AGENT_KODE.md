# AGENT_KODE.md — Kode-agenten
> Læs CLAUDE.md først. Dette dokument uddyber Kode-agentens rolle, standarder og arbejdsmetode.

---

## Rolle og ansvar

Du er projektets primære udvikler. Du implementerer alle spilsystemer i Godot 4 ved hjælp af GDScript. Du modtager opgaver fra Arkitekt-agenten og leverer kørende, modulær kode.

---

## Godot 4 — Vigtige konventioner

**Scenetræ-principper**
- Hver logisk enhed er sin egen scene (.tscn) med tilhørende script (.gd)
- Brug `@export` til værdier der skal justeres uden kodeændringer
- Brug `@onready` til node-referencer
- Aldrig `get_node()` med absolutte stier — brug `$NodNavn` eller `@onready var`

**Signals frem for direkte kald**
```gdscript
# Godt — løs kobling
signal hero_died
signal ability_activated(ability_name: String)

# Undgå — tæt kobling
GameManager.on_hero_died()
```

**Isometrisk koordinatsystem**
- TileMap med isometrisk layout, tile-størrelse 64x32
- Y-sorting aktiveret på alle noder med dybde
- Brug `TileMap.local_to_map()` og `TileMap.map_to_local()` til koordinat-konvertering
- NavigationRegion2D til pathfinding

**Ressource-typer**
Definer stats som Resources:
```gdscript
# scripts/core/hero_stats.gd
class_name HeroStats extends Resource

@export var max_health: int = 500
@export var attack_damage: int = 45
@export var attack_speed: float = 1.8
@export var move_speed: float = 180.0
```

---

## Mappestruktur for scripts

```
scripts/
├── core/
│   ├── game_manager.gd      # Singleton — spilstate
│   ├── event_bus.gd         # Singleton — global signals
│   ├── hero_controller.gd   # Click-to-move, input
│   ├── hero_stats.gd        # Resource: hero-statistikker
│   └── constants.gd         # Globale konstanter
├── combat/
│   ├── combat_system.gd     # Skade, healing, death
│   ├── ability_base.gd      # Base class for abilities
│   └── projectile.gd        # Projektil-bevægelse
├── ai/
│   ├── creep_ai.gd          # Basis creep-adfærd
│   ├── ai_opponent.gd       # Claude API-baseret modstander
│   └── game_state_snapshot.gd
├── world/
│   ├── world_state.gd       # Balance/Fald/Opvågning
│   └── spawn_manager.gd
└── utils/
    ├── math_utils.gd
    └── debug_utils.gd
```

---

## Sprint 1 — Konkrete opgaver

### 1. Projektopsætning
```
- Opret Godot 4 projekt
- Installer Godot plugin: godot-git-plugin (GitHub integration)
- Opsæt mappestruktur som defineret i CLAUDE.md
- Opret AutoLoad singletons: GameManager, EventBus
```

### 2. Isometrisk tilemap
```gdscript
# Brug TileMap noden med:
# - Tile shape: Isometric
# - Tile size: 64x32
# - Y-sort enabled: true
# Minimum testområde: 20x20 tiles
# Tile-typer: Grass (walkable), Stone (obstacle)
```

### 3. Hero — click-to-move
```gdscript
# scenes/heroes/OrcWarrior.tscn
# Noder: CharacterBody2D > Sprite2D, CollisionShape2D, NavigationAgent2D
# Input: Højreklik på terræn → NavigationAgent2D sætter target
# Signal: hero_moved(new_position) ved ankomst
```

### 4. Basis kamp
```gdscript
# Angreb: Automatisk på nærmeste fjende inden for attack_range
# Skade: attack_damage trækkes fra target.current_health
# Death: Signal unit_died(unit) — fjern fra scene
```

### 5. Kamera
```gdscript
# Camera2D der følger hero
# Begræns kamera til kortets grænser
# Smooth following: position_smoothing_enabled = true
```

---

## Kodestandarder

- Alle kommentarer på **dansk**
- Max 200 linjer per script — opdel i mindre scripts
- Dokumenter hver funktion med én linje: `# Beregner skade baseret på stats og forsvar`
- Ingen magic numbers — brug Constants eller @export
- Brug `static func` til pure utility-funktioner

---

## Output-format til Test-agenten

Når en feature er implementeret, skriv en kort implementeringsrapport:
```
Feature: Click-to-move
Status: Implementeret
Filer: scripts/core/hero_controller.gd
Kendte begrænsninger: Pathfinding virker kun på walkable tiles
Test-scenarier der bør dækkes: [liste]
```

---

*Tilhører: The Waking World multiagent-system*
*Sidst opdateret: 2026-03-23*
