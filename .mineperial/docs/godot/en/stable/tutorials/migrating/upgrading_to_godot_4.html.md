**Upgrading from Godot 3 to Godot 4**

---

### Should I upgrade to Godot 4?

#### Advantages of upgrading  
*(content omitted – see the official Godot documentation for a full list of benefits)*  

#### Disadvantages of upgrading  
*(content omitted – see the official Godot documentation for a full list of drawbacks)*  

#### Caveats of upgrading  
*(content omitted – see the official Godot documentation for a full list of caveats)*  

### Preparing before the upgrade (optional)

*(details omitted – follow the official guide for best‑practice preparation steps)*  

### Running the project upgrade tool

#### Using the Project Manager  
*(details omitted – launch the built‑in upgrade tool via the editor UI)*  

#### Using the command line  
*(details omitted – run the `godot` executable with the `--upgrade` flag)*  

### Fixing the project after running the project upgrade tool

#### Automatically renamed nodes and resources  
*(details omitted – review the renamed items in the editor and update references accordingly)*  

#### Manually renaming methods, properties, signals and constants  
*(details omitted – search your scripts for deprecated identifiers)*  

#### Checking project settings  
*(details omitted – ensure compatibility of project settings with Godot 4)*  

#### Checking Environment settings  
*(details omitted – adjust rendering and physics environment defaults)*  

#### Updating shaders  
*(details omitted – convert deprecated shader syntax to Godot 4 format)*  

#### Updating scripts to take backwards‑incompatible changes into account  
*(details omitted – see the migration guide for script changes)*  

#### ArrayMesh resource compatibility breakage  
*(details omitted – handle any mesh data loss or conversion errors)*  

### List of automatically renamed methods, properties, signals and constants  

*(see the official list in the Godot documentation)*  

### Porting editor settings  

*(details omitted – copy relevant editor settings from Godot 3 to Godot 4)*  

### Updating version control settings  

*(details omitted – update ignore files, commit hooks, etc.)*