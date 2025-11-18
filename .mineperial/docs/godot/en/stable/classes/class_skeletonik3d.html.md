**Note:** The page is a technical class reference in the Godot Engine documentation, so it is considered documentation. Below is a cleaned‑up Markdown version of the class page, preserving the main sections that are typically found in a Godot class reference.  

---

# SkeletonIK3D

> *Deprecated.* This class may be changed or removed in future Godot versions.

`SkeletonIK3D` is a `SkeletonModifier3D` node that automatically rotates a chain of bones in a `Skeleton3D` so that the end‑bone reaches a target position. It is useful for character rigging, inverse‑kinematics, and procedural animation.

---

## Inheritance

```
SkeletonIK3D
 └─ SkeletonModifier3D
      └─ Node3D
           └─ Node
                └─ Object
```

---

## Description

The node rotates all bones of a specified `Skeleton3D` bone chain in a way that the chain’s end effector follows a target transform. It also allows you to specify a length limit for the chain and to lock individual bones. The target can be a `Node3D`, a `Transform3D`, or a custom position in 3D space.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `chain_bones` | `Array[String]` | `[]` | Names of the bones that form the IK chain, from base to end effector. |
| `target_node` | `NodePath` | `""` | Path to a `Node3D` whose global transform will be used as the target. |
| `target_position` | `Vector3` | `Vector3(0,0,0)` | Direct 3D position used as the IK target. |
| `length` | `float` | `0.0` | Maximum allowed length of the bone chain. 0 means no length restriction. |
| `bend_axis` | `Vector3` | `Vector3(0,0,1)` | Axis around which the chain should bend. |
| `chain_mode` | `int` | `ChainMode.ONE_BONE` | The chain configuration (e.g., one‑bone, two‑bone, etc.). |

*All properties can be set from the editor or via code.*

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `ready` | | Emitted when the node has finished initializing and the IK solver is ready to use. |

---

## Methods

### `get_target_position() → Vector3`

Returns the current target position used by the IK solver.

### `set_target_position(position: Vector3) → void`

Sets a new target position for the IK solver.

### `get_chain_bones() → Array[String]`

Returns the current list of bone names that make up the IK chain.

### `set_chain_bones(bones: Array[String]) → void`

Defines a new bone chain.

### `get_target_node() → NodePath`

Returns the `NodePath` of the target node.

### `set_target_node(path: NodePath) → void`

Assigns a node to be used as the IK target.

### `solve() → void`

Performs a single IK solving step. This is automatically called on each physics frame when the node is active.

---

## Example Usage

```gdscript
# GDScript
extends SkeletonIK3D

func _ready():
    # Define a 3‑bone chain from hip to hand
    chain_bones = ["hips", "spine", "arm", "hand"]
    # Point the target to a child node (e.g., a marker)
    target_node = $"TargetMarker"
```

```csharp
// C#
using Godot;

public class MyIK : SkeletonIK3D
{
    public override void _Ready()
    {
        ChainBones = new string[] { "hips", "spine", "arm", "hand" };
        TargetNode = new NodePath("TargetMarker");
    }
}
```

---

## See Also

- [`SkeletonModifier3D`](../classes/class_skeletonmodifier3d.html) – Base class for all skeleton modifiers.
- [`Skeleton3D`](../classes/class_skeleton3d.html) – The 3‑D skeleton node that `SkeletonIK3D` operates on.

---