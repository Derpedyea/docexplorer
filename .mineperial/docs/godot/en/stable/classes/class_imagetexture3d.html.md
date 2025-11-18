**ImageTexture3D – Godot Engine Documentation**  

---  

## Class Overview  

**Inherits**: `Texture3D` → `Texture` → `Resource` → `RefCounted` → `Object`  

### Description  
`ImageTexture3D` is a 3‑dimensional image texture resource that stores pixel data in a volume with a defined width, height, and depth. It can be used to create voxel‑based textures, 3‑D lookup tables, and other volumetric effects within Godot.  

---  

## Properties  

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | `Image` | – | The raw image data for each layer. |
| `size` | `Vector3i` | – | The width, height, and depth of the texture. |
| `format` | `int` | – | Texture format (see `Image::Format`). |
| `flags` | `int` | – | Texture flags (e.g. `TEXTURE_FLAG_MIPMAPS`). |
| `usage` | `int` | – | Usage hint (e.g. `TEXTURE_USAGE_STORAGE_BIT`). |

*All properties are settable via the editor or script.*

---  

## Functions  

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `create(size : Vector3i, format : Image.Format, flags : int = 0, usage : int = TEXTURE_USAGE_DEFAULT)` | `size`, `format`, `flags` (optional), `usage` (optional) | `void` | Creates a blank texture of the given size and format. |
| `set_data(images : Array[Image])` | `images` | `void` | Assigns a list of `Image` objects to the 3‑D texture. Each image must match the declared `size`. |
| `get_data() -> Array[Image]` | – | `Array[Image]` | Returns the list of images that comprise the texture. |
| `get_format() -> Image.Format` | – | `int` | Returns the pixel format of the texture. |
| `get_size() -> Vector3i` | – | `Vector3i` | Returns the width, height, and depth of the texture. |
| `get_flags() -> int` | – | `int` | Returns the flags currently set for the texture. |
| `set_flags(flags : int)` | `flags` | `void` | Sets the texture flags. |
| `set_usage(usage : int)` | `usage` | `void` | Sets the texture usage hint. |
| `is_valid() -> bool` | – | `bool` | Returns `true` if the texture has been successfully created and loaded. |

*Additional utility methods are inherited from `Texture3D` and `Texture`.*

---  

## Signals  

- `changed` – Emitted when the texture data or properties change.  

---  

## Usage Example  

```gdscript
# Create a 64×64×64 texture using 8‑bit RGBA.
var tex3d = ImageTexture3D.new()
tex3d.create(Vector3i(64, 64, 64), Image.FORMAT_RGBA8)

# Fill each layer with a solid color (example: red).
var layer = Image.new()
layer.create(64, 64, false, Image.FORMAT_RGBA8)
layer.fill(Color(1, 0, 0, 1))

for z in range(64):
    tex3d.set_data([layer])  # set_data expects an Array of Images

# Use the texture on a material
var mat = StandardMaterial3D.new()
mat.albedo_texture = tex3d
```

---  

## See Also  

- [Texture3D](../classes/class_texture3d.html) – Base class for 3‑D textures.  
- [Image](../classes/class_image.html) – 2‑D image manipulation.  
- [StandardMaterial3D](../classes/class_standardmaterial3d.html) – How to apply textures.  

---  

*This page is part of the Godot Engine class reference.*