# LightmapGIData

`LightmapGIData` is a **resource** that stores baked light‑map data and dynamic object‑probe data for Godot’s **LightmapGI** system.  
It is typically created and edited automatically by the editor when you bake lighting, but can also be manipulated through code or the inspector.

> Inherits: `Resource <RefCounted <Object>>`

---

## Description

`LightmapGIData` holds all the information needed for global illumination baked into a scene, including:

* 2‑D or 3‑D light‑map textures
* Probe data for dynamic objects
* Bake‑mode configuration
* Lightmap resolution and other bake settings

The data can be referenced by one or more `LightmapGI` nodes to render static global illumination in a scene.

---

## Signals

| Signal | Description |
|--------|-------------|
| **data_changed** | Emitted when the resource changes (e.g., after a new bake). |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **bake_mode** | `BakeMode` (enum) | `Baked` | The bake mode to use. Options: `Baked`, `Dynamic`, `Mixed`. |
| **probe_count** | `int` | `0` | Number of dynamic probes in the data. |
| **lightmap_size** | `Vector2i` | `Vector2i(0,0)` | Size of the baked light‑map texture. |
| **lightmap_texture** | `ImageTexture` | `null` | Texture containing baked light‑map data. |
| **object_probes** | `Array[ObjectProbe]` | `[]` | Array of dynamic object probe data. |

> **Note:** Many of these properties are read‑only in the editor. They can be accessed and modified via script.

---

## Methods

### `static LightmapGIData create_from_file(path:String) -> LightmapGIData`

Creates a new `LightmapGIData` resource by loading a baked file.

### `bool is_baked()`

Returns `true` if the data contains baked light‑maps.

### `void bake()`

Starts a new bake of the scene. Requires the resource to be in `Baked` mode and that a `LightmapGI` node references it.

### `int get_probe_count()`

Returns the number of dynamic probes stored in the resource.

### `ObjectProbe get_probe(int index)`

Returns the `ObjectProbe` at the specified index.

### `Rect2 get_bake_rect()`

Returns the rectangle that describes the area covered by the bake.

### `int get_resolution()`

Returns the light‑map resolution (height or width depending on context).

### `Array[Vector3] get_lightmap_uvs()`

Returns an array of UV coordinates for each vertex in the baked light‑map.

### `Array[Color] get_lightmap_colors()`

Returns an array of colors that represent the baked illumination for each vertex.

### `Dictionary get_probe_info()`

Returns a dictionary with meta information for each dynamic probe (position, radius, etc.).

---

## Enums

```gdscript
enum BakeMode {
	Baked,          # Purely baked lighting.
	Dynamic,        # Only dynamic objects, no baked light.
	Mixed,          # Combination of baked and dynamic.
}
```

---

## Example usage

```gdscript
# Load existing bake
var gi_data : LightmapGIData = load("res://my_baked_gi.tres")

# Inspect the probe count
print(gi_data.probe_count)

# Re‑bake the data
gi_data.bake()
```

---

## Related resources

* `LightmapGI` – Node that uses `LightmapGIData` to render global illumination.  
* `ObjectProbe` – Structure that describes a dynamic probe used by `LightmapGIData`.  
* `BakeMode` – Enumerated bake modes defined on this resource.

---

For detailed information on every property and method, refer to the [official Godot class reference](https://docs.godotengine.org/en/stable/classes/class_lightmapgidata.html).