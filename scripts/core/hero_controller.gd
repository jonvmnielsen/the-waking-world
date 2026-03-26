# Hero controller — input, bevægelse, kamp og sprite-styring
class_name HeroController
extends CharacterBody2D

@export var stats: HeroStats

@onready var nav_agent: NavigationAgent2D = $NavigationAgent2D
@onready var _sprite: AnimatedSprite2D    = $AnimatedSprite2D

var nuvaerende_hp: int    = 0
var _bevaeges: bool       = false
var _angreb_cooldown: float = 0.0
var _i_kamp: bool         = false
var _kamp_timer: float    = 0.0

# Sporer om vi er midt i en angrebsanimation (første halvdel af cooldown)
var _angriber: bool = false

func _ready() -> void:
	if not stats:
		stats = HeroStats.new()
	nuvaerende_hp = stats.max_health
	GameManager.registrer_hero(self)
	nav_agent.velocity_computed.connect(_paa_hastighed_beregnet)

func _unhandled_input(event: InputEvent) -> void:
	if not GameManager.spil_aktiv:
		return
	if event is InputEventMouseButton:
		if event.button_index == MOUSE_BUTTON_RIGHT and event.pressed:
			_sæt_bevaegelses_maal(get_global_mouse_position())

func _physics_process(delta: float) -> void:
	if not GameManager.spil_aktiv:
		return
	_opdater_kamp_timer(delta)
	_opdater_angreb(delta)
	_opdater_bevaegelse()

func _process(_delta: float) -> void:
	# Opdater sprite animation hvert frame
	if _sprite and _sprite.has_method("opdater_animation"):
		_sprite.opdater_animation(_bevaeges, _angriber, velocity)

func _sæt_bevaegelses_maal(position: Vector2) -> void:
	nav_agent.set_target_position(position)
	_bevaeges = true

func _opdater_bevaegelse() -> void:
	if not _bevaeges:
		velocity = Vector2.ZERO
		return
	if nav_agent.is_navigation_finished():
		_bevaeges = false
		velocity = Vector2.ZERO
		move_and_slide()
		EventBus.hero_ankommet.emit(global_position)
		return
	var naeste := nav_agent.get_next_path_position()
	velocity = global_position.direction_to(naeste) * stats.move_speed
	nav_agent.set_velocity(velocity)

func _paa_hastighed_beregnet(sikker_hastighed: Vector2) -> void:
	velocity = sikker_hastighed
	move_and_slide()

func _opdater_angreb(delta: float) -> void:
	_angreb_cooldown = max(0.0, _angreb_cooldown - delta)
	# Angribertilstand: sand i den første tredjedel af cooldown
	_angriber = _angreb_cooldown > (stats.attack_speed * 0.66)
	if _angreb_cooldown > 0.0:
		return
	var fjende := GameManager.find_naermeste_fjende(global_position)
	if fjende and is_instance_valid(fjende):
		if global_position.distance_to(fjende.global_position) <= stats.attack_range:
			_udfør_angreb(fjende)

func _udfør_angreb(maal: Node) -> void:
	if not maal.has_method("tag_skade"):
		return
	maal.tag_skade(stats.beregn_skade())
	_angreb_cooldown = stats.attack_speed
	_angriber        = true
	_i_kamp          = true
	_kamp_timer      = 3.0

func tag_skade(raa_skade: int) -> void:
	var skade := stats.beregn_reduceret_skade(raa_skade)
	nuvaerende_hp = max(0, nuvaerende_hp - skade)
	_i_kamp   = true
	_kamp_timer = 3.0
	EventBus.enhed_tog_skade.emit(self, skade, nuvaerende_hp)
	if nuvaerende_hp <= 0:
		_dø()

func _opdater_kamp_timer(delta: float) -> void:
	if _i_kamp:
		_kamp_timer -= delta
		if _kamp_timer <= 0.0:
			_i_kamp = false
	elif nuvaerende_hp < stats.max_health:
		nuvaerende_hp = min(stats.max_health,
			nuvaerende_hp + int(stats.hp_regen * delta * 10.0) / 10)

func _dø() -> void:
	EventBus.hero_doed.emit()
	EventBus.enhed_doed.emit(self)
	queue_free()

func hp_procent() -> float:
	return float(nuvaerende_hp) / float(stats.max_health)
