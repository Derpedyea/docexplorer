# 3D Gizmo Plugins

*Godot Engine – stable documentation*  

---

**Introduction**  
3D gizmo plugins are used by the editor and custom plugins to define the gizmos attached to any kind of `Node3D` node. This tutorial shows the two main approaches to defining your own custom gizmos in Godot 4.

## Table of Contents

1. [Creating a gizmo plugin](#creating-a-gizmo-plugin)
2. [The two approaches](#the-two-approaches)
   - [Method 1 – Using the `EditorSpatialGizmoPlugin` class](#method-1-using-the-editorspatialgizmoplugin-class)
   - [Method 2 – Using the `EditorSpatialGizmo` class](#method-2-using-the-editorspatialgizmo-class)
3. [Example – a simple translation gizmo](#example-a-simple-translation-gizmo)
4. [Further reading](#further-reading)

---

## 1. Creating a gizmo plugin

In Godot you create a gizmo plugin by extending the class `EditorSpatialGizmoPlugin`. The plugin must be registered in a script that inherits from `EditorPlugin`. The plugin can then be used by the editor to draw custom gizmos for your custom nodes.

```gdscript
# my_gizmo_plugin.gd
class_name MyGizmoPlugin
extends EditorSpatialGizmoPlugin

func _init() -> void:
    # Set up the gizmo, add handles, set colors, etc.
    pass
```

Add the plugin to your project’s `plugin.cfg` file and enable it in the editor’s *Project Settings → Plugins*.

## 2. The two approaches

There are two different ways to implement a custom gizmo. They differ mainly in the amount of control you need and the complexity of the implementation.

### Method 1 – Using the `EditorSpatialGizmoPlugin` class

This approach is simpler and recommended for most cases.  
You override a handful of virtual methods:

* `has_gizmo(node)` – return `true` for nodes this plugin should act on.
* `create_gizmo(node)` – return a new `EditorSpatialGizmo`.
* `get_handle_name(index)` – optional text for the gizmo handles.
* `get_handle_value(index)` – optional value for each handle.
* `commit_handle(index, restore_state, cancel)` – called when the user manipulates a handle.
* `redraw()` – called whenever the gizmo needs to be refreshed.

```gdscript
func has_gizmo(node: Node3D) -> bool:
    return node is MyCustomNode

func create_gizmo(node: Node3D) -> EditorSpatialGizmo:
    var gizmo = EditorSpatialGizmo.new()
    # add shapes, handles, etc.
    return gizmo
```

### Method 2 – Using the `EditorSpatialGizmo` class

If you need fine-grained control over how the gizmo behaves (e.g. custom input events, multiple handle types, complex visualizations), derive directly from `EditorSpatialGizmo`. In this case you also provide a plugin that returns the gizmo.

```gdscript
class_name MyComplexGizmo
extends EditorSpatialGizmo

func _init(plane: Plane, transform: Transform3D) -> void:
    # setup visuals
    pass
```

And in your `EditorSpatialGizmoPlugin`:

```gdscript
func create_gizmo(node: Node3D) -> EditorSpatialGizmo:
    return MyComplexGizmo.new(plane, node.global_transform)
```

## 3. Example – a simple translation gizmo

Below is a minimal example that adds a translation handle to a custom node. The gizmo allows moving the node along a single axis.

```gdscript
# translation_gizmo_plugin.gd
class_name TranslationGizmoPlugin
extends EditorSpatialGizmoPlugin

func _init() -> void:
    add_axis(Vector3.UP, Color(0, 1, 0), true)
    add_axis(Vector3.RIGHT, Color(1, 0, 0), true)
    add_axis(Vector3.FORWARD, Color(0, 0, 1), true)

func has_gizmo(node: Node3D) -> bool:
    return node is MyMovableNode

func create_gizmo(node: Node3D) -> EditorSpatialGizmo:
    var gizmo = EditorSpatialGizmo.new()
    gizmo.add_axis(Vector3.UP)
    gizmo.add_axis(Vector3.RIGHT)
    gizmo.add_axis(Vector3.FORWARD)
    return gizmo

func commit_handle(index: int, restore_state: bool, cancel: bool) -> void:
    var node = get_node_from_gizmo() as MyMovableNode
    # adjust node position based on handle index
```

> **Tip** – Use `add_handles()` to create custom interactive points and `add_line()` or `add_mesh()` for static visuals.

## 4. Further reading

* [Godot 4 Documentation – Gizmos](https://docs.godotengine.org/en/stable/tutorials/plugins/editor/3d_gizmos.html)  
* [EditorPlugin API Reference](https://docs.godotengine.org/en/stable/classes/class_editorplugin.html)  
* [EditorSpatialGizmo API Reference](https://docs.godotengine.org/en/stable/classes/class_editorspatialgizmo.html)

---

**Author:** Godot Engine Documentation Team  
**Last updated:** 2025‑11‑18

---