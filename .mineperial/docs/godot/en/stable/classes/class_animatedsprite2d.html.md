**AnimatedSprite2D – Godot Engine (stable) documentation**

---

## Inheritance
`AnimatedSprite2D` inherits from `Node2D` → `CanvasItem` → `Node` → `Object`.

---

## Description
`AnimatedSprite2D` is a 2D node that displays an animated sprite.  
It behaves similarly to the `Sprite2D` node, but it is designed to play a series of textures (frames) as an animation. The frames can be organized into multiple animation tracks, and each track can be controlled individually via code or the editor.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `animation_changed` | `String name` | Emitted when the current animation changes. |
| `frame_changed` | `int frame` | Emitted when the current frame changes. |
| `animation_finished` | | Emitted when the current animation finishes playing. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `frames` | `SpriteFrames` | `null` | The collection of animation frames. |
| `animation` | `String` | `""` | The name of the currently selected animation. |
| `playing` | `bool` | `false` | Whether the animation is currently playing. |
| `speed_scale` | `float` | `1.0` | Multiplier for the animation speed. |
| `frame` | `int` | `0` | Current frame index. |
| `hframes` | `int` | `1` | Number of horizontal frames in a texture. |
| `vframes` | `int` | `1` | Number of vertical frames in a texture. |
| `frame_offset` | `int` | `0` | Frame offset when the animation is looped. |
| `autoplay` | `bool` | `false` | Whether to play the animation automatically on ready. |

---

## Methods

### `play( [String name] )`
Starts playing the animation named *name* (or the current `animation` if omitted).  
Returns `true` if the animation started successfully.

### `play_backwards( [String name] )`
Starts playing the animation named *name* in reverse.

### `stop()`
Stops the current animation.

### `set_animation(String name)`
Sets the current animation to *name* without starting it.

### `get_animation() → String`
Returns the name of the current animation.

### `has_animation(String name) → bool`
Checks if an animation with *name* exists.

### `get_animation_list() → Array<String>`
Returns all animation names available in the `frames` resource.

### `is_playing() → bool`
Returns whether an animation is currently playing.

### `set_frame(int frame)`
Sets the current frame to *frame*.

### `get_frame() → int`
Returns the current frame index.

### `get_speed_scale() → float`
Gets the current speed multiplier.

### `set_speed_scale(float scale)`
Sets the speed multiplier for the animation.

### `set_autoplay(bool autoplay)`
Enables or disables automatic playback on ready.

### `is_autoplay_enabled() → bool`
Returns the autoplay flag.

---

## Example

```gdscript
var sprite := AnimatedSprite2D.new()
sprite.frames = preload("res://player_frames.tres")
sprite.animation = "run"
sprite.play()
add_child(sprite)
```

---

## Notes

* `AnimatedSprite2D` works with a `SpriteFrames` resource that stores multiple animation tracks.
* Unlike `AnimationPlayer`, it is primarily used for sprite sheet animations rather than node animations.
* For complex animation blending or state machines, consider using `AnimationPlayer` or `AnimationTree`.