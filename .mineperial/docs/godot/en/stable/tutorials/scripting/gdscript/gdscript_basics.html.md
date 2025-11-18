**GDScript Reference**  
*Godot Engine Documentation – Stable*  

> **GDScript** is a high‑level, object‑oriented, imperative, and gradually‑typed programming language built for Godot. It uses an indentation‑based syntax similar to languages such as Python. Its goal is to provide a language that feels natural for game developers, while being tightly integrated with Godot’s editor and runtime.  

---

## Table of contents

* [Introduction](#introduction)  
* [Syntax](#syntax)  
* [Types and variables](#types-and-variables)  
* [Control structures](#control-structures)  
* [Functions](#functions)  
* [Classes](#classes)  
* [Signals](#signals)  
* [Built‑in functions & global objects](#built‑in-functions--global-objects)  
* [Best practices](#best-practices)  

*(The full documentation contains many more sections and detailed API references; see the Godot online docs for complete details.)*  

---

### Introduction

GDScript is Godot’s own scripting language. It is:

* **Easy to learn** – the syntax is clear and Python‑like.  
* **Fast to develop with** – dynamic typing and auto‑completion keep you productive.  
* **Optimized for the engine** – tight integration with nodes, signals, and the editor.

---

### Syntax

| Feature | Example |
|---------|---------|
| Comments | `# This is a comment` |
| Indentation | Indent blocks with **4 spaces** (tabs are discouraged). |
| Statements | `var a = 5` |
| Functions | `func foo():` |

---

### Types and variables

```gdscript
var integer : int = 10
var floating : float = 3.14
var text : String = "Hello, world!"
var vector : Vector2 = Vector2(0, 0)
var array : Array = [1, 2, 3]
var dict : Dictionary = {"key": "value"}
```

*Variables can be declared with `var` (mutable) or `const` (immutable). Type annotations are optional but encouraged.*

---

### Control structures

```gdscript
# if / elif / else
if a > b:
    print("a is larger")
elif a < b:
    print("b is larger")
else:
    print("a and b are equal")

# for loop
for i in range(5):
    print(i)

# while loop
var i = 0
while i < 10:
    i += 1

# match (similar to switch)
match direction:
    "up":
        move_up()
    "down":
        move_down()
```

---

### Functions

```gdscript
func greet(name: String) -> void:
    print("Hello, %s!" % name)

# return a value
func add(a: int, b: int) -> int:
    return a + b
```

*Functions can have optional parameters, default values, and type hints.*

---

### Classes

```gdscript
class MyClass:
    var value : int = 0

    func _init(v: int):
        value = v

    func get_value() -> int:
        return value
```

*All scripts are instances of a class that extends a Godot node or resource.*

---

### Signals

```gdscript
signal finished

func _ready():
    emit_signal("finished")
```

*Signals allow nodes to communicate asynchronously.*

---

### Built‑in functions & global objects

| Function | Description |
|----------|-------------|
| `print()` | Output to console |
| `load()` | Load a resource |
| `preload()` | Load a resource at compile time |
| `get_node()` | Retrieve a node from the scene tree |

---

### Best practices

* **Prefer typed variables** – this improves editor hints and runtime performance.  
* **Use `const` for static values** – the compiler can optimize them.  
* **Keep scripts small** – each script should represent a single logical unit.  
* **Avoid heavy logic in `_ready`** – use `set_process(false)` until needed.  

---

*For the complete reference, see the official Godot documentation at: https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html*