**CharacterBody2D**  
=====================

> A 2‑D physics body specialized for characters moved by script.

**Inheritance**  
```
PhysicsBody2D
 └─ CollisionObject2D
      └─ Node2D
          └─ CanvasItem
              └─ Node
                  └─ Object
```

---

## Overview

`CharacterBody2D` is a node that provides convenient movement and collision handling for character‑style actors. It builds on top of the low‑level `PhysicsBody2D` and adds helper functions like `move_and_slide()` and `move_and_collide()` that automatically resolve collisions while preserving velocity and surface interaction.

### Key Features

- **Velocity‑based movement** – automatically applies gravity and friction.
- **Collision detection** – reports hit information via `move_and_collide()` and `move_and_slide()`.
- **Customizable physics layers** – fine‑grained collision masks and layer settings.
- **Platform‑aware** – includes built‑in support for stepping, slope handling, and custom movement logic.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `velocity` | `Vector2` | `Vector2.ZERO` | Current velocity of the character. |
| `gravity` | `float` | `ProjectSettings.get_setting("physics/2d/default_gravity")` | Gravity acceleration applied each physics frame. |
| `floor_max_angle` | `float` | `45` | Maximum angle considered a floor for `move_and_slide()`. |
| `floor_snap_vector` | `Vector2` | `Vector2.ZERO` | Vector used to snap the body onto surfaces. |
| `falling` | `bool` *(readonly)* | – | Whether the body is currently falling. |

> **Note**: All properties can be accessed and modified via script or the Inspector.

---

## Methods

```gdscript
func move_and_slide(velocity: Vector2, floor_normal: Vector2 = Vector2.UP, stop_on_slope: bool = true, max_slides: int = 4, floor_max_angle: float = 45.0, infinite_inertia: bool = true) -> Vector2
```
Moves the body along `velocity`, sliding along any colliding surfaces. Returns the remaining velocity after collision resolution.

```gdscript
func move_and_collide(velocity: Vector2, infinite_inertia: bool = true, exclude: Array = []) -> KinematicCollision2D
```
Attempts to move the body along `velocity`. If a collision occurs, returns a `KinematicCollision2D` with collision details; otherwise returns `null`.

```gdscript
func is_on_floor() -> bool
```
Returns `true` if the body is standing on a floor after a call to `move_and_slide()`.

```gdscript
func is_on_wall() -> bool
```
Returns `true` if the body is colliding with a wall.

```gdscript
func is_on_ceiling() -> bool
```
Returns `true` if the body is colliding with a ceiling.

```gdscript
func get_slide_count() -> int
```
Number of times the body slid during the last `move_and_slide()` call.

```gdscript
func get_slide_collision(n: int) -> KinematicCollision2D
```
Returns the collision data for the nth slide.

---

## Signals

| Signal | Description |
|--------|-------------|
| `body_entered(body: Node)` | Emitted when the body enters a collision with another physics body. |
| `body_exited(body: Node)` | Emitted when the body exits collision with another physics body. |
| `area_entered(area: Area2D)` | Emitted when an `Area2D` overlaps the body. |
| `area_exited(area: Area2D)` | Emitted when an `Area2D` stops overlapping. |

> Signals are available for connecting in the editor or via code.

---

## Example Usage

```gdscript
extends CharacterBody2D

var speed := 200.0
var gravity := 600.0

func _physics_process(delta):
    var direction := Vector2.ZERO
    if Input.is_action_pressed("ui_right"):
        direction.x += 1
    if Input.is_action_pressed("ui_left"):
        direction.x -= 1

    velocity.x = direction.x * speed
    velocity.y += gravity * delta

    velocity = move_and_slide(velocity, Vector2.UP)

    if is_on_floor() and Input.is_action_just_pressed("ui_up"):
        velocity.y = -400  # jump impulse
```

---

## References

- [PhysicsBody2D](https://docs.godotengine.org/en/stable/classes/class_physicsbody2d.html)  
- [CollisionObject2D](https://docs.godotengine.org/en/stable/classes/class_collisionobject2d.html)  

---