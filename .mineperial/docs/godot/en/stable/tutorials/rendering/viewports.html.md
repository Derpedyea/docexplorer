# Using Viewports

> **Think of a *Viewport* as a screen onto which the game is projected.**  
> In order to see the game, we need a surface on which to draw it. That surface is the **Root Viewport**.  
> Sub‑Viewports are like child screens that can render independently, be used for UI, cameras, screenshots, and more.

> *Source:* <https://docs.godotengine.org/en/stable/tutorials/rendering/viewports.html>

---

## Table of contents

1. [Root Viewport](#root-viewport)
2. [Sub‑Viewports](#sub-viewport)
3. [ViewportContainer](#viewportcontainer)
4. [Using Viewports for 2D](#using-viewports-for-2d)
5. [Using Viewports for 3D](#using-viewports-for-3d)
6. [Render to Texture](#render-to-texture)
7. [Practical Examples](#practical-examples)
   - [Example: Screenshot](#example-screenshot)
   - [Example: Multi‑camera View](#example-multi-camera-view)
8. [Common Use‑Cases](#common-use-cases)
9. [References](#references)

---

## Root Viewport

- The **root viewport** is the main drawing surface that Godot uses to present your game to the player.
- It is automatically created when you start a project and can be accessed via `get_viewport()`.
- You can read or modify its properties such as size, scaling mode, and render mode from code or the **Project Settings > Display > Window** panel.

---

## Sub‑Viewport

- A **Sub‑Viewport** is an independent rendering surface inside a scene.
- It can be used for:
  - Rendering a 2D or 3D view to a separate texture.
  - Creating a mini‑map, a camera feed, or a preview window.
  - Rendering a UI overlay that can be captured as a texture.

### Creating a Sub‑Viewport

```gdscript
# Add a SubViewport node to your scene
var sub_viewport = SubViewport.new()
sub_viewport.name = "MiniMapViewport"
sub_viewport.size = Vector2(256, 256)
sub_viewport.render_target_vflip = true  # flip the output if needed

add_child(sub_viewport)
```

- A `SubViewport` can be parented to any node, but it is common to use a `ViewportContainer` for proper layout.

---

## ViewportContainer

- A convenience node that automatically sizes and scales a `Viewport` to fit its rectangle.
- It supports both 2D and 3D viewports.
- Usage:

```gdscript
var viewport_container = ViewportContainer.new()
viewport_container.name = "MiniMapContainer"
viewport_container.rect_min_size = Vector2(256, 256)

var sub_viewport = SubViewport.new()
sub_viewport.name = "MiniMapViewport"
sub_viewport.size = viewport_container.rect_min_size

viewport_container.add_child(sub_viewport)
add_child(viewport_container)
```

- `ViewportContainer` handles resizing and ensures the viewport respects the parent’s size.

---

## Using Viewports for 2D

1. **UI Overlays**  
   Place UI nodes inside a `SubViewport` that is rendered to a `ViewportTexture`. This keeps the UI separate from the main scene graph.

2. **Custom Render Targets**  
   Render a part of the scene to a texture and use that texture on a `Sprite2D` or `TextureRect` elsewhere.

```gdscript
var viewport_texture = sub_viewport.get_texture()
$SomeSprite.texture = viewport_texture
```

3. **Multi‑Player Screens**  
   Each player can get their own viewport to display a unique camera view.

---

## Using Viewports for 3D

- A `Viewport` can contain any 3D nodes (e.g., a camera, lights, meshes).
- The rendered image can be displayed using `ViewportTexture`, `TextureRect`, or applied to a 3D material.
- This is useful for:
  - Creating live camera feeds (e.g., a security camera).
  - Implementing 3D mini‑maps or HUDs.
  - Rendering a secondary camera for split‑screen multiplayer.

Example of a camera rendering to a texture:

```gdscript
var cam = Camera3D.new()
cam.name = "CameraFeed"
sub_viewport.add_child(cam)

var viewport_texture = sub_viewport.get_texture()
$CanvasItem/TextureRect.texture = viewport_texture
```

---

## Render to Texture

A **Viewport** can expose its rendering as a `ViewportTexture`. This texture can be used in any node that accepts a texture, such as `Sprite2D`, `TextureRect`, or a `Material` parameter.

```gdscript
var tex = $ViewportContainer/SubViewport.get_texture()
$SomeSprite2D.texture = tex
```

When you want to save a screenshot:

```gdscript
func take_screenshot():
    var img = viewport.get_texture().get_image()
    img.save_png("res://screenshot.png")
```

---

## Practical Examples

### Example: Screenshot

1. Add a `SubViewport` with a camera and a small scene.
2. Call `get_image()` on its texture and write the file.

```gdscript
func _ready():
    var viewport = $Viewport
    var image = viewport.get_texture().get_image()
    image.save_png("user://screenshot.png")
```

### Example: Multi‑camera View

Create two `SubViewport`s, each with its own `Camera3D`, and display them in a `ViewportContainer` grid.

```gdscript
var viewport1 = SubViewport.new()
viewport1.name = "Camera1"
var cam1 = Camera3D.new()
viewport1.add_child(cam1)

var viewport2 = SubViewport.new()
viewport2.name = "Camera2"
var cam2 = Camera3D.new()
viewport2.add_child(cam2)

# Add to container and position
```

---

## Common Use‑Cases

| Use‑Case | Description |
|----------|-------------|
| **UI Layer** | Render UI in a `ViewportContainer` to keep it separate from the game world. |
| **Camera Feed** | Render a 3D camera view to a `TextureRect` for a security camera. |
| **Mini‑Map** | Use a small 3D viewport showing the map, rendered to a texture on the HUD. |
| **Screenshots / Video Capture** | Grab the viewport texture to save screenshots or stream video. |
| **Split‑Screen Multiplayer** | Each player gets a dedicated viewport showing their camera. |

---

## References

- Godot Documentation: [Viewport](https://docs.godotengine.org/en/stable/classes/class_viewport.html)
- Godot Documentation: [SubViewport](https://docs.godotengine.org/en/stable/classes/class_subviewport.html)
- Godot Documentation: [ViewportContainer](https://docs.godotengine.org/en/stable/classes/class_viewportcontainer.html)

--- 

**Tip:**  
Always keep the root viewport’s size consistent with the window size to avoid distortion. Use the scaling modes (`Stretch`, `Viewport`, etc.) under **Project Settings > Display > Window > Stretch** to manage aspect ratios automatically.