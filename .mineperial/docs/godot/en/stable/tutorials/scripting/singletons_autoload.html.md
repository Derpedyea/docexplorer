**Note:** The original page contains a lot of navigation markup that is not relevant to the
actual documentation.  The following Markdown focuses only on the core content
of the *Singletons (Autoload)* tutorial.

---  

# Singletons (Autoload)

> Godot’s scene system is very powerful, but it does not provide a built‑in
> way to store data that should be globally accessible (e.g. a player’s score,
> inventory or a game‑wide configuration).  
> A **singleton** – also called an **autoloader** – solves this problem by
> loading a script (or a scene) once at project start and keeping it in memory
> for the lifetime of the game.  
> You can then access it from any other script with a single line of code.

---

## 1.  What is an autoload?

* **Singleton** = a global object that lives for the whole game.
* **Autoload** = a way to register that object automatically at startup.
* Useful for:
  * game‑wide settings
  * managers (audio, save data, network, etc.)
  * any data that must persist across scenes

---

## 2.  Adding an autoload

1. **Create the script/scene** you want to expose globally.  
   Example: `res://scripts/Globals.gd`

   ```gdscript
   # Globals.gd
   extends Node

   var player_score: int = 0
   var difficulty: String = "normal"

   func _ready() -> void:
       print("Globals initialized")
   ```

2. **Register the autoload** in the editor:

   * `Project` → `Project Settings…` → `Autoload` tab  
   * Path: `res://scripts/Globals.gd`  
   * Name: `Globals` (or any name you choose)  
   * Check **Enable on startup**  
   * Click **Add** → **Save**

3. The script is now a singleton and can be accessed from anywhere:

   ```gdscript
   Globals.player_score += 10
   print(Globals.difficulty)
   ```

---

## 3.  Using the singleton in multiple scenes

Because the autoload is a node, it can also be a packed scene if you need
node functionality (e.g., a `Node2D` with children).

* **Autoload as a scene**  
  Create a scene (`Globals.tscn`) that contains the logic you want, then
  add the scene file as an autoload just like a script.

* **Accessing it**  
  In any other script:

  ```gdscript
  # Assuming a global node called "GameManager" with a function `reset()`
  GameManager.reset()
  ```

---

## 4.  Passing arguments to an autoload

If your autoload script has an `init()` function that accepts arguments, you
can provide them in the **Autoload** settings:

```gdscript
# Autoload script
extends Node

var start_lives: int

func init(_lives: int) -> void:
    start_lives = _lives

# In another script
print(Globals.start_lives)
```

Add the script in the Autoload tab and set the argument list (e.g.
`[5]`).

---

## 5.  Removing an autoload

* Go back to `Project Settings… → Autoload`.  
* Select the entry and click **Delete**.  
* Restart the editor for the change to take effect.

---

## 6.  Common pitfalls

| Pitfall | Fix |
|---------|-----|
| **Singleton name clashes** | Use a unique, descriptive name. |
| **Using `set_process` in an autoload that is never added to the scene tree** | Make the autoload a `Node` and add it to the scene tree, or use a `Singleton` script only (extends nothing). |
| **Not saving the project settings** | Remember to click **Save** after adding or removing an autoload. |
| **Global variables modified by many scenes** | Use signals or a dedicated manager to avoid race conditions. |

---

## 7.  Related resources

* [Using signals](../signals/README.md) – for communicating with a singleton  
* [Best practices – Autoloads vs. regular nodes](../best_practices/autoloads_versus_internal_nodes.md)  
* [Managing global data](../best_practices/data_preferences.md)

---  

**Reference**

* Godot Engine 4.x documentation – “Singletons (Autoload)”  
  <https://docs.godotengine.org/en/stable/tutorials/scripting/singletons_autoload.html>