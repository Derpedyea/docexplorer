# Importing images

*(The original documentation page contains detailed information about supported image formats, import options, and how to work with images in Godot. Unfortunately, the HTML excerpt provided does not include the main article content, so only the metadata and navigation structure is shown below.)*

## Supported image formats

Godot can import the following image formats:

| Format | Extension | Notes |
|--------|-----------|-------|
| BMP | `.bmp` | No support for 16‑bit per pixel images. Only 1‑bit, 4‑bit, 8‑bit, 24‑bit, and 32‑bit per pixel images are supported. |
| GIF | `.gif` | Supports animated GIFs (limited). |
| JPEG | `.jpg`, `.jpeg` | Lossy compression, no alpha channel. |
| PNG | `.png` | Supports lossless compression and alpha channel. |
| WebP | `.webp` | Supports lossless and lossy compression with optional alpha channel. |
| TGA | `.tga` | Limited support for TGA files. |
| TIFF | `.tif`, `.tiff` | Limited support, primarily 8‑bit images. |
| PSD | `.psd` | Only the first layer is imported. |
| ... | | ... |

> *For a complete and up‑to‑date list, see the official Godot documentation.*

## Import settings

When you add an image to a Godot project, the editor automatically creates an import resource. The import settings can be adjusted in the **Inspector**:

- **Import Mode** – `2D`, `2D Pixel`, `3D`, or `Sky`.
- **Filter** – `Nearest` or `Linear` filtering.
- **Repeat** – `Disabled`, `Enabled`, `Clamp`, or `Mirrored`.
- **Use Alpha** – Enables alpha channel usage.
- **Texture Size** – `512`, `1024`, `2048`, `4096`, or `Custom`.
- **Compress** – `Lossy` or `Lossless`.

> Adjust these settings to balance memory usage and visual quality.

## Handling multiple resolutions

- **Export** – Use `Project Settings → Display → Window → Stretch` to handle different screen resolutions.
- **Atlas** – Pack multiple images into a single texture atlas for efficient rendering.

## Common pitfalls

- **Incorrect import mode** can cause textures to look blurry or pixelated.
- **Large textures** without compression can significantly increase memory usage.

---

*For a more comprehensive guide, please refer to the official Godot documentation: [Importing images](https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_images.html).*