# The XR action map

> **Godot documentation** – *stable* edition  
> *URL: https://docs.godotengine.org/en/stable/tutorials/xr/xr_action_map.html*  

---

## 1. Overview

Godot’s **XR action map** is a feature of the XR system that allows you to define high‑level actions (e.g., *grab*, *teleport*, *select*) and bind them to the native controls of a variety of XR devices.  
At the moment the feature is part of the **OpenXR** module, but the architecture is designed to be extended to WebXR in the near future.

> **Why use an action map?**  
> • Keeps your code device‑agnostic.  
> • Lets you support multiple hand‑tracked devices with a single set of bindings.  
> • Enables runtime configuration of controls without recompiling the project.

---

## 2. Setting up an action map

### 2.1. Enabling OpenXR

1. In the **Project → Project Settings → General → XR** section, enable **OpenXR**.  
2. Make sure the *OpenXR* module is compiled into your export templates or editor build.

### 2.2. Adding an XR action map

Open the *Input Map* tab:

1. Click the **XR Action Map** dropdown (bottom left of the editor).  
2. Click **Add** to create a new action map.  
3. Give it a name (e.g., `default`).

### 2.3. Defining actions

Each action map contains a list of *actions*. Add them one by one:

| Action name | Type | Description |
|-------------|------|-------------|
| `ui_up` | **Boolean** | Move forward |
| `ui_down` | **Boolean** | Move backward |
| `ui_left` | **Boolean** | Strafe left |
| `ui_right` | **Boolean** | Strafe right |
| `grab` | **Boolean** | Grab / select an object |
| `teleport` | **Boolean** | Teleport to a new location |

> **Tip**: For analog input (e.g., joystick axes) use `Float` actions instead of `Boolean`.

### 2.4. Binding inputs

Each action can be bound to a variety of device controls:

1. Select the action in the list.  
2. Click the **Add Binding** button.  
3. In the popup, choose the device, profile, and input type.  
4. For example, bind *teleport* to the *Primary Hand Trigger* of a HTC Vive controller.

Bindings are saved in the project settings under `xr/input_map/<map_name>`.

---

## 3. Accessing actions in code

Use the `Input` API to query XR actions just like you would regular actions:

```gdscript
# Move the player based on the XR action map
func _physics_process(delta):
    var velocity = Vector3.ZERO

    # Boolean actions
    if Input.is_action_pressed("ui_up"):
        velocity.z -= 1
    if Input.is_action_pressed("ui_down"):
        velocity.z += 1
    if Input.is_action_pressed("ui_left"):
        velocity.x -= 1
    if Input.is_action_pressed("ui_right"):
        velocity.x += 1

    # Normalise for diagonal movement
    if velocity.length() > 0:
        velocity = velocity.normalized() * speed

    # Teleport action
    if Input.is_action_just_pressed("teleport"):
        teleport_player()

    # Grab action
    if Input.is_action_pressed("grab"):
        grab_object()

    move_and_slide(velocity)
```

> **Note:**  
> * `is_action_pressed()` returns `true` while a boolean action is held.  
> * `is_action_just_pressed()` is useful for actions that should fire once per button press.

---

## 4. Using `XRController`

If you need access to raw input values (e.g., trigger pressure, joystick axes), use the `XRController` node:

```gdscript
var controller : XRController = $XRController

func _process(delta):
    var trigger_value = controller.get_controller_button_value(
        XRController.BUTTON_TRIGGER
    )
    # Use the value for a smooth grab strength
```

The controller node automatically respects the current action map, so the same code works for any device that is bound to that map.

---

## 5. Debugging action maps

1. **XR Action Map Viewer** – In the editor, open the *XR* panel (`Window → 3D → XR → Action Map`).  
   It shows all actions, their current states, and active bindings.  
2. **Print bindings** – `print(InputMap.get_action_list("teleport"))` lists all bindings for the action.  
3. **Hot‑reload** – When you modify an action map in the editor, the change takes effect immediately in the running game.

---

## 6. Best practices

| Practice | Rationale |
|----------|-----------|
| **Keep action names generic** (e.g., `grab`, `move_left`) | Makes the map reusable across projects. |
| **Separate UI actions** from gameplay actions | Avoids accidental conflicts (e.g., a button that triggers `ui_cancel` while also grabbing). |
| **Use context‑specific action maps** | For multi‑mode games, you can switch between maps at runtime. |
| **Document each binding** | Helps onboard new developers and debug issues quickly. |

---

## 7. Common pitfalls

| Issue | Fix |
|-------|-----|
| Actions don’t respond in the editor | Make sure the *XR Action Map* is selected in the `Input` tab. |
| Bindings appear but not triggered | Verify the device profile matches the controller you’re using. |
| Conflicting bindings | Use the *Conflict Detector* in the action map editor. |

---

## 8. Further reading

- [OpenXR Settings](../openxr_settings.html) – Configure the OpenXR plugin.  
- [Room scale in XR](../xr_room_scale.html) – Handling spatial movement.  
- [XR Interaction Toolkit](../xr_interaction_toolkit.html) – Building interactive UI with action maps.

---