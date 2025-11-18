# XRCamera3D

**Inherits**  
`Camera3D` → `Node3D` → `Node` → `Object`

---

## Description

`XRCamera3D` is a specialized 3‑D camera node that applies a few overrides for AR/VR usage, such as location tracking. It is intended as a helper node for XR applications.

> **Note:** The camera node automatically updates its position and orientation based on the XR origin, so you typically do not need to manually adjust its transform in most XR projects.

---

## Typical Usage

```gdscript
# Add an XRCamera3D to your scene
var xr_camera = XRCamera3D.new()
add_child(xr_camera)

# The camera will automatically follow the XR headset pose
```

The node behaves like a regular `Camera3D`, but it respects XR-specific settings (e.g., tracking space, viewport scale, and stereo rendering).  

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `current` | `bool` | `false` | Whether this camera is the active one. |
| `environment` | `Environment` | `null` | The environment to render with this camera. |
| `fov` | `float` | `70.0` | Field‑of‑view (in degrees). |
| `transform` | `Transform3D` | – | The camera’s transform. This is automatically updated to match the XR origin. |

*All other `Camera3D` properties are inherited unchanged.*

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `get_transform()` | `Transform3D` | Returns the camera’s current transform. |
| `set_transform(transform: Transform3D)` | `void` | Sets the camera’s transform (normally overridden by XR tracking). |
| `get_camera_attributes()` | `Dictionary` | Returns a dictionary of XR camera attributes (e.g., pose, velocity). |

> **Tip:** When scripting for XR, you often read the camera’s pose from the XR server rather than setting it manually.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `camera_changed()` | – | Emitted when the camera’s transform changes due to XR tracking. |

---

## References

* [Camera3D](https://docs.godotengine.org/en/stable/classes/class_camera3d.html) – Base class for all 3‑D cameras.  
* [XRInterface](https://docs.godotengine.org/en/stable/classes/class_xrinterface.html) – Interface for XR devices.  
* [XRServer](https://docs.godotengine.org/en/stable/classes/class_xrserver.html) – Server providing XR tracking data.  

--- 

> For more detailed API reference and advanced usage, see the full Godot documentation for the **XRCamera3D** class.