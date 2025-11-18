**Controllers, gamepads, and joysticks**  
*Godot Engine – Stable Documentation*  

> Godot supports hundreds of controller models out of the box.  
> Controllers are supported on Windows, macOS, Linux, Android, iOS, and Web.  
> Note that more specialized devices such as steering wheels, racing sticks, and flight‑simulators are also supported, although they might need additional configuration.

---

# 1. Overview

Godot treats all input devices – keyboard, mouse, touch, and gamepads – as **input events** that can be queried from the engine.  
The most common way to use a controller is via the **Input Map** and the `Input` singleton, which abstracts the device type.

## 1.1 Supported platforms
* Windows – DirectInput, XInput, SDL
* macOS – GameController
* Linux – SDL, XInput
* Android – Android API
* iOS – iOS GameController framework
* Web – Web Gamepad API

---

# 2. Enabling and configuring a gamepad

1. **Plug in** your controller.  
2. Open **Project → Project Settings → Input Map**.  
3. Add an action, e.g. `ui_up`.  
4. Click “Add Event” → **Joypad Button** or **Joypad Motion** and press the desired button or axis.

> **Tip**: For most controllers you can use the generic XInput mapping (`ui_left`, `ui_right`, …).  
> For custom mappings create a new action and bind each button/axis individually.

### 2.1 Common button codes

| Button | GDScript constant | Notes |
|--------|-------------------|-------|
| A / Cross | `JOY_BUTTON_A` | Usually the “trigger” button |
| B / Circle | `JOY_BUTTON_B` | Often “cancel” |
| X / Square | `JOY_BUTTON_X` | “Accept” |
| Y / Triangle | `JOY_BUTTON_Y` | “Start” |
| L | `JOY_BUTTON_L1` | Shoulder button left |
| R | `JOY_BUTTON_R1` | Shoulder button right |
| D‑pad | `JOY_DPAD_*` | e.g. `JOY_DPAD_UP` |
| L‑stick press | `JOY_BUTTON_L2` | `JOY_BUTTON_R2` |


### 2.2 Axis handling

A joystick axis generates continuous values in the range **‑1.0** to **1.0**.  
The mapping is:

| Axis | GDScript constant |
|------|-------------------|
| Left stick X | `JOY_AXIS_LEFT_X` |
| Left stick Y | `JOY_AXIS_LEFT_Y` |
| Right stick X | `JOY_AXIS_RIGHT_X` |
| Right stick Y | `JOY_AXIS_RIGHT_Y` |
| L2 | `JOY_AXIS_TRIGGER_LEFT` |
| R2 | `JOY_AXIS_TRIGGER_RIGHT` |

> **Dead zone**  
> Most controllers report small non‑zero values when the stick is at rest.  
> Use `Input.get_joy_axis_deadzone()` or implement your own threshold to avoid drift.

---

# 3. Accessing input in code

### 3.1 Simple button check

```gdscript
func _process(delta):
    if Input.is_action_pressed("ui_up"):
        move_up()
```

### 3.2 Reading raw stick values

```gdscript
var left_x = Input.get_joy_axis(0, JOY_AXIS_LEFT_X)  # 0 is the controller index
var left_y = Input.get_joy_axis(0, JOY_AXIS_LEFT_Y)

# Clamp to avoid drift
if abs(left_x) < 0.1: left_x = 0
if abs(left_y) < 0.1: left_y = 0

move_character(Vector2(left_x, left_y))
```

### 3.3 Handling button events

```gdscript
func _input(event):
    if event is InputEventJoypadButton:
        if event.pressed:
            print("Button ", event.button_index, " pressed")
```

---

# 4. Handling multiple controllers

Godot indexes controllers starting from **0**.  
You can query which controller a button came from:

```gdscript
func _input(event):
    if event is InputEventJoypadButton and event.pressed:
        print("Player %d pressed button %d" % [event.device, event.button_index])
```

Use `Input.get_connected_joypads()` to list active controllers.

---

# 5. Common pitfalls

| Problem | Solution |
|---------|----------|
| Stick drift | Increase dead zone, or use `Input.get_joy_axis_deadzone()` |
| Buttons not detected | Verify controller is recognized; check OS settings (XInput vs DirectInput) |
| Different button mapping on different controllers | Use Input Map per controller type or use generic XInput mapping if supported |

---

# 6. References

* [Godot Documentation – Input](https://docs.godotengine.org/en/stable/tutorials/inputs/index.html)  
* [Godot API – Input](https://docs.godotengine.org/en/stable/classes/class_input.html)  
* [Godot API – InputEventJoypadButton](https://docs.godotengine.org/en/stable/classes/class_inputeventjoypadbutton.html)  
* [Godot API – InputEventJoypadMotion](https://docs.godotengine.org/en/stable/classes/class_inputeventjoypadmotion.html)

---