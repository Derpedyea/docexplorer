**NOTE**: The actual Godot Engine documentation for `VisibleOnScreenEnabler3D` contains detailed lists of properties, methods, signals, and usage examples. The information below is a concise, self‑contained summary that captures the core concepts and API surface of this class, suitable for quick reference or as a starting point for deeper exploration.

---

# `VisibleOnScreenEnabler3D`

A *box‑shaped region* that, when it becomes visible in the camera’s view frustum, automatically **enables** a specified target node.  
Typical use‑cases include:

* **Lazy loading** – load or activate complex 3D objects only when the player can see them.  
* **Performance optimization** – reduce physics or AI updates for off‑screen objects.  
* **Scene management** – enable/disable scenes or sub‑trees based on visibility.

> **Caution**: `VisibleOnScreenEnabler3D` is *inherited* from `VisibleOnScreenNotifier3D`, which handles the underlying visibility detection logic.

---

## Inheritance Hierarchy

```
VisibleOnScreenEnabler3D
└─ VisibleOnScreenNotifier3D
   └─ VisualInstance3D
      └─ Node3D
         └─ Node
            └─ Object
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `target_node` | `NodePath` | – | The node that will be enabled when this area becomes visible. |
| `enabled` | `bool` | `true` | Controls whether the notifier is active. When `false`, visibility checks are skipped. |
| `aabb` | `AABB` | – | The axis‑aligned bounding box that defines the region of interest. Adjust it in the inspector or via code. |
| `activation_on_visible` | `bool` | `true` | When `true`, the target node will be activated the first time the area becomes visible. If `false`, it will only be enabled if it was already visible at start. |

> **Tip**: The `aabb` can be set directly in the editor or via `set_aabb()` and retrieved with `get_aabb()`.

---

## Methods

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `set_target_node(node: NodePath)` | `node` | – | Assigns the target node that will be enabled when visible. |
| `get_target_node() -> NodePath` | – | `NodePath` | Returns the currently assigned target node. |
| `set_aabb(aabb: AABB)` | `aabb` | – | Sets the region’s bounding box. |
| `get_aabb() -> AABB` | – | `AABB` | Retrieves the bounding box. |
| `set_activation_on_visible(on: bool)` | `on` | – | Configures whether the node should be activated the first time the region is visible. |
| `is_activation_on_visible() -> bool` | – | `bool` | Returns the current activation‑on‑visible setting. |

> **Inherited methods** from `VisibleOnScreenNotifier3D`: `set_monitoring()`, `is_monitoring()`, `is_on_screen()`, etc.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `body_entered(body: Node)` | `body` | Emitted when a physics body enters the region. |
| `body_exited(body: Node)` | `body` | Emitted when a physics body exits the region. |

> These signals mirror those of the parent `VisibleOnScreenNotifier3D` and can be connected to trigger custom logic alongside automatic enabling.

---

## Example Usage

```gdscript
# Assuming the VisibleOnScreenEnabler3D node is a child of a mesh instance.
var enabler : VisibleOnScreenEnabler3D

func _ready() -> void:
    enabler = $VisibleOnScreenEnabler3D
    enabler.set_target_node($Enemy)
    enabler.set_aabb(AABB(Vector3(-1,-1,-1), Vector3(2,2,2)))
    enabler.set_activation_on_visible(true)
```

In this example the `Enemy` node will become active the first time the camera can see the defined region.

---

## Related Classes

* **[VisibleOnScreenNotifier3D](https://docs.godotengine.org/en/stable/classes/class_visibleonscreennotifier3d.html)** – base class handling visibility checks.
* **[VisibleOnScreenEnabler2D](https://docs.godotengine.org/en/stable/classes/class_visibleonscreenenabler2d.html)** – 2D counterpart.

---

## See Also

* [Viewport](https://docs.godotengine.org/en/stable/classes/class_viewport.html) – for controlling camera and view frustum.  
* [Spatial](https://docs.godotengine.org/en/stable/classes/class_spatial.html) – parent class of all 3D nodes that can be positioned in 3D space.  

---