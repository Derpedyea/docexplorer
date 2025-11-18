**BoxOccluder3D**

*Inherited from:* `Occluder3D` → `Resource` → `RefCounted` → `Object`

BoxOccluder3D stores a simple axis‑aligned cuboid shape that can be used by
`OccluderInstance3D` for occlusion culling. It is a lightweight, data‑only
resource – the visualisation and world transform are handled by the
`OccluderInstance3D` node that references it.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `extents` | `Vector3` | `(0, 0, 0)` | Half‑size of the box (i.e. the box spans from `-extents` to `+extents`). |

> **Note:** The extents define the bounds of the occluder. Adjusting this
> value changes the area that will be culled from the renderer.

---

### Example usage

```gdscript
# Create a new BoxOccluder3D resource
var box_occluder = BoxOccluder3D.new()
box_occluder.extents = Vector3(2, 1, 3)

# Add an OccluderInstance3D node to the scene
var occluder_instance = OccluderInstance3D.new()
occluder_instance.occluder = box_occluder
occluder_instance.transform = Transform3D(BASIS_IDENTITY, Vector3(0, 0, 0))

# Add it to the scene tree
add_child(occluder_instance)
```

In this example a box of size `4 × 2 × 6` (since extents are half‑sizes) is
placed at the origin. The `OccluderInstance3D` will automatically use this
resource for occlusion culling.

---

### Related classes

- **`OccluderInstance3D`** – Node that holds a reference to an
  `Occluder3D` resource (such as `BoxOccluder3D`) and a transform.
- **`ConvexPolygonOccluder3D`** – Another occluder resource that uses a
  convex polygon instead of a box.
- **`BoxShape3D`** – Geometry class for collision shapes, not to be confused
  with the occlusion resource above.

---

### Documentation references

- [Class Reference – BoxOccluder3D](https://docs.godotengine.org/en/stable/classes/class_boxoccluder3d.html)
- [OccluderInstance3D Node](https://docs.godotengine.org/en/stable/classes/class_occluderinstance3d.html)
- [Occlusion Culling](https://docs.godotengine.org/en/stable/tutorials/optimization/occlusion_culling.html)

---

**End of BoxOccluder3D documentation.**