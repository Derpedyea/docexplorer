**OpenXRIPBinding – Godot Engine Class Reference**

---

### Overview
`OpenXRIPBinding` is a Godot resource that binds an **OpenXRAction** to a specific XR input or output.  
It is part of the OpenXR subsystem and provides a way to map virtual reality or augmented‑reality controls to actions defined in the project.

> **Inherits**  
> `Resource` → `RefCounted` → `Object`

---

### Description
This resource represents a single binding between an OpenXR action and one or more XR input sources (e.g., hand controllers, headset pose) or outputs (e.g., haptic feedback).  
When an OpenXR action is triggered, the associated binding is used to read or write the corresponding input/output data.

---

### Properties
| Property | Type | Description |
|----------|------|-------------|
| `action_name` | `String` | The name of the OpenXR action to bind. |
| `input_path` | `String` | The path to the XR input or output this action should be bound to. |
| `input_type` | `int` | The type of XR input (e.g., button, axis, pose). |
| `output_type` | `int` | The type of XR output (e.g., haptic, pose). |

*(Additional properties may exist – see the full API reference in the Godot documentation.)*

---

### Methods
| Method | Signature | Description |
|--------|-----------|-------------|
| `set_action_name(name: String)` | void | Set the action name for this binding. |
| `get_action_name() -> String` | String | Get the current action name. |
| `set_input_path(path: String)` | void | Set the path to the input or output. |
| `get_input_path() -> String` | String | Get the current input/output path. |
| `get_input_type() -> int` | int | Retrieve the input type. |
| `get_output_type() -> int` | int | Retrieve the output type. |

*(Full method list can be found in the class reference.)*

---

### Example Usage (GDScript)

```gdscript
# Create a new binding
var binding = OpenXRIPBinding.new()
binding.action_name = "jump"
binding.input_path = "/user/hand/right/input/trigger"

# Add to an OpenXR interaction profile
var profile = OpenXRInteractionProfile.new()
profile.add_binding(binding)
```

---

### Related Classes
- **OpenXRAction** – Defines a reusable action that can be bound to multiple inputs.
- **OpenXRInteractionProfile** – Encapsulates a set of bindings for a particular device or user profile.
- **OpenXRIPBindingModifier** – Modifies or augments an existing binding at runtime.

---

### Notes
- **Persistence:** Bindings are typically stored inside an `OpenXRInteractionProfile` resource, which can then be assigned to an `OpenXRController` or `OpenXRInterface`.
- **Input/Output Types:** The numeric codes for `input_type` and `output_type` are defined by the OpenXR API and are exposed in Godot’s OpenXR enums.

---

*For a complete list of properties, methods, and signals, consult the official Godot Engine class reference page for `OpenXRIPBinding`.*