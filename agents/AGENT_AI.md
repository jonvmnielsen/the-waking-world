# AGENT_AI.md — AI-agenten
> Læs CLAUDE.md først. Dette dokument uddyber AI-agentens rolle, arkitektur og implementering af den intelligente modstander.

---

## Rolle og ansvar

Du designer og implementerer den AI-drevne modstander — projektets mest differentierende feature. AI-modstanderen bruger Claude API til dynamisk beslutningstagning og tilpasser sig den individuelle spillers adfærd og Essence.

---

## Kernefilosofi

**AI-modstanderen er ikke sværere — den er klogere.**

Den traditionelle computer-AI i RTS-spil følger scripts: "Angrib med 6 units kl. 3:00, byg 2 barracks, rush til level 2." Det er forudsigeligt og kedeligt.

TWW's AI observerer hvad *du* gør og justerer. Hvis du altid rushes tidligt: den bygger forsvar. Hvis du turtler: den sætter pres på. Hvis din hero er Vold-Essence: den undgår direkte konfrontation og splitter din opmærksomhed.

---

## Teknisk arkitektur

### GameStateSnapshot
Hvert N sekunder (default: 15) tages et snapshot af spilstate:

```gdscript
# scripts/ai/game_state_snapshot.gd
class_name GameStateSnapshot

var tick: int
var player_hero_level: int
var player_hero_health_pct: float
var player_hero_position: Vector2
var player_essence: String
var player_units: Array[UnitData]
var player_buildings: Array[BuildingData]
var ai_units: Array[UnitData]
var ai_buildings: Array[BuildingData]
var neutral_camps_alive: Array[bool]
var world_state: String  # "balance", "fald", "opvaagning"
var recent_player_actions: Array[String]  # ["attacked_camp", "retreated", "built_barracks"]

func to_prompt_context() -> String:
    # Konverter til naturlig sprog-kontekst til Claude API
    return """
Spilsituation (tick %d):
- Spillerens hero: Level %d, %.0f%% HP, Essence: %s
- Spillerens seneste handlinger: %s
- Verden: %s
- AI har: %d units, %d bygninger
Hvad er den bedste strategiske beslutning nu?
""" % [tick, player_hero_level, player_hero_health_pct * 100,
       player_essence, str(recent_player_actions), world_state,
       ai_units.size(), ai_buildings.size()]
```

### Claude API Integration

```gdscript
# scripts/ai/ai_opponent.gd
extends Node
class_name AIOpponent

const API_URL = "https://api.anthropic.com/v1/messages"
const MODEL = "claude-sonnet-4-20250514"

var player_pattern_history: Array[String] = []
var ai_personality: String = ""  # Sættes ved spilstart

func initialize(difficulty: String, personality: String):
    ai_personality = personality
    # Personalities: "aggressive", "defensive", "adaptive", "deceptive"

func request_decision(snapshot: GameStateSnapshot) -> void:
    var system_prompt = """
Du er AI-modstanderen i RTS-spillet The Waking World.
Din personlighed: %s
Du kæmper mod en spiller med Essence: %s

Spillerens observerede mønstre: %s

Svar KUN med JSON i dette format:
{
  "primary_action": "attack|defend|expand|harass|retreat",
  "target": "hero|base|camp|resource",
  "unit_count": 2,
  "reasoning": "kort forklaring"
}
""" % [ai_personality, snapshot.player_essence, str(player_pattern_history)]

    var request_body = {
        "model": MODEL,
        "max_tokens": 200,
        "system": system_prompt,
        "messages": [{"role": "user", "content": snapshot.to_prompt_context()}]
    }
    # Send HTTP request...

func _on_decision_received(decision: Dictionary) -> void:
    # Udfør beslutning i spilverdenen
    match decision.primary_action:
        "attack": _execute_attack(decision)
        "defend": _execute_defend(decision)
        "expand": _execute_expand(decision)
        "harass": _execute_harass(decision)
```

### Pattern-tracking
```gdscript
# Observer og log spillerens adfærd
func track_player_action(action: String):
    player_pattern_history.append(action)
    if player_pattern_history.size() > 10:
        player_pattern_history.pop_front()
    # Eksempler: "early_rush", "turtle", "creep_focus", "hero_focus"
```

---

## AI Personligheder

Ved spilstart tildeles AI en af disse:

| Personlighed | Beskrivelse | Modsvarer |
|---|---|---|
| **Aggressive** | Konstant pres, early rush, sacrificer units | Spilleren med defensiv Essence |
| **Defensive** | Bygger op, venter, straffer fejl | Spilleren der rushes |
| **Adaptive** | Ingen fast strategi — kopierer modtræk | Erfarne spillere |
| **Deceptive** | Bluffer, fake-rusher, snyder med scouting | Alle |

---

## Sprint 3 — Konkrete leverancer

1. `scripts/ai/game_state_snapshot.gd` — snapshot-system
2. `scripts/ai/ai_opponent.gd` — Claude API integration
3. `scripts/ai/pattern_tracker.gd` — spiller-adfærds-logging
4. Test: AI reagerer forskelligt på rush vs. turtle-strategi
5. Fallback: Scripted behaviour hvis API er utilgængeligt

---

## Vigtigt: API-latency

Claude API-kald tager 0.5-2 sekunder. Løsning:
- Beslutninger hentes asynkront — spillet pauser ikke
- AI handler baseret på *forrige* beslutning imens næste hentes
- Cache beslutninger: samme spilstate → brug cached svar

---

*Tilhører: The Waking World multiagent-system*
*Sidst opdateret: 2026-03-23*
