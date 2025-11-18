**Locale Codes** – Godot Engine documentation (stable)

---

### Overview

The Godot Engine uses *locale codes* to identify languages, scripts, and regional variants for internationalization (i18n).  
A locale code follows the pattern:

```
language[_Script][_COUNTRY][_VARIANT]
```

| Component | Description | Example |
|-----------|-------------|---------|
| `language` | 2‑ or 3‑letter ISO‑639‑1/639‑3 language code, lower‑case | `en`, `fr`, `es` |
| `Script` | Optional 4‑letter ISO‑15924 script code, title‑case | `Hans`, `Hant`, `Cyrl` |
| `COUNTRY` | Optional 2‑letter ISO‑3166‑1 alpha‑2 country code, upper‑case | `US`, `GB`, `CN` |
| `VARIANT` | Optional variant or sub‑tag (e.g., `"POSIX"` or `"variant"` in BCP‑47) | `POSIX` |

> **Note** – The underscore (`_`) is used as a separator; a locale can contain any subset of the components, but the language component is mandatory.

---

### Common Locale Code Examples

| Locale | Meaning |
|--------|---------|
| `en` | English (any region) |
| `en_US` | English – United States |
| `en_GB` | English – Great Britain |
| `es_ES` | Spanish – Spain |
| `fr_CA` | French – Canada |
| `zh_Hans_CN` | Simplified Chinese – Mainland China |
| `zh_Hant_TW` | Traditional Chinese – Taiwan |
| `ru_RU` | Russian – Russia |
| `pt_BR` | Portuguese – Brazil |
| `ar_SA` | Arabic – Saudi Arabia |
| `he_IL` | Hebrew – Israel |

---

### Usage in Godot

1. **Setting the default locale**  
   Go to **Project → Project Settings → Internationalization → Locale** and set the desired locale string (e.g., `en_US`).

2. **Changing the locale at runtime**  
   ```gdscript
   TranslationServer.set_locale("fr_CA")
   ```

3. **Checking the current locale**  
   ```gdscript
   var locale = TranslationServer.get_locale()
   print(locale)   # e.g., "en_US"
   ```

4. **Locale‑aware formatting**  
   Use `TranslationServer.format()` or the `@text` language tags in the editor to automatically adapt text to the active locale.

---

### Best Practices

- **Keep a list** of the locales your project supports and provide corresponding translation files (`*.po`/`.json`).
- **Avoid hard‑coding** locale strings in scripts; prefer Godot’s built‑in `Locale` helpers to handle language/country parsing.
- **Test** each locale in both editor and exported builds to catch missing translations or formatting issues.

---

### References

- [Godot 4 Documentation – Internationalization](https://docs.godotengine.org/en/stable/tutorials/i18n/)
- [BCP 47 – Language Tags](https://tools.ietf.org/html/bcp47)
- [ISO 639‑1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), [ISO 15924](https://www.unicode.org/iso15924/)
- [Locale format in Godot’s TranslationServer](https://docs.godotengine.org/en/stable/classes/class_translationserver.html)

---

*This page is part of the Godot Engine “Internationalization” tutorial series and provides the fundamental knowledge needed to work with locale codes in your projects.*