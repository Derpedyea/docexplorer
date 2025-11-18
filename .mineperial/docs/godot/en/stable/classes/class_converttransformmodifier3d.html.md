**ConvertTransformModifier3D**

> **Inheritance**  
> `BoneConstraint3D<SkeletonModifier3D<Node3D<Node<Object>>>`  

---

### Description
`ConvertTransformModifier3D` is a skeleton modifier that applies the transform of a reference node to a target bone, converting the transform into the bone’s local space.  
This class is typically used to create more complex bone‑based animations where a bone should follow the transform of an external `Node3D` (e.g., a helper node or another bone) but still respect the skeleton’s local coordinate system.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `reference` | `NodePath` | `""` | Path to the node whose transform will be applied to the bone. |
| `bone_name` | `String` | `""` | Name of the bone to modify. |
| `local_mode` | `bool` | `true` | If `true`, the transform is applied in the bone’s local space; otherwise, in global space. |

> **Note**: All properties are exported and can be set in the editor or through GDScript.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `convert_transform()` | `void()` | Computes and applies the transformed data from `reference` to the target bone. |
| `set_reference(path: NodePath)` | `void()` | Sets the `reference` property. |
| `get_reference() -> NodePath` | `NodePath` | Returns the current reference path. |
| `set_bone_name(name: String)` | `void()` | Sets the bone to be modified. |
| `get_bone_name() -> String` | `String` | Returns the current bone name. |
| `set_local_mode(enabled: bool)` | `void()` | Enables or disables local space conversion. |
| `is_local_mode() -> bool` | `bool` | Returns whether local mode is active. |

> **Tip**: Override `_process(delta: float)` if you need the modifier to run every frame.

---

## Signals

| Signal | Description |
|--------|-------------|
| `transform_applied()` | Emitted after a transform has been applied to the bone. |

---

## Example Usage

```gdscript
# Assuming `self` is a `SkeletonModifier3D` node in the scene.
var converter = ConvertTransformModifier3D.new()
converter.reference = $"../HelperNode"
converter.bone_name = "Spine"
converter.local_mode = true
add_child(converter)
```

---

## See Also

- [CopyTransformModifier3D](../class_copytransformmodifier3d.html) – copies a transform without conversion.  
- [SkeletonModifier3D](../class_skeletonmodifier3d.html) – base class for all skeleton modifiers.  

---