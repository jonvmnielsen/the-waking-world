# Styrer AnimatedSprite2D for hero — animation, retning, sprite-indlæsning
# Ingen dynamisk fallback — procedural grafik (orc_visuelt.gd) bruges IKKE her
extends AnimatedSprite2D

const SPRITE_PATH    := "res://assets/sprites/orc_warrior_spritesheet.png"
const FRAME_W        := 256
const FRAME_H        := 320

# Fødder sidder ca. ved pixel y=300 i den 320px høje frame (20px bund-padding)
# Med centered=false og dette offset: fødder lander ved scene (0,0)
const SPRITE_OFFSET  := Vector2(-128.0, -300.0)

var _sprites_klar: bool = false
var _aktiv_anim:  String = ""

func _ready() -> void:
	# Grundlæggende sprite-indstillinger
	centered = false
	offset   = SPRITE_OFFSET

	# Deaktiver øjeblikkeligt evt. Visuelt-node (procedural fallback fra ældre scene-version)
	# visible=false stopper _draw() samme frame — queue_free() alene er udskudt
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
	if not ResourceLoader.exists(SPRITE_PATH):
		push_warning("[HeroSprite] Sprite sheet ikke fundet: " + SPRITE_PATH)
		push_warning("[HeroSprite] Kør: py tools/run_pipeline.py  (og genåbn Godot)")
		visible = false
		return

	var tex := load(SPRITE_PATH) as Texture2D
	if not tex:
		push_warning("[HeroSprite] Kunne ikke indlæse sprite sheet.")
		visible = false
		return

	var sf := SpriteFrames.new()
	_tilfoej(sf, tex, "idle",    4, 0,  8.0)
	_tilfoej(sf, tex, "walk_s",  8, 1, 12.0)
	_tilfoej(sf, tex, "walk_sw", 8, 2, 12.0)
	_tilfoej(sf, tex, "walk_w",  8, 3, 12.0)
	_tilfoej(sf, tex, "walk_nw", 8, 4, 12.0)
	_tilfoej(sf, tex, "attack",  6, 5, 14.0)
	sprite_frames = sf
	visible       = true
	_sprites_klar = true
	_skift_anim("idle")
	print("[HeroSprite] OK — sprites indlæst fra " + SPRITE_PATH)

func _tilfoej(sf: SpriteFrames, tex: Texture2D,
		navn: String, antal: int, raekke: int, fps: float) -> void:
	sf.add_animation(navn)
	sf.set_animation_speed(navn, fps)
	sf.set_animation_loop(navn, true)
	for i in range(antal):
		var a := AtlasTexture.new()
		a.atlas  = tex
		a.region = Rect2(i * FRAME_W, raekke * FRAME_H, FRAME_W, FRAME_H)
		sf.add_frame(navn, a)

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
		_skift_anim(_vel_til_anim(vel))
	else:
		flip_h = false
		_skift_anim("idle")

# ---------------------------------------------------------------------------
# Retnings-mapping: velocity → animations-navn + flip
#
# Kamera sidder SW (225° azimut), ser mod NE.
# Isometrisk mapping fra Godot-verdensretning til sprite-retning:
#   Sektor (Godot-vinkel)    Visuelt    Sprite    flip_h
#   0°  Højre (+X)           NE         walk_nw   true
#   45° Ned-højre (+X+Y)     SE         walk_sw   true
#   90° Ned (+Y)             S          walk_s    false
#   135° Ned-venstre (-X+Y)  SW         walk_sw   false
#   180° Venstre (-X)        W          walk_w    false
#   225° Op-venstre (-X-Y)   NW         walk_nw   false
#   270° Op (-Y)             N          walk_w    true
#   315° Op-højre (+X-Y)     NE→W spejl walk_s    true
# ---------------------------------------------------------------------------
func _vel_til_anim(vel: Vector2) -> String:
	var deg := fmod(rad_to_deg(vel.angle()) + 360.0, 360.0)
	var sek := int((deg + 22.5) / 45.0) % 8
	flip_h = false
	match sek:
		0: flip_h = true;  return "walk_nw"   # Højre (E)
		1: flip_h = true;  return "walk_sw"   # Ned-højre (SE)
		2:                 return "walk_s"    # Ned (S) — mod kamera
		3:                 return "walk_sw"   # Ned-venstre (SW)
		4:                 return "walk_w"    # Venstre (W)
		5:                 return "walk_nw"   # Op-venstre (NW)
		6: flip_h = true;  return "walk_w"    # Op (N)
		7: flip_h = true;  return "walk_s"    # Op-højre (NE)
	return "walk_s"

func _skift_anim(navn: String) -> void:
	if not _sprites_klar or navn == _aktiv_anim:
		return
	if sprite_frames and sprite_frames.has_animation(navn):
		_aktiv_anim = navn
		play(navn)
