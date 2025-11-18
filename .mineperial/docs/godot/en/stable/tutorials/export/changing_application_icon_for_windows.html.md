**Manually changing application icon for Windows**

This page is a technical guide that explains how to replace the default icon used by a Godot exported Windows application with a custom icon. The documentation covers the use of the Windows ICO format, how Godot can automatically generate an ICO file from a PNG image (since Godot 4.1), and how to manually provide your own ICO file if needed.

---

## 1. What is an ICO file?

Windows applications use a proprietary **ICO** format for both the file icon (shown in File Explorer) and the taskbar icon. An ICO file can contain multiple images at different resolutions and color depths, allowing Windows to choose the most appropriate one for the current context (e.g., the taskbar, desktop shortcuts, etc.).

## 2. Using the built‑in Godot 4.1 icon generation

Starting with Godot 4.1, the export process can automatically convert the icon you specify in the *Project Settings → Display → Window → Application icon* setting into a valid ICO file. This simplifies the workflow:

1. Open **Project Settings**.
2. Navigate to **Display → Window → Application icon**.
3. Drag‑and‑drop or browse to a **PNG** (or other supported format) that meets Godot’s recommended dimensions (e.g., 512×512).
4. When exporting to Windows, Godot will generate a multi‑resolution ICO file for you.

> **Tip**: The generated ICO includes several standard sizes (16×16, 32×32, 64×64, 128×128, 256×256, and 512×512). If you need more control over the final appearance, you can supply your own ICO file.

## 3. Providing a custom ICO file

If you want to supply a custom icon that differs from the automatically generated one, follow these steps:

1. Create or obtain the ICO file you want to use.  
   *You can use a tool like [IcoFX](https://icofx.ro/), [RealWorld Icon Editor](https://www.realworldtech.com/), or `ImageMagick` (`convert icon.png -define icon:auto-resize icon.ico`).*

2. Place the `icon.ico` file in a folder inside your Godot project (e.g., `res://assets/`).

3. In the editor, go to **Project Settings → Display → Window → Application icon** and click **Load** to select the ICO file.  
   *When you select an ICO, Godot will use it verbatim without further conversion.*

4. Export your project for Windows again. The exporter will embed the custom ICO into the resulting executable.

## 4. Manual conversion from PNG to ICO (if you prefer not to use Godot’s built‑in feature)

If you’re using Godot 4.0 or earlier, or if you want to generate the icon yourself for any reason, you can convert a PNG to ICO using command‑line tools:

```bash
# Using ImageMagick on Windows or macOS
magick icon.png -define icon:auto-resize=256,128,64,32,16 icon.ico
```

or on Linux with `convert`:

```bash
convert icon.png -resize 256x256 icon256.png
convert icon.png -resize 128x128 icon128.png
convert icon.png -resize 64x64   icon64.png
convert icon.png -resize 32x32   icon32.png
convert icon.png -resize 16x16   icon16.png
convert icon*.png icon.ico
```

**Important**: The generated ICO must contain all required resolutions for best compatibility.

## 5. Verifying the icon in the exported application

After export:

1. Locate the `.exe` file in the export folder.
2. Right‑click → *Properties* → *Details* tab → Verify that the “Icon” field shows your custom image.
3. Run the application and check that the taskbar icon matches your expectations.

## 6. Troubleshooting

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| Icon doesn’t appear in the taskbar | ICO missing or not embedded | Verify that `icon.ico` is present in the export directory and referenced in the project settings. |
| Icon shows in the File Explorer but not on the taskbar | Wrong size or color depth | Ensure your ICO contains 32‑bit PNG images at 256×256 and 48×48 sizes. |
| Icon looks pixelated | Low resolution source image | Use a high‑resolution PNG (512×512 or larger) before conversion. |

## 7. Links

- Godot 4.1 release notes – [https://docs.godotengine.org/en/stable/news/4.1.html](https://docs.godotengine.org/en/stable/news/4.1.html)
- Project Settings – *Display → Window → Application icon*
- ImageMagick conversion guide – [https://imagemagick.org/](https://imagemagick.org/)

---

**Summary**  
Godot 4.1 simplifies icon handling on Windows by generating a multi‑resolution ICO from a PNG you provide. If you need finer control, supply your own ICO file. Regardless of the method, be sure the icon is properly referenced in the project settings and check the exported executable to confirm it displays as expected.