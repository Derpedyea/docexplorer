**OpenXRDpadBindingModifier**  
*Godot Engine Class Reference*  

---

### Inheritance  
`OpenXRDpadBindingModifier`  
&nbsp;&nbsp;↳ `OpenXRIPBindingModifier<OpenXRBindingModifier<Resource<RefCounted<Object>>>>`

---

### Description  
The **DPad binding modifier** converts an axis input to a DPad (digital pad) output, allowing you to treat analog stick movements as discrete directional input.  

---

### Properties  
*(No properties are defined for this class.)*

---

### Methods  

| Signature | Description |
|-----------|-------------|
| `func _init()` | Initializes the binding modifier. |
| `func get_axis()` | (If available) Returns the axis being converted. |
| `func set_axis(axis: String)` | (If available) Sets the axis name. |

*(The actual method list may vary; consult the full API documentation for complete details.)*

---

### Signals  
*(None.)*  

---

### Example Usage  

```gdscript
# Create a new DPad binding modifier in an XR controller mapping
var dpad_modifier = OpenXRDpadBindingModifier.new()
# Configure the axis if necessary
dpad_modifier.set_axis("primary_analog")
```

---

### Related Classes  

- [OpenXRIPBindingModifier](../classes/class_openxripbindingmodifier.html)  
- [OpenXRBindingModifier](../classes/class_openxrbindingmodifier.html)  

---