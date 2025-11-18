**Using 3D transforms**

This page is a technical guide on how Godot 3D nodes handle transformations – translation, rotation and scale – and how you can manipulate them in code or with the editor.  
Below is a cleaned‑up markdown version of the content.

---

## 1. Introduction

Working with 3‑D rotations can be confusing at first, especially if you come from a 2‑D background where rotation is usually expressed as a single angle.  
In 3‑D there are three axes to rotate around (X, Y, Z) and the order of those rotations matters. Godot represents a 3‑D transform as a **Transform3D** (formerly just `Transform`) object that contains:

* a **Basis** – a 3x3 rotation (and optionally scale) matrix  
* a **Vector3** – a translation component

Together they define the global position and orientation of a node.

---

## 2. Basic terminology

| Term | What it means |
|------|---------------|
| **Origin** | The 3‑D point where the node is positioned (translation). |
| **Basis** | A 3x3 matrix of three *basis vectors* (x‑, y‑, z‑axis). It encodes rotation (and scale if non‑uniform). |
| **Transform3D** | A combination of a `Basis` + a `Vector3` translation. |
| **Euler angles** | Three angles (pitch, yaw, roll) that can be used to construct a Basis. |
| **Quaternion** | A compact representation of rotation that avoids gimbal lock. |

---

## 3. Working with transforms in the editor

1. Select a node in the scene tree.  
2. In the **Inspector**, you’ll find `Transform` (or `Transform3D`).  
3. The **Transform** editor lets you adjust:
   * **Position** – X, Y, Z translation
   * **Rotation** – Euler angles in degrees
   * **Scale** – X, Y, Z scale

You can also use the 3‑D viewport gizmo to move, rotate or scale the node interactively.

---

## 4. Using transforms in GDScript

### 4.1 Getting a node’s transform

```gdscript
var mesh = $MeshInstance
var global_transform = mesh.global_transform   # Transform3D of the node
```

### 4.2 Changing translation

```gdscript
# Move 1 unit forward along the node’s local Z‑axis
mesh.translate(Vector3(0, 0, 1))
```

### 4.3 Rotating

You can rotate using Euler angles or a quaternion:

```gdscript
# Rotate 90° around Y
mesh.rotate_y(deg2rad(90))

# Or using a quaternion
var rot = Quat(Vector3(0, 1, 0), deg2rad(90))
mesh.rotate_object_local(rot)
```

### 4.4 Re‑assigning the entire transform

```gdscript
var new_basis = Basis(Vector3(1,0,0), Vector3(0,1,0), Vector3(0,0,1))
var new_transform = Transform3D(new_basis, Vector3(2, 0, 3))
mesh.global_transform = new_transform
```

---

## 5. Transform hierarchies

A node’s global transform is the product of its own transform and all its parent transforms:

```
global = parent.global * local
```

Because of this, changing a parent’s transform automatically updates the world position/rotation of its children.

---

## 6. Common pitfalls

| Issue | Cause | Fix |
|-------|-------|-----|
| “Gimbal lock” | Using Euler angles with large rotations | Use `Quaternions` or `Basis.slerp()` for smooth interpolation |
| Incorrect rotation order | Confusing pitch‑yaw‑roll order | Check the node’s `rotation` property – it uses Yaw‑Pitch‑Roll (Y, X, Z) |
| Scale affecting rotation | Non‑uniform scale in the Basis | Keep scale separate in the `scale` property or use `Transform3D.orthonormalized()` |

---

## 7. Example: Making an object orbit a point

```gdscript
var orbit_radius = 5
var orbit_speed = 1

func _process(delta):
    var time = OS.get_ticks_msec() / 1000.0
    var angle = time * orbit_speed
    var pos = Vector3(orbit_radius * cos(angle), 0, orbit_radius * sin(angle))
    $Target.global_transform.origin = pos
```

---

## 8. Further reading

* [Transform](https://docs.godotengine.org/en/stable/classes/class_transform3d.html) – Godot’s Transform3D class reference.  
* [Spatial](https://docs.godotengine.org/en/stable/classes/class_spatial.html) – Node that uses transforms.  
* [Camera](https://docs.godotengine.org/en/stable/classes/class_camera3d.html) – Understanding the view transform.  

---