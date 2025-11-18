**NOTE:** The original page contains a large amount of navigation and unrelated content.  
Below is a concise, well‑structured Markdown conversion that focuses on the actual documentation for the `GLTFState` class in Godot.

---

# GLTFState

*Class reference – Godot Engine 4.x (stable)*  

`GLTFState` represents all data of a glTF file. It is used by `GLTFDocument` to import/export GLTF scenes and resources.

---

## Inheritance

```
Resource
 └─ RefCounted
     └─ Object
```

**Inherited By**

- `FBXState`

---

## Description

`GLTFState` contains all nodes, meshes, materials, textures, and other resources that make up a glTF file.  
It can be created, populated, and inspected programmatically, and it can also be passed to the importer/exporter APIs.

---

## Methods

| Signature | Description |
|-----------|-------------|
| `new()` | Returns a new, empty `GLTFState`. |
| `clear()` | Removes all nodes and resources from the state. |
| `duplicate()` | Creates a deep copy of the state. |
| `get_nodes()` | Returns an array of all scene nodes stored in the state. |
| `get_resources()` | Returns a dictionary of all resources (meshes, materials, textures, etc.). |
| `add_node(Node node)` | Adds a node to the state. |
| `remove_node(Node node)` | Removes a node from the state. |
| `get_node_count()` | Returns the number of nodes in the state. |
| `get_resource_count()` | Returns the number of resources in the state. |
| `merge(GTLFState other)` | Merges another `GLTFState` into this one. |
| `save(String path)` | Writes the state to a file in GLTF format. |
| `load(String path)` | Loads a GLTF file into a new `GLTFState`. |

*Note: The actual Godot documentation lists all available methods with full signatures and default parameter values. Refer to the API reference for the most up‑to‑date details.*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `root_node` | `Node` | `null` | The root node of the imported scene. |
| `nodes` | `Array[Node]` | `[]` | All nodes stored in the state. |
| `resources` | `Dictionary` | `{}` | Mapping of resource identifiers to the actual resources. |
| `version` | `String` | `"1.0"` | The GLTF version being used. |
| `asset_path` | `String` | `""` | Path to the source GLTF file (if loaded). |

---

## Usage Example

```gdscript
# Load a GLTF file into a GLTFState
var gltf_state = GLTFState.new()
var err = gltf_state.load("res://models/example.gltf")
if err != OK:
    push_error("Failed to load GLTF: %s" % err)

# Access the root node and add it to the scene tree
var root = gltf_state.root_node
get_tree().get_root().add_child(root)

# Iterate over all resources
for id in gltf_state.resources.keys():
    var res = gltf_state.resources[id]
    print("%s -> %s" % [id, res])
```

---

## Related Classes

- **`GLTFDocument`** – Importer/exporter that operates on `GLTFState`.  
- **`GLTFMesh`**, **`GLTFMaterial`**, **`GLTFTexture`** – Specific resource types stored in a `GLTFState`.  
- **`FBXState`** – Analogous class for FBX files.

---

## See Also

- [GLTFState API Reference](https://docs.godotengine.org/en/stable/classes/class_gltfstate.html)  
- [GLTFDocument](https://docs.godotengine.org/en/stable/classes/class_gltfdocument.html)  
- [GLTF Import / Export](https://docs.godotengine.org/en/stable/tutorials/3d/gltf_import.html)

---