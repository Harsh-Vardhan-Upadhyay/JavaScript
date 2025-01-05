// Scopes in JavaScript

// Block Scope:
// Variables declared with `let` and `const` have block scope. 
// This means they can only be accessed within the block (e.g., inside the `{}` braces) where they are defined.

let a = 300; // This `a` is declared in the global (or outer) scope.
// It can be accessed anywhere outside the block where a new `a` is defined.

if (true) {
    let a = 10; // This is a new `a`, which is block-scoped to this `if` block.
    // It does not overwrite the `a` in the outer scope (global scope in this case).
    const b = 20; // `b` is also block-scoped and only accessible inside this block.
    var c = 30; // `c` is function-scoped or globally scoped (not block-scoped).

    console.log(a); // ✅ Outputs: 10 (the `a` declared inside this block)
}

// Outside the `if` block:
// The `a` declared inside the block (value: 10) is no longer accessible.
// Instead, the `a` declared in the outer/global scope (value: 300) is used.

console.log(a); // ✅ Outputs: 300 (the `a` from the global scope)

// Trying to access `b` outside the block will throw an error because it is block-scoped.
// console.log(b); // ❌ Uncaught ReferenceError: b is not defined

// `c` is declared with `var`, which does NOT have block scope.
// It is accessible outside the block because it gets hoisted to the function or global scope.
console.log(c); // ✅ Outputs: 30

// Summary of Key Points:
// 1. Variables declared with `let` and `const` are block-scoped. They are limited to the block where they are declared.
// 2. Variables declared with `var` are function-scoped (or global if declared outside a function). They are NOT block-scoped.
// 3. Variables with the same name declared in different scopes (e.g., `let a` inside and outside a block) do NOT interfere with each other. Each exists only in its respective scope.
// 4. Always prefer `let` and `const` over `var` to avoid unexpected behavior due to scope issues.