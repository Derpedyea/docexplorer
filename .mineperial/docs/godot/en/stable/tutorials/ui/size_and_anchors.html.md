**Size and anchors** – Godot Engine Documentation (stable)  
================================================================

This page explains how Godot’s **Control** nodes use **anchors** and **rect** properties to make user interfaces (UIs) adapt to different screen sizes and resolutions.

> *“If a game was always going to be run on the same device and at the same resolution, positioning controls would be a simple matter of setting the position and size of each one of them. Unfortunately …”* – Godot docs

---

### 1.  Why anchors matter
| Problem | Traditional fixed layout | Anchor‑based layout |
|---------|--------------------------|---------------------|
| Multi‑device support | Hard‑coded pixel values | Responsive to parent size |
| Window resizing | Widgets may overlap or leave gaps | Widgets maintain relative position & size |

Anchors let each **Control** node stretch and position itself according to its **parent**’s size and the anchor offsets you specify.

---

### 2.  Control node rectangle properties

| Property | Description | Typical use |
|----------|-------------|-------------|
| `rect_position` | Top‑left corner of the node relative to the parent (in pixels). | When you want to move a widget. |
| `rect_size` | Width and height of the node (in pixels). | When you want a widget to have an explicit size. |
| `rect_min_size` | Minimum size allowed for the node. | Prevents a node from shrinking below a usable size. |
| `rect_scale` | Scale factor for the node. | Rarely used in UI, mostly for 2D nodes. |

> **Tip:** `rect_position` and `rect_size` are **not** automatically updated when the parent changes size unless you use anchors.

---

### 3.  Anchors

Each `Control` node has four anchor values: **left, top, right, bottom**. They are normalized values from `0.0` to `1.0` representing a fraction of the parent’s size.

* `anchor_left` and `anchor_top` – position the node relative to the **left** and **top** edges.  
* `anchor_right` and `anchor_bottom` – position the node relative to the **right** and **bottom** edges.

When you set an anchor to the same value as its counterpart, the node will **stick** to that edge.  
When you set anchors on opposite sides (e.g., left = 0.0 and right = 1.0), the node will **stretch** horizontally (or vertically).

#### 3.1  Anchor presets

Godot offers preset buttons in the inspector for common anchor combinations:

| Preset | Meaning |
|--------|---------|
| `Top‑Left` | Anchors at (0,0), size fixed |
| `Top‑Right` | Anchors at (1,0), size fixed |
| `Bottom‑Left` | Anchors at (0,1), size fixed |
| `Bottom‑Right` | Anchors at (1,1), size fixed |
| `Full Rect` | Anchors (0,0,1,1) → stretch to fill parent |
| `Horizontal Center` | Anchors top and bottom at 0.5 → centered vertically |
| `Vertical Center` | Anchors left and right at 0.5 → centered horizontally |
| `Center` | All four anchors at 0.5 → centered and stretchable |

You can also **manually** set the values in the inspector or via code:

```gdscript
var button = $Button
button.anchor_left = 0.0
button.anchor_top = 0.0
button.anchor_right = 0.5   # stretches to half width
button.anchor_bottom = 0.5  # stretches to half height
```

---

### 4.  Margins

The **margin** properties (`margin_left`, `margin_top`, `margin_right`, `margin_bottom`) specify the distance (in pixels) between the node’s rectangle and its anchors.  
When you move a node by changing its margins, you do *not* need to modify the anchor values.

```gdscript
# Move a button 10 pixels from the left edge
button.margin_left = 10

# Move a node 20 pixels from the top edge
button.margin_top = 20
```

Margins are especially handy for adding padding or fine‑tuning placement inside a stretched layout.

---

### 5.  Using `RectMinSize`

`rect_min_size` is the smallest size the node can shrink to. If you set anchors that would normally allow a node to shrink, this property will **prevent** that:

```gdscript
button.rect_min_size = Vector2(120, 48)  # button will never get smaller
```

---

### 6.  Common patterns

#### 6.1  Centering a control

```gdscript
# Center horizontally and vertically
button.anchor_left = 0.5
button.anchor_right = 0.5
button.margin_left = -button.rect_size.x / 2
button.margin_right = button.rect_size.x / 2
```

Or use the preset “Center”.

#### 6.2  Full‑screen background

```gdscript
background.anchor_left = 0.0
background.anchor_top = 0.0
background.anchor_right = 1.0
background.anchor_bottom = 1.0
background.margin_left = background.margin_top = 0
background.margin_right = background.margin_bottom = 0
```

#### 6.3  Bottom‑right button

```gdscript
button.anchor_left = 1.0
button.anchor_top = 1.0
button.anchor_right = 1.0
button.anchor_bottom = 1.0
button.margin_left = -button.rect_size.x - 16  # 16px from right
button.margin_top = -button.rect_size.y - 16  # 16px from bottom
```

---

### 7.  Responsiveness checklist

| Check | What to do |
|-------|------------|
| **Stretching** | Set opposite anchors (left+right or top+bottom) to allow the node to grow. |
| **Fixed size** | Keep opposite anchors equal and set `rect_size`. |
| **Padding** | Use margins to keep a buffer from edges. |
| **Minimum size** | Use `rect_min_size` if you want a minimum dimension. |
| **Centering** | Set both anchors to 0.5 and adjust margins. |

---

### 8.  Summary

* Anchors give you a **percentage‑based** way to position UI elements.
* Margins allow fine‑grained pixel adjustments on top of anchors.
* Combine anchors and margins for fully responsive layouts.
* Use `rect_min_size` to enforce usability.

> **Tip:** When switching between resolutions, check that the UI still looks good on both small and large screens. Use the **Layout** button in the editor to preview different anchor/margin setups.

--- 

**Further reading**

* [Using Containers](../gui_containers.html) – layout containers that manage anchors automatically.  
* [Control Node Reference](../gui/2d/controls/control.html) – full list of properties.  

---