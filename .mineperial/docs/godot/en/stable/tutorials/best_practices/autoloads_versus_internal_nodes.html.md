**Autoloads versus regular nodes**

Godot offers a feature to automatically load nodes at the root of your project, allowing you to access them globally. This can fulfill the role of a Singleton: a node that is instantiated once and remains available throughout the entire lifetime of the project. The following sections explain when and why to use autoload nodes instead of ordinary scene‑instanced nodes.

---

## The cutting audio issue

In some circumstances, playing sounds from a regular node that gets freed or removed can cause audio to be abruptly cut off. Autoload nodes are persistent across scenes, so using an autoload to handle audio playback guarantees that your sounds continue (or stop) in a controlled manner, independent of the scene hierarchy.

---

## Managing shared functionality or data

Autoloads are useful for storing data or functionality that needs to be shared globally, such as:

* Global game state (score, level manager, etc.)
* Configuration or settings objects
* Utility services (logging, networking manager, etc.)

Because they are available from any other script via a simple global reference, they eliminate the need to pass references around or rely on `get_node()` calls to traverse the scene tree.

---

## When you should use an Autoload

Use an autoload node when:

1. **The object must persist across all scenes** (e.g., a player controller that should survive scene changes).
2. **You need global access** without the overhead of searching the scene tree each time.
3. **The node is lightweight and inexpensive to create once** (e.g., a singleton manager rather than a heavy component).
4. **You want to avoid tight coupling between nodes**; an autoload can act as a central hub for communication.

Conversely, avoid autoloads for:

* Objects that only belong to a single scene.
* Heavy or frequently changing objects where creating a dedicated node each time would be more efficient.
* Situations where you want to keep dependencies explicit and avoid the “god‑object” anti‑pattern.

---

*(Further details, examples, and code snippets can be found in the official Godot documentation.)*