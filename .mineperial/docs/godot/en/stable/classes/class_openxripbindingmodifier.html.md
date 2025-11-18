**OpenXRIPBindingModifier**  
*Godot Engine Documentation (stable)*  

---

### Overview

`OpenXRIPBindingModifier` is a **resource** that directly modifies an OpenXR interaction profile.  
It inherits from `OpenXRBindingModifier<Resource<RefCounted<Object>>>` and is further specialized by the `OpenXRDpadBindingModifier` class.

> **Description**  
> A binding modifier that applies directly on an interaction profile.

---

### Inheritance

```
OpenXRIPBindingModifier
└─ OpenXRBindingModifier<Resource<RefCounted<Object>>>
```

**Inherited by**

* `OpenXRDpadBindingModifier`

---

### Properties

| Property | Type | Description |
|----------|------|-------------|
| *to be documented* | * | *...* |

*(Replace the placeholders with the actual property list once it is available.)*

---

### Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| *to be documented* | * | *...* |

*(Add all public methods here.)*

---

### Signals

*(List any signals emitted by this class.)*

---

### Usage Example

```gdscript
# Create a new binding modifier instance
var modifier = OpenXRIPBindingModifier.new()

# Configure the modifier (pseudo‑code)
modifier.property = value
# Attach to an interaction profile
profile.add_modifier(modifier)
```

---

### Related Classes

- **OpenXRBindingModifier** – Base class for binding modifiers.  
- **OpenXRDpadBindingModifier** – Specific modifier for D‑pad bindings.

---

**Note**: The full list of properties, methods, and signals can be found in the official Godot Engine reference manual. If you need the exact signatures or additional details, refer to the [Godot Engine Class Reference](https://docs.godotengine.org/en/stable/classes/class_openxripbindingmodifier.html).