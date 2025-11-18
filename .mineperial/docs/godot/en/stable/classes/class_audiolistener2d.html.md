# AudioListener2D

`AudioListener2D` is a special 2‑D node that overrides the position from which sounds are heard.  
When the node is added to the scene tree and the method `make_current()` is called, it becomes the active listener for all 2‑D audio. This is handy for creating multiple audio viewpoints (for example, a listener that follows a specific character) or for fine‑grained control of how sound is perceived in a 2‑D space.

---

## Inheritance

```
Object
 └─ Node
     └─ CanvasItem
         └─ Node2D
             └─ AudioListener2D
```

---

## Properties

| Name              | Type  | Default | Description |
|-------------------|-------|---------|-------------|
| `use_world_space` | `bool`| `false` | If set to `true`, the listener ignores its parent transform and uses world coordinates directly. |

> **Note:** This property is only relevant in 2‑D contexts; in 3‑D the equivalent is `use_global_transform`.

---

## Methods

| Method | Description |
|--------|-------------|
| `make_current()` | Sets this listener as the active one for the audio engine. |
| `is_current()` | Returns `true` if this listener is currently the active listener. |
| `get_current()` | **Static** – returns the currently active `AudioListener2D` instance (or `null` if none). |
| `set_use_world_space(enable: bool)` | Enables or disables world‑space usage. |
| `get_use_world_space()` | Returns the current value of `use_world_space`. |

---

## Signals

`AudioListener2D` does not emit any signals.

---

## Quick Example

```gdscript
# Add an AudioListener2D to a node that should act as the viewpoint
var listener = AudioListener2D.new()
add_child(listener)

# Make it the current listener
listener.make_current()

# If you want it to ignore its parent transform:
listener.use_world_space = true
```

When you no longer need this listener, you can either remove it from the scene or call `AudioListener2D.get_current()` to restore the default listener.

---

For more details on using audio listeners in Godot, see the **Audio** section of the documentation.