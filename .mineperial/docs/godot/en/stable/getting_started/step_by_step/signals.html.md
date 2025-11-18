**Using signals**  
*Godot Engine – Getting started → Step by step*

---  

### Scene setup
1. **Create a new scene**  
   * Root node: `Node2D` (or any node you prefer).  
   * Add a `Button` node as a child.  
2. **Attach a script** to the root node (`signal_demo.gd`).  

```gdscript
# signal_demo.gd
extends Node2D
```

### Connecting a signal in the editor
* Select the `Button` node in the scene tree.  
* Open the **Node** tab beside the Inspector.  
* Double‑click the `pressed` signal and choose the method name (e.g. `_on_Button_pressed`).  
* Godot will create an empty function stub in the script.

```gdscript
func _on_Button_pressed() -> void:
    print("Button pressed!")
```

### Connecting a signal via code
You can connect signals programmatically instead of using the editor.  
Use the `connect()` method, usually in `_ready()` or `onready` variable.

```gdscript
onready var button = $Button

func _ready() -> void:
    # Connect the button's "pressed" signal to a local method
    button.connect("pressed", self, "_on_Button_pressed")
```

If you want a signal to be emitted by a custom node, use `emit_signal()`.

```gdscript
# Example of a custom signal
signal my_signal

func _ready() -> void:
    # Connect the custom signal to the same method
    connect("my_signal", self, "_on_my_signal")

func do_something() -> void:
    # Emit the signal whenever this method is called
    emit_signal("my_signal")
```

### Complete script
Below is a full working example that demonstrates both built‑in and custom signals.

```gdscript
extends Node2D

# Custom signal declaration
signal custom_activated

# Cache the button node
onready var button = $Button

func _ready() -> void:
    # Connect built‑in signal
    button.connect("pressed", self, "_on_Button_pressed")
    
    # Connect custom signal
    connect("custom_activated", self, "_on_custom_activated")

func _on_Button_pressed() -> void:
    print("Button pressed!")
    # Emit the custom signal as well
    emit_signal("custom_activated")

func _on_custom_activated() -> void:
    print("Custom signal activated!")
```

### Custom signals
* Declare a signal with the `signal` keyword.  
* Emit it with `emit_signal("signal_name")`.  
* Connect to it like any other signal.

**Example:**

```gdscript
signal finished

func _process(delta):
    if some_condition:
        emit_signal("finished")
```

### Summary
* Signals are Godot’s messaging system for node communication.  
* Use the editor’s **Node** tab to connect signals visually.  
* Connect signals from code with `node.connect("signal", target, "method")`.  
* Define and emit custom signals to create your own event flow.

--- 

> This lesson is part of the Godot 3.x “Step by step” tutorial series.  
> See also: [Scripting](../scripting_first_script.html), [Listening to player input](../scripting_player_input.html).