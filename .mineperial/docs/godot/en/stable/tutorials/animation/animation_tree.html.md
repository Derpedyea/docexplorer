**Using AnimationTree**

*This page is part of the Godot Engine documentation. It covers the use of the `AnimationTree` node for blending and controlling animations in Godot.*

---

## Overview

`AnimationTree` is a powerful tool that allows you to combine, blend, and control animations from an `AnimationPlayer` or `AnimationNodeBlendTree`. It gives you a visual, node‑based approach to creating complex animation states, blending between actions, and handling transitions.

---

## Prerequisites

* A project set up with a character that has an `AnimationPlayer` node.
* Basic knowledge of Godot’s node system and the animation editor.

---

## Setting up the AnimationTree

1. **Add an `AnimationTree` node** to your character scene.
2. **Connect the `AnimationTree` to the `AnimationPlayer`** by setting the `AnimationPlayer` property of the `AnimationTree` node to reference the existing `AnimationPlayer`.
3. **Enable the `Active` property** on the `AnimationTree` node to make it start evaluating automatically.

### Choosing a Tree Mode

| Mode | Description |
|------|-------------|
| **Blend2** | Blend between two animations using a weight. |
| **Blend3** | Blend between three animations. |
| **Blend4** | Blend between four animations. |
| **StateMachine** | Create a state machine with transitions. |
| **AnimationNodeBlendTree** | Custom blend trees for complex setups. |

---

## Example: Simple Blend

```gdscript
# Inside a script attached to the character
@export var idle_anim: String = "idle"
@export var run_anim: String = "run"

func _process(delta):
    var speed = Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left")
    $AnimationTree.set("parameters/BlendSpace1D/blend_amount", abs(speed))
    $AnimationTree.set("parameters/BlendSpace1D/animation", run_anim if speed != 0 else idle_anim)
```

*This snippet sets the blend amount based on input, smoothly transitioning between idle and running animations.*

---

## Using a State Machine

1. **Add `AnimationNodeStateMachine`** to the root of the blend tree.
2. **Create states** (e.g., `Idle`, `Walk`, `Run`) and assign animation clips to them.
3. **Define transitions** between states with conditions (e.g., velocity thresholds).

```gdscript
# Example state machine transition condition
if is_on_floor() and velocity.length() > 0:
    $AnimationTree.set("parameters/StateMachine/transition/run", true)
else:
    $AnimationTree.set("parameters/StateMachine/transition/idle", true)
```

---

## Tips & Best Practices

* **Keep the blend tree simple** for performance; complex trees can become difficult to maintain.
* **Use `AnimationNodeBlendSpace1D`** for simple linear blending between two or more animations.
* **Cache node references** in `_ready()` for faster access during gameplay.
* **Use animation events** to trigger gameplay logic at specific frames.

---

## Further Reading

* [AnimationPlayer](https://docs.godotengine.org/en/stable/classes/class_animationplayer.html)
* [AnimationNodeBlendTree](https://docs.godotengine.org/en/stable/classes/class_animationnodeblendtree.html)
* [AnimationNodeStateMachine](https://docs.godotengine.org/en/stable/classes/class_animationnodestatemachine.html)

---