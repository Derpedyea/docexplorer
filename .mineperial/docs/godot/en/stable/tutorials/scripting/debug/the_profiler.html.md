# The Profiler

The Godot profiler is a powerful in‑editor tool that lets you analyse how your game spends its time.  
It visualises CPU, GPU, memory usage and more, and can be used for both quick checks and deep dives into performance bottlenecks.

> **Tip** – The Profiler is only available when you run the project from the editor (not from an exported executable).  
> It works with all scripting languages, GDExtension modules and native C++ code.

---

## Opening the Profiler

1. **Launch the game** from the editor (Play ► Play Current Scene or Play the project).  
2. Open the **Debug panel** → **Profiler** tab.  
   * Shortcut: `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS) when the editor has focus.  

The profiler window is split into three tabs by default: **CPU**, **GPU** and **Memory**.  
You can also enable the **Physics** and **Script** tabs through the `+` icon on the top right.

---

## CPU Profiling

The CPU tab shows a tree of all calls executed during a frame, together with the time spent in each:

```
Frame  1.0  ms
├─ _process (5 ms)
├─ _physics_process (1 ms)
├─ my_script.gd::_ready (0.1 ms)
└─ …
```

### Key features

| Feature | What it shows |
|---------|---------------|
| **Call hierarchy** | Each function call as a node in the tree, indented by call depth. |
| **Time per frame** | The amount of CPU time (in ms) spent inside each function. |
| **Calls per frame** | How many times a function is executed in the current frame. |
| **Total** | Cumulative time over all frames. |
| **Reset** | Clears all counters; useful before a fresh run. |
| **Freeze** | Pauses updates to keep the same data while you inspect it. |

### Common use‑cases

- **Find slow functions**: look for nodes with large CPU times.  
- **Detect tight loops**: a function called thousands of times with a small time slice can be a performance hot‑spot.  
- **Validate optimisations**: run before/after a change and compare the total CPU time.

---

## GPU Profiling

The GPU tab works like the CPU tab but tracks rendering and GPU compute workloads.

- **Render calls** – Each draw call with its cost in milliseconds.  
- **Draw order** – Allows you to see which objects are rendered first.  
- **Texture usage** – Shows which textures are bound and how often.  

Use the GPU tab when your game looks laggy but the CPU profiler reports low usage; this usually points to a rendering bottleneck.

---

## Memory Profiling

The Memory tab shows real‑time allocations and usage.

- **Allocated** – Total memory currently in use.  
- **Freed** – Amount freed in the last frame.  
- **Peak** – Highest usage reached during the session.

You can toggle between **"Live"** (real‑time) and **"Snapshot"** (single frame) views.  
For detailed object allocation tracking, enable the **“Object Details”** option in the settings.

---

## Physics Profiling

If the **Physics** tab is active, it visualises:

- **Collision checks** – Number of collision checks per frame.  
- **Collision pairs** – Total number of objects checked against each other.  
- **Rigid bodies** – Time spent updating each rigid body.  

Useful for games that are physics‑heavy (platformers, puzzle games, etc.).

---

## Script Profiling

The **Script** tab shows profiling information for GDScript, C# and GDExtension code:

- **Method execution** – Which methods are called most often.  
- **GC activity** – Garbage‑collection pauses (if any).  
- **Script allocation** – Memory used by scripts.

This is especially handy when profiling large GDScript projects.

---

## Custom Performance Monitors

You can add custom monitors that appear in the Profiler.

```gdscript
# Example: Monitor how many times a function is called
@onready var monitor = Profiler.new()
func _ready():
    monitor.set_name("MyCounter")
    monitor.set_value(0)
    my_signal.connect(_on_my_signal)
func _on_my_signal():
    monitor.set_value(monitor.get_value() + 1)
```

The monitor will then show up in the **Custom** tab, letting you track arbitrary metrics.

---

## Common Performance Pitfalls

| Issue | Symptom | Fix |
|-------|---------|-----|
| **Too many nodes** | Low FPS, high memory usage | Group nodes, use instancing, or hide unused nodes. |
| **Frequent GDScript reallocations** | GC spikes | Use `Array.resize()` and reuse objects. |
| **Large textures** | GPU stalls | Compress textures and use mipmaps. |
| **Synchronous file I/O** | Frame drops | Load resources asynchronously with `ResourceLoader.load_interactive()` or `preload()`. |

---

## Exiting the Profiler

- Click **Stop** to end profiling.  
- Use **Reset** to clear all counters and start fresh.  
- If you need a full log, go to `Debug > Profile > Save` to export a CSV file for later analysis.

---

## Further Reading

- [Debug Panel](../debugger_panel.html) – Overview of all debugging tools.  
- [Custom Performance Monitors](../custom_performance_monitors.html) – Create your own metrics.  
- [Profiling with GDExtensions](../../../../../tutorials/scripting/debug/gdextension_performance.html) – Profile native modules.  

---

*© 2005‑2025 — Godot Engine, an open‑source project.*