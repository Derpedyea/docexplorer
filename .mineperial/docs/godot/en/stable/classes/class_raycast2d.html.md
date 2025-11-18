**RayCast2D**  
================

*Inherits*: `Node2D` → `CanvasItem` → `Node` → `Object`

A **RayCast2D** is a 2‑D ray that can be used to detect the first collision object it intersects. It is commonly used for line‑of‑sight checks, aiming helpers, or simple physics queries.

---

## Description

- **Origin**: The node’s local position.  
- **Target**: Either a fixed point (`target_position`) or another node’s global position (`target_node`).  
- **Length**: Determined by the distance to the target or the value of `cast_to`.  
- **Enabled**: Can be turned on or off with `enabled`.  
- **Collide With**: Options to include or exclude specific collision layers / masks.  

When enabled, the raycast updates each physics frame. After an update you can query:

```gdscript
if raycast.is_colliding():
    var collider = raycast.get_collider()
    var position = raycast.get_collision_point()
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `bool` | `true` | Whether the raycast is active. |
| `cast_to` | `Vector2` | `Vector2.ZERO` | Target point relative to the node. |
| `collision_mask` | `int` | `-1` | Bitmask for collision layers to test against. |
| `collide_with_areas` | `bool` | `false` | Whether the ray should hit `Area2D` nodes. |
| `collide_with_bodies` | `bool` | `true` | Whether the ray should hit `PhysicsBody2D` nodes. |
| `collision_layer` | `int` | `-1` | Bitmask for which collision layers this ray belongs to. |
| `target_position` | `Vector2` | `Vector2.ZERO` | Global target point. |
| `target_node` | `NodePath` | `NodePath("")` | Path to a node that will serve as the target. |
| `is_colliding` | `bool` (readonly) | – | `true` if an object is currently hit. |
| `collision_point` | `Vector2` (readonly) | – | Point of collision in local coordinates. |
| `collision_normal` | `Vector2` (readonly) | – | Normal of the surface hit. |
| `collider` | `Object` (readonly) | – | The node that was hit. |

---

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `is_colliding()` | `bool` | Returns `true` if a collision has been detected. |
| `get_collision_point()` | `Vector2` | Returns the world‑space point of the collision. |
| `get_collision_normal()` | `Vector2` | Returns the collision normal. |
| `get_collider()` | `Object` | Returns the node that was hit. |
| `get_collider_id()` | `int` | Returns the ID of the collider (for physics queries). |
| `get_collider_shape()` | `int` | Returns the shape index that was hit. |
| `get_collider_rid()` | `RID` | Returns the physics RID of the collider. |
| `force_raycast_update()` | `void` | Forces an immediate update of the raycast. |

---

## Signals

| Signal | Description |
|--------|-------------|
| `body_entered(body : PhysicsBody2D)` | Emitted when a body first intersects the ray. |
| `body_exited(body : PhysicsBody2D)` | Emitted when a body stops intersecting the ray. |
| `area_entered(area : Area2D)` | Emitted when an area first intersects the ray. |
| `area_exited(area : Area2D)` | Emitted when an area stops intersecting the ray. |

---

## Example

```gdscript
extends RayCast2D

func _ready():
    # Cast to a point 200 units to the right
    cast_to = Vector2(200, 0)
    set_enabled(true)

func _physics_process(delta):
    if is_colliding():
        var hit = get_collider()
        print("Hit %s at %s" % [hit.name, get_collision_point()])
```

---

*For the full reference, see the official Godot Engine documentation: [RayCast2D Class](https://docs.godotengine.org/en/stable/classes/class_raycast2d.html).*