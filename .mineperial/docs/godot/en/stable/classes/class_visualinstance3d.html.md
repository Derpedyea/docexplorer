**VisualInstance3D – Godot Engine Documentation (stable)**  

---

## Description
`VisualInstance3D` is the base class for all 3D visual objects that can be rendered in the scene.  
It provides common functionality such as visibility, shadow casting, light mapping and
material handling that is inherited by many specialized nodes (e.g. `MeshInstance3D`, `Light3D`,
`OccluderInstance3D`, etc.).

### Inherits
- **Node3D** &lt; Node &lt; Object  

### Inherited by
- Decal  
- FogVolume  
- GeometryInstance3D  
- GPUParticlesAttractor3D  
- GPUParticlesCollision3D  
- Light3D  
- LightmapGI  
- OccluderInstance3D  
- OpenXRVisibilityLayer  
- … (other 3‑D visual nodes)

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **material_override** | `Material` | `null` | Material that overrides the default surface material. |
| **material_overlay** | `Material` | `null` | Material that is applied on top of the normal surface material. |
| **visible** | `bool` | `true` | Whether the instance is visible. |
| **cast_shadow** | `int` (`ShadowCastingSetting`) | `SHADOW_CASTING_SETTING_OFF` | Shadow casting mode for the instance. |
| **shadow_mode** | `int` (`ShadowMode`) | `SHADOW_MODE_EARLY` | Shadow mode used during rendering. |
| **occluder** | `Occluder3D` | `null` | Occluder used for this instance. |
| **occluder_scale** | `Vector3` | `Vector3(1, 1, 1)` | Scale applied to the occluder. |
| **occluder_transform** | `Transform3D` | `Transform3D()` | Custom transform for the occluder. |
| **occluder_cull_mask** | `int` | `0xFFFFFFFF` | Layer mask used for occlusion culling. |
| **occluder_light_mask** | `int` | `0xFFFFFFFF` | Light mask used for occlusion. |
| **occluder_blend_mode** | `int` (`OccluderBlendMode`) | `OC_INCLUDE` | Blend mode for the occluder. |

> **Note**: Some properties are only relevant to certain subclasses (e.g. `mesh` on
> `MeshInstance3D`). They are not listed here because they are defined in the derived
> classes.

---

## Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| **is_visible_in_tree()** | – | `bool` | Returns `true` if the node is visible in the current view. |
| **force_update_transform()** | – | – | Forces the node to re‑apply its global transform. Useful when the
| | | | transform changed externally. |
| **set_transform_local_to_parent(Transform3D)** | `Transform3D` | – | Sets the local transform relative to the parent. |
| **get_transform_local_to_parent()** | – | `Transform3D` | Returns the local transform. |
| **set_global_transform(Transform3D)** | `Transform3D` | – | Sets the global transform. |
| **get_global_transform()** | – | `Transform3D` | Returns the global transform. |
| **get_aabb()** | – | `AABB` | Returns the axis‑aligned bounding box of the instance. |
| **get_bounding_box()** | – | `AABB` | Returns the bounding box including child nodes. |
| **get_mesh()** | – | `Mesh` | (Only present in subclasses that contain a mesh.) |
| **set_mesh(Mesh)** | `Mesh` | – | (Only present in subclasses that contain a mesh.) |
| **get_surface_material_override(int index)** | `int` | `Material` | Returns the override material for the given surface. |
| **set_surface_material_override(int index, Material)** | `int`, `Material` | – | Sets the override material for a specific surface. |

> *All methods that are not applicable to `VisualInstance3D` itself are defined
> in its subclasses.*

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| **visibility_changed** | – | Emitted when the visibility of the instance changes. |
| **material_changed** | – | Emitted when the material(s) of the instance change. |
| **shadow_changed** | – | Emitted when the shadow casting settings change. |

---

## Usage Examples

```gdscript
# GDScript example
var visual = VisualInstance3D.new()
visual.material_override = preload("res://my_material.tres")
visual.visible = true
add_child(visual)
```

```csharp
// C# example
var visual = new VisualInstance3D();
visual.MaterialOverride = (Material)ResourceLoader.Load("res://my_material.tres");
visual.Visible = true;
AddChild(visual);
```

---

### Reference Links

- [Godot 4 Docs – Class Reference](https://docs.godotengine.org/en/stable/classes/class_visualinstance3d.html)  
- [Node3D – Base class](https://docs.godotengine.org/en/stable/classes/class_node3d.html)  

---