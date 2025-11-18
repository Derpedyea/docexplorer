**Using a SubViewport as a texture**

This tutorial shows how to create a `SubViewport` that renders a 3‑D scene to a texture and then use that texture on a 3‑D object (or 2‑D sprite). It covers the node setup, the GDScript that creates the viewport, and a minimal shader that samples the viewport texture.

---

## 1.  Introduction

* `SubViewport` is a node that renders its child scene into an off‑screen buffer.  
* The buffer can be retrieved as a `ViewportTexture` (`viewport.get_texture()`), which can be used as any other texture.  
* This is useful for:
  * live video feeds inside a game,
  * “screens” on in‑game objects that display other scenes,
  * dynamic environment mapping, etc.

---

## 2.  Scene setup

Create a new scene and add the following nodes (tree structure):

```
Root (Node2D or Spatial)
│
├─ MainViewport (SubViewport)
│   ├─ Camera (Camera2D / Camera3D)
│   └─ ... (any content you want to render)
│
└─ DisplayMesh (MeshInstance / Sprite)
```

1. **SubViewport**  
   * Set `Size` to the resolution you want (e.g. `256x256`).  
   * Check `Disable 3D` if you are only rendering 2‑D content, or leave it on for 3‑D.  
2. **Camera** – Attach a camera to the viewport so it knows what to render.  
3. **Content** – Add whatever you want to see on the texture (a 3‑D object, a 2‑D UI, etc.).

---

## 3.  GDScript to create the viewport

```gdscript
# main.gd
extends Node

var viewport : SubViewport
var viewport_texture : ViewportTexture

func _ready():
    # Create the SubViewport
    viewport = SubViewport.new()
    viewport.size = Vector2(512, 512)
    viewport.render_target_vflip = true   # optional: flip for correct orientation
    add_child(viewport)

    # Add a Camera
    var cam = Camera.new()
    cam.current = true
    viewport.add_child(cam)

    # Add a simple 3‑D object (e.g., a CubeMesh)
    var cube = MeshInstance.new()
    cube.mesh = CubeMesh.new()
    viewport.add_child(cube)

    # Grab the texture
    viewport_texture = viewport.get_texture()

    # Apply texture to a material
    var mat = SpatialMaterial.new()
    mat.albedo_texture = viewport_texture
    mat.flags_unshaded = true
    var mesh = MeshInstance.new()
    mesh.mesh = CubeMesh.new()
    mesh.material_override = mat
    add_child(mesh)
```

> **Tip:** If you want to keep the viewport hidden from the scene view, set `Viewport.hide()` after it is configured.

---

## 4.  Shader that uses the viewport texture

If you prefer a custom shader, attach a `SpatialMaterial` (or a shader material) to a mesh and write:

```glsl
shader_type spatial;

uniform sampler2D viewport_tex : hint_albedo;

void fragment() {
    // UV is automatically passed for 2‑D meshes; for 3‑D you may need to
    // calculate the UV manually or use a MeshInstance that already
    // maps UVs correctly.
    ALBEDO = texture(viewport_tex, UV).rgb;
}
```

Attach the material to any `MeshInstance` and set the uniform:

```gdscript
var mat = ShaderMaterial.new()
mat.shader = preload("res://viewport_shader.shader")
mat.set_shader_param("viewport_tex", viewport_texture)
mesh.material_override = mat
```

---

## 5.  Running the example

1. Press **Play** – you should see a cube (or whatever you added inside the viewport) rendered onto another cube.
2. Move the inner camera or change the viewport size – the texture updates automatically.

---

## 6.  Common pitfalls

| Issue | Fix |
|-------|-----|
| Texture appears black | Make sure the SubViewport has a **Camera** set as current. |
| Texture is upside‑down | Toggle `render_target_vflip`. |
| The viewport updates only once | Set `update_mode` of the SubViewport to `UPDATE_ALWAYS` (default) or call `viewport.update()` in `_process()`. |
| Performance hit | Keep viewport resolution low; enable `disable 3d` if only 2‑D. |

---

## 7.  Further reading

* [Godot Docs – Viewport](https://docs.godotengine.org/en/stable/tutorials/scene_system/viewport.html)  
* [Godot Docs – SubViewport](https://docs.godotengine.org/en/stable/classes/class_subviewport.html)  
* [Godot Docs – ViewportTexture](https://docs.godotengine.org/en/stable/classes/class_viewporttexture.html)

---

> *Enjoy creating dynamic, live‑rendered textures inside your Godot projects!*
