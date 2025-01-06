// Memory Creation Phase:
// - `val1` is allocated memory and initialized with `undefined`.
// - `val2` is allocated memory and initialized with `undefined`.
// - `addNumber` is stored in memory with its full function definition.
// - `total1` and `total2` are allocated memory and initialized with `undefined`.
// - `total` does not exist yet (it will be created dynamically during function execution).

let val1 = 10; 
// Execution Phase: `val1` is now assigned the value `10`.

let val2 = 5; 
// Execution Phase: `val2` is now assigned the value `5`.

function addNumber(num1, num2) {
    // Memory Creation for Function Execution Context:
    // - `num1` and `num2` are allocated memory and initialized with the passed arguments.
    // - `total` is created during the execution phase (not declared explicitly, becomes a global variable).

    total = num1 + num2; 
    // Execution Phase: `total` is calculated as `num1 + num2` and stored as a global variable.

    return total; 
    // Execution Phase: Returns the value of `total` to the caller.
}

// Memory Creation Phase:
// - `total1` is initialized as `undefined` in the global context.

let total1 = addNumber(val1, val2); 
// Execution Phase:
// - `addNumber` is called with `val1 = 10` and `val2 = 5`.
// - Inside `addNumber`:
//     - `num1` = 10, `num2` = 5
//     - `total` = 10 + 5 = 15 (stored as a global variable).
// - The function returns `15`, which is assigned to `total1`.
// Once the process is complete this variable envirnoment is deleted 

// Memory Creation Phase:
// - `total2` is initialized as `undefined` in the global context.

let total2 = addNumber(10, 2); 
// Execution Phase:
// - `addNumber` is called again with `num1 = 10` and `num2 = 2`.
// - Inside `addNumber`:
//     - `num1` = 10, `num2` = 2
//     - `total` = 10 + 2 = 12 (overwrites the global `total` variable).
// - The function returns `12`, which is assigned to `total2`.



//----------------------------- Call Stacks -----------------------------

