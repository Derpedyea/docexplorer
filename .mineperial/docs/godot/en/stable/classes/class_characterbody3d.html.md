**CharacterBody3D** – Godot Engine class reference  
=====================================================

> *A specialized 3‑D physics body that is intended to be moved by script, with helpers for character‑style movement (gravity, slope handling, sliding, etc.).*  

Inheritance
------------

```
Object
 └─ Node
     └─ Node3D
         └─ CollisionObject3D
             └─ PhysicsBody3D
                 └─ CharacterBody3D
```

### Signals

| Signal | Description |
|--------|-------------|
| `body_entered(body)` | Emitted when another body enters the `CharacterBody3D`'s collision shape. |
| `body_exited(body)` | Emitted when another body exits the collision shape. |
| `area_entered(area)` | Emitted when an `Area3D` enters the collision shape. |
| `area_exited(area)` | Emitted when an `Area3D` exits the collision shape. |

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `velocity` | `Vector3` | `Vector3.ZERO` | The current velocity of the body. |
| `gravity_scale` | `float` | `1.0` | Multiplies the global gravity value applied to this body. |
| `floor_snap` | `float` | `0.0` | Distance to snap to the floor while sliding. |
| `floor_max_angle` | `float` | `0.785398` (45°) | Maximum angle (in radians) for a surface to be considered a floor. |
| `floor_stop_on_slope` | `bool` | `false` | If `true`, the body stops when encountering a slope steeper than `floor_max_angle`. |
| `floor_max_slope_angle` | `float` | `0.785398` | Alias of `floor_max_angle`. |
| `up_direction` | `Vector3` | `Vector3.UP` | Upward direction used for floor and slope detection. |

### Constants

| Constant | Value | Description |
|----------|-------|-------------|
| `MAX_SLIDE` | `32` | Maximum number of slide iterations in `move_and_slide()`. |
| `BODY_INTEGRATION_MODE_FIXED` | `0` | Integration mode: fixed step. |
| `BODY_INTEGRATION_MODE_PHYSICS` | `1` | Integration mode: physics step. |

### Methods

#### Movement

| Method | Signature | Description |
|--------|-----------|-------------|
| `move_and_slide(velocity, up_direction=Vector3.UP, stop_on_slope=false, max_slides=32, floor_max_angle=0.785398, infinite_inertia=true)` | `Vector3` | Moves the body according to `velocity`, sliding on slopes and applying friction. Returns the remaining velocity after collisions. |
| `move_and_slide_with_snap(velocity, snap_vector, stop_on_slope=false, max_slides=32, floor_max_angle=0.785398, infinite_inertia=true)` | `Vector3` | Same as `move_and_slide()` but also applies a snap vector for staying on uneven surfaces. |
| `move_and_collide(velocity, safe_margin=0.001, bounce=false, exclude=[...] , hit_from_inside=false)` | `KinematicCollision3D` | Moves the body and returns a collision object if one occurs. |
| `get_slide_collision( slide )` | `KinematicCollision3D` | Returns the collision at the given slide index. |
| `get_slide_count()` | `int` | Number of collisions encountered during the last `move_and_slide()` call. |
| `get_floor_normal()` | `Vector3` | Normal of the floor surface after the last `move_and_slide()` call. |
| `is_on_floor()` | `bool` | `true` if the body is on the floor. |
| `is_on_wall()` | `bool` | `true` if the body is on a wall. |
| `is_on_ceiling()` | `bool` | `true` if the body is on a ceiling. |

#### State Queries

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_velocity(vel)` | `void` | Sets the current velocity. |
| `get_velocity()` | `Vector3` | Gets the current velocity. |
| `set_floor_snap(distance)` | `void` | Sets snap distance. |
| `get_floor_snap()` | `float` | Returns current snap distance. |

#### Collision Layers & Masks

Inherits all methods from `PhysicsBody3D` such as `set_collision_layer(value)` and `set_collision_mask(value)`.

### Example Usage

```gdscript
extends CharacterBody3D

var speed = 5.0
var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")

func _physics_process(delta):
    var input_dir = Input.get_vector("move_left", "move_right", "move_forward", "move_back")
    var direction = (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()
    
    if input_dir.length() > 0:
        velocity.x = direction.x * speed
        velocity.z = direction.z * speed
    else:
        velocity.x = lerp(velocity.x, 0, 0.1)
        velocity.z = lerp(velocity.z, 0, 0.1)

    velocity.y -= gravity * delta
    velocity = move_and_slide(velocity, Vector3.UP)
```

### Notes

* The `move_and_slide()` family of methods uses **integrated** collision resolution, which is more suited for character movement than the raw `move_and_collide()` method.  
* `floor_max_angle` defaults to 45°; you may want to lower it for stricter slope handling.  
* When using `move_and_slide_with_snap()`, a small `snap_vector` (e.g., `Vector3.DOWN * 0.5`) helps the body stay anchored to uneven terrain.

--- 

**See also**

- [PhysicsBody3D](../classes/class_physicsbody3d.html)  
- [CollisionObject3D](../classes/class_collisionobject3d.html)  
- [Node3D](../classes/class_node3d.html)  

--- 

*This page is part of the official Godot Engine documentation – version **stable**.*