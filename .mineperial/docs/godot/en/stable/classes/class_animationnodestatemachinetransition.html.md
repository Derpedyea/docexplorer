**NOTE**: The source HTML provided contains the entire site navigation but does not include the actual content of the `AnimationNodeStateMachineTransition` class page (methods, properties, signals, etc.). As a result, the following Markdown is a minimal skeleton based on the available metadata.

---

# AnimationNodeStateMachineTransition

> **Inherits**: `Resource< RefCounted<Object> >`

A transition within an `AnimationNodeStateMachine` connecting two `AnimationRootNode` instances. The path generated when using `AnimationNodeStateMachine`...

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| *To be filled* | | |

> *List of all exported properties that this class offers.*

---

## Methods

| Method | Return type | Description |
|--------|-------------|-------------|
| *To be filled* | | |

> *List of all public methods, including getters, setters, and utility functions.*

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| *To be filled* | | |

> *Any signals emitted by this class.*

---

## Example Usage

```gdscript
# Example: Create a transition between two states
var transition = AnimationNodeStateMachineTransition.new()
transition.set_source_node("Walk")
transition.set_target_node("Run")
transition.set_transition_time(0.5)
```

---

## Related Classes

- [AnimationNodeStateMachine](../class_animationnodestatemachinereference.html)
- [AnimationNodeStateMachinePlayback](../class_animationnodestatemachineplayback.html)

---