**C# Collections**  
*(Godot Engine – stable documentation)*

---  

## Overview

Godot’s C# integration gives you access to the full .NET Base Class Library (BCL) for collections (e.g. `List<T>`, `Dictionary<TKey, TValue>`, `HashSet<T>`).  
In addition, Godot provides a small set of collection types that are tightly coupled with the engine’s type system and expose useful Godot‑specific behavior:

| Godot type | Purpose | Notes |
|------------|---------|-------|
| `Array` | Dynamic array that holds `Variant` values | Works with all Godot types, auto‑converts to/from .NET collections |
| `Dictionary` | Key–value map | Keys can be any `Variant` – useful for JSON‑like data |
| `StringName` | Interned string | More memory‑efficient than plain `String` for repeated keys |
| `Variant` | Generic container | Underlying type for `Array` and `Dictionary` elements |
| `PoolByteArray`, `PoolIntArray`, … | Typed memory‑efficient arrays | Best for large binary data |

The page covers how to use these collections, convert between .NET and Godot types, and some pitfalls to avoid.

---

## .NET Base Class Library Collections

### `List<T>`

The most common resizable array.  

```csharp
List<int> numbers = new List<int> { 1, 2, 3 };
numbers.Add(4);
foreach (int n in numbers)
{
    GD.Print(n);
}
```

- **Pros**: Fast random access, LINQ support.
- **Cons**: Not automatically exposed to the Godot editor or exported properties.

### `Dictionary<TKey, TValue>`

A hash‑based key/value store.

```csharp
Dictionary<string, int> ages = new Dictionary<string, int>();
ages["Alice"] = 30;
ages["Bob"] = 25;
GD.Print(ages["Alice"]);
```

- **Pros**: Fast lookup.
- **Cons**: Keys must be immutable (`int`, `string`, `bool`, etc.) unless you override `GetHashCode`.

### `HashSet<T>`

A collection of unique items.

```csharp
HashSet<string> names = new HashSet<string> { "Alice", "Bob" };
names.Add("Alice"); // no effect
```

---

## Godot‑Specific Collections

Godot’s collections are designed to interoperate seamlessly with the engine’s scripting environment and its Variant system.

### `Array`

A dynamic, heterogeneous container that stores `Variant` values.

```csharp
Array arr = new Array();
arr.Add(42);
arr.Add("Hello");
arr.Add(2.5f);
GD.Print(arr[1]); // prints Hello
```

#### Converting to/from .NET

```csharp
// From Godot Array to .NET List
List<int> intList = arr.duplicate(); // or arr.As<T>()
// From .NET List to Godot Array
Array arrayFromList = new Array();
foreach (int i in intList) arrayFromList.Add(i);
```

> **Tip** – Use `Array` when you need to expose a property that can be edited in the inspector or exported to a scene file.

### `Dictionary`

Stores key/value pairs where keys can be any `Variant` (string, int, `Object`, etc.).

```csharp
Dictionary dict = new Dictionary();
dict["name"] = "Player";
dict[42] = "Answer";
GD.Print(dict["name"]); // Player
```

#### Converting to/from .NET

```csharp
Dictionary<string, int> netDict = new Dictionary<string, int>();
netDict["Alice"] = 30;
Dictionary godotDict = new Dictionary();
foreach (var kvp in netDict)
    godotDict[kvp.Key] = kvp.Value;
```

### `StringName`

Interned strings for fast comparison and lower memory usage – ideal for dictionary keys or signal names.

```csharp
StringName sn = new StringName("Player");
Dictionary<string, StringName> map = new Dictionary<string, StringName>();
map[sn] = new StringName("Enemy");
```

### Typed Pool Arrays

Memory‑efficient containers for large numeric data (used by `Image`, `AudioStream`, etc.):

| Type | Example | When to use |
|------|---------|-------------|
| `PoolByteArray` | Raw binary data | File I/O, textures |
| `PoolIntArray` | 32‑bit ints | Vertex indices |
| `PoolFloatArray` | 32‑bit floats | Vertex positions |

```csharp
PoolIntArray indices = new PoolIntArray();
indices.Resize(3);
indices[0] = 0;
indices[1] = 1;
indices[2] = 2;
```

---

## Working with Collections in Godot

### Exported Properties

```csharp
[Export] Array _customList = new Array();
```

When a `Array` or `Dictionary` is exported, it becomes editable in the inspector and its contents persist in the scene file.

### Signals and Variants

Signals often emit `Variant` data. Use `Dictionary` to send structured information.

```csharp
Signal.EmitSignal(nameof(MySignal), new Dictionary
{
    { "score", 100 },
    { "multiplier", 2.5f }
});
```

### Interoperability Example

```csharp
public class Enemy : Node
{
    [Export] Array _pathPoints = new Array();

    public override void _Ready()
    {
        // Convert Array of Vector2 to List<Vector2>
        List<Vector2> path = _pathPoints.Cast<Vector2>().ToList();
    }
}
```

### Performance Tips

| Situation | Recommended Collection | Reason |
|-----------|------------------------|--------|
| Large numeric data | `PoolFloatArray` / `PoolIntArray` | Reduced GC pressure |
| Small, fixed-size data | `Array` | Simple and editor‑friendly |
| Frequent lookups | `Dictionary` | O(1) average case |

---

## Summary

* Use **.NET collections** (`List`, `Dictionary`, `HashSet`) for general C# programming inside Godot.
* Prefer **Godot collections** (`Array`, `Dictionary`, `Pool…Array`, `StringName`) when you need editor integration or Variant compatibility.
* Convert between the two when interfacing with third‑party libraries or exporting data.

For more detailed API references, see the Godot Class Reference for each collection type.