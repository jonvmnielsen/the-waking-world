# Styrer AnimatedSprite2D for creeps — Kenney isometric miniature sprites
# Male_0 (anderledes farve end hero Male_3 — tydelig visuel forskel)
extends AnimatedSprite2D

const KENNEY_DIR    := "res://assets/sprites/kenney/isometric-miniature-dungeon/Characters/Male"
const CREEP_VARIANT := "Male_0"
const SPRITE_OFFSET := Vector2(-128.0, -456.0)

var _sprites_klar: bool = false

func _ready() -> void:
	centered = false
	offset   = SPRITE_OFFSET
	_forsøg_indlaes_sprites()

func _forsøg_indlaes_sprites() -> void:
	var sf := SpriteFrames.new()
	if not _tilfoej(sf, "idle", CREEP_VARIANT + "_Idle",  1,  6.0): return
	if not _tilfoej(sf, "walk", CREEP_VARIANT + "_Run",  10, 12.0): return
	sprite_frames = sf
	visible       = true
	_sprites_klar = true
	play("idle")

func _tilfoej(sf: SpriteFrames, anim: String,
		præfiks: String, antal: int, fps: float) -> bool:
	sf.add_animation(anim)
	sf.set_animation_speed(anim, fps)
	sf.set_animation_loop(anim, true)
	for i in range(antal):
		var sti := KENNEY_DIR + "/" + præfiks + str(i) + ".png"
		if not ResourceLoader.exists(sti):
			push_warning("[CreepSprite] Mangler: " + sti)
			visible = false
			return false
		sf.add_frame(anim, load(sti) as Texture2D)
	return true

func spil_walk() -> void:
	if _sprites_klar and sprite_frames.has_animation("walk"):
		play("walk")

func spil_idle() -> void:
	if _sprites_klar and sprite_frames.has_animation("idle"):
		play("idle")
