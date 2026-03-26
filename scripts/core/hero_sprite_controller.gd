# Styrer AnimatedSprite2D for hero — Kenney isometric miniature sprites
# Indlæser individuelle PNG-frames direkte; ingen spritesheet
extends AnimatedSprite2D

const KENNEY_DIR   := "res://assets/sprites/kenney/isometric-miniature-dungeon/Characters/Male"
const HERO_VARIANT := "Male_3"

# Kenney 256×512px pr. frame — figur sidder i bunden (alpha y 326-456)
# centered=false + offset: fødder lander på scene (0,0) uanset node-scale
const SPRITE_OFFSET := Vector2(-128.0, -456.0)

var _sprites_klar: bool = false
var _aktiv_anim:  String = ""

func _ready() -> void:
	centered = false
	offset   = SPRITE_OFFSET

	# Deaktiver evt. Visuelt-node øjeblikkeligt (ældre scene-version)
	var par := get_parent()
	if par.has_node("Visuelt"):
		var v := par.get_node("Visuelt")
		v.visible = false
		v.set_process(false)
		v.set_physics_process(false)
		v.queue_free()

	_forsøg_indlaes_sprites()

# ---------------------------------------------------------------------------
# Sprite-indlæsning
# ---------------------------------------------------------------------------
func _forsøg_indlaes_sprites() -> void:
	var sf := SpriteFrames.new()
	if not _tilfoej(sf, "idle",   HERO_VARIANT + "_Idle",    1,  6.0): return
	if not _tilfoej(sf, "walk",   HERO_VARIANT + "_Run",    10, 12.0): return
	if not _tilfoej(sf, "attack", HERO_VARIANT + "_Pickup", 10, 14.0): return
	sprite_frames = sf
	visible       = true
	_sprites_klar = true
	_skift_anim("idle")
	print("[HeroSprite] OK — Kenney " + HERO_VARIANT + " indlæst")

func _tilfoej(sf: SpriteFrames, anim: String,
		præfiks: String, antal: int, fps: float) -> bool:
	sf.add_animation(anim)
	sf.set_animation_speed(anim, fps)
	sf.set_animation_loop(anim, true)
	for i in range(antal):
		var sti := KENNEY_DIR + "/" + præfiks + str(i) + ".png"
		if not ResourceLoader.exists(sti):
			push_warning("[HeroSprite] Mangler: " + sti)
			visible = false
			return false
		sf.add_frame(anim, load(sti) as Texture2D)
	return true

# ---------------------------------------------------------------------------
# Animations-opdatering — kaldes hvert frame fra hero_controller._process()
# ---------------------------------------------------------------------------
func opdater_animation(bevaeges: bool, angriber: bool, vel: Vector2) -> void:
	if not _sprites_klar:
		return
	if angriber:
		_skift_anim("attack")
		return
	if bevaeges and vel.length_squared() > 100.0:
		_opdater_retning(vel)
		_skift_anim("walk")
	else:
		_skift_anim("idle")

# ---------------------------------------------------------------------------
# Retnings-flip: velocity → flip_h
# Kenney-sprite ser mod SW (kamera-retning 225°)
# Sektorer mod øst (E, SE, N, NE) kræver flip for korrekt isometrisk retning
# ---------------------------------------------------------------------------
func _opdater_retning(vel: Vector2) -> void:
	var deg := fmod(rad_to_deg(vel.angle()) + 360.0, 360.0)
	var sek := int((deg + 22.5) / 45.0) % 8
	match sek:
		0, 1, 6, 7: flip_h = true    # E, SE, N, NE
		_:           flip_h = false   # S, SW, W, NW

func _skift_anim(navn: String) -> void:
	if not _sprites_klar or navn == _aktiv_anim:
		return
	if sprite_frames and sprite_frames.has_animation(navn):
		_aktiv_anim = navn
		play(navn)
