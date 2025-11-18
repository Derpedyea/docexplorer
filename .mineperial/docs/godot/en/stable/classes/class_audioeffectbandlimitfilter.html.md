# AudioEffectBandLimitFilter

**Godot Engine Documentation – Stable**  
*Class reference page for the audio engine*  

---

## Overview

`AudioEffectBandLimitFilter` is a specialised audio effect that limits the
frequency range around a chosen center frequency.  It is useful for
creating a band‑pass‑like behaviour (passing only a narrow band of
frequencies) or a band‑stop behaviour (removing a narrow band from the
signal).

The effect inherits from the base audio‑filter class:

```
AudioEffectBandLimitFilter
    └─ AudioEffectFilter
        └─ AudioEffect
            └─ Resource
                └─ RefCounted
                    └─ Object
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `center` | `float` | 440.0 | The center frequency of the band to limit (Hz). |
| `bandwidth` | `float` | 100.0 | The width of the band (Hz). |
| `gain` | `float` | 0.0 | Gain adjustment in decibels for the band. |

> **Note**:  
> The actual names and units may differ slightly depending on the Godot
> version; refer to the live reference for the most up‑to‑date API
> signatures.

---

## Methods

| Method | Return | Arguments | Description |
|--------|--------|-----------|-------------|
| `set_center(float)` | `void` | `freq` | Sets the center frequency. |
| `get_center() -> float` | `float` | — | Returns the current center frequency. |
| `set_bandwidth(float)` | `void` | `bw` | Sets the bandwidth. |
| `get_bandwidth() -> float` | `float` | — | Returns the current bandwidth. |
| `set_gain(float)` | `void` | `db` | Sets the gain in decibels for the filtered band. |
| `get_gain() -> float` | `float` | — | Returns the current gain. |

---

## Usage

```gdscript
# Create a band‑limit filter and add it to the audio bus
var band_limit = AudioEffectBandLimitFilter.new()
var bus_index = AudioServer.get_bus_index("Master")
AudioServer.add_bus_effect(bus_index, band_limit)

# Configure the filter
band_limit.center = 1000.0      # 1 kHz
band_limit.bandwidth = 200.0    # 200 Hz wide band
band_limit.gain = -3.0          # attenuate by 3 dB
```

The filter can be attached to any audio bus (e.g., *Master*, *Music*,
*SFX*) via the **AudioServer** or the **AudioStreamPlayer** node’s
`stream` property.

---

## Signals

This class does not emit any custom signals.

---

## Related Classes

* **AudioEffectBandPassFilter** – A true band‑pass filter.
* **AudioEffectLowPassFilter** – Low‑pass filter.
* **AudioEffectHighPassFilter** – High‑pass filter.
* **AudioEffectNotchFilter** – A narrow band‑stop filter.

---

## See Also

* [AudioEffectFilter](../class_audioeffectfilter.html) – Base filter class.  
* [AudioBus](../class_audiobus.html) – Manage audio buses.  
* [AudioServer](../class_audioserver.html) – Global audio server interface.

---

*Documentation generated from Godot Engine 4.x stable release.*