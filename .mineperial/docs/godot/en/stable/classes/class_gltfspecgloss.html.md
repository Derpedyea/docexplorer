# GLTFSpecGloss

**Inheritance**  
`GLTFSpecGloss` inherits from `Resource`.

> **Archived glTF extension** – `KHR_materials_pbrSpecularGlossiness` is kept in Godot for backward‑compatibility with older glTF files that use the specular/glossiness workflow. New projects should prefer the physically based `KHR_materials_pbrMetallicRoughness` workflow.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `base_color_factor` | `Color` | `Color(1, 1, 1, 1)` | The base color multiplier for the material. |
| `base_color_texture` | `Texture2D` | `null` | Optional base‑color texture. |
| `specular_factor` | `Color` | `Color(0.04, 0.04, 0.04, 1)` | Specular color multiplier. |
| `specular_glossiness_texture` | `Texture2D` | `null` | Texture containing specular and glossiness data. |
| `glossiness_factor` | `float` | `1.0` | Glossiness (smoothness) factor. |

> All properties are exported, so they can be edited directly from the Inspector for `Resource` instances.

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `get_base_color_factor()` | `Color` | — | Returns the current base color factor. |
| `set_base_color_factor(Color factor)` | `void` | `factor` | Sets the base color factor. |
| `get_base_color_texture()` | `Texture2D` | — | Returns the base color texture. |
| `set_base_color_texture(Texture2D texture)` | `void` | `texture` | Sets the base color texture. |
| `get_specular_factor()` | `Color` | — | Returns the specular color. |
| `set_specular_factor(Color factor)` | `void` | `factor` | Sets the specular color. |
| `get_specular_glossiness_texture()` | `Texture2D` | — | Returns the specular/glossiness texture. |
| `set_specular_glossiness_texture(Texture2D texture)` | `void` | `texture` | Sets the specular/glossiness texture. |
| `get_glossiness_factor()` | `float` | — | Returns the glossiness factor. |
| `set_glossiness_factor(float factor)` | `void` | `factor` | Sets the glossiness factor. |
| `_to_dict()` | `Dictionary` | — | Serializes the extension into a dictionary for glTF export. |
| `_from_dict(Dict dict)` | `void` | `dict` | Populates the extension from a dictionary when importing. |

> All setters and getters are automatically exposed to the Godot editor and GDScript.

---

## Signals

`GLTFSpecGloss` does not expose any custom signals.

---

## Usage

```gdscript
# Example: Creating a specular‑glossiness material
var spec_gloss = GLTFSpecGloss.new()
spec_gloss.base_color_factor = Color(1, 0.5, 0.3)
spec_gloss.glossiness_factor = 0.8
# Assign to a mesh or export with a glTF exporter
```

When exporting a scene to glTF 2.0, the `GLTFSpecGloss` data is written to the `extensions` field of the material. When importing a glTF file that contains the `KHR_materials_pbrSpecularGlossiness` extension, Godot automatically creates a `GLTFSpecGloss` instance and populates its properties.

---

## Related Classes

* **[GLTFSkin](../classes/class_gltfskin.html)** – skinning information for skeletal meshes.  
* **[GLTFState](../classes/class_gltfstate.html)** – overall state of a glTF import/export operation.  
* **[GLTFResource](../classes/class_gltfresource.html)** – base class for all glTF‑related resources.

---

**Note**: This extension is marked as *archived* and may be removed in future Godot releases. For new projects, prefer the physically‑based `pbrMetallicRoughness` workflow unless you must support legacy glTF files that use specular/glossiness.