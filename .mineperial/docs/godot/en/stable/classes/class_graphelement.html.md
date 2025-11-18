# GraphElement

> **Experimental** – This class may be changed or removed in future versions.

`GraphElement` is a container that represents a visual element inside a `GraphEdit`. It inherits from `Container` (which itself inherits from `Control`, `CanvasItem`, `Node`, and `Object`). The class is the base for `GraphFrame` and `GraphNode`.

---

## Inheritance hierarchy

```
Object
 └─ Node
      └─ CanvasItem
           └─ Control
                └─ Container
                     └─ GraphElement
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `Vector2` | `Vector2(0, 0)` | Size of the element in the graph editor. |
| `position` | `Vector2` | `Vector2(0, 0)` | Position of the element inside the graph editor. |
| `name` | `String` | `""` | Name of the element. |
| `mouse_filter` | `int` | `MOUSE_FILTER_STOP` | Determines how this element handles mouse events. |
| `mouse_default_cursor_shape` | `int` | `CURSOR_ARROW` | Default cursor shape when hovering over this element. |

> *Note: Some properties are inherited from `Control` and `Container`.*

---

## Signals

| Signal | Description |
|--------|-------------|
| `ready()` | Emitted when the element enters the scene tree and is ready. |
| `gui_input(event: InputEvent)` | Emitted when an input event occurs over the element. |

---

## Methods

| Method | Description |
|--------|-------------|
| **`_init()`** | Constructor. |
| **`get_node(name: String)`** | Retrieves a child node by name. |
| **`set_process(process: bool)`** | Enables or disables process callback. |
| **`set_process_input(process_input: bool)`** | Enables or disables input processing. |
| **`set_physics_process(physics_process: bool)`** | Enables or disables physics processing. |
| **`set_dragging(dragging: bool)`** | Sets whether the element can be dragged. |
| **`update()`** | Requests a redraw of the element. |

> *Most of the above methods are inherited from `Control` or `CanvasItem`.*

---

## Usage Example

```gdscript
extends GraphElement

func _ready():
    # Set size and position
    size = Vector2(200, 100)
    position = Vector2(50, 50)

    # Enable dragging
    set_dragging(true)

    # Connect a signal
    connect("gui_input", self, "_on_gui_input")
```

---

## Documentation References

- **GraphFrame** – A specialized container for grouping graph elements.
- **GraphNode** – A node that can be connected via sockets in a `GraphEdit`.

For more information on graph editing, see the Godot documentation on [`GraphEdit`](https://docs.godotengine.org/en/stable/classes/class_graphedit.html).