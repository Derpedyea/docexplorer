**Note:** The provided HTML snippet does not contain the full class reference content (methods, properties, signals, etc.). Below is a minimal Markdown representation based on the available information. If you need the complete documentation, please refer to the official Godot Engine documentation page.

---

# GrooveJoint2D

> *Inherits:* `Joint2D` → `Node2D` → `CanvasItem` → `Node` → `Object`

## Description

A physics joint that restricts the movement of two 2D physics bodies to a fixed axis.

---

## Quick Reference

| Section | Link |
|---------|------|
| **Class Reference** | https://docs.godotengine.org/en/stable/classes/class_groovejoint2d.html |
| **Related Joints** | `PinJoint2D`, `RopeJoint2D`, `DampedSpringJoint2D` |

---

### Properties

*(Not listed in the provided snippet – refer to the full documentation for details.)*

### Methods

*(Not listed in the provided snippet – refer to the full documentation for details.)*

### Signals

*(Not listed in the provided snippet – refer to the full documentation for details.)*

---

### Usage Example (GDScript)

```gdscript
# Create a new GrooveJoint2D and configure its groove
var groove_joint = GrooveJoint2D.new()
add_child(groove_joint)

groove_joint.node_a = $BodyA
groove_joint.node_b = $BodyB

groove_joint.groove = Vector2(0, -50)
groove_joint.groove_end = Vector2(0, 50)
groove_joint.groove_local = true
```

---

> For full details on properties, methods, signals, and advanced usage, consult the complete class reference on the Godot Engine website.