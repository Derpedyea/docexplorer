**Inspector plugins**

The Inspector dock allows you to create custom widgets to edit properties through plugins.  
This can be beneficial when working with custom datatypes and resources, although you can use the feature to provide a more convenient editing experience for existing types.  
Below is a concise guide that covers how to create an inspector plugin, register it, and build a simple custom property editor.

---

## 1.  What is an Inspector Plugin?

An inspector plugin is a GDScript (or C#) class that inherits from `EditorInspectorPlugin`.  
When registered, the plugin can:

- Replace the default property editor for a specific type.
- Add custom controls for editing complex properties.
- Provide validation, preview, or helper widgets.

```gdscript
class_name MyInspectorPlugin
extends EditorInspectorPlugin

func can_handle(object):
    return object is MyCustomResource
```

---

## 2.  Registering the Plugin

Plugins live in an `addons/` directory.  
Create a `plugin.cfg` file to describe the plugin:

```text
[plugin]
name="My Inspector"
description="Custom inspector for MyCustomResource"
author="Your Name"
version="1.0"
script="res://addons/my_inspector/my_inspector.gd"
```

Enable the plugin in **Project → Project Settings → Plugins**.

---

## 3.  Replacing a Property Editor

Override `parse_property()` to supply a custom control:

```gdscript
func parse_property(object, type, name, hint, hint_text, usage):
    if object is MyCustomResource and name == "my_special_value":
        var hbox = HBoxContainer.new()
        var spin = SpinBox.new()
        spin.min_value = 0
        spin.max_value = 100
        spin.value = object.my_special_value
        spin.connect("value_changed", object, "_on_special_value_changed")
        hbox.add_child(spin)
        add_custom_control(hbox)
        return true
    return false
```

If `parse_property()` returns `true`, Godot will not draw the default property editor for that field.

---

## 4.  Adding a Custom Button

You can add arbitrary controls, such as a button that performs an action:

```gdscript
func parse_begin(object):
    if object is MyCustomResource:
        var btn = Button.new()
        btn.text = "Reset"
        btn.connect("pressed", object, "_on_reset_pressed")
        add_custom_control(btn)
```

---

## 5.  Example: Editing a `Vector2` as Separate X/Y Fields

```gdscript
class_name Vector2InspectorPlugin
extends EditorInspectorPlugin

func parse_property(object, type, name, hint, hint_text, usage):
    if type == TYPE_VECTOR2:
        var vbox = VBoxContainer.new()
        var hbox_x = HBoxContainer.new()
        var label_x = Label.new()
        label_x.text = "X:"
        var edit_x = SpinBox.new()
        edit_x.min_value = -1000
        edit_x.max_value = 1000
        edit_x.value = object[name].x
        edit_x.connect("value_changed", self, "_on_x_changed", [object, name])
        hbox_x.add_child(label_x)
        hbox_x.add_child(edit_x)

        var hbox_y = HBoxContainer.new()
        var label_y = Label.new()
        label_y.text = "Y:"
        var edit_y = SpinBox.new()
        edit_y.min_value = -1000
        edit_y.max_value = 1000
        edit_y.value = object[name].y
        edit_y.connect("value_changed", self, "_on_y_changed", [object, name])
        hbox_y.add_child(label_y)
        hbox_y.add_child(edit_y)

        vbox.add_child(hbox_x)
        vbox.add_child(hbox_y)
        add_custom_control(vbox)
        return true
    return false

func _on_x_changed(val, obj, prop):
    var vec = obj[prop]
    vec.x = val
    obj[prop] = vec

func _on_y_changed(val, obj, prop):
    var vec = obj[prop]
    vec.y = val
    obj[prop] = vec
```

---

## 6.  Common Pitfalls

| Issue | Fix |
|-------|-----|
| Custom inspector not showing | Ensure `can_handle()` returns `true` for the target object type. |
| Property not updating | Make sure you modify the property **after** updating the control, or use `property_hint` to mark as dirty. |
| Plugin crashes | Use `instance` instead of `object` inside callbacks to avoid referencing a freed object. |

---

## 7.  Resources

- [Godot Editor API – EditorInspectorPlugin](https://docs.godotengine.org/en/stable/classes/class_editorinspectorplugin.html)
- [Godot Docs – Creating Editor Plugins](https://docs.godotengine.org/en/stable/tutorials/plugins/editor/index.html)

---