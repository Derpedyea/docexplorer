# XROrigin3D – Godot Engine Documentation

**Inheritance**  
`XROrigin3D` inherits from `Node3D`.

---

## Overview

`XROrigin3D` is a special node used in Godot’s XR (AR/VR) system.  
It represents the origin point of the physical tracking space, allowing the engine to map the real‑world position and orientation of the user’s headset or controller to a coordinate system in the virtual scene.  

> *When an XR session starts, the `XROrigin3D` node is placed at the center of the tracking space. All other `XRNode3D` children (e.g., `XRCamera3D`, `XRController3D`) are positioned relative to this origin.*

---

## Key Features

| Feature | Description |
|---------|-------------|
| **Automatic tracking space alignment** | The node is automatically moved and rotated to match the tracking system’s origin when the session begins. |
| **Parent of all XR nodes** | Place your `XRCamera3D`, `XRController3D`, and custom `XRNode3D` nodes as children of the `XROrigin3D`. |
| **Scene integration** | Works just like any other `Node3D`; you can add transforms, scripts, and other children to build your VR/AR scene. |

---

## Methods

Below are the most commonly used methods for the class.  
All methods are inherited from `Node3D` and the base `Node` class unless noted.

| Method | Return Type | Description |
|--------|-------------|-------------|
| `is_tracking()` | `bool` | Returns `true` if the XR server is tracking the origin. |
| `get_tracker()` | `Node` | Returns the underlying tracker node that provides the tracking data. |
| `set_use_arvr(bool use)` | `void` | Enables or disables AR/VR mode for the origin. |
| `get_world_origin()` | `Transform3D` | Returns the current world transform of the origin. |
| `set_world_origin(Transform3D transform)` | `void` | Manually sets the world origin (useful for resetting the tracking space). |

> *Most of these methods are wrappers around the internal XR server API and are typically only needed for advanced use cases.*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `use_arvr` | `bool` | `false` | Determines whether the origin participates in AR/VR rendering. |
| `tracking_origin` | `StringName` | `"default"` | The name of the tracker used to initialize this origin. |
| `is_active` | `bool` (readonly) | – | Indicates whether the XR server has an active session. |

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `origin_updated()` | – | Emitted whenever the origin’s transform is updated by the XR server. |
| `tracking_changed(bool is_tracking)` | `bool` | Emitted when tracking status changes. |

---

## Example Usage

```gdscript
# Place an XROrigin3D at the root of your scene
var origin = XROrigin3D.new()
add_child(origin)

# Add a camera as a child
var camera = XRCamera3D.new()
origin.add_child(camera)

# Optionally, reset origin to world origin
origin.set_world_origin(Transform3D.IDENTITY)
```

In a VR project, you typically attach your camera and controller nodes to the `XROrigin3D`.  
When the session starts, Godot will automatically align the origin with the physical tracking space, and you can then use the usual 3D spatial logic.

---

## Documentation Links

- [Godot Docs – XR Overview](https://docs.godotengine.org/en/stable/tutorials/xr/index.html)  
- [XRCamera3D](https://docs.godotengine.org/en/stable/classes/class_xrcamera3d.html)  
- [XRController3D](https://docs.godotengine.org/en/stable/classes/class_xrcontroller3d.html)  

---

*This page is part of the Godot Engine 4.x class reference.*