**OpenXRActionSet**  
*Class reference – Godot Engine (stable)*

---

### Overview
`OpenXRActionSet` is a `Resource` that holds a collection of `OpenXRAction` objects.  
OpenXR action sets define groups of input actions that can be activated together, typically used for VR/AR input handling.

**Inheritance hierarchy**

```
Object
 └─ RefCounted
     └─ Resource
         └─ OpenXRActionSet
```

---

### Properties
| Property | Type | Description |
|----------|------|-------------|
| `actions` | `Array[OpenXRAction]` | List of actions that belong to this set. |
| `action_set_name` | `String` | Human‑readable name for the action set. |
| `action_set_id` | `String` | Unique ID used by OpenXR for the set. |
| `enabled` | `bool` | Whether the set is currently enabled. |

*(These are the primary properties exposed in the Godot editor. Use `set_property()` and `get_property()` for dynamic access.)*

---

### Methods
| Method | Signature | Description |
|--------|-----------|-------------|
| `add_action(action: OpenXRAction)` | `void` | Adds an action to this set. |
| `remove_action(action: OpenXRAction)` | `void` | Removes an action from this set. |
| `get_action(index: int)` | `OpenXRAction` | Returns the action at the given index. |
| `get_actions()` | `Array[OpenXRAction]` | Returns all actions in the set. |
| `get_action_names()` | `Array[String]` | Returns the names of all actions. |
| `has_action(action_name: String)` | `bool` | Checks if an action with the specified name exists. |
| `clear()` | `void` | Removes all actions from the set. |

---

### Signals
None.

---

### Usage Example (GDScript)

```gdscript
var action_set = OpenXRActionSet.new()
action_set.action_set_name = "PlayerControls"
action_set.action_set_id = "com.example.player"

var jump_action = OpenXRAction.new()
jump_action.action_name = "jump"
jump_action.action_type = OpenXRAction.TYPE_BOOLEAN

action_set.add_action(jump_action)

# Enable the set for the current session
action_set.enabled = true
```

---

### Related Classes
- `OpenXRActionMap` – Maps actions to specific input sources.  
- `OpenXRAnalogThresholdModifier` – Adjusts analog input thresholds.

---

> **Tip**: The Godot Editor’s XR panel allows you to create and manage action sets visually; the class can also be instantiated via code for dynamic configuration.

---