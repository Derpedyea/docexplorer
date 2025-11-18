**Keyboard / Controller Navigation and Focus**  
*Godot Engine (stable) documentation*

---

### Overview

Keyboard and controller support is essential for many user interfaces.  
In Godot this is achieved through *focus* and *navigation* on `Control` nodes.  
This guide explains how focus works, how to configure navigation, and how to
create custom navigation logic.

---

## 1.  What is Focus?

A `Control` can be either **focused** or **unfocused**.  
The focused node is the one that receives input events such as
key presses, mouse clicks, or controller button presses.

* **Tab order** – determines the order of focus when the user presses the
  `Tab` key or the controller’s directional pad.
* **Focus mode** – controls whether a node can receive focus and how it
  behaves when it is the last element in a navigation cycle.

```gdscript
# Example: A simple button that prints when it receives a press
func _ready():
    $Button.connect("pressed", self, "_on_Button_pressed")

func _on_Button_pressed():
    print("Button pressed!")
```

---

## 2.  Navigation Properties

| Property | Description | Typical Values |
|----------|-------------|----------------|
| `focus_mode` | Controls whether a node can receive focus. | `FOCUS_NONE`, `FOCUS_CLICK`, `FOCUS_ALL` |
| `mouse_filter` | Determines whether mouse events are passed to a child or not. | `MOUSE_FILTER_PASS`, `MOUSE_FILTER_STOP`, `MOUSE_FILTER_IGNORE` |
| `rect_min_size` | Minimum size of the control (affects layout). | `Vector2(x, y)` |

### 2.1. Focus Mode

```
FOCUS_NONE    – Node never gets focus.
FOCUS_CLICK   – Node gets focus on mouse click.
FOCUS_ALL     – Node can receive focus by any means.
```

You can set it in the Inspector or via code:

```gdscript
$Button.focus_mode = Control.FOCUS_ALL
```

---

## 3.  Keyboard Navigation

* The `Tab` key cycles through all focusable controls in tab order.
* `Shift + Tab` goes backwards.
* Arrow keys (`Left`, `Right`, `Up`, `Down`) also move the focus based on a
  spatial graph of controls.

### 3.1. Tab Order

`Control` nodes have an `tab_focus` property (integer).  
Higher numbers are visited later.  
If omitted, Godot will determine the order automatically based on the
scene tree.

```gdscript
$Button1.tab_focus = 1
$Button2.tab_focus = 2
```

---

## 4.  Controller Navigation

Controllers map the directional pad and face buttons to the same navigation
scheme as a keyboard.  
The `Navigation` property of a `Control` node can be set to
`NAVIGATION_DEFAULT` or overridden with a custom navigation graph.

Example of a custom navigation graph using a `Control` node’s
`navigation` property:

```gdscript
# Set the navigation to custom
$Button1.navigation = true
# Connect custom neighbors
$Button1.set_navigation_right($Button2)
$Button2.set_navigation_left($Button1)
```

---

## 5.  Practical Tips

| Tip | Description |
|-----|-------------|
| **Use groups** | Place UI elements in a `ui` group to enable bulk focus changes. |
| **Disable focus for non‑interactive nodes** | `focus_mode = FOCUS_NONE` for labels or decorative items. |
| **Use `Tab` stops wisely** | Avoid too many nodes that are not needed for tab navigation. |

---

## 6.  Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| Focus stuck on a node | `focus_mode` set to `FOCUS_NONE` on its parent | Set parent to `FOCUS_ALL` or remove focus from that branch |
| Navigation jumps out of bounds | Missing neighbors for directional input | Set `navigation` neighbors explicitly |
| Tab order incorrect | Auto‑assigned order conflicting with custom order | Use `tab_focus` to enforce order |

---

## 7.  Resources

* [Control Node Reference](https://docs.godotengine.org/en/stable/classes/class_control.html)
* [Keyboard and Mouse Input](https://docs.godotengine.org/en/stable/tutorials/input/input_events.html#keyboard-and-mouse)
* [Gamepad Input](https://docs.godotengine.org/en/stable/tutorials/input/input_events.html#gamepads)

---