**Camera3D** – Godot Engine class reference  
--------------------------------------------

> **Inherits:** `Node3D`  ⟶  `Node`  ⟶  `Object`  
> **Inherited by:** `XRCamera3D`  

> **Description**  
> `Camera3D` is a special node that displays the visible world from its current position and orientation. It is the primary viewport for 3‑D scenes and can be configured to act as a player camera, a static camera, or an AR/VR camera.

### Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `camera_exited` | `Object viewport` | Emitted when the camera is removed from a viewport. |
| `camera_entered` | `Object viewport` | Emitted when the camera is added to a viewport. |

*(Full signal list is available in the official documentation.)*

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `fov` | `float` | `70.0` | Field‑of‑view in degrees. |
| `near` | `float` | `0.1` | Near clipping distance. |
| `far` | `float` | `1000.0` | Far clipping distance. |
| `projection` | `enum` (`PERSPECTIVE`, `ORTHOGONAL`) | `PERSPECTIVE` | Projection type. |
| `viewport` | `Viewport` | `null` | Viewport to render the camera into (optional). |
| `current` | `bool` | `true` | Whether this camera is the current active camera. |
| `use_environment` | `bool` | `true` | Use the scene’s `World3D.environment` for rendering. |
| `camera_attributes` | `CameraAttributes` | `CameraAttributesStandard` | Custom camera attributes. |
| `camera_feed` | `Image` | `null` | Image of the rendered viewport (used for live preview). |

### Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `set_transform(transform)` | `void` | Set the camera’s global transform. |
| `get_transform()` | `Transform3D` | Get the camera’s global transform. |
| `set_current(value: bool)` | `void` | Enable/disable this camera as the main rendering camera. |
| `is_current()` | `bool` | Return whether this camera is the current active camera. |
| `set_projection(proj)` | `void` | Set camera projection type (`PERSPECTIVE` or `ORTHOGONAL`). |
| `get_projection()` | `int` | Return the current projection type. |
| `set_fov(degrees)` | `void` | Set field of view (for perspective projection). |
| `get_fov()` | `float` | Get field of view. |
| `set_orthogonal_size(size)` | `void` | Set orthogonal size (for orthogonal projection). |
| `get_orthogonal_size()` | `float` | Get orthogonal size. |
| `set_near(distance)` | `void` | Set near clip distance. |
| `get_near()` | `float` | Get near clip distance. |
| `set_far(distance)` | `void` | Set far clip distance. |
| `get_far()` | `float` | Get far clip distance. |
| `is_inside_screen()` | `bool` | Returns whether the camera’s frustum is inside the current viewport. |

*(Complete method list is available in the official documentation.)*

### Example

```gdscript
# Position the camera at (0, 2, -4) and look at the origin
var cam = Camera3D.new()
cam.transform.origin = Vector3(0, 2, -4)
cam.look_at(Vector3.ZERO, Vector3.UP)
add_child(cam)
```

### Related classes

- [Viewport](../classes/class_viewport.html) – The surface the camera renders to.  
- [CameraAttributes](../classes/class_cameraattributes.html) – Custom camera behaviour (e.g., DOF, motion blur).  
- [XRCamera3D](../classes/class_xrcamera3d.html) – Specialized camera for AR/VR.

For more details, see the full class reference on the Godot Engine website.