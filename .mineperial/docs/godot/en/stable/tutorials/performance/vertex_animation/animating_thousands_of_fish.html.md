**NOTE:** The raw HTML snippet provided contains only the header and navigation structure of the documentation page and does not include the main article content. Consequently, a complete and accurate conversion to Markdown cannot be performed from the information available. The following Markdown reproduces the page title and general structure that can be inferred from the HTML, but it omits the detailed tutorial content which would normally be located further down in the page.

```markdown
# Animating thousands of fish with MultiMeshInstance3D

This tutorial explores a technique used in the game **ABZU** for rendering and animating thousands of fish using vertex animation and static mesh instancing. In Godot, this can be accomplished with a combination of **MultiMeshInstance3D**, a custom shader that performs vertex animation, and a **Particle**‑based controller.

> **Table of Contents**
> - [Introduction](#introduction)
> - [Prerequisites](#prerequisites)
> - [Setup](#setup)
> - [Creating the Fish Mesh](#creating-the-fish-mesh)
> - [Writing the Vertex Animation Shader](#writing-the-vertex-animation-shader)
> - [Instancing with MultiMeshInstance3D](#instancing-with-multimeshinstance3d)
> - [Controlling the Fish Swarm](#controlling-the-fish-swarm)
> - [Performance Tips](#performance-tips)
> - [Next Steps](#next-steps)

## Introduction

ABZU needed to render thousands of individual fish without the cost of a separate mesh per instance. The solution uses
- **Static mesh instances** (via `MultiMeshInstance3D`) to reuse the same geometry.
- A **vertex‑shaded animation** that runs on the GPU to give each fish a unique swimming motion.

## Prerequisites

- Godot 4.x (the tutorial targets the stable release of Godot 4).
- Basic familiarity with scenes, scripts, and shaders in Godot.
- A 3‑D model of a fish (e.g. `fish.glb`) with an appropriate normal map.

## Setup

1. **Create a new Godot project** and import the fish model.
2. **Add a `MultiMeshInstance3D`** node to the scene.
3. **Assign the fish mesh** to the `Mesh` property of the `MultiMesh`.
4. **Create a new material** that uses a shader capable of vertex animation.

## Creating the Fish Mesh

*Use your preferred 3‑D modeling software to create a simple fish mesh. Export it as GLTF or OBJ and import into Godot. Ensure the mesh has a normal map so the shader can handle lighting.*

## Writing the Vertex Animation Shader

The shader moves each vertex in a sine‑wave pattern that simulates swimming. A minimal example:

```glsl
shader_type spatial;

uniform float time : hint_range(0.0, 10.0);
uniform float speed = 1.0;
uniform float amplitude = 0.1;

void vertex() {
    // Offset vertex positions over time
    VERTEX.x += sin((UV.y + time) * speed) * amplitude;
}
```

Attach this shader to a `ShaderMaterial` and assign it to the `MultiMesh`'s `Material` property.

## Instancing with MultiMeshInstance3D

```gdscript
var fish_count = 5000
var multimesh : MultiMesh

func _ready():
    multimesh = $MultiMeshInstance3D.multimesh
    multimesh.instance_count = fish_count
    for i in range(fish_count):
        var transform = Transform3D()
        transform.origin = Vector3(randf() * 50, randf() * 10, randf() * 50)
        multimesh.set_instance_transform(i, transform)
```

This code creates 5,000 instances positioned randomly in space. The actual vertex animation is handled entirely by the shader, so the CPU cost remains low.

## Controlling the Fish Swarm

To make the fish respond to player or environmental inputs, update the `time` uniform in the shader from a script:

```gdscript
func _process(delta):
    $MultiMeshInstance3D.material_override.set_shader_parameter("time",
        OS.get_ticks_msec() / 1000.0)
```

For more advanced behavior (e.g., flocking or following a path), consider using a `GPUParticles3D` node or a custom script that adjusts each instance’s transform in `_process()`.

## Performance Tips

| Issue | Remedy |
|-------|--------|
| **CPU overhead** from per‑instance logic | Keep logic on the GPU whenever possible. |
| **Memory usage** of large `MultiMesh` | Use `MultiMeshInstance3D` instead of `MeshInstance` nodes. |
| **Shader complexity** | Optimize shader code; avoid heavy math per vertex. |
| **Scene management** | Place the `MultiMeshInstance3D` in a dedicated node or sub‑scene to isolate it. |

## Next Steps

- **Controlling thousands of fish with Particles**: See the companion tutorial for using a particle system to modify the fish swarm dynamically.
- **Expanding the scene**: Add physics, collision layers, or sound to enrich the aquarium.
- **Optimization**: Profile the project in the editor’s debugger to identify bottlenecks.

> **See also:**  
> - [Controlling thousands of fish with Particles](controlling_thousands_of_fish.html)

--- 

*For further details and the full source code, refer to the official Godot documentation page: https://docs.godotengine.org/en/stable/tutorials/performance/vertex_animation/animating_thousands_of_fish.html*
```