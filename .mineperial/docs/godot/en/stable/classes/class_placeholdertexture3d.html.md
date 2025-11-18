**PlaceholderTexture3D**  
*Class reference – Godot Engine 4.x*  

---

### Description
`PlaceholderTexture3D` is a **placeholder class** for a 3‑dimensional texture.  
When a project references a `Texture3D` that has not yet been loaded or is missing, the engine creates an instance of `PlaceholderTexture3D`. This class simply represents the fact that a 3‑D texture will be present at runtime but does not contain actual pixel data.

---

### Inheritance
```
Object
 └─ RefCounted
    └─ Resource
       └─ Texture
          └─ Texture3D
             └─ PlaceholderTexture3D
```

---

### Properties

| Property | Type | Default | Notes |
| -------- | ---- | ------- | ----- |
| **`size`** | `Vector3i` | `Vector3i(0, 0, 0)` | Size of the 3‑D texture in texels. |
| **`format`** | `int` | `Image.FORMAT_RGBA8` | Texture format. |

> *All properties are read‑only in the editor. They are intended for internal use when the engine reconstructs the real texture after the project is fully loaded.*

---

### Methods

| Method | Return | Parameters | Notes |
| ------- | ------ | ---------- | ----- |
| `get_size()` | `Vector3i` | — | Returns the current size of the texture. |
| `get_format()` | `int` | — | Returns the image format. |

> *No public methods are exposed beyond those inherited from `Texture3D`. The placeholder is purely a stub that will be replaced by the real `Texture3D` resource during the project load phase.*

---

### Signals
None.

---

### Example Usage

The placeholder is normally *created automatically* by Godot when a scene containing a `Texture3D` resource is loaded before the resource itself is available. Developers rarely interact with it directly. If you need to check whether a texture has been loaded you can inspect it with:

```gdscript
var tex : Texture3D = $MeshInstance.get_surface_override_material(0).get_texture()
if tex is PlaceholderTexture3D:
    print("Texture not yet loaded – using placeholder")
else:
    print("Texture is ready")
```

---

### Related Classes
- [PlaceholderTexture2DArray](../classes/class_placeholdertexture2darray.html) – placeholder for 2D‑array textures  
- [PlaceholderTextureLayered](../classes/class_placeholdertexturelayered.html) – placeholder for layered textures  

---

*For a complete list of inherited methods and properties, refer to the [Texture3D](../classes/class_texture3d.html) reference.*