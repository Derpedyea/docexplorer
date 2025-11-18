**Note:** The original HTML page contains only the site navigation and does not include the actual class reference details (methods, properties, signals, etc.).  Below is a minimal conversion based on the information that can be inferred from the page title and meta description.  For the full documentation, please refer to the official Godot Engine documentation.  

# PlaceholderCubemap

**Godot Engine documentation (stable)**  

A **Cubemap** class that acts as a placeholder when the actual image data is not yet available.  It inherits from the layered texture hierarchy and can be used in place of a full `Cubemap` or any of its derived resources until real data can be loaded.

## Inheritance
```
PlaceholderCubemap
  └─ PlaceholderTextureLayered
      └─ TextureLayered
          └─ Texture
              └─ Resource
                  └─ RefCounted
                      └─ Object
```

## Description
> A Cubemap without image data. This class replaces a Cubemap or a Cubemap-derived resource in situations where a texture is required but the actual image data has not yet been loaded or is unavailable.

---  

*For a complete list of methods, properties, signals and usage examples, consult the official Godot Engine documentation at:*

[https://docs.godotengine.org/en/stable/classes/class_placeholdercubemap.html](https://docs.godotengine.org/en/stable/classes/class_placeholdercubemap.html)