**TileMapLayer – Godot Engine Documentation**  
*(Class reference – stable version)*

---

## 1. Overview
`TileMapLayer` is a `Node2D` that renders 2‑D tile‑based maps using a `TileSet`.  
It is used inside `TileMap` to separate layers (e.g., background, foreground, collision).

### Inheritance
```
Object
 └─ Node
     └─ CanvasItem
         └─ Node2D
             └─ TileMapLayer
```

## 2. Description
A **TileMapLayer** holds tile data (positions, indices, transforms) and renders it using a `TileSet`.  
Typical use cases:

* Multi‑layered tile maps (background, terrain, collision)
* Parallax layers
* Animated tiles (via `TileSet` animations)

## 3. Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `cell_origin` | `Vector2i` | `Vector2i(0,0)` | Tile coordinates of the layer’s origin (useful for large maps). |
| `cell_size` | `Vector2` | `Vector2(32,32)` | Size of each tile in pixels. |
| `tile_set` | `TileSet` | `null` | The `TileSet` resource used to look up tiles. |
| `cell_tile` | `int` | `-1` | Tile ID at the current cell. |
| `cell_flip_h` | `bool` | `false` | Horizontal flip flag for the tile. |
| `cell_flip_v` | `bool` | `false` | Vertical flip flag for the tile. |
| `cell_transpose` | `bool` | `false` | Transpose flag for the tile. |
| `cell_transform` | `Transform2D` | `Transform2D()` | Custom transform applied to a tile. |
| `cell_modulate` | `Color` | `Color(1,1,1,1)` | Per‑tile color modulation. |
| `cell_occlusion` | `bool` | `false` | Whether the tile blocks light/visibility. |
| `cell_collision_layer` | `int` | `1` | Physics collision layer for this cell. |
| `cell_collision_mask` | `int` | `1` | Physics collision mask for this cell. |

*Note: The list above is a subset; see the full property list in the official documentation.*

## 4. Methods

### 4.1 `set_cell(pos: Vector2i, tile_id: int, flip_h: bool = false, flip_v: bool = false, transpose: bool = false, transform: Transform2D = Transform2D(), modulate: Color = Color(1,1,1,1))`
Sets a tile at *pos* with optional transformations.

```gdscript
tile_map_layer.set_cell(Vector2i(0,0), 42, true, false, false, Transform2D.IDENTITY, Color(1,1,1,0.5))
```

### 4.2 `get_cell(pos: Vector2i) -> int`
Returns the tile ID at the given *pos* (or `-1` if empty).

### 4.3 `erase_cell(pos: Vector2i)`
Removes the tile at *pos*.

### 4.4 `clear()`
Clears all tiles in the layer.

### 4.5 `get_used_cells() -> Array[Vector2i]`
Returns an array of all tile positions that contain a tile.

### 4.6 `get_used_cells_by_id(tile_id: int) -> Array[Vector2i]`
Returns positions where *tile_id* is used.

### 4.7 `get_cells_in_rect(rect: Rect2i) -> Array[Vector2i]`
Returns all tiles inside the given rectangle.

### 4.8 `get_tile_at(pos: Vector2i) -> TileData`
Returns the `TileData` object for the tile at *pos* (or `null`).

### 4.9 `set_cells(cells: Array[Cell] )`
Batch‑set multiple cells; `Cell` is a struct with all cell properties.

### 4.10 `update_dirty_cells()`
Updates rendering of cells marked dirty.

## 5. Signals

| Signal | Description |
|--------|-------------|
| `cell_changed(cell: Vector2i)` | Emitted when a cell’s tile ID or properties change. |
| `cells_changed(cells: Array[Vector2i])` | Emitted after batch updates. |

## 6. Enumerations

* **TileDataFlag** – bitmask flags for tile data (`FLAG_SOLID`, `FLAG_VISIBLE`, etc.)
* **TileShape** – shape types used in collision (`SHAPE_BOX`, `SHAPE_CIRCLE`, ...)

## 7. Example

```gdscript
# Assuming a TileSet has been assigned in the editor or code.
var layer = TileMapLayer.new()
layer.tile_set = preload("res://tiles.tres")
layer.set_cell(Vector2i(0, 0), 1)      # Place tile ID 1
layer.set_cell(Vector2i(1, 0), 2, true) # Place tile ID 2, flipped horizontally
add_child(layer)
```

## 8. Additional Resources

* [TileMap](../classes/class_tilemap.html) – parent node that manages multiple `TileMapLayer` nodes.
* [TileSet](../classes/class_tileset.html) – resource containing tile definitions.
* [TileMapLayerEditor](../classes/class_tilemaplayereeditor.html) – editor plugin for editing layers in the editor.

---

**End of TileMapLayer documentation.**