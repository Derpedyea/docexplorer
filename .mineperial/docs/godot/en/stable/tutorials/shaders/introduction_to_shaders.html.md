**Introduction to Shaders**  
*Godot Engine Documentation – Stable*  

---

# What is a shader?

A *shader* is a small program that runs on the GPU and determines how a surface is rendered.  
In Godot shaders can be applied to:

| Node type | Shader kind | What it affects |
|-----------|-------------|-----------------|
| `Sprite`, `MeshInstance`, `CanvasItem` | *CanvasItem* | 2‑D nodes |
| `MeshInstance`, `Spatial` | *Spatial* | 3‑D meshes |
| `Particles` | *Particles* | Particle rendering |
| `Environment` | *Environment* | Viewport and post‑processing effects |

Each shader has two (sometimes three) sections:

* `shader_type ...;` – declares the type (`canvas_item`, `spatial`, …).  
* `uniform ...;` – public variables that can be set from the editor.  
* `varying ...;` – values passed from the vertex to the fragment shader.  
* `vertex` – optional. Runs for every vertex of a mesh.  
* `fragment` – required. Runs for every pixel.  

```glsl
shader_type canvas_item;

uniform vec4 color : hint_color = vec4(1.0, 1.0, 1.0, 1.0);

void fragment() {
    COLOR = color;
}
```

---

# How Godot’s shading language works

Godot’s shading language is a **subset of GLSL ES 3.0** (for `spatial`) and a custom language for 2‑D (`canvas_item`).  
The language is heavily wrapped so you can access engine‑specific built‑ins easily:

| Built‑in | Description |
|---------|-------------|
| `UV`, `UV2` | Texture coordinates |
| `TIME` | Time in seconds |
| `VIEWPORT_SIZE` | Size of the viewport in pixels |
| `NORMAL` | Normal vector of the fragment (for `spatial`) |
| `MODELVIEW_MATRIX` | Model‑view matrix (for `spatial`) |

The shader editor in Godot automatically generates a GUI for all `uniform` variables, so you can tweak them without touching code.

---

## Vertex vs. Fragment

* **Vertex** – executed once per vertex. Used for transforming geometry, computing custom attributes, etc.  
* **Fragment** – executed per pixel. Produces the final color (and optionally depth, normal, etc.).

A minimal **Spatial** shader that rotates a cube:

```glsl
shader_type spatial;

uniform float speed = 1.0;

void vertex() {
    // Rotate around Y axis
    float angle = TIME * speed;
    float s = sin(angle);
    float c = cos(angle);
    mat3 rot = mat3(c, 0.0, s,
                    0.0, 1.0, 0.0,
                   -s, 0.0, c);
    VERTEX = rot * VERTEX;
}

void fragment() {
    ALBEDO = vec3(0.8, 0.6, 0.4);
}
```

---

# Shaders in the editor

1. **Create a new `ShaderMaterial`** and attach it to a node (`Sprite`, `MeshInstance`, …).  
2. Click the **Open Shader** button to edit the shader code.  
3. Godot’s **live preview** will update as you type.  

You can also use *Shader Parameters* in the inspector to adjust uniforms in real time.

---

# Built‑in shader functions

| Function | Purpose | Example |
|----------|---------|---------|
| `texture()` | Sample a 2‑D texture | `vec4 tex = texture(TEXTURE, UV);` |
| `texture()` (sampler3D) | Sample 3‑D texture | `vec4 color = texture(SAMPLER, vec3(UV, 0.5));` |
| `noise()` | Perlin noise | `float n = noise(vec3(UV, TIME));` |
| `smoothstep()` | Smooth interpolation | `float val = smoothstep(0.0, 1.0, n);` |

---

# Common pitfalls

1. **Missing `shader_type`** – the compiler will not know what kind of shader you are writing.  
2. **Using `ALBEDO` in `canvas_item` shaders** – only `COLOR` is available.  
3. **Exceeding the maximum number of texture units** – each `sampler2D` consumes a unit; keep it below the GPU limit (typically 16).  

---

# Further reading

* [Shading Language Reference](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_language.html) – detailed API of all built‑ins and functions.  
* [Godot 4.0: Shading Language Overview](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_language.html#glsl-in-godot) – differences from classic GLSL.  
* [Advanced Shading](https://docs.godotengine.org/en/stable/tutorials/shaders/advanced_shaders.html) – normal mapping, specular, environment lighting, etc.  

---