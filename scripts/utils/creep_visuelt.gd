# Ashfield Prowler visuel — lav, truende silhuet
# Korrupt dyre-form: hunched ryg, glødende øjne, kløer
extends Node2D

# --- Palette (mørkere end hero — truende kontrast) ---
const PELS_MOERK   := Color(0.22, 0.17, 0.12)
const PELS_MID     := Color(0.33, 0.25, 0.17)
const PELS_LYST    := Color(0.45, 0.35, 0.22)
const KRAD         := Color(0.55, 0.50, 0.40)   # kloer/tænder
const OJE_GLOW     := Color(0.95, 0.65, 0.08)   # rav-gule øjne
const RYGSOEL      := Color(0.55, 0.40, 0.18)   # ryg-pigge
const OUTLINE_C    := Color(0.08, 0.06, 0.04, 0.75)

func _draw() -> void:
	_skygge()
	_ben()
	_hale()
	_krop()
	_hoved()
	_rygspigg()
	_outline_accent()

# --- Lag ---

func _skygge() -> void:
	draw_colored_polygon(_ellipse(Vector2(2, 8), 24, 6, 14), Color(0, 0, 0, 0.28))

func _ben() -> void:
	# Fire korte, kraftige ben — dyrisk stance
	# Forben venstre
	_poly([Vector2(-18, -6), Vector2(-12, -6), Vector2(-11,  9), Vector2(-19,  8)], PELS_MOERK)
	# Forben højre
	_poly([Vector2(-6,  -4), Vector2(  0, -4), Vector2(  1,  9), Vector2( -7,  8)], PELS_MOERK)
	# Bagben venstre
	_poly([Vector2(  6,  -2), Vector2( 12,  -2), Vector2(13,  9), Vector2(  5,  8)], PELS_MOERK)
	# Bagben højre
	_poly([Vector2( 14,  -2), Vector2( 20,  -2), Vector2(21,  9), Vector2( 13,  8)], PELS_MOERK)
	# Kloer (tre spidse på hvert ben)
	_kloer(Vector2(-15, 9))
	_kloer(Vector2(-3,  9))
	_kloer(Vector2( 9,  9))
	_kloer(Vector2(17,  9))

func _kloer(pos: Vector2) -> void:
	for i in [-4, 0, 4]:
		_poly([
			Vector2(pos.x + i - 1, pos.y),
			Vector2(pos.x + i + 1, pos.y),
			Vector2(pos.x + i,     pos.y + 6),
		], KRAD)

func _hale() -> void:
	# Hale peger opad og bagtil — aggressiv postur
	_poly([
		Vector2(20, -4), Vector2(24, -4),
		Vector2(30, -16), Vector2(26, -16),
	], PELS_MID)
	_poly([
		Vector2(26, -16), Vector2(30, -16),
		Vector2(32, -26), Vector2(28, -24),
	], PELS_MID)
	# Hale-spids
	_poly([Vector2(28,-24), Vector2(32,-26), Vector2(30,-32)], PELS_LYST)

func _krop() -> void:
	# Aflang, lav krop — hunched frem
	_poly([
		Vector2(-20, -8),  Vector2(20,  -8),
		Vector2(22,   4),  Vector2(-22,  4),
	], PELS_MID)
	# Øvre ryg (hvælvet — korrupt silhuet)
	_poly([
		Vector2(-16, -8),  Vector2(18,  -8),
		Vector2(16, -20),  Vector2(-12, -18),
	], PELS_MOERK)
	# Bryst-highlight
	_poly([
		Vector2(-10, -6), Vector2(6,  -6),
		Vector2(6,   2),  Vector2(-10, 2),
	], PELS_LYST)
	# Mørke striber (korupt markering)
	for i in range(3):
		var x = -6 + i * 6
		draw_line(Vector2(x, -18), Vector2(x + 2, -2), Color(0.1, 0.08, 0.05, 0.6), 1.5)

func _hoved() -> void:
	# Langstrakt hoved — spids snude pegende fremad/ned
	_poly([
		Vector2(-20, -20), Vector2(  6, -20),
		Vector2(  8, -10), Vector2(-20, -10),
	], PELS_MID)
	# Snude/næse
	_poly([
		Vector2(  2, -20), Vector2( 8, -20),
		Vector2(10,  -14), Vector2(  2, -16),
	], PELS_MOERK)
	# Snude-highlight
	draw_colored_polygon(_ellipse(Vector2(8, -16), 3, 2, 8), PELS_LYST)

	# Mund/tænder — åben mundvinkel
	_poly([
		Vector2(-4, -11), Vector2(8,  -11),
		Vector2(8,   -8), Vector2(-4,  -8),
	], Color(0.15, 0.05, 0.05))
	# Tænder
	for i in range(4):
		var tx = -2 + i * 3
		_poly([
			Vector2(tx,     -11),
			Vector2(tx + 2, -11),
			Vector2(tx + 1, -8),
		], KRAD)

	# Ører (spidse, agressive)
	_poly([Vector2(-20,-20), Vector2(-14,-20), Vector2(-18,-30)], PELS_MOERK)
	_poly([Vector2(-14,-20), Vector2( -8,-20), Vector2(-12,-28)], PELS_MOERK)
	# Øre indre
	_poly([Vector2(-18,-21), Vector2(-14,-21), Vector2(-17,-27)], Color(0.5, 0.2, 0.2, 0.6))

	# Glødende øjne (rav-gule — tydeligt anderledes end hero)
	draw_colored_polygon(_ellipse(Vector2(-14, -17), 4, 3, 10), OJE_GLOW)
	draw_colored_polygon(_ellipse(Vector2( -6, -17), 4, 3, 10), OJE_GLOW)
	# Lodret pupil (rovdyr)
	draw_colored_polygon(_ellipse(Vector2(-14, -17), 1, 3, 8), Color(0.05, 0.02, 0.02))
	draw_colored_polygon(_ellipse(Vector2( -6, -17), 1, 3, 8), Color(0.05, 0.02, 0.02))

func _rygspigg() -> void:
	# Tre pigge langs ryggen — korrupt mutant-look
	var pigg_pos := [Vector2(-10,-20), Vector2(-2,-22), Vector2(8,-20)]
	for p in pigg_pos:
		_poly([
			Vector2(p.x - 3, p.y),
			Vector2(p.x + 3, p.y),
			Vector2(p.x,     p.y - 10),
		], RYGSOEL)
		draw_line(p + Vector2(0, -10), p + Vector2(3, 0), Color(0.7, 0.55, 0.3, 0.6), 0.8)

func _outline_accent() -> void:
	# Outline langs kroppen for silhuet-klarhed
	var krop := PackedVector2Array([
		Vector2(-20,-8), Vector2(20,-8),
		Vector2(22,  4), Vector2(-22, 4),
	])
	draw_polyline(krop + PackedVector2Array([krop[0]]), OUTLINE_C, 1.0)
	# Hoved outline
	var hov := PackedVector2Array([
		Vector2(-20,-20), Vector2(8,-20), Vector2(10,-14), Vector2(-20,-10),
	])
	draw_polyline(hov + PackedVector2Array([hov[0]]), OUTLINE_C, 1.0)

# --- Hjælpefunktioner ---

func _poly(punkter: Array, farve: Color) -> void:
	draw_colored_polygon(PackedVector2Array(punkter), farve)

func _ellipse(center: Vector2, rx: float, ry: float, seg: int) -> PackedVector2Array:
	var pts := PackedVector2Array()
	for i in range(seg):
		var a := (float(i) / float(seg)) * TAU
		pts.append(center + Vector2(cos(a) * rx, sin(a) * ry))
	return pts
