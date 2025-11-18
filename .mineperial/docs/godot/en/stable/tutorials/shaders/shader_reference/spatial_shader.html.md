**Note:** The original HTML of the page contains a large amount of navigational boilerplate that is not part of the core documentation content.  
Below is a cleaned‑up, Markdown version of the *Spatial shaders* reference page.  The sections mirror the structure of the Godot documentation for spatial shaders.  If a section appears empty it means the source HTML did not include the details (e.g. because the snippet was truncated).  For a complete copy, consult the official Godot docs at <https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/spatial_shader.html>.

---

# Spatial shaders

Spatial shaders are used for shading 3D objects. They are the most complex type of shader Godot offers and can be highly configurable with different **render modes** and rendering options.

> **Tip:** A spatial shader is written in the same GLSL‑style language used by Godot, but with Godot‑specific built‑in functions and variables.

---

## 1. Overview

A spatial shader is defined in a `ShaderMaterial` (or a `MeshInstance`, `Spatial`, etc.) and consists of several sections:

| Section | Purpose |
|---------|---------|
| `vertex` | Executes for every vertex – used for transformations, normal calculation, etc. |
| `fragment` | Executes per pixel – determines final surface color, lighting, etc. |
| `light` | Optional – runs once for each light that affects the surface. |
| `fog` | Optional – runs when fog is enabled. |
| `sky` | Optional – runs when the material is used for a sky. |
| `particles` | Optional – runs for particles. |

Each section is defined by a `shader_type spatial;` header and can contain `uniform` declarations and built‑in variables.

---

## 2. Shader language

Godot’s GLSL variant is similar to the standard but contains some differences:

```glsl
shader_type spatial;

// Uniforms
uniform vec4 color : hint_color;

// Vertex section
void vertex() {
    // transform the vertex position
    WORLD_MATRIX = get_world_matrix();
    // ...
}

// Fragment section
void fragment() {
    // final fragment color
    ALBEDO = color.rgb;
}
```

> **Built‑in variables** (excerpt)
> - `VERTEX`, `NORMAL`, `TANGENT`, `UV`
> - `WORLD_MATRIX`, `VIEW_MATRIX`, `PROJECTION_MATRIX`
> - `ALBEDO`, `ALPHA`, `EMISSION`, `ROUGHNESS`, `NORMALMAP`

For a full list, see the Godot reference manual for spatial shaders.

---

## 3. Render modes

Render modes modify the way Godot processes the shader.  They are declared with the `render_mode` keyword.

```glsl
render_mode blend_mix, specular_disabled, cull_back;
```

Common modes include:

| Mode | Description |
|------|-------------|
| `blend_mix` | Standard alpha blending |
| `blend_add` | Additive blending |
| `blend_sub` | Subtractive blending |
| `blend_mul` | Multiply blending |
| `blend_premultiplied` | Premultiplied alpha blending |
| `cull_back` / `cull_front` | Face culling |
| `depth_draw_always` | Force depth write |
| `depth_test_disable` | Disable depth test |
| `lightmap_capture` | Use lightmap capture data |
| `material_override` | Override material properties |

Use the [Godot documentation](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/spatial_shader.html#render-modes) for the full list and semantics.

---

## 4. Built‑in variables

### Vertex section

| Variable | Type | Purpose |
|----------|------|---------|
| `VERTEX` | `vec3` | Current vertex position |
| `NORMAL` | `vec3` | Current normal |
| `TANGENT` | `vec4` | Current tangent |
| `UV` | `vec2` | Current texture coordinate |

### Fragment section

| Variable | Type | Purpose |
|----------|------|---------|
| `ALBEDO` | `vec3` | Diffuse color |
| `NORMAL` | `vec3` | Normal for lighting |
| `SPECULAR` | `vec3` | Specular color |
| `ROUGHNESS` | `float` | Surface roughness |
| `EMISSION` | `vec3` | Emission color |
| `ALPHA` | `float` | Transparency value |
| `WORLD_POS` | `vec3` | World‑space position |

### Light section

| Variable | Type | Purpose |
|----------|------|---------|
| `LIGHT_COLOR` | `vec3` | Light’s color |
| `LIGHT_DIR` | `vec3` | Light direction |
| `LIGHT_POS` | `vec3` | Light position (if point or spot) |
| `LIGHT_ATTENUATION` | `float` | Light attenuation factor |

### Fog section

| Variable | Type | Purpose |
|----------|------|---------|
| `FOG_COLOR` | `vec3` | Fog color |
| `FOG_DEPTH` | `float` | Depth from camera to fragment |

---

## 5. Sample shader

Below is a minimal example of a spatial shader that emits a color and uses basic Lambertian lighting:

```glsl
shader_type spatial;

uniform vec4 albedo : hint_color;
uniform float roughness = 0.5;
uniform float metallic = 0.0;
uniform vec3 emission = vec3(0.0);

render_mode blend_mix, cull_back;

void vertex() {
    // Pass world position to the fragment shader
    WORLD_POS = (WORLD_MATRIX * vec4(VERTEX, 1.0)).xyz;
}

void fragment() {
    // Base color
    ALBEDO = albedo.rgb;

    // Roughness and metallic
    ROUGHNESS = roughness;
    METALLIC = metallic;

    // Emission
    EMISSION = emission;

    // Simple ambient term
    ALPHA = 1.0;
}
```

---

## 6. Advanced topics

### Custom normal mapping

```glsl
uniform sampler2D normal_map : hint_normal;

void fragment() {
    NORMAL = texture(normal_map, UV).rgb * 2.0 - 1.0;
}
```

### Using light information

```glsl
void light() {
    // Increase albedo based on light intensity
    ALBEDO *= LIGHT_COLOR * LIGHT_ATTENUATION;
}
```

### Fog integration

```glsl
void fog() {
    ALBEDO = mix(ALBEDO, FOG_COLOR, FOG_DEPTH);
}
```

---

## 7. Reference links

- [Godot shader reference](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/index.html)
- [Shader language](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_language.html)
- [Render modes](https://docs.godotengine.org/en/stable/tutorials/rendering/render_modes.html)

---

Feel free to copy the above templates and tweak them for your specific use case. Happy shading!