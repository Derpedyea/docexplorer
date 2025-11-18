# OccluderPolygon2D

*Godot Engine 4.x – Class Reference*  
Inherits: `Resource` → `RefCounted` → `Object`

> **Purpose**  
> The `OccluderPolygon2D` class defines a 2‑D polygon that can be used as a light occluder in a `LightOccluder2D` node. It is an editor‑friendly resource that allows you to draw, edit and store the polygon’s vertices.

> **Typical use**  
> ```gdscript
> var occluder = OccluderPolygon2D.new()
> occluder.polygon = PoolVector2Array([Vector2(0,0), Vector2(100,0), Vector2(100,100), Vector2(0,100)])
> var occluder_node = LightOccluder2D.new()
> occluder_node.occluder = occluder
> add_child(occluder_node)
> ```

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| **polygon** | `PoolVector2Array` | `PoolVector2Array()` | The list of vertices defining the polygon. They must be in counter‑clockwise order for correct normal calculation. |
| **use_collision** | `bool` | `false` | If enabled, the polygon’s shape will also be used as a physics collision shape. |
| **collision_layer** | `int` | `1` | Layer mask for physics collisions (only used when `use_collision` is `true`). |
| **collision_mask** | `int` | `0` | Mask for physics collisions (only used when `use_collision` is `true`). |
| **use_alpha** | `bool` | `false` | When `true`, the alpha channel of the occluder material is used to determine the occlusion. |
| **occluder_material** | `CanvasItemMaterial` | `null` | Custom material used for rendering the occluder. |
| **light_mask** | `int` | `1` | Bitmask controlling which lights affect this occluder. |

> **Note**: In Godot 4 the property names are *exactly* as above; earlier Godot versions used slightly different names (e.g., `polygon` was `vertices`). Always refer to the version you’re targeting.

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| **polygon_changed** | – | Emitted whenever the `polygon` property is modified. |
| **shape_changed** | – | Emitted when collision data changes (e.g., `use_collision`, `collision_layer`). |

> Use `connect("polygon_changed", self, "_on_polygon_changed")` to react to changes in the editor or runtime.

## Methods

| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| **`new()`** | – | `OccluderPolygon2D` | Constructor. |
| **`set_polygon(polygon : PoolVector2Array)`** | `polygon` | – | Sets the polygon vertices. |
| **`get_polygon() -> PoolVector2Array`** | – | `PoolVector2Array` | Returns the current vertex array. |
| **`set_use_collision(use : bool)`** | `use` | – | Enables or disables physics collision for the occluder. |
| **`is_using_collision() -> bool`** | – | `bool` | Returns whether collision is enabled. |
| **`set_collision_layer(layer : int)`** | `layer` | – | Sets the collision layer bitmask. |
| **`get_collision_layer() -> int`** | – | `int` | Gets the current collision layer. |
| **`set_collision_mask(mask : int)`** | `mask` | – | Sets the collision mask bitmask. |
| **`get_collision_mask() -> int`** | – | `int` | Retrieves the collision mask. |
| **`set_light_mask(mask : int)`** | `mask` | – | Sets which lights affect this occluder. |
| **`get_light_mask() -> int`** | – | `int` | Retrieves the light mask. |
| **`set_use_alpha(use : bool)`** | `use` | – | Toggles using the alpha channel for occlusion. |
| **`is_using_alpha() -> bool`** | – | `bool` | Returns whether alpha usage is enabled. |
| **`set_occluder_material(material : CanvasItemMaterial)`** | `material` | – | Assigns a custom material. |
| **`get_occluder_material() -> CanvasItemMaterial`** | – | `CanvasItemMaterial` | Returns the assigned material. |

## Usage in the Editor

1. **Create a new `OccluderPolygon2D`**  
   *In the FileSystem dock → right‑click → New Resource → OccluderPolygon2D.*

2. **Edit the polygon**  
   *Open the resource in the inspector → use the “Polygon” editor (a small 2‑D canvas) to add/remove vertices.*

3. **Attach to a `LightOccluder2D`**  
   *Create a `LightOccluder2D` node → set its `occluder` property to the resource you just edited.*

4. **Toggle collision**  
   *If you need the occluder to also be a physics body, enable `use_collision` and adjust layers/masks.*

## Common pitfalls

| Issue | Cause | Fix |
|-------|-------|-----|
| Occluder not visible | Polygon vertices not convex | Make sure the polygon is convex and vertices are in counter‑clockwise order. |
| Light not affected | Wrong `light_mask` | Ensure the mask bit is set for the light source. |
| Collision not registered | `use_collision` false | Enable collision and adjust layers/masks accordingly. |

## Related Classes

- **`LightOccluder2D`** – The node that uses `OccluderPolygon2D` to block light.  
- **`Occluder3D`** – 3‑D counterpart for `LightOccluder`.  
- **`CanvasItemMaterial`** – Material type that can be assigned to the occluder.

---

For more detailed API information, see the official Godot Engine documentation:

- [OccluderPolygon2D – Godot Docs](https://docs.godotengine.org/en/stable/classes/class_occluderpolygon2d.html)  
- [LightOccluder2D – Godot Docs](https://docs.godotengine.org/en/stable/classes/class_lightoccluder2d.html)

---