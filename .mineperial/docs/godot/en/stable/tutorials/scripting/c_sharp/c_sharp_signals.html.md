**C# signals**  
*Godot Engine – Stable Documentation*  

Signals in Godot are a way for one object to notify another that something has happened.  
In C# they are implemented as **events**, which is the idiomatic .NET way of representing
the observer pattern. The rest of this document explains how to declare, emit, connect,
and use signals from C# scripts in Godot.

---

## 1.  What is a Signal?

* A signal is an event that an object can **emit**.
* Other objects can **connect** to that signal and be notified when it fires.
* In GDScript signals look like this:

```gdscript
signal my_signal
```

In C# you use the `event` keyword and the `Signal` helper types that Godot
provides.

---

## 2.  Declaring a Signal in C#

You can declare a signal in a class that inherits from `Godot.Object` (or any
Node). There are two common ways to do this:

| Approach | Syntax | Notes |
|----------|--------|-------|
| **Delegate + event** | ```csharp<br>public delegate void MySignalHandler(int value);<br>public event MySignalHandler OnMySignal;``` | Classic .NET style. |
| **SignalName + Signal** | ```csharp<br>private static readonly Godot.Signal< int > _mySignal = new Godot.Signal< int >();<br>public Godot.Signal< int > MySignal => _mySignal;``` | Uses Godot’s `Signal<T>` class; allows connection via the `Connect` method. |

The preferred way in Godot 4.x is to use the `Signal` helper, because it integrates
more cleanly with the editor and with Godot’s built‑in signal inspector.

### Example: A simple counter signal

```csharp
using Godot;

public partial class Counter : Node
{
    public Godot.Signal< int > ValueChanged = new Godot.Signal< int >();

    private int _value;
    public int Value
    {
        get => _value;
        set
        {
            if (_value != value)
            {
                _value = value;
                ValueChanged.Emit(_value); // emit the signal
            }
        }
    }
}
```

---

## 3.  Connecting Signals

You can connect a signal either from **the editor** or **in code**.

### 3.1  Connecting from the Editor

1. Select the node that emits the signal.  
2. In the **Node** tab, click the **Signals** pane.  
3. Double‑click the signal you want to connect.  
4. In the dialog, choose the target node and the method to call.

When you click **Connect**, Godot creates a method stub in the target script
(e.g. `OnCounterValueChanged(int value)`).

### 3.2  Connecting from Code

```csharp
public override void _Ready()
{
    var counter = GetNode<Counter>("../Counter");
    // Using delegate syntax
    counter.ValueChanged.Connect(value => GD.Print($"New value: {value}"));
    // Or using a named method
    counter.ValueChanged.Connect(OnCounterValueChanged);
}

private void OnCounterValueChanged(int newValue)
{
    GD.Print($"Received signal: {newValue}");
}
```

*The `Connect` method returns a `ConnectResult` that can be used to check whether
the connection succeeded.*

---

## 4.  Emitting Signals

A signal is emitted by calling `Emit` on the signal instance:

```csharp
ValueChanged.Emit(_value);
```

If you’re using the delegate+event style, simply invoke the event:

```csharp
OnMySignal?.Invoke(_value);
```

---

## 5.  Disconnecting Signals

To disconnect a signal you can call `Disconnect`:

```csharp
counter.ValueChanged.Disconnect(OnCounterValueChanged);
```

If you used a lambda expression, you’ll need to keep a reference to the
callback to disconnect it.

---

## 6.  Custom Signals

Godot lets you define your own signals in C# and expose them to the editor
by adding the `[Signal]` attribute.

```csharp
[Signal] public delegate void MyCustomSignal();

public partial class MyNode : Node
{
    // Emits the signal
    public void DoSomething()
    {
        EmitSignal(nameof(MyCustomSignal));
    }
}
```

The attribute makes the signal appear in the editor’s signal list, and you can
connect to it there just like built‑in signals.

---

## 7.  Practical Example

Below is a simple “Button + Counter” scene that demonstrates emitting and
connecting a signal in C#.

### 7.1  Counter.cs

```csharp
using Godot;

public partial class Counter : Node
{
    [Signal] public delegate void ValueChanged(int newValue);

    private int _value;
    public int Value
    {
        get => _value;
        set
        {
            if (_value != value)
            {
                _value = value;
                EmitSignal(nameof(ValueChanged), _value);
            }
        }
    }
}
```

### 7.2  Button.cs

```csharp
using Godot;

public partial class Button : Button
{
    public override void _Ready()
    {
        var counter = GetNode<Counter>("../Counter");
        counter.Connect("value_changed", Callable.From<int>(OnValueChanged));
    }

    private void OnValueChanged(int newValue)
    {
        Text = $"Count: {newValue}";
    }
}
```

### 7.3  Scene Tree

```
Scene
 ├─ Counter
 └─ Button
```

Run the scene, click the button to increase the counter, and watch the button text update via the signal.

---

## 8.  Summary

* Signals in C# are built on top of .NET events.  
* Declare a signal with a `Signal<T>` or `[Signal]` attribute.  
* Emit signals with `EmitSignal` or the `Signal<T>.Emit` method.  
* Connect signals in the editor or via `Connect` in code.  
* Disconnect with `Disconnect`.  

These patterns let you write clean, decoupled Godot code that benefits from the
type safety and tooling of C#.