**FastNoiseLite** – Godot Engine (stable) documentation  
========================================================

> *FastNoiseLite* is a lightweight, single‑header noise generation library that is wrapped by Godot’s `FastNoiseLite` class.  It can produce a wide range of noise types (Perlin, Simplex, Voronoi, etc.) with many tunable parameters.  
> 
> This reference page documents the API surface exposed to Godot users.

---

### 1. Class hierarchy

```
Object
 └─ RefCounted
    └─ Resource
       └─ Noise
          └─ FastNoiseLite
```

---

### 2. Description

The class generates noise using the FastNoiseLite library.  It provides a GDScript‑friendly API that mirrors the C++ library’s functionality.  Noise can be sampled in 1‑, 2‑, 3‑, or 4‑dimensional space and is useful for terrain generation, procedural textures, and other stochastic effects.

---

### 3. Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `seed` | `int` | `0` | Random seed used by the noise generator. |
| `frequency` | `float` | `0.01` | Frequency of the noise. Higher values produce more rapid changes. |
| `lacunarity` | `float` | `2.0` | Lacunarity used in octave generation. |
| `gain` | `float` | `0.5` | Gain used in octave generation. |
| `octave_count` | `int` | `1` | Number of octaves to use. |
| `noise_type` | `int` | `Noise::TYPE_PERLIN` | The type of noise to generate. |
| `cellular_distance_function` | `int` | `Noise::CELLULAR_DISTANCE_EUCLIDEAN` | Distance function for cellular noise. |
| `cellular_return_type` | `int` | `Noise::CELLULAR_RETURN_DISTANCE` | Return type for cellular noise. |
| `cellular_jitter` | `float` | `0.5` | Jitter factor for cellular noise. |
| `fractal_type` | `int` | `Noise::FRACTAL_BILLOW` | Fractal type for fractal noise. |
| `cellular_resolution` | `int` | `16` | Cell resolution for cellular noise. |
| `noise_interpolation` | `int` | `Noise::INTERPOLATION_LINEAR` | Interpolation method used. |
| `periodicity` | `Vector3` | `Vector3(0,0,0)` | Periodicity vector. |

> **Note**: All integer enumerations have a corresponding `*_get_*` and `*_set_*` pair (e.g. `get_noise_type()` / `set_noise_type()`).

---

### 4. Methods

#### 4.1 Basic noise generation

```gdscript
func get_noise_1d(x: float) -> float
func get_noise_2d(x: float, y: float) -> float
func get_noise_3d(x: float, y: float, z: float) -> float
func get_noise_4d(x: float, y: float, z: float, w: float) -> float
```

*Returns a noise value in the range `[-1, 1]`.*

#### 4.2 Cell / simplex / value noise

```gdscript
func get_noise_2d_cellular(x: float, y: float) -> float
func get_noise_3d_cellular(x: float, y: float, z: float) -> float
func get_noise_2d_simplex(x: float, y: float) -> float
func get_noise_3d_simplex(x: float, y: float, z: float) -> float
func get_noise_2d_perlin(x: float, y: float) -> float
func get_noise_3d_perlin(x: float, y: float, z: float) -> float
```

#### 4.3 Fractal noise

```gdscript
func get_noise_2d_fractal(x: float, y: float) -> float
func get_noise_3d_fractal(x: float, y: float, z: float) -> float
```

#### 4.4 Utility helpers

```gdscript
func set_seed(seed: int) -> void
func get_seed() -> int
func set_frequency(freq: float) -> void
func get_frequency() -> float
func set_noise_type(ntype: int) -> void
func get_noise_type() -> int
# … (similar setters/getters for all properties)
```

---

### 5. Enumerations

```gdscript
enum NoiseType {
    TYPE_PERLIN,
    TYPE_OPEN_SIMPLEX,
    TYPE_CELLULAR,
    TYPE_VALUE,
    TYPE_SIMPLEX,
    TYPE_SIMPLEX2,
    TYPE_VORONOI
}

enum CellularDistanceFunction {
    CELLULAR_DISTANCE_EUCLIDEAN,
    CELLULAR_DISTANCE_EUCLIDEAN_SQ,
    CELLULAR_DISTANCE_MANHATTAN,
    CELLULAR_DISTANCE_MAX
}

enum CellularReturnType {
    CELLULAR_RETURN_DISTANCE,
    CELLULAR_RETURN_DISTANCE2,
    CELLULAR_RETURN_VALUE,
    CELLULAR_RETURN_DISTANCE2_ADD
}

enum FractalType {
    FRACTAL_BILLOW,
    FRACTAL_RIDGED_MULTI,
    FRACTAL_FBM,
    FRACTAL_MULTI,
    FRACTAL_HYBRID_MULTI
}

enum Interpolation {
    INTERPOLATION_LINEAR,
    INTERPOLATION_CUBIC,
    INTERPOLATION_QUINTIC
}
```

---

### 6. Example: Using `FastNoiseLite` in GDScript

```gdscript
var noise = FastNoiseLite.new()
noise.seed = 1234
noise.frequency = 0.02
noise.octave_count = 3
noise.fractal_type = FastNoiseLite.FRACTAL_FBM

func _ready():
    var value = noise.get_noise_2d(10.0, 20.0)
    print("Noise value:", value)
```

> You can also store the `FastNoiseLite` resource in a `.tres` file and reuse it across scenes.

---

### 7. Related Resources

* **Noise** – Base class for all noise generators.  
* **CellularNoise** – A subclass that exposes extra cellular‑specific settings.  
* **OpenSimplexNoise** – Another Godot noise type for comparison.

---

**Reference**  
For the full API list, including all setters/getters and advanced properties, see the official Godot class reference page:  
<https://docs.godotengine.org/en/stable/classes/class_fastnoiselite.html>