**Background loading**  
*Godot Engine (stable) documentation*

---

### Why background loading matters

When switching the main scene of your game (e.g. going to a new level), you often want to show a loading screen that displays a progress bar or animation. Loading resources synchronously blocks the main thread and can cause the game to freeze for a noticeable amount of time. **Background loading** (also called *asynchronous loading*) allows the engine to load scenes, textures, audio, and other resources on a separate thread while the main thread remains responsive.

---

## Basic concepts

| Term | Meaning |
|------|---------|
| **Resource** | Any data file that Godot can load (e.g., scenes, meshes, textures, audio). |
| **ResourceLoader** | Godot’s built‑in API for loading resources. |
| **LoadThreaded** | API that starts a background thread to load a resource. |
| **LoadInteractive** | API that loads a resource in small steps, giving you progress updates. |

---

## Using `ResourceLoader.load_interactive()`

`load_interactive()` returns a `ResourceInteractiveLoader` that lets you poll the loading progress and finish the load only when you’re ready. This is useful for showing a progress bar.

```gdscript
var loader = ResourceLoader.load_interactive("res://my_scene.tscn")
var progress = 0

func _process(delta):
    # Keep polling until finished
    var status = loader.poll()
    if status == OK:
        # Loading finished
        var scene = loader.get_resource()
        get_tree().change_scene_to(scene)
    elif status == ERR_FILE_EOF:
        # Still loading
        progress = loader.get_stage() / loader.get_stage_count()
        $LoadingProgressBar.value = progress * 100
```

*Key points*  
- Call `poll()` each frame (or at a lower frequency).  
- Use `get_stage()` and `get_stage_count()` to compute progress.  
- `get_resource()` returns the fully loaded resource once finished.

---

## Using `ResourceLoader.load_threaded()`

`load_threaded()` loads a resource on a separate thread and signals when it’s ready. It’s simpler than the interactive API when you don’t need fine‑grained progress.

```gdscript
func _ready():
    # Start asynchronous loading
    ResourceLoader.load_threaded("res://heavy_scene.tscn", "PackedScene", true)
    # Connect to the signal when the load is finished
    get_tree().connect("threaded_resource_load", self, "_on_resource_loaded")

func _on_resource_loaded(path, resource):
    if path == "res://heavy_scene.tscn":
        get_tree().change_scene_to(resource)
```

> **Tip** – The third argument (`true`) enables the resource to be retained in memory after loading, so you can reuse it without reloading.

---

## Example: A loading screen

1. **Create a Loading scene** (`Loading.tscn`) with a `ProgressBar` and a `Timer` to poll the loader.  
2. **Start loading** the next scene from the main game or from the loading screen itself.

```gdscript
# Loading.gd
extends Control

var loader : ResourceInteractiveLoader
var target_path : String

func start_loading(path: String):
    target_path = path
    loader = ResourceLoader.load_interactive(path)

func _process(delta):
    if loader:
        var status = loader.poll()
        if status == OK:
            var scene = loader.get_resource()
            get_tree().change_scene_to(scene)
            loader = null
        elif status == ERR_FILE_EOF:
            var progress = loader.get_stage() / loader.get_stage_count()
            $ProgressBar.value = progress * 100
```

In your main scene, simply call:

```gdscript
var loading_scene = preload("res://Loading.tscn").instance()
add_child(loading_scene)
loading_scene.start_loading("res://NextLevel.tscn")
```

---

## Handling errors

Both APIs return error codes. Handle them gracefully:

```gdscript
var status = loader.poll()
if status == ERR_FILE_NOT_FOUND:
    push_error("Resource not found.")
elif status == ERR_CANT_OPEN:
    push_error("Cannot open resource file.")
```

---

## Caveats

- **Thread safety**: Most Godot objects are not thread‑safe. Only `ResourceLoader` and `ResourceInteractiveLoader` are safe to use on background threads. Do not modify scene nodes or the scene tree from a background thread.  
- **Resource types**: Some resources (e.g., `AnimationPlayer` with complex data) may take longer to load. Test load times on target devices.  
- **Memory usage**: Keeping many resources loaded simultaneously can increase memory consumption. Use `ResourceLoader.unload()` to free unused resources if necessary.

---

## Related tutorials

- [File paths in Godot projects](data_paths.html) – for locating resources.  
- [Using the editor’s built‑in loader](../editor/...) – for debugging load issues.  

---

**References**

- [Godot Docs – ResourceLoader](https://docs.godotengine.org/en/stable/classes/class_resourceloader.html)  
- [Godot Docs – ResourceInteractiveLoader](https://docs.godotengine.org/en/stable/classes/class_resourceinteractiveloader.html)  

---