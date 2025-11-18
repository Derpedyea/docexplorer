**AudioEffectEQ6 – Godot Engine Class Reference**  
*(Documentation – class reference, not a marketing or landing page)*  

---

## Overview

`AudioEffectEQ6` is an audio effect that implements a 6‑band equalizer.  
It is applied to an audio bus and allows fine‑grained control over the frequency spectrum from **32 Hz to 10 kHz**.  

* **Inheritance**: `AudioEffectEQ< AudioEffect< Resource< RefCounted< Object > > > >`  
* **Purpose**: Provides a UI and API for adjusting six separate frequency bands.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `band_0_gain` | `float` | Gain (in dB) for the 0th band (32 Hz). |
| `band_1_gain` | `float` | Gain for the 1st band (63 Hz). |
| `band_2_gain` | `float` | Gain for the 2nd band (125 Hz). |
| `band_3_gain` | `float` | Gain for the 3rd band (250 Hz). |
| `band_4_gain` | `float` | Gain for the 4th band (500 Hz). |
| `band_5_gain` | `float` | Gain for the 5th band (1 kHz). |
| `band_0_center` | `float` | Center frequency for the 0th band (in Hz). |
| `band_1_center` | `float` | Center frequency for the 1st band. |
| `band_2_center` | `float` | Center frequency for the 2nd band. |
| `band_3_center` | `float` | Center frequency for the 3rd band. |
| `band_4_center` | `float` | Center frequency for the 4th band. |
| `band_5_center` | `float` | Center frequency for the 5th band. |
| `band_0_q` | `float` | Q‑factor for the 0th band. |
| `band_1_q` | `float` | Q‑factor for the 1st band. |
| `band_2_q` | `float` | Q‑factor for the 2nd band. |
| `band_3_q` | `float` | Q‑factor for the 3rd band. |
| `band_4_q` | `float` | Q‑factor for the 4th band. |
| `band_5_q` | `float` | Q‑factor for the 5th band. |

> **Note**: The exact band center frequencies are fixed at 32 Hz, 63 Hz, 125 Hz, 250 Hz, 500 Hz and 1 kHz in the default configuration, but can be overridden via the `*_center` properties.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `get_band_gain(band: int) -> float` | `float` | Returns the gain of the specified band (0–5). |
| `set_band_gain(band: int, value: float) -> void` | `void` | Sets the gain of the specified band. |
| `get_band_center(band: int) -> float` | `float` | Returns the center frequency of the specified band. |
| `set_band_center(band: int, value: float) -> void` | `void` | Sets the center frequency of the specified band. |
| `get_band_q(band: int) -> float` | `float` | Returns the Q‑factor of the specified band. |
| `set_band_q(band: int, value: float) -> void` | `void` | Sets the Q‑factor of the specified band. |

> All band indices must be in the range **0–5**; out‑of‑range indices result in an error.

---

## Signals

| Signal | Description |
|--------|-------------|
| `band_changed(band: int, gain: float, center: float, q: float)` | Emitted when any of the band parameters change. |

---

## Example Usage

```gdscript
# Attach this script to a node that owns an AudioEffectEQ6 instance.
@onready var eq : AudioEffectEQ6 = preload("res://eq6.tres")

func _ready() -> void:
    # Increase the 3rd band (250 Hz) by 6 dB.
    eq.set_band_gain(3, 6.0)
    # Narrow the Q‑factor of the 2nd band.
    eq.set_band_q(2, 1.5)
    # Listen for changes.
    eq.connect("band_changed", Callable(self, "_on_band_changed"))

func _on_band_changed(band, gain, center, q):
    print("Band %d changed: gain=%.1f dB, center=%.1f Hz, q=%.2f" % [band, gain, center, q])
```

---

## Documentation Source

- **Official Docs**: <https://docs.godotengine.org/en/stable/classes/class_audioeffecteq6.html>  
- **API Reference**: `AudioEffectEQ6` – Godot Engine 4.x

---

### Related Classes

- [AudioEffectEQ](https://docs.godotengine.org/en/stable/classes/class_audioeffecteq.html) – Base class for equalizer effects.  
- [AudioEffectFilter](https://docs.godotengine.org/en/stable/classes/class_audioeffectfilter.html) – Generic filter effect.  

---