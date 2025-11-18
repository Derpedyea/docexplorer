# TileMap

> **Deprecated** – Use multiple `TileMapLayer` nodes instead.  
> To convert a `TileMap` to a set of `TileMapLayer` nodes, open the TileMap bottom panel with the node selected, click the toolbox icon in the top‑right… (see full description in the official docs).

---

## Overview

`TileMap` is a 2‑D node that provides a grid‑based map system. It allows you to draw a map using a `TileSet` resource, place tiles on a grid, and interact with them in code. In Godot 4.0 the `TileMap` node was **deprecated** in favor of the new multi‑layer `TileMapLayer` node, but it is still available for backward compatibility.

> **Note:** This page contains the legacy API. For new projects, use `TileMapLayer` instead.

---

## Inheritance

```
TileMap ← Node2D ← CanvasItem ← Node
```

---

## Signals

| Signal | Description |
|--------|-------------|
| `map_changed` | Emitted when the map data changes (tiles added/removed, layer visibility, etc.). |
| `tile_changed(Vector2)` | Emitted when a tile at the given cell position changes. |
| `tile_set_changed` | Emitted when the associated `TileSet` changes. |

> *See the official docs for the complete signal list and their parameters.*

---

## Methods

> All methods below are part of the legacy `TileMap` API. The newer `TileMapLayer` class replaces many of them with layer‑specific variants.

| Method | Description |
|--------|-------------|
| `get_used_cells()` | Returns a list of all cell coordinates that contain tiles. |
| `get_used_cells_by_id(tile_id: int)` | Returns cell coordinates for a specific tile ID. |
| `get_cell_atlas_coords(cell: Vector2i)` | Returns the atlas coordinates for the tile at the specified cell. |
| `set_cell(cell: Vector2i, tile_id: int, autotile_coord: Vector2i = Vector2i.ZERO, flip_h: bool = false, flip_v: bool = false, transpose: bool = false, autotile_coord_2: Vector2i = Vector2i.ZERO, modulate: Color = Color.WHITE, custom_data: Variant = null)` | Places a tile in the map. |
| `erase_cell(cell: Vector2i)` | Removes a tile from the map. |
| `get_cell_source_id(cell: Vector2i)` | Returns the source tile ID for the given cell. |
| `get_cell_autotile_coord(cell: Vector2i)` | Returns the autotile coordinates for a cell. |
| `get_cell_flip_h(cell: Vector2i)` | Returns whether the tile at a cell is horizontally flipped. |
| `get_cell_flip_v(cell: Vector2i)` | Returns whether the tile at a cell is vertically flipped. |
| `get_cell_transpose(cell: Vector2i)` | Returns whether the tile at a cell is transposed. |
| `map_to_world(cell: Vector2i)` | Converts a cell coordinate to world position. |
| `world_to_map(position: Vector2)` | Converts a world position to a cell coordinate. |
| `set_cell_item(cell: Vector2i, tile_id: int, autotile_coord: Vector2i = Vector2i.ZERO, flip_h: bool = false, flip_v: bool = false, transpose: bool = false, autotile_coord_2: Vector2i = Vector2i.ZERO, modulate: Color = Color.WHITE, custom_data: Variant = null, item_type: int = 0)` | Deprecated; use `set_cell()` instead. |
| `clear()` | Clears the entire tilemap. |
| `create_pattern(pattern: Array)` | Creates a tile pattern from a 2‑D array. |

> **Tip:** For performance‑sensitive games, consider using `TileMapLayer` and the new `TileMap` API introduced in Godot 4.0.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `cell_size` | `Vector2` | `Vector2(64, 64)` | Size of each cell in pixels. |
| `cell_origin` | `int` | `CELL_ORIGIN_TOP_LEFT` | Origin point of the cell. |
| `h_cell_size` | `int` | `0` | Height of the cell in pixels. |
| `v_cell_size` | `int` | `0` | Width of the cell in pixels. |
| `map_data` | `Dictionary` | `{}` | Serialized map data. |
| `tile_set` | `TileSet` | `null` | The tileset resource used. |
| `draw_order` | `int` | `DRAW_ORDER_LEFT_RIGHT` | Rendering order of tiles. |
| `collision_layer` | `int` | `0` | Physics collision layer mask. |
| `collision_mask` | `int` | `0` | Physics collision mask. |
| `tile_autotile_sets` | `Array` | `[]` | Autotile sets. |

> The full list of properties, including legacy ones, can be found in the reference.

---

## Usage Example (Deprecated API)

```gdscript
# Assuming `tileset` is a preloaded TileSet resource
var tilemap = TileMap.new()
tilemap.tile_set = tileset
tilemap.cell_size = Vector2(32, 32)

# Place a tile at grid coordinate (5, 3)
tilemap.set_cell(Vector2i(5, 3), 2)  # tile_id = 2

# Convert world position to cell
var cell = tilemap.world_to_map(get_global_mouse_position())

# Clear the map
tilemap.clear()
```

> **Note**: In Godot 4.1 and newer, use the `TileMapLayer` API for better performance and more features.

---

## Related Resources

* [TileMapLayer Class](../class_tilemaplayer.html) – The modern replacement for `TileMap`.  
* [TileSet Class](../class_tileset.html) – Defines the tiles that can be used by a `TileMap`.  
* [TileMap Editor](../tilemap_editor.html) – Tools in the editor for painting and editing tile maps.

---

## Deprecated Notice

The `TileMap` node is marked as **deprecated**. When you upgrade a project to Godot 4.x, you should convert existing `TileMap` nodes to `TileMapLayer` nodes using the conversion tool in the editor. The legacy API will remain available for a few releases, but new projects should avoid using it.

---