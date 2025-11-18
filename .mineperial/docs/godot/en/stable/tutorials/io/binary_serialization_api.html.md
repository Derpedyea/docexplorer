**Binary serialization API**  

> Godot has a serialization API based on `Variant`. It’s used for converting data types to an array of bytes efficiently. This API is exposed via the global functions `bytes_to_var()` and `var_to_bytes()`.

---

## Introduction

Godot’s binary serialization API lets you:

* Convert any `Variant`‑compatible type into a byte array.
* Reconstruct the original value from a byte array.
* Persist arbitrary data structures with minimal overhead.

---

## Basic usage

```gdscript
# Convert a value to a byte array
var data: PackedByteArray = var_to_bytes(my_variant, VARIANT_USE_COMPRESSION)

# Convert a byte array back to the original value
var original = bytes_to_var(data, VARIANT_USE_COMPRESSION)
```

* `VARIANT_USE_COMPRESSION` (optional) tells the API whether to compress the data.  
* The functions are global and can be called from any script.

---

## Serialising custom objects

```gdscript
# Define a simple struct
class_name PlayerData
var name: String
var score: int

# Convert an instance to bytes
var player = PlayerData.new()
player.name = "Hero"
player.score = 12345
var bytes = var_to_bytes(player)

# Re‑create the instance
var loaded_player = bytes_to_var(bytes) as PlayerData
```

---

## Persisting to files

```gdscript
var file = FileAccess.open("user://save.dat", FileAccess.WRITE)
file.store_buffer(bytes)
file.close()

# Later, load it
var file = FileAccess.open("user://save.dat", FileAccess.READ)
var bytes = file.get_buffer(file.get_length())
var loaded = bytes_to_var(bytes)
file.close()
```

---

## Advanced options

| Option | Value | Effect |
|--------|-------|--------|
| `VARIANT_USE_COMPRESSION` | `true`/`false` | Compresses or leaves data uncompressed |
| `VARIANT_USE_LEGACY` | `true`/`false` | Use legacy binary format for older projects |

---

## Caveats

* `var_to_bytes()` cannot serialize objects that are not `Variant`‑compatible (e.g., functions, lambdas).
* When using `VARIANT_USE_COMPRESSION`, the resulting byte array may be larger for small data due to compression overhead.

---

## References

* [Godot API – `var_to_bytes()`](https://docs.godotengine.org/en/stable/classes/class_variant.html#class-variant-method-var-to-bytes)  
* [Godot API – `bytes_to_var()`](https://docs.godotengine.org/en/stable/classes/class_variant.html#class-variant-method-bytes-to-var)  
* [Godot Docs – Runtime file loading and saving](../../runtime_file_loading_and_saving.html)

---