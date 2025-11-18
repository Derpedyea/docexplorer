# PlaceholderMaterial

**Inherits:** `Material` ➜ `Resource` ➜ `RefCounted` ➜ `Object`

---

## Description

The `PlaceholderMaterial` class is a temporary stand‑in used when a project is loaded that references a material subclass under two specific conditions:

1. The project uses a material that has not yet been loaded.
2. The engine is currently running in a mode where the full material implementation is unavailable (e.g. a network‑remote or editor preview).

Its purpose is to maintain type consistency and prevent loading crashes. Once the real material is available, the placeholder is replaced automatically by the engine.

> **Note:** This is an internal class used by the engine; user scripts rarely need to instantiate or interact with it directly.

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder_text` | `String` | `""` | A short human‑readable identifier for debugging purposes. |
| `shader` | `Shader` | `null` | Optional shader to preview the placeholder in the editor. |

> *All properties are read‑only when the object is part of a loaded scene.*

---

## Methods

| Name | Return type | Arguments | Description |
|------|-------------|-----------|-------------|
| `is_placeholder()` | `bool` |  | Returns `true` for instances of this class. |
| `_get_class()` | `String` |  | Returns the class name (`"PlaceholderMaterial"`). |
| `_get_property_list()` | `Array` |  | Returns a list of custom properties exposed to the editor. |
| `_set(property, value)` | `void` | `String property`, `Variant value` | Sets a property value if it is writable. |
| `_get(property)` | `Variant` | `String property` | Retrieves the value of a property. |

> **Tip:** These methods are primarily for internal engine use and are not intended for user‑level scripting.

---

## Signals

| Name | Arguments | Description |
|------|-----------|-------------|
| `changed()` |  | Emitted when the placeholder material changes internally. |

---

## Example

```gdscript
# This is only a conceptual example; actual usage is handled by the engine.
var mat : PlaceholderMaterial = preload("res://my_material.tres")
print(mat.is_placeholder())  # → true
```

---

## Related

- [PlaceholderMesh](../class_placeholdermesh.html)
- [PlaceholderCubemapArray](../class_placeholdercubemaparray.html)

--- 

> **Further Reading:**  
> For a deeper dive into the rendering pipeline and material handling, see the [Rendering](../manual/rendering.html) section of the Godot manual.