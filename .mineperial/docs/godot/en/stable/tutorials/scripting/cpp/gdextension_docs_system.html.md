# Adding documentation

> **The GDExtension documentation system works in a similar manner to the built‑in engine documentation.**  
> It uses a series of XML files (one per class) to document the exposed constructors, properties, methods, signals, and other API elements of your GDExtension modules.

---

## Overview

The GDExtension documentation system mirrors the engine’s internal class reference. Each exposed class is described in an XML file that contains information about:

- **Constructors** – what parameters can be passed when a class is instantiated.
- **Properties** – getters/setters, default values, and whether they are exported.
- **Methods** – arguments, return types, and visibility.
- **Signals** – emitted by the class.
- **Enums & Constants** – available for use in user code.
- **Documentation strings** – human‑readable descriptions and example usage.

Once these XML files are generated, Godot automatically builds a searchable, browsable documentation page that can be viewed in the editor’s Class Reference or exported to the online manual.

---

## Generating XML Documentation

1. **Create a `class_db.json` file.**  
   During the build step, GDExtension exports a `class_db.json` that contains a lightweight description of each class. This file is consumed by the documentation generator.

2. **Write XML files.**  
   Place each class’s XML file in the `doc/classes/` directory of your extension. The file name must match the class name exactly (e.g., `MyCustomNode.xml`).

3. **Use the XML schema.**  
   A minimal XML structure looks like this:

   ```xml
   <class name="MyCustomNode" inherits="Node">
       <property name="speed" type="float" default="10.0">
           <doc>
               The movement speed of the node.
           </doc>
       </property>

       <method name="move" args="float distance">
           <doc>
               Moves the node forward by <distance>.
           </doc>
       </method>

       <signal name="body_entered">
           <doc>
               Emitted when another body collides.
           </doc>
       </signal>
   </class>
   ```

4. **Rebuild the engine.**  
   Run the standard build pipeline (`scons platform=...` or the Visual Studio/IDE workflow). The build process will pick up the XML files and integrate them into the engine’s documentation database.

---

## Tips for Writing Documentation

| Topic | Recommendation |
|-------|----------------|
| **Use concise titles** | Each class and member should have a short, descriptive name. |
| **Provide examples** | Inline code snippets help readers understand usage. |
| **Keep descriptions focused** | Avoid long paragraphs; focus on the “what” and “why”. |
| **Reference related classes** | Use `@see` tags to link to related types. |
| **Use Markdown** | Within `<doc>` tags, you can use markdown‑like syntax that the renderer will convert to HTML. |
| **Update on changes** | Keep the XML files in sync with your API. |

---

## Common Pitfalls

- **Wrong class name** – If the XML file name does not match the class, the documentation will not appear.
- **Missing `inherits` attribute** – Without it, the type hierarchy is broken.
- **Unescaped XML characters** – Use `&amp;`, `&lt;`, `&gt;` where appropriate.
- **Incorrect return types** – Ensure the type name matches the one used in the C++ signature.

---

## Next Steps

1. **Write XML for your core classes.**  
2. **Test by running the editor and navigating to the Class Reference.**  
3. **Export the manual** to make it accessible for your project’s end‑users.

For a deeper dive, consult the official GDExtension documentation and look at the built‑in Godot engine’s XML files as examples.