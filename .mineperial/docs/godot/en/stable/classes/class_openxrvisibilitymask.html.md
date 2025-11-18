# OpenXRVisibilityMask

> **Godot Engine 4.x – Class Reference**  
> Inherits: `VisualInstance3D < Node3D < Node < Object`

---

## Overview

`OpenXRVisibilityMask` is a node that draws a *stereo‑correct* visibility mask in an OpenXR session.  
The mask is used to black‑out parts of the rendered image that should not be visible to the user (for example, to create a custom field of view or to cut out geometry for a headset’s lens distortion).

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| **mask_type** | `int` | The type of mask. See the enumeration below for valid values. |
| **plane_count** | `int` | The number of planes that compose the mask. |
| **stereo_depth_offset** | `float` | Depth offset applied to each eye’s mask to avoid z‑fighting. |
| **mesh** | `RID` | Custom mesh used when `mask_type` is `MASK_TYPE_CUSTOM`. |

> **Enum – `mask_type`**  
> ```text
> MASK_TYPE_NONE       = 0
> MASK_TYPE_BOX        = 1
> MASK_TYPE_CIRCLE     = 2
> MASK_TYPE_CUSTOM     = 3
> ```

---

## Methods

| Method | Return | Arguments | Description |
|--------|--------|-----------|-------------|
| **get_mask_type()** | `int` | – | Returns the current mask type. |
| **set_mask_type(mask_type: int)** | `void` | `mask_type` | Sets the mask type. |
| **get_plane_count()** | `int` | – | Returns the number of mask planes. |
| **set_plane_count(count: int)** | `void` | `count` | Sets the number of mask planes. |
| **get_stereo_depth_offset()** | `float` | – | Returns the current stereo depth offset. |
| **set_stereo_depth_offset(offset: float)** | `void` | `offset` | Sets the depth offset. |
| **get_mesh()** | `RID` | – | Returns the custom mesh (if used). |
| **set_mesh(mesh: RID)** | `void` | `mesh` | Sets the custom mesh for `MASK_TYPE_CUSTOM`. |

> *All property setters are automatically exposed to the editor; you can also use the shorthand syntax (`node.mask_type = …`).*

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| *none* | – | The `OpenXRVisibilityMask` class does not emit any signals. |

---

## Usage Example

```gdscript
# Create a visibility mask for a simple box-shaped field of view
var mask = OpenXRVisibilityMask.new()
mask.mask_type = OpenXRVisibilityMask.MASK_TYPE_BOX
mask.plane_count = 6           # e.g. front, back, left, right, top, bottom
mask.stereo_depth_offset = 0.01
add_child(mask)
```

> **Tip** – For custom shapes, create a `MeshInstance3D` with the desired geometry and assign its RID to the `mesh` property.

---

## Notes

* The node automatically handles stereo rendering; you do **not** need to modify the projection matrices manually.  
* Masks are only applied when running an OpenXR session; they have no visual effect in the normal editor viewport.  
* To adjust the mask per eye, use the `stereo_depth_offset` property so that each eye sees a slightly different depth value, preventing visual artifacts.

---

**Reference** – *Godot Engine 4.x documentation – Class Reference for `OpenXRVisibilityMask`.*