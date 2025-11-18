**C# exported properties**  
*Godot Engine Documentation – Stable*

---

### Overview

In Godot, any **member** of a script can be marked as *exported*.  
Exported members are:

- **Saved** with the scene or resource they belong to.
- **Visible** and editable in the **Inspector**.
- **Exposed** to the editor’s property editor.

The `[Export]` attribute (C#) is the equivalent of the `export` keyword in GDScript.

---

## 1. Exporting a field

```csharp
using Godot;

public partial class Player : Node2D
{
    // Exported integer
    [Export] public int Speed = 200;

    // Exported Vector2
    [Export] public Vector2 Velocity = new Vector2();
}
```

- The default values above are stored in the scene file.
- In the Inspector, the fields appear as editable properties.

> **Tip** – Use `public` or `export`‑qualified properties so they show in the editor.

---

## 2. Exporting with hints

You can give the editor additional information with *hints*:

```csharp
[Export(PropertyHint.Range, "0, 100")]
public int Health = 100;

[Export(PropertyHint.Enum, "Idle,Walk,Run")]
public string State = "Idle";
```

| Property Hint | Description | Example |
|---------------|-------------|---------|
| `Range` | Constrains numeric values. | `Range, "0,10,0.1"` → 0 – 10 with step 0.1 |
| `Enum` | Provides a drop‑down list of string options. | `Enum, "Red,Green,Blue"` |
| `MultilineText` | Allows editing large blocks of text. | `MultilineText` |
| `File`, `Dir`, `Folder`, `GlobalFile`, `GlobalDir` | Path pickers. | `File, "*.png"` |
| `NodePath` | A path to a node in the scene tree. | `NodePath` |

---

## 3. Exporting custom objects

You can export resources, nodes, or custom classes:

```csharp
[Export] public PackedScene EnemyScene;
[Export] public AudioStream Music;
[Export] public NodePath TargetPath;
```

- **PackedScene** and **AudioStream** are automatically loaded.
- **NodePath** values can be resolved with `GetNode<T>(TargetPath)`.

---

## 4. Exporting arrays and dictionaries

```csharp
[Export] public Array<int> Scores;
[Export] public Dictionary<string, int> Stats;
```

These will appear as collection editors in the Inspector.

---

## 5. Export groups and categories

Group properties in the Inspector to keep the editor tidy.

```csharp
[Export] public int Health = 100;
[ExportGroup("Appearance")] // starts a new group
[Export] public Color BodyColor = Color.White;
[Export] public bool IsVisible = true;
```

You can also create sub‑groups with `[ExportSubgroup("Details")]`.

---

## 6. Exported properties in the editor

- **Read‑only**: Use the `SetGet` attribute to expose a property with custom getter/setter logic.
- **Tool scripts**: When the script has `[Tool]`, exported values update in real time in the editor.

```csharp
[Tool]
public partial class MyNode : Node
{
    [Export] public int Value = 0;

    public override void _Ready()
    {
        GD.Print($"Value is {Value}");
    }
}
```

---

## 7. Common pitfalls

| Issue | Fix |
|-------|-----|
| **Null reference** when accessing `Export` fields before initialization | Use `export` fields only in `_Ready()` or later. |
| **Editor not showing a property** | Ensure the field is `public` or has an `export` attribute. |
| **Enum not updating** | Use `Enum` hint and match the string value to your enum names. |

---

## 8. Example: Simple health component

```csharp
using Godot;

public partial class Health : Node
{
    [Export(PropertyHint.Range, "0, 100, 1")]
    public int MaxHealth = 100;

    [Export] public int CurrentHealth;

    public override void _Ready()
    {
        CurrentHealth = MaxHealth;
    }

    public void TakeDamage(int amount)
    {
        CurrentHealth = Mathf.Max(CurrentHealth - amount, 0);
        if (CurrentHealth == 0)
        {
            EmitSignal(nameof(Died));
        }
    }

    [Signal] public delegate void DiedEventHandler();
}
```

---

### Further reading

- [C# scripting in Godot](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/c_sharp_basics.html)  
- [Signals](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/c_sharp_signals.html)  
- [C# globals](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/c_sharp_global_classes.html)  

---