# FoldableGroup

**Inherited from:** `Resource` → `RefCounted<Object>`

> A group of foldable containers that doesn’t allow more than one container to be expanded at a time.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `container_count` | `int` | **Read‑only** – Returns the number of containers currently in the group. |

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `add_container(container)` | `void FoldableGroup.add_container(FoldableContainer container)` | Adds a `FoldableContainer` to the group. |
| `get_container(index)` | `FoldableContainer FoldableGroup.get_container(int index)` | Returns the container at the given *index*. |
| `get_container_count()` | `int FoldableGroup.get_container_count()` | Returns the total number of containers in the group. |
| `is_expanded(container)` | `bool FoldableGroup.is_expanded(FoldableContainer container)` | Returns whether the specified container is currently expanded. |
| `set_expanded(container, expanded)` | `void FoldableGroup.set_expanded(FoldableContainer container, bool expanded)` | Expands or collapses the given container. If `expanded` is `true`, the group will automatically collapse any other expanded container. |

---

## Signals

> *None*

---

## Notes

* Only one `FoldableContainer` can be expanded at a time within a `FoldableGroup`.  
* If a container is added that is already expanded, the group ensures it is the sole expanded container.  
* The class is a `Resource`, so it can be created in the editor and stored as an asset.  

---

## Usage example (GDScript)

```gdscript
@tool
class_name MyFoldableGroup
extends FoldableGroup

func _ready():
    var container_a = FoldableContainer.new()
    var container_b = FoldableContainer.new()
    add_container(container_a)
    add_container(container_b)
    set_expanded(container_a, true)   # only container_a will be visible
```

*(Replace `FoldableContainer` with the actual derived UI node you are using.)*