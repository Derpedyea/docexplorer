**VisibleOnScreenEnabler2D**

> A 2‑D node that enables or disables a target node when a specified rectangular area becomes visible on the screen.

---

## Inheritance
`VisibleOnScreenEnabler2D` ➜ `VisibleOnScreenNotifier2D` ➜ `Node2D` ➜ `CanvasItem` ➜ `Node` ➜ `Object`

---

## Description
`VisibleOnScreenEnabler2D` monitors a rectangular region of the 2‑D world.  
When that region intersects the visible portion of the viewport, the node automatically **enables** (calls `set_process(true)` / `set_physics_process(true)` / `set_visible(true)`) the *target* node specified in the inspector.  
When the region leaves the viewport, the target node is automatically **disabled**.  
This is useful for lazy‑loading heavy objects, stopping background animation or physics, or creating “off‑screen” pools that only become active when the player can see them.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `target` | `NodePath` | `null` | Path to the node that will be enabled/disabled. |
| `area_shape` | `Shape2D` | `RectangleShape2D` | The shape used to detect visibility. |
| `enabled` | `bool` | `true` | Whether the enabler itself is active. |
| `auto_set_process` | `bool` | `true` | If `true`, the enabler will call `set_process()` on the target when it becomes visible. |
| `auto_set_physics_process` | `bool` | `true` | If `true`, the enabler will call `set_physics_process()` on the target when it becomes visible. |
| `auto_set_visible` | `bool` | `true` | If `true`, the enabler will call `set_visible()` on the target when it becomes visible. |

> **Tip**: All auto‑set flags can be toggled individually to fine‑tune which aspects of the target should be activated.

---

## Signals

| Signal | Description |
|--------|-------------|
| `screen_entered` | Emitted when the monitored area becomes visible on any viewport. |
| `screen_exited` | Emitted when the monitored area leaves the visible viewport. |

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_target(node: Node)` | `void` | Assign a new target node at runtime. |
| `get_target() -> Node` | `Node` | Retrieve the current target node. |
| `_ready()` | `void` | Hook that connects internal signals and sets the initial state. |
| `_process(delta: float)` | `void` | Per‑frame check of visibility when `auto_process` is `true`. |
| `_physics_process(delta: float)` | `void` | Per‑physics‑frame check of visibility when `auto_physics_process` is `true`. |

> These methods are inherited from `VisibleOnScreenNotifier2D` and provide the core visibility logic. The enabler adds a simple state machine around that logic to toggle the target node.

---

## Usage Example

```gdscript
# In a scene where the node needs to be lazily activated

@tool
class_name LazyLoader

func _ready() -> void:
    var enabler = VisibleOnScreenEnabler2D.new()
    enabler.target = $"HeavyResource"      # Path to the node you want to enable
    enabler.area_shape.extents = Vector2(500, 500)  # Optional: change area size
    add_child(enabler)
```

> Place `VisibleOnScreenEnabler2D` as a sibling of the target node (or anywhere in the scene tree).  
> The target will only be processed and rendered when the player can see it, saving CPU/GPU cycles.

---

## Common Use Cases

- **Background animation**: Pause animations that are off‑screen.
- **Physics bodies**: Disable collision bodies or rigid bodies when not visible to reduce physics load.
- **Resource pooling**: Re‑activate pooled objects only when they become visible.
- **Level streaming**: Enable/disable large scenery elements as the player moves through the world.

---

## API Reference (Godot 4.x)

```gdscript
class_name VisibleOnScreenEnabler2D
extends VisibleOnScreenNotifier2D

# Properties
var target: NodePath
var area_shape: Shape2D = RectangleShape2D.new()
var enabled: bool
var auto_set_process: bool
var auto_set_physics_process: bool
var auto_set_visible: bool

# Signals
signal screen_entered()
signal screen_exited()

# Methods
func set_target(node: Node) -> void
func get_target() -> Node
```

> For detailed usage and advanced configuration, refer to the [official Godot 4 documentation](https://docs.godotengine.org/en/stable/classes/class_visibleonscreenenabler2d.html).

---