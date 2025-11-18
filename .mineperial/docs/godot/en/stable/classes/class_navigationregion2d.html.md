**NavigationRegion2D**  
======================

> **Experimental** – This class may be changed or removed in future versions.

*Inherits:* `Node2D` → `CanvasItem` → `Node` → `Object`

---

A **NavigationRegion2D** is a traversable 2‑D region that `NavigationAgent2D` nodes can use for pathfinding. The region defines the navigation polygons and allows the engine to calculate optimal paths for agents inside it.  

> **NOTE**: Because this class is experimental, its API and behaviour may change between releases. Use it with caution in production projects.

---

### Basic Usage

1. **Create a NavigationRegion2D node**  
   - Place it anywhere in your scene tree where you want a navigation area.  
   - Assign a `NavigationPolygon` to its `navigation_polygon` property to define the walkable area.

2. **Add a NavigationAgent2D**  
   - Place a `NavigationAgent2D` inside or outside the region.  
   - When you set a destination for the agent, it will query the nearest navigation region to compute a path.

3. **Dynamic updates**  
   - If you modify the polygon while the game is running, call `NavigationRegion2D::set_navigation_polygon()` to update the navigation data.

---

### Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `navigation_polygon` | `NavigationPolygon` | The polygon that defines the traversable area. |
| `navigation_layer` | `int` | The navigation layer that this region belongs to (bitmask). |
| `navigation_map` | `int` | The ID of the navigation map this region contributes to. |

---

### Important Methods

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `get_navigation_polygon()` | – | `NavigationPolygon` | Retrieves the current navigation polygon. |
| `set_navigation_polygon(NavigationPolygon)` | `NavigationPolygon` | – | Assigns a new navigation polygon and updates the underlying navigation map. |
| `get_navigation_map()` | – | `int` | Returns the ID of the navigation map this region is part of. |
| `set_navigation_map(int)` | `int` | – | Sets the navigation map ID. |

---

### Signals

| Signal | Description |
|--------|-------------|
| `navigation_polygon_changed()` | Emitted when the navigation polygon is replaced or modified. |
| `navigation_map_changed()` | Emitted when the navigation map ID is changed. |

---

### Example

```gdscript
# Assuming a NavigationRegion2D node named "NavRegion" in the scene
var region = $"NavRegion"
var poly = NavigationPolygon.new()
poly.add_outline([Vector2(-50, -50), Vector2(50, -50), Vector2(50, 50), Vector2(-50, 50)])
region.navigation_polygon = poly
```

This script creates a simple square navigation region that a `NavigationAgent2D` can traverse.

---

### Related Classes

- [NavigationAgent2D](https://docs.godotengine.org/en/stable/classes/class_navigationagent2d.html) – Agent that follows navigation paths.  
- [NavigationPolygon](https://docs.godotengine.org/en/stable/classes/class_navigationpolygon.html) – Holds the polygon data used by navigation regions.  

---

**Further Reading**

- Navigation 2‑D system overview – *Godot Docs*  
- Navigation 3‑D system overview – *Godot Docs* (for comparison)  

---