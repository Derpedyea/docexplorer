**Note:** The following Markdown is a cleaned‑up version of the *Logging* tutorial from the Godot Engine documentation.  
It is organized into logical sections, retains all important code examples, links and tables, and follows the original heading hierarchy.

---

# Logging

Godot provides several ways to output information during development and debugging.  
Logging is useful for inspecting values, tracking program flow, and diagnosing errors.  

## 1. Printing messages

| Function | Description | Example |
|----------|-------------|---------|
| `print()` | Prints a message to the console. | `print("Hello, world!")` |
| `printerr()` | Prints an error message to **stderr**. | `printerr("An error occurred!")` |
| `push_error()` | Adds an error to the editor’s “Debug” panel. | `push_error("Unexpected value")` |
| `push_warning()` | Adds a warning to the editor’s “Debug” panel. | `push_warning("Deprecated API")` |
| `print_debug()` | Prints only when the engine is compiled in *debug* mode. | `print_debug("Debug‑only message")` |
| `assert()` | Checks a condition and prints an error if it fails. | `assert(my_value > 0, "Value must be positive")` |

> **Tip** – `print()` and `print_debug()` output to the standard output (`stdout`) while `printerr()`, `push_error()`, and `push_warning()` send to the standard error (`stderr`) or the editor’s debug console.

### 1.1 Output formatting

Godot automatically formats common data types:

```gdscript
var arr = [1, 2, 3]
print(arr)                 # -> [1, 2, 3]

var d = {"a": 1, "b": 2}
print(d)                   # -> {"a": 1, "b": 2}
```

You can also concatenate strings:

```gdscript
var name = "Alice"
print("Hello, ", name, "!")
```

## 2. Project settings

Several project settings control how logs are displayed and stored.

- **Application → Debug**  
  - **Print to console** – toggle whether `print()` outputs to the console.  
  - **Print to file** – log everything to a file (`output.log`).  
  - **Logging level** – set the minimum severity to log (`debug`, `info`, `warning`, `error`).  

  ```text
  Settings → Application → Debug
  ```

- **Editor → Debugger**  
  - **Print warnings to console** – shows editor‑level warnings.  
  - **Print errors to console** – shows editor‑level errors.  

  ```text
  Editor Settings → Debugger
  ```

### 2.1 Example: Enabling file logging

1. Open *Project → Project Settings*.
2. Go to **Application > Debug**.
3. Set **Print to file** to `true`.
4. The file `output.log` will be created in the project root.

## 3. Using the Debugger

When running the project in the editor, the **Debugger** panel shows all logs:

```
[gd] (file: 42) print("Hello, world!")
[ERR] (file: 78) push_error("Something bad happened")
```

The panel also offers:

- **Stack traces** for errors and warnings.
- **Call stack navigation** – click a line to jump to the source code.
- **Clear log** – removes all current output.

## 4. Logging from GDScript

Below are quick code snippets for common logging patterns:

```gdscript
# Simple debug message
print_debug("Starting level %d" % level)

# Assert a precondition
assert(player != null, "Player node missing")

# Warning for deprecated API usage
push_warning("Using `set_text()` on a RichTextLabel is deprecated; use `set_text()` instead")

# Error handling
if not file.open(file_path):
    push_error("Could not open %s" % file_path)
```

## 5. Logging from C# (Godot 4.1+)

```csharp
using Godot;
using System;

public partial class MyNode : Node
{
    public override void _Ready()
    {
        GD.Print("Hello from C#");
        GD.PrintDebug("Debug only");
        GD.PrintErr("Error message");
    }
}
```

> The `GD.Print*` family mirrors the GDScript functions.

## 6. Best practices

- Keep log statements minimal in production builds to avoid cluttering the console.
- Use `print_debug()` for development‑only output.
- Log only once per frame for performance‑critical scripts.
- Prefer `push_error()` / `push_warning()` for issues that should be visible in the editor.

## 7. Useful links

- [Project Settings → Application → Debug](https://docs.godotengine.org/en/stable/tutorials/scripting/logging.html#project-settings)
- [Editor → Debugger](https://docs.godotengine.org/en/stable/tutorials/scripting/logging.html#debugger)
- [Godot API: print()](https://docs.godotengine.org/en/stable/classes/class_@gd.html#class-gd-print)

---