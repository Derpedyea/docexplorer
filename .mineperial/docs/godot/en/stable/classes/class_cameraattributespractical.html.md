# CameraAttributesPractical

`CameraAttributesPractical` is a **resource type** that lets you control the practical post‑processing settings of a **`Camera3D`** node.  
It inherits from the generic `CameraAttributes<Resource>` class, so all the usual resource‑management facilities (export, re‑loading, cloning, etc.) are available.  

> **Use Case** – When you need a lightweight, data‑driven way to adjust a camera’s exposure, depth‑of‑field or other visual attributes without writing a custom shader or modifying the environment directly.

---

## Inheritance

```
CameraAttributesPractical
└─ CameraAttributes<Resource>
   └─ Resource
      └─ RefCounted
         └─ Object
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **auto_exposure** | `bool` | `true` | Enables or disables the auto‑exposure algorithm. |
| **exposure** | `float` | `1.0` | Manual exposure value, used when `auto_exposure` is `false`. |
| **exposure_bias** | `float` | `0.0` | Bias applied to the exposure calculation. |
| **dof_enabled** | `bool` | `false` | Enables depth‑of‑field processing. |
| **dof_focal_distance** | `float` | `0.0` | Distance from the camera where the scene is in perfect focus. |
| **dof_focal_region** | `float` | `0.2` | Size of the focal region around the focal distance where the image stays sharp. |
| **dof_focal_region_blur** | `float` | `0.4` | Amount of blur applied to the edges of the focal region. |
| **dof_max_blur_radius** | `float` | `8.0` | Maximum radius (in pixels) that the depth‑of‑field blur may reach. |

> **Tip** – All numeric properties are exposed in the Inspector, so you can tweak them on the fly while previewing a scene.

---

## Signals

None.

---

## Methods

The class does not define any new methods beyond those inherited from `CameraAttributes`.  All public functions are available from the parent class, e.g. `set_property(name, value)`, `get_property(name)` and the usual Godot resource methods (`duplicate()`, `to_dict()`, etc.).

---

## Usage Example

```gdscript
# Create a CameraAttributesPractical instance and assign it to a Camera3D.
var cam_attrs = CameraAttributesPractical.new()
cam_attrs.auto_exposure = true
cam_attrs.dof_enabled = true
cam_attrs.dof_focal_distance = 5.0

var camera = Camera3D.new()
camera.environment.attributes = cam_attrs
add_child(camera)
```

> In the editor, you can also create a `CameraAttributesPractical` resource via **Inspector → New Resource** and then drop it into the `environment.attributes` property of a `Camera3D`.

---

## Related Resources

* **[CameraAttributesPhysical](https://docs.godotengine.org/en/stable/classes/class_cameraattributesphysical.html)** – The physically‑based camera attributes counterpart, which uses real‑world camera parameters.  
* **[Camera3D](https://docs.godotengine.org/en/stable/classes/class_camera3d.html)** – The node that exposes the `environment.attributes` property.  
* **[Environment](https://docs.godotengine.org/en/stable/classes/class_environment.html)** – Where camera attributes live in the rendering pipeline.

---

## See also

* **[CameraAttributes](https://docs.godotengine.org/en/stable/classes/class_cameraattributes.html)** – Base class for camera attribute resources.  
* **[Auto‑Exposure](https://docs.godotengine.org/en/stable/tutorials/visual_tips/auto_exposure.html)** – A deeper dive into Godot’s auto‑exposure implementation.  
* **[Depth‑of‑Field](https://docs.godotengine.org/en/stable/tutorials/visual_tips/depth_of_field.html)** – How to tweak DOF in Godot 4.

---

*Documented with Godot Engine 4.x – see the official Godot reference for the most up‑to‑date details.*