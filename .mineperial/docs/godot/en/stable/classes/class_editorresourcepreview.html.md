**EditorResourcePreview** – Godot Engine 4.0 Class Reference  
============================================================

> *Node* – A node used to generate previews of resources or files.

> **Note:** This class should not be instantiated directly.  Use the editor's built‑in preview mechanisms or the `EditorResourcePreview` singleton instead.

---

### Overview

`EditorResourcePreview` provides a set of helper methods for creating preview textures for arbitrary resources (e.g., images, 3D meshes, scenes).  It is primarily used by the editor to display thumbnails in file‑browser panels, inspector previews, and drag‑and‑drop UI.

---

### Methods

| Method | Description |
|--------|-------------|
| `ImageTexture create_preview(Resource resource)` | Generates a preview texture for the given **resource**.  The texture is cached for future calls. |
| `void cancel_all_previews()` | Cancels all pending preview generation jobs. |
| `bool is_preview_available(Resource resource)` | Returns whether a preview is already cached for the supplied resource. |
| `ImageTexture get_preview(Resource resource)` | Retrieves a cached preview texture.  If no preview is available the method returns `null`. |
| `void request_preview(Resource resource, Callable callback)` | Asynchronously generates a preview for the resource and calls **callback** with the resulting texture when ready. |
| `bool supports_format(String format)` | Checks if the preview system supports the given file **format** (e.g., `"png"`, `"gdscene"`). |
| `ImageTexture create_file_preview(String path)` | Creates a preview for a file by its path.  The preview is generated based on the file extension and cached. |

> **Tip:** Use `request_preview()` for large or complex resources to avoid blocking the main thread.  The callback will be executed once the preview is ready.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `int preview_size` | `int` | `128` | The width/height of generated preview textures in pixels. |
| `int max_previews` | `int` | `256` | Maximum number of preview textures cached. |

---

### Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `preview_ready(Resource resource, ImageTexture texture)` | `Resource`, `ImageTexture` | Emitted when an asynchronous preview generation finishes. |

---

### Example Usage

```gdscript
var previewer = EditorResourcePreview.new()

func _ready():
    var res = preload("res://my_model.tres")
    if previewer.is_preview_available(res):
        var tex = previewer.get_preview(res)
        $Sprite.texture = tex
    else:
        previewer.request_preview(res, Callable(self, "_on_preview_ready"))
    
func _on_preview_ready(resource, texture):
    $Sprite.texture = texture
```

---

### Reference

* [Godot Engine Documentation](https://docs.godotengine.org/en/stable/classes/class_editorresourcepreview.html)

---