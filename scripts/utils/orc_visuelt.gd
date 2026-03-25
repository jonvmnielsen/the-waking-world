# Orc Warrior visuel — karikeret WC3-stil tegnet proceduralt
# Tilknyttes Visuelt-noden i orc_warrior.tscn
extends Node2D

# --- Palette (AGENT_GRAFIK.md) ---
const HUDE         := Color(0.239, 0.361, 0.180)   # #3D5C2E
const HUDE_LYST    := Color(0.310, 0.490, 0.235)   # lysere variant
const OLIVEN       := Color(0.290, 0.404, 0.255)   # #4A6741
const ORANGE       := Color(0.769, 0.384, 0.176)   # #C4622D
const METAL        := Color(0.545, 0.271, 0.075)   # #8B4513
const METAL_MOERK  := Color(0.260, 0.125, 0.030)
const TAND         := Color(0.92,  0.88,  0.72)
const OJE_GLOW     := Color(0.95,  0.80,  0.15)
const OUTLINE_C    := Color(0.05,  0.06,  0.03, 0.80)

func _draw() -> void:
	_skygge()
	_ben_og_foedder()
	_krop_og_rustning()
	_arme()
	_hoved_og_hjelm()
	_vaaben()
	_outline_hele()

# --- Hoved-lag ---

func _skygge() -> void:
	draw_colored_polygon(_ellipse(Vector2(0, 10), 22, 7, 14), Color(0, 0, 0, 0.30))

func _ben_og_foedder() -> void:
	# Brede korte ben — orcer er stumpe
	_poly([Vector2(-13, -14), Vector2(-5, -14), Vector2(-4,  9), Vector2(-14,  9)], HUDE)
	_poly([Vector2(  5, -14), Vector2(13, -14), Vector2(14,  9), Vector2(  4,  9)], HUDE)
	# Rustningsstøvler
	_poly([Vector2(-16, 7), Vector2(-3,  7), Vector2(-2, 13), Vector2(-17, 12)], METAL_MOERK)
	_poly([Vector2(  3, 7), Vector2(16,  7), Vector2(17, 12), Vector2(  2, 13)], METAL_MOERK)
	# Støvle-accent
	draw_line(Vector2(-16, 9), Vector2(-2,  9), ORANGE, 1.5)
	draw_line(Vector2(  2, 9), Vector2(16,  9), ORANGE, 1.5)

func _krop_og_rustning() -> void:
	# Bred krop — trapezoid med breden top (skuldre)
	_poly([
		Vector2(-26, -46), Vector2(26, -46),
		Vector2(15,  -14), Vector2(-15, -14),
	], HUDE)
	# Brystplade
	_poly([
		Vector2(-17, -44), Vector2(17, -44),
		Vector2(11,  -18), Vector2(-11, -18),
	], OLIVEN)
	# Lodret midterstripe — orange accent
	_poly([
		Vector2(-4, -42), Vector2(4, -42),
		Vector2(3,  -18), Vector2(-3, -18),
	], ORANGE)
	# Bælte
	_poly([Vector2(-14, -18), Vector2(14, -18), Vector2(13, -12), Vector2(-13, -12)], METAL)
	draw_line(Vector2(-13, -15), Vector2(13, -15), ORANGE, 1.5)

	# Store epauletter (WC3-orc signatur)
	_poly([Vector2(-26,-46), Vector2(-36,-40), Vector2(-34,-26), Vector2(-22,-28)], METAL)
	_poly([Vector2( 22,-46), Vector2( 36,-40), Vector2( 34,-26), Vector2( 22,-28)], METAL)
	# Skulder-spikes
	_poly([Vector2(-32,-42), Vector2(-27,-53), Vector2(-22,-42)], ORANGE)
	_poly([Vector2( 22,-42), Vector2( 27,-53), Vector2( 32,-42)], ORANGE)
	# Skulder highlight-kant
	draw_line(Vector2(-36,-40), Vector2(-22,-28), METAL_MOERK, 1.0)
	draw_line(Vector2( 22,-28), Vector2( 36,-40), METAL_MOERK, 1.0)

func _arme() -> void:
	# Tykke arme med rustningsmansjetter
	_poly([Vector2(-34,-26), Vector2(-22,-26), Vector2(-20, -6), Vector2(-32, -6)], HUDE)
	_poly([Vector2( 22,-26), Vector2( 34,-26), Vector2( 32, -6), Vector2( 20, -6)], HUDE)
	# Mansjetter
	_poly([Vector2(-34,-12), Vector2(-20,-12), Vector2(-20, -6), Vector2(-34, -6)], METAL)
	_poly([Vector2( 20,-12), Vector2( 34,-12), Vector2( 34, -6), Vector2( 20, -6)], METAL)
	# Knyttede næver
	draw_colored_polygon(_ellipse(Vector2(-28, -2), 9, 8, 10), HUDE_LYST)
	draw_colored_polygon(_ellipse(Vector2( 28, -2), 9, 8, 10), HUDE_LYST)
	# Knoer
	for i in [-1, 0, 1]:
		draw_colored_polygon(_ellipse(Vector2(-28 + i*4, -5), 2, 2, 6), HUDE)
		draw_colored_polygon(_ellipse(Vector2( 28 + i*4, -5), 2, 2, 6), HUDE)

func _hoved_og_hjelm() -> void:
	# Hals
	_poly([Vector2(-6,-46), Vector2(6,-46), Vector2(5,-50), Vector2(-5,-50)], HUDE)
	# Hoved — bredt og fladt (karikeret orc-form)
	_poly([
		Vector2(-15,-50), Vector2(15,-50),
		Vector2(17, -63), Vector2(-17,-63),
	], HUDE_LYST)
	# Bred kæbe
	_poly([
		Vector2(-14,-50), Vector2(14,-50),
		Vector2(12, -54), Vector2(-12,-54),
	], HUDE)
	# Stødtænder (tusks) — prominente
	_poly([Vector2(-11,-50), Vector2(-6,-50), Vector2(-9,-42)], TAND)
	_poly([Vector2(  6,-50), Vector2(11,-50), Vector2( 9,-42)], TAND)
	# Tand-outline
	draw_polyline(PackedVector2Array([
		Vector2(-11,-50), Vector2(-9,-42), Vector2(-6,-50)
	]), OUTLINE_C, 0.8)
	draw_polyline(PackedVector2Array([
		Vector2(6,-50), Vector2(9,-42), Vector2(11,-50)
	]), OUTLINE_C, 0.8)

	# Øjne — gule, glødende
	draw_colored_polygon(_ellipse(Vector2(-6,-58), 5, 4, 10), OJE_GLOW)
	draw_colored_polygon(_ellipse(Vector2( 6,-58), 5, 4, 10), OJE_GLOW)
	draw_colored_polygon(_ellipse(Vector2(-6,-58), 2, 2,  8), Color(0.05, 0.02, 0.02))
	draw_colored_polygon(_ellipse(Vector2( 6,-58), 2, 2,  8), Color(0.05, 0.02, 0.02))

	# Hjelm
	_poly([
		Vector2(-15,-62), Vector2(15,-62),
		Vector2(13, -74), Vector2(-13,-74),
	], METAL_MOERK)
	# Hjelmkant
	_poly([Vector2(-17,-62), Vector2(17,-62), Vector2(15,-66), Vector2(-15,-66)], METAL)
	# Hjelm-ribbe
	draw_line(Vector2(0,-66), Vector2(0,-74), ORANGE, 2.0)
	# Horn
	_poly([Vector2(-11,-70), Vector2(-5,-70), Vector2(-8,-84)], METAL)
	_poly([Vector2(  5,-70), Vector2(11,-70), Vector2( 8,-84)], METAL)
	# Horn highlight
	draw_line(Vector2(-8,-84), Vector2(-5,-70), Color(METAL.r+0.15, METAL.g+0.1, METAL.b+0.05), 1.0)
	draw_line(Vector2( 8,-84), Vector2(11,-70), Color(METAL.r+0.15, METAL.g+0.1, METAL.b+0.05), 1.0)

func _vaaben() -> void:
	#Økseskaft (i venstre hånd)
	_poly([Vector2(22,-30), Vector2(26,-30), Vector2(30, 6), Vector2(26, 6)], METAL_MOERK)
	# Øksehoved
	_poly([
		Vector2(20,-44), Vector2(36,-36),
		Vector2(36,-22), Vector2(20,-26),
	], METAL)
	# Skarpt skær (accent)
	_poly([
		Vector2(32,-42), Vector2(42,-34),
		Vector2(42,-22), Vector2(32,-24),
	], ORANGE)
	# Skær-highlight
	draw_line(Vector2(42,-34), Vector2(42,-22), Color(1, 0.8, 0.5, 0.7), 1.5)

func _outline_hele() -> void:
	# Lette outline-accenter på nøgleformer for læsbarhed
	var krop = PackedVector2Array([
		Vector2(-26,-46), Vector2(26,-46),
		Vector2(15,-14),  Vector2(-15,-14),
	])
	draw_polyline(krop + PackedVector2Array([krop[0]]), OUTLINE_C, 1.2)

# --- Hjælpefunktioner ---

func _poly(punkter: Array, farve: Color) -> void:
	draw_colored_polygon(PackedVector2Array(punkter), farve)

func _ellipse(center: Vector2, rx: float, ry: float, seg: int) -> PackedVector2Array:
	var pts := PackedVector2Array()
	for i in range(seg):
		var a := (float(i) / float(seg)) * TAU
		pts.append(center + Vector2(cos(a) * rx, sin(a) * ry))
	return pts
