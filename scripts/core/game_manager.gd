# Singleton — overordnet spiltilstand og global adgang
# AutoLoad: GameManager
extends Node

## Reference til hero (sættes af hero ved _ready)
var hero: CharacterBody2D = null

## Liste over aktive creeps
var aktive_creeps: Array = []

## Er spillet i gang?
var spil_aktiv: bool = true

## Er essens valgt af spilleren?
var essence_valgt: bool = false

func _ready() -> void:
	EventBus.hero_doed.connect(_paa_hero_doed)

## Registrer hero ved spilstart
func registrer_hero(h: CharacterBody2D) -> void:
	hero = h

## Registrer et nyt creep
func registrer_creep(c: Node) -> void:
	aktive_creeps.append(c)

## Fjern creep fra aktiv liste (ved død)
func fjern_creep(c: Node) -> void:
	aktive_creeps.erase(c)

## Returner nærmeste fjende til en given position
func find_naermeste_fjende(fra_position: Vector2, undtagen: Node = null) -> Node:
	var naermeste: Node = null
	var kortest_dist: float = INF
	for creep in aktive_creeps:
		if creep == undtagen or not is_instance_valid(creep):
			continue
		var dist = fra_position.distance_to(creep.global_position)
		if dist < kortest_dist:
			kortest_dist = dist
			naermeste = creep
	return naermeste

func _paa_hero_doed() -> void:
	spil_aktiv = false
	print("Hero er død — genindlæser om 3 sekunder")
	await get_tree().create_timer(3.0).timeout
	get_tree().reload_current_scene()
