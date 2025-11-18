**Support different actor area access**  

*This tutorial explains how to allow or block navigation for different actors in Godot by using separate `NavigationRegion`s and adjusting the `NavigationServer`’s actor group masks.*  

---

## Overview

In many games a door may connect two rooms that use different navigation meshes.  
You may want a certain character (or “actor”) to be able to go through the door while another cannot.  
Godot 4 provides a flexible way to implement this behaviour using **NavigationRegion** nodes and **actor groups**.

---

## Setting up the scene

1. **Create two rooms**  
   * Each room should contain a `NavigationRegion3D` that holds the navigation mesh for that area.

2. **Add a door**  
   * The door can be a simple `Area3D` (or `StaticBody3D`) that overlaps the two rooms.

3. **Create the actors**  
   * Place your player and other AI characters in the scene.  
   * Each actor must be assigned to one or more **navigation actor groups**.  
     * Example groups: `player`, `enemy`, `npc`.

---

## Using NavigationRegion to control access

```gdscript
# Door.gd
extends Area3D

var allow_groups: Array[String] = ["player", "npc"]  # groups that may pass

func _ready() -> void:
    # Connect signals to enable/disable navigation for each actor that enters the door area
    connect("body_entered", self, "_on_body_entered")
    connect("body_exited", self, "_on_body_exited")

func _on_body_entered(body: Node) -> void:
    if body.is_in_group("player"):
        # Enable navigation for this actor in the new region
        NavigationServer3D.area_set_navigation_layers(body.get_navigation_layer(), 1) # example mask
    # Add similar logic for other groups if needed

func _on_body_exited(body: Node) -> void:
    if body.is_in_group("player"):
        # Disable navigation or revert to previous region
        NavigationServer3D.area_set_navigation_layers(body.get_navigation_layer(), 0)
```

> **Tip** – Use the `NavigationServer3D.area_set_navigation_layers()` function to switch an actor between different navigation meshes or to disable navigation temporarily.

---

## Example – Two rooms with different access

| Room | NavigationRegion mask | Actors allowed |
|------|-----------------------|----------------|
| A    | `1` (player only)     | Player         |
| B    | `2` (enemy only)      | Enemy          |

By toggling the mask when the actor crosses the door, you can prevent the enemy from entering the player’s room and vice versa.

---

## Summary

- **NavigationRegion3D** nodes define individual navigation meshes.
- **Actor groups** let you categorize characters.
- **NavigationServer3D** APIs can enable or disable navigation for a specific actor group on a per‑region basis.
- Combine signals (`body_entered`/`body_exited`) on a door with group checks to change access dynamically.

With this pattern you can create doors, teleporters, and other dynamic navigation barriers that respect different actor permissions.