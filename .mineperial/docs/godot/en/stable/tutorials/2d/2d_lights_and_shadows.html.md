**2D lights and shadows**  
*Godot Engine (stable) documentation*

---

### Introduction
By default, 2D scenes in Godot are unshaded, with no lights and shadows visible. While this is fast to render, unshaded scenes can look bland. Godot provides the ability to use real‑time 2‑D lighting and shadowing to give your scenes more depth and atmosphere.

---

## 1. Setting up a 2‑D scene

1. Create a new **2‑D Scene** (Node2D).
2. Add a `Sprite2D` (or `AnimatedSprite2D`) as a child and set its texture.
3. Add a `TileMap` or any other nodes you wish to illuminate.

---

## 2. Adding a `Light2D`

The `Light2D` node is the basic light source in 2‑D.

| Property | Description |
|----------|-------------|
| `Texture` | The light’s texture (usually a radial gradient). |
| `Energy` | Brightness multiplier. |
| `Mode` | `Additive`, `Subtract`, or `Mix`. |
| `Transform` | Position, rotation and scale. |
| `Color` | Tint of the light. |
| `Shadow` | `On`/`Off`. |
| `Shadow Smooth` | Softness of shadow edges. |
| `Shadow Normal Strength` | Shadow height. |
| `Shadow Color` | Tint of shadows. |

### Example

```gdscript
# Assuming a Light2D node is already added to the scene
var light : Light2D = $Light2D
light.energy = 1.5
light.color = Color(1, 0.9, 0.8)   # Warm light
```

---

## 3. Adding occluders

Occluders define the shape that will block light.

### LightOccluder2D
A `LightOccluder2D` node uses a `OccluderPolygon2D` or a `Sprite2D` to define its shape.

*Create an `OccluderPolygon2D`*  
1. Add a `LightOccluder2D` node.  
2. In its **Occluder** property, click **New OccluderPolygon2D**.  
3. In the `OccluderPolygon2D` editor, draw the polygon that will block light.

*Using a sprite as an occluder*  
You can set **Occluder Mode** to *Texture* and select a texture that contains the shape (usually a transparent PNG).

---

## 4. Using `Light2D` with `ColorRect` or `Polygon2D`

If you prefer a rectangular light, use `ColorRect` and set its `self_modulate` to the light color.  
`Polygon2D` can be used to create custom light shapes.

---

## 5. Shaders for custom lighting

You can write a simple shader to modulate lighting:

```glsl
shader_type canvas_item;

uniform vec4 light_color : hint_color = vec4(1.0, 1.0, 1.0, 1.0);

void fragment() {
    COLOR.rgb *= light_color.rgb * LIGHT_COLOR.rgb;
}
```

Add this shader to any `Sprite2D` to blend with `Light2D`.

---

## 6. Performance tips

- **Batch lights**: Keep the number of active `Light2D` nodes low.  
- **Use occluder layers**: Place occluders on separate layers and disable them when not needed.  
- **Shadow atlas**: Godot automatically batches shadows to reduce draw calls.  
- **Light2D texture**: Use a small, radial gradient texture to reduce memory usage.

---

## 7. Common pitfalls

| Issue | Fix |
|-------|-----|
| Shadows are too dark | Increase `Shadow Color` or adjust the light’s `Energy`. |
| Shadows don’t show | Make sure `Shadow` is turned on and an occluder is present. |
| Light flickers | Use a consistent `Light2D` texture; avoid using a texture that changes each frame. |

---

## 8. Further reading

- [Light2D](https://docs.godotengine.org/en/stable/classes/class_light2d.html) – class reference.  
- [LightOccluder2D](https://docs.godotengine.org/en/stable/classes/class_lightoccluder2d.html) – class reference.  
- [CanvasItem](https://docs.godotengine.org/en/stable/classes/class_canvasitem.html) – for custom shaders and blending.  

--- 

> **Tip**: Try setting the `Light2D`’s **Mode** to **Subtract** to create a simple dark‑area effect for spotlights.  

--- 

*This tutorial assumes you’re using Godot 4.0 or newer. For older versions, see the legacy 2‑D lighting guide.*