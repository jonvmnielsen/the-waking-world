"""
Sprite Sheet Assembler — The Waking World
Kombinerer renderede PNG-frames til sprite sheets klar til Godot AnimatedSprite2D.

Kør med: py tools/build_spritesheet.py
"""

import os
import sys
from PIL import Image

# ---------------------------------------------------------------------------
# Konfiguration — matcher Blender pipeline
# ---------------------------------------------------------------------------
FRAME_W = 128
FRAME_H = 160
SRC_DIR = "assets/sprites/orc_warrior"
OUT_DIR = "assets/sprites"

# Layout: (animation_navn, filpræfiks, antal_frames, retning)
# En spritesheet per animation-gruppe
ANIMATIONER = [
    # (navn, glob-præfiks, antal)
    ("idle",          "idle_",    4),
    ("walk_s",        "walk_s_",  8),
    ("walk_sw",       "walk_sw_", 8),
    ("walk_w",        "walk_w_",  8),
    ("walk_nw",       "walk_nw_", 8),
    ("attack",        "attack_",  6),
]

# Master sheet layout (alle animationer samlet, rækker)
MASTER_SHEET = "orc_warrior_spritesheet.png"
MAX_COLS     = 8   # Maks frames per række i master sheet


def load_frames(praefiks: str, antal: int) -> list:
    """Indlæs frames sorteret efter nummmer, returner liste af PIL Images."""
    frames = []
    for i in range(antal):
        sti = os.path.join(SRC_DIR, f"{praefiks}{i:02d}.png")
        if not os.path.exists(sti):
            print(f"  ADVARSEL: mangler {sti}")
            # Erstat med gennemsigtig placeholder
            placeholder = Image.new("RGBA", (FRAME_W, FRAME_H), (0, 0, 0, 0))
            frames.append(placeholder)
        else:
            frames.append(Image.open(sti).convert("RGBA"))
    return frames


def byg_stripsheet(praefiks: str, antal: int, ud_sti: str) -> Image.Image:
    """Byg én vandret strip (alle frames side om side)."""
    frames = load_frames(praefiks, antal)
    sheet  = Image.new("RGBA", (FRAME_W * antal, FRAME_H), (0, 0, 0, 0))
    for i, frame in enumerate(frames):
        sheet.paste(frame, (i * FRAME_W, 0))
    sheet.save(ud_sti)
    print(f"  Gemt: {ud_sti}  ({antal} frames, {sheet.width}×{sheet.height})")
    return sheet


def byg_master_sheet(animation_strips: list) -> None:
    """Saml alle animationsstrips i ét master sprite sheet."""
    if not animation_strips:
        return
    total_rækker = len(animation_strips)
    max_bredde   = max(s.width for s in animation_strips)

    master = Image.new(
        "RGBA",
        (max_bredde, FRAME_H * total_rækker),
        (0, 0, 0, 0)
    )
    for raekke, strip in enumerate(animation_strips):
        master.paste(strip, (0, raekke * FRAME_H))

    ud_sti = os.path.join(OUT_DIR, MASTER_SHEET)
    master.save(ud_sti)
    print(f"\n  Master sheet: {ud_sti}  ({master.width}×{master.height})")
    _print_godot_info(master.width, master.height)


def _print_godot_info(bredde: int, hoejde: int) -> None:
    """Udskriv Godot AnimatedSprite2D setup-info."""
    print("\n" + "="*55)
    print("Godot AnimatedSprite2D opsætning:")
    print("="*55)
    print(f"  Texture: res://assets/sprites/{MASTER_SHEET}")
    print(f"  Hframes: {bredde // FRAME_W}")
    print(f"  Vframes: {hoejde // FRAME_H}")
    print()
    rækker = {
        "idle":    (0, 3),
        "walk_s":  (4, 11),
        "walk_sw": (12, 19),
        "walk_w":  (20, 27),
        "walk_nw": (28, 35),
        "attack":  (36, 41),
    }
    print("  Animation frames (første frame, sidst frame):")
    raekke = 0
    for navn, praefiks, antal in ANIMATIONER:
        start = raekke * (bredde // FRAME_W)
        slut  = start + antal - 1
        print(f"    {navn:10s}: frame {start:2d} - {slut:2d}")
        raekke += 1
    print("="*55)


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    os.makedirs(SRC_DIR, exist_ok=True)

    # Tjek om der er renders at arbejde med
    if not any(f.endswith(".png") for f in os.listdir(SRC_DIR)):
        print(f"Ingen PNG-filer fundet i {SRC_DIR}")
        print("Kør først Blender-pipelinen med run_pipeline.py")
        sys.exit(1)

    print(f"Bygger sprite sheets fra {SRC_DIR}...\n")
    strips = []
    for navn, praefiks, antal in ANIMATIONER:
        ud_sti = os.path.join(SRC_DIR, f"{navn}_strip.png")
        strip  = byg_stripsheet(praefiks, antal, ud_sti)
        strips.append(strip)

    byg_master_sheet(strips)
    print("\nSprite sheet assembly komplet.")


if __name__ == "__main__":
    main()
