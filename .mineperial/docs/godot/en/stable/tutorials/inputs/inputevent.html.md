**Using InputEvent** – *Godot Engine (stable) documentation*

---

## What is `InputEvent`?

`InputEvent` is a special built‑in type that Godot uses to represent any kind of input—keyboard, mouse, touch, joystick, etc.  
It contains all the data needed for the engine to know *what* happened, *when* it happened, and *which* device caused it.

---

## Basic usage

```gdscript
func _input(event):
    if event is InputEventMouseButton:
        if event.button_index == BUTTON_LEFT and event.pressed:
            print("Left mouse button clicked")
```

`_input(event)` is called for every input event.  
You can also query the state of keys, mouse, and other devices directly:

```gdscript
if Input.is_action_pressed("ui_up"):
    # Move the player up
```

---

## Event types

| Event type | Description | Common properties |
|------------|-------------|-------------------|
| `InputEventKey` | Keyboard input | `scancode`, `unicode`, `pressed`, `shift`, `alt`, `control`, `meta` |
| `InputEventMouseButton` | Mouse button | `button_index`, `pressed`, `position` |
| `InputEventMouseMotion` | Mouse movement | `position`, `relative`, `speed` |
| `InputEventMouseButton` | Touch screen | `pos`, `pressed`, `double_click` |
| `InputEventJoypadButton` | Joystick button | `joy_index`, `button_index`, `pressed` |
| `InputEventJoypadMotion` | Joystick axis | `joy_index`, `axis_index`, `axis_value` |

---

## Handling input in code

1. **Override `_input(event)`** – receives raw `InputEvent` objects.  
   ```gdscript
   func _input(event):
       if event is InputEventKey and event.scancode == KEY_SPACE:
           do_something()
   ```

2. **Use action mappings** – defined in the project settings (`Project > Project Settings > Input Map`).  
   ```gdscript
   if Input.is_action_pressed("jump"):
       jump()
   ```

3. **Custom event handling** – create your own subclass of `InputEvent` if needed.  
   ```gdscript
   class CustomEvent extends InputEvent:
       var my_data
   ```

---

## Input Event propagation

- Events are delivered to the node that currently has focus first.
- If not handled, they bubble up the scene tree.
- Use `event.accept()` to stop further propagation.

```gdscript
func _input(event):
    if event is InputEventMouseButton and event.button_index == BUTTON_WHEEL_UP:
        event.accept()   # stop the event from reaching other nodes
```

---

## Example: Moving a character

```gdscript
extends CharacterBody3D

var speed = 5.0

func _physics_process(delta):
    var direction = Vector3.ZERO
    if Input.is_action_pressed("move_left"):
        direction.x -= 1
    if Input.is_action_pressed("move_right"):
        direction.x += 1
    if Input.is_action_pressed("move_forward"):
        direction.z -= 1
    if Input.is_action_pressed("move_back"):
        direction.z += 1
    if direction != Vector3.ZERO:
        direction = direction.normalized()
        velocity.x = direction.x * speed
        velocity.z = direction.z * speed
    else:
        velocity.x = move_toward(velocity.x, 0, speed)
        velocity.z = move_toward(velocity.z, 0, speed)
    move_and_slide()
```

---

## FAQ

- **Why does `InputEvent` contain so many subclasses?**  
  Godot keeps the input model unified. All inputs are ultimately `InputEvent` objects so the same API can handle keyboard, mouse, touch, joystick, and even game‑pad events.

- **Can I create custom actions?**  
  Yes – add them in *Project Settings → Input Map* and bind keys, buttons, or axes. Then check with `Input.is_action_*` functions.

- **What about multi‑touch?**  
  Each touch point is delivered as a separate `InputEventScreenTouch` or `InputEventScreenDrag`.

---

## Resources

- [Godot documentation – Input](https://docs.godotengine.org/en/stable/tutorials/inputs/index.html)  
- [Godot API – InputEvent](https://docs.godotengine.org/en/stable/classes/class_inputevent.html)  
- [Godot API – Input](https://docs.godotengine.org/en/stable/classes/class_input.html)  

---