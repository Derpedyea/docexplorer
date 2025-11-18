**OpenXRAnalogThresholdModifier**

> This class is part of the Godot Engine’s OpenXR support.  
> It provides a way to turn a **float** input (e.g., a trigger or joystick value) into a **boolean** input that fires when the value crosses a specified threshold.

---

## Inheritance

```
OpenXRAnalogThresholdModifier
    └─ OpenXRActionBindingModifier<OpenXRBindingModifier<Resource<RefCounted<Object>>>>
```

---

## Description

The **OpenXRAnalogThresholdModifier** is a binding modifier used when configuring XR actions.  
It allows you to treat an analog input (such as a trigger or joystick axis) as a boolean action by defining a *threshold* value.  
When the analog value exceeds the threshold, the action is considered *pressed*; otherwise it is *released*.

Typical use‑cases include:

- Treating a trigger press as a “grab” action.
- Turning a joystick’s directional axis into a “move forward” button.
- Simplifying input handling in scripts by receiving a `bool` instead of a `float`.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `threshold` | `float` | `0.5` | The analog value threshold that determines when the boolean output becomes `true`. |

---

## Methods

> (The current API surface for this class is minimal; most functionality is inherited from its base class.)

### `get_threshold() -> float`

Returns the current threshold value.

```gdscript
var mod = OpenXRAnalogThresholdModifier.new()
var current = mod.get_threshold()
```

### `set_threshold(value: float)`

Sets a new threshold.

```gdscript
mod.set_threshold(0.75)
```

---

## Signals

> None.

---

## Example

```gdscript
# Create a threshold modifier that turns the controller trigger into a boolean
var trigger_mod = OpenXRAnalogThresholdModifier.new()
trigger_mod.threshold = 0.7

# Attach to an OpenXR action
var action = openxr.get_action("grab")
action.modifiers.append(trigger_mod)

# Use the action in a script
func _process(delta):
    if action.is_active():
        print("Grabbed!")
```

---

### Where to learn more

- [OpenXR Action Binding Modifiers](https://docs.godotengine.org/en/stable/classes/class_openxrbindingmodifier.html) – overview of all available modifiers.  
- [OpenXR API Reference](https://docs.godotengine.org/en/stable/classes.html) – detailed class hierarchy and documentation.