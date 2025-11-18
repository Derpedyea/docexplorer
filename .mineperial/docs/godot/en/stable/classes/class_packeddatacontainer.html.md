**PackedDataContainer** – Godot Engine (stable) documentation  
===============================================================

> **Deprecated** – Use `@GlobalScope.var_to_bytes()` or `FileAccess.store_var()` instead.  
> To enable data compression, use `PackedByteArray.compress()` or `FileAccess.open_compressed()`.

`PackedDataContainer` is a `Resource`‑based container that can store any GDScript variant in a binary blob.  
The class is kept for backward compatibility only; newer projects should use the functions mentioned above.

---

## Overview

| Property | Type | Description |
|----------|------|-------------|
| `data` | `Variant` | The uncompressed data stored in the container. |
| `compressed` | `bool` | Whether the underlying byte array is compressed. |
| `bytes` | `PackedByteArray` (read‑only) | The raw binary representation of the stored data. |

> ⚠️ **Deprecation notice** – The class is marked *deprecated* in Godot 4.x. Prefer using the global functions or `FileAccess` for binary data persistence.

---

## Inheritance

```
Resource
 └── PackedDataContainer
```

`PackedDataContainer` inherits from `Resource`, so it can be saved as an asset, edited in the editor, and shared between scenes.

---

## Methods

### `set_data(data: Variant, compress: bool = false) -> void`

Stores the supplied `data` into the container.  
If `compress` is `true`, the data will be compressed using the default `PackedByteArray.compress()` algorithm.

### `get_data() -> Variant`

Retrieves the stored data.  
If the container holds compressed data, it will be automatically decompressed before being returned.

### `set_compressed(compress: bool) -> void`

Enables or disables compression for the container.  
When toggled after data has already been stored, the container will compress or decompress the current byte array accordingly.

### `is_compressed() -> bool`

Returns `true` if the data is currently stored in compressed form.

### `get_bytes() -> PackedByteArray`

Returns the raw binary data stored in the container (compressed or uncompressed depending on `compressed`).  
This property is read‑only; use `set_data()` to modify it indirectly.

---

## Example usage

```gdscript
# Create a new container
var container = PackedDataContainer.new()

# Store a dictionary
container.set_data({"score": 42, "time": 123.5}, compress=true)

# Retrieve the stored data
var payload = container.get_data()
print(payload)            # => {"score": 42, "time": 123.5}

# Check whether data is compressed
print(container.is_compressed())  # => true
```

---

## Alternatives

- **`var_to_bytes()` / `bytes_to_var()`** – Convert variants to/from raw byte arrays without wrapping them in a resource.  
- **`FileAccess.store_var()` / `FileAccess.get_var()`** – Read/write variants directly to a file, with optional compression.  
- **`PackedByteArray`** – Use this class directly if you only need a byte array and don't need the convenience of a resource.

---

### Related Documentation

- [FileAccess](../classes/class_fileaccess.html) – Low‑level file I/O, including binary read/write.  
- [PackedByteArray](../classes/class_packedbytearray.html) – Byte array class that supports compression.  
- [Resource](../classes/class_resource.html) – Base class for data assets.  

---

**Note:** This page is part of the Godot Engine 4.x class reference. For the most up‑to‑date information or if you plan to start a new project, consider using the newer APIs listed above.