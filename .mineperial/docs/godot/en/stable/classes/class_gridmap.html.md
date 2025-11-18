**Note:** This is a condensed, human‑readable conversion of the *GridMap* class reference page from the Godot Engine documentation.  
It contains the most important information (inheritance, description, properties, signals and methods) in Markdown format.  

---  

# GridMap

> **Node for 3‑D tile‑based maps.**  
> Lets you place meshes on a grid interactively. Works both from the editor and from scripts.

Inherits: `Node3D` → `Node` → `Object`

> See the **[official Godot 4 docs](https://docs.godotengine.org/en/stable/classes/class_gridmap.html)** for the full API.

---

## Overview

`GridMap` is a spatial node that renders a collection of meshes in a 3‑D grid.  
Each cell of the grid can contain a single tile from a `MeshLibrary`.  
The node handles collision generation, navigation mesh creation and offers a simple API to modify the map at runtime.

Typical usage flow:

1. Create a `GridMap` node in the scene.  
2. Assign a `MeshLibrary` with the tiles you want to use.  
3. Use `set_cell_item()` and `set_cell_transform()` to place tiles.  
4. Call `update()` when you modify the grid to rebuild the mesh.

---

## Signals

| Signal | Description |
|--------|-------------|
| `cell_changed(Vector3 cell)` | Emitted when the content of a cell changes. |
| `map_changed()` | Emitted when any cell in the map is updated. |

---

## Enumerations

| Enum | Value | Description |
|------|-------|-------------|
| `TransformMode` | `TRANSFORM_2D`, `TRANSFORM_3D` | Defines how the tile’s transform is interpreted. |
| `MeshLibrary` | `mesh`, `collision`, `navigation`, `occluder` | Which resource type is queried from the library. |

---

## Constants

```gdscript
const MAX_MAP_SIZE: int = 1024
```

> Maximum number of cells in a single dimension (for performance reasons).

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `cell_size` | `Vector3` | `Vector3(1,1,1)` | Size of a single cell in world space. |
| `mesh_library` | `MeshLibrary` | `null` | The tile library used for rendering. |
| `cell_item` | `int` | `-1` | Index of the mesh in the library for a specific cell. |
| `cell_transform` | `Transform3D` | identity | Transform applied to the tile in the grid. |
| `collision_layer` | `int` | `0x1` | Collision layer for generated collision shapes. |
| `navigation_layer` | `int` | `0` | Navigation layer for generated navigation meshes. |
| `occluder_layer` | `int` | `0` | Occlusion layer for generated occluders. |

*All properties are editable in the editor and are automatically exposed to the inspector.*

---

## Methods

### Core

| Method | Signature | Description |
|--------|-----------|-------------|
| `func set_cell_item(cell: Vector3i, item: int, transform: Transform3D = Transform3D.IDENTITY, layer: int = 0, flags: int = 0)` | `void` | Places a tile (by library item index) at the given grid cell. |
| `func get_cell_item(cell: Vector3i) -> int` | `int` | Returns the item index placed in the cell, or `-1` if empty. |
| `func set_cell_transform(cell: Vector3i, transform: Transform3D)` | `void` | Sets the local transform of a tile in the specified cell. |
| `func get_cell_transform(cell: Vector3i) -> Transform3D` | `Transform3D` | Retrieves the transform of a tile. |
| `func set_cell_flag(cell: Vector3i, flag: int, enabled: bool)` | `void` | Enables/disables a specific flag on a cell (e.g., collision). |
| `func get_cell_flag(cell: Vector3i, flag: int) -> bool` | `bool` | Returns whether the flag is active on that cell. |
| `func set_cell_biomes(cell: Vector3i, biome: int)` | `void` | Assigns a biome to a cell for navigation purposes. |
| `func get_cell_biomes(cell: Vector3i) -> int` | `int` | Retrieves the biome value of a cell. |
| `func set_mesh_library(library: MeshLibrary)` | `void` | Assigns the library containing the mesh definitions. |
| `func get_mesh_library() -> MeshLibrary` | `MeshLibrary` | Returns the current library. |
| `func get_used_cells() -> Array[Vector3i]` | `Array` | Returns a list of all cells currently containing a tile. |
| `func clear()` | `void` | Removes all tiles from the map. |

### Rendering

| Method | Signature | Description |
|--------|-----------|-------------|
| `func update()` | `void` | Forces the map to rebuild its visual representation. |
| `func recompute_collision()` | `void` | Rebuilds collision shapes from the current grid. |

### Navigation

| Method | Signature | Description |
|--------|-----------|-------------|
| `func recompute_navigation()` | `void` | Rebuilds the navigation mesh for the map. |

---

## Example Usage

```gdscript
# Create a new GridMap node
var grid = GridMap.new()
grid.mesh_library = preload("res://my_tiles.tres")
grid.cell_size = Vector3(2, 2, 2)

# Place a tile at (0,0,0)
grid.set_cell_item(Vector3i(0, 0, 0), 3)

# Rotate the tile
grid.set_cell_transform(Vector3i(0, 0, 0), Transform3D(Basis(Vector3.UP, PI / 2), Vector3.ZERO))

# Force update to rebuild meshes
grid.update()
```

---

## Notes

- **Performance:** The internal cell cache is *not* thread‑safe; all modifications should happen on the main thread.
- **Navigation and Occlusion:** If you rely on navigation or occlusion, ensure `recompute_navigation()` and `recompute_occlusion()` are called after bulk edits.
- **MeshLibrary:** A single library can contain multiple meshes, each with collision and navigation data. Use the `MeshLibrary` editor in Godot to manage these tiles.

---

## Related Classes

- [MeshLibrary](https://docs.godotengine.org/en/stable/classes/class_meshlibrary.html)
- [NavigationRegion3D](https://docs.godotengine.org/en/stable/classes/class_navigationregion3d.html)
- [CollisionShape3D](https://docs.godotengine.org/en/stable/classes/class_collisionshape3d.html)

---

For deeper details, consult the full [Godot Engine Reference Manual](https://docs.godotengine.org/en/stable/classes/class_gridmap.html).