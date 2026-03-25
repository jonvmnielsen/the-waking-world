# Isometrisk gitter — Ashfield med kontrast, dybde og variation
class_name IsometricGrid
extends Node2D

@export var kolonner: int = 30
@export var raekker:  int = 30
@export var tile_bredde: int = 64
@export var tile_hoejde: int = 32

## Sten-tiles markeret i ashfield.gd
var sten_tiles: Array = []

# --- Græs-palette (4 nuancer for naturlig variation) ---
const GRAES := [
	Color(0.268, 0.502, 0.196),   # lys grøn
	Color(0.235, 0.455, 0.172),   # standard
	Color(0.200, 0.408, 0.149),   # mørk grøn
	Color(0.255, 0.478, 0.184),   # mellemtone
]
# Øvre kanthighlight og nedre skygge (isometrisk dybde)
const GRAES_HIGHLIGHT := Color(0.360, 0.620, 0.270, 0.55)
const GRAES_SKYGGE    := Color(0.120, 0.260, 0.090, 0.45)

# --- Sten-palette ---
const STEN := [
	Color(0.435, 0.408, 0.365),
	Color(0.378, 0.354, 0.315),
	Color(0.465, 0.438, 0.392),
]
const STEN_HIGHLIGHT := Color(0.580, 0.560, 0.510, 0.60)
const STEN_SKYGGE    := Color(0.200, 0.185, 0.162, 0.50)
const STEN_REVNE     := Color(0.160, 0.150, 0.130, 0.40)

# Kant-farve (outline)
const KANT := Color(0.08, 0.10, 0.06, 0.30)

func _draw() -> void:
	# Tegn bagfra mod forrest for korrekt overlap
	for raekke in range(raekker - 1, -1, -1):
		for kolonne in range(kolonner):
			_tegn_tile(kolonne, raekke)

func _tegn_tile(col: int, row: int) -> void:
	var center := tile_til_verden(col, row)
	var hw := tile_bredde * 0.5
	var hh := tile_hoejde * 0.5
	var er_sten := Vector2i(col, row) in sten_tiles

	# Basis-diamond
	var top    := Vector2(center.x,      center.y - hh)
	var hoejre := Vector2(center.x + hw, center.y)
	var bund   := Vector2(center.x,      center.y + hh)
	var venstre:= Vector2(center.x - hw, center.y)
	var diamond := PackedVector2Array([top, hoejre, bund, venstre])

	# Vælg basisfarve
	var seed_val := (col * 7 + row * 13) % 4
	var basis_farve: Color
	if er_sten:
		basis_farve = STEN[seed_val % 3]
	else:
		basis_farve = GRAES[seed_val]

	draw_colored_polygon(diamond, basis_farve)

	# Isometrisk dybde — øvre halvdel lysere, nedre mørkere
	var highlight_farve := STEN_HIGHLIGHT if er_sten else GRAES_HIGHLIGHT
	var skygge_farve    := STEN_SKYGGE    if er_sten else GRAES_SKYGGE

	# Øvre trekant (highlight)
	draw_colored_polygon(PackedVector2Array([top, hoejre, center, venstre]), highlight_farve)
	# Nedre trekant (skygge)
	draw_colored_polygon(PackedVector2Array([center, hoejre, bund, venstre]), skygge_farve)

	# Sten-specifikke detaljer
	if er_sten:
		_tegn_sten_detaljer(center, hw, hh, seed_val)
	else:
		_tegn_graes_detaljer(center, hw, hh, seed_val)

	# Tile-kant
	draw_polyline(
		PackedVector2Array([top, hoejre, bund, venstre, top]),
		KANT, 0.6
	)

func _tegn_sten_detaljer(center: Vector2, hw: float, hh: float, seed_val: int) -> void:
	# Revner på sten-tiles for tekstur
	var rnd := seed_val
	var revne_start := center + Vector2((rnd % 3 - 1) * hw * 0.3, -hh * 0.4)
	var revne_slut  := revne_start + Vector2((rnd % 5 - 2) * 8, hh * 0.6)
	draw_line(revne_start, revne_slut, STEN_REVNE, 1.0)
	# Lille revne-forgrening
	var gren := revne_start + (revne_slut - revne_start) * 0.5
	draw_line(gren, gren + Vector2(4, 5), STEN_REVNE, 0.7)

func _tegn_graes_detaljer(center: Vector2, hw: float, hh: float, seed_val: int) -> void:
	# Subtile strå-antydninger på nogle tiles
	if seed_val != 0:
		return
	var straa_farve := Color(0.35, 0.58, 0.22, 0.50)
	for i in range(3):
		var ox := (i - 1) * hw * 0.28
		draw_line(
			center + Vector2(ox, hh * 0.1),
			center + Vector2(ox + 2, -hh * 0.35),
			straa_farve, 1.0
		)

## Tile-koordinater → verdensposition
func tile_til_verden(col: int, row: int) -> Vector2:
	return Vector2(
		(col - row) * (tile_bredde * 0.5),
		(col + row) * (tile_hoejde * 0.5)
	)

## Verdensposition → tile-koordinater
func verden_til_tile(pos: Vector2) -> Vector2i:
	var col := int((pos.x / (tile_bredde  * 0.5) + pos.y / (tile_hoejde * 0.5)) * 0.5)
	var row := int((pos.y / (tile_hoejde * 0.5) - pos.x / (tile_bredde  * 0.5)) * 0.5)
	return Vector2i(col, row)
