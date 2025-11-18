**Setting up XR**

---

## 1  Overview

Godot’s XR system is a modular, platform‑agnostic API that hides the details of each XR provider (OpenXR, SteamVR, ARKit/ARCore, etc.) behind the **XRServer**.  
At the core of every XR project you will have an **XROrigin** node, which represents the physical player’s position in the virtual world, and one or more **XRCamera** nodes that render the scene to the headset.  
The following steps will show you how to:

* enable the XR plugin you want to use
* configure the project settings
* create the minimum node hierarchy
* run a test build

> **Tip** – All of these steps can be done in the Godot 4 editor.  
> If you prefer CLI or scripting, see the *Command line tutorial* section in the editor docs.

---

## 2  Installing and Enabling an XR Plugin

1. **Open the Project Settings** (`Project → Project Settings…`)  
2. Navigate to the **XR** category.  
3. Enable the plugin you need (e.g. **OpenXR**).  
   ```text
   XR → Plugins → OpenXR → Enabled: true
   ```
4. Restart the editor for the changes to take effect.

> **Note** – Some plugins may require additional system drivers.  
> For SteamVR, install the Steam client; for OpenXR, make sure you have the latest runtime installed.

---

## 3  Project Settings

| Setting | Value | Purpose |
|---------|-------|---------|
| **XR → Autostart** | `true` | The XR system will start automatically when the project runs. |
| **XR → XRServer** | `OpenXR` | Chooses the server implementation. |
| **XR → Disable 3D** | `false` | If you are building a 3‑D‑only application, you can leave it enabled. |

> **Quick‑Setup** – The default values usually work for most projects.  
> If you’re targeting AR on mobile, you’ll also need to enable **ARCore** or **ARKit** in the plugins list.

---

## 4  Node Hierarchy

Below is the minimal scene structure for an XR application.

```
Spatial (root)
 └─ XROrigin
     ├─ XRCamera
     └─ XRController (hand, optional)
```

### 4.1  XROrigin

The `XROrigin` node keeps track of the user’s position and orientation.  
Add it as a child of the root and rename it to `Player`.  

### 4.2  XRCamera

The `XRCamera` automatically follows the headset.  
Make sure it is **enabled** and set to `Current` so it becomes the active camera.

### 4.3  XRController

If your application will use motion controllers:

1. Add an `XRController` node.
2. In the inspector, set the *hand* property to `left` or `right`.
3. Attach a `MeshInstance3D` to represent the controller’s geometry.

---

## 5  Testing the Setup

1. Press **Play** (`F5`).  
2. If everything is correct you should see the VR view in the editor preview window (or your headset).  
3. The **XR** panel in the editor will show connection status.

> **Troubleshooting** – If no headset is detected, check that the plugin is enabled, your drivers are up to date, and your headset is connected.

---

## 6  Example: Simple “Hello XR”

```gdscript
# Main.gd – attached to the root Spatial

extends Node3D

func _ready() -> void:
    # Enable the XR server
    XRServer.start()
```

```gdscript
# Player.gd – attached to XROrigin

extends XROrigin3D

func _physics_process(delta: float) -> void:
    # Simple movement with the left controller’s joystick
    var left = $XRControllerLeft
    if left.is_valid():
        var input = left.get_joy_axis(0)  # X axis
        var move = Vector3(input * 3, 0, 0)
        translate(move * delta)
```

---

## 7  Advanced Configuration

### 7.1  Runtime Permissions (Android / iOS)

If you target mobile AR, you need to request camera access:

```gdscript
if OS.has_feature("android"):
    if !AndroidPermission.request("android.permission.CAMERA"):
        push_error("Camera permission denied")
```

### 7.2  HMD Tracking Options

You can change the tracking type in the XRServer settings:

```text
XR → Tracking → Tracking type: “Headset” | “Hands” | “Both”
```

### 7.3  Adding a Floor

To detect collisions and provide a sense of scale:

```gdscript
# Add a StaticBody3D with a CollisionShape3D (box) beneath the origin
```

---

## 8  Next Steps

* **Explore the XR nodes** – `XRCamera`, `XRController`, `XRAnchor`, `XRSpatialMapping`, etc.  
* **Load XR content** – Import GLTF/GLB scenes that already contain XR nodes.  
* **Create interactions** – Use `InputEvent` and `XRController` signals to trigger actions.  

For more details, see the full [Godot XR documentation](https://docs.godotengine.org/en/stable/tutorials/xr/index.html).