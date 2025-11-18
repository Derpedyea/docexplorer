# Godot notifications  

Every `Object` in Godot implements a `_notification()` method.  
Its purpose is to allow the object to respond to a variety of engine‑level callbacks that may be relevant to it.  
For example, when a node is added to the scene tree the engine sends it the `NOTIFICATION_ENTER_TREE` notification.

---

## Process vs. `_physics_process()` vs. `*_input()`  

| Method | Frequency | Use‑case | Notes |
|--------|-----------|----------|-------|
| `_process(delta)` | Every frame | General per‑frame logic | `delta` is the time since the last frame. Use for animations, timers, non‑physics logic. |
| `_physics_process(delta)` | Fixed timestep (`Engine.get_physics_process_ticks_per_second()`) | Physics and movement | Use for everything that manipulates physics bodies or requires a fixed rate. |
| `_input(event)` | Every input event | Handle raw input | Call `event.is_action_pressed()` etc. |
| `_unhandled_input(event)` | Input events not handled by UI | Fallback input handling | Useful for global shortcuts or debug keys. |

```gdscript
func _process(delta):
    # Runs every frame
    update_animation(delta)

func _physics_process(delta):
    # Runs at the physics rate (default 60fps)
    move_and_slide(velocity)

func _input(event):
    if event.is_action_pressed("ui_accept"):
        print("Accept pressed")
```

---

## `_init()` vs. initialization vs. `export`  

| Phase | What happens | Where to put code |
|-------|--------------|-------------------|
| `_init()` | Called when the instance is created (e.g. `var obj = MyScene.new()` or `var obj = preload("res://MyScene.tscn").instantiate()`) | Constructor‑style logic that does *not* depend on node hierarchy or exported values. |
| Exported variables | Set in the editor or via code before the node enters the tree | Use to configure the node *before* `_ready()`. |
| `_ready()` | Called after the node and all its children are in the tree and all exported values are set | Safe place for most initialization that requires node access or exported vars. |

**Tip**  
Never use exported properties in `_init()` because they are not yet initialized. Instead, use `_ready()` or a dedicated initialization method.

---

## `_ready()` vs. `_enter_tree()` vs. `NOTIFICATION_PARENTED`  

| Callback | When called | Typical use |
|----------|-------------|-------------|
| `_enter_tree()` | As soon as the node is added to the scene tree, *before* its children are ready | Early‑stage setup that needs to happen before the node becomes fully active. |
| `_ready()` | After the node and all its children are ready and visible | Normal initialization, accessing children, connecting signals, etc. |
| `NOTIFICATION_PARENTED` | When the node receives a parent (via `add_child()` or instance) | Respond to dynamic re‑parenting events. |

```gdscript
func _enter_tree():
    print("Node just entered tree")

func _ready():
    print("Node is ready, children available")

func _notification(what):
    if what == NOTIFICATION_PARENTED:
        print("Got a new parent")
```

---

### References

- [Node](https://docs.godotengine.org/en/stable/classes/class_node.html) – notifications and lifecycle methods.  
- [Scene Tree](https://docs.godotengine.org/en/stable/tutorials/scene_manager.html).  
- [Input Handling](https://docs.godotengine.org/en/stable/tutorials/inputs/handling_inputs.html).  

---