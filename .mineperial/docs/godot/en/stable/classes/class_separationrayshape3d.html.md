**SeparationRayShape3D**  
*Godot Engine – Class Reference (stable)*  

---

## Overview
`SeparationRayShape3D` is a 3‑D physics shape that behaves like a ray.  
It is used to **separate a body from any collider it contacts** by pushing it along the ray's axis.  
This shape is often combined with a `Shape3D` collision node (e.g., `CollisionShape3D`) to give an object a “gap‑separating” collision volume.

> *Inherits:* `Shape3D` → `Resource` → `RefCounted` → `Object`  

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `length` | `float` | `0.5` | Length of the ray in local space. |
| `shape`  | `Shape3D` | `null` | Optional secondary shape that is appended at the end of the ray. Useful for giving the ray a small “capsule” or “box” shape to improve collision detection. |

> **Notes**
> * The `shape` property is only available in Godot 4.2+ and is ignored by earlier versions.  
> * `length` must be positive; a value of `0` results in a zero‑length ray.

---

## Methods

### `_get_support` *(override)*

```gdscript
func _get_support(direction: Vector3) -> Vector3
```

Returns the point on the shape that is furthest in `direction`.  
Implemented by the physics engine; not meant for direct use.

### `get_bounding_box` *(override)*

```gdscript
func get_bounding_box() -> AABB
```

Returns an axis‑aligned bounding box that fully contains the ray shape. Useful for broad‑phase collision checks.

---

## Example Usage

```gdscript
var ray_shape = SeparationRayShape3D.new()
ray_shape.length = 2.0
ray_shape.shape = BoxShape3D.new()

var collision = CollisionShape3D.new()
collision.shape = ray_shape
add_child(collision)
```

The above creates a 2‑unit ray with a box at its tip.  
Attach the `CollisionShape3D` to a `RigidBody3D` or `StaticBody3D` to use it for physics separation.

---

## Related Classes

- [`SeparationRayShape2D`](https://docs.godotengine.org/en/stable/classes/class_separationrayshape2d.html) – 2‑D counterpart.  
- [`RayCast3D`](https://docs.godotengine.org/en/stable/classes/class_raycast3d.html) – for detecting intersections.  

---