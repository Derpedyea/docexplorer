**General optimization tips**  
*Godot Engine (stable) documentation*

> *Introduction:* In an ideal world, computers would run at infinite speed. The only limit to what we could achieve would be our imagination. However, in the real world, it’s all too easy to produce…

---

### 1. Understand the rendering pipeline

- **Draw order** – minimize state changes, batch similar materials.
- **Occlusion culling** – use `Visible`/`Occluder` nodes or built‑in culling.
- **Static vs. dynamic** – mark objects as static to let the engine do optimizations.

### 2. Use appropriate node types

| Node | Use case | Benefit |
|------|----------|---------|
| `Sprite2D` | Simple 2D sprite | Lightweight |
| `MeshInstance3D` | 3D geometry | Efficient batching |
| `TileMap` | Tile‑based levels | Built‑in culling and LOD |

### 3. Manage textures wisely

- Keep texture sizes in powers of two.
- Use compressed formats (`PVRTC`, `ETC`, `ASTC`).
- Avoid changing texture sizes at runtime.

### 4. Profile early and often

```gdscript
# Enable the profiler
OS.set_process_time( true )
```

- Use the built‑in **Profiler** panel.
- Look for spikes in *physics*, *render*, *script* times.

### 5. Optimize scripts

- Cache node references in `_ready()` instead of `get_node()` each frame.
- Prefer signals to polling for events.
- Use `@onready var` for one‑time lookups.

```gdscript
@onready var sprite = $Sprite2D
```

### 6. Use servers where appropriate

- **Physics server**: move bodies in `_physics_process()`.
- **Navigation server**: use `NavigationServer3D` for pathfinding.
- **Audio server**: pre‑load sounds; reuse `AudioStreamPlayer` nodes.

### 7. Reduce draw calls

- **Sprite Atlases** – combine textures.
- **Material sharing** – same `Material` for multiple meshes.
- **Batching** – let Godot merge small meshes.

### 8. Keep the scene tree shallow

- Avoid deep hierarchies; each node adds traversal cost.
- Use groups for bulk operations.

### 9. Leverage mobile‑specific optimizations

- Use the **Mobile** renderer.
- Disable unnecessary post‑processing effects.
- Limit the number of simultaneous lights.

### 10. Test on target hardware

- Run performance tests on the lowest spec device you intend to support.
- Use `debug` builds only for development.

---

**Further reading**

- [Optimization using Servers](https://docs.godotengine.org/en/stable/tutorials/performance/using_servers.html)
- [Performance](https://docs.godotengine.org/en/stable/tutorials/performance/index.html)

---