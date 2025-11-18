**Idle and Physics Processing**  
*Godot Engine – Stable Documentation*  

---

### Overview  

In Godot, every frame the engine runs a **game loop** that updates the state of your scene before drawing it to the screen.  
Two virtual methods are provided on the `Node` class to perform these updates:

| Method | When it runs | Typical use |
|--------|--------------|-------------|
| `Node._process(delta)` | Every frame (≈ 60 fps, but may vary) | Animation, UI updates, non‑physics logic |
| `Node._physics_process(delta)` | Fixed‑rate (default 60 Hz) | Physics calculations, rigid‑body movement |

Both methods receive a `delta` value that represents the time since the previous call.  
`_physics_process(delta)` is called using the physics engine’s fixed timestep, so it is deterministic and ideal for physics‑based code.  
`_process(delta)` runs in sync with the rendering frame and therefore may be called at variable rates.

> **Tip** – If you need to perform something on every frame *and* also want physics‑accurate movement, place the logic in `_physics_process(delta)` and use `delta` as the physics timestep.  

---

## Using the Process Functions

### Enabling / Disabling

By default, both `set_process(true)` and `set_physics_process(true)` are enabled.  
You can change this in code or through the Inspector:

```gdscript
# Enable or disable processing
func _ready():
    set_process(false)          # Disable _process
    set_physics_process(true)   # Ensure _physics_process is enabled
```

Alternatively, use the **Process Mode** property on the Inspector:

* **Inherit** – Uses the mode of the parent node.  
* **Always** – Always runs, regardless of pause state.  
* **When Paused** – Runs only when the scene tree is paused.  
* **Never** – Never runs.

### Example

```gdscript
extends Node2D

func _ready() -> void:
    # Enable both callbacks
    set_process(true)
    set_physics_process(true)

func _process(delta: float) -> void:
    # Called every frame
    print("Process delta:", delta)

func _physics_process(delta: float) -> void:
    # Called at fixed rate
    print("Physics delta:", delta)
```

### Order of Callbacks

The engine calls callbacks in the following order each frame:

1. `_input(event)` – Called before the physics step.  
2. `_unhandled_input(event)` – Called after all input is processed, if not handled.  
3. `_process(delta)` – Called once per frame.  
4. **Physics step** – The physics engine runs.  
5. `_physics_process(delta)` – Called once per physics frame.  
6. `_physics_process_frame(delta)` – Called after physics step if `physics_process` is enabled.  

Understanding this order helps avoid surprises, e.g., updating physics bodies in `_process` can cause non‑deterministic results.

---

## Working with `delta`

* `delta` in `_process(delta)` is the frame time, which may vary (e.g., 0.016 s on 60 fps, 0.033 s on 30 fps).  
* `delta` in `_physics_process(delta)` is **fixed** to the physics timestep (default 1/60 s).  

Use the fixed delta for physics calculations:

```gdscript
func _physics_process(delta):
    var velocity = Vector2(100, 0)
    position += velocity * delta   # Move consistently regardless of frame rate
```

---

## Pause‑Safe Processing

If you want a node to keep processing while the game is paused, set its **Process Mode** to **Always**.  
Example for a background animation that should keep moving:

```gdscript
# In the Inspector
Process Mode: Always
```

---

## Practical Use‑Case

### Moving a RigidBody2D

```gdscript
extends RigidBody2D

func _physics_process(delta):
    if Input.is_action_pressed("ui_right"):
        apply_impulse(Vector2.ZERO, Vector2(200, 0) * delta)
```

### Updating UI Elements

```gdscript
extends Control

func _process(delta):
    $TimerLabel.text = str(get_tree().get_time() + delta)
```

---

## Summary

* **`_process(delta)`** – Variable‑rate frame callback; ideal for non‑physics logic.  
* **`_physics_process(delta)`** – Fixed‑rate physics callback; ideal for physics and deterministic logic.  
* Use the **Process Mode** to control whether a node runs during pause, always, or never.  
* Remember to use the correct `delta` for physics calculations to keep motion smooth and deterministic.

--- 

**Further Reading**  
- [Physics Processing in Godot](https://docs.godotengine.org/en/stable/tutorials/scripting/physics_process.html)  
- [Node Documentation – _process() and _physics_process()](https://docs.godotengine.org/en/stable/classes/class_node.html)

---