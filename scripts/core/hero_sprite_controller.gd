# Styrer hero AnimatedSprite2D — animation, retning og sprite-indlæsning
# Fallback: aktiverer orc_visuelt.gd hvis sprites ikke er importeret endnu
extends AnimatedSprite2D

const SPRITE_PATH := "res://assets/sprites/orc_warrior_spritesheet.png"
const FRAME_W     := 128
const FRAME_H     := 160

var _sprites_klar: bool   = false
var _aktiv_anim: String   = ""

func _ready() -> void:
	_forsøg_indlaes_sprites()

# ---------------------------------------------------------------------------
# Sprite-indlæsning
# ---------------------------------------------------------------------------
func _forsøg_indlaes_sprites() -> void:
	if not ResourceLoader.exists(SPRITE_PATH):
		_aktiver_procedural_fallback()
		return
	var tex := load(SPRITE_PATH) as Texture2D
	if not tex:
		_aktiver_procedural_fallback()
		return

	var sf := SpriteFrames.new()
	_tilfoej(sf, tex, "idle",    4, 0,  8.0, false)
	_tilfoej(sf, tex, "walk_s",  8, 1, 12.0, false)
	_tilfoej(sf, tex, "walk_sw", 8, 2, 12.0, false)
	_tilfoej(sf, tex, "walk_w",  8, 3, 12.0, false)
	_tilfoej(sf, tex, "walk_nw", 8, 4, 12.0, false)
	_tilfoej(sf, tex, "attack",  6, 5, 14.0, false)
	sprite_frames  = sf
	_sprites_klar  = true
	_skift_anim("idle")
	print("[HeroSprite] Sprites indlæst OK.")

func _tilfoej(sf: SpriteFrames, tex: Texture2D, navn: String,
		antal: int, raekke: int, fps: float, _loop: bool) -> void:
	sf.add_animation(navn)
	sf.set_animation_speed(navn, fps)
	sf.set_animation_loop(navn, true)
	for i in range(antal):
		var a := AtlasTexture.new()
		a.atlas  = tex
		a.region = Rect2(i * FRAME_W, raekke * FRAME_H, FRAME_W, FRAME_H)
		sf.add_frame(navn, a)

func _aktiver_procedural_fallback() -> void:
	var par := get_parent()
	if par.has_node("Visuelt"):
		return
	var scr := load("res://scripts/utils/orc_visuelt.gd")
	if not scr:
		return
	var node := Node2D.new()
	node.set_script(scr)
	node.name = "Visuelt"
	par.add_child(node)
	visible = false
	print("[HeroSprite] Procedural fallback aktiv (kør Blender-pipeline for sprites).")

# ---------------------------------------------------------------------------
# Animations-opdatering — kaldes hvert frame fra hero_controller
# ---------------------------------------------------------------------------
func opdater_animation(bevaeges: bool, angriber: bool, vel: Vector2) -> void:
	if angriber:
		_skift_anim("attack")
		return

	if bevaeges and vel.length_squared() > 100.0:
		var anim := _vel_til_anim(vel)
		_skift_anim(anim)
	else:
		flip_h = false
		_skift_anim("idle")

# ---------------------------------------------------------------------------
# Isometrisk retnings-mapping
#
# Kameraet sidder i SW (225°), ser mod NE.
# Det betyder at verdensrummet mapper til skærmen sådan:
#   Verden +Y (ned)  → skærm nedad-højre   → "S"  (mod viewer)
#   Verden -X (v)    → skærm nedad-venstre → "SW"
#   Verden -Y (op)   → skærm opad-venstre  → "W"
#   Verden +X (h)    → skærm opad-højre    → "NW"
#
# De 4 modsatte retninger (N, SE, E, NE) spejles med flip_h = true.
# ---------------------------------------------------------------------------
func _vel_til_anim(vel: Vector2) -> String:
	# Vinkel 0° = højre (+X), 90° = ned (+Y), stiger med uret
	var deg := fmod(rad_to_deg(vel.angle()) + 360.0, 360.0)
	flip_h = false

	# Del cirklen i 8 sektorer à 45°, startende ved 22.5°
	var sektor := int((deg + 22.5) / 45.0) % 8

	match sektor:
		0: # Højre (E) → spejl af "S"
			flip_h = true
			return "walk_s"
		1: # Ned-højre (SE) → spejl af "SW"
			flip_h = true
			return "walk_sw"
		2: # Ned (S) → "SW" (venstre-kamera-side)
			return "walk_sw"
		3: # Ned-venstre (SW) → "S" (mod kamera)
			return "walk_s"
		4: # Venstre (W) → spejl af "S" bagfra → brug "NW"
			return "walk_nw"
		5: # Op-venstre (NW) → "W"
			return "walk_w"
		6: # Op (N) → spejl af "W"
			flip_h = true
			return "walk_w"
		7: # Op-højre (NE) → spejl af "NW"
			flip_h = true
			return "walk_nw"
	return "walk_s"

func _skift_anim(navn: String) -> void:
	if not _sprites_klar:
		return
	if navn == _aktiv_anim:
		return
	if sprite_frames and sprite_frames.has_animation(navn):
		_aktiv_anim = navn
		play(navn)
