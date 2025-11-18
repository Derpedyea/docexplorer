**NOTE**: The provided HTML contains the full site navigation but does not include the specific contents of the *Animation* class reference (methods, signals, properties, etc.). Below is a concise Markdown skeleton based on the available information. If a more detailed conversion is required, the full class page HTML should be supplied.

---

# Animation

*Inherits: `Resource` → `RefCounted` → `Object`*

This resource holds data that can be used to animate anything in the engine.

---

## Key Features

| Section | Description |
|---------|-------------|
| **Properties** | - (To be filled from the actual class documentation) |
| **Methods** | - (To be filled from the actual class documentation) |
| **Signals** | - (To be filled from the actual class documentation) |
| **Constants** | - (To be filled from the actual class documentation) |

---

## Usage Notes

- The `Animation` class is used in conjunction with nodes such as `AnimationPlayer`, `AnimationTree`, or `AnimatedSprite2D` to provide animation data.
- Typical workflow involves creating an `Animation` resource in the editor, defining animation tracks, and then assigning it to an animation-playing node.

---

## Related Classes

- [AnimationLibrary](../classes/class_animationlibrary.html)
- [AnimationPlayer](../classes/class_animationplayer.html)
- [AnimationTree](../classes/class_animationtree.html)

---

## Example

```gdscript
# Assuming `my_animation_player` is an AnimationPlayer node
var anim = load("res://my_animation.tres")
my_animation_player.add_animation("run", anim)
my_animation_player.play("run")
```

---

> *For a complete reference, see the official Godot Engine documentation: <https://docs.godotengine.org/en/stable/classes/class_animation.html>*

---