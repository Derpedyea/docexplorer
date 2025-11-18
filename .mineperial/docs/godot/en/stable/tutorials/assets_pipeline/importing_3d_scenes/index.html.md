**Importing 3D scenes**  
*Godot Engine – stable documentation*

---

## 1. What’s covered

- Supported 3D file formats  
- Exporting conventions for popular 3‑D tools  
- Import settings available in the editor  
- Common pitfalls and troubleshooting tips

> *This page is part of the “Assets pipeline” tutorials. If you’re looking for a quick start, see the next page – “Available 3D formats” – for a table of supported file types.*

---

## 2. Supported 3D file formats

| Format | Native support | Notes |
|--------|----------------|-------|
| **GLTF / GLB** | ✅ | Recommended format for Godot 4; supports meshes, animations, materials, and scene hierarchy. |
| **Collada (.dae)** | ✅ | Works, but animation skinning can be fragile. |
| **OBJ** | ✅ | Simple geometry; textures must be supplied separately. |
| **FBX** | ⚠️ | Legacy support; only works with Godot 3.x. |
| **Blend (native Blender)** | ✅ (via `.blend` importer) | Requires Blender 2.8+ and the Blender‑Python plugin. |
| **3DS, X** | ❌ | Not supported; convert to GLTF/OBJ first. |

> For a detailed list and the current status of each format, see the [Available 3D formats](available_formats.html) page.

---

## 3. Exporting from 3‑D authoring tools

| Tool | Export tips | Typical pitfalls |
|------|-------------|------------------|
| **Blender** | • Use *Apply Transform* (Ctrl + A) before exporting.<br>• Export as *GLTF 2.0* (binary).<br>• Keep the axis Y‑up; set “Forward” to **-Z** and “Up” to **Y**. | • Vertex ordering issues.<br>• Normals flipped if “Y‑up” is not set. |
| **3ds Max / Maya** | • Convert to *GLTF* using a plugin (e.g., FBX Exporter + GLTF Converter).<br>• Scale the model to the Godot world (1 unit = 1 meter). | • Joint names may collide; rename or use “Skeleton” prefixes. |
| **Unity** | • Export from Unity as *FBX* or *GLTF* (via plugin). | • Materials may need manual reassignment. |

> **Important** – Godot uses a right‑handed coordinate system with **Y** pointing up. Make sure your model is exported with that convention; otherwise you’ll see flipped or inverted geometry.

---

## 4. Importing in Godot

1. **Drop the file** into the *FileSystem* dock or use *File → Import*.
2. A new *.import* file is created in the same folder.  
   - Edit this file to tweak settings (scale, import mode, animation settings, etc.).
3. The importer automatically creates a *Scene* (`.tscn`) and a *Resource* (`.tres`) representing the model.
4. Open the generated scene to see the imported nodes (MeshInstance, Skeleton, etc.).

### Import options

| Option | Description |
|--------|-------------|
| **Import Mode** | *Static* (no skinning) or *Skeleton* (full animation). |
| **Scale** | Scale factor applied during import. |
| **Generate Lightmap UVs** | If you’ll use baked lighting. |
| **Import Animations** | Toggle to include or exclude animation clips. |
| **Import Materials** | Use the *Godot* or *Custom* material type. |

> You can re‑import by selecting the file and pressing **Reimport** or by changing the *.import* settings and hitting **Reimport**.

---

## 5. Common pitfalls

| Problem | Fix |
|---------|-----|
| **Inverted normals** | Re‑export with *Normals* set to *Flip* or use *Apply* in Blender. |
| **Missing textures** | Ensure texture files are in the same folder or provide absolute paths. |
| **Animation timing off** | Check that the source tool’s frame rate matches Godot’s (30 fps). |
| **Collision shapes not matching geometry** | Use *Mesh → Create Collision* in the editor or import *Collision* in Blender. |
| **Large scene import errors** | Split the model into smaller parts and import them as separate scenes. |

---

## 6. Further reading

- [Available 3D formats](available_formats.html) – full table of supported file types.  
- [Importing translations](../importing_translations.html) – how to handle localized assets.  
- [Exporting 3D assets from Blender](../../assets_pipeline/importing_from_blender.html) – step‑by‑step guide.

--- 

*For any additional questions, consult the [Troubleshooting](../../troubleshooting.html) section or ask in the community forums.*