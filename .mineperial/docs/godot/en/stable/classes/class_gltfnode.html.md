**Note:** The full class reference is extensive; only a representative subset is included below for illustration purposes. For complete details, see the official Godot documentation at the link above.  

# GLTFNode

*Inherits:* `Resource`

**Description**  
Represents a node in a glTF scene. A glTF node can contain a name, a local transform, children (other glTF nodes), and various node‑specific properties such as meshes, cameras, lights, etc.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | `String` | The name of the node. |
| `node_index` | `int` | The index of this node in the GLTF file. |
| `children` | `Array[GLTFNode]` | Child nodes. |
| `mesh` | `GLTFMesh` | Reference to a mesh resource (if any). |
| `camera` | `GLTFCamera` | Reference to a camera resource (if any). |
| `light` | `GLTFLight` | Reference to a light resource (if any). |
| `skin` | `GLTFSkin` | Reference to a skin resource (if any). |
| `joints` | `Array[int]` | Indices of joints for skinned meshes. |
| `weights` | `Array[float]` | Weights for skinned meshes. |
| `matrix` | `Transform3D` | Local transform matrix. |
| `scale` | `Vector3` | Local scale. |
| `rotation` | `Quaternion` | Local rotation. |
| `translation` | `Vector3` | Local translation. |
| `type` | `int` | Node type flag (mesh, camera, light, etc.). |
| `extras` | `Dictionary` | Custom user data. |

---

## Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `get_name()` | `String` | – | Returns the node’s name. |
| `set_name(name: String)` | – | `name` | Sets the node’s name. |
| `get_index()` | `int` | – | Returns the node’s index. |
| `set_index(index: int)` | – | `index` | Sets the node’s index. |
| `get_parent()` | `int` | – | Returns the parent node index. |
| `set_parent(parent: int)` | – | `parent` | Sets the parent node index. |
| `get_children()` | `Array[GLTFNode]` | – | Returns child nodes. |
| `add_child(child: GLTFNode)` | – | `child` | Adds a child node. |
| `remove_child(child: GLTFNode)` | – | `child` | Removes a child node. |
| `has_mesh()` | `bool` | – | Returns whether a mesh is attached. |
| `get_mesh()` | `GLTFMesh` | – | Returns the attached mesh. |
| `set_mesh(mesh: GLTFMesh)` | – | `mesh` | Sets the mesh. |
| `has_camera()` | `bool` | – | Returns whether a camera is attached. |
| `get_camera()` | `GLTFCamera` | – | Returns the camera. |
| `set_camera(camera: GLTFCamera)` | – | `camera` | Sets the camera. |
| `has_light()` | `bool` | – | Returns whether a light is attached. |
| `get_light()` | `GLTFLight` | – | Returns the light. |
| `set_light(light: GLTFLight)` | – | `light` | Sets the light. |
| `has_skin()` | `bool` | – | Returns whether a skin is attached. |
| `get_skin()` | `GLTFSkin` | – | Returns the skin. |
| `set_skin(skin: GLTFSkin)` | – | `skin` | Sets the skin. |
| `get_transform()` | `Transform3D` | – | Returns the node’s local transform. |
| `set_transform(transform: Transform3D)` | – | `transform` | Sets the local transform. |
| `get_extras()` | `Dictionary` | – | Returns the extras dictionary. |
| `set_extras(extras: Dictionary)` | – | `extras` | Sets the extras dictionary. |
| `to_string()` | `String` | – | Returns a string representation. |

*(Additional helper and utility methods are available in the full reference.)*

---

## Usage Example

```gdscript
# Load a GLTF file and access its nodes
var gltf = GLTFDocument.new()
var result = gltf.import_from_file("res://scene.glb")
if result != OK:
    push_error("Failed to import GLTF")

var root_node = gltf.get_root()
print("Root node name: ", root_node.get_name())

for child in root_node.get_children():
    print("Child: ", child.get_name())
```

---

### Related Classes

- `GLTFMesh` – Describes a mesh resource used by a node.  
- `GLTFCamera` – Describes a camera used by a node.  
- `GLTFLight` – Describes a light used by a node.  
- `GLTFSkin` – Describes a skin used for skinning.  

---