# OpenXRInteractionProfileEditor

The **OpenXRInteractionProfileEditor** is a class provided by Godot Engine for editing OpenXR interaction profiles directly within the editor. It inherits from `OpenXRInteractionProfileEditorBase` and ultimately from Godot’s GUI hierarchy (`HBoxContainer → BoxContainer → Container → Control → CanvasItem → Node → Object`).

## Inheritance

```
OpenXRInteractionProfileEditor
└─ OpenXRInteractionProfileEditorBase
   └─ HBoxContainer
      └─ BoxContainer
         └─ Container
            └─ Control
               └─ CanvasItem
                  └─ Node
                     └─ Object
```

## Description

This editor provides a visual interface for defining and modifying OpenXR interaction profiles. It allows developers to map VR controller inputs to actions or gestures, manage profiles for multiple devices, and preview bindings within the Godot editor.

> **Note:** The full API (properties, methods, signals, etc.) is documented in the Godot Engine Class Reference. This summary focuses on the high‑level purpose and inheritance hierarchy of the class.

---

## Signals

*`ready()`* – Emitted when the editor has finished initializing.  
(Additional signals may be defined in the base class.)

---

## Methods

| Method | Description |
|--------|-------------|
| `edit_profile(profile: OpenXRInteractionProfile)` | Load a profile for editing. |
| `save_profile()` | Persist changes to the current profile. |
| `reset_to_default()` | Reset the editor to its default state. |
| *(Other methods are defined in `OpenXRInteractionProfileEditorBase`.)* |

*(The actual method list is available in the full Godot documentation; refer to the online class reference for complete signatures and usage.)*

---

## Usage Example

```gdscript
# Load a profile
var editor = OpenXRInteractionProfileEditor.new()
editor.edit_profile(my_profile)

# Make changes
editor.set_binding("trigger", "shoot_action")

# Save the profile
editor.save_profile()
```

---

### See Also

- **[OpenXRInteractionProfileEditorBase](../classes/class_openxrinteractionprofileeditorbase.html)** – Base class for XR interaction profile editors.  
- **[OpenXR](../classes/class_openxr.html)** – Core OpenXR integration in Godot.  

---