**NavigationMeshSourceGeometryData2D**  
*Experimental – may change or be removed in future releases.*

---

## Inheritance

```
Resource  ←  RefCounted  ←  Object  ←  NavigationMeshSourceGeometryData2D
```

This resource stores parsed 2‑D geometry that is used for baking navigation meshes.

---

## Description

`NavigationMeshSourceGeometryData2D` contains a list of polygons that define the walkable and obstacle areas for 2‑D navigation. Each polygon is represented by an array of points (`Vector2`) and optional metadata (material, transform, etc.). The data is normally produced by the `NavigationMeshSourceGeometry2D` node when baking a navigation mesh.

> **Note**: The class is marked *Experimental* and its API may change in future Godot releases.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `polygons` | `Array[PoolVector2Array]` | An array containing the points of each polygon. |
| `polygon_materials` | `Array[Material]` | Optional materials per polygon. |
| `polygon_indices` | `Array[PoolIntArray]` | Optional index arrays for triangles within each polygon. |
| `polygon_transform` | `Array[Transform2D]` | Transform applied to each polygon. |
| `polygon_custom_data` | `Array[Dictionary]` | Custom data that can be attached to each polygon. |

*(All properties are read/write and exposed in the inspector.)*

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `add_polygon(points, transform = Transform2D.IDENTITY, material = null, custom_data = {})` | `void` | Adds a new polygon with the supplied points and optional metadata. |
| `get_polygon_count()` | `int` | Returns the number of polygons stored. |
| `get_polygon_points(idx)` | `PoolVector2Array` | Retrieves the points for the polygon at index `idx`. |
| `get_polygon_material(idx)` | `Material` | Returns the material assigned to the polygon at index `idx`. |
| `get_polygon_transform(idx)` | `Transform2D` | Returns the transform of the polygon at index `idx`. |
| `get_polygon_custom_data(idx)` | `Dictionary` | Returns the custom data dictionary of the polygon at index `idx`. |
| `remove_polygon(idx)` | `void` | Removes the polygon at index `idx`. |
| `clear()` | `void` | Removes all polygons from the data container. |
| `get_polygons()` | `Array` | Returns a copy of the internal polygon array (points only). |
| `set_polygons(array)` | `void` | Replaces the internal polygon array with `array`. |

---

## Usage Example

```gdscript
# Assuming `nav_mesh_source` is a NavigationMeshSourceGeometry2D node
var source_data = nav_mesh_source.source_geometry_data

# Add a simple square polygon
var square_points = [
    Vector2(-32, -32),
    Vector2( 32, -32),
    Vector2( 32,  32),
    Vector2(-32,  32)
]
source_data.add_polygon(square_points)

# Inspect stored polygons
for i in range(source_data.get_polygon_count()):
    print("Polygon %d: %s" % [i, source_data.get_polygon_points(i)])
```

The `source_data` object can be manipulated at runtime or edited in the editor to create custom navigation geometry for your 2‑D scenes.

---

## Signals

This class does not emit any signals. Use `NavigationMeshSourceGeometry2D` for updates or bake operations instead.