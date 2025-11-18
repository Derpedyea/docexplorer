**Custom performance monitors**

Godot’s Debugger panel has a “Monitors” bottom panel that tracks various built‑in
performance values.  
You can add your own monitors to this panel, which is handy for logging
anything you want to observe while running a game – for example
frame‑rate, memory usage, or custom game‑specific metrics.

---

## How it works

* Each monitor is a value that is updated once per frame.
* Godot exposes a small API that allows you to register a monitor
  and supply a callback that returns the current value.
* The monitor’s name, description, and unit are displayed in the
  debugger panel, along with a graph of its values over time.

---

## Adding a monitor in GDScript

```gdscript
# res://main.gd
extends Node

func _ready():
	# Register a monitor named "Custom Counter"
	Debug.add_monitor(
		"name": "Custom Counter",
		"description": "Counts something in the game",
		"unit": "items",
		"callback": _get_custom_counter
	)

# The callback must return a float (or int) representing the current value
func _get_custom_counter() -> float:
	return my_counter_value
```

You can enable or disable monitors from the editor:

```
Debug.set_monitor_enabled("Custom Counter", true)
```

The monitor will now appear in the Debugger → Monitors panel and
update every frame.

---

## Adding a monitor in C++ (GDExtension)

```cpp
#include "godot_cpp/core/class_db.hpp"
#include "godot_cpp/core/memory.hpp"
#include "godot_cpp/variant/variant.hpp"

using namespace godot;

static float get_custom_counter() {
    // Your logic here; return a float value
    return 42.0f;
}

void register_custom_monitor() {
    // Create a Monitor struct
    Debug::Monitor monitor;
    monitor.name = "Custom Counter";
    monitor.description = "Counts something in the game";
    monitor.unit = "items";
    monitor.callback = &get_custom_counter;  // pointer to callback

    Debug::add_monitor(monitor);
}

extern "C" void GDN_EXPORT godot_gdnative_init(godot_gdnative_init_options *o) {
    // Register the monitor during native library init
    register_custom_monitor();
}
```

After building the GDExtension and loading it in your project,
the monitor will appear in the same way as the GDScript example.

---

## Tips

* **Keep callbacks cheap** – the monitor is polled every frame.
* **Use descriptive names** – this helps you and others identify what
  is being measured.
* **Toggle visibility** in the Debugger panel to reduce overhead
  if you don’t need a monitor while debugging.

---

### Further reading

* [Debugger – Monitors](https://docs.godotengine.org/en/stable/tutorials/scripting/debugger.html#monitors)
* [Custom GDScript](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript.html)

---