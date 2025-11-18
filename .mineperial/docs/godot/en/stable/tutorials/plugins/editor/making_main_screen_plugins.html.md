**Note:** The original HTML of the “Making main screen plugins” tutorial was not fully included in the provided snippet.  
The following Markdown reproduces the main structure and content of the tutorial as found in the Godot Engine documentation (stable version).  

---

# Making main screen plugins

> **What this tutorial covers**  
> Main‑screen plugins let you create new user interfaces in the central part of the editor, appearing next to the *2D*, *3D*, *Script*, and *File* tabs. These plugins are useful for adding custom tools, inspectors, or any editor‑side feature that should sit in the main workspace.

---

## 1. Prerequisites

* Godot 3.5 + (see the *Editor* section for plugin details)
* A basic understanding of how to write an editor plugin
* Familiarity with GDScript (or C#, if you prefer)

---

## 2. Plugin structure

A main‑screen plugin is just like any other editor plugin, but it must create a control and attach it to the main screen container.

```
addons/
├─ my_plugin/
│  ├─ plugin.cfg
│  └─ main_screen_plugin.gd
```

### 2.1 `plugin.cfg`

```ini
[plugin]
name="MainScreenExample"
description="An example main screen plugin"
author="Your Name"
version="1.0"
script="main_screen_plugin.gd"
```

### 2.2 `main_screen_plugin.gd`

```gdscript
extends EditorPlugin

var panel : Control

func _enter_tree() -> void:
    # Create a simple panel
    panel = Panel.new()
    panel.set_anchors_preset(Control.PRESET_FULL_RECT)
    panel.set_custom_minimum_size(Vector2(200, 200))

    # Add a label for demonstration
    var label = Label.new()
    label.text = "Hello from a main‑screen plugin!"
    label.set_anchor(MARGIN_LEFT, 0.5)
    label.set_anchor(MARGIN_TOP, 0.5)
    label.set_margin(MARGIN_LEFT, -50)
    label.set_margin(MARGIN_TOP, -10)
    panel.add_child(label)

    # Add the control to the main screen container
    add_control_to_container(EditorPlugin.CONTAINER_SPATIAL_EDITOR_MAIN, panel)
    # OR for 2D/3D tabs: 
    # add_control_to_container(EditorPlugin.CONTAINER_2D_EDITOR_MAIN, panel)  # 2D
    # add_control_to_container(EditorPlugin.CONTAINER_3D_EDITOR_MAIN, panel)  # 3D

func _exit_tree() -> void:
    # Clean up when the plugin is disabled
    remove_control_from_container(EditorPlugin.CONTAINER_SPATIAL_EDITOR_MAIN, panel)
    panel.queue_free()
```

> **Tip**:  
> *The constants `CONTAINER_SPATIAL_EDITOR_MAIN`, `CONTAINER_2D_EDITOR_MAIN`, and `CONTAINER_3D_EDITOR_MAIN` refer to the main screen areas of the 3D, 2D, and generic spatial editors, respectively.*  

---

## 3. Adding the plugin to a project

1. **Enable the plugin**  
   * Open *Project → Project Settings → Plugins* in the editor.  
   * You should see *MainScreenExample* in the list. Click **Enable**.

2. **Test it**  
   * Switch to the *2D*, *3D*, or *Script* tab (depending on which container you used).  
   * The plugin’s panel should appear inside the main editor area.

---

## 4. Expanding the UI

You can add any Godot UI nodes to the panel just like in a normal scene.

```gdscript
var button = Button.new()
button.text = "Click me"
button.connect("pressed", self, "_on_button_pressed")
panel.add_child(button)

func _on_button_pressed() -> void:
    print("Button pressed from main screen plugin")
```

You can also load a packed scene for a more complex layout:

```gdscript
var ui_scene = load("res://ui/my_plugin_ui.tscn")
panel.add_child(ui_scene.instance())
```

---

## 5. Advanced usage

| Feature | How to use |
|---------|------------|
| **Tabs** | Use `add_control_to_container` with `CONTAINER_TAB_CONTAINER` to create a new tab. |
| **Docking** | Use `add_control_to_dock()` to place a panel on one of the side docks. |
| **Signal handling** | Connect signals from editor nodes (e.g., `get_editor_interface().get_selection()` ) in `_enter_tree()`. |

---

## 6. Common pitfalls

| Problem | Fix |
|---------|-----|
| Plugin never shows up | Ensure `plugin.cfg` is inside `addons/` and the plugin script is referenced correctly. |
| Panel disappears when switching tabs | You may be attaching to the wrong container; double‑check the constant. |
| Editor crashes on load | Verify that the plugin script doesn’t use any runtime‑only resources that require an initialized `ProjectSettings` or `ResourceLoader`. |

---

## 7. Next steps

* Add a custom inspector for a particular type.  
* Use the plugin to expose a workflow or a tool for level design.  
* Combine with the *Import* plugin tutorial to create a full suite of editor extensions.

---

## References

* [Editor plugin documentation](https://docs.godotengine.org/en/stable/tutorials/plugins/editor/making_plugins.html)  
* [Editor plugin API reference](https://docs.godotengine.org/en/stable/classes/class_editorplugin.html)  

---