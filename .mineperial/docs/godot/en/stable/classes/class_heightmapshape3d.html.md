**HeightMapShape3D – Godot Engine (stable) documentation**

---

### Overview

A **3D heightmap shape** used for physics collision.  
It is typically employed to provide a collision surface for a height‑mapped terrain.

#### Inheritance

```
Shape3D → Resource → RefCounted → Object
```

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **height_map** | `Image` | – | The height map image that defines the shape. |
| **cell_size** | `Vector2` | `(1, 1)` | Size of one cell in world units. |
| **use_as_sdf** | `bool` | `false` | If `true`, the heightmap is interpreted as a signed distance field. |

> *Note:* These are the most common properties; check the full API reference for additional ones.

---

### Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_height_map(image: Image)` | `void` | `image` | Sets the height map image. |
| `get_height_map()` | `Image` | – | Returns the current height map image. |
| `set_cell_size(size: Vector2)` | `void` | `size` | Sets the cell size. |
| `get_cell_size()` | `Vector2` | – | Gets the current cell size. |
| `set_use_as_sdf(use: bool)` | `void` | `use` | Toggles signed distance field usage. |
| `is_using_sdf()` | `bool` | – | Returns whether SDF is used. |

> **Tip:** For best performance, use a power‑of‑two sized `Image` and keep the texture small.

---

### Example Usage

```gdscript
var shape = HeightMapShape3D.new()
var img = Image.new()
img.load("res://terrain_height.png")   # Load a grayscale height map
shape.set_height_map(img)
shape.set_cell_size(Vector2(0.1, 0.1))
shape.set_use_as_sdf(false)

var collision_shape = CollisionShape3D.new()
collision_shape.shape = shape
add_child(collision_shape)
```

---

### See Also

- [Shape3D](https://docs.godotengine.org/en/stable/classes/class_shape3d.html)
- [CollisionShape3D](https://docs.godotengine.org/en/stable/classes/class_collisionshape3d.html)
- [Image](https://docs.godotengine.org/en/stable/classes/class_image.html)

---