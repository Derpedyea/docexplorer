**QuadMesh** – Godot Engine (stable) documentation

---

### Description
`QuadMesh` is a primitive mesh that represents a 2‑D square (quad) that always faces the camera. It is a simple, fast way to create a rectangular surface that can be used for UI elements, sprites, or simple geometry.

The mesh is **always axis‑aligned** and can be positioned, scaled, or rotated like any other `MeshInstance3D`. It is ideal for UI, billboard objects, or simple debugging geometry.

---

### Inheritance

```
Object
 └─ RefCounted
     └─ Resource
         └─ Mesh
             └─ PrimitiveMesh
                 └─ PlaneMesh
                     └─ QuadMesh
```

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **size** | `Vector2` | `(1, 1)` | Width and height of the quad in local space. |
| **centered** | `bool` | `true` | If `true`, the quad is centered around the origin. If `false`, the quad's lower‑left corner is at the origin. |
| **material_override** | `Material` | `null` | Optional material that overrides the default one. |

> **Note:** The `size` and `centered` properties can also be set via the editor inspector.

---

### Methods

| Method | Arguments | Returns | Description |
|--------|-----------|---------|-------------|
| `new()` | – | `QuadMesh` | Constructor. |
| `set_size(size: Vector2)` | `size: Vector2` | – | Sets the size of the quad. |
| `get_size() -> Vector2` | – | `Vector2` | Returns the current size. |
| `set_centered(centered: bool)` | `centered: bool` | – | Enables or disables centering. |
| `is_centered() -> bool` | – | `bool` | Returns whether the quad is centered. |
| `get_mesh()` | – | `ArrayMesh` | Returns a copy of the underlying `ArrayMesh`. |
| `get_mesh_data()` | – | `Dictionary` | Returns the mesh data (vertices, indices, etc.). |

> **Tip:** In Godot 4, `QuadMesh` is a `Mesh` subclass, so it can be used with any `MeshInstance3D`, `MeshInstance2D`, or `MeshInstance2D`‑derived node.

---

### Signals

`QuadMesh` does not emit any signals.

---

### Usage Example (GDScript)

```gdscript
# Create a QuadMesh and set its size
var quad = QuadMesh.new()
quad.size = Vector2(2, 3)      # 2 units wide, 3 units tall
quad.centered = false         # origin at lower‑left corner

# Add the quad to a MeshInstance3D node
var mesh_instance = MeshInstance3D.new()
mesh_instance.mesh = quad
mesh_instance.material_override = preload("res://materials/quad_material.tres")
add_child(mesh_instance)
```

---

### Common Use Cases

* **Billboard UI** – Render 2‑D UI elements in a 3‑D world.
* **Debug Geometry** – Quick visualization of planar surfaces.
* **Sprite Replacement** – For lightweight 3‑D sprites that don't need a full `Sprite3D` node.
* **2‑D Game Layers** – Use in 3‑D space for parallax or layering effects.

---

### See Also

- [PlaneMesh](https://docs.godotengine.org/en/stable/classes/class_planemesh.html) – Base class for planar primitives.
- [PrimitiveMesh](https://docs.godotengine.org/en/stable/classes/class_primitivemesh.html) – The generic primitive mesh type.
- [ArrayMesh](https://docs.godotengine.org/en/stable/classes/class_arraymesh.html) – Low‑level mesh builder (useful if you need custom geometry).
- [MeshInstance3D](https://docs.godotengine.org/en/stable/classes/class_meshinstance3d.html) – Node that renders a `Mesh`.

---