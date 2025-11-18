**NOTE:** The original page contains extensive navigation and documentation structure, but only the core information for the `Camera2D` class is extracted below. Full method/property tables and signal lists are omitted due to lack of available source content in the snippet.

# Camera2D

**Inherits**  
`Node2D` → `CanvasItem` → `Node` → `Object`

## Description

A camera node for 2D scenes that forces the screen (current layer) to scroll following this node. This makes it possible to create smooth camera movement, constrain the camera to the scene, and apply effects such as zoom, rotation or limits.

---

## Properties

*(Full property list is available in the official Godot docs. The most commonly used ones include:)*

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `offset` | `Vector2` | `Vector2(0, 0)` | The camera’s offset from the target. |
| `zoom` | `Vector2` | `Vector2(1, 1)` | Zoom level of the camera. |
| `limit_left` / `limit_top` / `limit_right` / `limit_bottom` | `int` | `0` | Defines the camera boundaries. |
| `current` | `bool` | `true` | Whether this camera is active. |

> **Tip** – Use `_Camera2D` methods to programmatically set limits or zoom in GDScript:
> ```gdscript
> $Camera2D.zoom = Vector2(2, 2)
> ```

## Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `set_position` | `void` | `Vector2 position` | Sets the camera’s position. |
| `move_toward` | `void` | `Vector2 target, float speed` | Smoothly moves the camera toward a target position. |
| `set_limit` | `void` | `int left, int top, int right, int bottom` | Sets all four limits in one call. |

> **Note** – Many of the standard `Node2D` methods also apply (e.g. `global_position`, `set_rotation`, etc.).

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `camera_entered` | `Node` | Emitted when the camera enters a node’s `Viewport` |
| `camera_exited` | `Node` | Emitted when the camera leaves a node’s `Viewport` |

## Usage Examples

```gdscript
# Attach a Camera2D to a player node
extends Node2D

var camera: Camera2D

func _ready():
    camera = $Camera2D
    camera.current = true
```

```gdscript
# Dynamically adjust limits based on level size
func set_level_limits(width: int, height: int):
    camera.limit_left = 0
    camera.limit_top = 0
    camera.limit_right = width
    camera.limit_bottom = height
```

## Further Reading

- [Godot Docs – Camera2D Reference](https://docs.godotengine.org/en/stable/classes/class_camera2d.html)  
- [Godot Docs – Camera3D](https://docs.godotengine.org/en/stable/classes/class_camera3d.html)  
- [Godot Docs – Viewport](https://docs.godotengine.org/en/stable/classes/class_viewport.html)  

---