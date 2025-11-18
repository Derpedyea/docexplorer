# MultiMeshInstance2D

> **Node that instances a `MultiMesh` resource in 2D.**  
> `MultiMeshInstance2D` is a specialized node that efficiently draws many
> copies of a single `CanvasItem` (usually a `Sprite2D`, `AnimatedSprite2D`,
> etc.) using a single draw call. It is especially useful for particle
> effects, foliage, crowds, and any scenario where many identical or
> similar objects need to be rendered.

---

## Inheritance

```
Object
 └─ Node
      └─ CanvasItem
           └─ Node2D
                └─ MultiMeshInstance2D
```

---

## Description

The node holds a reference to a `MultiMesh` resource.  
The `MultiMesh` contains an array of transforms (and optionally colors,
etc.) that describe each instance. All instances share the same
mesh, material and other render‑state properties, which makes them far
more efficient than creating a large number of independent `Sprite2D`
nodes.

Typical use‑cases:

* **Particles** – replace the high‑level `GPUParticles2D` when you need
  fully deterministic or scripted behavior.
* **Foliage** – trees, grass, rocks.
* **Crowds** – NPCs or enemies that share a simple sprite.
* **Custom effects** – e.g. weather, debris, or any other repeating
  geometry.

---

## Properties

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| **multimesh** | `MultiMesh` | `null` | The `MultiMesh` resource to instance. |
| **visible** | `bool` | `true` | Visibility flag (inherited from `CanvasItem`). |
| **z_index** | `int` | `0` | Drawing order relative to other `CanvasItem`s. |
| **z_as_relative** | `bool` | `true` | Whether `z_index` is relative to parent. |
| **global_position** | `Vector2` | `Vector2(0,0)` | Global position (inherited from `Node2D`). |
| **position** | `Vector2` | `Vector2(0,0)` | Local position. |
| **scale** | `Vector2` | `Vector2(1,1)` | Local scale. |
| **rotation** | `float` | `0.0` | Local rotation (radians). |
| **modulate** | `Color` | `Color(1,1,1,1)` | Modulation color. |
| **custom_aabb** | `AABB` | `AABB()` | Override the computed AABB. |
| **visible_in_parent** | `bool` | `true` | Whether to be visible when the parent is hidden. |

> *All other properties come from `CanvasItem` and `Node2D`.*

---

## Methods

> **Note** – Most methods are inherited from `Node2D` / `CanvasItem`.  
> Only those that directly affect the `MultiMesh` are listed.

| Method | Return | Parameters | Description |
| ------ | ------ | ---------- | ----------- |
| `set_multimesh(multimesh: MultiMesh) -> void` | `void` | `multimesh` | Assigns a `MultiMesh` resource. |
| `get_multimesh() -> MultiMesh` | `MultiMesh` | – | Returns the current `MultiMesh`. |
| `set_instance_color(index: int, color: Color) -> void` | `void` | `index`, `color` | Sets the per‑instance color (if enabled). |
| `get_instance_color(index: int) -> Color` | `Color` | `index` | Gets the per‑instance color. |
| `set_instance_transform(index: int, transform: Transform2D) -> void` | `void` | `index`, `transform` | Sets the transform for a specific instance. |
| `get_instance_transform(index: int) -> Transform2D` | `Transform2D` | `index` | Retrieves the transform of a specific instance. |
| `set_instance_custom_data(index: int, data: Variant) -> void` | `void` | `index`, `data` | Sets custom data for an instance. |
| `get_instance_custom_data(index: int) -> Variant` | `Variant` | `index` | Retrieves the custom data. |
| `set_visible(bool)` | – | – | (inherited) |
| `get_visible() -> bool` | – | – | (inherited) |

> *If the `MultiMesh` uses **custom data** or **instance colors**,
> enable the relevant flags on the `MultiMesh` resource before calling
> the per‑instance setters.*

---

## Signals

| Signal | Arguments | Description |
| ------ | --------- | ----------- |
| `mesh_changed()` | – | Emitted when the underlying `MultiMesh` resource is changed. |

---

## Usage Example (GDScript)

```gdscript
extends MultiMeshInstance2D

@export var sprite : Texture2D

func _ready():
    # Create a MultiMesh that holds 1000 instances.
    var mm = MultiMesh.new()
    mm.mesh = Sprite2D.new().mesh  # or a custom Mesh
    mm.instance_count = 1000
    mm.transform_format = MultiMesh.TRANSFORM_2D
    mm.color_format = MultiMesh.COLOR_RGB8

    # Set per‑instance transforms.
    for i in range(mm.instance_count):
        var pos = Vector2(randi() % 500, randi() % 400)
        var t = Transform2D(0, pos)
        mm.set_instance_transform(i, t)
        mm.set_instance_color(i, Color(randf(), randf(), randf()))

    # Assign the MultiMesh to the node.
    multimesh = mm
```

---

## Common Pitfalls

| Issue | Explanation | Fix |
| ----- | ----------- | --- |
| **Large number of instances cause memory usage spikes** | Each instance consumes memory for its transform (and optionally color/data). | Reduce `instance_count`, or use `MultiMesh` with the *GPU* variant (`MultiMesh` has a `use_colors` flag). |
| **No drawing after changing `multimesh`** | The `MultiMesh` must be re‑assigned after changes to the mesh itself. | Call `multimesh = your_mm` again or use `queue_redraw()`. |
| **Transform changes not reflected** | `set_instance_transform()` must be used *after* the node has entered the scene tree. | Call the setter in `_ready()` or later. |

---

## Related Classes

* `MultiMesh` – The resource that stores the instance data.
* `MultiMeshInstance3D` – 3D analogue of this node.
* `GPUParticles2D` – For particle effects; offers many built‑in
  functionalities that `MultiMeshInstance2D` does not.
* `CanvasLayer` – Use together if you want a layer that is independent
  from the main viewport.

---

## See Also

* [MultiMesh](../classes/class_multimesh.html)
* [CanvasItem](../classes/class_canvasitem.html)
* [Node2D](../classes/class_noded2d.html)
* [Rendering](../tutorials/rendering.html) – General GPU‑instancing notes.

---