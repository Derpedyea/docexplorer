# InputEventFromWindow

> **Godot Engine – Class Reference (Stable)**  
> *Inherited by:*  
> `InputEventScreenDrag`, `InputEventScreenTouch`, `InputEventWithModifiers`

---

## Description

`InputEventFromWindow` is an abstract base class that represents input events originating from a viewport.  
It is used as the foundation for various touch‑based and window‑specific input events within Godot.

The class itself contains no public properties or methods beyond those defined in the parent hierarchy. It serves primarily as a type to allow the engine to differentiate between input events that are generated from a window (or viewport) and those that are not.

---

## Inheritance Hierarchy

```
Object
 └─ RefCounted
     └─ Resource
         └─ InputEvent
             └─ InputEventFromWindow
```

---

## Related Classes

* `InputEventScreenDrag` – An event that occurs when the user drags a touch input.
* `InputEventScreenTouch` – An event that represents a touch input.
* `InputEventWithModifiers` – An event that contains modifier key information (e.g., Ctrl, Shift, Alt).

---

## Usage

You typically do not instantiate `InputEventFromWindow` directly.  
Instead, you work with its concrete subclasses (`InputEventScreenTouch`, `InputEventScreenDrag`, etc.) when handling input from a touchscreen or other viewport‑based devices.

Example (GDScript):

```gdscript
func _input(event):
    if event is InputEventScreenTouch:
        print("Touch detected at %s" % event.position)
```

---

## References

* [InputEvent](https://docs.godotengine.org/en/stable/classes/class_inputevent.html)  
* [InputEventScreenTouch](https://docs.godotengine.org/en/stable/classes/class_inputevent screentouch.html)  
* [InputEventScreenDrag](https://docs.godotengine.org/en/stable/classes/class_inputevent screendrag.html)  

---