**PathFollow2D**  
*Godot Engine – Class reference (stable)*  

---

### Inheritance

```
Object
└─ Node
   └─ CanvasItem
      └─ Node2D
         └─ PathFollow2D
```

### Overview  

`PathFollow2D` is a helper node that automatically positions and optionally orients its child(ren) along a `Path2D`.  
It works by sampling the `Path2D` at a given distance (the *offset*) and applying that point’s coordinates to its own transform.  
This node is useful for moving characters, cameras, or any object along a predefined 2‑D path.

> **Tip** – When you want to create a “follow‑path” animation, add a `Path2D` node, set its points, then make a `PathFollow2D` child of the `Path2D`. Finally, add the object you want to move as a child of the `PathFollow2D`.

---

### Signals

| Signal | Description |
|--------|-------------|
| `offset_changed` | Emitted when the offset value changes. |
| `progress_changed` | Emitted when the progress (distance along the path) changes. |
| `progress_ratio_changed` | Emitted when the progress ratio changes. |
| `position_changed` | Emitted when the node’s position is updated by the path. |
| `rotation_changed` | Emitted when the node’s rotation is updated by the path. |

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `offset` | `float` | `0.0` | Distance (in pixels) from the start of the path. |
| `progress` | `float` | `0.0` | Synonym for `offset`. |
| `progress_ratio` | `float` | `0.0` | Normalised distance (0–1) along the path. |
| `loop` | `bool` | `false` | If `true`, the path is considered cyclic; the offset wraps around. |
| `rotate` | `bool` | `false` | If `true`, the node’s rotation will match the path’s tangent. |
| `flip_h` | `bool` | `false` | Flips the node horizontally along the path. |
| `flip_v` | `bool` | `false` | Flips the node vertically along the path. |
| `follow_smooth` | `float` | `0.0` | The amount of smoothing applied to the movement (in seconds). |

> **Note** – The `flip_h`/`flip_v` properties are only relevant when the node’s sprite or visual content requires mirroring while following the path.

---

### Methods

```gdscript
# Position & distance
func get_offset() -> float
func set_offset(offset: float) -> void

func get_progress() -> float
func set_progress(progress: float) -> void

func get_progress_ratio() -> float
func set_progress_ratio(ratio: float) -> void

# Path-related
func get_path() -> Path2D
func set_path(path: Path2D) -> void

# Conversion helpers
func get_local_position() -> Vector2
func get_global_position() -> Vector2

# Optional smoothing
func set_smooth_amount(amount: float) -> void
func get_smooth_amount() -> float
```

> **Common Usage**  
> ```gdscript
> # Assuming the PathFollow2D node is the current script’s node
> var follow = $PathFollow2D
> follow.offset = 100            # Move to 100 px from start
> follow.rotation_enabled = true # Rotate to follow tangent
> ```

---

### Example – Moving an object along a path

```gdscript
# PathFollow2D.gd
extends PathFollow2D

# Called every frame
func _process(delta):
    # Increment offset to move along the path
    offset += 200 * delta  # 200 px per second

    # If loop is true, offset automatically wraps around
```

Add this script to a `PathFollow2D` node that has a `Path2D` as its parent.  
Attach a sprite or any other node to the `PathFollow2D` to see it traverse the path.

---

### Reference Links

- [Godot Docs – Path2D](https://docs.godotengine.org/en/stable/classes/class_path2d.html)  
- [Godot Docs – PathFollow3D](https://docs.godotengine.org/en/stable/classes/class_pathfollow3d.html)

---