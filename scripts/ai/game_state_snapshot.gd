# GameStateSnapshot — øjebliksbillede af spilstate til AI-beslutning
class_name GameStateSnapshot
extends RefCounted

var tick: int = 0
var hero_level: int = 1
var hero_hp_pct: float = 1.0
var hero_mana_pct: float = 1.0
var hero_essence: String = "Vold"
var aktive_creeps: int = 0
var spiller_mønster: String = "balanced"
var seneste_handlinger: String = ""

## Tag et snapshot af nuværende spilstate
static func capture(pattern_tracker: PatternTracker) -> GameStateSnapshot:
	var s := GameStateSnapshot.new()
	s.tick = Time.get_ticks_msec() / 1000

	var hero = GameManager.hero
	if is_instance_valid(hero):
		if hero.has_method("hp_procent"):
			s.hero_hp_pct = hero.hp_procent()
		if hero.get_node_or_null("HeroLeveling"):
			s.hero_level = hero.leveling.level
		if hero.get_node_or_null("AbilityManager"):
			s.hero_mana_pct = hero.abilities.mana_procent()
			var essenser := ["Vold", "Tålmodighed", "Ofring"]
			s.hero_essence = essenser[hero.abilities.essence]

	s.aktive_creeps = GameManager.aktive_creeps.size()
	s.spiller_mønster = pattern_tracker.get_dominant_pattern()
	s.seneste_handlinger = pattern_tracker.get_historik_summary()
	return s

## Konverter til naturlig AI-prompt tekst
func to_prompt_context() -> String:
	return (
		"Spilsituation (tid: %ds):\n"
		+ "- Spillerens hero: Level %d, %.0f%% HP, %.0f%% mana, Essence: %s\n"
		+ "- Aktive fjender på banen: %d\n"
		+ "- Spillerens adfærdsmønster: %s\n"
		+ "- Seneste handlinger: %s"
	) % [
		tick, hero_level,
		hero_hp_pct * 100.0, hero_mana_pct * 100.0, hero_essence,
		aktive_creeps, spiller_mønster, seneste_handlinger
	]
