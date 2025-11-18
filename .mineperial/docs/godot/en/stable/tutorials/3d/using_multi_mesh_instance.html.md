**Using MultiMeshInstance3D**  
*Godot Engine (stable) documentation*

---

### Introduction  
In a normal scenario you would use a `MeshInstance3D` node to display a single 3D mesh (e.g. a human model).  
When you need to draw many copies of the same mesh—like a flock of birds or a field of grass—it is far more efficient to use a `MultiMeshInstance3D`.  
This node uses a single draw call for thousands of instances, dramatically reducing GPU overhead.

> **Why use MultiMesh?**  
> - One mesh → many instances  
> - CPU‑friendly, because all instances share the same geometry, material, and many transforms  
> - Great for procedurally generated environments, particle systems, foliage, etc.

---

### How MultiMeshInstance3D works  
A `MultiMeshInstance3D` holds a `MultiMesh` resource, which contains:
| Property | Description |
|----------|-------------|
| `transform_format` | 3×3 or 4×4 transform matrix per instance |
| `color_format` | Vertex color per instance |
| `custom_data_format` | Custom per‑instance data (e.g., for shaders) |
| `instance_count` | Number of instances to render |
| `instance_transform` | Array of per‑instance transforms |
| `instance_color` | Array of per‑instance colors |
| `instance_custom_data` | Array of custom data |

You normally create the MultiMesh in code and update it from a script, but you can also edit it in the inspector.

---

### Quick Example

```gdscript
# Example: create 1000 grass instances

@onready var multimesh : MultiMeshInstance3D = $Grass

func _ready() -> void:
    var multimesh_resource = MultiMesh.new()
    multimesh_resource.mesh = preload("res://grass.tres")
    multimesh_resource.instance_count = 1000
    multimesh_resource.transform_format = MultiMesh.TRANSFORM_3D
    multimesh_resource.color_format = MultiMesh.COLOR_NONE
    multimesh_resource.custom_data_format = MultiMesh.CUSTOM_DATA_NONE

    # Randomly distribute instances in a 20x20 area
    var rng = RandomNumberGenerator.new()
    rng.randomize()
    for i in range(multimesh_resource.instance_count):
        var pos = Vector3(rng.randf_range(-10, 10), 0, rng.randf_range(-10, 10))
        var transform = Transform3D(Basis(), pos)
        multimesh_resource.set_instance_transform(i, transform)

    multimesh.multimesh = multimesh_resource
```

> **Tip** – If you need per‑instance colors or custom shader data, set the appropriate format and fill the arrays with `set_instance_color()` or `set_instance_custom_data()`.

---

### Updating the MultiMesh

You can update individual instances during runtime:

```gdscript
func move_instance(index: int, new_pos: Vector3) -> void:
    var m = multimesh.multimesh
    var transform = m.get_instance_transform(index)
    transform.origin = new_pos
    m.set_instance_transform(index, transform)
```

Changing `instance_count` triggers the GPU to allocate a new buffer.  
For large numbers of instances, avoid frequent changes to the entire array; instead modify only what you need.

---

### Using Shaders with MultiMesh

When you need per‑instance parameters (e.g., scale variations), use the `custom_data_format` and a shader:

```glsl
// Vertex shader
void vertex() {
    mat4 model = instance_transform * mat4(vec3(scale), vec3(0.0));
    COLOR = instance_color;
}
```

Set `custom_data_format = MultiMesh.CUSTOM_DATA_32_BIT` and then:

```gdscript
m.set_instance_custom_data(index, Color(1, 0, 0))  # Example
```

---

### Common Use‑Cases

| Scenario | Why MultiMesh is beneficial |
|----------|-----------------------------|
| **Foliage** | Hundreds of grass blades, trees, etc., drawn in a single pass |
| **Particles** | Custom particle systems where physics is not required |
| **Crowds** | Instantiating many NPCs with identical meshes |
| **Procedural terrain** | Placing rocks, stones, or other features efficiently |

---

### Limitations

- All instances share the same mesh and material. If you need different materials, use separate MultiMeshInstances or a `MultiMeshInstance3D` per material.
- Per‑instance animations are not supported directly; use a separate `AnimationPlayer` for each instance if necessary.

---

### Resources

- [MultiMesh Class Reference](https://docs.godotengine.org/en/stable/classes/class_multimesh.html)  
- [MultiMeshInstance3D Class Reference](https://docs.godotengine.org/en/stable/classes/class_multimeshinstance3d.html)  
- Example projects on the [Godot GitHub](https://github.com/godotengine/godot) repository.

---