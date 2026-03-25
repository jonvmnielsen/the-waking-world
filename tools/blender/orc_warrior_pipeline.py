"""
Orc Warrior Blender Pipeline — The Waking World
Kør med: blender.exe --background --python orc_warrior_pipeline.py -- <output_dir>

Bygger karikeret Orc Warrior, opsætter isometrisk EEVEE-renderer
og gemmer alle animationsframes som PNG til sprite sheet assembly.
"""

import bpy
import math
import os
import sys

# ---------------------------------------------------------------------------
# Konfiguration
# ---------------------------------------------------------------------------
FRAME_W       = 128
FRAME_H       = 160
ORTHO_SCALE   = 1.60    # Ortho-zoom — justér hvis figuren skæres af
CAM_ELEV_DEG  = 30.0    # Elevationsvinkel (grader)
CAM_AZIM_DEG  = 225.0   # Azimut (225° = camera sydvest for figuren)
CAM_DIST      = 12.0    # Afstand fra figur til kamera

# Animationsframes per type
IDLE_FRAMES   = 4
WALK_FRAMES   = 8
ATTACK_FRAMES = 6

# Walk-retninger: z-rotation på figuren i grader
WALK_DIRS = {"S": 0, "SW": 45, "W": 90, "NW": 135}

# ---------------------------------------------------------------------------
# Palette (AGENT_GRAFIK.md)
# ---------------------------------------------------------------------------
def mat(name, rgb, roughness=0.85, metallic=0.0, emit=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    n = m.node_tree.nodes
    n.clear()
    out  = n.new("ShaderNodeOutputMaterial")
    bsdf = n.new("ShaderNodeBsdfPrincipled")
    bsdf.inputs["Base Color"].default_value = (*rgb, 1.0)
    bsdf.inputs["Roughness"].default_value  = roughness
    bsdf.inputs["Metallic"].default_value   = metallic
    if emit > 0:
        bsdf.inputs["Emission Color"].default_value  = (*rgb, 1.0)
        bsdf.inputs["Emission Strength"].default_value = emit
    m.node_tree.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    return m

# ---------------------------------------------------------------------------
# Scene-opsætning
# ---------------------------------------------------------------------------
def ryd_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()
    for blk in [bpy.data.meshes, bpy.data.materials,
                bpy.data.cameras, bpy.data.lights]:
        for item in list(blk):
            blk.remove(item)

def ops_render(output_dir):
    sc = bpy.context.scene
    sc.render.engine            = "BLENDER_EEVEE"
    sc.render.resolution_x      = FRAME_W
    sc.render.resolution_y      = FRAME_H
    sc.render.resolution_percentage = 100
    sc.render.film_transparent  = True
    sc.render.image_settings.file_format = "PNG"
    sc.render.image_settings.color_mode  = "RGBA"
    sc.render.image_settings.color_depth = "8"
    # Anti-aliasing (Blender 5.x EEVEE API)
    try:
        sc.eevee.taa_render_samples = 16
    except AttributeError:
        pass  # Blender 5.x har omdøbt denne indstilling
    try:
        sc.eevee.use_soft_shadows = True
    except AttributeError:
        pass
    sc.render.filepath = output_dir + "/"

def setup_lys():
    # Nøglelys (fra kamera-siden — varmt lys)
    bpy.ops.object.light_add(type="SUN", location=(8, -8, 12))
    sol = bpy.context.active_object
    sol.name = "LysSol"
    sol.data.energy = 3.5
    sol.data.color  = (1.0, 0.95, 0.85)
    sol.data.angle  = math.radians(5)
    # Fyldelys (blåligt fra modsat side)
    bpy.ops.object.light_add(type="AREA", location=(-6, 6, 4))
    fill = bpy.context.active_object
    fill.name = "LysFyld"
    fill.data.energy = 80
    fill.data.color  = (0.7, 0.85, 1.0)
    fill.data.size   = 4.0
    # Bagkantlys (outline-effekt)
    bpy.ops.object.light_add(type="SPOT", location=(0, 10, 6))
    rim = bpy.context.active_object
    rim.name = "LysKant"
    rim.data.energy     = 200
    rim.data.color      = (0.9, 1.0, 0.8)
    rim.data.spot_size  = math.radians(40)
    rim.data.spot_blend = 0.5

def setup_kamera():
    bpy.ops.object.camera_add()
    cam_obj = bpy.context.active_object
    cam_obj.name = "IsometricCamera"
    cam_obj.data.type        = "ORTHO"
    cam_obj.data.ortho_scale = ORTHO_SCALE

    # Beregn position ud fra elevation og azimut
    elev = math.radians(CAM_ELEV_DEG)
    azim = math.radians(CAM_AZIM_DEG)
    cx   = CAM_DIST * math.cos(elev) * math.cos(azim)
    cy   = CAM_DIST * math.cos(elev) * math.sin(azim)
    cz   = CAM_DIST * math.sin(elev)
    cam_obj.location = (cx, cy, cz)

    # Peg mod figurens centrum (z=0.7 er midten af en ~1.4 enhed høj figur)
    from mathutils import Vector
    retning = Vector((0, 0, 0.7)) - Vector(cam_obj.location)
    rot_q   = retning.to_track_quat("-Z", "Y")
    cam_obj.rotation_euler = rot_q.to_euler()

    bpy.context.scene.camera = cam_obj
    return cam_obj

# ---------------------------------------------------------------------------
# Model-builder
# ---------------------------------------------------------------------------
def tilfoej(name, ptype, loc, rot_deg, scale, mat_obj):
    """Tilføj en Blender primitive og returner objektet."""
    if ptype == "BOX":
        bpy.ops.mesh.primitive_cube_add(location=loc)
    elif ptype == "CYL":
        bpy.ops.mesh.primitive_cylinder_add(vertices=8, location=loc)
    elif ptype == "SPH":
        bpy.ops.mesh.primitive_uv_sphere_add(segments=8, ring_count=6, location=loc)
    elif ptype == "CONE":
        bpy.ops.mesh.primitive_cone_add(vertices=6, location=loc)
    obj = bpy.context.active_object
    obj.name = name
    obj.rotation_euler = (
        math.radians(rot_deg[0]),
        math.radians(rot_deg[1]),
        math.radians(rot_deg[2]),
    )
    obj.scale = scale
    if len(obj.data.materials) == 0:
        obj.data.materials.append(mat_obj)
    else:
        obj.data.materials[0] = mat_obj
    return obj

def byg_orc():
    # Materialer
    M = {
        "hude":    mat("Hude",   (0.14, 0.28, 0.09)),
        "hude_l":  mat("HudeLys",(0.22, 0.42, 0.14)),
        "oliven":  mat("Oliven", (0.18, 0.31, 0.12)),
        "metal":   mat("Metal",  (0.30, 0.14, 0.03), roughness=0.3, metallic=0.7),
        "metal_m": mat("MetalM", (0.12, 0.06, 0.01), roughness=0.4, metallic=0.6),
        "orange":  mat("Orange", (0.60, 0.22, 0.06), roughness=0.6),
        "tand":    mat("Tand",   (0.85, 0.82, 0.68)),
        "oje":     mat("Oje",    (0.90, 0.70, 0.05), roughness=0.05, emit=1.5),
    }

    # --- ROOT (tomt objekt til rotation af hele figur) ---
    bpy.ops.object.empty_add(type="PLAIN_AXES", location=(0, 0, 0))
    root = bpy.context.active_object
    root.name = "OrcRoot"

    def p(name, t, loc, rot, sc, m):
        obj = tilfoej(name, t, loc, rot, sc, M[m])
        obj.parent = root
        return obj

    # --- BEN ---
    ben_v = p("Ben_V","BOX", (-0.15, 0, 0.24), (0,0,0), (0.11,0.11,0.22),"hude")
    ben_h = p("Ben_H","BOX", ( 0.15, 0, 0.24), (0,0,0), (0.11,0.11,0.22),"hude")
    stv_v = p("Stv_V","BOX", (-0.15, 0, 0.06), (0,0,0), (0.13,0.14,0.09),"metal_m")
    stv_h = p("Stv_H","BOX", ( 0.15, 0, 0.06), (0,0,0), (0.13,0.14,0.09),"metal_m")

    # --- KROP ---
    krop  = p("Krop", "BOX", (0, 0, 0.60), (0,0,0), (0.29,0.22,0.26),"hude")
    bplade= p("Bryst","BOX", (0,-0.21,0.62),(0,0,0),(0.22,0.02,0.22),"oliven")
    baelt = p("Baelt","BOX", (0,-0.21,0.44),(0,0,0),(0.26,0.03,0.06),"metal")
    # Orange midterstripe
    stripe= p("Stripe","BOX",(0,-0.22,0.62),(0,0,0),(0.05,0.02,0.20),"orange")

    # --- SKULDRE (overdrevne WC3-epauletter) ---
    sk_v  = p("Sk_V","BOX",(-0.42,0,0.78),(0, 15,0),(0.16,0.14,0.15),"metal")
    sk_h  = p("Sk_H","BOX",( 0.42,0,0.78),(0,-15,0),(0.16,0.14,0.15),"metal")
    spk_v = p("Spk_V","CONE",(-0.42,0,0.96),(0,0,0),(0.07,0.07,0.14),"orange")
    spk_h = p("Spk_H","CONE",( 0.42,0,0.96),(0,0,0),(0.07,0.07,0.14),"orange")

    # --- ARME (som separate root-children for animation) ---
    arm_v = p("Arm_V","CYL",(-0.40,0,0.56),(0,0,0),(0.09,0.09,0.24),"hude")
    arm_h = p("Arm_H","CYL",( 0.40,0,0.56),(0,0,0),(0.09,0.09,0.24),"hude")
    nav_v = p("Nav_V","SPH",(-0.40,0,0.33),(0,0,0),(0.12,0.12,0.11),"hude_l")
    nav_h = p("Nav_H","SPH",( 0.40,0,0.33),(0,0,0),(0.12,0.12,0.11),"hude_l")
    manc_v= p("Mnc_V","BOX",(-0.40,0,0.46),(0,0,0),(0.12,0.12,0.07),"metal")
    manc_h= p("Mnc_H","BOX",( 0.40,0,0.46),(0,0,0),(0.12,0.12,0.07),"metal")

    # --- HOVED ---
    hals  = p("Hals", "CYL", (0,0,0.86),(0,0,0),(0.08,0.08,0.08),"hude")
    hoved = p("Hoved","BOX", (0,-0.02,1.02),(0,0,0),(0.22,0.18,0.20),"hude_l")
    kaebe = p("Kaebe","BOX", (0,-0.03,0.87),(0,0,0),(0.20,0.16,0.10),"hude")
    tan_v = p("Tan_V","CONE",(-0.10,-0.18,0.86),(18,0,0),(0.04,0.04,0.10),"tand")
    tan_h = p("Tan_H","CONE",( 0.10,-0.18,0.86),(18,0,0),(0.04,0.04,0.10),"tand")
    oj_v  = p("Oj_V", "SPH",(-0.08,-0.17,1.04),(0,0,0),(0.055,0.045,0.04),"oje")
    oj_h  = p("Oj_H", "SPH",( 0.08,-0.17,1.04),(0,0,0),(0.055,0.045,0.04),"oje")

    # --- HJELM ---
    hjelm = p("Hjelm","BOX",(0,0,1.18),(0,0,0),(0.23,0.20,0.13),"metal_m")
    hjkant= p("Hjkant","BOX",(0,0,1.08),(0,0,0),(0.25,0.22,0.04),"metal")
    horn_v= p("Horn_V","CONE",(-0.14,0,1.36),(0,-18,0),(0.05,0.05,0.20),"metal")
    horn_h= p("Horn_H","CONE",( 0.14,0,1.36),(0, 18,0),(0.05,0.05,0.20),"metal")
    ribbe = p("Ribbe","BOX",(0,-0.18,1.16),(0,0,0),(0.03,0.02,0.14),"orange")

    # --- VÅBEN (øskse, parent: arm_h) ---
    skaft = p("Skaft","CYL",(0.42,0,0.14),(0,0,0),(0.03,0.03,0.38),"metal_m")
    oksh  = p("Oksh", "BOX",(0.54,0,0.60),(0,0,15),(0.20,0.06,0.22),"metal")
    skaer = p("Skaer","BOX",(0.66,0,0.60),(0,0,15),(0.08,0.04,0.18),"orange")

    animerbare = {
        "root":  root,
        "arm_v": arm_v, "arm_h": arm_h,
        "nav_v": nav_v, "nav_h": nav_h,
        "ben_v": ben_v, "ben_h": ben_h,
        "krop":  krop,
        "oksh":  oksh,  "skaer": skaer, "skaft": skaft,
    }
    return animerbare

# ---------------------------------------------------------------------------
# Animations-poses
# ---------------------------------------------------------------------------
def nulstil(P):
    """Sæt alle animerbare dele tilbage til standardpose."""
    for navn, obj in P.items():
        if hasattr(obj, "location"):
            obj.location = obj.location.copy()  # trigger update
    P["arm_v"].rotation_euler = (0, 0, 0)
    P["arm_h"].rotation_euler = (0, 0, 0)
    P["nav_v"].rotation_euler = (0, 0, 0)
    P["nav_h"].rotation_euler = (0, 0, 0)
    P["ben_v"].location.y = 0
    P["ben_h"].location.y = 0
    P["ben_v"].location.z = 0.24
    P["ben_h"].location.z = 0.24
    P["krop"].location.z  = 0.60
    P["oksh"].rotation_euler  = (0, 0, math.radians(15))
    P["skaer"].rotation_euler = (0, 0, math.radians(15))

def pose_idle(P, frame):
    """Rolig vejrtrækning — 4 frames."""
    nulstil(P)
    t = frame / IDLE_FRAMES
    aande = math.sin(t * math.pi * 2) * 0.015
    P["krop"].scale = (0.29, 0.22, 0.26 + aande)
    # Let arm-gyngen
    P["arm_v"].rotation_euler[0] = math.radians(-5 + aande * 200)
    P["arm_h"].rotation_euler[0] = math.radians( 5 - aande * 200)

def pose_walk(P, frame):
    """Gang-cyklus — 8 frames."""
    nulstil(P)
    t   = (frame / WALK_FRAMES) * math.pi * 2
    amp = 0.14
    # Ben svinger frem/tilbage
    P["ben_v"].location.y = math.sin(t) * amp
    P["ben_h"].location.y = math.sin(t + math.pi) * amp
    # Hævet ben ved skridt
    P["ben_v"].location.z = 0.24 + max(0, math.sin(t)) * 0.06
    P["ben_h"].location.z = 0.24 + max(0, math.sin(t + math.pi)) * 0.06
    # Arme modsatte fase
    P["arm_v"].rotation_euler[0] = math.radians(math.sin(t + math.pi) * 30)
    P["arm_h"].rotation_euler[0] = math.radians(math.sin(t)           * 30)
    P["nav_v"].location.y        = P["arm_v"].location.y + math.sin(t + math.pi) * 0.08
    P["nav_h"].location.y        = P["arm_h"].location.y + math.sin(t)           * 0.08
    # Let kropsgunken
    P["krop"].location.z = 0.60 + abs(math.sin(t * 2)) * 0.015

def pose_attack(P, frame):
    """Øksesving — 6 frames."""
    nulstil(P)
    fases = [
        # (arm_h_x, arm_h_z, oksh_z, krop_y)  — grader
        (-60,  0,  20,  0),   # 0: opspænding — arm bagud og op
        (-90, 15,  10,  3),   # 1: arm fuldt tilbage
        (-45, 10, -10,  8),   # 2: sving starter
        ( 20, -5, -40, 10),   # 3: midt i sving
        ( 60,-10, -60,  6),   # 4: impact — arm fuldt frem
        ( 20,  0, -20,  2),   # 5: restitution
    ]
    ax, az, ox, ky = fases[frame]
    P["arm_h"].rotation_euler[0] = math.radians(ax)
    P["arm_h"].rotation_euler[2] = math.radians(az)
    P["oksh"].rotation_euler[2]  = math.radians(ox)
    P["skaer"].rotation_euler[2] = math.radians(ox)
    P["krop"].rotation_euler[2]  = math.radians(ky)

# ---------------------------------------------------------------------------
# Render-kerne
# ---------------------------------------------------------------------------
def render(output_path):
    bpy.context.scene.render.filepath = output_path
    bpy.ops.render.render(write_still=True)

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main():
    # Parse output-mappe fra kommandolinje
    argv = sys.argv
    out_dir = "assets/sprites/orc_warrior"
    if "--" in argv:
        extra = argv[argv.index("--") + 1:]
        if extra:
            out_dir = extra[0]
    os.makedirs(out_dir, exist_ok=True)

    print(f"[OrcPipeline] Output: {out_dir}")
    ryd_scene()
    ops_render(out_dir)
    setup_lys()
    kamera = setup_kamera()
    P = byg_orc()

    # --- IDLE (4 frames, retning S) ---
    print("[OrcPipeline] Renderer IDLE...")
    for f in range(IDLE_FRAMES):
        pose_idle(P, f)
        P["root"].rotation_euler.z = 0
        bpy.context.view_layer.update()
        render(os.path.join(out_dir, f"idle_{f:02d}.png"))

    # --- WALK (8 frames × 4 retninger) ---
    print("[OrcPipeline] Renderer WALK...")
    for dir_name, z_deg in WALK_DIRS.items():
        for f in range(WALK_FRAMES):
            pose_walk(P, f)
            P["root"].rotation_euler.z = math.radians(z_deg)
            bpy.context.view_layer.update()
            render(os.path.join(out_dir, f"walk_{dir_name.lower()}_{f:02d}.png"))

    # --- ATTACK (6 frames, retning S) ---
    print("[OrcPipeline] Renderer ATTACK...")
    for f in range(ATTACK_FRAMES):
        pose_attack(P, f)
        P["root"].rotation_euler.z = 0
        bpy.context.view_layer.update()
        render(os.path.join(out_dir, f"attack_{f:02d}.png"))

    total = IDLE_FRAMES + WALK_FRAMES * len(WALK_DIRS) + ATTACK_FRAMES
    print(f"[OrcPipeline] Færdig — {total} frames renderet til {out_dir}")

main()
