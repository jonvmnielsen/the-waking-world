# Hero controller — input, bevægelse, kamp
class_name HeroController
extends CharacterBody2D

## Hero statistikker (sættes i Inspector eller oprettes automatisk)
@export var stats: HeroStats

@onready var nav_agent: NavigationAgent2D = $NavigationAgent2D
@onready var hp_bar: Node2D = $HPBarPosition

## Nuværende HP
var nuvaerende_hp: int = 0

## Er hero i bevægelse?
var _bevaeges: bool = false

## Angrebscooldown
var _angreb_cooldown: float = 0.0

## Nuværende angrebsmål
var _maal: Node = null

## Er hero i kamp? (bruges til HP regen)
var _i_kamp: bool = false
var _kamp_timer: float = 0.0

signal hero_doed_lokalt()

func _ready() -> void:
	# Opret standard stats hvis ingen er sat
	if not stats:
		stats = HeroStats.new()
	nuvaerende_hp = stats.max_health
	GameManager.registrer_hero(self)
	nav_agent.velocity_computed.connect(_paa_hastighed_beregnet)

func _unhandled_input(event: InputEvent) -> void:
	if not GameManager.spil_aktiv:
		return
	# Højreklik — bevæg eller angrib
	if event is InputEventMouseButton:
		if event.button_index == MOUSE_BUTTON_RIGHT and event.pressed:
			var klik_pos = get_global_mouse_position()
			_sæt_bevaegelses_maal(klik_pos)

func _physics_process(delta: float) -> void:
	if not GameManager.spil_aktiv:
		return
	_opdater_kamp_timer(delta)
	_opdater_angreb(delta)
	_opdater_bevaegelse()

func _process(_delta: float) -> void:
	# Opdater HP bar retning (altid mod kamera)
	if hp_bar:
		hp_bar.queue_redraw()

## Sæt navigationsmål ved klik
func _sæt_bevaegelses_maal(position: Vector2) -> void:
	_maal = null
	nav_agent.set_target_position(position)
	_bevaeges = true

## Opdater bevægelse via NavigationAgent2D
func _opdater_bevaegelse() -> void:
	if not _bevaeges:
		return
	if nav_agent.is_navigation_finished():
		_bevaeges = false
		velocity = Vector2.ZERO
		move_and_slide()
		EventBus.hero_ankommet.emit(global_position)
		return
	var naeste = nav_agent.get_next_path_position()
	var retning = global_position.direction_to(naeste)
	velocity = retning * stats.move_speed
	nav_agent.set_velocity(velocity)

## Callback fra NavigationAgent2D med undgåelses-korrigeret hastighed
func _paa_hastighed_beregnet(sikker_hastighed: Vector2) -> void:
	velocity = sikker_hastighed
	move_and_slide()

## Opdater angrebscooldown og udfør angreb hvis klar
func _opdater_angreb(delta: float) -> void:
	_angreb_cooldown = max(0.0, _angreb_cooldown - delta)
	if _angreb_cooldown > 0.0:
		return
	# Find nærmeste fjende inden for angrebsrækkevidde
	var fjende = GameManager.find_naermeste_fjende(global_position)
	if fjende and is_instance_valid(fjende):
		var dist = global_position.distance_to(fjende.global_position)
		if dist <= stats.attack_range:
			_udfør_angreb(fjende)

## Udfør et angreb mod mål
func _udfør_angreb(maal: Node) -> void:
	if not maal.has_method("tag_skade"):
		return
	var skade = stats.beregn_skade()
	maal.tag_skade(skade)
	_angreb_cooldown = stats.attack_speed
	_i_kamp = true
	_kamp_timer = 3.0

## Modtag skade fra fjende
func tag_skade(raa_skade: int) -> void:
	var skade = stats.beregn_reduceret_skade(raa_skade)
	nuvaerende_hp = max(0, nuvaerende_hp - skade)
	_i_kamp = true
	_kamp_timer = 3.0
	EventBus.enhed_tog_skade.emit(self, skade, nuvaerende_hp)
	if nuvaerende_hp <= 0:
		_dø()

## Opdater kamp-timer og HP regen
func _opdater_kamp_timer(delta: float) -> void:
	if _i_kamp:
		_kamp_timer -= delta
		if _kamp_timer <= 0.0:
			_i_kamp = false
	elif nuvaerende_hp < stats.max_health:
		# HP regeneration udenfor kamp
		nuvaerende_hp = min(stats.max_health,
			nuvaerende_hp + int(stats.hp_regen * delta * 10.0) / 10)

## Hero dør
func _dø() -> void:
	EventBus.hero_doed.emit()
	EventBus.enhed_doed.emit(self)
	queue_free()

## Returner HP som procent (0.0 - 1.0)
func hp_procent() -> float:
	return float(nuvaerende_hp) / float(stats.max_health)
