# Using GridMaps

*Godot Engine – stable documentation*  
[https://docs.godotengine.org/en/stable/tutorials/3d/using_gridmaps.html](https://docs.godotengine.org/en/stable/tutorials/3d/using_gridmaps.html)

> GridMaps are a 3‑D level‑building tool similar to the 2‑D `TileMap`.  
> A `GridMap` works with a *MeshLibrary* – a collection of 3‑D meshes that can be placed on a regular grid.  
> They are great for building static environments such as dungeons, platforms or city blocks.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Setting up a MeshLibrary](#setting-up-a-meshlibrary)
4. [Creating a GridMap node](#creating-a-gridmap-node)
5. [Adding and Editing Cells](#adding-and-editing-cells)
6. [Using a GridMap in code](#using-a-gridmap-in-code)
7. [Performance Tips](#performance-tips)
8. [Advanced Features](#advanced-features)
9. [Further Reading](#further-reading)

---

## Introduction

A `GridMap` allows you to build large 3‑D environments quickly, just as a `TileMap` does for 2‑D.  
The engine automatically handles the spatial partitioning, collision, and rendering of each cell.  
You only need to supply the 3‑D meshes (`MeshLibrary`) and the engine will do the rest.

---

## Prerequisites

- Godot 4.x (the tutorial is written for the stable 4.x branch).  
- Basic familiarity with the editor UI.  
- A simple 3‑D model or cube to use as a tile (optional – you can also use primitives).

---

## Setting up a MeshLibrary

1. **Create a MeshLibrary**  
   *Right‑click* the **FileSystem** dock → **New Resource** → *MeshLibrary* → name it `tiles.tres`.

2. **Add a Mesh**  
   - Select the MeshLibrary.  
   - In the inspector, click **Add item**.  
   - Click **Add Mesh** and import a `.obj`, `.glb`, or any other supported 3‑D format.  
   - Rename the item (e.g., `wall`, `floor`, `corner`).  
   - Set a **Collision Shape** if your mesh needs one:  
     *Add Shape → Add Primitive → Box / Sphere / Convex Hull*.

3. **Edit item settings**  
   - **Cell Size**: Usually set to `1.0`.  
   - **Transform**: Align the mesh to the grid cell.  
   - **Collision Layer / Mask**: Configure as needed.

4. **Save** the MeshLibrary.

---

## Creating a GridMap node

1. Add a **GridMap** node to your scene.  
2. In the Inspector, set `cell size` (default `1.0, 1.0, 1.0`).  
3. Drag your `tiles.tres` into the **Mesh Library** property.

You now have a ready‑to‑edit GridMap. Use the **GridMap** editor by clicking the *Edit* button in the top bar of the inspector.  
The editor provides a paint‑brush like interface to place, delete, and rotate tiles.

---

## Adding and Editing Cells

| Tool | Action |
|------|--------|
| **Paint** | Click on a cell to place the current item. |
| **Erase** | Click on a cell to remove it. |
| **Rotate** | Right‑click on a cell and choose a rotation (0°, 90°, 180°, 270°). |
| **Flip** | Use the `Flip X` / `Flip Y` buttons to mirror. |

You can change the current item in the **Item** list.  
The GridMap’s **size** (number of cells) can be changed in the Inspector at any time; the map will grow or shrink automatically.

---

## Using a GridMap in code

Below is a quick script to create a 10×10 floor and a surrounding wall automatically.

```gdscript
# GridMap.gd
extends GridMap

@export var floor_item : int
@export var wall_item  : int
@export var size : Vector3i = Vector3i(10, 1, 10)

func _ready() -> void:
    # Clear any pre‑existing cells
    clear()

    # Add floor tiles
    for x in range(size.x):
        for z in range(size.z):
            set_cell_item(Vector3i(x, 0, z), floor_item)

    # Add walls around
    for x in range(size.x):
        set_cell_item(Vector3i(x, 0, 0), wall_item)
        set_cell_item(Vector3i(x, 0, size.z - 1), wall_item)

    for z in range(size.z):
        set_cell_item(Vector3i(0, 0, z), wall_item)
        set_cell_item(Vector3i(size.x - 1, 0, z), wall_item)
```

**Usage**

1. Attach the script to a `GridMap` node.  
2. In the inspector, assign the corresponding indices (`floor_item`, `wall_item`) from the MeshLibrary drop‑down.  
3. Run the scene – the map will generate automatically.

> **Tip:** `get_cell_item()` and `get_cell_metadata()` let you query the current cell state.

---

## Performance Tips

| Tip | Explanation |
|-----|-------------|
| **Use static cells** | If your level never changes, set the GridMap to **Static** (in the inspector). This allows the engine to cull and batch cells efficiently. |
| **Avoid large cell counts** | While a GridMap can hold thousands of cells, rendering a 100×100×100 map will still be expensive. Break large maps into multiple GridMaps or use `CSG` if you need dynamic geometry. |
| **Reuse MeshLibrary** | A single MeshLibrary can be shared across many GridMaps. |
| **Cache transforms** | When setting many cells in a loop, use `set_cells` or `set_cells_from_array` instead of `set_cell_item` per cell for speed. |

---

## Advanced Features

### Cell Metadata

You can attach arbitrary metadata to a cell:

```gdscript
set_cell_item(cell_pos, item_id, 0, 0, metadata)
```

Use this to store information like “is_door”, “trigger”, or “walkable”.

### Custom Cell Shapes

While the default collision shape is a bounding box, you can provide a **custom shape** per item in the MeshLibrary:

```
Item > Collision > Shape > Custom
```

This allows for more accurate physics for irregular tiles.

### Procedural Generation

Combine GridMap with noise or pathfinding algorithms:

```gdscript
# Example: Fill with random floor tiles
for i in range(200):
    var pos = Vector3i(randi_range(0, 9), 0, randi_range(0, 9))
    set_cell_item(pos, floor_item)
```

### Using GridMaps as a navigation mesh

A GridMap can be set as a *navigation layer* by enabling **Navigation** in the GridMap node.  
Each cell automatically becomes a navigation cell, useful for AI pathfinding.

---

## Further Reading

- [Godot Documentation – GridMap Reference](https://docs.godotengine.org/en/stable/classes/class_gridmap.html)
- [Godot Docs – TileSet](https://docs.godotengine.org/en/stable/tutorials/2d/tileset.html) (for 2‑D comparison)
- [Godot Docs – MeshLibrary](https://docs.godotengine.org/en/stable/classes/class_meshlibrary.html)

--- 

Feel free to adapt the code snippets and steps to your own project structure. Happy level‑building!