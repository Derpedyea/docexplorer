**Fixing jitter, stutter and input lag**  
*Godot Engine (stable) documentation*

---

### 1. What is jitter, stutter and input lag?

| Term | What it means | How it appears |
|------|---------------|----------------|
| **Jitter** | Random, small-scale motion caused by varying frame times. | Objects appear to wobble or “shake” even when the scene is running smoothly. |
| **Stutter** | Visible pause or lag in animation/physics when the frame rate drops below the target. | A frame or two might be delayed, making movement feel jerky. |
| **Input lag** | Delay between the user’s input and the engine’s response. | Controls feel “sluggish” or unresponsive, especially on high‑refresh‑rate displays. |

---

### 2. Why do they happen?

* **Variable frame timing** – if the rendering time for a frame varies, the engine may need to skip or interpolate frames.  
* **VSync / adaptive sync** – on some displays vsync can introduce latency or uneven frame times.  
* **Physics / process timing** – using a frame‑rate dependent physics loop (`_process`) instead of a fixed timestep can make motion inconsistent.  
* **CPU/GPU bottlenecks** – if the GPU cannot keep up with the target FPS, frames get queued and stutter appears.  
* **High‑quality settings** – anti‑aliasing, post‑processing, and other effects increase the time per frame.  

---

### 3. How to fix jitter

| Step | Action | Why |
|------|--------|-----|
| 1 | Disable VSync or use `AdaptiveSync` if the display supports it. | Removes the forced synchronization that can introduce uneven frame times. |
| 2 | Use a fixed physics FPS (`Project Settings → Physics → Common → Physics FPS`). | Keeps the physics step constant, preventing jitter in physics simulations. |
| 3 | Enable **physics interpolation** (`Project Settings → Rendering → 3D → Interpolation`). | Smooths the visual position of moving objects between physics steps. |
| 4 | Reduce or disable costly post‑processing effects. | Less time per frame → more consistent timing. |
| 5 | Profile the game (`Debugger → Profiler`) and identify bottlenecks. | Target the specific areas that cause frame drops. |

---

### 4. How to fix stutter

1. **Cap the frame rate** to a value that the GPU can reliably maintain (e.g., 60 fps).  
2. **Use `Use VSync`** only if it is the stable target; otherwise enable `Use Adaptive VSync` on capable monitors.  
3. **Keep the physics FPS in sync with the render FPS** (typically both set to 60).  
4. **Avoid heavy one‑time work** in `_process` or `_physics_process` (e.g., loading large meshes).  
5. **Batch draw calls** and reduce overdraw.  
6. **Enable `Use Threaded Rendering`** if the project can benefit from multi‑threaded GPU uploads.  

---

### 5. How to reduce input lag

| Setting | Where | Effect |
|---------|-------|--------|
| `Use Input Delay` | `Project Settings → General → Input → Delay` | Reduces latency for touch or mouse events. |
| Disable OS‑level mouse smoothing | Operating system preferences | Keeps raw input timings. |
| Use a **fixed timestep** for logic that is driven by input (e.g., movement). | Code: use `_physics_process(delta)` | Ensures input handling is in sync with physics simulation. |
| Lower the **render resolution** on mobile or low‑end hardware | `Project Settings → Display → Window → Size` | Faster frame rendering → less time to process input. |
| Use **high‑performance mode** on mobile devices (in the OS or Godot's export settings). | Export preset | Keeps the GPU from sleeping or throttling. |

---

### 6. Quick checklist

| Check | Description |
|-------|-------------|
| `VSync` | Off (or Adaptive) |
| `Physics FPS` | 60 |
| `Render FPS` | 60 (or match `Physics FPS`) |
| `Interpolation` | Enabled |
| `Threaded Rendering` | Enabled if needed |
| Profile | Identify any heavy per‑frame work |
| Input handling | Use `_physics_process` for time‑dependent logic |

---

### 7. Further reading

* [The Compositor](../compositor.html) – how post‑processing can affect performance.  
* [Multiple resolutions](../multiple_resolutions.html) – setting up your project for different displays.  
* [Troubleshooting > The editor stutters and flickers](../../troubleshooting.html#the-editor-stutters-and-flickers-on-my-variable-refresh-rate-monitor-g-sync-freesync) – similar issues in the editor.  

--- 

> **Tip:**  
> If you still experience problems after applying the above fixes, use the built‑in profiler (`Debugger → Profiler`) to see which part of your scene is causing the slowdown. Reducing draw calls or simplifying shaders is often the key to stable performance.