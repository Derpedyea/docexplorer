# Animation

This page is part of the Godot Engine documentation and introduces the basics of animation in Godot.  It covers the two animation nodes (`AnimationPlayer` and `AnimationTree`) as well as the animation editor and various features such as animation tracks, cutout animation, 2D skeletons, and more.

---

## Table of contents

| Section | Link |
|---------|------|
| **Introduction to the animation features** | `introduction.html` |
| **Animation Track types** | *to be added* |
| **Cutout animation** | *to be added* |
| **2D skeletons** | *to be added* |
| **Use cases and tutorials** | *to be added* |

---

### 1. Introduction to the animation features

Godot offers a powerful animation system that can be used for a wide range of purposes, from simple sprite frame changes to complex skeletal animations. The core building blocks are two nodes:

* **`AnimationPlayer`** – a node that stores, plays, and blends animations.
* **`AnimationTree`** – a node that manages animation blending and state machines.

Together with the *Animation Editor*, you can create, edit, and preview animations directly inside the editor.

---

### 2. Animation Track types

Animations in Godot are built from tracks that define how a property or a transform changes over time. The most common track types are:

* **Property Tracks** – animate scalar or vector properties.
* **Transform Tracks** – animate `Transform2D`/`Transform3D` data.
* **Method Tracks** – call methods at specific times.
* **Animation Tracks** – nested animation playback.
* **Bezier Tracks** – interpolate using Bézier curves.

(Details on each type, including how to add, edit, and blend them, are covered in the dedicated sub‑pages.)

---

### 3. Cutout animation

A technique for animating 2D sprites by changing the texture rect of a `Sprite` or `AnimatedSprite2D`. This allows you to reuse a single texture atlas for multiple frames of a character or effect.

---

### 4. 2D skeletons

Godot’s 2D skeleton system lets you rig sprites with bones and pose them in a hierarchical way. It’s ideal for complex character animation or procedural rigging.

---

### 5. Further reading and tutorials

The following tutorials walk you through common animation tasks:

* [Using the Animation Editor](https://docs.godotengine.org/en/stable/tutorials/animation/introduction.html) – basic workflow for creating and playing animations.
* [Animation Track Types](https://docs.godotengine.org/en/stable/tutorials/animation/track_types.html) – detailed guide to each track type.
* [Cutout Animation](https://docs.godotengine.org/en/stable/tutorials/animation/cutout_animation.html) – sprite sheet animation tips.
* [2D Skeletons](https://docs.godotengine.org/en/stable/tutorials/animation/2d_skeletons.html) – building and using a 2D skeleton.
* [Animation Players in 3D](https://docs.godotengine.org/en/stable/tutorials/animation/animation_player.html) – blending and state machines.

--- 

> **Note:**  
> The full set of sub‑sections and detailed code examples can be found in the linked pages above.