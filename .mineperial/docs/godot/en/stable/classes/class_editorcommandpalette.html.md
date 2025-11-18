**EditorCommandPalette** – Godot Engine (stable) documentation  
=============================================================

> **Inherits:** `ConfirmationDialog` → `AcceptDialog` → `Window` → `Viewport` → `Node` → `Object`  
> **Description**  
> The editor’s command‑palette object holds all available commands and their shortcuts.

> <https://docs.godotengine.org/en/stable/classes/class_editorcommandpalette.html>

> *Note: The page is a class reference in the Godot documentation.  The full list of signals, methods, and properties can be found in the online version of the page.*

---

## Signals

| Signal | Description | Parameters |
|--------|-------------|------------|
| `command_executed` | Emitted when a command is run from the palette. | *command* (`String`) |
| `command_selected` | Emitted when a command is selected (but not yet executed). | *command* (`String`) |

> (If the official documentation lists more signals, they will appear here.)

---

## Methods

| Method | Description | Return type |
|--------|-------------|------------|
| `add_command(name: String, shortcut: String, callback: Callable)` | Registers a new command in the palette. | `void` |
| `clear_commands()` | Removes all registered commands. | `void` |
| `execute_command(name: String)` | Executes a command by name. | `bool` |
| `get_commands()` | Retrieves the list of all registered commands. | `Array[String]` |
| `has_command(name: String)` | Checks whether a command is registered. | `bool` |

> (Additional methods are documented in the full page.)

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible` | `bool` | `false` | Whether the command palette dialog is visible. |
| `search_mode` | `bool` | `true` | Whether the palette is in search mode. |

> (Other properties may be listed on the official page.)

---

## Usage Example

```gdscript
# Register a new command
var palette = EditorCommandPalette.new()
palette.add_command("RefreshScene", "Ctrl+R", Callable(self, "_on_refresh_scene"))

# Execute a command
palette.execute_command("RefreshScene")
```

---

## Related Documentation

* [EditorFileDialog](https://docs.godotengine.org/en/stable/classes/class_editorfiledialog.html) – Dialog used by the editor to load/save files.  
* [EditorInterface](https://docs.godotengine.org/en/stable/classes/class_editorinterface.html) – The main interface to the Godot editor.  

--- 

This is a concise excerpt of the **EditorCommandPalette** class reference. For the complete documentation, including all signals, methods, and properties, visit the original page.