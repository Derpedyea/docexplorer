**AnimationNode**  
*Godot Engine – Class Reference*  

---  

### Overview  
`AnimationNode` is the base class for nodes that process and mix animations in the Godot animation system. It is a `Resource` that inherits from `RefCounted<Object>` and serves as a building block for more specialized nodes such as `AnimationNodeAdd2`, `AnimationNodeBlendSpace1D`, `AnimationNodeTransition`, etc.  

---

### Inheritance Diagram  

```
Resource
 └─ RefCounted<Object>
     └─ AnimationNode
```

---

### Inherited By  

- `AnimationNodeExtension`  
- `AnimationNodeOutput`  
- `AnimationNodeSync`  
- `AnimationNodeTimeScale`  
- `AnimationNodeTimeSeek`  
- `AnimationRootNode`  

---

### Description  

`AnimationNode` defines the API for blending, sequencing, and manipulating animation tracks. It is intended to be subclassed by engine or user code to create custom animation behaviors.  

---

### Properties  

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **`mix_mode`** | `int` | `0` | Defines how this node mixes animation outputs. |
| **`debug_enabled`** | `bool` | `false` | If true, the node outputs debug information. |
| **`process_mode`** | `int` | `0` | Determines how the node processes in the animation tree. |
| **`animation_name`** | `String` | `""` | Name of the animation resource used. |

*(Additional properties can be accessed via the editor or GDScript.)*

---

### Methods  

| Method | Arguments | Return | Description |
|--------|-----------|--------|-------------|
| `is_active()` | – | `bool` | Returns whether the node is currently active. |
| `set_mix_mode(mode: int)` | `mode` | – | Sets the mix mode for blending. |
| `set_debug_enabled(enabled: bool)` | `enabled` | – | Enables or disables debug output. |
| `get_output()` | – | `Dictionary` | Retrieves the current animation output. |
| `process(delta: float)` | `delta` | – | Process animation logic; called by the animation server. |

*(All other methods are inherited from `Resource`/`RefCounted`).*

---

### Signals  

- `animation_finished(anim_name: String)` – Emitted when an animation finishes playing.  
- `node_changed()` – Emitted when the node's configuration changes.  

---

### Usage Example (GDScript)

```gdscript
var node = AnimationNode.new()
node.set_mix_mode(AnimationNode.MIX_MODE_BLEND)
node.set_debug_enabled(true)

func _process(delta):
    node.process(delta)
```

---

### Related Classes  

- [AnimationTree](../class_animationtree.html) – Container for `AnimationNode`s.  
- [AnimationNodeAdd2](../class_animationnodeadd2.html) – Adds two animations.  
- [AnimationNodeBlendSpace1D](../class_animationnodeblendspace1d.html) – Blends 1‑D space.  

---  

*For detailed API reference, consult the Godot Engine documentation or the editor's class reference.*