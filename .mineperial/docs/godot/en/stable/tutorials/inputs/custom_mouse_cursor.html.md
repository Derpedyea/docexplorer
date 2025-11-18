**Customizing the mouse cursor**  
*Godot Engine documentation – Stable (Tutorial)*

---

### Overview
In Godot you can change the mouse cursor in two ways:

1. **Project Settings** – a global, project‑wide cursor image.
2. **Code** – a cursor that is set dynamically from a script.

Both approaches are simple, but the code method gives you more flexibility (different cursors per scene, per node, or per user action).

---

## 1. Using Project Settings

The project‑wide cursor is defined in `Project → Project Settings → Input → Mouse`.

1. Open **Project → Project Settings**.
2. Go to the **Mouse** tab.
3. Set **Cursor** to an image file (PNG, JPEG, etc.).
4. Optionally set the **Cursor Hotspot** – the pixel that will be positioned under the actual mouse point.
5. Optionally set the **Cursor Shape** (default, pointer, text, etc.) if you want to override the OS cursor style.

Once set, this cursor will appear everywhere in your project, unless overridden by code.

---

## 2. Setting the cursor from code

Use the `Input` singleton to set a custom cursor at runtime.  
Typical usage is in a **Node**’s script.

```gdscript
# Load the image once, e.g. in _ready()
var cursor_texture : Texture2D = preload("res://cursor.png")

func _ready() -> void:
    # Optional: set a hotspot (Vector2) and shape
    Input.set_custom_mouse_cursor(
        cursor_texture,
        Input.CURSOR_ARROW,        # shape enum (optional)
        Vector2(16, 16)            # hotspot, 0,0 is top‑left
    )
```

### Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `texture` | `Texture2D` | The cursor image. |
| `shape`   | `int` (optional) | One of the `Input.CursorShape` constants (`CURSOR_ARROW`, `CURSOR_IBEAM`, `CURSOR_POINTING_HAND`, …). Defaults to `CURSOR_ARROW`. |
| `hotspot` | `Vector2` (optional) | The pixel that is considered the “pointer” inside the image. |

### Removing a custom cursor
If you want to revert to the default cursor:

```gdscript
Input.set_custom_mouse_cursor(null)
```

---

## 3. Advanced usage

| Feature | Description |
|---------|-------------|
| **Dynamic cursors** | Change the cursor in response to game state (e.g., while picking up an item, while hovering over a button). |
| **Multiple cursors** | Store several `Texture2D`s and switch between them using a small lookup table. |
| **Hotspot per sprite** | For sprite‑based cursors, set the hotspot to the center or the tip of the arrow. |
| **Shape fallback** | Even if you supply a texture, Godot still uses the OS‑provided shape if the texture is `null` or cannot be loaded. |

### Example – Hover effect

```gdscript
var normal_cursor = preload("res://normal.png")
var hover_cursor  = preload("res://hover.png")

func _on_Area2D_mouse_entered() -> void:
    Input.set_custom_mouse_cursor(hover_cursor, Input.CURSOR_POINTING_HAND, Vector2(8, 8))

func _on_Area2D_mouse_exited() -> void:
    Input.set_custom_mouse_cursor(normal_cursor, Input.CURSOR_ARROW, Vector2(0, 0))
```

---

## 4. Tips

- **Image format** – PNG is recommended because it supports alpha transparency.
- **Size** – Keep the image small (≤ 64×64) for quick loading.
- **Hotspot** – Test it visually; a mis‑aligned hotspot can feel odd.
- **Export** – When exporting, Godot automatically bundles the cursor texture.

---

## 5. References

- [Project Settings – Mouse](https://docs.godotengine.org/en/stable/tutorials/inputs/project_settings.html#mouse-cursor)
- `Input.set_custom_mouse_cursor()` – Godot 4.0 API reference.
- [CursorShape enum](https://docs.godotengine.org/en/stable/classes/class_input.html#enum-input-cursorshape)

---