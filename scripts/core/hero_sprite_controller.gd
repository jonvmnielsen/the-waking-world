# Styrer hero AnimatedSprite2D — vælger korrekt animation og retning
# Fallback til procedural grafik (orc_visuelt.gd) hvis sprites ikke eksisterer
extends AnimatedSprite2D

# Sprite sheet sti (genereret af Blender pipeline)
const SPRITE_PATH = "res://assets/sprites/orc_warrior_spritesheet.png"

# Frame dimensioner
const FRAME_W  = 128
const FRAME_H  = 160
const H_FRAMES = 8    # frames per række
const V_FRAMES = 6    # antal rækker (idle, walk_s/sw/w/nw, attack)

# Animationsnavne og deres række-index i sprite sheet
const ANIM_RAEKKER = {
	"idle":    0,
	"walk_s":  1,
	"walk_sw": 2,
	"walk_w":  3,
	"walk_nw": 4,
	"attack":  5,
}

var _sprites_klar: bool = false
var _nuvaerende_anim: String = "idle"

func _ready() -> void:
	_forsøg_indlaes_sprites()

## Forsøg at indlæse Blender-genereret sprite sheet
func _forsøg_indlaes_sprites() -> void:
	if not ResourceLoader.exists(SPRITE_PATH):
		# Sprites ikke klar — tilsæt procedural fallback
		_aktiver_procedural_fallback()
		return

	var tekstur = load(SPRITE_PATH) as Texture2D
	if not tekstur:
		_aktiver_procedural_fallback()
		return

	# Byg SpriteFrames dynamisk
	var frames = SpriteFrames.new()
	_tilfoej_animation(frames, tekstur, "idle",    4, 0, 8.0)
	_tilfoej_animation(frames, tekstur, "walk_s",  8, 1, 12.0)
	_tilfoej_animation(frames, tekstur, "walk_sw", 8, 2, 12.0)
	_tilfoej_animation(frames, tekstur, "walk_w",  8, 3, 12.0)
	_tilfoej_animation(frames, tekstur, "walk_nw", 8, 4, 12.0)
	_tilfoej_animation(frames, tekstur, "attack",  6, 5, 14.0)
	sprite_frames = frames
	_sprites_klar = true
	spil("idle")
	print("[HeroSprite] Blender sprites indlæst.")

## Tilføj én animation fra sprite sheet
func _tilfoej_animation(sf: SpriteFrames, tex: Texture2D,
		navn: String, antal: int, raekke: int, fps: float) -> void:
	sf.add_animation(navn)
	sf.set_animation_speed(navn, fps)
	sf.set_animation_loop(navn, true)
	for i in range(antal):
		var atlas = AtlasTexture.new()
		atlas.atlas  = tex
		atlas.region = Rect2(i * FRAME_W, raekke * FRAME_H, FRAME_W, FRAME_H)
		sf.add_frame(navn, atlas)

## Aktiver procedural grafik som fallback
func _aktiver_procedural_fallback() -> void:
	# Tilføj orc_visuelt.gd som sibling hvis det ikke allerede eksisterer
	var parent = get_parent()
	if parent.has_node("Visuelt"):
		return
	var visuelt_script = load("res://scripts/utils/orc_visuelt.gd")
	if not visuelt_script:
		return
	var visuelt = Node2D.new()
	visuelt.set_script(visuelt_script)
	visuelt.name = "Visuelt"
	parent.add_child(visuelt)
	# Skjul AnimatedSprite2D (ingen sprite frames)
	visible = false
	print("[HeroSprite] Procedural fallback aktiveret (Blender sprites mangler).")

## Opdater animation baseret på hero-tilstand
func opdater_animation(bevaeges: bool, angriber: bool, retning: Vector2) -> void:
	if not _sprites_klar:
		return

	var ny_anim: String
	if angriber:
		ny_anim = "attack"
	elif bevaeges and retning.length() > 0.1:
		ny_anim = _retning_til_anim(retning)
	else:
		ny_anim = "idle"

	if ny_anim != _nuvaerende_anim:
		_nuvaerende_anim = ny_anim
		spil(ny_anim)

## Konverter bevægelsesretning til animations-navn
func _retning_til_anim(dir: Vector2) -> String:
	# Isometrisk: beregn vinkel og map til S/SW/W/NW
	var vinkel = rad_to_deg(dir.angle())
	# Normalisér til 0-360
	if vinkel < 0:
		vinkel += 360.0
	# Spejl vest-animationer for øst-retning (flip sprite i stedet)
	if vinkel > 90 and vinkel <= 180:
		flip_h = true
		vinkel = 180 - vinkel
	elif vinkel > 180 and vinkel <= 270:
		flip_h = true
		vinkel = vinkel - 180
	else:
		flip_h = false

	if   vinkel < 22.5:  return "walk_s"
	elif vinkel < 67.5:  return "walk_sw"
	elif vinkel < 112.5: return "walk_w"
	else:                return "walk_nw"

## Wrapper for play()
func spil(anim: String) -> void:
	if sprite_frames and sprite_frames.has_animation(anim):
		play(anim)
