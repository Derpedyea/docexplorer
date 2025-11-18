**ReflectionProbe**  
*Godot Engine 4.x Class Reference*

---

### Overview
A `ReflectionProbe` captures its surroundings as a cubemap, providing fast and accurate reflections for objects within a specified radius. It is a `VisualInstance3D` node and can be used in place of environment probes for localized reflection effects.

> **Description**  
> Captures its surroundings as a cubemap, and uses the resulting texture to reflect the scene on materials that support environment reflections.

---

### Inheritance
```
Object
 └─ Node
     └─ Node3D
         └─ VisualInstance3D
             └─ ReflectionProbe
```

---

## Signals

| Signal | Description |
|--------|-------------|
| `changed` | Emitted when the probe’s settings are modified. |

---

## Enumerations

| Enum | Members |
|------|---------|
| `CaptureSource` | `CAPTURE_SOURCE_WORLD`, `CAPTURE_SOURCE_CURRENT` |
| `UpdateMode` | `UPDATE_ONCE`, `UPDATE_ALWAYS`, `UPDATE_DISABLED` |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `bool` | `true` | If the probe is active. |
| `size` | `float` | `10.0` | The radius of the probe’s influence. |
| `origin_offset` | `Vector3` | `Vector3.ZERO` | Offset of the probe’s origin from its transform. |
| `update_mode` | `UpdateMode` | `UpdateMode.UPDATE_ALWAYS` | Frequency of cube‑map updates. |
| `cull_mask` | `int` | `0xFFFFFFFF` | Layers to render into the probe. |
| `blend_spherical` | `bool` | `false` | If reflections are blended in a spherical way. |
| `blend_distance` | `float` | `0.0` | Distance from the probe where blending starts. |
| `blend_max_distance` | `float` | `1.0` | Distance at which blending ends. |
| `capture_resolution` | `int` | `512` | Cubemap face resolution in pixels. |
| `environment` | `WorldEnvironment` | `null` | Optional custom environment to use for rendering. |
| `texture` | `TextureCube` | `null` | Read‑only, the generated cubemap. |

---

## Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `capture()` | `void` | — | Forces a capture of the surrounding environment. |
| `set_cull_mask(mask: int)` | `void` | `mask` | Sets the culling mask for the probe. |
| `set_size(size: float)` | `void` | `size` | Sets the influence radius. |
| `set_update_mode(mode: UpdateMode)` | `void` | `mode` | Sets the update frequency. |
| `get_texture()` | `TextureCube` | — | Returns the current capture texture. |

---

## Usage Example

```gdscript
# Add a ReflectionProbe to a scene
var probe = ReflectionProbe.new()
probe.size = 20.0
probe.origin_offset = Vector3(0, 5, 0)
probe.cull_mask = 1 << 2   # Only render layer 2
add_child(probe)

# Capture manually (optional, if update_mode == UPDATE_ONCE)
probe.capture()
```

---

## Notes

* The probe is **static** by default – use `UPDATE_ALWAYS` for dynamic reflections (may impact performance).  
* `blend_spherical` allows for smooth blending between the probe and the global environment.  
* The generated texture is available for materials that use `ENVIRONMENT` shading.

For advanced control of the capture settings, see the Godot documentation on *World Environment* and *Post‑Processing*.

---