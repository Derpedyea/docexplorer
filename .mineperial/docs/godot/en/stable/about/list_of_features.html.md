# List of Features

This page lists all of the features currently supported by Godot Engine, grouped by category.  
For each section, the details of the specific feature are provided in the original documentation.

---

## Platforms

| Platform | Desktop | Mobile | Web | XR |
|----------|---------|--------|-----|----|
| **Windows** | x86, ARM, 64‑bit and 32‑bit | – | – | – |
| **macOS** | x86, ARM (M1), 64‑bit | – | – | – |
| **Linux** | x86, ARM, 64‑bit and 32‑bit | – | – | – |
| **Android** | – | ARM, ARMv7, 64‑bit | – | – |
| **iOS** | – | ARM, ARM64 | – | – |
| **Web** | – | – | WebAssembly | – |
| **HTML5** | – | – | WebAssembly | – |
| **XR** | – | – | – | AR/VR (OpenXR, Oculus, Vive, etc.) |

*All above platforms support both the editor and exported projects.*

---

## Editor

* **Cross‑platform editor** – runs on Windows, macOS, Linux, and on mobile devices with the web editor.
* **Integrated class reference** – searchable API documentation built into the editor.
* **Scene system** – node‑based scene editor with drag‑and‑drop, instancing, and live editing.
* **Script editor** – built‑in code editor with syntax highlighting, autocomplete, and debugger integration.
* **Asset pipeline** – import system that supports a wide variety of 2D/3D formats (see *File Formats* section).

---

## Rendering

| Feature | 2D | 3D |
|---------|----|----|
| **Renderer backends** | OpenGL ES 2/3, Vulkan | OpenGL ES 2/3, Vulkan |
| **Forward+ renderer** | – | Modern forward‑plus rendering pipeline |
| **Compatibility renderer** | – | Legacy rendering pipeline for older hardware |
| **Mobile renderer** | Lightweight 2D renderer | Optimized mobile 3D rendering |
| **Deferred renderer** | – | Deferred shading with physically‑based rendering |
| **Post‑processing** | Bloom, motion blur, SSAO | Bloom, motion blur, SSAO, depth‑of‑field, etc. |
| **Shading language** | Godot Shading Language (GDScript‑style) | Shader language with GLSL/Vulkan support |
| **3D lighting** | – | Global illumination, light baking, shadows |
| **2D lighting** | – | 2D light & shadows support |

---

## 2D Graphics

* **Tilemaps** – built‑in editor, autotiling, and real‑time collision.
* **Sprite and AnimatedSprite2D** – 2D image rendering, animation frames, and animation player.
* **CanvasItem** – custom drawing, shaders, and blending modes.
* **Parallax** – multi‑layer scrolling backgrounds.
* **Shaders** – custom fragment/vertex shaders for 2D nodes.
* **2D physics** – collision shapes, rigid bodies, kinematic bodies, and physics joints.

---

## 2D Tools

* **AnimationPlayer** – timeline based animation editor.
* **TileMap editor** – tile placement and autotile rules.
* **ColorPicker** – built‑in color selection.
* **Path2D** – curved paths for movement and drawing.

---

## 2D Physics

* **Collision shapes** – BoxShape2D, CircleShape2D, CapsuleShape2D, etc.
* **RigidBody2D / KinematicBody2D** – physics simulation with forces and impulses.
* **Area2D** – detect bodies entering/exiting an area.

---

## 3D Graphics

* **MeshInstance3D** – render meshes with materials.
* **Spatial nodes** – transform and hierarchy for 3D scenes.
* **Navigation** – navmesh generation and navigation agents.
* **Animation** – animation blend trees and state machines.

---

## 3D Tools

* **Mesh editor** – built‑in editor for primitive meshes.
* **Physics editor** – visualize collision shapes.
* **Camera** – 3D camera nodes with perspective/orthographic projections.

---

## 3D Physics

* **Collision shapes** – CapsuleShape3D, BoxShape3D, SphereShape3D, etc.
* **RigidBody3D / KinematicBody3D** – physics simulation in 3D.
* **Physics joints** – HingeJoint3D, SliderJoint3D, etc.

---

## Shaders

* **Godot Shader Language** – a high‑level shader language similar to GLSL.
* **Uniforms** – set shader parameters from scripts.
* **Render modes** – blending, cull mode, depth test, etc.

---

## Scripting

* **Languages** – GDScript, C#, C++ (via GDExtension), VisualScript, and Python (via GDNative).
* **Signals** – event system for node communication.
* **Script editor** – autocompletion, debugging, and inline documentation.

---

## Audio

* **AudioStreamPlayer** – playback of audio streams.
* **Audio buses** – mix multiple audio sources.
* **3D positional audio** – spatial sound support.
* **Audio effects** – reverb, EQ, low‑pass, high‑pass, etc.

---

## Import

* **2D** – PNG, SVG, TGA, JPG, GIF, BMP, etc.
* **3D** – OBJ, GLTF, GLB, FBX, DAE, etc.
* **Images** – compressed or uncompressed, mipmaps.
* **Shaders** – custom shader import.

---

## Input

* **Action mapping** – define actions and map to keys, mouse buttons, or gamepads.
* **Input events** – handling key presses, mouse movements, joystick input.

---

## Navigation

* **NavMesh** – automatic generation and pathfinding in 3D.
* **Navigation2D** – pathfinding in 2D.

---

## Networking

* **High‑level multiplayer** – scenes replicated across peers.
* **Low‑level sockets** – TCP, UDP, WebSocket, ENet.

---

## Internationalization

* **Locale support** – built‑in support for multiple languages.
* **Translation files** – .po files and the editor’s translation editor.

---

## Windowing and OS Integration

* **Window size** – set via project settings.
* **Full screen / borderless** – toggled in runtime.
* **Clipboard** – read/write text.

---

## Mobile

* **Android/iOS export** – packaging, signing, and deployment.
* **Touch input** – gestures and on‑screen controls.
* **Accelerometer** – device sensor integration.

---

## XR Support (AR and VR)

* **OpenXR** – cross‑platform XR support.
* **ARCore / ARKit** – augmented reality features.
* **Oculus, Vive, Windows Mixed Reality** – VR headset support.

---

## GUI System

* **Control nodes** – UI elements (Button, Label, TextureRect, etc.).
* **Theme system** – style and skin UI elements.
* **Signals** – UI events such as button pressed.

---

## Animation

* **AnimationPlayer** – keyframed animations.
* **AnimationTree** – blend trees and state machines.
* **Tween** – procedural animation.

---

## File Formats

| Format | Type | Notes |
|--------|------|-------|
| **.tscn/.scn** | Scene file | Text or binary representation of scenes. |
| **.gd** | GDScript | Script files. |
| **.glb/.gltf** | 3D models | Binary or JSON with embedded textures. |
| **.png/.jpg/.tga** | Images | Texture assets. |
| **.ogg/.wav** | Audio | Sound assets. |

---

## Miscellaneous

* **Export templates** – precompiled binaries for various platforms.
* **Plugins** – community and custom editor extensions.
* **Versioning** – Semantic versioning for engine releases.

---