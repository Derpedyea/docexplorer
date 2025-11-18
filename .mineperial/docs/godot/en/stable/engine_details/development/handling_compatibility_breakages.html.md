**Handling compatibility breakages**

The Godot engine’s automated test suite checks for changes that can break compatibility between different releases.  
This page explains what kinds of API changes trigger a *compatibility breakage* warning, how to diagnose the problem, and how to safely refactor your code or resources to keep older projects working.

---

## 1. What triggers a compatibility breakage?

A change is considered a breakage when it alters:

| Change type | Example | Why it matters |
|-------------|---------|----------------|
| **New method parameter** | `func foo(a, b, c=0):` | Existing calls may fail or produce unexpected results. |
| **Changed return type** | `func get_value() -> int` (was `String`) | Callers may cast or interpret the value incorrectly. |
| **Parameter type change** | `func bar(obj: Node)` (was `Object`) | Type checks in GDScript or C# may reject the call. |
| **Default value change** | `func baz(x=1)` (was `x=2`) | Code that relies on the old default will behave differently. |

If any of these modifications are detected during the **compatibility test** run, the build is halted with an error.

---

## 2. How to find the problematic API

When the test fails, it reports a file and a line number.  
Open the reported file, look for the changed signature, and note the new definition.

```text
# Example
func my_function(old_param):
    pass
```

After the change:

```text
func my_function(old_param, new_param=0):
    pass
```

---

## 3. Fixing breakages

### 3.1. Preserve the old signature

*If backward compatibility is required*, overload the function or keep the old one as a wrapper.

```gdscript
# Old signature kept for compatibility
func my_function(old_param):
    return my_function(old_param, 0)

# New signature
func my_function(old_param, new_param=0):
    # ... implementation
```

### 3.2. Update all callers

If the change is intentional, search your project for calls to the affected method and adjust them to match the new signature.

```gdscript
# Old usage
my_function(value)

# New usage
my_function(value, additional_value)
```

### 3.3. Use `@deprecated` annotation

Mark the old method as deprecated so the compiler warns but still allows use. This gives users time to migrate.

```gdscript
@deprecated
func my_function(old_param):
    return my_function(old_param, 0)
```

### 3.4. Update default values carefully

If you change a default parameter value, consider whether existing scenes or scripts might rely on the old default. Add a comment or migration guide.

---

## 4. Running the compatibility test

```bash
scons test=compat
```

If any breakages are detected, the test will exit with a non‑zero status and list all offending APIs.

You can also run the test as part of CI to automatically block merge requests that introduce compatibility breakages.

---

## 5. Best practices

1. **Plan changes** – Document any API change before committing.  
2. **Use feature flags** – Expose new functionality behind a runtime flag, allowing old code paths to remain.  
3. **Write migration scripts** – For large projects, a script that updates resource files (.tscn, .gd) can save time.  
4. **Keep tests updated** – Add unit tests for new method signatures so future changes are caught early.  

---

## 6. Example: Adding a default parameter

**Before**

```gdscript
func calculate(a, b):
    return a + b
```

**After**

```gdscript
func calculate(a, b, c=0):
    return a + b + c
```

**Fix**

1. Update all calls:
   ```gdscript
   result = calculate(1, 2)      # old
   result = calculate(1, 2, 3)   # new
   ```
2. Add wrapper for compatibility:
   ```gdscript
   func calculate(a, b):
       return calculate(a, b, 0)
   ```

---

## 7. Resources

- [Godot Engine documentation – Engine development](https://docs.godotengine.org/en/stable/engine_development/index.html)  
- [Godot GitHub – Compatibility testing scripts](https://github.com/godotengine/godot/tree/master/tests/compat)

---