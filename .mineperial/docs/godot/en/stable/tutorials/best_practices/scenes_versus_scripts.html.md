**When to use scenes versus scripts**  
*Godot Engine – Best Practices*

---

### 1.  Anonymous types
* An **anonymous type** is a script that is attached directly to a node in a scene.  
* The script is **not saved** as a separate `.gd` file – it lives inside the scene file (`.tscn`).  
* Use anonymous scripts when  
  * the logic is tightly coupled to a single node,  
  * you don’t need to reuse the script elsewhere,  
  * you want to keep a small “utility” script that won’t be referenced from code.  

```gdscript
# Inside a scene file, the script block is embedded
extends Node2D

func _ready():
    print("Hello from an anonymous script!")
```

*Because the script lives inside the scene, it can’t be `extends`-ed from other scenes and you can’t `preload` it. It’s a quick way to add behaviour to a node without creating an extra file.*

---

### 2.  Named types
* A **named type** is a standalone script file that declares a class (optionally with `class_name`).  
* It can be reused across the project by `extends`‑ing the class or `preloading` it.  

```gdscript
# res://scripts/Enemy.gd
class_name Enemy
extends CharacterBody2D

func _physics_process(delta):
    # Enemy movement logic
```

*Benefits*

| Aspect | Anonymous | Named |
|--------|-----------|-------|
| Reusability | No | Yes |
| Compile‑time linking | No | Yes |
| Separate editing | No | Yes |
| Code navigation | Hard | Easy |

*When you need a node that will appear in multiple scenes or is part of a larger subsystem, use a named script.*

---

### 3.  Performance of Script vs PackedScene
* **PackedScene**: A pre‑compiled, binary representation of a scene.  
  * Instantiating a PackedScene is fast (`var instance = scene.instantiate()`).
  * Memory usage is lower for many small scenes because shared resources are de‑duplicated.
  * Ideal for entities that need to be instantiated many times (e.g., bullets, enemies).

* **Script**: Adding a script to an existing node is lightweight, but
  * If you repeatedly add the same script to many nodes, the engine has to create separate copies of the script object for each node, which can increase memory usage.
  * For single‑use logic, an anonymous script is fine.

*Key rule of thumb*  
> If you *instanciate* a node more than once in a scene or at runtime, use a separate scene (`PackedScene`).  
> If the logic is unique to a single node, an anonymous or named script is acceptable.

---

### 4.  Conclusion
| Scenario | Recommended approach |
|----------|----------------------|
| Small, one‑off behaviour attached to a single node | Anonymous script |
| Reusable behaviour that might be attached to many nodes | Named script |
| Large object that you want to instantiate many times | Separate scene file + `PackedScene` |
| Complex hierarchy that is reused across levels | Scene instance |

*Keep your project organized by:*

1. **Separating logic and composition** – use scenes for composition (nodes & transforms), scripts for behaviour.  
2. **Avoiding unnecessary scene files** – if a node only exists once and has trivial logic, keep it in the same scene.  
3. **Profiling** – use the built‑in profiler to spot any memory spikes due to many anonymous scripts.

---

#### Useful Links
* [Scene organization – best practices](/tutorials/best_practices/scene_organization.html)  
* [Autoloads versus regular nodes](/tutorials/best_practices/autoloads_versus_internal_nodes.html)  
* [Godot notifications](/tutorials/best_practices/godot_notifications.html)  

---