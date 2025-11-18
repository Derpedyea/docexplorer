**Shading language**  
======================

This page is part of the Godot Engine documentation and provides a reference to the shading language used in Godot shaders. The following sections are included:

* **Introduction** – Overview of the language and its relation to GLSL ES 3.0.
* **Syntax** – Basic syntax, data types, and control flow.
* **Built‑in functions** – A list of available functions for vector, matrix, noise, texture sampling, etc.
* **Uniforms and shader storage** – Declaring and using uniforms, constants, and shader storage buffers.
* **Shader stages** – `vertex`, `fragment`, and optional `light` functions.
* **Built‑in variables** – Special variables like `MODELVIEW_MATRIX`, `NORMAL_MATRIX`, `UV`, `VERTEX`, etc.
* **Examples** – Sample code blocks showing common shader patterns.

Below is a clean Markdown rendition of the page content (the full source is too large to list entirely here).  
Feel free to copy the relevant parts into your own documentation or project.

---

### 1. Introduction

Godot’s shading language is a simplified variant of GLSL ES 3.0.  
Most GLSL ES 3.0 data types and functions are supported, and the remaining ones are being added over time.  
If you already know GLSL ES 3.0 you can quickly adapt to Godot’s syntax.

> **Note**: In Godot 4 the shading language has been reworked to match the Vulkan pipeline; this page refers to Godot 4's language.

---

### 2. Basic Syntax

```glsl
shader_type spatial; // or canvas_item / particle

// Vertex shader
void vertex() {
    // code
}

// Fragment shader
void fragment() {
    // code
}
```

* `shader_type` declares the shader type (`canvas_item`, `spatial`, `particles`).
* Functions `vertex()`, `fragment()`, and (in `spatial` shaders) `light()` are optional entry points.

#### 2.1 Data Types

| Type | Description |
|------|-------------|
| `float`, `int`, `bool` | Scalar types |
| `vec2`, `vec3`, `vec4` | Vectors |
| `mat2`, `mat3`, `mat4` | Matrices |
| `sampler2D`, `samplerCube`, `sampler2DArray` | Textures |

---

### 3. Uniforms & Storage

```glsl
uniform vec4 color = vec4(1.0);
uniform sampler2D texture : hint_albedo;
uniform float time : hint_range(0.0, 10.0);
```

* `uniform` declares a shader uniform.
* Hints (e.g., `hint_albedo`) provide editor metadata.

---

### 4. Built‑in Variables

* `VERTEX` – Input vertex position.
* `NORMAL` – Input normal.
* `UV` – UV coordinates.
* `COLOR` – Vertex color.
* `MODELVIEW_MATRIX`, `PROJECTION_MATRIX` – Transformation matrices.
* `LIGHT` – Information about a single directional light.
* `FRAG_COLOR` – Output fragment color (in `fragment()`).

---

### 5. Built‑in Functions

| Category | Function | Description |
|----------|----------|-------------|
| **Vector math** | `dot(a, b)`, `cross(a, b)`, `normalize(v)` | Basic vector operations |
| **Texture sampling** | `texture2D(sampler, uv)`, `textureCube(sampler, dir)` | Sample a 2D or cube texture |
| **Noise** | `noise(vec3)`, `random()` | Perlin/simplex noise and random values |
| **Lighting** | `light_energy`, `light_color`, `light_attenuation` | Light properties |
| **Utilities** | `clamp(x, min, max)`, `mix(a, b, t)` | Common utilities |

*(Full list in the official docs.)*

---

### 6. Example: Simple Phong Shading

```glsl
shader_type spatial;

uniform vec4 albedo : hint_color = vec4(1.0);
uniform vec3 light_pos : hint_vector;
uniform vec3 camera_pos : hint_vector;

void vertex() {
    // Transform vertex to world space
    VERTEX = (WORLD_MATRIX * vec4(VERTEX, 1.0)).xyz;
}

void fragment() {
    vec3 normal = normalize(NORMAL);
    vec3 light_dir = normalize(light_pos - VERTEX);
    vec3 view_dir = normalize(camera_pos - VERTEX);

    float diff = max(dot(normal, light_dir), 0.0);
    vec3 reflect_dir = reflect(-light_dir, normal);
    float spec = pow(max(dot(view_dir, reflect_dir), 0.0), 32.0);

    vec3 color = albedo.rgb * diff + vec3(1.0) * spec;
    FRAG_COLOR = vec4(color, albedo.a);
}
```

---

### 7. Further Reading

* [Built‑in functions](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/shader_functions.html)
* [Shader types](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/shader_types.html)

---