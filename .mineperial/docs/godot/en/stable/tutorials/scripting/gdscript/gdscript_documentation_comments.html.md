# GDScript documentation comments

In GDScript you can add special comments that are parsed by the editor and used to generate the
class reference.  
They are different from ordinary comments in two key ways:

* They are placed **immediately above** a declaration (class, enum, constant, member, method
  or signal).
* They can contain **structured information** (parameter types, return type, description,
  deprecation notice, etc.) that the editor uses to build the documentation that appears in
  the “Quick Help” and “Script” windows.

Below is a quick‑reference guide for the syntax and the most commonly used tags.

---

## 1. Basic syntax

```gdscript
## This is a description that will be shown for the variable.
var my_variable : int = 42
```

* Two `#` characters are required for a documentation comment.
* The comment must be placed immediately before the declaration it documents.
* Any number of comment lines may be used, as long as they all start with `##`.

---

## 2. Tag format

Documentation comments support a limited set of tags that start with an `@` symbol.

| Tag | Meaning | Example |
|-----|---------|---------|
| `@export` | Makes the property visible in the inspector and optionally sets its default value | `@export var speed : int = 10` |
| `@onready` | Marks a variable that is initialised with a node path | `@onready var sprite : Sprite2D = $Sprite` |
| `@signal` | Declares a signal (GDScript‑only) | `@signal finished` |
| `@tool` | Runs the script in the editor | `@tool` |
| `@param <name>` | Describes a method argument | `@param direction Vector2` |
| `@return` | Describes a method’s return value | `@return Vector2` |
| `@warning` | Adds a warning to the documentation | `@warning This method is slow on large data sets.` |
| `@deprecated` | Marks an API as deprecated | `@deprecated Use `new_method()` instead.` |

> **Note**: Tags are processed by the Godot editor; they are ignored by the GDScript runtime.

---

## 3. Example

```gdscript
## Moves the node forward.
##
## @param speed The movement speed in units per second.
## @param delta The frame time step.
func move_forward(speed : float, delta : float) -> void:
    position += Vector2.RIGHT * speed * delta
```

In the editor this will show a nicely formatted method signature:

```
move_forward(speed : float, delta : float) -> void
```

with the description and the parameter details in the quick‑help tooltip.

---

## 4. Class‑level documentation

```gdscript
## The **Player** class controls a 2D character.
##
## The class demonstrates basic movement and animation control.
class_name Player
extends CharacterBody2D

## The maximum speed of the player.
@export var max_speed : float = 200.0
```

The block of text preceding a `class_name` or `extends` declaration becomes the class
description that appears in the reference pane.

---

## 5. Exported properties and signals

```gdscript
## The current health of the enemy.
@export var health : int = 100

## Emitted when the enemy takes damage.
@signal damaged(amount : int)

## Emitted when the enemy dies.
@signal died
```

The `@export` tag automatically creates a property that appears in the Inspector,
while `@signal` registers the signal for the editor’s auto‑completion and signal
connect UI.

---

## 6. Using `@onready`

```gdscript
## Reference to the sprite node.
@onready var sprite : Sprite2D = $Sprite
```

When the scene is ready, `sprite` will automatically be set to the child node named
`Sprite2D`. The comment is optional but useful for quick documentation.

---

## 7. Advanced tags

| Tag | Use case |
|-----|----------|
| `@class` | Adds a description to a class when `class_name` is omitted. |
| `@enum` | Documents an enum type. |
| `@doc` | A generic tag that can be used to add arbitrary notes. |

Example:

```gdscript
## A simple enum.
@enum State {
    IDLE,   # The character is idle.
    WALKING # The character is walking.
}
```

---

## 8. Common pitfalls

* **Placement** – If a comment is separated by whitespace from the declaration it will not be
  associated with it.
* **Tag order** – Tags can appear in any order, but the editor expects them on a single line
  following `##` or `#` if it is the first line of a block.
* **Multiple lines** – Only the first line (or first line after an empty `##`) will be used
  as the summary in the reference pane; subsequent lines are treated as extended
  documentation.

---

## 9. Summary

* Use `##` for documentation comments.
* Place them directly above the declaration they describe.
* Employ the built‑in tags (`@export`, `@onready`, `@signal`, `@param`, `@return`, etc.) to
  enrich the editor’s generated API reference.
* Keep the comment concise – the first line is the summary shown in the reference pane,
  while the following lines provide details.

For more advanced documentation, see the full [GDScript documentation](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript.html) or the “Class Reference” in the editor.