**Area2D**  
*Godot Engine 4.x – Class Reference*  

---

### Inheritance hierarchy
```
Object
└── Node
    └── CanvasItem
        └── Node2D
            └── CollisionObject2D
                └── Area2D
```

### Description
`Area2D` is a 2‑D region that detects when other `CollisionObject2D` nodes (bodies or other areas) enter or exit its space. It can be used for a variety of gameplay purposes such as triggers, zones, health pickups, and more. Unlike a `CollisionShape2D` attached to a physics body, an `Area2D` does not participate in collision response but only emits signals when something intersects its collision shapes.

---

## Signals

| Signal | Description |
|--------|-------------|
| `area_entered(area: Area2D)` | Emitted when another `Area2D` enters this area. |
| `area_exited(area: Area2D)` | Emitted when another `Area2D` exits this area. |
| `body_entered(body: Node2D)` | Emitted when a physics body enters this area. |
| `body_exited(body: Node2D)` | Emitted when a physics body exits this area. |
| `body_shape_entered(body_id: int, body: Node2D, body_shape_index: int, local_shape_index: int)` | Emitted when a specific shape of a body enters the area. |
| `body_shape_exited(body_id: int, body: Node2D, body_shape_index: int, local_shape_index: int)` | Emitted when a specific shape of a body exits the area. |
| `monitorable_changed()` | Emitted when the monitorable property changes. |
| `monitoring_changed()` | Emitted when the monitoring property changes. |
| `collision_layer_changed()` | Emitted when the collision layer changes. |
| `collision_mask_changed()` | Emitted when the collision mask changes. |

> **Note:** The full list of signals is generated automatically by the engine and may include additional ones for custom signals.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `monitorable` | `bool` | `false` | Whether the area can be detected by other areas. |
| `monitoring` | `bool` | `true` | Whether the area currently monitors other bodies/areas. |
| `collision_layer` | `int` | `1` | Collision layer bit mask. |
| `collision_mask` | `int` | `1` | Collision mask bit mask. |
| `monitoring_mode` | `int` (enum) | `AREA_MASK_BODY` | Defines what type of objects the area monitors (body, area, or both). |
| `monitoring` | `bool` | `true` | Enables or disables monitoring. |
| `monitorable` | `bool` | `false` | Enables or disables being monitored by other areas. |
| `collision_layer` | `int` | `1` | Layer(s) on which the area resides. |
| `collision_mask` | `int` | `1` | Mask to determine which layers are checked for collisions. |

> **Enums**  
> - `CollisionMode` – `AREA_MASK_BODY`, `AREA_MASK_AREA`, `AREA_MASK_ALL`.

---

## Methods

> The following list contains the most commonly used API. For the complete list, see the official Godot documentation.

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `is_monitorable()` | `bool` | – | Returns whether this area can be monitored. |
| `set_monitorable(enabled: bool)` | – | `enabled: bool` | Set whether this area can be monitored. |
| `is_monitoring()` | `bool` | – | Returns whether monitoring is active. |
| `set_monitoring(enabled: bool)` | – | `enabled: bool` | Enable or disable monitoring. |
| `get_collision_layer()` | `int` | – | Get the collision layer mask. |
| `set_collision_layer(mask: int)` | – | `mask: int` | Set the collision layer mask. |
| `get_collision_mask()` | `int` | – | Get the collision mask. |
| `set_collision_mask(mask: int)` | – | `mask: int` | Set the collision mask. |
| `add_shape(shape: Shape2D, transform: Transform2D = Transform2D.IDENTITY)` | `int` | `shape: Shape2D`, `transform: Transform2D` | Add a collision shape to the area and return its shape index. |
| `remove_shape(shape_index: int)` | – | `shape_index: int` | Remove a shape from the area. |
| `get_shape_owner_count()` | `int` | – | Returns the number of shape owners in the area. |
| `get_shape_owner_global_transform(owner_index: int)` | `Transform2D` | `owner_index: int` | Returns the global transform of the specified shape owner. |
| `set_shape_owner_global_transform(owner_index: int, global_transform: Transform2D)` | – | `owner_index: int`, `global_transform: Transform2D` | Sets the global transform of the specified shape owner. |
| `has_point(point: Vector2)` | `bool` | `point: Vector2` | Checks if a point is inside the area. |
| `get_overlapping_bodies()` | `Array[Node2D]` | – | Returns all bodies currently overlapping. |
| `get_overlapping_areas()` | `Array[Area2D]` | – | Returns all areas currently overlapping. |
| `set_area_monitoring_enabled(enabled: bool)` | – | `enabled: bool` | Deprecated alias for `set_monitoring()`. |
| `is_area_monitoring_enabled()` | `bool` | – | Deprecated alias for `is_monitoring()`. |

> **Note:** Many of these methods are inherited from `CollisionObject2D`. For advanced usage, refer to the full API reference.

---

## Signals (Examples)

```gdscript
# Example: connect to body_entered
func _ready() -> void:
    $Area2D.connect("body_entered", self, "_on_body_entered")

func _on_body_entered(body: Node2D) -> void:
    print(body.name, "entered the area")
```

---

## Using an `Area2D`

1. Add an `Area2D` node to your scene.  
2. Attach one or more `CollisionShape2D` children to define the shape of the detection zone.  
3. Enable *Monitoring* (default) to start receiving signals.  
4. Connect signals to your scripts to react to overlap events.

> **Tips**  
> * Use a `CollisionLayer` and `CollisionMask` to filter which bodies/areas are detected.  
> * For performance, keep the shape count low and use simple shapes (e.g., `CircleShape2D`, `RectangleShape2D`).  
> * When the area should only detect bodies but not other areas, set `monitoring_mode` to `AREA_MASK_BODY`.

---

### Further Reading

- [CollisionObject2D](https://docs.godotengine.org/en/stable/classes/class_collisionobject2d.html) – Base class for all physics objects that can collide.  
- [PhysicsServer2D](https://docs.godotengine.org/en/stable/classes/class_physicsserver2d.html) – Low‑level API for physics shapes.  
- [Signals](https://docs.godotengine.org/en/stable/tutorials/scripting/signals.html) – How to connect and use signals in GDScript.

---