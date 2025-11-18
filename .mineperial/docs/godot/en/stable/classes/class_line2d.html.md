# Line2D

A 2D polyline that can optionally be textured. This node draws a 2‑D polyline, i.e. a shape consisting of several points connected by straight lines.

---

## Inheritance Hierarchy

```
Object
 └─ Node
     └─ CanvasItem
         └─ Node2D
             └─ Line2D
```

---

## Description

* `Line2D` is a node that can be added to a scene to render a series of connected points in 2‑D space.  
* The line can be textured with a `Texture2D`, can have a defined width, and supports a `dash_pattern` to create dashed lines.  
* It inherits all properties and methods from `CanvasItem` and `Node2D`, including transform, visibility, and drawing callbacks.

---

### Key Properties (see the full class reference for details)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `points` | `PackedVector2Array` | `[]` | The array of points that define the polyline. |
| `width` | `float` | `1.0` | The width of the line. |
| `texture` | `Texture2D` | `null` | Optional texture to apply to the line. |
| `gradient` | `GradientTexture2D` | `null` | Optional gradient to apply along the line. |
| `antialiased` | `bool` | `true` | Whether the line should use anti‑aliasing. |
| `dashed` | `bool` | `false` | Enables a dashed line. |
| `dash_pattern` | `PackedInt32Array` | `[]` | Dash length pattern (on/off). |
| `dash_offset` | `float` | `0.0` | Dash offset in pixels. |

---

### Key Methods (partial)

| Method | Signature | Description |
|--------|------------|-------------|
| `add_point()` | `void add_point(Vector2 point)` | Adds a point to the polyline. |
| `clear()` | `void clear()` | Removes all points. |
| `get_point_position()` | `Vector2 get_point_position(int index)` | Returns the position of a given point. |
| `set_point_position()` | `void set_point_position(int index, Vector2 position)` | Sets the position of a given point. |
| `remove_point()` | `void remove_point(int index)` | Removes a point by index. |

*(For the full list of methods, signals, and properties consult the official Godot class reference.)*

---

## Signals

* `curve_changed` – Emitted when the points of the polyline change.

---

## Example Usage

```gdscript
# Create a new Line2D node and set its properties
var line = Line2D.new()
line.width = 2
line.texture = preload("res://my_line_texture.png")
line.points = [
    Vector2(0, 0),
    Vector2(100, 50),
    Vector2(200, 0)
]
add_child(line)
```

---

For a complete reference, see the Godot Engine documentation page for **Line2D**.