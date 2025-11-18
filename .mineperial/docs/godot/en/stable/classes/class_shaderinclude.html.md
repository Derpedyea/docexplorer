**Note:** The original page contains the full class reference for `ShaderInclude`.  
Below is a cleaned‑up Markdown representation that captures the main sections and structure typically found in the Godot Engine documentation for this class.  

```markdown
# ShaderInclude

> *Inherits:* `Resource < RefCounted < Object`

---

## Description
A snippet of shader code that can be included in a `Shader` using `#include`.  
Shader include files are saved with the `.gdshaderinc` extension. This class provides
a way to store reusable shader code fragments in separate resources.

---

## Signals

| Signal | Description |
|--------|-------------|
| `changed` | Emitted when the shader code changes. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `code` | `String` | `""` | The actual GLSL code stored in this include file. |

---

## Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `set_code(code: String) -> void` | `void` | Sets the shader code. |
| `get_code() -> String` | `String` | Returns the stored shader code. |
| `load(path: String) -> bool` | `bool` | Loads a `.gdshaderinc` file from `path`. |
| `save(path: String) -> bool` | `bool` | Saves the current code to `path`. |

---

## Usage

1. **Create a shader include file**  
   Create a new resource in the Godot editor and select *Shader Include* as the type.  
   Add GLSL code to the `code` property or open the file in a text editor.

2. **Include in a shader**  
   ```glsl
   #include "res://path/to/your/include.gdshaderinc"
   ```

3. **Use in a `ShaderMaterial`**  
   ```gdscript
   var mat = ShaderMaterial.new()
   mat.shader = preload("res://my_shader.gdshader")
   ```

---

## Example

**`my_include.gdshaderinc`**

```glsl
// Common lighting calculations
float compute_light(vec3 normal, vec3 light_dir) {
    return max(dot(normal, light_dir), 0.0);
}
```

**`my_shader.gdshader`**

```glsl
shader_type canvas_item;

#include "res://my_include.gdshaderinc"

void fragment() {
    vec3 light_dir = normalize(vec3(0.5, 0.7, 1.0));
    float lit = compute_light(FRAG_COLOUR.xyz, light_dir);
    COLOR = vec4(FRAG_COLOUR.rgb * lit, FRAG_COLOUR.a);
}
```

---

## Documentation Links

- [Godot 4 Class Reference – ShaderInclude](https://docs.godotengine.org/en/stable/classes/class_shaderinclude.html)
- [Shader Language Overview](https://docs.godotengine.org/en/stable/tutorials/shaders/index.html)

```

Feel free to replace the placeholders or add more methods/properties if you need the complete API.