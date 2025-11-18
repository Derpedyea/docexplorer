**SplitContainer**  
===================

> A container that splits two child controls horizontally or vertically and provides a draggable split handle.

**Inherits**  
`Container → Control → CanvasItem → Node → Object`

**Inherited By**  
* `HSplitContainer` – horizontal split  
* `VSplitContainer` – vertical split  

---  

### Overview  

`SplitContainer` is used to divide two child controls (usually `Control` nodes) so that the user can resize them by dragging the split handle.  
The orientation of the split is determined by the concrete subclass (`HSplitContainer` or `VSplitContainer`). The split position can be retrieved or set in pixels from the start of the container.

> **Key properties**  
> * `split_offset` – current position of the split in pixels.  
> * `resistance` – amount of resistance to dragging the handle.  
> * `snap_offset` – offset to snap the split to when dragging.  

> **Key methods**  
> * `set_split_offset(int offset)` – set the split position.  
> * `get_split_offset() -> int` – get the current split position.  
> * `set_resistance(float resistance)` – set the dragging resistance.  
> * `set_snap_offset(int snap_offset)` – set snap distance.  

> **Signals**  
> * `split_offset_changed(int new_offset)` – emitted when the user drags the split handle and the offset changes.  

---  

#### Example usage

```gdscript
# Create a horizontal split container
var hsplit = HSplitContainer.new()
add_child(hsplit)

# Add two panels
var left_panel = Panel.new()
var right_panel = Panel.new()
hsplit.add_child(left_panel)
hsplit.add_child(right_panel)

# Set the initial split position to 200 pixels
hsplit.set_split_offset(200)
```

You can also connect to the `split_offset_changed` signal to react to user resizing:

```gdscript
hsplit.connect("split_offset_changed", Callable(self, "_on_split_changed"))
func _on_split_changed(new_offset):
    print("Split moved to ", new_offset)
```

---  

### Reference

| Section | Details |
|---------|---------|
| **Members** | `split_offset : int`, `resistance : float`, `snap_offset : int` |
| **Methods** | `set_split_offset(offset)`, `get_split_offset()`, `set_resistance(resistance)`, `set_snap_offset(offset)` |
| **Signals** | `split_offset_changed(new_offset)` |

---  

For more detailed information, see the full Godot documentation:  
[https://docs.godotengine.org/en/stable/classes/class_splitcontainer.html](https://docs.godotengine.org/en/stable/classes/class_splitcontainer.html)