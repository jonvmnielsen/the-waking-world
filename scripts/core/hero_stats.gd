# Resource med hero statistikker — kan redigeres i Godot Inspector
class_name HeroStats
extends Resource

## Maksimal HP
@export var max_health: int = 500

## Bevægelseshastighed (units/sek)
@export var move_speed: float = 180.0

## Angrebsrækkevidde (units)
@export var attack_range: float = 80.0

## Angrebsskade (min)
@export var attack_damage_min: int = 45

## Angrebsskade (max)
@export var attack_damage_max: int = 55

## Sekunder mellem angreb
@export var attack_speed: float = 1.8

## Rustning (reducerer indgående skade)
@export var armor: int = 3

## HP regeneration per sekund (kun udenfor kamp)
@export var hp_regen: float = 2.0

## Maksimal mana
@export var mana_max: int = 200

## Mana regeneration per sekund
@export var mana_regen: float = 1.0

## Beregn tilfældig skade inden for min/max
func beregn_skade() -> int:
	return randi_range(attack_damage_min, attack_damage_max)

## Beregn skadereduktion baseret på rustning
func beregn_reduceret_skade(raa_skade: int) -> int:
	# Simpel formel: 1 armor = ~3.3% reduktion
	var reduktion: float = float(armor) * 0.033
	reduktion = clamp(reduktion, 0.0, 0.75)
	return max(1, int(float(raa_skade) * (1.0 - reduktion)))
