**AspectRatioContainer**  
========================

> **Godot Engine – Class Reference**  
> *Inherits: `Container` → `Control` → `CanvasItem` → `Node` → `Object`*

The `AspectRatioContainer` is a GUI container that preserves the proportions of its child control. It automatically scales its single child while maintaining a specified aspect ratio, making it ideal for UI elements that need to stay proportionally correct across different screen sizes or window resizes.

---

## Description

A container type that arranges its child controls so that the child’s aspect ratio is preserved. The container can stretch the child to fit its own size in three ways:

* **Keep** – preserve the child’s aspect ratio and fit it within the container.  
* **Keep Width** – preserve the child’s aspect ratio and fit its width to the container’s width.  
* **Keep Height** – preserve the child’s aspect ratio and fit its height to the container’s height.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `stretch_mode` | `int` (`StretchMode`) | `StretchMode.Keep` | Determines how the child is resized. Values: `Keep`, `Keep Width`, `Keep Height`. |
| `rect_min_size` | `Vector2` | `Vector2(0, 0)` | Minimum size for the container (inherited from `Control`). |
| `rect_pivot_offset` | `Vector2` | `Vector2(0, 0)` | Inherited from `Control`. |

> **Enum – `StretchMode`**  
> ```gdscript
> enum StretchMode {
>     Keep = 0,
>     KeepWidth = 1,
>     KeepHeight = 2
> }
> ```

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `resized()` | – | Emitted when the container’s size changes. |

---

## Methods

| Method | Return type | Description |
|--------|-------------|-------------|
| `get_child()` | `Node` | Returns the single child node (or `null` if none). |
| `_get_minimum_size()` | `Vector2` | Calculates the minimum size required to display the child while respecting the aspect ratio. |
| `_notification(int)` | `void` | Handles internal notifications (e.g., size change). |

> *All other methods are inherited from `Container` / `Control`.*

---

## Example

```gdscript
# Create an AspectRatioContainer with a 16:9 background image
var container = AspectRatioContainer.new()
container.stretch_mode = AspectRatioContainer.StretchMode.KeepWidth
var sprite = Sprite2D.new()
sprite.texture = load("res://background.png")
container.add_child(sprite)
add_child(container)
```

The container will automatically resize the `Sprite2D` so that its width fills the container while preserving the 16:9 aspect ratio. Resize the window or the container to see the effect.

---

## Related Classes

* [Container](../class_container.html) – Base class for all GUI containers.  
* [Control](../class_control.html) – Base class for GUI controls.  

---