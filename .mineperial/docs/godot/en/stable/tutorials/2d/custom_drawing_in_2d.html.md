# Custom drawing in 2D

This tutorial explains how to create 2‑D graphics that are not covered by the standard Godot nodes (sprites, polygons, particles, text, etc.).  
The core of a custom 2‑D drawing is the **`_draw()`** method of a `CanvasItem`‑derived node (`Node2D`, `Control`, `Sprite2D`, …).  The method is called automatically whenever the node needs to be redrawn, and it gives you direct access to the low‑level drawing API.

> ⚠️ **Tip** – If you want the drawing to be visible in the editor as well as at runtime, make sure the script is attached to a `Node2D` (or a `Control`) that is part of a scene.

---

## 1.  What can you draw?

Godot’s drawing API provides the following primitives (methods are available on every `CanvasItem`):

| Method | Description |
|--------|-------------|
| `draw_rect(Rect2 rect, Color color, bool filled=true, int width=1)` | Draw a rectangle |
| `draw_line(Vector2 from, Vector2 to, Color color, int width=1, bool antialiased=true)` | Draw a line |
| `draw_arc(Vector2 center, float radius, float from_angle, float to_angle, int points=32, Color color=Color(1,1,1), int width=1, bool antialiased=true)` | Draw a circle or ellipse segment |
| `draw_circle(Vector2 center, float radius, Color color, int width=1)` | Draw a circle |
| `draw_polygon(Array points, Array colors=null, Texture texture=null, BlendMode blend_mode=CanvasItem.BLEND_MODE_MIX)` | Draw a filled polygon |
| `draw_polyline(Array points, Color color, int width=1, bool antialiased=true)` | Draw a polyline |
| `draw_string(Font font, Vector2 position, String text, int alignment=1, float width=0.0, Color color=Color(1,1,1))` | Draw text |
| `draw_texture(Texture2D texture, Vector2 position, Color modulate=Color(1,1,1))` | Draw a texture |
| `draw_texture_rect(Texture2D texture, Rect2 rect, bool tile=false, Color modulate=Color(1,1,1), bool stretch=false)` | Draw a texture inside a rectangle |
| `draw_set_transform(Vector2 offset, float rotation=0, Vector2 scale=Vector2.ONE)` | Apply a transformation before drawing |

All of the above functions are called inside `_draw()`.  If you need to change what is drawn you have to call `update()` (or `queue_redraw()` in Godot 4.1+), which schedules another call to `_draw()` on the next frame.

---

## 2.  A minimal example

Create a new scene, add a `Node2D` node and attach a script to it.

```gdscript
extends Node2D

func _draw():
    # a red square
    draw_rect(Rect2(-50, -50, 100, 100), Color(1, 0, 0))

    # a green circle
    draw_circle(Vector2(150, 0), 40, Color(0, 1, 0))

    # a blue line
    draw_line(Vector2(0, 100), Vector2(200, 100), Color(0, 0, 1), 2)

    # a simple polyline
    var points = [Vector2(0, 200), Vector2(50, 250), Vector2(100, 200)]
    draw_polyline(points, Color(1, 1, 0), 3)
```

Run the scene and you should see the four primitives drawn.

---

## 3.  Using dynamic data

If you want the drawing to react to changing properties (for example, an animated shape), store the values in variables, modify them in `_process()` or `_physics_process()`, and then call `update()`.

```gdscript
var angle : float = 0

func _process(delta):
    angle += delta * PI
    update()   # schedules _draw() again

func _draw():
    var center = Vector2(200, 200)
    var radius = 50 + 20 * sin(angle)
    draw_circle(center, radius, Color(0, 0.5, 1))
```

---

## 4.  Drawing in the editor

`_draw()` runs in the editor as well, so you can use it to preview custom UI widgets or debugging visuals.  
If the node is not visible in the editor, check that:

* The node is inside a scene that is open.
* `show_in_editor` is set to `true` for `Control` nodes (it is for `Node2D` by default).

---

## 5.  Common pitfalls

| Problem | Cause | Fix |
|---------|-------|-----|
| Nothing is drawn | `_draw()` is never called | Make sure the script extends `CanvasItem` (`Node2D` or `Control`) and that `draw()` functions are used correctly. |
| Drawing disappears after adding a child node | Child node takes the rendering priority | Use `CanvasItem`’s `z_index` or call `update()` after adding the child. |
| Drawing is too slow | Large number of primitives or expensive operations in `_draw()` | Cache the result in a `Viewport` or `Texture` and reuse it. |

---

## 6.  Advanced usage

### 6.1.  Using a custom texture

```gdscript
var tex : Texture2D

func _ready():
    tex = preload("res://my_texture.png")

func _draw():
    draw_texture(tex, Vector2.ZERO)
```

### 6.2.  Transforming the drawing

```gdscript
func _draw():
    draw_set_transform(Vector2(100, 100), PI/4, Vector2(1, 1))
    draw_rect(Rect2(-50, -50, 100, 100), Color(1,0,0))
```

### 6.3.  Drawing a polyline that follows the mouse

```gdscript
var points : PackedVector2Array = []

func _input(event):
    if event is InputEventMouseButton and event.pressed:
        points.append(event.position)
        update()

func _draw():
    if points.size() > 1:
        draw_polyline(points, Color(1, 0, 0), 3)
```

---

## 7.  Summary

* Custom 2‑D drawing is achieved by overriding `Node2D._draw()` (or `Control._draw()`).  
* Use the available drawing functions to create shapes, text, and textures.  
* Call `update()` whenever the drawing data changes.  
* You can use this technique for in‑editor previews, debugging, UI widgets, or any unique 2‑D visual that existing nodes can’t provide.

Happy drawing!