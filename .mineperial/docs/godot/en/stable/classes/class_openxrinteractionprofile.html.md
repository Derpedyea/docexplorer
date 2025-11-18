**OpenXRInteractionProfile**

*Inherits:* `Resource< RefCounted< Object`  

---

### Description
Suggested bindings object for OpenXR.  
This object stores suggested bindings for an interaction profile. Interaction profiles define the metadata for a specific XR device layout, such as the mapping of controller buttons and axes to a virtual input scheme.

---

## Overview

The `OpenXRInteractionProfile` class is part of the Godot Engine’s XR system. It allows developers to define how input from a specific hardware profile maps to in‑game actions or virtual controls.

---

## Properties
*(Note: The full list of properties can be found in the official Godot reference page.)*

| Property | Type | Description |
|----------|------|-------------|
| `profile_name` | `String` | The unique name of the XR interaction profile. |
| `bindings` | `Array` of `OpenXRIPBinding` | An array of suggested input bindings for this profile. |

---

## Methods
*(Placeholder – refer to the official documentation for detailed signatures.)*

| Method | Description |
|--------|-------------|
| `add_binding(binding : OpenXRIPBinding)` | Adds a new input binding to the profile. |
| `get_bindings()` | Returns the current list of bindings. |
| `remove_binding(index : int)` | Removes a binding by index. |

---

## Related Classes

* **[OpenXRHapticVibration](../classes/class_openxrhapticvibration.html)** – Previous class in the documentation order.  
* **[OpenXRIPBinding](../classes/class_openxripbinding.html)** – Next class in the documentation order.

---

> **Tip:** Use the Godot editor’s XR settings to load an `OpenXRInteractionProfile` resource and bind it to your controllers. This lets you customize the controller layout for different devices (Oculus, HTC Vive, etc.) directly in the editor.

---