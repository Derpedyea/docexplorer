**NOTE:** The following Markdown is a distilled representation of the Godot Engine documentation for the `AudioListener3D` class. It captures the key sections, inheritance hierarchy, description, properties, methods, signals, and available enums. For the complete, up‑to‑date reference, visit the official Godot docs at <https://docs.godotengine.org/en/stable/classes/class_audiolistener3d.html>.

---

# AudioListener3D

> **Inheritance hierarchy**  
> `AudioListener3D` → `Node3D` → `Node` → `Object`

## Description
`AudioListener3D` overrides the location from which 3‑D sounds are heard.  
Once added to the scene tree and enabled using `make_current()`, this node becomes the active audio listener, overriding any other listeners in the scene. It can be used to create multiple audio “heads” (for example, for split‑screen or multi‑view setups) or to programmatically switch the listener’s position.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `current` | `bool` | `false` | Whether this listener is the current active one. When set to `true`, the listener becomes active (equivalent to calling `make_current()` in the editor). |
| `dopplermode` | `int` | `0` | Controls the Doppler effect applied to audio sources relative to the listener. Values correspond to the `AudioEffectDoppler::Mode` enum. |
| `pan_automatically` | `bool` | `true` | When `true`, the listener will automatically pan audio based on the spatial relationship between the listener and audio sources. |
| `max_distance` | `float` | `100.0` | The maximum distance at which audio is heard. Sources beyond this distance are completely attenuated. |

> **Note**  
> `current`, `dopplermode`, `pan_automatically`, and `max_distance` are exposed in the Inspector and can be set directly from GDScript or C#.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `current_changed` | `bool` | Emitted when the `current` property changes. |
| `position_changed` | `Vector3` | Emitted when the listener’s global position changes (useful for synchronizing with custom audio logic). |

---

## Methods

```gdscript
func make_current() -> void
```
Sets this listener as the current active listener in the scene. Equivalent to `set_current(true)`.

```gdscript
func is_current() -> bool
```
Returns `true` if this listener is the current active listener.

```gdscript
func get_listener_position() -> Vector3
```
Returns the global position of the listener in world space.

```gdscript
func get_listener_rotation() -> Vector3
```
Returns the global orientation of the listener as Euler angles (in degrees).

```gdscript
func get_listener_forward() -> Vector3
```
Returns the forward direction of the listener, relative to its global transform.

```gdscript
func get_listener_up() -> Vector3
```
Returns the up direction of the listener, relative to its global transform.

```gdscript
func set_current(value: bool) -> void
```
Enables or disables this listener. Setting to `true` makes it the current listener, setting to `false` restores the previous one.

```gdscript
func is_position_global() -> bool
```
Returns `true` if the listener’s position is interpreted in global coordinates (default).

```gdscript
func set_position_global(value: bool) -> void
```
Enables or disables global positioning for the listener.

```gdscript
func set_doppler_mode(mode: int) -> void
```
Sets the Doppler mode from the `AudioEffectDoppler::Mode` enum.

```gdscript
func get_doppler_mode() -> int
```
Returns the current Doppler mode.

```gdscript
func set_pan_automatically(value: bool) -> void
```
Enables or disables automatic panning.

```gdscript
func set_max_distance(value: float) -> void
```
Sets the maximum distance at which audio is heard.

```gdscript
func get_max_distance() -> float
```
Returns the maximum distance setting.

```

---

## Enums

```gdscript
enum AudioListenerDopplerMode {
    MODE_DISABLED = 0,
    MODE_ENABLED = 1
}
```

---

## Example Usage (GDScript)

```gdscript
extends AudioListener3D

func _ready():
    # Make this listener the active one
    make_current()

    # Adjust the maximum audible distance
    set_max_distance(200.0)

    # Listen for changes
    connect("current_changed", self, "_on_current_changed")

func _on_current_changed(is_current: bool) -> void:
    print("Listener active: ", is_current)
```

---

## Further Reading

- [AudioListener2D](../class_audiolistener2d.html) – the 2‑D counterpart.
- [AudioStreamPlayer](../class_audiostreamplayer.html) – node for playing audio streams.
- [AudioServer](../class_audioserver.html) – global audio settings.

---