# AnimationNodeBlend3

*Inheritance hierarchy:*  
`AnimationNodeBlend3` → `AnimationNodeSync<AnimationNode<Resource<RefCounted<Object>>>`

---

## Overview

`AnimationNodeBlend3` is a node used within an **AnimationNodeBlendTree** to linearly blend three child animations together. It allows you to interpolate between three different animation resources based on a blend position vector or individual blend weights.

> **Note** – This node is only available when using the **AnimationTree** system in Godot 4.x.

---

## Description

Blending works in two dimensions:

| Input | Description |
|-------|-------------|
| **a** | First animation to blend. |
| **b** | Second animation to blend. |
| **c** | Third animation to blend. |
| **blend** | 3‑component vector (`Vector3`) specifying the relative influence of each animation. The values are normalized and summed to 1. |

You can control the blending either programmatically via the `blend_position` property or by exposing it as a `Blend2d` or `Blend3d` parameter in the AnimationTree.

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `blend_position` | `Vector3` | `Vector3(0, 0, 0)` | The current blending weights for the three animations. The sum is automatically clamped to 1. |
| `input_a` | `StringName` | `""` | Name of the first input animation. |
| `input_b` | `StringName` | `""` | Name of the second input animation. |
| `input_c` | `StringName` | `""` | Name of the third input animation. |
| `blend_mode` | `BlendMode` (enum) | `BlendMode::INTERPOLATE` | The blending mode (e.g., linear, additive). |

---

## Methods

| Signature | Description |
|-----------|-------------|
| `void set_blend_position(Vector3 blend)` | Sets the blend weights. Values are normalized internally. |
| `Vector3 get_blend_position() const` | Returns the current blend weights. |
| `void set_input_a(StringName name)` | Connects an animation to input **a**. |
| `StringName get_input_a() const` | Retrieves the animation name connected to input **a**. |
| `void set_input_b(StringName name)` | Connects an animation to input **b**. |
| `StringName get_input_b() const` | Retrieves the animation name connected to input **b**. |
| `void set_input_c(StringName name)` | Connects an animation to input **c**. |
| `StringName get_input_c() const` | Retrieves the animation name connected to input **c**. |
| `void set_blend_mode(BlendMode mode)` | Sets the blend mode. |
| `BlendMode get_blend_mode() const` | Returns the current blend mode. |

---

## Signals

| Signal | Description |
|--------|-------------|
| `blend_changed()` | Emitted whenever the `blend_position` changes. |

---

## Usage Example

```gdscript
var blend_node = AnimationNodeBlend3.new()
blend_node.set_input_a("walk")
blend_node.set_input_b("run")
blend_node.set_input_c("idle")

# Blend 50% walk, 30% run, 20% idle
blend_node.set_blend_position(Vector3(0.5, 0.3, 0.2))

# Connect to a signal
blend_node.connect("blend_changed", callable(self, "_on_blend_changed"))
```

---

## See Also

- [AnimationNodeBlend2](https://docs.godotengine.org/en/stable/classes/class_animationnodeblend2.html)
- [AnimationNodeBlendSpace1D](https://docs.godotengine.org/en/stable/classes/class_animationnodeblendspace1d.html)
- [AnimationNodeBlendSpace2D](https://docs.godotengine.org/en/stable/classes/class_animationnodeblendspace2d.html)
- [AnimationNodeBlendSpace3D](https://docs.godotengine.org/en/stable/classes/class_animationnodeblendspace3d.html)

---