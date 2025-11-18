**AnimationNodeStateMachinePlayback**  
*Godot Engine – Class Reference*  

---

### Overview
`AnimationNodeStateMachinePlayback` is a `Resource` that gives you programmatic control over an `AnimationNodeStateMachine` inside an `AnimationTree`. It lets you query the current state, trigger transitions, and manipulate the state machine’s flow at runtime.

---

### Inheritance

```
Resource < RefCounted < Object > > → AnimationNodeStateMachinePlayback
```

---

### Key Methods

| Method | Description |
|--------|-------------|
| `get_current_node()` | Returns the name of the currently active state. |
| `transition_to(state_name)` | Immediately transitions to the specified state. |
| `can_transition_to(state_name)` | Checks whether a transition to the given state is allowed. |
| `has_transition(path)` | Checks if a transition exists between two states. |
| `set_process_callback(callback)` | Sets a callback to be called every frame during state updates. |
| `has_state(state_name)` | Verifies that a state exists in the state machine. |
| `has_transition_path(path)` | Checks if a specific transition path exists. |
| `set_custom_process_callback(callback)` | (Godot 4.2+) Allows custom processing logic for the state machine. |

> *(The full list of methods and properties can be found in the official Godot API reference.)*

---

### Typical Usage

```gdscript
var playback : AnimationNodeStateMachinePlayback = $AnimationTree.get("parameters/playback")

func _ready() -> void:
    # Start the character in the "idle" state
    playback.travel("idle")

func _input(event):
    if event.is_action_pressed("run"):
        playback.travel("run")
    elif event.is_action_pressed("jump"):
        playback.travel("jump")
```

The `travel()` (or `transition_to()`) method is the primary way to change the current state. You can also query the current state with `get_current_node()` to make decisions in your game logic.

---

### Notes

* The state machine’s transitions are defined in the AnimationTree editor. The `AnimationNodeStateMachinePlayback` class simply exposes them to GDScript.
* Because it inherits from `Resource`, it can be reused across multiple `AnimationTree` instances if desired.
* Transition paths can be checked programmatically, which is useful for debugging or building dynamic animation flows.

---

### Related Classes

- **AnimationNodeStateMachine** – The node that owns the state machine logic.  
- **AnimationNodeStateMachineTransition** – Defines a single transition between states.  

---