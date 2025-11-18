# C# basics

This page provides a brief introduction to C#, both what it is and how to use it in Godot. Afterwards, you may want to look at how to use specific features, read about the differences between GDScript and C#, and explore various C#‑specific concepts in Godot.

---

**Table of contents**

1. [Introduction](#introduction)  
2. [Prerequisites](#prerequisites)  
3. [Creating a new project](#creating-a-new-project)  
4. [Adding a C# script](#adding-a-c-script)  
5. [Basic scripting examples](#basic-scripting-examples)  
6. [Compiling and running](#compiling-and-running)  
7. [Further reading](#further-reading)

---

## Introduction

C# is a general‑purpose programming language that is supported by Godot through the .NET runtime. It allows you to write scripts in a statically‑typed, object‑oriented style while still taking advantage of Godot's scene system and node‑based architecture.

## Prerequisites

- Godot 3.5 or later with the .NET editor build.
- A compatible .NET SDK (the version recommended by the Godot documentation).
- Basic familiarity with C# syntax (classes, methods, properties, etc.).

## Creating a new project

1. Open the Godot editor and choose **New Project**.  
2. Give your project a name and select a location.  
3. Under **Project Settings > Mono**, set the **Mono / C#** options to match your environment (e.g., `Mono runtime path`, `Assembly output directory`).  
4. Click **Create & Edit** to start the project.

## Adding a C# script

1. In the **FileSystem** dock, create a new folder (e.g., `Scripts`).  
2. Right‑click the folder → **New Script**.  
3. In the script dialog, set **Language** to `C#` and **Script name** to something like `Player.cs`.  
4. Click **Create**. The editor will generate a minimal class skeleton.

```csharp
using Godot;
using System;

public class Player : Node2D
{
    public override void _Ready()
    {
        GD.Print("Hello from C#");
    }
}
```

## Basic scripting examples

### Moving a node

```csharp
public class Player : KinematicBody2D
{
    [Export] public int Speed = 200;
    private Vector2 _velocity = new Vector2();

    public override void _PhysicsProcess(float delta)
    {
        _velocity.x = 0;

        if (Input.IsActionPressed("ui_right")) _velocity.x += 1;
        if (Input.IsActionPressed("ui_left"))  _velocity.x -= 1;
        if (Input.IsActionPressed("ui_down"))  _velocity.y += 1;
        if (Input.IsActionPressed("ui_up"))    _velocity.y -= 1;

        _velocity = _velocity.Normalized() * Speed;
        MoveAndSlide(_velocity);
    }
}
```

### Using signals

```csharp
public class Enemy : Area2D
{
    [Signal] public delegate void EnemyHit();

    public override void _Ready()
    {
        Connect("body_entered", this, nameof(OnBodyEntered));
    }

    private void OnBodyEntered(Node body)
    {
        EmitSignal(nameof(EnemyHit));
    }
}
```

## Compiling and running

- Press **F5** (or the play button) to build and run the project.  
- Godot will compile the C# assemblies on the fly; you can view build output in the **Output** dock.

## Further reading

- [C# language features](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/c_sharp_features.html)  
- [Using .NET in Godot](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/c_sharp_tutorial.html)  
- [Advanced C# topics](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/c_sharp_advices.html)

---