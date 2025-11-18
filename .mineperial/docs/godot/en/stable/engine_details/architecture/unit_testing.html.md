**Unit testing**  
*(Godot Engine – stable documentation)*  

---

## Overview

Godot’s core is written in C++ and the engine exposes a simple unit‑testing facility that is tightly coupled to the C++ source tree.  
The tests are written using the **doctest** framework (the same library that powers the editor’s internal tests).  This makes it possible to:

* write tests **next to the production code** (in the same directory as the class you want to test);
* run them from the command line or from inside the editor;
* integrate them with continuous‑integration pipelines.

All tests are compiled into the editor or headless build and run automatically when the `--run-tests` flag is passed.

> ⚠️  Unit tests are only available for **C++** modules and not for GDScript or C#.

---

## Adding doctest to your module

1. **Create a test directory** inside your module, e.g. `src/test`  
2. Add a `CMakeLists.txt` (or `SConstruct` for SCons) that compiles the test files as a **stand‑alone executable**:

```cmake
# src/test/CMakeLists.txt
add_executable(my_module_tests
    my_module_test.cpp
    # add more *.cpp test sources here
)
target_link_libraries(my_module_tests
    PRIVATE doctest
    PRIVATE godot_shared # or the module’s static library
)
```

3. Add the **doctest header** to the project:

```cpp
#include "doctest.h"
```

4. Write test cases using the `TEST_CASE` macro:

```cpp
#include "godot_cpp/classes/array.hpp"
#include "doctest.h"

using namespace godot;

TEST_CASE("Array push_back works") {
    Array arr;
    arr.push_back(42);
    REQUIRE(arr.size() == 1);
    REQUIRE(arr[0] == 42);
}
```

---

## Test Suites and Tags

`doctest` allows grouping of tests with **tags** (`[unit]`, `[integration]`, etc.).  In Godot these tags are used to filter tests when running them:

```cpp
TEST_CASE("Vector2 operations", "[Vector2]") {
    Vector2 a(1, 2);
    Vector2 b(3, 4);
    REQUIRE((a + b) == Vector2(4, 6));
}
```

Run all tests: `godot --run-tests`  
Run only tagged tests: `godot --run-tests --tags=[Vector2]`

---

## Running tests

* **From the editor** – open the **Debug → Run Unit Tests** menu.  
* **Headless** – use the command line:

```bash
godot --headless --run-tests
```

The output is a plain text report that can be parsed by CI tools.  Example:

```
Testing 5 test cases...
✓ 1 passed
✓ 2 passed
✓ 3 passed
✓ 4 passed
✓ 5 passed

All tests passed.
```

---

## Integration with CI

Add a test job to your CI pipeline (e.g. GitHub Actions):

```yaml
test:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - name: Build Godot
      run: ./scons platform=x11 -j4
    - name: Run unit tests
      run: ./bin/godot.x11.tools.64 --headless --run-tests
```

You can also enable **coverage** by compiling with `--coverage` and using a tool such as `lcov`.

---

## Tips & Gotchas

| Topic | Note |
|-------|------|
| **Static vs. dynamic** | Tests should not depend on external resources (e.g. file system); keep them deterministic. |
| **Memory leaks** | Run tests with Valgrind (`valgrind --leak-check=full`) to catch leaks in production code. |
| **Testing signals** | Use `Object::connect()` in the test to observe emitted signals. |
| **Multithreading** | `doctest` is not thread‑safe; run tests sequentially or use `DOCTEST_THREADSAFE` flag if you need parallelism. |

---

## Further Reading

* [Godot Engine source repository – testing folder](https://github.com/godotengine/godot/tree/master/tests)  
* [doctest documentation](https://github.com/onqtam/doctest)  

---

### Summary

* Godot’s unit testing harness is built on **doctest**.  
* Tests live alongside C++ source files and are compiled into a headless build.  
* They can be executed from the editor or command line and easily integrated into CI pipelines.  

Happy testing!