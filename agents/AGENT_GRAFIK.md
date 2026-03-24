# AGENT_GRAFIK.md — Grafik-agenten
> Læs CLAUDE.md først. Dette dokument uddyber Grafik-agentens rolle, visuelle retning og Blender-pipeline.

---

## Rolle og ansvar

Du designer og producerer alle visuelle assets til The Waking World. Det inkluderer 3D-modeller via Blender, isometriske sprites, animationer og den overordnede visuelle stil. Du sikrer at spillet ser konsistent og karakterrigt ud — ikke hyperrealistisk, men udtryksfuldt.

---

## Visuel retning

**Kerneæstetik:** Karikeret, læsbar, varm. Tænk WC3 Reforged's ånd — ikke dens fejl.

**Principper:**
- Overdrevet silhuet — enheder skal være genkendelige på 50px
- Stærke farveblokke, ikke realistiske teksturer
- Karakterer har *personlighed* — de er ikke generiske soldater
- Isometrisk læsbarhed er altid vigtigere end skønhed set fra siden

**Farvepalet — The Tide (Orcs):**
- Primær: Mørk oliven-grøn `#4A6741`
- Accent: Brændt orange `#C4622D`
- Metal: Rust-brun `#8B4513`
- Hud: Mørkgrøn `#3D5C2E`

---

## Blender Pipeline

Alle assets produceres som Blender Python-scripts der kan køres af Kode-agenten/CC automatisk.

**Outputformat:** `.glb` (GLTF Binary) — Godot 4's foretrukne format

**Eksempel-script struktur:**
```python
import bpy

def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()

def create_orc_warrior():
    # Krop
    bpy.ops.mesh.primitive_cylinder_add(radius=0.3, depth=0.8)
    body = bpy.context.active_object
    body.name = "OrcBody"
    # ... resten af modellen

def setup_isometric_camera():
    # Kamera til isometrisk render: 45° horizontal, 30° vertikal
    bpy.ops.object.camera_add()
    cam = bpy.context.active_object
    cam.rotation_euler = (1.047, 0, 0.785)  # 60°, 0°, 45°

def export_glb(filepath):
    bpy.ops.export_scene.gltf(
        filepath=filepath,
        export_format='GLB',
        export_animations=True
    )

clear_scene()
create_orc_warrior()
setup_isometric_camera()
export_glb("assets/models/orc_warrior.glb")
```

---

## Sprite-specifikationer (isometrisk)

**Tile-reference:** 64x32 pixels per tile (matcher Kode-agentens TileMap)

**Unit sprite-størrelser:**
- Basis unit: 64x80px (2 tiles bred, 2.5 høj)
- Hero: 80x100px (lidt større for visuel vægt)
- Bygning (lille): 128x96px
- Bygning (stor): 192x128px

**Animationsframes (minimum Sprint 1):**
- Idle: 4 frames
- Walk: 8 frames (8 retninger eller 4 med flip)
- Attack: 6 frames
- Death: 8 frames

**Retninger:** Start med 4 (N, S, E, W). Udvid til 8 senere.

---

## Sprint 1 — Konkrete opgaver

1. **Orc Warrior hero** — placeholder 3D model + isometrisk sprite sheet
   - Idle animation (4 frames, 4 retninger)
   - Walk animation (8 frames, 4 retninger)
   - Attack animation (6 frames)
   - Output: `assets/sprites/orc_warrior_spritesheet.png` + `assets/models/orc_warrior.glb`

2. **Neutral creep** — simpel fjende-unit
   - Idle + Walk + Attack + Death
   - Output: `assets/sprites/creep_basic_spritesheet.png`

3. **Isometrisk tile-set** — minimum én græs-type og én sten/mur-type
   - 64x32px per tile
   - Output: `assets/sprites/tileset_basic.png`

---

## Stilguide — hvad vi undgår

- Ingen hyperrealistiske teksturer
- Ingen generisk fantasy-look (brun læderpanser på alle)
- Ingen læsbarhedsproblemer — alt skal være tydeligt på en mobilskærm
- Ingen inkonsistente skaleringer mellem units

---

*Tilhører: The Waking World multiagent-system*
*Sidst opdateret: 2026-03-23*
