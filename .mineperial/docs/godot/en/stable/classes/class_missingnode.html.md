**MissingNode**  
================

*Inherits:* `Node<Object>`

This is an **internal editor class** used by Godot to store the data of nodes that the editor does not recognize.  
When a scene is loaded that contains a node type that is no longer available (for example, a node that has been removed or renamed in a newer engine version), the editor creates a `MissingNode` instance to preserve the node’s data and keep the scene loadable.  

---

### Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `type_name` | `String` | The original type name that the missing node was supposed to be. |
| `original_name` | `String` | The original name of the node in the scene. |
| `script` | `String` | Path to the script that was attached to the node (if any). |
| `resource` | `String` | Path to any resources that were used by the node. |

*(Note: `MissingNode` is not intended for use in user scripts – it is only a placeholder used internally by the editor.)*

---

### Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `get_type_name()` | `String` | Returns the original node type name. |
| `set_type_name(String name)` | `void` | Sets the original type name. |
| `get_original_name()` | `String` | Returns the original node name. |
| `set_original_name(String name)` | `void` | Sets the original node name. |
| `get_script()` | `String` | Returns the script path attached to the node. |
| `set_script(String script)` | `void` | Sets the script path. |
| `get_resource()` | `String` | Returns the resource path. |
| `set_resource(String resource)` | `void` | Sets the resource path. |

These methods provide minimal access to the data stored by the `MissingNode`. The editor will automatically create and delete these placeholders during scene parsing.

---

### Usage

You normally never need to interact with `MissingNode` directly.  
If you encounter a node of this type in a project, it means the original node type could not be resolved. To fix this:

1. **Install or enable the missing script / node** in your project or an import of the appropriate Godot version.
2. **Reopen the scene** – the editor will replace the `MissingNode` with the correct node type if it can be found.
3. If the original node type is no longer available, consider **renaming or recreating** the node manually.

---

### References

* Godot Engine Documentation – [Class Reference](https://docs.godotengine.org/en/stable/classes/class_missingnode.html)  
* Godot Engine Community – [Missing Node Handling](https://github.com/godotengine/godot/issues)

---