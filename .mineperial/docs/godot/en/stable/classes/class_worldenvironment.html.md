**WorldEnvironment**  
*Godot Engine – Class Reference (Stable)*

---

## Overview
`WorldEnvironment` is a node that defines the default **environment** for the current scene.  
It controls global rendering settings such as background color, sky, fog, exposure, and post‑processing effects.  
The node can be added to a scene tree and will automatically apply its settings to all cameras that use the same viewport.

> *Inherits:* `Node` → `Object`

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `environment` | `Environment` | `null` | The `Environment` resource that holds all visual settings. |
| `environment` (alias) | `Environment` | `null` | Same as above (read‑only in inspector). |

> **Note**: Changing this property automatically updates the viewport’s rendering environment.

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_environment(Environment env)` | `void` | `env : Environment` | Assigns a new `Environment` resource to this node. |
| `get_environment()` | `Environment` | — | Retrieves the currently assigned environment. |
| `set_default_environment(Environment env)` | `void` | `env : Environment` | Sets a *global* default environment for the viewport if none is set in the scene. |
| `get_default_environment()` | `Environment` | — | Returns the viewport’s default environment. |
| `set_custom_bake_mode(int mode)` | `void` | `mode : int` | Configures how the environment’s baked lighting is handled (see `WorldEnvironment.BakeMode`). |
| `get_custom_bake_mode()` | `int` | — | Returns the current custom bake mode. |
| `set_use_environment(bool use)` | `void` | `use : bool` | Enables or disables this environment node. |
| `is_using_environment()` | `bool` | — | Indicates if this node is actively applied. |

> **Available Bake Modes** (enum `WorldEnvironment.BakeMode`):
> - `DEFAULT`
> - `CUSTOM`
> - `CUSTOM_BAKED`

---

## Signals

`WorldEnvironment` does not emit any signals.

---

## Typical Usage

```gdscript
# Create a new WorldEnvironment node
var env_node = WorldEnvironment.new()
add_child(env_node)

# Load an Environment resource
var env_res = preload("res://my_env.tres")

# Assign it
env_node.environment = env_res
```

The environment resource can be edited in the Inspector or created/modified through GDScript:

```gdscript
var env = Environment.new()
env.background_mode = Environment.BACKGROUND_COLOR
env.background_color = Color(0.1, 0.2, 0.3)
env_node.environment = env
```

---

## Related Resources

- [Environment](https://docs.godotengine.org/en/stable/classes/class_environment.html)
- [World3D](https://docs.godotengine.org/en/stable/classes/class_world3d.html) – the lower‑level API that actually uses the environment data.
- [Camera](https://docs.godotengine.org/en/stable/classes/class_camera.html) – cameras can be configured to use the WorldEnvironment.

---

### Quick Reference

```gdscript
# Apply a default environment to the current viewport
var default_env = preload("res://default_env.tres")
WorldEnvironment.set_default_environment(default_env)

# Toggle the world environment on/off
WorldEnvironment.set_use_environment(true)  # enable
WorldEnvironment.is_using_environment()    # returns true
```

---

*For more detailed information, refer to the full class reference on the official Godot documentation website.*