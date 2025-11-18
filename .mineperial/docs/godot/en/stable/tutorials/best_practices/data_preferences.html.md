**Data preferences**  
*Godot Engine Documentation – Best practices*

---

# Array vs. Dictionary vs. Object

In Godot, data can be stored in several ways. Choosing the right container for the job is key to writing clean, efficient, and maintainable code.  

| Container | Typical use‑case | Advantages | Disadvantages |
|-----------|-----------------|------------|---------------|
| **Array** | Ordered lists, collections where order matters (e.g. inventory, queue of actions) | Fast random access by index, compact memory layout | O(n) lookups by value, no key‑based access |
| **Dictionary** | Key‑value maps, lookup tables, configuration data | O(1) lookups, flexible key types | Unordered, more memory overhead |
| **Object (Node or custom resource)** | Structured data that needs methods, signals, or persistence | Encapsulates behavior, can be saved/loaded, inherits from Godot classes | Requires more boilerplate, heavier than raw containers |

*Tip:* Use **Arrays** when you only need a simple sequence, **Dictionaries** when you need fast key lookups, and **Objects** when you need a richer API or to expose properties to the editor.

---

# Enumerations: `int` vs. `String`

Godot’s GDScript supports both numeric and string enums.  

```gdscript
enum Color { RED = 0, GREEN, BLUE }
enum Direction { UP = "up", DOWN = "down", LEFT = "left", RIGHT = "right" }
```

### `int` enums
- Stored as small integers → fast comparisons and less memory.
- Ideal for internal logic, bitmasks, and serialization to binary formats.

### `String` enums
- Human‑readable when printing/debugging.
- Useful for exposing to the editor or for JSON interop.

**Recommendation:** Use `int` enums for performance‑critical code and `String` enums for editor‑friendly or external‑interface code. When exposing an enum to the editor, GDScript will show the string representation regardless of the underlying type.

---

# `AnimatedTexture` vs. `AnimatedSprite2D` vs. `AnimationPlayer` vs. `AnimationTree`

| Node / Resource | When to use | Key features | Typical workflow |
|-----------------|-------------|--------------|-------------------|
| **AnimatedTexture** | Static sprite sheet animation (e.g. UI icons) | Plays automatically, low overhead | Create a `AnimatedTexture` in the editor, assign a `SpriteFrames` resource. |
| **AnimatedSprite2D** | 2D character animation with multiple animation tracks | Built‑in animation control, supports multiple animation sets | Add `AnimatedSprite2D`, import a `SpriteFrames` file, set `animation` property. |
| **AnimationPlayer** | Complex animation logic, keyframing arbitrary node properties | Timeline editor, blending, scripting API | Add `AnimationPlayer`, create animations in the editor, play via script. |
| **AnimationTree** | State‑based animation blending (e.g. walk, run, idle) | Node‑based state machine, blend trees | Add `AnimationTree`, set the `AnimationPlayer` it uses, configure the state machine in the editor. |

**Choosing the right one**

* If your animation is simple and tied to a single node, `AnimatedSprite2D` is usually sufficient.
* For UI elements or small looping effects where you don’t need keyframes, `AnimatedTexture` is the most lightweight.
* When you need to animate more complex or multi‑property sequences, `AnimationPlayer` provides full control.
* For character animation that blends between multiple states (idle → walk → run), use an `AnimationTree` on top of an `AnimationPlayer`.

---

*(The original documentation contains additional examples, detailed use‑cases, and screenshots that illustrate the points above.)*