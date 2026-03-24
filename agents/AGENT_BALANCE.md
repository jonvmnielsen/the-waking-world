# AGENT_BALANCE.md — Balance-agenten
> Læs CLAUDE.md først. Dette dokument uddyber Balance-agentens rolle, metoder og tal-ansvar.

---

## Rolle og ansvar

Du ejer alle tallene i The Waking World. Hero-stats, unit-costs, XP-kurver, ability-damage, cooldowns, spawn-rates — alt der kan måles og justeres er dit domæne. Du tænker i spilfølelse og matemtik, ikke i kode.

Dit output er balance-dokumenter og stat-tabeller som Kode-agenten implementerer direkte.

---

## Balancefilosofi

**Principperne bag god RTS-balance:**

1. **Klar taber/vinder på direkte konfrontation** — ingen situationer hvor alt er ligegyldigt
2. **Ingen dominant strategi** — der skal altid eksistere mindst to viable approaches
3. **Fejl skal koste, men ikke dræbe** — én dårlig beslutning = sætter dig bagud, ikke ude
4. **Helten er stærk men ikke uovervindelig** — creeps kan true en dårlig hero
5. **Tidspres eksisterer** — passivitet skal have en pris

---

## Orc Warrior — Sprint 1 Stats

### Base Stats (Level 1)
```
Max HP:           500
HP regeneration:  2.0 per sekund (kun uden for kamp)
Mana:             200
Mana regeneration: 1.0 per sekund

Movement speed:   180 units/sek
Attack range:     80 units (melee)
Attack damage:    45-55 (variation ±10)
Attack speed:     1.8 sekunder per angreb
Attack type:      Normal

Armor:            3 (reducerer indgående skade 15%)
```

### Leveling (Level 1-10)
```
Level | XP krævet | HP bonus | Dmg bonus | Armor bonus
  1   |     0     |    +0    |    +0     |     +0
  2   |   200     |   +80    |    +8     |     +0
  3   |   500     |   +80    |    +8     |     +1
  4   |   900     |  +100    |   +10     |     +0
  5   |  1400     |  +100    |   +10     |     +1
  6   |  2100     |  +120    |   +12     |     +0
  7   |  3000     |  +120    |   +12     |     +1
  8   |  4200     |  +140    |   +14     |     +0
  9   |  5600     |  +140    |   +14     |     +1
 10   |  7500     |  +160    |   +16     |     +1
```

**Level 10 totalt:** 1460 HP, 109-119 damage, 8 armor

### XP-kilder
```
Neutral creep (svag):   20 XP
Neutral creep (stærk):  50 XP
Neutral camp (ryddet):  +25 XP bonus
```

---

## Neutral Creeps — Sprint 1

### Svag Creep (Ashfield Prowler)
```
HP:             120
Damage:         12-18
Attack speed:   2.2 sek
Movement speed: 130
Aggro radius:   200 units
Leash radius:   400 units (vender hjem hvis hero løber for langt)
```

### Stærk Creep (Ashfield Guardian)
```
HP:             280
Damage:         25-35
Attack speed:   2.0 sek
Movement speed: 110
Aggro radius:   250 units
```

**Balance-check:** En level 1 hero kan slå én svag creep med ~60% HP tilbage. To svage creeps er farligt. Én stærk creep kræver god timing — mulig men risikabel.

---

## Abilities (Sprint 2)

### Ability 1 — Brute Strike (level 1, alle essences)
```
Skadetyp:    Instant melee
Skade:       1.8x normal attack damage
Cooldown:    8 sekunder
Mana cost:   40
```

### Ability 2 — varierer per Essence (level 3)
```
VOLD — War Cry:
  Effekt: +30% attack speed til hero i 5 sek
  Cooldown: 20 sek | Mana: 60

TÅLMODIGHED — Iron Skin:
  Effekt: +50% armor i 8 sek
  Cooldown: 25 sek | Mana: 50

OFRING — Blood Price:
  Effekt: Mister 15% HP, næste angreb gør 3x skade
  Cooldown: 15 sek | Mana: 0 (koster HP)
```

### Ability 3 — varierer per Essence (level 6)
```
VOLD — Earth Stomp:
  Effekt: AoE 200 radius, 120 skade, 1 sek stun
  Cooldown: 30 sek | Mana: 100

TÅLMODIGHED — Endure:
  Effekt: Udødelig i 2 sek (kan ikke dø)
  Cooldown: 60 sek | Mana: 80

OFRING — Martyr's Strike:
  Effekt: Angriber alle fjender i range på én gang, costs 30% current HP
  Cooldown: 25 sek | Mana: 0
```

---

## Balance-iterationsproces

1. Implementer baseline-stats
2. Test: Kan hero rydde camp 1 i rimelig tid?
3. Test: Er camp 3 for let/svær ved level 3?
4. Juster ±15% og test igen
5. Dokumenter ændringer med begrundelse

**Aldrig** juster mere end ét parameter ad gangen. Ellers ved du ikke hvad der ændrede spilfølelsen.

---

## Sprint 2 — Konkrete leverancer

1. `docs/balance/hero_stats_v1.md` — alle hero-stats i struktureret format
2. `docs/balance/creep_stats_v1.md` — alle creep-typer
3. `docs/balance/ability_values_v1.md` — alle abilities med præcise tal
4. `docs/balance/xp_curve_v1.md` — XP-tabel og begrundelse
5. Balance-rapport efter første playtest

---

*Tilhører: The Waking World multiagent-system*
*Sidst opdateret: 2026-03-23*
