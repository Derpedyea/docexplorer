## PhysicsBody2D

`PhysicsBody2D` is an **abstract base class** for 2D game objects affected by physics.  
It is part of Godot Engine’s 2D physics system and is inherited by:

| Derived class | Description |
|---------------|-------------|
| **CharacterBody2D** | A specialized body used for character movement. |
| **RigidBody2D** | A dynamic body that follows physics simulation. |
| **StaticBody2D** | A body that does not move but can collide with others. |

### Inheritance hierarchy
```
Object
└─ Node
   └─ CanvasItem
      └─ Node2D
         └─ CollisionObject2D
            └─ PhysicsBody2D   ←
```

> **Note:**  
> `PhysicsBody2D` itself is abstract; you cannot instantiate it directly. Use one of its concrete subclasses above.

---

### Class Reference

> The full class reference (properties, methods, signals, and usage examples) can be found in the official Godot documentation. The following table summarizes the most common members:

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `gravity_scale` | `float` | `1.0` | Multiplies the global gravity vector. |
| `linear_damp` | `float` | `0.0` | Linear velocity dampening (friction). |
| `angular_damp` | `float` | `0.0` | Angular velocity dampening. |
| `max_velocity` | `float` | `INF` | Maximum linear velocity. |
| `max_angular_velocity` | `float` | `INF` | Maximum angular velocity. |
| `fixed_rotation` | `bool` | `false` | Prevents the body from rotating when `true`. |
| `mode` | `int` | `MODE_STATIC` | Determines the physics mode (`static`, `dynamic`, `kinematic`, etc.). |
| `contact_monitor` | `bool` | `false` | Enables the collection of contact data. |
| `contacts_reported` | `int` | `1` | Max number of contacts reported when monitoring. |
| `custom_integrator` | `bool` | `false` | Allows custom physics integration when `true`. |
| `contact_monitor` | `bool` | `false` | Whether contacts are monitored. |
| `contacts_reported` | `int` | `1` | Number of contacts to report. |
| `collision_layer` | `int` | `1` | Collision layer bitmask. |
| `collision_mask` | `int` | `1` | Collision mask bitmask. |

#### Signals

| Signal | Description |
|--------|-------------|
| `body_entered(body)` | Emitted when another body enters the collision area. |
| `body_exited(body)` | Emitted when another body leaves the collision area. |
| `body_shape_entered(body_id, body, local_shape, body_shape)` | Emitted when a shape of another body collides. |
| `body_shape_exited(body_id, body, local_shape, body_shape)` | Emitted when a shape of another body stops colliding. |
| `area_entered(area)` | Emitted when an `Area2D` enters. |
| `area_exited(area)` | Emitted when an `Area2D` exits. |
| `area_shape_entered(area_id, area, local_shape, area_shape)` | Emitted when a shape of an area collides. |
| `area_shape_exited(area_id, area, local_shape, area_shape)` | Emitted when a shape of an area stops colliding. |

#### Methods

> **Common methods** that can be overridden or called:

```gdscript
func _integrate_forces(state: Physics2DDirectBodyState) -> void
```

> *Used when `custom_integrator` is `true` to manually integrate forces.*

```gdscript
func apply_impulse(offset: Vector2, impulse: Vector2) -> void
func apply_central_impulse(impulse: Vector2) -> void
func apply_torque_impulse(torque: float) -> void
func apply_torque(torque: float) -> void
func apply_central_force(force: Vector2) -> void
func apply_force(force: Vector2, position: Vector2) -> void
func apply_torque_impulse(torque: float) -> void
```

> **Collision-related helpers**

```gdscript
func get_colliding_bodies() -> Array
func get_collider_shape_index() -> int
```

> **Physics mode helpers**

```gdscript
enum Mode { MODE_STATIC, MODE_KINEMATIC, MODE_CHARACTER, MODE_RIGID, MODE_MAX }
```

#### Usage Examples

```gdscript
# Example: A simple moving rigidbody
extends RigidBody2D

func _ready() -> void:
    # Set gravity scale to half
    gravity_scale = 0.5
    # Enable contact monitoring
    contact_monitor = true
    contacts_reported = 10

func _physics_process(delta: float) -> void:
    # Apply a forward impulse when pressing the right arrow
    if Input.is_action_pressed("ui_right"):
        apply_central_impulse(Vector2(100, 0))
```

---

### Related Classes

- [CollisionObject2D](https://docs.godotengine.org/en/stable/classes/class_collisionobject2d.html)
- [Node2D](https://docs.godotengine.org/en/stable/classes/class_node2d.html)
- [PhysicsBody3D](https://docs.godotengine.org/en/stable/classes/class_physicsbody3d.html)

---

> For the full reference, including all properties, methods, signals, and detailed usage instructions, refer to the official Godot documentation: [PhysicsBody2D — Godot Engine](https://docs.godotengine.org/en/stable/classes/class_physicsbody2d.html).