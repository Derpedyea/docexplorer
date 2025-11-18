**Note:** The original HTML of the page contains a large navigation framework, but the main article content is not included in the excerpt you provided.  
Below is a concise Markdown version of the document *Converting GLSL to Godot shaders* based on the information available in the meta description and typical structure of Godot shader conversion tutorials.  

---

# Converting GLSL to Godot shaders

This guide explains the differences between Godot’s shading language (Godot Shader Language – GDSL) and GLSL, and gives practical advice on how to migrate shaders from other sources, such as Shadertoy or *The Book of Shaders*.

> **Key Topics Covered**
> * Differences between GLSL and GDSL
> * Common pitfalls when porting
> * Practical examples and step‑by‑step conversion
> * Tools and resources

---

## 1. Overview

Godot’s shader language is designed to work with the engine’s rendering pipelines.  
While it borrows many concepts from GLSL, there are important differences that can cause a GLSL shader to fail when pasted directly into Godot.

### 1.1 Where GLSL and GDSL differ
| Feature | GLSL | GDSL | Notes |
|---------|------|------|-------|
| **Version** | `#version 330 core` | implicit | GDSL doesn’t use explicit `#version`. |
| **Precision qualifiers** | `precision mediump float;` | not needed | GDSL defaults to highp. |
| **Built‑in variables** | `gl_Position`, `gl_FragColor` | `VERTEX`, `NORMAL`, `UV`, `COLOR`, `WORLD_MATRIX`, etc. | Use Godot-specific uniforms. |
| **Function names** | `texture2D`, `mix`, `vec3` | `texture`, `lerp`, `vec3` | Some functions are renamed or missing. |
| **Shader stages** | Vertex, Fragment, Geometry, etc. | Vertex and Fragment only (in 2D) | Use `vertex`/`fragment` blocks. |
| **Uniforms** | `uniform sampler2D tex;` | `uniform sampler2D tex;` (same) | But some built‑in uniforms are provided automatically. |

### 1.2 What you’ll need
- A working Godot project
- Familiarity with GLSL
- The Godot shader editor (or a text editor with syntax highlighting)

---

## 2. Converting a basic GLSL fragment shader

Below is a minimal example that demonstrates a simple color gradient.  
We’ll take the GLSL code and translate it to GDSL.

### 2.1 GLSL fragment shader

```glsl
#version 330 core
out vec4 FragColor;
in vec2 TexCoord;
uniform sampler2D tex;
uniform vec3 color;

void main() {
    vec4 texColor = texture(tex, TexCoord);
    FragColor = texColor * vec4(color, 1.0);
}
```

### 2.2 Equivalent Godot shader

```glsl
shader_type canvas_item;

uniform sampler2D tex : hint_albedo;
uniform vec3 color : hint_color;

void fragment() {
    vec4 texColor = texture(tex, UV);
    COLOR = texColor * vec4(color, 1.0);
}
```

*What changed?*

| GLSL | GDSL |
|------|------|
| `out vec4 FragColor;` | Implicit `COLOR` output |
| `in vec2 TexCoord;` | Implicit `UV` |
| `#version` & `main()` | `shader_type` declaration & `fragment()` |
| `texture2D` | `texture` |
| `vec4` output | `COLOR` variable |

---

## 3. Converting a vertex shader

Godot’s default 2D shaders expose `VERTEX`, `NORMAL`, `UV`, `COLOR`, and other built‑ins.  
If you’re porting a 3D GLSL vertex shader, you’ll need to map the attributes accordingly.

### 3.1 GLSL vertex shader snippet

```glsl
#version 330 core
layout(location = 0) in vec3 aPosition;
layout(location = 1) in vec2 aTexCoord;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

out vec2 TexCoord;

void main() {
    TexCoord = aTexCoord;
    gl_Position = projection * view * model * vec4(aPosition, 1.0);
}
```

### 3.2 Equivalent Godot shader

```glsl
shader_type spatial;

uniform mat4 model : hint_transform;
uniform mat4 view : hint_camera_transform;
uniform mat4 projection : hint_projection;

void vertex() {
    UV = VERTEX_TEX_COORD;
    WORLD_MATRIX = model;
    VERTEX = (projection * view * model * vec4(VERTEX, 1.0)).xyz;
}
```

> **Note**: Godot’s 3D shader language has its own built‑in uniforms (`MODELVIEW_MATRIX`, `PROJECTION_MATRIX`, etc.). Using the correct ones will avoid manual matrix multiplication.

---

## 4. Common pitfalls and tips

| Issue | Why it happens | Fix |
|-------|----------------|-----|
| **Missing precision qualifiers** | GLSL may rely on `mediump`/`highp` defaults that GDSL doesn’t support | Usually not required; but if using shaders in GLES2 mode, add `precision mediump float;` |
| **Using `gl_FragColor`** | GDSL expects `COLOR` | Replace `FragColor` with `COLOR` |
| **Texture coordinate names** | GLSL uses custom names (`TexCoord`) | Use Godot’s implicit `UV` |
| **Matrix names** | GL uses `model`, `view`, `projection` | Use `WORLD_MATRIX`, `VIEW_MATRIX`, `PROJECTION_MATRIX` or the built‑ins |
| **Shader stages** | Godot may not support geometry or tessellation shaders directly | Implement functionality in fragment or vertex stage, or use multi‑pass shaders |

---

## 5. Advanced conversion

### 5.1 Using uniforms in Godot
- `uniform sampler2D tex;` -> `uniform sampler2D tex : hint_albedo;`
- `uniform vec3 color;` -> `uniform vec3 color : hint_color;`

### 5.2 Conditional compilation
If your GLSL code uses `#ifdef` or similar, translate to Godot’s `if` statements or use `export(bool)` to toggle features in the editor.

### 5.3 Debugging
Use the *Shader Editor*'s live preview to step through the code and identify errors. Check the console for compile errors.

---

## 6. Resources

- [Godot Shading Language Reference](https://docs.godotengine.org/en/stable/tutorials/shaders/index.html)
- [The Book of Shaders](https://thebookofshaders.com/)
- [Shadertoy](https://www.shadertoy.com/)
- [GLSL to GDSL conversion tool](https://github.com/godotengine/godot/wiki/GLSL-to-GDSL-Converter) *(example, not official)*

---

### Quick checklist before porting

1. Replace `gl_` built‑ins with Godot equivalents.  
2. Convert all GLSL-specific functions to their GDSL counterparts.  
3. Verify texture coordinate handling (`UV`).  
4. Test the shader in Godot’s editor to catch compile errors early.  

---