**Built‑in Shader Functions**  
*Godot Engine (stable) – reference documentation*

---

### Overview  

Godot’s shading language provides a large set of built‑in functions that closely follow the GLSL ES 3.0 specification. These functions are available in both vertex and fragment shaders and can be called directly in your shader code. The list below is grouped by functionality and contains a short description for each function.  

> **Note** – The full function list is very long; see the official Godot documentation for the complete reference.  

---

## 1. Arithmetic Functions  

| Function | Parameters | Returns | Example |
|----------|------------|---------|---------|
| `abs(x)` | `x` – scalar or vector | `x` with all components absolute | `vec3 c = abs(color);` |
| `sign(x)` | `x` – scalar or vector | Sign of `x` (−1, 0, 1) | `float s = sign(v);` |
| `min(a, b)` | `a`, `b` – scalars or vectors | Element‑wise minimum | `float m = min(a, b);` |
| `max(a, b)` | `a`, `b` – scalars or vectors | Element‑wise maximum | `float m = max(a, b);` |
| `clamp(x, low, high)` | `x`, `low`, `high` | `x` clamped between `low` and `high` | `float c = clamp(value, 0.0, 1.0);` |
| `mix(a, b, t)` | `a`, `b` – scalars or vectors, `t` – scalar | Linear interpolation | `vec3 col = mix(colA, colB, 0.5);` |
| `step(edge, x)` | `edge`, `x` | Returns 0.0 or 1.0 depending on `x` | `float s = step(0.5, x);` |
| `smoothstep(edge0, edge1, x)` | `edge0`, `edge1`, `x` | Smooth interpolation | `float s = smoothstep(0.0, 1.0, x);` |

---

## 2. Trigonometric Functions  

| Function | Parameters | Returns | Example |
|----------|------------|---------|---------|
| `sin(x)` | `x` – radians | Sine of `x` | `float s = sin(angle);` |
| `cos(x)` | `x` | Cosine of `x` | `float c = cos(angle);` |
| `tan(x)` | `x` | Tangent of `x` | `float t = tan(angle);` |
| `asin(x)` | `x` | Arc‑sine of `x` | `float a = asin(value);` |
| `acos(x)` | `x` | Arc‑cosine of `x` | `float a = acos(value);` |
| `atan(y, x)` | `y`, `x` | Arc‑tangent of `y/x` | `float a = atan(v.y, v.x);` |
| `atan(y)` | `y` | Arc‑tangent of `y` | `float a = atan(v.y);` |

---

## 3. Exponential & Logarithmic Functions  

| Function | Parameters | Returns | Example |
|----------|------------|---------|---------|
| `exp(x)` | `x` | `e^x` | `float e = exp(val);` |
| `log(x)` | `x` | Natural log of `x` | `float l = log(val);` |
| `pow(x, y)` | `x`, `y` | `x^y` | `float p = pow(base, exp);` |
| `sqrt(x)` | `x` | Square root | `float r = sqrt(val);` |
| `inversesqrt(x)` | `x` | `1/√x` | `float r = inversesqrt(val);` |

---

## 4. Rounding Functions  

| Function | Parameters | Returns | Example |
|----------|------------|---------|---------|
| `floor(x)` | `x` | Largest integer ≤ `x` | `float f = floor(v);` |
| `ceil(x)` | `x` | Smallest integer ≥ `x` | `float c = ceil(v);` |
| `fract(x)` | `x` | Fractional part of `x` | `float f = fract(v);` |
| `round(x)` | `x` | Nearest integer | `float r = round(v);` |
| `roundEven(x)` | `x` | Nearest even integer | `float r = roundEven(v);` |
| `trunc(x)` | `x` | Integer part toward zero | `float t = trunc(v);` |

---

## 5. Miscellaneous Functions  

| Function | Parameters | Returns | Example |
|----------|------------|---------|---------|
| `length(v)` | `v` – vector | Length of vector | `float len = length(vec3(1.0));` |
| `distance(a, b)` | `a`, `b` – vectors | Euclidean distance | `float d = distance(pos1, pos2);` |
| `normalize(v)` | `v` – vector | Unit vector | `vec3 n = normalize(v);` |
| `dot(a, b)` | `a`, `b` – vectors | Dot product | `float d = dot(a, b);` |
| `cross(a, b)` | `a`, `b` – 3‑vectors | Cross product | `vec3 c = cross(a, b);` |
| `faceforward(N, I, Nref)` | `N`, `I`, `Nref` | `N` oriented against `I` | `vec3 f = faceforward(N, I, Nref);` |
| `reflect(I, N)` | `I`, `N` | Reflected direction | `vec3 r = reflect(I, N);` |
| `refract(I, N, eta)` | `I`, `N`, `eta` | Refracted direction | `vec3 r = refract(I, N, eta);` |
| `matrixCompMult(a, b)` | `a`, `b` – matrices | Element‑wise multiply | `mat3 m = matrixCompMult(a, b);` |
| `transpose(m)` | `m` – matrix | Transposed matrix | `mat4 t = transpose(m);` |
| `determinant(m)` | `m` – matrix | Determinant | `float d = determinant(m);` |

---

## 6. Texture Functions  

| Function | Parameters | Returns | Example |
|----------|------------|---------|---------|
| `texture(sampler, coord)` | `sampler` – sampler2D/samplerCube, `coord` – vec2/vec3 | Sampled color | `vec4 col = texture(tex, uv);` |
| `textureLod(sampler, coord, lod)` | `sampler`, `coord`, `lod` | Sample with explicit LOD | `vec4 col = textureLod(tex, uv, 2.0);` |
| `textureGrad(sampler, coord, dx, dy)` | `sampler`, `coord`, `dx`, `dy` | Sample with explicit gradients | `vec4 col = textureGrad(tex, uv, dPdx, dPdy);` |
| `textureProj(sampler, coord)` | `sampler`, `coord` (vec3) | Projective texture lookup | `vec4 col = textureProj(tex, vec3(uv, 1.0));` |
| `textureProjLod(sampler, coord, lod)` | `sampler`, `coord`, `lod` | Projective lookup with LOD | `vec4 col = textureProjLod(tex, vec3(uv, 1.0), 2.0);` |

---

## 7. Utility Functions  

| Function | Parameters | Returns | Example |
|----------|------------|---------|---------|
| `step(edge, x)` | `edge`, `x` | 0.0 or 1.0 | `float s = step(0.5, x);` |
| `smoothstep(edge0, edge1, x)` | `edge0`, `edge1`, `x` | Smooth transition | `float s = smoothstep(0.0, 1.0, x);` |
| `mix(a, b, t)` | `a`, `b`, `t` | Linear blend | `vec3 col = mix(colA, colB, t);` |
| `step(edge, x)` | `edge`, `x` | Binary step | `float s = step(edge, x);` |

---

### Getting Started

1. **Declare a shader**  
   ```glsl
   shader_type spatial;
   void fragment() {
       ALBEDO = vec3(1.0);
   }
   ```

2. **Use built‑in functions**  
   ```glsl
   vec3 n = normalize(normal);
   float d = dot(view, n);
   vec4 color = texture(albedo_map, UV);
   ```

3. **Explore the full reference** – visit the official Godot documentation for the complete list of shader functions and their overloads.

---

*For a complete, up‑to‑date list of all built‑in functions and their overloads, refer to the official [Godot Engine Shader Reference – Built‑in Functions](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/shader_functions.html).*
