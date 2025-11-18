# FBXState – Godot Engine (stable)

> **Experimental** – This class may be changed or removed in future versions.

---

## Inheritance

`FBXState` inherits from  
`GLTFState<Resource<RefCounted<Object>>>`

---

## Description

The `FBXState` class handles the state data imported from FBX files. It is used internally by the FBX import pipeline to store information about the imported scene, meshes, materials, skeletons, animations, and other assets that are created when an FBX file is imported into Godot.

---

## Class Overview

| Section | Description |
|---------|-------------|
| **Methods** | Public and protected member functions for querying and manipulating the imported data. |
| **Properties** | Read‑only properties that expose details about the imported scene. |
| **Signals** | Emitted during various stages of the import process. |
| **Enums** | Enumerations used to identify import options or result codes. |

> **Note**: The complete list of methods, properties, signals and enums can be found in the Godot documentation under *Class Reference → FBXState*.

---

## Documentation Navigation

* **Previous class**: [FBXDocument](../class_fbxdocument.html)
* **Next class**: [FogMaterial](../class_fogmaterial.html)

---

### Further Reading

* [FBXDocument](../class_fbxdocument.html) – the container for an FBX file before it is processed into a scene.
* [GLTFState](../class_gltfstream.html) – the base class that provides shared functionality for GLTF and FBX import states.