**Random number generation – Godot Engine Documentation**  
*(Stable version)*

---

# Random number generation

Many games rely on randomness to implement core game mechanics.  
This page guides you through common types of randomness and how to
implement them in Godot.

> **TL;DR**  
> *Use the built‑in `RandomNumberGenerator` for deterministic
>  sequences or the global functions (`randi()`, `randf()`, etc.) for
>  quick, non‑deterministic values.*

---

## 1. Global random functions

Godot provides a handful of global functions that use a shared,
non‑deterministic PRNG:

| Function | Description | Typical use |
|----------|-------------|-------------|
| `randi()` | Returns a random **integer** in the range `[0, 2^32-1]`. | Random indices, simple flags |
| `randf()` | Returns a random **float** in the range `[0.0, 1.0)`. | Normalised random values |
| `randf_range(a, b)` | Returns a random float in `[a, b)`. | Scaling a value to a custom range |
| `randf_range(a, b)` | Same as above but with inclusive upper bound if `a < b`. |  |

> **Note:** These functions **share a single internal seed**, so
>  reseeding with `seed()` will affect all of them.  
>  For reproducible sequences or independent streams, use
>  `RandomNumberGenerator`.

Example (GDScript):

```gdscript
var value = randi() % 5        # 0…4
var fraction = randf()          # 0.0…1.0
var between = randf_range(10, 20)  # 10.0…20.0
```

---

## 2. `RandomNumberGenerator` class

The `RandomNumberGenerator` is Godot’s lightweight, object‑oriented
pseudo‑random number generator. It allows you to create multiple
independent RNG streams with different seeds.

### 2.1 Instantiation

```gdscript
var rng = RandomNumberGenerator.new()
```

### 2.2 Seeding

| Method | Description |
|--------|-------------|
| `seed(value)` | Seed the generator with a specific integer. |
| `randomize()` | Seed using an entropy source (e.g., current time). |

Example:

```gdscript
var rng = RandomNumberGenerator.new()
rng.randomize()          # Uses system time
```

### 2.3 Basic methods

| Method | Return type | Description |
|--------|-------------|-------------|
| `randf()` | `float` | Uniform random float in `[0, 1)` |
| `randf_range(a, b)` | `float` | Uniform random float in `[a, b)` |
| `randi()` | `int` | Uniform random integer in `[0, 2^32-1]` |
| `randint(a, b)` | `int` | Uniform random integer in `[a, b]` |
| `randi_range(a, b)` | `int` | Uniform random integer in `[a, b]` (alias for `randint`) |
| `get_seed()` | `int` | Current seed value |
| `get_state()` | `PackedByteArray` | Snapshot of RNG state for reproducibility |

> **Deterministic sequences**:  
> If you need a predictable sequence (e.g., procedural generation
>  that must be reproducible), set a fixed seed once and keep the
>  generator around:

```gdscript
var rng = RandomNumberGenerator.new()
rng.seed(42)  # Any integer

print(rng.randi())     # Always the same sequence
print(rng.randf_range(0, 10))
```

### 2.4 Seeding per node

A common pattern is to assign an RNG to a node that requires its own
stream:

```gdscript
class_name Enemy
extends Node2D

var rng : RandomNumberGenerator

func _ready() -> void:
    rng = RandomNumberGenerator.new()
    rng.seed(Engine.get_universal_time_msec() + int(name))  # Different per enemy
```

---

## 3. Common use‑cases

### 3.1 Random positions

```gdscript
var rng = RandomNumberGenerator.new()
rng.randomize()

var pos = Vector2(
    rng.randf_range(0, 1024),
    rng.randf_range(0, 768)
)
```

### 3.2 Random selection from an array

```gdscript
var items = ["apple", "banana", "cherry"]
var choice = items[rng.randi_range(0, items.size() - 1)]
```

### 3.3 Random boolean

```gdscript
var is_true = rng.randf() < 0.5
```

### 3.4 Random normal distribution

```gdscript
# Box-Muller transform
func rand_norm(mean: float = 0, stddev: float = 1) -> float:
    var u1 = rng.randf()
    var u2 = rng.randf()
    var z0 = sqrt(-2.0 * log(u1)) * cos(2.0 * PI * u2)
    return z0 * stddev + mean
```

---

## 4. Performance tips

| Tip | Why |
|-----|-----|
| Use a **single RNG per script** | Avoids repeated seeding and reduces overhead |
| Cache the RNG in a `Node` or a singleton if many nodes need it | Keeps state consistent |
| For truly non‑deterministic behaviour, use the global functions; they are slightly faster |

---

## 5. Example – Dice Roll

```gdscript
var rng = RandomNumberGenerator.new()
rng.randomize()

func roll_dice(sides: int = 6) -> int:
    return rng.randi_range(1, sides)
```

---

## 6. Further reading

* [RandomNumberGenerator – API reference](https://docs.godotengine.org/en/stable/classes/class_randomnumbergenerator.html)
* [Math – Godot manual](https://docs.godotengine.org/en/stable/tutorials/math/index.html)

---

**End of documentation.**