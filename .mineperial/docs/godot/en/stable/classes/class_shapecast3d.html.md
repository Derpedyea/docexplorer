**ShapeCast3D**  
*(Godot Engine 4.x – Class Reference)*

---

## Inheritance

```
ShapeCast3D
  └─ Node3D
        └─ Node
              └─ Object
```

---

## Description

`ShapeCast3D` is a node that performs a *shape cast* – it sweeps a 3‑D shape along a direction and reports collisions.  
Unlike a raycast, the cast shape can be any physics shape (box, sphere, convex hull, etc.), giving more accurate collision detection for objects that are not point‑based.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `bool` | `true` | If `false`, the node does not perform a cast. |
| `shape` | `Shape3D` | `null` | The shape to sweep. Must be set before enabling. |
| `shape_owner` | `int` | `-1` | Internal owner ID for the shape. |
| `cast_to` | `Vector3` | `Vector3(0, 0, 0)` | Target position relative to the node’s origin. The cast is performed from the origin to this vector. |
| `collision_mask` | `int` | `0xFFFFFFFF` | Bitmask of collision layers to consider. |
| `exclude_parent` | `bool` | `false` | If `true`, the node’s own parent is excluded from collision checks. |
| `collider` | `Object` (read‑only) | `null` | The last object the shape collided with (if any). |
| `collider_shape` | `int` (read‑only) | `-1` | Index of the shape of the collider that was hit. |
| `collider_position` | `Vector3` (read‑only) | `Vector3()` | Position of the collision point in global coordinates. |
| `collider_normal` | `Vector3` (read‑only) | `Vector3()` | Normal of the surface at the collision point. |
| `collider_hinge` | `Vector3` (read‑only) | `Vector3()` | If the collider is a hinge joint, this is the hinge point. |
| `collider_shape_center` | `Vector3` (read‑only) | `Vector3()` | Local center of the hit shape. |

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `hit` | `Object collider, int shape_index, Vector3 position, Vector3 normal, Vector3 hinge` | Emitted each physics frame when a collision is detected. |

---

## Methods

> All methods are inherited from `Node3D` and `Object` unless otherwise noted.

### `bool is_colliding()`

Returns `true` if the shape cast currently intersects any `CollisionObject3D`.

### `Object get_collider()`

Gets the object the shape is colliding with.

### `int get_collider_shape()`

Gets the shape index of the collider (useful for compound shapes).

### `Vector3 get_collider_position()`

Position of the collision point in global coordinates.

### `Vector3 get_collider_normal()`

Surface normal at the collision point.

### `Vector3 get_collider_hinge()`

Hinge point if the collider is a hinge joint.

### `Vector3 get_collider_shape_center()`

Center of the hit shape in local space.

### `void set_shape(Shape3D shape)`

Assigns the shape to cast. The shape must be a child of this node or be a resource.

### `Shape3D get_shape()`

Returns the current cast shape.

### `void set_shape_owner_id(int id)`

Internal helper to set the owner ID for the shape.

### `int get_shape_owner_id()`

Returns the owner ID for the shape.

### `void set_cast_to(Vector3 to)`

Sets the target point for the cast.

### `Vector3 get_cast_to()`

Gets the current `cast_to` vector.

---

## Usage Example

```gdscript
# Create a ShapeCast3D and add it as a child
var cast = ShapeCast3D.new()
cast.shape = BoxShape3D.new()
cast.shape.extents = Vector3(0.5, 0.5, 0.5)
add_child(cast)

# Enable the cast and set a target
cast.enabled = true
cast.cast_to = Vector3(0, 0, 10)

func _physics_process(delta):
    if cast.is_colliding():
        var hit_obj = cast.get_collider()
        print("Hit: %s" % hit_obj.name)
```

---

## Important Notes

* **Performance** – Shape casts are more expensive than ray casts because they involve a full collision check of the shape. Use sparingly for high‑frequency checks.
* **Shape Reuse** – If you use the same shape on multiple casts, assign it via `Resource` or `load()` to avoid duplicating it in memory.
* **Layer Mask** – Adjust `collision_mask` to exclude irrelevant layers and reduce computation.

---