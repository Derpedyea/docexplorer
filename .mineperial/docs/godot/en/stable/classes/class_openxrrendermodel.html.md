**OpenXRRenderModel**  
================================

> *This node will display an OpenXR render model by accessing the associated GLTF and processes all animations.*  
> **Inherits**: `Node3D < Node < Object`

---

## Overview

`OpenXRRenderModel` is a Godot Engine node that renders the hand or controller model provided by an OpenXR runtime.  
The node automatically loads the GLTF model associated with the current XR controller profile and handles any animation that may be embedded in the asset.

> **Note**: This node is only functional when an OpenXR session is active and the project has the `XR` subsystem enabled.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `model_name` | `String` | `""` | Name of the XR controller model to load. |
| `auto_load` | `bool` | `true` | If `true`, the node will automatically load the model on ready. |

*(Full list of properties can be found in the Godot Class Reference.)*

---

## Methods

| Method | Return | Description |
|--------|--------|-------------|
| `load_model()` | `void` | Loads the GLTF model for the current controller profile. |
| `set_animation(anim_name: String)` | `void` | Starts the named animation, if present. |

*(Additional methods are available in the full API.)*

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `model_loaded()` | `()` | Emitted when the GLTF model has finished loading. |
| `animation_finished(anim_name: String)` | `String` | Emitted after an animation has completed. |

---

## Example Usage

```gdscript
# Add an OpenXRRenderModel node to the scene
var hand = OpenXRRenderModel.new()
hand.model_name = "LeftHand"  # or "RightHand"
add_child(hand)

# Connect to signals
hand.connect("model_loaded", self, "_on_model_loaded")
hand.connect("animation_finished", self, "_on_anim_finished")

func _on_model_loaded():
    print("XR hand model loaded")

func _on_anim_finished(anim_name):
    print("Animation %s finished" % anim_name)
```

---

### References

* Godot Engine Documentation – [OpenXR](https://docs.godotengine.org/en/stable/tutorials/xr/index.html)  
* OpenXR Specification – https://www.khronos.org/openxr/  

---