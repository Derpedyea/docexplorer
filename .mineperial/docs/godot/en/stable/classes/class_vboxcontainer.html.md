**VBoxContainer** – Godot Engine (stable) documentation  
=========================================================

### Inheritance

```
VBoxContainer
  └─ BoxContainer
        └─ Container
              └─ Control
                    └─ CanvasItem
                          └─ Node
                                └─ Object
```

**Inherited By**

* `ColorPicker`
* `FileSystemDock`
* `ScriptEditorBase`

### Description
A `VBoxContainer` is a container node that arranges its child controls **vertically**.  
It automatically lays out each child in a single column, resizing them if necessary to fit the available space. This is the standard way to build stacked user‑interface elements such as toolbars, menus, or any vertical list of widgets.  

### Key Features
- Automatic vertical arrangement of child nodes.  
- Supports dynamic resizing of children (e.g., with the `grow_enabled` property).  
- Works with the Godot GUI system and can be used inside any control‑based scene.

> *Note*: This class is part of Godot's UI system and is fully scriptable via GDScript, C#, or GDExtension.

*(For the full API reference, see the official Godot documentation for `VBoxContainer`.)*