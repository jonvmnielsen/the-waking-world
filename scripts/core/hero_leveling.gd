# Hero leveling — håndterer XP og level-up med statbonusser
class_name HeroLeveling
extends Node

## XP krævet for at nå hvert level (index = level-1)
const XP_TABLE: Array[int] = [0, 200, 500, 900, 1400, 2100, 3000, 4200, 5600, 7500]

## HP bonus per level-op (index 1 = bonus ved level 2, osv.)
const HP_BONUS: Array[int] = [0, 80, 80, 100, 100, 120, 120, 140, 140, 160]

## Skadebonus per level-op
const DMG_BONUS: Array[int] = [0, 8, 8, 10, 10, 12, 12, 14, 14, 16]

## Rustningsbonus per level-op
const ARM_BONUS: Array[int] = [0, 0, 1, 0, 1, 0, 1, 0, 1, 1]

## Nuværende level
var level: int = 1

## Akkumuleret XP
var xp: int = 0

func _ready() -> void:
	EventBus.hero_fik_xp.connect(_paa_hero_fik_xp)
	print("[HeroLeveling] Initialiseret — Level 1")

## Intern handler: modtager XP-signal
func _paa_hero_fik_xp(mængde: int, _total: int) -> void:
	gain_xp(mængde)

## Tilføj XP og tjek for level-up
func gain_xp(mængde: int) -> void:
	if level >= XP_TABLE.size():
		return
	xp += mængde
	# Tjek for level-up (kan stige flere niveauer på én gang)
	while level < XP_TABLE.size() and xp >= XP_TABLE[level]:
		_udfør_level_up()

## Gennemfør et level-up
func _udfør_level_up() -> void:
	level += 1
	var hero = get_parent()
	if hero and hero.stats:
		# Anvend statbonusser
		var hp_bonus = HP_BONUS[level - 1]
		var dmg_bonus = DMG_BONUS[level - 1]
		var arm_bonus = ARM_BONUS[level - 1]
		hero.stats.max_health += hp_bonus
		hero.stats.attack_damage_min += dmg_bonus
		hero.stats.attack_damage_max += dmg_bonus
		hero.stats.armor += arm_bonus
		# Helbredelse svarende til HP-bonussen
		hero.nuvaerende_hp = min(hero.stats.max_health, hero.nuvaerende_hp + hp_bonus)
	EventBus.hero_leveled_up.emit(level)
	print("[HeroLeveling] Level-op! Nyt level: %d (XP: %d)" % [level, xp])

## Returnerer fremgang mod næste level (0.0–1.0)
func xp_procent() -> float:
	if level >= XP_TABLE.size():
		return 1.0
	var nuvaerende_threshold = XP_TABLE[level - 1]
	var naeste_threshold = XP_TABLE[level]
	var spand = naeste_threshold - nuvaerende_threshold
	if spand <= 0:
		return 1.0
	return clamp(float(xp - nuvaerende_threshold) / float(spand), 0.0, 1.0)

## Returnerer XP der mangler til næste level
func xp_til_naeste() -> int:
	if level >= XP_TABLE.size():
		return 0
	return max(0, XP_TABLE[level] - xp)
