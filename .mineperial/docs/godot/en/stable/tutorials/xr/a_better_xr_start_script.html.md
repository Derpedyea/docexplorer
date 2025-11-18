**A better XR start script**

> This page is a technical tutorial from the Godot Engine documentation.  
> It explains how to create a more robust XR (VR/AR) startup script for Godot projects, including example GDScript, best‑practice recommendations, and detailed step‑by‑step instructions.

---

# Overview

The tutorial covers:

- **Why you need a better XR start script** – shortcomings of the default example.
- **Setting up the XR subsystem** – initializing the AR/VR interface, session, and tracking.
- **Managing multiple XR devices** – handling OpenXR, ARCore, Oculus, and others.
- **Lifecycle hooks** – integrating with `_ready`, `_process`, and `_on_XRFrame` callbacks.
- **Error handling and fallbacks** – graceful degradation if the XR session fails.
- **Sample code** – a full GDScript implementation you can copy into your project.

---

## 1. Introduction

In the *Setting up XR* guide we saw a minimal startup script that just enabled the XR interface. While it worked for simple demos, real applications need more control over:

- *Session* lifecycle
- *Input* mapping
- *Rendering* layers
- *Debug* diagnostics

---

## 2. The improved script

```gdscript
# res://scripts/XRStart.gd
extends Node

var xr_interface : ARVRInterface
var xr_session : ARVRServer

func _ready():
    xr_interface = ARVRServer.find_interface("OpenXR")   # or "AndroidAR"
    if xr_interface:
        xr_interface.initialize()
        get_viewport().arvr = true
        # Add any additional setup here
    else:
        push_error("No XR interface found.")
```

> **Tip**: Replace `"OpenXR"` with the specific interface you target (e.g., `"AndroidAR"` or `"Oculus"`).

---

## 3. Handling multiple interfaces

```gdscript
var interfaces = ARVRServer.get_interface_list()
for interface_name in interfaces:
    var iface = ARVRServer.find_interface(interface_name)
    if iface and iface.initialize():
        get_viewport().arvr = true
        break
```

---

## 4. Debugging tips

- **Enable logging** in `Project Settings → AR & VR → Log Level`.
- Use `XRServer.is_session_active()` to verify the session state.
- Call `xr_interface.get_tracker("head")` to inspect pose data.

---

## 5. Full example

```gdscript
extends Spatial

var xr_interface : ARVRInterface
var xr_session : ARVRServer

func _ready():
    # Try to find an available XR interface
    for name in ARVRServer.get_interface_list():
        var iface = ARVRServer.find_interface(name)
        if iface and iface.initialize():
            xr_interface = iface
            break

    if xr_interface:
        get_viewport().arvr = true
        print("XR interface initialized: ", xr_interface.get_name())
    else:
        push_error("No XR interface available.")

func _process(delta):
    if xr_interface and xr_interface.is_initialized():
        # Update logic per frame
        pass

func _on_XRFrame():
    # Hook called by XRServer each frame
    pass
```

---

## 6. Next steps

- Add your own **input mappings** using `InputMap`.
- Configure **camera layers** for mixed reality.
- Explore the **AR/VR scene tree** for more complex setups.

---

**Links**

- [Godot XR documentation](https://docs.godotengine.org/en/stable/tutorials/xr/overview.html)
- [OpenXR integration guide](https://docs.godotengine.org/en/stable/tutorials/xr/openxr.html)

---