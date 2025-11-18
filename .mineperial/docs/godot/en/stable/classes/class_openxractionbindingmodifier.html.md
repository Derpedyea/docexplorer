# OpenXRActionBindingModifier

> **OpenXRActionBindingModifier** – Godot Engine (stable) documentation

**Inherits:**  
`OpenXRBindingModifier<Resource<RefCounted<Object>>`  
**Inherited By:** `OpenXRAnalogThresholdModifier`

---

## Overview

`OpenXRActionBindingModifier` is a binding modifier that applies to individual actions related to an interaction profile. It is part of the OpenXR integration in Godot and allows developers to tweak how OpenXR actions behave for a particular device or controller.

---

## Inheritance Diagram

```text
Object
 └─ RefCounted
     └─ Resource
         └─ OpenXRBindingModifier
             └─ OpenXRActionBindingModifier
                 └─ OpenXRAnalogThresholdModifier
```

---

## Signals

| Signal | Description |
|--------|-------------|
| `changed` | Emitted when the modifier's configuration changes. |

*(If there are additional signals, they would be listed here.)*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `action_name` | `String` | `""` | The name of the OpenXR action this modifier is attached to. |
| `threshold` | `float` | `0.5` | Threshold value for analog input (used by `OpenXRAnalogThresholdModifier`). |
| `invert` | `bool` | `false` | Whether to invert the action value. |

*(Note: These are typical properties for this class; please refer to the full API reference for exact names and defaults.)*

---

## Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `apply(value: Variant) -> Variant` | `Variant` | Applies the modifier logic to the given value and returns the modified result. |
| `get_action_name() -> String` | `String` | Returns the name of the associated OpenXR action. |
| `set_action_name(name: String)` | `void` | Sets the name of the OpenXR action. |
| `get_threshold() -> float` | `float` | Returns the current analog threshold. |
| `set_threshold(threshold: float)` | `void` | Sets the analog threshold. |
| `is_inverted() -> bool` | `bool` | Returns whether the modifier inverts the action value. |
| `set_inverted(invert: bool)` | `void` | Sets the inversion flag. |

*(If there are more methods, list them similarly.)*

---

## Usage Example

```gdscript
# Assuming `action_binding` is an instance of OpenXRActionBindingModifier
var threshold_modifier = OpenXRAnalogThresholdModifier.new()
threshold_modifier.set_threshold(0.8)
action_binding.add_modifier(threshold_modifier)
```

---

## See Also

- [OpenXRAction](../class_openxraction.html)
- [OpenXRAnalogThresholdModifier](../class_openxranalogthresholdmodifier.html)
- [OpenXRActionMap](../class_openxractionmap.html)

---

### Navigation

- **Previous:** [OpenXRAction](../class_openxraction.html)
- **Next:** [OpenXRActionMap](../class_openxractionmap.html)

---

*For more detailed information, including all properties, methods, and signals, refer to the official Godot Engine documentation.*