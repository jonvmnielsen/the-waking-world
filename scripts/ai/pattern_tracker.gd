# PatternTracker — registrerer og analyserer spillerens adfærdsmønster
class_name PatternTracker
extends Node

## Handlingshistorik (maks 15 poster)
var _historik: Array[String] = []
const MAKS_HISTORIK: int = 15

## Løbende adfærdsscorer
var _aggression_score: int = 0
var _defensiv_score: int = 0
var _creep_fokus: int = 0

func _ready() -> void:
	EventBus.hero_fik_xp.connect(_paa_hero_fik_xp)
	EventBus.enhed_tog_skade.connect(_paa_enhed_tog_skade)
	EventBus.creep_aggroed.connect(_paa_creep_aggroed)

## Hero dræbte en creep
func _paa_hero_fik_xp(_mængde: int, _total: int) -> void:
	_log_handling("creep_dræbt")
	_aggression_score += 1
	_creep_fokus += 1

## En enhed tog skade
func _paa_enhed_tog_skade(enhed: Node, _skade: int, _ny_hp: int) -> void:
	if enhed == GameManager.hero:
		_log_handling("hero_tog_skade")
		_defensiv_score += 1

## Creep aggroed — hero er i kamp
func _paa_creep_aggroed(_creep: Node, _maal: Node) -> void:
	_log_handling("creep_aggro")
	_aggression_score += 1

## Log handling og bevar maks-størrelse
func _log_handling(handling: String) -> void:
	_historik.append(handling)
	if _historik.size() > MAKS_HISTORIK:
		_historik.pop_front()

## Returner det dominerende mønster som streng
func get_dominant_pattern() -> String:
	if _aggression_score > _defensiv_score + 3:
		return "aggressive"
	elif _defensiv_score > _aggression_score + 2:
		return "defensive"
	elif _creep_fokus > 5:
		return "creep_focus"
	return "balanced"

## Returner kort opsummering af seneste handlinger til AI-prompt
func get_historik_summary() -> String:
	if _historik.is_empty():
		return "ingen handlinger endnu"
	var seneste := _historik.slice(maxi(0, _historik.size() - 5))
	return ", ".join(seneste)
