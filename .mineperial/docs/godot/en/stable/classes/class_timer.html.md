**Timer**  
*Godot Engine – Class reference*

---

## Overview
`Timer` is a simple countdown node that can be used to trigger logic after a delay or on a recurring interval.  
It inherits from `Node`.

### Key Features
| Feature | Description |
|---------|-------------|
| **`wait_time`** | The amount of time the timer runs for (seconds). |
| **`one_shot`** | If `true`, the timer stops automatically after the first timeout. |
| **`autostart`** | If `true`, the timer starts automatically when the node enters the scene tree. |
| **`pause_mode`** | Determines how the timer behaves when the scene is paused. (see enum) |
| **Signal** | `timeout()` – emitted when the timer reaches the end of its countdown. |

> **Tip:** Use `Timer` for delayed actions, cooldowns, or periodic events without needing to write manual time‑tracking code.

---

## Signals
| Signal | Parameters | Description |
|--------|------------|-------------|
| `timeout()` | – | Emitted when the timer’s countdown finishes. |

```gdscript
# Connect to the signal in code
timer.connect("timeout", Callable(self, "_on_timeout"))
```

---

## Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `wait_time` | `float` | `1.0` | Time in seconds the timer counts down. |
| `one_shot` | `bool` | `false` | When `true`, the timer stops after the first timeout. |
| `autostart` | `bool` | `false` | If `true`, the timer begins automatically on ready. |
| `pause_mode` | `int` (`PAUSE_MODE_PROCESS`, `PAUSE_MODE_STOP`, `PAUSE_MODE_INHERIT`) | `PAUSE_MODE_INHERIT` | Controls timer behavior while the scene tree is paused. |
| `paused` | `bool` | `false` (read‑only) | Whether the timer is currently paused. |

---

## Methods
| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `start(float time=0.0)` | `void` | `time: float` | Begins the timer. If `time` is `0.0` it uses the current `wait_time`. |
| `stop()` | `void` | – | Stops the timer and resets it. |
| `is_stopped()` | `bool` | – | Returns `true` if the timer is not running. |
| `is_paused()` | `bool` | – | Returns whether the timer is currently paused. |
| `set_wait_time(float time)` | `void` | `time: float` | Sets `wait_time`. |
| `get_wait_time()` | `float` | – | Returns the current `wait_time`. |
| `set_one_shot(bool value)` | `void` | `value: bool` | Sets `one_shot`. |
| `is_one_shot()` | `bool` | – | Alias for `get_one_shot()`. |
| `get_one_shot()` | `bool` | – | Returns the current `one_shot` value. |
| `set_autostart(bool value)` | `void` | `value: bool` | Enables or disables `autostart`. |
| `is_autostart()` | `bool` | – | Alias for `get_autostart()`. |
| `get_autostart()` | `bool` | – | Returns the current `autostart` value. |
| `set_pause_mode(int mode)` | `void` | `mode: int` | Sets the `pause_mode` enum. |
| `get_pause_mode()` | `int` | – | Returns the current `pause_mode`. |

### Example
```gdscript
var timer = Timer.new()
timer.wait_time = 2.0           # 2‑second delay
timer.one_shot = true
timer.connect("timeout", Callable(self, "_on_timer_timeout"))
add_child(timer)
timer.start()                   # starts immediately

func _on_timer_timeout():
    print("Timer finished!")
```

---

## Common Use Cases
- **Delayed actions**: Trigger an event after a specified time.
- **Cooldowns**: Regulate the rate of ability usage.
- **Repeating events**: Use `one_shot = false` and `autostart = true` to create a heartbeat or periodic checks.
- **Pause‑aware timers**: Set `pause_mode` to `PAUSE_MODE_PROCESS` to keep ticking during scene pauses, or to `PAUSE_MODE_STOP` to halt.

---

### Reference
- [Godot API Docs – Timer](https://docs.godotengine.org/en/stable/classes/class_timer.html)

---