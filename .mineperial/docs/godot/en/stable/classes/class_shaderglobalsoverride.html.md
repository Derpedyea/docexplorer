**__ShaderGlobalsOverride__** – Godot Engine Documentation  
*Inherits: `Node`*

---

A **`ShaderGlobalsOverride`** node allows you to override global shader parameter values for all shaders that reference the specified *global* in a given scene tree.  
It works similarly to a `WorldEnvironment` node, but targets shader globals instead of rendering environment settings.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `override_name` | `String` | `""` | The name of the global shader parameter group that this node will override.  

> This property can be edited in the Inspector or set programmatically.  It is also exposed to project settings for quick global reference.

---

## Methods

| Method | Signature | Returns | Description |
|--------|------------|---------|-------------|
| `has_uniform()` | `bool has_uniform(String name)` | `bool` | Returns `true` if the override defines a value for the uniform *name*. |
| `get_uniform()` | `Variant get_uniform(String name)` | `Variant` | Retrieves the current value of a uniform. |
| `set_uniform()` | `void set_uniform(String name, Variant value)` | – | Assigns or updates a uniform value. |
| `remove_uniform()` | `void remove_uniform(String name)` | – | Removes an existing uniform from the override. |
| `get_uniforms()` | `Dictionary get_uniforms()` | `Dictionary` | Returns all uniforms currently set in this override, keyed by name. |
| `get_override_name()` | `String get_override_name()` | `String` | Returns the current override name. |
| `set_override_name()` | `void set_override_name(String name)` | – | Changes the override name. |

> **Note:** The `override_name` property is automatically exposed as a setter/getter pair, so you can use `override_name = "my_override"` instead of the explicit `set_override_name()` method.

---

## Example Usage

```gdscript
# Add a ShaderGlobalsOverride node to the scene
var override = ShaderGlobalsOverride.new()
override.override_name = "global_material"

# Override a uniform called "time_scale"
override.set_uniform("time_scale", 0.5)

# Apply the node to the scene root
get_tree().get_root().add_child(override)
```

All shaders in the scene that refer to the global group **`global_material`** will now use the overridden value `time_scale = 0.5`.  
To remove it again:

```gdscript
override.remove_uniform("time_scale")
```

---

## Related Classes

- **[WorldEnvironment](https://docs.godotengine.org/en/stable/classes/class_worldenvironment.html)** – Override environment settings.
- **[ShaderGlobals](https://docs.godotengine.org/en/stable/classes/class_shaderglobals.html)** – Defines global shader parameters.

---

### Quick Reference

| Feature | API |
|---------|-----|
| Override a uniform | `set_uniform(name, value)` |
| Query a uniform | `get_uniform(name)` |
| Check existence | `has_uniform(name)` |
| Delete an override | `remove_uniform(name)` |
| List all overrides | `get_uniforms()` |
| Identify override group | `override_name` |

---

For more detailed information, refer to the official Godot Engine 4.x Class Reference:  

<https://docs.godotengine.org/en/stable/classes/class_shaderglobalsoverride.html>