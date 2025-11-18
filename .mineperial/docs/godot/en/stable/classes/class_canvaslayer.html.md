# CanvasLayer

> **CanvasLayer** – *Godot Engine (stable) documentation*

---

## Overview

`CanvasLayer` is a **CanvasItem‑derived node** that allows you to render objects independently of the rest of the 2D scene. This is useful for UI layers, parallax effects, or any visual that should stay fixed relative to the screen.

- **Inherits**: `Node` → `CanvasItem`  
- **Inherited By**: `ParallaxBackground`

> *Description*: `CanvasLayer` nodes are direct or indirect children of the root `Viewport` and are drawn in a separate canvas layer. Their coordinates are relative to the viewport and not affected by the main 2D world transformation.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `layer` | `int` | `0` | The layer number. Lower layers are drawn first. |
| `ignore_transform` | `bool` | `false` | If `true`, the node ignores its parent’s transform. |
| `z_index` | `int` | `0` | Controls the drawing order relative to other canvas items in the same layer. |
| `z_as_relative` | `bool` | `true` | Determines whether `z_index` is relative to the parent’s `z_index`. |

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `draw` | – | Emitted when the node needs to be redrawn. |
| `viewport_changed` | – | Emitted when the viewport changes (e.g., window resizing). |

---

## Methods

```gdscript
func _ready() -> void
```
Called when the node enters the scene tree. Use this to set up initial state.

```gdscript
func set_layer(layer: int) -> void
```
Changes the layer number. Call `update()` afterwards to refresh rendering.

```gdscript
func get_layer() -> int
```
Returns the current layer number.

```gdscript
func set_ignore_transform(ignore: bool) -> void
```
Enables or disables ignoring the parent transform.

```gdscript
func get_ignore_transform() -> bool
```
Returns whether the node ignores its parent’s transform.

```

*(The full API includes many more utility functions inherited from `CanvasItem`. For a complete list, see the [Godot Class Reference](https://docs.godotengine.org/en/stable/classes/class_canvaslayer.html).)*

---

## Usage Examples

### 1. Create a HUD that stays fixed on screen

```gdscript
# In a CanvasLayer node
var score_label = Label.new()
add_child(score_label)
score_label.text = "Score: 0"
score_label.rect_position = Vector2(10, 10)
```

### 2. Parallax background

```gdscript
var parallax = ParallaxBackground.new()
var layer = ParallaxLayer.new()
layer.motion_scale = Vector2(0.5, 0.5)
layer.add_child(load("res://background.png"))
parallax.add_child(layer)
add_child(parallax)
```

---

## See Also

- [ParallaxBackground](https://docs.godotengine.org/en/stable/classes/class_parallaxbackground.html) – Node that uses `CanvasLayer` internally.  
- [CanvasItem](https://docs.godotengine.org/en/stable/classes/class_canvasitem.html) – Base class for all 2D drawable nodes.  
- [Viewport](https://docs.godotengine.org/en/stable/classes/class_viewport.html) – The rendering target for `CanvasLayer`.

---

*This page is part of the official Godot Engine documentation.*