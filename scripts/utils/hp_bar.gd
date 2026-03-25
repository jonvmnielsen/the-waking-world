# HP bar — poleret, gradient grøn→gul→rød med kant og shine
class_name HPBar
extends Node2D

## Reference til ejeren sættes automatisk (parent-node)
var ejer: Node = null

# Dimensioner
const BREDDE    := 48.0
const HOEJDE    :=  7.0
const KANT      :=  1.5   # kant-tykkelse
const SHINE_H   :=  2.5   # højde på highlight-stripe

# Farver
const FARVE_KANT     := Color(0.05, 0.05, 0.04, 0.90)
const FARVE_BAGGRUND := Color(0.10, 0.10, 0.09, 0.85)
const FARVE_GROEN    := Color(0.20, 0.80, 0.22)
const FARVE_GOEL     := Color(0.92, 0.78, 0.12)
const FARVE_ROED     := Color(0.85, 0.18, 0.12)
const FARVE_SHINE    := Color(1.00, 1.00, 1.00, 0.18)

func _ready() -> void:
	ejer = get_parent()

func _draw() -> void:
	if not ejer or not ejer.has_method("hp_procent"):
		return
	var pct := clampf(ejer.hp_procent(), 0.0, 1.0)
	var hw := BREDDE * 0.5
	var hh := HOEJDE * 0.5

	# Ydre kant/skygge
	draw_rect(
		Rect2(-hw - KANT, -hh - KANT, BREDDE + KANT * 2, HOEJDE + KANT * 2),
		FARVE_KANT
	)
	# Baggrundsfelt
	draw_rect(Rect2(-hw, -hh, BREDDE, HOEJDE), FARVE_BAGGRUND)

	# HP fyld med gradient — simuleret ved tre sektioner
	if pct > 0.0:
		var fyld_bredde := BREDDE * pct
		var hp_farve := _gradient_farve(pct)
		draw_rect(Rect2(-hw, -hh, fyld_bredde, HOEJDE), hp_farve)

		# Gradient-overgang: mørkere i bunden, lysere i midten
		var moerk := Color(hp_farve.r * 0.65, hp_farve.g * 0.65, hp_farve.b * 0.65, 0.55)
		draw_rect(Rect2(-hw, hh - 2.0, fyld_bredde, 2.0), moerk)

		# Shine-stripe øverst
		draw_rect(Rect2(-hw, -hh, fyld_bredde, SHINE_H), FARVE_SHINE)

	# Midterlinje (subtil separator for dybde)
	draw_line(
		Vector2(-hw, 0.0),
		Vector2(-hw + BREDDE * pct, 0.0),
		Color(0, 0, 0, 0.12), 1.0
	)

func _process(_delta: float) -> void:
	queue_redraw()

## Interpolér farve baseret på HP-procent
func _gradient_farve(pct: float) -> Color:
	if pct > 0.6:
		# Grøn → gul (60-100%)
		var t := (pct - 0.6) / 0.4
		return FARVE_GROEN.lerp(FARVE_GOEL, 1.0 - t)
	else:
		# Gul → rød (0-60%)
		var t := pct / 0.6
		return FARVE_ROED.lerp(FARVE_GOEL, t)
