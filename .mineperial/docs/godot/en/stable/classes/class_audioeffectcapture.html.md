**AudioEffectCapture**  
*Godot Engine – Class Reference (stable)*  

---

### Inheritance
```
AudioEffectCapture
└─ AudioEffect
   └─ Resource
      └─ RefCounted
         └─ Object
```

---

### Description
`AudioEffectCapture` is an audio effect that copies all audio frames from a selected audio bus in real time.  
The captured data can be read programmatically from the effect’s buffer and used for visualisation, audio analysis, or to feed custom audio processing routines.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| **buffer_size** | `int` | Size of the internal ring buffer, in frames. |
| **buffer_frames** | `int` | Number of frames currently stored in the buffer. |
| **is_capturing** | `bool` | Read‑only flag indicating whether the effect is actively capturing audio. |

> **Note:** These properties are read‑only in the editor; they can be queried via script.

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `get_buffer()` | `PackedFloat32Array` | – | Returns a copy of the current buffer contents. |
| `get_buffer_frames()` | `int` | – | Returns the number of frames currently in the buffer. |
| `get_buffer_size()` | `int` | – | Returns the configured size of the buffer. |
| `is_capturing()` | `bool` | – | Returns whether the capture is active. |

> **Example (GDScript)**  
> ```gdscript
> var capture = AudioEffectCapture.new()
> # Attach to a bus and enable capture
> var bus = AudioServer.get_bus_index("Master")
> AudioServer.set_bus_effect_enabled(bus, 0, true)
> 
> func _process(_delta):
>     var data = capture.get_buffer()
>     # Process `data` here
> ```

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `capture_started` | – | Emitted when the capture starts. |
| `capture_stopped` | – | Emitted when the capture stops. |

---

## Usage

1. **Create** an `AudioEffectCapture` instance in the AudioBus layout.  
2. **Enable** the effect on the desired bus.  
3. **Read** the buffer each frame or when a signal fires to process or visualise audio data.

> **Tip:** Because the buffer is a circular array, wrap‑around handling may be necessary when reading large amounts of data.

---

### References

- [Audio Server](https://docs.godotengine.org/en/stable/classes/class_audioserver.html)  
- [Audio Bus](https://docs.godotengine.org/en/stable/classes/class_audioeffectbus.html)  

---