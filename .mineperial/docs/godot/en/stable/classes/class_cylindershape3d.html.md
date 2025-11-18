**CylinderShape3D – Godot Engine (stable) documentation**

> A 3‑D cylinder shape, intended for use in physics collision.

---

## Inheritance

```
Object
 └─ RefCounted
    └─ Resource
       └─ Shape3D
          └─ CylinderShape3D
```

`CylinderShape3D` is a resource that can be used with a `CollisionShape3D` node to define a cylindrical collision volume.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `height` | `float` | `2.0` | Height of the cylinder (along the Y axis). |
| `radius` | `float` | `1.0` | Radius of the cylindrical base. |

> Both properties are editable in the inspector and can be set programmatically.

```gdscript
var shape = CylinderShape3D.new()
shape.height = 4.0
shape.radius = 1.5
```

---

## Methods

| Method | Return type | Parameters | Description |
|--------|-------------|------------|-------------|
| `get_debug_mesh()` | `Mesh` | – | Returns a `PrimitiveMesh` for visual debugging purposes. |
| `set_height(height: float)` | `void` | `height` | Sets the cylinder’s height. |
| `set_radius(radius: float)` | `void` | `radius` | Sets the cylinder’s radius. |
| `get_height()` | `float` | – | Returns the current height. |
| `get_radius()` | `float` | – | Returns the current radius. |

> All methods are inherited from `Shape3D` or `Resource`; `get_debug_mesh()` is overridden to provide a simple visual representation of the shape.

---

## Signals

`CylinderShape3D` does not emit any signals.

---

## Example Usage

```gdscript
# Create a physics body with a cylindrical collision shape
var body = StaticBody3D.new()
body.name = "Floor"

var collision = CollisionShape3D.new()
collision.shape = CylinderShape3D.new()
collision.shape.radius = 5.0
collision.shape.height = 0.5

body.add_child(collision)
```

The above script adds a static body with a flat cylinder that can be used as a simple platform or obstacle.

---

## References

* [CollisionShape3D](https://docs.godotengine.org/en/stable/classes/class_collisionshape3d.html)
* [Shape3D](https://docs.godotengine.org/en/stable/classes/class_shape3d.html)

---