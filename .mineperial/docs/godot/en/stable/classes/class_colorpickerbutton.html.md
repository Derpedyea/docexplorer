# ColorPickerButton

A **Button** that displays a color and opens a `ColorPicker` when pressed.  
It is a convenience node that encapsulates a `ColorPicker`, making it
accessible by the editor and from code.

> **Inherits**: `Button` → `BaseButton` → `Control` → `CanvasItem` → `Node` → `Object`

---

## Description

`ColorPickerButton` is a UI control used to let users choose a color.
When the button is clicked, a drop‑down `ColorPicker` appears, allowing the
user to pick a new color. The selected color is automatically applied to the
button’s background and can be queried via the `color` property.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | `Color` | `Color(1, 1, 1, 1)` | The currently selected color. |
| `use_alpha` | `bool` | `true` | If `true`, the alpha channel is shown in the picker. |
| `flat` | `bool` | `false` | If `true`, the button is drawn without a 3‑D border. |
| `custom_colors` | `Array[Color]` | `[]` | Custom colors that appear at the top of the picker. |
| `presets` | `Array[Color]` | `[]` | Custom presets shown in the color picker. |
| `picker` | `ColorPicker` | `null` | The internal `ColorPicker` instance. |

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `color_changed` | `color : Color` | Emitted when the user picks a new color. |
| `color_picker_toggled` | `visible : bool` | Emitted when the picker is shown/hidden. |

---

## Methods

### `func get_color() -> Color`
Returns the currently selected color.

### `func set_color(color : Color) -> void`
Sets the button’s color and updates the picker if it is open.

### `func get_use_alpha() -> bool`
Returns whether the alpha channel is displayed in the picker.

### `func set_use_alpha(enable : bool) -> void`
Enables or disables the alpha channel in the picker.

### `func get_picker() -> ColorPicker`
Returns the internal `ColorPicker`. This can be used to customize the picker
or connect its signals.

### `func set_picker(picker : ColorPicker) -> void`
Sets a custom `ColorPicker` instance to be used by the button.

### `func get_presets() -> Array[Color]`
Returns the list of preset colors.

### `func set_presets(colors : Array[Color]) -> void`
Replaces the preset colors list.

### `func get_custom_colors() -> Array[Color]`
Returns the list of custom colors.

### `func set_custom_colors(colors : Array[Color]) -> void`
Replaces the custom colors list.

### `func is_flat() -> bool`
Returns the current `flat` value.

### `func set_flat(flat : bool) -> void`
Sets the `flat` property, drawing the button without a 3‑D border.

---

## Example Usage

```gdscript
extends ColorPickerButton

@onready var color_label: Label = $"ColorLabel"

func _ready():
    # Connect to color change signal
    connect("color_changed", self, "_on_color_changed")
    # Set an initial color
    color = Color(0.5, 0.8, 0.2)

func _on_color_changed(new_color: Color) -> void:
    # Update a label or other UI element
    color_label.text = "Selected Color: " + new_color.to_html()
```

**In the editor**  
- Drag a `ColorPickerButton` into the scene.  
- Set the `color` property in the Inspector.  
- Add a `ColorPicker` as a child if you need to customize its appearance.

**Using a custom picker**

```gdscript
func _ready():
    var picker = ColorPicker.new()
    picker.anchor_right = true
    picker.anchor_bottom = true
    picker.set_custom_colors([Color.red, Color.green, Color.blue])
    set_picker(picker)
```

---

## Common Use‑Cases

* **Theme editors** – Quickly let users pick colours for UI themes.  
* **Game settings** – Provide an in‑game colour picker for user preferences.  
* **Procedural generation** – Allow designers to pick colours for tiles or
  materials directly from the editor.

---

### Related Classes

* [`ColorPicker`](../class_colorpicker.html) – The actual picker widget.  
* [`ColorRect`](../class_colorrect.html) – A simple rectangle showing a colour.  
* [`ColorEdit`](../class_coloredit.html) – Editable colour field in the editor.

---