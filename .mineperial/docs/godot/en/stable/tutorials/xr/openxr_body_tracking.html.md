**OpenXR Body Tracking** – Godot Engine documentation
=======================================================

> Support for full body tracking in OpenXR is only just becoming available for a select few platforms.  As support solidifies, information will be added to this page.

> **HTC Tracker support**  
> An option that is currently supported is the HTC Vive Tracker, which can be used to represent the body in XR.

---

### 1.  What is body tracking in OpenXR?

OpenXR provides a *body‑tracking* extension that lets an application receive the pose of a user’s body (head, hands, feet, etc.) in addition to the usual headset and controller data.  In Godot this feature is exposed through the XR server and can be accessed via GDScript, C# or GDExtensions.

---

### 2.  Current platform support

| Platform | Body‑tracking status | Notes |
|----------|----------------------|-------|
| **HTC Vive** | Supported | Uses HTC Tracker devices |
| **Valve Index** | Not yet supported | Will be added when the extension is released |
| **Meta Quest** | TBD | Future support expected |
| **Other XR runtimes** | TBD | Requires the OpenXR runtime to expose the extension |

> **Tip:**  
> The OpenXR runtime you use (OpenXR Loader, SteamVR, Oculus XR) determines which extensions are available.  Check the runtime’s documentation for the list of supported extensions.

---

### 3.  Enabling body tracking in Godot

1. **Open the Project Settings.**  
   `Project → Project Settings → XR → OpenXR`.

2. **Enable the body‑tracking feature** in the *OpenXR* section.  
   There is a checkbox **“Enable Body Tracking”** that must be ticked.

3. **Configure the body‑tracking options** (if applicable):  
   - `Body Tracking Mode` – “Standard” or “Hand‑tracking only”.
   - `Trackers` – list of connected trackers (HTC, custom, etc.).

4. **Restart Godot** for changes to take effect.

> **Note:**  
> Body tracking may require additional runtime permissions (e.g., location access on mobile devices).

---

### 4.  Accessing body data in a script

```gdscript
# body_tracking_demo.gd
extends Node3D

func _ready():
    var body_tracker = XRServer.body_tracker
    if body_tracker:
        body_tracker.body_changed.connect(_on_body_changed)

func _on_body_changed(body_id: int, joint: XRJoint, pose: Transform3D):
    # `body_id` is the ID of the tracked body (usually 0 for single-user setups)
    # `joint` identifies which part of the body has updated (e.g., XRJoint.HEAD)
    # `pose` contains the Transform3D of that joint
    match joint:
        XRJoint.HEAD:
            $HeadMesh.transform = pose
        XRJoint.LEFT_HAND, XRJoint.RIGHT_HAND:
            $HandMesh[joint].transform = pose
```

*The `XRServer.body_tracker` object provides a `body_changed` signal that fires whenever a joint’s pose updates.  Each joint is identified by the `XRJoint` enum.*

---

### 5.  Using HTC Vive Trackers

If you have HTC Vive trackers attached to different body parts:

1. Connect the trackers via SteamVR.
2. In Godot’s XR settings, the trackers will appear in the “Trackers” list.
3. Map each tracker to a body joint manually or use the automatic mapping provided by the runtime.
4. Access them with the same body‑tracking code shown above.

> **Example:**  
> ```gdscript
> var left_tracker = body_tracker.get_tracker(XRJoint.LEFT_FOOT)
> var transform = left_tracker.transform
> ```

---

### 6.  Limitations & known issues

| Issue | Description | Work‑around |
|-------|-------------|------------|
| **Limited to a few runtimes** | Only the runtimes that expose the body‑tracking extension are supported. | Wait for runtime updates or use custom implementation. |
| **Tracker latency** | The pose updates may lag behind the headset and controller. | Use interpolation or smoothing. |
| **Missing joints** | Some body parts might not be available on older hardware. | Use hand‑tracking fallback or dummy joints. |

---

### 7.  Future updates

Godot actively tracks OpenXR updates and will add support for additional body‑tracking hardware as the specification and runtimes mature.  Keep an eye on the [OpenXR section](https://docs.godotengine.org/en/stable/tutorials/xr/openxr.html) for new releases.

---

**Further reading**

- [OpenXR hand tracking](../openxr_hand_tracking.html) – a quick guide on hand‑tracking.
- [OpenXR Render Models](../openxr_render_models.html) – rendering device models.

---