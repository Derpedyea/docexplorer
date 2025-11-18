# Inspector Dock

The Inspector dock is the main panel where you can view and edit the properties of the currently selected node, resource, or object in the Godot editor. Whenever you click on a node in the Scene Tree dock, the Inspector will automatically list that node’s available properties, grouped into categories defined by the node’s class and any custom scripts attached to it.

> **Note**  
> The Inspector updates in real time as you change selections, modify values, or add new resources. It is one of the most frequently used tools in Godot’s interface because it provides a quick way to tweak every aspect of a scene or script from a single place.

## Usage

1. **Selecting a Node**  
   * Click on any node in the Scene Tree dock.  
   * The Inspector will populate with the node’s properties.

2. **Editing Properties**  
   * Properties are displayed as labeled fields that match the data type of the property.  
   * Click the field to edit, or use the drop‑down arrows for enums and bit flags.  
   * For complex objects (e.g., `Rect2`, `Color`, `Transform`) the editor will open a sub‑panel for fine‑grained manipulation.

3. **Categories & Collapsing**  
   * Properties are grouped into sections such as *Transform*, *Appearance*, *Physics*, etc.  
   * Click the arrow beside a section header to collapse or expand it.

4. **Search & Filter**  
   * At the top of the Inspector you can type a keyword to filter visible properties.  
   * This is especially useful when working with scripts that add many custom variables.

5. **Reset & Defaults**  
   * Every property has a small reset icon next to it.  
   * Clicking the icon restores the property to its default value.

6. **Copy / Paste**  
   * Right‑click a property to copy or paste values.  
   * This lets you duplicate settings across multiple nodes quickly.

7. **Exported Properties**  
   * Properties declared with the `export` keyword in a script are automatically visible and editable in the Inspector.  
   * You can also expose custom controls or nested objects by using `export (Array, "type") var my_array`.

8. **Read‑Only and Disabled Properties**  
   * Properties that are read‑only in the engine or disabled by the script will be greyed out.  
   * Attempting to edit them will not change their value.

9. **Custom Property Editors**  
   * Godot allows scripts to provide custom editors for certain property types using the `_get_property_list()` and `_set()` functions.  
   * These are reflected directly in the Inspector and can be used to create rich, node‑specific configuration panels.

10. **Inspector Customization**  
    * The Inspector itself can be docked, undocked, or rearranged just like any other panel.  
    * You can also change the editor theme or enable/disable the “Show All” option to view hidden or internal properties (useful for advanced debugging).

---

*For more detailed information on manipulating node properties and creating custom editors, see the official Godot documentation on [Node Properties](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node).*
