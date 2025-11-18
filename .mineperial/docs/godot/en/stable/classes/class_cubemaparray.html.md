**CubemapArray (Godot Engine – Stable)**  
*Class reference page*

---

### Inheritance
```
CubemapArray
 └─ ImageTextureLayered<TextureLayered<Texture<Resource<RefCounted<Object>>>
```

### Description
An array of **Cubemap** textures that are stored together and share a single reference. This class is used for storing and working with multiple cube map textures as a single resource, enabling efficient handling of environment maps, reflection probes, or any 3‑D texture that requires six faces per layer.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `int` | `0` | The size (width/height) of each cube face in pixels. All faces of all layers must have the same dimensions. |
| `layers` | `int` | `1` | Number of layers in the array. |
| `usage` | `int` | `0` | The usage flags for the texture. See [ImageTextureLayered.usage](#usage). |

> **Note**: `CubemapArray` inherits all properties from `ImageTextureLayered`, including `width`, `height`, and `depth`.

---

## Methods

### `set_size(int size)`
Sets the size of each cube face. All layers must be the same size.

### `get_size() -> int`
Returns the current face size.

### `set_layer_count(int layers)`
Sets the number of layers in the array.

### `get_layer_count() -> int`
Returns the number of layers.

### `set_data(int layer, int face, PoolByteArray data)`
Assigns raw image data to a specific face of a specific layer.

### `get_data(int layer, int face) -> PoolByteArray`
Retrieves the raw image data of a specific face of a specific layer.

### `duplicate() -> CubemapArray`
Creates a duplicate of the texture array.

*(The full list of methods and signals can be found in the Godot API reference.)*

---

## Usage Examples

```gdscript
# Create a CubemapArray with 3 layers, each 512x512
var cubemap_array = CubemapArray.new()
cubemap_array.set_size(512)
cubemap_array.set_layer_count(3)

# Load textures into each layer
for i in range(3):
    var img = Image.load("res://cube_%d.png" % i)
    for face in range(6):
        cubemap_array.set_data(i, face, img.get_data())
```

---

## Related Classes

* [Cubemap](../class_cubemap.html) – Single cube map texture.
* [TextureLayered](../class_texturereftable.html) – Base class for layered textures.
* [ImageTextureLayered](../class_imagetexture.html) – Base class for image-based layered textures.

---

**Reference**: Godot Engine API documentation – <https://docs.godotengine.org/en/stable/classes/class_cubemaparray.html>