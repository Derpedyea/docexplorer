**Animation Track Types**  
==========================

This page gives an overview of the track types available for Godot’s `AnimationPlayer` node beyond the default **Property** tracks.  
Each track type is designed to animate different kinds of data, enabling rich, multi‑layered animations that can combine motion, audio, function calls, and custom value changes.

---

## 1. Property Track  
The most basic track type. It records changes to a node’s exported property over time.

- **Usage** – Animate transforms, colors, custom script properties, etc.
- **Example** – Rotating a node:

```gdscript
# AnimationPlayer
# Add a Property Track targeting "rotation_degrees" of a Node2D
# Keyframes:
# 0.0  – 0
# 1.0  – 90
```

---

## 2. Animation Track  
Allows you to play a secondary animation on a nested `AnimationPlayer`.

- **Usage** – Combine complex motion chains or trigger sub‑animations.
- **Example** – Trigger a footstep animation on a character:

```gdscript
# AnimationPlayer
# Add an Animation Track on a child node "AnimationPlayer" with animation name "step"
```

---

## 3. Audio Track  
Plays an audio stream at specific times.

- **Usage** – Synchronise music or sound effects with animation.
- **Example** – Play a footstep sound at frame 0.5:

```gdscript
# AudioTrack
# Keyframe at 0.5s: path to "res://footstep.wav"
```

---

## 4. Call Track  
Invokes a method on a target node during animation playback.

- **Usage** – Trigger scripts, spawn particles, change game logic mid‑animation.
- **Example** – Call `explode()` on a `Timer` node at 2.0s:

```gdscript
# CallTrack
# Target: "/root/Enemy"
# Method: "explode"
# Time: 2.0
```

---

## 5. Value Track  
Records raw values of any type (int, float, Vector3, etc.) that can be sampled during animation.

- **Usage** – Drive non‑property logic, such as a shader uniform or a custom script variable.
- **Example** – Animate a float used to drive a shader parameter:

```gdscript
# ValueTrack
# Name: "glow_intensity"
# Keyframes: 0.0 -> 0.0, 1.0 -> 1.5
```

---

## 6. Position & Rotation Tracks  
Specialised tracks for `Node2D` and `Spatial` nodes that handle transform data efficiently.

- **Usage** – Move or rotate a node without manually setting each component.
- **Example** – Move a `Spatial` along a path:

```gdscript
# PositionTrack (Spatial)
# Keyframes: 0.0 -> (0,0,0), 1.0 -> (5,0,0)
```

---

## 7. Custom Tracks (User‑defined)

You can create your own track types by extending `AnimationTrack` and implementing the required callbacks. This is advanced but powerful for specialized animation systems.

- **Usage** – Implement a physics‑based animation track that drives a rigid body’s velocity.
- **Example** – See the [Custom Animation Tracks](https://docs.godotengine.org/en/stable/tutorials/animation/custom_animation_tracks.html) tutorial for details.

---

### Quick Reference

| Track Type | Typical Target | What It Controls | Example Use‑Case |
|------------|---------------|------------------|------------------|
| Property   | Any exported property | Property values | Move, rotate, change colour |
| Animation  | Child `AnimationPlayer` | Start sub‑animation | Footstep animation |
| Audio      | AudioStreamPlayer | Play sound | Footstep, background music |
| Call       | Any node | Invoke method | Trigger explosion |
| Value      | Any custom variable | Sample values | Shader uniform, particle effect |
| Position   | `Node2D`/`Spatial` | Position | Path following |
| Rotation   | `Node2D`/`Spatial` | Rotation | Turning |
| Custom     | User‑defined | Any logic | Physics integration |

---

### Adding Tracks in the Editor

1. Open the **Animation** panel.  
2. Create or select an animation.  
3. Click **Add Track** → choose the desired type.  
4. Set the target property/scene path.  
5. Insert keyframes by clicking the **Insert Key** button or by moving the scrubber.

For detailed instructions, see the [AnimationPlayer Documentation](https://docs.godotengine.org/en/stable/classes/class_animationplayer.html).

---

#### Resources

- [Introduction to the Animation Features](https://docs.godotengine.org/en/stable/tutorials/animation/introduction.html)
- [AnimationPlayer Class Reference](https://docs.godotengine.org/en/stable/classes/class_animationplayer.html)
- [Custom Animation Tracks](https://docs.godotengine.org/en/stable/tutorials/animation/custom_animation_tracks.html)  

---

**Note**: These track types are available in Godot 4.0 and later. Some older engines (Godot 3.x) had slightly different naming conventions (e.g., `AnimationPlayer` instead of `AnimationTree` for advanced blending). Always refer to the version‑specific docs for your engine.