**Text to Speech** – Godot Engine (stable) documentation  

---

### Table of contents  
1. [Basic usage](#basic-usage)  
2. [Enabling TTS in the editor](#enabling-tts-in-the-editor)  
3. [Querying the system for voices](#querying-the-system-for-voices)  
4. [Using the `TextToSpeech` API](#using-the-texttospeech-api)  
5. [Examples](#examples)  
6. [Common pitfalls & troubleshooting](#common-pitfalls--troubleshooting)  

---

## Basic usage  

The Godot **TextToSpeech** class allows you to convert a string into an audible utterance using the operating system’s TTS engine. The typical workflow is:

1. **Enable TTS** in your project.  
2. **Query** the platform for a list of supported voices.  
3. **Store** an ID of a chosen voice.  
4. **Speak** a string on demand.  

---

## Enabling TTS in the editor  

Open **Project → Project Settings → General → Audio → Text‑to‑Speech** and set `enabled` to **true**.  
> Note: TTS must be enabled per project – it is not globally on by default.

```gdscript
# Enable TTS for the current project (only needed once)
ProjectSettings.set_setting("audio/text_to_speech/enabled", true)
```

---

## Querying the system for voices  

The `TextToSpeech` singleton offers a `get_available_voices()` method that returns an array of dictionaries, each describing a voice with keys such as `name`, `id`, `locale`, and `gender`.

```gdscript
var tts = TextToSpeech.new()
var voices = tts.get_available_voices()
for voice in voices:
    print("[", voice.id, "] ", voice.name, " (", voice.locale, ", ", voice.gender, ")")
```

You can filter or select a voice by its `id`:

```gdscript
var my_voice = voices[0].id  # choose the first available voice
tts.set_voice(my_voice)
```

---

## Using the `TextToSpeech` API  

| Method | Description |
|--------|-------------|
| `say(text : String)` | Immediately plays the text using the selected voice. |
| `stop()` | Stops any current utterance. |
| `get_available_voices() : Array` | Returns the list of supported voices. |
| `set_voice(voice_id : int)` | Sets the current voice by its ID. |
| `get_voice() : int` | Returns the currently selected voice ID. |

### Example – a simple TTS node

```gdscript
extends Node

@export var text : String = "Hello, world!"

var tts : TextToSpeech

func _ready() -> void:
    tts = TextToSpeech.new()
    # Optional: select a voice
    var voices = tts.get_available_voices()
    if voices.size() > 0:
        tts.set_voice(voices[0].id)
    # Speak the exported string
    tts.say(text)
```

You can also use signals to detect when the utterance finishes:

```gdscript
tts.connect("finished", self, "_on_tts_finished")

func _on_tts_finished() -> void:
    print("Speech finished")
```

---

## Examples  

### 1. Speaking user input

```gdscript
func speak_player_name(name : String) -> void:
    var sentence = "Hello, %s!" % name
    tts.say(sentence)
```

### 2. Cycling through voices

```gdscript
func next_voice() -> void:
    var voices = tts.get_available_voices()
    var current = tts.get_voice()
    var next_index = (current + 1) % voices.size()
    tts.set_voice(voices[next_index].id)
```

---

## Common pitfalls & troubleshooting  

| Problem | Likely cause | Fix |
|---------|--------------|-----|
| TTS never speaks | TTS disabled in project settings | Enable `Project → Project Settings → Audio → Text‑to‑Speech → Enabled` |
| No voices returned | OS does not expose TTS APIs or no voices installed | Install a TTS engine on the OS (e.g., SAPI on Windows, VoiceOver on macOS) |
| Speech is garbled | Wrong locale or unsupported characters | Set the correct locale via the voice dictionary or use plain ASCII |
| Crashes on mobile | TTS API not available on the target platform | Check `OS.has_feature("mobile")` and guard calls |

---

### Further reading  

- [Godot Engine API Reference – TextToSpeech](https://docs.godotengine.org/en/stable/classes/class_texttospeech.html)  
- [Platform‑specific TTS documentation](https://docs.godotengine.org/en/stable/tutorials/audio/text_to_speech.html#platform-support)  

---