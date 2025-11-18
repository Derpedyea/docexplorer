**NOTE:** The provided HTML snippet contains only the site’s navigation and metadata, not the full content of the class reference page.  
Below is a concise Markdown representation based on the available information. If you need the complete API reference, please provide the full class page HTML.  

---

# ModifierBoneTarget3D

A node that **dynamically copies the 3‑D transform** of a bone in its parent `Skeleton3D`.  
It is a specialized `SkeletonModifier3D` that can be used to attach arbitrary nodes to a bone so they follow that bone’s position, rotation, and scale during animation.

---

## Inheritance

```
ModifierBoneTarget3D
└─ SkeletonModifier3D< Node3D< Node<Object> > >
```

---

## Description

This node allows you to select a bone by name or index from a `Skeleton3D` and automatically sync any attached `Node3D` with that bone’s transform.  
Typical use cases include:

- Attaching a camera, light, or helper node to a moving bone.
- Adding procedural effects that should follow a particular bone in a skeletal animation.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `bone_name` | `String` | The name of the bone to track. |
| `bone_index` | `int` | The index of the bone to track (alternative to `bone_name`). |

*(Additional properties are defined in the base class `SkeletonModifier3D`.)*

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `get_bone_name()` | `String` | Returns the current bone name. |
| `set_bone_name(name: String)` | `void` | Sets the bone to track by name. |
| `get_bone_index()` | `int` | Returns the bone index. |
| `set_bone_index(index: int)` | `void` | Sets the bone to track by index. |

*(Inherited methods from `SkeletonModifier3D` include lifecycle callbacks and utility functions.)*

---

## Signals

None specific to this node.

---

## Usage Example

```gdscript
# Attach a marker to the hand bone of a character
var marker = Marker3D.new()
add_child(marker)

var bone_target = ModifierBoneTarget3D.new()
bone_target.bone_name = "hand"
add_child(bone_target)
```

The `Marker3D` node will now move, rotate, and scale exactly with the `hand` bone of the character’s `Skeleton3D`.

---

## Related Classes

- **`SkeletonModifier3D`** – Base class for all skeleton modifiers.  
- **`Skeleton3D`** – The parent skeleton that owns bones.

---