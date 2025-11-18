**GraphEdit**

> *Experimental:* This class may be changed or removed in future versions.

---

## Inheritance
```
GraphEdit
├── Control
│   ├── CanvasItem
│   │   ├── Node
│   │   │   └── Object
```

## Description
`GraphEdit` is an editor widget for creating and manipulating graph‑like structures using `GraphNode` instances. It provides a visual canvas where nodes can be connected, moved, and edited.

---

## Signals
| Signal | Description |
|--------|-------------|
| `connection_request(from, to, from_port, to_port)` | Emitted when the user attempts to create a connection between two nodes. |
| `disconnection_request(from, to, from_port, to_port)` | Emitted when the user attempts to disconnect two nodes. |
| `node_selected(node)` | Emitted when a node is selected. |
| `node_deselected(node)` | Emitted when a node is deselected. |
| `duplicate_request(node)` | Emitted when the user requests duplication of a node. |
| `delete_request(node)` | Emitted when the user requests deletion of a node. |
| `zoom_request(delta)` | Emitted when the user scrolls the mouse wheel for zooming. |
| `scroll_request(position)` | Emitted when the user pans the graph. |
| `open_request(node)` | Emitted when the user double‑clicks a node to open it in the editor. |

> *Note:* The above list is illustrative; refer to the official API reference for the complete set of signals and any changes in future releases.

---

## Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `can_zoom` | `bool` | `true` | If `true`, the graph can be zoomed in/out with the mouse wheel. |
| `zoom_min` | `float` | `0.1` | Minimum zoom scale. |
| `zoom_max` | `float` | `10.0` | Maximum zoom scale. |
| `zoom` | `float` | `1.0` | Current zoom scale. |
| `scroll_offset` | `Vector2` | `Vector2(0,0)` | Current scroll position. |
| `grid_enabled` | `bool` | `false` | Whether the grid overlay is visible. |
| `grid_size` | `int` | `10` | Grid cell size in pixels. |

> *Note:* Modifying these properties at runtime can change the appearance and interaction behavior of the graph editor.

---

## Methods
| Method | Signature | Description |
|--------|-----------|-------------|
| `add_node(node: GraphNode)` | Adds a new `GraphNode` to the editor. |
| `remove_node(node: GraphNode)` | Removes an existing `GraphNode` from the editor. |
| `connect_node(from: GraphNode, to: GraphNode, from_port: int, to_port: int)` | Creates a connection between two nodes. |
| `disconnect_node(from: GraphNode, to: GraphNode, from_port: int, to_port: int)` | Removes a connection between two nodes. |
| `get_connection_list()` | Returns a list of current connections. |
| `get_selected_nodes()` | Returns the currently selected nodes. |
| `clear_selection()` | Clears the current node selection. |
| `duplicate_node(node: GraphNode)` | Creates a duplicate of the specified node. |
| `set_zoom(zoom: float)` | Sets the current zoom level. |
| `set_scroll_offset(offset: Vector2)` | Sets the current scroll position. |
| `get_node_at_position(position: Vector2)` | Returns the node at a given screen position, if any. |

> *Note:* The complete API includes numerous helper functions for node management, connection validation, and UI interaction; consult the Godot documentation for detailed usage.

---

## Usage Example

```gdscript
var graph_edit := GraphEdit.new()
add_child(graph_edit)

var node_a := GraphNode.new()
node_a.title = "Input"
node_a.set_offset(Vector2(100, 100))
graph_edit.add_child(node_a)

var node_b := GraphNode.new()
node_b.title = "Process"
node_b.set_offset(Vector2(300, 100))
graph_edit.add_child(node_b)

# Connect output of node A to input of node B
graph_edit.connect_node(node_a, node_b, 0, 0)
```

---

### Further Reading

- [GraphNode](https://docs.godotengine.org/en/stable/classes/class_graphnode.html) – Node type used within `GraphEdit`.
- [Scene Tree](https://docs.godotengine.org/en/stable/tutorials/scene_tree/scene_tree.html) – Understanding how to embed `GraphEdit` in a scene.

---