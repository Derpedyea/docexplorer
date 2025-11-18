**Optimization using MultiMeshes**  
*Godot Engine Documentation – Stable*

---

### Overview

When you need to render **thousands of identical or similar objects** (e.g., foliage, particles, crowds, or any other instance that requires frequent updates), using individual `MeshInstance3D` nodes is too expensive.  
`MultiMeshInstance3D` (and the low‑level `MultiMeshServer`) let you batch many instances into a single draw call, dramatically improving performance while still allowing per‑instance control.

---

## 1. When to use a MultiMesh

| Scenario | Why MultiMesh is helpful |
|----------|--------------------------|
| **Static or semi‑static geometry** (e.g., trees, rocks) | All instances share the same mesh and material; they can be rendered in one batch. |
| **Large dynamic crowds or particle systems** | Each instance can move, rotate, or animate individually, but you still get a single draw call. |
| **Procedurally generated worlds** | You can stream and update many instances on the fly without creating separate nodes. |

---

## 2. Basics of `MultiMeshInstance3D`

`MultiMeshInstance3D` is a scene‑tree node that contains a `MultiMesh`.  
The `MultiMesh` stores all per‑instance transform and color data in a GPU‑side buffer.

```gdscript
# Create a MultiMeshInstance3D and assign a MultiMesh
var multimesh_instance := MultiMeshInstance3D.new()
var multimesh := MultiMesh.new()
multimesh_instance.multimesh = multimesh
add_child(multimesh_instance)
```

### Setting up the MultiMesh

```gdscript
# Configure the MultiMesh
multimesh.transform_format = MultiMesh.TRANSFORM_3D
multimesh.color_format = MultiMesh.COLOR_8_BIT
multimesh.instance_count = 1000   # number of instances

# Provide the mesh and material
multimesh.mesh = preload("res://tree.tscn").mesh
multimesh.default_color = Color(1, 1, 1)
```

---

## 3. Updating Instances

You can modify any instance’s transform (or color) at runtime:

```gdscript
# Randomly place instances
for i in range(multimesh.instance_count):
    var transform = Transform3D()
    transform.origin = Vector3(randf() * 20, 0, randf() * 20)
    multimesh.set_instance_transform(i, transform)
```

For more dynamic behavior, consider using the high‑level `MultiMeshInstance3D` API (`set_instance_transform`, `set_instance_color`) or the low‑level `MultiMeshServer`.

---

## 4. Using the MultiMeshServer (Direct Server API)

The server API can be more efficient if you don’t need a node in the scene tree.

```gdscript
var server = MultiMeshServer
var multimesh_id = server.create_multimesh()

# Configure the MultiMesh on the server
server.set_multimesh_transform_format(multimesh_id, MultiMesh.TRANSFORM_3D)
server.set_multimesh_color_format(multimesh_id, MultiMesh.COLOR_8_BIT)
server.set_multimesh_instance_count(multimesh_id, 1000)
server.set_multimesh_mesh(multimesh_id, preload("res://tree.tscn").mesh)
```

Later you can update transforms:

```gdscript
for i in range(server.get_multimesh_instance_count(multimesh_id)):
    var transform = Transform3D()
    transform.origin = Vector3(randf() * 20, 0, randf() * 20)
    server.set_multimesh_instance_transform(multimesh_id, i, transform)
```

When finished, delete the MultiMesh:

```gdscript
server.free_multimesh(multimesh_id)
```

---

## 5. Best Practices

| Tip | Explanation |
|-----|-------------|
| **Reuse the same mesh and material** | All instances should share the same resources; otherwise the GPU may still split draw calls. |
| **Keep `instance_count` as low as needed** | Only set the count you actually need; excess space is wasted. |
| **Batch similar groups** | If you have two different types of objects, create separate `MultiMeshInstance3D` nodes for each. |
| **Use `MultiMeshServer` for procedural streams** | You can create and update MultiMeshes on the fly without adding them to the tree, which is useful for very large or dynamic scenes. |
| **Profile with Godot’s profiler** | Compare frame times with and without MultiMeshes to verify gains. |

---

## 6. Common Pitfalls

- **Updating too often** – Frequent per‑frame changes to many instances can negate the benefits. Try to batch updates or use fewer instances if possible.
- **Large per‑instance data** – Adding custom data (e.g., a `Vector4` or extra `int` fields) will increase memory usage.
- **Changing materials** – Changing the material on a MultiMesh after it’s in the scene tree can cause a redraw of the entire batch.

---

## 7. Further Reading

- **[GPU optimization](../performance/gpu_optimization.html)** – General GPU tips for Godot.
- **[Reducing stutter from shader (pipeline) compilations](../performance/pipeline_compilations.html)** – Keep shaders simple for large batches.

---

**Author:** Godot Documentation Team  
**Last updated:** (Date from docs)

---