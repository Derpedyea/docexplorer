# BoxShape3D

A 3‑D box shape used for physics collision.

> **Inherited from:** `Shape3D`

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `extents` | `Vector3` | `(1, 1, 1)` | Half‑size of the box along the X, Y, and Z axes. |

> **Note:** Changing `extents` updates the collision shape used by physics bodies.

---

## Methods

| Method | Signature | Returns | Description |
|--------|-----------|---------|-------------|
| `set_extents(extents: Vector3)` | `void` | – | Sets the box's half‑size. |
| `get_extents() -> Vector3` | `Vector3` | – | Returns the current half‑size. |
| `get_debug_mesh()` | `ArrayMesh` | – | Returns a mesh that can be used for visual debugging. *(Read‑only, internal use in editor)* |

---

## Example

```gdscript
# Create a BoxShape3D and set its size
var box = BoxShape3D.new()
box.extents = Vector3(2, 1, 0.5)

# Assign the shape to a collision shape node
var collision = CollisionShape3D.new()
collision.shape = box
add_child(collision)
```

---

## Related Classes

- [Shape3D](../classes/class_shape3d.html)
- [CollisionShape3D](../classes/class_collisionshape3d.html)

---