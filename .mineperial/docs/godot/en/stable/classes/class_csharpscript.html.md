**CSharpScript**  
*Godot Engine – Class reference*

---

### Inheritance

`CSharpScript` inherits from:

```text
Script< Resource< RefCounted< Object >
```

> A script implemented in the C# programming language, saved with the `.cs` extension (Mono‑enabled builds only). This class represents a C# script resource that can be attached to nodes in a Godot scene.

---

### Overview

| Property | Type | Description |
|----------|------|-------------|
| `new_type` | `string` | Returns the name of the script type (e.g., `"MyScript"`) |
| `resource_path` | `String` | File path to the `.cs` source file |
| `script_name` | `String` | Friendly name shown in the editor |

> **Note**: C# scripts require the Mono runtime to be installed and enabled in Godot. They are compiled at runtime or via external tools when using the Godot editor.

---

### Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `new` | `CSharpScript()` | Constructor. |
| `get_class()` | `string` | Returns the Godot class name this script extends. |
| `get_script()` | `String` | Path to the script file. |
| `set_script(String path)` | `void` | Sets a new script path. |
| `has_method(String name)` | `bool` | Checks if the script defines a method. |
| `call(String method, var args)` | `var` | Calls a method on the script instance. |
| `get_method_list()` | `Array` | Returns all method names. |

> These methods mirror the API available in the GDScript class reference for `Script`. For a complete list of available properties and functions, see the official Godot API reference.

---

### Example

```csharp
using Godot;
using System;

public class Player : Node2D
{
    // This script will be attached to a Node2D.
    public override void _Ready()
    {
        GD.Print("Player script loaded");
    }
}
```

*Attach the `Player.cs` file to a Node2D instance in the editor.*  
When the scene runs, the message “Player script loaded” will appear in the output console.

---

### Working with C# Scripts in Godot

1. **Enable Mono** – During installation, select the “Mono” option or install the Mono build separately.
2. **Create a Script** – In the editor, create a new `C#` script file (`.cs`) and attach it to a node.
3. **Compile** – Godot automatically compiles C# scripts on project load. For large projects, use the *External Editor* or *Command line* tools to speed up compilation.
4. **Debugging** – Use Visual Studio or VS Code with the Godot extension for breakpoints and advanced debugging.

---

### Further Reading

- [C# Documentation](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/index.html) – Comprehensive guide to C# in Godot.
- [Godot API Reference](https://docs.godotengine.org/en/stable/classes/class_csharpscript.html) – Full list of properties, methods, and signals.
- [Godot Mono Setup](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/mono.html) – Setting up the Mono environment and resolving common issues.

---