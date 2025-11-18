# CapsuleShape3D

A **CapsuleShape3D** is a 3‑D capsule geometry that can be used for physics collision.  
It is typically attached to a `CollisionShape3D` node to give an object a capsule‑shaped collision volume.

> **Inheritance**  
> `CapsuleShape3D` → `Shape3D` → `Resource` → `RefCounted` → `Object`

---

## Properties

| Property | Type   | Default | Description |
|----------|--------|---------|-------------|
| **radius** | `float` | `0.5` | The radius of the capsule’s circular ends. |
| **height** | `float` | `1.0` | The length of the capsule’s cylindrical part (excluding the two hemispherical caps). |
| **axis** | `int` (enum) | `0` (X) | The axis along which the capsule is stretched. Possible values: `0` (X), `1` (Y), `2` (Z). |
| **rid** | `RID` (read‑only) | – | Resource identifier used internally by the physics server. |

> *All properties are exported, so they can be set in the Inspector and accessed from scripts.*

---

## Methods

`CapsuleShape3D` does not define any additional methods beyond those inherited from `Shape3D`.  
You can manipulate the capsule’s geometry through its properties or by using it in a physics body.

---

## Usage Example

```gdscript
# Create a capsule shape and assign it to a CollisionShape3D
var capsule = CapsuleShape3D.new()
capsule.radius = 0.3
capsule.height = 1.2
capsule.axis = 1   # Align along the Y axis

var collision = CollisionShape3D.new()
collision.shape = capsule
add_child(collision)
```

In C#:

```csharp
var capsule = new CapsuleShape3D();
capsule.Radius = 0.3f;
capsule.Height = 1.2f;
capsule.Axis = 1; // Y

var collision = new CollisionShape3D { Shape = capsule };
AddChild(collision);
```

---

## Typical Use Cases

* **Character Controllers** – Give a humanoid or spherical character a smooth capsule collision that rolls and slides naturally.
* **Physics Bodies** – Attach to a `RigidBody3D` or `StaticBody3D` when the object’s shape is approximated by a capsule.
* **Debugging** – Visualize the shape by enabling the “Show Collision Shapes” option in the editor.

---

## Related Classes

| Class | Description |
|-------|-------------|
| [`Shape3D`](../class_shape3d.html) | Base class for all 3‑D physics shapes. |
| [`CollisionShape3D`](../class_collisionshape3d.html) | Node that holds a `Shape3D` for physics collision. |
| [`ConvexPolygonShape3D`](../class_convexpolygonshape3d.html) | More complex convex shape. |
| [`BoxShape3D`](../class_boxshape3d.html) | Axis‑aligned box shape. |
| [`SphereShape3D`](../class_sphereshape3d.html) | Sphere shape. |

---

## Notes

* The capsule’s total height (including the hemispherical caps) is `height + 2 * radius`.
* Changing the `axis` property will rotate the capsule along the chosen axis.
* For most physics simulations, it is preferable to use the default axis (`Y`) so the capsule behaves like a standing object.

---