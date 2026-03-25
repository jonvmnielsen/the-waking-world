# Isometrisk gitter — tegner Ashfield visuelt med placeholder tiles
# Kører som Node2D i baggrunden
class_name IsometricGrid
extends Node2D

## Antal kolonner og rækker
@export var kolonner: int = 30
@export var raekker: int = 30

## Tile dimensioner
@export var tile_bredde: int = 64
@export var tile_hoejde: int = 32

## Tile farver (placeholder — erstattes af sprites i Sprint 2)
const FARVE_GRAES: Color = Color(0.3, 0.55, 0.25, 1.0)
const FARVE_GRAES_MOE: Color = Color(0.27, 0.50, 0.22, 1.0)
const FARVE_STEN: Color = Color(0.45, 0.42, 0.38, 1.0)
const FARVE_STEN_MOERK: Color = Color(0.35, 0.32, 0.28, 1.0)
const FARVE_KANT: Color = Color(0.15, 0.25, 0.10, 0.4)

## Hvilke tiles er sten (blokerende) — sættes i ashfield.gd
var sten_tiles: Array = []

func _draw() -> void:
	# Tegn tiles bagfra-til-forrest for korrekt overlap
	for raekke in range(raekker - 1, -1, -1):
		for kolonne in range(kolonner):
			_tegn_tile(kolonne, raekke)

## Tegn én isometrisk tile
func _tegn_tile(col: int, row: int) -> void:
	var center = tile_til_verden(col, row)
	var hw = tile_bredde / 2.0
	var hh = tile_hoejde / 2.0

	# Diamond form (isometrisk tile)
	var punkter = PackedVector2Array([
		Vector2(center.x,      center.y - hh),  # top
		Vector2(center.x + hw, center.y),        # højre
		Vector2(center.x,      center.y + hh),  # bund
		Vector2(center.x - hw, center.y),        # venstre
	])

	# Vælg farve baseret på tiletype og position (skakbræt-variation)
	var er_sten = Vector2i(col, row) in sten_tiles
	var variation = (col + row) % 2 == 0
	var farve: Color
	if er_sten:
		farve = FARVE_STEN if variation else FARVE_STEN_MOERK
	else:
		farve = FARVE_GRAES if variation else FARVE_GRAES_MOE

	draw_colored_polygon(punkter, farve)
	draw_polyline(punkter + PackedVector2Array([punkter[0]]), FARVE_KANT, 0.5)

## Konverter tile koordinater til verdensposition
func tile_til_verden(col: int, row: int) -> Vector2:
	var x = (col - row) * (tile_bredde / 2.0)
	var y = (col + row) * (tile_hoejde / 2.0)
	return Vector2(x, y)

## Konverter verdensposition til tile koordinater
func verden_til_tile(pos: Vector2) -> Vector2i:
	var col = int((pos.x / (tile_bredde / 2.0) + pos.y / (tile_hoejde / 2.0)) / 2.0)
	var row = int((pos.y / (tile_hoejde / 2.0) - pos.x / (tile_bredde / 2.0)) / 2.0)
	return Vector2i(col, row)
