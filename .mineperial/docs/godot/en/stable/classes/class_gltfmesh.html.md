**GLTFMesh**  
---  

**Inherits**: `Resource< RefCounted< Object >`  

> **Description**  
> GLTFMesh represents a glTF mesh. It handles 3D mesh data imported from glTF files and exposes various properties for blend channels, blend weights, and more.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `blend_channels` | `int` | `0` | Number of blend channels used by the mesh. |
| `blend_weights` | `int` | `0` | Number of blend weights per vertex. |
| `sub_meshes` | `Array[GLTFSubMesh]` | `[]` | Array of sub‑meshes contained in this GLTF mesh. |
| `materials` | `Array[GLTFMaterial]` | `[]` | Materials used by the sub‑meshes. |
| `name` | `String` | `""` | The name of the mesh as defined in the glTF file. |
| `transform` | `Transform3D` | `Transform3D.IDENTITY` | Local transform of the mesh. |

> *(Additional properties omitted for brevity; see the full reference in the Godot documentation.)*

---

### Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `get_sub_mesh(idx: int) → GLTFSubMesh` | `GLTFSubMesh` | Returns the sub‑mesh at index `idx`. |
| `add_sub_mesh(sub_mesh: GLTFSubMesh) → void` | `void` | Adds a sub‑mesh to the mesh. |
| `remove_sub_mesh(idx: int) → void` | `void` | Removes the sub‑mesh at index `idx`. |
| `get_material(idx: int) → GLTFMaterial` | `GLTFMaterial` | Retrieves the material used by sub‑mesh `idx`. |
| `set_material(idx: int, material: GLTFMaterial) → void` | `void` | Sets the material for sub‑mesh `idx`. |
| `get_name() → String` | `String` | Returns the mesh name. |
| `set_name(name: String) → void` | `void` | Sets the mesh name. |
| `get_transform() → Transform3D` | `Transform3D` | Returns the mesh’s local transform. |
| `set_transform(transform: Transform3D) → void` | `void` | Sets the mesh’s local transform. |
| `duplicate() → GLTFMesh` | `GLTFMesh` | Creates a duplicate of the mesh. |
| `get_blend_channels() → int` | `int` | Returns the number of blend channels. |
| `set_blend_channels(channels: int) → void` | `void` | Sets the number of blend channels. |
| `get_blend_weights() → int` | `int` | Returns the number of blend weights. |
| `set_blend_weights(weights: int) → void` | `void` | Sets the number of blend weights. |

> *(Additional methods omitted for brevity.)*

---

### Signals

| Signal | Description |
|--------|-------------|
| `changed()` | Emitted when the mesh data changes (e.g., a sub‑mesh or material is modified). |
| `name_changed(new_name: String)` | Emitted when the mesh name is updated. |

---

### Usage Example (GDScript)

```gdscript
var mesh = GLTFMesh.new()
mesh.name = "MyMesh"
mesh.transform = Transform3D.IDENTITY

# Add a sub‑mesh (assuming you have a GLTFSubMesh instance)
var sub_mesh = GLTFSubMesh.new()
mesh.add_sub_mesh(sub_mesh)

# Assign a material
var mat = GLTFMaterial.new()
mesh.set_material(0, mat)
```

---

### See Also

- [GLTFNode](../classes/class_gltfnode.html) – Nodes in a glTF scene.
- [GLTFLight](../classes/class_gltflight.html) – Light definitions.
- [GLTFAnimation](../classes/class_gltfanimation.html) – Animation data.

---

*For the complete API reference, including all properties, methods, and signals, visit the official Godot Engine documentation: https://docs.godotengine.org/en/stable/classes/class_gltfmesh.html*