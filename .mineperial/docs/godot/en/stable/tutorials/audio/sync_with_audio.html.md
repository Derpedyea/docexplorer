**Sync the gameplay with audio and music**  
*Godot Engine – Documentation (stable)*  

---  

## 1. Introduction  

When a game plays a sound or a music track it is not instantaneous – there is a small delay between the moment a sound is triggered and the moment it is actually heard.  
In most cases this delay is negligible, but when you need to make the game logic *exactly* line up with a beat (for example, a rhythm game, a musical animation or a music‑based cut‑scene), the latency becomes noticeable.  

This tutorial explains how to measure and compensate for that latency so that you can perfectly sync gameplay events with audio.

> **TL;DR**  
> * Use `AudioServer.get_time_to_next_mix()` to know when the next audio frame will be rendered.  
> * Use a *beat* counter that advances on every mix callback.  
> * Trigger gameplay events a small amount of time before the beat you want to sync to.

---

## 2. Understanding the latency

| Element | Typical latency (ms) | Notes |
|---------|---------------------|-------|
| **AudioStreamPlayer** | ~ 10 ms | Depends on the buffer size; can be changed in Project Settings → Audio → `output_buffer_size` |
| **Audio bus mixing** | ~ 4 ms | Fixed per engine tick |
| **Frame rendering** | ~ 16 ms (60 Hz) | Game logic may run in a different tick (physics, process) |

The total delay is roughly the sum of these numbers.  
When you want *beat‑accurate* timing you need to schedule events slightly before the audio frame that will play them.

---

## 3. Using the audio server

Godot exposes the low‑level audio timing information through the `AudioServer` singleton.

```gdscript
# How many seconds until the next audio frame will be mixed
var time_to_next_mix = AudioServer.get_time_to_next_mix()
```

Because the audio engine mixes at a fixed rate (default 48000 Hz), `get_time_to_next_mix()` returns a very small fraction of a second (typically 0.001–0.005 s).  
You can use this value to *anticipate* the next mix and schedule your events a few milliseconds in advance.

---

## 4. Simple beat counter

```gdscript
# A small script that emits a signal every beat.
@tool
extends Node

signal beat

# The BPM of the track you are using
var bpm : int = 120
var seconds_per_beat : float
var next_beat_time : float

func _ready() -> void:
    seconds_per_beat = 60.0 / bpm
    # Schedule the first beat in the future
    next_beat_time = OS.get_ticks_msec() / 1000.0 + seconds_per_beat

func _process(_delta: float) -> void:
    var now = OS.get_ticks_msec() / 1000.0
    # If we are within 10 ms of the scheduled beat, emit it
    if now >= next_beat_time - 0.010:
        emit_signal("beat")
        next_beat_time += seconds_per_beat
```

**How it works**

1. `seconds_per_beat` is calculated from the BPM.  
2. In `_process()` we check whether we are *close* to the next beat.  
3. We emit `beat` *before* the audio frame that will actually play the music, ensuring the visual cue and the sound happen together.

---

## 5. Synchronising a scene

Assume you have a `Sprite` that should jump every beat.  Attach a script like this:

```gdscript
@onready var beat_sync : Node = $"../BeatSync"

func _ready() -> void:
    beat_sync.connect("beat", self, "_on_beat")

func _on_beat() -> void:
    # Perform your gameplay action
    $Sprite.jump()
```

If you need sub‑beat precision, use `AudioServer.get_time_to_next_mix()` inside `_process()` to offset the timing:

```gdscript
var sync_offset : float = 0.005  # 5 ms before the beat

func _process(_delta: float) -> void:
    var time_left = AudioServer.get_time_to_next_mix()
    if time_left < sync_offset:
        # Time to perform the synced action
        $Sprite.jump()
        # Reset for the next beat
```

---

## 6. Advanced: using Audio buses

For more complex projects, you can create a dedicated *tempo* bus that carries a metronome sound.  
The audio engine can then provide an `AudioEffectMetronome` (available in Godot 4.1+) which outputs a clock signal that you can read from a `AudioEffect` node:

```gdscript
# Connect to the metronome bus
var metronome_bus : AudioEffectMetronome = AudioServer.get_bus_effect(1, 0)
metronome_bus.set_bpm(120)
metronome_bus.connect("beat", self, "_on_metronome_beat")
```

Using a metronome bus guarantees that the beat signal is generated at the exact same point as the audio mixing, making your visual sync even more reliable.

---

## 7. Common pitfalls

| Issue | Fix |
|-------|-----|
| **The visual cue is always slightly behind the audio** | Decrease the `sync_offset` until you find a value that works for your platform. |
| **Multiple beats drift over time** | Re‑sync the beat counter using `AudioServer.get_time_to_next_mix()` instead of just adding `seconds_per_beat`. |
| **High CPU usage on low‑end devices** | Move the beat logic into `_physics_process()` or use `yield(get_tree().create_timer(...), "timeout")`. |

---

## 8. Further reading

* [AudioServer documentation](https://docs.godotengine.org/en/stable/classes/class_audioserver.html)  
* [Audio buses and routing](https://docs.godotengine.org/en/stable/tutorials/audio/creating_a_bus_layout.html)  
* [Metronome effect (Godot 4.1+)](https://docs.godotengine.org/en/stable/tutorials/audio/metronome.html)

---

### Summary  

By querying the audio engine’s timing functions and scheduling gameplay events a few milliseconds in advance, you can make your game’s actions *feel* perfectly in sync with music.  This approach works for rhythm games, music‑based animations, or any situation where audio–visual alignment is critical.