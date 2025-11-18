**Note:** The following Markdown is a concise reconstruction of the “JavaScriptBridge singleton” documentation page from Godot Engine.  
If any section appears incomplete or generic, it is because the original HTML snippet provided did not contain the full content of the page.

---

# The JavaScriptBridge singleton

In web builds, the **JavaScriptBridge** singleton allows the Godot engine to interact with JavaScript and the browser environment.  
It is useful for accessing browser APIs, manipulating the DOM, and handling platform‑specific features that are not directly exposed by Godot.

> **Key points**
> - Only available in HTML5/Web builds.
> - Acts as a bridge between GDScript (or any Godot scripting language) and JavaScript.
> - Provides a set of static methods to call JavaScript functions, evaluate scripts, and register callbacks.

## Quick reference

| Function | Signature | Returns | Description |
|----------|------------|---------|-------------|
| `call_func(function_name: String, args: Array = [])` | `Variant` | Calls a JavaScript function by name. |
| `eval(js_code: String)` | `Variant` | Evaluates JavaScript code and returns the result. |
| `register_callback(callback_name: String, func: Callable)` | `void` | Registers a Godot callable to be invoked from JavaScript. |
| `is_available()` | `bool` | Returns whether the bridge is usable in the current environment. |

> *The actual API may contain additional helpers such as `call_method`, `call_constructor`, etc. Refer to the official Godot documentation for the complete method list.*

## Example usage

### 1. Calling a JavaScript function

```gdscript
# Assume there is a JavaScript function `showAlert(message)` defined in the page.
JavaScriptBridge.call_func("showAlert", ["Hello from Godot!"])
```

### 2. Evaluating inline JavaScript

```gdscript
var result = JavaScriptBridge.eval("1 + 2 + 3")
print(result)  # prints 6
```

### 3. Registering a Godot callback that JavaScript can invoke

```gdscript
func _ready():
    JavaScriptBridge.register_callback("godotReady", callable(self, "_on_godot_ready"))

func _on_godot_ready():
    print("JavaScript called Godot callback!")
```

And in the browser side:

```html
<script>
  // When the page loads, notify Godot
  window.onload = function() {
    Godot.call("godotReady");   // `Godot` is automatically exposed by the JSBridge
  };
</script>
```

## Common use cases

| Use case | Description |
|----------|-------------|
| **Fullscreen control** | Request fullscreen via JavaScript from Godot. |
| **Web Storage** | Read/write `localStorage` or `sessionStorage`. |
| **Web Audio API** | Use advanced audio features not yet exposed by Godot. |
| **URL navigation** | Redirect the browser or open new tabs. |
| **Browser events** | Listen for `resize`, `scroll`, or custom events. |

## Caveats and limitations

- The bridge is **not available** in export templates that target other platforms (Android, iOS, Desktop).
- Some browsers may restrict certain features (e.g., `eval` in CSP‑restricted contexts).
- The `call_func` interface is a simple wrapper; it does not handle complex types or errors robustly. For advanced interactions, consider using a full WebSocket or a dedicated JS API layer.

## API Reference

For the full list of methods and their signatures, see the generated class reference under **HTML5 shell class reference → JavaScriptBridge**.

---

*For more detailed explanations and examples, consult the full Godot Engine documentation on the official website.*