# AI-modstander — bruger Ollama (lokal AI) til strategiske beslutninger
# Kræver Ollama installeret: https://ollama.com — kør: ollama pull llama3.2
class_name AIOpponent
extends Node

const OLLAMA_URL := "http://localhost:11434/api/generate"
const MODEL := "llama3.2"
const SNAPSHOT_INTERVAL := 15.0

@onready var _pattern_tracker: PatternTracker = $PatternTracker

var _http: HTTPRequest
var _timer: float = SNAPSHOT_INTERVAL  # Første beslutning ved spilstart
var _venter_paa_svar: bool = false
var _ai_personlighed: String = "adaptive"
var _sidst_snapshot: GameStateSnapshot = null

func _ready() -> void:
	_http = HTTPRequest.new()
	_http.timeout = 5.0
	add_child(_http)
	_http.request_completed.connect(_paa_svar_modtaget)

	var personligheder := ["aggressive", "defensive", "adaptive", "deceptive"]
	_ai_personlighed = personligheder[randi() % personligheder.size()]
	print("[AI] Modstander initialiseret — personlighed: ", _ai_personlighed)

func _process(delta: float) -> void:
	if not GameManager.spil_aktiv or _venter_paa_svar:
		return
	_timer += delta
	if _timer >= SNAPSHOT_INTERVAL:
		_timer = 0.0
		_anmod_om_beslutning()

## Send snapshot til Ollama og anmod om beslutning
func _anmod_om_beslutning() -> void:
	_sidst_snapshot = GameStateSnapshot.capture(_pattern_tracker)

	var prompt := """Du er AI-modstanderen i RTS-spillet The Waking World.
Din personlighed: %s

%s

Svar KUN med JSON — ingen tekst udenfor JSON-blokken:
{
  "primary_action": "attack|defend|harass|retreat",
  "target": "hero|camp|base",
  "unit_count": 2,
  "reasoning": "kort forklaring"
}""" % [_ai_personlighed, _sidst_snapshot.to_prompt_context()]

	var body := JSON.stringify({
		"model": MODEL,
		"prompt": prompt,
		"stream": false,
		"format": "json"
	})

	var fejl := _http.request(OLLAMA_URL, ["Content-Type: application/json"],
		HTTPClient.METHOD_POST, body)

	if fejl != OK:
		print("[AI] Ollama ikke tilgængelig — bruger scripted fallback")
		_udfør_fallback()
	else:
		_venter_paa_svar = true

## Modtag og behandl Ollama-svar
func _paa_svar_modtaget(result: int, response_code: int,
		_headers: PackedStringArray, body: PackedByteArray) -> void:
	_venter_paa_svar = false

	if result != HTTPRequest.RESULT_SUCCESS or response_code != 200:
		print("[AI] Ollama svar fejlede (", response_code, ") — bruger fallback")
		_udfør_fallback()
		return

	var tekst := body.get_string_from_utf8()
	var ydre := JSON.parse_string(tekst)
	if not ydre or not ydre.has("response"):
		print("[AI] Manglende 'response' felt i Ollama-svar")
		return

	var beslutning := JSON.parse_string(ydre["response"])
	if not beslutning or not beslutning.has("primary_action"):
		print("[AI] Kunne ikke parse beslutning fra Ollama")
		return

	print("[AI] Beslutning: ", beslutning.get("primary_action"),
		" — ", beslutning.get("reasoning", ""))
	_udfør_beslutning(beslutning)

## Udfør AI-beslutning i spilverdenen
func _udfør_beslutning(beslutning: Dictionary) -> void:
	match beslutning.get("primary_action", ""):
		"attack", "harass":
			_kommander_angreb()
		"defend":
			_kommander_forsvar()
		"retreat":
			_kommander_retreat()
		_:
			_kommander_angreb()

## Scripted fallback baseret på spillerens mønster
func _udfør_fallback() -> void:
	if not _sidst_snapshot:
		return
	match _sidst_snapshot.spiller_mønster:
		"aggressive":
			_kommander_forsvar()
		"defensive":
			_kommander_angreb()
		_:
			_kommander_angreb()

## Alle levende creeps angriber hero direkte
func _kommander_angreb() -> void:
	for creep in GameManager.aktive_creeps:
		if is_instance_valid(creep) and creep.has_method("tving_aggro"):
			creep.tving_aggro()

## Reducer aggro-radius — creeps reagerer kun på nærkamp
func _kommander_forsvar() -> void:
	for creep in GameManager.aktive_creeps:
		if is_instance_valid(creep):
			creep.aggro_radius = maxf(80.0, creep.aggro_radius * 0.6)

## Alle creeps trækker sig tilbage til spawn
func _kommander_retreat() -> void:
	for creep in GameManager.aktive_creeps:
		if is_instance_valid(creep) and creep.has_method("tving_hjem"):
			creep.tving_hjem()
