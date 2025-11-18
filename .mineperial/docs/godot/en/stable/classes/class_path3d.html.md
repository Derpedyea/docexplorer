**Note:** The following is a concise, Markdown‑style summary of the **Path3D** class reference from the Godot Engine documentation. It preserves the essential structure (inheritance, description, properties, methods, signals, and example usage) as found in the official docs.  

---

# Path3D

*Inherits:* `Node3D` → `Node` → `Object`

## Description
`Path3D` contains a 3‑D curve that can be used by `PathFollow3D` nodes to move along it. The curve is stored as a `Curve3D` resource.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **curve** | `Curve3D` | `null` | The curve that defines the path. |

> **Note:** Changing the `curve` property emits the `curve_changed` signal.

---

## Signals

- `curve_changed` – Emitted when the `curve` resource is changed.

---

## Methods

| Method | Return | Arguments | Description |
|--------|--------|-----------|-------------|
| `get_curve()` | `Curve3D` | – | Returns the current curve. |
| `set_curve(curve: Curve3D)` | – | `curve` | Assigns a new curve to the Path3D. |
| `get_path()` | `Vector3[]` | – | Returns the world‑space points of the curve (for debugging). |
| `get_curve_points()` | `int` | – | Returns the number of points in the curve. |

> *All methods are documented in the official API reference; additional helper functions may be added in future releases.*

---

## Usage Example

```gdscript
# Create a Path3D node and add a simple curve
var path = Path3D.new()
var curve = Curve3D.new()
curve.add_point(Vector3(0, 0, 0))
curve.add_point(Vector3(5, 0, 0))
curve.add_point(Vector3(5, 0, 5))
path.set_curve(curve)

# Add a PathFollow3D child to move an object along the path
var follow = PathFollow3D.new()
path.add_child(follow)
var mesh = MeshInstance3D.new()
follow.add_child(mesh)

# In _process, you can animate the path follow
func _process(delta):
    follow.progress += 1.0 * delta
```

---

## Related Classes

- **[PathFollow3D](class_pathfollow3d.html)** – A node that moves along a `Path3D`.
- **[Curve3D](class_curve3d.html)** – The underlying curve data structure used by `Path3D`.

---

## Further Reading

For more detailed information on how to build and manipulate curves, refer to the [Curve3D documentation](class_curve3d.html). If you’re interested in using `Path3D` to create racing tracks, enemy patrol routes, or camera paths, see the relevant sections in the Godot Manual under **3D** → **Path Nodes**.