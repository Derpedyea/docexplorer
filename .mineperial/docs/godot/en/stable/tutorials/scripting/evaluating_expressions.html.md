**Evaluating expressions**  
================================

Godot provides an [`Expression`](https://docs.godotengine.org/en/stable/classes/class_expression.html) class that allows you to parse and evaluate arbitrary expressions at runtime.  
Expressions can be:

* Mathematical: `(2 + 4) * 16 / 4.0`
* Boolean: `true && false`
* String operations: `"foo".length() > 3`
* Function calls: `sin(pi/2)`

This page explains how to use the class, set up variables and functions, handle errors, and cache expressions for performance.

---

## 1.  Creating an Expression

```gdscript
var expr = Expression.new()
var error = expr.parse("a + b", ["a", "b"])
if error != OK:
    print("Parse error:", error)
```

* `Expression.new()` creates a new instance.  
* `parse(expression, var_names)` compiles the expression string and lists the variable names that can be supplied at runtime.  
* The function returns `OK` (0) on success, or an error code.

> **Tip** – You can also parse an expression from a file or a string that is user‑provided.

---

## 2.  Evaluating

```gdscript
var result = expr.execute([5, 7])  # a = 5, b = 7
print(result)   # 12
```

* `execute(args)` evaluates the compiled expression using the supplied values.  
* The arguments must match the order of the variable names passed to `parse`.  
* If the expression contains errors (e.g. division by zero), the method returns an error code instead of a value.

---

## 3.  Using Variables and Functions

### 3.1  Variables

```gdscript
var expr = Expression.new()
var err = expr.parse("x * y + z", ["x", "y", "z"])
if err == OK:
    print(expr.execute([2, 3, 4]))  # 10
```

* Variables can be of any type that the expression engine supports (int, float, string, Vector2, etc.).  
* You may also supply a `Dictionary` via `execute()` for named arguments.

```gdscript
var result = expr.execute({"x": 2, "y": 3, "z": 4})
```

### 3.2  Functions

```gdscript
var expr = Expression.new()
var err = expr.parse("max(a, b) + min(c, d)", ["a", "b", "c", "d"])
```

* Godot exposes a set of built‑in functions (`max`, `min`, `sin`, `cos`, `sqrt`, etc.).  
* Custom functions can be provided by using the `func` argument of `parse()`:

```gdscript
func my_add(a, b): return a + b

var expr = Expression.new()
var err = expr.parse("my_add(3, 5) * 2", [], {"my_add": my_add})
print(expr.execute())   # 16
```

---

## 4.  Error Handling

| Code | Meaning |
|------|---------|
| `ERROR_OK` | No error |
| `ERROR_PARSE_ERROR` | Syntax error in the expression |
| `ERROR_TYPE_ERROR` | Type mismatch |
| `ERROR_DIVIDE_BY_ZERO` | Division by zero |
| … | See `Expression` reference for the full list |

You can query the error message with `Expression.get_error_text()` after a parse or execute call.

```gdscript
var expr = Expression.new()
var err = expr.parse("1 / 0")
if err != OK:
    print(expr.get_error_text())   # "Division by zero"
```

---

## 5.  Caching and Performance

Expressions are compiled the first time they are parsed. If you need to evaluate the same expression many times, reuse the `Expression` instance.  
If you are re‑parsing a frequently used expression, consider using a dictionary of cached expressions:

```gdscript
var cache = {}
func eval(expr_str, args):
    if not cache.has(expr_str):
        var e = Expression.new()
        if e.parse(expr_str, []) != OK:
            push_error("Invalid expression")
            return null
        cache[expr_str] = e
    return cache[expr_str].execute(args)
```

---

## 6.  Example: A Simple Calculator

```gdscript
extends Node

var expr = Expression.new()

func _ready():
    var code = "(x + y) * z - 5"
    var err = expr.parse(code, ["x", "y", "z"])
    if err != OK:
        push_error(expr.get_error_text())
        return

    var result = expr.execute([3, 4, 2])  # (3 + 4) * 2 - 5 = 9
    print("Result:", result)  # 9
```

---

## 7.  When to Use `Expression`

* **Dynamic scripting**: User‑defined formulas (e.g. a physics equation that can be edited at runtime).  
* **Visual scripting**: Converting a node graph into executable code.  
* **Configuration**: Storing calculation rules in a `.tres` or `.json` file.

---

## 8.  Reference

* [`Expression`](https://docs.godotengine.org/en/stable/classes/class_expression.html) – Full API docs.  
* [`Expression.parse()`](https://docs.godotengine.org/en/stable/classes/class_expression.html#method-parse) – Syntax and arguments.  
* [`Expression.execute()`](https://docs.godotengine.org/en/stable/classes/class_expression.html#method-execute) – Runtime evaluation.

---