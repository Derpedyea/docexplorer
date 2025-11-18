**AnimatedSprite3D**  
*Class reference for Godot Engine (stable)*

---

### Inheritance
`AnimatedSprite3D` inherits from  
`SpriteBase3D` → `GeometryInstance3D` → `VisualInstance3D` → `Node3D` → `Node` → `Object`

---

### Description
A 2D sprite node that can be placed in 3D space, supporting multiple 2D textures for animation.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| *[Add property details here]* | | | |

> **Note:** The complete list of properties can be found on the official Godot documentation page.

---

## Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| *[Add method details here]* | | | |

> **Note:** The full method list is available in the official documentation.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| *[Add signal details here]* | | |

---

## Usage Example

```gdscript
var sprite = AnimatedSprite3D.new()
sprite.frames = preload("res://my_animations.tres")
sprite.play("run")
add_child(sprite)
```

---

### Further Reading

- [AnimationPlayer](https://docs.godotengine.org/en/stable/classes/class_animationplayer.html)
- [AnimationTree](https://docs.godotengine.org/en/stable/classes/class_animationtree.html)

---

**End of reference.**