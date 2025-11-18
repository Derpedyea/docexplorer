**PlaceholderMesh**

> *Godot Engine – Class reference (stable)*  

---

### Overview

`PlaceholderMesh` is a special type of `Mesh` resource that Godot creates automatically in two situations:

1. **During editor preview** – to provide a lightweight representation of a custom `Mesh` subclass that hasn't been fully loaded yet.
2. **At runtime when a project is being loaded** – to temporarily replace missing or unloaded mesh assets until their real data can be retrieved.

It inherits from `Mesh`, which in turn extends `Resource` → `RefCounted` → `Object`.

> *This is a purely internal placeholder; you will not normally create or use it directly in a project.*

---

### Inheritance

```
Object
 └─ RefCounted
     └─ Resource
         └─ Mesh
             └─ PlaceholderMesh
```

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mesh` | `Mesh` | `null` | The real mesh that this placeholder will refer to once loaded. |
| `resource_path` | `String` | `""` | Filesystem path to the actual mesh resource. |

> **Note**: Most of these properties are read‑only and managed internally by the engine.

---

### Methods

| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `is_placeholder()` | – | `bool` | Returns `true`. Indicates that the object is a placeholder. |
| `_ready()` | – | – | Called internally to resolve the actual mesh. |
| `_notification(int)` | `int` | – | Handles internal notifications such as `NOTIFICATION_ENTER_WORLD`. |

> **Tip**: You typically never need to call methods on `PlaceholderMesh` directly; they are invoked automatically by the engine.

---

### Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `mesh_ready()` | – | Emitted when the real mesh has been loaded and the placeholder can be replaced. |

---

### Example Usage

You normally do not instantiate `PlaceholderMesh` yourself. However, if you are writing an editor plugin that needs to create a temporary mesh representation, you can do something like:

```gdscript
var placeholder = PlaceholderMesh.new()
placeholder.resource_path = "res://my_custom_mesh.tres"
placeholder.mesh = preload("res://my_custom_mesh.tres")  # will trigger resolution
```

---

### When Does It Appear?

* **Editor** – When you drag a `Mesh` resource that depends on a custom script into a scene but the script has not yet been loaded.  
* **Runtime** – When a scene references a `Mesh` that cannot be loaded immediately (e.g., missing file, slow I/O). The engine will use `PlaceholderMesh` until the actual file is available.

---

### Documentation Links

* [PlaceholderTexture2D](../classes/class_placeholdertexture2d.html) – similar placeholder for textures.  
* [PlaceholderMaterial](../classes/class_placeholdermaterial.html) – similar placeholder for materials.

---