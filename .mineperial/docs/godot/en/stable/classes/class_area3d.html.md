**Area3D** – Godot Engine Class Reference
==========================================

> **Inherits:** `CollisionObject3D` → `Node3D` → `Node` → `Object`

---

### Description
A region of 3‑D space that detects other `CollisionObject3D` instances when they enter or exit it.  
The `Area3D` node is commonly used to trigger events such as playing a sound, spawning an effect, or changing physics parameters when a body enters or leaves a defined area.

---

## Signals
| Signal | Description | Parameters |
|--------|-------------|------------|
| `body_entered(body)` | Emitted when a `CollisionObject3D` enters the area. | `body : Object` |
| `body_exited(body)` | Emitted when a `CollisionObject3D` leaves the area. | `body : Object` |
| `area_entered(area)` | Emitted when an `Area3D` enters this area. | `area : Area3D` |
| `area_exited(area)` | Emitted when an `Area3D` exits this area. | `area : Area3D` |
| `body_shape_entered(body_id, body, body_shape, local_shape)` | Emitted when a shape of a body enters the area. | `body_id : int`, `body : Object`, `body_shape : int`, `local_shape : int` |
| `body_shape_exited(body_id, body, body_shape, local_shape)` | Emitted when a shape of a body exits the area. | `body_id : int`, `body : Object`, `body_shape : int`, `local_shape : int` |
| `area_shape_entered(area_id, area, area_shape, local_shape)` | Emitted when a shape of another area enters this area. | `area_id : int`, `area : Area3D`, `area_shape : int`, `local_shape : int` |
| `area_shape_exited(area_id, area, area_shape, local_shape)` | Emitted when a shape of another area exits this area. | `area_id : int`, `area : Area3D`, `area_shape : int`, `local_shape : int` |

> **Tip:** Connect these signals in the editor or via code to react to collisions, overlaps, or other spatial interactions.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `monitorable` | `bool` | `true` | Determines whether the area can be monitored by other areas. |
| `monitoring` | `bool` | `true` | Enables or disables monitoring of bodies and areas. |
| `collision_layer` | `int` | `1` | Bitmask representing which collision layers the area belongs to. |
| `collision_mask` | `int` | `1` | Bitmask representing which layers the area detects. |
| `gravity_override` | `bool` | `false` | If `true`, the area will apply a custom gravity vector to bodies. |
| `gravity` | `Vector3` | `Vector3(0, -9.8, 0)` | Custom gravity vector when `gravity_override` is enabled. |
| `linear_damp_override` | `bool` | `false` | If `true`, the area will apply a custom linear damping to bodies. |
| `linear_damp` | `float` | `0.0` | Custom linear damping value. |
| `angular_damp_override` | `bool` | `false` | If `true`, the area will apply a custom angular damping to bodies. |
| `angular_damp` | `float` | `0.0` | Custom angular damping value. |
| `gravity_vector` | `Vector3` | `Vector3(0, -1, 0)` | Normalized gravity direction used for area‑based gravity calculations. |
| `gravity_scale` | `float` | `1.0` | Scale factor for the gravity vector. |
| `linear_damp_mode` | `enum` | `DAMP_MODE_INHERIT` | Damping mode: `DAMP_MODE_INHERIT`, `DAMP_MODE_OVERRIDE`, `DAMP_MODE_DISABLED`. |
| `angular_damp_mode` | `enum` | `DAMP_MODE_INHERIT` | Damping mode for angular damping. |
| `collision_layer_name` | `String` | `""` | (Editor only) Human‑readable name for the collision layer. |
| `collision_mask_name` | `String` | `""` | (Editor only) Human‑readable name for the collision mask. |

> **Note:** For more advanced physics interactions, see the *Physics* section of the manual.

---

## Methods

### `_ready()`

Called when the node is added to the scene tree and ready.  
You can override this method to perform initialization that requires the area to be fully configured.

### `get_overlapping_bodies() → Array[Node]`

Returns an array of all bodies currently overlapping the area.

### `get_overlapping_areas() → Array[Area3D]`

Returns an array of all areas currently overlapping this area.

### `is_body_in_areas(body : Node) → bool`

Checks whether a specific body is currently inside any overlapping area.

### `is_body_in_area(body : Node) → bool`

Checks whether a specific body is currently inside this area.

### `monitoring` (getter/setter)

Enables or disables the area’s monitoring of other objects. Use `set_monitoring(true)` to start monitoring.

### `set_monitorable(value : bool)` / `is_monitorable() → bool`

Controls whether this area can be detected by other areas.

### `set_monitoring(value : bool)` / `is_monitoring() → bool`

Enable/disable monitoring of bodies and other areas.

### `set_collision_layer(value : int)` / `get_collision_layer() → int`

Set or get the collision layer bitmask for this area.

### `set_collision_mask(value : int)` / `get_collision_mask() → int`

Set or get the collision mask bitmask for this area.

> **Example Usage**  
> ```gdscript
> # Enable gravity override
> var gravity_area = Area3D.new()
> gravity_area.gravity_override = true
> gravity_area.gravity = Vector3(0, -20, 0)
> ```

---

## How to Use an `Area3D`

1. **Add the Node**  
   Place an `Area3D` node in the scene.  
2. **Create a Shape**  
   Add a collision shape (e.g., `CollisionShape3D`) as a child to define the area’s volume.  
3. **Configure Layers**  
   Set the `collision_layer` and `collision_mask` to match the objects you want to detect.  
4. **Connect Signals**  
   In the editor or via code, connect signals such as `body_entered` to trigger game logic.  
5. **Optional Physics Overrides**  
   Use `gravity_override`, `linear_damp_override`, and `angular_damp_override` to affect physics bodies within the area.

---

### See Also

- [Physics](https://docs.godotengine.org/en/stable/tutorials/physics/)
- [CollisionObject3D](https://docs.godotengine.org/en/stable/classes/class_collisionobject3d.html)
- [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

---