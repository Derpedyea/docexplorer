**Note:** The original Godot documentation page contains a complete class reference for `GLTFBufferView` with its properties, methods, and detailed descriptions.  
Below is a concise Markdown rendering of the information that could be extracted from the page. If further details (such as full property lists or method signatures) are needed, they can be obtained directly from the official Godot Engine documentation.

---

# GLTFBufferView

**Inheritance:**  
`Resource` → `RefCounted` → `Object`

---

## Description

`GLTFBufferView` is a data structure representing a **glTF bufferView** that would be found in a glTF file.  
It holds the information necessary for interpreting a portion of a binary buffer, including its offset, length, stride, and the byte offset within the buffer. This class is used by the GLTF import system to map the binary data described in the GLTF spec to Godot's internal data structures.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **buffer** | `int` | `-1` | Index of the buffer that contains the data. |
| **byte_offset** | `int` | `0` | Byte offset in the buffer where this view starts. |
| **byte_length** | `int` | `0` | Length in bytes of the view. |
| **byte_stride** | `int` | `0` | Stride in bytes between elements (used for interleaved data). |
| **target** | `int` | `0` | Optional GLTF accessor target (e.g., ARRAY_BUFFER, ELEMENT_ARRAY_BUFFER). |

> *Note:* These are the primary fields that correspond directly to the JSON fields of a glTF `bufferView`. Other helper properties may be available in the Godot API.

---

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `get_buffer()` | `int` | Returns the index of the associated buffer. |
| `set_buffer(buffer_idx: int)` | `void` | Sets the buffer index. |
| `get_byte_offset()` | `int` | Returns the byte offset of the view. |
| `set_byte_offset(offset: int)` | `void` | Sets the byte offset. |
| `get_byte_length()` | `int` | Returns the byte length of the view. |
| `set_byte_length(length: int)` | `void` | Sets the byte length. |
| `get_byte_stride()` | `int` | Returns the byte stride. |
| `set_byte_stride(stride: int)` | `void` | Sets the byte stride. |
| `get_target()` | `int` | Returns the GLTF target for this view. |
| `set_target(target: int)` | `void` | Sets the target. |

> **Tip:** Use the `GLTFBufferView` together with `GLTFBuffer` and `GLTFAccessor` when writing custom GLTF import/export logic.

---

## Usage Example

```gdscript
var buffer_view = GLTFBufferView.new()
buffer_view.set_buffer(0)
buffer_view.set_byte_offset(0)
buffer_view.set_byte_length(1024)
buffer_view.set_byte_stride(16)
buffer_view.set_target(GLOBAL_ARRAY_BUFFER)   # example constant
```

---

## Related Classes

- **GLTFBuffer** – Stores binary data referenced by `GLTFBufferView`.
- **GLTFAccessor** – Defines the type and interpretation of the data in a `GLTFBufferView`.

---

### Next / Previous Class

- **Previous:** [GLTFAnimation](../class_gltfanimation.html)
- **Next:** [GLTFCamera](../class_gltfcamera.html)

---