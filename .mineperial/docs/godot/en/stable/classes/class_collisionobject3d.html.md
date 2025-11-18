# CollisionObject3D

**Inheritance hierarchy**

```
Object
└─ Node
   └─ Node3D
      └─ CollisionObject3D
```

**Classes that inherit from `CollisionObject3D`**

* `Area3D`
* `PhysicsBody3D`

---

## Overview

`CollisionObject3D` is an *abstract* base class that provides the common functionality for all 3‑D physics objects that participate in collision detection in Godot. The class handles the management of collision shapes, collision layers, and collision masks, as well as enabling or disabling collision on the object.

> **Note** – Because this is an abstract class, it cannot be added to a scene directly. Instead, you should use one of its concrete subclasses such as `Area3D`, `RigidBody3D`, `KinematicBody3D`, or `StaticBody3D`.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `collision_layer` | `int` | `1` | Bitmask defining the layers this object belongs to. |
| `collision_mask` | `int` | `1` | Bitmask defining which layers this object can collide with. |
| `disabled` | `bool` | `false` | If set to `true`, the object is ignored by the physics engine. |
| `contact_monitor` | `bool` | `false` | Whether to emit body/contact signals when collisions occur. |
| `contacts_reported` | `int` | `0` | The maximum number of contacts to report per physics frame. |

> **Tip** – In the editor you can view and edit these properties in the **Inspector** dock while the node is selected.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `body_entered(body)` | `body : Node` | Emitted when another physics body enters this object's collision shape. |
| `body_exited(body)` | `body : Node` | Emitted when a physics body exits the shape. |
| `area_entered(area)` | `area : Area3D` | Emitted when another area enters this object's shape. |
| `area_exited(area)` | `area : Area3D` | Emitted when an area exits the shape. |

> **Usage example** (GDScript)

```gdscript
func _ready():
    body_entered.connect(_on_body_entered)

func _on_body_entered(body):
    print("%s entered %s" % [body.name, name])
```

---

## Methods

> `CollisionObject3D` provides the following API that is common to all 3‑D collision objects. In practice, most of the work is done by the concrete subclasses (e.g., `RigidBody3D`, `Area3D`), so the method list below focuses on the shared functionality.

| Method | Signature | Description |
|--------|-----------|-------------|
| `add_shape(shape : Shape3D)` | `void` | Adds a shape to the collision object. |
| `remove_shape(shape : Shape3D)` | `void` | Removes a previously added shape. |
| `get_shape(index : int) -> Shape3D` | `Shape3D` | Retrieves the shape at the specified index. |
| `get_shape_count() -> int` | `int` | Returns the number of shapes attached. |
| `set_shape(index : int, shape : Shape3D)` | `void` | Replaces a shape at a specific index. |
| `set_shape_transform(index : int, transform : Transform3D)` | `void` | Sets the local transform of a shape. |
| `get_shape_transform(index : int) -> Transform3D` | `Transform3D` | Returns the local transform of a shape. |

> **Tip** – In the editor, collision shapes are typically added via child `CollisionShape3D` or `CollisionPolygon3D` nodes, which internally register themselves with the parent `CollisionObject3D`.

---

## Important Notes

* **Layer & Mask Settings** – Collision layers and masks are 32‑bit bitmasks. Use the `layer` and `mask` editor fields to manage which objects interact. For example, setting `collision_layer = 1` (bit 0) and `collision_mask = 2` (bit 1) means the object will only collide with objects on layer 1 that are on mask 2.
* **Disabling Collisions** – The `disabled` property can be toggled at runtime to temporarily turn off collision detection for a node.
* **Contact Monitoring** – Enable `contact_monitor` and set `contacts_reported` to a positive integer to receive collision callbacks via the signals listed above.
* **Collision Shapes** – For 3‑D physics you normally create a separate `CollisionShape3D` or `CollisionPolygon3D` node and attach it to the `CollisionObject3D`. This approach keeps shape data separate and allows you to edit it directly in the editor.

---

## References

* [Godot Docs – CollisionObject3D](https://docs.godotengine.org/en/stable/classes/class_collisionobject3d.html)  
* [Godot Docs – CollisionShape3D](https://docs.godotengine.org/en/stable/classes/class_collisionshape3d.html)  
* [Godot Docs – Area3D](https://docs.godotengine.org/en/stable/classes/class_area3d.html)  
* [Godot Docs – RigidBody3D](https://docs.godotengine.org/en/stable/classes/class_rigidbody3d.html)

---