**Note:** The following Markdown is a simplified representation of the official Godot Engine class reference page for `MultiMeshInstance3D`. It captures the key sections that typically appear on the page: description, inheritance tree, signals, properties, methods, and the available constructors.  The actual Godot documentation contains more detailed information, examples and additional metadata which has been omitted here for brevity.  

---  

# MultiMeshInstance3D

> **Inheritance tree**  
> `Object` → `Node` → `Node3D` → `VisualInstance3D` → `GeometryInstance3D` → `MultiMeshInstance3D`

`MultiMeshInstance3D` is a specialized node that efficiently instantiates a large number of identical meshes (`MultiMesh`). It is commonly used for particle systems, foliage, crowds, or any scenario where many copies of a single mesh need to be rendered with a small amount of CPU overhead.

---

## Signals

| Signal | Description |
|--------|-------------|
| `mesh_changed` | Emitted when the `multimesh` resource changes. |
| `transform_changed` | Emitted when the per‑instance transform data is modified. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `multimesh` | :class:`MultiMesh` | `null` | The `MultiMesh` resource that contains all instance data. |
| `instance_count` | `int` | `0` | Number of instances in the current `MultiMesh`. |
| `use_baked_light` | `bool` | `false` | Whether to use baked light for each instance. |
| `use_dynamic_lighting` | `bool` | `true` | Whether to allow dynamic lighting on each instance. |
| `use_occlusion_cull` | `bool` | `true` | Whether to allow per‑instance occlusion culling. |

> **Note:** Some properties are only available when running in the editor or when the `MultiMesh` is edited from the inspector.

---

## Methods

> All methods are inherited from :class:`GeometryInstance3D` unless noted below.

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_instance_transform` | `set_instance_transform(idx: int, transform: Transform3D)` | Sets the transform for a single instance. |
| `get_instance_transform` | `get_instance_transform(idx: int) → Transform3D` | Returns the transform of a single instance. |
| `set_instance_custom_data` | `set_instance_custom_data(idx: int, data: PackedByteArray)` | Sets custom per‑instance data (e.g., color). |
| `get_instance_custom_data` | `get_instance_custom_data(idx: int) → PackedByteArray` | Retrieves per‑instance custom data. |
| `set_visible` | `set_visible(visible: bool)` | Controls whether the instance is rendered. |
| `set_draw_mode` | `set_draw_mode(mode: int)` | Changes the drawing mode (e.g., `DRAW_WIREFRAME`). |
| `get_draw_mode` | `get_draw_mode() → int` | Returns the current drawing mode. |
| `set_surface_override_material` | `set_surface_override_material(mat: Material)` | Overrides the material used for rendering. |
| `get_surface_override_material` | `get_surface_override_material() → Material` | Returns the material override. |
| `set_instance_custom_aabb` | `set_instance_custom_aabb(idx: int, aabb: AABB)` | Assigns a custom axis‑aligned bounding box for an instance. |
| `get_instance_custom_aabb` | `get_instance_custom_aabb(idx: int) → AABB` | Retrieves the custom AABB. |
| `set_instance_visible` | `set_instance_visible(idx: int, visible: bool)` | Enables or disables a specific instance. |
| `is_instance_visible` | `is_instance_visible(idx: int) → bool` | Checks if a specific instance is visible. |
| `update` | `update()` | Forces a redraw of the instances. |

> **Editor‑Only Convenience**  
> In the editor, `MultiMeshInstance3D` can be edited through the inspector. Dragging the mesh resource onto the `multimesh` property will automatically create a new `MultiMesh` with one instance.  

---

## Constructor

```gdscript
new() -> MultiMeshInstance3D
```

Creates a new `MultiMeshInstance3D` node.  
> After creation, assign a `MultiMesh` resource and set `instance_count` to the number of copies you wish to render.

---

## Example (GDScript)

```gdscript
@tool
extends MultiMeshInstance3D

func _ready():
    var mesh = preload("res://my_mesh.tres")
    var multimesh = MultiMesh.new()
    multimesh.mesh = mesh
    multimesh.instance_count = 100

    # Populate instance transforms
    for i in range(multimesh.instance_count):
        var t = Transform3D()
        t.origin = Vector3(randf() * 10, 0, randf() * 10)
        multimesh.set_instance_transform(i, t)

    self.multimesh = multimesh
```

This script creates 100 instances of `my_mesh.tres` randomly positioned in a 10×10 area.  

---

## Documentation Links

* [Godot 4.0 API reference – MultiMeshInstance3D](https://docs.godotengine.org/en/stable/classes/class_multimeshinstance3d.html)
* [Multimesh](https://docs.godotengine.org/en/stable/classes/class_multimesh.html)
* [GeometryInstance3D](https://docs.godotengine.org/en/stable/classes/class_geometryinstance3d.html)

---  

**End of `MultiMeshInstance3D` class reference.**