# PolygonOccluder3D

**Inherits**: `Occluder3D` → `Resource` → `RefCounted`

---

## Description

`PolygonOccluder3D` stores a flat 2‑D polygon shape that can be used with occlusion culling in `OccluderInstance3D`. This resource is designed to help the engine determine which parts of a 3‑D scene are hidden from the camera’s view and can be skipped during rendering, improving performance.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `polygon` | `PackedVector2Array` | `[]` | The 2‑D vertices that define the polygon shape. |

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_polygon(polygon: PackedVector2Array)` | `void` | `polygon` | Sets the polygon vertices. |
| `get_polygon() -> PackedVector2Array` | `PackedVector2Array` | | Returns the current polygon vertices. |
| `set_transform(transform: Transform2D)` | `void` | `transform` | Applies a 2‑D transform to the polygon. |
| `get_transform() -> Transform2D` | `Transform2D` | | Returns the current transform. |

*(Additional methods such as `get_polygon_transform()` and others may be available in the full API.)*

---

## Signals

*(None are defined for this class.)*

---

## Usage Example

```gdscript
# Create a polygon occluder
var occluder = PolygonOccluder3D.new()
occluder.polygon = PackedVector2Array([
    Vector2(0, 0),
    Vector2(100, 0),
    Vector2(100, 100),
    Vector2(0, 100)
])
occluder.transform = Transform2D(0, Vector2(0, 0))

# Assign to an OccluderInstance3D node
var occluder_instance = OccluderInstance3D.new()
occluder_instance.occluder = occluder
add_child(occluder_instance)
```

---

## See Also

- [OccluderInstance3D](../classes/class_occluderinstance3d.html)
- [Occluder3D](../classes/class_occluder3d.html)

---