**ScrollContainer**  
=====================

A container that automatically adds scrollbars to its child control when the
child’s size exceeds the container’s bounds.

Inheritance hierarchy
---------------------

```
Object
 └─ Node
     └─ CanvasItem
         └─ Control
             └─ Container
                 └─ ScrollContainer
```

The `ScrollContainer` class is further extended by `EditorInspector`.

Main features
-------------

* **Automatic scrollbars** – The container adds horizontal and/or vertical
  scrollbars based on the `scroll_horizontal` and `scroll_vertical`
  properties of its child.
* **Clipping** – Children are clipped to the visible area of the container.
* **Custom scroll modes** – You can set the scroll mode (e.g. `ScrollMode::Off`,
  `ScrollMode::Auto`, `ScrollMode::Always`).

### Usage example

```gdscript
var scroll = ScrollContainer.new()
var long_label = Label.new()
long_label.text = "Very long text that will need to scroll..."
scroll.add_child(long_label)
add_child(scroll)
```

The `Label` will receive vertical scrolling if its height exceeds the
`ScrollContainer`’s viewport.

For more details about the properties, methods, and signals of
`ScrollContainer`, refer to the full class reference in the
[Godot documentation](https://docs.godotengine.org/en/stable/classes/class_scrollcontainer.html).

---