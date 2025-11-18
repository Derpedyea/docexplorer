**Localization using gettext (PO files)**  
Godot Engine supports the GNU gettext format (`.po` and, since Godot 4.0, compiled `.mo` files).  
Using gettext brings a number of advantages over plain CSV translations:

* Automatic handling of plural forms  
* Context support (`msgctxt`)  
* Seamless integration with external tools such as `msgmerge` and `msgfmt`  
* One‑file format that is easy to share with translators  

---

## 1. Prerequisites

| Platform | Command‑line tools required |
|----------|-----------------------------|
| Windows | `msgfmt.exe`, `msgmerge.exe`, `msginit.exe` (part of a gettext distribution) |
| macOS / Linux | `gettext` (usually pre‑installed) |

> **Tip** – You can download a Windows bundle from the [GNU gettext project](https://www.gnu.org/software/gettext/).

---

## 2. Create a PO file

1. Create an empty PO file (e.g. `locales/en.po`).  
2. Add a header that describes the file:

```po
msgid ""
msgstr ""
"Project-Id-Version: 1.0\n"
"PO-Revision-Date: 2025-11-18\n"
"Last-Translator: Your Name <you@example.com>\n"
"Language-Team: English\n"
"Language: en\n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Content-Transfer-Encoding: 8bit\n"
```

3. Add translated strings:

```po
#: res://scripts/main.gd:45
msgid "Hello world!"
msgstr "Bonjour le monde!"

#: res://scripts/main.gd:46
msgid "You have %d new messages."
msgid_plural "You have %d new messages."
msgstr[0] "Vous avez %d nouveau message."
msgstr[1] "Vous avez %d nouveaux messages."
```

4. If you need a compiled binary, run

```bash
msgfmt -o locales/fr.mo locales/fr.po
```

---

## 3. Load translations in Godot

Add the translation files to your project’s `res://locales/` directory and tell the editor to load them.

```gdscript
# res://scripts/localization.gd
extends Node

func _ready():
    # Load each .po/.mo file in the locales directory
    var dir = Directory.new()
    dir.open("res://locales")
    dir.list_dir_begin()
    var file = dir.get_next()
    while file != "":
        if file.get_extension() in ["po", "mo"]:
            var translation = Translation.new()
            translation.parse(file)
            TranslationServer.add_translation(translation)
        file = dir.get_next()
```

You can also add translations from the **Project Settings > General > Internationalization > Localization** panel.

---

## 4. Using translated strings in code

Use the built‑in `tr()` and `trn()` helpers:

```gdscript
# Simple string
$Label.text = tr("Hello world!")

# Pluralized string
var count = 5
$Label.text = trn("You have %d new message.", "You have %d new messages.", count, count)
```

If you need a specific locale, switch it at runtime:

```gdscript
TranslationServer.set_locale("fr")
```

---

## 5. Context and multiple strings

Context is added with `msgctxt` in the PO file, and referenced in code with `tr()` by providing the context:

```gdscript
# In GDScript
var context = "Button"
print(trn("Exit", "Exit", 0, context))
```

In the PO file:

```po
msgctxt "Button"
msgid "Exit"
msgstr "Quitter"
```

---

## 6. Fallback and default language

If a string is missing in the current locale, Godot automatically falls back to the base language (usually English).  
You can control the order of fallback languages in **Project Settings > Internationalization > Fallbacks**.

---

## 7. Typical workflow for translators

1. `msginit` or `msgmerge` to create/update PO files.  
2. Edit the PO file (e.g. with Poedit, Lokalize, or any text editor).  
3. Compile with `msgfmt` (if using binary `.mo` files).  
4. Copy the updated files into the `res://locales/` directory.  
5. Restart the editor or reload translations in the running project.

---

## 8. Summary

* Use gettext when you need robust plural handling or external tooling.  
* Keep all translations under `res://locales/`.  
* Load translations at startup or as needed.  
* Switch locales at runtime with `TranslationServer.set_locale()`.  

For more detailed information, see the official Godot documentation on [Internationalization](https://docs.godotengine.org/en/stable/tutorials/i18n/index.html).