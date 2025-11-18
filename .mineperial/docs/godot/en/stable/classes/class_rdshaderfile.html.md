**RDShaderFile – Godot Engine (stable) Documentation**

---

### Overview
`RDShaderFile` is a Godot class that represents a compiled shader file in SPIR‑V form, used by the low‑level `RenderingDevice`. It is **not** the same as Godot’s high‑level `Shader` resource.  
This class inherits from:

```
Resource<RefCounted<Object>>
```

> **Note**: This file contains the technical reference for the `RDShaderFile` class, including its methods, properties, and usage examples. The actual class implementation is available in Godot’s source code and the class reference page in the official documentation.

---

### Class Reference

| **Property** | **Type** | **Description** |
|--------------|----------|-----------------|
| `shader_spirv` | `PackedByteArray` | The compiled SPIR‑V bytecode. |

| **Method** | **Signature** | **Description** |
|------------|---------------|-----------------|
| `get_spirv()` | `PackedByteArray` | Returns the compiled SPIR‑V bytecode. |
| `set_spirv(PackedByteArray spv)` | `void` | Sets the compiled SPIR‑V bytecode. |
| `load_from_file(String path)` | `bool` | Loads SPIR‑V data from a file. |
| `save_to_file(String path)` | `bool` | Saves SPIR‑V data to a file. |

> **Tip**: Use `RDShaderFile` when you need to manually interact with low‑level GPU shaders, for example when writing a custom rendering pipeline or a GDExtension that handles shader compilation at runtime.

---

### Example Usage

```gdscript
# Load a pre‑compiled shader file
var shader_file = RDShaderFile.new()
if shader_file.load_from_file("res://shaders/my_shader.spv"):
    var device = RenderingServer.get_rendering_device()
    var shader = device.shader_create_from_spirv(shader_file.get_spirv())
    # Use the shader with RDMaterial or other rendering resources
else:
    push_error("Failed to load shader")
```

---

### Related Classes

- **[`RDShaderSPIRV`](class_rdshaderspirv.html)** – Detailed description of the SPIR‑V shader format.  
- **[`RDMaterial`](class_rdmaterial.html)** – Use `RDShaderFile` with a material for rendering.  
- **[`RenderingDevice`](class_renderingdevice.html)** – Low‑level interface that consumes `RDShaderFile`.

---

### Further Reading

- [RenderingDevice](class_renderingdevice.html) – Overview of Godot’s low‑level rendering API.  
- [Shader Compilation Guide](../guides/shader_compilation.html) – How to compile GLSL/HLSL to SPIR‑V for use with `RDShaderFile`.  

---