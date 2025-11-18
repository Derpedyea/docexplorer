**ScriptExtension**  
=====================

> **Inherits**: `Script` → `Resource` → `RefCounted` → `Object`  

> *There is currently no description for this class. Please help us by contributing one!*

---

## Methods

| Signature | Description |
|-----------|-------------|
| **`bool _can_instantiate()`**<br>*virtual required* | Determines whether the script can be instantiated. |
| *(Other methods are inherited from `Script`)* | |

> **Note:** The full method list is automatically generated from Godot’s class reference. Refer to the official documentation for the complete API.

---

### Usage Example

```gdscript
# Example of a custom script extension in GDScript
class_name MyScriptExtension
extends ScriptExtension

func _can_instantiate() -> bool:
    return true
```

---

For more detailed information, consult the [Godot Engine Class Reference](https://docs.godotengine.org/en/stable/classes/class_scriptextension.html).