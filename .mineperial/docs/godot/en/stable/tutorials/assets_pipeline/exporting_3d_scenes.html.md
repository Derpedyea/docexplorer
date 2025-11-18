# Exporting 3D scenes

## Overview

In Godot, it is possible to export 3D scenes as a glTF 2.0 file.  
You can export as a **glTF binary** (`.glb` file) or as a **glTF embedded** file (`.gltf` with accompanying `.bin` and texture files). This allows you to create a single-file, platform‑agnostic representation of your 3D scene that can be used in other engines, viewers, or WebGL applications.

---

*(The full tutorial covers the following topics:)*

1. **Preparing the scene** – ensuring meshes, materials, animations, and lights are properly configured for glTF export.
2. **Export settings** – selecting the export format, adjusting the export parameters, and dealing with options such as texture packing or binary output.
3. **Export workflow** – using the Godot editor’s export dialog, command‑line tools, or the `ExportSceneToGLTF` script.
4. **Post‑export cleanup** – verifying the exported files, handling missing data (e.g., physics layers or custom shaders), and troubleshooting common issues.

For detailed instructions, refer to the official Godot documentation page on *Exporting 3D scenes*.

---