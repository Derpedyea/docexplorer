# XRController3D

> **Inheritance:** `XRNode3D` → `Node3D` → `Node` → `Object`

A **3‑D node that represents a spatially‑tracked VR/AR controller**.  
The node automatically tracks the physical controller that is connected to the system and provides a convenient interface for reading controller state and handling input actions.

---

## Description

The `XRController3D` node is a helper 3‑D node that is linked to the tracking of controllers.  
It is typically used inside an `XRCamera3D` or a custom scene that represents the player’s hand. The node automatically updates its transform to match the actual controller’s pose and exposes a variety of properties, methods and signals for accessing button states, touchpad/joystick values, pose information, etc.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `hand` | `XRNode3D.Hand` | `Hand.NONE` | The hand that this controller corresponds to. |
| `handedness` | `XRNode3D.Handedness` | `Handedness.NONE` | Read‑only. |
| `model` | `PackedScene` | `null` | Scene used to display a 3‑D model of the controller. |
| `is_connected` | `bool` | `false` | Read‑only. Is a controller actually connected? |
| `is_position_valid` | `bool` | `false` | Read‑only. Is the position data valid? |
| `is_rotation_valid` | `bool` | `false` | Read‑only. Is the rotation data valid? |
| `is_pressed` | `bool` | `false` | Read‑only. Is the trigger button currently pressed? |
| `button_index` | `int` | `-1` | Read‑only. Index of the currently pressed button. |

> **Tip** – For most projects you’ll simply use the default pose of the node and connect signals such as `button_pressed` or `button_released` to respond to user input.

---

## Methods

| Method | Return type | Description |
|--------|------------|-------------|
| `get_indexed_button(index)` | `bool` | Returns `true` if the button with the given index is currently pressed. |
| `get_touchpad_axis()` | `Vector2` | Returns the current touchpad axis value. |
| `get_joystick_axis()` | `Vector2` | Returns the current joystick axis value. |
| `get_button_mask()` | `int` | Returns a bitmask of all pressed buttons. |
| `get_ideal_pose()` | `Transform3D` | Returns a pose that matches the controller’s current transform. |
| `get_grip_strength()` | `float` | Returns the current grip strength (0–1). |
| `get_trigger_strength()` | `float` | Returns the current trigger strength (0–1). |
| `is_button_pressed(button_index)` | `bool` | Returns whether a specific button is pressed. |
| `is_action_pressed(action_name)` | `bool` | Returns whether a given action is currently pressed. |

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `button_pressed(button_index)` | `int` | Emitted when a button is pressed. |
| `button_released(button_index)` | `int` | Emitted when a button is released. |
| `pose_changed(pose)` | `Transform3D` | Emitted whenever the controller’s pose changes. |

---

## Example

```gdscript
extends XRController3D

func _ready():
    # Load a 3D model for the controller
    model = preload("res://hand_left.glb")

func _process(_delta):
    if button_pressed(XRController3D.BUTTON_GRIP):
        print("Grip pressed")
```

---

> **Note** – In Godot 4.0+ the `XRController3D` node is part of the XR core API.  For custom controller types you can create a derived class or use the `XRCamera3D` node’s `get_controller()` method.

---

### Further Reading

* [XRNode3D](../classes/class_xrnode3d.html) – Base class for all XR‑related nodes.  
* [XRCamera3D](../classes/class_xrcamera3d.html) – Camera node with XR support.  
* [XRInterface](../classes/class_xrintegration.html) – Low‑level interface to XR hardware.  

---