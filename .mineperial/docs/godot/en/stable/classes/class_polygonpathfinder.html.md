# PolygonPathFinder

`PolygonPathFinder` is a Godot resource used for calculating paths across polygonal areas.  
It inherits from `Resource`, which in turn inherits from `RefCounted` and `Object`.

> **Note** – The official documentation currently does not provide a description for this class. Contributing one is welcome!

---

## Methods

| Method | Parameters | Return Value | Description |
|--------|------------|--------------|-------------|
| **find_path** | `from: Vector2`, `to: Vector2` | `PackedVector2Array` | Calculates a path between two points within the polygonal region, returning an array of way‑points that represent the shortest valid path. |

---

## Usage example (GDScript)

```gdscript
var path_finder : PolygonPathFinder = preload("res://my_polygon_path_finder.tres")
var start = Vector2(10, 10)
var goal  = Vector2(200, 50)

var path : PackedVector2Array = path_finder.find_path(start, goal)
for point in path:
    print(point)
```

---

Feel free to add more details or fix the missing description in the repository!