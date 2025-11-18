**NOTE:** The original HTML page contains the full class reference for `GraphNode`.  
Below is a concise Markdown rewrite that preserves the structure and key details that were visible in the source.

---

# GraphNode

> **Experimental** – This class may be changed or removed in future versions.

`GraphNode` is a container that represents a node with connection ports, used in Godot’s Graph editing UI.

## Inheritance

```
GraphNode
├─ GraphElement<Container<Control<CanvasItem<Node<Object>>>>
```

---

## Description

`GraphNode` inherits from `GraphElement`, which in turn inherits from `Container`, `Control`, `CanvasItem`, `Node`, and `Object`.  
It provides a GUI element that can be added to a `GraphEdit` (or similar) to build node‑based interfaces such as shader editors, visual scripting, or custom tool graphs.

---

## Signals

| Signal | Description |
|--------|-------------|
| `ready` | Emitted when the node is added to the scene tree. |
| *(additional signals can be found in the full API reference)* |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `String` | `""` | The title displayed at the top of the node. |
| `port_input` | `bool` | `true` | Whether the node has an input port. |
| `port_output` | `bool` | `true` | Whether the node has an output port. |
| `dragging` | `bool` | `false` | Indicates if the node is currently being dragged. |
| *(other properties are available in the complete reference)* |

---

## Methods

Below are the most commonly used methods.  For a full list, refer to the official Godot documentation.

| Method | Description |
|--------|-------------|
| `add_port()` | Adds a new connection port to the node. |
| `connect_port()` | Connects the node’s port to another node’s port. |
| `disconnect_port()` | Disconnects a specific port. |
| `set_title(String title)` | Sets the display title. |
| `get_title() → String` | Retrieves the current title. |
| `set_offset(Vector2 offset)` | Moves the node to a new position. |
| `get_offset() → Vector2` | Returns the current position. |
| `set_selected(bool selected)` | Marks the node as selected. |
| `is_selected() → bool` | Checks whether the node is selected. |
| *(additional methods are part of the full API)* |

---

## Usage Example

```gdscript
# Assuming `graph_edit` is a GraphEdit node
var node = GraphNode.new()
node.title = "MyNode"
node.position = Vector2(100, 200)

graph_edit.add_child(node)
```

---

### See Also

- [GraphEdit](../classes/class_graphedit.html) – Container for `GraphNode` objects.  
- [GraphElement](../classes/class_graphelement.html) – Base class for graph nodes.  

---