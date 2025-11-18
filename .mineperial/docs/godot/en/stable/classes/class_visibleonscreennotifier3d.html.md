**VisibleOnScreenNotifier3D**  
*Godot Engine Class Reference – Stable (English)*

---

### Overview
`VisibleOnScreenNotifier3D` is a node that defines a 3‑D rectangular region which can detect whether it is visible on the screen.  It emits signals when the region enters or exits the camera’s view.

> **Inheritance hierarchy**  
> ```
> Object
>   └─ Node
>     └─ Node3D
>       └─ VisualInstance3D
>         └─ VisibleOnScreenNotifier3D
> ```

> **Inherited By**  
> `VisibleOnScreenEnabler3D`

---

## Signals
| Signal | Description |
|--------|-------------|
| `screen_entered()` | Emitted when the region becomes visible on screen. |
| `screen_exited()` | Emitted when the region leaves the camera view. |

---

## Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible` | `bool` | `false` | If `true`, the notifier is active and will emit signals. |
| `monitoring` | `bool` | `true` | Controls whether the notifier actively checks visibility. |
| `size` | `Vector3` | `Vector3(1, 1, 1)` | Dimensions of the rectangular region (in local coordinates). |
| `center` | `Vector3` | `Vector3(0, 0, 0)` | Center point of the region relative to the node’s origin. |

> **Note**: The actual property names may vary; consult the official API reference for the latest list.

---

## Methods
| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `is_visible_on_screen()` | `bool` | — | Returns whether the region is currently within the camera’s view. |
| `set_size(Vector3 size)` | — | `size: Vector3` | Sets the size of the detection box. |
| `set_center(Vector3 center)` | — | `center: Vector3` | Sets the center point of the detection box. |
| `get_size()` | `Vector3` | — | Retrieves the current size. |
| `get_center()` | `Vector3` | — | Retrieves the current center. |

> **Example usage**  
> ```gdscript
> var notifier = VisibleOnScreenNotifier3D.new()
> notifier.size = Vector3(2, 2, 2)
> notifier.center = Vector3(0, 1, 0)
> add_child(notifier)
> 
> func _ready():
>     notifier.connect("screen_entered", self, "_on_notifier_entered")
>     notifier.connect("screen_exited", self, "_on_notifier_exited")
> 
> func _on_notifier_entered():
>     print("Notifier is now visible!")
> 
> func _on_notifier_exited():
>     print("Notifier has left the screen.")
> ```
> 

---

## Usage Notes
* `VisibleOnScreenNotifier3D` is typically used for optimization: enable or disable heavy processing for objects that are not currently visible.
* Place the node as a child of the object you wish to monitor, or use it independently in a scene.
* Combine with `VisibleOnScreenEnabler3D` if you want a node to automatically enable/disable its children based on visibility.

---

### Further Reading
* [VisibleOnScreenEnabler3D](https://docs.godotengine.org/en/stable/classes/class_visibleonscreenenabler3d.html) – the sibling node that automatically turns visibility on/off for its children.  
* [Spatial](https://docs.godotengine.org/en/stable/classes/class_spatial.html) – base 3‑D node for positioning.

---

> *For detailed API documentation, including all properties, methods, and signals, visit the official Godot Engine class reference:  
> https://docs.godotengine.org/en/stable/classes/class_visibleonscreennotifier3d.html*