# Creep AI — simpel tilstandsmaskine med aggro og leash
class_name CreepAI
extends CharacterBody2D

## Creep statistikker
@export var max_hp: int = 120
@export var skade_min: int = 12
@export var skade_max: int = 18
@export var hastighed: float = 130.0
@export var angreb_rækkevidde: float = 60.0
@export var angreb_hastighed: float = 2.2
@export var aggro_radius: float = 200.0
@export var leash_radius: float = 400.0
@export var xp_beloening: int = 20

## Nuværende HP
var nuvaerende_hp: int = 0

## Spawn position (bruges til leash og hjemvenden)
var spawn_position: Vector2 = Vector2.ZERO

## Nuværende angrebsmål
var _maal: Node = null

## Angrebscooldown
var _angreb_cooldown: float = 0.0

## Stun-timer (sekunder tilbage)
var _stun_timer: float = 0.0

## Tilstande
enum Tilstand { IDLE, AGGRO, ANGRIBER, VENDER_HJEM }
var _tilstand: Tilstand = Tilstand.IDLE

@onready var nav_agent: NavigationAgent2D = $NavigationAgent2D

func _ready() -> void:
	nuvaerende_hp = max_hp
	spawn_position = global_position
	nav_agent.velocity_computed.connect(_paa_hastighed_beregnet)
	GameManager.registrer_creep(self)

func _physics_process(delta: float) -> void:
	if not GameManager.spil_aktiv:
		return
	# Behandl stun før tilstandsmaskinen
	if _stun_timer > 0.0:
		_stun_timer = max(0.0, _stun_timer - delta)
		velocity = Vector2.ZERO
		move_and_slide()
		return
	_angreb_cooldown = max(0.0, _angreb_cooldown - delta)
	match _tilstand:
		Tilstand.IDLE:
			_opdater_idle()
		Tilstand.AGGRO:
			_opdater_aggro()
		Tilstand.ANGRIBER:
			_opdater_angriber(delta)
		Tilstand.VENDER_HJEM:
			_opdater_vender_hjem()

## IDLE: tjek om hero er inden for aggro radius
func _opdater_idle() -> void:
	if not GameManager.hero or not is_instance_valid(GameManager.hero):
		return
	var dist = global_position.distance_to(GameManager.hero.global_position)
	if dist <= aggro_radius:
		_skift_tilstand(Tilstand.AGGRO)
		EventBus.creep_aggroed.emit(self, GameManager.hero)

## AGGRO: forfølg hero
func _opdater_aggro() -> void:
	if not _hero_gyldig():
		_skift_tilstand(Tilstand.VENDER_HJEM)
		return
	# Tjek leash
	if global_position.distance_to(spawn_position) > leash_radius:
		_skift_tilstand(Tilstand.VENDER_HJEM)
		return
	# Tjek om i angrebsrækkevidde
	var dist_til_hero = global_position.distance_to(GameManager.hero.global_position)
	if dist_til_hero <= angreb_rækkevidde:
		_skift_tilstand(Tilstand.ANGRIBER)
		return
	# Bevæg mod hero
	nav_agent.set_target_position(GameManager.hero.global_position)
	if not nav_agent.is_navigation_finished():
		var naeste = nav_agent.get_next_path_position()
		var retning = global_position.direction_to(naeste)
		velocity = retning * hastighed
		nav_agent.set_velocity(velocity)

## ANGRIBER: stå stille og angrib
func _opdater_angriber(delta: float) -> void:
	velocity = Vector2.ZERO
	move_and_slide()
	if not _hero_gyldig():
		_skift_tilstand(Tilstand.VENDER_HJEM)
		return
	var dist = global_position.distance_to(GameManager.hero.global_position)
	# Hvis hero løb væk, forfølg igen
	if dist > angreb_rækkevidde * 1.2:
		_skift_tilstand(Tilstand.AGGRO)
		return
	# Angrib
	if _angreb_cooldown <= 0.0:
		_udfør_angreb()

## VENDER_HJEM: gå tilbage til spawn
func _opdater_vender_hjem() -> void:
	nav_agent.set_target_position(spawn_position)
	if nav_agent.is_navigation_finished():
		_skift_tilstand(Tilstand.IDLE)
		return
	var naeste = nav_agent.get_next_path_position()
	var retning = global_position.direction_to(naeste)
	velocity = retning * hastighed
	nav_agent.set_velocity(velocity)

## Callback fra NavigationAgent2D
func _paa_hastighed_beregnet(sikker_hastighed: Vector2) -> void:
	velocity = sikker_hastighed
	move_and_slide()

## Udfør angreb mod hero
func _udfør_angreb() -> void:
	if not _hero_gyldig():
		return
	var skade = randi_range(skade_min, skade_max)
	GameManager.hero.tag_skade(skade)
	_angreb_cooldown = angreb_hastighed

## Modtag skade
func tag_skade(skade: int) -> void:
	nuvaerende_hp = max(0, nuvaerende_hp - skade)
	EventBus.enhed_tog_skade.emit(self, skade, nuvaerende_hp)
	# Aggroverer hvis ramt mens idle
	if _tilstand == Tilstand.IDLE:
		_skift_tilstand(Tilstand.AGGRO)
	if nuvaerende_hp <= 0:
		_dø()

## Creep dør
func _dø() -> void:
	EventBus.enhed_doed.emit(self)
	EventBus.hero_fik_xp.emit(xp_beloening, 0)
	GameManager.fjern_creep(self)
	queue_free()

## Påfør stun i given varighed
func stun(varighed: float) -> void:
	_stun_timer = max(_stun_timer, varighed)

## AI-kommando: tving creep til at angribe hero med det samme
func tving_aggro() -> void:
	if _tilstand == Tilstand.IDLE or _tilstand == Tilstand.VENDER_HJEM:
		_skift_tilstand(Tilstand.AGGRO)

## AI-kommando: tving creep til at vende hjem
func tving_hjem() -> void:
	_skift_tilstand(Tilstand.VENDER_HJEM)

## Skift tilstand med debug-log
func _skift_tilstand(ny_tilstand: Tilstand) -> void:
	_tilstand = ny_tilstand

## Tjek om hero stadig eksisterer
func _hero_gyldig() -> bool:
	return GameManager.hero != null and is_instance_valid(GameManager.hero)

## Returner HP som procent
func hp_procent() -> float:
	return float(nuvaerende_hp) / float(max_hp)
