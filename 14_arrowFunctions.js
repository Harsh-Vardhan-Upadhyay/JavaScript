const user = {
    username: "Harsh", // Property of the object
    fees: 999, // Another property of the object

    // Method inside the object using `this` to reference the object itself
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`); // Accessing `username` using `this`
        console.log(this); // Logs the `user` object itself because `this` refers to the current object
    }
};

// Calling the method the first time
user.welcomeMessage(); // `this` refers to the `user` object

// Updating the `username` property of the `user` object
user.username = "New Harsh"; 

// Calling the method again after modifying the `username`
user.welcomeMessage(); // `this` still refers to the `user` object, but with the updated `username`

// This logs the global `this` context (or `globalThis` in modern JavaScript) outside any function/object.
// It depends on the environment: 
// 1. In the browser, it refers to the `window` object.
// 2. In Node.js, it refers to an empty object `{}` in strict mode or `global` in non-strict mode.
console.log(this); 



function one() {
    let username = "Harsh"; // A local variable declared with 'let', scoped only to this function. 
                            // It is not attached to the 'this' context or any object.

    console.log(this.username); // This will log 'undefined' because `one` is a standalone function, 
                                // and `this` does not have a `username` property.
                                // In this context, `this` refers to:
                                //   - The global object (`window` in browsers, `global` in Node.js) in non-strict mode.
                                //   - `undefined` in strict mode.

    console.log(this); // Logs the value of `this` in the current context.
                       // In non-strict mode:
                       //   - In the browser: `this` refers to the global `window` object.
                       //   - In Node.js: `this` refers to the global object.
                       // In strict mode, `this` in a standalone function is `undefined`.
}

one(); // Invokes the function in the global context.



// Define an arrow function named `chai`
const chai = () => {
    // Declare a local variable `userName` and assign it the value "Harsh Vardhan"
    let userName = "Harsh Vardhan";

    // Attempt to log `this.userName` to the console
    // NOTE: In arrow functions, `this` does NOT refer to the function itself or its scope.
    // Instead, it refers to the `this` value of the enclosing lexical scope.
    // Since there is no `userName` in the global `this` (or `window` in browsers), this will log `undefined`.
    console.log(this.userName);
};

// Invoke the `chai` function
chai(); 
// Output: `undefined`
// Explanation: `this` inside the arrow function refers to the outer (global) context, 
// and there is no `userName` defined as a property of the global object (`this`).


// Define an arrow function `addTwo` that takes two parameters `num1` and `num2`
const addTwo = (num1, num2) => {
    // Return the sum of `num1` and `num2`
    return num1 + num2;
};

// Invoke the `addTwo` function with arguments `1` and `2`
console.log(addTwo(1, 2)); 
// Output: `3`
// Explanation: The function computes 1 + 2 and returns 3, which is logged to the console.