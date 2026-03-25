# Global signalbus — løs kobling mellem alle systemer
# AutoLoad: EventBus
extends Node

## Udsendes når hero ankommer til destination
signal hero_ankommet(position: Vector2)

## Udsendes når en enhed tager skade
signal enhed_tog_skade(enhed: Node, skade: int, ny_hp: int)

## Udsendes når en enhed dør
signal enhed_doed(enhed: Node)

## Udsendes specifikt når hero dør
signal hero_doed()

## Udsendes når et creep aggroverer
signal creep_aggroed(creep: Node, maal: Node)

## Udsendes når et creep deaggroverer (vender hjem)
signal creep_deaggroed(creep: Node)
