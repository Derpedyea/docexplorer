**Note:** The following Markdown is a reconstruction of the *Godot interfaces* documentation page.  
It contains the main headings, sub‑headings, code samples and key explanations found on the official Godot Engine docs site.  
Feel free to adapt or expand it with any additional details you may need.

---

# Godot interfaces

In Godot, you often need a script to interact with another object that offers certain functionality.  
Because Godot’s scene system is highly composable, a common pattern is to treat **interfaces** as a way of
*declaring* the methods and properties a node must expose, and then *calling* those methods without
knowing the concrete type of the node.

The article is split into two parts:

1. **Acquiring object references** – how to obtain a reference to the object you want to use.  
2. **Accessing data or logic from an object** – how to interact with that reference in a safe, type‑aware way.

---

## Acquiring object references

There are two main steps:

1. **Get a reference to the object that presumably has the features you need.**  
2. **Store that reference in a variable you can use later.**

### 1. Using `get_node()` and `get_node_or_null()`

The most common way is to use a relative or absolute `NodePath`:

```gdscript
var player = get_node("Player")          # node must exist, will raise an error if it doesn't
var enemy  = get_node_or_null("Enemy")   # returns `null` if the node is missing
```

> **Tip:**  
> Prefer `get_node_or_null()` when the node may or may not exist at run‑time.  
> It lets you write defensive code without breaking the game.

### 2. Exported `NodePath` variables

You can expose the node path in the editor and bind it to any node:

```gdscript
@export var target_path : NodePath
var target : Node

func _ready() -> void:
    target = get_node(target_path)
```

This is handy for reusing a script on many scenes or when you want to keep a node reference
private to the script.

### 3. Type‑hinted node references

If you know the exact type of the node you’re working with, add a type hint. This gives the
editor autocompletion and static type checking:

```gdscript
var player : KinematicBody2D

func _ready() -> void:
    player = get_node("Player") as KinematicBody2D
```

If the cast fails, `player` becomes `null`. Use `assert()` to catch the error early.

---

## Accessing data or logic from an object

Once you have a reference, you can use it to call methods, read properties, or connect signals.
Godot’s dynamic nature means you can do this without declaring a formal interface, but you can
still enforce a contract using *type hints* or *abstract base classes*.

### 1. Direct method calls

```gdscript
func _process(_delta: float) -> void:
    if target:
        target.take_damage(10)          # `take_damage` must exist on `target`
```

If `target` doesn’t have the method, you’ll get a runtime error.  
Adding a type hint prevents that:

```gdscript
var target : Damageable   # `Damageable` is a class that defines `take_damage()`

func _process(_delta: float) -> void:
    target.take_damage(10)
```

### 2. Using signals

A good way to interact with unknown objects is through signals. Define a signal in the interface
script and connect to it:

```gdscript
# damageable.gd
signal died

func take_damage(amount: int) -> void:
    health -= amount
    if health <= 0:
        emit_signal("died")
```

```gdscript
# player.gd
@export var enemy : Damageable

func _ready() -> void:
    enemy.connect("died", Callable(self, "_on_enemy_died"))

func _on_enemy_died() -> void:
    print("Enemy was defeated!")
```

### 3. The “interface” pattern in GDScript

Godot doesn’t have a native `interface` keyword, but you can emulate it with a **script** that
defines only the method signatures you expect, and use the script’s class name as a type hint.

```gdscript
# IInteractable.gd
class_name IInteractable
func interact() -> void:
    pass
```

Other scripts can then declare variables of that type:

```gdscript
@export var interactable : IInteractable

func _ready() -> void:
    if interactable:
        interactable.interact()
```

Because `IInteractable` contains only method stubs, the engine will warn you if a
concrete implementation forgets to provide the required function.

### 4. Using `call()` and `has_method()`

If you can’t use type hints, you can still call methods dynamically:

```gdscript
if target.has_method("jump"):
    target.call("jump")
```

This is slower than a direct call and lacks static type checking, but it works for highly
generic interactions.

---

### Summary

* **Getting a reference** – `get_node()`, `get_node_or_null()`, exported `NodePath`s, or type‑hinted
  variables.
* **Interacting safely** – use direct method calls with type hints, signals, or a lightweight
  interface script.
* **Avoiding hard dependencies** – keep your scripts loosely coupled by exposing only the
  methods you need and using dynamic calls when necessary.

This pattern lets you build reusable components that can interact with any node that implements
the required interface, keeping your code clean and maintainable.