**ParallaxLayer**  
==============

> **Deprecated** – Use the `Parallax2D` node instead.

---

### Inheritance

```
ParallaxLayer
 └── Node2D
      └── CanvasItem
           └── Node
                └── Object
```

---

### Description

`ParallaxLayer` is a node that can be added as a child of a `ParallaxBackground` to create parallax‑scrolling effects.  
It allows you to control the motion of a single layer relative to the background and to the camera, giving the illusion of depth.  
> _Note:_ In Godot 4 this class has been superseded by `Parallax2D` and will be removed in future releases.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `motion_scale` | `Vector2` | `(1, 1)` | Scale factor for the layer’s motion. A value of `(0, 0)` freezes the layer. |
| `motion_offset` | `Vector2` | `(0, 0)` | Extra offset added to the layer’s motion. |
| `limit` | `Rect2` | `Rect2(0, 0, 0, 0)` | Defines the area the layer is allowed to move within. |
| `snap` | `bool` | `false` | When enabled the layer snaps to integer pixels. |
| `stretch_mode` | `int` | `0` | Controls how the layer’s child nodes are stretched. |
| `stretch_factor` | `Vector2` | `(1, 1)` | Factor applied to the layer during stretching. |

> (The list above reflects the common properties found in Godot 3.x. The exact set may vary slightly in newer or older releases.)

---

### Methods

| Method | Return | Arguments | Description |
|--------|--------|-----------|-------------|
| `get_motion_scale()` | `Vector2` | – | Returns the current motion scale. |
| `set_motion_scale(Vector2 scale)` | – | `scale` | Sets the motion scale. |
| `get_motion_offset()` | `Vector2` | – | Returns the current motion offset. |
| `set_motion_offset(Vector2 offset)` | – | `offset` | Sets the motion offset. |
| `set_limit(Rect2 rect)` | – | `rect` | Sets the movement limit area. |
| `get_limit()` | `Rect2` | – | Retrieves the movement limit area. |
| `set_snap(bool snap)` | – | `snap` | Enables or disables pixel snapping. |
| `is_snap_enabled()` | `bool` | – | Returns whether snapping is enabled. |

> _Tip:_ The full API can be explored in the Godot Editor’s **Search** (Ctrl+F) or by opening the class reference sidebar.

---

### Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `moved` | – | Emitted when the layer’s position changes due to camera movement. |

> *Note:* In Godot 4 the signal names and signatures may have changed; refer to the updated documentation for the exact details.

---

### Usage Example

```gdscript
# Assuming `parallax` is a ParallaxBackground node
var layer = ParallaxLayer.new()
layer.motion_scale = Vector2(0.5, 0.5)    # Move at half the speed of the camera
layer.motion_offset = Vector2(0, 0)
layer.limit = Rect2(0, 0, 1024, 768)

parallax.add_child(layer)
```

---

### Related Nodes

- [ParallaxBackground](../classes/class_parallaxbackground.html) – The parent node that manages multiple `ParallaxLayer` nodes.
- [Parallax2D](../classes/class_parallax2d.html) – The modern replacement for `ParallaxLayer` / `ParallaxBackground`.

---

### Deprecated Notice

> The `ParallaxLayer` class is kept for backward compatibility only. New projects should use `Parallax2D` and `ParallaxLayer2D` for all parallax effects.  

---