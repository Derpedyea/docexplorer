**OpenXRAction** – Godot Engine Documentation  
================================================

> *Inherits: `Resource < RefCounted < Object`*  

OpenXRAction is a resource that defines an OpenXR action.  
Actions can be used both for inputs (buttons, joysticks, triggers, etc.) and **outputs** (hand tracking, haptics, etc.).

---

## Signals

*No signals are defined for `OpenXRAction`.*

---

## Methods

| Method | Description |
|--------|-------------|
| **`get_name()`** | Returns the action's name. |
| **`set_name(name: String)`** | Sets the action's name. |
| **`get_action_type()`** | Returns the type of the action (e.g., `AXIS`, `BOOL`, `VEC2`, etc.). |
| **`set_action_type(type: int)`** | Sets the type of the action. |
| **`add_binding(path: String, interaction_profile: String)`** | Adds a binding for the action to a specific interaction profile. |
| **`get_bindings()`** | Returns a dictionary of bindings for this action. |
| **`clear_bindings()`** | Removes all bindings. |
| **`is_enabled()`** | Returns whether the action is currently enabled. |
| **`set_enabled(enabled: bool)`** | Enables or disables the action. |

> **Note:** The actual list of methods and their signatures can be found in the Godot editor’s **Script** tab or by inspecting the class reference directly in the editor.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **`name`** | `String` | `""` | The name of the action. |
| **`type`** | `int` | `0` | The action type (`ACTION_TYPE` enumeration). |
| **`bindings`** | `Dictionary` | `{}` | Mapping of interaction profiles to paths. |
| **`enabled`** | `bool` | `true` | Whether the action is active. |

---

## Constants

| Constant | Value | Description |
|----------|-------|-------------|
| **`ACTION_TYPE_BOOL`** | `0` | Boolean action. |
| **`ACTION_TYPE_FLOAT`** | `1` | Scalar action. |
| **`ACTION_TYPE_VEC2`** | `2` | 2D vector action. |
| **`ACTION_TYPE_VEC3`** | `3` | 3D vector action. |
| **`ACTION_TYPE_VELOCITY`** | `4` | Velocity vector. |
| **`ACTION_TYPE_POSE`** | `5` | Pose action (position + orientation). |
| **`ACTION_TYPE_VIBRATION`** | `6` | Haptic feedback action. |

> *All constants are defined in the `OpenXRAction` class scope.*

---

## Usage Example

```gdscript
# Create a new OpenXRAction resource
var action = OpenXRAction.new()
action.set_name("grab")
action.set_action_type(OpenXRAction.ACTION_TYPE_BOOL)

# Bind to a controller button
action.add_binding("/user/hand/left/input/trigger", "oculus_touch")

# Enable the action
action.set_enabled(true)

# Access the action in code
var is_grabbing = action.get_value()
```

---

### Further Reading

* [OpenXRActionBindingModifier](../class_openxractionbindingmodifier.html) – modifies action bindings at runtime.  
* [OpenXR](../class_openxr.html) – core OpenXR interface.  
* [OpenXRActionBinding](../class_openxractionbinding.html) – detailed binding information.

---