# VisibleOnScreenNotifier2D

**Godot Engine** – *stable* version

---

## Overview

`VisibleOnScreenNotifier2D` is a `Node2D` that defines a rectangular region of 2‑D space. When objects or other nodes enter or exit this region while the viewport is rendering, the notifier emits signals that can be used to trigger logic such as pausing, despawning, or loading resources only when an object becomes visible.

> **Inherited From**
> - `Node2D`
>   - `CanvasItem`
>     - `Node`
>       - `Object`

> **Inherited By**
> - `VisibleOnScreenEnabler2D`

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible_rect` | `Rect2` | `Rect2(0, 0, 100, 100)` | The rectangle that defines the area to watch. |
| `on_screen` | `bool` (readonly) | — | Returns `true` if the notifier is currently on screen. |
| `monitoring` | `bool` | `true` | Determines if the notifier is actively monitoring visibility changes. |
| `monitoring_behind` | `bool` | `false` | If enabled, the notifier will also detect objects that are behind other objects on the screen. |
| `monitoring_behind_range` | `float` | `1.0` | The distance threshold for behind‑object visibility checks. |

> *The actual default values may differ in the engine; consult the API reference for precise defaults.*

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `screen_entered` | — | Emitted when the notifier enters the visible region of the screen. |
| `screen_exited` | — | Emitted when the notifier leaves the visible region of the screen. |
| `screen_turned_on` | — | Emitted when the notifier becomes visible. |
| `screen_turned_off` | — | Emitted when the notifier becomes invisible. |

---

## Methods

| Method | Return Type | Arguments | Description |
|--------|-------------|-----------|-------------|
| `is_on_screen()` | `bool` | — | Returns whether the notifier is currently visible on screen. |
| `set_visible_rect(Rect2 rect)` | — | `rect` | Sets the monitoring rectangle. |
| `get_visible_rect()` | `Rect2` | — | Retrieves the current monitoring rectangle. |
| `set_monitoring(bool enabled)` | — | `enabled` | Enables or disables monitoring. |
| `is_monitoring()` | `bool` | — | Returns the current monitoring state. |
| `set_monitoring_behind(bool enabled)` | — | `enabled` | Enables or disables behind‑object visibility monitoring. |
| `is_monitoring_behind()` | `bool` | — | Returns the behind monitoring state. |
| `set_monitoring_behind_range(float distance)` | — | `distance` | Sets the distance threshold for behind visibility checks. |
| `get_monitoring_behind_range()` | `float` | — | Retrieves the behind visibility distance threshold. |

---

## Example

```gdscript
extends VisibleOnScreenNotifier2D

func _ready():
    # Connect signals
    connect("screen_entered", self, "_on_screen_entered")
    connect("screen_exited", self, "_on_screen_exited")

func _on_screen_entered():
    print("Notifier is now visible")

func _on_screen_exited():
    print("Notifier is no longer visible")
```

---

## Notes

- `VisibleOnScreenNotifier2D` is primarily used in combination with `VisibleOnScreenEnabler2D`. The notifier sends signals to the enabler, which can then activate or deactivate other nodes based on visibility.
- In 3‑D projects, use the 3‑D counterpart `VisibleOnScreenNotifier3D` for similar functionality in three dimensions.

---

### Further Reading

- [VisibleOnScreenEnabler2D](https://docs.godotengine.org/en/stable/classes/class_visibleonscreeenabler2d.html) – The sibling node that reacts to the notifier’s signals.
- [Visibility Layers](https://docs.godotengine.org/en/stable/tutorials/2d/visibility_layers.html) – Control which objects are affected by visibility checks.
- [Object Visibility](https://docs.godotengine.org/en/stable/tutorials/2d/object_visibility.html) – General guidelines on how Godot handles visibility.

---