**PathFollow3D**  
*Godot Engine (stable) – Class Reference*  

---

### Inherits
`Node3D` → `Node` → `Object`

---

### Description  
`PathFollow3D` is a helper node that takes its parent `Path3D` and returns the 3‑D coordinates of a point along that path, given a distance from the path’s start.  
The node can be used to move a camera, a vehicle, or any other object smoothly along a `Path3D`.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **path** | `NodePath` | `""` | Reference to the `Path3D` node that this `PathFollow3D` samples. |
| **offset** | `float` | `0` | Current distance along the path (in the same units as the path). |
| **curve_2d** | `bool` | `false` | If `true`, the path will be treated as a 2‑D curve (XZ plane). |
| **use_local** | `bool` | `true` | Whether the offset is applied in local or global coordinates. |
| **follow_viewport** | `bool` | `false` | If `true`, the node will follow the viewport camera. |
| **smoothing_enabled** | `bool` | `false` | If `true`, the node will smoothly interpolate between points on the path. |
| **smoothing_speed** | `float` | `1.0` | Speed of smoothing when enabled. |
| **follow_path** | `bool` | `true` | If `true`, the node’s transform will follow the path’s tangent. |

*(Additional properties such as `transform`, `global_transform`, etc., are inherited from `Node3D`.)*

---

## Signals

| Signal | Description |
|--------|-------------|
| `offset_changed(float new_offset)` | Emitted when the offset property changes. |

---

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `get_offset() -> float` | Returns the current distance along the path. |
| `set_offset(float distance)` | Sets a new offset; updates the node’s position accordingly. |
| `get_path_position() -> Vector3` | Returns the world‑space position at the current offset. |
| `set_path_position(Vector3 position)` | Moves the node to the closest point on the path to the given position. |
| `get_path_rotation() -> Basis` | Returns the rotation basis that aligns with the path’s tangent at the current offset. |
| `set_path_rotation(Basis basis)` | Aligns the node’s rotation with a specified basis. |
| `is_on_path() -> bool` | Checks whether the node is still inside the bounds of the path. |
| `is_path_end() -> bool` | Returns `true` if the offset is at the end of the path. |
| `is_path_begin() -> bool` | Returns `true` if the offset is at the start of the path. |
| `get_path_length() -> float` | Returns the total length of the path. |
| `get_path() -> NodePath` | Returns the node path of the referenced `Path3D`. |
| `set_path(NodePath p_path)` | Sets a new path node for the follow node. |

*(All other inherited methods from `Node3D`, `Node`, and `Object` are available.)*

---

## Usage Example (GDScript)

```gdscript
extends PathFollow3D

@export var speed : float = 4.0

func _process(delta: float) -> void:
    # Move along the path
    offset += speed * delta
    # Optional: loop back to start
    if offset >= get_path_length():
        offset -= get_path_length()
```

Attach this script to a `PathFollow3D` node that is a child of a `Path3D`. The object will move smoothly along the path at the defined speed.

---

## Notes

- The `offset` is clamped between `0` and `get_path_length()`.  
- Enabling `smoothing_enabled` will make the node interpolate between discrete points on the path.  
- When `follow_path` is `false`, the node will keep its current orientation; otherwise it automatically aligns with the path’s tangent.

---