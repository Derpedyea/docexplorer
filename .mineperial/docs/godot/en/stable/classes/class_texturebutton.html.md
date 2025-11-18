**TextureButton** – Godot Engine 4.x – Class Reference  
==============================================

> A texture‑based button that supports the usual pressed, hovered, disabled and focused states.  
> `TextureButton` inherits from `BaseButton` → `Control` → `CanvasItem` → `Node` → `Object`.

---

### 1. Overview

* **Base Class**: `BaseButton`  
* **Signals**: *none* (inherits all signals from `BaseButton`).  
* **Usage**: Add a `TextureButton` node to a scene, set its textures for each state, and connect the normal button signals (`pressed`, `released`, `mouse_entered`, …).

---

### 2. Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `texture_normal` | `Texture2D` | – | The texture for the normal state. |
| `texture_hover` | `Texture2D` | – | The texture shown when the mouse hovers over the button. |
| `texture_pressed` | `Texture2D` | – | The texture shown when the button is pressed. |
| `texture_disabled` | `Texture2D` | – | The texture shown when the button is disabled. |
| `texture_focus` | `Texture2D` | – | The texture shown when the button has focus. |
| `custom_colors` | `Theme` | – | Custom theme overrides for button states. |
| `expand` | `bool` | `false` | If `true`, the button will expand to fill the entire parent container. |
| `rect_min_size` | `Vector2` | – | Minimum size of the button. |

> *All properties are exported, so they can be set in the Inspector or via code.*  

---

### 3. Signals (inherited from `BaseButton`)

| Signal | Description |
|--------|-------------|
| `pressed()` | Emitted when the button is pressed. |
| `released()` | Emitted when the button is released. |
| `mouse_entered()` | Emitted when the mouse enters the button area. |
| `mouse_exited()` | Emitted when the mouse exits the button area. |

---

### 4. Methods

All methods are inherited from `BaseButton`. The only new ones are the getters/setters for the texture properties:

```gdscript
# Getters
func get_normal_texture() -> Texture2D
func get_hover_texture() -> Texture2D
func get_pressed_texture() -> Texture2D
func get_disabled_texture() -> Texture2D
func get_focus_texture() -> Texture2D

# Setters
func set_normal_texture(texture: Texture2D) -> void
func set_hover_texture(texture: Texture2D) -> void
func set_pressed_texture(texture: Texture2D) -> void
func set_disabled_texture(texture: Texture2D) -> void
func set_focus_texture(texture: Texture2D) -> void
```

---

### 5. Example

```gdscript
extends TextureButton

func _ready():
    # Set up textures
    texture_normal = preload("res://assets/btn_normal.png")
    texture_hover  = preload("res://assets/btn_hover.png")
    texture_pressed = preload("res://assets/btn_pressed.png")
    texture_disabled = preload("res://assets/btn_disabled.png")

    # Connect the pressed signal
    connect("pressed", self, "_on_Button_pressed")

func _on_Button_pressed():
    print("Button was pressed!")
```

---

### 6. Related Classes

* [Button](class_button.html) – The base button class.  
* [TextureProgressBar](class_textureprogressbar.html) – A progress bar with texture states.  

---

### 7. See Also

* [Control](class_control.html) – Base class for all UI elements.  
* [Theme](class_theme.html) – Theming system that can override button textures.  

---

**Note:**  
For a complete list of inherited methods and properties, consult the `BaseButton` documentation. The `TextureButton` class only adds the texture‑specific properties shown above.