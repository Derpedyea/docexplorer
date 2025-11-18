**Parallax2D**  
*Class reference – Godot Engine (stable)*  

---

### Inheritance
```
Parallax2D
  ├─ Node2D
  │   ├─ CanvasItem
  │   │   ├─ Node
  │   │   │   ├─ Object
```

### Description
A `Parallax2D` node is used to create a parallax scrolling background. It automatically moves its children at a different speed relative to the camera, creating the illusion of depth.

> *From the official documentation:*  
> “Parallax2D is used to create a parallax effect. It can move at a different speed relative to the camera.”

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `motion_scale` | `Vector2` | `Vector2(1, 1)` | Scales the motion of the parallax background. |
| `scroll_offset` | `Vector2` | `Vector2(0, 0)` | Offset applied to the scroll position. |
| `limit` | `Rect2` | `Rect2(0, 0, 0, 0)` | Optional boundary for parallax movement. |
| `limit_offset` | `Rect2` | `Rect2(0, 0, 0, 0)` | Extra offset beyond the limits. |
| `z_as_relative` | `bool` | `true` | Whether the parallax inherits the parent’s `z_index`. |

> *Note:* The table above is illustrative; the full list of properties can be found in the official class reference.

---

## Signals

- `screen_entered()`
- `screen_exited()`

These signals are emitted when the parallax background enters or exits the visible screen area.

---

## Methods

| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `_process(delta)` | `float delta` | `void` | Called each frame; usually overridden to update parallax motion. |
| `_ready()` | – | `void` | Called when the node is added to the scene tree; useful for initialisation. |

> *Tip:* Most of the heavy lifting is handled internally; custom behaviour is usually added via the `motion_scale` property or by nesting `ParallaxLayer` children.

---

## Usage Example

```gdscript
# Example: Create a simple parallax background
var parallax = Parallax2D.new()
parallax.motion_scale = Vector2(0.5, 0.5)  # Slower than camera
add_child(parallax)

var layer = ParallaxLayer.new()
layer.motion_scale = Vector2(0.3, 0.3)
parallax.add_child(layer)

var sprite = Sprite2D.new()
sprite.texture = preload("res://background.png")
layer.add_child(sprite)
```

---

### Related Nodes

- **ParallaxBackground** – Manages multiple `Parallax2D` instances.
- **ParallaxLayer** – Child node of `Parallax2D` that applies motion to its children.

---

### See Also

- [ParallaxBackground](https://docs.godotengine.org/en/stable/classes/class_parallaxbackground.html)
- [ParallaxLayer](https://docs.godotengine.org/en/stable/classes/class_parallaxlayer.html)

---