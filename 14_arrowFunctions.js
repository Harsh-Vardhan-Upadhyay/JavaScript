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