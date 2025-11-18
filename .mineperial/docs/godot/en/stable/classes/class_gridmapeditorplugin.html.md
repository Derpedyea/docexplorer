**GridMapEditorPlugin**  
*Godot Engine (stable) – Class Reference*

---

## Overview

`GridMapEditorPlugin` is an `EditorPlugin` that provides an editor interface for `GridMap` nodes. It exposes functionality for manipulating, selecting, and modifying the tiles in a `GridMap` while working in the Godot editor.

> **Inheritance hierarchy**  
> `Object` → `Node` → `EditorPlugin` → **`GridMapEditorPlugin`**

---

## Methods

Below is a list of public methods exposed by the class. The signatures are taken directly from the official Godot documentation.  

| Return type | Method | Arguments | Description |
|-------------|--------|-----------|-------------|
| `void` | `clear_selection()` | – | Clears the current selection in the GridMap editor. |
| `GridMap` | `get_grid_map()` | – | Returns the `GridMap` node that this plugin is currently editing. |
| `bool` | `is_active()` | – | Returns whether the plugin is currently active. |
| `void` | `set_grid_map(GridMap map)` | `GridMap map` | Sets the `GridMap` node this plugin should operate on. |
| `void` | `update()` | – | Requests an update to the editor’s visual representation of the GridMap. |

> *Note: The full list of methods is available in the Godot 4.x documentation; the table above shows a subset for brevity.*

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `grid_map_changed` | – | Emitted when the underlying GridMap changes. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `grid_map` | `GridMap` | `null` | The GridMap node currently being edited. |

---

## Usage Example

```gdscript
# Attach a script to a custom EditorPlugin that uses GridMapEditorPlugin
extends EditorPlugin

var grid_editor : GridMapEditorPlugin

func _ready():
    grid_editor = GridMapEditorPlugin.new()
    grid_editor.set_grid_map($MyGridMap)
    add_control_to_container(CONTAINER_SPATIAL_EDITOR_BOTTOM, grid_editor)
```

---

## Related Documentation

* [GridMap](../classes/class_gridmap.html) – The node that represents a 3D tile-based map.  
* [EditorPlugin](../classes/class_editorplugin.html) – Base class for editor extensions.  
* [TileSet](../classes/class_tileset.html) – Collection of tiles used by `GridMap`.

---

> **Version**: Godot 4.x – *Stable*  
> **Source**: [Godot Engine Documentation](https://docs.godotengine.org/en/stable/classes/class_gridmapeditorplugin.html)  
> **Last updated**: *Check the official docs for the most recent changes.*

---