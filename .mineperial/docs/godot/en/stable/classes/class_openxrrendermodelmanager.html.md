**OpenXRRenderModelManager**  
*Godot Engine – Class Reference*

---

### Inheritance  
`OpenXRRenderModelManager` ← `Node3D` ← `Node` ← `Object`

---

### Description
`OpenXRRenderModelManager` is a helper node that automatically manages displaying OpenXR render models (the 3‑D meshes that represent the user's controllers).  
When added to a scene it will:

* Detect active OpenXR controllers.  
* Load the appropriate render model for each controller.  
* Keep the models updated with the controller pose and visibility changes.  
* Expose simple API to query and control the render models.

---

### Signals

| Signal | Description |
|--------|-------------|
| `model_changed(int controller_index)` | Emitted when the render model for a controller has been refreshed. |
| `model_error(int controller_index, String error)` | Emitted when a model failed to load. |

---

### Methods

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `get_controller_model(int controller_index)` | `controller_index` – index of the controller | `OpenXRRenderModel` | Returns the current render model for the specified controller. |
| `set_visibility(int controller_index, bool visible)` | `controller_index`, `visible` | `void` | Show or hide the render model for the given controller. |
| `is_visible(int controller_index)` | `controller_index` | `bool` | Returns whether the model for the controller is currently visible. |
| `reload_models()` | `void` | `void` | Reload all controller models (useful after a runtime change). |
| `_ready()` | `void` | `void` | (Internal) Initializes the manager when added to the scene. |
| `_process(float delta)` | `delta` | `void` | (Internal) Updates pose and visibility each frame. |

> **Note**: Most of the heavy lifting is done internally; the class only needs to be added to a `Viewport3D` that is part of an active OpenXR session.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `bool` | `true` | Enables or disables the automatic management of render models. |
| `auto_load` | `bool` | `true` | Whether to automatically load models when a session starts. |
| `controllers` | `Array` (of `OpenXRRenderModel`) | – | Read‑only array of current controller models. |
| `model_path_override` | `String` | – | Optional path to a custom model to use for all controllers. |

---

### Example usage

```gdscript
# Add the manager to your scene
var xr_model_manager = OpenXRRenderModelManager.new()
add_child(xr_model_manager)

# Ensure models are visible
for i in range(xr_model_manager.controllers.size()):
    xr_model_manager.set_visibility(i, true)
```

---

### Related classes
* [OpenXRRenderModel](../class_openxrrendermodel.html) – The actual model node used by the manager.  
* [OpenXRVisibilityMask](../class_openxrvisibilitymask.html) – Control which parts of the scene are visible to the user.

---