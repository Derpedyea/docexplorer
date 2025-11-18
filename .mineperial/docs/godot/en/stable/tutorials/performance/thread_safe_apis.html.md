**Thread‑safe APIs** – Godot Engine Documentation  
================================================================

> **Thread usage in Godot**  
> Threads are used to balance processing power across CPUs and cores.  
> Godot supports multithreading, but the engine is *not* fully thread‑safe.  
> Below is a list of ways multithreading can be used in different parts of
> the engine and a short guide to what you can safely call from a worker
> thread.

---

## 1.  What is “thread‑safe” in Godot?

* A thread‑safe function is one that can be called from any thread without
  corrupting the engine’s state or causing a crash.
* Functions that are **not** marked thread‑safe should only be called
  from the main (scene‑tree) thread.
* Some operations (e.g. resource loading, audio generation, low‑level
  math) are safe; others (e.g. scene‑tree manipulation, drawing,
  network API) are not.

---

## 2.  Creating and using threads

```gdscript
var my_thread = Thread.new()
my_thread.start(self, "_my_thread_func", null)

func _my_thread_func(arg):
    # Do heavy work here
    # ...
    # When you need to update the scene tree, queue a call
    call_deferred("update_from_thread")
    # Or use a signal
    emit_signal("thread_done", result)

func update_from_thread():
    # Runs on the main thread
    $Label.text = "Finished!"
```

* `Thread.start()` takes a callable (method name or `Callable`).
* Use `call_deferred()` or signals to safely interact with the scene tree
  from a worker thread.
* Always `Thread.wait_to_finish()` before freeing the thread object.

---

## 3.  Thread‑safe APIs

Below is a (non‑exhaustive) list of API functions and methods that are safe
to call from any thread. The table is grouped by subsystem.

| Subsystem | Thread‑safe function | Notes |
|-----------|----------------------|-------|
| **OS** | `OS.get_ticks_msec()`<br>`OS.get_ticks_usec()`<br>`OS.get_unix_time()`<br>`OS.get_datetime()`<br>`OS.has_feature()` | Purely read‑only queries. |
| **Resource Loading** | `ResourceLoader.load_interactive()`<br>`ResourceLoader.load_threaded()`<br>`ResourceLoader.load_threaded_request()`<br>`ResourceLoader.load_threaded_get()` | Allows loading resources on background threads. |
| **Audio** | `AudioServer.mix()` (via `AudioStreamPlayer` internals)<br>`AudioServer.get_stream_player_count()` | Audio mixing is handled by the engine, but you can query state. |
| **Networking** | `HTTPClient` (methods like `request()`, `poll()` are thread‑safe if used in isolation). | Be careful with signals – use `call_deferred()`. |
| **Math** | All static `Math` functions (e.g. `Math.randf()`, `Vector2/3` constructors) | Pure math, no shared state. |
| **File I/O** | `FileAccess.open()` / `FileAccess.get_buffer()` (when using a separate `FileAccess` instance) | Do not share a single `FileAccess` object between threads. |
| **Misc** | `String`, `Array`, `Dictionary` methods that only read data | Mutating operations are not thread‑safe. |

> **Tip** – Always create a separate instance of an object for each thread
> unless the API is explicitly documented as safe.

---

## 4.  Non‑thread‑safe operations

* Scene‑tree manipulation (`add_child`, `remove_child`, `queue_free`)
* Any node method that touches rendering or input
* Signals emitted from nodes (unless routed with `call_deferred`)
* Accessing `ProjectSettings`, `GlobalVariables`, or any editor‑only APIs

If you need to perform such operations from a worker thread,
queue the work to run on the main thread using `call_deferred()`,
`Object.call_deferred()`, or a signal.

---

## 5.  Example: Background resource loading

```gdscript
var load_thread = Thread.new()

func _ready():
    load_thread.start(self, "_load_resource", "res://my_texture.png")

func _load_resource(path):
    var res = ResourceLoader.load_threaded(path)
    while not ResourceLoader.has_loaded(path):
        OS.delay_msec(10)  # Keep thread alive while loading
    var texture = ResourceLoader.load_threaded_get(path) as Texture2D
    # Switch back to main thread to apply the texture
    call_deferred("_apply_texture", texture)

func _apply_texture(tex):
    $Sprite.texture = tex
```

---

## 6.  Summary

* **Use threads** for CPU‑bound work that does not touch the scene tree.
* **Queue work** back to the main thread for any scene‑tree or rendering
  changes.
* Refer to the official **Thread‑safe APIs** section in the documentation for
  the most up‑to‑date list and any platform‑specific notes.

Feel free to contribute to this list or open an issue if you discover a
function that is incorrectly labeled!