**Pseudolocalization**  
*Godot Engine (stable) – Internationalization section*  

---

## 1.  What is Pseudolocalization?

Pseudolocalization is a testing technique that simulates how a user interface looks in a language with a different alphabet or a larger set of characters.  
Typical goals:

- Detect missing or truncated strings before real translations are available.  
- Verify layout adapts to longer text.  
- Spot hard‑coded text that never passes through the localization system.

---

## 2.  Why use it in Godot projects?

* **Early QA** – translators can provide test strings while developers are still iterating.  
* **Layout safety** – you can spot overflow or mis‑aligned elements early.  
* **Localization workflow** – it lets you check the “look‑and‑feel” of the UI for any language, not just the target ones.

---

## 3.  Enabling Pseudolocalization in Godot

### 3.1  Godot 4.x

1. **Create a pseudo locale**  
   - Add `en_XA` to `Project Settings → Internationalization → Available locales`.  
   - Set it as the *fallback* if you want to see pseudolocalized text automatically.

2. **Configure the pseudo locale**  
   - In the same *Internationalization* section, you can enable the *Pseudo locale* option or set up a custom pseudo‑localizer by editing the `pseudo.ini` file.  
   - A simple pseudo‑localizer can be:

   ```ini
   [Pseudo]
   # Expand English by 30%
   expansion = 1.3
   # Replace characters
   replace = A=>Å, E=>Ë, O=>Ø, ...
   ```

3. **Switch to the pseudo locale**  
   - In the editor or runtime, change the language to *Pseudo* (usually shown as “en_XA – Pseudolocalized”).  
   - All translatable strings will now be rendered with the pseudo‑localizer.

### 3.2  Godot 3.x

Godot 3.x does not ship a built‑in pseudo‑localizer. You can:

1. Create a custom pseudo‑localizer script that inherits from `Locale` and overrides `get()` to return a transformed string.
2. Load it via `TranslationServer`:

   ```gdscript
   var pseudo = preload("res://pseudo.gd")
   TranslationServer.set_locale("en_XA")
   TranslationServer.add_translation(pseudo)
   ```

---

## 4.  Quick pseudo‑localization example

```gdscript
# pseudo.gd
extends Translation

func _init():
    var trans = Dictionary()
    trans["hello_world"] = "Hëllö Wörld!!!"
    trans["menu_start"] = "✪ S†åŕŧ ✪"
    add_translation(trans)
```

Add the file to your project and load it at startup:

```gdscript
func _ready():
    var pseudo = load("res://pseudo.gd").new()
    TranslationServer.add_translation(pseudo)
    TranslationServer.set_locale("en_XA")
```

---

## 5.  Best practices

| Aspect | Recommendation |
|--------|----------------|
| **Expand text** | Use a realistic expansion factor (e.g. 1.3–1.5). |
| **Character substitution** | Keep replacements within the Latin alphabet unless you want to test a specific script. |
| **Use existing tools** | Consider third‑party libraries (e.g., [Poedit’s pseudo‑localizer](https://github.com/Poedit/poedit)) if your workflow needs more control. |
| **Automated tests** | Write unit tests that assert the presence of pseudolocalized markers (e.g. “[PL]”). |

---

## 6.  Common pitfalls

* **Hard‑coded strings** – Pseudolocalization only affects strings passed through `tr()`.  
* **Missing fallback locale** – If you remove the fallback, the UI will revert to the base language.  
* **Resource paths** – Translation files must be correctly loaded; otherwise the pseudo‑localizer is ignored.

---

## 7.  Further reading

- [Godot Internationalization Guide](https://docs.godotengine.org/en/stable/tutorials/i18n/index.html)  
- [TranslationServer API Reference](https://docs.godotengine.org/en/stable/classes/class_translationserver.html)  

---

### 8.  Troubleshooting

| Problem | Fix |
|---------|-----|
| No text changes when switching to “Pseudo” | Ensure `en_XA` is added as an available locale and that your translation files contain keys. |
| UI overflows with pseudolocalized text | Increase the expansion factor or redesign layout. |
| Runtime errors after enabling pseudo | Verify that your pseudo‑localizer script is correctly loaded and that it does not raise exceptions. |

---

*This page was last updated in the stable documentation for Godot Engine.*