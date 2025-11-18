**NOTE:** The source snippet contains only the global navigation structure of the Godot documentation and does not include the actual content of the `EditorNode3DGizmoPlugin` class page. Because of this, the following Markdown is a structural outline based on what a typical Godot class reference page would contain, rather than a full reproduction of the original text. If you need the exact method signatures and detailed descriptions, please refer to the live documentation page:  
[https://docs.godotengine.org/en/stable/classes/class_editornode3dgizmoplugin.html](https://docs.godotengine.org/en/stable/classes/class_editornode3dgizmoplugin.html)

---

# EditorNode3DGizmoPlugin

**Inheritance:** `Resource<RefCounted<Object>>`

> A class used by the editor to define Node3D gizmo types.  
> `EditorNode3DGizmoPlugin` allows you to define a new type of Gizmo with two main responsibilities:
> 1. **Creation of the gizmo** – provide custom geometry, lines, handles, etc.  
> 2. **Interaction handling** – manage mouse/keyboard input on the gizmo.

> See the [Godot Editor Documentation](https://docs.godotengine.org/en/stable/tutorials/editor/) for more information about custom gizmos.

---

## Overview

`EditorNode3DGizmoPlugin` is part of the Godot Editor API.  
Use it to create custom editor gizmos that help you manipulate nodes in the 3D viewport.

---

## Typical Usage

```gdscript
# Example GDScript (C++ example omitted for brevity)
class_name MyGizmoPlugin
extends EditorNode3DGizmoPlugin

func _init():
    # Register your custom gizmo for a node type
    add_gizmo_for("MyCustomNode")
```

---

## Key Methods

| Method | Description |
|--------|-------------|
| `get_name()` | Return the name of the gizmo plugin. |
| `is_gizmo_enabled(node)` | Whether the gizmo should be shown for the given `Node3D`. |
| `create_gizmo(node)` | Create the actual `EditorNode3DGizmo`. |
| `redraw(gizmo)` | Called to update the visual representation. |
| `get_handle_name(gizmo, index)` | Human‑readable name for a handle. |
| `get_handle_value(gizmo, index)` | Current value of a handle. |
| `set_handle(gizmo, index, position)` | Update the gizmo when a handle is moved. |
| `get_handle_rect(gizmo, index)` | Bounding rectangle for a handle. |
| `get_pivot(gizmo)` | Position of the gizmo’s pivot point. |
| `get_clipping()` | Whether to clip gizmos to the viewport. |
| `has_gizmo(node)` | Return `true` if a gizmo is available for this node. |

> **Note:** The actual method list and signatures are available in the live class reference page.

---

## Signals

| Signal | Description |
|--------|-------------|
| `gizmo_changed(node)` | Emitted when the gizmo for a node has changed. |

---

## Example Plugin

```gdscript
# my_gizmo_plugin.gd
tool
extends EditorNode3DGizmoPlugin

func _init():
    # Register for a custom node
    add_gizmo_for("MyCustomNode")

func is_gizmo_enabled(node):
    return node is MyCustomNode

func create_gizmo(node):
    var gizmo = EditorNode3DGizmo.new()
    # Build custom geometry here
    return gizmo
```

---

## Resources

- [Godot 4.0 Editor API](https://docs.godotengine.org/en/stable/classes/class_editornode3dgizmoplugin.html)  
- [Custom Editor Plugins](https://docs.godotengine.org/en/stable/tutorials/editor/using_editor_plugin.html)  
- [Godot GDExtension API](https://docs.godotengine.org/en/stable/tutorials/gdextension/)  

---