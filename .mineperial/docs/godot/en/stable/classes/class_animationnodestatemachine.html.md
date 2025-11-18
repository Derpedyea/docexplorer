**AnimationNodeStateMachine**  
*Godot Engine – Class Reference (stable)*  

---  

## Inherits
`AnimationRootNode < AnimationNode < Resource < RefCounted < Object`

---  

## Description  
`AnimationNodeStateMachine` is a special type of animation node that can contain multiple `AnimationRootNode` children, each representing a distinct state.  
The node is used by `AnimationTree` to build complex animation behaviour by transitioning between states.  

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `playback` | `AnimationNodeStateMachinePlayback` | – | Read‑only handle used to control state transitions at runtime. |
| `state_machine` | `AnimationNodeStateMachine` | – | Reference to the owning state machine (self). |

> **Note**: The class exposes most properties via the editor; they are not directly editable in code.

---

## Methods

| Method | Returns | Parameters | Description |
|--------|---------|------------|-------------|
| `add_node(name, node)` | `void` | `String name`, `AnimationRootNode node` | Adds a new state to the machine. The `node` must be an `AnimationRootNode` (e.g., `AnimationNodeBlendSpace1D`, `AnimationNodeBlendSpace2D`, `AnimationNodeStateMachine`, etc.). |
| `get_node(index)` | `AnimationRootNode` | `int index` | Returns the state at the given index. |
| `get_node_name(index)` | `String` | `int index` | Returns the name of the state at the given index. |
| `get_node_index(name)` | `int` | `String name` | Returns the index of a state by name, or `-1` if it does not exist. |
| `remove_node(name)` | `void` | `String name` | Removes a state by its name. |
| `get_nodes()` | `Array[AnimationRootNode]` | – | Returns an array of all states. |
| `has_node(name)` | `bool` | `String name` | Checks whether a state with the given name exists. |
| `add_transition(from, to, condition)` | `void` | `String from`, `String to`, `AnimationNodeStateMachineTransition transition` | Adds a transition between two states. `transition` contains the animation that will play during the switch. |
| `remove_transition(transition)` | `void` | `AnimationNodeStateMachineTransition transition` | Removes the specified transition. |
| `get_transition_count()` | `int` | – | Number of transitions in the machine. |
| `get_transition(index)` | `AnimationNodeStateMachineTransition` | `int index` | Retrieves a transition by its index. |
| `get_transitions()` | `Array[AnimationNodeStateMachineTransition]` | – | Returns all transitions. |
| `set_start_node(name)` | `void` | `String name` | Sets the starting state of the machine. |
| `get_start_node()` | `String` | – | Returns the name of the starting state. |
| `get_playback()` | `AnimationNodeStateMachinePlayback` | – | Returns the playback object that can be used in code (`AnimationTree` → `get("parameters/playback")`). |
| `has_transition(from, to)` | `bool` | `String from`, `String to` | Checks whether a transition exists between two states. |

> The transition methods rely on the nested `AnimationNodeStateMachineTransition` class, which stores the animation resource and a boolean whether the transition is “one‑way” or “bidirectional”.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `animation_changed(from, to)` | `String from`, `String to` | Emitted whenever the machine switches from one state to another. |
| `node_added(name)` | `String name` | Emitted when a new state is added. |
| `node_removed(name)` | `String name` | Emitted when a state is removed. |

---

## Usage Example

```gdscript
# Assume `animation_tree` is an AnimationTree node already added to the scene
var state_machine = animation_tree.get("parameters/state_machine") as AnimationNodeStateMachine
var playback = state_machine.get_playback()

# Start playing the default state
playback.start()

# Transition to a different state
playback.travel("Run")
```

In the editor, you can create the machine by:

1. Adding an `AnimationTree` node to a character.
2. In the `AnimationTree` inspector, set the `Animation Root` to a new `AnimationNodeStateMachine`.
3. Use the visual editor to drag and drop animation nodes as states, and draw transitions between them.

---

## Related Classes

- [AnimationNodeStateMachinePlayback](class_animationnodestatemachineplayback.html) – Controls playback of the state machine.  
- [AnimationNodeStateMachineTransition](class_animationnodestatemachinetransition.html) – Defines a transition between two states.  
- [AnimationTree](class_animationtree.html) – Node that hosts the state machine and evaluates the animations.

---  

### Further Reading

- [AnimationNode](class_animationnode.html) – Base class for all animation nodes.  
- [AnimationPlayer](class_animationplayer.html) – Simple node for playing individual animations.  
- [AnimationTree](class_animationtree.html) – How to set up a full animation tree in Godot.  

---  

**References**

- Godot Engine Documentation – *AnimationNodeStateMachine* (stable)  
  <https://docs.godotengine.org/en/stable/classes/class_animationnodestatemachine.html>