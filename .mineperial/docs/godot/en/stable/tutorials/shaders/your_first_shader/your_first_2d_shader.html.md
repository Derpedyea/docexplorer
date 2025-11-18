**Your first 2D shader – Godot Engine Documentation**

> *Tutorial that walks you through writing a simple 2‑D shader, applying it to a Sprite, and experimenting with basic shader features.*

---

## 1.  Introduction

Shaders are small programs that run on the GPU to control how objects are drawn.  
In Godot, the built‑in **CanvasItem** shader language is used for 2‑D rendering, while **Spatial** shaders are used for 3‑D. This tutorial focuses on the former.

---

## 2.  Creating a new shader

1. Open the **FileSystem** dock → right‑click → **New Resource…**  
2. Choose **Shader** → name it `my_shader.tres`.  
3. Attach the resource to a **Sprite** or **Control** node by setting the **Material** property to **ShaderMaterial** and pointing its **Shader** slot to the file you just created.

---

## 3.  The minimal shader code

Open the new shader and replace the generated text with:

```glsl
shader_type canvas_item;

void fragment() {
    COLOR = vec4(1.0, 0.0, 0.0, 1.0);  // pure red
}
```

### What this does

* `shader_type canvas_item;` tells Godot you’re writing a 2‑D shader.  
* `fragment()` runs once per pixel.  
* `COLOR` is an output variable that defines the final pixel color.

Run the scene to see a red sprite.

---

## 4.  Using UV coordinates

The `UV` variable contains the texture coordinates for the current fragment.  
To tint the sprite with a gradient that follows its texture:

```glsl
shader_type canvas_item;

void fragment() {
    vec2 uv = UV;                       // UV coordinates
    vec4 tex_color = texture(TEXTURE, uv); // original texture
    COLOR = tex_color * vec4(uv.x, uv.y, 1.0, 1.0);
}
```

* `TEXTURE` is the sprite’s texture.  
* Multiplying by a vec4 that depends on `uv.x` and `uv.y` will produce a color gradient across the sprite.

---

## 5.  Adding a uniform

Uniforms let you change shader values from the editor or script without editing the shader itself.

```glsl
shader_type canvas_item;

uniform vec4 modulate : hint_color = vec4(1,1,1,1);

void fragment() {
    COLOR = texture(TEXTURE, UV) * modulate;
}
```

* `hint_color` makes the uniform appear as a color picker in the editor.  
* You can also expose a float, int or vector uniform.

From GDScript:

```gdscript
var material = $Sprite.material
material.set_shader_parameter("modulate", Color(0.5, 1, 0.5, 1))
```

---

## 6.  Changing the alpha

Set the sprite’s transparency via the shader:

```glsl
shader_type canvas_item;

uniform float alpha : hint_range(0.0, 1.0) = 1.0;

void fragment() {
    vec4 tex_color = texture(TEXTURE, UV);
    tex_color.a *= alpha;
    COLOR = tex_color;
}
```

Now you can animate `alpha` in a script to fade the sprite in and out.

---

## 7.  Using a normal map

If your sprite has a normal map, you can use it to affect lighting:

```glsl
shader_type canvas_item;

uniform sampler2D normal : hint_normal;

void fragment() {
    vec3 normal_vec = texture(normal, UV).rgb * 2.0 - 1.0;
    // Simple directional light
    float light = dot(normal_vec, vec3(0.0, 0.0, 1.0));
    COLOR = texture(TEXTURE, UV) * light;
}
```

---

## 8.  Summary

* Create a **Shader** resource and attach it to a **ShaderMaterial**.  
* `shader_type canvas_item;` declares a 2‑D shader.  
* `fragment()` is called for every pixel.  
* `COLOR` defines the output color.  
* Use `UV`, `TEXTURE`, and `sampler2D` to access the sprite’s texture.  
* Expose custom uniforms to modify the shader from the editor or scripts.

Feel free to experiment with more GLSL functions (`sin`, `cos`, `noise`, etc.) to create dynamic effects such as pulsing, wave motion, or time‑based color changes.

Happy shading!