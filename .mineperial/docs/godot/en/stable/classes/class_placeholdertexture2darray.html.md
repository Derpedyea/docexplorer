**PlaceholderTexture2DArray**  
================================

*Inherits:* `PlaceholderTextureLayered< TextureLayered< Texture< Resource< RefCounted< Object > > > > >`  

---  

### Description  
`PlaceholderTexture2DArray` is a lightweight, runtime‑generated texture that represents a 2‑D texture array. It is used internally by the engine to provide a default or “placeholder” object when an actual array texture is not yet available. This class does not expose any public methods or properties beyond what is inherited from its base classes; it is mainly a marker used by the Godot rendering pipeline to maintain type safety and API consistency.  

---  

> **Note**  
> The placeholder class is typically **not** intended for direct use in user projects.  
> If you need a real texture array, create a `Texture2DArray` resource and set its layers normally.

---

### API Reference

| Method / Property | Type | Description |
|-------------------|------|-------------|
| *None* | | This class currently does not expose additional members beyond those inherited. |

---

### Related Classes

- [PlaceholderTexture2D](../class_placeholdertexture2d.html)  
- [PlaceholderTexture3D](../class_placeholdertexture3d.html)  

---  

### Navigation

- **Previous**: [PlaceholderTexture2D](../class_placeholdertexture2d.html)  
- **Next**: [PlaceholderTexture3D](../class_placeholdertexture3d.html)

---  

*For further details about texture arrays, see the [Texture Array documentation](../../tutorials/graphics/textures/texture_array.html).*