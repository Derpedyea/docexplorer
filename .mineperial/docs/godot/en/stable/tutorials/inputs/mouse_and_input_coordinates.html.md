**Mouse and input coordinates**  
*Godot Engine documentation – stable release*  

---

## About

This short tutorial clears up common misconceptions around input coordinates in Godot.  
It explains the different coordinate spaces you’ll encounter (screen, viewport, local, global) and shows how to obtain the mouse position correctly in each.

> **Why it matters** –  
> Many beginners mix up screen coordinates with viewport coordinates, or use the wrong method to get the mouse position. This can lead to bugs when working with UI, world‑space input, or multi‑monitor setups.

---

## 1. Coordinate systems

| Space | Origin | Units | Typical use |
|-------|--------|-------|-------------|
| **Screen** | Top‑left of the *primary monitor* | pixels | `OS.get_window_position()`, `OS.get_window_size()` |
| **Viewport** | Top‑left of the current viewport (scene) | pixels | `get_viewport().get_mouse_position()` |
| **Local** | Top‑left of the current node | pixels | Node‑relative coordinates |
| **Global** | Top‑left of the world (scene root) | pixels | World‑space positions |

> The viewport is *not* the same as the screen when you use `Viewport` nodes (e.g. for split‑screen or off‑screen rendering).

---

## 2. Getting the mouse position

### 2.1. From the viewport

```gdscript
var pos_in_viewport = get_viewport().get_mouse_position()
```

- Works for any node inside the current scene tree.  
- The coordinate is relative to the viewport’s origin (top‑left of the window or the viewport node).

### 2.2. From the global (scene root) space

```gdscript
var pos_in_global = get_viewport().get_mouse_position() \
                   + get_viewport().get_visible_rect().position
```

or simply

```gdscript
var pos_in_global = get_global_mouse_position()
```

- `get_global_mouse_position()` returns the mouse position relative to the world root, taking camera transforms into account.

### 2.3. From a specific node

```gdscript
func _input(event):
    if event is InputEventMouseMotion:
        var local = to_local(event.position)      # Node‑local
        var global = get_global_mouse_position() # World
```

- `to_local()` converts a point from global to the node’s local space.

---

## 3. Converting between coordinate spaces

| Conversion | Code |
|------------|------|
| **Viewport → Global** | `var global = get_global_transform().xform(viewport_pos)` |
| **Global → Viewport** | `var viewport = get_global_transform().affine_inverse().xform(global_pos)` |
| **Viewport → Local** | `var local = node.to_local(viewport_pos)` |
| **Local → Viewport** | `var viewport = node.to_global(local_pos)` |

> Remember that `Viewport` coordinates are **pixel‑based**; if you use a camera with a zoom or viewport scaling, the conversion may produce fractional values.

---

## 4. Screen resolution and multi‑monitor setups

```gdscript
var screen_size = OS.get_screen_size()
var screen_position = OS.get_screen_position()
```

- `screen_size` returns the resolution of the **primary** monitor.  
- For multi‑monitor environments, use `OS.get_screen_count()` and iterate to fetch each monitor’s position and size.

> **Tip** – If you need the mouse position relative to a specific monitor, subtract the monitor’s `screen_position` from the global mouse position.

---

## 5. Common pitfalls

| Mistake | What went wrong | Fix |
|---------|-----------------|-----|
| Using `get_viewport().get_mouse_position()` in a `Camera` node expecting world coordinates | Got a value inside the viewport, not the world | Use `get_global_mouse_position()` or convert via `Camera.unproject_position()` |
| Assuming `viewport.get_size()` is the same as the screen size | Off‑screen viewports have different dimensions | Query `viewport.get_visible_rect()` or the specific `Viewport` node’s size |
| Mixing up `position` and `global_position` of UI nodes | UI elements are in CanvasItem space, not world | Use `get_local_mouse_position()` inside the UI node or convert with `to_local()` |

---

## 6. Sample usage: placing an object under the mouse

```gdscript
extends Node3D

func _ready():
    # Create a small sphere to follow the mouse
    var sphere = MeshInstance3D.new()
    sphere.mesh = SphereMesh.new()
    add_child(sphere)
    sphere.name = "CursorSphere"

func _process(_delta):
    var mouse_global = get_global_mouse_position()
    # Project into the 3D world (e.g., onto a plane at y = 0)
    var from = camera.project_ray_origin(mouse_global)
    var to   = from + camera.project_ray_normal(mouse_global) * 1000
    var plane = Plane(Vector3.UP, 0)
    var intersection = plane.intersects_ray(from, to)
    if intersection:
        $CursorSphere.global_transform.origin = intersection
```

---

## 7. Links

- [Input Reference](https://docs.godotengine.org/en/stable/classes/class_input.html) – detailed API for input events.  
- [Viewport](https://docs.godotengine.org/en/stable/classes/class_viewport.html) – coordinate transformation methods.  
- [Camera](https://docs.godotengine.org/en/stable/classes/class_camera.html) – `project_ray_origin` and `project_ray_normal`.  

---

### Summary

* **Screen** coordinates – absolute, monitor‑based.  
* **Viewport** coordinates – relative to the viewport node.  
* **Local** and **Global** – relative to nodes or scene root.  

Choosing the right coordinate space and conversion methods is essential for accurate input handling, UI interaction, and 3D picking.