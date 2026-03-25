# HP bar komponent — tegner HP over en enhed
# Tilknyttes en Node2D placeret over enheden
class_name HPBar
extends Node2D

## Reference til ejeren (sættes af parent ved _ready)
var ejer: Node = null

## Farver
const FARVE_BAGGRUND: Color = Color(0.1, 0.1, 0.1, 0.8)
const FARVE_HP_HOEJ: Color = Color(0.2, 0.8, 0.2, 1.0)
const FARVE_HP_LAV: Color = Color(0.8, 0.2, 0.1, 1.0)

## Dimensioner
const BREDDE: float = 48.0
const HOEJDE: float = 6.0

func _ready() -> void:
	# Ejer er parent-nodets parent (HPBarPosition → Hero)
	ejer = get_parent()

func _draw() -> void:
	if not ejer or not ejer.has_method("hp_procent"):
		return
	var pct: float = ejer.hp_procent()
	var halvbredde = BREDDE / 2.0
	# Baggrund
	draw_rect(Rect2(-halvbredde, -HOEJDE / 2.0, BREDDE, HOEJDE), FARVE_BAGGRUND)
	# HP fyld — farve interpolerer grøn til rød
	if pct > 0.0:
		var hp_farve = FARVE_HP_HOEJ.lerp(FARVE_HP_LAV, 1.0 - pct)
		draw_rect(Rect2(-halvbredde, -HOEJDE / 2.0, BREDDE * pct, HOEJDE), hp_farve)

func _process(_delta: float) -> void:
	# Gentegn hvert frame så HP vises korrekt
	queue_redraw()
