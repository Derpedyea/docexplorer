# Making plugins

A plugin is a great way to extend the editor with useful tools.  
It can be made entirely with GDScript and standard scenes, without even reloading the editor.  
Unlike modules, you don't need to recompile the engine; just drop a folder into your project’s *addons* directory and enable it.

---

## 1.  Plugin folder layout

```
my_plugin/
├─ plugin.cfg
├─ icon.svg          # optional – shown in the Plugins list
└─ my_plugin.gd      # the main script
```

* **plugin.cfg** – contains the metadata that tells Godot about the plugin.  
* **icon.svg** – an optional 16 × 16 icon that appears in the editor’s Plugins menu.  
* **my_plugin.gd** – a script that extends `EditorPlugin` (or `EditorScript` for simple tools).

> **Tip** – Keep the plugin’s code in a single folder inside `addons/` to avoid naming conflicts.

---

## 2.  The `plugin.cfg` file

```ini
[plugin]
name="My Awesome Plugin"
description="Adds a custom inspector for the FooNode."
author="Your Name"
version="1.0"
script="my_plugin.gd"
```

| Field        | Description                                   |
|--------------|-----------------------------------------------|
| `name`       | Human‑readable name (displayed in the editor).|
| `description`| Short explanation of what the plugin does.    |
| `author`     | Your name or your organisation.               |
| `version`    | Semver string used for updates.               |
| `script`     | Path to the main GDScript, relative to the plugin folder. |

The file must be located in the root of the plugin folder.  
If you add more resources (icons, scenes, etc.) you can refer to them in the script, but they don’t need to appear in the configuration file.

---

## 3.  Writing the plugin script

```gdscript
extends EditorPlugin

func _enter_tree() -> void:
    # Called when the plugin is enabled.
    add_custom_type("FooNode", "Node", preload("res://addons/my_plugin/foo_node.gd"), preload("res://addons/my_plugin/icon.svg"))
    print("My Awesome Plugin enabled")

func _exit_tree() -> void:
    # Called when the plugin is disabled.
    remove_custom_type("FooNode")
    print("My Awesome Plugin disabled")
```

### 3.1  Core `EditorPlugin` API

| Method | When it runs | Typical use |
|--------|--------------|-------------|
| `_enter_tree()` | When the plugin is enabled. | Register custom types, add menu items, connect signals. |
| `_exit_tree()` | When the plugin is disabled. | Clean up: unregister types, remove menus. |
| `add_control_to_container()` | Add a dock or panel to one of the editor’s containers. |
| `add_tool_menu_item()` | Add an item to the top‑level *Tools* menu. |
| `get_editor_interface()` | Access the editor’s main interface (scene tree, inspector, etc.). |

> **Note** – The plugin script must be a singleton.  Godot loads it only once, so keep state in class variables if needed.

---

## 4.  Enabling / disabling the plugin

1. **Via the editor** – Go to **Project → Project Settings → Plugins**.  
   Tick the checkbox next to *My Awesome Plugin* to enable it.  
2. **Via the file system** – If the checkbox is unchecked, Godot will treat the folder as a regular sub‑directory.

When enabled, the editor automatically runs the `_enter_tree()` method and will load the plugin’s icon in the Plugins menu.  Disabling calls `_exit_tree()`.

---

## 5.  Example: A simple “Hello” tool

Create a plugin that adds a button to the editor and shows a popup:

```gdscript
# res://addons/hello_plugin/hello_plugin.gd
extends EditorPlugin

var button : Button

func _enter_tree() -> void:
    button = Button.new()
    button.text = "Say Hello"
    button.connect("pressed", self, "_on_button_pressed")
    add_control_to_container(CONTAINER_SPATIAL_EDITOR_MENU, button)

func _exit_tree() -> void:
    remove_control_from_container(CONTAINER_SPATIAL_EDITOR_MENU, button)
    button.queue_free()

func _on_button_pressed() -> void:
    EditorNode.get_singleton().show_warning("Hello from the plugin!", "Hello")
```

Now open **Project → Project Settings → Plugins** and enable *Hello Plugin* – you’ll see the button in the 3D editor menu.

---

## 6.  Adding a custom inspector

Suppose you have a `FooNode` type that needs a special inspector panel.  
Implement `_edit()` and `_get_state()` / `_set_state()` in the plugin to modify the inspector layout.

```gdscript
# res://addons/my_plugin/foo_node.gd
extends Node

export var foo_value : int = 42

# res://addons/my_plugin/my_plugin.gd
extends EditorPlugin

func _enter_tree() -> void:
    add_custom_type("FooNode", "Node", preload("res://addons/my_plugin/foo_node.gd"), preload("res://addons/my_plugin/icon.svg"))
    add_inspector_plugin(FooNodeInspector.new())

func _exit_tree() -> void:
    remove_custom_type("FooNode")
    remove_inspector_plugin(FooNodeInspector.new())

class FooNodeInspector extends EditorInspectorPlugin:
    func can_handle(object):
        return object is FooNode

    func parse_begin(object):
        add_custom_control(Label.new().set_text("FooNode custom inspector"))
```

---

## 7.  Working with scenes

You can load scenes and instantiate them from your plugin:

```gdscript
var my_scene = preload("res://addons/my_plugin/scene.tscn")
var node = my_scene.instance()
```

You can also add it to the editor’s current scene or to a dock.

---

## 8.  Testing a plugin

* Make sure the **addons** folder is inside your project root.  
* Enable the plugin under *Project Settings → Plugins*.  
* Use the **Reload** button in the same tab if you modify `plugin.cfg` or the script.  
* If the plugin crashes, check the **Output** panel for errors.

---

## 9.  Distributing a plugin

When packaging for the Asset Library:

1. Place all plugin files in a folder (e.g., `my_plugin`).  
2. Make sure `plugin.cfg` lists the correct path to the script.  
3. Zip the folder, then upload via the Godot Asset Library interface.

---

## 10.  Next steps

* **Making main screen plugins** – Plugins that add new tabs to the editor.  
* **EditorScript** – One‑off scripts that run directly in the editor (e.g., batch operations).  
* **Advanced features** – Custom dock panels, menu items, or integration with the Script editor.

For more details, see the official Godot documentation on the [Editor Plugin API](https://docs.godotengine.org/en/stable/tutorials/plugins/editor/editor_plugin_api.html).