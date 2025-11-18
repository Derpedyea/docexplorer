# GDScript grammar

**This is the formal grammar of GDScript written in EBNF, for reference purposes.**

> *Note: The original documentation provides the full EBNF syntax. Below is a concise representation of the grammar in code‑block format.*

```ebnf
// Basic tokens
identifier   = letter , {letter | digit | '_'};
string       = '"' , {any_char_except('"', '\\') | escape_seq} , '"';
number       = digit , {digit} , [ '.' , digit , {digit} ];
operator     = '+' | '-' | '*' | '/' | '==' | '!=' | '<' | '>' | '<=' | '>='
              | '&' | '|' | '&&' | '||' | '!' | '++' | '--' | '+=', '-=',
              '*=', '/=', '%=', '<<=', '>>=';

// Statements
statement    = expr_stmt | declaration | if_stmt | while_stmt | for_stmt
              | return_stmt | break_stmt | continue_stmt | pass_stmt | block;

// Expressions
expr         = assignment | logical_or_expr;
assignment   = identifier , '=' , expr;
logical_or_expr = logical_and_expr , { '||' , logical_and_expr };
logical_and_expr = equality_expr , { '&&' , equality_expr };
equality_expr = relational_expr , { ('==' | '!=') , relational_expr };
relational_expr = additive_expr , { ('<' | '>' | '<=' | '>=') , additive_expr };
additive_expr = multiplicative_expr , { ('+' | '-') , multiplicative_expr };
multiplicative_expr = unary_expr , { ('*' | '/' | '%') , unary_expr };
unary_expr  = ('+' | '-' | '!') , unary_expr | primary_expr;

// Primary
primary_expr = identifier | number | string | '(' , expr , ')' | function_call;
function_call = identifier , '(' , [ expr , { ',' , expr } ] , ')';

// Declarations
declaration = type_spec , identifier , [ '=' , expr ] , ';';
type_spec   = 'int' | 'float' | 'String' | 'bool' | 'Vector2' | 'Vector3' | ...;

// Control flow
if_stmt      = 'if' , expr , ':' , block , [ 'elif' , expr , ':' , block ] , [ 'else' , ':' , block ];
while_stmt   = 'while' , expr , ':' , block;
for_stmt     = 'for' , identifier , 'in' , expr , ':' , block;
return_stmt  = 'return' , [ expr ];
break_stmt   = 'break' ;
continue_stmt= 'continue' ;
pass_stmt    = 'pass' ;
block        = '{' , { statement } , '}';

// ... (additional GDScript-specific syntax such as class definitions, signals, enums, etc.)
```

> **Full grammar details** can be found in the official Godot documentation at:  
> https://docs.godotengine.org/en/stable/engine_details/file_formats/gdscript_grammar.html

---

> *The above EBNF is a condensed illustration. For the complete, up‑to‑date grammar, refer to the official source.*