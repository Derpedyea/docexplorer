# MeshInstance2D

**Class**: `MeshInstance2D`  
**Inheritance**: `Node2D` → `CanvasItem` → `Node` → `Object`  

A `MeshInstance2D` is a node that renders a 2D mesh. It can be added to a scene and configured in the editor or by code. The node automatically creates a `MeshInstance2D` for every `Mesh` resource used in the inspector, but you can also create one manually in GDScript or C#.

---

## Overview

| Feature | Description |
|---------|-------------|
| **Node type** | 2‑D visual node |
| **Parent** | `Node2D` |
| **Primary resource** | `Mesh` |

The node is drawn using the same rendering pipeline as other `CanvasItem`s, so it inherits all the usual 2‑D visual properties (transform, modulate, opacity, etc.).

---

## Properties

| Property | Type | Default | Notes |
|----------|------|---------|-------|
| `mesh` | `Mesh` | `null` | The mesh that will be drawn. When set, the node re‑initializes its internal geometry. |
| `material` | `Material` | `null` | Material used for rendering the mesh. |
| `normal_map` | `Texture2D` | `null` | Normal‑map texture for the material. |
| `cast_shadow` | `bool` | `false` | Whether the node should cast shadows in 3‑D contexts. |
| `draw_passes` | `int` | `0` | Number of passes to draw. |
| `modulate` | `Color` | `Color(1,1,1,1)` | Color tint applied to the mesh. |
| `z_index` | `int` | `0` | Depth ordering relative to other CanvasItem nodes. |
| `z_as_relative` | `bool` | `true` | Whether `z_index` is relative to parent. |
| `offset` | `Vector2` | `Vector2(0,0)` | Offset of the mesh origin relative to the node's position. |

> **Tip**: The `mesh` property can be set directly in the inspector, or via script:  
> ```gdscript
> var box = MeshInstance2D.new()
> box.mesh = QuadMesh.new()
> add_child(box)
> ```

---

## Signals

None.

---

## Methods

| Method | Description |
|--------|-------------|
| `set_mesh(mesh : Mesh)` | Assign a mesh to the instance. |
| `get_mesh() -> Mesh` | Returns the currently assigned mesh. |
| `set_material(material : Material)` | Sets the rendering material. |
| `get_material() -> Material` | Gets the current material. |
| `set_normal_map(normal_map : Texture2D)` | Sets a normal‑map texture. |
| `get_normal_map() -> Texture2D` | Retrieves the current normal‑map. |
| `set_offset(offset : Vector2)` | Adjusts the mesh origin offset. |
| `get_offset() -> Vector2` | Returns the current offset. |
| `set_cast_shadow(cast : bool)` | Enables/disables 3‑D shadow casting. |
| `has_cast_shadow() -> bool` | Checks whether shadow casting is enabled. |
| `set_draw_passes(passes : int)` | Configures how many material passes to render. |
| `get_draw_passes() -> int` | Retrieves the number of draw passes. |

> **Example – Creating a procedural rectangle**  
> ```gdscript
> var rect = MeshInstance2D.new()
> var mesh = QuadMesh.new()
> mesh.size = Vector2(100, 50)
> rect.mesh = mesh
> rect.modulate = Color(1,0,0,1)   # red
> add_child(rect)
> ```

---

## Usage in the Editor

1. **Add a `MeshInstance2D` node** to your scene.  
2. In the inspector, click **Mesh > Load** to assign a `.mesh` resource or use the *New…* button to create one.  
3. Adjust `offset`, `material`, and `modulate` to fine‑tune appearance.  
4. Position the node using its transform properties (position, rotation, scale).

---

## Common Pitfalls

| Problem | Cause | Fix |
|---------|-------|-----|
| Mesh not visible | `mesh` is `null` or the mesh has no surface | Assign a proper `Mesh` resource. |
| Wrong orientation | Offset/rotation values mis‑set | Use `offset` to align the mesh origin to the node position. |
| Performance issue | Complex meshes drawn every frame | Cache geometry or use `StaticMesh` if the mesh is unchanging. |

---

## Related Classes

- [`Mesh`](../classes/class_mesh.html) – the resource that holds geometry data.
- [`QuadMesh`](../classes/class_quadmesh.html) – a simple rectangular mesh.
- [`ArrayMesh`](../classes/class_arraymesh.html) – flexible mesh builder.
- [`CanvasItem`](../classes/class_canvasitem.html) – base class for all 2‑D nodes.

---

## Documentation Notes

* The `MeshInstance2D` node is part of the 2‑D rendering system and can be combined with other `CanvasItem` children (e.g., `Sprite`, `ColorRect`).
* It supports per‑pass material overriding, which is useful for multi‑texture effects.
* For 3‑D shadows you must also enable a 3‑D light; the node itself only flags whether it should be considered for shadow mapping.

---