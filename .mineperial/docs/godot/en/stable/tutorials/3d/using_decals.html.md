**Using Decals**  
*Godot Engine Documentation – Stable Edition*

---

## 1. What are Decals?

Decals are **projected textures** that can be applied to both opaque and transparent surfaces in 3D scenes.  
Unlike traditional mesh-based “bullet‑hole” or “stain” objects, decals are rendered in real‑time by the renderer’s deferred pipeline, meaning they:

* Do **not** require a geometry mesh for each decal instance  
* Can be moved, rotated, or animated freely in the scene  
* Are automatically blended with the surface they touch (normal/roughness/…)

> **Tip** – Decals are ideal for dynamic effects such as bullet holes, paint splashes, or wall stains where you don’t want to bake separate geometry into each object.

---

## 2. Adding a Decal Node to a Scene

1. **Create a new `Decal` node**  
   * `Node3D → Decal` (or add it through the *Add Child Node* dialog).

2. **Position and orient it**  
   * The decal’s transform determines where and which direction it projects.  
   * It’s often useful to align the decal’s Z‑axis with the normal of the surface you’re projecting onto.

3. **Assign a material**  
   * In the *Inspector*, click **New ShaderMaterial** → **Shader**.  
   * Use the built‑in `Decal` shader or create a custom one (see §5).

4. **Configure the decal size**  
   * The `Size` property defines the 2‑D rectangle that the texture is projected onto.  
   * The default unit is meters; you can change the `Decal Scale` property to use your own units.

---

## 3. Decal Parameters

| Property | Default | Description |
|----------|---------|-------------|
| `Texture` | None | The image that will be projected. |
| `Material` | `Decal` | The shader that determines how the decal blends with the surface. |
| `Size` | `Vector2(1, 1)` | Width and height of the projected area. |
| `UV Scale` | `Vector2(1, 1)` | Scaling of the texture coordinates. |
| `Z Offset` | `0.0` | Distance from the decal to the surface to avoid Z‑fighting. |
| `Depth Bias` | `0.0` | Additional offset to prevent the decal from being occluded by geometry. |
| `Alpha Cut` | `0.1` | Threshold for discarding transparent pixels. |
| `Mode` | `Opaque` | Can be `Opaque`, `Transparent`, or `Additive` for blending modes. |

> **Note** – The `Decal` node is only supported in the **Forward+** and **Mobile** renderers (as of Godot 4.x).

---

## 4. Example: Adding a Bullet‑Hole Decal

```gdscript
# Assuming a Decal node named "BulletDecal" is a child of the target surface
func add_bullet_hole(position: Vector3, normal: Vector3) -> void:
    var decal = Decal.new()
    decal.transform.origin = position
    decal.transform.basis = Basis(normal, Vector3.UP).orthonormalized()
    decal.size = Vector2(0.5, 0.5)
    decal.texture = preload("res://bullet_hole.png")
    decal.z_offset = 0.01
    get_parent().add_child(decal)
```

*The script creates a new `Decal`, or you can reuse a pre‑instantiated one and just update its transform.*

---

## 5. Custom Decal Shaders

The default Godot decal shader uses the surface’s albedo and normal.  
You can write a custom shader to achieve special effects:

```glsl
shader_type spatial;

render_mode blend_mix, cull_back, depth_draw_neither;

uniform sampler2D albedo : hint_albedo;
uniform sampler2D normal : hint_normal;
uniform float alpha_cut : hint_range(0.0, 1.0);

void fragment() {
    vec4 tex = texture(albedo, UV);
    if (tex.a < alpha_cut) discard;
    ALBEDO = tex.rgb;
    NORMAL = texture(normal, UV).rgb * 2.0 - 1.0;
}
```

> **Tip** – Use `depth_draw_always` and a small `depth_bias` if decals sometimes get clipped by geometry.

---

## 6. Managing Decal Layers

Godot’s **DecalLayer** system allows you to control which surfaces a decal can project onto:

1. In **Project Settings → Rendering → 3D → Decals** you can enable or disable `Decal Layers`.  
2. Each `MeshInstance` has a `Decal Layer Mask` that determines which layers the surface accepts.  
3. By default, decals project onto all layers; set the mask to a specific layer for performance or visual separation.

---

## 7. Performance Tips

| Tip | Explanation |
|-----|-------------|
| **Pool decals** | Reuse `Decal` instances instead of creating many temporary nodes. |
| **Limit texture size** | Keep decal textures under 512×512 when possible. |
| **Disable shadows** | Decals don’t cast shadows; use `Material → Shading Mode → Unshaded` for faster rendering. |
| **Batch by layer** | Group decals on the same layer to reduce state changes. |

---

## 8. Common Issues

| Issue | Fix |
|-------|-----|
| *Z‑fighting* | Increase `Z Offset` or use a negative `Depth Bias`. |
| *Invisible decals on transparent objects* | Change `Mode` to `Transparent` and ensure the base material supports transparency. |
| *Slow performance with many decals* | Use `DecalLayer` and a **shader with minimal calculations**, or limit the number of active decals. |

---

## 9. Further Reading

* [3D Lighting and Shadows](https://docs.godotengine.org/en/stable/tutorials/3d/lights_and_shadows.html)  
* [Shading Language](https://docs.godotengine.org/en/stable/tutorials/shading/index.html)  
* [Post‑Processing Effects](https://docs.godotengine.org/en/stable/tutorials/3d/post_process.html)

---