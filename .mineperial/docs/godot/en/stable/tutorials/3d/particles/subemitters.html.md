# Particle sub‑emitters

> *Chained sub‑emitters – sometimes a visual effect cannot be created with a single particle system alone. A particle system may need to be spawned in response to something that happens in another system, or it may need to spawn its own particles for more complex behaviors.*

> _Source: Godot Engine documentation (stable) – “Particle sub‑emitters”_

> This tutorial explains how to use sub‑emitters in Godot’s 3‑D particle system to create complex, chained effects. Sub‑emitters allow you to spawn a secondary particle system when a particle reaches a certain condition (e.g. lifetime, collision, or a user‑defined event). The resulting “child” particles can be used for explosions, smoke, sparks, or any other effect that needs to be triggered by an existing particle stream.

## What are sub‑emitters?

A *sub‑emitter* is a special particle mode that you attach to a **CPUParticles** or **GPUParticles** node. When the emitter’s particles satisfy a trigger condition, a secondary particle system is spawned at the particle’s position. Sub‑emitters are useful for:

* Splitting one effect into smaller, independent parts (e.g., an explosion that releases sparks).
* Reusing a single particle resource for multiple effects.
* Creating multi‑stage or cascaded particle effects.

## How to set up a sub‑emitter

1. **Create the main particle system**  
   Add a `GPUParticles` node to your scene. Configure its `Process Material`, texture, emission shape, and other parameters to produce the base effect.

2. **Create a second particle system for the sub‑emitter**  
   Add another `GPUParticles` node as a child (or separate node) and configure it to produce the secondary effect (e.g., a burst of sparks). Disable its *Autoplay* so it only emits when triggered.

3. **Configure the main emitter’s sub‑emitter**  
   In the main emitter’s inspector, locate the **Sub-Emitter** property.  
   * **Sub-Emitter Mode** – set it to `Sub-Emitter`.  
   * **Sub-Emitter** – assign the secondary particle node.  
   * **Sub-Emitter Lifetime** – time (seconds) a sub‑emitter remains active.  
   * **Sub-Emitter Amount** – number of sub‑emitters to spawn per triggering particle.  
   * **Sub-Emitter Transform** – optional transformation applied to emitted particles.

4. **Set a trigger**  
   In the main emitter’s **Process Material** (or a shader) add a **Custom** or **Script** parameter that determines when a particle triggers a sub‑emitter. Common triggers are:
   * **Lifetime** – when the particle reaches its lifespan.
   * **Collision** – when it hits another object.
   * **Custom Parameter** – use a script to set a boolean or vector that the shader checks.

5. **Test**  
   Play the scene and observe the sub‑emitter particles appearing at the expected moments.

## Example: An explosion with spark sub‑emitters

1. **Main explosion particles** – use a `GPUParticles` node with a burst of flame textures.
2. **Spark particles** – another `GPUParticles` node using a small, white texture and a fast, short‑lived lifetime.
3. In the explosion’s material, add a **`trigger`** float parameter.
4. In a script attached to the explosion, set `trigger` to `1.0` at the explosion’s start.
5. In the shader, when `trigger` is `1.0`, set a random velocity for a subset of particles, and set their `sub_emitter` flag to true.
6. The spark particles spawn automatically at the flame particle positions, creating a realistic burst effect.

## Tips & Tricks

| Tip | Explanation |
|-----|-------------|
| **Use GPU particles for performance** | Sub‑emitters run on the GPU and avoid CPU overhead. |
| **Limit sub‑emitter count** | Too many sub‑emitters can degrade performance. Use `Sub-Emitter Amount` wisely. |
| **Reuse sub‑emitters** | Instead of creating a new sub‑emitter each time, configure a pool of reusable particle nodes. |
| **Chain multiple levels** | A sub‑emitter can itself have a sub‑emitter for more complex cascades. |

## Next steps

* [3D Particle trails](https://docs.godotengine.org/en/stable/tutorials/3d/particles/trails.html) – learn how to create trailing effects.
* Experiment with different emission shapes (sphere, box, etc.) and transform options to create unique visual behaviors.

--- 

*This page is part of the Godot Engine documentation: <https://docs.godotengine.org/en/stable/tutorials/3d/particles/subemitters.html>*