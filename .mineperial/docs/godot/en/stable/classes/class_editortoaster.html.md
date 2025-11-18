# EditorToaster – Godot Engine Class Reference

**Inherits**  
`HBoxContainer` → `BoxContainer` → `Container` → `Control` → `CanvasItem` → `Node` → `Object`

---

## Overview
`EditorToaster` is a lightweight UI component that displays temporary “toast” notifications inside the Godot editor.  
It is intended to be used by editor plugins or internal editor code to show brief messages (e.g. status updates, warnings, or confirmations) without interrupting workflow.

---

## Signals
| Signal | Description |
|--------|-------------|
| `toast_appeared` | Emitted when a new toast is displayed. |
| `toast_disappeared` | Emitted when a toast is removed after its timeout. |

---

## Methods

| Method | Description |
|--------|-------------|
| `void _init()` | Constructor. Sets up the container and default styling. |
| `void show_toast(String message, int duration = 2000)` | Displays a toast with the provided message for `duration` milliseconds. |
| `void clear_toasts()` | Immediately removes all active toasts. |
| `int get_active_toast_count()` | Returns the number of toasts currently displayed. |

*Note: Additional helper methods and internal callbacks are available but not documented in the public API.*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `int max_visible` | `int` | `5` | Maximum number of toasts shown simultaneously. |
| `int spacing` | `int` | `4` | Vertical space between toasts. |
| `bool auto_clear` | `bool` | `true` | If `true`, toasts fade out automatically after their duration. |

---

## Usage Example

```gdscript
var toaster = EditorToaster.new()
get_editor_interface().add_control_to_container(EditorInterface.CONTAINER_SPATIAL_EDITOR_MENU, toaster)

func _ready():
    toaster.show_toast("Project saved!", 3000)
```

This script creates an `EditorToaster`, adds it to the editor’s menu container, and displays a simple toast message.

---

## Related Classes

- [EditorPlugin](https://docs.godotengine.org/en/stable/classes/class_editorplugin.html)
- [EditorInterface](https://docs.godotengine.org/en/stable/classes/class_editorinterface.html)

---