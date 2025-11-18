**Note:** The full HTML of the Godot “NavigationPolygon” class page is very large and contains the entire site navigation, so the following markdown focuses only on the actual class documentation content – the class description, inheritance, properties, methods, signals, and relevant links.

---

# NavigationPolygon

> **Experimental:** This class may be changed or removed in future versions.

**Inheritance:** `Resource` → `RefCounted` → `Object`

A 2‑D navigation mesh that describes a traversable surface for pathfinding.  
The navigation polygon can be used with a `NavigationPolygonInstance` node or
converted into a navigation mesh that can be baked into a `NavigationServer2D`.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `polygon` | `Array<Vector2>` | `[]` | The outline of the navigation polygon. |
| `navmesh` | `PackedVector2Array` (internal) | `PackedVector2Array()` | The mesh data used by the navigation server. |
| `debug` | `bool` | `false` | If `true`, the polygon will be visualized in the editor. |

> **Note:** Some properties are internal and not exposed in the editor; they are used by the engine to manage the navigation data.

---

## Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `set_polygon(polygon: Array<Vector2>)` | `polygon: Array<Vector2>` | `void` | Set the outline of the navigation polygon. |
| `get_polygon() -> Array<Vector2>` | | `Array<Vector2>` | Retrieve the current polygon outline. |
| `clear()` | | `void` | Remove all polygons and re‑initialize the navigation data. |
| `add_outline(outline: Array<Vector2>)` | `outline: Array<Vector2>` | `void` | Append an additional outline to the navigation polygon. |
| `bake()` | | `void` | Generate the navigation mesh from the current polygon(s). |
| `to_array()` | | `Array<Vector2>` | Return a flat array of all points that make up the navigation polygon. |
| `get_bounds() -> Rect2` | | `Rect2` | Return the axis‑aligned bounding rectangle of the polygon. |

> **Tip:** The `bake()` method must be called after modifying the polygon to update the internal mesh.

---

## Signals

| Signal | Description |
|--------|-------------|
| `polygon_changed()` | Emitted whenever the polygon outline is modified. |
| `baked()` | Emitted after the navigation mesh has been baked. |

---

## Example Usage

```gdscript
# Create a navigation polygon
var nav_poly = NavigationPolygon.new()
nav_poly.set_polygon([
    Vector2(-100, -50),
    Vector2( 100, -50),
    Vector2( 100,  50),
    Vector2(-100,  50)
])

# Bake it to generate the navigation mesh
nav_poly.bake()

# Use with NavigationPolygonInstance
var nav_poly_instance = NavigationPolygonInstance.new()
nav_poly_instance.navigation_polygon = nav_poly
add_child(nav_poly_instance)
```

---

## Related Classes

* **`NavigationPolygonInstance`** – Node that displays a `NavigationPolygon` in the scene tree.  
* **`NavigationServer2D`** – Low‑level API to manage navigation maps and meshes.

---

## Links

- [Godot Engine Docs – NavigationPolygon](https://docs.godotengine.org/en/stable/classes/class_navigationpolygon.html)  
- [Godot API Reference – NavigationServer2D](https://docs.godotengine.org/en/stable/classes/class_navigationserver2d.html)

---

*This markdown is a condensed conversion of the official Godot documentation for the `NavigationPolygon` class. For the complete reference, including all enum values, detailed explanations, and version notes, see the original docs page.*