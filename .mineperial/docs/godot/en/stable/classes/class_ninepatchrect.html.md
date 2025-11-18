**Note:** The provided HTML excerpt does not contain the full content of the `NinePatchRect` class documentation (methods, properties, signals, etc.).  Below is a concise Markdown summary based on the available information.  For complete details, please refer to the original Godot Engine documentation page.  

---  

# NinePatchRect  

`NinePatchRect` – A `Control` node that displays a texture by keeping its corners intact while tiling its edges and center.  This is commonly known as a 9‑slice panel.

## Inheritance  

```
Object
 └─ Node
     └─ CanvasItem
         └─ Control
             └─ NinePatchRect
```

## Description  

A `NinePatchRect` can be used to create resizable UI elements that maintain a consistent border while scaling the interior.  The node takes a texture and a `Rect2` specifying the “stretch margins” for each side, then automatically handles the tiling of the remaining area.

---

*(Further sections such as Properties, Methods, Signals, and Enumerations are available in the full documentation.)*