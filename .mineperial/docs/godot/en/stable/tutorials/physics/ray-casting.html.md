# Ray‑casting

One of the most common tasks in game development is casting a ray (or custom‑shaped object) and checking what it hits.  
This enables complex behaviours, AI, and many other features to take place.

> *Original source:* [Godot Engine Documentation – Ray‑casting](https://docs.godotengine.org/en/stable/tutorials/physics/ray-casting.html)

---

## 1. Introduction

In Godot, ray casting is typically performed with either:

- **RayCast2D / RayCast3D** nodes, which are part of the scene tree and can be enabled/disabled or moved at runtime.
- The **direct space state** API (`get_world_2d().direct_space_state` / `get_world_3d().direct_space_state`) which allows you to perform a ray cast from code without adding a node.

Both approaches give you a `RayCast` result containing information about the collider, hit position, normal, and more.

---

## 2. Using RayCast Nodes

### 2.1. RayCast2D

```gdscript
var ray = RayCast2D.new()
ray.cast_to = Vector2(100, 0)
add_child(ray)
ray.enabled = true
```

- **Properties**: `enabled`, `cast_to`, `collision_layer`, `collision_mask`.
- **Signals**: `body_entered`, `body_exited`, `area_entered`, `area_exited`.
- **Functions**: `is_colliding()`, `get_collider()`, `get_collision_point()`, `get_collision_normal()`.

### 2.2. RayCast3D

```gdscript
var ray = RayCast3D.new()
ray.cast_to = Vector3(0, -10, 0)
add_child(ray)
ray.enabled = true
```

Similar properties and methods to the 2D version.

---

## 3. Direct Ray Casting with Code

```gdscript
var space_state = get_world_2d().direct_space_state
var result = space_state.intersect_ray(
    global_position,
    global_position + transform.x * 200,
    [],   # exclude array
    0b1111  # collision mask
)

if result:
    var collider = result.collider
    var point = result.position
    var normal = result.normal
```

- `intersect_ray()` returns a dictionary with keys such as `position`, `normal`, `collider`, `rid`, etc.
- Use `intersect_shape()` for custom shapes, `intersect_point()` for point queries, and `intersect_area()` for area queries.

---

## 4. Common Use‑Cases

| Purpose | Recommended Approach | Notes |
|---------|----------------------|-------|
| Detect ground below a character | RayCast3D (pointing down) | Keep it short for performance |
| Shoot a projectile that hits enemies | `intersect_ray()` in `_physics_process()` | Exclude the shooter from the query |
| Scan surroundings for AI | Multiple RayCast nodes in a fan | Use `collide_with_areas` to detect triggers |
| Check line of sight | `intersect_ray()` with `collision_mask` set to walls | Combine with `intersect_point()` to check for occluders |

---

## 5. Performance Tips

1. **Reuse RayCast nodes** – avoid creating them every frame.
2. **Batch queries** – `intersect_shape()` can test many points at once.
3. **Limit query distance** – the longer the ray, the more physics queries it performs.
4. **Use appropriate layers/masks** – filter out irrelevant objects early.

---

## 6. Debugging Ray Casts

- In the editor, enable *debug mode* for RayCast nodes to see the line.
- For code‑based rays, you can draw a line using `draw_line()` inside a `CanvasItem` or `ImmediateGeometry` for visual feedback.

---

## 7. Example: Simple 2D Player with Ground Check

```gdscript
# Player.gd
extends CharacterBody2D

@onready var ray = $RayCast2D

func _physics_process(delta):
    if ray.is_colliding():
        # Player is on the ground
    else:
        # Player is in the air
```

---

## 8. Further Reading

- [CharacterBody2D/3D](https://docs.godotengine.org/en/stable/tutorials/physics/using_character_body_2d.html)
- [Ray‑casting in 3D](https://docs.godotengine.org/en/stable/tutorials/physics/ray-casting-3d.html) (if applicable)
- [Physics Custom Queries](https://docs.godotengine.org/en/stable/tutorials/physics/custom_physics_queries.html)

---