**Note**: The following Markdown is a cleaned, structured version of the **Godot Engine – CPU Optimization** tutorial.  
It has been converted from the official Godot documentation, preserving headings, lists, code snippets, and important links.

---

# CPU optimization

Performance bottlenecks are the slowest parts of your game that limit its overall speed.  
Optimizing them involves *measuring*, *understanding* the problem, and applying the right fix.

## 1. Measuring performance

### 1.1 Why you need to measure

- Without data you cannot know what to optimize.
- Profiling reveals whether the issue is in **CPU**, **GPU**, or **memory**.

### 1.2 Tools provided by Godot

| Tool | What it measures | How to use |
|------|------------------|------------|
| **Profiler** (`Ctrl+Shift+P`) | Frame time, CPU/GPU usage, memory | Open from the **Debugger** panel. |
| **Stats** | Per‑frame CPU & GPU usage | Toggle from the **Editor** `Project Settings > Display > Debug > Enable stats`. |
| **Trace** | Detailed timing of script, physics, rendering | Enable in **Profiler** and select *Trace* tab. |
| **OpenGL/Vulkan debug layers** | GPU bottlenecks | Enable in **Project Settings > Rendering > Debug**. |

#### Quick start with the Profiler

```text
1. Play your scene.
2. Open the Profiler from the Debugger.
3. Observe the breakdown of the frame time.
4. Identify the largest bars (e.g., “Physics”, “Script”, “Rendering”).
```

## 2. Identifying common bottlenecks

| Category | Symptoms | Typical cause |
|----------|----------|---------------|
| **Physics** | Framerate drops when many bodies move | Too many collision shapes, high‑frequency updates |
| **Script** | Long *Frame time* spikes | Expensive loops, excessive `yield()` misuse |
| **Rendering** | Slow when many draw calls | Unoptimized meshes, high‑poly count, poor culling |
| **Memory** | Garbage collection pauses | Frequent object creation, large arrays/dictionaries |

### 2.1 Profiling example

```gdscript
# Example of a costly function
func expensive_loop():
    var sum = 0
    for i in range(1_000_000):
        sum += i
    return sum
```

Run this in a small test scene, profile, and observe a long bar in the **Script** section.  
Refactor by using a pre‑computed table or moving heavy work to a background thread.

## 3. Optimizing your code

### 3.1 Avoid repeated allocations

```gdscript
# Bad: creates a new Array each frame
var points = []
for i in range(100):
    points.append(Vector2(randf(), randf()))
```

```gdscript
# Good: reuse an Array
var points = []
func _ready():
    points.resize(100)   # pre‑allocate
func _process(_delta):
    for i in range(100):
        points[i] = Vector2(randf(), randf())
```

### 3.2 Use `@onready` sparingly

`@onready` runs once per node creation, but if the node is re‑instanced many times it can still cause overhead.  
When possible, cache references in `_ready()`.

### 3.3 Reduce function calls in hot loops

```gdscript
# Heavy
for child in get_children():
    child.do_something()

# Light
for i in range(get_child_count()):
    get_child(i).do_something()
```

### 3.4 Cache expensive lookups

```gdscript
var physics_server = PhysicsServer
```

## 4. Using multithreading

- Offload heavy calculations to a worker thread.
- Use `Thread.new()` and `Mutex` for synchronization.

```gdscript
var worker = Thread.new()
worker.start(self, "_heavy_task")

func _heavy_task(user_data):
    # perform heavy work
    return result
```

**Tip:** Avoid accessing the SceneTree or UI from background threads.

## 5. Reducing physics load

- **Collision layers**: Use the minimal set of layers needed.
- **Physics layers**: Combine similar objects into one *static* body where possible.
- **Collision shapes**: Prefer simple shapes (`RectangleShape2D`, `CircleShape2D`) over complex ones.

## 6. Managing rendering overhead

- **Batching**: Group sprites with the same material.
- **Viewport usage**: Keep the number of viewports to a minimum.
- **Culling**: Enable *Occlusion Culling* in the 3D editor.

```gdscript
# Enable occlusion culling for a MeshInstance
mesh_instance.occluder = true
```

## 7. Practical checklist

1. **Profile** before and after changes.  
2. **Target** the biggest time consumers.  
3. **Measure** incremental changes with `print()` or a custom FPS counter.  
4. **Repeat** until you hit your performance target.

## 8. Further reading

- [GPU optimization](https://docs.godotengine.org/en/stable/tutorials/performance/gpu_optimization.html)  
- [Optimizing server code](https://docs.godotengine.org/en/stable/tutorials/performance/using_servers.html)

---

> **Remember:**  
> Profiling is the key. Measure first, guess next, optimize last.  
> Over‑optimization before profiling can lead to wasted effort and maintenance headaches.