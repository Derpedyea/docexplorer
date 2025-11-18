# EditorResourcePicker

The **EditorResourcePicker** is a Godot editor control that allows users to select a resource of a particular type.  
It is used internally by the editor (e.g. by `EditorScriptPicker`) and can be embedded in custom editor plugins.

---

## Inheritance Tree

```
Object
 └─ Node
     └─ CanvasItem
         └─ Control
             └─ Container
                 └─ BoxContainer
                     └─ HBoxContainer
                         └─ EditorResourcePicker
```

## Basic Description

* **Purpose** – Provides a UI element for selecting a resource of a specified type.
* **Usage** – Typically used in editor plugins or custom inspector controls that need a resource picker.

---

## API Overview

> *Note: The full API is available in the official Godot documentation. The following sections give a quick reference for the most commonly used methods and signals.*

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `editable` | `bool` | If `true`, the picker can be edited by the user. |
| `resource` | `Resource` | The currently selected resource. |
| `resource_type` | `String` | The type of resource that can be selected (e.g. `"Texture"`, `"Shader"`, etc.). |
| `allow_create` | `bool` | Whether the picker allows creating a new resource of the specified type. |

> *(All properties are exposed as exported variables in GDScript, so they can be set in the inspector.)*

### Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_editable(editable: bool)` | void | Sets whether the picker is editable. |
| `set_resource(resource: Resource)` | void | Sets the currently selected resource. |
| `get_resource() → Resource` | Resource | Returns the currently selected resource. |
| `set_resource_type(type: String)` | void | Restricts the picker to resources of a specific type. |
| `get_resource_type() → String` | String | Returns the current resource type restriction. |

### Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `resource_changed(resource: Resource)` | `Resource` | Emitted when the user selects a different resource. |
| `resource_selected(resource: Resource)` | `Resource` | Emitted when a resource is chosen (e.g., after clicking OK in the picker dialog). |

---

## Example: Using the Picker in GDScript

```gdscript
extends EditorResourcePicker

func _ready():
    # Restrict the picker to Texture resources
    set_resource_type("Texture")
    set_editable(true)

func _on_resource_changed(new_res):
    print("Picked resource:", new_res)
```

---

## Related Classes

- **EditorScriptPicker** – A specialized picker for selecting Godot scripts.  
- **EditorResourcePreview** – A control that displays a preview of a `Resource`.  

---

## Further Reading

- [EditorScriptPicker](../classes/class_editorscriptpicker.html)  
- [EditorResourcePreview](../classes/class_editorresourcepreview.html)  

---