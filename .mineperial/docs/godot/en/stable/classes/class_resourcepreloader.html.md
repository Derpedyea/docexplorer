**ResourcePreloader**

> *Inherits:* `Node`

---

### Description
`ResourcePreloader` is a node that preloads sub‑resources inside a scene.  
When the scene is loaded, all resources listed in the preloader are already
available, which can reduce load times and avoid runtime delays caused by
on‑demand loading.

> **Tip**  
> Use a `ResourcePreloader` whenever you want to guarantee that heavy
> resources (e.g. textures, audio files, scenes) are available before the
> player reaches a certain point in the game.

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `resources` | `Dictionary` | `{}` | Dictionary mapping a user‑supplied name to the preloaded resource. |
| `verbose` | `bool` | `false` | If `true`, logs details about resources as they are loaded. |

---

## Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `preload` | `void preload(String path, String name = "")` | Adds the resource at *path* to the preloader. If *name* is omitted, the resource’s file name is used. |
| `get` | `Resource get(String name)` | Returns the preloaded resource that was stored under *name*. |
| `has` | `bool has(String name)` | Checks whether a resource with *name* has already been preloaded. |
| `clear` | `void clear()` | Removes all preloaded resources from the preloader. |

> **Example**  
> ```gdscript
> var preloader = ResourcePreloader.new()
> add_child(preloader)
> 
> # Preload a sprite texture
> preloader.preload("res://assets/player.png", "player_texture")
> 
> # Later in code
> var tex = preloader.get("player_texture")
> ```

---

## Signals

| Signal | Description |
|--------|-------------|
| `resource_loaded(String name, Resource res)` | Emitted when a resource finishes loading. |

---

### Related Classes

* [Node](../classes/class_node.html) – The base class of `ResourcePreloader`.  
* [Resource](../classes/class_resource.html) – Resources that can be preloaded.

---

> **Documentation Source**  
> For full API reference, see the official Godot Engine documentation:
> <https://docs.godotengine.org/en/stable/classes/class_resourcepreloader.html>
