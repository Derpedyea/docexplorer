**Using VisualShaders**

VisualShaders provide a visual, node‑based workflow for creating shaders in Godot.  
The editor displays a graph of shader nodes, each of which corresponds to a
function or value.  Nodes can be connected together, and the editor shows a
live preview of the resulting material or texture.

---

## Getting started

1. **Create a new shader**  
   - Add a `ShaderMaterial` to a `MeshInstance`/`Sprite`, etc.  
   - Click *New VisualShader* in the material’s *Shader* property.

2. **Open the VisualShader editor**  
   - Double‑click the shader in the inspector or click the *Open* button.

3. **Understand the workspace**  
   - *Graph area* – where nodes are placed and connected.  
   - *Inspector* – properties for the selected node.  
   - *Preview* – real‑time rendering of the shader.

---

## Core concepts

### Nodes

| Node type | Purpose | Typical use |
|-----------|---------|-------------|
| **Input** | Provides values (e.g., time, UV, screen position) | Feed data into the graph |
| **Output** | Declares the final color/normal/depth output | Connect at the end of the graph |
| **Math** | Arithmetic operations | Mix colors, scale, clamp, etc. |
| **Texture** | Sample textures | Apply albedo, normal maps |
| **Color** | Hard‑coded colors | Base colors, tinting |
| **Control** | Blend modes, masks | Combine multiple textures |

### Ports

- **Input ports**: numbers, vectors, colors, textures, samplers.  
- **Output ports**: same data types, used to connect to other nodes.

### Connections

Connect a port from one node’s *output* to another node’s *input* by dragging
the little circle on the port to the target port.  
The graph is automatically compiled each time a connection changes.

---

## Creating a simple shader

1. **Add a `Color` node**  
   - Set its value to a bright color (e.g., `#FF0000`).

2. **Add a `Time` node**  
   - Use its `time` output to drive an animation.

3. **Add a `Sin` node**  
   - Connect `time` → `x` of `Sin`.  
   - Connect `Sin` output to the `red` component of a `Color` node.

4. **Connect to `Output`**  
   - Drag from the `Color` output to the `Albedo` input on the `Output` node.

5. **Preview**  
   - Watch the color pulse in the viewport.

---

## Using samplers and textures

1. **Add a `Texture` node** and load an image.  
2. **Add a `UV` node** to provide coordinates.  
3. **Sample the texture**  
   - Connect `UV` → `UV` of `Texture`.  
   - Connect `Texture` output to `Albedo` of `Output`.

4. **Blend two textures**  
   - Use a `Mix` node, feeding two `Texture` nodes into its inputs.

---

## Advanced techniques

- **Normal mapping** – Add a `Normal` node and connect its output to
  the `Normal` input on the `Output` node.
- **Custom expressions** – Use `Math` nodes to compute dynamic effects
  (e.g., fog, distortion).
- **Parameters** – Drag a port out of the `Output` node to expose a uniform
  that can be changed from code or the editor.

---

## Exporting and using the shader

1. **Save the shader** – it will be stored as `.tres` or `.shader`.
2. **Assign to a material** – create a `ShaderMaterial`, set the shader, and
   apply it to a mesh or sprite.
3. **Change parameters at runtime**  
   ```gdscript
   var mat = $MeshInstance.material_override as ShaderMaterial
   mat.set_shader_param("time", OS.get_ticks_msec() / 1000.0)
   ```
4. **Performance tips**  
   - Keep the node count low.  
   - Cache frequently used values.  
   - Use `Texture` nodes with `Mipmaps` for better quality.

---

## Further reading

- [Godot Shader Language Documentation](https://docs.godotengine.org/en/stable/tutorials/shaders/visual_shaders.html)  
- [ShaderMaterial](https://docs.godotengine.org/en/stable/classes/class_shadermaterial.html)  
- [VisualShader](https://docs.godotengine.org/en/stable/classes/class_visualshader.html)  

---