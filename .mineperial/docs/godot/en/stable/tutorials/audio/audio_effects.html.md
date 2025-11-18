**NOTE**: The original page contains a large amount of content (including images, tables and detailed descriptions of every audio effect in Godot).  
Below is a condensed, well‑structured Markdown version that captures the main headings, lists, and key information.  
Feel free to expand each section with the full details from the source if needed.

---

# Audio effects

Godot includes several audio effects that can be added to an audio bus to alter every sound file that goes through that bus.  
Try them all out to get a sense of how they alter sound.

## Overview

Audio effects are implemented as **AudioEffect** resources, each of which can be attached to an **Audio Bus** in the **Audio** section of the project settings.  
When an effect is added, it processes all audio routed through that bus – this includes music, SFX, and any streamed audio.

The main categories of effects are:

| Category | Typical use |
|----------|-------------|
| **Dynamic** | Modifying signal amplitude or frequency in real time |
| **Time‑based** | Adding delay, echo or reverb |
| **Filtering** | Equalizing, low‑pass/high‑pass filtering |
| **Stereo** | Panning, stereo widening or narrowing |
| **Distortion** | Adding grit or saturation |

## List of built‑in effects

Below is a quick reference to all the audio effects that ship with Godot (version 4.x).  
Click on each name for a deeper dive in the official documentation.

| Effect | Description |
|--------|-------------|
| **AudioEffectStereoDelay** | Simple stereo delay with individual delay time per channel. |
| **AudioEffectChorus** | Adds a chorus (multiple delayed copies with slight frequency shift). |
| **AudioEffectFlanger** | Flanging effect – a short, modulated delay that creates a sweeping sound. |
| **AudioEffectReverb** | Simulates acoustic spaces (room, hall, etc.). |
| **AudioEffectEQ** | 10‑band equalizer with adjustable gains. |
| **AudioEffectCompressor** | Reduces dynamic range; useful for vocals or drum buses. |
| **AudioEffectLimiter** | Prevents peaks from exceeding a specified level. |
| **AudioEffectGain** | Simple volume control. |
| **AudioEffectPitchShift** | Changes playback pitch without affecting tempo. |
| **AudioEffectPitchBend** | Real‑time pitch bending (e.g. for harmonics). |
| **AudioEffectSpectrumAnalyzer** | Provides frequency spectrum data (useful for visualizers). |
| **AudioEffectVST** | Loads third‑party VST plugins (available on desktop platforms only). |

> **Tip** – Add a few effects to the master bus and play a short clip to hear the difference.  
> Use the **Bus Panel** in the Audio tab to enable/disable each effect and adjust its parameters.

## Using an effect

1. Open **Project > Project Settings > Audio**.  
2. In the **Audio Buses** panel, click the bus you want to modify (e.g., *Master*).  
3. Click the **+** icon and choose the desired **AudioEffect**.  
4. Adjust the exported properties in the inspector.  
5. Toggle **Enabled** to test instantly.

```gdscript
# Example: mute the echo effect in code
var bus = AudioServer.get_bus_index("Master")
AudioServer.set_bus_effect_enabled(bus, 0, false)  # 0 is the first effect in the bus
```

> *The order of effects matters*: signals pass through them in the order they’re listed on the bus.

## Common pitfalls

| Problem | Fix |
|---------|-----|
| **Unexpected latency** | Delay‑based effects add latency; increase `Bus Delay` or use a dedicated audio bus. |
| **Saturated output** | Ensure the `Gain` effect is not set above 0dB or that the limiter is correctly configured. |
| **Performance hit** | Some effects (e.g., reverb) are CPU intensive. Use them only where necessary and consider disabling on mobile builds. |
| **VST plugin missing** | VST support is only for desktop; it won’t work in exported HTML5 or mobile builds. |

## Related topics

* [Audio buses](../audio_buses.html) – How to set up and route audio.
* [Audio streams](../audio_streams.html) – Loading and playing audio files.
* [Audio buses & effect chain example](../audio_effect_chain_example.html).

---

**Next page** – [Audio streams](../audio_streams.html)  
**Previous page** – [Audio buses](../audio_buses.html)