**GridContainer**  
===================

`GridContainer` is a UI container node that arranges its child controls in a rectangular grid.  
It inherits from `Container` → `Control` → `CanvasItem` → `Node` → `Object`.

---

### Description

The `GridContainer` automatically places its child controls in rows and columns.  
You can control the number of columns and the spacing between the cells.  
If the number of columns is set to `0`, the container will automatically determine the best width based on its size and the size of its children.

---

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `columns` | `int` | Number of columns in the grid. A value of `0` makes the container calculate the optimal number of columns automatically. |
| `hseparation` | `int` | Horizontal separation between cells (in pixels). |
| `vseparation` | `int` | Vertical separation between cells (in pixels). |

---

### Signals

```
None
```

---

### Methods

| Method | Return Type | Arguments | Description |
|--------|-------------|-----------|-------------|
| `get_columns()` | `int` | – | Returns the current number of columns. |
| `set_columns(columns : int)` | – | `columns` | Sets the number of columns. |
| `get_hseparation()` | `int` | – | Returns the horizontal cell separation. |
| `set_hseparation(separation : int)` | – | `separation` | Sets the horizontal separation. |
| `get_vseparation()` | `int` | – | Returns the vertical cell separation. |
| `set_vseparation(separation : int)` | – | `separation` | Sets the vertical separation. |

*All methods are inherited from `Container` and overridden where necessary to implement grid logic.*

---

### Usage Example

```gdscript
# Create a grid container with 3 columns and 20px spacing
var grid = GridContainer.new()
grid.columns = 3
grid.hseparation = 20
grid.vseparation = 20
add_child(grid)

# Add some controls to the grid
for i in range(6):
    var label = Label.new()
    label.text = "Item %d" % i
    grid.add_child(label)
```

The above code will layout six labels in a 3‑column grid with 20‑pixel gaps between cells.

---

### Related Nodes

* `Container` – Base class for all layout containers.  
* `MarginContainer` – A container that adds a margin around its children.  
* `HBoxContainer`, `VBoxContainer` – Containers that lay out children in a single row or column.

---

**Reference** – [Godot Engine Docs](https://docs.godotengine.org/en/stable/classes/class_gridcontainer.html)