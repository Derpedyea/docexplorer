**PlaceholderTexture2D**  
================================

This page is a reference for the Godot class **PlaceholderTexture2D**.

---

### Inheritance
`PlaceholderTexture2D` ↣ `Texture2D`  
*(`Texture2D` ↣ `Texture` ↣ `Resource` ↣ `RefCounted` ↣ `Object`)*  

---

### Description  
`PlaceholderTexture2D` is a lightweight, built‑in texture used by the editor and the engine whenever a `Texture2D` resource cannot be loaded. It provides a simple visual cue (typically a colored grid or checkerboard) so that missing textures do not break the scene or cause runtime errors.

---

### Properties
| Name | Type | Description |
|------|------|-------------|
| *none* | – | Placeholder textures do not expose any custom properties. |

---

### Methods
*No additional methods beyond those inherited from `Texture2D`.*

---

### Signals
*None.*

---

#### Quick Reference

| Feature | Detail |
|---------|--------|
| **Use case** | Auto‑generated placeholder for missing textures in scenes or editor previews. |
| **Visibility** | Public class; can be instantiated from scripts if needed, though normally handled internally. |
| **Inheritance chain** | `Object → RefCounted → Resource → Texture → Texture2D → PlaceholderTexture2D` |

--- 

**Note**: For a complete list of inherited members and their signatures, see the corresponding sections in the `Texture2D` class reference.