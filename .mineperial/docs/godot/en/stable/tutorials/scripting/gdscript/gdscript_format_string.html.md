**GDScript Format Strings**  
================================

GDScript offers several convenient ways to build strings that contain dynamic data.  
This guide covers the most common techniques, syntax rules, and best‑practice examples.

---

## 1. The “%” Operator

The most compact form uses the `%` operator, similar to Python’s old string formatting.

```gdscript
var name = "Bob"
var age  = 23

var msg = "%s is %d years old" % [name, age]
print(msg)          # → "Bob is 23 years old"
```

| Specifier | Meaning | Example |
|-----------|---------|---------|
| `s` | String (any object’s `str()` representation) | `"Hello %s" % ["world"]` |
| `d` | Signed integer | `"Count: %d" % 42` |
| `f` | Float | `"%.2f" % 3.14159` |
| `g` | Float, uses `f` or `e` automatically | `"Value: %g" % 0.0001234` |
| `x`/`X` | Hexadecimal (lowercase/uppercase) | `"0x%x" % 255` |
| `o` | Octal | `"0o%o" % 255` |
| `b` | Binary | `"0b%b" % 5` |
| `%` | Literal percent sign | `"%%"` |

### Positional and Named Arguments

```gdscript
var msg = "%s scored %d points" % {"name": "Alice", "score": 42}
# → "Alice scored 42 points"
```

*Named* arguments are handy when you have many variables.

---

## 2. `String.format()` Method

A more explicit interface that accepts the same specifiers and optional flags.

```gdscript
var msg = "Coordinates: (%.2f, %.2f)" % [x, y]           # old style

var msg2 = "%s scored %d points" % {"name":"Alice","score":42}  # named

var msg3 = String("Hello %s! You have %d new messages.")\
           .format(["Bob", 7])         # method call
```

**Why use it?**  
When you need to build a string from a *template* stored in a variable or file, `String.format()` keeps the template separate from the code.

```gdscript
var template = "%s has %d apples."
var result   = template.format(["Tina", 5])
```

---

## 3. Format Specifiers in Detail

### 3.1 Width, Precision, and Flags

```
%[flags][width][.precision]specifier
```

| Flag | Effect |
|------|--------|
| `-`  | Left‑justify |
| `+`  | Force sign |
| ` `  | Blank for positive numbers |
| `0`  | Pad with zeros |
| `#`  | Alternate form (e.g., `0x` for hex) |

**Examples**

```gdscript
var num = 42

print("%5d"   % num)   # → "   42" (right‑aligned, width 5)
print("%-5d"  % num)   # → "42   " (left‑aligned)
print("%+d"   % num)   # → "+42"
print("%05d"  % num)   # → "00042"
print("%#.4x" % 255)   # → "0xff"  (alternate hex)
```

For floating point numbers:

```gdscript
var pi = 3.1415926535
print("%.2f" % pi)   # → "3.14"
print("%8.3f" % pi)  # → "   3.142"
```

### 3.2 Using Dictionaries

Named placeholders make the code clearer, especially when formatting complex data.

```gdscript
var stats = {"hp": 100, "mp": 50, "name": "Hero"}
var message = "HP: %(hp)d, MP: %(mp)d – %(name)s" % stats
```

---

## 4. Practical Tips

| Issue | Fix |
|-------|-----|
| **Mixing `%` with string concatenation** | Keep all formatting in one expression to avoid errors. |
| **Performance** | `String.format()` is marginally slower than `%` for very frequent calls; use the operator for hot paths. |
| **Unicode and multibyte characters** | Specifiers handle Unicode transparently; use `s` for any string. |
| **Debugging** | If a placeholder is missing, GDScript raises a runtime error – double‑check keys. |

---

## 5. Full Example

```gdscript
extends Node

func _ready():
    var name   = "Alice"
    var level  = 7
    var health = 42.5

    # Using the % operator
    var msg1 = "%s reached level %d with %.1f health" % [name, level, health]

    # Using String.format() with named arguments
    var template = "%(name)s (lvl %(level)d) - Health: %(hp).2f"
    var msg2 = template.format({"name": name, "level": level, "hp": health})

    # Print results
    print(msg1)   # → "Alice reached level 7 with 42.5 health"
    print(msg2)   # → "Alice (lvl 7) - Health: 42.50"
```

---

## 6. Reference

- **`String` class** – `format()` method  
  <https://docs.godotengine.org/en/stable/classes/class_string.html#method-format>
- **GDScript documentation** – String formatting section  
  <https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_format_string.html>

---