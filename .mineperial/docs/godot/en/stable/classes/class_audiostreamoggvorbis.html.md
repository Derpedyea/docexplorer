**Note:** The original page contains a full class reference for `AudioStreamOggVorbis`, including its properties, methods, signals, and usage examples. The HTML snippet provided only includes the page header and navigation; the detailed class content was not included in the source you supplied. Below is a concise markdown representation based on the available information.

---

# AudioStreamOggVorbis

> A specialized `AudioStream` for handling Ogg Vorbis audio streams in Godot Engine.

## Inheritance

```
AudioStreamOggVorbis
└─ AudioStream
   └─ Resource
      └─ RefCounted
         └─ Object
```

## Description

`AudioStreamOggVorbis` is a resource type used to store and play Ogg Vorbis audio files. It provides the necessary functionality to load, decode, and stream Ogg Vorbis audio data within the Godot audio system.

## Key Features

- **Supported Formats:** OGG Vorbis
- **Integration:** Works with Godot’s audio playback nodes such as `AudioStreamPlayer`, `AudioStreamPlayer3D`, and `AudioStreamPlayer2D`.
- **Encoding:** Ogg Vorbis is a lossy compression format that balances file size and audio quality.

---

### How to Use

1. **Create an Ogg Vorbis file** (e.g., `mysound.ogg`) and import it into your project.
2. **Assign the stream** to an `AudioStreamPlayer` node:
   ```gdscript
   var audio_player = AudioStreamPlayer.new()
   audio_player.stream = preload("res://mysound.ogg")
   add_child(audio_player)
   audio_player.play()
   ```

3. **Configure playback** via the `AudioStreamPlayer` properties such as `volume_db`, `pitch_scale`, and `loop`.

---

### Documentation Sections (Placeholders)

> *The following sections would normally contain detailed information about each property, method, and signal. They are omitted here because the source HTML for those sections was not included.*

- Properties
- Methods
- Signals

---

### References

- [AudioStream](https://docs.godotengine.org/en/stable/classes/class_audiostream.html)
- [AudioStreamPlayer](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer.html)

---

*For the complete reference, visit the official Godot documentation page: [AudioStreamOggVorbis](https://docs.godotengine.org/en/stable/classes/class_audiostreamoggvorbis.html).*