**Using compute shaders**  
==========================

> This tutorial walks through the creation of a minimal compute shader in Godot 4.x, explaining the concepts behind compute shaders, how they interact with the engine, and how to use them from a GDScript or C# script.

---

## 1. What is a compute shader?

* **Compute shaders** are a special type of GLSL (or HLSL) program that run on the GPU but are *not* tied to any rendering pipeline.  
* They are ideal for general‑purpose parallel workloads such as image processing, physics simulations, or any data‑heavy operation that benefits from the massive parallelism of the GPU.  
* In Godot a compute shader is created as a normal shader resource, but with a `type compute;` declaration and a `void main() { … }` entry point that does not produce a fragment or vertex output.

---

## 2. Prerequisites

1. Godot 4.x (the documentation applies to the *stable* release).  
2. Basic knowledge of GLSL and Godot’s rendering pipeline.  
3. A simple scene to run the compute shader against (e.g., a `Node3D` or `CanvasItem`).

---

## 3. Creating a compute shader

1. **Add a ShaderMaterial**  
   ```gdscript
   var material = ShaderMaterial.new()
   material.shader = preload("res://my_compute.glsl")
   ```
2. **Attach to a Resource**  
   For non‑rendering usage you can keep it as a standalone resource; you’ll bind it to a `Viewport` or a `Image` later.

---

## 4. Writing a minimal compute shader

Create a file called `res://my_compute.glsl`:

```glsl
shader_type compute;

layout(local_size_x = 64) in;   // Work‑group size

// Uniforms
uniform sampler2D src_image : hint_white;   // Source image
uniform writeonly image2D dest_image;       // Destination image
uniform int width;
uniform int height;

void main() {
    ivec2 coord = ivec2(gl_GlobalInvocationID.xy);
    if (coord.x >= width || coord.y >= height) return;

    vec4 pixel = imageLoad(src_image, coord);
    // Simple inversion example
    pixel.rgb = vec3(1.0) - pixel.rgb;
    imageStore(dest_image, coord, pixel);
}
```

> **Notes**  
> * `shader_type compute;` tells Godot it’s a compute shader.  
> * The `local_size_x` determines how many work items are in each local workgroup.  
> * `image2D` and `sampler2D` are the usual image types; the `writeonly` qualifier guarantees the shader only writes to `dest_image`.  

---

## 5. Dispatching the shader from GDScript

```gdscript
var image = Image.new()
image.load("res://input.png")
var img_texture = ImageTexture.new()
img_texture.create_from_image(image)

var result = Image.new()
result.create(image.get_width(), image.get_height(), false, Image.FORMAT_RGBA8)

var image_view = ImageView.new()
image_view.image = img_texture
image_view.set_format(ImageView.TEXTURE_FORMAT_RGBA8)

var compute_shader = preload("res://my_compute.glsl")
var material = ShaderMaterial.new()
material.shader = compute_shader

var width = image.get_width()
var height = image.get_height()

# Bind uniforms
material.set_shader_param("src_image", img_texture)
material.set_shader_param("dest_image", result)
material.set_shader_param("width", width)
material.set_shader_param("height", height)

# Dispatch the compute shader
var thread_count_x = int(ceil(width / 64.0))
var thread_count_y = int(ceil(height / 64.0))
material.shader_dispatch(thread_count_x, thread_count_y, 1)

# Read back the result
result.lock()
var out = Image.new()
out.create_from_data(width, height, false, Image.FORMAT_RGBA8, result.get_data())
out.unlock()
```

> **Important** – `shader_dispatch()` is a helper method that tells Godot to execute the shader with the supplied work‑group counts.

---

## 6. Using the result

* Once the compute shader writes to a `writeonly image2D`, you can sample it with a standard fragment shader or use it as a texture directly in your scene.  
* Example: create a `Sprite2D`, set its texture to the `ImageTexture` produced above.

```gdscript
var sprite = Sprite2D.new()
sprite.texture = ImageTexture.new()
sprite.texture.create_from_image(out)
add_child(sprite)
```

---

## 7. Tips and common pitfalls

| Issue | Fix |
|-------|-----|
| **Shader not executing** | Ensure you call `shader_dispatch()` *after* all uniforms are set. |
| **Image size mismatch** | `dest_image` must match the dimensions of the input image; otherwise you’ll write out of bounds. |
| **Work‑group size too large** | Pick a size that fits the GPU; 64 or 128 are common choices. |
| **GPU memory limits** | Large images can exhaust VRAM; use `image.resize()` or process in tiles. |

---

## 8. Further reading

* **Screen‑reading shaders** – Using `imageStore()` to capture the screen.  
* **Shader storage buffer objects (SSBOs)** – For more complex data structures.  
* **Performance considerations** – Compare compute shaders with CPU‑side multithreading.

---

**References**

* Godot Engine Documentation – [Compute shaders](https://docs.godotengine.org/en/stable/tutorials/shaders/compute_shaders.html)  
* GLSL specification – `layout(local_size_x = …)` syntax.  

---