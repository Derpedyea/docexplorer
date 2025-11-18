**ScriptEditorBase**  
======================

`ScriptEditorBase` is an abstract class that provides the foundational
functionality for script editors in Godot.  It is the base class for
the concrete editors such as the GDScript editor, C# editor, and any
custom script editor that may be added by the community.

> **Inherits**  
> `VBoxContainer` → `BoxContainer` → `Container` → `Control` →
> `CanvasItem` → `Node` → `Object`

---

## Overview

The class is responsible for handling the following core concerns:

| Concern | Description |
|---------|-------------|
| **Script editing** | Provides a text editor area, syntax highlighting and
  basic editing features (undo/redo, line numbers, etc.). |
| **Editor integration** | Connects to the `EditorInterface` for
  interacting with the rest of the Godot editor (e.g. file system,
  project settings, script compilation). |
| **Extensibility** | Exposes virtual methods that allow subclasses to
  implement language‑specific behaviour (parsing, completion, debug
  integration). |

> **Key use‑case** – Whenever you want to add support for a new
> scripting language, you inherit from `ScriptEditorBase`, implement the
> required virtual methods and register the editor with Godot’s
> editor‑plugin system.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `script_changed` | `Script` | Emitted when the current script is changed or updated. |
| `cursor_changed` | `int` | Emitted when the editor’s cursor moves; the integer is the
  new line/column. |
| `save_requested` | | Emitted when the user requests to save the current
  script (e.g., from the file menu). |

---

## Public Methods

Below is a summary of the public API.  For the full method signatures,
please refer to the generated class reference or the Godot source code.

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `get_editor_interface()` | `EditorInterface*` | | Returns a pointer to the global
  editor interface. |
| `get_script()` | `Script*` | | Returns the currently opened script. |
| `get_text()` | `String` | | Returns the full text content of the editor. |
| `set_text(String)` | | `String` | Sets the editor’s text content. |
| `save_script()` | `bool` | | Saves the current script to disk; returns `true` on
  success. |
| `undo()` | | | Performs an undo operation. |
| `redo()` | | | Performs a redo operation. |
| `cut()` | | | Cuts the selected text. |
| `copy()` | | | Copies the selected text. |
| `paste()` | | | Pastes from the clipboard. |
| `find(String)` | `int` | `String` | Searches for a string; returns the line number
  where it was found or `-1`. |
| `replace(String, String)` | `int` | `String, String` | Replaces occurrences of a string; returns
  the number of replacements. |
| `set_read_only(bool)` | | `bool` | Marks the editor as read‑only. |
| `is_read_only()` | `bool` | | Indicates whether the editor is read‑only. |

> **Notes**  
> - Most of these methods are virtual and can be overridden by
>   subclasses to provide language‑specific behaviour (e.g., GDScript
>   may override `replace()` to honour case‑insensitive searches).
> - The class uses Godot’s `Signal` system so that plugins can listen
>   for events such as `save_requested` or `script_changed`.

---

## Example: Registering a Custom Script Editor

Below is a minimal example of how a plugin would extend
`ScriptEditorBase` to support a custom language.

```gdscript
# custom_script_editor.gd
extends ScriptEditorBase

func _init() -> void:
    # Custom initialization
    pass

func _save_script() -> bool:
    # Override to implement custom save logic
    var file := FileAccess.open(get_script().resource_path, FileAccess.WRITE)
    if file:
        file.store_string(get_text())
        file.close()
        return true
    return false
```

```gdscript
# plugin.gd
extends EditorPlugin

var _editor : CustomScriptEditor

func _enter_tree() -> void:
    _editor = preload("res://custom_script_editor.gd").new()
    add_control_to_bottom_panel(_editor, "CustomScript")

func _exit_tree() -> void:
    remove_control_from_bottom_panel(_editor)
```

---

## Documentation Resources

* **Godot Manual – Script Editors**  
  [Script Editor](https://docs.godotengine.org/en/stable/tutorials/editor/script_editor.html)

* **Godot API – Class Reference**  
  [ScriptEditorBase Class](https://docs.godotengine.org/en/stable/classes/class_scripteditorbase.html)

* **Source Code**  
  Available on GitHub: `scene/main/script_editor_base.h` and
  `scene/main/script_editor_base.cpp`

Feel free to extend this class to add new editor features or to
create a full‑fledged language support plugin.