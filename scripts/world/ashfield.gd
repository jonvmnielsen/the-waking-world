# Ashfield — Sprint 1 testbane
# Opsætter navigationsmesh, spawner hero og creeps
extends Node2D

## Spawn positioner for creeps (isometrisk koordinater)
const CREEP_SPAWNS: Array = [
	Vector2(200, 80),
	Vector2(-180, 120),
	Vector2(100, -150),
]

## Sten-tiles (blokerer visuel variation — ikke navigation i Sprint 1)
const STEN_TILE_POSITIONER: Array = [
	Vector2i(5, 8), Vector2i(6, 8), Vector2i(7, 9),
	Vector2i(20, 5), Vector2i(21, 5), Vector2i(20, 6),
	Vector2i(12, 20), Vector2i(13, 20), Vector2i(12, 21),
	Vector2i(25, 15), Vector2i(3, 22), Vector2i(4, 22),
]

@onready var navigation: NavigationRegion2D = $Navigation
@onready var y_sort_lag: Node2D = $YSortLag
@onready var kamera: Camera2D = $Kamera
@onready var gitter: Node2D = $IsometricGrid

var hero_ref: CharacterBody2D = null

func _ready() -> void:
	_opsaet_navigation()
	_opsaet_sten_tiles()
	# Vent én frame så navigation er klar
	await get_tree().process_frame
	await get_tree().process_frame
	_find_hero()

## Byg NavigationPolygon der dækker hele Ashfield
func _opsaet_navigation() -> void:
	var nav_polygon = NavigationPolygon.new()
	# Ydre kant — dækker hele kortet
	var kant = PackedVector2Array([
		Vector2(-1100, -700),
		Vector2(1100, -700),
		Vector2(1100, 700),
		Vector2(-1100, 700),
	])
	nav_polygon.add_outline(kant)
	nav_polygon.make_polygons_from_outlines()
	navigation.navigation_polygon = nav_polygon

## Send sten-tile positioner til gitter-scriptet
func _opsaet_sten_tiles() -> void:
	if gitter and gitter.has_method("get") :
		gitter.sten_tiles = STEN_TILE_POSITIONER
		gitter.queue_redraw()

## Find hero reference og kobl kamera
func _find_hero() -> void:
	hero_ref = GameManager.hero
	if hero_ref:
		# Flyt kamera til hero's startposition
		kamera.global_position = hero_ref.global_position

func _process(_delta: float) -> void:
	# Kamera følger hero med smooth following
	if hero_ref and is_instance_valid(hero_ref):
		kamera.global_position = hero_ref.global_position
