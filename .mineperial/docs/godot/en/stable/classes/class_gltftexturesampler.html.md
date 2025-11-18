**Note**: The following markdown is a concise reconstruction of the *GLTFTextureSampler* class reference page from the Godot Engine documentation. It contains the most commonly referenced information: inheritance, description, constants, properties, and methods. If you need the full, up‑to‑date API reference, visit the original page at the provided URL.  

---  

# GLTFTextureSampler

*Inherits*: `Resource`  

> Represents a glTF texture sampler.  
> Texture samplers in glTF describe how a texture should be sampled when applied to geometry – e.g., filtering, wrapping, and anisotropic filtering options.  

---

## Constants

| Constant | Type | Value | Description |
|----------|------|-------|-------------|
| `FILTER_NEAREST` | `int` | 9728 | Use nearest‑neighbour filtering. |
| `FILTER_LINEAR` | `int` | 9729 | Use linear filtering. |
| `WRAP_REPEAT` | `int` | 10497 | Repeat the texture coordinate. |
| `WRAP_CLAMP_TO_EDGE` | `int` | 33071 | Clamp the coordinate to the edge of the texture. |
| `WRAP_MIRRORED_REPEAT` | `int` | 33648 | Mirror the texture coordinate each repeat. |

> (Values correspond to the OpenGL constants used by the Godot engine.)

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mag_filter` | `int` | `FILTER_LINEAR` | Magnification filter applied when the texture is enlarged. |
| `min_filter` | `int` | `FILTER_LINEAR` | Minification filter applied when the texture is reduced. |
| `wrap_s` | `int` | `WRAP_REPEAT` | Horizontal wrapping mode. |
| `wrap_t` | `int` | `WRAP_REPEAT` | Vertical wrapping mode. |
| `anisotropy` | `int` | `1` | Strength of anisotropic filtering (1 = disabled). |

All properties are *public* and can be accessed / modified using the corresponding getter and setter methods.

---

## Methods

| Method | Signature | Return | Description |
|--------|------------|--------|-------------|
| `set_mag_filter(filter: int) -> void` | `set_mag_filter(int)` | `void` | Set the texture’s magnification filter. |
| `get_mag_filter() -> int` | `get_mag_filter()` | `int` | Retrieve the current magnification filter. |
| `set_min_filter(filter: int) -> void` | `set_min_filter(int)` | `void` | Set the texture’s minification filter. |
| `get_min_filter() -> int` | `get_min_filter()` | `int` | Retrieve the current minification filter. |
| `set_wrap_s(mode: int) -> void` | `set_wrap_s(int)` | `void` | Set horizontal wrapping mode. |
| `get_wrap_s() -> int` | `get_wrap_s()` | `int` | Retrieve horizontal wrapping mode. |
| `set_wrap_t(mode: int) -> void` | `set_wrap_t(int)` | `void` | Set vertical wrapping mode. |
| `get_wrap_t() -> int` | `get_wrap_t()` | `int` | Retrieve vertical wrapping mode. |
| `set_anisotropy(value: int) -> void` | `set_anisotropy(int)` | `void` | Set anisotropic filtering level (0–16). |
| `get_anisotropy() -> int` | `get_anisotropy()` | `int` | Retrieve the anisotropic filtering level. |

---

## Example Usage

```gdscript
var sampler = GLTFTextureSampler.new()
sampler.set_mag_filter(GLTFTextureSampler.FILTER_LINEAR)
sampler.set_min_filter(GLTFTextureSampler.FILTER_NEAREST)
sampler.set_wrap_s(GLTFTextureSampler.WRAP_CLAMP_TO_EDGE)
sampler.set_wrap_t(GLTFTextureSampler.WRAP_CLAMP_TO_EDGE)
sampler.set_anisotropy(4)
```

The sampler can then be assigned to a `GLTFTexture` instance before exporting a scene to the glTF format.

---

### Further Reading

* [glTF 2.0 Specification – Samplers](https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#samplers)  
* [Godot Class Reference – GLTFTexture](https://docs.godotengine.org/en/stable/classes/class_gltftexture.html)

---