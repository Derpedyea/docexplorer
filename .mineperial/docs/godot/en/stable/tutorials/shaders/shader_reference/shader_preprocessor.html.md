**Shader Preprocessor** – Godot Engine Documentation  
===============================================

The Godot Shader Preprocessor is a small, language‑independent part of the
shader compiler that runs **before** the shader is parsed.  
Its main job is to perform text substitutions and conditional compilation,
allowing you to write more flexible, reusable, and platform‑aware shaders.

---

## 1.  Why use a shader preprocessor?

* **Portability** – Define values that change with the renderer, device or
  user settings.  
* **Conditional code** – Compile only the code that is needed for a given
  platform or feature set.  
* **Simplification** – Avoid duplicated code and keep shaders tidy.

Unlike the compiler, the preprocessor is *agnostic* to the rest of the
shader language; it only cares about the directives it recognises.

---

## 2.  Preprocessor directives

| Directive | Syntax | Description |
|-----------|--------|-------------|
| **`#define`** | `#define <name> <value>` | Define a constant or a macro. |
| **`#undef`**  | `#undef <name>` | Remove a previously defined name. |
| **`#if`**     | `#if <expression>` | Begin a conditional block. |
| **`#elif`**   | `#elif <expression>` | Else‑if branch of a conditional block. |
| **`#else`**   | `#else` | Else branch of a conditional block. |
| **`#endif`**  | `#endif` | End a conditional block. |
| **`#ifdef`**  | `#ifdef <name>` | Begin a block that runs if `<name>` is defined. |
| **`#ifndef`** | `#ifndef <name>` | Begin a block that runs if `<name>` is **not** defined. |
| **`#include`**| `#include "file.shader"` | Include the contents of another file. |
| **`#pragma`** | `#pragma <directive> [args]` | Vendor‑specific or engine‑specific hint. |

> **Note:** Preprocessor expressions can only use simple arithmetic and
> boolean operators. They cannot evaluate full GLSL functions.

---

## 3.  Built‑in macros

Godot automatically defines a few macros that you can use directly:

| Macro | Value | Description |
|-------|-------|-------------|
| `OS` | `"Windows"`, `"Linux"`, `"OSX"`, … | The current operating system. |
| `RENDERER` | `"OpenGL"` / `"Vulkan"` | The renderer that the project is using. |
| `FORWARD_PLUS` | `1` / `0` | Whether Forward+ rendering is active. |
| `PHYSICS_2D` | `1` | Flag indicating 2D physics are enabled. |
| `PHYSICS_3D` | `1` | Flag indicating 3D physics are enabled. |
| `GODOT_VERSION` | `"4.2"` | The running Godot engine version. |

You can test these values in a shader:

```glsl
#ifdef FORWARD_PLUS
    // Code only compiled for Forward+ renderer
#else
    // Fallback code
#endif
```

---

## 4.  Example: Conditional shading

```glsl
shader_type canvas_item;

// Define a macro if the engine is running on a mobile device
#ifdef MOBILE
    #define USE_BUMP_MAP true
#else
    #define USE_BUMP_MAP false
#endif

void fragment() {
    vec4 col = texture(TEXTURE, UV);
    #if USE_BUMP_MAP
        col.rgb *= texture(BUMP_MAP, UV).rgb;
    #endif
    COLOR = col;
}
```

This shader compiles the bump‑map multiplication only on non‑mobile
platforms where `USE_BUMP_MAP` is `false`.

---

## 5.  Including other files

You can split large shaders into reusable pieces:

```glsl
#include "lighting.glsl"

shader_type spatial;

void fragment() {
    // Use functions or variables defined in lighting.glsl
}
```

> **Tip** – Place helper files in a `res://shaders/` directory and
> reference them with a relative path.

---

## 6.  Common pitfalls

| Problem | Cause | Fix |
|---------|-------|-----|
| “undefined identifier” errors | Macro not defined before use | Make sure `#define` occurs before the first `#if`. |
| “syntax error” inside included file | File contains a stray directive or unsupported token | Verify the file is valid GLSL and only contains allowed preprocessor directives. |
| “infinite recursion” in includes | File A includes file B which includes file A | Avoid circular includes. |
| “compiler crashed” on complex expressions | Preprocessor expression too complex | Simplify the condition or split into multiple `#ifdef` blocks. |

---

## 7.  Compatibility

The Godot preprocessor is a **subset** of the GLSL preprocessor and
does not support all features of C‑style preprocessors (e.g. macro
replacement with arguments).  Keep it simple and test on all target
platforms.

---

## 8.  Further reading

* [Built‑in functions](/tutorials/shaders/shader_reference/shader_functions.html)  
* [Shader types](/tutorials/shaders/shader_reference/spatial_shader.html)  
* [Godot renderer documentation](/tutorials/rendering/index.html)  

--- 

This page is part of the official Godot Engine documentation and is
intended to help developers understand and use the shader preprocessor
effectively.