# Submitting to the Asset Library

This guide walks you through the process of publishing your own assets to the Godot Asset Library so that the community can use and benefit from them.

> *If you just want to quickly upload a project, skip to the “Upload a ZIP file” section below.*

---

## 1.  Introduction

The Asset Library is a central place where Godot users can find, download and rate ready‑made assets.  
Publishing your work here gives your project visibility, encourages collaboration, and helps maintain a healthy ecosystem.

> **Tip** – Before you start, read the [Using the Asset Library](../using_assetlib.html) page to understand the overall workflow and what users expect from a good package.

---

## 2.  Before You Submit

| Item | Description |
|------|-------------|
| **License** | Choose an open‑source license that is compatible with Godot (e.g. MIT, GPL‑3.0, Apache‑2.0). |
| **File format** | Zip the folder that contains *all* files needed to use the asset. |
| **Metadata** | Provide a clear name, short description, and at least three tags. |
| **Screenshots / demo** | Add one or more screenshots (PNG, JPG). If possible, include a short demo video. |
| **Documentation** | Write a `README.md` with installation and usage instructions. |
| **Versioning** | Keep a `version.txt` or use Git tags so users can see what is current. |

---

## 3.  Preparing the Asset

1. **Create a clean project folder**  
   ```text
   my_asset/
     ├─ docs/
     │   └─ README.md
     ├─ license/
     │   └─ LICENSE.txt
     ├─ screenshots/
     │   ├─ screenshot1.png
     │   └─ screenshot2.png
     ├─ scenes/
     │   └─ MyAsset.tscn
     ├─ scripts/
     │   └─ MyAsset.gd
     └─ assets/
         └─ textures/
   ```
   *Keep the root folder name descriptive – e.g., `my_asset` – because this will become the ZIP’s top‑level directory.*

2. **Add a `project.godot` (optional)**  
   If the asset is a full Godot project, include this file.  
   For reusable scenes or scripts, a minimal `project.godot` is fine.

3. **Generate a short README**  
   ```markdown
   # My Asset

   *Version:* 1.0.0

   ## Description
   A short description of what the asset does.

   ## Installation
   1. Copy `scenes/MyAsset.tscn` into your project’s `scenes/` folder.  
   2. Add it to your scene tree.

   ## License
   MIT – see `license/LICENSE.txt`.
   ```

4. **Zip the folder**  
   ```bash
   cd /path/to
   zip -r my_asset.zip my_asset
   ```

---

## 4.  Creating an Asset Entry

1. Open the [Godot Asset Library](https://godotengine.org/asset-library) and log in.  
2. Click **“Submit Asset”** (top‑right).  
3. Fill the form:

   | Field | What to put |
   |-------|-------------|
   | **Name** | `My Asset` |
   | **Description** | Brief summary (max 200 chars). |
   | **Tags** | `2D, UI, Physics` etc. |
   | **License** | Pick from the drop‑down. |
   | **Version** | `1.0.0` |
   | **Upload ZIP** | The file you created in section 3. |
   | **Screenshots** | Drag‑drop or click **“Add images”**. |
   | **Demo (optional)** | Upload a short MP4 or link to a YouTube video. |

4. Click **“Submit”**.  
   The asset will be queued for review; it may take a few hours to appear in the library.

---

## 5.  After Submission

* **Review** – The community or the Godot team may ask for changes or additional details.  
* **Update** – When you release a new version, re‑upload a newer ZIP and update the *Version* field.  
* **Respond to feedback** – Encourage users to leave a rating and comments.  
* **Keep documentation current** – Update `README.md` and screenshots as needed.

---

## 6.  Common Pitfalls

| Issue | Fix |
|-------|-----|
| **“File too large”** | Keep the ZIP < 50 MB. Compress assets and remove unused files. |
| **Missing license** | Add a `LICENSE.txt` in the root folder. |
| **Bad screenshot resolution** | Use 1920×1080 PNGs, no transparency. |
| **Broken import** | Test by creating a new Godot project, then `Import > Asset Library > My Asset`. |

---

## 7.  Useful Links

* [Using the Asset Library](../using_assetlib.html) – How users browse and install assets.  
* [Godot Licensing](../../about/complying_with_licenses.html) – What licenses are compatible with Godot.  
* [Asset Library API](https://docs.godotengine.org/en/stable/extends/asset_library.html) – For advanced automated uploads.  

---

> **Remember:**  
> A well‑documented, properly licensed, and neatly packaged asset is far more likely to be downloaded and appreciated by the community. Happy creating!