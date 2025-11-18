**Cross‑language scripting**  
*Godot Engine documentation – stable*  

---  

## 1.  Overview  

Godot lets you mix and match its scripting languages (GDScript, C#, GDExtension, VisualScript) in the same project.  
This page covers how scripts written in different languages can interoperate:

* Call methods and access properties across languages.  
* Connect signals between scripts of different types.  
* Inherit from classes written in another language.  
* Register and use global (autoload) scripts that are language‑agnostic.  

> **Tip** – Because each language has its own type system and runtime, the interoperability APIs are intentionally lightweight. For heavy work you might prefer to keep the “core” logic in one language and only expose a small wrapper to the other.

---

## 2.  Basic interaction patterns  

### 2.1  GDScript → C#  

```gdscript
# In a GDScript node
var cs_node = preload("res://MyCSNode.cs").new()
add_child(cs_node)

# Call a public method on the C# node
cs_node.MyCSharpMethod(42)
```

```csharp
// MyCSNode.cs
public class MyCSNode : Node
{
    [Export] public int value;

    public void MyCSharpMethod(int param)
    {
        GD.Print($"Got {param} from GDScript");
        value = param;
    }
}
```

**Notes**

* C# scripts must be compiled first (the editor will do this automatically).  
* Exposed methods and properties need to be marked with `[Export]`, `[Signal]`, or `public` so that GDScript can see them.  

### 2.2  C# → GDScript  

```csharp
// In C#
var gd_script = ResourceLoader.Load<GDScript>("res://MyGDNode.gd");
var gd_node = new Node();
gd_node.SetScript(gd_script);
AddChild(gd_node);

// Call a GDScript method
gd_node.Call("my_gd_method", "Hello from C#");
```

```gdscript
# MyGDNode.gd
extends Node

func my_gd_method(msg):
    print(msg)
```

**Notes**

* Use `Node.Call()` (or `GetNode()` + `Call()`) to invoke a GDScript method by name.  
* For better type safety use `Node.Call()` with the overload that accepts typed arguments or use `GetMethod()` on `Object`.

### 2.3  Signals across languages  

```gdscript
# In GDScript
signal my_signal(int value)

func _ready():
    my_signal.connect("my_signal", self, "_on_my_signal")

func _on_my_signal(val):
    print("Signal received:", val)
```

```csharp
// In C#
[Signal] public delegate void MySignalEventHandler(int value);

public void EmitMySignal()
{
    EmitSignal(nameof(MySignal), 99);
}
```

> **Caution** – When connecting a signal from a script in another language, the signal’s name must match exactly, and the signature must be compatible.

---

## 3.  Script inheritance across languages  

You can inherit a script written in another language:

```gdscript
# GDScript inheriting a C# class
extends "res://MyCSBase.cs"

func _ready():
    print("C# base value:", base_property)
```

```csharp
// MyCSBase.cs
public class MyCSBase : Node
{
    [Export] public string base_property = "Hello";
}
```

Similarly, a C# script can inherit from a GDScript class:

```csharp
// MyCSharpDerived.cs
using Godot;
using System;

public class MyCSharpDerived : MyGDScriptBase
{
    public override void _Ready()
    {
        GD.Print("Derived in C#");
    }
}
```

*Both* languages share the same runtime object, so you can mix and match inheritance hierarchies as long as the base class is registered with the engine.

---

## 4.  Global (autoload) scripts  

Autoloads work across languages. Add a script to the project’s autoload list and refer to it from any language:

```gdscript
# In GDScript
Global.some_value += 1
```

```csharp
// In C#
Global.some_value += 1;
```

If the autoload is a C# script:

```csharp
// Global.cs
public class Global : Node
{
    public static int some_value = 0;
}
```

If the autoload is a GDScript:

```gdscript
# global.gd
extends Node

var some_value = 0
```

---

## 5.  Limitations & best practices  

| Scenario | Recommendation | Reason |
|----------|----------------|--------|
| Heavy numeric work | Use C# or GDExtension | GDScript is interpreted and slower for CPU‑intensive tasks. |
| Simple UI logic | Use GDScript | GDScript is lightweight and integrates well with the editor. |
| Mixed libraries (e.g., external .NET DLLs) | Keep core logic in C# | GDScript cannot directly reference .NET assemblies. |
| Runtime type checks | Prefer explicit type casts | Avoiding `dynamic` lookups improves performance. |
| Signal slots | Keep signals in the language that will emit them | Helps avoid naming conflicts and improves readability. |

**Tip** – Keep the public API of each script language simple: expose only what is needed for the other language.

---

## 6.  Resources  

* [C# tutorials](https://docs.godotengine.org/en/stable/tutorials/scripting/csharp.html)  
* [GDScript reference](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript.html)  
* [GDExtension docs](https://docs.godotengine.org/en/stable/tutorials/scripting/gdextension.html)  
* [Signals in GDScript](https://docs.godotengine.org/en/stable/tutorials/scripting/signals.html)  
* [Signals in C#](https://docs.godotengine.org/en/stable/tutorials/scripting/csharp_signals.html)  

--- 

> **Further reading** – For a deeper dive into the underlying engine API, see the [C# API reference](https://docs.godotengine.org/en/stable/classes/class_node.html) and the [GDScript API](https://docs.godotengine.org/en/stable/classes/class_node.html).