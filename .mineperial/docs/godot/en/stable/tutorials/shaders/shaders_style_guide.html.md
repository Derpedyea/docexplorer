# Shaders Style Guide

*This guide lists conventions to write elegant shaders in Godot. The goal is to encourage writing clean, readable code and promote consistency across projects, discussions, and tutorials.*

---

## Table of Contents

1. [General conventions](#general-conventions)
2. [Code layout & formatting](#code-layout-formatting)
3. [Naming conventions](#naming-conventions)
4. [Comments and documentation](#comments-and-documentation)
5. [Uniforms and inputs](#uniforms-and-inputs)
6. [Texture sampling & coordinate handling](#texture-sampling--coordinate-handling)
7. [Functions and built‑ins](#functions-and-built-ins)
8. [Shader stages](#shader-stages)
9. [Performance tips](#performance-tips)
10. [Examples](#examples)

---

## 1. General conventions

* Keep shaders short, focused, and modular.
* Avoid hard‑coded magic numbers – use constants or uniforms instead.
* Separate logic into distinct stages: vertex, fragment, and optionally geometry.
* Use a consistent style across all shaders in a project.

---

## 2. Code layout & formatting

| Item | Preferred style | Example |
|------|-----------------|---------|
| **Indentation** | 4 spaces | `    vec4 color = texture(albedo_texture, UV);` |
| **Line breaks** | 80‑90 characters per line | `vec4 final_color = base_color * light;` |
| **Block separation** | Two blank lines between functions | `func main():\n\n    ...` |
| **Semicolons** | Always end statements with a semicolon | `float foo = 1.0;` |

*Avoid tabs; use spaces only.*

---

## 3. Naming conventions

| Element | Convention | Example |
|---------|------------|---------|
| **Uniforms** | `snake_case` | `uniform mat4 model_view_proj;` |
| **Textures** | `snake_case` | `uniform sampler2D albedo_texture;` |
| **Varyings** | `snake_case` | `varying vec2 uv;` |
| **Functions** | `snake_case` | `vec4 compute_lighting(vec3 normal, vec3 light_dir);` |
| **Constants** | `UPPER_CASE_WITH_UNDERSCORES` | `const float PI = 3.14159265359;` |

*Use clear, descriptive names. Avoid abbreviations unless commonly understood.*

---

## 4. Comments and documentation

* Use **block comments** (`/* … */`) for multi‑line explanations.
* Use **line comments** (`// …`) for short notes.
* Document each function with its purpose, parameters, and return value.
* Avoid commenting obvious code; focus on non‑obvious logic.

```glsl
// Calculates diffuse lighting with Lambertian model.
vec3 calc_diffuse(vec3 normal, vec3 light_dir) {
    return max(dot(normal, light_dir), 0.0) * light_color;
}
```

---

## 5. Uniforms and inputs

| Type | Suggested declaration | Notes |
|------|----------------------|-------|
| **Uniforms** | `uniform` | Keep them grouped at the top of the shader. |
| **Varyings** | `varying` (for legacy) / `in` (GLSL ES 3.0+) | Use `in` for vertex to fragment communication. |
| **Constants** | `const` | Define at the top, before functions. |

Example:

```glsl
// Uniforms
uniform sampler2D albedo_texture;
uniform vec3 light_direction;

// Varyings
in vec2 UV;

// Constants
const float PI = 3.14159265359;
```

---

## 6. Texture sampling & coordinate handling

* Use normalized UV coordinates (`0.0 – 1.0`).
* Store texture coordinate scaling in a uniform if it may change.
* Avoid unnecessary texture fetches per pixel.

```glsl
vec4 albedo = texture(albedo_texture, UV * tex_scale);
```

---

## 7. Functions and built‑ins

* Keep functions short (< 10 lines).
* Group related helper functions together.
* Prefer using built‑in GLSL functions where possible.

```glsl
float saturate(float x) { return clamp(x, 0.0, 1.0); }
```

---

## 8. Shader stages

| Stage | Typical responsibilities | Example |
|-------|-------------------------|---------|
| **Vertex** | Transform positions, pass varyings | `gl_Position = model_view_proj * vec4(position, 1.0);` |
| **Fragment** | Compute final pixel color | `color = compute_lighting(normal, light_dir);` |

---

## 9. Performance tips

1. **Cache frequently used values** in temporaries.
2. **Minimize branch divergence** – use `step`, `smoothstep` instead of `if` when possible.
3. **Reduce texture lookups** – combine samplers into texture atlases if feasible.
4. **Use `mediump` or `lowp`** for values that do not need high precision.
5. **Avoid dynamic loops** unless the loop bounds are known at compile time.

---

## 10. Examples

### Basic Lit Shader

```glsl
// Uniforms
uniform sampler2D albedo_texture;
uniform vec3 light_dir;

// Varyings
in vec2 UV;
in vec3 normal;

// Main fragment function
void main() {
    vec4 albedo = texture(albedo_texture, UV);
    float NdotL = max(dot(normal, light_dir), 0.0);
    vec3 diffuse = albedo.rgb * NdotL;
    gl_FragColor = vec4(diffuse, albedo.a);
}
```

### Custom Normal Mapping

```glsl
uniform sampler2D normal_texture;
in vec2 UV;

void main() {
    vec3 n = texture(normal_texture, UV).rgb * 2.0 - 1.0;
    // rest of shading logic …
}
```

---

> **Tip**  
> Keep your shaders version‑agnostic when possible by using `#version 310 es` or the corresponding Godot shader language version.

---

Feel free to adapt this style guide to suit your team's conventions and project requirements. Happy shading!