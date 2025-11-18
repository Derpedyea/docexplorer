**VoxelGI**  
*Godot Engine – Class Reference*  

---

### Inherits
```
VisualInstance3D
├─ Node3D
│  └─ Node
│     └─ Object
```

### Description
`VoxelGI` is a real‑time Global Illumination (GI) probe that provides high‑quality indirect lighting and reflections in 3D scenes. It works by voxelising the surrounding geometry and precomputing light transport information that is then used during rendering.

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| **bounds** | `AABB` | `AABB()` | The 3D bounding box of the voxel grid. |
| **cell_size** | `float` | `0.5` | Size of each voxel cell. |
| **bias** | `float` | `0.01` | Shadow bias used to reduce self‑shadowing artifacts. |
| **projector_mode** | `int` | `0` | Mode for projecting the light onto the voxel grid. |
| **enabled** | `bool` | `true` | Whether the GI probe is active. |
| **dynamic** | `bool` | `false` | If true, updates automatically when the environment changes. |
| **max_distance** | `float` | `100.0` | Maximum distance for indirect lighting to affect. |
| **probe_cubemap_size** | `int` | `64` | Resolution of the cubemap used for reflections. |
| **use_baked_light** | `bool` | `false` | Whether to blend baked light with runtime GI. |

> **Note**: The full list of properties is available in the online class reference.

---

## Methods

| Signature | Description |
|-----------|-------------|
| `func bake()` | Bakes the VoxelGI data from the current scene. |
| `func clear()` | Clears all voxel data, resetting the probe. |
| `func get_baked_light()` | Returns the baked light texture. |
| `func get_cell_size()` | Returns the voxel cell size. |
| `func set_bounds(AABB bounds)` | Sets the bounding box for the probe. |
| `func set_cell_size(float size)` | Sets the voxel cell size. |
| `func set_dynamic(bool enabled)` | Enables or disables dynamic updates. |
| `func set_enabled(bool enable)` | Enables or disables the probe. |
| `func set_max_distance(float distance)` | Sets the maximum influence distance. |
| `func set_probe_cubemap_size(int size)` | Sets the cubemap resolution. |
| `func set_use_baked_light(bool enabled)` | Toggles baked light usage. |

> **Tip**: Use `bake()` after modifying the scene geometry or lighting to update the probe.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `bake_completed()` | – | Emitted when a bake operation finishes. |
| `light_changed()` | – | Emitted when the probe’s light data changes. |

---

## Enumerations

```gdscript
enum Mode { PROBE, LIGHTMAP, NONE }
```

- `PROBE` – Standard voxel GI mode.  
- `LIGHTMAP` – Uses pre‑baked lightmaps.  
- `NONE` – Disables GI.

---

## Usage Example

```gdscript
extends Node3D

@onready var voxel_gi : VoxelGI = $VoxelGI

func _ready() -> void:
    voxel_gi.set_bounds(AABB(Vector3(-10, -10, -10), Vector3(20, 20, 20)))
    voxel_gi.set_cell_size(0.25)
    voxel_gi.bake()
```

---

## Related Classes

- **VisualInstance3D** – Base class for 3D visual nodes.  
- **Node3D** – 3D spatial node.  
- **AABB** – Axis‑aligned bounding box used by the probe.  

---