**Custom GUI controls – Godot Engine (stable) documentation**

> This page is part of the official Godot Engine documentation and provides a tutorial on creating custom GUI controls in Godot. It includes conceptual explanations, code examples, and step‑by‑step instructions.

---

# Custom GUI controls

Custom GUI controls are useful when the built‑in controls don’t satisfy your needs. Godot lets you create new control nodes by extending the base `Control` class (or one of its subclasses).

## Table of contents

1. [Introduction](#introduction)
2. [Extending Control](#extending-control)
3. [Handling Input and Events](#handling-input-and-events)
4. [Drawing Your Control](#drawing-your-control)
5. [Sizing and Layout](#sizing-and-layout)
6. [Example: A Custom Button](#example-a-custom-button)
7. [Tips and Common Pitfalls](#tips-and-common-pitfalls)
8. [References](#references)

---

## Introduction

The tutorial explains how to build a custom GUI component, from inheriting the right class, to handling mouse events, drawing custom graphics, and ensuring proper sizing and theme support.

---

## Extending Control

```gdscript
# MyCustomControl.gd
extends Control

# Define exported properties
@export var my_color : Color = Color(1, 0, 0)
@export var my_text : String = "Hello"

# Called when the node is added to the scene tree.
func _ready():
    # Initialization logic here
```

* `Control` is the base class for all UI elements.
* Subclassing allows you to override methods like `_draw()`, `_gui_input()`, and `_notification()`.

---

## Handling Input and Events

Override `_gui_input(event)` to react to mouse or keyboard input.

```gdscript
func _gui_input(event):
    if event is InputEventMouseButton:
        if event.pressed:
            print("Clicked at ", event.position)
```

You can also emit custom signals:

```gdscript
signal clicked

func _gui_input(event):
    if event is InputEventMouseButton and event.pressed:
        emit_signal("clicked")
```

---

## Drawing Your Control

Override `_draw()` to render custom graphics.

```gdscript
func _draw():
    draw_rect(Rect2(Vector2.ZERO, rect_size), my_color)
    draw_string(get_font("font"), Vector2(10, 30), my_text)
```

Call `queue_redraw()` whenever properties that affect the visual representation change.

---

## Sizing and Layout

Override `_get_minimum_size()` to inform the layout system.

```gdscript
func _get_minimum_size() -> Vector2:
    return Vector2(100, 40)
```

Use `size_flags_horizontal`, `size_flags_vertical`, and `custom_minimum_size` for advanced sizing behavior.

---

## Example: A Custom Button

A minimal button that changes color on hover and emits a signal on click.

```gdscript
# CustomButton.gd
extends Control

signal pressed

var _hover : bool = false

func _gui_input(event):
    if event is InputEventMouseButton and event.pressed:
        emit_signal("pressed")
    elif event is InputEventMouseMotion:
        _hover = true
    elif event is InputEventMouseButton and not event.pressed:
        _hover = false
    queue_redraw()

func _draw():
    var color = _hover ? Color(0.8, 0.8, 1) : Color(1, 1, 1)
    draw_rect(Rect2(Vector2.ZERO, rect_size), color)
    draw_string(get_font("font"), rect_size / 2, "Click", 
                HORIZONTAL_ALIGNMENT_CENTER | VERTICAL_ALIGNMENT_CENTER)
```

Add it to a scene just like any other node, and connect the `pressed` signal in the editor or via code.

---

## Tips and Common Pitfalls

| Issue | Fix |
|-------|-----|
| Control does not receive mouse events | Ensure `mouse_filter` is set to `MOUSE_FILTER_PASS`. |
| Size changes not reflected | Call `queue_sort()` or `queue_redraw()` after modifying size properties. |
| Theme colors not applied | Use `theme.get_color()` and `theme.get_font()` instead of hard‑coded values. |

---

## References

* [Godot 4.1 API – Control](https://docs.godotengine.org/en/stable/classes/class_control.html)
* [Godot 4.1 API – InputEvent](https://docs.godotengine.org/en/stable/classes/class_inputevent.html)
* [Theme Customization](https://docs.godotengine.org/en/stable/tutorials/ui/theming.html)

---