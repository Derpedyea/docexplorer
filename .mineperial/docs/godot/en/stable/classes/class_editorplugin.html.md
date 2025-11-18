**EditorPlugin** – Godot Engine (stable) documentation
========================================================

> This page is part of the Godot Engine class reference. It describes the `EditorPlugin` class, the base class used for extending the editor’s functionality with custom tools, docks, panels, and other UI elements.

---

## Inheritance

```
Object
 └── Node
      └── EditorPlugin
```

> **Inherited by**: `GridMapEditorPlugin`

---

## Description

`EditorPlugin` is the foundation for all editor extensions.  
Plugins allow developers to add custom functionality to Godot’s editor, such as:
* New custom nodes or scripts.
* Custom inspector editors.
* Additional UI panels.
* Tool menus and shortcuts.
* Integration with external services.

The most common use cases are creating new tools that interact with the current scene,
providing custom property editors, or extending the editor with additional panels or dockable UI.

---

## Signals

| Signal | Description |
|--------|-------------|
| `custom_action()` | Emitted when a custom action is performed. |
| `plugin_disabled()` | Emitted when the plugin is disabled. |
| `plugin_enabled()` | Emitted when the plugin is enabled. |

> *Note: These are examples; the full list can be found in the official documentation.*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | `String` | `""` | The name of the plugin. |
| `priority` | `int` | `0` | Determines the order in which plugins are initialized. |
| `enabled` | `bool` | `false` | Indicates whether the plugin is active. |

---

## Methods

> The following table lists the most frequently used methods.  
> For a complete list, see the official Godot API reference.

| Method | Signature | Description |
|--------|-----------|-------------|
| `add_control_to_container(container, control)` | `void` | Adds a `Control` node to a specified container. |
| `add_control_to_dock(dock, control)` | `void` | Adds a `Control` node to one of the editor’s docks. |
| `add_control_to_bottom_panel(control, title)` | `int` | Adds a control to the bottom panel and returns its panel ID. |
| `add_control_to_main_screen(control, name)` | `void` | Adds a control to the main editor screen. |
| `add_custom_type(type_name, base_type, script, icon)` | `void` | Registers a custom type that can be used like a built‑in node. |
| `add_tool_menu_item(text, callable, icon)` | `void` | Adds a new menu item to the editor’s Tools menu. |
| `add_shortcut(name, shortcut)` | `void` | Adds a shortcut for the plugin. |
| `get_plugin_name()` | `String` | Returns the plugin’s name. |
| `has_user_settings()` | `bool` | Returns whether the plugin exposes user settings. |
| `edit(object)` | `void` | Called when the plugin is requested to edit a particular object. |
| `get_editing()` | `Object` | Returns the object currently being edited. |
| `get_editor_interface()` | `EditorInterface` | Retrieves the editor’s main interface object. |
| `get_editor_viewport()` | `Viewport` | Returns the editor viewport. |
| `make_bottom_panel_item_visible(panel_id)` | `void` | Shows the specified bottom panel. |
| `remove_control_from_bottom_panel(panel_id)` | `void` | Removes a control from the bottom panel. |
| `set_initial_state(state)` | `void` | Sets the initial state of the plugin. |
| `has_plugin_settings()` | `bool` | Checks if the plugin has user settings. |
| `set_plugin_settings(settings)` | `void` | Saves the plugin’s user settings. |

---

## Usage Example

Below is a minimal plugin written in GDScript that adds a button to the bottom panel.

```gdscript
extends EditorPlugin

var button : Button

func _enter_tree():
    button = Button.new()
    button.text = "Click Me"
    button.connect("pressed", self, "_on_button_pressed")
    add_control_to_bottom_panel(button, "Demo Panel")

func _exit_tree():
    remove_control_from_bottom_panel(get_bottom_panel_item())

func _on_button_pressed():
    print("Button pressed!")
```

---

## Related Documentation

- [EditorInterface](class_editorinterface.html) – Accesses the editor’s main interface.
- [EditorPlugin](https://docs.godotengine.org/en/stable/classes/class_editorplugin.html) – Full API reference.  
- [Custom Types](https://docs.godotengine.org/en/stable/tutorials/editor/custom_types.html) – How to register custom types.

---

> **Tip:** For advanced editor extensions, see the [Editor Plugin Tutorial](../tutorials/editor/index.html).