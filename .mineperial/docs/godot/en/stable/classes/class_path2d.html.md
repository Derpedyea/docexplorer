**Path2D** – Godot Engine Class Reference
==========================================

`Path2D` is a node that contains a `Curve2D` which can be followed by `PathFollow2D` nodes.  
It inherits from `Node2D` → `CanvasItem` → `Node` → `Object`.

---

### Description

`Path2D` holds a 2‑D curve that can be used as a path for
`PathFollow2D` nodes to move along.  
Typical uses include:

* Moving objects (e.g., vehicles, enemies) smoothly along a path.
* Creating spline‑based animations.
* Defining navigation routes in a 2‑D level.

---

### Signals

| Signal | Description |
|--------|-------------|
| `changed()` | Emitted when the underlying `Curve2D` changes. |

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `curve` | `Curve2D` | *None* | The curve that defines the path. |
| `offset` | `float` | `0.0` | Current offset along the curve. |
| `tangent` | `float` | `0.0` | Tangent (in degrees) at the current offset. |
| `width` | `float` | `0.0` | Width of the path (for drawing). |
| `closed` | `bool` | `false` | Whether the path is a closed loop. |
| `baked` | `bool` | `false` | Whether the curve is baked (pre‑computed). |
| `baked_points` | `PoolVector2Array` | `[]` | Points that make up a baked curve. |

> **Note** – When `baked` is `true`, `baked_points` is updated automatically when the curve changes.

---

### Methods

> All methods are publicly callable.  
> Methods marked with **_** are protected.

| Method | Returns | Parameters | Description |
|--------|---------|------------|-------------|
| `add_point(Vector2 position)` | `void` | `position: Vector2` | Adds a point to the `Curve2D`. |
| `remove_point(int index)` | `void` | `index: int` | Removes a point from the curve. |
| `get_point_count()` | `int` | | Returns the number of points. |
| `get_point_position(int index)` | `Vector2` | `index: int` | Returns the position of a point. |
| `set_point_position(int index, Vector2 position)` | `void` | `index: int, position: Vector2` | Sets the position of a point. |
| `get_point_in_handle(int index)` | `Vector2` | `index: int` | Returns the incoming handle for a point. |
| `set_point_in_handle(int index, Vector2 handle)` | `void` | `index: int, handle: Vector2` | Sets the incoming handle. |
| `get_point_out_handle(int index)` | `Vector2` | `index: int` | Returns the outgoing handle. |
| `set_point_out_handle(int index, Vector2 handle)` | `void` | `index: int, handle: Vector2` | Sets the outgoing handle. |
| `get_point_left_handle_mode(int index)` | `int` | `index: int` | Returns the left handle mode (`Curve2D.HandleMode`). |
| `set_point_left_handle_mode(int index, int mode)` | `void` | `index: int, mode: int` | Sets the left handle mode. |
| `get_point_right_handle_mode(int index)` | `int` | `index: int` | Returns the right handle mode. |
| `set_point_right_handle_mode(int index, int mode)` | `void` | `index: int, mode: int` | Sets the right handle mode. |
| `get_baked_length()` | `float` | | Returns the total length of the baked curve. |
| `get_baked_points()` | `PoolVector2Array` | | Returns the baked points array. |
| `get_baked_interval()` | `float` | | Returns the interval between baked points. |
| `set_bake_interval(float interval)` | `void` | `interval: float` | Sets the interval for baking. |
| `bake()` | `void` | | Forces the curve to be baked. |
| `get_point_offset(int index)` | `float` | `index: int` | Returns the offset of a point along the curve. |
| `get_point_rotation(int index)` | `float` | `index: int` | Returns the rotation of a point. |
| `set_point_rotation(int index, float rotation)` | `void` | `index: int, rotation: float` | Sets point rotation. |
| `get_clamped_point(float offset)` | `Vector2` | `offset: float` | Returns a clamped point on the curve. |
| `get_clamped_offset(float offset)` | `float` | `offset: float` | Returns a clamped offset value. |
| `interpolate_baked(float offset)` | `Vector2` | `offset: float` | Interpolates a point along the baked curve. |
| `interpolate_baked_with_rotation(float offset)` | `Vector2` | `offset: float` | Interpolates with rotation. |

---

### Related Classes

* **`PathFollow2D`** – A node that follows a `Path2D` or `Path3D` curve.
* **`Curve2D`** – The underlying data structure that defines the path.

---

### Example: Drawing a Simple Path

```gdscript
# Create a Path2D with two points
var path = Path2D.new()
var curve = Curve2D.new()
curve.add_point(Vector2(0, 0))
curve.add_point(Vector2(200, 0))
path.curve = curve

# Add a PathFollow2D that will move along this path
var follower = PathFollow2D.new()
path.add_child(follower)

# Add a sprite that will be a child of the follower
var sprite = Sprite2D.new()
sprite.texture = preload("res://player.png")
follower.add_child(sprite)

# Animate the follower
func _process(delta):
    follower.offset += 100 * delta  # move 100 pixels per second
```

---

### Quick Reference

| Property | Default | Notes |
|----------|---------|-------|
| `curve` | *None* | Must be set for the path to be usable. |
| `closed` | `false` | Set to `true` for a looped path. |
| `baked` | `false` | Enable to improve performance on complex curves. |

> Use `bake()` whenever you change the curve to update baked data.

---

#### See Also

* [PathFollow2D](../classes/class_pathfollow2d.html) – Follow a path.
* [Curve2D](../classes/class_curve2d.html) – Underlying curve data.

---