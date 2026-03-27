# HUD — heads-up display skabt programmatisk
extends CanvasLayer

## Stats-panel referencer
var _level_label: Label
var _xp_bar: ProgressBar
var _hp_bar: ProgressBar
var _mana_bar: ProgressBar

## Evne-panel referencer (3 slots)
var _evne_navne_labels: Array[Label] = []
var _evne_cd_labels: Array[Label] = []

## Overlejringspaneler
var _essence_overlay: Panel
var _death_overlay: Panel

func _ready() -> void:
	layer = 10
	_byg_stats_panel()
	_byg_evne_panel()
	_byg_essence_overlay()
	_byg_death_overlay()
	EventBus.hero_doed.connect(_vis_death_overlay)
	EventBus.hero_leveled_up.connect(_paa_level_up)
	print("[HUD] Initialiseret")

## Byg stats-panel øverst til venstre
func _byg_stats_panel() -> void:
	var panel := Panel.new()
	panel.set_position(Vector2(10, 10))
	panel.set_size(Vector2(260, 180))
	add_child(panel)

	var vbox := VBoxContainer.new()
	vbox.set_position(Vector2(10, 10))
	vbox.set_size(Vector2(240, 160))
	vbox.add_theme_constant_override("separation", 6)
	panel.add_child(vbox)

	# Level og essens
	_level_label = Label.new()
	_level_label.text = "Level 1 — Essens: Vold"
	vbox.add_child(_level_label)

	# XP bar
	var xp_label := Label.new()
	xp_label.text = "XP"
	vbox.add_child(xp_label)

	_xp_bar = ProgressBar.new()
	_xp_bar.min_value = 0.0
	_xp_bar.max_value = 1.0
	_xp_bar.value = 0.0
	_xp_bar.custom_minimum_size = Vector2(220, 16)
	_xp_bar.modulate = Color(0.4, 0.8, 1.0)
	vbox.add_child(_xp_bar)

	# HP bar
	var hp_label := Label.new()
	hp_label.text = "HP"
	vbox.add_child(hp_label)

	_hp_bar = ProgressBar.new()
	_hp_bar.min_value = 0.0
	_hp_bar.max_value = 1.0
	_hp_bar.value = 1.0
	_hp_bar.custom_minimum_size = Vector2(220, 16)
	_hp_bar.modulate = Color(0.2, 0.9, 0.2)
	vbox.add_child(_hp_bar)

	# Mana bar
	var mana_label := Label.new()
	mana_label.text = "Mana"
	vbox.add_child(mana_label)

	_mana_bar = ProgressBar.new()
	_mana_bar.min_value = 0.0
	_mana_bar.max_value = 1.0
	_mana_bar.value = 1.0
	_mana_bar.custom_minimum_size = Vector2(220, 16)
	_mana_bar.modulate = Color(0.2, 0.4, 1.0)
	vbox.add_child(_mana_bar)

## Byg evne-panel nederst til venstre
func _byg_evne_panel() -> void:
	var panel := Panel.new()
	# Placeres i bunden — vi bruger anchors
	panel.set_anchors_preset(Control.PRESET_BOTTOM_LEFT)
	panel.set_position(Vector2(10, -120))
	panel.set_size(Vector2(280, 110))
	add_child(panel)

	var hbox := HBoxContainer.new()
	hbox.set_position(Vector2(5, 5))
	hbox.set_size(Vector2(270, 100))
	hbox.add_theme_constant_override("separation", 4)
	panel.add_child(hbox)

	var taster := ["Q", "W", "E"]
	for i in range(3):
		var vbox := VBoxContainer.new()
		vbox.custom_minimum_size = Vector2(86, 90)
		hbox.add_child(vbox)

		var navn_label := Label.new()
		navn_label.text = "[%s] Evne %d" % [taster[i], i + 1]
		navn_label.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
		vbox.add_child(navn_label)
		_evne_navne_labels.append(navn_label)

		var cd_label := Label.new()
		cd_label.text = "Klar"
		cd_label.modulate = Color(0.7, 0.7, 0.7)
		vbox.add_child(cd_label)
		_evne_cd_labels.append(cd_label)

## Byg essens-valgs-overlejring (vis ved start)
func _byg_essence_overlay() -> void:
	_essence_overlay = Panel.new()
	_essence_overlay.set_anchors_preset(Control.PRESET_FULL_RECT)
	_essence_overlay.modulate = Color(0.0, 0.0, 0.0, 0.8)
	add_child(_essence_overlay)

	var vbox := VBoxContainer.new()
	vbox.set_anchors_preset(Control.PRESET_CENTER)
	vbox.set_position(Vector2(-160, -80))
	vbox.set_size(Vector2(320, 160))
	vbox.alignment = BoxContainer.ALIGNMENT_CENTER
	vbox.add_theme_constant_override("separation", 10)
	_essence_overlay.add_child(vbox)

	var titel := Label.new()
	titel.text = "Vælg din Essence (1/2/3)"
	titel.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	vbox.add_child(titel)

	var vold_label := Label.new()
	vold_label.text = "[1] Vold — Aggressiv angrebsstil"
	vold_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	vbox.add_child(vold_label)

	var taal_label := Label.new()
	taal_label.text = "[2] Tålmodighed — Defensiv overlevelsesstil"
	taal_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	vbox.add_child(taal_label)

	var ofring_label := Label.new()
	ofring_label.text = "[3] Ofring — Risiko/belønning"
	ofring_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	vbox.add_child(ofring_label)

## Byg dødsskærm (skjult ved start)
func _byg_death_overlay() -> void:
	_death_overlay = Panel.new()
	_death_overlay.set_anchors_preset(Control.PRESET_FULL_RECT)
	_death_overlay.modulate = Color(0.5, 0.0, 0.0, 0.7)
	_death_overlay.visible = false
	add_child(_death_overlay)

	var label := Label.new()
	label.text = "Du er død — Respawner om 3 sekunder"
	label.set_anchors_preset(Control.PRESET_CENTER)
	label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	_death_overlay.add_child(label)

func _process(_delta: float) -> void:
	var hero = GameManager.hero
	if is_instance_valid(hero):
		# Opdater HP bar
		if hero.has_method("hp_procent"):
			_hp_bar.value = hero.hp_procent()
		# Opdater mana bar
		if hero.abilities:
			_mana_bar.value = hero.abilities.mana_procent()
		# Opdater XP bar og level-label
		if hero.leveling:
			_xp_bar.value = hero.leveling.xp_procent()
			var essens_navn := _hent_essens_visningsnavn(hero.abilities.essence if hero.abilities else 0)
			_level_label.text = "Level %d — %s" % [hero.leveling.level, essens_navn]
		# Opdater evne-labels
		if hero.abilities:
			for i in range(3):
				var evne_navn = hero.abilities.get_evne_navn(i)
				_evne_navne_labels[i].text = "[%s] %s" % [["Q","W","E"][i], evne_navn]
				if not hero.abilities.er_ulåst(i):
					_evne_cd_labels[i].text = "Låst"
				elif hero.abilities.er_klar(i):
					_evne_cd_labels[i].text = "Klar"
				else:
					_evne_cd_labels[i].text = "%.1fs" % hero.abilities.cooldowns[i]
	# Skjul essens-overlay når essens er valgt
	if _essence_overlay.visible and GameManager.essence_valgt:
		_essence_overlay.visible = false

func _vis_death_overlay() -> void:
	_death_overlay.visible = true

func _paa_level_up(nyt_level: int) -> void:
	print("[HUD] Level-op til %d!" % nyt_level)

## Hjælpefunktion: essens-nummer til visningsnavn
func _hent_essens_visningsnavn(e: int) -> String:
	match e:
		0:
			return "Vold"
		1:
			return "Tålmodighed"
		2:
			return "Ofring"
	return "Vold"
