**Importing translations**  
*Godot Engine – Stable documentation*

---

## Overview

Games often need to support multiple languages.  
Godot makes this straightforward by allowing you to import translation
files (the standard `.po` format) and then reference those translations
from code and UI nodes.

---

## 1. What is a translation file?

A **.po** (Portable Object) file contains a mapping from a source string
to one or more translations:

```
msgid "Hello"
msgstr "Hola"      # Spanish
```

Godot can read `.po` files automatically and use them at runtime.

---

## 2. Organising translation files

* Put all your `.po` files in a dedicated folder inside the project,
  e.g. `res://locale/`.

| Language | Folder | Example file |
|----------|--------|--------------|
| English | `res://locale/en/` | `en.po` |
| Spanish | `res://locale/es/` | `es.po` |
| French  | `res://locale/fr/` | `fr.po` |

You can create these files with any PO‑editor (Poedit, VSCode, etc.) or
generate them from CSV or Excel if you prefer.

---

## 3. Enabling internationalisation in the project

1. Open **Project → Project Settings**.  
2. Go to **Internationalisation → Translation**.
3. Set **Default Language** (the language the game will start in).
4. Add your locales by clicking the *Add* button and selecting the
   `locale/*.po` files.

> **Tip:** The project settings automatically detect and load all
> translation files located in the `res://locale/` directory.

---

## 4. Using translations in the editor

### 4.1 Translatable UI nodes

* Select a `Label`, `Button`, `LineEdit`, etc. in the editor.  
* In the **Inspector** under the *Text* property, click the *Translation*
  icon.  
* Enter the **source text** (the `msgid`).

When the game runs, Godot will replace the source text with the
corresponding string from the loaded translation file.

### 4.2 Translations in GDScript

```gdscript
# Using tr() – works for static strings
label.text = tr("Start Game")

# Using TTR() – works for dynamic strings
var key = "Level_{}".format(current_level)
label.text = TTR(key)   # Will look up key in the translation tables
```

`tr()` and `TTR()` automatically fall back to the source string if a
translation is missing.

---

## 5. Switching languages at runtime

```gdscript
# Switch to Spanish
TranslationServer.set_locale("es")
```

The UI will immediately reflect the new language.  
You can store the chosen locale in `ProjectSettings` or a save file
so that it persists between sessions.

---

## 6. Example workflow

1. **Create translations**  
   * `en.po`:  
     ```
     msgid "Play"
     msgstr "Play"
     ```
   * `es.po`:  
     ```
     msgid "Play"
     msgstr "Jugar"
     ```

2. **Add files to the project** – drag the `locale` folder into the
   `res://` directory.

3. **Configure project settings** – set default language to `en`,
   enable `es` in the locales list.

4. **Make UI nodes translatable** – use the translation icon in the
   inspector.

5. **Run the game** – all UI text shows in English.

6. **Switch to Spanish** – call
   `TranslationServer.set_locale("es")`; UI updates automatically.

---

## 7. Troubleshooting

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| Text doesn’t change on language switch | The node is not marked translatable | Use the translation icon or `tr()` in code |
| Missing translations | PO file not in `locale` folder | Move file to `res://locale/` or add path in project settings |
| Duplicate strings | Same `msgid` in multiple PO files | Remove duplicates or use `msgctxt` for context |

---

### Further reading

* [Internationalisation & localisation in Godot](https://docs.godotengine.org/en/stable/tutorials/i18n.html)  
* [Using the TranslationServer](https://docs.godotengine.org/en/stable/classes/class_translationserver.html)  

---