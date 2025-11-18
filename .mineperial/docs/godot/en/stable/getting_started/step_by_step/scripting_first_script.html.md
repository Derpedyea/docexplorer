**Creating your first script**  
*Godot Engine (stable) – Getting started → Step‑by‑step → Scripting → Creating your first script*  

---

## 1. Project setup

1. **Create a new project** in Godot and name it *MyFirstScript*.  
2. Open the editor and add a `Sprite2D` node to the default scene (`Node2D`).  
3. In the `Inspector`, drag a Godot logo (or any sprite texture) onto the **Texture** property.  
4. Save the scene as `Main.tscn`.

---

## 2. Creating a new script

1. With the `Sprite2D` node selected, click **Attach Script**.  
2. In the dialog, keep the defaults:  
   * Language: **GDScript**  
   * Base: `Sprite2D` (the node you selected)  
3. Name the file `rotate.gd` and click **Create**.  
4. Godot will automatically add a skeleton script:

   ```gdscript
   extends Sprite2D

   func _ready() -> void:
       pass
   ```

---

## 3. Hello, world!

Replace the body of the script with a simple print statement to verify everything is wired up:

```gdscript
extends Sprite2D

func _ready() -> void:
    print("Hello, world!")
```

Run the project (`F5`). The Godot console should show **Hello, world!** when the scene starts.

---

## 4. Turning around

To make the sprite rotate continuously:

```gdscript
extends Sprite2D

const ROTATION_SPEED : float = 1.0  # radians per second

func _process(delta: float) -> void:
    rotation += ROTATION_SPEED * delta
```

### 4.1 Moving forward

If you also want the sprite to move forward while rotating, add:

```gdscript
const SPEED : float = 200.0  # pixels per second

func _process(delta: float) -> void:
    rotation += ROTATION_SPEED * delta
    position += Vector2.RIGHT.rotated(rotation) * SPEED * delta
```

---

## 5. Complete script

Here is the full example that rotates the sprite in a circle:

```gdscript
extends Sprite2D

const ROTATION_SPEED : float = 1.0  # radians per second
const SPEED : float = 200.0        # pixels per second

func _process(delta: float) -> void:
    # Rotate the sprite
    rotation += ROTATION_SPEED * delta

    # Move it forward in the direction it's facing
    var direction = Vector2.RIGHT.rotated(rotation)
    position += direction * SPEED * delta
```

Save the file and run the scene. You should see the Godot logo spinning in place and, if you added the movement code, moving in a circular path.

---