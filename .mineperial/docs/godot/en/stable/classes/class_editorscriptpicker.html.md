# EditorScriptPicker

*Godot Engine* – Class Reference  
*(stable version)*  

---

## Inheritance

```
EditorScriptPicker
 └─ EditorResourcePicker < HBoxContainer< BoxContainer< Container< Control< CanvasItem< Node< Object
```

The `EditorScriptPicker` is a specialized editor widget that allows users to select and assign a script to a node’s script property. It is built on top of `EditorResourcePicker`, providing a convenient UI for script selection, creation, and assignment within the Godot editor.

---

## Description

`EditorScriptPicker` is an editor control used to pick a script for a `Node`. It displays the current script (if any), allows the user to browse for an existing script resource, and provides a button to create a new script. The widget handles the following responsibilities:

* Showing the currently assigned script’s name.
* Opening a file dialog to select a script resource from the project.
* Creating a new script file using the selected language and template.
* Updating the node’s script property when the selection changes.
* Providing signals to notify other editor components of changes.

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `node` | `Node` | `null` | The node whose script property this picker is editing. |
| `script` | `Script` | `null` | The script currently assigned to the node. |
| `script_path` | `String` | `""` | File system path to the selected script. |
| `editable` | `bool` | `true` | Whether the user can modify the script assignment. |

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `script_changed` | `script : Script` | Emitted when the user changes the script assigned to the node. |

---

## Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `set_node(node: Node)` | `node : Node` | `void` | Sets the node that will be edited. |
| `get_node() -> Node` | – | `Node` | Returns the node currently being edited. |
| `set_script(script: Script)` | `script : Script` | `void` | Assigns a new script to the node. |
| `get_script() -> Script` | – | `Script` | Returns the script currently assigned. |
| `set_script_path(path: String)` | `path : String` | `void` | Loads a script from the given path and assigns it. |
| `get_script_path() -> String` | – | `String` | Returns the file path of the currently assigned script. |
| `_on_file_selected(path: String)` | `path : String` | `void` | Internal callback for the file dialog. |
| `_on_create_script_pressed()` | – | `void` | Internal callback to create a new script. |
| `update()` | – | `void` | Refreshes the UI to reflect the current script state. |

> **Note**: All public methods are declared `virtual` and may be overridden in subclasses to change behaviour or to integrate with custom editor tools.

---

## Usage Example

```gdscript
# In a custom inspector plugin
var picker = EditorScriptPicker.new()
picker.set_node(target_node)
picker.connect("script_changed", callable(self, "_on_script_changed"))

func _on_script_changed(new_script):
    print("Script changed to: ", new_script)
```

---

## See Also

* [EditorResourcePicker](../class_editorresourcepicker.html) – Base class for resource pickers in the editor.  
* [Script](../class_script.html) – Base class for all script resources.  
* [Node](../class_node.html) – The node to which the script will be assigned.

---