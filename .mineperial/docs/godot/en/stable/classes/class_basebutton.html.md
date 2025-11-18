**BaseButton**  
*Abstract base class for GUI buttons in Godot Engine*  

---  

### Inheritance

```
Object
└─ Node
   └─ CanvasItem
      └─ Control
         └─ BaseButton
```

*Inherited by:* `Button`, `LinkButton`, `TextureButton`.

### Overview

`BaseButton` provides the core functionality for all button-like UI elements in Godot.  
It defines common properties (e.g., `pressed`, `toggle_mode`, `focus_mode`), signals (e.g., `pressed`, `toggled`), and methods that handle button state, interaction, and visual feedback.  Derived classes extend or override this base to implement specific button styles and behaviors.

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `pressed` | `bool` | `false` | Whether the button is currently pressed. |
| `toggle_mode` | `bool` | `false` | If `true`, the button remains pressed until toggled off. |
| `focus_mode` | `FocusMode` | `FocusMode.NONE` | Determines how the button can receive keyboard focus. |
| `hovered` | `bool` | `false` | Indicates if the mouse is over the button. |
| `button_pressed` | `bool` | `false` | Read‑only, mirrors `pressed` for signals. |

*(Additional properties may be added in newer Godot versions.)*

### Signals

| Signal | Description |
|--------|-------------|
| `pressed()` | Emitted when the button is pressed (clicked or activated via keyboard). |
| `toggled(bool)` | Emitted when a toggle button changes state. |
| `focus_entered()` | Emitted when the button receives focus. |
| `focus_exited()` | Emitted when the button loses focus. |

### Methods

| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `set_pressed(bool pressed)` | `bool pressed` | – | Sets the button’s pressed state. |
| `is_pressed() -> bool` | – | `bool` | Returns current pressed state. |
| `set_toggle_mode(bool enabled)` | `bool enabled` | – | Enables/disables toggle mode. |
| `is_toggle_mode() -> bool` | – | `bool` | Checks toggle mode status. |
| `get_focus_mode() -> FocusMode` | – | `FocusMode` | Returns the focus mode. |
| `set_focus_mode(FocusMode mode)` | `FocusMode mode` | – | Sets the focus mode. |

*(The actual class contains many more helper methods for style, theme, and accessibility.)*

### Usage Example

```gdscript
# GDScript example
var my_button = Button.new()
my_button.text = "Click Me"
my_button.pressed.connect(func(): print("Button pressed!"))
add_child(my_button)
```

```csharp
// C# example
Button myButton = new Button();
myButton.Text = "Click Me";
myButton.Pressed += () => Console.WriteLine("Button pressed!");
AddChild(myButton);
```

### Notes

- **Abstract Nature**: `BaseButton` itself cannot be instantiated. Use one of its concrete subclasses (`Button`, `LinkButton`, `TextureButton`, etc.).
- **Theme Overrides**: Many visual aspects (e.g., button color, font, stylebox) are controlled through the theme system rather than direct properties.
- **Accessibility**: When `focus_mode` is enabled, the button can be navigated with keyboard and controller inputs.

---

For the complete API reference, consult the official Godot documentation or the class reference page.