**CompositorEffect**  
---  

> **Experimental**: The implementation may change as more of the rendering internals are exposed over time.  
> **Inherits**: `Resource < RefCounted < Object`  

`CompositorEffect` is a resource that allows developers to create custom post‑processing effects that can be applied in the rendering pipeline.  The class exposes a small API that is designed to be extended by writing custom shaders and configuring parameters that can be passed to the compositor.

---

## Overview

- **Purpose** – Define a single render pass that can manipulate the screen buffer before it is presented to the user.  
- **Usage** – Create a `CompositorEffect` instance in a `Compositor` resource and add it to the compositor’s pipeline.  
- **Lifecycle** – Effects are applied in the order they are added; each effect runs after the previous one.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | `String` | – | A human‑readable identifier. |
| `shader` | `Shader` | – | The custom shader that implements the effect. |
| `enabled` | `bool` | `true` | Whether the effect is active. |
| `params` | `Dictionary` | – | Custom parameters that can be used by the shader. |

> **Note**: The `shader` property expects a shader that follows the special `compositor` shader type.

---

## Methods

```gdscript
func set_parameter(name: String, value: Variant) -> void
```
Set a custom parameter that the shader can use.

```gdscript
func get_parameter(name: String) -> Variant
```
Retrieve the current value of a parameter.

```gdscript
func set_enabled(enabled: bool) -> void
```
Enable or disable the effect.

```gdscript
func is_enabled() -> bool
```
Return whether the effect is active.

---

## Example

```gdscript
# Create a compositor effect in GDScript
var effect = CompositorEffect.new()
effect.shader = load("res://shaders/dogfood.gdshader") # custom compositor shader
effect.set_parameter("threshold", 0.5)

# Add to a compositor
var compositor = Compositor.new()
compositor.add_effect(effect)
```

---

## Shader example (`dogfood.gdshader`)

```glsl
shader_type compositor;

uniform sampler2D texture : hint_albedo;
uniform float threshold : hint_range(0.0, 1.0);

void fragment() {
    vec4 color = texture(texture, SCREEN_UV);
    if (color.r > threshold) {
        color.g = 1.0; // turn green
    }
    COLOR = color;
}
```

---

## Reference

For full API details and additional configuration options, see the [Godot Engine Class Reference](https://docs.godotengine.org/en/stable/classes/class_compositoreffect.html).