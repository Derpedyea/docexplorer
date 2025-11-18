**Using TileSets**  
*(Godot Engine – Stable Documentation)*

---

## Introduction
A **TileMapLayer** is a grid of tiles that you use to create a game’s layout. By drawing a layout with a `TileMapLayer` node, you can:

* Quickly assemble large levels
* Reuse tiles efficiently
* Take advantage of built‑in collision, autotile, and navigation features

---

## 1. What is a TileSet?
A **TileSet** resource holds all the information that a `TileMap` needs to render its grid:

| Feature | What it does |
|---------|--------------|
| **Texture** | The image that contains one or more tiles |
| **Regions** | Sub‑rects of the texture that define individual tiles |
| **Collision** | Shape data that lets the tile participate in physics |
| **Navigation** | Navigation polygons for AI pathfinding |
| **Autotiling** | Rules that let the engine automatically place tiles based on neighbors |
| **Script** | Custom logic that runs per tile instance |

### Creating a TileSet
1. In the **Inspector**, click *New TileSet* on a `TileMap` node.  
2. Click the **TileSet** resource to open the **TileSet Editor**.  
3. Add a texture, define regions, and configure collision or navigation as needed.

---

## 2. TileMapLayer nodes
Unlike the old `TileMap` node, `TileMapLayer` allows you to layer tiles:

* **Background** – lowest layer
* **Ground** – mid‑layer
* **Foreground** – top layer

You can toggle each layer’s visibility, z‑index, and collision settings independently.

### Adding a Layer
1. Right‑click the `TileMap` node → **Add Layer**.  
2. Assign a `TileSet` and set the *Tile Size*.

---

## 3. Autotiling
Autotiling is a powerful feature that lets you build complex, seamless tiles automatically.

### Setting up Autotiles
1. In the **TileSet Editor**, create an **Autotile** region.  
2. Define the *Bitmask* for each direction and *Edge* rules.  
3. Set a **Transition** to blend between tiles.

---

## 4. Collision & Navigation
Tiles can have built‑in collision shapes:

```gdscript
var collision = TileSetTileCollision.new()
collision.shape = RectangleShape2D.new()
collision.shape.extents = Vector2(16, 16)
tile_set.add_collision(tile_id, collision)
```

Navigation polygons are added similarly, enabling AI agents to navigate tile‑based levels.

---

## 5. Using Tiles in Code
You can modify tiles at runtime:

```gdscript
var tile_map = $TileMapLayer
tile_map.set_cellv(Vector2(5, 3), tile_id)  # place a tile
```

You can also query the tile at a position:

```gdscript
var id = tile_map.get_cellv(Vector2(5, 3))
```

---

## 6. Tips & Tricks
- **Reuse tiles**: Keep a small, well‑organized TileSet for performance.
- **Layer order**: Place interactive tiles on a separate layer for easy collision management.
- **Dynamic tiles**: Use `TileMapLayer`’s `set_cell` method to change tiles during gameplay (e.g., breakable walls).

---

## 7. Further Reading
- [Using TileMaps](link-to-using_tilemaps)
- [TileMapNode](https://docs.godotengine.org/en/stable/classes/class_tilemap.html)

---