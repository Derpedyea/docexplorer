# QuadOccluder3D

`QuadOccluder3D` is a **resource** that represents a flat, rectangular plane used for occlusion culling in Godot 3D scenes.  
It is intended to be attached to an `OccluderInstance3D` node, which will use the shape to determine whether objects are hidden from a camera.

> **Inherited From**
> 
> * `Occluder3D`
> * `Resource`
> * `RefCounted`
> * `Object`

---

## Properties

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `size` | `Vector2` | `Vector2(1, 1)` | The dimensions of the quad in local space (width, height). The quad lies on the XY plane of the node, with its origin at the center. |

> *The property can be accessed and modified directly in the Godot editor or from GDScript using the usual property syntax (`quad_occluder.size = Vector2(2, 3)`).*

---

## Signals

None.

---

## Methods

`QuadOccluder3D` does not expose any additional methods beyond those inherited from `Occluder3D`. All manipulation is performed via its properties.

---

## Example (GDScript)

```gdscript
# Create a new QuadOccluder3D resource
var occluder := QuadOccluder3D.new()
occluder.size = Vector2(4, 2)  # 4 units wide, 2 units tall

# Create an OccluderInstance3D node in the scene
var occluder_instance := OccluderInstance3D.new()
occluder_instance.occluder = occluder
add_child(occluder_instance)

# Position the occluder in world space
occluder_instance.transform.origin = Vector3(0, 1, 0)
occluder_instance.rotate_x(deg_to_rad(90))  # Place it horizontally
```

In the editor, you can also create a `QuadOccluder3D` resource from the *File* → *New Resource* menu, choose **QuadOccluder3D**, set its size in the Inspector, and then assign it to an `OccluderInstance3D`.

---

## Usage Tips

* **Placement** – The quad is a 2‑D shape in 3‑D space. Its normal is always aligned with the node’s local `z+` axis. Rotate it to match the surface you wish to occlude.
* **Performance** – Because occluders are evaluated once per camera frame, keeping the number of occluders small and their geometry simple (e.g., using `QuadOccluder3D` instead of custom meshes) helps maintain good frame rates.
* **Combining with other occluders** – A scene can have multiple `OccluderInstance3D` nodes, each using its own `QuadOccluder3D`. They can overlap or be nested; the engine will compute occlusion based on the union of all enabled occluders.

---

## Related Classes

* **`OccluderInstance3D`** – Node that references an `Occluder3D` resource (including `QuadOccluder3D`) to actually perform occlusion culling.
* **`Occluder3D`** – Base class for all occluder resources.  
* **`OccluderMeshInstance3D`** – Another way to define custom occluder shapes using a `Mesh`.

---

*For more detailed API information, consult the full [Godot Engine 4.3 class reference](https://docs.godotengine.org/en/stable/classes/class_quadoccluder3d.html).*