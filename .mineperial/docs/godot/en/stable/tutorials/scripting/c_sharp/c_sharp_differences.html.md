**C# API differences to GDScript**  
<https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/c_sharp_differences.html>

---

# Overview

This page lists the main differences between the Godot API when used from **C#** (via .NET) and when used from **GDScript**.  
The differences are grouped into several sections for clarity: General, Signals, Classes, Properties, Methods, Constants, Enums, and Miscellaneous.  

> **Note**: The list is *incomplete*; always consult the official [Godot C# API Reference](https://docs.godotengine.org/en/stable/csharp_api/) and the [GDScript Reference](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript.html) for the most up‑to‑date information.

---

## 1. General differences

| Feature | GDScript | C# |
|---------|----------|-----|
| **Naming convention** | `snake_case` | `PascalCase` |
| **Access modifiers** | All members are public unless otherwise specified | `public`, `protected`, `private`, `internal` |
| **Inheritance syntax** | `extends` | `: BaseClass` |
| **Signals** | Declared with `signal` keyword | Declared with `[Signal]` attribute and `public delegate` |
| **Exported properties** | `export var` | `[Export]` attribute |
| **Singletons / Auto‑loads** | `var singleton = preload("res://path_to_autoload.gd")` | `ProjectSettings.GlobalClass` / `Engine.Singleton` |

### Example

```gdscript
# GDScript
extends Node2D
signal hit(health : int)

export (int) var speed = 200
```

```csharp
// C#
public class Player : Node2D
{
    [Signal] public delegate void Hit(int health);

    [Export] public int Speed = 200;
}
```

---

## 2. Signal differences

| GDScript | C# |
|----------|-----|
| Declaration | `signal my_signal(arg1, arg2)` | `[Signal] public delegate void MySignal(int arg1, string arg2);` |
| Connection | `connect("my_signal", self, "_on_my_signal")` | `Connect(nameof(MySignal), this, nameof(OnMySignal));` |
| Emission | `emit_signal("my_signal", 42, "foo")` | `EmitSignal(nameof(MySignal), 42, "foo");` |
| Namespaces | Signal names are case‑sensitive but often use lowercase. | Signal names follow C# naming conventions (PascalCase). |

---

## 3. Class differences

| GDScript | C# |
|----------|-----|
| Class keyword | `class` is optional; usually omitted. | `public class ClassName : BaseClass` |
| Constructors | `func _init()` | `public ClassName()` |
| Destructors | `_exit_tree()` or `queue_free()` | `public override void _ExitTree()` |
| Static methods | `static func foo()` | `public static void Foo()` |

---

## 4. Property differences

| GDScript | C# |
|----------|-----|
| Exposed properties | `export (int) var hp = 100` | `[Export] public int Hp = 100;` |
| Setter/Getter | `var hp set get` | `public int Hp { get; set; }` |
| Read‑only | `export (int) var hp set get` | `[Export] public int Hp { get; private set; }` |

---

## 5. Method differences

| GDScript | C# |
|----------|-----|
| Function keyword | `func` | `public` / `private` / `protected` |
| Parameters | No explicit typing required, but optional types available. | Strongly typed, optional default values. |
| Return type | Inferred or `void`. | Explicit type. |
| Static methods | `static func foo()` | `public static void Foo()` |

> **Tip**: When porting from GDScript to C#, remember to add the `public` access modifier unless you intentionally want to hide the method.

---

## 6. Constant and enum differences

| GDScript | C# |
|----------|-----|
| Constants | `const int MAX = 10` | `public const int MAX = 10;` |
| Enumerations | `enum Color { RED, GREEN, BLUE }` | `public enum Color { Red, Green, Blue }` |

---

## 7. Miscellaneous

### 7.1. Signals and properties in GDScript use snake_case, while in C# they use PascalCase.

### 7.2. GDScript allows dynamic properties (e.g., `self["my_prop"] = 5`) which are not available in C#.

### 7.3. In GDScript you can `pass` through `func _ready():` and in C# you use `_Ready()`.

### 7.4. Memory management: GDScript runs on the GDScript VM and uses garbage collection. C# uses .NET's GC; be mindful of `Reference` wrappers if you need to keep objects alive.

---

# Further reading

- [C# API reference](https://docs.godotengine.org/en/stable/csharp_api/)
- [GDScript reference](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript.html)
- [Migrating from GDScript to C#](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/c_sharp_migration.html)

---