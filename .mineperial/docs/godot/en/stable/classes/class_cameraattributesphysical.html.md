**CameraAttributesPhysical**

*Inherited from:* `CameraAttributes`

---

**Description**

`CameraAttributesPhysical` is a resource that sets rendering settings based on a physically‑based camera model. It exposes parameters such as field‑of‑view, aperture, focal length, focus distance and more to simulate realistic camera behaviour in Godot.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **focal_length** | `float` | `50.0` | Focal length in millimeters. |
| **aperture** | `float` | `2.8` | Aperture value (f‑stop). |
| **focus_distance** | `float` | `10.0` | Distance to focus point in world units. |
| **max_dof_depth** | `float` | `30.0` | Maximum depth of field range. |
| **blur_amount** | `float` | `0.0` | Amount of lens blur. |
| **exposure** | `float` | `0.0` | Exposure value in stops. |
| **auto_exposure** | `bool` | `true` | Enable automatic exposure adjustment. |
| **exposure_min** | `float` | `-10.0` | Minimum exposure value. |
| **exposure_max** | `float` | `10.0` | Maximum exposure value. |
| **exposure_bias** | `float` | `0.0` | Exposure bias in stops. |

> **Note:** These properties are exposed in the Godot editor under the *Camera Attributes* tab of a `Camera3D` node.

---

### Methods

| Method | Signature | Description |
|--------|------------|-------------|
| **set_focal_length** | `void set_focal_length(float length)` | Sets the camera's focal length. |
| **get_focal_length** | `float get_focal_length()` | Returns the current focal length. |
| **set_aperture** | `void set_aperture(float fstop)` | Sets the aperture value. |
| **get_aperture** | `float get_aperture()` | Returns the current aperture value. |
| **set_focus_distance** | `void set_focus_distance(float distance)` | Sets the focus distance. |
| **get_focus_distance** | `float get_focus_distance()` | Returns the current focus distance. |
| **set_exposure** | `void set_exposure(float ev)` | Sets the exposure value. |
| **get_exposure** | `float get_exposure()` | Returns the current exposure. |
| **set_auto_exposure** | `void set_auto_exposure(bool enabled)` | Enables or disables automatic exposure. |
| **is_auto_exposure_enabled** | `bool is_auto_exposure_enabled()` | Checks if auto exposure is enabled. |
| **set_exposure_limits** | `void set_exposure_limits(float min_ev, float max_ev)` | Sets the min/max exposure range. |
| **get_exposure_limits** | `Vector2 get_exposure_limits()` | Returns the exposure limits as a `Vector2`. |
| **set_exposure_bias** | `void set_exposure_bias(float bias)` | Sets exposure bias. |
| **get_exposure_bias** | `float get_exposure_bias()` | Returns exposure bias. |
| **set_max_dof_depth** | `void set_max_dof_depth(float depth)` | Sets maximum depth‑of‑field range. |
| **get_max_dof_depth** | `float get_max_dof_depth()` | Returns maximum DoF depth. |
| **set_blur_amount** | `void set_blur_amount(float amount)` | Sets lens blur amount. |
| **get_blur_amount** | `float get_blur_amount()` | Returns current blur amount. |

---

### Usage Example

```gdscript
var attrs = CameraAttributesPhysical.new()
attrs.focal_length = 35.0
attrs.aperture = 1.8
attrs.focus_distance = 5.0
attrs.exposure = -1.0
camera.set_camera_attributes(attrs)
```

---

### References

- [Camera3D](https://docs.godotengine.org/en/stable/classes/class_camera3d.html) – the node that uses `CameraAttributesPhysical`.  
- [Depth of Field](https://docs.godotengine.org/en/stable/tutorials/rendering/advanced_lens_effects.html#depth-of-field) – explanation of depth of field parameters.  

---