# Audio buses

Godot’s audio engine is designed to provide a flexible and performance‑friendly way to route, mix, and process sound.  
At the core of this system are **audio buses** – logical channels that can be routed to one another, processed with effects, and controlled independently from code or the editor.

> **TL;DR**  
> *Create and rename buses in the **Audio** settings.*  
> *Add effects to any bus.*  
> *Use `AudioStreamPlayer` nodes to output sound into a specific bus.*  
> *Control volume, pitch, panning, and more from script or the editor.*

---

## 1.  What is an audio bus?

An audio bus is a single channel in a hierarchy that receives raw audio from one or more sources, processes that audio with attached effects, and finally outputs the result to the next bus or the final mix.  
Each bus contains a list of **AudioBus** resources, each of which has a unique name, a volume curve, and a set of attached effects.

The default bus layout looks like this:

```
Master
├─ Music
│  └─ Background
├─ SFX
├─ Voice
└─ Master
```

You can add, remove, rename, and reorder these buses directly in the *Audio* editor tab or via the *Project Settings* → *Audio* → *Audio Buses* panel.

---

## 2.  How to configure a bus

### 2.1 Adding a bus

1. Open **Project → Project Settings** → **Audio** → **Audio Buses**.  
2. Click **+** to add a new bus.  
3. Rename it with a meaningful name (`Music`, `UI`, etc.).  
4. Drag the bus into the desired position to change its routing order.

### 2.2 Setting bus properties

| Property | Meaning |
|----------|---------|
| **Volume** | Linear gain in dB (default 0 dB). Negative values attenuate. |
| **Pitch Scale** | Global pitch shift for all audio routed to this bus. |
| **Pan** | Stereo balance; `0` is center, `-1` is left, `1` is right. |
| **Bus Effects** | A list of effects that will process audio before it is mixed to the output. |

### 2.3 Bus routing

Buses are routed in the order they appear in the list: audio from bus *N* is processed and sent to bus *N + 1*.  
The final bus before the hardware output is usually named **Master** and is locked to a maximum of 0 dB to prevent clipping.

---

## 3.  Attaching audio effects

Godot ships with a variety of built‑in audio effects (reverb, echo, equalizer, etc.) that can be applied to any bus.

1. In the *Audio Buses* panel, select the bus you want to process.  
2. Click **Add** → **Add Audio Effect**.  
3. Choose from the drop‑down list (e.g., *AudioEffectReverb*, *AudioEffectLowPassFilter*, *AudioEffectEQ*).  
4. Configure the effect parameters; they can be animated over time if required.

**Tip:** Effects can be reordered, removed, or duplicated just like buses.

---

## 4.  Routing audio sources

Every audio source in Godot – `AudioStreamPlayer`, `AudioStreamPlayer2D`, `AudioStreamPlayer3D`, or `AudioStreamPlayer3D` – contains a *Bus* property that determines which bus the source will send its output to.

```gdscript
var player = AudioStreamPlayer.new()
player.bus = "SFX"
player.stream = preload("res://click.wav")
add_child(player)
player.play()
```

If a source’s bus is omitted or left as `""`, it defaults to the *Master* bus.

---

## 5.  Automating bus parameters

You can automate bus properties either:

* **In the editor** – use the *Audio Bus* dock’s `Automation` tab to keyframe changes over time.  
* **Via script** – call methods on the bus resource:

```gdscript
var bus_index = AudioServer.get_bus_index("Music")
AudioServer.set_bus_volume_db(bus_index, -10.0)   # Reduce volume by 10 dB
AudioServer.set_bus_effect_enabled(bus_index, 0, false)  # Disable first effect
```

---

## 6.  Working with 3D audio

When using `AudioStreamPlayer3D`, the bus controls are applied after spatial processing.  
The following additional properties influence 3D audio:

* **Min Distance** – distance at which the sound is heard at full volume.  
* **Attenuation** – how the volume decreases with distance.  
* **Doppler Scale** – speed‑of‑sound effect.

These settings are independent of the bus volume; they just shape the raw audio before it reaches the bus chain.

---

## 7.  Practical example: a game audio setup

```
Master (0 dB)
├─ UI
│   ├─ Hover (reverb off)
│   └─ Click (eq preset)
├─ Music
│   └─ Background (low pass filter)
├─ SFX
│   └─ Impact (echo)
├─ Voice
└─ Master
```

*All UI sounds go to the `UI` bus, which has an EQ preset.*  
*The main background music uses a low‑pass filter to give it a distant feel.*  
*Impact effects are processed with a short echo for emphasis.*  
*Player voice clips are routed to the `Voice` bus, which could be routed to a dedicated audio output for streaming.*

---

## 8.  Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| Audio cuts out when a new bus is added | Bus volume set too low or muted | Increase volume or remove mute |
| Distortion when increasing volume | Master bus exceeds 0 dB | Limit master gain or add compression |
| Panning not working in 3D scenes | `Pan` property set on bus; ensure 3D audio uses `AudioStreamPlayer3D` | Adjust bus pan or use individual node panning |

---

## 9.  Further reading

* [Audio Effects](https://docs.godotengine.org/en/stable/tutorials/audio/audio_effects.html) – deeper dive into the available audio effects.  
* [Audio Server API](https://docs.godotengine.org/en/stable/classes/class_audioserver.html) – programmatically control buses and effects.  
* [Audio Mixing and Routing](https://docs.godotengine.org/en/stable/tutorials/audio/mixing.html) – advanced mixing techniques and use‑cases.  

---

### Quick reference

```gdscript
# Get bus index
var bus_index = AudioServer.get_bus_index("Music")

# Set volume to -12 dB
AudioServer.set_bus_volume_db(bus_index, -12.0)

# Toggle an effect (index 0) on/off
AudioServer.set_bus_effect_enabled(bus_index, 0, true)

# Get current bus volume
var current_volume = AudioServer.get_bus_volume_db(bus_index)
```

Feel free to experiment with different bus hierarchies and effects – the flexibility of Godot’s audio engine lets you create complex soundscapes with minimal effort.