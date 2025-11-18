# Room scale in XR  

One of the staples of XR projects is the ability to walk around freely in a large space. This space is often constrained by the room the player is physically in with tracking sensors placed within it. Godot supports room‑scale tracking out of the box, allowing you to create experiences that move the player in 3‑D world coordinates that mirror real‑world movement.

---

> *Note: This page assumes you already have a working Godot 4.0 or newer project set up for XR.*  

## 1.  Setting up an XR scene  

1. **Add an ARVROrigin node** – this becomes the root of your XR scene and represents the origin of your tracking space.  
2. **Add an ARVRCamera as a child** – the camera will automatically follow the HMD’s position and orientation.  
3. **Add an ARVRController for each hand** – each controller node gives you access to button, pose, and other input data.

```
Spatial
├─ ARVROrigin
│  ├─ ARVRCamera
│  └─ ARVRController  (left hand)
│  └─ ARVRController  (right hand)
```

> The `ARVROrigin` node keeps the virtual world aligned with the physical space. The default behaviour is that the camera’s origin is at the centre of the tracking area and the world is offset by the HMD’s position.

## 2.  Enabling room‑scale movement

Room‑scale movement is handled automatically by the XR system. The HMD’s **position** in the tracking space is mapped to the `ARVRCamera` local position, and the `ARVROrigin` local transform is adjusted accordingly. To allow the player to walk:

```gdscript
# Add a script to a node (e.g. the ARVROrigin)
extends Node3D

var speed : float = 2.0

func _physics_process(delta: float) -> void:
    var input_dir = Vector3.ZERO
    # Example: use the left controller’s joystick for movement
    input_dir.x = Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left")
    input_dir.z = Input.get_action_strength("ui_down") - Input.get_action_strength("ui_up")
    if input_dir.length() > 0:
        input_dir = input_dir.normalized() * speed * delta
        # Move relative to the camera’s basis
        translate(input_dir)
```

*Tip:* Use the *camera basis* to transform movement so that pressing “forward” moves the player in the direction the HMD is facing.

## 3.  Handling scale and safety

The XR server reports the size of the tracked play area. You can query it with:

```gdscript
var area = XRServer.get_primary_interface().get_bounds()
print("Play area: ", area.size)
```

- **Safety boundaries** – Godot automatically creates a boundary that warns the player when they approach the physical limits of the room.  
- **Adjusting world units** – For a realistic feel, keep your world units in metres (`1 m = 1 unit`).  

## 4.  Adding controllers

Controllers provide interaction and locomotion. A minimal controller script:

```gdscript
extends ARVRController

func _ready() -> void:
    # Enable pose tracking
    set_tracked_position(true)
    set_tracked_rotation(true)

func _process(delta: float) -> void:
    # Example: map trigger to a jump
    if is_button_pressed(2):  # button index 2 is the trigger on many headsets
        get_parent().jump()
```

You can also use the `ARVRInterface`’s `get_controller_position` and `get_controller_rotation` to manually control objects.

## 5.  Building a simple room‑scale demo

1. **Create a floor** – a simple `MeshInstance3D` with a plane mesh.  
2. **Add a `CollisionShape3D`** for the floor.  
3. **Place objects** around the scene to test navigation.  
4. **Test in a VR headset** – you should see the camera move as you walk, and the `ARVROrigin` will adjust to keep the virtual world in sync.

## 6.  Common pitfalls

| Issue | Cause | Fix |
|-------|-------|-----|
| HMD doesn’t move in the scene | The `ARVROrigin` is not parented to the camera | Ensure the camera is a child of `ARVROrigin` |
| Player gets stuck at the origin | World is not scaled correctly | Make sure your world units are metres |
| Controllers are invisible | Missing `ARVRController` nodes or they’re not set to track pose | Add the nodes and enable pose tracking |

## 7.  Further reading

- **XR Interface** – [XR interface settings](https://docs.godotengine.org/en/stable/tutorials/xr/xr_interface.html)  
- **XR actions** – [Using the XR action map](https://docs.godotengine.org/en/stable/tutorials/xr/xr_action_map.html)  
- **XR full screen effects** – [Full screen effects](https://docs.godotengine.org/en/stable/tutorials/xr/xr_full_screen_effects.html)

---

> **Reference** – This page is part of the official Godot Engine documentation (stable). For more advanced features such as spatial audio or hand tracking, see the respective XR tutorials.