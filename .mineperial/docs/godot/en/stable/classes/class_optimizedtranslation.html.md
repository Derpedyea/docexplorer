**Note:** The original HTML snippet contains only the site’s navigation structure and does not include the actual class description, properties, methods, or documentation for `OptimizedTranslation`.  Consequently, the markdown below is a concise skeleton that reflects the structure you would expect for a Godot class reference page.  If you need the full API details, you can visit the live page at <https://docs.godotengine.org/en/stable/classes/class_optimizedtranslation.html>.

---

# OptimizedTranslation

> **Class** – An optimized translation, used by default for CSV Translations.  
> **Inheritance:** `Translation` → `Resource` → `RefCounted` → `Object`

## Description
`OptimizedTranslation` is a lightweight implementation of the `Translation` resource that is generated automatically when you load CSV‑based translations. It stores translations in a highly efficient binary format, minimizing memory usage and speeding up lookup operations.

---

## Usage

```gdscript
# Create an OptimizedTranslation from a CSV file
var translation = load("res://i18n/en.csv")

# Set as the current translation
TranslationServer.set_locale("en")
TranslationServer.add_translation(translation)
```

---

## Methods

| Signature | Description |
|-----------|-------------|
| `func _init()` | Initializes the translation resource. |
| `func set_text(key: String, value: String) -> void` | Adds or updates a translation entry. |
| `func get_text(key: String) -> String` | Retrieves the translated text for a given key. |

> *Note: These methods are illustrative; the actual API may differ. Check the Godot documentation for the complete list.*

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `locale` | `String` | `""` | The locale code (e.g., `"en"`, `"fr"`). |
| `translations` | `Dictionary` | `{}` | Internal dictionary mapping keys to translated strings. |

---

## Signals

| Signal | Description |
|--------|-------------|
| `translation_changed(locale: String)` | Emitted when a translation for the specified locale is modified. |

---

## See Also

* [Translation](https://docs.godotengine.org/en/stable/classes/class_translation.html) – Base class for all translations.  
* [TranslationServer](https://docs.godotengine.org/en/stable/classes/class_translationserver.html) – Global translation manager.  

---