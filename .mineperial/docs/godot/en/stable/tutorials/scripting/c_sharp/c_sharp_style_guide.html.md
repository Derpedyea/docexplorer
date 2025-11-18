**C# Style Guide – Godot Engine**  
*Documentation page (stable release)*

---

> Having well‑defined and consistent coding conventions is important for every project, and Godot is no exception to this rule. This page contains a coding style guide, which is followed by developer teams working on Godot itself and is intended to be a reference for all C#‑based projects using Godot.

*(Note: The full content of the style guide is not included in the supplied HTML snippet. Below is a structured Markdown skeleton based on the expected sections of a typical Godot C# style guide. Feel free to replace the placeholders with the actual text from the original page.)*

---

## 1. Overview

- Purpose of the style guide
- How to use this guide
- Who should follow it

## 2. Naming Conventions

| Category | Example | Explanation |
|----------|---------|-------------|
| **Classes & structs** | `MyCharacter`, `PlayerController` | PascalCase |
| **Methods & properties** | `GetPosition()`, `HealthPoints` | PascalCase |
| **Fields** | `speed`, `maxHealth` | camelCase for private fields; PascalCase if exported |
| **Constants** | `const float Gravity = 9.81f;` | PascalCase or UPPER_SNAKE_CASE for public constants |

### 2.1 Exported Fields

- Exported fields use `public` visibility but must be named in `PascalCase` and accompanied by `[Export]` attribute.

## 3. Code Formatting

- Indentation: 4 spaces (no tabs)
- Line length: < 120 characters
- Braces: on same line for control statements; new line for method bodies

## 4. Using Godot Attributes

- `[Export]` – expose a field to the editor
- `[Signal]` – declare signals
- `[Tool]` – run script in editor
- `[Remote]`, `[Master]`, `[Puppet]` – network roles

## 5. Common Practices

- **Use Godot’s `Vector2` / `Vector3`** instead of custom math structs.
- **Avoid magic numbers**; use named constants.
- **Keep scripts small** – one class per file, no anonymous nested types.
- **Prefer `GetNode<T>()`** over manual casting.
- **Avoid global state**; use Autoload singletons only when necessary.

## 6. Examples

```csharp
using Godot;
using System;

public partial class Player : CharacterBody2D
{
    [Export] public float Speed = 200f;
    [Export] private int MaxHealth = 100;
    
    private int _currentHealth;

    public override void _Ready()
    {
        _currentHealth = MaxHealth;
    }

    public override void _PhysicsProcess(double delta)
    {
        Vector2 inputVector = new Vector2(
            Input.GetActionStrength("ui_right") - Input.GetActionStrength("ui_left"),
            Input.GetActionStrength("ui_down") - Input.GetActionStrength("ui_up")
        );

        Velocity = inputVector.Normalized() * Speed;
        MoveAndSlide();
    }
}
```

## 7. Resources

- [Godot Docs – C# Language Features](../c_sharp_features.html)
- [Godot Docs – C# Diagnostics](../diagnostics/index.html)

---

*For a deeper dive into the style guide, refer to the complete page on the [Godot Engine documentation website](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/c_sharp_style_guide.html).*