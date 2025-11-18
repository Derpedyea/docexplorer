**Available 3D Formats**  
*Godot Engine – stable documentation*

> Godot’s scene‑based workflow means that everything you build in a 3D
> modelling package (meshes, skeletons, animations, materials, etc.) is
> imported into a **scene** that can be placed directly in the editor.
> The import system is flexible and configurable; you can tweak how a
> particular file type is parsed, which objects are generated, and how
> animations or physics are handled.  
> This page lists the 3D file formats that Godot can import out‑of‑the‑box
> and a quick guide to their features and caveats.

---

## Supported Formats

| File type | Extension(s) | Notes / Typical use | Import settings (brief) |
|-----------|--------------|--------------------|------------------------|
| **glTF 2.0** | `.glb`, `.gltf` | *Recommended* – the most feature‑rich format that preserves meshes, skeletons, animations, PBR materials, skinning, etc. | • Binary (`.glb`) is usually faster to load. <br>• Text (`.gltf`) + `*.bin` assets can be edited with a text editor. <br>• Supports KHR\_materials, KHR\_lights, KHR\_textures, etc. |
| **Collada** | `.dae` | Full 3D support but slower and sometimes inconsistent with newer features. | • Can contain geometry, materials, cameras, lights, skeletons, and animations. <br>• Some advanced features (e.g. non‑linear animations) may be lost. |
| **Wavefront OBJ** | `.obj` | Lightweight geometry only; no materials or animations. | • Use alongside an accompanying `.mtl` file for basic materials. <br>• Good for quick prototyping of static meshes. |
| **XGL** | `.xgl` | Legacy format from older Godot versions; rarely used now. | • Supports simple geometry and basic materials. |
| **FBX** | `.fbx` | Partial support – works well for simple models but can struggle with complex rigs or embedded animations. | • Use the *FBX Importer* plugin or export to glTF first for best results. |
| **Blender (.blend)** | `.blend` | Not directly imported. Use Blender’s *Export > glTF* to generate a compatible format. | • Blender can be set to export meshes, armatures, animations, and PBR materials. |

> **Tip:** If you need the most reliable import path, export from your 3D tool to **glTF 2.0** (binary `.glb`). It’s the only format that guarantees full fidelity for meshes, skeletons, animations, and modern PBR materials.

---

## Import Settings Overview

When you drop a supported file into the Godot filesystem, the editor
automatically creates a **scene** (`*.tscn` or `*.scn`) that represents
the imported data. The import process is governed by a set of settings
that you can tweak from the **Import** tab.

| Setting | What it does |
|---------|--------------|
| **Generate Tangents** | Calculates normal‑map tangents for the mesh. |
| **Generate Lightmap UVs** | Creates a second UV set for baked lighting. |
| **Keep Vertex Color** | Preserves per‑vertex colour information. |
| **Separate Meshes** | Splits the imported file into distinct nodes per mesh. |
| **Import Animations** | Enables or disables the import of animation data. |
| **Import Skeletons** | Controls whether armatures are generated. |
| **Preserve Names** | Keeps original node names from the source file. |

You can find the import settings by selecting a file in the **FileSystem**
dock, opening the **Inspector** pane, and scrolling to the **Import**
tab. After making changes, press **Reimport** to regenerate the scene.

---

## Common Issues & Work‑arounds

| Problem | Likely Cause | Fix / Recommendation |
|---------|--------------|-----------------------|
| Materials appear wrong or missing | Exporter didn't include PBR data | Re‑export from the 3D tool as *glTF* or use the **Materials** tab in Godot to manually create PBR materials. |
| Animations not playing | Source file used unsupported animation type | Convert the animation to a supported format (e.g. bake to keyframes, export as glTF). |
| Large meshes cause long load times | Mesh has too many vertices or polygons | Simplify geometry or use *Lod* levels in the source file. |
| File size too big for project | Large textures or embedded data | Use external texture files and enable **Compress** / **Generate Mipmaps** in the import settings. |

---

## Further Reading

* [**Model export considerations**](model_export_considerations.html) – best practices for exporting from your 3D tool.  
* [**Scene export considerations**](scene_export_considerations.html) – how to structure scenes for optimal import into Godot.  
* [**Importing 3D scenes**](index.html) – full guide to the 3D import workflow.

---

*For the most up‑to‑date information, always refer to the Godot documentation for the specific engine version you’re using.*