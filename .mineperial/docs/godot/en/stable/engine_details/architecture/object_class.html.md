**Object class**

*General definition:*  
`Object` is the root of the Godot object hierarchy. Almost every class in Godot inherits, directly or indirectly, from it. Objects provide reflection, editable properties, and a system for signals.  

---

## 1.  Class hierarchy
```
Object
 └─ Resource
 └─ Node
 └─ Control
 └─ ...
```
All Godot types that can be created in the editor ultimately inherit from `Object`.

---

## 2.  Core features

### 2.1  Property system
* Properties can be declared in C++ or GDScript with `export` or `@Export`.
* Reflection allows the engine to read/write properties, expose them in the editor, and serialize them.
* Example in GDScript:
  ```gdscript
  @Export var health : int = 100
  ```

### 2.2  Signals
* Signals are a dynamic event system.
* `Object` provides `connect()`, `disconnect()`, and `emit_signal()`.
* In GDScript you can declare:
  ```gdscript
  signal health_changed(new_value)
  ```

### 2.3  Instance management
* `Object.new()` creates a new instance of a class.
* `is_instance_valid(obj)` checks whether an `Object` reference is still valid (i.e., not freed).

---

## 3.  Important methods

| Method | Description |
|--------|-------------|
| `new()` | Create a new object of a specific class. |
| `free()` | Schedule the object for deletion. |
| `is_instance_valid(obj)` | Returns `true` if `obj` is a valid instance. |
| `get_class()` | Returns the class name as a string. |
| `set(name, value)` | Set a property by name. |
| `get(name)` | Get a property by name. |
| `has_method(name)` | Check if a method exists. |
| `call(name, …)` | Dynamically call a method. |
| `has_signal(name)` | Check if a signal is defined. |
| `connect(signal, target, method)` | Connect a signal to a method. |
| `disconnect(signal, target, method)` | Disconnect a signal. |
| `emit_signal(name, …)` | Emit a signal. |

*More methods are available in the C++ API and exposed to GDScript.*

---

## 4.  Reflection & editor integration

* **`Object` provides a reflection API** that the editor uses to automatically display editable properties, allow script editing, and perform serialization.
* `export` keyword in GDScript or `PROPERTY_USAGE_*` flags in C++ control how a property is exposed.
* The property editor shows the property name, type, and default value.  
  Example:
  ```gdscript
  @Export var speed : float = 200.0
  ```

---

## 5.  Signals example

```gdscript
class_name Player
extends Node

signal jumped

func _ready():
    # Emit a signal when the player jumps
    emit_signal("jumped")
```

In the editor you can connect `Player.jumped` to a method of another node, or connect it in code:

```gdscript
var enemy = get_node("Enemy")
player.connect("jumped", enemy, "_on_player_jumped")
```

---

## 6.  Common pitfalls

* **Freed objects**: Always use `is_instance_valid()` before accessing a reference that might be freed.
* **Signal naming**: By convention, signal names are `snake_case`.  
* **Exported properties**: If a property is not exported, it will not appear in the inspector.

---

## 7.  Reference links

* [Object class reference](https://docs.godotengine.org/en/stable/classes/class_object.html)
* [Signals](https://docs.godotengine.org/en/stable/tutorials/scripting/signals.html)
* [Exported properties](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript_classes.html#exported-properties)

---