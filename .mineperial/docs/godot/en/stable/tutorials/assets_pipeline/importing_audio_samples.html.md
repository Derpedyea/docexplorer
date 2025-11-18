**Importing audio samples**

This tutorial explains how to bring audio files into a Godot project, the formats that Godot supports, and the import options available for each format.

## Supported audio formats

| Format | Typical use | Compression |
|--------|------------|------------|
| **WAV** | Uncompressed or lightly compressed audio | RAW, IMA ADPCM |
| **OGG Vorbis** | Free‑audio format with good quality | Lossy |
| **MP3** | Widely supported but closed‑source | Lossy |

> **Tip** – For in‑game music or long background tracks, use OGG Vorbis or MP3 to keep the project size small. For short sound effects where low latency matters, use WAV.

## Importing the file

1. Drag the audio file into the **FileSystem** dock or use *Import → New → Audio*.
2. In the **Import** tab, select **AudioStream** as the resource type.  
   <img src="import_audio.png" alt="Import tab preview" width="400"/>

### WAV settings

- **Sample Rate** – 44 kHz (default) or higher if you need more fidelity.  
- **Bit Depth** – 16‑bit or 24‑bit.  
- **Compression** – *None*, *IMA ADPCM*, or *PCM*.

> **Note** – IMA ADPCM compresses the WAV file to 4:1 without a noticeable loss in quality, which saves memory.

### OGG Vorbis settings

- **Quality** – 0.0 to 1.0 (higher = better quality, larger file).  
- **Stereo/Mono** – Choose based on the source.

### MP3 settings

- **Bitrate** – 64 kbit/s to 320 kbit/s.  
- **Stereo/Mono** – Same as OGG.

## Using the imported audio

The imported file becomes an `AudioStream` resource. Attach it to an `AudioStreamPlayer` or `AudioStreamPlayer2D` node and play it from a script.

```gdscript
# preload the audio file
var sfx : AudioStream = preload("res://sounds/laser.wav")

# create a player node
var player = AudioStreamPlayer.new()
add_child(player)
player.stream = sfx
player.play()
```

You can also adjust the volume or pitch at runtime:

```gdscript
player.volume_db = -6   # 6 dB quieter
player.pitch_scale = 1.2
```

## Advanced options

| Property | Description | Default |
|----------|-------------|---------|
| `stream.loop` | Loop the audio automatically | `false` |
| `stream.autoplay` | Start playing as soon as the node enters the scene tree | `false` |
| `stream.stream` | The `AudioStream` resource to play | *None* |

> **Tip** – For repeated short sound effects (e.g. gunshots), use `AudioStreamPlayer` with `stream.autoplay` set to `false` and call `play()` from your script whenever the event occurs.

## Summary

- Godot supports WAV, OGG Vorbis, and MP3.
- Use the **Import** tab to choose format‑specific settings.
- Attach the resulting `AudioStream` to an `AudioStreamPlayer` node.
- Control playback via script (volume, pitch, looping).

These steps provide a simple workflow for importing and using audio in any Godot project.