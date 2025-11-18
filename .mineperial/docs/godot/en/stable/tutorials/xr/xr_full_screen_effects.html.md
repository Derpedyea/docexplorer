**XR Full‑Screen Effects – Godot Engine Documentation**  
*(excerpt from the official Godot docs, converted to Markdown)*

---

# XR Full‑Screen Effects

When adding custom full‑screen effects to your XR application, one approach is to use a full‑screen quad and apply the desired shader to that quad. The quad is rendered on top of the XR view, so its shader can modify the final image before it is displayed to the headset.

> **Tip:**  
> Use a `MeshInstance3D` with a `QuadMesh` that matches the viewport resolution.  
> Attach a `CanvasItem`‑style shader to it or use a `ShaderMaterial`.

---

## 1. Set up a full‑screen quad

1. **Add a `MeshInstance3D` node** to your scene.  
2. In the inspector, change its mesh to a **`QuadMesh`**.  
3. Scale the quad so it fills the whole viewport.  
4. Position it at the origin and set its transform so that it always stays in front of the camera.  
   ```gdscript
   # Example GDScript to keep the quad in front of the XR camera
   extends MeshInstance3D

   @onready var cam = $"../XRCamera"  # Replace with your camera node path

   func _process(delta):
       global_transform = cam.global_transform
       # Move the quad slightly in front of the camera
       global_translate(Vector3(0, 0, -0.01))
   ```
5. Create a `ShaderMaterial` for the mesh and attach a fragment shader that implements your effect.

---

## 2. Example shader – simple vignette

```glsl
shader_type spatial;

uniform sampler2D texture : hint_albedo;

void fragment() {
    vec2 uv = UV;
    // Center distance
    float dist = distance(uv, vec2(0.5));
    // Simple vignette factor
    float vignette = smoothstep(0.8, 0.5, dist);
    // Sample the underlying XR view
    vec4 color = texture(texture, uv);
    // Darken towards the edges
    color.rgb *= vignette;
    ALBEDO = color.rgb;
    ALPHA = color.a;
}
```

> **Note**  
> The `texture` uniform is automatically set by Godot to the current viewport image when using `CanvasItem` shaders on a `MeshInstance3D`. For a full‑screen quad in a 3‑D scene, you might need to manually set this uniform using code:

```gdscript
var viewport_texture = get_viewport().get_texture()
shader_material.set_shader_param("texture", viewport_texture)
```

---

## 3. Alternative: Viewport‑Based Post‑Processing

Instead of a quad, you can also render the XR view to a `Viewport` and then apply a `CanvasLayer`‑style post‑process effect. This is useful for more complex multi‑pass shaders.

1. Create a child `Viewport` under your XR camera.  
2. Set its `Render Target` to **"Viewport"** and enable **"Transparent Background"**.  
3. Add a `TextureRect` that covers the viewport area, with its `Texture` pointing to the viewport's texture.  
4. Apply a `CanvasItem` shader to the `TextureRect`.

---

## 4. Handling HMD Distortion & Layering

- **Avoid** rendering the full‑screen quad in the same layer as UI elements that should bypass the effect.  
- Use **OpenXR composition layers** for more complex overlay handling (see the related *OpenXR composition layers* documentation).  
- Keep the quad on a dedicated **rendering layer** and set its `Layer Mask` accordingly.

---

## 5. Performance Tips

- Use a **single pass** shader whenever possible; multi‑pass shaders can be expensive on mobile XR devices.  
- Reuse the same `ShaderMaterial` instance across scenes to avoid allocating new resources.  
- Disable the quad's visibility when the effect is not needed (e.g., when the user exits the VR mode).

---

## 6. References

- [Godot Docs – Viewport](https://docs.godotengine.org/en/stable/tutorials/viewport.html)  
- [Godot Docs – Shaders](https://docs.godotengine.org/en/stable/tutorials/shaders/index.html)  
- [OpenXR Composition Layers](https://docs.godotengine.org/en/stable/tutorials/xr/openxr_composition_layers.html)

---

**End of XR Full‑Screen Effects Documentation**