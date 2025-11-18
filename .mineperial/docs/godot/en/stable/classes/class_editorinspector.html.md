**EditorInspector**  
=====================

> *Control that implements property editing for an object.*

---

### Inheritance hierarchy
```
Object
 └─ Node
   └─ CanvasItem
     └─ Control
       └─ Container
         └─ ScrollContainer
           └─ EditorInspector
```

---

### Description
`EditorInspector` is a scrollable container that displays editable properties of a given object (typically a `Node` or `Resource`) in the Godot Editor. It is used internally by the editor to provide the “Inspector” panel, but can also be instantiated in custom editor plugins to expose property editing functionality for custom objects.

---

### Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_object(Object obj)` | `void set_object(Object obj)` | Sets the object whose properties will be displayed and edited. |
| `add_property_editor(String name, Object editor)` | `void add_property_editor(String name, Object editor)` | Registers a custom editor for a property. |
| `clear()` | `void clear()` | Removes all property editors and clears the display. |
| `get_editable_properties()` | `Array` | Returns a list of property names that are currently editable. |
| `get_selected()` | `Object` | Returns the currently selected object in the inspector. |
| `edit(Object obj)` | `void edit(Object obj)` | Equivalent to `set_object()`, but also triggers a full rebuild of the inspector. |
| `refresh()` | `void refresh()` | Forces a rebuild of the inspector UI, useful when the edited object changes. |

> *Note: The complete API includes numerous overloads and signals; see the full Godot class reference for details.*

---

### Signals

| Signal | Description |
|--------|-------------|
| `property_changed(String property_name)` | Emitted when a property is changed via the inspector. |
| `object_changed(Object new_object)` | Emitted when a new object is edited. |

---

### Usage Example

```gdscript
# In an editor plugin
var inspector = EditorInspector.new()
add_control(inspector)

var target_node = get_node("MyNode")
inspector.edit(target_node)
```

The inspector will now display all editable properties of `MyNode`, and any changes made in the UI will be applied to the node in real time.

---

### Related Classes

* [EditorProperty](https://docs.godotengine.org/en/stable/classes/class_editorproperty.html)
* [EditorPlugin](https://docs.godotengine.org/en/stable/classes/class_editorplugin.html)
* [EditorInterface](https://docs.godotengine.org/en/stable/classes/class_editorinterface.html)

---

*For full details, consult the official Godot Engine class reference.*