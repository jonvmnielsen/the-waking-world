# Evne-manager — håndterer essens, mana, cooldowns og aktive evner
class_name AbilityManager
extends Node

## Essens-typer
enum Essence { VOLD, TAALMODIGHED, OFRING }

## Valgt essens
@export var essence: Essence = Essence.VOLD

## Nuværende mana
var mana: float = 200.0

## Cooldowns for slot 0, 1, 2
var cooldowns: Array[float] = [0.0, 0.0, 0.0]

## Statuseffekt-timere
var war_cry_timer: float = 0.0
var iron_skin_timer: float = 0.0
var udødelig_timer: float = 0.0
var blood_price_aktiv: bool = false

## Midlertidig rustningsbonus fra Iron Skin
var _iron_skin_armor_bonus: int = 0

## Reference til hero
var _hero: HeroController = null

func _ready() -> void:
	_hero = get_parent() as HeroController
	if _hero and _hero.stats:
		mana = float(_hero.stats.mana_max)
	print("[AbilityManager] Initialiseret — Essens: %s" % _hent_essens_navn())

func _process(delta: float) -> void:
	if not GameManager.spil_aktiv:
		return
	# Mana regeneration
	if _hero and _hero.stats:
		mana = min(float(_hero.stats.mana_max), mana + _hero.stats.mana_regen * delta)
	# Cooldowns
	for i in range(cooldowns.size()):
		cooldowns[i] = max(0.0, cooldowns[i] - delta)
	# War Cry timer
	if war_cry_timer > 0.0:
		war_cry_timer = max(0.0, war_cry_timer - delta)
	# Iron Skin timer
	if iron_skin_timer > 0.0:
		iron_skin_timer = max(0.0, iron_skin_timer - delta)
		if iron_skin_timer <= 0.0:
			_fjern_iron_skin()
	# Udødelighed timer
	if udødelig_timer > 0.0:
		udødelig_timer = max(0.0, udødelig_timer - delta)

## Fjern Iron Skin rustningsbonus når timer udløber
func _fjern_iron_skin() -> void:
	if _iron_skin_armor_bonus > 0 and _hero and _hero.stats:
		_hero.stats.armor -= _iron_skin_armor_bonus
		_iron_skin_armor_bonus = 0
		print("[AbilityManager] Iron Skin udløbet — rustning normaliseret")

## Udfør evne i given slot
func brug_evne(slot: int) -> void:
	if not er_ulåst(slot):
		print("[AbilityManager] Slot %d er ikke ulåst endnu" % slot)
		return
	if not er_klar(slot):
		print("[AbilityManager] Slot %d er på cooldown (%.1fs tilbage)" % [slot, cooldowns[slot]])
		return
	match slot:
		0:
			_brute_strike()
		1:
			_evne_slot1()
		2:
			_evne_slot2()

## Tjek om en slot er ulåst baseret på level
func er_ulåst(slot: int) -> bool:
	match slot:
		0:
			return true
		1:
			var lev = _hent_level()
			return lev >= 3
		2:
			var lev = _hent_level()
			return lev >= 6
	return false

## Tjek om en slot er klar (cooldown == 0)
func er_klar(slot: int) -> bool:
	return cooldowns[slot] <= 0.0

## Er hero udødelig?
func er_udødelig() -> bool:
	return udødelig_timer > 0.0

## Returnerer War Cry angrebshastigheds-bonus (0.30 eller 0.0)
func war_cry_bonus() -> float:
	return 0.30 if war_cry_timer > 0.0 else 0.0

## Anvend Blood Price multiplikator på skade (3x og nulstil flag)
func anvend_angreb_multiplikator(skade: int) -> int:
	if blood_price_aktiv:
		blood_price_aktiv = false
		print("[AbilityManager] Blood Price udløst — 3x skade!")
		return skade * 3
	return skade

## Returnerer mana som procent (0.0–1.0)
func mana_procent() -> float:
	if not _hero or not _hero.stats or _hero.stats.mana_max <= 0:
		return 0.0
	return clamp(mana / float(_hero.stats.mana_max), 0.0, 1.0)

## Returnerer visningsnavn for en evne-slot
func get_evne_navn(slot: int) -> String:
	match slot:
		0:
			return "Brute Strike"
		1:
			match essence:
				Essence.VOLD:
					return "War Cry"
				Essence.TAALMODIGHED:
					return "Iron Skin"
				Essence.OFRING:
					return "Blood Price"
		2:
			match essence:
				Essence.VOLD:
					return "Earth Stomp"
				Essence.TAALMODIGHED:
					return "Endure"
				Essence.OFRING:
					return "Martyr's Strike"
	return "Ukendt"

## SLOT 0 — Brute Strike: instant 1.8x skade på nærmeste fjende
func _brute_strike() -> void:
	if not _hero:
		return
	if mana < 40.0:
		print("[AbilityManager] Ikke nok mana til Brute Strike")
		return
	var fjende = GameManager.find_naermeste_fjende(_hero.global_position)
	if not fjende or not is_instance_valid(fjende):
		print("[AbilityManager] Ingen fjende inden for rækkevidde til Brute Strike")
		return
	var dist = _hero.global_position.distance_to(fjende.global_position)
	if dist > _hero.stats.attack_range * 1.2:
		print("[AbilityManager] Fjende for langt væk til Brute Strike")
		return
	var basis_skade = _hero.stats.beregn_skade()
	var endelig_skade = int(float(basis_skade) * 1.8)
	fjende.tag_skade(endelig_skade)
	mana -= 40.0
	cooldowns[0] = 8.0
	print("[AbilityManager] Brute Strike! Skade: %d" % endelig_skade)

## SLOT 1 — afhænger af essens
func _evne_slot1() -> void:
	match essence:
		Essence.VOLD:
			_war_cry()
		Essence.TAALMODIGHED:
			_iron_skin()
		Essence.OFRING:
			_blood_price()

## War Cry: +30% angrebshastighed i 5 sekunder
func _war_cry() -> void:
	if mana < 60.0:
		print("[AbilityManager] Ikke nok mana til War Cry")
		return
	war_cry_timer = 5.0
	mana -= 60.0
	cooldowns[1] = 20.0
	print("[AbilityManager] War Cry aktiveret!")

## Iron Skin: +50% rustning i 8 sekunder
func _iron_skin() -> void:
	if mana < 50.0:
		print("[AbilityManager] Ikke nok mana til Iron Skin")
		return
	if _iron_skin_armor_bonus > 0:
		_fjern_iron_skin()
	if _hero and _hero.stats:
		_iron_skin_armor_bonus = int(float(_hero.stats.armor) * 0.5)
		_hero.stats.armor += _iron_skin_armor_bonus
	iron_skin_timer = 8.0
	mana -= 50.0
	cooldowns[1] = 25.0
	print("[AbilityManager] Iron Skin aktiveret! Rustningsbonus: +%d" % _iron_skin_armor_bonus)

## Blood Price: -15% HP, næste angreb 3x skade
func _blood_price() -> void:
	if not _hero:
		return
	var hp_tab = int(float(_hero.nuvaerende_hp) * 0.15)
	_hero.nuvaerende_hp = max(1, _hero.nuvaerende_hp - hp_tab)
	blood_price_aktiv = true
	cooldowns[1] = 15.0
	print("[AbilityManager] Blood Price aktiveret! HP tab: %d" % hp_tab)

## SLOT 2 — afhænger af essens
func _evne_slot2() -> void:
	match essence:
		Essence.VOLD:
			_earth_stomp()
		Essence.TAALMODIGHED:
			_endure()
		Essence.OFRING:
			_martyrs_strike()

## Earth Stomp: 120 skade + 1s stun i 200 radius
func _earth_stomp() -> void:
	if not _hero:
		return
	if mana < 100.0:
		print("[AbilityManager] Ikke nok mana til Earth Stomp")
		return
	var ramte = 0
	for creep in GameManager.aktive_creeps:
		if not is_instance_valid(creep):
			continue
		var dist = _hero.global_position.distance_to(creep.global_position)
		if dist <= 200.0:
			creep.tag_skade(120)
			if creep.has_method("stun"):
				creep.stun(1.0)
			ramte += 1
	mana -= 100.0
	cooldowns[2] = 30.0
	print("[AbilityManager] Earth Stomp! Ramte %d fjender" % ramte)

## Endure: udødelighed i 2 sekunder
func _endure() -> void:
	if not _hero:
		return
	if mana < 80.0:
		print("[AbilityManager] Ikke nok mana til Endure")
		return
	udødelig_timer = 2.0
	mana -= 80.0
	cooldowns[2] = 60.0
	print("[AbilityManager] Endure aktiveret — udødelig i 2 sekunder!")

## Martyr's Strike: angrib alle fjender i angrebsrækkevidde, koster 30% nuværende HP
func _martyrs_strike() -> void:
	if not _hero:
		return
	var hp_tab = int(float(_hero.nuvaerende_hp) * 0.30)
	_hero.nuvaerende_hp = max(1, _hero.nuvaerende_hp - hp_tab)
	var ramte = 0
	for creep in GameManager.aktive_creeps:
		if not is_instance_valid(creep):
			continue
		var dist = _hero.global_position.distance_to(creep.global_position)
		if dist <= _hero.stats.attack_range:
			var skade = _hero.stats.beregn_skade()
			creep.tag_skade(skade)
			ramte += 1
	cooldowns[2] = 25.0
	print("[AbilityManager] Martyr's Strike! HP tab: %d, ramte %d fjender" % [hp_tab, ramte])

## Hjælpefunktion: hent nuværende level fra HeroLeveling
func _hent_level() -> int:
	var leveling = get_parent().get_node_or_null("HeroLeveling") as HeroLeveling
	if leveling:
		return leveling.level
	return 1

## Hjælpefunktion: hent essens-navn til debug
func _hent_essens_navn() -> String:
	match essence:
		Essence.VOLD:
			return "Vold"
		Essence.TAALMODIGHED:
			return "Tålmodighed"
		Essence.OFRING:
			return "Ofring"
	return "Ukendt"
