# OpenXRHapticBase

**OpenXR Haptic feedback base class** – a base class for haptic‑feedback resources.

## Inheritance

```text
Resource
 └─ RefCounted
```

## Derived Class

- `OpenXRHapticVibration`

## Overview

The `OpenXRHapticBase` class serves as the foundation for all haptic‑feedback resources used by the OpenXR plugin. Concrete implementations, such as `OpenXRHapticVibration`, extend this class to provide specific haptic behaviors.

> **Note**: This class is part of the Godot 4.0+ XR subsystem and is available only when the OpenXR plugin is enabled.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| *None* | | | *(No public properties defined in the base class.)* |

### Methods

| Method | Signature | Description |
|--------|------------|-------------|
| *None* | | *(All functionality is provided by subclasses.)* |

---

### Signals

*(No signals are emitted by this base class.)*

---

### Usage

While you will rarely instantiate `OpenXRHapticBase` directly, you may reference it as a type hint or in a script to accept any haptic‑feedback resource. Example:

```gdscript
var haptic : OpenXRHapticBase = preload("res://my_haptic_resource.tres")
```

Subclasses such as `OpenXRHapticVibration` implement concrete haptic behaviours and can be used in the same way:

```gdscript
var vibration = preload("res://vibration.tres") as OpenXRHapticVibration
vibration.play()
```

---

### Related Classes

- **OpenXRHapticVibration** – Implements a vibration‑based haptic feedback resource.
- **OpenXRHapticEffect** – (If present in future releases) – Base class for other haptic effect types.