**Custom Godot servers**  
================================

*This page is a technical reference on extending the Godot Engine by adding custom servers. The content below is a clean Markdown conversion of the original documentation.*  

---

### 1. Introduction

Godot implements multi‑threading as **servers** – lightweight daemons that manage data, process it, and push the result.  
Servers implement the mediator pattern; they interpret resource requests from the engine, perform the work (often in a dedicated thread), and then return the results.

> **Why use servers?**  
> * Encapsulate complex, resource‑heavy logic in a separate thread.  
> * Keep the main rendering and physics loops responsive.  
> * Provide a clean API for plugins and engine extensions.

---

### 2. Core Server Concepts

| Term | Description |
|------|-------------|
| **Server** | A component that runs in its own thread, handles a specific subsystem (e.g., physics, audio, networking). |
| **Mediator** | The server receives high‑level requests from the engine, translates them into low‑level operations, and returns results. |
| **Resource** | Any data that the engine loads or manipulates – textures, meshes, scenes, etc. |
| **Threading model** | Servers run in separate threads but communicate with the main thread via signals and data queues. |

---

### 3. Creating a Custom Server

1. **Define the Server Class**  
   Extend `class_name MyServer` and inherit from `Reference`.  
   Override `_init()`, `_process(delta)`, and any custom methods needed.

2. **Register the Server**  
   Use `ServerManager::register_server("my_server", MyServer.new());`  
   This makes the server available to the engine’s internal systems.

3. **Handle Resource Requests**  
   Implement methods like `load_resource(path)`, `unload_resource(path)`, etc.  
   These will be called by the engine when it needs to load or free data.

4. **Thread Management**  
   - Use `Thread.new()` to start your server’s loop.  
   - Communicate via `Mutex`, `ConditionVariable`, or Godot’s `Signal` system to avoid race conditions.

5. **Expose to GDScript** (Optional)  
   If you want the server to be usable from scripts, expose methods via the `GDExtension` or `GDNative` bindings.

---

### 4. Sample Code

```gdscript
# my_server.gd
extends Reference

class_name MyServer

var thread : Thread
var running = false

func _init() -> void:
    thread = Thread.new()
    running = true
    thread.start(self, "_server_loop")

func _server_loop(arg) -> void:
    while running:
        # Process queued tasks
        var task = _fetch_next_task()
        if task:
            _handle_task(task)
        OS.delay_msec(10)  # Prevent 100% CPU usage

func load_resource(path: String) -> Resource:
    # Custom loading logic
    var res = ResourceLoader.load(path)
    return res

func _exit_tree() -> void:
    running = false
    thread.wait_to_finish()
```

Register it in the engine’s initialization code:

```cpp
// In your engine plugin or module
ServerManager::register_server("my_server", memnew(MyServer));
```

---

### 5. Extending Existing Servers

You can also subclass and extend built‑in servers (e.g., physics or audio):

```gdscript
extends PhysicsServer3D

func _init() -> void:
    ._init()
    # Override or add new functionality
```

Remember to call `ServerManager::replace_server("physics_3d", new_server)` to swap the default.

---

### 6. Debugging and Profiling

* **Enable Server Logging** – set the environment variable `GODOT_SERVER_LOG=1` to output logs.  
* **Thread Profiling** – use `Profiler::add_task("MyServer")` to monitor execution time.  
* **Signal Monitoring** – connect to the server’s signals to debug state changes.

---

### 7. Example Use‑Cases

| Use‑Case | Typical Server |
|----------|----------------|
| Custom physics (e.g., voxel simulation) | `VoxelPhysicsServer` |
| Advanced audio mixing | `DSPAudioServer` |
| Networked multiplayer logic | `CustomNetworkServer` |
| Machine learning inference | `MLServer` |

---

### 8. Resources

* Godot Engine source code: `server/` directory.  
* GDExtension documentation for extending engine subsystems.  
* Community plugins that showcase custom server usage.

---

> *Note: Custom server development requires a solid understanding of Godot’s core architecture and C++ integration. Always test on a separate branch before merging into production projects.*