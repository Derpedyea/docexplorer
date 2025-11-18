**Popup – Godot Engine Documentation**  

> **Class**: `Popup`  
> **Base classes**: `Window → Viewport → Node → Object`  
> **Description**:  
> `Popup` is a base class for contextual windows and panels that are displayed in a fixed position on the screen. It handles basic popup functionality such as showing, hiding, modal behavior, and focus management.

---

## Inheritance
```
Object
 └── Node
     └── Viewport
         └── Window
             └── Popup
```

---

## Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `modal` | `bool` | `false` | Determines whether the popup is modal (blocks interaction with the rest of the UI). |
| `popup_delay` | `float` | `0.0` | Delay before the popup becomes visible after `popup()` is called. |
| `hide_on_escape` | `bool` | `true` | Whether pressing Escape automatically hides the popup. |
| `popup_animation` | `AnimationPlayer` | `null` | Animation player used for popup transitions (if any). |

*(Additional properties can be found in the full class reference.)*

---

## Signals
| Signal | Parameters | Description |
|--------|------------|-------------|
| `popup_hide()` | – | Emitted when the popup is hidden. |
| `popup_show()` | – | Emitted when the popup becomes visible. |

---

## Methods
| Method | Signature | Description |
|--------|-----------|-------------|
| `popup()` | `void` | Shows the popup. If `modal` is `true`, it will block input to other UI elements. |
| `popup_centered()` | `void` | Positions the popup in the center of the viewport and shows it. |
| `popup_centered_minsize()` | `void` | Positions the popup in the center and resizes it to its minimum size. |
| `popup_on_parent()` | `void` | Shows the popup at the same position as its parent node. |
| `popup_exclusive()` | `bool` | Returns whether this popup is exclusive (no other popups can be shown). |
| `set_exclusive(bool)` | `void` | Sets whether the popup should be exclusive. |
| `set_hide_on_escape(bool)` | `void` | Sets the `hide_on_escape` property. |
| `set_modal(bool)` | `void` | Sets the `modal` property. |
| `set_popup_delay(float)` | `void` | Sets a delay before showing. |
| `hide()` | `void` | Hides the popup. |
| `is_visible()` | `bool` | Returns whether the popup is currently visible. |

*(Additional methods – including virtual overrides and helpers – are listed in the full reference.)*

---

## Overridden Methods
| Method | From | Description |
|--------|------|-------------|
| `_enter_tree()` | `Node` | Called when the popup enters the scene tree. |
| `_ready()` | `Node` | Called when the node is ready. |
| `_process(double delta)` | `Node` | Process loop for popup logic. |

---

## Example Usage

```gdscript
# Example script for a simple popup menu

extends Popup

func _ready():
    # Connect signals
    connect("popup_hide", self, "_on_popup_hidden")
    connect("popup_show", self, "_on_popup_shown")

func _on_popup_shown():
    print("Popup is now visible")

func _on_popup_hidden():
    print("Popup is now hidden")

func _input(event):
    if event.is_action_pressed("ui_accept"):
        popup()  # Show the popup when the accept action is pressed
```

---

## Related Classes

- [PopupMenu](../classes/class_popupmenu.html)
- [PopupPanel](../classes/class_popuppanel.html)

---

### References

- Godot Engine Class Reference – [Popup](https://docs.godotengine.org/en/stable/classes/class_popup.html)  
- Godot Engine API Documentation – [Window](https://docs.godotengine.org/en/stable/classes/class_window.html)  

*(The full class reference contains more detailed information about properties, methods, signals, and usage examples.)*