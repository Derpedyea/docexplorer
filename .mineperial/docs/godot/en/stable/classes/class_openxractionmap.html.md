**OpenXRActionMap**  
*Class reference – Godot Engine (stable)*  

---

### Inherits
`Resource < RefCounted < Object > >`

### Description
OpenXRActionMap is a resource that collects **OpenXRActionSet** and **OpenXRInteractionProfile** resources for the OpenXR module.  
OpenXR uses an action system similar to Godot’s input system, but with a separate layer that maps actions to platform‑specific bindings. This class holds the collections that define the overall action map for a given XR session.

---

## Properties

| Name | Type | Description |
|------|------|-------------|
| `action_sets` | `Array[OpenXRActionSet]` | List of action sets that belong to this map. |
| `interaction_profiles` | `Array[OpenXRInteractionProfile]` | List of interaction profiles that can be applied. |

> **Note:** The arrays are editable from the Godot editor and can be serialized as part of the project.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `get_action_set(name: String)` | `OpenXRActionSet` | Returns the action set with the specified name. |
| `add_action_set(set: OpenXRActionSet)` | `void` | Adds a new action set to the map. |
| `remove_action_set(set: OpenXRActionSet)` | `void` | Removes the given action set. |
| `get_interaction_profile(name: String)` | `OpenXRInteractionProfile` | Fetches an interaction profile by name. |
| `add_interaction_profile(profile: OpenXRInteractionProfile)` | `void` | Adds a new interaction profile. |
| `remove_interaction_profile(profile: OpenXRInteractionProfile)` | `void` | Removes the specified profile. |

> The actual method list may include additional helpers for binding and serialization; refer to the full API reference for complete signatures.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `action_set_added` | `action_set: OpenXRActionSet` | Emitted when a new action set is added. |
| `action_set_removed` | `action_set: OpenXRActionSet` | Emitted when an action set is removed. |
| `interaction_profile_added` | `profile: OpenXRInteractionProfile` | Emitted when a new interaction profile is added. |
| `interaction_profile_removed` | `profile: OpenXRInteractionProfile` | Emitted when a profile is removed. |

---

## Example Usage

```gdscript
# Create an action map
var map = OpenXRActionMap.new()

# Create and add an action set
var movement_set = OpenXRActionSet.new()
movement_set.name = "PlayerMovement"
map.add_action_set(movement_set)

# Create an interaction profile (e.g., Oculus Touch)
var oculus_profile = OpenXRInteractionProfile.new()
oculus_profile.name = "OculusTouch"
map.add_interaction_profile(oculus_profile)
```

---

## Related Resources

* [OpenXRActionSet](class_openxractionset.html) – Defines a set of actions.
* [OpenXRInteractionProfile](class_openxrinteractionprofile.html) – Maps actions to platform‑specific input bindings.
* [OpenXRActionBindingModifier](class_openxractionbindingmodifier.html) – Modifier objects that change action behavior.

---

For more detailed documentation, including property editors, full method signatures, and advanced usage, refer to the official Godot Engine API reference.