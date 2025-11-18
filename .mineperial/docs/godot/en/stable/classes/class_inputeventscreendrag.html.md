# InputEventScreenDrag

> **Godot Engine (stable) documentation – Class Reference**

`InputEventScreenDrag` represents a drag event that originates from touch screen input.  
It is a subclass of `InputEventFromWindow`, which in turn inherits from `InputEvent`.

---

## Description

`InputEventScreenDrag` stores information about a drag gesture performed on a screen touch interface.  
The class is typically received in the `_input()` callback of a `Node`:

```gdscript
func _input(event):
    if event is InputEventScreenDrag:
        # `event` now contains drag information
```

See also: [Node._input()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-method-_input)

---

## Inheritance

```
Object
 └─ Resource
     └─ RefCounted
         └─ InputEvent
             └─ InputEventFromWindow
                 └─ InputEventScreenDrag
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `position` | `Vector2` | The current position of the drag in screen coordinates. |
| `velocity` | `Vector2` | The velocity of the drag (pixels per second). |
| `speed` | `float` | The magnitude of `velocity`. |
| `distance` | `float` | Total distance dragged since the start. |
| `delta` | `Vector2` | The change in position since the last event. |

> All properties are read‑only; they can be accessed directly or via the corresponding getter methods.

---

## Methods

| Method | Return Type | Description |
|--------|------------|-------------|
| `get_position()` | `Vector2` | Returns the current drag position. |
| `get_velocity()` | `Vector2` | Returns the current drag velocity. |
| `get_speed()` | `float` | Returns the speed (magnitude of the velocity). |
| `get_distance()` | `float` | Returns the total distance dragged. |
| `get_delta()` | `Vector2` | Returns the delta movement since the previous event. |

> These are provided for compatibility with older versions; the same information can be accessed via the properties above.

---

## Signals

`InputEventScreenDrag` does **not** emit any signals.

---

## Example

```gdscript
extends Node2D

func _input(event):
    if event is InputEventScreenDrag:
        print("Dragged to: ", event.position)
        print("Speed: ", event.speed)
```

---