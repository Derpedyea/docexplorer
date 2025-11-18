# AnimationLibrary

> **Inheritance**  
> `Resource` → `RefCounted<Object>`  

Container for animation resources that can be referenced by a `StringName` key.  
Used primarily by `AnimationNodeBlendTree`, `AnimationTree`, and `AnimationPlayer` to manage multiple named animations.

---

## Overview

An `AnimationLibrary` is a resource that holds a set of `Animation` objects, each indexed by a unique string key.  
It is typically created and edited in the Godot editor via the “Animation Library” tab of an `AnimationPlayer`.  
The library can be saved as a separate file (`*.tres`) and shared between scenes or reused by multiple `AnimationPlayer` instances.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `animations` | `Dictionary` | `{}` | A dictionary mapping animation names (`StringName`) to `Animation` resources. |
| `animation_names` | `Array[StringName]` (read‑only) | – | List of all animation names in the library. |

> *Note:* The dictionary is not directly exposed in the editor; use the provided methods to modify it.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `add_animation(name: StringName, animation: Animation) → void` | Adds an animation to the library. If an animation already exists with the given name it will be replaced. |
| `remove_animation(name: StringName) → void` | Removes the animation identified by `name`. |
| `get_animation(name: StringName) → Animation?` | Retrieves the animation for the specified key, or `null` if it does not exist. |
| `has_animation(name: StringName) → bool` | Returns `true` if the library contains an animation with the given name. |
| `get_animation_names() → Array[StringName]` | Returns an array of all animation names stored in the library. |
| `clear() → void` | Removes all animations from the library. |
| `duplicate() → AnimationLibrary` | Creates a copy of this library, including all contained animations. |
| `is_empty() → bool` | Returns `true` if the library contains no animations. |
| `load(path: String) → void` | (Editor only) Loads an existing animation library from disk. |

> **Godot 4 specific notes**  
> * `AnimationLibrary` is a *Resource*, so you can create it in GDScript with `var lib = AnimationLibrary.new()` and add it to a node’s `AnimationPlayer` via the editor or `set_animation_library()`.  
> * When an `AnimationPlayer` has a library assigned, all animations in the library become available as **named** animations that can be blended or switched from within the tree.  

---

## Signals

| Signal | Description |
|--------|-------------|
| `animation_changed(name: StringName)` | Emitted when an animation is added, removed, or modified. |

> *Note:* This signal is rarely used directly in code but can be useful when you need to keep a UI in sync with the library.

---

## Example

```gdscript
# Create an animation library
var lib = AnimationLibrary.new()

# Load an animation and add it to the library
var anim = load("res://walk.tres")
lib.add_animation("walk", anim)

# Assign it to an AnimationPlayer
var player = $AnimationPlayer
player.set_animation_library(lib)

# Play it
player.play("walk")
```

---

## Editor integration

* In the **Animation** panel you can click **Add Library** to create a new `AnimationLibrary` or **Load Library** to open an existing one.  
* Once a library is attached to an `AnimationPlayer`, the editor shows all its animations in the **Animation** list.  
* Animations inside a library can be edited directly – just double‑click the animation name or right‑click to open the Animation editor.

---

## Common use cases

| Use case | How to set it up |
|----------|------------------|
| **Shared animation sets** | Store a library in a reusable `.tres` file and load it into multiple `AnimationPlayer`s. |
| **Runtime animation swapping** | Create several libraries (e.g., `idle_lib`, `run_lib`) and change the player’s library at runtime to switch animation sets. |
| **Modular character animation** | Keep base movements in a library and add variant animations per character by merging libraries. |

---

### Tips

* Use meaningful, unique names for animations; they are case‑insensitive but collisions will silently replace existing entries.  
* If you need to reference an animation from a script, prefer `AnimationPlayer.play()` with the library’s key rather than directly loading the `Animation` resource.  
* The `AnimationTree` node can automatically pick animations from a library if you connect the library’s `animation_changed` signal to a refresh function.

---