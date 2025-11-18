# AudioEffectSpectrumAnalyzer

**Class**: `AudioEffectSpectrumAnalyzer`  
**Inherits from**: `AudioEffect`

> Audio effect that can be used for real‑time audio visualizations.  
> This audio effect does not affect sound output, but can be queried for frequency‑domain data that can be used for visualizers, level meters, or any other audio‑driven UI.

---

## Description

`AudioEffectSpectrumAnalyzer` captures the audio that passes through the audio bus to which it is attached and provides a fast FFT‑based spectrum of the incoming signal.  
Unlike most effects, it is **purely analytical** – it does not modify the audio signal itself – making it ideal for creating visualizations, audio‑reactive gameplay elements, or simply monitoring the sound level in real time.

---

## Signals

| Signal | Description |
|--------|-------------|
| `data_changed` | Emitted whenever new spectrum data is available. Useful for polling from a script. |

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `fft_size` | `int` | `1024` | Number of FFT bins. Must be a power of two. |
| `buffer_size` | `int` | `512` | Size of the circular buffer used for analysis. |
| `use_magnitudes` | `bool` | `true` | If `true`, `get_band_magnitude()` returns the magnitude for each bin. |
| `use_averages` | `bool` | `false` | If `true`, the average magnitude of adjacent bins will be returned. |
| `use_spreads` | `bool` | `false` | If `true`, the spread (difference between peak and average) is provided. |
| `use_offsets` | `bool` | `false` | If `true`, the frequency offset relative to the center bin is available. |
| `use_time` | `bool` | `false` | If `true`, time‑domain data is also exposed. |

---

## Methods

| Method | Return Type | Arguments | Description |
|--------|-------------|-----------|-------------|
| `get_band_db(band: int)` | `float` | `band: int` | Returns the decibel level of the specified FFT band. |
| `get_band_magnitude(band: int)` | `float` | `band: int` | Returns the magnitude (linear amplitude) of the specified band. |
| `get_band_time(band: int)` | `float` | `band: int` | Returns the time‑domain value of the specified band. |
| `get_band_spread(band: int)` | `float` | `band: int` | Returns the spread of the specified band (peak minus average). |
| `get_band_offset(band: int)` | `float` | `band: int` | Returns the frequency offset of the specified band relative to the center of the spectrum. |
| `get_band_average(band: int)` | `float` | `band: int` | Returns the average magnitude of a group of bands around the specified band. |
| `get_band_magnitude_range(band: int)` | `Vector2` | `band: int` | Returns a `Vector2` where `x` is the min and `y` is the max magnitude over recent frames. |
| `get_band_db_range(band: int)` | `Vector2` | `band: int` | Returns the min/max decibel values over recent frames. |
| `get_band_peak(band: int)` | `float` | `band: int` | Returns the peak magnitude for the band. |
| `get_band_average_db(band: int)` | `float` | `band: int` | Returns the average decibel level. |

> *All `band` indices range from 0 to `fft_size/2 - 1`.*

---

## Usage Example

```gdscript
@tool
extends Node

var analyzer : AudioEffectSpectrumAnalyzer

func _ready() -> void:
    # Assume the analyzer is added to an AudioEffectBus
    analyzer = AudioServer.get_bus_effect(0, 0) as AudioEffectSpectrumAnalyzer

func _process(delta: float) -> void:
    if analyzer.is_valid():
        var db = analyzer.get_band_db(0)          # lowest frequency band
        var mag = analyzer.get_band_magnitude(0)   # linear magnitude
        # Use db or mag to drive a UI element
```

---

## Reference

*Documentation version: 4.x (stable)*  
For a complete list of properties, methods, and signals, refer to the official Godot Engine API reference.

---