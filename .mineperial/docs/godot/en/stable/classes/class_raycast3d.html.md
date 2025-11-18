# RayCast3D

A **raycast** is a 3‑D ray that can be used to find the first object it intersects in the scene.  
It inherits from `Node3D` → `Node` → `Object`.

> **Note** – The information below is extracted from the official Godot Engine 4.0 documentation.  
> See the full reference page for more details: <https://docs.godotengine.org/en/stable/classes/class_raycast3d.html>  

---

## Inheritance

```
Node3D
└─ RayCast3D
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `bool` | `true` | If `false`, the raycast will be ignored during physics queries. |
| `collision_mask` | `int` | `0xFFFFFFFF` | Layer mask defining which physics layers this ray will interact with. |
| `collision_layer` | `int` | `0` | Layer bitmask that this node will be placed on for physics. |
| `collide_with_areas` | `bool` | `false` | When `true`, the ray will also detect `Area3D` nodes. |
| `collide_with_bodies` | `bool` | `true` | When `true`, the ray will detect `PhysicsBody3D` nodes. |
| `target_position` | `Vector3` | `Vector3.ZERO` | The endpoint of the ray relative to the node’s origin. |
| `cast_to` | `Vector3` | `Vector3.ZERO` | **Deprecated** – Use `target_position`. |
| `max_distance` | `float` | `100.0` | Maximum distance the ray will check for collisions. |
| `space_override_mode` | `int` | `SpaceOverride.SPACE_OVERRIDE_DISABLED` | How the ray interacts with the physics space. |
| `collision_priority` | `int` | `0` | Priority used when multiple objects occupy the same collision space. |

> ⚠️ **Deprecated**: `cast_to` is an alias for `target_position`; use the latter in new code.

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `is_colliding()` | `bool` | | Returns `true` if the ray is currently intersecting any object. |
| `get_collider()` | `Object?` | | Returns the object that was hit. |
| `get_collider_index()` | `int` | | Returns the collision index for the object. |
| `get_collision_point()` | `Vector3` | | Returns the world‑space position where the collision occurred. |
| `get_collision_normal()` | `Vector3` | | Returns the normal of the surface that was hit. |
| `get_collision_safe_fraction()` | `float` | | Fraction along the ray before the collision point. |
| `get_collision_unsafe_fraction()` | `float` | | Fraction along the ray after the collision point. |
| `get_collision_object()` | `Object?` | | Alias for `get_collider()`. |
| `force_raycast_update()` | `void` | | Forces an immediate update of the raycast query. |
| `get_ray_length()` | `float` | | Returns the distance from the origin to `target_position`. |
| `set_target_position(Vector3)` | `void` | `position` | Sets the target point of the ray. |

### Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `body_entered(PhysicsBody3D body)` | `body` | Emitted when a body enters the ray’s collision path. |
| `body_exited(PhysicsBody3D body)` | `body` | Emitted when a body exits the ray’s collision path. |
| `area_entered(Area3D area)` | `area` | Emitted when an area enters the ray’s collision path. |
| `area_exited(Area3D area)` | `area` | Emitted when an area exits the ray’s collision path. |

## Example: Using RayCast3D in GDScript

```gdscript
@tool
class_name EnemyDetector
extends RayCast3D

func _ready() -> void:
	# Disable the raycast initially.
	enabled = false

func _physics_process(delta: float) -> void:
	if not enabled:
		return

	if is_colliding():
		var collider = get_collider()
		if collider and collider.has_method("take_damage"):
			collider.take_damage(10)
```

```gdscript
# In the same scene, you can toggle the raycast from another script:
var detector = $EnemyDetector
detector.enabled = true
detector.target_position = Vector3(0, 0, -10)  # look 10 units ahead
```

## Tips & Gotchas

* **Update Frequency** – Raycasts are automatically updated each physics step. If you change `target_position` or any property that affects the ray, you might need to call `force_raycast_update()` to get an immediate result.
* **Collision Layers** – Use `collision_layer` to set which layer the raycast itself belongs to, and `collision_mask` to filter which layers it will collide with.
* **Area vs. Body** – Set `collide_with_areas` or `collide_with_bodies` to control whether the ray should detect `Area3D` or `PhysicsBody3D` nodes.
* **Space Override** – For advanced physics, you can change the `space_override_mode` to `USE_GI` or `USE_SHADOWS` if the ray should ignore or respect certain physics spaces.

## Related Classes

* [`RayCast2D`](../class_raycast2d.html) – 2‑D version.
* [`Area3D`](../class_area3d.html) – For detecting overlapping areas.
* [`PhysicsBody3D`](../class_physicsbody3d.html) – For collision bodies.
* [`CollisionObject3D`](../class_collisionobject3d.html) – Base class for physics objects.

---

> For more detailed information, refer to the official Godot documentation or the source code comments in the Godot repository.