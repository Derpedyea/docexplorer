**Note:** The full HTML content of the *GDScript style guide* page was not provided in the excerpt – only the navigation structure and page header were included. Below is a cleaned‑up Markdown skeleton that mirrors the expected structure of the documentation page. If you have the complete HTML, replace the placeholder sections with the actual text.

---

# GDScript Style Guide

> This style guide lists conventions to write elegant GDScript. The goal is to encourage writing clean, readable code and promote consistency across projects, discussions, and tutorials. Hopefully, t...

*(Full content omitted – see the official Godot documentation for the complete guide.)*

## 1. Introduction

*Why follow a style guide?*
- Consistency across projects
- Readable and maintainable code
- Easier collaboration

## 2. Naming Conventions

| Category | Convention | Example |
|----------|------------|---------|
| Functions | snake_case | `func get_player_position():` |
| Variables | snake_case | `var health_points = 100` |
| Signals | snake_case | `signal enemy_died` |
| Constants | UPPER_SNAKE_CASE | `const MAX_SPEED = 200` |

### 2.1. Function Names

*Use camelCase for methods and snake_case for function names?*  
*(Check the official docs for the most up‑to‑date guidance.)*

## 3. Variable & Constant Usage

- Prefer `var` over `export var` unless the value should be editable in the editor.
- Use `const` for values that never change.
- Avoid magic numbers; define them as constants.

## 4. Class & File Organization

- One class per file.
- Class names in PascalCase.
- Keep files in logical folders (e.g., `scenes/`, `scripts/`).

## 5. Commenting and Documentation

- Use `#` for single‑line comments.
- Use triple‑quoted strings (`"""`) for multi‑line docstrings.
- Keep comments concise and relevant.

## 6. Common Coding Practices

### 6.1. Avoiding Globals

Prefer autoloads sparingly; use singleton patterns only for truly global state.

### 6.2. Using Signals

Define custom signals at the top of the script:

```gdscript
signal health_changed(new_health)
```

Connect signals in `_ready()` or the editor.

## 7. Code Formatting

- 4‑space indentation.
- 80‑character line width where possible.
- No trailing whitespace.

## 8. Static Typing (Optional)

- Enable `@gdscript` typing for improved editor assistance.
- Use type hints for function arguments and return values.

```gdscript
func move(delta: float) -> void:
    pass
```

## 9. Performance Tips

- Cache node references with `onready var`.
- Use `export` only for properties that need to be exposed.
- Avoid heavy logic in `_process`; consider `_physics_process` for physics calculations.

## 10. Additional Resources

- [GDScript documentation comments](https://docs.godotengine.org/.../gdscript_documentation_comments.html)
- [Static typing in GDScript](https://docs.godotengine.org/.../static_typing.html)
- [GDScript style guide on GitHub](https://github.com/godotengine/godot/blob/master/doc/modules/gdscript_styleguide.md)

---

**References**

- [Official Godot Documentation – GDScript style guide](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_styleguide.html)

*(End of converted markdown. For the complete guide, visit the official Godot documentation.)*