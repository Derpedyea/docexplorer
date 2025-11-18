# AnimationNodeTimeSeek

**Inherits:** `AnimationNode`

A time‑seeking animation node used in **AnimationTree**.  
This node can be used to force a seek command to happen to a specific
point in the animation, which is handy for synchronising animations,
skipping to a frame or resetting an animation to a known state
without having to use the `AnimationPlayer` directly.

---

## Description

The `AnimationNodeTimeSeek` node works in the same way as a normal
`AnimationNode`, but with an additional ability: it can jump the
animation to an arbitrary time.  
When the node receives a seek command, it tells the owning
`AnimationTree` to jump the playback position to the time that the node
has stored in its `seek_time` property.  
This can be used for:

* **Jumping to a specific frame** when a condition is met.
* **Synchronising multiple animations** that share a common time
  reference.
* **Restarting an animation** at a particular point when the player
  performs an action.

---

## Properties

| Property | Type   | Default | Description |
|----------|--------|---------|-------------|
| `seek_time` | `float` | `0.0` | The absolute time in seconds to jump to when the node is triggered. |
| `auto_seek` | `bool` | `false` | When `true`, the node automatically performs a seek to `seek_time` as soon as it is enabled. |
| `relative` | `bool` | `false` | If `true`, the seek is performed relative to the current playback position. |

> **Tip:** The property names are exposed to the `AnimationTree` inspector,
> so you can tweak them at runtime via code or the editor.

---

## Methods

| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `seek(float time)` | `time` – Target time in seconds | `void` | Seeks the animation to the given absolute time. |
| `seek_relative(float offset)` | `offset` – Seconds to offset the current time | `void` | Seeks the animation relative to its current playback position. |
| `get_seek_time() -> float` | – | `float` | Returns the current value of `seek_time`. |
| `set_seek_time(float time)` | `time` – New target time | `void` | Sets the target seek time. |
| `is_auto_seek() -> bool` | – | `bool` | Returns whether `auto_seek` is enabled. |
| `set_auto_seek(bool enable)` | `enable` – Enable/disable auto‑seek | `void` | Enables or disables automatic seeking. |

> The `seek()` and `seek_relative()` methods are useful when you want
> to trigger a seek from code rather than letting the tree handle it
> automatically.

---

## Signals

*None.*

---

## Usage Example

```gdscript
# Assuming an AnimationTree is in the scene with a child node named
# "TimeSeek" that uses AnimationNodeTimeSeek.

var tree = $AnimationTree
tree.active = true

# Seek to 2.5 seconds when the player presses the "S" key
func _process(_delta):
    if Input.is_action_just_pressed("ui_accept"):
        tree.set("parameters/TimeSeek/seek_time", 2.5)
        tree.set("parameters/TimeSeek/relative", false)
        tree.set("parameters/TimeSeek/autoseek", true)
```

In the example above, the `TimeSeek` node is configured through
the `parameters` path of the `AnimationTree`.  Setting `autoseek` to
`true` makes the node jump to the target time immediately after
changing the value.  If `relative` were set to `true`, the seek would
be performed relative to the current position instead of absolute.

---

### When to Use `AnimationNodeTimeSeek`

* **Syncing cutscenes** – Jump to a particular moment in a long
  animation when a specific event occurs.
* **Resetting animations** – Bring a character back to a known pose
  when the player respawns.
* **Testing** – Quickly skip to a point in a complex animation to
  debug a behaviour that only appears later in the track.

---

> For more on how to set up an `AnimationTree` and connect nodes, see
> the official [AnimationTree](https://docs.godotengine.org/en/stable/classes/class_animationtree.html)
> documentation.

---