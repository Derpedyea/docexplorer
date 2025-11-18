# RDShaderSPIRV

`RDShaderSPIRV` is a **resource** type that represents a SPIR‑V intermediate representation of a shader. It is used as part of an `RDShaderFile` by the `RenderingDevice`.

> **Inheritance**  
> `RDShaderSPIRV` → `Resource` → `RefCounted` → `Object`

---

## Overview

| Feature | Details |
|---------|---------|
| **Purpose** | Holds the compiled SPIR‑V bytecode for a shader. |
| **Typical use** | Created from a `RDShaderFile`, passed to a `RenderingDevice` when creating a shader pipeline. |

---

## Constants

| Constant | Type | Default | Description |
|----------|------|---------|-------------|
| `SPIRV_CODE` | `PackedByteArray` | – | The raw SPIR‑V bytecode. |

*(If the class declares additional constants, they are listed in the generated documentation.)*

---

## Methods

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| **`get_bytecode()`** | – | `PackedByteArray` | Returns the SPIR‑V bytecode. |
| **`set_bytecode(bytecode: PackedByteArray)`** | `bytecode` | – | Sets the SPIR‑V bytecode. |
| **`get_shader_version()`** | – | `int` | Returns the shader version number. |
| **`get_shader_name()`** | – | `String` | Returns the name of the shader. |
| **`is_valid()`** | – | `bool` | Returns whether the SPIR‑V data is valid. |
| **`get_error()`** | – | `int` | Returns an error code if compilation failed. |

*(Method signatures may vary; consult the official documentation for the full list.)*

---

## Signals

No signals are defined for this class.

---

## Example Usage

```gdscript
# Load an RDShaderFile
var shader_file = load("res://my_shader.rdshader")
var spirv = shader_file.get_spirv()

# Access SPIR‑V bytecode
var bytecode = spirv.get_bytecode()
```

---

## Notes

- The class is primarily intended for advanced users working directly with low‑level rendering APIs.  
- For most projects, the high‑level `Shader` and `ShaderMaterial` classes should suffice.  

---