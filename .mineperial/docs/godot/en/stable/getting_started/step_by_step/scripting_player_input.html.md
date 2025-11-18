**Listening to player input**

In this step‑by‑step tutorial we add actual player control to the `Sprite2D` node we created in the previous lesson.  
The example uses **GDScript** and the default input actions (`ui_up`, `ui_down`, `ui_left`, `ui_right`) that Godot creates automatically for you.

---

## Moving when pressing **“up”**

The easiest way to read input in Godot is with the `Input` class.  
Add a new script to the `Sprite2D` node (or replace the existing one) and put the following code in `_physics_process()`:

```gdscript
# script.gd
extends Sprite2D

# Movement speed in pixels per second
const SPEED := 200

func _physics_process(delta: float) -> void:
    var velocity: Vector2 = Vector2.ZERO

    # Check the four cardinal directions
    if Input.is_action_pressed("ui_up"):
        velocity.y -= 1
    if Input.is_action_pressed("ui_down"):
        velocity.y += 1
    if Input.is_action_pressed("ui_left"):
        velocity.x -= 1
    if Input.is_action_pressed("ui_right"):
        velocity.x += 1

    # Normalize so diagonal speed is not faster
    if velocity.length() > 0:
        velocity = velocity.normalized() * SPEED

    # Move the sprite
    position += velocity * delta
```

> **Tip:**  
> If you prefer to use the `move_and_slide()` function, attach a `CharacterBody2D` instead of `Sprite2D` and replace the last two lines with:
> ```gdscript
> velocity = move_and_slide(velocity)
> ```

---

## Complete script

Below is the whole script that you can copy directly into Godot:

```gdscript
# player.gd
extends Sprite2D

const SPEED := 200

func _physics_process(delta: float) -> void:
    var velocity: Vector2 = Vector2.ZERO

    if Input.is_action_pressed("ui_up"):
        velocity.y -= 1
    if Input.is_action_pressed("ui_down"):
        velocity.y += 1
    if Input.is_action_pressed("ui_left"):
        velocity.x -= 1
    if Input.is_action_pressed("ui_right"):
        velocity.x += 1

    if velocity.length() > 0:
        velocity = velocity.normalized() * SPEED

    position += velocity * delta
```

> **What if you want to use the old `InputEvent` API?**  
> The `_input(event: InputEvent)` callback can also be used, but reading the state of actions with `Input.is_action_pressed()` in `_physics_process()` is more straightforward for continuous movement.

---

## Summary

* **Input actions** (`ui_up`, `ui_down`, `ui_left`, `ui_right`) are the Godot way to map keys, touch, or gamepad input to a single named action.
* Use `Input.is_action_pressed()` inside `_physics_process()` (or `_process()`) to keep movement frame‑rate independent.
* Normalizing the velocity vector keeps the speed constant when moving diagonally.
* The snippet above can be reused for any 2D node; just replace `position` updates with `move_and_slide()` if you are working with a physics body.

---

**Next step:**  
[Using signals](/docs/godotengine.org/en/stable/getting_started/step_by_step/signals.html) – learn how to emit and connect signals in Godot.