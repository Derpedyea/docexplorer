**MultiMesh**  
*Godot Engine – Class Reference*  

---  

### Inheritance  
```
Resource
 └─ RefCounted
     └─ Object
```

---

### Overview
`MultiMesh` is a low‑level type used for high‑performance rendering of a single mesh many times using GPU instancing.  
Typical use‑case: drawing hundreds/thousands of identical objects (e.g. foliage, particle systems) with minimal CPU overhead.

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| **mesh** | `Mesh` | `null` | The base mesh to instance. |
| **instance_count** | `int` | `0` | Total number of instances (max 8,388,607). |
| **visible_instances** | `int` | `instance_count` | Number of instances actually rendered. |
| **transform_format** | `TransformFormat` (`0 = Baked`, `1 = Transform`) | `Transform` | How the per‑instance transform is stored. |
| **color_format** | `ColorFormat` (`0 = None`, `1 = Color`) | `None` | Whether per‑instance vertex colors are used. |
| **custom_data_format** | `CustomDataFormat` (`0 = None`, `1 = Color`, `2 = Float`) | `None` | Per‑instance custom data. |
| **instance_transform** | `Transform3D[]` | – | Array of instance transforms (size = `instance_count`). |
| **instance_color** | `Color[]` | – | Array of instance colors (size = `instance_count`). |
| **instance_custom_data** | `PackedByteArray` / `PackedFloat32Array` | – | Custom data per instance. |
| **cull_instance** | `bool[]` | – | Whether each instance should be culled. |

> **Note**  
> *All per‑instance arrays must be pre‑allocated to the size of `instance_count` before setting them.*

---

## Methods

| Method | Signature | Description |
|--------|------------|-------------|
| **set_mesh** | `void set_mesh(Mesh mesh)` | Sets the mesh to instance. |
| **get_mesh** | `Mesh get_mesh()` | Returns the current mesh. |
| **set_instance_count** | `void set_instance_count(int count)` | Allocates storage for `count` instances. |
| **get_instance_count** | `int get_instance_count()` | Returns the total instance count. |
| **set_visible_instance** | `void set_visible_instance(int idx, bool visible)` | Makes a particular instance visible/invisible. |
| **is_instance_visible** | `bool is_instance_visible(int idx)` | Checks visibility of an instance. |
| **set_instance_transform** | `void set_instance_transform(int idx, Transform3D transform)` | Sets a transform for an instance. |
| **get_instance_transform** | `Transform3D get_instance_transform(int idx)` | Retrieves an instance's transform. |
| **set_instance_color** | `void set_instance_color(int idx, Color color)` | Sets per‑instance vertex color. |
| **get_instance_color** | `Color get_instance_color(int idx)` | Retrieves an instance's color. |
| **set_instance_custom_data** | `void set_instance_custom_data(int idx, PackedByteArray data)`<br>`void set_instance_custom_data(int idx, PackedFloat32Array data)` | Stores per‑instance custom data. |
| **get_instance_custom_data** | `PackedByteArray get_instance_custom_data(int idx)`<br>`PackedFloat32Array get_instance_custom_data(int idx)` | Reads custom data. |
| **set_instance_cull_instance** | `void set_instance_cull_instance(int idx, bool cull)` | Enables/disables per‑instance culling. |
| **is_instance_cull_instance** | `bool is_instance_cull_instance(int idx)` | Checks cull state. |
| **get_visible_instances** | `int get_visible_instances()` | Returns number of instances actually rendered. |
| **set_visible_instances** | `void set_visible_instances(int count)` | Sets how many of the first N instances should be rendered. |
| **set_use_colors** | `void set_use_colors(bool use)` | Enable/disable per‑instance vertex colors. |
| **has_use_colors** | `bool has_use_colors()` | Returns whether colors are in use. |
| **set_use_custom_data** | `void set_use_custom_data(bool use)` | Enable/disable custom data. |
| **has_use_custom_data** | `bool has_use_custom_data()` | Returns whether custom data is in use. |
| **set_transform_format** | `void set_transform_format(TransformFormat format)` | Sets transform storage format. |
| **get_transform_format** | `TransformFormat get_transform_format()` | Returns current transform format. |
| **set_color_format** | `void set_color_format(ColorFormat format)` | Sets color storage format. |
| **get_color_format** | `ColorFormat get_color_format()` | Returns current color format. |
| **set_custom_data_format** | `void set_custom_data_format(CustomDataFormat format)` | Sets custom data format. |
| **get_custom_data_format** | `CustomDataFormat get_custom_data_format()` | Returns current custom data format. |

---

## Usage Example (GDScript)

```gdscript
# Create a MultiMesh instance
var mm = MultiMesh.new()
mm.mesh = preload("res://tree.tres")          # Mesh to instance
mm.instance_count = 1000                      # 1,000 instances
mm.visible_instances = 1000

# Position instances in a grid
for i in range(mm.instance_count):
    var transform = Transform3D(Basis(), Vector3(i % 10 * 2, 0, i / 10 * 2))
    mm.set_instance_transform(i, transform)
    mm.set_instance_color(i, Color.rand())
```

Attach the `MultiMesh` to a `MultiMeshInstance3D` node to draw:

```gdscript
var instance = MultiMeshInstance3D.new()
instance.multimesh = mm
add_child(instance)
```

---

### Notes

- **Performance**: The GPU handles most of the instancing. Only the transform (and optional color/custom data) arrays need to be updated on the CPU.  
- **Thread safety**: `MultiMesh` is not thread‑safe; update it from the main thread or guard with locks if accessed from worker threads.  
- **Limits**: The maximum instance count is 8,388,607 (2^23−1).  

For detailed API reference, see the official Godot documentation page:  
[https://docs.godotengine.org/en/stable/classes/class_multimesh.html](https://docs.godotengine.org/en/stable/classes/class_multimesh.html)