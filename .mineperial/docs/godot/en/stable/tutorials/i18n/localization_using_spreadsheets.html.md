**Localization using spreadsheets**  
*(Godot Engine documentation – stable)*

> Spreadsheets are one of the most common formats for localizing games.  
> In Godot, spreadsheets are supported through the CSV format. This guide explains how to work with CSVs.

---

## 1.  Why use CSV for localization?

* **Human‑readable** – easy for translators to edit in Excel, Google Sheets, etc.  
* **Simple import** – Godot’s `Translation` resource can read CSV files directly.  
* **Version‑controlled** – CSV files are plain text and can be tracked in Git, SVN, etc.

---

## 2.  CSV format requirements

| Column | Description | Example |
|--------|-------------|---------|
| `id` | Unique identifier for the string (used in the code). | `greeting_hello` |
| `en` | English source text. | `Hello, world!` |
| `fr` | French translation. | `Bonjour le monde !` |
| `es` | Spanish translation. | `¡Hola, mundo!` |

**General rules**

| Rule | Detail |
|------|--------|
| First row | Header row – must contain the `id` column followed by one column for each language. |
| Column order | `id` must be the first column; other columns can be in any order but are typically sorted by language code. |
| Text escaping | If a string contains a comma, wrap it in double quotes (`"Hello, world!"`). Double quotes inside the text are escaped with `""`. |
| UTF‑8 | The file must be saved with UTF‑8 encoding (no BOM). |
| Blank lines | May be ignored. |

> **Tip**: Use a spreadsheet editor that preserves UTF‑8, e.g. Microsoft Excel, LibreOffice Calc, or Google Sheets (download as CSV).

---

## 3.  Creating a translation CSV

1. Open a new spreadsheet and create the header row.  
   ```text
   id,en,fr,es
   ```
2. Add each string to a new row.  
   ```text
   greeting_hello,Hello, world!,Bonjour le monde !,¡Hola, mundo!
   ```
3. Save the file as `translations.csv` in your project’s `locale` directory.

---

## 4.  Importing the CSV into Godot

1. Open the **Project > Project Settings** dialog.  
2. Under the **Internationalization** tab, set the `locale/translation_loader` to `CSV`.  
   ```text
   locale/translation_loader/en.csv = "CSV"
   locale/translation_loader/fr.csv = "CSV"
   locale/translation_loader/es.csv = "CSV"
   ```
   (If you name the file `translations.csv`, you can point the key to it directly.)
3. Add a **Translation** resource to the project.  
   * Right‑click the `locale` folder → **New Resource** → **Translation**.  
   * Give it a name, e.g. `localizations.tres`.
4. In the Translation inspector, click **Load** and browse to the CSV file.  
   * Select **Add from CSV** and choose the file.
5. Verify that all languages are listed under **Languages**.

---

## 5.  Using the translation in code

```gdscript
# Assuming you have a StringText node
var label = $Label
label.text = tr("greeting_hello")
```

* `tr()` looks up the string by `id` in the current language.  
* If the ID is not found, it falls back to the base language (usually English).

### Switching languages at runtime

```gdscript
var language = "es"          # Spanish
TranslationServer.set_locale(language)
```

---

## 6.  Working with Google Sheets

1. Publish your sheet as a CSV file via **File → Download → Comma‑delimited values (.csv)**.  
2. Save the CSV locally or keep it in a version‑controlled repository.  
3. Automate the export with a script or CI pipeline so the latest translation is always included in your build.

---

## 7.  Exporting translations

When exporting a project:

* In **Project Settings > Export > Translation** check **"Export translations"**.  
* This bundles all loaded translations into the exported package.  

---

## 8.  Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| `tr()` returns empty string | ID not present in CSV | Verify the ID and that the CSV was loaded. |
| Special characters (é, ñ) not displayed | File not UTF‑8 | Re‑save CSV as UTF‑8 without BOM. |
| Comma inside a string breaks columns | Text not quoted | Wrap problematic strings in double quotes. |

---

## 9.  Further reading

* [Localization using gettext (PO files)](../localization_using_gettext.html) – an alternative method.  
* [Internationalizing games](../internationalizing_games.html) – high‑level overview.

---