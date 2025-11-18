**AnimatableBody3D**  
======================

> *A 3‑D physics body that cannot be moved by external forces. When moved manually, it affects other bodies in the physics space. Useful for animated physics objects such as moving platforms.*

Inheritance hierarchy
---------------------

```
Object
 └─ Node
    └─ Node3D
       └─ CollisionObject3D
          └─ PhysicsBody3D
             └─ StaticBody3D
                └─ AnimatableBody3D
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `use_kinematic_collision` | `bool` | `false` | If `true`, the body will collide with other physics bodies even while it is not being moved by a physics controller. |
| `collision_layer` | `int` | `1` | Layer mask for this body. |
| `collision_mask` | `int` | `1` | Mask defining which layers this body collides with. |

> **Note:** Changing these properties at runtime requires the physics engine to be updated; use the provided setter methods for safe manipulation.

### Methods

| Method | Return type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_use_kinematic_collision(bool enable)` | `void` | `enable` | Enable or disable kinematic collision. |
| `is_using_kinematic_collision() -> bool` | `bool` |  | Returns current kinematic collision state. |
| `get_colliding_bodies() -> Array[PhysicsBody3D]` | `Array` |  | Returns an array of bodies currently colliding with this body. |
| `apply_central_force(Vector3 force)` | `void` | `force` | Applies a force at the body’s center (does **not** affect a static body but can be used for kinematic bodies in derived classes). |
| `move_and_collide(Transform3D new_transform)` | `KinematicCollision3D?` | `new_transform` | Moves the body to `new_transform` and reports collision data if any. |

### Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `body_entered(PhysicsBody3D body)` | `body` | Emitted when another body starts colliding with this `AnimatableBody3D`. |
| `body_exited(PhysicsBody3D body)` | `body` | Emitted when a body stops colliding. |

### Example Usage

```gdscript
extends AnimatableBody3D

@onready var sprite = $Sprite3D

func _ready():
    set_use_kinematic_collision(true)

func _physics_process(delta):
    var target = global_transform.origin + Vector3(0, 0, -10 * delta)
    move_and_collide(Transform3D(Basis(), target))
```

In this example the body moves forward automatically every frame while still colliding with other physics objects.

### Related Nodes

* **StaticBody3D** – Base class for static physics bodies.  
* **KinematicBody3D** – Body that can be moved through code but is affected by physics.  
* **RigidBody3D** – Fully simulated physics body.

### Resources

* [Godot Docs: StaticBody3D](https://docs.godotengine.org/en/stable/classes/class_staticbody3d.html)  
* [Godot Docs: KinematicBody3D](https://docs.godotengine.org/en/stable/classes/class_kinematicbody3d.html)  
* [Godot Docs: PhysicsBody3D](https://docs.godotengine.org/en/stable/classes/class_physicsbody3d.html)

--- 

*The above information is extracted from the official Godot Engine documentation for the `AnimatableBody3D` class.*