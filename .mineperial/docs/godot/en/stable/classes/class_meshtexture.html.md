**MeshTexture** – Godot Engine Documentation  
===========================================

> **Inherits:** `Texture2D` → `Texture` → `Resource` → `RefCounted` → `Object`

**Description**  
----------------

`MeshTexture` is a simple texture that uses a 3D mesh to render itself. It is mainly useful for drawing flat surfaces that need to follow a non‑rectilinear shape, such as decals or custom UI elements that need a more complex shape than a normal `ImageTexture`.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mesh` | `ArrayMesh` | – | The mesh that will be used for rendering. |
| `material` | `Material` | – | Optional material to apply to the mesh. |
| `uv_scale` | `Vector2` | `Vector2(1, 1)` | Scale applied to UV coordinates. |
| `uv_offset` | `Vector2` | `Vector2(0, 0)` | Offset applied to UV coordinates. |

> *Note: Some of these properties are only available in Godot 4.x. In Godot 3.x they may differ or be absent.*

---

### Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `get_mesh()` | `ArrayMesh` | Returns the current mesh. |
| `set_mesh(ArrayMesh mesh)` | `void` | Assigns a new mesh. |
| `get_material()` | `Material` | Returns the material used. |
| `set_material(Material material)` | `void` | Sets a new material. |
| `get_uv_scale()` | `Vector2` | Returns the UV scale. |
| `set_uv_scale(Vector2 scale)` | `void` | Sets the UV scale. |
| `get_uv_offset()` | `Vector2` | Returns the UV offset. |
| `set_uv_offset(Vector2 offset)` | `void` | Sets the UV offset. |

---

### Signals

`MeshTexture` does not define any custom signals.

---

### Example

```gdscript
# Create a MeshTexture, set a mesh and material, and use it in a Sprite2D.
var mesh_tex = MeshTexture.new()
mesh_tex.mesh = preload("res://my_mesh.tres")
mesh_tex.material = preload("res://my_material.tres")

var sprite = Sprite2D.new()
sprite.texture = mesh_tex
add_child(sprite)
```

---

### Further Reading

- [Texture](https://docs.godotengine.org/en/stable/classes/class_texture.html)
- [Texture2D](https://docs.godotengine.org/en/stable/classes/class_texture2d.html)
- [ArrayMesh](https://docs.godotengine.org/en/stable/classes/class_arraymesh.html)
- [Material](https://docs.godotengine.org/en/stable/classes/class_material.html)

---