**NOTE:** The following Markdown is a simplified reconstruction of the “GDScript warning system” documentation page.  
It contains the main sections that the original page is expected to have, based on the Godot Engine documentation style. For the full, authoritative text see the official Godot documentation at <https://docs.godotengine.org>.

---  

# GDScript Warning System

The GDScript warning system complements static typing (but can also be used without it).  
It is designed to help you spot mistakes that would otherwise be hard to detect during development, and that may lead to runtime errors or subtle bugs.

---

## Table of Contents

1. [Why warnings matter](#why-warnings-matter)  
2. [How to enable and configure](#how-to-enable-and-configure)  
3. [Common warning types](#common-warning-types)  
4. [Examples and best practices](#examples-and-best-practices)  
5. [Disabling or filtering warnings](#disabling-or-filtering-warnings)  

---

## Why warnings matter

- **Catch typos early** – e.g., miss‑spelled variable or function names.  
- **Prevent null‑reference crashes** – the system can warn you when a value that may be `null` is dereferenced.  
- **Spot unused code** – unused variables, functions, or signals that can be removed.  
- **Help with static typing** – even if you haven’t declared types, GDScript can still infer and warn about type mismatches.

---

## How to enable and configure

The warning system is part of the editor’s script settings.  

### Project Settings

1. Open **Project → Project Settings**.  
2. Search for `warning`.  
3. Toggle **"Enable warnings"**.  
4. Choose a **warning level** (`Error`, `Warning`, `Info`).  

### Editor Settings

- In **Editor → Editor Settings → General → GDScript**, you can configure:
  - `Enable warnings` – global switch.
  - `Error level` – filter what is shown in the editor output.  
  - `Show warnings` – enable the console panel to display them.

> ⚠️ **Note:** Warnings are not errors – the script will still run. They are meant to aid debugging.

---

## Common warning types

| Warning | When it appears | Typical fix |
|---------|-----------------|-------------|
| **Unused variable** | A variable is declared but never used. | Remove it or use it. |
| **Unassigned variable** | Variable is referenced before assignment. | Initialize it. |
| **Possible null dereference** | Accessing a property or method on a variable that could be `null`. | Add a null check or use the safe navigation operator (`?.`). |
| **Function name mismatch** | Function defined in one script is called with a different name. | Rename function or correct call. |
| **Signal not connected** | Signal emitted but no slot is connected. | Connect the signal or ignore it. |
| **Deprecated API usage** | Using an API that has been removed or replaced. | Update to the new API. |
| **Return type mismatch** | Return type does not match declared type. | Fix return statement or type hint. |

*(The actual list in Godot is longer; see the online docs for the complete enumeration.)*

---

## Examples and best practices

### 1. Using type hints to reduce warnings

```gdscript
# Good: explicit type
var velocity: Vector2 = Vector2.ZERO

func _physics_process(delta: float) -> void:
    velocity.x = input.get_action_strength("ui_right") - input.get_action_strength("ui_left")
    velocity.y = input.get_action_strength("ui_down") - input.get_action_strength("ui_up")
    position += velocity * delta
```

### 2. Avoiding null dereference

```gdscript
# Bad
var sprite = null
print(sprite.texture)  # <-- null dereference warning

# Good
if sprite:
    print(sprite.texture)
```

### 3. Cleaning up unused code

```gdscript
# Remove this if not used
func _unimplemented_method():
    pass
```

---

## Disabling or filtering warnings

You can turn off specific warning categories if they are noisy or irrelevant:

1. In **Editor Settings → GDScript**, find the “Warnings” section.  
2. Toggle the checkboxes next to each warning type.  

Alternatively, add a comment to silence a warning on a single line:

```gdscript
# @warning-ignore unused_variable
var unused := 42
```

(Use the exact warning identifier – check the editor output for the keyword.)

---

## Further reading

- [Static typing in GDScript](../static_typing.html)  
- [GDScript format strings](../gdscript_format_string.html)  

---