**Using multiple threads**  
*Godot Engine (stable) documentation*  

---

Threads allow you to execute code in parallel with the main game thread.  
In Godot, the `Thread` class gives you a lightweight, C‑style thread API, plus a few helper classes (`Mutex`, `Semaphore`, `RWLock`, etc.) that help keep shared data safe.

> **⚠️ Thread‑unsafe** – The majority of Godot’s API must only be called from the main thread.  
> If you need to interact with the scene tree or other engine systems, use signals or a thread‑safe queue to hand data back to the main thread.

---

## 1.  Creating and starting a thread

```gdscript
var thread = Thread.new()

# Start the thread; the second argument is the method to run
thread.start(self, "_background_task", 42)
```

| Parameter | Description |
|-----------|-------------|
| `self`    | The object that owns the method to run. |
| `"_background_task"` | Name of the method that will run on the thread. |
| `42` (optional) | Argument passed to the method. |

### The worker method

```gdscript
func _background_task(arg):
    # Long‑running code here.
    var result = heavy_computation(arg)
    # Emit a signal when done (must be done on the main thread)
    emit_signal("task_completed", result)
```

> **Tip** – Return a value from the worker function; it will be accessible via `Thread.get()` after the thread finishes.

---

## 2.  Waiting for a thread

```gdscript
# Wait for the thread to finish (blocking call).
thread.wait_to_finish()
```

Use `wait_to_finish()` if you need to halt execution until the thread completes.  
For non‑blocking, connect to a signal from the worker and handle the result asynchronously.

---

## 3.  Thread lifecycle

| Method | Purpose |
|--------|---------|
| `Thread.new()` | Create a new thread instance |
| `Thread.start(object, method_name, arg)` | Launch a worker |
| `Thread.wait_to_finish()` | Block until the worker terminates |
| `Thread.set_name(name)` | Give the thread a readable name |
| `Thread.get_id()` | Retrieve the OS thread ID |
| `Thread.free()` | Clean up after the thread (do this after it has finished) |

> **Caution** – Calling `start()` on an already‑running thread will raise an error. Always call `wait_to_finish()` or `free()` first.

---

## 4.  Synchronizing shared data

### 4.1  Mutex

```gdscript
var mutex = Mutex.new()
var shared_value = 0

func _background_task(_):
    for i in range(1000):
        mutex.lock()
        shared_value += 1
        mutex.unlock()
```

### 4.2  Semaphore

```gdscript
var sem = Semaphore.new()
var ready = false

func _background_task(_):
    # ...do work...
    sem.post()          # signal that the work is ready

func _process(delta):
    if sem.try_wait():   # non‑blocking check
        ready = true
```

---

## 5.  Thread‑safe API

Godot exposes a set of methods that are safe to call from worker threads.  
They are prefixed with `thread_safe_` in the C++ API or documented in GDScript as `thread_safe_*`.

**Common thread‑safe functions**

| API | Usage |
|-----|-------|
| `OS.set_window_title()` | Change the window title |
| `OS.set_time_scale()` | Adjust physics timestep |
| `RandomNumberGenerator` | Generate random numbers |

> **Never** call `get_tree()` or modify `Node`s from a worker thread. Use `call_deferred()` or signals to marshal calls back to the main thread.

---

## 6.  Example: Background file download

```gdscript
var thread = Thread.new()

func _ready():
    thread.start(self, "_download_file")

func _download_file(_):
    var client = HTTPClient.new()
    client.connect_to_host("example.com")
    # … download data …
    emit_signal("download_finished", data)

func _on_download_finished(data):
    # This runs on the main thread
    texture = ImageTexture.new()
    texture.load_from_data(data)
```

---

## 7.  Tips & gotchas

- **Keep it small** – Threads are lightweight, but each one consumes OS resources.  
- **Avoid heavy locking** – Long lock durations reduce concurrency; break work into smaller chunks.  
- **Use `call_deferred()`** – Safely schedule a method on the main thread from a worker.  
- **Profile first** – Threading helps only when the main loop is blocked. Use `Profiler` to confirm the bottleneck.  
- **Cleanup** – Always free the thread after it has finished to avoid dangling references.

---

## 8.  Further reading

- [`Thread`](https://docs.godotengine.org/en/stable/classes/class_thread.html) – Full API reference  
- [`Mutex`](https://docs.godotengine.org/en/stable/classes/class_mutex.html)  
- [`Semaphore`](https://docs.godotengine.org/en/stable/classes/class_semaphore.html)  
- [Thread‑safe APIs](https://docs.godotengine.org/en/stable/tutorials/performance/thread_safe_apis.html)

---