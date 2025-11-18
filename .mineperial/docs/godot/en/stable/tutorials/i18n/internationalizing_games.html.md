**Note:** The following markdown is a cleaned‑up, well‑structured version of the Godot Engine documentation page *[Internationalizing games](https://docs.godotengine.org/en/stable/tutorials/i18n/internationalizing_games.html)*.  
All headings, lists, code blocks and links from the original HTML have been preserved as closely as possible.

---

# Internationalizing games

> **Introduction**  
> While indie or niche games usually do not need localization, games targeting a broader market often require it. Godot provides a rich set of tools to make the process straightforward and flexible.

---

## 1. What you’ll learn

| Topic | Key points |
|-------|------------|
| [Internationalization](#introduction) | What it is and why it matters |
| Translation files | `.po`, `.csv` and `Translation` resources |
| Using `TranslationServer` | Loading, switching and reloading |
| Text functions | `tr()`, `trn()`, placeholders and plural forms |
| Runtime language switching | Changing locale on the fly |
| Tools & workflow | Spreadsheets, export options, best practices |

---

## 2. Introduction

The Godot engine supports **internationalization (i18n)** out of the box.  
Key concepts:

- **Locale** – language + region code (e.g. `en`, `fr_FR`).  
- **Translation** – a set of key‑value pairs for a given locale.  
- **Translation server** – a global manager that stores all translations and performs look‑ups.  

> ⚡ Tip: Always keep your main language (`en`) in the same translation file as your source strings; Godot will use that as a fallback.

---

## 3. Creating a translation

### 3.1. Translation resources

1. Create a new `Translation` resource (`File > New Resource > Translation`).  
2. Give it a name, e.g. `en.po` or `fr.po`.  
3. Add your strings – the **key** is the original text and the **translation** is the localized text.

> Godot also accepts `CSV` or `TSV` formats for bulk imports.

```text
# Example PO file (en.po)
msgid "Hello, world!"
msgstr "Hello, world!"

msgid "Score: %s"
msgstr "Score: %s"
```

### 3.2. Adding translation files to the project

Place the files inside the **`locales`** folder (recommended) and enable the **`locales/en.po`** file in *Project → Project Settings → I18N → Enabled Translations*.

---

## 4. Using translations in code

### 4.1. The `tr()` function

`tr()` looks up a string in the current locale and returns the translated version.  

```gdscript
func _ready():
    var welcome = tr("Hello, world!")
    $Label.text = welcome
```

> If a translation is missing, the original string is returned.

### 4.2. Placeholders

Use `%s`, `%d`, etc. in your keys and substitute values when calling `tr()`.

```gdscript
var points = 42
var msg = tr("You scored %d points.") % points
$ScoreLabel.text = msg
```

### 4.3. Plural forms

Use `trn()` for pluralized strings.  
The translation file contains both singular and plural forms.

```gdscript
var items = 3
var text = trn("%d item", "%d items", items) % items
$ItemLabel.text = text
```

In the `.po` file you would provide the plural form:

```text
msgid "%d item"
msgid_plural "%d items"
msgstr[0] "%d item"
msgstr[1] "%d items"
```

### 4.4. Formatting dates, times, currencies

Use `format()` methods in GDScript or the `String` class for locale‑aware formatting.

```gdscript
var date = OS.get_datetime()
var formatted = date.year + "-" + date.month + "-" + date.day
```

---

## 5. Runtime language switching

To change the language while the game is running:

```gdscript
func _on_language_changed(new_locale: String) -> void:
    TranslationServer.set_locale(new_locale)
    # Update UI text manually or use a signal to refresh
```

You can store the chosen locale in `ProjectSettings` or a save file and reload it on startup.

```gdscript
ProjectSettings.set("locale/locale", "fr_FR")
```

---

## 6. Localization workflow

1. **Create a base translation** (`en.po`).  
2. **Add other languages** (`fr.po`, `de.po`, …).  
3. **Export to `.po` / `.csv`** for translators.  
4. **Import back** into Godot.  
5. **Test** each language, especially plural forms and placeholders.  

Godot’s *Translation* editor provides a spreadsheet‑like UI for quick edits.  
For large projects consider integrating with external tools like Poedit or using the *Localization using spreadsheets* tutorial.

---

## 7. Advanced topics

- **Using `tr()` in the editor** – works for node properties marked with **`@export var`** and **`export (String)`**.  
- **Custom translation loaders** – implement `ResourceLoader` to load translations from JSON, XML, etc.  
- **Fallback chain** – set `Project Settings > I18N > Fallback locales` to specify a hierarchy.  
- **Runtime translation updates** – `TranslationServer.reload_translation()` to reload modified files without restarting.

---

## 8. Summary

1. **Define a `Translation` resource** for each language.  
2. **Store strings** in that resource (or import CSV/TSV).  
3. **Use `tr()` / `trn()`** in code.  
4. **Switch locales** via `TranslationServer`.  
5. **Keep a clear workflow** to manage translations and avoid missing keys.

For a deeper dive into spreadsheet‑based localization, see the related tutorial:  
[Localization using spreadsheets](https://docs.godotengine.org/en/stable/tutorials/i18n/localization_using_spreadsheets.html).

---

**Next steps**

- Explore the built‑in *Translation* editor.  
- Add language support to your own projects.  
- Test your game in multiple locales to ensure UI, numbers, and dates appear correctly.

---