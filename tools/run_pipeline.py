"""
Orc Warrior Pipeline Runner — The Waking World
Finder Blender automatisk, kører 3D-rendering og bygger sprite sheets.

Kør fra projektrod: py tools/run_pipeline.py
Eller kun sprites:  py tools/run_pipeline.py --only-sprites
"""

import os
import sys
import glob
import subprocess

# ---------------------------------------------------------------------------
# Konfiguration
# ---------------------------------------------------------------------------
BLENDER_SOEG = [
    "C:/Program Files/Blender Foundation/Blender */blender.exe",
    "C:/Program Files/Blender Foundation/Blender*/blender.exe",
    "C:/Program Files (x86)/Blender Foundation/Blender */blender.exe",
    os.path.expanduser("~/AppData/Local/Programs/Blender*/blender.exe"),
]

BLENDER_SCRIPT = "tools/blender/orc_warrior_pipeline.py"
SPRITE_SCRIPT  = "tools/build_spritesheet.py"
OUTPUT_DIR     = "assets/sprites/orc_warrior"

# ---------------------------------------------------------------------------
# Blender-finder
# ---------------------------------------------------------------------------
def find_blender() -> str | None:
    """Find seneste Blender installation automatisk."""
    kandidater = []
    for mønster in BLENDER_SOEG:
        for sti in glob.glob(mønster):
            if os.path.isfile(sti):
                kandidater.append(sti)
    if not kandidater:
        return None
    # Sortér og vælg seneste version
    kandidater.sort(reverse=True)
    return kandidater[0]

# ---------------------------------------------------------------------------
# Pipeline trin
# ---------------------------------------------------------------------------
def kør_blender(blender_exe: str, output_dir: str) -> bool:
    """Kald Blender i baggrunden og kør pipeline-scriptet."""
    abs_output = os.path.abspath(output_dir)
    abs_script = os.path.abspath(BLENDER_SCRIPT)

    if not os.path.exists(abs_script):
        print(f"FEJL: Kan ikke finde {abs_script}")
        return False

    cmd = [
        blender_exe,
        "--background",
        "--python", abs_script,
        "--",          # Separator: alt herefter går til Python-scriptet
        abs_output,
    ]
    print(f"Starter Blender: {blender_exe}")
    print(f"Output:          {abs_output}")
    print(f"Kommando:        {' '.join(cmd)}\n")
    print("-" * 55)

    try:
        result = subprocess.run(
            cmd,
            cwd=os.path.abspath("."),
            capture_output=False,  # Vis Blender output i realtid
            text=True,
        )
        if result.returncode != 0:
            print(f"\nBlender afsluttede med kode {result.returncode}")
            return False
        return True
    except FileNotFoundError:
        print(f"FEJL: Kan ikke starte Blender fra {blender_exe}")
        return False
    except KeyboardInterrupt:
        print("\nAfbrudt af bruger.")
        return False


def kør_spritesheet() -> bool:
    """Kør sprite sheet assembler."""
    abs_script = os.path.abspath(SPRITE_SCRIPT)
    if not os.path.exists(abs_script):
        print(f"FEJL: Kan ikke finde {abs_script}")
        return False

    print("\n" + "-" * 55)
    print("Bygger sprite sheets...")
    result = subprocess.run([sys.executable, abs_script], cwd=os.path.abspath("."))
    return result.returncode == 0


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main():
    kun_sprites = "--only-sprites" in sys.argv

    print("=" * 55)
    print("The Waking World — Orc Warrior Pipeline")
    print("=" * 55)

    if not kun_sprites:
        # Find Blender
        blender = find_blender()
        if not blender:
            print("FEJL: Blender ikke fundet.")
            print("Tjek at Blender er installeret i Program Files.")
            sys.exit(1)
        print(f"Blender fundet: {blender}\n")

        # Kør Blender rendering
        if not kør_blender(str(blender), OUTPUT_DIR):
            print("\nBlender-rendering fejlede. Stopper.")
            sys.exit(1)

    # Byg sprite sheets
    if not kør_spritesheet():
        print("\nSprite sheet assembly fejlede.")
        sys.exit(1)

    print("\n[OK] Pipeline komplet.")
    print(f"  Sprites: assets/sprites/orc_warrior/")
    print(f"  Master:  assets/sprites/orc_warrior_spritesheet.png")


if __name__ == "__main__":
    main()
